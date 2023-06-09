/*!
  Highlight.js v11.8.0 (git: 38966a8d28)
  (c) 2006-2023 undefined and other contributors
  License: BSD-3-Clause
 */
var hljs=function(){"use strict";function e(s){
return s instanceof Map?s.clear=s.delete=s.set=()=>{
throw Error("map is read-only")}:s instanceof Set&&(s.add=s.clear=s.delete=()=>{
throw Error("set is read-only")
}),Object.freeze(s),Object.getOwnPropertyNames(s).forEach((n=>{
const t=s[n],a=typeof t;"object"!==a&&"function"!==a||Object.isFrozen(t)||e(t)
})),s}class s{constructor(e){
void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}
ignoreMatch(){this.isMatchIgnored=!0}}function n(e){
return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")
}function t(e,...s){const n=Object.create(null);for(const s in e)n[s]=e[s]
;return s.forEach((e=>{for(const s in e)n[s]=e[s]})),n}const a=e=>!!e.scope
;class p{constructor(e,s){
this.buffer="",this.classPrefix=s.classPrefix,e.walk(this)}addText(e){
this.buffer+=n(e)}openNode(e){if(!a(e))return;const s=((e,{prefix:s})=>{
if(e.startsWith("language:"))return e.replace("language:","language-")
;if(e.includes(".")){const n=e.split(".")
;return[`${s}${n.shift()}`,...n.map(((e,s)=>`${e}${"_".repeat(s+1)}`))].join(" ")
}return`${s}${e}`})(e.scope,{prefix:this.classPrefix});this.span(s)}
closeNode(e){a(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){
this.buffer+=`<span class="${e}">`}}const d=(e={})=>{const s={children:[]}
;return Object.assign(s,e),s};class c{constructor(){
this.rootNode=d(),this.stack=[this.rootNode]}get top(){
return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){
this.top.children.push(e)}openNode(e){const s=d({scope:e})
;this.add(s),this.stack.push(s)}closeNode(){
if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){
for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}
walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,s){
return"string"==typeof s?e.addText(s):s.children&&(e.openNode(s),
s.children.forEach((s=>this._walk(e,s))),e.closeNode(s)),e}static _collapse(e){
"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{
c._collapse(e)})))}}class r extends c{constructor(e){super(),this.options=e}
addText(e){""!==e&&this.add(e)}startScope(e){this.openNode(e)}endScope(){
this.closeNode()}__addSublanguage(e,s){const n=e.root
;s&&(n.scope="language:"+s),this.add(n)}toHTML(){
return new p(this,this.options).value()}finalize(){
return this.closeAllNodes(),!0}}function o(e){
return e?"string"==typeof e?e:e.source:null}function i(e){return v("(?=",e,")")}
function m(e){return v("(?:",e,")*")}function l(e){return v("(?:",e,")?")}
function v(...e){return e.map((e=>o(e))).join("")}function u(...e){const s=(e=>{
const s=e[e.length-1]
;return"object"==typeof s&&s.constructor===Object?(e.splice(e.length-1,1),s):{}
})(e);return"("+(s.capture?"":"?:")+e.map((e=>o(e))).join("|")+")"}
function b(e){return RegExp(e.toString()+"|").exec("").length-1}
const g=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./
;function f(e,{joinWith:s}){let n=0;return e.map((e=>{n+=1;const s=n
;let t=o(e),a="";for(;t.length>0;){const e=g.exec(t);if(!e){a+=t;break}
a+=t.substring(0,e.index),
t=t.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?a+="\\"+(Number(e[1])+s):(a+=e[0],
"("===e[0]&&n++)}return a})).map((e=>`(${e})`)).join(s)}
const h="[a-zA-Z]\\w*",_="[a-zA-Z_]\\w*",w="\\b\\d+(\\.\\d+)?",x="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",q="\\b(0b[01]+)",y={
begin:"\\\\[\\s\\S]",relevance:0},E={scope:"string",begin:"'",end:"'",
illegal:"\\n",contains:[y]},k={scope:"string",begin:'"',end:'"',illegal:"\\n",
contains:[y]},N=(e,s,n={})=>{const a=t({scope:"comment",begin:e,end:s,
contains:[]},n);a.contains.push({scope:"doctag",
begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0})
;const p=u("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/)
;return a.contains.push({begin:v(/[ ]+/,"(",p,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),a
},A=N("//","$"),O=N("/\\*","\\*/"),z=N("#","$");var M=Object.freeze({
__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:h,UNDERSCORE_IDENT_RE:_,
NUMBER_RE:w,C_NUMBER_RE:x,BINARY_NUMBER_RE:q,
RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
SHEBANG:(e={})=>{const s=/^#![ ]*\//
;return e.binary&&(e.begin=v(s,/.*\b/,e.binary,/\b.*/)),t({scope:"meta",begin:s,
end:/$/,relevance:0,"on:begin":(e,s)=>{0!==e.index&&s.ignoreMatch()}},e)},
BACKSLASH_ESCAPE:y,APOS_STRING_MODE:E,QUOTE_STRING_MODE:k,PHRASAL_WORDS_MODE:{
begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
},COMMENT:N,C_LINE_COMMENT_MODE:A,C_BLOCK_COMMENT_MODE:O,HASH_COMMENT_MODE:z,
NUMBER_MODE:{scope:"number",begin:w,relevance:0},C_NUMBER_MODE:{scope:"number",
begin:x,relevance:0},BINARY_NUMBER_MODE:{scope:"number",begin:q,relevance:0},
REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,
end:/\/[gimuy]*/,illegal:/\n/,contains:[y,{begin:/\[/,end:/\]/,relevance:0,
contains:[y]}]}]},TITLE_MODE:{scope:"title",begin:h,relevance:0},
UNDERSCORE_TITLE_MODE:{scope:"title",begin:_,relevance:0},METHOD_GUARD:{
begin:"\\.\\s*"+_,relevance:0},END_SAME_AS_BEGIN:e=>Object.assign(e,{
"on:begin":(e,s)=>{s.data._beginMatch=e[1]},"on:end":(e,s)=>{
s.data._beginMatch!==e[1]&&s.ignoreMatch()}})});function S(e,s){
"."===e.input[e.index-1]&&s.ignoreMatch()}function T(e,s){
void 0!==e.className&&(e.scope=e.className,delete e.className)}function j(e,s){
s&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",
e.__beforeBegin=S,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,
void 0===e.relevance&&(e.relevance=0))}function R(e,s){
Array.isArray(e.illegal)&&(e.illegal=u(...e.illegal))}function I(e,s){
if(e.match){
if(e.begin||e.end)throw Error("begin & end are not supported with match")
;e.begin=e.match,delete e.match}}function C(e,s){
void 0===e.relevance&&(e.relevance=1)}const D=(e,s)=>{if(!e.beforeMatch)return
;if(e.starts)throw Error("beforeMatch cannot be used with starts")
;const n=Object.assign({},e);Object.keys(e).forEach((s=>{delete e[s]
})),e.keywords=n.keywords,e.begin=v(n.beforeMatch,i(n.begin)),e.starts={
relevance:0,contains:[Object.assign(n,{endsParent:!0})]
},e.relevance=0,delete n.beforeMatch
},L=["of","and","for","in","not","or","if","then","parent","list","value"],B="keyword"
;function $(e,s,n=B){const t=Object.create(null)
;return"string"==typeof e?a(n,e.split(" ")):Array.isArray(e)?a(n,e):Object.keys(e).forEach((n=>{
Object.assign(t,$(e[n],s,n))})),t;function a(e,n){
s&&(n=n.map((e=>e.toLowerCase()))),n.forEach((s=>{const n=s.split("|")
;t[n[0]]=[e,U(n[0],n[1])]}))}}function U(e,s){
return s?Number(s):(e=>L.includes(e.toLowerCase()))(e)?0:1}const P={},H=e=>{
console.error(e)},F=(e,...s)=>{console.log("WARN: "+e,...s)},Z=(e,s)=>{
P[`${e}/${s}`]||(console.log(`Deprecated as of ${e}. ${s}`),P[`${e}/${s}`]=!0)
},G=Error();function K(e,s,{key:n}){let t=0;const a=e[n],p={},d={}
;for(let e=1;e<=s.length;e++)d[e+t]=a[e],p[e+t]=!0,t+=b(s[e-1])
;e[n]=d,e[n]._emit=p,e[n]._multi=!0}function W(e){(e=>{
e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,
delete e.scope)})(e),"string"==typeof e.beginScope&&(e.beginScope={
_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope
}),(e=>{if(Array.isArray(e.begin)){
if(e.skip||e.excludeBegin||e.returnBegin)throw H("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),
G
;if("object"!=typeof e.beginScope||null===e.beginScope)throw H("beginScope must be object"),
G;K(e,e.begin,{key:"beginScope"}),e.begin=f(e.begin,{joinWith:""})}})(e),(e=>{
if(Array.isArray(e.end)){
if(e.skip||e.excludeEnd||e.returnEnd)throw H("skip, excludeEnd, returnEnd not compatible with endScope: {}"),
G
;if("object"!=typeof e.endScope||null===e.endScope)throw H("endScope must be object"),
G;K(e,e.end,{key:"endScope"}),e.end=f(e.end,{joinWith:""})}})(e)}function X(e){
function s(s,n){
return RegExp(o(s),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(n?"g":""))
}class n{constructor(){
this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}
addRule(e,s){
s.position=this.position++,this.matchIndexes[this.matchAt]=s,this.regexes.push([s,e]),
this.matchAt+=b(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null)
;const e=this.regexes.map((e=>e[1]));this.matcherRe=s(f(e,{joinWith:"|"
}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex
;const s=this.matcherRe.exec(e);if(!s)return null
;const n=s.findIndex(((e,s)=>s>0&&void 0!==e)),t=this.matchIndexes[n]
;return s.splice(0,n),Object.assign(s,t)}}class a{constructor(){
this.rules=[],this.multiRegexes=[],
this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){
if(this.multiRegexes[e])return this.multiRegexes[e];const s=new n
;return this.rules.slice(e).forEach((([e,n])=>s.addRule(e,n))),
s.compile(),this.multiRegexes[e]=s,s}resumingScanAtSamePosition(){
return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,s){
this.rules.push([e,s]),"begin"===s.type&&this.count++}exec(e){
const s=this.getMatcher(this.regexIndex);s.lastIndex=this.lastIndex
;let n=s.exec(e)
;if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{
const s=this.getMatcher(0);s.lastIndex=this.lastIndex+1,n=s.exec(e)}
return n&&(this.regexIndex+=n.position+1,
this.regexIndex===this.count&&this.considerAll()),n}}
if(e.compilerExtensions||(e.compilerExtensions=[]),
e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
;return e.classNameAliases=t(e.classNameAliases||{}),function n(p,d){const c=p
;if(p.isCompiled)return c
;[T,I,W,D].forEach((e=>e(p,d))),e.compilerExtensions.forEach((e=>e(p,d))),
p.__beforeBegin=null,[j,R,C].forEach((e=>e(p,d))),p.isCompiled=!0;let r=null
;return"object"==typeof p.keywords&&p.keywords.$pattern&&(p.keywords=Object.assign({},p.keywords),
r=p.keywords.$pattern,
delete p.keywords.$pattern),r=r||/\w+/,p.keywords&&(p.keywords=$(p.keywords,e.case_insensitive)),
c.keywordPatternRe=s(r,!0),
d&&(p.begin||(p.begin=/\B|\b/),c.beginRe=s(c.begin),p.end||p.endsWithParent||(p.end=/\B|\b/),
p.end&&(c.endRe=s(c.end)),
c.terminatorEnd=o(c.end)||"",p.endsWithParent&&d.terminatorEnd&&(c.terminatorEnd+=(p.end?"|":"")+d.terminatorEnd)),
p.illegal&&(c.illegalRe=s(p.illegal)),
p.contains||(p.contains=[]),p.contains=[].concat(...p.contains.map((e=>(e=>(e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((s=>t(e,{
variants:null},s)))),e.cachedVariants?e.cachedVariants:Q(e)?t(e,{
starts:e.starts?t(e.starts):null
}):Object.isFrozen(e)?t(e):e))("self"===e?p:e)))),p.contains.forEach((e=>{n(e,c)
})),p.starts&&n(p.starts,d),c.matcher=(e=>{const s=new a
;return e.contains.forEach((e=>s.addRule(e.begin,{rule:e,type:"begin"
}))),e.terminatorEnd&&s.addRule(e.terminatorEnd,{type:"end"
}),e.illegal&&s.addRule(e.illegal,{type:"illegal"}),s})(c),c}(e)}function Q(e){
return!!e&&(e.endsWithParent||Q(e.starts))}class J extends Error{
constructor(e,s){super(e),this.name="HTMLInjectionError",this.html=s}}
const V=n,Y=t,ee=Symbol("nomatch"),se=n=>{
const t=Object.create(null),a=Object.create(null),p=[];let d=!0
;const c="Could not find the language '{}', did you forget to load/include a language module?",o={
disableAutodetect:!0,name:"Plain text",contains:[]};let b={
ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,
languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",
cssSelector:"pre code",languages:null,__emitter:r};function g(e){
return b.noHighlightRe.test(e)}function f(e,s,n){let t="",a=""
;"object"==typeof s?(t=e,
n=s.ignoreIllegals,a=s.language):(Z("10.7.0","highlight(lang, code, ...args) has been deprecated."),
Z("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),
a=e,t=s),void 0===n&&(n=!0);const p={code:t,language:a};N("before:highlight",p)
;const d=p.result?p.result:h(p.language,p.code,n)
;return d.code=p.code,N("after:highlight",d),d}function h(e,n,a,p){
const r=Object.create(null);function o(){if(!N.keywords)return void O.addText(z)
;let e=0;N.keywordPatternRe.lastIndex=0;let s=N.keywordPatternRe.exec(z),n=""
;for(;s;){n+=z.substring(e,s.index)
;const a=q.case_insensitive?s[0].toLowerCase():s[0],p=(t=a,N.keywords[t]);if(p){
const[e,t]=p
;if(O.addText(n),n="",r[a]=(r[a]||0)+1,r[a]<=7&&(M+=t),e.startsWith("_"))n+=s[0];else{
const n=q.classNameAliases[e]||e;m(s[0],n)}}else n+=s[0]
;e=N.keywordPatternRe.lastIndex,s=N.keywordPatternRe.exec(z)}var t
;n+=z.substring(e),O.addText(n)}function i(){null!=N.subLanguage?(()=>{
if(""===z)return;let e=null;if("string"==typeof N.subLanguage){
if(!t[N.subLanguage])return void O.addText(z)
;e=h(N.subLanguage,z,!0,A[N.subLanguage]),A[N.subLanguage]=e._top
}else e=_(z,N.subLanguage.length?N.subLanguage:null)
;N.relevance>0&&(M+=e.relevance),O.__addSublanguage(e._emitter,e.language)
})():o(),z=""}function m(e,s){
""!==e&&(O.startScope(s),O.addText(e),O.endScope())}function l(e,s){let n=1
;const t=s.length-1;for(;n<=t;){if(!e._emit[n]){n++;continue}
const t=q.classNameAliases[e[n]]||e[n],a=s[n];t?m(a,t):(z=a,o(),z=""),n++}}
function v(e,s){
return e.scope&&"string"==typeof e.scope&&O.openNode(q.classNameAliases[e.scope]||e.scope),
e.beginScope&&(e.beginScope._wrap?(m(z,q.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),
z=""):e.beginScope._multi&&(l(e.beginScope,s),z="")),N=Object.create(e,{parent:{
value:N}}),N}function u(e,n,t){let a=((e,s)=>{const n=e&&e.exec(s)
;return n&&0===n.index})(e.endRe,t);if(a){if(e["on:end"]){const t=new s(e)
;e["on:end"](n,t),t.isMatchIgnored&&(a=!1)}if(a){
for(;e.endsParent&&e.parent;)e=e.parent;return e}}
if(e.endsWithParent)return u(e.parent,n,t)}function g(e){
return 0===N.matcher.regexIndex?(z+=e[0],1):(j=!0,0)}function f(e){
const s=e[0],t=n.substring(e.index),a=u(N,e,t);if(!a)return ee;const p=N
;N.endScope&&N.endScope._wrap?(i(),
m(s,N.endScope._wrap)):N.endScope&&N.endScope._multi?(i(),
l(N.endScope,e)):p.skip?z+=s:(p.returnEnd||p.excludeEnd||(z+=s),
i(),p.excludeEnd&&(z=s));do{
N.scope&&O.closeNode(),N.skip||N.subLanguage||(M+=N.relevance),N=N.parent
}while(N!==a.parent);return a.starts&&v(a.starts,e),p.returnEnd?0:s.length}
let w={};function x(t,p){const c=p&&p[0];if(z+=t,null==c)return i(),0
;if("begin"===w.type&&"end"===p.type&&w.index===p.index&&""===c){
if(z+=n.slice(p.index,p.index+1),!d){const s=Error(`0 width match regex (${e})`)
;throw s.languageName=e,s.badRule=w.rule,s}return 1}
if(w=p,"begin"===p.type)return(e=>{
const n=e[0],t=e.rule,a=new s(t),p=[t.__beforeBegin,t["on:begin"]]
;for(const s of p)if(s&&(s(e,a),a.isMatchIgnored))return g(n)
;return t.skip?z+=n:(t.excludeBegin&&(z+=n),
i(),t.returnBegin||t.excludeBegin||(z=n)),v(t,e),t.returnBegin?0:n.length})(p)
;if("illegal"===p.type&&!a){
const e=Error('Illegal lexeme "'+c+'" for mode "'+(N.scope||"<unnamed>")+'"')
;throw e.mode=N,e}if("end"===p.type){const e=f(p);if(e!==ee)return e}
if("illegal"===p.type&&""===c)return 1
;if(T>1e5&&T>3*p.index)throw Error("potential infinite loop, way more iterations than matches")
;return z+=c,c.length}const q=y(e)
;if(!q)throw H(c.replace("{}",e)),Error('Unknown language: "'+e+'"')
;const E=X(q);let k="",N=p||E;const A={},O=new b.__emitter(b);(()=>{const e=[]
;for(let s=N;s!==q;s=s.parent)s.scope&&e.unshift(s.scope)
;e.forEach((e=>O.openNode(e)))})();let z="",M=0,S=0,T=0,j=!1;try{
if(q.__emitTokens)q.__emitTokens(n,O);else{for(N.matcher.considerAll();;){
T++,j?j=!1:N.matcher.considerAll(),N.matcher.lastIndex=S
;const e=N.matcher.exec(n);if(!e)break;const s=x(n.substring(S,e.index),e)
;S=e.index+s}x(n.substring(S))}return O.finalize(),k=O.toHTML(),{language:e,
value:k,relevance:M,illegal:!1,_emitter:O,_top:N}}catch(s){
if(s.message&&s.message.includes("Illegal"))return{language:e,value:V(n),
illegal:!0,relevance:0,_illegalBy:{message:s.message,index:S,
context:n.slice(S-100,S+100),mode:s.mode,resultSoFar:k},_emitter:O};if(d)return{
language:e,value:V(n),illegal:!1,relevance:0,errorRaised:s,_emitter:O,_top:N}
;throw s}}function _(e,s){s=s||b.languages||Object.keys(t);const n=(e=>{
const s={value:V(e),illegal:!1,relevance:0,_top:o,_emitter:new b.__emitter(b)}
;return s._emitter.addText(e),s})(e),a=s.filter(y).filter(k).map((s=>h(s,e,!1)))
;a.unshift(n);const p=a.sort(((e,s)=>{
if(e.relevance!==s.relevance)return s.relevance-e.relevance
;if(e.language&&s.language){if(y(e.language).supersetOf===s.language)return 1
;if(y(s.language).supersetOf===e.language)return-1}return 0})),[d,c]=p,r=d
;return r.secondBest=c,r}function w(e){let s=null;const n=(e=>{
let s=e.className+" ";s+=e.parentNode?e.parentNode.className:""
;const n=b.languageDetectRe.exec(s);if(n){const s=y(n[1])
;return s||(F(c.replace("{}",n[1])),
F("Falling back to no-highlight mode for this block.",e)),s?n[1]:"no-highlight"}
return s.split(/\s+/).find((e=>g(e)||y(e)))})(e);if(g(n))return
;if(N("before:highlightElement",{el:e,language:n
}),e.dataset.highlighted)return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",e)
;if(e.children.length>0&&(b.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),
console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),
console.warn("The element with unescaped HTML:"),
console.warn(e)),b.throwUnescapedHTML))throw new J("One of your code blocks includes unescaped HTML.",e.innerHTML)
;s=e;const t=s.textContent,p=n?f(t,{language:n,ignoreIllegals:!0}):_(t)
;e.innerHTML=p.value,e.dataset.highlighted="yes",((e,s,n)=>{const t=s&&a[s]||n
;e.classList.add("hljs"),e.classList.add("language-"+t)
})(e,n,p.language),e.result={language:p.language,re:p.relevance,
relevance:p.relevance},p.secondBest&&(e.secondBest={
language:p.secondBest.language,relevance:p.secondBest.relevance
}),N("after:highlightElement",{el:e,result:p,text:t})}let x=!1;function q(){
"loading"!==document.readyState?document.querySelectorAll(b.cssSelector).forEach(w):x=!0
}function y(e){return e=(e||"").toLowerCase(),t[e]||t[a[e]]}
function E(e,{languageName:s}){"string"==typeof e&&(e=[e]),e.forEach((e=>{
a[e.toLowerCase()]=s}))}function k(e){const s=y(e)
;return s&&!s.disableAutodetect}function N(e,s){const n=e;p.forEach((e=>{
e[n]&&e[n](s)}))}
"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(()=>{
x&&q()}),!1),Object.assign(n,{highlight:f,highlightAuto:_,highlightAll:q,
highlightElement:w,
highlightBlock:e=>(Z("10.7.0","highlightBlock will be removed entirely in v12.0"),
Z("10.7.0","Please use highlightElement now."),w(e)),configure:e=>{b=Y(b,e)},
initHighlighting:()=>{
q(),Z("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},
initHighlightingOnLoad:()=>{
q(),Z("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
},registerLanguage:(e,s)=>{let a=null;try{a=s(n)}catch(s){
if(H("Language definition for '{}' could not be registered.".replace("{}",e)),
!d)throw s;H(s),a=o}
a.name||(a.name=e),t[e]=a,a.rawDefinition=s.bind(null,n),a.aliases&&E(a.aliases,{
languageName:e})},unregisterLanguage:e=>{delete t[e]
;for(const s of Object.keys(a))a[s]===e&&delete a[s]},
listLanguages:()=>Object.keys(t),getLanguage:y,registerAliases:E,
autoDetection:k,inherit:Y,addPlugin:e=>{(e=>{
e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=s=>{
e["before:highlightBlock"](Object.assign({block:s.el},s))
}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=s=>{
e["after:highlightBlock"](Object.assign({block:s.el},s))})})(e),p.push(e)},
removePlugin:e=>{const s=p.indexOf(e);-1!==s&&p.splice(s,1)}}),n.debugMode=()=>{
d=!1},n.safeMode=()=>{d=!0},n.versionString="11.8.0",n.regex={concat:v,
lookahead:i,either:u,optional:l,anyNumberOfTimes:m}
;for(const s in M)"object"==typeof M[s]&&e(M[s]);return Object.assign(n,M),n
},ne=se({});ne.newInstance=()=>se({});var te=ne
;const ae="[A-Za-z$_][0-9A-Za-z$_]*",pe=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],de=["true","false","null","undefined","NaN","Infinity"],ce=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],re=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],oe=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],ie=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],me=[].concat(oe,ce,re)
;var le="[0-9](_*[0-9])*",ve=`\\.(${le})`,ue="[0-9a-fA-F](_*[0-9a-fA-F])*",be={
className:"number",variants:[{
begin:`(\\b(${le})((${ve})|\\.)?|(${ve}))[eE][+-]?(${le})[fFdD]?\\b`},{
begin:`\\b(${le})((${ve})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{
begin:`(${ve})[fFdD]?\\b`},{begin:`\\b(${le})[fFdD]\\b`},{
begin:`\\b0[xX]((${ue})\\.?|(${ue})?\\.(${ue}))[pP][+-]?(${le})[fFdD]?\\b`},{
begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${ue})[lL]?\\b`},{
begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],
relevance:0},ge=Object.freeze({__proto__:null,grmr_javascript:e=>{
const s=e.regex,n=ae,t={begin:/<[A-Za-z0-9\\._:-]+/,
end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,s)=>{
const n=e[0].length+e.index,t=e.input[n]
;if("<"===t||","===t)return void s.ignoreMatch();let a
;">"===t&&(((e,{after:s})=>{const n="</"+e[0].slice(1)
;return-1!==e.input.indexOf(n,s)})(e,{after:n})||s.ignoreMatch())
;const p=e.input.substring(n)
;((a=p.match(/^\s*=/))||(a=p.match(/^\s+extends\s+/))&&0===a.index)&&s.ignoreMatch()
}},a={$pattern:ae,keyword:pe,literal:de,built_in:me,"variable.language":ie
},p="[0-9](_?[0-9])*",d=`\\.(${p})`,c="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",r={
className:"number",variants:[{
begin:`(\\b(${c})((${d})|\\.)?|(${d}))[eE][+-]?(${p})\\b`},{
begin:`\\b(${c})\\b((${d})\\b|\\.)?|(${d})\\b`},{
begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{
begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{
begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{
begin:"\\b0[0-7]+n?\\b"}],relevance:0},o={className:"subst",begin:"\\$\\{",
end:"\\}",keywords:a,contains:[]},i={begin:"html`",end:"",starts:{end:"`",
returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,o],subLanguage:"xml"}},m={
begin:"css`",end:"",starts:{end:"`",returnEnd:!1,
contains:[e.BACKSLASH_ESCAPE,o],subLanguage:"css"}},l={begin:"gql`",end:"",
starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,o],
subLanguage:"graphql"}},v={className:"string",begin:"`",end:"`",
contains:[e.BACKSLASH_ESCAPE,o]},u={className:"comment",
variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{
begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",
begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,
excludeBegin:!0,relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",
endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]
}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]
},b=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,m,l,v,{match:/\$\d+/},r]
;o.contains=b.concat({begin:/\{/,end:/\}/,keywords:a,contains:["self"].concat(b)
});const g=[].concat(u,o.contains),f=g.concat([{begin:/\(/,end:/\)/,keywords:a,
contains:["self"].concat(g)}]),h={className:"params",begin:/\(/,end:/\)/,
excludeBegin:!0,excludeEnd:!0,keywords:a,contains:f},_={variants:[{
match:[/class/,/\s+/,n,/\s+/,/extends/,/\s+/,s.concat(n,"(",s.concat(/\./,n),")*")],
scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{
match:[/class/,/\s+/,n],scope:{1:"keyword",3:"title.class"}}]},w={relevance:0,
match:s.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
className:"title.class",keywords:{_:[...ce,...re]}},x={variants:[{
match:[/function/,/\s+/,n,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],
className:{1:"keyword",3:"title.function"},label:"func.def",contains:[h],
illegal:/%/},q={
match:s.concat(/\b/,(y=[...oe,"super","import"],s.concat("(?!",y.join("|"),")")),n,s.lookahead(/\(/)),
className:"title.function",relevance:0};var y;const E={
begin:s.concat(/\./,s.lookahead(s.concat(n,/(?![0-9A-Za-z$_(])/))),end:n,
excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},k={
match:[/get|set/,/\s+/,n,/(?=\()/],className:{1:"keyword",3:"title.function"},
contains:[{begin:/\(\)/},h]
},N="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",A={
match:[/const|var|let/,/\s+/,n,/\s*/,/=\s*/,/(async\s*)?/,s.lookahead(N)],
keywords:"async",className:{1:"keyword",3:"title.function"},contains:[h]}
;return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:a,exports:{
PARAMS_CONTAINS:f,CLASS_REFERENCE:w},illegal:/#(?![$_A-z])/,
contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{
label:"use_strict",className:"meta",relevance:10,
begin:/^\s*['"]use (strict|asm)['"]/
},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,m,l,v,u,{match:/\$\d+/},r,w,{
className:"attr",begin:n+s.lookahead(":"),relevance:0},A,{
begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",
keywords:"return throw case",relevance:0,contains:[u,e.REGEXP_MODE,{
className:"function",begin:N,returnBegin:!0,end:"\\s*=>",contains:[{
className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{
className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,
excludeEnd:!0,keywords:a,contains:f}]}]},{begin:/,/,relevance:0},{match:/\s+/,
relevance:0},{variants:[{begin:"<>",end:"</>"},{
match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:t.begin,
"on:begin":t.isTrulyOpeningTag,end:t.end}],subLanguage:"xml",contains:[{
begin:t.begin,end:t.end,skip:!0,contains:["self"]}]}]},x,{
beginKeywords:"while if switch catch for"},{
begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
returnBegin:!0,label:"func.def",contains:[h,e.inherit(e.TITLE_MODE,{begin:n,
className:"title.function"})]},{match:/\.\.\./,relevance:0},E,{match:"\\$"+n,
relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},
contains:[h]},q,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,
className:"variable.constant"},_,k,{match:/\$[(.]/}]}},grmr_zig:e=>{const s={
keyword:["const","let","fn","inline","while","for","extern","packed","export","pub","noalias","comptime","volatile","align","linksection","threadlocal","allowzero","noinline","callconv","struct","enum","union","opaque","asm","unreachable","break","return","continue","defer","errdefer","await","resume","suspend","async","nosuspend","try","catch","if","else","switch","orelse","usingnamespace","test","and","or"],
literal:["null","undefined","true","false"],
type:["f16","f32","f64","f80","f128","usize","isize","comptime_int","comptime_float","bool","void","noreturn","type","error","anyerror","anyframe","anytype","anyopaque","c_short","c_ushort","c_int","c_uint","c_long","c_ulong","c_longlong","c_longdouble"]
},n="[_a-zA-Z][_a-zA-Z0-9]*",t={match:/(u|i)\d+/,className:"type"};return{
name:"ZIG",keywords:s,aliases:["zig"],contains:[{match:"@"+n,
className:"built_in"},{
begin:["(?:"+n+"\\s+)",e.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{
2:"title.function"},keywords:s,contains:[{className:"params",begin:/\(/,
end:/\)/,keywords:s,relevance:0,
contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_BLOCK_COMMENT_MODE,t]
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{
beginKeywords:"struct union enum error",relevance:0},{begin:[n,/\s*(?=\{)/],
className:{1:"title.class"},keywords:s,
contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,t]},{
beginKeywords:"struct",relevance:0},{match:[n,/\s*:\s*/,n],className:{3:"type"}
},e.QUOTE_STRING_MODE,{begin:/\\\\/,end:/\n/,className:"string"},be,{
begin:/\/\//,end:/\n/,className:"comment"},t]}},grmr_xml:e=>{
const s=e.regex,n=s.concat(/[\p{L}_]/u,s.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),t={
className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},a={begin:/\s/,
contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]
},p=e.inherit(a,{begin:/\(/,end:/\)/}),d=e.inherit(e.APOS_STRING_MODE,{
className:"string"}),c=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),r={
endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",
begin:/[\p{L}0-9._:-]+/u,relevance:0},{begin:/=\s*/,relevance:0,contains:[{
className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[t]},{
begin:/'/,end:/'/,contains:[t]},{begin:/[^\s"'=<>`]+/}]}]}]};return{
name:"HTML, XML",
aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],
case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,
end:/>/,relevance:10,contains:[a,c,d,p,{begin:/\[/,end:/\]/,contains:[{
className:"meta",begin:/<![a-z]/,end:/>/,contains:[a,p,c,d]}]}]
},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,
relevance:10},t,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,
relevance:10,contains:[c]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",
begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[r],starts:{
end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",
begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[r],starts:{
end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{
className:"tag",begin:/<>|<\/>/},{className:"tag",
begin:s.concat(/</,s.lookahead(s.concat(n,s.either(/\/>/,/>/,/\s/)))),
end:/\/?>/,contains:[{className:"name",begin:n,relevance:0,starts:r}]},{
className:"tag",begin:s.concat(/<\//,s.lookahead(s.concat(n,/>/))),contains:[{
className:"name",begin:n,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}
},grmr_json:e=>{const s=["true","false","null"],n={scope:"literal",
beginKeywords:s.join(" ")};return{name:"JSON",keywords:{literal:s},contains:[{
className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},{
match:/[{}[\],:]/,className:"punctuation",relevance:0
},e.QUOTE_STRING_MODE,n,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],
illegal:"\\S"}},grmr_bash:e=>{const s=e.regex,n={},t={begin:/\$\{/,end:/\}/,
contains:["self",{begin:/:-/,contains:[n]}]};Object.assign(n,{
className:"variable",variants:[{
begin:s.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},t]});const a={
className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},p={
begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,
end:/(\w+)/,className:"string"})]}},d={className:"string",begin:/"/,end:/"/,
contains:[e.BACKSLASH_ESCAPE,n,a]};a.contains.push(d);const c={begin:/\$?\(\(/,
end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,n]
},r=e.SHEBANG({binary:"(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)",relevance:10
}),o={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,
contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{
name:"Bash",aliases:["sh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,
keyword:["if","then","else","elif","fi","for","while","until","in","do","done","case","esac","function","select"],
literal:["true","false"],
built_in:["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset","alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","type","typeset","ulimit","unalias","set","shopt","autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp","chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"]
},contains:[r,e.SHEBANG(),o,c,e.HASH_COMMENT_MODE,p,{match:/(\/[a-z._-]+)+/},d,{
className:"",begin:/\\"/},{className:"string",begin:/'/,end:/'/},n]}},
grmr_plaintext:e=>({name:"Plain text",aliases:["text","txt"],
disableAutodetect:!0}),grmr_wasm:e=>{e.regex;const s=e.COMMENT(/\(;/,/;\)/)
;return s.contains.push("self"),{name:"WebAssembly",keywords:{$pattern:/[\w.]+/,
keyword:["anyfunc","block","br","br_if","br_table","call","call_indirect","data","drop","elem","else","end","export","func","global.get","global.set","local.get","local.set","local.tee","get_global","get_local","global","if","import","local","loop","memory","memory.grow","memory.size","module","mut","nop","offset","param","result","return","select","set_global","set_local","start","table","tee_local","then","type","unreachable"]
},contains:[e.COMMENT(/;;/,/$/),s,{match:[/(?:offset|align)/,/\s*/,/=/],
className:{1:"keyword",3:"operator"}},{className:"variable",begin:/\$[\w_]+/},{
match:/(\((?!;)|\))+/,className:"punctuation",relevance:0},{
begin:[/(?:func|call|call_indirect)/,/\s+/,/\$[^\s)]+/],className:{1:"keyword",
3:"title.function"}},e.QUOTE_STRING_MODE,{match:/(i32|i64|f32|f64)(?!\.)/,
className:"type"},{className:"keyword",
match:/\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/
},{className:"number",relevance:0,
match:/[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/
}]}},grmr_x86asm:e=>({name:"Intel x86 Assembly",case_insensitive:!0,keywords:{
$pattern:"[.%]?"+e.IDENT_RE,
keyword:"lock rep repe repz repne repnz xaquire xrelease bnd nobnd aaa aad aam aas adc add and arpl bb0_reset bb1_reset bound bsf bsr bswap bt btc btr bts call cbw cdq cdqe clc cld cli clts cmc cmp cmpsb cmpsd cmpsq cmpsw cmpxchg cmpxchg486 cmpxchg8b cmpxchg16b cpuid cpu_read cpu_write cqo cwd cwde daa das dec div dmint emms enter equ f2xm1 fabs fadd faddp fbld fbstp fchs fclex fcmovb fcmovbe fcmove fcmovnb fcmovnbe fcmovne fcmovnu fcmovu fcom fcomi fcomip fcomp fcompp fcos fdecstp fdisi fdiv fdivp fdivr fdivrp femms feni ffree ffreep fiadd ficom ficomp fidiv fidivr fild fimul fincstp finit fist fistp fisttp fisub fisubr fld fld1 fldcw fldenv fldl2e fldl2t fldlg2 fldln2 fldpi fldz fmul fmulp fnclex fndisi fneni fninit fnop fnsave fnstcw fnstenv fnstsw fpatan fprem fprem1 fptan frndint frstor fsave fscale fsetpm fsin fsincos fsqrt fst fstcw fstenv fstp fstsw fsub fsubp fsubr fsubrp ftst fucom fucomi fucomip fucomp fucompp fxam fxch fxtract fyl2x fyl2xp1 hlt ibts icebp idiv imul in inc incbin insb insd insw int int01 int1 int03 int3 into invd invpcid invlpg invlpga iret iretd iretq iretw jcxz jecxz jrcxz jmp jmpe lahf lar lds lea leave les lfence lfs lgdt lgs lidt lldt lmsw loadall loadall286 lodsb lodsd lodsq lodsw loop loope loopne loopnz loopz lsl lss ltr mfence monitor mov movd movq movsb movsd movsq movsw movsx movsxd movzx mul mwait neg nop not or out outsb outsd outsw packssdw packsswb packuswb paddb paddd paddsb paddsiw paddsw paddusb paddusw paddw pand pandn pause paveb pavgusb pcmpeqb pcmpeqd pcmpeqw pcmpgtb pcmpgtd pcmpgtw pdistib pf2id pfacc pfadd pfcmpeq pfcmpge pfcmpgt pfmax pfmin pfmul pfrcp pfrcpit1 pfrcpit2 pfrsqit1 pfrsqrt pfsub pfsubr pi2fd pmachriw pmaddwd pmagw pmulhriw pmulhrwa pmulhrwc pmulhw pmullw pmvgezb pmvlzb pmvnzb pmvzb pop popa popad popaw popf popfd popfq popfw por prefetch prefetchw pslld psllq psllw psrad psraw psrld psrlq psrlw psubb psubd psubsb psubsiw psubsw psubusb psubusw psubw punpckhbw punpckhdq punpckhwd punpcklbw punpckldq punpcklwd push pusha pushad pushaw pushf pushfd pushfq pushfw pxor rcl rcr rdshr rdmsr rdpmc rdtsc rdtscp ret retf retn rol ror rdm rsdc rsldt rsm rsts sahf sal salc sar sbb scasb scasd scasq scasw sfence sgdt shl shld shr shrd sidt sldt skinit smi smint smintold smsw stc std sti stosb stosd stosq stosw str sub svdc svldt svts swapgs syscall sysenter sysexit sysret test ud0 ud1 ud2b ud2 ud2a umov verr verw fwait wbinvd wrshr wrmsr xadd xbts xchg xlatb xlat xor cmove cmovz cmovne cmovnz cmova cmovnbe cmovae cmovnb cmovb cmovnae cmovbe cmovna cmovg cmovnle cmovge cmovnl cmovl cmovnge cmovle cmovng cmovc cmovnc cmovo cmovno cmovs cmovns cmovp cmovpe cmovnp cmovpo je jz jne jnz ja jnbe jae jnb jb jnae jbe jna jg jnle jge jnl jl jnge jle jng jc jnc jo jno js jns jpo jnp jpe jp sete setz setne setnz seta setnbe setae setnb setnc setb setnae setcset setbe setna setg setnle setge setnl setl setnge setle setng sets setns seto setno setpe setp setpo setnp addps addss andnps andps cmpeqps cmpeqss cmpleps cmpless cmpltps cmpltss cmpneqps cmpneqss cmpnleps cmpnless cmpnltps cmpnltss cmpordps cmpordss cmpunordps cmpunordss cmpps cmpss comiss cvtpi2ps cvtps2pi cvtsi2ss cvtss2si cvttps2pi cvttss2si divps divss ldmxcsr maxps maxss minps minss movaps movhps movlhps movlps movhlps movmskps movntps movss movups mulps mulss orps rcpps rcpss rsqrtps rsqrtss shufps sqrtps sqrtss stmxcsr subps subss ucomiss unpckhps unpcklps xorps fxrstor fxrstor64 fxsave fxsave64 xgetbv xsetbv xsave xsave64 xsaveopt xsaveopt64 xrstor xrstor64 prefetchnta prefetcht0 prefetcht1 prefetcht2 maskmovq movntq pavgb pavgw pextrw pinsrw pmaxsw pmaxub pminsw pminub pmovmskb pmulhuw psadbw pshufw pf2iw pfnacc pfpnacc pi2fw pswapd maskmovdqu clflush movntdq movnti movntpd movdqa movdqu movdq2q movq2dq paddq pmuludq pshufd pshufhw pshuflw pslldq psrldq psubq punpckhqdq punpcklqdq addpd addsd andnpd andpd cmpeqpd cmpeqsd cmplepd cmplesd cmpltpd cmpltsd cmpneqpd cmpneqsd cmpnlepd cmpnlesd cmpnltpd cmpnltsd cmpordpd cmpordsd cmpunordpd cmpunordsd cmppd comisd cvtdq2pd cvtdq2ps cvtpd2dq cvtpd2pi cvtpd2ps cvtpi2pd cvtps2dq cvtps2pd cvtsd2si cvtsd2ss cvtsi2sd cvtss2sd cvttpd2pi cvttpd2dq cvttps2dq cvttsd2si divpd divsd maxpd maxsd minpd minsd movapd movhpd movlpd movmskpd movupd mulpd mulsd orpd shufpd sqrtpd sqrtsd subpd subsd ucomisd unpckhpd unpcklpd xorpd addsubpd addsubps haddpd haddps hsubpd hsubps lddqu movddup movshdup movsldup clgi stgi vmcall vmclear vmfunc vmlaunch vmload vmmcall vmptrld vmptrst vmread vmresume vmrun vmsave vmwrite vmxoff vmxon invept invvpid pabsb pabsw pabsd palignr phaddw phaddd phaddsw phsubw phsubd phsubsw pmaddubsw pmulhrsw pshufb psignb psignw psignd extrq insertq movntsd movntss lzcnt blendpd blendps blendvpd blendvps dppd dpps extractps insertps movntdqa mpsadbw packusdw pblendvb pblendw pcmpeqq pextrb pextrd pextrq phminposuw pinsrb pinsrd pinsrq pmaxsb pmaxsd pmaxud pmaxuw pminsb pminsd pminud pminuw pmovsxbw pmovsxbd pmovsxbq pmovsxwd pmovsxwq pmovsxdq pmovzxbw pmovzxbd pmovzxbq pmovzxwd pmovzxwq pmovzxdq pmuldq pmulld ptest roundpd roundps roundsd roundss crc32 pcmpestri pcmpestrm pcmpistri pcmpistrm pcmpgtq popcnt getsec pfrcpv pfrsqrtv movbe aesenc aesenclast aesdec aesdeclast aesimc aeskeygenassist vaesenc vaesenclast vaesdec vaesdeclast vaesimc vaeskeygenassist vaddpd vaddps vaddsd vaddss vaddsubpd vaddsubps vandpd vandps vandnpd vandnps vblendpd vblendps vblendvpd vblendvps vbroadcastss vbroadcastsd vbroadcastf128 vcmpeq_ospd vcmpeqpd vcmplt_ospd vcmpltpd vcmple_ospd vcmplepd vcmpunord_qpd vcmpunordpd vcmpneq_uqpd vcmpneqpd vcmpnlt_uspd vcmpnltpd vcmpnle_uspd vcmpnlepd vcmpord_qpd vcmpordpd vcmpeq_uqpd vcmpnge_uspd vcmpngepd vcmpngt_uspd vcmpngtpd vcmpfalse_oqpd vcmpfalsepd vcmpneq_oqpd vcmpge_ospd vcmpgepd vcmpgt_ospd vcmpgtpd vcmptrue_uqpd vcmptruepd vcmplt_oqpd vcmple_oqpd vcmpunord_spd vcmpneq_uspd vcmpnlt_uqpd vcmpnle_uqpd vcmpord_spd vcmpeq_uspd vcmpnge_uqpd vcmpngt_uqpd vcmpfalse_ospd vcmpneq_ospd vcmpge_oqpd vcmpgt_oqpd vcmptrue_uspd vcmppd vcmpeq_osps vcmpeqps vcmplt_osps vcmpltps vcmple_osps vcmpleps vcmpunord_qps vcmpunordps vcmpneq_uqps vcmpneqps vcmpnlt_usps vcmpnltps vcmpnle_usps vcmpnleps vcmpord_qps vcmpordps vcmpeq_uqps vcmpnge_usps vcmpngeps vcmpngt_usps vcmpngtps vcmpfalse_oqps vcmpfalseps vcmpneq_oqps vcmpge_osps vcmpgeps vcmpgt_osps vcmpgtps vcmptrue_uqps vcmptrueps vcmplt_oqps vcmple_oqps vcmpunord_sps vcmpneq_usps vcmpnlt_uqps vcmpnle_uqps vcmpord_sps vcmpeq_usps vcmpnge_uqps vcmpngt_uqps vcmpfalse_osps vcmpneq_osps vcmpge_oqps vcmpgt_oqps vcmptrue_usps vcmpps vcmpeq_ossd vcmpeqsd vcmplt_ossd vcmpltsd vcmple_ossd vcmplesd vcmpunord_qsd vcmpunordsd vcmpneq_uqsd vcmpneqsd vcmpnlt_ussd vcmpnltsd vcmpnle_ussd vcmpnlesd vcmpord_qsd vcmpordsd vcmpeq_uqsd vcmpnge_ussd vcmpngesd vcmpngt_ussd vcmpngtsd vcmpfalse_oqsd vcmpfalsesd vcmpneq_oqsd vcmpge_ossd vcmpgesd vcmpgt_ossd vcmpgtsd vcmptrue_uqsd vcmptruesd vcmplt_oqsd vcmple_oqsd vcmpunord_ssd vcmpneq_ussd vcmpnlt_uqsd vcmpnle_uqsd vcmpord_ssd vcmpeq_ussd vcmpnge_uqsd vcmpngt_uqsd vcmpfalse_ossd vcmpneq_ossd vcmpge_oqsd vcmpgt_oqsd vcmptrue_ussd vcmpsd vcmpeq_osss vcmpeqss vcmplt_osss vcmpltss vcmple_osss vcmpless vcmpunord_qss vcmpunordss vcmpneq_uqss vcmpneqss vcmpnlt_usss vcmpnltss vcmpnle_usss vcmpnless vcmpord_qss vcmpordss vcmpeq_uqss vcmpnge_usss vcmpngess vcmpngt_usss vcmpngtss vcmpfalse_oqss vcmpfalsess vcmpneq_oqss vcmpge_osss vcmpgess vcmpgt_osss vcmpgtss vcmptrue_uqss vcmptruess vcmplt_oqss vcmple_oqss vcmpunord_sss vcmpneq_usss vcmpnlt_uqss vcmpnle_uqss vcmpord_sss vcmpeq_usss vcmpnge_uqss vcmpngt_uqss vcmpfalse_osss vcmpneq_osss vcmpge_oqss vcmpgt_oqss vcmptrue_usss vcmpss vcomisd vcomiss vcvtdq2pd vcvtdq2ps vcvtpd2dq vcvtpd2ps vcvtps2dq vcvtps2pd vcvtsd2si vcvtsd2ss vcvtsi2sd vcvtsi2ss vcvtss2sd vcvtss2si vcvttpd2dq vcvttps2dq vcvttsd2si vcvttss2si vdivpd vdivps vdivsd vdivss vdppd vdpps vextractf128 vextractps vhaddpd vhaddps vhsubpd vhsubps vinsertf128 vinsertps vlddqu vldqqu vldmxcsr vmaskmovdqu vmaskmovps vmaskmovpd vmaxpd vmaxps vmaxsd vmaxss vminpd vminps vminsd vminss vmovapd vmovaps vmovd vmovq vmovddup vmovdqa vmovqqa vmovdqu vmovqqu vmovhlps vmovhpd vmovhps vmovlhps vmovlpd vmovlps vmovmskpd vmovmskps vmovntdq vmovntqq vmovntdqa vmovntpd vmovntps vmovsd vmovshdup vmovsldup vmovss vmovupd vmovups vmpsadbw vmulpd vmulps vmulsd vmulss vorpd vorps vpabsb vpabsw vpabsd vpacksswb vpackssdw vpackuswb vpackusdw vpaddb vpaddw vpaddd vpaddq vpaddsb vpaddsw vpaddusb vpaddusw vpalignr vpand vpandn vpavgb vpavgw vpblendvb vpblendw vpcmpestri vpcmpestrm vpcmpistri vpcmpistrm vpcmpeqb vpcmpeqw vpcmpeqd vpcmpeqq vpcmpgtb vpcmpgtw vpcmpgtd vpcmpgtq vpermilpd vpermilps vperm2f128 vpextrb vpextrw vpextrd vpextrq vphaddw vphaddd vphaddsw vphminposuw vphsubw vphsubd vphsubsw vpinsrb vpinsrw vpinsrd vpinsrq vpmaddwd vpmaddubsw vpmaxsb vpmaxsw vpmaxsd vpmaxub vpmaxuw vpmaxud vpminsb vpminsw vpminsd vpminub vpminuw vpminud vpmovmskb vpmovsxbw vpmovsxbd vpmovsxbq vpmovsxwd vpmovsxwq vpmovsxdq vpmovzxbw vpmovzxbd vpmovzxbq vpmovzxwd vpmovzxwq vpmovzxdq vpmulhuw vpmulhrsw vpmulhw vpmullw vpmulld vpmuludq vpmuldq vpor vpsadbw vpshufb vpshufd vpshufhw vpshuflw vpsignb vpsignw vpsignd vpslldq vpsrldq vpsllw vpslld vpsllq vpsraw vpsrad vpsrlw vpsrld vpsrlq vptest vpsubb vpsubw vpsubd vpsubq vpsubsb vpsubsw vpsubusb vpsubusw vpunpckhbw vpunpckhwd vpunpckhdq vpunpckhqdq vpunpcklbw vpunpcklwd vpunpckldq vpunpcklqdq vpxor vrcpps vrcpss vrsqrtps vrsqrtss vroundpd vroundps vroundsd vroundss vshufpd vshufps vsqrtpd vsqrtps vsqrtsd vsqrtss vstmxcsr vsubpd vsubps vsubsd vsubss vtestps vtestpd vucomisd vucomiss vunpckhpd vunpckhps vunpcklpd vunpcklps vxorpd vxorps vzeroall vzeroupper pclmullqlqdq pclmulhqlqdq pclmullqhqdq pclmulhqhqdq pclmulqdq vpclmullqlqdq vpclmulhqlqdq vpclmullqhqdq vpclmulhqhqdq vpclmulqdq vfmadd132ps vfmadd132pd vfmadd312ps vfmadd312pd vfmadd213ps vfmadd213pd vfmadd123ps vfmadd123pd vfmadd231ps vfmadd231pd vfmadd321ps vfmadd321pd vfmaddsub132ps vfmaddsub132pd vfmaddsub312ps vfmaddsub312pd vfmaddsub213ps vfmaddsub213pd vfmaddsub123ps vfmaddsub123pd vfmaddsub231ps vfmaddsub231pd vfmaddsub321ps vfmaddsub321pd vfmsub132ps vfmsub132pd vfmsub312ps vfmsub312pd vfmsub213ps vfmsub213pd vfmsub123ps vfmsub123pd vfmsub231ps vfmsub231pd vfmsub321ps vfmsub321pd vfmsubadd132ps vfmsubadd132pd vfmsubadd312ps vfmsubadd312pd vfmsubadd213ps vfmsubadd213pd vfmsubadd123ps vfmsubadd123pd vfmsubadd231ps vfmsubadd231pd vfmsubadd321ps vfmsubadd321pd vfnmadd132ps vfnmadd132pd vfnmadd312ps vfnmadd312pd vfnmadd213ps vfnmadd213pd vfnmadd123ps vfnmadd123pd vfnmadd231ps vfnmadd231pd vfnmadd321ps vfnmadd321pd vfnmsub132ps vfnmsub132pd vfnmsub312ps vfnmsub312pd vfnmsub213ps vfnmsub213pd vfnmsub123ps vfnmsub123pd vfnmsub231ps vfnmsub231pd vfnmsub321ps vfnmsub321pd vfmadd132ss vfmadd132sd vfmadd312ss vfmadd312sd vfmadd213ss vfmadd213sd vfmadd123ss vfmadd123sd vfmadd231ss vfmadd231sd vfmadd321ss vfmadd321sd vfmsub132ss vfmsub132sd vfmsub312ss vfmsub312sd vfmsub213ss vfmsub213sd vfmsub123ss vfmsub123sd vfmsub231ss vfmsub231sd vfmsub321ss vfmsub321sd vfnmadd132ss vfnmadd132sd vfnmadd312ss vfnmadd312sd vfnmadd213ss vfnmadd213sd vfnmadd123ss vfnmadd123sd vfnmadd231ss vfnmadd231sd vfnmadd321ss vfnmadd321sd vfnmsub132ss vfnmsub132sd vfnmsub312ss vfnmsub312sd vfnmsub213ss vfnmsub213sd vfnmsub123ss vfnmsub123sd vfnmsub231ss vfnmsub231sd vfnmsub321ss vfnmsub321sd rdfsbase rdgsbase rdrand wrfsbase wrgsbase vcvtph2ps vcvtps2ph adcx adox rdseed clac stac xstore xcryptecb xcryptcbc xcryptctr xcryptcfb xcryptofb montmul xsha1 xsha256 llwpcb slwpcb lwpval lwpins vfmaddpd vfmaddps vfmaddsd vfmaddss vfmaddsubpd vfmaddsubps vfmsubaddpd vfmsubaddps vfmsubpd vfmsubps vfmsubsd vfmsubss vfnmaddpd vfnmaddps vfnmaddsd vfnmaddss vfnmsubpd vfnmsubps vfnmsubsd vfnmsubss vfrczpd vfrczps vfrczsd vfrczss vpcmov vpcomb vpcomd vpcomq vpcomub vpcomud vpcomuq vpcomuw vpcomw vphaddbd vphaddbq vphaddbw vphadddq vphaddubd vphaddubq vphaddubw vphaddudq vphadduwd vphadduwq vphaddwd vphaddwq vphsubbw vphsubdq vphsubwd vpmacsdd vpmacsdqh vpmacsdql vpmacssdd vpmacssdqh vpmacssdql vpmacsswd vpmacssww vpmacswd vpmacsww vpmadcsswd vpmadcswd vpperm vprotb vprotd vprotq vprotw vpshab vpshad vpshaq vpshaw vpshlb vpshld vpshlq vpshlw vbroadcasti128 vpblendd vpbroadcastb vpbroadcastw vpbroadcastd vpbroadcastq vpermd vpermpd vpermps vpermq vperm2i128 vextracti128 vinserti128 vpmaskmovd vpmaskmovq vpsllvd vpsllvq vpsravd vpsrlvd vpsrlvq vgatherdpd vgatherqpd vgatherdps vgatherqps vpgatherdd vpgatherqd vpgatherdq vpgatherqq xabort xbegin xend xtest andn bextr blci blcic blsi blsic blcfill blsfill blcmsk blsmsk blsr blcs bzhi mulx pdep pext rorx sarx shlx shrx tzcnt tzmsk t1mskc valignd valignq vblendmpd vblendmps vbroadcastf32x4 vbroadcastf64x4 vbroadcasti32x4 vbroadcasti64x4 vcompresspd vcompressps vcvtpd2udq vcvtps2udq vcvtsd2usi vcvtss2usi vcvttpd2udq vcvttps2udq vcvttsd2usi vcvttss2usi vcvtudq2pd vcvtudq2ps vcvtusi2sd vcvtusi2ss vexpandpd vexpandps vextractf32x4 vextractf64x4 vextracti32x4 vextracti64x4 vfixupimmpd vfixupimmps vfixupimmsd vfixupimmss vgetexppd vgetexpps vgetexpsd vgetexpss vgetmantpd vgetmantps vgetmantsd vgetmantss vinsertf32x4 vinsertf64x4 vinserti32x4 vinserti64x4 vmovdqa32 vmovdqa64 vmovdqu32 vmovdqu64 vpabsq vpandd vpandnd vpandnq vpandq vpblendmd vpblendmq vpcmpltd vpcmpled vpcmpneqd vpcmpnltd vpcmpnled vpcmpd vpcmpltq vpcmpleq vpcmpneqq vpcmpnltq vpcmpnleq vpcmpq vpcmpequd vpcmpltud vpcmpleud vpcmpnequd vpcmpnltud vpcmpnleud vpcmpud vpcmpequq vpcmpltuq vpcmpleuq vpcmpnequq vpcmpnltuq vpcmpnleuq vpcmpuq vpcompressd vpcompressq vpermi2d vpermi2pd vpermi2ps vpermi2q vpermt2d vpermt2pd vpermt2ps vpermt2q vpexpandd vpexpandq vpmaxsq vpmaxuq vpminsq vpminuq vpmovdb vpmovdw vpmovqb vpmovqd vpmovqw vpmovsdb vpmovsdw vpmovsqb vpmovsqd vpmovsqw vpmovusdb vpmovusdw vpmovusqb vpmovusqd vpmovusqw vpord vporq vprold vprolq vprolvd vprolvq vprord vprorq vprorvd vprorvq vpscatterdd vpscatterdq vpscatterqd vpscatterqq vpsraq vpsravq vpternlogd vpternlogq vptestmd vptestmq vptestnmd vptestnmq vpxord vpxorq vrcp14pd vrcp14ps vrcp14sd vrcp14ss vrndscalepd vrndscaleps vrndscalesd vrndscaless vrsqrt14pd vrsqrt14ps vrsqrt14sd vrsqrt14ss vscalefpd vscalefps vscalefsd vscalefss vscatterdpd vscatterdps vscatterqpd vscatterqps vshuff32x4 vshuff64x2 vshufi32x4 vshufi64x2 kandnw kandw kmovw knotw kortestw korw kshiftlw kshiftrw kunpckbw kxnorw kxorw vpbroadcastmb2q vpbroadcastmw2d vpconflictd vpconflictq vplzcntd vplzcntq vexp2pd vexp2ps vrcp28pd vrcp28ps vrcp28sd vrcp28ss vrsqrt28pd vrsqrt28ps vrsqrt28sd vrsqrt28ss vgatherpf0dpd vgatherpf0dps vgatherpf0qpd vgatherpf0qps vgatherpf1dpd vgatherpf1dps vgatherpf1qpd vgatherpf1qps vscatterpf0dpd vscatterpf0dps vscatterpf0qpd vscatterpf0qps vscatterpf1dpd vscatterpf1dps vscatterpf1qpd vscatterpf1qps prefetchwt1 bndmk bndcl bndcu bndcn bndmov bndldx bndstx sha1rnds4 sha1nexte sha1msg1 sha1msg2 sha256rnds2 sha256msg1 sha256msg2 hint_nop0 hint_nop1 hint_nop2 hint_nop3 hint_nop4 hint_nop5 hint_nop6 hint_nop7 hint_nop8 hint_nop9 hint_nop10 hint_nop11 hint_nop12 hint_nop13 hint_nop14 hint_nop15 hint_nop16 hint_nop17 hint_nop18 hint_nop19 hint_nop20 hint_nop21 hint_nop22 hint_nop23 hint_nop24 hint_nop25 hint_nop26 hint_nop27 hint_nop28 hint_nop29 hint_nop30 hint_nop31 hint_nop32 hint_nop33 hint_nop34 hint_nop35 hint_nop36 hint_nop37 hint_nop38 hint_nop39 hint_nop40 hint_nop41 hint_nop42 hint_nop43 hint_nop44 hint_nop45 hint_nop46 hint_nop47 hint_nop48 hint_nop49 hint_nop50 hint_nop51 hint_nop52 hint_nop53 hint_nop54 hint_nop55 hint_nop56 hint_nop57 hint_nop58 hint_nop59 hint_nop60 hint_nop61 hint_nop62 hint_nop63",
built_in:"ip eip rip al ah bl bh cl ch dl dh sil dil bpl spl r8b r9b r10b r11b r12b r13b r14b r15b ax bx cx dx si di bp sp r8w r9w r10w r11w r12w r13w r14w r15w eax ebx ecx edx esi edi ebp esp eip r8d r9d r10d r11d r12d r13d r14d r15d rax rbx rcx rdx rsi rdi rbp rsp r8 r9 r10 r11 r12 r13 r14 r15 cs ds es fs gs ss st st0 st1 st2 st3 st4 st5 st6 st7 mm0 mm1 mm2 mm3 mm4 mm5 mm6 mm7 xmm0  xmm1  xmm2  xmm3  xmm4  xmm5  xmm6  xmm7  xmm8  xmm9 xmm10  xmm11 xmm12 xmm13 xmm14 xmm15 xmm16 xmm17 xmm18 xmm19 xmm20 xmm21 xmm22 xmm23 xmm24 xmm25 xmm26 xmm27 xmm28 xmm29 xmm30 xmm31 ymm0  ymm1  ymm2  ymm3  ymm4  ymm5  ymm6  ymm7  ymm8  ymm9 ymm10  ymm11 ymm12 ymm13 ymm14 ymm15 ymm16 ymm17 ymm18 ymm19 ymm20 ymm21 ymm22 ymm23 ymm24 ymm25 ymm26 ymm27 ymm28 ymm29 ymm30 ymm31 zmm0  zmm1  zmm2  zmm3  zmm4  zmm5  zmm6  zmm7  zmm8  zmm9 zmm10  zmm11 zmm12 zmm13 zmm14 zmm15 zmm16 zmm17 zmm18 zmm19 zmm20 zmm21 zmm22 zmm23 zmm24 zmm25 zmm26 zmm27 zmm28 zmm29 zmm30 zmm31 k0 k1 k2 k3 k4 k5 k6 k7 bnd0 bnd1 bnd2 bnd3 cr0 cr1 cr2 cr3 cr4 cr8 dr0 dr1 dr2 dr3 dr8 tr3 tr4 tr5 tr6 tr7 r0 r1 r2 r3 r4 r5 r6 r7 r0b r1b r2b r3b r4b r5b r6b r7b r0w r1w r2w r3w r4w r5w r6w r7w r0d r1d r2d r3d r4d r5d r6d r7d r0h r1h r2h r3h r0l r1l r2l r3l r4l r5l r6l r7l r8l r9l r10l r11l r12l r13l r14l r15l db dw dd dq dt ddq do dy dz resb resw resd resq rest resdq reso resy resz incbin equ times byte word dword qword nosplit rel abs seg wrt strict near far a32 ptr",
meta:"%define %xdefine %+ %undef %defstr %deftok %assign %strcat %strlen %substr %rotate %elif %else %endif %if %ifmacro %ifctx %ifidn %ifidni %ifid %ifnum %ifstr %iftoken %ifempty %ifenv %error %warning %fatal %rep %endrep %include %push %pop %repl %pathsearch %depend %use %arg %stacksize %local %line %comment %endcomment .nolist __FILE__ __LINE__ __SECT__  __BITS__ __OUTPUT_FORMAT__ __DATE__ __TIME__ __DATE_NUM__ __TIME_NUM__ __UTC_DATE__ __UTC_TIME__ __UTC_DATE_NUM__ __UTC_TIME_NUM__  __PASS__ struc endstruc istruc at iend align alignb sectalign daz nodaz up down zero default option assume public bits use16 use32 use64 default section segment absolute extern global common cpu float __utf16__ __utf16le__ __utf16be__ __utf32__ __utf32le__ __utf32be__ __float8__ __float16__ __float32__ __float64__ __float80m__ __float80e__ __float128l__ __float128h__ __Infinity__ __QNaN__ __SNaN__ Inf NaN QNaN SNaN float8 float16 float32 float64 float80m float80e float128l float128h __FLOAT_DAZ__ __FLOAT_ROUND__ __FLOAT__"
},contains:[e.COMMENT(";","$",{relevance:0}),{className:"number",variants:[{
begin:"\\b(?:([0-9][0-9_]*)?\\.[0-9_]*(?:[eE][+-]?[0-9_]+)?|(0[Xx])?[0-9][0-9_]*(\\.[0-9_]*)?(?:[pP](?:[+-]?[0-9_]+)?)?)\\b",
relevance:0},{begin:"\\$[0-9][0-9A-Fa-f]*",relevance:0},{
begin:"\\b(?:[0-9A-Fa-f][0-9A-Fa-f_]*[Hh]|[0-9][0-9_]*[DdTt]?|[0-7][0-7_]*[QqOo]|[0-1][0-1_]*[BbYy])\\b"
},{
begin:"\\b(?:0[Xx][0-9A-Fa-f_]+|0[DdTt][0-9_]+|0[QqOo][0-7_]+|0[BbYy][0-1_]+)\\b"
}]},e.QUOTE_STRING_MODE,{className:"string",variants:[{begin:"'",end:"[^\\\\]'"
},{begin:"`",end:"[^\\\\]`"}],relevance:0},{className:"symbol",variants:[{
begin:"^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)"},{
begin:"^\\s*%%[A-Za-z0-9_$#@~.?]*:"}],relevance:0},{className:"subst",
begin:"%[0-9]+",relevance:0},{className:"subst",begin:"%!S+",relevance:0},{
className:"meta",begin:/^\s*\.[\w_-]+/}]})});const fe=te
;for(const e of Object.keys(ge)){const s=e.replace("grmr_","").replace("_","-")
;fe.registerLanguage(s,ge[e])}return fe}()
;"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=hljs); 