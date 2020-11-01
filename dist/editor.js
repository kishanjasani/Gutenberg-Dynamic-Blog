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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/latest-post/edit.js":
/*!****************************************!*\
  !*** ./src/blocks/latest-post/edit.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /var/lib/docker/volumes/optionpanelgutenlocal_htdocs/_data/htdocs/wp-content/plugins/Gutenberg-Dynamic-Blog/src/blocks/latest-post/edit.js: Support for the experimental syntax 'classProperties' isn't currently enabled (9:24):\n\n\u001b[0m \u001b[90m  7 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  8 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mLatestPostsEdit\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mComponent\u001b[39m {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  9 | \u001b[39m\tonChangeNumberOfPosts \u001b[33m=\u001b[39m numberOfPosts \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m\t                      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 10 | \u001b[39m\t\t\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops\u001b[33m.\u001b[39msetAttributes({ numberOfPosts })\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 11 | \u001b[39m\t}\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 12 | \u001b[39m\u001b[0m\n\nAdd @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-class-properties (https://git.io/vb4yQ) to the 'plugins' section to enable parsing.\n    at Object._raise (/var/lib/docker/volumes/optionpanelgutenlocal_htdocs/_data/htdocs/wp-content/plugins/Gutenberg-Dynamic-Blog/node_modules/@babel/parser/lib/index.js:766:17)\n    at Object.raiseWithData (/var/lib/docker/volumes/optionpanelgutenlocal_htdocs/_data/htdocs/wp-content/plugins/Gutenberg-Dynamic-Blog/node_modules/@babel/parser/lib/index.js:759:17)\n    at Object.expectPlugin (/var/lib/docker/volumes/optionpanelgutenlocal_htdocs/_data/htdocs/wp-content/plugins/Gutenberg-Dynamic-Blog/node_modules/@babel/parser/lib/index.js:8971:18)\n    at Object.parseClassProperty (/var/lib/docker/volumes/optionpanelgutenlocal_htdocs/_data/htdocs/wp-content/plugins/Gutenberg-Dynamic-Blog/node_modules/@babel/parser/lib/index.js:12455:12)\n    at Object.pushClassProperty (/var/lib/docker/volumes/optionpanelgutenlocal_htdocs/_data/htdocs/wp-content/plugins/Gutenberg-Dynamic-Blog/node_modules/@babel/parser/lib/index.js:12419:30)\n    at Object.parseClassMemberWithIsStatic (/var/lib/docker/volumes/optionpanelgutenlocal_htdocs/_data/htdocs/wp-content/plugins/Gutenberg-Dynamic-Blog/node_modules/@babel/parser/lib/index.js:12352:14)\n    at Object.parseClassMember (/var/lib/docker/volumes/optionpanelgutenlocal_htdocs/_data/htdocs/wp-content/plugins/Gutenberg-Dynamic-Blog/node_modules/@babel/parser/lib/index.js:12289:10)\n    at /var/lib/docker/volumes/optionpanelgutenlocal_htdocs/_data/htdocs/wp-content/plugins/Gutenberg-Dynamic-Blog/node_modules/@babel/parser/lib/index.js:12241:14\n    at Object.withTopicForbiddingContext (/var/lib/docker/volumes/optionpanelgutenlocal_htdocs/_data/htdocs/wp-content/plugins/Gutenberg-Dynamic-Blog/node_modules/@babel/parser/lib/index.js:11272:14)\n    at Object.parseClassBody (/var/lib/docker/volumes/optionpanelgutenlocal_htdocs/_data/htdocs/wp-content/plugins/Gutenberg-Dynamic-Blog/node_modules/@babel/parser/lib/index.js:12218:10)\n    at Object.parseClass (/var/lib/docker/volumes/optionpanelgutenlocal_htdocs/_data/htdocs/wp-content/plugins/Gutenberg-Dynamic-Blog/node_modules/@babel/parser/lib/index.js:12193:22)\n    at Object.parseStatementContent (/var/lib/docker/volumes/optionpanelgutenlocal_htdocs/_data/htdocs/wp-content/plugins/Gutenberg-Dynamic-Blog/node_modules/@babel/parser/lib/index.js:11473:21)\n    at Object.parseStatement (/var/lib/docker/volumes/optionpanelgutenlocal_htdocs/_data/htdocs/wp-content/plugins/Gutenberg-Dynamic-Blog/node_modules/@babel/parser/lib/index.js:11431:17)\n    at Object.parseBlockOrModuleBlockBody (/var/lib/docker/volumes/optionpanelgutenlocal_htdocs/_data/htdocs/wp-content/plugins/Gutenberg-Dynamic-Blog/node_modules/@babel/parser/lib/index.js:12013:25)\n    at Object.parseBlockBody (/var/lib/docker/volumes/optionpanelgutenlocal_htdocs/_data/htdocs/wp-content/plugins/Gutenberg-Dynamic-Blog/node_modules/@babel/parser/lib/index.js:11999:10)\n    at Object.parseTopLevel (/var/lib/docker/volumes/optionpanelgutenlocal_htdocs/_data/htdocs/wp-content/plugins/Gutenberg-Dynamic-Blog/node_modules/@babel/parser/lib/index.js:11362:10)\n    at Object.parse (/var/lib/docker/volumes/optionpanelgutenlocal_htdocs/_data/htdocs/wp-content/plugins/Gutenberg-Dynamic-Blog/node_modules/@babel/parser/lib/index.js:13045:10)\n    at parse (/var/lib/docker/volumes/optionpanelgutenlocal_htdocs/_data/htdocs/wp-content/plugins/Gutenberg-Dynamic-Blog/node_modules/@babel/parser/lib/index.js:13098:38)\n    at parser (/var/lib/docker/volumes/optionpanelgutenlocal_htdocs/_data/htdocs/wp-content/plugins/Gutenberg-Dynamic-Blog/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/var/lib/docker/volumes/optionpanelgutenlocal_htdocs/_data/htdocs/wp-content/plugins/Gutenberg-Dynamic-Blog/node_modules/@babel/core/lib/transformation/normalize-file.js:99:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/var/lib/docker/volumes/optionpanelgutenlocal_htdocs/_data/htdocs/wp-content/plugins/Gutenberg-Dynamic-Blog/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/var/lib/docker/volumes/optionpanelgutenlocal_htdocs/_data/htdocs/wp-content/plugins/Gutenberg-Dynamic-Blog/node_modules/@babel/core/lib/transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (/var/lib/docker/volumes/optionpanelgutenlocal_htdocs/_data/htdocs/wp-content/plugins/Gutenberg-Dynamic-Blog/node_modules/gensync/index.js:254:32)\n    at /var/lib/docker/volumes/optionpanelgutenlocal_htdocs/_data/htdocs/wp-content/plugins/Gutenberg-Dynamic-Blog/node_modules/gensync/index.js:266:13\n    at async.call.result.err.err (/var/lib/docker/volumes/optionpanelgutenlocal_htdocs/_data/htdocs/wp-content/plugins/Gutenberg-Dynamic-Blog/node_modules/gensync/index.js:216:11)");

/***/ }),

/***/ "./src/blocks/latest-post/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/latest-post/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/latest-post/edit.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_edit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])("mytheme-blocks/latest-post", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Latest Posts", "mytheme-blocks"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Block showing latest posts", "mytheme-blocks"),
  icon: "admin-post",
  category: "mytheme-category",
  edit: _edit__WEBPACK_IMPORTED_MODULE_0___default.a,
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_latest_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/latest-post */ "./src/blocks/latest-post/index.js");


/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["blocks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["i18n"];

/***/ })

/******/ });
//# sourceMappingURL=editor.js.map