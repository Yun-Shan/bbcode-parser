(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}();var e=function(){function t(){}return t.prototype.tagName=function(){return"b"},t.prototype.tagAliases=function(){return[]},t.prototype.handle=function(t,e,r){return r?"<"+this.tagName()+">"+r+"</"+this.tagName()+">":""},t}(),r=function(){function t(){}return t.prototype.tagName=function(){return"i"},t.prototype.tagAliases=function(){return[]},t.prototype.handle=function(t,e,r){return r?"<"+this.tagName()+">"+r+"</"+this.tagName()+">":""},t}(),n=function(){function t(){}return t.prototype.tagName=function(){return"color"},t.prototype.tagAliases=function(){return[]},t.prototype.handle=function(t,e,r){return r?e?(e.match(/^[0-9a-fA-F]{6}$/)&&(e="#"+e),'<span style="color:'+e+'">'+r+"</span>"):r:""},t}(),a=function(){function t(){}return t.prototype.tagName=function(){return"mask"},t.prototype.tagAliases=function(){return[]},t.prototype.handle=function(t,e,r){return r?'<div class="mask">'+r+"</div>":""},t}(),o=function(){function t(){}return t.prototype.tagName=function(){return"collapse"},t.prototype.tagAliases=function(){return[]},t.prototype.handle=function(t,e,r){return e||(e="点击展开"),"<details><summary>"+e+"</summary>"+r+"</details>"},t}(),i=function(){function t(){}return t.prototype.tagName=function(){return"dice"},t.prototype.tagAliases=function(){return[]},t.prototype.handle=function(t,e,r){return r?!!r.match(/^((\d+)|(\d*d\d+))(\+((\d+)|(\d*d\d+)))*$/)&&'<div class="dice">假装有骰娘：'+r+"="+Math.round(200*Math.random())+"</div>":""},t}(),u=new(function(){function t(){this.TAG_HANDLER_MAP={},this.TAG_ALIASES_MAP={}}return t.prototype.transformAsIs=function(t,e,r){return"["+(e?t+"="+e:t)+"]"+r+"[/"+t+"]"},t.prototype.transformTag=function(t,e,r){null==e&&(e=""),t=t.substring(1);var n=this.TAG_ALIASES_MAP[t];if(!n)return this.transformAsIs(t,r,e);var a=this.TAG_HANDLER_MAP[n];if(a){var o=a.handle(n,r,e);if("string"==typeof o)return o}return this.transformAsIs(n,r,e)},t.prototype.filterXSS=function(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")},t.prototype.registerTagHandler=function(t){this.TAG_HANDLER_MAP[t.tagName()]=t,this.TAG_ALIASES_MAP[t.tagName()]=t.tagName()},t.prototype.bbcode2html=function(e){e=e.replace(/ /g,"&nbsp;");for(var r=[],n=t.STATE_NORMAL,a="",o=0;o<e.length;o++){var i=e[o];switch(i){case"[":n===t.STATE_NORMAL&&o<e.length?(a.length>0&&(r.push({type:t.TYPE_TEXT,value:a}),a=""),a="[","/"===e[o+1]?(n=t.STATE_BBCODE_CLOSE_START,a+="/",o++):n=t.STATE_BBCODE_OPEN_START):n===t.STATE_BBCODE_OPEN_START||n===t.STATE_BBCODE_CLOSE_START?a.length>0&&(r.push({type:t.TYPE_TEXT,value:a}),a="["):a+=i;break;case"]":if(n===t.STATE_BBCODE_OPEN_START){var u=void 0,s=a.indexOf("=");s>0&&(u=a.substring(s+1),a=a.substring(0,s)),r.push({type:t.TYPE_BBCODE_OPEN,value:a,arg:u}),a="",n=t.STATE_NORMAL}else if(n===t.STATE_BBCODE_CLOSE_START){var T="",p=!1;t:for(;;){var c=r.pop();if(!c)break;switch(c.type){case t.TYPE_TEXT:T=c.value+T;break;case t.TYPE_BBCODE_OPEN:if(c.value.substring(1)===a.substring(2)){r.push({type:t.TYPE_TEXT,value:this.transformTag(c.value,T,c.arg)}),T="",p=!0;break t}T=this.transformTag(c.value,T,c.arg)}}p||(T+=a+"]"),T.length>0&&r.push({type:t.TYPE_TEXT,value:T}),a="",n=t.STATE_NORMAL}else a+=i;break;case"\n":a+="<br/>";break;default:a+=i}}for(var l="",f=void 0;f=r.pop();)f.type===t.TYPE_BBCODE_OPEN?(a.length>0&&(l+=a,a=""),l=this.transformTag(f.value,l,f.arg)):f.type===t.TYPE_TEXT&&(l=f.value+l);return a.length>0&&(l+=a),l},t.STATE_NORMAL=0,t.STATE_BBCODE_OPEN_START=1,t.STATE_BBCODE_CLOSE_START=2,t.TYPE_TEXT=0,t.TYPE_BBCODE_OPEN=1,t}());u.registerTagHandler(new e),u.registerTagHandler(new r),u.registerTagHandler(new n),u.registerTagHandler(new a),u.registerTagHandler(new o),u.registerTagHandler(new i),t.g.bbcode2html=function(t){return u.bbcode2html(t)}})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYmNvZGUtcGFyc2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JiY29kZS1wYXJzZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYmNvZGUtcGFyc2VyLy4vc3JjL3RhZy9oYW5kbGVycy9UYWdIYW5kbGVyQm9sZC50cyIsIndlYnBhY2s6Ly9iYmNvZGUtcGFyc2VyLy4vc3JjL3RhZy9oYW5kbGVycy9UYWdIYW5kbGVySXRhbGljLnRzIiwid2VicGFjazovL2JiY29kZS1wYXJzZXIvLi9zcmMvdGFnL2hhbmRsZXJzL1RhZ0hhbmRsZXJDb2xvci50cyIsIndlYnBhY2s6Ly9iYmNvZGUtcGFyc2VyLy4vc3JjL3RhZy9oYW5kbGVycy9UYWdIYW5kbGVyTWFzay50cyIsIndlYnBhY2s6Ly9iYmNvZGUtcGFyc2VyLy4vc3JjL3RhZy9oYW5kbGVycy9UYWdIYW5kbGVyQ29sbGFwc2UudHMiLCJ3ZWJwYWNrOi8vYmJjb2RlLXBhcnNlci8uL3NyYy90YWcvaGFuZGxlcnMvVGFnSGFuZGxlckRpY2UudHMiLCJ3ZWJwYWNrOi8vYmJjb2RlLXBhcnNlci8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9iYmNvZGUtcGFyc2VyLy4vc3JjL0JCQ09ERVBhcnNlci50cyJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZyIsImdsb2JhbFRoaXMiLCJ0aGlzIiwiRnVuY3Rpb24iLCJlIiwid2luZG93IiwidGFnTmFtZSIsInRhZ0FsaWFzZXMiLCJoYW5kbGUiLCJ0YWdMYWJlbCIsImFyZyIsImNvbnRlbnQiLCJtYXRjaCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImRlZmF1bHRCQkNvZGVQYXJzZXIiLCJUQUdfSEFORExFUl9NQVAiLCJUQUdfQUxJQVNFU19NQVAiLCJ0cmFuc2Zvcm1Bc0lzIiwidHJhbnNmb3JtVGFnIiwic3Vic3RyaW5nIiwiaGFuZGxlciIsInJlc3VsdCIsImZpbHRlclhTUyIsInN0ciIsInJlcGxhY2UiLCJyZWdpc3RlclRhZ0hhbmRsZXIiLCJiYmNvZGUyaHRtbCIsInJhd0NvbnRlbnQiLCJzdGFjayIsInN0YXRlIiwiQkJDT0RFUGFyc2VyIiwiU1RBVEVfTk9STUFMIiwidG1wIiwiaWR4IiwibGVuZ3RoIiwiY2hhciIsInB1c2giLCJ0eXBlIiwiVFlQRV9URVhUIiwidmFsdWUiLCJTVEFURV9CQkNPREVfQ0xPU0VfU1RBUlQiLCJTVEFURV9CQkNPREVfT1BFTl9TVEFSVCIsInVuZGVmaW5lZCIsImFyZ0lkeCIsImluZGV4T2YiLCJUWVBFX0JCQ09ERV9PUEVOIiwic3VjY2Vzc0Nsb3NlZCIsIm91dCIsInBvcCIsIm5vZGUiLCJUYWdIYW5kbGVyQm9sZCIsIlRhZ0hhbmRsZXJJdGFsaWMiLCJUYWdIYW5kbGVyQ29sb3IiLCJUYWdIYW5kbGVyTWFzayIsIlRhZ0hhbmRsZXJDb2xsYXBzZSIsIlRhZ0hhbmRsZXJEaWNlIl0sIm1hcHBpbmdzIjoibUJBQ0EsSUFBSUEsRUFBc0IsR0NEMUJBLEVBQW9CQyxFQUFJLFdBQ3ZCLEdBQTBCLGlCQUFmQyxXQUF5QixPQUFPQSxXQUMzQyxJQUNDLE9BQU9DLE1BQVEsSUFBSUMsU0FBUyxjQUFiLEdBQ2QsTUFBT0MsR0FDUixHQUFzQixpQkFBWEMsT0FBcUIsT0FBT0EsUUFMakIsR0NFeEIsK0JBZUEsT0FkSSxZQUFBQyxRQUFBLFdBQ0ksTUFBTyxLQUdYLFlBQUFDLFdBQUEsV0FDSSxNQUFPLElBR1gsWUFBQUMsT0FBQSxTQUFPQyxFQUFrQkMsRUFBYUMsR0FDbEMsT0FBS0EsRUFHRSxJQUFJVCxLQUFLSSxVQUFTLElBQUlLLEVBQU8sS0FBS1QsS0FBS0ksVUFBUyxJQUY1QyxJQUluQixFQWZBLEdDQUEsMkJBZUEsT0FkSSxZQUFBQSxRQUFBLFdBQ0ksTUFBTyxLQUdYLFlBQUFDLFdBQUEsV0FDSSxNQUFPLElBR1gsWUFBQUMsT0FBQSxTQUFPQyxFQUFrQkMsRUFBYUMsR0FDbEMsT0FBS0EsRUFHRSxJQUFJVCxLQUFLSSxVQUFTLElBQUlLLEVBQU8s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eUIsT0FBUyxHQUNqQk4sRUFBTVEsS0FBSyxDQUFDQyxLQUFNUCxFQUFhUSxVQUFXQyxNQUFPOUIsSUFFckR1QixFQUFNLEdBQ05ILEVBQVFDLEVBQWFDLGtCQUVyQkMsR0FBT0csRUFFWCxNQUVKLElBQUssS0FDREgsR0FBTyxRQUNQLE1BRUosUUFDSUEsR0FBT0csR0FNbkIsSUFGQSxJQUFJZCxFQUFTLEdBQ1Q0QixPQUFPUCxFQUNKTyxFQUFPckIsRUFBTW9CLE9BQ1pDLEVBQUtaLE9BQVNQLEVBQWFlLGtCQUN2QmIsRUFBSUUsT0FBUyxJQUNiYixHQUFVVyxFQUNWQSxFQUFNLElBRVZYLEVBQVNyQixLQUFLa0IsYUFBYStCLEVBQUtWLE1BQU9sQixFQUFRNEIsRUFBS3pDLE1BQzdDeUMsRUFBS1osT0FBU1AsRUFBYVEsWUFDbENqQixFQUFTNEIsRUFBS1YsTUFBUWxCLEdBTTlCLE9BSElXLEVBQUlFLE9BQVMsSUFDYmIsR0FBVVcsR0FFUFgsR0F0S2EsRUFBQVUsYUFBZSxFQUNmLEVBQUFVLHdCQUEwQixFQUMxQixFQUFBRCx5QkFBMkIsRUFDM0IsRUFBQUYsVUFBWSxFQUNaLEVBQUFPLGlCQUFtQixFQW9LL0MsRUF6S0EsSURNQS9CLEVBQW9CVyxtQkFBbUIsSUFBSXlCLEdBQzNDcEMsRUFBb0JXLG1CQUFtQixJQUFJMEIsR0FDM0NyQyxFQUFvQlcsbUJBQW1CLElBQUkyQixHQUMzQ3RDLEVBQW9CVyxtQkFBbUIsSUFBSTRCLEdBQzNDdkMsRUFBb0JXLG1CQUFtQixJQUFJNkIsR0FDM0N4QyxFQUFvQlcsbUJBQW1CLElBQUk4QixHQUszQyxFQUFBekQsRUFBTzRCLFlBQWMsU0FBVUMsR0FDM0IsT0FBT2IsRUFBb0JZLFlBQVlDLEsiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiaW1wb3J0IHsgVGFnSGFuZGxlciB9IGZyb20gJy4uL1RhZ0hhbmRsZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhZ0hhbmRsZXJCb2xkIGltcGxlbWVudHMgVGFnSGFuZGxlciB7XHJcbiAgICB0YWdOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdiJztcclxuICAgIH07XHJcblxyXG4gICAgdGFnQWxpYXNlcygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGUodGFnTGFiZWw6IHN0cmluZywgYXJnOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCFjb250ZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGA8JHt0aGlzLnRhZ05hbWUoKX0+JHtjb250ZW50fTwvJHt0aGlzLnRhZ05hbWUoKX0+YDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBUYWdIYW5kbGVyIH0gZnJvbSAnLi4vVGFnSGFuZGxlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgVGFnSGFuZGxlckl0YWxpYyBpbXBsZW1lbnRzIFRhZ0hhbmRsZXIge1xyXG4gICAgdGFnTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnaSc7XHJcbiAgICB9O1xyXG5cclxuICAgIHRhZ0FsaWFzZXMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlKHRhZ0xhYmVsOiBzdHJpbmcsIGFyZzogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghY29udGVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBgPCR7dGhpcy50YWdOYW1lKCl9PiR7Y29udGVudH08LyR7dGhpcy50YWdOYW1lKCl9PmA7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVGFnSGFuZGxlciB9IGZyb20gJy4uL1RhZ0hhbmRsZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhZ0hhbmRsZXJDb2xvciBpbXBsZW1lbnRzIFRhZ0hhbmRsZXIge1xyXG4gICAgdGFnTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnY29sb3InO1xyXG4gICAgfTtcclxuXHJcbiAgICB0YWdBbGlhc2VzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZSh0YWdMYWJlbDogc3RyaW5nLCBhcmc6IHN0cmluZywgY29udGVudDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIWNvbnRlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWFyZykge1xyXG4gICAgICAgICAgICByZXR1cm4gY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyZy5tYXRjaCgvXlswLTlhLWZBLUZdezZ9JC8pKSB7XHJcbiAgICAgICAgICAgIGFyZyA9ICcjJyArIGFyZztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGA8c3BhbiBzdHlsZT1cImNvbG9yOiR7YXJnfVwiPiR7Y29udGVudH08L3NwYW4+YDtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgVGFnSGFuZGxlciB9IGZyb20gJy4uL1RhZ0hhbmRsZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhZ0hhbmRsZXJNYXNrIGltcGxlbWVudHMgVGFnSGFuZGxlciB7XHJcbiAgICB0YWdOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdtYXNrJztcclxuICAgIH07XHJcblxyXG4gICAgdGFnQWxpYXNlcygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGUodGFnTGFiZWw6IHN0cmluZywgYXJnOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCFjb250ZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibWFza1wiPiR7Y29udGVudH08L2Rpdj5gO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRhZ0hhbmRsZXIgfSBmcm9tICcuLi9UYWdIYW5kbGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWdIYW5kbGVyQ29sbGFwc2UgaW1wbGVtZW50cyBUYWdIYW5kbGVyIHtcclxuICAgIHRhZ05hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ2NvbGxhcHNlJztcclxuICAgIH07XHJcblxyXG4gICAgdGFnQWxpYXNlcygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGUodGFnTGFiZWw6IHN0cmluZywgYXJnOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCFhcmcpIHtcclxuICAgICAgICAgICAgYXJnID0gXCLngrnlh7vlsZXlvIBcIlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYDxkZXRhaWxzPjxzdW1tYXJ5PiR7YXJnfTwvc3VtbWFyeT4ke2NvbnRlbnR9PC9kZXRhaWxzPmA7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVGFnSGFuZGxlciB9IGZyb20gJy4uL1RhZ0hhbmRsZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhZ0hhbmRsZXJEaWNlIGltcGxlbWVudHMgVGFnSGFuZGxlciB7XHJcbiAgICB0YWdOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdkaWNlJztcclxuICAgIH07XHJcblxyXG4gICAgdGFnQWxpYXNlcygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGUodGFnTGFiZWw6IHN0cmluZywgYXJnOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZyk6IHN0cmluZ3xmYWxzZSB7XHJcbiAgICAgICAgaWYgKCFjb250ZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbnRlbnQubWF0Y2goL14oKFxcZCspfChcXGQqZFxcZCspKShcXCsoKFxcZCspfChcXGQqZFxcZCspKSkqJC8pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImRpY2VcIj7lgYfoo4XmnInpqrDlqJjvvJoke2NvbnRlbnR9PSR7TWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjAwKX08L2Rpdj5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVGFnSGFuZGxlckJvbGQgfSBmcm9tICcuL3RhZy9oYW5kbGVycy9UYWdIYW5kbGVyQm9sZCc7XHJcbmltcG9ydCB7IFRhZ0hhbmRsZXJJdGFsaWMgfSBmcm9tICcuL3RhZy9oYW5kbGVycy9UYWdIYW5kbGVySXRhbGljJztcclxuaW1wb3J0IHsgVGFnSGFuZGxlckNvbG9yIH0gZnJvbSAnLi90YWcvaGFuZGxlcnMvVGFnSGFuZGxlckNvbG9yJztcclxuaW1wb3J0IHsgVGFnSGFuZGxlck1hc2sgfSBmcm9tICcuL3RhZy9oYW5kbGVycy9UYWdIYW5kbGVyTWFzayc7XHJcbmltcG9ydCB7IFRhZ0hhbmRsZXJDb2xsYXBzZSB9IGZyb20gJy4vdGFnL2hhbmRsZXJzL1RhZ0hhbmRsZXJDb2xsYXBzZSc7XHJcbmltcG9ydCB7IFRhZ0hhbmRsZXJEaWNlIH0gZnJvbSAnLi90YWcvaGFuZGxlcnMvVGFnSGFuZGxlckRpY2UnO1xyXG5pbXBvcnQgeyBCQkNPREVQYXJzZXIgfSBmcm9tICcuL0JCQ09ERVBhcnNlcic7XHJcblxyXG5jb25zdCBkZWZhdWx0QkJDb2RlUGFyc2VyID0gbmV3IEJCQ09ERVBhcnNlcigpO1xyXG5kZWZhdWx0QkJDb2RlUGFyc2VyLnJlZ2lzdGVyVGFnSGFuZGxlcihuZXcgVGFnSGFuZGxlckJvbGQoKSk7XHJcbmRlZmF1bHRCQkNvZGVQYXJzZXIucmVnaXN0ZXJUYWdIYW5kbGVyKG5ldyBUYWdIYW5kbGVySXRhbGljKCkpO1xyXG5kZWZhdWx0QkJDb2RlUGFyc2VyLnJlZ2lzdGVyVGFnSGFuZGxlcihuZXcgVGFnSGFuZGxlckNvbG9yKCkpO1xyXG5kZWZhdWx0QkJDb2RlUGFyc2VyLnJlZ2lzdGVyVGFnSGFuZGxlcihuZXcgVGFnSGFuZGxlck1hc2soKSk7XHJcbmRlZmF1bHRCQkNvZGVQYXJzZXIucmVnaXN0ZXJUYWdIYW5kbGVyKG5ldyBUYWdIYW5kbGVyQ29sbGFwc2UoKSk7XHJcbmRlZmF1bHRCQkNvZGVQYXJzZXIucmVnaXN0ZXJUYWdIYW5kbGVyKG5ldyBUYWdIYW5kbGVyRGljZSgpKTtcclxuXHJcbmV4cG9ydCB7IGRlZmF1bHRCQkNvZGVQYXJzZXIgfTtcclxuXHJcbmRlY2xhcmUgdmFyIGdsb2JhbDogYW55O1xyXG5nbG9iYWwuYmJjb2RlMmh0bWwgPSBmdW5jdGlvbiAocmF3Q29udGVudDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gZGVmYXVsdEJCQ29kZVBhcnNlci5iYmNvZGUyaHRtbChyYXdDb250ZW50KTtcclxufVxyXG4iLCJpbXBvcnQgeyBUYWdIYW5kbGVyIH0gZnJvbSAnLi90YWcvVGFnSGFuZGxlcic7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEJCQ09ERVBhcnNlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBTVEFURV9OT1JNQUwgPSAwO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgU1RBVEVfQkJDT0RFX09QRU5fU1RBUlQgPSAxO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgU1RBVEVfQkJDT0RFX0NMT1NFX1NUQVJUID0gMjtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFRZUEVfVEVYVCA9IDA7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBUWVBFX0JCQ09ERV9PUEVOID0gMTtcclxuXHJcbiAgICByZWFkb25seSBUQUdfSEFORExFUl9NQVA6IHsgW2tleTogc3RyaW5nXTogVGFnSGFuZGxlciB9ID0ge307XHJcbiAgICByZWFkb25seSBUQUdfQUxJQVNFU19NQVA6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuXHJcbiAgICB0cmFuc2Zvcm1Bc0lzKHRhZ05hbWU6IHN0cmluZywgYXJnOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IG9wZW5UYWcgPSAnJztcclxuICAgICAgICBpZiAoYXJnKSB7XHJcbiAgICAgICAgICAgIG9wZW5UYWcgPSBgJHt0YWdOYW1lfT0ke2FyZ31gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9wZW5UYWcgPSB0YWdOYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYFske29wZW5UYWd9XSR7Y29udGVudH1bLyR7dGFnTmFtZX1dYDtcclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2Zvcm1UYWcodGFnTGFiZWw6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBhcmc6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKGNvbnRlbnQgPT09IHVuZGVmaW5lZCB8fCBjb250ZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFnTGFiZWwgPSB0YWdMYWJlbC5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgY29uc3QgdGFnTmFtZSA9IHRoaXMuVEFHX0FMSUFTRVNfTUFQW3RhZ0xhYmVsXTtcclxuICAgICAgICBpZiAoIXRhZ05hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtQXNJcyh0YWdMYWJlbCwgYXJnLCBjb250ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLlRBR19IQU5ETEVSX01BUFt0YWdOYW1lXTtcclxuICAgICAgICBpZiAoaGFuZGxlcikge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBoYW5kbGVyLmhhbmRsZSh0YWdOYW1lLCBhcmcsIGNvbnRlbnQpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtQXNJcyh0YWdOYW1lLCBhcmcsIGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlclhTUyhzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgICAgICAgICAucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvJy9nLCAnJiMzOTsnKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlclRhZ0hhbmRsZXIoaGFuZGxlcjogVGFnSGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMuVEFHX0hBTkRMRVJfTUFQW2hhbmRsZXIudGFnTmFtZSgpXSA9IGhhbmRsZXI7XHJcbiAgICAgICAgdGhpcy5UQUdfQUxJQVNFU19NQVBbaGFuZGxlci50YWdOYW1lKCldID0gaGFuZGxlci50YWdOYW1lKCk7XHJcbiAgICB9XHJcblxyXG4vLyBUT0RPIOiHquWumuS5ieino+aekO+8muagh+etvuWGhemDqOW1jOWll+eahOaJgOacieS4nOilv+mDveS6pOe7meiHquWumuS5ieino+aekOWZqO+8jOWPr+S7peiHquihjOWkhOeQhuWGheWuueino+aekOOAgueUqOmAlO+8mltjb2RlXVsvY29kZV3jgIFbbGlzdF1bKl14eFsvbGlzdF1cclxuLy8gVE9ETyDnibnmrorop6PmnpDvvJpbY29kZV3moIfnrb7lupTor6Xlv73nlaXmraPluLjnmoTpl63lkIjmoIfnrb7vvIznm7TliLDmib7liLDkuoZbL2NvZGVd5oiW6ICF5Yiw6L6+5a2X56ym5Liy5pyr5bC+XHJcbiAgICBiYmNvZGUyaHRtbChyYXdDb250ZW50OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJhd0NvbnRlbnQgPSByYXdDb250ZW50LnJlcGxhY2UoLyAvZywgJyZuYnNwOycpO1xyXG5cclxuICAgICAgICAvLyBUT0RPIGFueeaUueaOpeWPo1xyXG4gICAgICAgIGNvbnN0IHN0YWNrOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IEJCQ09ERVBhcnNlci5TVEFURV9OT1JNQUw7XHJcbiAgICAgICAgbGV0IHRtcCA9ICcnO1xyXG4gICAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IHJhd0NvbnRlbnQubGVuZ3RoOyBpZHgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjaGFyID0gcmF3Q29udGVudFtpZHhdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGNoYXIpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1snOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSBCQkNPREVQYXJzZXIuU1RBVEVfTk9STUFMICYmIGlkeCA8IHJhd0NvbnRlbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0bXAubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaCh7dHlwZTogQkJDT0RFUGFyc2VyLlRZUEVfVEVYVCwgdmFsdWU6IHRtcH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG1wID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wID0gJ1snO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmF3Q29udGVudFtpZHggKyAxXSA9PT0gJy8nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IEJCQ09ERVBhcnNlci5TVEFURV9CQkNPREVfQ0xPU0VfU1RBUlQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXAgKz0gJy8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWR4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IEJCQ09ERVBhcnNlci5TVEFURV9CQkNPREVfT1BFTl9TVEFSVDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09IEJCQ09ERVBhcnNlci5TVEFURV9CQkNPREVfT1BFTl9TVEFSVCB8fCBzdGF0ZSA9PT0gQkJDT0RFUGFyc2VyLlNUQVRFX0JCQ09ERV9DTE9TRV9TVEFSVCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG1wLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goe3R5cGU6IEJCQ09ERVBhcnNlci5UWVBFX1RFWFQsIHZhbHVlOiB0bXB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcCA9ICdbJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcCArPSBjaGFyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgJ10nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSBCQkNPREVQYXJzZXIuU1RBVEVfQkJDT0RFX09QRU5fU1RBUlQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFyZyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJnSWR4ID0gdG1wLmluZGV4T2YoJz0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ0lkeCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IHRtcC5zdWJzdHJpbmcoYXJnSWR4ICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXAgPSB0bXAuc3Vic3RyaW5nKDAsIGFyZ0lkeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaCh7dHlwZTogQkJDT0RFUGFyc2VyLlRZUEVfQkJDT0RFX09QRU4sIHZhbHVlOiB0bXAsIGFyZzogYXJnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IEJCQ09ERVBhcnNlci5TVEFURV9OT1JNQUw7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gQkJDT0RFUGFyc2VyLlNUQVRFX0JCQ09ERV9DTE9TRV9TVEFSVCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3VjY2Vzc0Nsb3NlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXQ6IHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub2RlID0gc3RhY2sucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBCQkNPREVQYXJzZXIuVFlQRV9URVhUOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBub2RlLnZhbHVlICsgY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQkJDT0RFUGFyc2VyLlRZUEVfQkJDT0RFX09QRU46IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUudmFsdWUuc3Vic3RyaW5nKDEpID09PSB0bXAuc3Vic3RyaW5nKDIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBCQkNPREVQYXJzZXIuVFlQRV9URVhULFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnRyYW5zZm9ybVRhZyhub2RlLnZhbHVlLCBjb250ZW50LCBub2RlLmFyZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0Nsb3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBvdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gdGhpcy50cmFuc2Zvcm1UYWcobm9kZS52YWx1ZSwgY29udGVudCwgbm9kZS5hcmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzc0Nsb3NlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCArPSB0bXAgKyAnXSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaCh7dHlwZTogQkJDT0RFUGFyc2VyLlRZUEVfVEVYVCwgdmFsdWU6IGNvbnRlbnR9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bXAgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBCQkNPREVQYXJzZXIuU1RBVEVfTk9STUFMO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcCArPSBjaGFyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgJ1xcbic6IHtcclxuICAgICAgICAgICAgICAgICAgICB0bXAgKz0gJzxici8+JztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB0bXAgKz0gY2hhcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgd2hpbGUgKG5vZGUgPSBzdGFjay5wb3AoKSkge1xyXG4gICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSBCQkNPREVQYXJzZXIuVFlQRV9CQkNPREVfT1BFTikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRtcC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IHRtcDtcclxuICAgICAgICAgICAgICAgICAgICB0bXAgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudHJhbnNmb3JtVGFnKG5vZGUudmFsdWUsIHJlc3VsdCwgbm9kZS5hcmcpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUudHlwZSA9PT0gQkJDT0RFUGFyc2VyLlRZUEVfVEVYVCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbm9kZS52YWx1ZSArIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodG1wLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IHRtcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9