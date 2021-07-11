<?php

namespace bbcode_parser;
require_once(dirname(__FILE__) . "/../TagHandler.php");

class TagHandlerNotice extends TagHandler
{
    function tagName() {
        return "notice";
    }

    public function tagAliases(): array {
        return ['feedback', 'essence'];
    }

    public function isSelfClose(): bool {
        return true;
    }

    private static $typeMap = [
        'jutou'   => [
            'imgSrc'       => 'https://gitee.com/nemo1166/img-gallery/raw/master/img/%E5%8F%AF%E9%9C%B2%E5%B8%8C%E5%B0%94_%E7%9C%8B%E4%B9%A6.png',
            'boxClass'     => 'ambox-blue',
            'speech'       => '博士，这几页我先帮你存着。',
            'notification' => '<b>本帖内容含剧透成分。</b>想要享受游戏探索/解谜乐趣的玩家请自行离开。',
        ],
        'predict' => [
            'imgSrc'       => 'https://gitee.com/nemo1166/img-gallery/raw/master/img/9156ab90139c76dbeb7420384c2ac691ab86097f.png',
            'boxClass'     => 'ambox-blue',
            'speech'       => '罗德岛的档案里没有诶...',
            'notification' => '<b>该帖子含推测内容。</b>请以官方消息为准，小心甄别。',
        ],
        'rmt'     => [
            'imgSrc'       => 'https://gitee.com/nemo1166/img-gallery/raw/master/img/20720aaac96bb824570ec92f651ffd7be84370b8.png',
            'boxClass'     => 'ambox-blue',
            'speech'       => '小心钱包（这句话是阿米娅说的）',
            'notification' => '<b>该帖子涉及现实货币交易。</b>请注意资产安全。',
        ],
        'warn'    => [
            'imgSrc'       => 'https://gitee.com/nemo1166/img-gallery/raw/master/img/20210626213733.png',
            'boxClass'     => 'ambox-red',
            'speech'       => '警告！博士你呀快被吊到舰桥上了哦...',
            'notification' => '<b>您的帖子已游走在违规边缘，请及时更改！</b>',
        ],
        'rec'     => [
            'imgSrc'       => 'https://gitee.com/nemo1166/img-gallery/raw/master/img/4945b698209e2e73bc129a9026fc625a78ad8370.png',
            'boxClass'     => 'ambox-violet',
            'speech'       => '这个问题工程部已经知道啦！正在加班加点抢修！',
            'notification' => '<b>所反馈内容已记录</b>，请耐心等待。',
        ],
        'succ'    => [
            'imgSrc'       => 'https://gitee.com/nemo1166/img-gallery/raw/master/img/02b4b87d4412f4a93d2f6d56f6479fd59918a7cc.png',
            'boxClass'     => 'ambox-green',
            'speech'       => '哼哼！这个问题已经解决啦！快称赞一下伟大的可露希尔！',
            'notification' => '<b>所反馈内容已解决</b>，请关注论坛公告。',
        ],
        'fail'    => [
            'imgSrc'       => 'https://gitee.com/nemo1166/img-gallery/raw/master/img/32c0c66fb419b9ff5c8efb5ef967257627f8037d.png',
            'boxClass'     => 'ambox-orange',
            'speech'       => '啊呀...这个问题有点难...什么？伟大的可露希尔怎么可能不会！',
            'notification' => '所反馈内容由于各种原因<i>暂时</i>无法解决，请谅解。',
        ],
        'post'    => [
            'imgSrc'       => 'https://gitee.com/nemo1166/img-gallery/raw/master/img/5a207be77f3457a726782c4c903186f3170d680a.png',
            'boxClass'     => 'ambox-essence',
            'speech'       => '这篇文章写的好棒！要不偷偷的印出来卖钱吧？',
            'notification' => '您的帖子已达到加精标准，感谢您的付出！',
        ],
        'paint'   => [
            'imgSrc'       => 'https://gitee.com/nemo1166/img-gallery/raw/master/img/5a207be77f3457a726782c4c903186f3170d680a.png',
            'boxClass'     => 'ambox-essence',
            'speech'       => '这也太好看啦！能让我拿去观摩一下吗？嗯？不会偷偷卖钱啦！',
            'notification' => '您的帖子已达到加精标准，感谢您的付出！',
        ],
        'rpg'     => [
            'imgSrc'       => 'https://gitee.com/nemo1166/img-gallery/raw/master/img/5a207be77f3457a726782c4c903186f3170d680a.png',
            'boxClass'     => 'ambox-essence',
            'speech'       => '哦！这展开真是出乎意料啊！拍个电影吧！赚钱了我七你三！',
            'notification' => '您的帖子已达到加精标准，感谢您的付出！',
        ],
        'kaoju'   => [
            'imgSrc'       => 'https://gitee.com/nemo1166/img-gallery/raw/master/img/5a207be77f3457a726782c4c903186f3170d680a.png',
            'boxClass'     => 'ambox-essence',
            'speech'       => '什...什么！？这都能让你找出来的！挺不错的嘛！',
            'notification' => '您的帖子已达到加精标准，感谢您的付出！',
        ],
        'gonglve' => [
            'imgSrc'       => 'https://gitee.com/nemo1166/img-gallery/raw/master/img/5a207be77f3457a726782c4c903186f3170d680a.png',
            'boxClass'     => 'ambox-essence',
            'speech'       => '居然比我可露希尔还要厉害...真有你的呀！',
            'notification' => '您的帖子已达到加精标准，感谢您的付出！',
        ],
    ];

    public function __construct() {
        // 拼音兼容
        self::$typeMap['gonglue'] = self::$typeMap['gonglve'];
    }

    function encodeToHtml($tagLabel, $arg, $content, &$env) {
        $attr = self::$typeMap[$arg];
        if (!$attr) {
            return "[notice=$arg]";
        }
        if (function_exists('bbcode_check_and_update_perm')) {
            if (!bbcode_check_and_update_perm($env, 'notice', $arg)) {
                return "[notice=$arg]";
            }
        }
        $boxClass = $attr['boxClass'];
        $imgSrc = $attr['imgSrc'];
        $speech = $attr['speech'];
        $notification = $attr['notification'];
        /** @noinspection HtmlRequiredAltAttribute */
        return "<div class=\"ambox\"><table class=\"$boxClass\"><tbody><tr><td class=\"ambox-image\"><img src=\"$imgSrc\"/></td><td class=\"ambox-notice\"><span class=\"notice-bubble\"><span class=\"notice-bubble-line\"></span><i><b class=\"notice-speech\">$speech</b></i></span><br><span class=\"notice-text\">$notification</span></td></tr></tbody></table></div>";
    }
}
