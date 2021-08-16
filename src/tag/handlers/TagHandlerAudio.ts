import {TagHandler} from '../TagHandler';

export class TagHandlerAudio extends TagHandler {
    tagName(): string {
        return 'audio';
    };

    private static typeMap: any = {
        'netease': {
            'name': '网易云音乐',
            'template': '<iframe src="//music.163.com/outchain/player?type=2&id=__AUDIO_VALUE__&auto=0&height=66" frameborder="no" border="0" marginwidth="0" marginheight="0" width="95%" height="86"></iframe>'
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
        const typeInfo = TagHandlerAudio.typeMap[type];
        if (forEditor) {
            return `<div data-tag="audio" class="audio" data-audio-type="${type}" data-audio-value="${value}">音乐来源：<span class="audio-type">${typeInfo.name}</span><br/>音乐ID：<span class="audio-value">${value}</span></div>`;
        } else {
            return `<div data-tag="audio">${typeInfo.template.replace(/__AUDIO_VALUE__/g, arg)}</div>`;
        }
    }

    decodeFromHtml(element: Element, resolveFun: (node: Nodes, forEditor: boolean, parentStyle: any) => string, forEditor: boolean, parentStyle: any): string | false {
        const type = element.getAttribute('data-audio-type');
        const value = element.getAttribute('data-audio-value');
        if (!type || !value || !TagHandlerAudio.typeMap[type]) {
            return '';
        }
        return `[audio=${type};${value}]`;
    }
}
