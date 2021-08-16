import {TagHandler} from '../TagHandler';

export class TagHandlerAudio extends TagHandler {
    tagName(): string {
        return 'audio';
    };

    private static typeMap: any = {
        'netease': {
            'name': '网易云音乐',
            'types': {
                'default': 'song',
                'song': '单曲',
                'playlist': '歌单',
                'album': '专辑',
                'radio': '电台',
                'program': '电台单曲',
            },
            'templates': {
                'default': 'song',
                // 单曲
                'song': '<iframe src="//music.163.com/outchain/player?type=2&id=__AUDIO_VALUE__&auto=0&height=66" frameborder="no" border="0" marginwidth="0" marginheight="0" width="95%" height="86"></iframe>',
                // 歌单
                'playlist': '<iframe src="//music.163.com/outchain/player?type=0&id=__AUDIO_VALUE__&auto=0&height=66" frameborder="no" border="0" marginwidth="0" marginheight="0" width="95%" height="300"></iframe>',
                // 专辑
                'album': '<iframe src="//music.163.com/outchain/player?type=1&id=__AUDIO_VALUE__&auto=0&height=66" frameborder="no" border="0" marginwidth="0" marginheight="0" width="95%" height="300"></iframe>',
                // 电台
                'radio': '<iframe src="//music.163.com/outchain/player?type=4&id=__AUDIO_VALUE__&auto=0&height=66" frameborder="no" border="0" marginwidth="0" marginheight="0" width="95%" height="300"></iframe>',
                // 电台单曲
                'program': '<iframe src="//music.163.com/outchain/player?type=2&id=__AUDIO_VALUE__&auto=0&height=66" frameborder="no" border="0" marginwidth="0" marginheight="0" width="95%" height="86"></iframe>',
            }
        },
    };

    isSelfClose(): boolean {
        return true;
    }

    encodeToHtml(tagLabel: string, arg: string, content: string, forEditor: boolean = false): string | false {
        if (!arg) {
            return '';
        }
        const args = this.splitArgs(arg);
        const type = args.length > 0 ? args[0] : '';
        const value = args.length > 1 ? args[1] : '';
        if (!type || !value || !TagHandlerAudio.typeMap[type]) {
            return `[${tagLabel}=${arg}]`;
        }
        let subtype = args.length > 2 ? args[2] : 'default';
        const typeInfo = TagHandlerAudio.typeMap[type];
        if (forEditor) {
            let subtypeName;
            if (subtype === 'default' || !typeInfo.types[subtype]) {
                subtype = typeInfo.types['default'];
            }
            subtypeName = typeInfo.types[subtype];
            return `<div data-tag="audio" class="audio" data-audio-type="${type}" data-audio-value="${value}" data-audio-subtype="${subtype}">音乐来源：<span class="audio-type">${typeInfo.name}</span><br/>音乐类型：<span class="audio-subtype">${subtypeName}</span><br/>音乐ID：<span class="audio-value">${value}</span></div>`;
        } else {
            let template;
            if (subtype === 'default' || !typeInfo.templates[subtype]) {
                subtype = typeInfo.templates['default'];
            }
            template = typeInfo.templates[subtype];
            return `<div data-tag="audio">${template.replace(/__AUDIO_VALUE__/g, arg)}</div>`;
        }
    }

    decodeFromHtml(element: Element, resolveFun: (node: Nodes, forEditor: boolean, parentStyle: any) => string, forEditor: boolean, parentStyle: any): string | false {
        const type = element.getAttribute('data-audio-type');
        const value = element.getAttribute('data-audio-value');
        if (!type || !value || !TagHandlerAudio.typeMap[type]) {
            return '';
        }
        let subtype = element.getAttribute('data-audio-subtype') || 'default';
        const typeInfo = TagHandlerAudio.typeMap[type];
        if (subtype === 'default' || subtype === typeInfo.types['default'] || !typeInfo.types[subtype]) {
            subtype = ''
        }
        if (subtype) {
            subtype = ';' + subtype;
        }
        return `[audio=${type};${value}${subtype}]`;
    }
}
