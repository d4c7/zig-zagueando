/*!
  Highlight.js v11.8.0 (git: 38966a8d28)
  (c) 2006-2023 undefined and other contributors
  License: BSD-3-Clause
 */
var hljs=function(){"use strict";function e(n){
return n instanceof Map?n.clear=n.delete=n.set=()=>{
throw Error("map is read-only")}:n instanceof Set&&(n.add=n.clear=n.delete=()=>{
throw Error("set is read-only")
}),Object.freeze(n),Object.getOwnPropertyNames(n).forEach((t=>{
const s=n[t],a=typeof s;"object"!==a&&"function"!==a||Object.isFrozen(s)||e(s)
})),n}class n{constructor(e){
void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}
ignoreMatch(){this.isMatchIgnored=!0}}function t(e){
return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")
}function s(e,...n){const t=Object.create(null);for(const n in e)t[n]=e[n]
;return n.forEach((e=>{for(const n in e)t[n]=e[n]})),t}const a=e=>!!e.scope
;class i{constructor(e,n){
this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){
this.buffer+=t(e)}openNode(e){if(!a(e))return;const n=((e,{prefix:n})=>{
if(e.startsWith("language:"))return e.replace("language:","language-")
;if(e.includes(".")){const t=e.split(".")
;return[`${n}${t.shift()}`,...t.map(((e,n)=>`${e}${"_".repeat(n+1)}`))].join(" ")
}return`${n}${e}`})(e.scope,{prefix:this.classPrefix});this.span(n)}
closeNode(e){a(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){
this.buffer+=`<span class="${e}">`}}const r=(e={})=>{const n={children:[]}
;return Object.assign(n,e),n};class o{constructor(){
this.rootNode=r(),this.stack=[this.rootNode]}get top(){
return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){
this.top.children.push(e)}openNode(e){const n=r({scope:e})
;this.add(n),this.stack.push(n)}closeNode(){
if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){
for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}
walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){
return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),
n.children.forEach((n=>this._walk(e,n))),e.closeNode(n)),e}static _collapse(e){
"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{
o._collapse(e)})))}}class c extends o{constructor(e){super(),this.options=e}
addText(e){""!==e&&this.add(e)}startScope(e){this.openNode(e)}endScope(){
this.closeNode()}__addSublanguage(e,n){const t=e.root
;n&&(t.scope="language:"+n),this.add(t)}toHTML(){
return new i(this,this.options).value()}finalize(){
return this.closeAllNodes(),!0}}function l(e){
return e?"string"==typeof e?e:e.source:null}function g(e){return h("(?=",e,")")}
function d(e){return h("(?:",e,")*")}function u(e){return h("(?:",e,")?")}
function h(...e){return e.map((e=>l(e))).join("")}function b(...e){const n=(e=>{
const n=e[e.length-1]
;return"object"==typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}
})(e);return"("+(n.capture?"":"?:")+e.map((e=>l(e))).join("|")+")"}
function p(e){return RegExp(e.toString()+"|").exec("").length-1}
const m=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./
;function f(e,{joinWith:n}){let t=0;return e.map((e=>{t+=1;const n=t
;let s=l(e),a="";for(;s.length>0;){const e=m.exec(s);if(!e){a+=s;break}
a+=s.substring(0,e.index),
s=s.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?a+="\\"+(Number(e[1])+n):(a+=e[0],
"("===e[0]&&t++)}return a})).map((e=>`(${e})`)).join(n)}
const _="[a-zA-Z]\\w*",E="[a-zA-Z_]\\w*",y="\\b\\d+(\\.\\d+)?",N="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",w="\\b(0b[01]+)",x={
begin:"\\\\[\\s\\S]",relevance:0},v={scope:"string",begin:"'",end:"'",
illegal:"\\n",contains:[x]},O={scope:"string",begin:'"',end:'"',illegal:"\\n",
contains:[x]},A=(e,n,t={})=>{const a=s({scope:"comment",begin:e,end:n,
contains:[]},t);a.contains.push({scope:"doctag",
begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0})
;const i=b("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/)
;return a.contains.push({begin:h(/[ ]+/,"(",i,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),a
},S=A("//","$"),k=A("/\\*","\\*/"),M=A("#","$");var R=Object.freeze({
__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:_,UNDERSCORE_IDENT_RE:E,
NUMBER_RE:y,C_NUMBER_RE:N,BINARY_NUMBER_RE:w,
RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
SHEBANG:(e={})=>{const n=/^#![ ]*\//
;return e.binary&&(e.begin=h(n,/.*\b/,e.binary,/\b.*/)),s({scope:"meta",begin:n,
end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},
BACKSLASH_ESCAPE:x,APOS_STRING_MODE:v,QUOTE_STRING_MODE:O,PHRASAL_WORDS_MODE:{
begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
},COMMENT:A,C_LINE_COMMENT_MODE:S,C_BLOCK_COMMENT_MODE:k,HASH_COMMENT_MODE:M,
NUMBER_MODE:{scope:"number",begin:y,relevance:0},C_NUMBER_MODE:{scope:"number",
begin:N,relevance:0},BINARY_NUMBER_MODE:{scope:"number",begin:w,relevance:0},
REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,
end:/\/[gimuy]*/,illegal:/\n/,contains:[x,{begin:/\[/,end:/\]/,relevance:0,
contains:[x]}]}]},TITLE_MODE:{scope:"title",begin:_,relevance:0},
UNDERSCORE_TITLE_MODE:{scope:"title",begin:E,relevance:0},METHOD_GUARD:{
begin:"\\.\\s*"+E,relevance:0},END_SAME_AS_BEGIN:e=>Object.assign(e,{
"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{
n.data._beginMatch!==e[1]&&n.ignoreMatch()}})});function T(e,n){
"."===e.input[e.index-1]&&n.ignoreMatch()}function I(e,n){
void 0!==e.className&&(e.scope=e.className,delete e.className)}function L(e,n){
n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",
e.__beforeBegin=T,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,
void 0===e.relevance&&(e.relevance=0))}function C(e,n){
Array.isArray(e.illegal)&&(e.illegal=b(...e.illegal))}function j(e,n){
if(e.match){
if(e.begin||e.end)throw Error("begin & end are not supported with match")
;e.begin=e.match,delete e.match}}function B(e,n){
void 0===e.relevance&&(e.relevance=1)}const D=(e,n)=>{if(!e.beforeMatch)return
;if(e.starts)throw Error("beforeMatch cannot be used with starts")
;const t=Object.assign({},e);Object.keys(e).forEach((n=>{delete e[n]
})),e.keywords=t.keywords,e.begin=h(t.beforeMatch,g(t.begin)),e.starts={
relevance:0,contains:[Object.assign(t,{endsParent:!0})]
},e.relevance=0,delete t.beforeMatch
},$=["of","and","for","in","not","or","if","then","parent","list","value"],z="keyword"
;function P(e,n,t=z){const s=Object.create(null)
;return"string"==typeof e?a(t,e.split(" ")):Array.isArray(e)?a(t,e):Object.keys(e).forEach((t=>{
Object.assign(s,P(e[t],n,t))})),s;function a(e,t){
n&&(t=t.map((e=>e.toLowerCase()))),t.forEach((n=>{const t=n.split("|")
;s[t[0]]=[e,U(t[0],t[1])]}))}}function U(e,n){
return n?Number(n):(e=>$.includes(e.toLowerCase()))(e)?0:1}const H={},Z=e=>{
console.error(e)},G=(e,...n)=>{console.log("WARN: "+e,...n)},F=(e,n)=>{
H[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),H[`${e}/${n}`]=!0)
},K=Error();function W(e,n,{key:t}){let s=0;const a=e[t],i={},r={}
;for(let e=1;e<=n.length;e++)r[e+s]=a[e],i[e+s]=!0,s+=p(n[e-1])
;e[t]=r,e[t]._emit=i,e[t]._multi=!0}function X(e){(e=>{
e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,
delete e.scope)})(e),"string"==typeof e.beginScope&&(e.beginScope={
_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope
}),(e=>{if(Array.isArray(e.begin)){
if(e.skip||e.excludeBegin||e.returnBegin)throw Z("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),
K
;if("object"!=typeof e.beginScope||null===e.beginScope)throw Z("beginScope must be object"),
K;W(e,e.begin,{key:"beginScope"}),e.begin=f(e.begin,{joinWith:""})}})(e),(e=>{
if(Array.isArray(e.end)){
if(e.skip||e.excludeEnd||e.returnEnd)throw Z("skip, excludeEnd, returnEnd not compatible with endScope: {}"),
K
;if("object"!=typeof e.endScope||null===e.endScope)throw Z("endScope must be object"),
K;W(e,e.end,{key:"endScope"}),e.end=f(e.end,{joinWith:""})}})(e)}function q(e){
function n(n,t){
return RegExp(l(n),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(t?"g":""))
}class t{constructor(){
this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}
addRule(e,n){
n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),
this.matchAt+=p(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null)
;const e=this.regexes.map((e=>e[1]));this.matcherRe=n(f(e,{joinWith:"|"
}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex
;const n=this.matcherRe.exec(e);if(!n)return null
;const t=n.findIndex(((e,n)=>n>0&&void 0!==e)),s=this.matchIndexes[t]
;return n.splice(0,t),Object.assign(n,s)}}class a{constructor(){
this.rules=[],this.multiRegexes=[],
this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){
if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t
;return this.rules.slice(e).forEach((([e,t])=>n.addRule(e,t))),
n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){
return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){
this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){
const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex
;let t=n.exec(e)
;if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{
const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}
return t&&(this.regexIndex+=t.position+1,
this.regexIndex===this.count&&this.considerAll()),t}}
if(e.compilerExtensions||(e.compilerExtensions=[]),
e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
;return e.classNameAliases=s(e.classNameAliases||{}),function t(i,r){const o=i
;if(i.isCompiled)return o
;[I,j,X,D].forEach((e=>e(i,r))),e.compilerExtensions.forEach((e=>e(i,r))),
i.__beforeBegin=null,[L,C,B].forEach((e=>e(i,r))),i.isCompiled=!0;let c=null
;return"object"==typeof i.keywords&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),
c=i.keywords.$pattern,
delete i.keywords.$pattern),c=c||/\w+/,i.keywords&&(i.keywords=P(i.keywords,e.case_insensitive)),
o.keywordPatternRe=n(c,!0),
r&&(i.begin||(i.begin=/\B|\b/),o.beginRe=n(o.begin),i.end||i.endsWithParent||(i.end=/\B|\b/),
i.end&&(o.endRe=n(o.end)),
o.terminatorEnd=l(o.end)||"",i.endsWithParent&&r.terminatorEnd&&(o.terminatorEnd+=(i.end?"|":"")+r.terminatorEnd)),
i.illegal&&(o.illegalRe=n(i.illegal)),
i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map((e=>(e=>(e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((n=>s(e,{
variants:null},n)))),e.cachedVariants?e.cachedVariants:Q(e)?s(e,{
starts:e.starts?s(e.starts):null
}):Object.isFrozen(e)?s(e):e))("self"===e?i:e)))),i.contains.forEach((e=>{t(e,o)
})),i.starts&&t(i.starts,r),o.matcher=(e=>{const n=new a
;return e.contains.forEach((e=>n.addRule(e.begin,{rule:e,type:"begin"
}))),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"
}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n})(o),o}(e)}function Q(e){
return!!e&&(e.endsWithParent||Q(e.starts))}class J extends Error{
constructor(e,n){super(e),this.name="HTMLInjectionError",this.html=n}}
const V=t,Y=s,ee=Symbol("nomatch"),ne=t=>{
const s=Object.create(null),a=Object.create(null),i=[];let r=!0
;const o="Could not find the language '{}', did you forget to load/include a language module?",l={
disableAutodetect:!0,name:"Plain text",contains:[]};let p={
ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,
languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",
cssSelector:"pre code",languages:null,__emitter:c};function m(e){
return p.noHighlightRe.test(e)}function f(e,n,t){let s="",a=""
;"object"==typeof n?(s=e,
t=n.ignoreIllegals,a=n.language):(F("10.7.0","highlight(lang, code, ...args) has been deprecated."),
F("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),
a=e,s=n),void 0===t&&(t=!0);const i={code:s,language:a};A("before:highlight",i)
;const r=i.result?i.result:_(i.language,i.code,t)
;return r.code=i.code,A("after:highlight",r),r}function _(e,t,a,i){
const c=Object.create(null);function l(){if(!A.keywords)return void k.addText(M)
;let e=0;A.keywordPatternRe.lastIndex=0;let n=A.keywordPatternRe.exec(M),t=""
;for(;n;){t+=M.substring(e,n.index)
;const a=w.case_insensitive?n[0].toLowerCase():n[0],i=(s=a,A.keywords[s]);if(i){
const[e,s]=i
;if(k.addText(t),t="",c[a]=(c[a]||0)+1,c[a]<=7&&(R+=s),e.startsWith("_"))t+=n[0];else{
const t=w.classNameAliases[e]||e;d(n[0],t)}}else t+=n[0]
;e=A.keywordPatternRe.lastIndex,n=A.keywordPatternRe.exec(M)}var s
;t+=M.substring(e),k.addText(t)}function g(){null!=A.subLanguage?(()=>{
if(""===M)return;let e=null;if("string"==typeof A.subLanguage){
if(!s[A.subLanguage])return void k.addText(M)
;e=_(A.subLanguage,M,!0,S[A.subLanguage]),S[A.subLanguage]=e._top
}else e=E(M,A.subLanguage.length?A.subLanguage:null)
;A.relevance>0&&(R+=e.relevance),k.__addSublanguage(e._emitter,e.language)
})():l(),M=""}function d(e,n){
""!==e&&(k.startScope(n),k.addText(e),k.endScope())}function u(e,n){let t=1
;const s=n.length-1;for(;t<=s;){if(!e._emit[t]){t++;continue}
const s=w.classNameAliases[e[t]]||e[t],a=n[t];s?d(a,s):(M=a,l(),M=""),t++}}
function h(e,n){
return e.scope&&"string"==typeof e.scope&&k.openNode(w.classNameAliases[e.scope]||e.scope),
e.beginScope&&(e.beginScope._wrap?(d(M,w.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),
M=""):e.beginScope._multi&&(u(e.beginScope,n),M="")),A=Object.create(e,{parent:{
value:A}}),A}function b(e,t,s){let a=((e,n)=>{const t=e&&e.exec(n)
;return t&&0===t.index})(e.endRe,s);if(a){if(e["on:end"]){const s=new n(e)
;e["on:end"](t,s),s.isMatchIgnored&&(a=!1)}if(a){
for(;e.endsParent&&e.parent;)e=e.parent;return e}}
if(e.endsWithParent)return b(e.parent,t,s)}function m(e){
return 0===A.matcher.regexIndex?(M+=e[0],1):(L=!0,0)}function f(e){
const n=e[0],s=t.substring(e.index),a=b(A,e,s);if(!a)return ee;const i=A
;A.endScope&&A.endScope._wrap?(g(),
d(n,A.endScope._wrap)):A.endScope&&A.endScope._multi?(g(),
u(A.endScope,e)):i.skip?M+=n:(i.returnEnd||i.excludeEnd||(M+=n),
g(),i.excludeEnd&&(M=n));do{
A.scope&&k.closeNode(),A.skip||A.subLanguage||(R+=A.relevance),A=A.parent
}while(A!==a.parent);return a.starts&&h(a.starts,e),i.returnEnd?0:n.length}
let y={};function N(s,i){const o=i&&i[0];if(M+=s,null==o)return g(),0
;if("begin"===y.type&&"end"===i.type&&y.index===i.index&&""===o){
if(M+=t.slice(i.index,i.index+1),!r){const n=Error(`0 width match regex (${e})`)
;throw n.languageName=e,n.badRule=y.rule,n}return 1}
if(y=i,"begin"===i.type)return(e=>{
const t=e[0],s=e.rule,a=new n(s),i=[s.__beforeBegin,s["on:begin"]]
;for(const n of i)if(n&&(n(e,a),a.isMatchIgnored))return m(t)
;return s.skip?M+=t:(s.excludeBegin&&(M+=t),
g(),s.returnBegin||s.excludeBegin||(M=t)),h(s,e),s.returnBegin?0:t.length})(i)
;if("illegal"===i.type&&!a){
const e=Error('Illegal lexeme "'+o+'" for mode "'+(A.scope||"<unnamed>")+'"')
;throw e.mode=A,e}if("end"===i.type){const e=f(i);if(e!==ee)return e}
if("illegal"===i.type&&""===o)return 1
;if(I>1e5&&I>3*i.index)throw Error("potential infinite loop, way more iterations than matches")
;return M+=o,o.length}const w=x(e)
;if(!w)throw Z(o.replace("{}",e)),Error('Unknown language: "'+e+'"')
;const v=q(w);let O="",A=i||v;const S={},k=new p.__emitter(p);(()=>{const e=[]
;for(let n=A;n!==w;n=n.parent)n.scope&&e.unshift(n.scope)
;e.forEach((e=>k.openNode(e)))})();let M="",R=0,T=0,I=0,L=!1;try{
if(w.__emitTokens)w.__emitTokens(t,k);else{for(A.matcher.considerAll();;){
I++,L?L=!1:A.matcher.considerAll(),A.matcher.lastIndex=T
;const e=A.matcher.exec(t);if(!e)break;const n=N(t.substring(T,e.index),e)
;T=e.index+n}N(t.substring(T))}return k.finalize(),O=k.toHTML(),{language:e,
value:O,relevance:R,illegal:!1,_emitter:k,_top:A}}catch(n){
if(n.message&&n.message.includes("Illegal"))return{language:e,value:V(t),
illegal:!0,relevance:0,_illegalBy:{message:n.message,index:T,
context:t.slice(T-100,T+100),mode:n.mode,resultSoFar:O},_emitter:k};if(r)return{
language:e,value:V(t),illegal:!1,relevance:0,errorRaised:n,_emitter:k,_top:A}
;throw n}}function E(e,n){n=n||p.languages||Object.keys(s);const t=(e=>{
const n={value:V(e),illegal:!1,relevance:0,_top:l,_emitter:new p.__emitter(p)}
;return n._emitter.addText(e),n})(e),a=n.filter(x).filter(O).map((n=>_(n,e,!1)))
;a.unshift(t);const i=a.sort(((e,n)=>{
if(e.relevance!==n.relevance)return n.relevance-e.relevance
;if(e.language&&n.language){if(x(e.language).supersetOf===n.language)return 1
;if(x(n.language).supersetOf===e.language)return-1}return 0})),[r,o]=i,c=r
;return c.secondBest=o,c}function y(e){let n=null;const t=(e=>{
let n=e.className+" ";n+=e.parentNode?e.parentNode.className:""
;const t=p.languageDetectRe.exec(n);if(t){const n=x(t[1])
;return n||(G(o.replace("{}",t[1])),
G("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}
return n.split(/\s+/).find((e=>m(e)||x(e)))})(e);if(m(t))return
;if(A("before:highlightElement",{el:e,language:t
}),e.dataset.highlighted)return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",e)
;if(e.children.length>0&&(p.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),
console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),
console.warn("The element with unescaped HTML:"),
console.warn(e)),p.throwUnescapedHTML))throw new J("One of your code blocks includes unescaped HTML.",e.innerHTML)
;n=e;const s=n.textContent,i=t?f(s,{language:t,ignoreIllegals:!0}):E(s)
;e.innerHTML=i.value,e.dataset.highlighted="yes",((e,n,t)=>{const s=n&&a[n]||t
;e.classList.add("hljs"),e.classList.add("language-"+s)
})(e,t,i.language),e.result={language:i.language,re:i.relevance,
relevance:i.relevance},i.secondBest&&(e.secondBest={
language:i.secondBest.language,relevance:i.secondBest.relevance
}),A("after:highlightElement",{el:e,result:i,text:s})}let N=!1;function w(){
"loading"!==document.readyState?document.querySelectorAll(p.cssSelector).forEach(y):N=!0
}function x(e){return e=(e||"").toLowerCase(),s[e]||s[a[e]]}
function v(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach((e=>{
a[e.toLowerCase()]=n}))}function O(e){const n=x(e)
;return n&&!n.disableAutodetect}function A(e,n){const t=e;i.forEach((e=>{
e[t]&&e[t](n)}))}
"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(()=>{
N&&w()}),!1),Object.assign(t,{highlight:f,highlightAuto:E,highlightAll:w,
highlightElement:y,
highlightBlock:e=>(F("10.7.0","highlightBlock will be removed entirely in v12.0"),
F("10.7.0","Please use highlightElement now."),y(e)),configure:e=>{p=Y(p,e)},
initHighlighting:()=>{
w(),F("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},
initHighlightingOnLoad:()=>{
w(),F("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
},registerLanguage:(e,n)=>{let a=null;try{a=n(t)}catch(n){
if(Z("Language definition for '{}' could not be registered.".replace("{}",e)),
!r)throw n;Z(n),a=l}
a.name||(a.name=e),s[e]=a,a.rawDefinition=n.bind(null,t),a.aliases&&v(a.aliases,{
languageName:e})},unregisterLanguage:e=>{delete s[e]
;for(const n of Object.keys(a))a[n]===e&&delete a[n]},
listLanguages:()=>Object.keys(s),getLanguage:x,registerAliases:v,
autoDetection:O,inherit:Y,addPlugin:e=>{(e=>{
e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=n=>{
e["before:highlightBlock"](Object.assign({block:n.el},n))
}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=n=>{
e["after:highlightBlock"](Object.assign({block:n.el},n))})})(e),i.push(e)},
removePlugin:e=>{const n=i.indexOf(e);-1!==n&&i.splice(n,1)}}),t.debugMode=()=>{
r=!1},t.safeMode=()=>{r=!0},t.versionString="11.8.0",t.regex={concat:h,
lookahead:g,either:b,optional:u,anyNumberOfTimes:d}
;for(const n in R)"object"==typeof R[n]&&e(R[n]);return Object.assign(t,R),t
},te=ne({});te.newInstance=()=>ne({});var se=te
;const ae="[A-Za-z$_][0-9A-Za-z$_]*",ie=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],re=["true","false","null","undefined","NaN","Infinity"],oe=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],ce=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],le=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],ge=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],de=[].concat(le,oe,ce)
;var ue="[0-9](_*[0-9])*",he=`\\.(${ue})`,be="[0-9a-fA-F](_*[0-9a-fA-F])*",pe={
className:"number",variants:[{
begin:`(\\b(${ue})((${he})|\\.)?|(${he}))[eE][+-]?(${ue})[fFdD]?\\b`},{
begin:`\\b(${ue})((${he})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{
begin:`(${he})[fFdD]?\\b`},{begin:`\\b(${ue})[fFdD]\\b`},{
begin:`\\b0[xX]((${be})\\.?|(${be})?\\.(${be}))[pP][+-]?(${ue})[fFdD]?\\b`},{
begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${be})[lL]?\\b`},{
begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],
relevance:0},me=Object.freeze({__proto__:null,grmr_javascript:e=>{
const n=e.regex,t=ae,s={begin:/<[A-Za-z0-9\\._:-]+/,
end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{
const t=e[0].length+e.index,s=e.input[t]
;if("<"===s||","===s)return void n.ignoreMatch();let a
;">"===s&&(((e,{after:n})=>{const t="</"+e[0].slice(1)
;return-1!==e.input.indexOf(t,n)})(e,{after:t})||n.ignoreMatch())
;const i=e.input.substring(t)
;((a=i.match(/^\s*=/))||(a=i.match(/^\s+extends\s+/))&&0===a.index)&&n.ignoreMatch()
}},a={$pattern:ae,keyword:ie,literal:re,built_in:de,"variable.language":ge
},i="[0-9](_?[0-9])*",r=`\\.(${i})`,o="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",c={
className:"number",variants:[{
begin:`(\\b(${o})((${r})|\\.)?|(${r}))[eE][+-]?(${i})\\b`},{
begin:`\\b(${o})\\b((${r})\\b|\\.)?|(${r})\\b`},{
begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{
begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{
begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{
begin:"\\b0[0-7]+n?\\b"}],relevance:0},l={className:"subst",begin:"\\$\\{",
end:"\\}",keywords:a,contains:[]},g={begin:"html`",end:"",starts:{end:"`",
returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,l],subLanguage:"xml"}},d={
begin:"css`",end:"",starts:{end:"`",returnEnd:!1,
contains:[e.BACKSLASH_ESCAPE,l],subLanguage:"css"}},u={begin:"gql`",end:"",
starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,l],
subLanguage:"graphql"}},h={className:"string",begin:"`",end:"`",
contains:[e.BACKSLASH_ESCAPE,l]},b={className:"comment",
variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{
begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",
begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,
excludeBegin:!0,relevance:0},{className:"variable",begin:t+"(?=\\s*(-)|$)",
endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]
}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]
},p=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,g,d,u,h,{match:/\$\d+/},c]
;l.contains=p.concat({begin:/\{/,end:/\}/,keywords:a,contains:["self"].concat(p)
});const m=[].concat(b,l.contains),f=m.concat([{begin:/\(/,end:/\)/,keywords:a,
contains:["self"].concat(m)}]),_={className:"params",begin:/\(/,end:/\)/,
excludeBegin:!0,excludeEnd:!0,keywords:a,contains:f},E={variants:[{
match:[/class/,/\s+/,t,/\s+/,/extends/,/\s+/,n.concat(t,"(",n.concat(/\./,t),")*")],
scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{
match:[/class/,/\s+/,t],scope:{1:"keyword",3:"title.class"}}]},y={relevance:0,
match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
className:"title.class",keywords:{_:[...oe,...ce]}},N={variants:[{
match:[/function/,/\s+/,t,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],
className:{1:"keyword",3:"title.function"},label:"func.def",contains:[_],
illegal:/%/},w={
match:n.concat(/\b/,(x=[...le,"super","import"],n.concat("(?!",x.join("|"),")")),t,n.lookahead(/\(/)),
className:"title.function",relevance:0};var x;const v={
begin:n.concat(/\./,n.lookahead(n.concat(t,/(?![0-9A-Za-z$_(])/))),end:t,
excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},O={
match:[/get|set/,/\s+/,t,/(?=\()/],className:{1:"keyword",3:"title.function"},
contains:[{begin:/\(\)/},_]
},A="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",S={
match:[/const|var|let/,/\s+/,t,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(A)],
keywords:"async",className:{1:"keyword",3:"title.function"},contains:[_]}
;return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:a,exports:{
PARAMS_CONTAINS:f,CLASS_REFERENCE:y},illegal:/#(?![$_A-z])/,
contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{
label:"use_strict",className:"meta",relevance:10,
begin:/^\s*['"]use (strict|asm)['"]/
},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,g,d,u,h,b,{match:/\$\d+/},c,y,{
className:"attr",begin:t+n.lookahead(":"),relevance:0},S,{
begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",
keywords:"return throw case",relevance:0,contains:[b,e.REGEXP_MODE,{
className:"function",begin:A,returnBegin:!0,end:"\\s*=>",contains:[{
className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{
className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,
excludeEnd:!0,keywords:a,contains:f}]}]},{begin:/,/,relevance:0},{match:/\s+/,
relevance:0},{variants:[{begin:"<>",end:"</>"},{
match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:s.begin,
"on:begin":s.isTrulyOpeningTag,end:s.end}],subLanguage:"xml",contains:[{
begin:s.begin,end:s.end,skip:!0,contains:["self"]}]}]},N,{
beginKeywords:"while if switch catch for"},{
begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
returnBegin:!0,label:"func.def",contains:[_,e.inherit(e.TITLE_MODE,{begin:t,
className:"title.function"})]},{match:/\.\.\./,relevance:0},v,{match:"\\$"+t,
relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},
contains:[_]},w,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,
className:"variable.constant"},E,O,{match:/\$[(.]/}]}},grmr_zig:e=>{const n={
keyword:["const","let","fn","inline","while","for","extern","packed","export","pub","noalias","comptime","volatile","align","linksection","threadlocal","allowzero","noinline","callconv","struct","enum","union","opaque","asm","unreachable","break","return","continue","defer","errdefer","await","resume","suspend","async","nosuspend","try","catch","if","else","switch","orelse","usingnamespace","test","and","or"],
literal:["null","undefined","true","false"],
type:["f16","f32","f64","f80","f128","usize","isize","comptime_int","comptime_float","bool","void","noreturn","type","error","anyerror","anyframe","anytype","anyopaque","c_short","c_ushort","c_int","c_uint","c_long","c_ulong","c_longlong","c_longdouble"]
},t="[_a-zA-Z][_a-zA-Z0-9]*",s={match:/(u|i)\d+/,className:"type"};return{
name:"ZIG",keywords:n,aliases:["zig"],contains:[{match:"@"+t,
className:"built_in"},{
begin:["(?:"+t+"\\s+)",e.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{
2:"title.function"},keywords:n,contains:[{className:"params",begin:/\(/,
end:/\)/,keywords:n,relevance:0,
contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_BLOCK_COMMENT_MODE,s]
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{
beginKeywords:"struct union enum error",relevance:0},{begin:[t,/\s*(?=\{)/],
className:{1:"title.class"},keywords:n,
contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,s]},{
beginKeywords:"struct",relevance:0},{match:[t,/\s*:\s*/,t],className:{3:"type"}
},e.QUOTE_STRING_MODE,{begin:/\\\\/,end:/\n/,className:"string"},pe,{
begin:/\/\//,end:/\n/,className:"comment"},s]}},grmr_xml:e=>{
const n=e.regex,t=n.concat(/[\p{L}_]/u,n.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),s={
className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},a={begin:/\s/,
contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]
},i=e.inherit(a,{begin:/\(/,end:/\)/}),r=e.inherit(e.APOS_STRING_MODE,{
className:"string"}),o=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),c={
endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",
begin:/[\p{L}0-9._:-]+/u,relevance:0},{begin:/=\s*/,relevance:0,contains:[{
className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[s]},{
begin:/'/,end:/'/,contains:[s]},{begin:/[^\s"'=<>`]+/}]}]}]};return{
name:"HTML, XML",
aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],
case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,
end:/>/,relevance:10,contains:[a,o,r,i,{begin:/\[/,end:/\]/,contains:[{
className:"meta",begin:/<![a-z]/,end:/>/,contains:[a,i,o,r]}]}]
},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,
relevance:10},s,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,
relevance:10,contains:[o]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",
begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[c],starts:{
end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",
begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[c],starts:{
end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{
className:"tag",begin:/<>|<\/>/},{className:"tag",
begin:n.concat(/</,n.lookahead(n.concat(t,n.either(/\/>/,/>/,/\s/)))),
end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:c}]},{
className:"tag",begin:n.concat(/<\//,n.lookahead(n.concat(t,/>/))),contains:[{
className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}
},grmr_json:e=>{const n=["true","false","null"],t={scope:"literal",
beginKeywords:n.join(" ")};return{name:"JSON",keywords:{literal:n},contains:[{
className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},{
match:/[{}[\],:]/,className:"punctuation",relevance:0
},e.QUOTE_STRING_MODE,t,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],
illegal:"\\S"}},grmr_bash:e=>{const n=e.regex,t={},s={begin:/\$\{/,end:/\}/,
contains:["self",{begin:/:-/,contains:[t]}]};Object.assign(t,{
className:"variable",variants:[{
begin:n.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},s]});const a={
className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},i={
begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,
end:/(\w+)/,className:"string"})]}},r={className:"string",begin:/"/,end:/"/,
contains:[e.BACKSLASH_ESCAPE,t,a]};a.contains.push(r);const o={begin:/\$?\(\(/,
end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,t]
},c=e.SHEBANG({binary:"(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)",relevance:10
}),l={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,
contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{
name:"Bash",aliases:["sh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,
keyword:["if","then","else","elif","fi","for","while","until","in","do","done","case","esac","function","select"],
literal:["true","false"],
built_in:["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset","alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","type","typeset","ulimit","unalias","set","shopt","autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp","chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"]
},contains:[c,e.SHEBANG(),l,o,e.HASH_COMMENT_MODE,i,{match:/(\/[a-z._-]+)+/},r,{
className:"",begin:/\\"/},{className:"string",begin:/'/,end:/'/},t]}},
grmr_plaintext:e=>({name:"Plain text",aliases:["text","txt"],
disableAutodetect:!0})});const fe=se;for(const e of Object.keys(me)){
const n=e.replace("grmr_","").replace("_","-");fe.registerLanguage(n,me[e])}
return fe}()
;"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=hljs);