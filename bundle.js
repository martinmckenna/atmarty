/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tingle = __webpack_require__(1);

var tingle = _interopRequireWildcard(_tingle);

__webpack_require__(2);

var _modal = __webpack_require__(3);

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var date = new Date();
var yearOfBirth = 1994;

document.getElementById('year').innerText = date.getFullYear();

var age = date.getFullYear() - yearOfBirth;

// decrease the age if september hasn't happened yet
if (date.getMonth() < 9) {
    age = age - 1;
}

// put the age on the page
document.getElementById('age').innerText = age;

var elementSelectors = ['myreads', 'readables', 'contactbook', 'crud'];

var myReads = document.getElementById(elementSelectors[0]);
var readables = document.getElementById(elementSelectors[1]);
var contactBook = document.getElementById(elementSelectors[2]);
var crud = document.getElementById(elementSelectors[3]);

var myReadsModal = new tingle.modal(_modal2.default);
var readablesModal = new tingle.modal(_modal2.default);
var contactBookModal = new tingle.modal(_modal2.default);
var crudModal = new tingle.modal(_modal2.default);

var buttons = [myReads, readables, contactBook, crud];
var modals = [myReadsModal, readablesModal, contactBookModal, crudModal];

var myReadsContent = '<h2>My Reads <a target="_blank" href="https://github.com/martinmckenna/udacity-my-reads">(GitHub)</a></h2><p>My Reads is a library app that allows you to move books between bookshelves (Read, currently reading, and want to read). Users can switch books between shelves by clicking on the book and selecting which shelf they would like to move it to. Users may also search for new books to add to either shelf.</p><p>This project was developed as a coursework assignment for Udacity, built with React and Typescript</p>';

var readablesContent = '<h2>Readables <a target="_blank" href="https://github.com/martinmckenna/readables">(GitHub)</a></h2><p>Readables is a Reddit clone that allows for basic social networking features, such as adding, deleting, and editing, filtering, and voting on posts. Each post is assigned to a category and can be viewed in their own specific category view.</p><p>This project was developed as a coursework assignment for Udacity, built with React, Redux, and Typescript</p>';

var contactBookContent = '<h2>Contact Book <a target="_blank" href="https://github.com/martinmckenna/Contact-Book-App">(GitHub)</a></h2><p>Contact Book is an online contact book - pretty simple. App supports adding, deleting, and editing contacts. Users can also search through entered contacts.</p><p>This project was built with React, Meteor.js, and MongoDB</p>';

var crudContent = '<h2>CRUD <a target="_blank" href="https://github.com/martinmckenna/crud">(GitHub)</a></h2><p>CRUD app is just a create, update, destroy app. Users may also search entries - pretty straightforward. Mainly built because I wanted to see how hard PHP/MySQL was.</p><p>This project was developed with PHP and MySQL</p>';

var contentArray = [myReadsContent, readablesContent, contactBookContent, crudContent];

modals.forEach(function (currentVal, index, array) {
    currentVal.setContent(contentArray[index]);
    buttons[index].addEventListener('click', function () {
        currentVal.open();
    });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(t,o){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (o),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=o():t.tingle=o()}(this,function(){function t(t){var o={onClose:null,onOpen:null,beforeOpen:null,beforeClose:null,stickyFooter:!1,footer:!1,cssClass:[],closeLabel:"Close",closeMethods:["overlay","button","escape"]};this.opts=r({},o,t),this.init()}function o(){this.modalBoxFooter&&(this.modalBoxFooter.style.width=this.modalBox.clientWidth+"px",this.modalBoxFooter.style.left=this.modalBox.offsetLeft+"px")}function e(){this.modal=document.createElement("div"),this.modal.classList.add("tingle-modal"),0!==this.opts.closeMethods.length&&this.opts.closeMethods.indexOf("overlay")!==-1||this.modal.classList.add("tingle-modal--noOverlayClose"),this.modal.style.display="none",this.opts.cssClass.forEach(function(t){"string"==typeof t&&this.modal.classList.add(t)},this),this.opts.closeMethods.indexOf("button")!==-1&&(this.modalCloseBtn=document.createElement("button"),this.modalCloseBtn.classList.add("tingle-modal__close"),this.modalCloseBtnIcon=document.createElement("span"),this.modalCloseBtnIcon.classList.add("tingle-modal__closeIcon"),this.modalCloseBtnIcon.innerHTML="×",this.modalCloseBtnLabel=document.createElement("span"),this.modalCloseBtnLabel.classList.add("tingle-modal__closeLabel"),this.modalCloseBtnLabel.innerHTML=this.opts.closeLabel,this.modalCloseBtn.appendChild(this.modalCloseBtnIcon),this.modalCloseBtn.appendChild(this.modalCloseBtnLabel)),this.modalBox=document.createElement("div"),this.modalBox.classList.add("tingle-modal-box"),this.modalBoxContent=document.createElement("div"),this.modalBoxContent.classList.add("tingle-modal-box__content"),this.modalBox.appendChild(this.modalBoxContent),this.opts.closeMethods.indexOf("button")!==-1&&this.modal.appendChild(this.modalCloseBtn),this.modal.appendChild(this.modalBox)}function s(){this.modalBoxFooter=document.createElement("div"),this.modalBoxFooter.classList.add("tingle-modal-box__footer"),this.modalBox.appendChild(this.modalBoxFooter)}function i(){this._events={clickCloseBtn:this.close.bind(this),clickOverlay:l.bind(this),resize:this.checkOverflow.bind(this),keyboardNav:n.bind(this)},this.opts.closeMethods.indexOf("button")!==-1&&this.modalCloseBtn.addEventListener("click",this._events.clickCloseBtn),this.modal.addEventListener("mousedown",this._events.clickOverlay),window.addEventListener("resize",this._events.resize),document.addEventListener("keydown",this._events.keyboardNav)}function n(t){this.opts.closeMethods.indexOf("escape")!==-1&&27===t.which&&this.isOpen()&&this.close()}function l(t){this.opts.closeMethods.indexOf("overlay")!==-1&&!d(t.target,"tingle-modal")&&t.clientX<this.modal.clientWidth&&this.close()}function d(t,o){for(;(t=t.parentElement)&&!t.classList.contains(o););return t}function a(){this.opts.closeMethods.indexOf("button")!==-1&&this.modalCloseBtn.removeEventListener("click",this._events.clickCloseBtn),this.modal.removeEventListener("mousedown",this._events.clickOverlay),window.removeEventListener("resize",this._events.resize),document.removeEventListener("keydown",this._events.keyboardNav)}function r(){for(var t=1;t<arguments.length;t++)for(var o in arguments[t])arguments[t].hasOwnProperty(o)&&(arguments[0][o]=arguments[t][o]);return arguments[0]}function h(){var t,o=document.createElement("tingle-test-transition"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in e)if(void 0!==o.style[t])return e[t]}var c=h();return t.prototype.init=function(){this.modal||(e.call(this),i.call(this),document.body.insertBefore(this.modal,document.body.firstChild),this.opts.footer&&this.addFooter())},t.prototype.destroy=function(){null!==this.modal&&(a.call(this),this.modal.parentNode.removeChild(this.modal),this.modal=null)},t.prototype.open=function(){var t=this;"function"==typeof t.opts.beforeOpen&&t.opts.beforeOpen(),this.modal.style.removeProperty?this.modal.style.removeProperty("display"):this.modal.style.removeAttribute("display"),document.body.classList.add("tingle-enabled"),this.setStickyFooter(this.opts.stickyFooter),this.modal.classList.add("tingle-modal--visible"),c?this.modal.addEventListener(c,function o(){"function"==typeof t.opts.onOpen&&t.opts.onOpen.call(t),t.modal.removeEventListener(c,o,!1)},!1):"function"==typeof t.opts.onOpen&&t.opts.onOpen.call(t),this.checkOverflow()},t.prototype.isOpen=function(){return!!this.modal.classList.contains("tingle-modal--visible")},t.prototype.close=function(){if("function"==typeof this.opts.beforeClose){var t=this.opts.beforeClose.call(this);if(!t)return}document.body.classList.remove("tingle-enabled"),this.modal.classList.remove("tingle-modal--visible");var o=this;c?this.modal.addEventListener(c,function t(){o.modal.removeEventListener(c,t,!1),o.modal.style.display="none","function"==typeof o.opts.onClose&&o.opts.onClose.call(this)},!1):(o.modal.style.display="none","function"==typeof o.opts.onClose&&o.opts.onClose.call(this))},t.prototype.setContent=function(t){"string"==typeof t?this.modalBoxContent.innerHTML=t:(this.modalBoxContent.innerHTML="",this.modalBoxContent.appendChild(t))},t.prototype.getContent=function(){return this.modalBoxContent},t.prototype.addFooter=function(){s.call(this)},t.prototype.setFooterContent=function(t){this.modalBoxFooter.innerHTML=t},t.prototype.getFooterContent=function(){return this.modalBoxFooter},t.prototype.setStickyFooter=function(t){this.isOverflow()||(t=!1),t?this.modalBox.contains(this.modalBoxFooter)&&(this.modalBox.removeChild(this.modalBoxFooter),this.modal.appendChild(this.modalBoxFooter),this.modalBoxFooter.classList.add("tingle-modal-box__footer--sticky"),o.call(this),this.modalBoxContent.style["padding-bottom"]=this.modalBoxFooter.clientHeight+20+"px"):this.modalBoxFooter&&(this.modalBox.contains(this.modalBoxFooter)||(this.modal.removeChild(this.modalBoxFooter),this.modalBox.appendChild(this.modalBoxFooter),this.modalBoxFooter.style.width="auto",this.modalBoxFooter.style.left="",this.modalBoxContent.style["padding-bottom"]="",this.modalBoxFooter.classList.remove("tingle-modal-box__footer--sticky")))},t.prototype.addFooterBtn=function(t,o,e){var s=document.createElement("button");return s.innerHTML=t,s.addEventListener("click",e),"string"==typeof o&&o.length&&o.split(" ").forEach(function(t){s.classList.add(t)}),this.modalBoxFooter.appendChild(s),s},t.prototype.resize=function(){console.warn("Resize is deprecated and will be removed in version 1.0")},t.prototype.isOverflow=function(){var t=window.innerHeight,o=this.modalBox.clientHeight;return o>=t},t.prototype.checkOverflow=function(){this.modal.classList.contains("tingle-modal--visible")&&(this.isOverflow()?this.modal.classList.add("tingle-modal--overflow"):this.modal.classList.remove("tingle-modal--overflow"),!this.isOverflow()&&this.opts.stickyFooter?this.setStickyFooter(!1):this.isOverflow()&&this.opts.stickyFooter&&(o.call(this),this.setStickyFooter(!0)))},{modal:t}});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var modalProperties = exports.modalProperties = {
    footer: true,
    stickyFooter: true,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: 'Close',
    cssClass: ['modal']
};

/***/ })
/******/ ]);