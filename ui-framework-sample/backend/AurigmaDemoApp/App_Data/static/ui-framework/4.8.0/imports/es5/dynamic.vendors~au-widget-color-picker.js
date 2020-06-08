(window.multistep_editor_jsonpFunction=window.multistep_editor_jsonpFunction||[]).push([[45],{715:function(e,t,n){"use strict";
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var r=new WeakMap,i=function(e){return"function"==typeof e&&r.has(e)},o=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,a=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;t!==n;){var r=t.nextSibling;e.removeChild(t),t=r}},s={},u={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var l="{{lit-"+String(Math.random()).slice(2)+"}}",c="\x3c!--"+l+"--\x3e",p=new RegExp(l+"|"+c),h=function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parts=[],this.element=n;for(var r=[],i=[],o=document.createTreeWalker(n.content,133,null,!1),a=0,s=-1,u=0,c=t.strings,h=t.values.length;u<h;){var d=o.nextNode();if(null!==d){if(s++,1===d.nodeType){if(d.hasAttributes()){for(var _=d.attributes,m=_.length,g=0,b=0;b<m;b++)f(_[b].name,"$lit$")&&g++;for(;g-- >0;){var w=c[u],S=y.exec(w)[2],P=S.toLowerCase()+"$lit$",k=d.getAttribute(P);d.removeAttribute(P);var x=k.split(p);this.parts.push({type:"attribute",index:s,name:S,strings:x}),u+=x.length-1}}"TEMPLATE"===d.tagName&&(i.push(d),o.currentNode=d.content)}else if(3===d.nodeType){var O=d.data;if(O.indexOf(l)>=0){for(var C=d.parentNode,N=O.split(p),E=N.length-1,T=0;T<E;T++){var A=void 0,j=N[T];if(""===j)A=v();else{var V=y.exec(j);null!==V&&f(V[2],"$lit$")&&(j=j.slice(0,V.index)+V[1]+V[2].slice(0,-"$lit$".length)+V[3]),A=document.createTextNode(j)}C.insertBefore(A,d),this.parts.push({type:"node",index:++s})}""===N[E]?(C.insertBefore(v(),d),r.push(d)):d.data=N[E],u+=E}}else if(8===d.nodeType)if(d.data===l){var R=d.parentNode;null!==d.previousSibling&&s!==a||(s++,R.insertBefore(v(),d)),a=s,this.parts.push({type:"node",index:s}),null===d.nextSibling?d.data="":(r.push(d),s--),u++}else for(var M=-1;-1!==(M=d.data.indexOf(l,M+1));)this.parts.push({type:"node",index:-1}),u++}else o.currentNode=i.pop()}var U=!0,z=!1,F=void 0;try{for(var q,L=r[Symbol.iterator]();!(U=(q=L.next()).done);U=!0){var H=q.value;H.parentNode.removeChild(H)}}catch(e){z=!0,F=e}finally{try{!U&&L.return&&L.return()}finally{if(z)throw F}}},f=function(e,t){var n=e.length-t.length;return n>=0&&e.slice(n)===t},d=function(e){return-1!==e.index},v=function(){return document.createComment("")},y=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,_=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function m(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var g=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.__parts=[],this.template=t,this.processor=n,this.options=r}return _(e,[{key:"update",value:function(e){var t=0,n=!0,r=!1,i=void 0;try{for(var o,a=this.__parts[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;void 0!==s&&s.setValue(e[t]),t++}}catch(e){r=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw i}}var u=!0,l=!1,c=void 0;try{for(var p,h=this.__parts[Symbol.iterator]();!(u=(p=h.next()).done);u=!0){var f=p.value;void 0!==f&&f.commit()}}catch(e){l=!0,c=e}finally{try{!u&&h.return&&h.return()}finally{if(l)throw c}}}},{key:"_clone",value:function(){for(var e=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,r=document.createTreeWalker(e,133,null,!1),i=0,a=0,s=void 0,u=r.nextNode();i<n.length;)if(s=n[i],d(s)){for(;a<s.index;)a++,"TEMPLATE"===u.nodeName&&(t.push(u),r.currentNode=u.content),null===(u=r.nextNode())&&(r.currentNode=t.pop(),u=r.nextNode());if("node"===s.type){var l=this.processor.handleTextExpression(this.options);l.insertAfterNode(u.previousSibling),this.__parts.push(l)}else{var c;(c=this.__parts).push.apply(c,m(this.processor.handleAttributeExpressions(u,s.name,s.strings,this.options)))}i++}else this.__parts.push(void 0),i++;return o&&(document.adoptNode(e),customElements.upgrade(e)),e}}]),e}(),b=function e(t,n,r){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,r)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(r):void 0},w=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var P=function(){function e(t,n,r,i){S(this,e),this.strings=t,this.values=n,this.type=r,this.processor=i}return w(e,[{key:"getHTML",value:function(){for(var e=this.strings.length-1,t="",n=!1,r=0;r<e;r++){var i=this.strings[r],o=i.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===i.indexOf("--\x3e",o+1);var a=y.exec(i);t+=null===a?i+(n?l:c):i.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+l}return t+=this.strings[e]}},{key:"getTemplateElement",value:function(){var e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}]),e}(),k=(function(e){function t(){return S(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)})(t,P),w(t,[{key:"getHTML",value:function(){return"<svg>"+b(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getHTML",this).call(this)+"</svg>"}},{key:"getTemplateElement",value:function(){var e=b(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getTemplateElement",this).call(this),n=e.content,r=n.firstChild;return n.removeChild(r),function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;t!==n;){var i=t.nextSibling;e.insertBefore(t,r),t=i}}(n,r.firstChild),e}}])}(),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function O(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function C(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var E=function(e){return null===e||!("object"===(void 0===e?"undefined":x(e))||"function"==typeof e)},T=function(e){return Array.isArray(e)||!(!e||!e[Symbol.iterator])},A=function(){function e(t,n,r){N(this,e),this.dirty=!0,this.element=t,this.name=n,this.strings=r,this.parts=[];for(var i=0;i<r.length-1;i++)this.parts[i]=this._createPart()}return k(e,[{key:"_createPart",value:function(){return new j(this)}},{key:"_getValue",value:function(){for(var e=this.strings,t=e.length-1,n="",r=0;r<t;r++){n+=e[r];var i=this.parts[r];if(void 0!==i){var o=i.value;if(E(o)||!T(o))n+="string"==typeof o?o:String(o);else{var a=!0,s=!1,u=void 0;try{for(var l,c=o[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){var p=l.value;n+="string"==typeof p?p:String(p)}}catch(e){s=!0,u=e}finally{try{!a&&c.return&&c.return()}finally{if(s)throw u}}}}}return n+=e[t]}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}]),e}(),j=function(){function e(t){N(this,e),this.value=void 0,this.committer=t}return k(e,[{key:"setValue",value:function(e){e===s||E(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}},{key:"commit",value:function(){for(;i(this.value);){var e=this.value;this.value=s,e(this)}this.value!==s&&this.committer.commit()}}]),e}(),V=function(){function e(t){N(this,e),this.value=void 0,this.__pendingValue=void 0,this.options=t}return k(e,[{key:"appendInto",value:function(e){this.startNode=e.appendChild(v()),this.endNode=e.appendChild(v())}},{key:"insertAfterNode",value:function(e){this.startNode=e,this.endNode=e.nextSibling}},{key:"appendIntoPart",value:function(e){e.__insert(this.startNode=v()),e.__insert(this.endNode=v())}},{key:"insertAfterPart",value:function(e){e.__insert(this.startNode=v()),this.endNode=e.endNode,e.endNode=this.startNode}},{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;i(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=s,e(this)}var t=this.__pendingValue;t!==s&&(E(t)?t!==this.value&&this.__commitText(t):t instanceof P?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):T(t)?this.__commitIterable(t):t===u?(this.value=u,this.clear()):this.__commitText(t))}},{key:"__insert",value:function(e){this.endNode.parentNode.insertBefore(e,this.endNode)}},{key:"__commitNode",value:function(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}},{key:"__commitText",value:function(e){var t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this.__commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}},{key:"__commitTemplateResult",value:function(e){var t=this.options.templateFactory(e);if(this.value instanceof g&&this.value.template===t)this.value.update(e.values);else{var n=new g(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}},{key:"__commitIterable",value:function(t){Array.isArray(this.value)||(this.value=[],this.clear());var n=this.value,r=0,i=void 0,o=!0,a=!1,s=void 0;try{for(var u,l=t[Symbol.iterator]();!(o=(u=l.next()).done);o=!0){var c=u.value;void 0===(i=n[r])&&(i=new e(this.options),n.push(i),0===r?i.appendIntoPart(this):i.insertAfterPart(n[r-1])),i.setValue(c),i.commit(),r++}}catch(e){a=!0,s=e}finally{try{!o&&l.return&&l.return()}finally{if(a)throw s}}r<n.length&&(n.length=r,this.clear(i&&i.endNode))}},{key:"clear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;a(this.startNode.parentNode,e.nextSibling,this.endNode)}}]),e}(),R=function(){function e(t,n,r){if(N(this,e),this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=n,this.strings=r}return k(e,[{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;i(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=s,e(this)}if(this.__pendingValue!==s){var t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=s}}}]),e}(),M=function(e){function t(e,n,r){N(this,t);var i=O(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,r));return i.single=2===r.length&&""===r[0]&&""===r[1],i}return C(t,A),k(t,[{key:"_createPart",value:function(){return new U(this)}},{key:"_getValue",value:function(){return this.single?this.parts[0].value:function e(t,n,r){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,r)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(r):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"_getValue",this).call(this)}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}]),t}(),U=function(e){function t(){return N(this,t),O(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return C(t,j),t}(),z=!1;try{var F={get capture(){return z=!0,!1}};window.addEventListener("test",F,F),window.removeEventListener("test",F,F)}catch(e){}var q=function(){function e(t,n,r){var i=this;N(this,e),this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=n,this.eventContext=r,this.__boundHandleEvent=function(e){return i.handleEvent(e)}}return k(e,[{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;i(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=s,e(this)}if(this.__pendingValue!==s){var t=this.__pendingValue,n=this.value,r=null==t||null!=n&&(t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive),o=null!=t&&(null==n||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=L(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=s}}},{key:"handleEvent",value:function(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}]),e}(),L=function(e){return e&&(z?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)},H=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var I=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return H(e,[{key:"handleAttributeExpressions",value:function(e,t,n,r){var i=t[0];return"."===i?new M(e,t.slice(1),n).parts:"@"===i?[new q(e,t.slice(1),r.eventContext)]:"?"===i?[new R(e,t.slice(1),n)]:new A(e,t,n).parts}},{key:"handleTextExpression",value:function(e){return new V(e)}}]),e}());
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
function B(e){var t=$.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},$.set(e.type,t));var n=t.stringsArray.get(e.strings);if(void 0!==n)return n;var r=e.strings.join(l);return void 0===(n=t.keyString.get(r))&&(n=new h(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}var $=new Map,W=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");var D=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new P(e,n,"html",I)},J=133;function G(e,t){for(var n=e.element.content,r=e.parts,i=document.createTreeWalker(n,J,null,!1),o=Q(r),a=r[o],s=-1,u=0,l=[],c=null;i.nextNode();){s++;var p=i.currentNode;for(p.previousSibling===c&&(c=null),t.has(p)&&(l.push(p),null===c&&(c=p)),null!==c&&u++;void 0!==a&&a.index===s;)a.index=null!==c?-1:a.index-u,a=r[o=Q(r,o)]}l.forEach(function(e){return e.parentNode.removeChild(e)})}var K=function(e){for(var t=11===e.nodeType?0:1,n=document.createTreeWalker(e,J,null,!1);n.nextNode();)t++;return t},Q=function(e){for(var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;t<e.length;t++){var n=e[t];if(d(n))return t}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var X=function(e,t){return e+"--"+t},Y=!0;void 0===window.ShadyCSS?Y=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Y=!1);var Z=["html","svg"],ee=new Set,te=function(e,t,n){ee.add(n);var r=e.querySelectorAll("style"),i=r.length;if(0!==i){for(var o=document.createElement("style"),a=0;a<i;a++){var s=r[a];s.parentNode.removeChild(s),o.textContent+=s.textContent}!function(e){Z.forEach(function(t){var n=$.get(X(t,e));void 0!==n&&n.keyString.forEach(function(e){var t=e.element.content,n=new Set;Array.from(t.querySelectorAll("style")).forEach(function(e){n.add(e)}),G(e,n)})})}(n);var u=t.element.content;!function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=e.element.content,i=e.parts;if(null!==n&&void 0!==n)for(var o=document.createTreeWalker(r,J,null,!1),a=Q(i),s=0,u=-1;o.nextNode();)for(u++,o.currentNode===n&&(s=K(t),n.parentNode.insertBefore(t,n));-1!==a&&i[a].index===u;){if(s>0){for(;-1!==a;)i[a].index+=s,a=Q(i,a);return}a=Q(i,a)}else r.appendChild(t)}(t,o,u.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n);var l=u.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else{u.insertBefore(o,u.firstChild);var c=new Set;c.add(o),G(t,c)}}else window.ShadyCSS.prepareTemplateStyles(t.element,n)},ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},re=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function ie(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
window.JSCompiler_renameProperty=function(e,t){return e};var oe={toAttribute:function(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute:function(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},ae=function(e,t){return t!==e&&(t==t||e==e)},se={attribute:!0,type:String,converter:oe,reflect:!1,hasChanged:ae},ue=Promise.resolve(!0),le=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e._updateState=0,e._instanceProperties=void 0,e._updatePromise=ue,e._hasConnectedResolver=void 0,e._changedProperties=new Map,e._reflectingProperties=void 0,e.initialize(),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,HTMLElement),re(t,[{key:"initialize",value:function(){this._saveInstanceProperties(),this._requestUpdate()}},{key:"_saveInstanceProperties",value:function(){var e=this;this.constructor._classProperties.forEach(function(t,n){if(e.hasOwnProperty(n)){var r=e[n];delete e[n],e._instanceProperties||(e._instanceProperties=new Map),e._instanceProperties.set(n,r)}})}},{key:"_applyInstanceProperties",value:function(){var e=this;this._instanceProperties.forEach(function(t,n){return e[n]=t}),this._instanceProperties=void 0}},{key:"connectedCallback",value:function(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}},{key:"disconnectedCallback",value:function(){}},{key:"attributeChangedCallback",value:function(e,t,n){t!==n&&this._attributeToProperty(e,n)}},{key:"_propertyToAttribute",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:se,r=this.constructor,i=r._attributeNameForProperty(e,n);if(void 0!==i){var o=r._propertyValueToAttribute(t,n);if(void 0===o)return;this._updateState=8|this._updateState,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._updateState=-9&this._updateState}}},{key:"_attributeToProperty",value:function(e,t){if(!(8&this._updateState)){var n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){var i=n._classProperties.get(r)||se;this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,i),this._updateState=-17&this._updateState}}}},{key:"_requestUpdate",value:function(e,t){var n=!0;if(void 0!==e){var r=this.constructor,i=r._classProperties.get(e)||se;r._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}},{key:"requestUpdate",value:function(e,t){return this._requestUpdate(e,t),this.updateComplete}},{key:"_enqueueUpdate",value:function(){var e=function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(i,o){try{var a=t[i](o),s=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}("next")})}}(regeneratorRuntime.mark(function e(){var t,n,r,i,o=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this._updateState=4|this._updateState,t=void 0,n=void 0,r=this._updatePromise,this._updatePromise=new Promise(function(e,r){t=e,n=r}),e.prev=5,e.next=8,r;case 8:e.next=12;break;case 10:e.prev=10,e.t0=e.catch(5);case 12:if(this._hasConnected){e.next=15;break}return e.next=15,new Promise(function(e){return o._hasConnectedResolver=e});case 15:if(e.prev=15,null==(i=this.performUpdate())){e.next=20;break}return e.next=20,i;case 20:e.next=25;break;case 22:e.prev=22,e.t1=e.catch(15),n(e.t1);case 25:t(!this._hasRequestedUpdate);case 26:case"end":return e.stop()}},e,this,[[5,10],[15,22]])}));return function(){return e.apply(this,arguments)}}()},{key:"performUpdate",value:function(){this._instanceProperties&&this._applyInstanceProperties();var e=!1,t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}},{key:"_markUpdated",value:function(){this._changedProperties=new Map,this._updateState=-5&this._updateState}},{key:"shouldUpdate",value:function(e){return!0}},{key:"update",value:function(e){var t=this;void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(function(e,n){return t._propertyToAttribute(n,t[n],e)}),this._reflectingProperties=void 0)}},{key:"updated",value:function(e){}},{key:"firstUpdated",value:function(e){}},{key:"_hasConnected",get:function(){return 32&this._updateState}},{key:"_hasRequestedUpdate",get:function(){return 4&this._updateState}},{key:"hasUpdated",get:function(){return 1&this._updateState}},{key:"updateComplete",get:function(){return this._updatePromise}}],[{key:"_ensureClassProperties",value:function(){var e=this;if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;var t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(function(t,n){return e._classProperties.set(n,t)})}}},{key:"createProperty",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:se;if(this._ensureClassProperties(),this._classProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){var n="symbol"===(void 0===e?"undefined":ne(e))?Symbol():"__"+e;Object.defineProperty(this.prototype,e,{get:function(){return this[n]},set:function(t){var r=this[e];this[n]=t,this._requestUpdate(e,r)},configurable:!0,enumerable:!0})}}},{key:"finalize",value:function(){if(!this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))||!this.finalized){var e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){var t=this.properties,n=[].concat(ie(Object.getOwnPropertyNames(t)),ie("function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[])),r=!0,i=!1,o=void 0;try{for(var a,s=n[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;this.createProperty(u,t[u])}}catch(e){i=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}}}}},{key:"_attributeNameForProperty",value:function(e,t){var n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}},{key:"_valueHasChanged",value:function(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:ae)(e,t)}},{key:"_propertyValueFromAttribute",value:function(e,t){var n=t.type,r=t.converter||oe,i="function"==typeof r?r:r.fromAttribute;return i?i(e,n):e}},{key:"_propertyValueToAttribute",value:function(e,t){if(void 0!==t.reflect){var n=t.type,r=t.converter;return(r&&r.toAttribute||oe.toAttribute)(e,n)}}},{key:"observedAttributes",get:function(){var e=this;this.finalize();var t=[];return this._classProperties.forEach(function(n,r){var i=e._attributeNameForProperty(r,n);void 0!==i&&(e._attributeToPropertyMap.set(i,r),t.push(i))}),t}}]),t}();le.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var ce=function(e){return function(t){return"function"==typeof t?function(e,t){return window.customElements.define(e,t),t}(e,t):function(e,t){return{kind:t.kind,elements:t.elements,finisher:function(t){window.customElements.define(e,t)}}}(e,t)}},pe=function(e,t){return"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer:function(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher:function(n){n.createProperty(t.key,e)}}:Object.assign({},t,{finisher:function(n){n.createProperty(t.key,e)}})},he=function(e,t,n){t.constructor.createProperty(n,e)};function fe(e){return function(t,n){return void 0!==n?he(e,t,n):pe(e,t)}}var de=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var ve="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ye=Symbol(),_e=function(){function e(t,n){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n!==ye)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}return de(e,[{key:"toString",value:function(){return this.cssText}},{key:"styleSheet",get:function(){return void 0===this._styleSheet&&(ve?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}}]),e}(),me=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n.reduce(function(t,n,r){return t+function(e){if(e instanceof _e)return e.cssText;if("number"==typeof e)return e;throw new Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.")}(n)+e[r+1]},e[0]);return new _e(i,ye)};n.d(t,"a",function(){return Se}),n.d(t,"c",function(){return ce}),n.d(t,"e",function(){return fe}),n.d(t,"d",function(){return D}),n.d(t,"b",function(){return me});var ge=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),be=function e(t,n,r){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,r)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(r):void 0};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.0");var we=function(e){return e.flat?e.flat(1/0):function e(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=0,i=t.length;r<i;r++){var o=t[r];Array.isArray(o)?e(o,n):n.push(o)}return n}(e)},Se=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(t,le),ge(t,[{key:"initialize",value:function(){be(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"initialize",this).call(this),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}},{key:"createRenderRoot",value:function(){return this.attachShadow({mode:"open"})}},{key:"adoptStyles",value:function(){var e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ve?this.renderRoot.adoptedStyleSheets=e.map(function(e){return e.styleSheet}):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(function(e){return e.cssText}),this.localName))}},{key:"connectedCallback",value:function(){be(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}},{key:"update",value:function(e){var n=this;be(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"update",this).call(this,e);var r=this.render();r instanceof P&&this.constructor.render(r,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(function(e){var t=document.createElement("style");t.textContent=e.cssText,n.renderRoot.appendChild(t)}))}},{key:"render",value:function(){}}],[{key:"finalize",value:function(){be(t.__proto__||Object.getPrototypeOf(t),"finalize",this).call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}},{key:"_getUniqueStyles",value:function(){var e=this.styles,t=[];Array.isArray(e)?we(e).reduceRight(function(e,t){return e.add(t),e},new Set).forEach(function(e){return t.unshift(e)}):e&&t.push(e);return t}}]),t}();Se.finalized=!0,Se.render=function(e,t,n){var r=n.scopeName,i=W.has(t),o=Y&&11===t.nodeType&&!!t.host&&e instanceof P,s=o&&!ee.has(r),u=s?document.createDocumentFragment():t;if(function(e,t,n){var r=W.get(t);void 0===r&&(a(t,t.firstChild),W.set(t,r=new V(Object.assign({templateFactory:B},n))),r.appendInto(t)),r.setValue(e),r.commit()}(e,u,Object.assign({templateFactory:function(e){return function(t){var n=X(t.type,e),r=$.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},$.set(n,r));var i=r.stringsArray.get(t.strings);if(void 0!==i)return i;var o=t.strings.join(l);if(void 0===(i=r.keyString.get(o))){var a=t.getTemplateElement();Y&&window.ShadyCSS.prepareTemplateDom(a,e),i=new h(t,a),r.keyString.set(o,i)}return r.stringsArray.set(t.strings,i),i}}(r)},n)),s){var c=W.get(u);W.delete(u),c.value instanceof g&&te(u,c.value.template,r),a(t,t.firstChild),t.appendChild(u),W.set(t,c)}!i&&o&&window.ShadyCSS.styleElement(t.host)}}}]);