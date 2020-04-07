/*!
 * 
 *   bulgarian-control-numbers v1.0.2
 *   undefined
 * 
 *   Copyright (c) 2020 Petar Petrov (https://github.com/petarov)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 * 
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.BGCN=t():e.BGCN=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){for(var n,r=0;r<t.length;r++)(n=t[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}n.r(t);var o=[21,19,17,13,11,9,7,3,1],i=function(){function e(t){var n=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(this,"isValid",(function(){if(10!==n._value.length)return!1;for(var e=0,t=0;t<n._value.length-1;t++)e+=~~n._value.charAt(t)*o[t];return e%10==~~n._value.charAt(9)})),"string"!=typeof t)throw new Error("".concat(t," is not of type string!"));this._value=t}return t=e,(n=[{key:"value",get:function(){return this._value}}])&&r(t.prototype,n),i&&r(t,i),e;var t,n,i}();function u(e,t){for(var n,r=0;r<t.length;r++)(n=t[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=[2,4,8,5,10,9,7,3,6],c=function(){function e(t){var n=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"_parse",(function(){n._gender=0==~~n._value.charAt(8)%2?"m":"f";var e=~~n._value.substr(4,2),t=~~n._value.substr(2,2),r=~~n._value.substr(0,2);40<t?(r+=2e3,t-=40):20<t?(r+=1800,t-=20):r+=1900,n._birthday={year:r,month:t,day:e}})),a(this,"isValid",(function(){for(var e=0,t=0;t<n._value.length-1;t++)e+=~~n._value.charAt(t)*f[t];var r=e%11;return(r=10>r?r:0)==~~n._value.charAt(9)})),"string"!=typeof t)throw new Error("".concat(t," is not of type string!"));if(10!==t.length)throw new Error("".concat(t," is not of size 10!"));this._value=t,this._gender="",this._birthday={},this._parse()}return t=e,(n=[{key:"value",get:function(){return this._value}},{key:"gender",get:function(){return this._gender}},{key:"birthday",get:function(){return this._birthday}}])&&u(t.prototype,n),r&&u(t,r),e;var t,n,r}();function l(e,t){for(var n,r=0;r<t.length;r++)(n=t[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}var s=[1,2,3,4,5,6,7,8],b=[3,4,5,6,7,8,9,10],h=[2,7,3,5],v=[4,9,5,7],p=function(){function e(t){var n=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(this,"isValid",(function(){for(var e=[],t=0;t<n._value.length;t++)e[t]=~~n._value.charAt(t);for(var r=0,o=0;8>o;o++)r+=e[o]*s[o];var i=r%11;if(9<i){r=0;for(var u=0;8>u;u++)r+=e[u]*b[u];i=9<(i=r%11)?0:i}if(9===n._value.length)return i===e[8];e[8]=i,r=0;for(var a=8;12>a;a++)r+=e[a]*h[a-8];if(9<(i=r%11)){r=0;for(var f=8;12>f;f++)r+=e[f]*v[f-8];i=9<(i=r%11)?0:i}return i===e[12]})),"string"!=typeof t)throw new Error("".concat(t," is not of type string!"));if(2<t.length&&"BG"==t.substr(0,2)&&(t=t.substring(2)),9!==t.length&&13!==t.length)throw new Error("".concat(t," is not of size 9 or 13!"));this._value=t}return t=e,(n=[{key:"value",get:function(){return this._value}}])&&l(t.prototype,n),r&&l(t,r),e;var t,n,r}();function y(e,t){for(var n,r=0;r<t.length;r++)(n=t[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(){function e(t){var n=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),g(this,"_modulo",(function(e,t){for(var n;e.length>10;)n=e.substring(0,10),e=n%t+e.substring(10);return e%t})),g(this,"isValid",(function(){for(var e,t=n._value.substring(4)+n._value.substr(0,4),r=[],o=0;o<t.length;o++)e=t.charAt(o),r[o]="a"<=e&&"z">=e?e.charCodeAt(0)-97+10:"A"<=e&&"Z">=e?e.charCodeAt(0)-65+10:e;return 1===n._modulo(r.join(""),97)})),"string"!=typeof t)throw new Error("".concat(t," is not of type string!"));if(22!==(t=t.replace(/\s/g,"")).length)throw new Error("".concat(t," is not of size ").concat(22,"!"));this._value=t,this._bic="".concat(t.substr(4,4),"BGSF"),this._accountNo=t.substring(14)}return t=e,(n=[{key:"value",get:function(){return this._value}},{key:"bic",get:function(){return this._bic}},{key:"accountNo",get:function(){return this._accountNo}}])&&y(t.prototype,n),r&&y(t,r),e;var t,n,r}();function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)};_(w,"personalNumber",(function(e){return new i(e)})),_(w,"pn",(function(e){return w.personalNumber(e)})),_(w,"egn",(function(e){return new c(e)})),_(w,"bulstat",(function(e){return"string"==typeof e&&10===e.length?new c(e):new p(e)})),_(w,"iban",(function(e){return new d(e)}));t.default=w}])}));