var e={};try{e.WeakMap=WeakMap}catch(t){e.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,a=o.prototype;return a.delete=function(e){return this.has(e)&&delete e[this._]},a.get=function(e){return this.has(e)?e[this._]:void 0},a.has=function(e){return r.call(e,this._)},a.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},o;function o(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(i,this)}function i(e){this.set(e[0],e[1])}}(Math.random(),Object)}var t,n=e.WeakMap,r="-"+Math.random().toFixed(6)+"%",a=!1;try{"content"in(t=document.createElement("template"))&&(t.innerHTML='<p tabindex="'+r+'"></p>',t.content.childNodes[0].getAttribute("tabindex")==r)||(r="_dt: "+r.slice(1,-1)+";",a=!0)}catch(e){}var o="\x3c!--"+r+"--\x3e",i=/^(?:style|textarea)$/i,s=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;function l(e){return e.join(o).replace(v,b).replace(d,m)}var c=" \\f\\n\\r\\t",u="[^ \\f\\n\\r\\t\\/>\"'=]+",f="[ \\f\\n\\r\\t]+"+u,h="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",p="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+u.replace("\\/","")+"))?)",d=new RegExp(h+f+p+"+)(["+c+"]*/?>)","g"),v=new RegExp(h+f+p+"*)(["+c+"]*/>)","g"),g=new RegExp("("+f+"\\s*=\\s*)(['\"]?)"+o+"\\2","gi");function m(e,t,n,r){return"<"+t+n.replace(g,y)+r}function y(e,t,n){return t+(n||'"')+r+(n||'"')}function b(e,t,n){return s.test(t)?e:"<"+t+n+"></"+t+">"}const{isArray:w}=Array,{indexOf:x,slice:N}=[];var C=e=>({get:t=>e.get(t),set:(t,n)=>(e.set(t,n),n)});const k=(e,t)=>111===e.nodeType?1/t<0?t?(({firstChild:e,lastChild:t})=>{const n=document.createRange();return n.setStartAfter(e),n.setEndAfter(t),n.deleteContents(),e})(e):e.lastChild:t?e.valueOf():e.firstChild:e,E=e=>{const{childNodes:t}=e,{length:n}=t;if(n<2)return t[0];const r=N.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf(){if(t.length!==n){let t=0;for(;t<n;)e.appendChild(r[t++])}return e}}};var S=function(e){var t="content"in r("template")?function(e){var t=r("template");return t.innerHTML=e,t.content}:function(e){var t=r("fragment"),a=r("template"),o=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var i=RegExp.$1;a.innerHTML="<table>"+e+"</table>",o=a.querySelectorAll(i)}else a.innerHTML=e,o=a.childNodes;return n(t,o),t};return function(e,n){return("svg"===n?a:t)(e)};function n(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function r(t){return"fragment"===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",t)}function a(e){var t=r("fragment"),a=r("div");return a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",n(t,a.firstChild.childNodes),t}}(document),M=(e,t,n,r,a)=>{const o=n.length;let i=t.length,s=o,l=0,c=0,u=null;for(;l<i||c<s;)if(i===l){const t=s<o?c?r(n[c-1],-0).nextSibling:r(n[s-c],0):a;for(;c<s;)e.insertBefore(r(n[c++],1),t)}else if(s===c)for(;l<i;)u&&u.has(t[l])||e.removeChild(r(t[l],-1)),l++;else if(t[l]===n[c])l++,c++;else if(t[i-1]===n[s-1])i--,s--;else if(t[l]===n[s-1]&&n[c]===t[i-1]){const a=r(t[--i],-1).nextSibling;e.insertBefore(r(n[c++],1),r(t[l++],-1).nextSibling),e.insertBefore(r(n[--s],1),a),t[i]=n[s]}else{if(!u){u=new Map;let e=c;for(;e<s;)u.set(n[e],e++)}if(u.has(t[l])){const a=u.get(t[l]);if(c<a&&a<s){let o=l,f=1;for(;++o<i&&o<s&&u.get(t[o])===a+f;)f++;if(f>a-c){const o=r(t[l],0);for(;c<a;)e.insertBefore(r(n[c++],1),o)}else e.replaceChild(r(n[c++],1),r(t[l++],-1))}else l++}else e.removeChild(r(t[l++],-1))}return n},A={};try{A.WeakMap=WeakMap}catch(e){A.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,a=o.prototype;return a.delete=function(e){return this.has(e)&&delete e[this._]},a.get=function(e){return this.has(e)?e[this._]:void 0},a.has=function(e){return r.call(e,this._)},a.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},o;function o(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(i,this)}function i(e){this.set(e[0],e[1])}}(Math.random(),Object)}var T=A.WeakMap,L=function(e){var t="content"in r("template")?function(e){var t=r("template");return t.innerHTML=e,t.content}:function(e){var t=r("fragment"),a=r("template"),o=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var i=RegExp.$1;a.innerHTML="<table>"+e+"</table>",o=a.querySelectorAll(i)}else a.innerHTML=e,o=a.childNodes;return n(t,o),t};return function(e,n){return("svg"===n?a:t)(e)};function n(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function r(t){return"fragment"===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",t)}function a(e){var t=r("fragment"),a=r("div");return a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",n(t,a.firstChild.childNodes),t}}(document),j=function(e,t,n,r,a){var o="importNode"in e,i=e.createDocumentFragment();return i.appendChild(e.createTextNode("g")),i.appendChild(e.createTextNode("")),(o?e.importNode(i,!0):i.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),a=t.childNodes||[],o=a.length,i=0;n&&i<o;i++)r.appendChild(e(a[i],n));return r}:o?e.importNode:function(e,t){return e.cloneNode(!!t)}}(document),_="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},O=a?function(e,t){var n=t.join(" ");return t.slice.call(e,0).sort((function(e,t){return n.indexOf(e.name)<=n.indexOf(t.name)?-1:1}))}:function(e,t){return t.slice.call(e,0)};function $(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function H(e,t,n,i){for(var s=e.attributes,l=[],c=[],u=O(s,n),f=u.length,h=0;h<f;){var p,d=u[h++],v=d.value===r;if(v||1<(p=d.value.split(o)).length){var g=d.name;if(l.indexOf(g)<0){l.push(g);var m=n.shift().replace(v?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+g+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),y=s[m]||s[m.toLowerCase()];if(v)t.push(R(y,i,m,null));else{for(var b=p.length-2;b--;)n.shift();t.push(R(y,i,m,p))}}c.push(d)}}h=0;for(var w=(0<(f=c.length)&&a&&!("ownerSVGElement"in e));h<f;){var x=c[h++];w&&(x.value=""),e.removeAttribute(x.name)}var N=e.nodeName;if(/^script$/i.test(N)){var C=document.createElement(N);for(f=s.length,h=0;h<f;)C.setAttributeNode(s[h++].cloneNode(!0));C.textContent=e.textContent,e.parentNode.replaceChild(C,e)}}function W(e,t){return{type:"any",node:e,path:t}}function R(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function D(e,t){return{type:"text",node:e,path:t}}var P=C(new T);function z(e,t){var n=(e.convert||l)(t),a=e.transform;a&&(n=a(n));var s=L(n,e.type);Z(s);var c=[];return function e(t,n,a,s){for(var l=t.childNodes,c=l.length,u=0;u<c;){var f=l[u];switch(f.nodeType){case 1:var h=s.concat(u);H(f,n,a,h),e(f,n,a,h);break;case 8:var p=f.textContent;if(p===r)a.shift(),n.push(i.test(t.nodeName)?D(t,s):W(f,s.concat(u)));else switch(p.slice(0,2)){case"/*":if("*/"!==p.slice(-2))break;case"👻":t.removeChild(f),u--,c--}break;case 3:i.test(t.nodeName)&&_.call(f.textContent)===o&&(a.shift(),n.push(D(t,s)))}u++}}(s,c,t.slice(0),[]),{content:s,updates:function(n){for(var r=[],a=c.length,o=0,i=0;o<a;){var s=c[o++],l=$(n,s.path);switch(s.type){case"any":r.push({fn:e.any(l,[]),sparse:!1});break;case"attr":var u=s.sparse,f=e.attribute(l,s.name,s.node);null===u?r.push({fn:f,sparse:!1}):(i+=u.length-2,r.push({fn:f,sparse:!0,values:u}));break;case"text":r.push({fn:e.text(l),sparse:!1}),l.textContent=""}}return a+=i,function(){var e=arguments.length;if(a!==e-1)throw new Error(e-1+" values instead of "+a+"\n"+t.join("${value}"));for(var o=1,i=1;o<e;){var s=r[o-i];if(s.sparse){var l=s.values,c=l[0],u=1,f=l.length;for(i+=f-2;u<f;)c+=arguments[o++]+l[u++];s.fn(c)}else s.fn(arguments[o++])}return n}}}}function B(e,t){var n=P.get(t)||P.set(t,z(e,t));return n.updates(j.call(document,n.content,!0))}var F=[];function Z(e){for(var t=e.childNodes,n=t.length;n--;){var r=t[n];1!==r.nodeType&&0===_.call(r.textContent).length&&e.removeChild(r)}}var q=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,a){var o,i;return function(s){var l,c,u,f;switch(typeof s){case"object":if(s){if("object"===o){if(!a&&i!==s)for(c in i)c in s||(r[c]="")}else a?r.value="":r.cssText="";for(c in l=a?{}:r,s)u="number"!=typeof(f=s[c])||e.test(c)?f:f+"px",!a&&/^--/.test(c)?l.setProperty(c,u):l[c]=u;o="object",a?r.value=function(e){var r,a=[];for(r in e)a.push(r.replace(t,n),":",e[r],";");return a.join("")}(i=l):i=s;break}default:i!=s&&(o="string",i=s,a?r.value=s||"":r.cssText=s||"")}}}}();const G=(e,t)=>{let n,r=!0;const a=document.createAttributeNS(null,t);return t=>{n!==t&&(n=t,null==n?r||(e.removeAttributeNode(a),r=!0):(a.value=t,r&&(e.setAttributeNodeNS(a),r=!1)))}},V=(e,t)=>n=>{e[t]=n},U=/^(?:form|list)$/i,I=(e,t)=>e.ownerDocument.createTextNode(t);function J(e){return this.type=e,t=this,n=F,r=Z,function(e){return n!==e&&(r=B(t,n=e)),r.apply(null,arguments)};var t,n,r}function K(e){return e(this)}J.prototype={attribute(e,t,n){const r="svg"===this.type;switch(t){case"class":if(r)return G(e,t);t="className";case"props":return V(e,t);case"aria":return(e=>t=>{for(const n in t)e.setAttribute("role"===n?n:"aria-"+n,t[n])})(e);case"style":return q(e,n,r);case"ref":return(e=>t=>{"function"==typeof t?t(e):t.current=e})(e);case".dataset":return(({dataset:e})=>t=>{for(const n in t)e[n]=t[n]})(e);default:return"."===t.slice(0,1)?V(e,t.slice(1)):"on"===t.slice(0,2)?((e,t)=>{let n,r=t.slice(2);return!(t in e)&&t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{const a=w(t)?t:[t,!1];n!==a[0]&&(n&&e.removeEventListener(r,n,a[1]),(n=a[0])&&e.addEventListener(r,n,a[1]))}})(e,t):!(t in e)||r||U.test(t)?G(e,t):((e,t)=>{let n;return r=>{n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}})(e,t)}},any(e,t){const{type:n}=this;let r,a=!1;const o=i=>{switch(typeof i){case"string":case"number":case"boolean":a?r!==i&&(r=i,t[0].textContent=i):(a=!0,r=i,t=M(e.parentNode,t,[I(e,i)],k,e));break;case"function":o(i(e));break;case"object":case"undefined":if(null==i){a=!1,t=M(e.parentNode,t,[],k,e);break}default:if(a=!1,r=i,w(i))if(0===i.length)t.length&&(t=M(e.parentNode,t,[],k,e));else switch(typeof i[0]){case"string":case"number":case"boolean":o(String(i));break;case"function":o(i.map(K,e));break;case"object":w(i[0])&&(i=i.concat.apply([],i));default:t=M(e.parentNode,t,i,k,e)}else"ELEMENT_NODE"in i?t=M(e.parentNode,t,11===i.nodeType?N.call(i.childNodes):[i],k,e):"text"in i?o(String(i.text)):"any"in i?o(i.any):"html"in i?t=M(e.parentNode,t,N.call(S([].concat(i.html).join(""),n).childNodes),k,e):"length"in i&&o(N.call(i))}};return o},text(e){let t;const n=r=>{if(t!==r){t=r;const a=typeof r;"object"===a&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(N.call(r).join("")):"function"===a?n(r(e)):e.textContent=null==r?"":r}};return n}};const{create:Q,freeze:X,keys:Y}=Object,ee=C(new n),te=()=>({stack:[],entry:null,wire:null}),ne=(e,t)=>{const r=C(new n);return a.for=(e,n)=>{const o=r.get(e)||r.set(e,Q(null));return o[n]||(o[n]=(i=te(),function(){return re(t,i,a.apply(null,arguments))}));var i},a.node=function(){return re(t,te(),a.apply(null,arguments)).valueOf()},a;function a(){return new oe(e,ue.apply(null,arguments))}},re=(e,t,{type:n,template:r,values:a})=>{const{length:o}=a;ae(e,t,a,o);let{entry:i}=t;if(i&&i.template===r&&i.type===n)i.tag(r,...a);else{const o=new e(n);t.entry=i={type:n,template:r,tag:o,wire:E(o(r,...a))}}return i.wire},ae=(e,{stack:t},n,r)=>{for(let a=0;a<r;a++){const r=n[a];r instanceof ie?n[a]=re(e,t[a]||(t[a]=te()),r):w(r)?ae(e,t[a]||(t[a]=te()),r,r.length):t[a]=null}r<t.length&&t.splice(r)};function oe(e,t){this.type=e,this.template=t.shift(),this.values=t}X(oe);const ie=oe,{render:se,html:le,svg:ce}=(e=>({html:ne("html",e),svg:ne("svg",e),render(t,n){const r="function"==typeof n?n():n,a=ee.get(t)||ee.set(t,te()),o=r instanceof oe?re(e,a,r):r;return o!==a.wire&&(a.wire=o,t.textContent="",t.appendChild(o.valueOf())),t}}))(J);function ue(){let e=[],t=0,{length:n}=arguments;for(;t<n;)e.push(arguments[t++]);return e}class fe{constructor(e){this.options={i18n:{locale:"en-US",rtl:"ltr",translations:{}},controllers:[],...e}}render(e,t){const n=void 0!==e.rtl?e.rtl:this.options.i18n.rtl;return le.node`<div class="blocks ${this.constructor.name}-block" data-block-type="${this.constructor.name}">
    <p contenteditable dir="${n}">${t}</p>
    </div>`}save(e){const t=e.querySelector("p");if(""!==t.textContent)return{type:"paragraph",data:{text:t.textContent}}}}export{fe as Paragraph};
