import {TagHandler} from '../TagHandler';

export class TagHandlerCompatible extends TagHandler {
    tagName(): string {
        return 'compatible';
    };

    match(tagLabel: string): boolean {
        return false;
    }

    isSelfClose(): boolean {
        return true;
    }

    encodeToHtml(tagLabel: string, arg: string, content: string, forEditor: boolean = false): string | false {
        return content ? content : false;
    }

    handleStyle(e: any, resolveFun: (node: Nodes, forEditor: boolean, parentStyle: any) => string, forEditor: boolean, parentStyle: any, wrapperTag: any, addBreakLine: boolean = false) {
        let wrapper: any;
        if (typeof wrapperTag === 'string') {
            wrapper = document.createElement('span');
        } else {
            wrapper = wrapperTag;
        }
        let inner: any;
        if (e.classList.contains('quote')) {
            const quote = document.createElement('blockquote');
            quote.setAttribute('data-tag', 'quote');
            if (!inner) {
                inner = quote;
                wrapper.appendChild(inner);
            } else {
                inner.appendChild(quote);
                inner = quote;
            }
        }
        if (e.style.textAlign) {
            switch (e.style.textAlign) {
                case 'left':
                case 'right':
                case 'center':
                    const align = document.createElement('div') as any;
                    align.setAttribute('data-tag', 'align');
                    align.style.textAlign = e.style.textAlign;
                    if (!inner) {
                        inner = align;
                        wrapper.appendChild(inner);
                    } else {
                        inner.appendChild(align);
                        inner = align;
                    }
                    break;
                default: break;
            }
        }
        if (e.style.fontWeight === 'bold') {
            const b = document.createElement('b');
            if (!inner) {
                inner = b;
                wrapper.appendChild(inner);
            } else {
                inner.appendChild(b);
                inner = b;
            }
        }
        if (e.style.color) {
            const colorStyle = this.checkColor(e.style.color);
            if (colorStyle) {
                const font = document.createElement('span');
                font.setAttribute('data-color', colorStyle);
                font.setAttribute('data-tag', 'color');
                font.style.color = colorStyle;
                if (!inner) {
                    inner = font;
                    wrapper.appendChild(inner);
                } else {
                    inner.appendChild(font);
                    inner = font;
                }
            }
        }
        if (e.style.background || e.style.backgroundColor) {
            const colorStyle = this.checkColor(e.style.backgroundColor ? e.style.backgroundColor : e.style.background);
            if (colorStyle) {
                const font = document.createElement('span');
                font.setAttribute('data-color', colorStyle);
                font.setAttribute('data-tag', 'bgcolor');
                font.style.backgroundColor = colorStyle;
                if (!inner) {
                    inner = font;
                    wrapper.appendChild(inner);
                } else {
                    inner.appendChild(font);
                    inner = font;
                }
            }
        }
        if (inner) {
            for (const node of Array.from(e.childNodes)) {
                inner.appendChild(node);
            }
            if (addBreakLine) {
                return `\n${resolveFun(wrapper, forEditor, parentStyle)}\n`;
            } else {
                return resolveFun(wrapper, forEditor, parentStyle);
            }
        }
        return false;
    }

    decodeFromHtml(element: Element, resolveFun: (node: Nodes, forEditor: boolean, parentStyle: any) => string, forEditor: boolean, parentStyle: any): string | false {
        const e = element as any;
        switch (e.tagName.toLowerCase()) {
            case 'h4':
                return this.handleStyle(e, resolveFun, forEditor, parentStyle, 'span');
            case 'span':
                return this.handleStyle(e, resolveFun, forEditor, parentStyle, 'span');
            case 'p':
            case 'div':
                return this.handleStyle(e, resolveFun, forEditor, parentStyle, 'div', true);
            default:
                return false;
        }
    }
}
