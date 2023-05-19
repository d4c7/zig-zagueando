/*!
  Highlight.js v11.8.0 (git: 38966a8d28)
  (c) 2006-2023 undefined and other contributors
  License: BSD-3-Clause
 */
var hljs=function(){"use strict";function e(t){
return t instanceof Map?t.clear=t.delete=t.set=()=>{
throw Error("map is read-only")}:t instanceof Set&&(t.add=t.clear=t.delete=()=>{
throw Error("set is read-only")
}),Object.freeze(t),Object.getOwnPropertyNames(t).forEach((n=>{
const s=t[n],i=typeof s;"object"!==i&&"function"!==i||Object.isFrozen(s)||e(s)
})),t}class t{constructor(e){
void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}
ignoreMatch(){this.isMatchIgnored=!0}}function n(e){
return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")
}function s(e,...t){const n=Object.create(null);for(const t in e)n[t]=e[t]
;return t.forEach((e=>{for(const t in e)n[t]=e[t]})),n}const i=e=>!!e.scope
;class o{constructor(e,t){
this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){
this.buffer+=n(e)}openNode(e){if(!i(e))return;const t=((e,{prefix:t})=>{
if(e.startsWith("language:"))return e.replace("language:","language-")
;if(e.includes(".")){const n=e.split(".")
;return[`${t}${n.shift()}`,...n.map(((e,t)=>`${e}${"_".repeat(t+1)}`))].join(" ")
}return`${t}${e}`})(e.scope,{prefix:this.classPrefix});this.span(t)}
closeNode(e){i(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){
this.buffer+=`<span class="${e}">`}}const r=(e={})=>{const t={children:[]}
;return Object.assign(t,e),t};class a{constructor(){
this.rootNode=r(),this.stack=[this.rootNode]}get top(){
return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){
this.top.children.push(e)}openNode(e){const t=r({scope:e})
;this.add(t),this.stack.push(t)}closeNode(){
if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){
for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}
walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){
return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),
t.children.forEach((t=>this._walk(e,t))),e.closeNode(t)),e}static _collapse(e){
"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{
a._collapse(e)})))}}class c extends a{constructor(e){super(),this.options=e}
addText(e){""!==e&&this.add(e)}startScope(e){this.openNode(e)}endScope(){
this.closeNode()}__addSublanguage(e,t){const n=e.root
;t&&(n.scope="language:"+t),this.add(n)}toHTML(){
return new o(this,this.options).value()}finalize(){
return this.closeAllNodes(),!0}}function l(e){
return e?"string"==typeof e?e:e.source:null}function g(e){return h("(?=",e,")")}
function u(e){return h("(?:",e,")*")}function d(e){return h("(?:",e,")?")}
function h(...e){return e.map((e=>l(e))).join("")}function p(...e){const t=(e=>{
const t=e[e.length-1]
;return"object"==typeof t&&t.constructor===Object?(e.splice(e.length-1,1),t):{}
})(e);return"("+(t.capture?"":"?:")+e.map((e=>l(e))).join("|")+")"}
function f(e){return RegExp(e.toString()+"|").exec("").length-1}
const b=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./
;function m(e,{joinWith:t}){let n=0;return e.map((e=>{n+=1;const t=n
;let s=l(e),i="";for(;s.length>0;){const e=b.exec(s);if(!e){i+=s;break}
i+=s.substring(0,e.index),
s=s.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?i+="\\"+(Number(e[1])+t):(i+=e[0],
"("===e[0]&&n++)}return i})).map((e=>`(${e})`)).join(t)}
const _="[a-zA-Z]\\w*",E="[a-zA-Z_]\\w*",y="\\b\\d+(\\.\\d+)?",w="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",x="\\b(0b[01]+)",N={
begin:"\\\\[\\s\\S]",relevance:0},O={scope:"string",begin:"'",end:"'",
illegal:"\\n",contains:[N]},M={scope:"string",begin:'"',end:'"',illegal:"\\n",
contains:[N]},k=(e,t,n={})=>{const i=s({scope:"comment",begin:e,end:t,
contains:[]},n);i.contains.push({scope:"doctag",
begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0})
;const o=p("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/)
;return i.contains.push({begin:h(/[ ]+/,"(",o,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),i
},v=k("//","$"),S=k("/\\*","\\*/"),A=k("#","$");var R=Object.freeze({
__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:_,UNDERSCORE_IDENT_RE:E,
NUMBER_RE:y,C_NUMBER_RE:w,BINARY_NUMBER_RE:x,
RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
SHEBANG:(e={})=>{const t=/^#![ ]*\//
;return e.binary&&(e.begin=h(t,/.*\b/,e.binary,/\b.*/)),s({scope:"meta",begin:t,
end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},
BACKSLASH_ESCAPE:N,APOS_STRING_MODE:O,QUOTE_STRING_MODE:M,PHRASAL_WORDS_MODE:{
begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
},COMMENT:k,C_LINE_COMMENT_MODE:v,C_BLOCK_COMMENT_MODE:S,HASH_COMMENT_MODE:A,
NUMBER_MODE:{scope:"number",begin:y,relevance:0},C_NUMBER_MODE:{scope:"number",
begin:w,relevance:0},BINARY_NUMBER_MODE:{scope:"number",begin:x,relevance:0},
REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,
end:/\/[gimuy]*/,illegal:/\n/,contains:[N,{begin:/\[/,end:/\]/,relevance:0,
contains:[N]}]}]},TITLE_MODE:{scope:"title",begin:_,relevance:0},
UNDERSCORE_TITLE_MODE:{scope:"title",begin:E,relevance:0},METHOD_GUARD:{
begin:"\\.\\s*"+E,relevance:0},END_SAME_AS_BEGIN:e=>Object.assign(e,{
"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{
t.data._beginMatch!==e[1]&&t.ignoreMatch()}})});function T(e,t){
"."===e.input[e.index-1]&&t.ignoreMatch()}function j(e,t){
void 0!==e.className&&(e.scope=e.className,delete e.className)}function I(e,t){
t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",
e.__beforeBegin=T,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,
void 0===e.relevance&&(e.relevance=0))}function L(e,t){
Array.isArray(e.illegal)&&(e.illegal=p(...e.illegal))}function B(e,t){
if(e.match){
if(e.begin||e.end)throw Error("begin & end are not supported with match")
;e.begin=e.match,delete e.match}}function D(e,t){
void 0===e.relevance&&(e.relevance=1)}const C=(e,t)=>{if(!e.beforeMatch)return
;if(e.starts)throw Error("beforeMatch cannot be used with starts")
;const n=Object.assign({},e);Object.keys(e).forEach((t=>{delete e[t]
})),e.keywords=n.keywords,e.begin=h(n.beforeMatch,g(n.begin)),e.starts={
relevance:0,contains:[Object.assign(n,{endsParent:!0})]
},e.relevance=0,delete n.beforeMatch
},$=["of","and","for","in","not","or","if","then","parent","list","value"],z="keyword"
;function H(e,t,n=z){const s=Object.create(null)
;return"string"==typeof e?i(n,e.split(" ")):Array.isArray(e)?i(n,e):Object.keys(e).forEach((n=>{
Object.assign(s,H(e[n],t,n))})),s;function i(e,n){
t&&(n=n.map((e=>e.toLowerCase()))),n.forEach((t=>{const n=t.split("|")
;s[n[0]]=[e,P(n[0],n[1])]}))}}function P(e,t){
return t?Number(t):(e=>$.includes(e.toLowerCase()))(e)?0:1}const U={},G=e=>{
console.error(e)},K=(e,...t)=>{console.log("WARN: "+e,...t)},F=(e,t)=>{
U[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),U[`${e}/${t}`]=!0)
},W=Error();function X(e,t,{key:n}){let s=0;const i=e[n],o={},r={}
;for(let e=1;e<=t.length;e++)r[e+s]=i[e],o[e+s]=!0,s+=f(t[e-1])
;e[n]=r,e[n]._emit=o,e[n]._multi=!0}function Z(e){(e=>{
e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,
delete e.scope)})(e),"string"==typeof e.beginScope&&(e.beginScope={
_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope
}),(e=>{if(Array.isArray(e.begin)){
if(e.skip||e.excludeBegin||e.returnBegin)throw G("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),
W
;if("object"!=typeof e.beginScope||null===e.beginScope)throw G("beginScope must be object"),
W;X(e,e.begin,{key:"beginScope"}),e.begin=m(e.begin,{joinWith:""})}})(e),(e=>{
if(Array.isArray(e.end)){
if(e.skip||e.excludeEnd||e.returnEnd)throw G("skip, excludeEnd, returnEnd not compatible with endScope: {}"),
W
;if("object"!=typeof e.endScope||null===e.endScope)throw G("endScope must be object"),
W;X(e,e.end,{key:"endScope"}),e.end=m(e.end,{joinWith:""})}})(e)}function q(e){
function t(t,n){
return RegExp(l(t),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(n?"g":""))
}class n{constructor(){
this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}
addRule(e,t){
t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),
this.matchAt+=f(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null)
;const e=this.regexes.map((e=>e[1]));this.matcherRe=t(m(e,{joinWith:"|"
}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex
;const t=this.matcherRe.exec(e);if(!t)return null
;const n=t.findIndex(((e,t)=>t>0&&void 0!==e)),s=this.matchIndexes[n]
;return t.splice(0,n),Object.assign(t,s)}}class i{constructor(){
this.rules=[],this.multiRegexes=[],
this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){
if(this.multiRegexes[e])return this.multiRegexes[e];const t=new n
;return this.rules.slice(e).forEach((([e,n])=>t.addRule(e,n))),
t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){
return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){
this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){
const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex
;let n=t.exec(e)
;if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{
const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}
return n&&(this.regexIndex+=n.position+1,
this.regexIndex===this.count&&this.considerAll()),n}}
if(e.compilerExtensions||(e.compilerExtensions=[]),
e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
;return e.classNameAliases=s(e.classNameAliases||{}),function n(o,r){const a=o
;if(o.isCompiled)return a
;[j,B,Z,C].forEach((e=>e(o,r))),e.compilerExtensions.forEach((e=>e(o,r))),
o.__beforeBegin=null,[I,L,D].forEach((e=>e(o,r))),o.isCompiled=!0;let c=null
;return"object"==typeof o.keywords&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),
c=o.keywords.$pattern,
delete o.keywords.$pattern),c=c||/\w+/,o.keywords&&(o.keywords=H(o.keywords,e.case_insensitive)),
a.keywordPatternRe=t(c,!0),
r&&(o.begin||(o.begin=/\B|\b/),a.beginRe=t(a.begin),o.end||o.endsWithParent||(o.end=/\B|\b/),
o.end&&(a.endRe=t(a.end)),
a.terminatorEnd=l(a.end)||"",o.endsWithParent&&r.terminatorEnd&&(a.terminatorEnd+=(o.end?"|":"")+r.terminatorEnd)),
o.illegal&&(a.illegalRe=t(o.illegal)),
o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map((e=>(e=>(e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((t=>s(e,{
variants:null},t)))),e.cachedVariants?e.cachedVariants:Q(e)?s(e,{
starts:e.starts?s(e.starts):null
}):Object.isFrozen(e)?s(e):e))("self"===e?o:e)))),o.contains.forEach((e=>{n(e,a)
})),o.starts&&n(o.starts,r),a.matcher=(e=>{const t=new i
;return e.contains.forEach((e=>t.addRule(e.begin,{rule:e,type:"begin"
}))),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"
}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t})(a),a}(e)}function Q(e){
return!!e&&(e.endsWithParent||Q(e.starts))}class V extends Error{
constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}
const J=n,Y=s,ee=Symbol("nomatch"),te=n=>{
const s=Object.create(null),i=Object.create(null),o=[];let r=!0
;const a="Could not find the language '{}', did you forget to load/include a language module?",l={
disableAutodetect:!0,name:"Plain text",contains:[]};let f={
ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,
languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",
cssSelector:"pre code",languages:null,__emitter:c};function b(e){
return f.noHighlightRe.test(e)}function m(e,t,n){let s="",i=""
;"object"==typeof t?(s=e,
n=t.ignoreIllegals,i=t.language):(F("10.7.0","highlight(lang, code, ...args) has been deprecated."),
F("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),
i=e,s=t),void 0===n&&(n=!0);const o={code:s,language:i};k("before:highlight",o)
;const r=o.result?o.result:_(o.language,o.code,n)
;return r.code=o.code,k("after:highlight",r),r}function _(e,n,i,o){
const c=Object.create(null);function l(){if(!k.keywords)return void S.addText(A)
;let e=0;k.keywordPatternRe.lastIndex=0;let t=k.keywordPatternRe.exec(A),n=""
;for(;t;){n+=A.substring(e,t.index)
;const i=x.case_insensitive?t[0].toLowerCase():t[0],o=(s=i,k.keywords[s]);if(o){
const[e,s]=o
;if(S.addText(n),n="",c[i]=(c[i]||0)+1,c[i]<=7&&(R+=s),e.startsWith("_"))n+=t[0];else{
const n=x.classNameAliases[e]||e;u(t[0],n)}}else n+=t[0]
;e=k.keywordPatternRe.lastIndex,t=k.keywordPatternRe.exec(A)}var s
;n+=A.substring(e),S.addText(n)}function g(){null!=k.subLanguage?(()=>{
if(""===A)return;let e=null;if("string"==typeof k.subLanguage){
if(!s[k.subLanguage])return void S.addText(A)
;e=_(k.subLanguage,A,!0,v[k.subLanguage]),v[k.subLanguage]=e._top
}else e=E(A,k.subLanguage.length?k.subLanguage:null)
;k.relevance>0&&(R+=e.relevance),S.__addSublanguage(e._emitter,e.language)
})():l(),A=""}function u(e,t){
""!==e&&(S.startScope(t),S.addText(e),S.endScope())}function d(e,t){let n=1
;const s=t.length-1;for(;n<=s;){if(!e._emit[n]){n++;continue}
const s=x.classNameAliases[e[n]]||e[n],i=t[n];s?u(i,s):(A=i,l(),A=""),n++}}
function h(e,t){
return e.scope&&"string"==typeof e.scope&&S.openNode(x.classNameAliases[e.scope]||e.scope),
e.beginScope&&(e.beginScope._wrap?(u(A,x.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),
A=""):e.beginScope._multi&&(d(e.beginScope,t),A="")),k=Object.create(e,{parent:{
value:k}}),k}function p(e,n,s){let i=((e,t)=>{const n=e&&e.exec(t)
;return n&&0===n.index})(e.endRe,s);if(i){if(e["on:end"]){const s=new t(e)
;e["on:end"](n,s),s.isMatchIgnored&&(i=!1)}if(i){
for(;e.endsParent&&e.parent;)e=e.parent;return e}}
if(e.endsWithParent)return p(e.parent,n,s)}function b(e){
return 0===k.matcher.regexIndex?(A+=e[0],1):(I=!0,0)}function m(e){
const t=e[0],s=n.substring(e.index),i=p(k,e,s);if(!i)return ee;const o=k
;k.endScope&&k.endScope._wrap?(g(),
u(t,k.endScope._wrap)):k.endScope&&k.endScope._multi?(g(),
d(k.endScope,e)):o.skip?A+=t:(o.returnEnd||o.excludeEnd||(A+=t),
g(),o.excludeEnd&&(A=t));do{
k.scope&&S.closeNode(),k.skip||k.subLanguage||(R+=k.relevance),k=k.parent
}while(k!==i.parent);return i.starts&&h(i.starts,e),o.returnEnd?0:t.length}
let y={};function w(s,o){const a=o&&o[0];if(A+=s,null==a)return g(),0
;if("begin"===y.type&&"end"===o.type&&y.index===o.index&&""===a){
if(A+=n.slice(o.index,o.index+1),!r){const t=Error(`0 width match regex (${e})`)
;throw t.languageName=e,t.badRule=y.rule,t}return 1}
if(y=o,"begin"===o.type)return(e=>{
const n=e[0],s=e.rule,i=new t(s),o=[s.__beforeBegin,s["on:begin"]]
;for(const t of o)if(t&&(t(e,i),i.isMatchIgnored))return b(n)
;return s.skip?A+=n:(s.excludeBegin&&(A+=n),
g(),s.returnBegin||s.excludeBegin||(A=n)),h(s,e),s.returnBegin?0:n.length})(o)
;if("illegal"===o.type&&!i){
const e=Error('Illegal lexeme "'+a+'" for mode "'+(k.scope||"<unnamed>")+'"')
;throw e.mode=k,e}if("end"===o.type){const e=m(o);if(e!==ee)return e}
if("illegal"===o.type&&""===a)return 1
;if(j>1e5&&j>3*o.index)throw Error("potential infinite loop, way more iterations than matches")
;return A+=a,a.length}const x=N(e)
;if(!x)throw G(a.replace("{}",e)),Error('Unknown language: "'+e+'"')
;const O=q(x);let M="",k=o||O;const v={},S=new f.__emitter(f);(()=>{const e=[]
;for(let t=k;t!==x;t=t.parent)t.scope&&e.unshift(t.scope)
;e.forEach((e=>S.openNode(e)))})();let A="",R=0,T=0,j=0,I=!1;try{
if(x.__emitTokens)x.__emitTokens(n,S);else{for(k.matcher.considerAll();;){
j++,I?I=!1:k.matcher.considerAll(),k.matcher.lastIndex=T
;const e=k.matcher.exec(n);if(!e)break;const t=w(n.substring(T,e.index),e)
;T=e.index+t}w(n.substring(T))}return S.finalize(),M=S.toHTML(),{language:e,
value:M,relevance:R,illegal:!1,_emitter:S,_top:k}}catch(t){
if(t.message&&t.message.includes("Illegal"))return{language:e,value:J(n),
illegal:!0,relevance:0,_illegalBy:{message:t.message,index:T,
context:n.slice(T-100,T+100),mode:t.mode,resultSoFar:M},_emitter:S};if(r)return{
language:e,value:J(n),illegal:!1,relevance:0,errorRaised:t,_emitter:S,_top:k}
;throw t}}function E(e,t){t=t||f.languages||Object.keys(s);const n=(e=>{
const t={value:J(e),illegal:!1,relevance:0,_top:l,_emitter:new f.__emitter(f)}
;return t._emitter.addText(e),t})(e),i=t.filter(N).filter(M).map((t=>_(t,e,!1)))
;i.unshift(n);const o=i.sort(((e,t)=>{
if(e.relevance!==t.relevance)return t.relevance-e.relevance
;if(e.language&&t.language){if(N(e.language).supersetOf===t.language)return 1
;if(N(t.language).supersetOf===e.language)return-1}return 0})),[r,a]=o,c=r
;return c.secondBest=a,c}function y(e){let t=null;const n=(e=>{
let t=e.className+" ";t+=e.parentNode?e.parentNode.className:""
;const n=f.languageDetectRe.exec(t);if(n){const t=N(n[1])
;return t||(K(a.replace("{}",n[1])),
K("Falling back to no-highlight mode for this block.",e)),t?n[1]:"no-highlight"}
return t.split(/\s+/).find((e=>b(e)||N(e)))})(e);if(b(n))return
;if(k("before:highlightElement",{el:e,language:n
}),e.dataset.highlighted)return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",e)
;if(e.children.length>0&&(f.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),
console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),
console.warn("The element with unescaped HTML:"),
console.warn(e)),f.throwUnescapedHTML))throw new V("One of your code blocks includes unescaped HTML.",e.innerHTML)
;t=e;const s=t.textContent,o=n?m(s,{language:n,ignoreIllegals:!0}):E(s)
;e.innerHTML=o.value,e.dataset.highlighted="yes",((e,t,n)=>{const s=t&&i[t]||n
;e.classList.add("hljs"),e.classList.add("language-"+s)
})(e,n,o.language),e.result={language:o.language,re:o.relevance,
relevance:o.relevance},o.secondBest&&(e.secondBest={
language:o.secondBest.language,relevance:o.secondBest.relevance
}),k("after:highlightElement",{el:e,result:o,text:s})}let w=!1;function x(){
"loading"!==document.readyState?document.querySelectorAll(f.cssSelector).forEach(y):w=!0
}function N(e){return e=(e||"").toLowerCase(),s[e]||s[i[e]]}
function O(e,{languageName:t}){"string"==typeof e&&(e=[e]),e.forEach((e=>{
i[e.toLowerCase()]=t}))}function M(e){const t=N(e)
;return t&&!t.disableAutodetect}function k(e,t){const n=e;o.forEach((e=>{
e[n]&&e[n](t)}))}
"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(()=>{
w&&x()}),!1),Object.assign(n,{highlight:m,highlightAuto:E,highlightAll:x,
highlightElement:y,
highlightBlock:e=>(F("10.7.0","highlightBlock will be removed entirely in v12.0"),
F("10.7.0","Please use highlightElement now."),y(e)),configure:e=>{f=Y(f,e)},
initHighlighting:()=>{
x(),F("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},
initHighlightingOnLoad:()=>{
x(),F("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
},registerLanguage:(e,t)=>{let i=null;try{i=t(n)}catch(t){
if(G("Language definition for '{}' could not be registered.".replace("{}",e)),
!r)throw t;G(t),i=l}
i.name||(i.name=e),s[e]=i,i.rawDefinition=t.bind(null,n),i.aliases&&O(i.aliases,{
languageName:e})},unregisterLanguage:e=>{delete s[e]
;for(const t of Object.keys(i))i[t]===e&&delete i[t]},
listLanguages:()=>Object.keys(s),getLanguage:N,registerAliases:O,
autoDetection:M,inherit:Y,addPlugin:e=>{(e=>{
e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{
e["before:highlightBlock"](Object.assign({block:t.el},t))
}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{
e["after:highlightBlock"](Object.assign({block:t.el},t))})})(e),o.push(e)},
removePlugin:e=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}),n.debugMode=()=>{
r=!1},n.safeMode=()=>{r=!0},n.versionString="11.8.0",n.regex={concat:h,
lookahead:g,either:p,optional:d,anyNumberOfTimes:u}
;for(const t in R)"object"==typeof R[t]&&e(R[t]);return Object.assign(n,R),n
},ne=te({});ne.newInstance=()=>te({})
;var se=ne,ie="[0-9](_*[0-9])*",oe=`\\.(${ie})`,re="[0-9a-fA-F](_*[0-9a-fA-F])*",ae={
className:"number",variants:[{
begin:`(\\b(${ie})((${oe})|\\.)?|(${oe}))[eE][+-]?(${ie})[fFdD]?\\b`},{
begin:`\\b(${ie})((${oe})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{
begin:`(${oe})[fFdD]?\\b`},{begin:`\\b(${ie})[fFdD]\\b`},{
begin:`\\b0[xX]((${re})\\.?|(${re})?\\.(${re}))[pP][+-]?(${ie})[fFdD]?\\b`},{
begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${re})[lL]?\\b`},{
begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],
relevance:0},ce=Object.freeze({__proto__:null,grmr_zig:e=>{const t={
keyword:["const","let","fn","inline","while","for","extern","packed","export","pub","noalias","comptime","volatile","align","linksection","threadlocal","allowzero","noinline","callconv","struct","enum","union","opaque","asm","unreachable","break","return","continue","defer","errdefer","await","resume","suspend","async","nosuspend","try","catch","if","else","switch","orelse","usingnamespace","test","and","or"],
literal:["null","undefined","true","false"],
type:["f16","f32","f64","f80","f128","usize","isize","comptime_int","comptime_float","bool","void","noreturn","type","error","anyerror","anyframe","anytype","anyopaque","c_short","c_ushort","c_int","c_uint","c_long","c_ulong","c_longlong","c_longdouble"]
},n="[_a-zA-Z][_a-zA-Z0-9]*",s={match:/(u|i)\d+/,className:"type"};return{
name:"ZIG",keywords:t,aliases:["zig"],contains:[{match:"@"+n,
className:"built_in"},{
begin:["(?:"+n+"\\s+)",e.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{
2:"title.function"},keywords:t,contains:[{className:"params",begin:/\(/,
end:/\)/,keywords:t,relevance:0,
contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_BLOCK_COMMENT_MODE,s]
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{
beginKeywords:"struct union enum error",relevance:0},{begin:[n,/\s*(?=\{)/],
className:{1:"title.class"},keywords:t,
contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,s]},{
beginKeywords:"struct",relevance:0},{match:[n,/\s*:\s*/,n],className:{3:"type"}
},e.QUOTE_STRING_MODE,{begin:/\\\\/,end:/\n/,className:"string"},ae,{
begin:/\/\//,end:/\n/,className:"comment"},s]}},grmr_json:e=>{
const t=["true","false","null"],n={scope:"literal",beginKeywords:t.join(" ")}
;return{name:"JSON",keywords:{literal:t},contains:[{className:"attr",
begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},{match:/[{}[\],:]/,
className:"punctuation",relevance:0
},e.QUOTE_STRING_MODE,n,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],
illegal:"\\S"}},grmr_bash:e=>{const t=e.regex,n={},s={begin:/\$\{/,end:/\}/,
contains:["self",{begin:/:-/,contains:[n]}]};Object.assign(n,{
className:"variable",variants:[{
begin:t.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},s]});const i={
className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},o={
begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,
end:/(\w+)/,className:"string"})]}},r={className:"string",begin:/"/,end:/"/,
contains:[e.BACKSLASH_ESCAPE,n,i]};i.contains.push(r);const a={begin:/\$?\(\(/,
end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,n]
},c=e.SHEBANG({binary:"(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)",relevance:10
}),l={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,
contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{
name:"Bash",aliases:["sh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,
keyword:["if","then","else","elif","fi","for","while","until","in","do","done","case","esac","function","select"],
literal:["true","false"],
built_in:["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset","alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","type","typeset","ulimit","unalias","set","shopt","autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp","chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"]
},contains:[c,e.SHEBANG(),l,a,e.HASH_COMMENT_MODE,o,{match:/(\/[a-z._-]+)+/},r,{
className:"",begin:/\\"/},{className:"string",begin:/'/,end:/'/},n]}},
grmr_plaintext:e=>({name:"Plain text",aliases:["text","txt"],
disableAutodetect:!0})});const le=se;for(const e of Object.keys(ce)){
const t=e.replace("grmr_","").replace("_","-");le.registerLanguage(t,ce[e])}
return le}()
;"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=hljs);