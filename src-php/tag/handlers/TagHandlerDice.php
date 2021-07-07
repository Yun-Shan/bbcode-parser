<?php

namespace bbcode_parser;
require_once(dirname(__FILE__) . "/../TagHandler.php");

function dice_expression_to_html($content, &$env) {
    $result = preg_match_all("/((\d*d\d+)|(\d+))|([+\-])/", $content, $matches);
    if (!$result) {
        return false;
    }
    $error = '';
    $diceCount = array_reduce($matches[2], function ($carry, $item) {
        if (!$item) {
            return $carry;
        }
        // 利用php字符串转换数字的规则，可以直接转换不用管'd'后面的内容
        $carry[0] = $carry[0] + max(1, intval($item));
        $pos = strpos($item, 'd');
        $carry[1] = max($carry[1], intval(substr($item, $pos + 1)));
        return $carry;
    }, [0, 0]);
    if ($diceCount[0] > 30) {
        $error .= '(骰子总数量不能超过30)';
    }
    if ($diceCount[1] > 100000) {
        $error .= '(单个骰子不能超过10万面)';
    }
    if ($error) {
        return "<span class=\"dice-prefix\">ROLL : $error</span>";
    }

    // 固定随机数种子，以保证编辑帖子不会影响骰子结果
    {
        // authorId对于主楼应该是楼主id，对于评论应该是评论者id，总之应该是被解析的内容的原始发布者的ID
        $authorId = $env['author_id'];
        $postId = $env['post_id'];
        $commentId = $env['comment_id'];

        if (empty($env['dice'])) {
            $env['dice'] = [];
        }
        if (empty($env['dice']['index'])) {
            $env['dice']['index'] = 1;
        }
        // 骰子序号，用这个保证一楼内的多个骰子结果不相同
        $idx = $env['dice']['index'];

        // 种子拼接格式为：{序号}{帖子ID}{作者ID*评论ID}，保证任意一个变化时都会时整个数字的二进制值发生较大变化
        // 末尾的0参数必须保留，否则可能会被其它地方设置的全局bcscale影响
        $seed = $idx . $postId . bcmul($authorId, $commentId, 0);
        while (bccomp($seed, '2147483648', 0) >= 0) {
            // 溢出32位整型最大值处理，保证在32位机器和64位机器上表现一致
            // 判断时使用2^31(int最大值+1)，溢出计算时使用-2^31(int最小值)
            $seed = bcadd('-2147483648', $seed, 0);
        }
        mt_srand(intval($seed));

        $env['dice']['index'] = $env['dice']['index'] + 1;
    }
    $diceResult = array_reduce($matches[0], function ($carry, $item) {
        switch ($item) {
            case '+':
                $carry[2] = 1;
                return $carry;
            case '-':
                $carry[2] = -1;
                return $carry;
            default:
                $pos = strpos($item, 'd');
                $sign = $carry[2] > 0 ? '+' : '-';
                if ($pos !== false) {
                    // $count 利用php字符串转换数字的规则，可以直接转换不用管'd'后面的内容，当没有count的时候默认为1
                    $count = max(1, intval($item));
                    $max = intval(substr($item, $pos + 1));
                    if ($max <= 0) {
                        return $carry;
                    }
                    $text = '';
                    $sum = 0;
                    for ($i = 0; $i < $count; $i++) {
                        $val = mt_rand(1, $max);
                        if ($carry[0] || $text) {
                            $text .= $sign;
                        }
                        $text .= "d$max($val)";
                        $sum += $val * $carry[2];
                    }
                    $carry[0] .= $text;
                    $carry[1] += $sum;
                } else {
                    $carry[0] .= $sign . $item;
                    $carry[1] += intval($item) * $carry[2];
                }
                return $carry;
        }
    }, ['', 0, 1]);
    // 重置随机数种子，避免因为种子被固定而影响其它功能(不过一是真的有必要吗二是真的有作用吗)
    mt_srand();
    $diceExpression = $diceResult[0];
    $diceSum = $diceResult[1];
    return "<span class=\"dice-prefix\">ROLL : </span><span class=\"dice-expression\">$content</span>=<span class=\"dice-sum-each\">$diceExpression</span>=<span class=\"dice-sum\">$diceSum</span>";
}

class TagHandlerDice extends TagHandler
{
    function tagName() {
        return "dice";
    }

    function encodeToHtml($tagLabel, $arg, $content, &$env) {
        if (!$content) {
            return "";
        }
        // 限制最长500避免对服务器造成压力
        if (strlen($content) < 500 && preg_match("/^((\d{1,7})|(\d{0,7}d\d{1,7}))([+\-]((\d{1,7})|(\d{0,7}d\d{1,7})))*$/", $content)) {
            $diceResult = dice_expression_to_html($content, $env);
            if (!$diceResult) {
                return false;
            }
            return "<div class=\"dice\">$diceResult</div>";
        }
        return false;
    }
}
