parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"oLA8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"];var t=e;exports.default=t;
},{}],"IVqa":[function(require,module,exports) {
"use strict";var r=t(require("../js/refs")),e=t(require("../js/colors"));function t(r){return r&&r.__esModule?r:{default:r}}function o(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}
},{"../js/refs":"clu1","../js/colors":"oLA8"}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");var s=e(require("./js/switch-color"));function e(s){return s&&s.__esModule?s:{default:s}}
},{"./sass/main.scss":"clu1","./js/switch-color":"IVqa"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-color-switch/src.d7e55403.js.map