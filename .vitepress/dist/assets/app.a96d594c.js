import{d as K,h as N,j as ue,x as ve,o as E,c as S,k as h,t as R,r as me,N as be,p as _e,m as xe,_ as Z,F as se,D as we,l as J,H as Ae,w as Fe,e as V,a as ee,Q as H,a3 as pe,s as Q,a4 as ke,a5 as $e,a6 as Ee,a7 as Se,a8 as Te,a9 as Ce,aa as De,ab as Le,ac as Pe,ad as Me,X as ze,u as Ie,y as He,ae as je,af as Re,ag as Ze}from"./chunks/framework.efea9256.js";import{t as re}from"./chunks/theme.ed3d4e95.js";var le=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Be(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var de={exports:{}};(function(u){var c=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(p){var y=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,x=0,A={},r={manual:p.Prism&&p.Prism.manual,disableWorkerMessageHandler:p.Prism&&p.Prism.disableWorkerMessageHandler,util:{encode:function a(e){return e instanceof m?new m(e.type,a(e.content),e.alias):Array.isArray(e)?e.map(a):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).slice(8,-1)},objId:function(a){return a.__id||Object.defineProperty(a,"__id",{value:++x}),a.__id},clone:function a(e,t){t=t||{};var i,s;switch(r.util.type(e)){case"Object":if(s=r.util.objId(e),t[s])return t[s];i={},t[s]=i;for(var o in e)e.hasOwnProperty(o)&&(i[o]=a(e[o],t));return i;case"Array":return s=r.util.objId(e),t[s]?t[s]:(i=[],t[s]=i,e.forEach(function(d,l){i[l]=a(d,t)}),i);default:return e}},getLanguage:function(a){for(;a;){var e=y.exec(a.className);if(e)return e[1].toLowerCase();a=a.parentElement}return"none"},setLanguage:function(a,e){a.className=a.className.replace(RegExp(y,"gi"),""),a.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(i){var a=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack)||[])[1];if(a){var e=document.getElementsByTagName("script");for(var t in e)if(e[t].src==a)return e[t]}return null}},isActive:function(a,e,t){for(var i="no-"+e;a;){var s=a.classList;if(s.contains(e))return!0;if(s.contains(i))return!1;a=a.parentElement}return!!t}},languages:{plain:A,plaintext:A,text:A,txt:A,extend:function(a,e){var t=r.util.clone(r.languages[a]);for(var i in e)t[i]=e[i];return t},insertBefore:function(a,e,t,i){i=i||r.languages;var s=i[a],o={};for(var d in s)if(s.hasOwnProperty(d)){if(d==e)for(var l in t)t.hasOwnProperty(l)&&(o[l]=t[l]);t.hasOwnProperty(d)||(o[d]=s[d])}var v=i[a];return i[a]=o,r.languages.DFS(r.languages,function(F,L){L===v&&F!=a&&(this[F]=o)}),o},DFS:function a(e,t,i,s){s=s||{};var o=r.util.objId;for(var d in e)if(e.hasOwnProperty(d)){t.call(e,d,e[d],i||d);var l=e[d],v=r.util.type(l);v==="Object"&&!s[o(l)]?(s[o(l)]=!0,a(l,t,null,s)):v==="Array"&&!s[o(l)]&&(s[o(l)]=!0,a(l,t,d,s))}}},plugins:{},highlightAll:function(a,e){r.highlightAllUnder(document,a,e)},highlightAllUnder:function(a,e,t){var i={callback:t,container:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),r.hooks.run("before-all-elements-highlight",i);for(var s=0,o;o=i.elements[s++];)r.highlightElement(o,e===!0,i.callback)},highlightElement:function(a,e,t){var i=r.util.getLanguage(a),s=r.languages[i];r.util.setLanguage(a,i);var o=a.parentElement;o&&o.nodeName.toLowerCase()==="pre"&&r.util.setLanguage(o,i);var d=a.textContent,l={element:a,language:i,grammar:s,code:d};function v(L){l.highlightedCode=L,r.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,r.hooks.run("after-highlight",l),r.hooks.run("complete",l),t&&t.call(l.element)}if(r.hooks.run("before-sanity-check",l),o=l.element.parentElement,o&&o.nodeName.toLowerCase()==="pre"&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!l.code){r.hooks.run("complete",l),t&&t.call(l.element);return}if(r.hooks.run("before-highlight",l),!l.grammar){v(r.util.encode(l.code));return}if(e&&p.Worker){var F=new Worker(r.filename);F.onmessage=function(L){v(L.data)},F.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else v(r.highlight(l.code,l.grammar,l.language))},highlight:function(a,e,t){var i={code:a,grammar:e,language:t};if(r.hooks.run("before-tokenize",i),!i.grammar)throw new Error('The language "'+i.language+'" has no grammar.');return i.tokens=r.tokenize(i.code,i.grammar),r.hooks.run("after-tokenize",i),m.stringify(r.util.encode(i.tokens),i.language)},tokenize:function(a,e){var t=e.rest;if(t){for(var i in t)e[i]=t[i];delete e.rest}var s=new w;return f(s,s.head,a),$(a,s,e,s.head,0),B(s)},hooks:{all:{},add:function(a,e){var t=r.hooks.all;t[a]=t[a]||[],t[a].push(e)},run:function(a,e){var t=r.hooks.all[a];if(!(!t||!t.length))for(var i=0,s;s=t[i++];)s(e)}},Token:m};p.Prism=r;function m(a,e,t,i){this.type=a,this.content=e,this.alias=t,this.length=(i||"").length|0}m.stringify=function a(e,t){if(typeof e=="string")return e;if(Array.isArray(e)){var i="";return e.forEach(function(v){i+=a(v,t)}),i}var s={type:e.type,content:a(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t},o=e.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(s.classes,o):s.classes.push(o)),r.hooks.run("wrap",s);var d="";for(var l in s.attributes)d+=" "+l+'="'+(s.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+d+">"+s.content+"</"+s.tag+">"};function M(a,e,t,i){a.lastIndex=e;var s=a.exec(t);if(s&&i&&s[1]){var o=s[1].length;s.index+=o,s[0]=s[0].slice(o)}return s}function $(a,e,t,i,s,o){for(var d in t)if(!(!t.hasOwnProperty(d)||!t[d])){var l=t[d];l=Array.isArray(l)?l:[l];for(var v=0;v<l.length;++v){if(o&&o.cause==d+","+v)return;var F=l[v],L=F.inside,ae=!!F.lookbehind,ne=!!F.greedy,fe=F.alias;if(ne&&!F.pattern.global){var ye=F.pattern.toString().match(/[imsuy]*$/)[0];F.pattern=RegExp(F.pattern.source,ye+"g")}for(var te=F.pattern||F,k=i.next,C=s;k!==e.tail&&!(o&&C>=o.reach);C+=k.value.length,k=k.next){var z=k.value;if(e.length>a.length)return;if(!(z instanceof m)){var O=1,T;if(ne){if(T=M(te,C,a,ae),!T||T.index>=a.length)break;var q=T.index,ge=T.index+T[0].length,P=C;for(P+=k.value.length;q>=P;)k=k.next,P+=k.value.length;if(P-=k.value.length,C=P,k.value instanceof m)continue;for(var j=k;j!==e.tail&&(P<ge||typeof j.value=="string");j=j.next)O++,P+=j.value.length;O--,z=a.slice(C,P),T.index-=C}else if(T=M(te,0,z,ae),!T)continue;var q=T.index,G=T[0],W=z.slice(0,q),ie=z.slice(q+G.length),X=C+z.length;o&&X>o.reach&&(o.reach=X);var U=k.prev;W&&(U=f(e,U,W),C+=W.length),D(e,U,O);var he=new m(d,L?r.tokenize(G,L):G,fe,G);if(k=f(e,U,he),ie&&f(e,k,ie),O>1){var Y={cause:d+","+v,reach:X};$(a,e,t,k.prev,C,Y),o&&Y.reach>o.reach&&(o.reach=Y.reach)}}}}}}function w(){var a={value:null,prev:null,next:null},e={value:null,prev:a,next:null};a.next=e,this.head=a,this.tail=e,this.length=0}function f(a,e,t){var i=e.next,s={value:t,prev:e,next:i};return e.next=s,i.prev=s,a.length++,s}function D(a,e,t){for(var i=e.next,s=0;s<t&&i!==a.tail;s++)i=i.next;e.next=i,i.prev=e,a.length-=s}function B(a){for(var e=[],t=a.head.next;t!==a.tail;)e.push(t.value),t=t.next;return e}if(!p.document)return p.addEventListener&&(r.disableWorkerMessageHandler||p.addEventListener("message",function(a){var e=JSON.parse(a.data),t=e.language,i=e.code,s=e.immediateClose;p.postMessage(r.highlight(i,r.languages[t],t)),s&&p.close()},!1)),r;var b=r.util.currentScript();b&&(r.filename=b.src,b.hasAttribute("data-manual")&&(r.manual=!0));function g(){r.manual||r.highlightAll()}if(!r.manual){var _=document.readyState;_==="loading"||_==="interactive"&&b&&b.defer?document.addEventListener("DOMContentLoaded",g):window.requestAnimationFrame?window.requestAnimationFrame(g):window.setTimeout(g,16)}return r}(c);u.exports&&(u.exports=n),typeof le<"u"&&(le.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(p){p.type==="entity"&&(p.attributes.title=p.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(y,x){var A={};A["language-"+x]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[x]},A.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:A}};r["language-"+x]={pattern:/[\s\S]+/,inside:n.languages[x]};var m={};m[y]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return y}),"i"),lookbehind:!0,greedy:!0,inside:r},n.languages.insertBefore("markup","cdata",m)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(p,y){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+p+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[y,"language-"+y],inside:n.languages[y]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(p){var y=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;p.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+y.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+y.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+y.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+y.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:y,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},p.languages.css.atrule.inside.rest=p.languages.css;var x=p.languages.markup;x&&(x.tag.addInlined("style","css"),x.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var p="Loading…",y=function(b,g){return"✖ Error "+b+" while fetching file: "+g},x="✖ Error: File does not exist or is empty",A={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},r="data-src-status",m="loading",M="loaded",$="failed",w="pre[data-src]:not(["+r+'="'+M+'"]):not(['+r+'="'+m+'"])';function f(b,g,_){var a=new XMLHttpRequest;a.open("GET",b,!0),a.onreadystatechange=function(){a.readyState==4&&(a.status<400&&a.responseText?g(a.responseText):a.status>=400?_(y(a.status,a.statusText)):_(x))},a.send(null)}function D(b){var g=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(b||"");if(g){var _=Number(g[1]),a=g[2],e=g[3];return a?e?[_,Number(e)]:[_,void 0]:[_,_]}}n.hooks.add("before-highlightall",function(b){b.selector+=", "+w}),n.hooks.add("before-sanity-check",function(b){var g=b.element;if(g.matches(w)){b.code="",g.setAttribute(r,m);var _=g.appendChild(document.createElement("CODE"));_.textContent=p;var a=g.getAttribute("data-src"),e=b.language;if(e==="none"){var t=(/\.(\w+)$/.exec(a)||[,"none"])[1];e=A[t]||t}n.util.setLanguage(_,e),n.util.setLanguage(g,e);var i=n.plugins.autoloader;i&&i.loadLanguages(e),f(a,function(s){g.setAttribute(r,M);var o=D(g.getAttribute("data-range"));if(o){var d=s.split(/\r\n?|\n/g),l=o[0],v=o[1]==null?d.length:o[1];l<0&&(l+=d.length),l=Math.max(0,Math.min(l-1,d.length)),v<0&&(v+=d.length),v=Math.max(0,Math.min(v,d.length)),s=d.slice(l,v).join(`
`),g.hasAttribute("data-start")||g.setAttribute("data-start",String(l+1))}_.textContent=s,n.highlightElement(_)},function(s){g.setAttribute(r,$),_.textContent=s})}}),n.plugins.fileHighlight={highlight:function(g){for(var _=(g||document).querySelectorAll(w),a=0,e;e=_[a++];)n.highlightElement(e)}};var B=!1;n.fileHighlight=function(){B||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),B=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(de);var Oe=de.exports;const oe=Be(Oe);const qe=u=>(_e("data-v-a6d6387b"),u=u(),xe(),u),Ge={class:"pinyin-modal-header"},Ue={class:"pinyin-modal-title"},Ve=qe(()=>h("svg",{t:"1669624070062",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2668","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"16",height:"16"},[h("path",{fill:"currentColor",d:"M557.312 513.248l265.28-263.904c12.544-12.48 12.608-32.704 0.128-45.248-12.512-12.576-32.704-12.608-45.248-0.128l-265.344 263.936-263.04-263.84C236.64 191.584 216.384 191.52 203.84 204 191.328 216.48 191.296 236.736 203.776 249.28l262.976 263.776L201.6 776.8c-12.544 12.48-12.608 32.704-0.128 45.248 6.24 6.272 14.464 9.44 22.688 9.44 8.16 0 16.32-3.104 22.56-9.312l265.216-263.808 265.44 266.24c6.24 6.272 14.432 9.408 22.656 9.408 8.192 0 16.352-3.136 22.592-9.344 12.512-12.48 12.544-32.704 0.064-45.248L557.312 513.248z","p-id":"2669"})],-1)),Ne=[Ve],We={class:"pinyin-modal-content"},Xe=K({__name:"modal",props:{visible:{type:Boolean},title:{}},emits:["update:visible"],setup(u,{emit:c}){const n=u,p=c,y=N(!1),x=()=>{p("update:visible",!1)};return ue(()=>{y.value=!0}),ve(()=>n.visible,A=>{y.value},{immediate:!0}),(A,r)=>(E(),S("div",{class:"pinyin-modal-mask",style:be({display:A.visible?"flex":"none"}),onClick:x},[h("div",{class:"pinyin-modal",onClick:r[0]||(r[0]=m=>m.stopPropagation())},[h("div",Ge,[h("div",Ue,R(n.title),1),h("div",{class:"close-icon",onClick:x},Ne)]),h("div",We,[me(A.$slots,"default",{},void 0,!0)])])],4))}});const Ye=Z(Xe,[["__scopeId","data-v-a6d6387b"]]),Je=h("tr",null,[h("th",{width:"80"},"属性"),h("th",{width:"70"},"类型"),h("th",{width:"100"},"描述"),h("th",{width:"92"},"可选值"),h("th",null,[h("div",null,"说明")]),h("th",{width:"70"},"默认值")],-1),Qe=["rowspan","innerHTML"],Ke=["rowspan"],ea=["rowspan","innerHTML"],aa={width:"92"},na=["onClick"],ta=["rowspan"],ia=["innerHTML"],sa=K({__name:"basic-params-table",setup(u){const c=N(!1),n=N(""),p=N(""),y=oe.highlight,{javascript:x}=oe.languages,A=[{option:"pattern",type:"string",description:"输出的结果信息",default:"pinyin",children:[{value:"pinyin",desc:"返回拼音全拼",example:`// 返回拼音全拼
pinyin('汉语拼音', { pattern: 'pinyin' }); // 'hàn yǔ pīn yīn'
pinyin('汉语拼音', { pattern: 'pinyin', toneType: 'none' }); // 'han yu pin yin'
pinyin('汉语拼音', { pattern: 'pinyin', toneType: 'num' }); // 'han4 yu3 pin1 yin1'
pinyin('汉语拼音', { pattern: 'pinyin', type: 'array' }); // ["hàn", "yǔ", "pīn", "yīn"]
pinyin('汉语拼音', { pattern: 'pinyin', toneType: 'none', type: 'array' }); // ["han", "yu", "pin", "yin"]
`},{value:"initial",desc:"返回声母",example:`// 返回声母
pinyin('汉语拼音', { pattern: 'initial' }); // 'h y p y'
pinyin('汉语拼音', { pattern: 'initial', type: 'array' }); // ["h", "y", "p", "y"]
`},{value:"final",desc:"返回韵母",example:`// 返回韵母
pinyin('汉语拼音', { pattern: 'final' }); // 'àn ǔ īn īn'
pinyin('汉语拼音', { pattern: 'final', toneType: 'none' }); // 'an u in in'
pinyin('汉语拼音', { pattern: 'final', type: 'array' }); // ["àn", "ǔ", "īn", "īn"]
pinyin('汉语拼音', { pattern: 'final', toneType: 'none', type: 'array' }); // ["an", "u", "in", "in"]
`},{value:"finalHead",desc:"返回韵头（介音）",example:`// 返回韵头（介音）
pinyin('村庄', { pattern: 'finalHead', type: 'array' }); // [ '', 'u' ]
`},{value:"finalBody",desc:"返回韵腹",example:`// 返回韵腹
pinyin('村庄', { pattern: 'finalBody', type: 'array' }); // [ 'ū', 'ā' ]
`},{value:"finalTail",desc:"返回韵尾",example:`// 返回韵尾
pinyin('村庄', { pattern: 'finalTail', type: 'array' }); // [ 'n', 'ng' ]
`},{value:"num",desc:"返回音调对应数字(轻声返回 0)",example:`// 返回音调
pinyin('汉语拼音', { pattern: 'num' }); // '4 3 1 1'
pinyin('汉语拼音', { pattern: 'num', type: 'array' }); // ["4", "3", "1", "1"]
`},{value:"first",desc:"返回拼音首字母",example:`// 返回首字母
pinyin('赵钱孙李额', { pattern: 'first' }); // 'z q s l é'
pinyin('赵钱孙李额', { pattern: 'first', toneType: 'none' }); // 'z q s l e'
pinyin('赵钱孙李额', { pattern: 'first', toneType: 'none', type: 'array' }); // ['z', 'q', 's', 'l', 'e']`}]},{option:"toneType",type:"string",description:"音调输出形式",default:"symbol",children:[{value:"symbol",desc:"作为音调符号带在拼音字母上",example:"pinyin('汉语拼音', { toneType: 'symbol' }); // 'hàn yǔ pīn yīn'"},{value:"num",desc:"作为数字跟在拼音后",example:"pinyin('汉语拼音', { toneType: 'num' }); // 'han4 yu3 pin1 yin1'"},{value:"none",desc:"不加音调",example:"pinyin('汉语拼音', { toneType: 'none' }); // 'han yu pin yin'"}]},{option:"type",type:"string",description:"输出结果的类型",default:"string",children:[{value:"string",desc:"输出字符串，拼音之间以空格隔开",example:"pinyin('汉语拼音', { type: 'string' }); // 'hàn yǔ pīn yīn'"},{value:"array",desc:"输出为数组",example:`pinyin('汉语拼音', { type: 'array' }); // ["hàn", "yǔ", "pīn", "yīn"]`},{value:"all",desc:"输出完整信息的对象数组",example:`pinyin('汉语拼音', { type: 'all' }); 
/** result:
[
  {
    origin: '汉',
    pinyin: 'hàn',
    initial: 'h',
    final: 'àn',
    first: 'h',
    finalHead: '',
    finalBody: 'à',
    finalTail: 'n',
    num: 4,
    isZh: true,
    polyphonic: ['hàn'],
    inZhRange: 'true',
  },
  {
    origin: '语',
    pinyin: 'yǔ',
    initial: 'y',
    final: 'ǔ',
    first: 'y',
    finalHead: '',
    finalBody: 'ǔ',
    finalTail: '',
    num: 3,
    isZh: true,
    polyphonic: ['yǔ', 'yù'],
    inZhRange: 'true',
  },
  {
    origin: '拼',
    pinyin: 'pīn',
    initial: 'p',
    final: 'īn',
    first: 'p',
    finalHead: '',
    finalBody: 'ī',
    finalTail: 'n',
    num: 1,
    isZh: true,
    polyphonic: ['pīn'],
    inZhRange: 'true',
  },
  {
    origin: '音',
    pinyin: 'yīn',
    initial: 'y',
    final: 'īn',
    first: 'y',
    finalHead: '',
    finalBody: 'ī',
    finalTail: 'n',
    num: 1,
    isZh: true,
    polyphonic: ['yīn'],
    inZhRange: 'true',
  },
];
*/`}]},{option:"multiple",type:"boolean",description:"是否输出多音字(仅在 text 为单字时生效)",default:"false",children:[{value:"false",desc:"输出汉字最常用的拼音",example:"pinyin('好', { multiple: false }); // 'hǎo'"},{value:"true",desc:"输出汉字的所有拼音",example:"pinyin('好', { multiple: true }); // 'hǎo hào'"}]},{option:"separator",type:"string",description:"拼音之间的分隔符",default:"空格",children:[{value:"-",desc:"拼音之间的分隔符",example:"pinyin('汉语拼音', { separator: '-' }); // 'hàn-yǔ-pīn-yīn'"}]},{option:"mode <code>deprecated, 使用 surname 代替</code>",type:"string",description:"拼音优先匹配的库模式",default:"normal",children:[{value:"normal",desc:"常规模式",example:"pinyin('我叫曾小贤', { mode: 'normal' }); // 'wǒ jiào céng xiǎo xián'"}]},{option:"nonZh",type:"string",description:"非汉字字符的处理形式",default:"spaced",children:[{value:"spaced",desc:"非汉字在结果中空格隔开输出",example:"pinyin('我very喜欢你', { nonZh: 'spaced' }); // 'wǒ v e r y xǐ huān nǐ'"},{value:"consecutive ",desc:"非汉字在结果中紧凑输出",example:"pinyin('我very喜欢你', { nonZh: 'consecutive' }); // 'wǒ very xǐ huān nǐ'"},{value:"removed ",desc:"非汉字在结果中移除",example:"pinyin('我very喜欢你', { nonZh: 'removed' }); // 'wǒ xǐ huān nǐ'"}]},{option:"nonZhScope",type:"RegExp",description:"指定 nonZh 范围的正则表达式",default:"null",children:[{value:"/[a-zA-Z]/",desc:"只将英文字符紧凑输出",example:"pinyin('我very喜欢你，真的', { nonZh: 'consecutive', nonZhScope: /[a-zA-Z]/ }); // 'wǒ very xǐ huan nǐ ， zhēn de'"}]},{option:"v",type:"boolean",description:"是否将结果中的 ü 替换为 v(带音调的 ǖ,ǘ,ǚ,ǜ 不会被转换)",default:"false",children:[{value:"true",desc:"将结果中的 ü 替换为 v",example:"pinyin('吕布', { toneType: 'none', v: true }); // lv bu"},{value:"false ",desc:"结果中的 ü 保留",example:"pinyin('吕布', { toneType: 'none', v: false }); // lü bu"}]},{option:"toneSandhi",type:"boolean",description:'是否对<code>一</code>和<code>不</code>应用智能变调，参考<a href=https://zh.wiktionary.org/wiki/Appendix:%E2%80%9C%E4%B8%80%E2%80%9D%E5%8F%8A%E2%80%9C%E4%B8%8D%E2%80%9D%E7%9A%84%E5%8F%98%E8%B0%83 target="_blank">维基百科</a>',default:"true",children:[{value:"true",desc:"应用",example:"pinyin('一旦被发现', { toneSandhi: true }); // 'yí dàn bèi fā xiàn'"},{value:"false",desc:"不应用",example:"pinyin('一旦被发现', { toneSandhi: false }); // 'yī dàn bèi fā xiàn'"}]},{option:"surname <code>3.21.0+</code>",type:"string",description:"是否启用姓氏模式",default:"off",children:[{value:"off",desc:"不启用姓氏模式",example:"pinyin('我叫曾乐乐'); // wǒ jiào céng lè lè"},{value:"head",desc:"识别字符串开头的姓氏",example:"pinyin('我叫曾乐乐', { surname: 'head' }); // wǒ jiào zēng lè lè"},{value:"all ",desc:"识别字符串中全部的姓氏",example:"pinyin('我叫曾乐乐', { surname: 'all' }); // wǒ jiào zēng yuè yuè"}]}],m=(()=>{const $=[];return A.forEach(w=>{w.children.forEach((f,D)=>{$.push({id:w.option+f.value,name:w.option,siblingCount:w.children.length,siblingIndex:D,type:w.type,optionDesc:w.description,default:w.default,value:f.value,desc:f.desc,example:f.example||"",rowspan:D===0?w.children.length:0})})}),$})(),M=$=>{n.value=$.example,p.value=`options.${$.name} = ${$.value}`,c.value=!0};return($,w)=>(E(),S(se,null,[h("div",null,[h("table",null,[h("tbody",null,[Je,(E(!0),S(se,null,we(J(m),(f,D)=>(E(),S("tr",{key:D},[f.rowspan?(E(),S("td",{key:0,width:"80",rowspan:f.rowspan,innerHTML:f.name},null,8,Qe)):V("",!0),f.rowspan?(E(),S("td",{key:1,width:"70",rowspan:f.rowspan},R(f.type),9,Ke)):V("",!0),f.rowspan?(E(),S("td",{key:2,width:"100",rowspan:f.rowspan,innerHTML:f.optionDesc},null,8,ea)):V("",!0),h("td",aa,R(f.value),1),h("td",null,[h("div",null,[ee(R(f.desc)+" ",1),h("button",{class:"my-button",size:"mini",onClick:()=>M(f)}," 查看示例 ",8,na)])]),f.rowspan?(E(),S("td",{key:3,width:"70",rowspan:f.rowspan},R(f.default),9,ta)):V("",!0)]))),128))])])]),Ae(Ye,{visible:c.value,"onUpdate:visible":w[0]||(w[0]=f=>c.value=f),title:p.value},{default:Fe(()=>[h("pre",{innerHTML:J(y)(n.value,J(x),"javascript")},null,8,ia)]),_:1},8,["visible","title"])],64))}});const ra={},la={class:"demo-container"},oa=H('<span class="py-result-item" data-v-df708b9d><ruby data-v-df708b9d><span class="py-chinese-item" data-v-df708b9d>汉</span><rp data-v-df708b9d>(</rp><rt class="py-pinyin-item" data-v-df708b9d>hàn</rt><rp data-v-df708b9d>)</rp></ruby></span><span class="py-result-item" data-v-df708b9d><ruby data-v-df708b9d><span class="py-chinese-item" data-v-df708b9d>语</span><rp data-v-df708b9d>(</rp><rt class="py-pinyin-item" data-v-df708b9d>yǔ</rt><rp data-v-df708b9d>)</rp></ruby></span>',2),ua=H('<span class="py-result-item" data-v-df708b9d><ruby data-v-df708b9d><span class="py-chinese-item" data-v-df708b9d>拼</span><rp data-v-df708b9d>(</rp><rt class="py-pinyin-item" data-v-df708b9d>pīn</rt><rp data-v-df708b9d>)</rp></ruby></span><span class="py-result-item" data-v-df708b9d><ruby data-v-df708b9d><span class="py-chinese-item" data-v-df708b9d>音</span><rp data-v-df708b9d>(</rp><rt class="py-pinyin-item" data-v-df708b9d>yīn</rt><rp data-v-df708b9d>)</rp></ruby></span>',2);function pa(u,c){return E(),S("div",la,[oa,ee("， "),ua])}const da=Z(ra,[["render",pa],["__scopeId","data-v-df708b9d"]]);const ca={},fa={class:"demo-style-container"},ya=H('<span class="py-result-item" data-v-577a2836><ruby data-v-577a2836><span class="py-chinese-item" data-v-577a2836>汉</span><rp data-v-577a2836>(</rp><rt class="py-pinyin-item" data-v-577a2836>hàn</rt><rp data-v-577a2836>)</rp></ruby></span><span class="py-result-item" data-v-577a2836><ruby data-v-577a2836><span class="py-chinese-item" data-v-577a2836>语</span><rp data-v-577a2836>(</rp><rt class="py-pinyin-item" data-v-577a2836>yǔ</rt><rp data-v-577a2836>)</rp></ruby></span>',2),ga=H('<span class="py-result-item" data-v-577a2836><ruby data-v-577a2836><span class="py-chinese-item" data-v-577a2836>拼</span><rp data-v-577a2836>(</rp><rt class="py-pinyin-item" data-v-577a2836>pīn</rt><rp data-v-577a2836>)</rp></ruby></span><span class="py-result-item" data-v-577a2836><ruby data-v-577a2836><span class="py-chinese-item" data-v-577a2836>音</span><rp data-v-577a2836>(</rp><rt class="py-pinyin-item" data-v-577a2836>yīn</rt><rp data-v-577a2836>)</rp></ruby></span>',2);function ha(u,c){return E(),S("div",fa,[ya,ee(" ， "),ga])}const va=Z(ca,[["render",ha],["__scopeId","data-v-577a2836"]]);const ma={},ba={class:"demo-container"},_a=H('<span class="py-result-item" data-v-19c1f0fa><ruby data-v-19c1f0fa><span class="py-chinese-item" data-v-19c1f0fa>汉</span><rp data-v-19c1f0fa>(</rp><rt class="py-pinyin-item" data-v-19c1f0fa>han</rt><rp data-v-19c1f0fa>)</rp></ruby></span><span class="py-result-item" data-v-19c1f0fa><ruby data-v-19c1f0fa><span class="py-chinese-item" data-v-19c1f0fa>语</span><rp data-v-19c1f0fa>(</rp><rt class="py-pinyin-item" data-v-19c1f0fa>yu</rt><rp data-v-19c1f0fa>)</rp></ruby></span><span class="py-result-item" data-v-19c1f0fa><ruby data-v-19c1f0fa><span class="py-chinese-item" data-v-19c1f0fa>拼</span><rp data-v-19c1f0fa>(</rp><rt class="py-pinyin-item" data-v-19c1f0fa>pin</rt><rp data-v-19c1f0fa>)</rp></ruby></span><span class="py-result-item" data-v-19c1f0fa><ruby data-v-19c1f0fa><span class="py-chinese-item" data-v-19c1f0fa>音</span><rp data-v-19c1f0fa>(</rp><rt class="py-pinyin-item" data-v-19c1f0fa>yin</rt><rp data-v-19c1f0fa>)</rp></ruby></span>',4),xa=[_a];function wa(u,c){return E(),S("div",ba,xa)}const Aa=Z(ma,[["render",wa],["__scopeId","data-v-19c1f0fa"]]);const Fa={},ka={class:"demo-style-container"},$a=H('<span class="py-result-item red-item" data-v-697fd581><ruby data-v-697fd581><span class="py-chinese-item" data-v-697fd581>汉</span><rp data-v-697fd581>(</rp><rt class="py-pinyin-item" data-v-697fd581>hàn</rt><rp data-v-697fd581>)</rp></ruby></span><span class="py-result-item" data-v-697fd581><ruby data-v-697fd581><span class="py-chinese-item" data-v-697fd581>语</span><rp data-v-697fd581>(</rp><rt class="py-pinyin-item" data-v-697fd581>yǔ</rt><rp data-v-697fd581>)</rp></ruby></span><span class="py-result-item" data-v-697fd581><ruby data-v-697fd581><span class="py-chinese-item" data-v-697fd581>拼</span><rp data-v-697fd581>(</rp><rt class="py-pinyin-item" data-v-697fd581>pīn</rt><rp data-v-697fd581>)</rp></ruby></span><span class="py-result-item blue-item" data-v-697fd581><ruby data-v-697fd581><span class="py-chinese-item" data-v-697fd581>音</span><rp data-v-697fd581>(</rp><rt class="py-pinyin-item" data-v-697fd581>yīn</rt><rp data-v-697fd581>)</rp></ruby></span>',4),Ea=[$a];function Sa(u,c){return E(),S("div",ka,Ea)}const Ta=Z(Fa,[["render",Sa],["__scopeId","data-v-697fd581"]]),Ca={extends:re,Layout:()=>pe(re.Layout,null,{}),enhanceApp({app:u,router:c,siteData:n}){u.component("basic-params-table",sa),u.component("html-basic-demo",da),u.component("html-style-demo",va),u.component("html-no-tone-demo",Aa),u.component("html-custom-class-demo",Ta)}};function ce(u){if(u.extends){const c=ce(u.extends);return{...c,...u,async enhanceApp(n){c.enhanceApp&&await c.enhanceApp(n),u.enhanceApp&&await u.enhanceApp(n)}}}return u}const I=ce(Ca),Da=K({name:"VitePressApp",setup(){const{site:u}=Ie();return ue(()=>{He(()=>{document.documentElement.lang=u.value.lang,document.documentElement.dir=u.value.dir})}),je(),Re(),Ze(),I.setup&&I.setup(),()=>pe(I.Layout)}});async function La(){const u=Ma(),c=Pa();c.provide($e,u);const n=Ee(u.route);return c.provide(Se,n),c.component("Content",Te),c.component("ClientOnly",Ce),Object.defineProperties(c.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),I.enhanceApp&&await I.enhanceApp({app:c,router:u,siteData:De}),{app:c,router:u,data:n}}function Pa(){return Le(Da)}function Ma(){let u=Q,c;return Pe(n=>{let p=Me(n),y=null;return p&&(u&&(c=p),(u||c===p)&&(p=p.replace(/\.js$/,".lean.js")),y=ze(()=>import(p),[])),Q&&(u=!1),y},I.NotFound)}Q&&La().then(({app:u,router:c,data:n})=>{c.go().then(()=>{ke(c.route,n.site),u.mount("#app")})});export{La as createApp};
