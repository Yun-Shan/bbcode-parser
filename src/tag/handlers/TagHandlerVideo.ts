import {TagHandler} from '../TagHandler';

export class TagHandlerVideo extends TagHandler {
    tagName(): string {
        return 'video';
    };

    tagAliases(): string[] {
        return ['bvideo'];
    }

    private static typeMap: any = {
        'bvideo': '<iframe src="//player.bilibili.com/player.html?bvid=__VIDEO_VALUE__&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="95%" height="600"></iframe>'
    };
    private static typeGroupMap: any = {
        'bvideo': {
            'name': 'B站',
            'type': 'bvideo'
        },
    };

    constructor() {
        super();
        // 默认b站视频
        TagHandlerVideo.typeMap['video'] = TagHandlerVideo.typeMap['bvideo'];
        TagHandlerVideo.typeGroupMap['video'] = TagHandlerVideo.typeGroupMap['bvideo'];
    }

    isSelfClose(): boolean {
        return true;
    }

    encodeToHtml(tagLabel: string, arg: string, content: string, forEditor: boolean = false): string | false {
        if (!arg) {
            return '';
        }
        const template = TagHandlerVideo.typeMap[tagLabel];
        if (!template) {
            return `[${tagLabel}=${arg}]`;
        }
        const group = TagHandlerVideo.typeGroupMap[tagLabel];
        if (forEditor) {
            return `<div data-tag="video" class="video" data-video-type="${group.type}" data-video-value="${arg}">视频来源：<span class="video-type">${group.name}</span><br/>视频ID：<span class="video-value">${arg}</span></div>`;
        } else {
            return `<div data-tag="video">${template.replace(/__VIDEO_VALUE__/g, arg)}</div>`;
        }
    }

    decodeFromHtml(element: Element, resolveFun: (node: Nodes, forEditor: boolean) => string, forEditor: boolean): string | false {
        const type = element.getAttribute('data-video-type');
        const value = element.getAttribute('data-video-value');
        if (!type || !value || !TagHandlerVideo.typeMap[type]) {
            return '';
        }
        const group = TagHandlerVideo.typeGroupMap[type];

        return `[${group.type}=${value}]`;
    }
}
