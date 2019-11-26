/**
 * @marketto/diacritic-remover 1.0.2
 * Copyright (c) 2019, Marco Ricupero <marco.ricupero@gmail.com>
 * License: MIT
 * ============================================================
 * I18N_ALL use material from Wikipedia
 * Article: https://en.wikipedia.org/wiki/Diacritic
 * License: CC-BY-SA 3.0
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var t=function(r,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])})(r,n)};function r(r,n){function e(){this.constructor=r}t(r,n),r.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}function n(t){return"string"==typeof t}var e=function(){function t(){}return t.prototype.get=function(t,r,e){return n(r)&&1===r.length?this.diacriticTrap(t,r):Reflect.get(t,r,e)},t.prototype.has=function(t,r){return n(r)&&1===r.length||Reflect.has(t,r)},t.prototype.diacriticTrap=function(t,r){},t}(),i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.diacriticTrap=function(r,e){t.prototype.diacriticTrap.call(this,r,e);var i=r.isUpperCase(e),o=e.toLowerCase(),c=Object.keys(r.dictionary).find((function(t){return n(r.dictionary[t])&&r.dictionary[t].includes(o)}));return i&&c?c.toUpperCase():c||e},e}(e),o=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return r(n,t),n.prototype.diacriticTrap=function(r,n){t.prototype.diacriticTrap.call(this,r,n);var e=r.dictionary[n.toLowerCase()];return e?r.isUpperCase(n)?e.toUpperCase():e:n},n}(e),c=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return r(n,t),n.prototype.diacriticTrap=function(r,n){t.prototype.diacriticTrap.call(this,r,n);var e=r.dictionary[n.toLowerCase()];return e?e+e.toUpperCase():n},n}(e),a=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return r(n,t),n.prototype.diacriticTrap=function(r,n){t.prototype.diacriticTrap.call(this,r,n);var e=r.dictionary[n.toLowerCase()],i="";return e&&(i=r.isUpperCase(n)?e.toUpperCase():e),new RegExp("["+n+i+"]","u")},n}(e),p=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return r(n,t),n.prototype.diacriticTrap=function(r,n){return t.prototype.diacriticTrap.call(this,r,n),new RegExp("["+n+(r.insensitiveMatcher[n]||"")+"]","ui")},n}(e),u=function(){function t(t){var r=t.reduce((function(t,r){return Object.entries(r).forEach((function(r){var e=r[0],i=r[1];if(n(i))if(e in t){var o=i.split("").filter((function(r){return!t[e].includes(r)})).join("");t[e]+=o}else t[e]=i})),t}),{});this.dictionary=Object.freeze(r),this.matcher=new Proxy(this,new o),this.insensitiveMatcher=new Proxy(this,new c),this.validator=new Proxy(this,new a),this.insensitiveValidator=new Proxy(this,new p)}return t.prototype.matcherBy=function(t){return function(){for(var t=0,r=0,n=arguments.length;r<n;r++)t+=arguments[r].length;var e=Array(t),i=0;for(r=0;r<n;r++)for(var o=arguments[r],c=0,a=o.length;c<a;c++,i++)e[i]=o[c];return e}(Object.entries(this.dictionary).filter((function(r){var n=r[0];return r[1]&&t.test(n)})).map((function(t){return t[1]})),Object.entries(this.dictionary).filter((function(r){var n=r[0];return r[1]&&t.test(n.toUpperCase())})).map((function(t){return t[1].toUpperCase()}))).join("")},t.prototype.replace=function(t){var r=this;return t.replace(/./g,(function(t){return r[t]}))},t.prototype.isUpperCase=function(t){return void 0===t&&(t=""),t.toUpperCase()===t},t.prototype.isLowerCase=function(t){return void 0===t&&(t=""),t.toLowerCase()===t},t}(),s={a:"áäâàåÄąāãă",e:"éèêëěÊęėēё",i:"íîïi̇řìįī",o:"óôöòøōõơ",u:"úûüùůŭųūư",y:"ýÿŷỳ",n:"ñňŋņń",l:"ḷŀłļĺľ",h:"ḥĥȟħ",c:"çčćĉĊ",g:"ğĝǧģĠġ",s:"şšŝṣșſś","у":"ў","и":"йѝ","е":"ё",d:"đďðḏ",z:"žŻźż",t:"ťțțṭ",w:"ẅŵẃẁ",ae:"æ",ss:"ß","α":"ά","ε":"έ","η":"ή","ι":"ίΐϊ","ο":"ό","υ":"ύΰϋ","ω":"ώ",j:"ĵ",oe:"œ","":"ʰ'ʼ·׳",ii:"î",k:"ķ","к":"ќ","г":"ѓґ",ij:"ĳ",r:"ŕ","і":"ї"},f=function(t){function n(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var e=t.call(this,r.length?r:[s])||this;return Object.defineProperty(e,"dictionary",{enumerable:!1,configurable:!1}),new Proxy(e,new i)}return r(n,t),n}(u);export default f;
//# sourceMappingURL=diacritic-remover.es.js.map
