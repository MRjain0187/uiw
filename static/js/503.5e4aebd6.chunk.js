(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[503,512,604],{1230:function(t,e,n){!function(t){"use strict";var e={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},n={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1};t.defineMode("xml",(function(a,r){var o,l,i=a.indentUnit,s={},c=r.htmlMode?e:n;for(var u in c)s[u]=c[u];for(var u in r)s[u]=r[u];function d(t,e){function n(n){return e.tokenize=n,n(t,e)}var a=t.next();return"<"==a?t.eat("!")?t.eat("[")?t.match("CDATA[")?n(p("atom","]]>")):null:t.match("--")?n(p("comment","--\x3e")):t.match("DOCTYPE",!0,!0)?(t.eatWhile(/[\w\._\-]/),n(function t(e){return function(n,a){for(var r;null!=(r=n.next());){if("<"==r)return a.tokenize=t(e+1),a.tokenize(n,a);if(">"==r){if(1==e){a.tokenize=d;break}return a.tokenize=t(e-1),a.tokenize(n,a)}}return"meta"}}(1))):null:t.eat("?")?(t.eatWhile(/[\w\._\-]/),e.tokenize=p("meta","?>"),"meta"):(o=t.eat("/")?"closeTag":"openTag",e.tokenize=m,"tag bracket"):"&"==a?(t.eat("#")?t.eat("x")?t.eatWhile(/[a-fA-F\d]/)&&t.eat(";"):t.eatWhile(/[\d]/)&&t.eat(";"):t.eatWhile(/[\w\.\-:]/)&&t.eat(";"))?"atom":"error":(t.eatWhile(/[^&<]/),null)}function m(t,e){var n=t.next();if(">"==n||"/"==n&&t.eat(">"))return e.tokenize=d,o=">"==n?"endTag":"selfcloseTag","tag bracket";if("="==n)return o="equals",null;if("<"==n){e.tokenize=d,e.state=y,e.tagName=e.tagStart=null;var a=e.tokenize(t,e);return a?a+" tag error":"tag error"}return/[\'\"]/.test(n)?(e.tokenize=function(t){var e=function(e,n){for(;!e.eol();)if(e.next()==t){n.tokenize=m;break}return"string"};return e.isInAttribute=!0,e}(n),e.stringStartCol=t.column(),e.tokenize(t,e)):(t.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function p(t,e){return function(n,a){for(;!n.eol();){if(n.match(e)){a.tokenize=d;break}n.next()}return t}}function f(t,e,n){this.prev=t.context,this.tagName=e,this.indent=t.indented,this.startOfLine=n,(s.doNotIndent.hasOwnProperty(e)||t.context&&t.context.noIndent)&&(this.noIndent=!0)}function g(t){t.context&&(t.context=t.context.prev)}function h(t,e){for(var n;;){if(!t.context)return;if(n=t.context.tagName,!s.contextGrabbers.hasOwnProperty(n)||!s.contextGrabbers[n].hasOwnProperty(e))return;g(t)}}function y(t,e,n){return"openTag"==t?(n.tagStart=e.column(),S):"closeTag"==t?x:y}function S(t,e,n){return"word"==t?(n.tagName=e.current(),l="tag",k):s.allowMissingTagName&&"endTag"==t?(l="tag bracket",k(t,0,n)):(l="error",S)}function x(t,e,n){if("word"==t){var a=e.current();return n.context&&n.context.tagName!=a&&s.implicitlyClosed.hasOwnProperty(n.context.tagName)&&g(n),n.context&&n.context.tagName==a||!1===s.matchClosing?(l="tag",v):(l="tag error",b)}return s.allowMissingTagName&&"endTag"==t?(l="tag bracket",v(t,0,n)):(l="error",b)}function v(t,e,n){return"endTag"!=t?(l="error",v):(g(n),y)}function b(t,e,n){return l="error",v(t,0,n)}function k(t,e,n){if("word"==t)return l="attribute",w;if("endTag"==t||"selfcloseTag"==t){var a=n.tagName,r=n.tagStart;return n.tagName=n.tagStart=null,"selfcloseTag"==t||s.autoSelfClosers.hasOwnProperty(a)?h(n,a):(h(n,a),n.context=new f(n,a,r==n.indented)),y}return l="error",k}function w(t,e,n){return"equals"==t?T:(s.allowMissing||(l="error"),k(t,0,n))}function T(t,e,n){return"string"==t?M:"word"==t&&s.allowUnquoted?(l="string",k):(l="error",k(t,0,n))}function M(t,e,n){return"string"==t?M:k(t,0,n)}return d.isInText=!0,{startState:function(t){var e={tokenize:d,state:y,indented:t||0,tagName:null,tagStart:null,context:null};return null!=t&&(e.baseIndent=t),e},token:function(t,e){if(!e.tagName&&t.sol()&&(e.indented=t.indentation()),t.eatSpace())return null;o=null;var n=e.tokenize(t,e);return(n||o)&&"comment"!=n&&(l=null,e.state=e.state(o||n,t,e),l&&(n="error"==l?n+" error":l)),n},indent:function(e,n,a){var r=e.context;if(e.tokenize.isInAttribute)return e.tagStart==e.indented?e.stringStartCol+1:e.indented+i;if(r&&r.noIndent)return t.Pass;if(e.tokenize!=m&&e.tokenize!=d)return a?a.match(/^(\s*)/)[0].length:0;if(e.tagName)return!1!==s.multilineTagIndentPastTag?e.tagStart+e.tagName.length+2:e.tagStart+i*(s.multilineTagIndentFactor||1);if(s.alignCDATA&&/<!\[CDATA\[/.test(n))return 0;var o=n&&/^<(\/)?([\w_:\.-]*)/.exec(n);if(o&&o[1])for(;r;){if(r.tagName==o[2]){r=r.prev;break}if(!s.implicitlyClosed.hasOwnProperty(r.tagName))break;r=r.prev}else if(o)for(;r;){var l=s.contextGrabbers[r.tagName];if(!l||!l.hasOwnProperty(o[2]))break;r=r.prev}for(;r&&r.prev&&!r.startOfLine;)r=r.prev;return r?r.indent+i:e.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"\x3c!--",blockCommentEnd:"--\x3e",configuration:s.htmlMode?"html":"xml",helperType:s.htmlMode?"html":"xml",skipAttribute:function(t){t.state==T&&(t.state=k)},xmlCurrentTag:function(t){return t.tagName?{name:t.tagName,close:"closeTag"==t.type}:null},xmlCurrentContext:function(t){for(var e=[],n=t.context;n;n=n.prev)n.tagName&&e.push(n.tagName);return e.reverse()}}})),t.defineMIME("text/xml","xml"),t.defineMIME("application/xml","xml"),t.mimeModes.hasOwnProperty("text/html")||t.defineMIME("text/html",{name:"xml",htmlMode:!0})}(n(807))},1231:function(t,e,n){!function(t){"use strict";var e={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]},n={};function a(t,e){var a=t.match(function(t){var e=n[t];return e||(n[t]=new RegExp("\\s+"+t+"\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*"))}(e));return a?/^\s*(.*?)\s*$/.exec(a[2])[1]:""}function r(t,e){return new RegExp((e?"^":"")+"</s*"+t+"s*>","i")}function o(t,e){for(var n in t)for(var a=e[n]||(e[n]=[]),r=t[n],o=r.length-1;o>=0;o--)a.unshift(r[o])}t.defineMode("htmlmixed",(function(n,l){var i=t.getMode(n,{name:"xml",htmlMode:!0,multilineTagIndentFactor:l.multilineTagIndentFactor,multilineTagIndentPastTag:l.multilineTagIndentPastTag}),s={},c=l&&l.tags,u=l&&l.scriptTypes;if(o(e,s),c&&o(c,s),u)for(var d=u.length-1;d>=0;d--)s.script.unshift(["type",u[d].matches,u[d].mode]);function m(e,o){var l,c=i.token(e,o.htmlState),u=/\btag\b/.test(c);if(u&&!/[<>\s\/]/.test(e.current())&&(l=o.htmlState.tagName&&o.htmlState.tagName.toLowerCase())&&s.hasOwnProperty(l))o.inTag=l+" ";else if(o.inTag&&u&&/>$/.test(e.current())){var d=/^([\S]+) (.*)/.exec(o.inTag);o.inTag=null;var p=">"==e.current()&&function(t,e){for(var n=0;n<t.length;n++){var r=t[n];if(!r[0]||r[1].test(a(e,r[0])))return r[2]}}(s[d[1]],d[2]),f=t.getMode(n,p),g=r(d[1],!0),h=r(d[1],!1);o.token=function(t,e){return t.match(g,!1)?(e.token=m,e.localState=e.localMode=null,null):function(t,e,n){var a=t.current(),r=a.search(e);return r>-1?t.backUp(a.length-r):a.match(/<\/?$/)&&(t.backUp(a.length),t.match(e,!1)||t.match(a)),n}(t,h,e.localMode.token(t,e.localState))},o.localMode=f,o.localState=t.startState(f,i.indent(o.htmlState,"",""))}else o.inTag&&(o.inTag+=e.current(),e.eol()&&(o.inTag+=" "));return c}return{startState:function(){return{token:m,inTag:null,localMode:null,localState:null,htmlState:t.startState(i)}},copyState:function(e){var n;return e.localState&&(n=t.copyState(e.localMode,e.localState)),{token:e.token,inTag:e.inTag,localMode:e.localMode,localState:n,htmlState:t.copyState(i,e.htmlState)}},token:function(t,e){return e.token(t,e)},indent:function(e,n,a){return!e.localMode||/^\s*<\//.test(n)?i.indent(e.htmlState,n,a):e.localMode.indent?e.localMode.indent(e.localState,n,a):t.Pass},innerMode:function(t){return{state:t.localState||t.htmlState,mode:t.localMode||i}}}}),"xml","javascript","css"),t.defineMIME("text/html","htmlmixed")}(n(807),n(1230),n(1233),n(1232))},1327:function(t,e,n){!function(t){"use strict";var e={noEndTag:!0,soyState:"param-def"},n={alias:{noEndTag:!0},delpackage:{noEndTag:!0},namespace:{noEndTag:!0,soyState:"namespace-def"},"@param":e,"@param?":e,"@inject":e,"@inject?":e,"@state":e,template:{soyState:"templ-def",variableScope:!0},literal:{},msg:{},fallbackmsg:{noEndTag:!0,reduceIndent:!0},select:{},plural:{},let:{soyState:"var-def"},if:{},elseif:{noEndTag:!0,reduceIndent:!0},else:{noEndTag:!0,reduceIndent:!0},switch:{},case:{noEndTag:!0,reduceIndent:!0},default:{noEndTag:!0,reduceIndent:!0},foreach:{variableScope:!0,soyState:"var-def"},ifempty:{noEndTag:!0,reduceIndent:!0},for:{variableScope:!0,soyState:"var-def"},call:{soyState:"templ-ref"},param:{soyState:"param-ref"},print:{noEndTag:!0},deltemplate:{soyState:"templ-def",variableScope:!0},delcall:{soyState:"templ-ref"},log:{},element:{variableScope:!0}},a=Object.keys(n).filter((function(t){return!n[t].noEndTag||n[t].reduceIndent}));t.defineMode("soy",(function(e){var r=t.getMode(e,"text/plain"),o={html:t.getMode(e,{name:"text/html",multilineTagIndentFactor:2,multilineTagIndentPastTag:!1}),attributes:r,text:r,uri:r,trusted_resource_uri:r,css:t.getMode(e,"text/css"),js:t.getMode(e,{name:"text/javascript",statementIndent:2*e.indentUnit})};function l(t){return t[t.length-1]}function i(t,e,n){if(t.sol()){for(var a=0;a<e.indent&&t.eat(/\s/);a++);if(a)return null}var r=t.string,o=n.exec(r.substr(t.pos));o&&(t.string=r.substr(0,t.pos+o.index));var i=t.hideFirstChars(e.indent,(function(){var n=l(e.localStates);return n.mode.token(t,n.state)}));return t.string=r,i}function s(t,e){return{element:e,next:t}}function c(t){t.context&&(t.context.scope&&(t.variables=t.context.scope),t.context=t.context.previousContext)}function u(t,e,n){this.previousContext=t,this.tag=e,this.kind=null,this.scope=n}function d(t,e){var n,a,r,o;return t.match(/[[]/)?(e.soyState.push("list-literal"),e.lookupVariables=!1,null):t.match(/map\b/)?(e.soyState.push("map-literal"),"keyword"):t.match(/record\b/)?(e.soyState.push("record-literal"),"keyword"):t.match(/([\w]+)(?=\()/)?"variable callee":(n=t.match(/^["']/))?(e.soyState.push("string"),e.quoteKind=n[0],"string"):t.match(/^[(]/)?(e.soyState.push("open-parentheses"),null):t.match(/(null|true|false)(?!\w)/)||t.match(/0x([0-9a-fA-F]{2,})/)||t.match(/-?([0-9]*[.])?[0-9]+(e[0-9]*)?/)?"atom":t.match(/(\||[+\-*\/%]|[=!]=|\?:|[<>]=?)/)?"operator":(n=t.match(/^\$([\w]+)/))?(a=e.variables,r=n[1],o=!e.lookupVariables,function(t,e){for(;t;){if(t.element===e)return!0;t=t.next}return!1}(a,r)?"variable-2":o?"variable":"variable-2 error"):(n=t.match(/^\w+/))?/^(?:as|and|or|not|in|if)$/.test(n[0])?"keyword":null:(t.next(),null)}return{startState:function(){return{soyState:[],variables:s(null,"ij"),scopes:null,indent:0,quoteKind:null,context:null,lookupVariables:!0,localStates:[{mode:o.html,state:t.startState(o.html)}]}},copyState:function(e){return{tag:e.tag,soyState:e.soyState.concat([]),variables:e.variables,context:e.context,indent:e.indent,quoteKind:e.quoteKind,lookupVariables:e.lookupVariables,localStates:e.localStates.map((function(e){return{mode:e.mode,state:t.copyState(e.mode,e.state)}}))}},token:function(r,m){switch(l(m.soyState)){case"comment":if(r.match(/^.*?\*\//)?m.soyState.pop():r.skipToEnd(),!m.context||!m.context.scope)for(var p=/@param\??\s+(\S+)/g,f=r.current();g=p.exec(f);)m.variables=s(m.variables,g[1]);return"comment";case"string":var g;return(g=r.match(/^.*?(["']|\\[\s\S])/))?g[1]==m.quoteKind&&(m.quoteKind=null,m.soyState.pop()):r.skipToEnd(),"string"}if(!m.soyState.length||"literal"!=l(m.soyState)){if(r.match(/^\/\*/))return m.soyState.push("comment"),"comment";if(r.match(r.sol()?/^\s*\/\/.*/:/^\s+\/\/.*/))return"comment"}switch(l(m.soyState)){case"templ-def":return(g=r.match(/^\.?([\w]+(?!\.[\w]+)*)/))?(m.soyState.pop(),"def"):(r.next(),null);case"templ-ref":return(g=r.match(/(\.?[a-zA-Z_][a-zA-Z_0-9]+)+/))?(m.soyState.pop(),"."==g[0][0]?"variable-2":"variable"):(r.next(),null);case"namespace-def":return(g=r.match(/^\.?([\w\.]+)/))?(m.soyState.pop(),"variable"):(r.next(),null);case"param-def":return(g=r.match(/^\w+/))?(m.variables=s(m.variables,g[0]),m.soyState.pop(),m.soyState.push("param-type"),"def"):(r.next(),null);case"param-ref":return(g=r.match(/^\w+/))?(m.soyState.pop(),"property"):(r.next(),null);case"open-parentheses":return r.match(/[)]/)?(m.soyState.pop(),null):d(r,m);case"param-type":var h=r.peek();return-1!="}]=>,".indexOf(h)?(m.soyState.pop(),null):"["==h?(m.soyState.push("param-type-record"),null):"<"==h?(m.soyState.push("param-type-parameter"),null):(g=r.match(/^([\w]+|[?])/))?"type":(r.next(),null);case"param-type-record":return"]"==(h=r.peek())?(m.soyState.pop(),null):r.match(/^\w+/)?(m.soyState.push("param-type"),"property"):(r.next(),null);case"param-type-parameter":return r.match(/^[>]/)?(m.soyState.pop(),null):r.match(/^[<,]/)?(m.soyState.push("param-type"),null):(r.next(),null);case"var-def":return(g=r.match(/^\$([\w]+)/))?(m.variables=s(m.variables,g[1]),m.soyState.pop(),"def"):(r.next(),null);case"record-literal":return r.match(/^[)]/)?(m.soyState.pop(),null):r.match(/[(,]/)?(m.soyState.push("map-value"),m.soyState.push("record-key"),null):(r.next(),null);case"map-literal":return r.match(/^[)]/)?(m.soyState.pop(),null):r.match(/[(,]/)?(m.soyState.push("map-value"),m.soyState.push("map-value"),null):(r.next(),null);case"list-literal":return r.match(/\]/)?(m.soyState.pop(),m.lookupVariables=!0,null):r.match(/for\b/)?(m.soyState.push("var-def"),"keyword"):r.match(/in\b/)?(m.lookupVariables=!0,"keyword"):d(r,m);case"record-key":return r.match(/[\w]+/)?"property":r.match(/^[:]/)?(m.soyState.pop(),null):(r.next(),null);case"map-value":return")"==r.peek()||","==r.peek()||r.match(/^[:)]/)?(m.soyState.pop(),null):d(r,m);case"tag":var y=(w="/"==m.tag[0])?m.tag.substring(1):m.tag,S=n[y];if(r.match(/^\/?}/)){var x="/}"==r.current();return x&&!w&&c(m),"/template"==m.tag||"/deltemplate"==m.tag?(m.variables=s(null,"ij"),m.indent=0):m.indent-=e.indentUnit*(x||-1==a.indexOf(m.tag)?2:1),m.soyState.pop(),"keyword"}if(r.match(/^([\w?]+)(?==)/)){if(m.context&&m.context.tag==y&&"kind"==r.current()&&(g=r.match(/^="([^"]+)/,!1))){var v=g[1];m.context.kind=v;var b=o[v]||o.html;(I=l(m.localStates)).mode.indent&&(m.indent+=I.mode.indent(I.state,"","")),m.localStates.push({mode:b,state:t.startState(b)})}return"attribute"}return d(r,m);case"literal":return r.match(/^(?=\{\/literal})/)?(m.soyState.pop(),this.token(r,m)):i(r,m,/\{\/literal}/)}if(r.match(/^\{literal}/))return m.indent+=e.indentUnit,m.soyState.push("literal"),m.context=new u(m.context,"literal",m.variables),"keyword";if(g=r.match(/^\{([/@\\]?\w+\??)(?=$|[\s}]|\/[/*])/)){var k=m.tag;m.tag=g[1];var w="/"==m.tag[0],T=!!n[m.tag];y=w?m.tag.substring(1):m.tag,S=n[y],"/switch"!=m.tag&&(m.indent+=((w||S&&S.reduceIndent)&&"switch"!=k?1:2)*e.indentUnit),m.soyState.push("tag");var M=!1;if(S)if(w||S.soyState&&m.soyState.push(S.soyState),S.noEndTag||!T&&w){if(w)if(m.context&&m.context.tag==y){if(m.context){var I;m.context.kind&&(m.localStates.pop(),(I=l(m.localStates)).mode.indent&&(m.indent-=I.mode.indent(I.state,"",""))),c(m)}}else M=!0}else m.context=new u(m.context,m.tag,S.variableScope?m.variables:null);else w&&(M=!0);return(M?"error ":"")+"keyword"}return r.eat("{")?(m.tag="print",m.indent+=2*e.indentUnit,m.soyState.push("tag"),"keyword"):i(r,m,/\{|\s+\/\/|\/\*/)},indent:function(n,a,r){var o=n.indent,i=l(n.soyState);if("comment"==i)return t.Pass;if("literal"==i)/^\{\/literal}/.test(a)&&(o-=e.indentUnit);else{if(/^\s*\{\/(template|deltemplate)\b/.test(a))return 0;/^\{(\/|(fallbackmsg|elseif|else|ifempty)\b)/.test(a)&&(o-=e.indentUnit),"switch"!=n.tag&&/^\{(case|default)\b/.test(a)&&(o-=e.indentUnit),/^\{\/switch\b/.test(a)&&(o-=e.indentUnit)}var s=l(n.localStates);return o&&s.mode.indent&&(o+=s.mode.indent(s.state,a,r)),o},innerMode:function(t){return t.soyState.length&&"literal"!=l(t.soyState)?null:l(t.localStates)},electricInput:/^\s*\{(\/|\/template|\/deltemplate|\/switch|fallbackmsg|elseif|else|case|default|ifempty|\/literal\})$/,lineComment:"//",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",useInnerComments:!1,fold:"indent"}}),"htmlmixed"),t.registerHelper("wordChars","soy",/[\w$]/),t.registerHelper("hintWords","soy",Object.keys(n).concat(["css","debugger"])),t.defineMIME("text/x-soy","soy")}(n(807),n(1231))}}]);