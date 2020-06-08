/*!
  * https://github.com/paulmillr/es6-shim
  * @license es6-shim Copyright 2013-2016 by Paul Miller (http://paulmillr.com)
  *   and contributors,  MIT License
  * es6-shim: v0.35.1
  * see https://github.com/paulmillr/es6-shim/blob/0.35.1/LICENSE
  * Details and documentation:
  * https://github.com/paulmillr/es6-shim/
  */
(function(e,t){if(typeof define==="function"&&false){define(t)}else if(typeof exports==="object"){module.exports=t()}else{e.returnExports=t()}})(this,function(){"use strict";var e=Function.call.bind(Function.apply);var t=Function.call.bind(Function.call);var r=Array.isArray;var n=Object.keys;var o=function notThunker(t){return function notThunk(){return!e(t,this,arguments)}};var i=function(e){try{e();return false}catch(e){return true}};var a=function valueOrFalseIfThrows(e){try{return e()}catch(e){return false}};var u=o(i);var f=function(){return!i(function(){Object.defineProperty({},"x",{get:function(){}})})};var s=!!Object.defineProperty&&f();var c=function foo(){}.name==="foo";var l=Function.call.bind(Array.prototype.forEach);var p=Function.call.bind(Array.prototype.reduce);var v=Function.call.bind(Array.prototype.filter);var y=Function.call.bind(Array.prototype.some);var h=function(e,t,r,n){if(!n&&t in e){return}if(s){Object.defineProperty(e,t,{configurable:true,enumerable:false,writable:true,value:r})}else{e[t]=r}};var b=function(e,t,r){l(n(t),function(n){var o=t[n];h(e,n,o,!!r)})};var g=Function.call.bind(Object.prototype.toString);var d=typeof/abc/==="function"?function IsCallableSlow(e){return typeof e==="function"&&g(e)==="[object Function]"}:function IsCallableFast(e){return typeof e==="function"};var m={getter:function(e,t,r){if(!s){throw new TypeError("getters require true ES5 support")}Object.defineProperty(e,t,{configurable:true,enumerable:false,get:r})},proxy:function(e,t,r){if(!s){throw new TypeError("getters require true ES5 support")}var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,{configurable:n.configurable,enumerable:n.enumerable,get:function getKey(){return e[t]},set:function setKey(r){e[t]=r}})},redefine:function(e,t,r){if(s){var n=Object.getOwnPropertyDescriptor(e,t);n.value=r;Object.defineProperty(e,t,n)}else{e[t]=r}},defineByDescriptor:function(e,t,r){if(s){Object.defineProperty(e,t,r)}else if("value"in r){e[t]=r.value}},preserveToString:function(e,t){if(t&&d(t.toString)){h(e,"toString",t.toString.bind(t),true)}}};var O=Object.create||function(e,t){var r=function Prototype(){};r.prototype=e;var o=new r;if(typeof t!=="undefined"){n(t).forEach(function(e){m.defineByDescriptor(o,e,t[e])})}return o};var w=function(e,t){if(!Object.setPrototypeOf){return false}return a(function(){var r=function Subclass(t){var r=new e(t);Object.setPrototypeOf(r,Subclass.prototype);return r};Object.setPrototypeOf(r,e);r.prototype=O(e.prototype,{constructor:{value:r}});return t(r)})};var j=function(){if(typeof self!=="undefined"){return self}if(typeof window!=="undefined"){return window}if(typeof global!=="undefined"){return global}throw new Error("unable to locate global object")};var S=j();var T=S.isFinite;var I=Function.call.bind(String.prototype.indexOf);var E=Function.apply.bind(Array.prototype.indexOf);var P=Function.call.bind(Array.prototype.concat);var C=Function.call.bind(String.prototype.slice);var M=Function.call.bind(Array.prototype.push);var x=Function.apply.bind(Array.prototype.push);var N=Function.call.bind(Array.prototype.shift);var A=Math.max;var R=Math.min;var _=Math.floor;var k=Math.abs;var F=Math.exp;var L=Math.log;var D=Math.sqrt;var z=Function.call.bind(Object.prototype.hasOwnProperty);var q;var W=function(){};var G=S.Map;var H=G&&G.prototype["delete"];var V=G&&G.prototype.get;var B=G&&G.prototype.has;var U=G&&G.prototype.set;var $=S.Symbol||{};var J=$.species||"@@species";var X=Number.isNaN||function isNaN(e){return e!==e};var K=Number.isFinite||function isFinite(e){return typeof e==="number"&&T(e)};var Z=d(Math.sign)?Math.sign:function sign(e){var t=Number(e);if(t===0){return t}if(X(t)){return t}return t<0?-1:1};var Y=function isArguments(e){return g(e)==="[object Arguments]"};var Q=function isArguments(e){return e!==null&&typeof e==="object"&&typeof e.length==="number"&&e.length>=0&&g(e)!=="[object Array]"&&g(e.callee)==="[object Function]"};var ee=Y(arguments)?Y:Q;var te={primitive:function(e){return e===null||typeof e!=="function"&&typeof e!=="object"},string:function(e){return g(e)==="[object String]"},regex:function(e){return g(e)==="[object RegExp]"},symbol:function(e){return typeof S.Symbol==="function"&&typeof e==="symbol"}};var re=function overrideNative(e,t,r){var n=e[t];h(e,t,r,true);m.preserveToString(e[t],n)};var ne=typeof $==="function"&&typeof $["for"]==="function"&&te.symbol($());var oe=te.symbol($.iterator)?$.iterator:"_es6-shim iterator_";if(S.Set&&typeof(new S.Set)["@@iterator"]==="function"){oe="@@iterator"}if(!S.Reflect){h(S,"Reflect",{},true)}var ie=S.Reflect;var ae=String;var ue=typeof document==="undefined"||!document?null:document.all;var fe=ue==null?function isNullOrUndefined(e){return e==null}:function isNullOrUndefinedAndNotDocumentAll(e){return e==null&&e!==ue};var se={Call:function Call(t,r){var n=arguments.length>2?arguments[2]:[];if(!se.IsCallable(t)){throw new TypeError(t+" is not a function")}return e(t,r,n)},RequireObjectCoercible:function(e,t){if(fe(e)){throw new TypeError(t||"Cannot call method on "+e)}return e},TypeIsObject:function(e){if(e===void 0||e===null||e===true||e===false){return false}return typeof e==="function"||typeof e==="object"||e===ue},ToObject:function(e,t){return Object(se.RequireObjectCoercible(e,t))},IsCallable:d,IsConstructor:function(e){return se.IsCallable(e)},ToInt32:function(e){return se.ToNumber(e)>>0},ToUint32:function(e){return se.ToNumber(e)>>>0},ToNumber:function(e){if(g(e)==="[object Symbol]"){throw new TypeError("Cannot convert a Symbol value to a number")}return+e},ToInteger:function(e){var t=se.ToNumber(e);if(X(t)){return 0}if(t===0||!K(t)){return t}return(t>0?1:-1)*_(k(t))},ToLength:function(e){var t=se.ToInteger(e);if(t<=0){return 0}if(t>Number.MAX_SAFE_INTEGER){return Number.MAX_SAFE_INTEGER}return t},SameValue:function(e,t){if(e===t){if(e===0){return 1/e===1/t}return true}return X(e)&&X(t)},SameValueZero:function(e,t){return e===t||X(e)&&X(t)},IsIterable:function(e){return se.TypeIsObject(e)&&(typeof e[oe]!=="undefined"||ee(e))},GetIterator:function(e){if(ee(e)){return new q(e,"value")}var t=se.GetMethod(e,oe);if(!se.IsCallable(t)){throw new TypeError("value is not an iterable")}var r=se.Call(t,e);if(!se.TypeIsObject(r)){throw new TypeError("bad iterator")}return r},GetMethod:function(e,t){var r=se.ToObject(e)[t];if(fe(r)){return void 0}if(!se.IsCallable(r)){throw new TypeError("Method not callable: "+t)}return r},IteratorComplete:function(e){return!!e.done},IteratorClose:function(e,t){var r=se.GetMethod(e,"return");if(r===void 0){return}var n,o;try{n=se.Call(r,e)}catch(e){o=e}if(t){return}if(o){throw o}if(!se.TypeIsObject(n)){throw new TypeError("Iterator's return method returned a non-object.")}},IteratorNext:function(e){var t=arguments.length>1?e.next(arguments[1]):e.next();if(!se.TypeIsObject(t)){throw new TypeError("bad iterator")}return t},IteratorStep:function(e){var t=se.IteratorNext(e);var r=se.IteratorComplete(t);return r?false:t},Construct:function(e,t,r,n){var o=typeof r==="undefined"?e:r;if(!n&&ie.construct){return ie.construct(e,t,o)}var i=o.prototype;if(!se.TypeIsObject(i)){i=Object.prototype}var a=O(i);var u=se.Call(e,a,t);return se.TypeIsObject(u)?u:a},SpeciesConstructor:function(e,t){var r=e.constructor;if(r===void 0){return t}if(!se.TypeIsObject(r)){throw new TypeError("Bad constructor")}var n=r[J];if(fe(n)){return t}if(!se.IsConstructor(n)){throw new TypeError("Bad @@species")}return n},CreateHTML:function(e,t,r,n){var o=se.ToString(e);var i="<"+t;if(r!==""){var a=se.ToString(n);var u=a.replace(/"/g,"&quot;");i+=" "+r+'="'+u+'"'}var f=i+">";var s=f+o;return s+"</"+t+">"},IsRegExp:function IsRegExp(e){if(!se.TypeIsObject(e)){return false}var t=e[$.match];if(typeof t!=="undefined"){return!!t}return te.regex(e)},ToString:function ToString(e){return ae(e)}};if(s&&ne){var ce=function defineWellKnownSymbol(e){if(te.symbol($[e])){return $[e]}var t=$["for"]("Symbol."+e);Object.defineProperty($,e,{configurable:false,enumerable:false,writable:false,value:t});return t};if(!te.symbol($.search)){var le=ce("search");var pe=String.prototype.search;h(RegExp.prototype,le,function search(e){return se.Call(pe,e,[this])});var ve=function search(e){var t=se.RequireObjectCoercible(this);if(!fe(e)){var r=se.GetMethod(e,le);if(typeof r!=="undefined"){return se.Call(r,e,[t])}}return se.Call(pe,t,[se.ToString(e)])};re(String.prototype,"search",ve)}if(!te.symbol($.replace)){var ye=ce("replace");var he=String.prototype.replace;h(RegExp.prototype,ye,function replace(e,t){return se.Call(he,e,[this,t])});var be=function replace(e,t){var r=se.RequireObjectCoercible(this);if(!fe(e)){var n=se.GetMethod(e,ye);if(typeof n!=="undefined"){return se.Call(n,e,[r,t])}}return se.Call(he,r,[se.ToString(e),t])};re(String.prototype,"replace",be)}if(!te.symbol($.split)){var ge=ce("split");var de=String.prototype.split;h(RegExp.prototype,ge,function split(e,t){return se.Call(de,e,[this,t])});var me=function split(e,t){var r=se.RequireObjectCoercible(this);if(!fe(e)){var n=se.GetMethod(e,ge);if(typeof n!=="undefined"){return se.Call(n,e,[r,t])}}return se.Call(de,r,[se.ToString(e),t])};re(String.prototype,"split",me)}var Oe=te.symbol($.match);var we=Oe&&function(){var e={};e[$.match]=function(){return 42};return"a".match(e)!==42}();if(!Oe||we){var je=ce("match");var Se=String.prototype.match;h(RegExp.prototype,je,function match(e){return se.Call(Se,e,[this])});var Te=function match(e){var t=se.RequireObjectCoercible(this);if(!fe(e)){var r=se.GetMethod(e,je);if(typeof r!=="undefined"){return se.Call(r,e,[t])}}return se.Call(Se,t,[se.ToString(e)])};re(String.prototype,"match",Te)}}var Ie=function wrapConstructor(e,t,r){m.preserveToString(t,e);if(Object.setPrototypeOf){Object.setPrototypeOf(e,t)}if(s){l(Object.getOwnPropertyNames(e),function(n){if(n in W||r[n]){return}m.proxy(e,n,t)})}else{l(Object.keys(e),function(n){if(n in W||r[n]){return}t[n]=e[n]})}t.prototype=e.prototype;m.redefine(e.prototype,"constructor",t)};var Ee=function(){return this};var Pe=function(e){if(s&&!z(e,J)){m.getter(e,J,Ee)}};var Ce=function(e,t){var r=t||function iterator(){return this};h(e,oe,r);if(!e[oe]&&te.symbol(oe)){e[oe]=r}};var Me=function createDataProperty(e,t,r){if(s){Object.defineProperty(e,t,{configurable:true,enumerable:true,writable:true,value:r})}else{e[t]=r}};var xe=function createDataPropertyOrThrow(e,t,r){Me(e,t,r);if(!se.SameValue(e[t],r)){throw new TypeError("property is nonconfigurable")}};var Ne=function(e,t,r,n){if(!se.TypeIsObject(e)){throw new TypeError("Constructor requires `new`: "+t.name)}var o=t.prototype;if(!se.TypeIsObject(o)){o=r}var i=O(o);for(var a in n){if(z(n,a)){var u=n[a];h(i,a,u,true)}}return i};if(String.fromCodePoint&&String.fromCodePoint.length!==1){var Ae=String.fromCodePoint;re(String,"fromCodePoint",function fromCodePoint(e){return se.Call(Ae,this,arguments)})}var Re={fromCodePoint:function fromCodePoint(e){var t=[];var r;for(var n=0,o=arguments.length;n<o;n++){r=Number(arguments[n]);if(!se.SameValue(r,se.ToInteger(r))||r<0||r>1114111){throw new RangeError("Invalid code point "+r)}if(r<65536){M(t,String.fromCharCode(r))}else{r-=65536;M(t,String.fromCharCode((r>>10)+55296));M(t,String.fromCharCode(r%1024+56320))}}return t.join("")},raw:function raw(e){var t=se.ToObject(e,"bad callSite");var r=se.ToObject(t.raw,"bad raw value");var n=r.length;var o=se.ToLength(n);if(o<=0){return""}var i=[];var a=0;var u,f,s,c;while(a<o){u=se.ToString(a);s=se.ToString(r[u]);M(i,s);if(a+1>=o){break}f=a+1<arguments.length?arguments[a+1]:"";c=se.ToString(f);M(i,c);a+=1}return i.join("")}};if(String.raw&&String.raw({raw:{0:"x",1:"y",length:2}})!=="xy"){re(String,"raw",Re.raw)}b(String,Re);var _e=function repeat(e,t){if(t<1){return""}if(t%2){return repeat(e,t-1)+e}var r=repeat(e,t/2);return r+r};var ke=Infinity;var Fe={repeat:function repeat(e){var t=se.ToString(se.RequireObjectCoercible(this));var r=se.ToInteger(e);if(r<0||r>=ke){throw new RangeError("repeat count must be less than infinity and not overflow maximum string size")}return _e(t,r)},startsWith:function startsWith(e){var t=se.ToString(se.RequireObjectCoercible(this));if(se.IsRegExp(e)){throw new TypeError('Cannot call method "startsWith" with a regex')}var r=se.ToString(e);var n;if(arguments.length>1){n=arguments[1]}var o=A(se.ToInteger(n),0);return C(t,o,o+r.length)===r},endsWith:function endsWith(e){var t=se.ToString(se.RequireObjectCoercible(this));if(se.IsRegExp(e)){throw new TypeError('Cannot call method "endsWith" with a regex')}var r=se.ToString(e);var n=t.length;var o;if(arguments.length>1){o=arguments[1]}var i=typeof o==="undefined"?n:se.ToInteger(o);var a=R(A(i,0),n);return C(t,a-r.length,a)===r},includes:function includes(e){if(se.IsRegExp(e)){throw new TypeError('"includes" does not accept a RegExp')}var t=se.ToString(e);var r;if(arguments.length>1){r=arguments[1]}return I(this,t,r)!==-1},codePointAt:function codePointAt(e){var t=se.ToString(se.RequireObjectCoercible(this));var r=se.ToInteger(e);var n=t.length;if(r>=0&&r<n){var o=t.charCodeAt(r);var i=r+1===n;if(o<55296||o>56319||i){return o}var a=t.charCodeAt(r+1);if(a<56320||a>57343){return o}return(o-55296)*1024+(a-56320)+65536}}};if(String.prototype.includes&&"a".includes("a",Infinity)!==false){re(String.prototype,"includes",Fe.includes)}if(String.prototype.startsWith&&String.prototype.endsWith){var Le=i(function(){"/a/".startsWith(/a/)});var De=a(function(){return"abc".startsWith("a",Infinity)===false});if(!Le||!De){re(String.prototype,"startsWith",Fe.startsWith);re(String.prototype,"endsWith",Fe.endsWith)}}if(ne){var ze=a(function(){var e=/a/;e[$.match]=false;return"/a/".startsWith(e)});if(!ze){re(String.prototype,"startsWith",Fe.startsWith)}var qe=a(function(){var e=/a/;e[$.match]=false;return"/a/".endsWith(e)});if(!qe){re(String.prototype,"endsWith",Fe.endsWith)}var We=a(function(){var e=/a/;e[$.match]=false;return"/a/".includes(e)});if(!We){re(String.prototype,"includes",Fe.includes)}}b(String.prototype,Fe);var Ge=["\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003","\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028","\u2029\ufeff"].join("");var He=new RegExp("(^["+Ge+"]+)|(["+Ge+"]+$)","g");var Ve=function trim(){return se.ToString(se.RequireObjectCoercible(this)).replace(He,"")};var Be=["\x85","\u200b","\ufffe"].join("");var Ue=new RegExp("["+Be+"]","g");var $e=/^[-+]0x[0-9a-f]+$/i;var Je=Be.trim().length!==Be.length;h(String.prototype,"trim",Ve,Je);var Xe=function(e){return{value:e,done:arguments.length===0}};var Ke=function(e){se.RequireObjectCoercible(e);this._s=se.ToString(e);this._i=0};Ke.prototype.next=function(){var e=this._s;var t=this._i;if(typeof e==="undefined"||t>=e.length){this._s=void 0;return Xe()}var r=e.charCodeAt(t);var n,o;if(r<55296||r>56319||t+1===e.length){o=1}else{n=e.charCodeAt(t+1);o=n<56320||n>57343?1:2}this._i=t+o;return Xe(e.substr(t,o))};Ce(Ke.prototype);Ce(String.prototype,function(){return new Ke(this)});var Ze={from:function from(e){var r=this;var n;if(arguments.length>1){n=arguments[1]}var o,i;if(typeof n==="undefined"){o=false}else{if(!se.IsCallable(n)){throw new TypeError("Array.from: when provided, the second argument must be a function")}if(arguments.length>2){i=arguments[2]}o=true}var a=typeof(ee(e)||se.GetMethod(e,oe))!=="undefined";var u,f,s;if(a){f=se.IsConstructor(r)?Object(new r):[];var c=se.GetIterator(e);var l,p;s=0;while(true){l=se.IteratorStep(c);if(l===false){break}p=l.value;try{if(o){p=typeof i==="undefined"?n(p,s):t(n,i,p,s)}f[s]=p}catch(e){se.IteratorClose(c,true);throw e}s+=1}u=s}else{var v=se.ToObject(e);u=se.ToLength(v.length);f=se.IsConstructor(r)?Object(new r(u)):new Array(u);var y;for(s=0;s<u;++s){y=v[s];if(o){y=typeof i==="undefined"?n(y,s):t(n,i,y,s)}xe(f,s,y)}}f.length=u;return f},of:function of(){var e=arguments.length;var t=this;var n=r(t)||!se.IsCallable(t)?new Array(e):se.Construct(t,[e]);for(var o=0;o<e;++o){xe(n,o,arguments[o])}n.length=e;return n}};b(Array,Ze);Pe(Array);q=function(e,t){this.i=0;this.array=e;this.kind=t};b(q.prototype,{next:function(){var e=this.i;var t=this.array;if(!(this instanceof q)){throw new TypeError("Not an ArrayIterator")}if(typeof t!=="undefined"){var r=se.ToLength(t.length);for(;e<r;e++){var n=this.kind;var o;if(n==="key"){o=e}else if(n==="value"){o=t[e]}else if(n==="entry"){o=[e,t[e]]}this.i=e+1;return Xe(o)}}this.array=void 0;return Xe()}});Ce(q.prototype);var Ye=Array.of===Ze.of||function(){var e=function Foo(e){this.length=e};e.prototype=[];var t=Array.of.apply(e,[1,2]);return t instanceof e&&t.length===2}();if(!Ye){re(Array,"of",Ze.of)}var Qe={copyWithin:function copyWithin(e,t){var r=se.ToObject(this);var n=se.ToLength(r.length);var o=se.ToInteger(e);var i=se.ToInteger(t);var a=o<0?A(n+o,0):R(o,n);var u=i<0?A(n+i,0):R(i,n);var f;if(arguments.length>2){f=arguments[2]}var s=typeof f==="undefined"?n:se.ToInteger(f);var c=s<0?A(n+s,0):R(s,n);var l=R(c-u,n-a);var p=1;if(u<a&&a<u+l){p=-1;u+=l-1;a+=l-1}while(l>0){if(u in r){r[a]=r[u]}else{delete r[a]}u+=p;a+=p;l-=1}return r},fill:function fill(e){var t;if(arguments.length>1){t=arguments[1]}var r;if(arguments.length>2){r=arguments[2]}var n=se.ToObject(this);var o=se.ToLength(n.length);t=se.ToInteger(typeof t==="undefined"?0:t);r=se.ToInteger(typeof r==="undefined"?o:r);var i=t<0?A(o+t,0):R(t,o);var a=r<0?o+r:r;for(var u=i;u<o&&u<a;++u){n[u]=e}return n},find:function find(e){var r=se.ToObject(this);var n=se.ToLength(r.length);if(!se.IsCallable(e)){throw new TypeError("Array#find: predicate must be a function")}var o=arguments.length>1?arguments[1]:null;for(var i=0,a;i<n;i++){a=r[i];if(o){if(t(e,o,a,i,r)){return a}}else if(e(a,i,r)){return a}}},findIndex:function findIndex(e){var r=se.ToObject(this);var n=se.ToLength(r.length);if(!se.IsCallable(e)){throw new TypeError("Array#findIndex: predicate must be a function")}var o=arguments.length>1?arguments[1]:null;for(var i=0;i<n;i++){if(o){if(t(e,o,r[i],i,r)){return i}}else if(e(r[i],i,r)){return i}}return-1},keys:function keys(){return new q(this,"key")},values:function values(){return new q(this,"value")},entries:function entries(){return new q(this,"entry")}};if(Array.prototype.keys&&!se.IsCallable([1].keys().next)){delete Array.prototype.keys}if(Array.prototype.entries&&!se.IsCallable([1].entries().next)){delete Array.prototype.entries}if(Array.prototype.keys&&Array.prototype.entries&&!Array.prototype.values&&Array.prototype[oe]){b(Array.prototype,{values:Array.prototype[oe]});if(te.symbol($.unscopables)){Array.prototype[$.unscopables].values=true}}if(c&&Array.prototype.values&&Array.prototype.values.name!=="values"){var et=Array.prototype.values;re(Array.prototype,"values",function values(){return se.Call(et,this,arguments)});h(Array.prototype,oe,Array.prototype.values,true)}b(Array.prototype,Qe);if(1/[true].indexOf(true,-0)<0){h(Array.prototype,"indexOf",function indexOf(e){var t=E(this,arguments);if(t===0&&1/t<0){return 0}return t},true)}Ce(Array.prototype,function(){return this.values()});if(Object.getPrototypeOf){Ce(Object.getPrototypeOf([].values()))}var tt=function(){return a(function(){return Array.from({length:-1}).length===0})}();var rt=function(){var e=Array.from([0].entries());return e.length===1&&r(e[0])&&e[0][0]===0&&e[0][1]===0}();if(!tt||!rt){re(Array,"from",Ze.from)}var nt=function(){return a(function(){return Array.from([0],void 0)})}();if(!nt){var ot=Array.from;re(Array,"from",function from(e){if(arguments.length>1&&typeof arguments[1]!=="undefined"){return se.Call(ot,this,arguments)}else{return t(ot,this,e)}})}var it=-(Math.pow(2,32)-1);var at=function(e,r){var n={length:it};n[r?(n.length>>>0)-1:0]=true;return a(function(){t(e,n,function(){throw new RangeError("should not reach here")},[]);return true})};if(!at(Array.prototype.forEach)){var ut=Array.prototype.forEach;re(Array.prototype,"forEach",function forEach(e){return se.Call(ut,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.map)){var ft=Array.prototype.map;re(Array.prototype,"map",function map(e){return se.Call(ft,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.filter)){var st=Array.prototype.filter;re(Array.prototype,"filter",function filter(e){return se.Call(st,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.some)){var ct=Array.prototype.some;re(Array.prototype,"some",function some(e){return se.Call(ct,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.every)){var lt=Array.prototype.every;re(Array.prototype,"every",function every(e){return se.Call(lt,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.reduce)){var pt=Array.prototype.reduce;re(Array.prototype,"reduce",function reduce(e){return se.Call(pt,this.length>=0?this:[],arguments)},true)}if(!at(Array.prototype.reduceRight,true)){var vt=Array.prototype.reduceRight;re(Array.prototype,"reduceRight",function reduceRight(e){return se.Call(vt,this.length>=0?this:[],arguments)},true)}var yt=Number("0o10")!==8;var ht=Number("0b10")!==2;var bt=y(Be,function(e){return Number(e+0+e)===0});if(yt||ht||bt){var gt=Number;var dt=/^0b[01]+$/i;var mt=/^0o[0-7]+$/i;var Ot=dt.test.bind(dt);var wt=mt.test.bind(mt);var jt=function(e){var t;if(typeof e.valueOf==="function"){t=e.valueOf();if(te.primitive(t)){return t}}if(typeof e.toString==="function"){t=e.toString();if(te.primitive(t)){return t}}throw new TypeError("No default value")};var St=Ue.test.bind(Ue);var Tt=$e.test.bind($e);var It=function(){var e=function Number(t){var r;if(arguments.length>0){r=te.primitive(t)?t:jt(t,"number")}else{r=0}if(typeof r==="string"){r=se.Call(Ve,r);if(Ot(r)){r=parseInt(C(r,2),2)}else if(wt(r)){r=parseInt(C(r,2),8)}else if(St(r)||Tt(r)){r=NaN}}var n=this;var o=a(function(){gt.prototype.valueOf.call(n);return true});if(n instanceof e&&!o){return new gt(r)}return gt(r)};return e}();Ie(gt,It,{});b(It,{NaN:gt.NaN,MAX_VALUE:gt.MAX_VALUE,MIN_VALUE:gt.MIN_VALUE,NEGATIVE_INFINITY:gt.NEGATIVE_INFINITY,POSITIVE_INFINITY:gt.POSITIVE_INFINITY});Number=It;m.redefine(S,"Number",It)}var Et=Math.pow(2,53)-1;b(Number,{MAX_SAFE_INTEGER:Et,MIN_SAFE_INTEGER:-Et,EPSILON:2.220446049250313e-16,parseInt:S.parseInt,parseFloat:S.parseFloat,isFinite:K,isInteger:function isInteger(e){return K(e)&&se.ToInteger(e)===e},isSafeInteger:function isSafeInteger(e){return Number.isInteger(e)&&k(e)<=Number.MAX_SAFE_INTEGER},isNaN:X});h(Number,"parseInt",S.parseInt,Number.parseInt!==S.parseInt);if([,1].find(function(){return true})===1){re(Array.prototype,"find",Qe.find)}if([,1].findIndex(function(){return true})!==0){re(Array.prototype,"findIndex",Qe.findIndex)}var Pt=Function.bind.call(Function.bind,Object.prototype.propertyIsEnumerable);var Ct=function ensureEnumerable(e,t){if(s&&Pt(e,t)){Object.defineProperty(e,t,{enumerable:false})}};var Mt=function sliceArgs(){var e=Number(this);var t=arguments.length;var r=t-e;var n=new Array(r<0?0:r);for(var o=e;o<t;++o){n[o-e]=arguments[o]}return n};var xt=function assignTo(e){return function assignToSource(t,r){t[r]=e[r];return t}};var Nt=function(e,t){var r=n(Object(t));var o;if(se.IsCallable(Object.getOwnPropertySymbols)){o=v(Object.getOwnPropertySymbols(Object(t)),Pt(t))}return p(P(r,o||[]),xt(t),e)};var At={assign:function(e,t){var r=se.ToObject(e,"Cannot convert undefined or null to object");return p(se.Call(Mt,1,arguments),Nt,r)},is:function is(e,t){return se.SameValue(e,t)}};var Rt=Object.assign&&Object.preventExtensions&&function(){var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return e[1]==="y"}}();if(Rt){re(Object,"assign",At.assign)}b(Object,At);if(s){var _t={setPrototypeOf:function(e,r){var n;var o=function(e,t){if(!se.TypeIsObject(e)){throw new TypeError("cannot set prototype on a non-object")}if(!(t===null||se.TypeIsObject(t))){throw new TypeError("can only set prototype to an object or null"+t)}};var i=function(e,r){o(e,r);t(n,e,r);return e};try{n=e.getOwnPropertyDescriptor(e.prototype,r).set;t(n,{},null)}catch(t){if(e.prototype!=={}[r]){return}n=function(e){this[r]=e};i.polyfill=i(i({},null),e.prototype)instanceof e}return i}(Object,"__proto__")};b(Object,_t)}if(Object.setPrototypeOf&&Object.getPrototypeOf&&Object.getPrototypeOf(Object.setPrototypeOf({},null))!==null&&Object.getPrototypeOf(Object.create(null))===null){(function(){var e=Object.create(null);var t=Object.getPrototypeOf;var r=Object.setPrototypeOf;Object.getPrototypeOf=function(r){var n=t(r);return n===e?null:n};Object.setPrototypeOf=function(t,n){var o=n===null?e:n;return r(t,o)};Object.setPrototypeOf.polyfill=false})()}var kt=!i(function(){Object.keys("foo")});if(!kt){var Ft=Object.keys;re(Object,"keys",function keys(e){return Ft(se.ToObject(e))});n=Object.keys}var Lt=i(function(){Object.keys(/a/g)});if(Lt){var Dt=Object.keys;re(Object,"keys",function keys(e){if(te.regex(e)){var t=[];for(var r in e){if(z(e,r)){M(t,r)}}return t}return Dt(e)});n=Object.keys}if(Object.getOwnPropertyNames){var zt=!i(function(){Object.getOwnPropertyNames("foo")});if(!zt){var qt=typeof window==="object"?Object.getOwnPropertyNames(window):[];var Wt=Object.getOwnPropertyNames;re(Object,"getOwnPropertyNames",function getOwnPropertyNames(e){var t=se.ToObject(e);if(g(t)==="[object Window]"){try{return Wt(t)}catch(e){return P([],qt)}}return Wt(t)})}}if(Object.getOwnPropertyDescriptor){var Gt=!i(function(){Object.getOwnPropertyDescriptor("foo","bar")});if(!Gt){var Ht=Object.getOwnPropertyDescriptor;re(Object,"getOwnPropertyDescriptor",function getOwnPropertyDescriptor(e,t){return Ht(se.ToObject(e),t)})}}if(Object.seal){var Vt=!i(function(){Object.seal("foo")});if(!Vt){var Bt=Object.seal;re(Object,"seal",function seal(e){if(!se.TypeIsObject(e)){return e}return Bt(e)})}}if(Object.isSealed){var Ut=!i(function(){Object.isSealed("foo")});if(!Ut){var $t=Object.isSealed;re(Object,"isSealed",function isSealed(e){if(!se.TypeIsObject(e)){return true}return $t(e)})}}if(Object.freeze){var Jt=!i(function(){Object.freeze("foo")});if(!Jt){var Xt=Object.freeze;re(Object,"freeze",function freeze(e){if(!se.TypeIsObject(e)){return e}return Xt(e)})}}if(Object.isFrozen){var Kt=!i(function(){Object.isFrozen("foo")});if(!Kt){var Zt=Object.isFrozen;re(Object,"isFrozen",function isFrozen(e){if(!se.TypeIsObject(e)){return true}return Zt(e)})}}if(Object.preventExtensions){var Yt=!i(function(){Object.preventExtensions("foo")});if(!Yt){var Qt=Object.preventExtensions;re(Object,"preventExtensions",function preventExtensions(e){if(!se.TypeIsObject(e)){return e}return Qt(e)})}}if(Object.isExtensible){var er=!i(function(){Object.isExtensible("foo")});if(!er){var tr=Object.isExtensible;re(Object,"isExtensible",function isExtensible(e){if(!se.TypeIsObject(e)){return false}return tr(e)})}}if(Object.getPrototypeOf){var rr=!i(function(){Object.getPrototypeOf("foo")});if(!rr){var nr=Object.getPrototypeOf;re(Object,"getPrototypeOf",function getPrototypeOf(e){return nr(se.ToObject(e))})}}var or=s&&function(){var e=Object.getOwnPropertyDescriptor(RegExp.prototype,"flags");return e&&se.IsCallable(e.get)}();if(s&&!or){var ir=function flags(){if(!se.TypeIsObject(this)){throw new TypeError("Method called on incompatible type: must be an object.")}var e="";if(this.global){e+="g"}if(this.ignoreCase){e+="i"}if(this.multiline){e+="m"}if(this.unicode){e+="u"}if(this.sticky){e+="y"}return e};m.getter(RegExp.prototype,"flags",ir)}var ar=s&&a(function(){return String(new RegExp(/a/g,"i"))==="/a/i"});var ur=ne&&s&&function(){var e=/./;e[$.match]=false;return RegExp(e)===e}();var fr=a(function(){return RegExp.prototype.toString.call({source:"abc"})==="/abc/"});var sr=fr&&a(function(){return RegExp.prototype.toString.call({source:"a",flags:"b"})==="/a/b"});if(!fr||!sr){var cr=RegExp.prototype.toString;h(RegExp.prototype,"toString",function toString(){var e=se.RequireObjectCoercible(this);if(te.regex(e)){return t(cr,e)}var r=ae(e.source);var n=ae(e.flags);return"/"+r+"/"+n},true);m.preserveToString(RegExp.prototype.toString,cr)}if(s&&(!ar||ur)){var lr=Object.getOwnPropertyDescriptor(RegExp.prototype,"flags").get;var pr=Object.getOwnPropertyDescriptor(RegExp.prototype,"source")||{};var vr=function(){return this.source};var yr=se.IsCallable(pr.get)?pr.get:vr;var hr=RegExp;var br=function(){return function RegExp(e,t){var r=se.IsRegExp(e);var n=this instanceof RegExp;if(!n&&r&&typeof t==="undefined"&&e.constructor===RegExp){return e}var o=e;var i=t;if(te.regex(e)){o=se.Call(yr,e);i=typeof t==="undefined"?se.Call(lr,e):t;return new RegExp(o,i)}else if(r){o=e.source;i=typeof t==="undefined"?e.flags:t}return new hr(e,t)}}();Ie(hr,br,{$input:true});RegExp=br;m.redefine(S,"RegExp",br)}if(s){var gr={input:"$_",lastMatch:"$&",lastParen:"$+",leftContext:"$`",rightContext:"$'"};l(n(gr),function(e){if(e in RegExp&&!(gr[e]in RegExp)){m.getter(RegExp,gr[e],function get(){return RegExp[e]})}})}Pe(RegExp);var dr=1/Number.EPSILON;var mr=function roundTiesToEven(e){return e+dr-dr};var Or=Math.pow(2,-23);var wr=Math.pow(2,127)*(2-Or);var jr=Math.pow(2,-126);var Sr=Math.E;var Tr=Math.LOG2E;var Ir=Math.LOG10E;var Er=Number.prototype.clz;delete Number.prototype.clz;var Pr={acosh:function acosh(e){var t=Number(e);if(X(t)||e<1){return NaN}if(t===1){return 0}if(t===Infinity){return t}return L(t/Sr+D(t+1)*D(t-1)/Sr)+1},asinh:function asinh(e){var t=Number(e);if(t===0||!T(t)){return t}return t<0?-asinh(-t):L(t+D(t*t+1))},atanh:function atanh(e){var t=Number(e);if(X(t)||t<-1||t>1){return NaN}if(t===-1){return-Infinity}if(t===1){return Infinity}if(t===0){return t}return.5*L((1+t)/(1-t))},cbrt:function cbrt(e){var t=Number(e);if(t===0){return t}var r=t<0;var n;if(r){t=-t}if(t===Infinity){n=Infinity}else{n=F(L(t)/3);n=(t/(n*n)+2*n)/3}return r?-n:n},clz32:function clz32(e){var t=Number(e);var r=se.ToUint32(t);if(r===0){return 32}return Er?se.Call(Er,r):31-_(L(r+.5)*Tr)},cosh:function cosh(e){var t=Number(e);if(t===0){return 1}if(X(t)){return NaN}if(!T(t)){return Infinity}if(t<0){t=-t}if(t>21){return F(t)/2}return(F(t)+F(-t))/2},expm1:function expm1(e){var t=Number(e);if(t===-Infinity){return-1}if(!T(t)||t===0){return t}if(k(t)>.5){return F(t)-1}var r=t;var n=0;var o=1;while(n+r!==n){n+=r;o+=1;r*=t/o}return n},hypot:function hypot(e,t){var r=0;var n=0;for(var o=0;o<arguments.length;++o){var i=k(Number(arguments[o]));if(n<i){r*=n/i*(n/i);r+=1;n=i}else{r+=i>0?i/n*(i/n):i}}return n===Infinity?Infinity:n*D(r)},log2:function log2(e){return L(e)*Tr},log10:function log10(e){return L(e)*Ir},log1p:function log1p(e){var t=Number(e);if(t<-1||X(t)){return NaN}if(t===0||t===Infinity){return t}if(t===-1){return-Infinity}return 1+t-1===0?t:t*(L(1+t)/(1+t-1))},sign:Z,sinh:function sinh(e){var t=Number(e);if(!T(t)||t===0){return t}if(k(t)<1){return(Math.expm1(t)-Math.expm1(-t))/2}return(F(t-1)-F(-t-1))*Sr/2},tanh:function tanh(e){var t=Number(e);if(X(t)||t===0){return t}if(t>=20){return 1}if(t<=-20){return-1}return(Math.expm1(t)-Math.expm1(-t))/(F(t)+F(-t))},trunc:function trunc(e){var t=Number(e);return t<0?-_(-t):_(t)},imul:function imul(e,t){var r=se.ToUint32(e);var n=se.ToUint32(t);var o=r>>>16&65535;var i=r&65535;var a=n>>>16&65535;var u=n&65535;return i*u+(o*u+i*a<<16>>>0)|0},fround:function fround(e){var t=Number(e);if(t===0||t===Infinity||t===-Infinity||X(t)){return t}var r=Z(t);var n=k(t);if(n<jr){return r*mr(n/jr/Or)*jr*Or}var o=(1+Or/Number.EPSILON)*n;var i=o-(o-n);if(i>wr||X(i)){return r*Infinity}return r*i}};b(Math,Pr);h(Math,"log1p",Pr.log1p,Math.log1p(-1e-17)!==-1e-17);h(Math,"asinh",Pr.asinh,Math.asinh(-1e7)!==-Math.asinh(1e7));h(Math,"tanh",Pr.tanh,Math.tanh(-2e-17)!==-2e-17);h(Math,"acosh",Pr.acosh,Math.acosh(Number.MAX_VALUE)===Infinity);h(Math,"cbrt",Pr.cbrt,Math.abs(1-Math.cbrt(1e-300)/1e-100)/Number.EPSILON>8);h(Math,"sinh",Pr.sinh,Math.sinh(-2e-17)!==-2e-17);var Cr=Math.expm1(10);h(Math,"expm1",Pr.expm1,Cr>22025.465794806718||Cr<22025.465794806718);var Mr=Math.round;var xr=Math.round(.5-Number.EPSILON/4)===0&&Math.round(-.5+Number.EPSILON/3.99)===1;var Nr=dr+1;var Ar=2*dr-1;var Rr=[Nr,Ar].every(function(e){return Math.round(e)===e});h(Math,"round",function round(e){var t=_(e);var r=t===-1?-0:t+1;
return e-t<.5?t:r},!xr||!Rr);m.preserveToString(Math.round,Mr);var _r=Math.imul;if(Math.imul(4294967295,5)!==-5){Math.imul=Pr.imul;m.preserveToString(Math.imul,_r)}if(Math.imul.length!==2){re(Math,"imul",function imul(e,t){return se.Call(_r,Math,arguments)})}var kr=function(){var e=S.setTimeout;if(typeof e!=="function"&&typeof e!=="object"){return}se.IsPromise=function(e){if(!se.TypeIsObject(e)){return false}if(typeof e._promise==="undefined"){return false}return true};var r=function(e){if(!se.IsConstructor(e)){throw new TypeError("Bad promise constructor")}var t=this;var r=function(e,r){if(t.resolve!==void 0||t.reject!==void 0){throw new TypeError("Bad Promise implementation!")}t.resolve=e;t.reject=r};t.resolve=void 0;t.reject=void 0;t.promise=new e(r);if(!(se.IsCallable(t.resolve)&&se.IsCallable(t.reject))){throw new TypeError("Bad promise constructor")}};var n;if(typeof window!=="undefined"&&se.IsCallable(window.postMessage)){n=function(){var e=[];var t="zero-timeout-message";var r=function(r){M(e,r);window.postMessage(t,"*")};var n=function(r){if(r.source===window&&r.data===t){r.stopPropagation();if(e.length===0){return}var n=N(e);n()}};window.addEventListener("message",n,true);return r}}var o=function(){var e=S.Promise;var t=e&&e.resolve&&e.resolve();return t&&function(e){return t.then(e)}};var i=se.IsCallable(S.setImmediate)?S.setImmediate:typeof process==="object"&&process.nextTick?process.nextTick:o()||(se.IsCallable(n)?n():function(t){e(t,0)});var a=function(e){return e};var u=function(e){throw e};var f=0;var s=1;var c=2;var l=0;var p=1;var v=2;var y={};var h=function(e,t,r){i(function(){g(e,t,r)})};var g=function(e,t,r){var n,o;if(t===y){return e(r)}try{n=e(r);o=t.resolve}catch(e){n=e;o=t.reject}o(n)};var d=function(e,t){var r=e._promise;var n=r.reactionLength;if(n>0){h(r.fulfillReactionHandler0,r.reactionCapability0,t);r.fulfillReactionHandler0=void 0;r.rejectReactions0=void 0;r.reactionCapability0=void 0;if(n>1){for(var o=1,i=0;o<n;o++,i+=3){h(r[i+l],r[i+v],t);e[i+l]=void 0;e[i+p]=void 0;e[i+v]=void 0}}}r.result=t;r.state=s;r.reactionLength=0};var m=function(e,t){var r=e._promise;var n=r.reactionLength;if(n>0){h(r.rejectReactionHandler0,r.reactionCapability0,t);r.fulfillReactionHandler0=void 0;r.rejectReactions0=void 0;r.reactionCapability0=void 0;if(n>1){for(var o=1,i=0;o<n;o++,i+=3){h(r[i+p],r[i+v],t);e[i+l]=void 0;e[i+p]=void 0;e[i+v]=void 0}}}r.result=t;r.state=c;r.reactionLength=0};var O=function(e){var t=false;var r=function(r){var n;if(t){return}t=true;if(r===e){return m(e,new TypeError("Self resolution"))}if(!se.TypeIsObject(r)){return d(e,r)}try{n=r.then}catch(t){return m(e,t)}if(!se.IsCallable(n)){return d(e,r)}i(function(){j(e,r,n)})};var n=function(r){if(t){return}t=true;return m(e,r)};return{resolve:r,reject:n}};var w=function(e,r,n,o){if(e===I){t(e,r,n,o,y)}else{t(e,r,n,o)}};var j=function(e,t,r){var n=O(e);var o=n.resolve;var i=n.reject;try{w(r,t,o,i)}catch(e){i(e)}};var T,I;var E=function(){var e=function Promise(t){if(!(this instanceof e)){throw new TypeError('Constructor Promise requires "new"')}if(this&&this._promise){throw new TypeError("Bad construction")}if(!se.IsCallable(t)){throw new TypeError("not a valid resolver")}var r=Ne(this,e,T,{_promise:{result:void 0,state:f,reactionLength:0,fulfillReactionHandler0:void 0,rejectReactionHandler0:void 0,reactionCapability0:void 0}});var n=O(r);var o=n.reject;try{t(n.resolve,o)}catch(e){o(e)}return r};return e}();T=E.prototype;var P=function(e,t,r,n){var o=false;return function(i){if(o){return}o=true;t[e]=i;if(--n.count===0){var a=r.resolve;a(t)}}};var C=function(e,t,r){var n=e.iterator;var o=[];var i={count:1};var a,u;var f=0;while(true){try{a=se.IteratorStep(n);if(a===false){e.done=true;break}u=a.value}catch(t){e.done=true;throw t}o[f]=void 0;var s=t.resolve(u);var c=P(f,o,r,i);i.count+=1;w(s.then,s,c,r.reject);f+=1}if(--i.count===0){var l=r.resolve;l(o)}return r.promise};var x=function(e,t,r){var n=e.iterator;var o,i,a;while(true){try{o=se.IteratorStep(n);if(o===false){e.done=true;break}i=o.value}catch(t){e.done=true;throw t}a=t.resolve(i);w(a.then,a,r.resolve,r.reject)}return r.promise};b(E,{all:function all(e){var t=this;if(!se.TypeIsObject(t)){throw new TypeError("Promise is not object")}var n=new r(t);var o,i;try{o=se.GetIterator(e);i={iterator:o,done:false};return C(i,t,n)}catch(e){var a=e;if(i&&!i.done){try{se.IteratorClose(o,true)}catch(e){a=e}}var u=n.reject;u(a);return n.promise}},race:function race(e){var t=this;if(!se.TypeIsObject(t)){throw new TypeError("Promise is not object")}var n=new r(t);var o,i;try{o=se.GetIterator(e);i={iterator:o,done:false};return x(i,t,n)}catch(e){var a=e;if(i&&!i.done){try{se.IteratorClose(o,true)}catch(e){a=e}}var u=n.reject;u(a);return n.promise}},reject:function reject(e){var t=this;if(!se.TypeIsObject(t)){throw new TypeError("Bad promise constructor")}var n=new r(t);var o=n.reject;o(e);return n.promise},resolve:function resolve(e){var t=this;if(!se.TypeIsObject(t)){throw new TypeError("Bad promise constructor")}if(se.IsPromise(e)){var n=e.constructor;if(n===t){return e}}var o=new r(t);var i=o.resolve;i(e);return o.promise}});b(T,{catch:function(e){return this.then(null,e)},then:function then(e,t){var n=this;if(!se.IsPromise(n)){throw new TypeError("not a promise")}var o=se.SpeciesConstructor(n,E);var i;var b=arguments.length>2&&arguments[2]===y;if(b&&o===E){i=y}else{i=new r(o)}var g=se.IsCallable(e)?e:a;var d=se.IsCallable(t)?t:u;var m=n._promise;var O;if(m.state===f){if(m.reactionLength===0){m.fulfillReactionHandler0=g;m.rejectReactionHandler0=d;m.reactionCapability0=i}else{var w=3*(m.reactionLength-1);m[w+l]=g;m[w+p]=d;m[w+v]=i}m.reactionLength+=1}else if(m.state===s){O=m.result;h(g,i,O)}else if(m.state===c){O=m.result;h(d,i,O)}else{throw new TypeError("unexpected Promise state")}return i.promise}});y=new r(E);I=T.then;return E}();if(S.Promise){delete S.Promise.accept;delete S.Promise.defer;delete S.Promise.prototype.chain}if(typeof kr==="function"){b(S,{Promise:kr});var Fr=w(S.Promise,function(e){return e.resolve(42).then(function(){})instanceof e});var Lr=!i(function(){S.Promise.reject(42).then(null,5).then(null,W)});var Dr=i(function(){S.Promise.call(3,W)});var zr=function(e){var t=e.resolve(5);t.constructor={};var r=e.resolve(t);try{r.then(null,W).then(null,W)}catch(e){return true}return t===r}(S.Promise);var qr=s&&function(){var e=0;var t=Object.defineProperty({},"then",{get:function(){e+=1}});Promise.resolve(t);return e===1}();var Wr=function BadResolverPromise(e){var t=new Promise(e);e(3,function(){});this.then=t.then;this.constructor=BadResolverPromise};Wr.prototype=Promise.prototype;Wr.all=Promise.all;var Gr=a(function(){return!!Wr.all([1,2])});if(!Fr||!Lr||!Dr||zr||!qr||Gr){Promise=kr;re(S,"Promise",kr)}if(Promise.all.length!==1){var Hr=Promise.all;re(Promise,"all",function all(e){return se.Call(Hr,this,arguments)})}if(Promise.race.length!==1){var Vr=Promise.race;re(Promise,"race",function race(e){return se.Call(Vr,this,arguments)})}if(Promise.resolve.length!==1){var Br=Promise.resolve;re(Promise,"resolve",function resolve(e){return se.Call(Br,this,arguments)})}if(Promise.reject.length!==1){var Ur=Promise.reject;re(Promise,"reject",function reject(e){return se.Call(Ur,this,arguments)})}Ct(Promise,"all");Ct(Promise,"race");Ct(Promise,"resolve");Ct(Promise,"reject");Pe(Promise)}var $r=function(e){var t=n(p(e,function(e,t){e[t]=true;return e},{}));return e.join(":")===t.join(":")};var Jr=$r(["z","a","bb"]);var Xr=$r(["z",1,"a","3",2]);if(s){var Kr=function fastkey(e,t){if(!t&&!Jr){return null}if(fe(e)){return"^"+se.ToString(e)}else if(typeof e==="string"){return"$"+e}else if(typeof e==="number"){if(!Xr){return"n"+e}return e}else if(typeof e==="boolean"){return"b"+e}return null};var Zr=function emptyObject(){return Object.create?Object.create(null):{}};var Yr=function addIterableToMap(e,n,o){if(r(o)||te.string(o)){l(o,function(e){if(!se.TypeIsObject(e)){throw new TypeError("Iterator value "+e+" is not an entry object")}n.set(e[0],e[1])})}else if(o instanceof e){t(e.prototype.forEach,o,function(e,t){n.set(t,e)})}else{var i,a;if(!fe(o)){a=n.set;if(!se.IsCallable(a)){throw new TypeError("bad map")}i=se.GetIterator(o)}if(typeof i!=="undefined"){while(true){var u=se.IteratorStep(i);if(u===false){break}var f=u.value;try{if(!se.TypeIsObject(f)){throw new TypeError("Iterator value "+f+" is not an entry object")}t(a,n,f[0],f[1])}catch(e){se.IteratorClose(i,true);throw e}}}}};var Qr=function addIterableToSet(e,n,o){if(r(o)||te.string(o)){l(o,function(e){n.add(e)})}else if(o instanceof e){t(e.prototype.forEach,o,function(e){n.add(e)})}else{var i,a;if(!fe(o)){a=n.add;if(!se.IsCallable(a)){throw new TypeError("bad set")}i=se.GetIterator(o)}if(typeof i!=="undefined"){while(true){var u=se.IteratorStep(i);if(u===false){break}var f=u.value;try{t(a,n,f)}catch(e){se.IteratorClose(i,true);throw e}}}}};var en={Map:function(){var e={};var r=function MapEntry(e,t){this.key=e;this.value=t;this.next=null;this.prev=null};r.prototype.isRemoved=function isRemoved(){return this.key===e};var n=function isMap(e){return!!e._es6map};var o=function requireMapSlot(e,t){if(!se.TypeIsObject(e)||!n(e)){throw new TypeError("Method Map.prototype."+t+" called on incompatible receiver "+se.ToString(e))}};var i=function MapIterator(e,t){o(e,"[[MapIterator]]");this.head=e._head;this.i=this.head;this.kind=t};i.prototype={next:function next(){var e=this.i;var t=this.kind;var r=this.head;if(typeof this.i==="undefined"){return Xe()}while(e.isRemoved()&&e!==r){e=e.prev}var n;while(e.next!==r){e=e.next;if(!e.isRemoved()){if(t==="key"){n=e.key}else if(t==="value"){n=e.value}else{n=[e.key,e.value]}this.i=e;return Xe(n)}}this.i=void 0;return Xe()}};Ce(i.prototype);var a;var u=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}if(this&&this._es6map){throw new TypeError("Bad construction")}var e=Ne(this,Map,a,{_es6map:true,_head:null,_map:G?new G:null,_size:0,_storage:Zr()});var t=new r(null,null);t.next=t.prev=t;e._head=t;if(arguments.length>0){Yr(Map,e,arguments[0])}return e};a=u.prototype;m.getter(a,"size",function(){if(typeof this._size==="undefined"){throw new TypeError("size method called on incompatible Map")}return this._size});b(a,{get:function get(e){o(this,"get");var t;var r=Kr(e,true);if(r!==null){t=this._storage[r];if(t){return t.value}else{return}}if(this._map){t=V.call(this._map,e);if(t){return t.value}else{return}}var n=this._head;var i=n;while((i=i.next)!==n){if(se.SameValueZero(i.key,e)){return i.value}}},has:function has(e){o(this,"has");var t=Kr(e,true);if(t!==null){return typeof this._storage[t]!=="undefined"}if(this._map){return B.call(this._map,e)}var r=this._head;var n=r;while((n=n.next)!==r){if(se.SameValueZero(n.key,e)){return true}}return false},set:function set(e,t){o(this,"set");var n=this._head;var i=n;var a;var u=Kr(e,true);if(u!==null){if(typeof this._storage[u]!=="undefined"){this._storage[u].value=t;return this}else{a=this._storage[u]=new r(e,t);i=n.prev}}else if(this._map){if(B.call(this._map,e)){V.call(this._map,e).value=t}else{a=new r(e,t);U.call(this._map,e,a);i=n.prev}}while((i=i.next)!==n){if(se.SameValueZero(i.key,e)){i.value=t;return this}}a=a||new r(e,t);if(se.SameValue(-0,e)){a.key=+0}a.next=this._head;a.prev=this._head.prev;a.prev.next=a;a.next.prev=a;this._size+=1;return this},delete:function(t){o(this,"delete");var r=this._head;var n=r;var i=Kr(t,true);if(i!==null){if(typeof this._storage[i]==="undefined"){return false}n=this._storage[i].prev;delete this._storage[i]}else if(this._map){if(!B.call(this._map,t)){return false}n=V.call(this._map,t).prev;H.call(this._map,t)}while((n=n.next)!==r){if(se.SameValueZero(n.key,t)){n.key=e;n.value=e;n.prev.next=n.next;n.next.prev=n.prev;this._size-=1;return true}}return false},clear:function clear(){o(this,"clear");this._map=G?new G:null;this._size=0;this._storage=Zr();var t=this._head;var r=t;var n=r.next;while((r=n)!==t){r.key=e;r.value=e;n=r.next;r.next=r.prev=t}t.next=t.prev=t},keys:function keys(){o(this,"keys");return new i(this,"key")},values:function values(){o(this,"values");return new i(this,"value")},entries:function entries(){o(this,"entries");return new i(this,"key+value")},forEach:function forEach(e){o(this,"forEach");var r=arguments.length>1?arguments[1]:null;var n=this.entries();for(var i=n.next();!i.done;i=n.next()){if(r){t(e,r,i.value[1],i.value[0],this)}else{e(i.value[1],i.value[0],this)}}}});Ce(a,a.entries);return u}(),Set:function(){var e=function isSet(e){return e._es6set&&typeof e._storage!=="undefined"};var r=function requireSetSlot(t,r){if(!se.TypeIsObject(t)||!e(t)){throw new TypeError("Set.prototype."+r+" called on incompatible receiver "+se.ToString(t))}};var o;var i=function Set(){if(!(this instanceof Set)){throw new TypeError('Constructor Set requires "new"')}if(this&&this._es6set){throw new TypeError("Bad construction")}var e=Ne(this,Set,o,{_es6set:true,"[[SetData]]":null,_storage:Zr()});if(!e._es6set){throw new TypeError("bad set")}if(arguments.length>0){Qr(Set,e,arguments[0])}return e};o=i.prototype;var a=function(e){var t=e;if(t==="^null"){return null}else if(t==="^undefined"){return void 0}else{var r=t.charAt(0);if(r==="$"){return C(t,1)}else if(r==="n"){return+C(t,1)}else if(r==="b"){return t==="btrue"}}return+t};var u=function ensureMap(e){if(!e["[[SetData]]"]){var t=new en.Map;e["[[SetData]]"]=t;l(n(e._storage),function(e){var r=a(e);t.set(r,r)});e["[[SetData]]"]=t}e._storage=null};m.getter(i.prototype,"size",function(){r(this,"size");if(this._storage){return n(this._storage).length}u(this);return this["[[SetData]]"].size});b(i.prototype,{has:function has(e){r(this,"has");var t;if(this._storage&&(t=Kr(e))!==null){return!!this._storage[t]}u(this);return this["[[SetData]]"].has(e)},add:function add(e){r(this,"add");var t;if(this._storage&&(t=Kr(e))!==null){this._storage[t]=true;return this}u(this);this["[[SetData]]"].set(e,e);return this},delete:function(e){r(this,"delete");var t;if(this._storage&&(t=Kr(e))!==null){var n=z(this._storage,t);return delete this._storage[t]&&n}u(this);return this["[[SetData]]"]["delete"](e)},clear:function clear(){r(this,"clear");if(this._storage){this._storage=Zr()}if(this["[[SetData]]"]){this["[[SetData]]"].clear()}},values:function values(){r(this,"values");u(this);return this["[[SetData]]"].values()},entries:function entries(){r(this,"entries");u(this);return this["[[SetData]]"].entries()},forEach:function forEach(e){r(this,"forEach");var n=arguments.length>1?arguments[1]:null;var o=this;u(o);this["[[SetData]]"].forEach(function(r,i){if(n){t(e,n,i,i,o)}else{e(i,i,o)}})}});h(i.prototype,"keys",i.prototype.values,true);Ce(i.prototype,i.prototype.values);return i}()};if(S.Map||S.Set){var tn=a(function(){return new Map([[1,2]]).get(1)===2});if(!tn){S.Map=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}var e=new G;if(arguments.length>0){Yr(Map,e,arguments[0])}delete e.constructor;Object.setPrototypeOf(e,S.Map.prototype);return e};S.Map.prototype=O(G.prototype);h(S.Map.prototype,"constructor",S.Map,true);m.preserveToString(S.Map,G)}var rn=new Map;var nn=function(){var e=new Map([[1,0],[2,0],[3,0],[4,0]]);e.set(-0,e);return e.get(0)===e&&e.get(-0)===e&&e.has(0)&&e.has(-0)}();var on=rn.set(1,2)===rn;if(!nn||!on){re(Map.prototype,"set",function set(e,r){t(U,this,e===0?0:e,r);return this})}if(!nn){b(Map.prototype,{get:function get(e){return t(V,this,e===0?0:e)},has:function has(e){return t(B,this,e===0?0:e)}},true);m.preserveToString(Map.prototype.get,V);m.preserveToString(Map.prototype.has,B)}var an=new Set;var un=function(e){e["delete"](0);e.add(-0);return!e.has(0)}(an);var fn=an.add(1)===an;if(!un||!fn){var sn=Set.prototype.add;Set.prototype.add=function add(e){t(sn,this,e===0?0:e);return this};m.preserveToString(Set.prototype.add,sn)}if(!un){var cn=Set.prototype.has;Set.prototype.has=function has(e){return t(cn,this,e===0?0:e)};m.preserveToString(Set.prototype.has,cn);var ln=Set.prototype["delete"];Set.prototype["delete"]=function SetDelete(e){return t(ln,this,e===0?0:e)};m.preserveToString(Set.prototype["delete"],ln)}var pn=w(S.Map,function(e){var t=new e([]);t.set(42,42);return t instanceof e});var vn=Object.setPrototypeOf&&!pn;var yn=function(){try{return!(S.Map()instanceof S.Map)}catch(e){return e instanceof TypeError}}();if(S.Map.length!==0||vn||!yn){S.Map=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}var e=new G;if(arguments.length>0){Yr(Map,e,arguments[0])}delete e.constructor;Object.setPrototypeOf(e,Map.prototype);return e};S.Map.prototype=G.prototype;h(S.Map.prototype,"constructor",S.Map,true);m.preserveToString(S.Map,G)}var hn=w(S.Set,function(e){var t=new e([]);t.add(42,42);return t instanceof e});var bn=Object.setPrototypeOf&&!hn;var gn=function(){try{return!(S.Set()instanceof S.Set)}catch(e){return e instanceof TypeError}}();if(S.Set.length!==0||bn||!gn){var dn=S.Set;S.Set=function Set(){if(!(this instanceof Set)){throw new TypeError('Constructor Set requires "new"')}var e=new dn;if(arguments.length>0){Qr(Set,e,arguments[0])}delete e.constructor;Object.setPrototypeOf(e,Set.prototype);return e};S.Set.prototype=dn.prototype;h(S.Set.prototype,"constructor",S.Set,true);m.preserveToString(S.Set,dn)}var mn=new S.Map;var On=!a(function(){return mn.keys().next().done});if(typeof S.Map.prototype.clear!=="function"||(new S.Set).size!==0||mn.size!==0||typeof S.Map.prototype.keys!=="function"||typeof S.Set.prototype.keys!=="function"||typeof S.Map.prototype.forEach!=="function"||typeof S.Set.prototype.forEach!=="function"||u(S.Map)||u(S.Set)||typeof mn.keys().next!=="function"||On||!pn){b(S,{Map:en.Map,Set:en.Set},true)}if(S.Set.prototype.keys!==S.Set.prototype.values){h(S.Set.prototype,"keys",S.Set.prototype.values,true)}Ce(Object.getPrototypeOf((new S.Map).keys()));Ce(Object.getPrototypeOf((new S.Set).keys()));if(c&&S.Set.prototype.has.name!=="has"){var wn=S.Set.prototype.has;re(S.Set.prototype,"has",function has(e){return t(wn,this,e)})}}b(S,en);Pe(S.Map);Pe(S.Set)}var jn=function throwUnlessTargetIsObject(e){if(!se.TypeIsObject(e)){throw new TypeError("target must be an object")}};var Sn={apply:function apply(){return se.Call(se.Call,null,arguments)},construct:function construct(e,t){if(!se.IsConstructor(e)){throw new TypeError("First argument must be a constructor.")}var r=arguments.length>2?arguments[2]:e;if(!se.IsConstructor(r)){throw new TypeError("new.target must be a constructor.")}return se.Construct(e,t,r,"internal")},deleteProperty:function deleteProperty(e,t){jn(e);if(s){var r=Object.getOwnPropertyDescriptor(e,t);if(r&&!r.configurable){return false}}return delete e[t]},has:function has(e,t){jn(e);return t in e}};if(Object.getOwnPropertyNames){Object.assign(Sn,{ownKeys:function ownKeys(e){jn(e);var t=Object.getOwnPropertyNames(e);if(se.IsCallable(Object.getOwnPropertySymbols)){x(t,Object.getOwnPropertySymbols(e))}return t}})}var Tn=function ConvertExceptionToBoolean(e){return!i(e)};if(Object.preventExtensions){Object.assign(Sn,{isExtensible:function isExtensible(e){jn(e);return Object.isExtensible(e)},preventExtensions:function preventExtensions(e){jn(e);return Tn(function(){Object.preventExtensions(e)})}})}if(s){var In=function get(e,t,r){var n=Object.getOwnPropertyDescriptor(e,t);if(!n){var o=Object.getPrototypeOf(e);if(o===null){return void 0}return In(o,t,r)}if("value"in n){return n.value}if(n.get){return se.Call(n.get,r)}return void 0};var En=function set(e,r,n,o){var i=Object.getOwnPropertyDescriptor(e,r);if(!i){var a=Object.getPrototypeOf(e);if(a!==null){return En(a,r,n,o)}i={value:void 0,writable:true,enumerable:true,configurable:true}}if("value"in i){if(!i.writable){return false}if(!se.TypeIsObject(o)){return false}var u=Object.getOwnPropertyDescriptor(o,r);if(u){return ie.defineProperty(o,r,{value:n})}else{return ie.defineProperty(o,r,{value:n,writable:true,enumerable:true,configurable:true})}}if(i.set){t(i.set,o,n);return true}return false};Object.assign(Sn,{defineProperty:function defineProperty(e,t,r){jn(e);return Tn(function(){Object.defineProperty(e,t,r)})},getOwnPropertyDescriptor:function getOwnPropertyDescriptor(e,t){jn(e);return Object.getOwnPropertyDescriptor(e,t)},get:function get(e,t){jn(e);var r=arguments.length>2?arguments[2]:e;return In(e,t,r)},set:function set(e,t,r){jn(e);var n=arguments.length>3?arguments[3]:e;return En(e,t,r,n)}})}if(Object.getPrototypeOf){var Pn=Object.getPrototypeOf;Sn.getPrototypeOf=function getPrototypeOf(e){jn(e);return Pn(e)}}if(Object.setPrototypeOf&&Sn.getPrototypeOf){var Cn=function(e,t){var r=t;while(r){if(e===r){return true}r=Sn.getPrototypeOf(r)}return false};Object.assign(Sn,{setPrototypeOf:function setPrototypeOf(e,t){jn(e);if(t!==null&&!se.TypeIsObject(t)){throw new TypeError("proto must be an object or null")}if(t===ie.getPrototypeOf(e)){return true}if(ie.isExtensible&&!ie.isExtensible(e)){return false}if(Cn(e,t)){return false}Object.setPrototypeOf(e,t);return true}})}var Mn=function(e,t){if(!se.IsCallable(S.Reflect[e])){h(S.Reflect,e,t)}else{var r=a(function(){S.Reflect[e](1);S.Reflect[e](NaN);S.Reflect[e](true);return true});if(r){re(S.Reflect,e,t)}}};Object.keys(Sn).forEach(function(e){Mn(e,Sn[e])});var xn=S.Reflect.getPrototypeOf;if(c&&xn&&xn.name!=="getPrototypeOf"){re(S.Reflect,"getPrototypeOf",function getPrototypeOf(e){return t(xn,S.Reflect,e)})}if(S.Reflect.setPrototypeOf){if(a(function(){S.Reflect.setPrototypeOf(1,{});return true})){re(S.Reflect,"setPrototypeOf",Sn.setPrototypeOf)}}if(S.Reflect.defineProperty){if(!a(function(){var e=!S.Reflect.defineProperty(1,"test",{value:1});var t=typeof Object.preventExtensions!=="function"||!S.Reflect.defineProperty(Object.preventExtensions({}),"test",{});return e&&t})){re(S.Reflect,"defineProperty",Sn.defineProperty)}}if(S.Reflect.construct){if(!a(function(){var e=function F(){};return S.Reflect.construct(function(){},[],e)instanceof e})){re(S.Reflect,"construct",Sn.construct)}}if(String(new Date(NaN))!=="Invalid Date"){var Nn=Date.prototype.toString;var An=function toString(){var e=+this;if(e!==e){return"Invalid Date"}return se.Call(Nn,this)};re(Date.prototype,"toString",An)}var Rn={anchor:function anchor(e){return se.CreateHTML(this,"a","name",e)},big:function big(){return se.CreateHTML(this,"big","","")},blink:function blink(){return se.CreateHTML(this,"blink","","")},bold:function bold(){return se.CreateHTML(this,"b","","")},fixed:function fixed(){return se.CreateHTML(this,"tt","","")},fontcolor:function fontcolor(e){return se.CreateHTML(this,"font","color",e)},fontsize:function fontsize(e){return se.CreateHTML(this,"font","size",e)},italics:function italics(){return se.CreateHTML(this,"i","","")},link:function link(e){return se.CreateHTML(this,"a","href",e)},small:function small(){return se.CreateHTML(this,"small","","")},strike:function strike(){return se.CreateHTML(this,"strike","","")},sub:function sub(){return se.CreateHTML(this,"sub","","")},sup:function sub(){return se.CreateHTML(this,"sup","","")}};l(Object.keys(Rn),function(e){var r=String.prototype[e];var n=false;if(se.IsCallable(r)){var o=t(r,"",' " ');var i=P([],o.match(/"/g)).length;n=o!==o.toLowerCase()||i>2}else{n=true}if(n){re(String.prototype,e,Rn[e])}});var _n=function(){if(!ne){return false}var e=typeof JSON==="object"&&typeof JSON.stringify==="function"?JSON.stringify:null;if(!e){return false}if(typeof e($())!=="undefined"){return true}if(e([$()])!=="[null]"){return true}var t={a:$()};t[$()]=true;if(e(t)!=="{}"){return true}return false}();var kn=a(function(){if(!ne){return true}return JSON.stringify(Object($()))==="{}"&&JSON.stringify([Object($())])==="[{}]"});if(_n||!kn){var Fn=JSON.stringify;re(JSON,"stringify",function stringify(e){if(typeof e==="symbol"){return}var n;if(arguments.length>1){n=arguments[1]}var o=[e];if(!r(n)){var i=se.IsCallable(n)?n:null;var a=function(e,r){var n=i?t(i,this,e,r):r;if(typeof n!=="symbol"){if(te.symbol(n)){return xt({})(n)}else{return n}}};o.push(a)}else{o.push(n)}if(arguments.length>2){o.push(arguments[2])}return Fn.apply(this,o)})}return S});
//# sourceMappingURL=es6-shim.map

(function t(e,r,n){function i(p,u){if(!r[p]){if(!e[p]){var a=typeof require=="function"&&require;if(!u&&a)return a(p,!0);if(o)return o(p,!0);var l=new Error("Cannot find module '"+p+"'");throw l.code="MODULE_NOT_FOUND",l}var s=r[p]={exports:{}};e[p][0].call(s.exports,function(t){var r=e[p][1][t];return i(r?r:t)},s,s.exports,t,e,r,n)}return r[p].exports}var o=typeof require=="function"&&require;for(var p=0;p<n.length;p++)i(n[p]);return i})({1:[function(t,e,r){"use strict";var n=t("./Array.prototype");e.exports={prototype:n,shim:function t(){n.shim()}}},{"./Array.prototype":3}],2:[function(t,e,r){"use strict";e.exports=t("array-includes")},{"array-includes":14}],3:[function(t,e,r){"use strict";var n=t("./Array.prototype.includes");e.exports={includes:n,shim:function t(){n.shim()}}},{"./Array.prototype.includes":2}],4:[function(t,e,r){"use strict";var n=t("object.getownpropertydescriptors");var i=t("object.entries");var o=t("object.values");e.exports={entries:i,getOwnPropertyDescriptors:n,shim:function t(){n.shim();i.shim();o.shim()},values:o}},{"object.entries":38,"object.getownpropertydescriptors":64,"object.values":89}],5:[function(t,e,r){"use strict";var n=t("./String.prototype");e.exports={prototype:n,shim:function t(){n.shim()}}},{"./String.prototype":7}],6:[function(t,e,r){"use strict";e.exports=t("string-at")},{"string-at":114}],7:[function(t,e,r){"use strict";var n=t("./String.prototype.at");var i=t("./String.prototype.padStart");var o=t("./String.prototype.padEnd");var p=t("./String.prototype.trimLeft");var u=t("./String.prototype.trimRight");e.exports={at:n,padStart:i,padEnd:o,trimLeft:p,trimRight:u,shim:function t(){n.shim();i.shim();o.shim();p.shim();u.shim()}}},{"./String.prototype.at":6,"./String.prototype.padEnd":8,"./String.prototype.padStart":9,"./String.prototype.trimLeft":10,"./String.prototype.trimRight":11}],8:[function(t,e,r){"use strict";e.exports=t("string.prototype.padend")},{"string.prototype.padend":137}],9:[function(t,e,r){"use strict";e.exports=t("string.prototype.padstart")},{"string.prototype.padstart":162}],10:[function(t,e,r){"use strict";e.exports=t("string.prototype.trimleft")},{"string.prototype.trimleft":187}],11:[function(t,e,r){"use strict";e.exports=t("string.prototype.trimright")},{"string.prototype.trimright":197}],12:[function(t,e,r){/*!
 * https://github.com/es-shims/es7-shim
 * @license es7-shim Copyright 2014 by contributors, MIT License
 * see https://github.com/es-shims/es7-shim/blob/master/LICENSE
 */
"use strict";var n=t("./Array");var i=t("./Object");var o=t("./String");e.exports={Array:n,Object:i,String:o,shim:function t(){n.shim();i.shim();o.shim()}}},{"./Array":1,"./Object":4,"./String":5}],13:[function(t,e,r){(function(r){"use strict";var n=t("es-abstract/es6");var i=Number.isNaN||function(t){return t!==t};var o=Number.isFinite||function(t){return typeof t==="number"&&r.isFinite(t)};var p=Array.prototype.indexOf;e.exports=function t(e){var r=arguments.length>1?n.ToInteger(arguments[1]):0;if(p&&!i(e)&&o(r)&&typeof e!=="undefined"){return p.apply(this,arguments)>-1}var u=n.ToObject(this);var a=n.ToLength(u.length);if(a===0){return false}var l=r>=0?r:Math.max(0,a+r);while(l<a){if(n.SameValueZero(e,u[l])){return true}l+=1}return false}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"es-abstract/es6":17}],14:[function(t,e,r){"use strict";var n=t("define-properties");var i=t("es-abstract/es6");var o=t("./implementation");var p=t("./polyfill");var u=p();var a=t("./shim");var l=Array.prototype.slice;var s=function t(e,r){i.RequireObjectCoercible(e);return u.apply(e,l.call(arguments,1))};n(s,{implementation:o,getPolyfill:p,shim:a});e.exports=s},{"./implementation":13,"./polyfill":35,"./shim":36,"define-properties":15,"es-abstract/es6":17}],15:[function(t,e,r){"use strict";var n=t("object-keys");var i=t("foreach");var o=typeof Symbol==="function"&&typeof Symbol()==="symbol";var p=Object.prototype.toString;var u=function(t){return typeof t==="function"&&p.call(t)==="[object Function]"};var a=function(){var t={};try{Object.defineProperty(t,"x",{enumerable:false,value:t});for(var e in t){return false}return t.x===t}catch(t){return false}};var l=Object.defineProperty&&a();var s=function(t,e,r,n){if(e in t&&(!u(n)||!n())){return}if(l){Object.defineProperty(t,e,{configurable:true,enumerable:false,value:r,writable:true})}else{t[e]=r}};var c=function(t,e){var r=arguments.length>2?arguments[2]:{};var p=n(e);if(o){p=p.concat(Object.getOwnPropertySymbols(e))}i(p,function(n){s(t,n,e[n],r[n])})};c.supportsDescriptors=!!l;e.exports=c},{foreach:26,"object-keys":33}],16:[function(t,e,r){"use strict";var n=Number.isNaN||function(t){return t!==t};var i=t("./helpers/isFinite");var o=t("./helpers/sign");var p=t("./helpers/mod");var u=t("is-callable");var a=t("es-to-primitive/es5");var l={ToPrimitive:a,ToBoolean:function t(e){return Boolean(e)},ToNumber:function t(e){return Number(e)},ToInteger:function t(e){var r=this.ToNumber(e);if(n(r)){return 0}if(r===0||!i(r)){return r}return o(r)*Math.floor(Math.abs(r))},ToInt32:function t(e){return this.ToNumber(e)>>0},ToUint32:function t(e){return this.ToNumber(e)>>>0},ToUint16:function t(e){var r=this.ToNumber(e);if(n(r)||r===0||!i(r)){return 0}var u=o(r)*Math.floor(Math.abs(r));return p(u,65536)},ToString:function t(e){return String(e)},ToObject:function t(e){this.CheckObjectCoercible(e);return Object(e)},CheckObjectCoercible:function t(e,r){if(e==null){throw new TypeError(r||"Cannot call method on "+e)}return e},IsCallable:u,SameValue:function t(e,r){if(e===r){if(e===0){return 1/e===1/r}return true}return n(e)&&n(r)}};e.exports=l},{"./helpers/isFinite":19,"./helpers/mod":21,"./helpers/sign":22,"es-to-primitive/es5":23,"is-callable":29}],17:[function(t,e,r){"use strict";var n=Object.prototype.toString;var i=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol";var o=i?Symbol.prototype.toString:n;var p=Number.isNaN||function(t){return t!==t};var u=t("./helpers/isFinite");var a=Number.MAX_SAFE_INTEGER||Math.pow(2,53)-1;var l=t("./helpers/assign");var s=t("./helpers/sign");var c=t("./helpers/mod");var f=t("./helpers/isPrimitive");var y=t("es-to-primitive/es6");var v=parseInt;var m=t("function-bind");var b=m.call(Function.call,String.prototype.slice);var d=m.call(Function.call,RegExp.prototype.test,/^0b[01]+$/i);var h=m.call(Function.call,RegExp.prototype.test,/^0o[0-7]+$/i);var g=["\x85","\u200b","\ufffe"].join("");var S=new RegExp("["+g+"]","g");var j=m.call(Function.call,RegExp.prototype.test,S);var x=/^[\-\+]0x[0-9a-f]+$/i;var O=m.call(Function.call,RegExp.prototype.test,x);var w=["\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003","\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028","\u2029\ufeff"].join("");var T=new RegExp("(^["+w+"]+)|(["+w+"]+$)","g");var F=m.call(Function.call,String.prototype.replace);var P=function(t){return F(t,T,"")};var E=t("./es5");var N=t("is-regex");var A=l(l({},E),{Call:function t(e,r){var n=arguments.length>2?arguments[2]:[];if(!this.IsCallable(e)){throw new TypeError(e+" is not a function")}return e.apply(r,n)},ToPrimitive:y,ToNumber:function t(e){var r=f(e)?e:y(e,"number");if(typeof r==="symbol"){throw new TypeError("Cannot convert a Symbol value to a number")}if(typeof r==="string"){if(d(r)){return this.ToNumber(v(b(r,2),2))}else if(h(r)){return this.ToNumber(v(b(r,2),8))}else if(j(r)||O(r)){return NaN}else{var n=P(r);if(n!==r){return this.ToNumber(n)}}}return Number(r)},ToInt16:function t(e){var r=this.ToUint16(e);return r>=32768?r-65536:r},ToInt8:function t(e){var r=this.ToUint8(e);return r>=128?r-256:r},ToUint8:function t(e){var r=this.ToNumber(e);if(p(r)||r===0||!u(r)){return 0}var n=s(r)*Math.floor(Math.abs(r));return c(n,256)},ToUint8Clamp:function t(e){var r=this.ToNumber(e);if(p(r)||r<=0){return 0}if(r>=255){return 255}var n=Math.floor(e);if(n+.5<r){return n+1}if(r<n+.5){return n}if(n%2!==0){return n+1}return n},ToString:function t(e){if(typeof e==="symbol"){throw new TypeError("Cannot convert a Symbol value to a string")}return String(e)},ToObject:function t(e){this.RequireObjectCoercible(e);return Object(e)},ToPropertyKey:function t(e){var r=this.ToPrimitive(e,String);return typeof r==="symbol"?o.call(r):this.ToString(r)},ToLength:function t(e){var r=this.ToInteger(e);if(r<=0){return 0}if(r>a){return a}return r},CanonicalNumericIndexString:function t(e){if(n.call(e)!=="[object String]"){throw new TypeError("must be a string")}if(e==="-0"){return-0}var r=this.ToNumber(e);if(this.SameValue(this.ToString(r),e)){return r}},RequireObjectCoercible:E.CheckObjectCoercible,IsArray:Array.isArray||function t(e){return n.call(e)==="[object Array]"},IsConstructor:function t(e){return this.IsCallable(e)},IsExtensible:function t(e){if(!Object.preventExtensions){return true}if(f(e)){return false}return Object.isExtensible(e)},IsInteger:function t(e){if(typeof e!=="number"||p(e)||!u(e)){return false}var r=Math.abs(e);return Math.floor(r)===r},IsPropertyKey:function t(e){return typeof e==="string"||typeof e==="symbol"},IsRegExp:function t(e){if(!e||typeof e!=="object"){return false}if(i){var r=RegExp[Symbol.match];if(typeof r!=="undefined"){return E.ToBoolean(r)}}return N(e)},SameValueZero:function t(e,r){return e===r||p(e)&&p(r)}});delete A.CheckObjectCoercible;e.exports=A},{"./es5":16,"./helpers/assign":18,"./helpers/isFinite":19,"./helpers/isPrimitive":20,"./helpers/mod":21,"./helpers/sign":22,"es-to-primitive/es6":24,"function-bind":28,"is-regex":31}],18:[function(t,e,r){var n=Object.prototype.hasOwnProperty;e.exports=Object.assign||function t(e,r){for(var i in r){if(n.call(r,i)){e[i]=r[i]}}return e}},{}],19:[function(t,e,r){var n=Number.isNaN||function(t){return t!==t};e.exports=Number.isFinite||function(t){return typeof t==="number"&&!n(t)&&t!==Infinity&&t!==-Infinity}},{}],20:[function(t,e,r){e.exports=function t(e){return e===null||typeof e!=="function"&&typeof e!=="object"}},{}],21:[function(t,e,r){e.exports=function t(e,r){var n=e%r;return Math.floor(n>=0?n:n+r)}},{}],22:[function(t,e,r){e.exports=function t(e){return e>=0?1:-1}},{}],23:[function(t,e,r){"use strict";var n=Object.prototype.toString;var i=t("./helpers/isPrimitive");var o=t("is-callable");var p={"[[DefaultValue]]":function(t,e){var r=e||(n.call(t)==="[object Date]"?String:Number);if(r===String||r===Number){var p=r===String?["toString","valueOf"]:["valueOf","toString"];var u,a;for(a=0;a<p.length;++a){if(o(t[p[a]])){u=t[p[a]]();if(i(u)){return u}}}throw new TypeError("No default value")}throw new TypeError("invalid [[DefaultValue]] hint supplied")}};e.exports=function t(e,r){if(i(e)){return e}return p["[[DefaultValue]]"](e,r)}},{"./helpers/isPrimitive":25,"is-callable":29}],24:[function(t,e,r){"use strict";var n=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol";var i=t("./helpers/isPrimitive");var o=t("is-callable");var p=t("is-date-object");var u=t("is-symbol");var a=function t(e,r){if(typeof e==="undefined"||e===null){throw new TypeError("Cannot call method on "+e)}if(typeof r!=="string"||r!=="number"&&r!=="string"){throw new TypeError('hint must be "string" or "number"')}var n=r==="string"?["toString","valueOf"]:["valueOf","toString"];var p,u,a;for(a=0;a<n.length;++a){p=e[n[a]];if(o(p)){u=p.call(e);if(i(u)){return u}}}throw new TypeError("No default value")};var l=function t(e,r){var n=e[r];if(n!==null&&typeof n!=="undefined"){if(!o(n)){throw new TypeError(n+" returned for property "+r+" of object "+e+" is not a function")}return n}};e.exports=function t(e,r){if(i(e)){return e}var o="default";if(arguments.length>1){if(r===String){o="string"}else if(r===Number){o="number"}}var s;if(n){if(Symbol.toPrimitive){s=l(e,Symbol.toPrimitive)}else if(u(e)){s=Symbol.prototype.valueOf}}if(typeof s!=="undefined"){var c=s.call(e,o);if(i(c)){return c}throw new TypeError("unable to convert exotic object to primitive")}if(o==="default"&&(p(e)||u(e))){o="string"}return a(e,o==="default"?"number":o)}},{"./helpers/isPrimitive":25,"is-callable":29,"is-date-object":30,"is-symbol":32}],25:[function(t,e,r){arguments[4][20][0].apply(r,arguments)},{dup:20}],26:[function(t,e,r){var n=Object.prototype.hasOwnProperty;var i=Object.prototype.toString;e.exports=function t(e,r,o){if(i.call(r)!=="[object Function]"){throw new TypeError("iterator must be a function")}var p=e.length;if(p===+p){for(var u=0;u<p;u++){r.call(o,e[u],u,e)}}else{for(var a in e){if(n.call(e,a)){r.call(o,e[a],a,e)}}}}},{}],27:[function(t,e,r){var n="Function.prototype.bind called on incompatible ";var i=Array.prototype.slice;var o=Object.prototype.toString;var p="[object Function]";e.exports=function t(e){var r=this;if(typeof r!=="function"||o.call(r)!==p){throw new TypeError(n+r)}var u=i.call(arguments,1);var a;var l=function(){if(this instanceof a){var t=r.apply(this,u.concat(i.call(arguments)));if(Object(t)===t){return t}return this}else{return r.apply(e,u.concat(i.call(arguments)))}};var s=Math.max(0,r.length-u.length);var c=[];for(var f=0;f<s;f++){c.push("$"+f)}a=Function("binder","return function ("+c.join(",")+"){ return binder.apply(this,arguments); }")(l);if(r.prototype){var y=function t(){};y.prototype=r.prototype;a.prototype=new y;y.prototype=null}return a}},{}],28:[function(t,e,r){var n=t("./implementation");e.exports=Function.prototype.bind||n},{"./implementation":27}],29:[function(t,e,r){"use strict";var n=Function.prototype.toString;var i=/^\s*class /;var o=function t(e){try{var r=n.call(e);var o=r.replace(/\/\/.*\n/g,"");var p=o.replace(/\/\*[.\s\S]*\*\//g,"");var u=p.replace(/\n/gm," ").replace(/ {2}/g," ");return i.test(u)}catch(t){return false}};var p=function t(e){try{if(o(e)){return false}n.call(e);return true}catch(t){return false}};var u=Object.prototype.toString;var a="[object Function]";var l="[object GeneratorFunction]";var s=typeof Symbol==="function"&&typeof Symbol.toStringTag==="symbol";e.exports=function t(e){if(!e){return false}if(typeof e!=="function"&&typeof e!=="object"){return false}if(s){return p(e)}if(o(e)){return false}var r=u.call(e);return r===a||r===l}},{}],30:[function(t,e,r){"use strict";var n=Date.prototype.getDay;var i=function t(e){try{n.call(e);return true}catch(t){return false}};var o=Object.prototype.toString;var p="[object Date]";var u=typeof Symbol==="function"&&typeof Symbol.toStringTag==="symbol";e.exports=function t(e){if(typeof e!=="object"||e===null){return false}return u?i(e):o.call(e)===p}},{}],31:[function(t,e,r){"use strict";var n=RegExp.prototype.exec;var i=function t(e){try{n.call(e);return true}catch(t){return false}};var o=Object.prototype.toString;var p="[object RegExp]";var u=typeof Symbol==="function"&&typeof Symbol.toStringTag==="symbol";e.exports=function t(e){if(typeof e!=="object"){return false}return u?i(e):o.call(e)===p}},{}],32:[function(t,e,r){"use strict";var n=Object.prototype.toString;var i=typeof Symbol==="function"&&typeof Symbol()==="symbol";if(i){var o=Symbol.prototype.toString;var p=/^Symbol\(.*\)$/;var u=function t(e){if(typeof e.valueOf()!=="symbol"){return false}return p.test(o.call(e))};e.exports=function t(e){if(typeof e==="symbol"){return true}if(n.call(e)!=="[object Symbol]"){return false}try{return u(e)}catch(t){return false}}}else{e.exports=function t(e){return false}}},{}],33:[function(t,e,r){"use strict";var n=Object.prototype.hasOwnProperty;var i=Object.prototype.toString;var o=Array.prototype.slice;var p=t("./isArguments");var u=!{toString:null}.propertyIsEnumerable("toString");var a=function(){}.propertyIsEnumerable("prototype");var l=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var s=function(t){var e=t.constructor;return e&&e.prototype===t};var c={$console:true,$frame:true,$frameElement:true,$frames:true,$parent:true,$self:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$window:true};var f=function(){if(typeof window==="undefined"){return false}for(var t in window){try{if(!c["$"+t]&&n.call(window,t)&&window[t]!==null&&typeof window[t]==="object"){try{s(window[t])}catch(t){return true}}}catch(t){return true}}return false}();var y=function(t){if(typeof window==="undefined"||!f){return s(t)}try{return s(t)}catch(t){return false}};var v=function t(e){var r=e!==null&&typeof e==="object";var o=i.call(e)==="[object Function]";var s=p(e);var c=r&&i.call(e)==="[object String]";var f=[];if(!r&&!o&&!s){throw new TypeError("Object.keys called on a non-object")}var v=a&&o;if(c&&e.length>0&&!n.call(e,0)){for(var m=0;m<e.length;++m){f.push(String(m))}}if(s&&e.length>0){for(var b=0;b<e.length;++b){f.push(String(b))}}else{for(var d in e){if(!(v&&d==="prototype")&&n.call(e,d)){f.push(String(d))}}}if(u){var h=y(e);for(var g=0;g<l.length;++g){if(!(h&&l[g]==="constructor")&&n.call(e,l[g])){f.push(l[g])}}}return f};v.shim=function t(){if(Object.keys){var e=function(){return(Object.keys(arguments)||"").length===2}(1,2);if(!e){var r=Object.keys;Object.keys=function t(e){if(p(e)){return r(o.call(e))}else{return r(e)}}}}else{Object.keys=v}return Object.keys||v};e.exports=v},{"./isArguments":34}],34:[function(t,e,r){"use strict";var n=Object.prototype.toString;e.exports=function t(e){var r=n.call(e);var i=r==="[object Arguments]";if(!i){i=r!=="[object Array]"&&e!==null&&typeof e==="object"&&typeof e.length==="number"&&e.length>=0&&n.call(e.callee)==="[object Function]"}return i}},{}],35:[function(t,e,r){"use strict";var n=t("./implementation");e.exports=function t(){return Array.prototype.includes||n}},{"./implementation":13}],36:[function(t,e,r){"use strict";var n=t("define-properties");var i=t("./polyfill");e.exports=function t(){var e=i();if(Array.prototype.includes!==e){n(Array.prototype,{includes:e})}return e}},{"./polyfill":35,"define-properties":15}],37:[function(t,e,r){"use strict";var n=t("es-abstract/es7");var i=t("has");var o=t("function-bind");var p=o.call(Function.call,Object.prototype.propertyIsEnumerable);e.exports=function t(e){var r=n.RequireObjectCoercible(e);var o=[];for(var u in r){if(i(r,u)&&p(r,u)){o.push([u,r[u]])}}return o}},{"es-abstract/es7":42,"function-bind":53,has:54}],38:[function(t,e,r){"use strict";var n=t("define-properties");var i=t("./implementation");var o=t("./polyfill");var p=t("./shim");n(i,{getPolyfill:o,implementation:i,shim:p});e.exports=i},{"./implementation":37,"./polyfill":61,"./shim":62,"define-properties":39}],39:[function(t,e,r){arguments[4][15][0].apply(r,arguments)},{dup:15,foreach:51,"object-keys":59}],40:[function(t,e,r){arguments[4][16][0].apply(r,arguments)},{"./helpers/isFinite":44,"./helpers/mod":46,"./helpers/sign":47,dup:16,"es-to-primitive/es5":48,"is-callable":55}],41:[function(t,e,r){arguments[4][17][0].apply(r,arguments)},{"./es5":40,"./helpers/assign":43,"./helpers/isFinite":44,"./helpers/isPrimitive":45,"./helpers/mod":46,"./helpers/sign":47,dup:17,"es-to-primitive/es6":49,"function-bind":53,"is-regex":57}],42:[function(t,e,r){"use strict";var n=t("./es6");var i=t("./helpers/assign");var o=i(n,{SameValueNonNumber:function t(e,r){if(typeof e==="number"||typeof e!==typeof r){throw new TypeError("SameValueNonNumber requires two non-number values of the same type.")}return this.SameValue(e,r)}});e.exports=o},{"./es6":41,"./helpers/assign":43}],43:[function(t,e,r){arguments[4][18][0].apply(r,arguments)},{dup:18}],44:[function(t,e,r){arguments[4][19][0].apply(r,arguments)},{dup:19}],45:[function(t,e,r){arguments[4][20][0].apply(r,arguments)},{dup:20}],46:[function(t,e,r){arguments[4][21][0].apply(r,arguments)},{dup:21}],47:[function(t,e,r){arguments[4][22][0].apply(r,arguments)},{dup:22}],48:[function(t,e,r){arguments[4][23][0].apply(r,arguments)},{"./helpers/isPrimitive":50,dup:23,"is-callable":55}],49:[function(t,e,r){arguments[4][24][0].apply(r,arguments)},{"./helpers/isPrimitive":50,dup:24,"is-callable":55,"is-date-object":56,"is-symbol":58}],50:[function(t,e,r){arguments[4][20][0].apply(r,arguments)},{dup:20}],51:[function(t,e,r){arguments[4][26][0].apply(r,arguments)},{dup:26}],52:[function(t,e,r){arguments[4][27][0].apply(r,arguments)},{dup:27}],53:[function(t,e,r){arguments[4][28][0].apply(r,arguments)},{"./implementation":52,dup:28}],54:[function(t,e,r){var n=t("function-bind");e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},{"function-bind":53}],55:[function(t,e,r){arguments[4][29][0].apply(r,arguments)},{dup:29}],56:[function(t,e,r){arguments[4][30][0].apply(r,arguments)},{dup:30}],57:[function(t,e,r){arguments[4][31][0].apply(r,arguments)},{dup:31}],58:[function(t,e,r){arguments[4][32][0].apply(r,arguments)},{dup:32}],59:[function(t,e,r){arguments[4][33][0].apply(r,arguments)},{"./isArguments":60,dup:33}],60:[function(t,e,r){arguments[4][34][0].apply(r,arguments)},{dup:34}],61:[function(t,e,r){"use strict";var n=t("./implementation");e.exports=function t(){return typeof Object.entries==="function"?Object.entries:n}},{"./implementation":37}],62:[function(t,e,r){"use strict";var n=t("./polyfill");var i=t("define-properties");e.exports=function t(){var e=n();i(Object,{entries:e},{entries:function(){return Object.entries!==e}});return e}},{"./polyfill":61,"define-properties":39}],63:[function(t,e,r){"use strict";var n=t("es-abstract/es7");var i=Object.defineProperty;var o=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var u=Object.getOwnPropertySymbols;var a=Function.call.bind(Array.prototype.concat);var l=Function.call.bind(Array.prototype.reduce);var s=u?function(t){return a(p(t),u(t))}:p;var c=n.IsCallable(o)&&n.IsCallable(p);var f=function t(e,r,n){if(i&&r in e){i(e,r,{configurable:true,enumerable:true,value:n,writable:true})}else{e[r]=n}};e.exports=function t(e){n.RequireObjectCoercible(e);if(!c){throw new TypeError("getOwnPropertyDescriptors requires Object.getOwnPropertyDescriptor")}var r=n.ToObject(e);return l(s(r),function(t,e){f(t,e,o(r,e));return t},{})}},{"es-abstract/es7":68}],64:[function(t,e,r){arguments[4][38][0].apply(r,arguments)},{"./implementation":63,"./polyfill":86,"./shim":87,"define-properties":65,dup:38}],65:[function(t,e,r){arguments[4][15][0].apply(r,arguments)},{dup:15,foreach:77,"object-keys":84}],66:[function(t,e,r){arguments[4][16][0].apply(r,arguments)},{"./helpers/isFinite":70,"./helpers/mod":72,"./helpers/sign":73,dup:16,"es-to-primitive/es5":74,"is-callable":80}],67:[function(t,e,r){arguments[4][17][0].apply(r,arguments)},{"./es5":66,"./helpers/assign":69,"./helpers/isFinite":70,"./helpers/isPrimitive":71,"./helpers/mod":72,"./helpers/sign":73,dup:17,"es-to-primitive/es6":75,"function-bind":79,"is-regex":82}],68:[function(t,e,r){arguments[4][42][0].apply(r,arguments)},{"./es6":67,"./helpers/assign":69,dup:42}],69:[function(t,e,r){arguments[4][18][0].apply(r,arguments)},{dup:18}],70:[function(t,e,r){arguments[4][19][0].apply(r,arguments)},{dup:19}],71:[function(t,e,r){arguments[4][20][0].apply(r,arguments)},{dup:20}],72:[function(t,e,r){arguments[4][21][0].apply(r,arguments)},{dup:21}],73:[function(t,e,r){arguments[4][22][0].apply(r,arguments)},{dup:22}],74:[function(t,e,r){arguments[4][23][0].apply(r,arguments)},{"./helpers/isPrimitive":76,dup:23,"is-callable":80}],75:[function(t,e,r){arguments[4][24][0].apply(r,arguments)},{"./helpers/isPrimitive":76,dup:24,"is-callable":80,"is-date-object":81,"is-symbol":83}],76:[function(t,e,r){arguments[4][20][0].apply(r,arguments)},{dup:20}],77:[function(t,e,r){arguments[4][26][0].apply(r,arguments)},{dup:26}],78:[function(t,e,r){arguments[4][27][0].apply(r,arguments)},{dup:27}],79:[function(t,e,r){arguments[4][28][0].apply(r,arguments)},{"./implementation":78,dup:28}],80:[function(t,e,r){arguments[4][29][0].apply(r,arguments)},{dup:29}],81:[function(t,e,r){arguments[4][30][0].apply(r,arguments)},{dup:30}],82:[function(t,e,r){arguments[4][31][0].apply(r,arguments)},{dup:31}],83:[function(t,e,r){arguments[4][32][0].apply(r,arguments)},{dup:32}],84:[function(t,e,r){arguments[4][33][0].apply(r,arguments)},{"./isArguments":85,dup:33}],85:[function(t,e,r){arguments[4][34][0].apply(r,arguments)},{dup:34}],86:[function(t,e,r){"use strict";var n=t("./implementation");e.exports=function t(){return typeof Object.getOwnPropertyDescriptors==="function"?Object.getOwnPropertyDescriptors:n}},{"./implementation":63}],87:[function(t,e,r){"use strict";var n=t("./polyfill");var i=t("define-properties");e.exports=function t(){var e=n();i(Object,{getOwnPropertyDescriptors:e},{getOwnPropertyDescriptors:function(){return Object.getOwnPropertyDescriptors!==e}});return e}},{"./polyfill":86,"define-properties":65}],88:[function(t,e,r){"use strict";var n=t("es-abstract/es7");var i=t("has");var o=t("function-bind");var p=o.call(Function.call,Object.prototype.propertyIsEnumerable);e.exports=function t(e){var r=n.RequireObjectCoercible(e);var o=[];for(var u in r){if(i(r,u)&&p(r,u)){o.push(r[u])}}return o}},{"es-abstract/es7":93,"function-bind":104,has:105}],89:[function(t,e,r){arguments[4][38][0].apply(r,arguments)},{"./implementation":88,"./polyfill":112,"./shim":113,"define-properties":90,dup:38}],90:[function(t,e,r){arguments[4][15][0].apply(r,arguments)},{dup:15,foreach:102,"object-keys":110}],91:[function(t,e,r){arguments[4][16][0].apply(r,arguments)},{"./helpers/isFinite":95,"./helpers/mod":97,"./helpers/sign":98,dup:16,"es-to-primitive/es5":99,"is-callable":106}],92:[function(t,e,r){arguments[4][17][0].apply(r,arguments)},{"./es5":91,"./helpers/assign":94,"./helpers/isFinite":95,"./helpers/isPrimitive":96,"./helpers/mod":97,"./helpers/sign":98,dup:17,"es-to-primitive/es6":100,"function-bind":104,"is-regex":108}],93:[function(t,e,r){arguments[4][42][0].apply(r,arguments)},{"./es6":92,"./helpers/assign":94,dup:42}],94:[function(t,e,r){arguments[4][18][0].apply(r,arguments)},{dup:18}],95:[function(t,e,r){arguments[4][19][0].apply(r,arguments)},{dup:19}],96:[function(t,e,r){arguments[4][20][0].apply(r,arguments)},{dup:20}],97:[function(t,e,r){arguments[4][21][0].apply(r,arguments)},{dup:21}],98:[function(t,e,r){arguments[4][22][0].apply(r,arguments)},{dup:22}],99:[function(t,e,r){arguments[4][23][0].apply(r,arguments)},{"./helpers/isPrimitive":101,dup:23,"is-callable":106}],100:[function(t,e,r){arguments[4][24][0].apply(r,arguments)},{"./helpers/isPrimitive":101,dup:24,"is-callable":106,"is-date-object":107,"is-symbol":109}],101:[function(t,e,r){arguments[4][20][0].apply(r,arguments)},{dup:20}],102:[function(t,e,r){arguments[4][26][0].apply(r,arguments)},{dup:26}],103:[function(t,e,r){arguments[4][27][0].apply(r,arguments)},{dup:27}],104:[function(t,e,r){arguments[4][28][0].apply(r,arguments)},{"./implementation":103,dup:28}],105:[function(t,e,r){arguments[4][54][0].apply(r,arguments)},{dup:54,"function-bind":104}],106:[function(t,e,r){arguments[4][29][0].apply(r,arguments)},{dup:29}],107:[function(t,e,r){arguments[4][30][0].apply(r,arguments)},{dup:30}],108:[function(t,e,r){arguments[4][31][0].apply(r,arguments)},{dup:31}],109:[function(t,e,r){arguments[4][32][0].apply(r,arguments)},{dup:32}],110:[function(t,e,r){arguments[4][33][0].apply(r,arguments)},{"./isArguments":111,dup:33}],111:[function(t,e,r){arguments[4][34][0].apply(r,arguments)},{dup:34}],112:[function(t,e,r){"use strict";var n=t("./implementation");e.exports=function t(){return typeof Object.values==="function"?Object.values:n}},{"./implementation":88}],113:[function(t,e,r){"use strict";var n=t("./polyfill");var i=t("define-properties");e.exports=function t(){var e=n();i(Object,{values:e},{values:function(){return Object.values!==e}});return e}},{"./polyfill":112,"define-properties":90}],114:[function(t,e,r){"use strict";var n=t("define-properties");var i=t("es-abstract/es7");var o=t("function-bind");var p=function t(e){i.RequireObjectCoercible(this);var r=i.ToObject(this);var n=i.ToString(r);var o=i.ToInteger(e);var p=n.length;if(o<0||o>=p){return""}var u=n.charCodeAt(o);var a;var l=o+1;var s=1;var c=u>=55296&&u<=56319;if(c&&p>l){a=n.charCodeAt(l);if(a>=56320&&a<=57343){s=2}}return n.slice(o,o+s)};var u=o.call(Function.call,p);n(u,{method:p,shim:function t(){n(String.prototype,{at:p});return String.prototype.at}});e.exports=u},{"define-properties":115,"es-abstract/es7":118,"function-bind":129}],115:[function(t,e,r){arguments[4][15][0].apply(r,arguments)},{dup:15,foreach:127,"object-keys":134}],116:[function(t,e,r){arguments[4][16][0].apply(r,arguments)},{"./helpers/isFinite":120,"./helpers/mod":122,"./helpers/sign":123,dup:16,"es-to-primitive/es5":124,"is-callable":130}],117:[function(t,e,r){arguments[4][17][0].apply(r,arguments)},{"./es5":116,"./helpers/assign":119,"./helpers/isFinite":120,"./helpers/isPrimitive":121,"./helpers/mod":122,"./helpers/sign":123,dup:17,"es-to-primitive/es6":125,"function-bind":129,"is-regex":132}],118:[function(t,e,r){arguments[4][42][0].apply(r,arguments)},{"./es6":117,"./helpers/assign":119,dup:42}],119:[function(t,e,r){arguments[4][18][0].apply(r,arguments)},{dup:18}],120:[function(t,e,r){arguments[4][19][0].apply(r,arguments)},{dup:19}],121:[function(t,e,r){arguments[4][20][0].apply(r,arguments)},{dup:20}],122:[function(t,e,r){arguments[4][21][0].apply(r,arguments)},{dup:21}],123:[function(t,e,r){arguments[4][22][0].apply(r,arguments)},{dup:22}],124:[function(t,e,r){arguments[4][23][0].apply(r,arguments)},{"./helpers/isPrimitive":126,dup:23,"is-callable":130}],125:[function(t,e,r){arguments[4][24][0].apply(r,arguments)},{"./helpers/isPrimitive":126,dup:24,"is-callable":130,"is-date-object":131,"is-symbol":133}],126:[function(t,e,r){arguments[4][20][0].apply(r,arguments)},{dup:20}],127:[function(t,e,r){arguments[4][26][0].apply(r,arguments)},{dup:26}],128:[function(t,e,r){arguments[4][27][0].apply(r,arguments)},{dup:27}],129:[function(t,e,r){arguments[4][28][0].apply(r,arguments)},{"./implementation":128,dup:28}],130:[function(t,e,r){arguments[4][29][0].apply(r,arguments)},{dup:29}],131:[function(t,e,r){arguments[4][30][0].apply(r,arguments)},{dup:30}],132:[function(t,e,r){arguments[4][31][0].apply(r,arguments)},{dup:31}],133:[function(t,e,r){arguments[4][32][0].apply(r,arguments)},{dup:32}],134:[function(t,e,r){arguments[4][33][0].apply(r,arguments)},{"./isArguments":135,dup:33}],135:[function(t,e,r){arguments[4][34][0].apply(r,arguments)},{dup:34}],136:[function(t,e,r){"use strict";var n=t("function-bind");var i=t("es-abstract/es7");var o=n.call(Function.call,String.prototype.slice);e.exports=function t(e){var r=i.RequireObjectCoercible(this);var n=i.ToString(r);var p=i.ToLength(n.length);var u;if(arguments.length>1){u=arguments[1]}var a=typeof u==="undefined"?"":i.ToString(u);if(a===""){a=" "}var l=i.ToLength(e);if(l<=p){return n}var s=l-p;while(a.length<s){var c=a.length;var f=s-c;a+=c>f?o(a,0,f):a}var y=a.length>s?o(a,0,s):a;return n+y}},{"es-abstract/es7":141,"function-bind":152}],137:[function(t,e,r){"use strict";var n=t("function-bind");var i=t("define-properties");var o=t("es-abstract/es7");var p=t("./implementation");var u=t("./polyfill");var a=t("./shim");var l=n.call(Function.apply,p);var s=function t(e,r){o.RequireObjectCoercible(e);var n=[r];if(arguments.length>2){n.push(arguments[2])}return l(e,n)};i(s,{getPolyfill:u,implementation:p,shim:a});e.exports=s},{"./implementation":136,"./polyfill":159,"./shim":160,"define-properties":138,"es-abstract/es7":141,"function-bind":152}],138:[function(t,e,r){arguments[4][15][0].apply(r,arguments)},{dup:15,foreach:150,"object-keys":157}],139:[function(t,e,r){arguments[4][16][0].apply(r,arguments)},{"./helpers/isFinite":143,"./helpers/mod":145,"./helpers/sign":146,dup:16,"es-to-primitive/es5":147,"is-callable":153}],140:[function(t,e,r){arguments[4][17][0].apply(r,arguments)},{"./es5":139,"./helpers/assign":142,"./helpers/isFinite":143,"./helpers/isPrimitive":144,"./helpers/mod":145,"./helpers/sign":146,dup:17,"es-to-primitive/es6":148,"function-bind":152,"is-regex":155}],141:[function(t,e,r){arguments[4][42][0].apply(r,arguments)},{"./es6":140,"./helpers/assign":142,dup:42}],142:[function(t,e,r){arguments[4][18][0].apply(r,arguments)},{dup:18}],143:[function(t,e,r){arguments[4][19][0].apply(r,arguments)},{dup:19}],144:[function(t,e,r){arguments[4][20][0].apply(r,arguments)},{dup:20}],145:[function(t,e,r){arguments[4][21][0].apply(r,arguments)},{dup:21}],146:[function(t,e,r){arguments[4][22][0].apply(r,arguments)},{dup:22}],147:[function(t,e,r){arguments[4][23][0].apply(r,arguments)},{"./helpers/isPrimitive":149,dup:23,"is-callable":153}],148:[function(t,e,r){arguments[4][24][0].apply(r,arguments)},{"./helpers/isPrimitive":149,dup:24,"is-callable":153,"is-date-object":154,"is-symbol":156}],149:[function(t,e,r){arguments[4][20][0].apply(r,arguments)},{dup:20}],150:[function(t,e,r){arguments[4][26][0].apply(r,arguments)},{dup:26}],151:[function(t,e,r){arguments[4][27][0].apply(r,arguments)},{dup:27}],152:[function(t,e,r){arguments[4][28][0].apply(r,arguments)},{"./implementation":151,dup:28}],153:[function(t,e,r){arguments[4][29][0].apply(r,arguments)},{dup:29}],154:[function(t,e,r){arguments[4][30][0].apply(r,arguments)},{dup:30}],155:[function(t,e,r){arguments[4][31][0].apply(r,arguments)},{dup:31}],156:[function(t,e,r){arguments[4][32][0].apply(r,arguments)},{dup:32}],157:[function(t,e,r){arguments[4][33][0].apply(r,arguments)},{"./isArguments":158,dup:33}],158:[function(t,e,r){arguments[4][34][0].apply(r,arguments)},{dup:34}],159:[function(t,e,r){"use strict";var n=t("./implementation");e.exports=function t(){return typeof String.prototype.padEnd==="function"?String.prototype.padEnd:n}},{"./implementation":136}],160:[function(t,e,r){"use strict";var n=t("./polyfill");var i=t("define-properties");e.exports=function t(){var e=n();i(String.prototype,{padEnd:e},{padEnd:function(){return String.prototype.padEnd!==e}});return e}},{"./polyfill":159,"define-properties":138}],161:[function(t,e,r){"use strict";var n=t("function-bind");var i=t("es-abstract/es7");var o=n.call(Function.call,String.prototype.slice);e.exports=function t(e){var r=i.RequireObjectCoercible(this);var n=i.ToString(r);var p=i.ToLength(n.length);var u;if(arguments.length>1){u=arguments[1]}var a=typeof u==="undefined"?"":i.ToString(u);if(a===""){a=" "}var l=i.ToLength(e);if(l<=p){return n}var s=l-p;while(a.length<s){var c=a.length;var f=s-c;a+=c>f?o(a,0,f):a}var y=a.length>s?o(a,0,s):a;return y+n}},{"es-abstract/es7":166,"function-bind":177}],162:[function(t,e,r){"use strict";var n=t("function-bind");var i=t("define-properties");var o=t("es-abstract/es7");var p=t("./implementation");var u=t("./polyfill");var a=t("./shim");var l=n.call(Function.apply,p);var s=function t(e,r){o.RequireObjectCoercible(e);var n=[r];if(arguments.length>2){
n.push(arguments[2])}return l(e,n)};i(s,{getPolyfill:u,implementation:p,shim:a});e.exports=s},{"./implementation":161,"./polyfill":184,"./shim":185,"define-properties":163,"es-abstract/es7":166,"function-bind":177}],163:[function(t,e,r){arguments[4][15][0].apply(r,arguments)},{dup:15,foreach:175,"object-keys":182}],164:[function(t,e,r){arguments[4][16][0].apply(r,arguments)},{"./helpers/isFinite":168,"./helpers/mod":170,"./helpers/sign":171,dup:16,"es-to-primitive/es5":172,"is-callable":178}],165:[function(t,e,r){arguments[4][17][0].apply(r,arguments)},{"./es5":164,"./helpers/assign":167,"./helpers/isFinite":168,"./helpers/isPrimitive":169,"./helpers/mod":170,"./helpers/sign":171,dup:17,"es-to-primitive/es6":173,"function-bind":177,"is-regex":180}],166:[function(t,e,r){arguments[4][42][0].apply(r,arguments)},{"./es6":165,"./helpers/assign":167,dup:42}],167:[function(t,e,r){arguments[4][18][0].apply(r,arguments)},{dup:18}],168:[function(t,e,r){arguments[4][19][0].apply(r,arguments)},{dup:19}],169:[function(t,e,r){arguments[4][20][0].apply(r,arguments)},{dup:20}],170:[function(t,e,r){arguments[4][21][0].apply(r,arguments)},{dup:21}],171:[function(t,e,r){arguments[4][22][0].apply(r,arguments)},{dup:22}],172:[function(t,e,r){arguments[4][23][0].apply(r,arguments)},{"./helpers/isPrimitive":174,dup:23,"is-callable":178}],173:[function(t,e,r){arguments[4][24][0].apply(r,arguments)},{"./helpers/isPrimitive":174,dup:24,"is-callable":178,"is-date-object":179,"is-symbol":181}],174:[function(t,e,r){arguments[4][20][0].apply(r,arguments)},{dup:20}],175:[function(t,e,r){arguments[4][26][0].apply(r,arguments)},{dup:26}],176:[function(t,e,r){arguments[4][27][0].apply(r,arguments)},{dup:27}],177:[function(t,e,r){arguments[4][28][0].apply(r,arguments)},{"./implementation":176,dup:28}],178:[function(t,e,r){arguments[4][29][0].apply(r,arguments)},{dup:29}],179:[function(t,e,r){arguments[4][30][0].apply(r,arguments)},{dup:30}],180:[function(t,e,r){arguments[4][31][0].apply(r,arguments)},{dup:31}],181:[function(t,e,r){arguments[4][32][0].apply(r,arguments)},{dup:32}],182:[function(t,e,r){arguments[4][33][0].apply(r,arguments)},{"./isArguments":183,dup:33}],183:[function(t,e,r){arguments[4][34][0].apply(r,arguments)},{dup:34}],184:[function(t,e,r){"use strict";var n=t("./implementation");e.exports=function t(){return typeof String.prototype.padStart==="function"?String.prototype.padStart:n}},{"./implementation":161}],185:[function(t,e,r){"use strict";var n=t("./polyfill");var i=t("define-properties");e.exports=function t(){var e=n();i(String.prototype,{padStart:e},{padStart:function(){return String.prototype.padStart!==e}});return e}},{"./polyfill":184,"define-properties":163}],186:[function(t,e,r){"use strict";var n=t("function-bind");var i=n.call(Function.call,String.prototype.replace);var o=/^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]*/;e.exports=function t(){return i(this,o,"")}},{"function-bind":191}],187:[function(t,e,r){"use strict";var n=t("function-bind");var i=t("define-properties");var o=t("./implementation");var p=t("./polyfill");var u=t("./shim");var a=n.call(Function.call,p());i(a,{getPolyfill:p,implementation:o,shim:u});e.exports=a},{"./implementation":186,"./polyfill":194,"./shim":195,"define-properties":188,"function-bind":191}],188:[function(t,e,r){arguments[4][15][0].apply(r,arguments)},{dup:15,foreach:189,"object-keys":192}],189:[function(t,e,r){arguments[4][26][0].apply(r,arguments)},{dup:26}],190:[function(t,e,r){arguments[4][27][0].apply(r,arguments)},{dup:27}],191:[function(t,e,r){arguments[4][28][0].apply(r,arguments)},{"./implementation":190,dup:28}],192:[function(t,e,r){arguments[4][33][0].apply(r,arguments)},{"./isArguments":193,dup:33}],193:[function(t,e,r){arguments[4][34][0].apply(r,arguments)},{dup:34}],194:[function(t,e,r){"use strict";var n=t("./implementation");e.exports=function t(){if(!String.prototype.trimLeft){return n}var e="\u200b";if(e.trimLeft()!==e){return n}return String.prototype.trimLeft}},{"./implementation":186}],195:[function(t,e,r){"use strict";var n=t("define-properties");var i=t("./polyfill");e.exports=function t(){var e=i();n(String.prototype,{trimLeft:e},{trimLeft:function(){return String.prototype.trimLeft!==e}});return e}},{"./polyfill":194,"define-properties":188}],196:[function(t,e,r){"use strict";var n=t("function-bind");var i=n.call(Function.call,String.prototype.replace);var o=/[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]*$/;e.exports=function t(){return i(this,o,"")}},{"function-bind":201}],197:[function(t,e,r){arguments[4][187][0].apply(r,arguments)},{"./implementation":196,"./polyfill":204,"./shim":205,"define-properties":198,dup:187,"function-bind":201}],198:[function(t,e,r){arguments[4][15][0].apply(r,arguments)},{dup:15,foreach:199,"object-keys":202}],199:[function(t,e,r){arguments[4][26][0].apply(r,arguments)},{dup:26}],200:[function(t,e,r){arguments[4][27][0].apply(r,arguments)},{dup:27}],201:[function(t,e,r){arguments[4][28][0].apply(r,arguments)},{"./implementation":200,dup:28}],202:[function(t,e,r){arguments[4][33][0].apply(r,arguments)},{"./isArguments":203,dup:33}],203:[function(t,e,r){arguments[4][34][0].apply(r,arguments)},{dup:34}],204:[function(t,e,r){"use strict";var n=t("./implementation");e.exports=function t(){if(!String.prototype.trimRight){return n}var e="\u200b";if(e.trimRight()!==e){return n}return String.prototype.trimRight}},{"./implementation":196}],205:[function(t,e,r){"use strict";var n=t("define-properties");var i=t("./polyfill");e.exports=function t(){var e=i();n(String.prototype,{trimRight:e},{trimRight:function(){return String.prototype.trimRight!==e}});return e}},{"./polyfill":204,"define-properties":198}],206:[function(t,e,r){"use strict";e.exports=t("./es7-shim").shim()},{"./es7-shim":12}]},{},[206]);
//# sourceMappingURL=dist/es7-shim.map

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = options.status === undefined ? 200 : options.status
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);

/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * @copyright 2017 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?b(exports):'function'==typeof define&&false?define(['exports'],b):b(a.AbortControllerShim={})})(this,function(a){'use strict';function b(a){var b=A.get(a);return console.assert(null!=b,'\'this\' is expected an Event object, but got',a),b}function c(a,b){A.set(this,{eventTarget:a,event:b,eventPhase:2,currentTarget:a,canceled:!1,stopped:!1,passiveListener:null,timeStamp:b.timeStamp||Date.now()}),Object.defineProperty(this,'isTrusted',{value:!1,enumerable:!0});for(var c,e=Object.keys(b),f=0;f<e.length;++f)c=e[f],c in this||Object.defineProperty(this,c,d(c))}function d(a){return{get:function(){return b(this).event[a]},set:function(c){b(this).event[a]=c},configurable:!0,enumerable:!0}}function e(a){return{value:function(){var c=b(this).event;return c[a].apply(c,arguments)},configurable:!0,enumerable:!0}}function f(a,b){function c(b,c){a.call(this,b,c)}var f=Object.keys(b);if(0===f.length)return a;c.prototype=Object.create(a.prototype,{constructor:{value:c,configurable:!0,writable:!0}});for(var g,h=0;h<f.length;++h)if(g=f[h],!(g in a.prototype)){var i=Object.getOwnPropertyDescriptor(b,g),j='function'==typeof i.value;Object.defineProperty(c.prototype,g,j?e(g):d(g))}return c}function g(a){if(null==a||a===Object.prototype)return c;var b=B.get(a);return null==b&&(b=f(g(Object.getPrototypeOf(a)),a),B.set(a,b)),b}function h(a,b){var c=g(Object.getPrototypeOf(b));return new c(a,b)}function i(a){return b(a).stopped}function j(a,c){b(a).eventPhase=c}function k(a,c){b(a).currentTarget=c}function l(a,c){b(a).passiveListener=c}function m(a){return null!==a&&'object'===('undefined'==typeof a?'undefined':v(a))}function n(a){var b=C.get(a);return console.assert(null!=b,'\'this\' is expected an EventTarget object, but got',a),b||new Map}function o(a){return{get:function(){for(var b=n(this),c=b.get(a);null!=c;){if(c.listenerType===F)return c.listener;c=c.next}return null},set:function(b){'function'==typeof b||m(b)||(b=null);for(var c=n(this),d=null,e=c.get(a);null!=e;)e.listenerType===F?null===d?null===e.next?c.delete(a):c.set(a,e.next):d.next=e.next:d=e,e=e.next;if(null!==b){var f={listener:b,listenerType:F,passive:!1,once:!1,next:null};null===d?c.set(a,f):d.next=f}},configurable:!0,enumerable:!0}}function p(a,b){Object.defineProperty(a,'on'+b,o(b))}function q(a){function b(){r.call(this)}b.prototype=Object.create(r.prototype,{constructor:{value:b,configurable:!0,writable:!0}});for(var c=0;c<a.length;++c)p(b.prototype,a[c]);return b}function r(){if(this instanceof r)return void C.set(this,new Map);if(1===arguments.length&&Array.isArray(arguments[0]))return q(arguments[0]);if(0<arguments.length){for(var a=Array(arguments.length),b=0;b<arguments.length;++b)a[b]=arguments[b];return q(a)}throw new TypeError('Cannot call a class as a function')}function s(){var a=Object.create(H.prototype);return r.call(a),G.set(a,!1),a}function t(a){!1!==G.get(a)||(G.set(a,!0),a.dispatchEvent({type:'abort'}))}function u(a){var b=I.get(a);if(null==b)throw new TypeError('Expected \'this\' to be an \'AbortController\' object, but got '+(null===a?'null':'undefined'==typeof a?'undefined':v(a)));return b}var v='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a},w=function(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')},x=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),y=function(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)},z=function(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a},A=new WeakMap,B=new WeakMap;c.prototype={get type(){return b(this).event.type},get target(){return b(this).eventTarget},get currentTarget(){return b(this).currentTarget},composedPath:function(){var a=b(this).currentTarget;return null==a?[]:[a]},get NONE(){return 0},get CAPTURING_PHASE(){return 1},get AT_TARGET(){return 2},get BUBBLING_PHASE(){return 3},get eventPhase(){return b(this).eventPhase},stopPropagation:function(){var a=b(this);'function'==typeof a.event.stopPropagation&&a.event.stopPropagation()},stopImmediatePropagation:function(){var a=b(this);a.stopped=!0,'function'==typeof a.event.stopImmediatePropagation&&a.event.stopImmediatePropagation()},get bubbles(){return!!b(this).event.bubbles},get cancelable(){return!!b(this).event.cancelable},preventDefault:function(){var a=b(this);return null==a.passiveListener?void(!a.event.cancelable||(a.canceled=!0,'function'==typeof a.event.preventDefault&&a.event.preventDefault())):void console.warn('Event#preventDefault() was called from a passive listener:',a.passiveListener)},get defaultPrevented(){return b(this).canceled},get composed(){return!!b(this).event.composed},get timeStamp(){return b(this).timeStamp}},Object.defineProperty(c.prototype,'constructor',{value:c,configurable:!0,writable:!0}),'undefined'!=typeof window&&'undefined'!=typeof window.Event&&(Object.setPrototypeOf(c.prototype,window.Event.prototype),B.set(window.Event.prototype,c));var C=new WeakMap,D=1,E=2,F=3;r.prototype={addEventListener:function(a,b,c){if(null==b)return!1;if('function'!=typeof b&&!m(b))throw new TypeError('\'listener\' should be a function or an object.');var d=n(this),e=m(c),f=e?!!c.capture:!!c,g=f?D:E,h={listener:b,listenerType:g,passive:e&&!!c.passive,once:e&&!!c.once,next:null},i=d.get(a);if(void 0===i)return d.set(a,h),!0;for(var j=null;null!=i;){if(i.listener===b&&i.listenerType===g)return!1;j=i,i=i.next}return j.next=h,!0},removeEventListener:function(a,b,c){if(null==b)return!1;for(var d=n(this),e=m(c)?!!c.capture:!!c,f=e?D:E,g=null,h=d.get(a);null!=h;){if(h.listener===b&&h.listenerType===f)return null===g?null===h.next?d.delete(a):d.set(a,h.next):g.next=h.next,!0;g=h,h=h.next}return!1},dispatchEvent:function(a){if(null==a||'string'!=typeof a.type)throw new TypeError('"event.type" should be a string.');var b=n(this),c=a.type,d=b.get(c);if(null==d)return!0;for(var e=h(this,a),f=null;null!=d&&(d.once?null===f?null===d.next?b.delete(c):b.set(c,d.next):f.next=d.next:f=d,l(e,d.passive?d.listener:null),'function'==typeof d.listener?d.listener.call(this,e):d.listenerType!==F&&'function'==typeof d.listener.handleEvent&&d.listener.handleEvent(e),!i(e));)d=d.next;return l(e,null),j(e,0),k(e,null),!e.defaultPrevented}},Object.defineProperty(r.prototype,'constructor',{value:r,configurable:!0,writable:!0}),'undefined'!=typeof window&&'undefined'!=typeof window.EventTarget&&Object.setPrototypeOf(r.prototype,window.EventTarget.prototype);var G=new WeakMap,H=function(a){function b(){w(this,b);var a=z(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));throw new TypeError('AbortSignal cannot be constructed directly')}return y(b,a),x(b,[{key:'aborted',get:function(){var a=G.get(this);if('boolean'!=typeof a)throw new TypeError('Expected \'this\' to be an \'AbortSignal\' object, but got '+(null===this?'null':v(this)));return!!a}}]),b}(r);Object.defineProperties(H.prototype,{aborted:{enumerable:!0}}),'function'==typeof Symbol&&'symbol'===v(Symbol.toStringTag)&&Object.defineProperty(H.prototype,Symbol.toStringTag,{configurable:!0,value:'AbortSignal'}),p(H.prototype,'abort');var I=new WeakMap,J=function(){function a(){w(this,a),I.set(this,s())}return x(a,[{key:'abort',value:function(){var a=u(this);null!=a&&t(a)}},{key:'signal',get:function(){return u(this)}}]),a}();if(Object.defineProperties(J.prototype,{signal:{enumerable:!0},abort:{enumerable:!0}}),'function'==typeof Symbol&&'symbol'===v(Symbol.toStringTag)&&Object.defineProperty(J.prototype,Symbol.toStringTag,{configurable:!0,value:'AbortController'}),a.default=J,a.AbortController=J,a.AbortSignal=H,Object.defineProperty(a,'__esModule',{value:!0}),'undefined'==typeof module&&'undefined'==typeof define){const a=Function('return this')();'undefined'==typeof a.AbortController&&(a.AbortController=J,a.AbortSignal=H)}});
//# sourceMappingURL=abort-controller.umd.js.map

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
if(!Promise.prototype['finally']){Promise.prototype['finally'] = function(callback) {
                          var constructor = this.constructor;
                          return this.then(
                            function(value) {
                              return constructor.resolve(callback()).then(function() {
                                return value;
                              });
                            },
                            function(reason) {
                              return constructor.resolve(callback()).then(function() {
                                return constructor.reject(reason);
                              });
                            }
                          );
                    };}
                (function(){
                    var _fetch = fetch;
                    window.fetch = (...args) => Promise.resolve(_fetch(...args));
                })();
            