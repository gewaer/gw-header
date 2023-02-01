module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bf1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1204":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5093":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "639f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "672a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_user_options_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1204");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_user_options_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_user_options_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8243":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_header_vue_vue_type_style_index_0_id_7f1994b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0bf1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_header_vue_vue_type_style_index_0_id_7f1994b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_header_vue_vue_type_style_index_0_id_7f1994b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "9268":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_companies_switcher_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("639f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_companies_switcher_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_companies_switcher_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "af9d":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAC3npUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHja7ZddktsgDMffOUWPgCSExHGwgZneoMfvH0Kcze52Z/rx0IeYCWBZSEI/4SSh//g+wjdcVCSGpOa55BxxpZIKV0w83q7bSDGtfl2yH+H+SR6uBwyRPDRz3/oVcn0ssLTlx7M82Lnt+Da0H9wNyvTMmGw934aEb3La96HsdTW92c79k5fPmO9hv7tPhmQ0hT3hwF1IIvo8vQgikCIVY0ZPAsfo51wlLYl+nrtwTd8l75q9y12sWy7PqQgxX2E/52jLST/P3crQ24jo4fnpgcnl4kPuxmg+Rr/trqaMTOWwN3XfyppB8UAqZS3LaLbS7BhnK2iOLZ4g1kDzQDsDFWJke1CiRpUG9TWedCLExJ0NI/PJsmQuxoXPBSXNRoMNeFoQB6sT1ARivmKh5bcsfyc5PDeCJhOMEVZ8aOEz4Z+0y9AYs3SJol+5Qlw8axphTHKzhxaA0Ng51ZXf1cKbuolvwAoI6kqzY4M1HjcTh9KjtmRxFuhpTCHejgZZ2waQIvhWBEMCAjGjmClTNGYjQh4dfCoiZ0l8gACpcqMwwEYkA47z9I01RkuXlW9ivFoAQnFQDGhwgAArJUX9WHLUUFXRFFQ1q6lr0Zolp6w5Z8vzHVVNLJlaNjO3YtXFk6tnN3cvXgsXwStMSy4WipdSaoXTCtMVqys0aj34kCMdeuTDDj/KUU+Uz5lOPfNpp5/lrI2bNBz/lpuF5q202qmjlHrq2nO37r30OlBrQ0YaOvKw4aOMelHbVJ+p0TtyX1OjTW0SS0vPHtQgNruboPk60ckMxDgRiNskgILmySw6pcST3GQWC+NQKIMa6YTTaBIDwdSJddDF7kHuS25B029x41+RCxPdvyAXJrpN7iO3T6i1ur5RZAGap3DmNMrAiw0K3St7nd9JfzyGvzXwMvQy9DL0MvQy9DL0MvT/GBr48YC/muEnkuSQ4bCBMzYAAAACYktHRAD/h4/MvwAAAAlwSFlzAAAFEwAABRMBWjvKTwAAAAd0SU1FB+MGDRM2Gzw3q0EAAAIMSURBVFjDrZg9SyNBGICfmCwGk/gJhwfHdhcucFpqK6J/wE5UbAT/gH9CrLUTBLW1sBWx0ebqiF/BIgiKhYTLFYH17rWS+5qdfXdmZsvNPs/Mu/PO+25AN8qscMQ9gnDPESuUCTiWeEL+uZ5YCgMvsfsf/P3apeQv2EvFC8KeL37diheEdR/8MJ1MQYdhG6LPKlhjKHMSQ6y5r+Aic/6CcGFDFKz3EoqKafwkQlxCNK7CQ5Fxt3cwoA7lgFuISiRKQcSrywpeuVPh79LxWdv0WCU4dt+mddU2rfvk8k4mfsfvLKpwacVfUvE97mJuUvE3xCEqQo0DI/6AWriaNs3hHydrh0OmdQ8WckgKfGEQ+M51+tnjKoiZZ4o6NaDLLd84oR0mOAUWOTe+g3MWc0XAOGYyt+mMTz+xpcrkLbfeosKZCi8IZ/nTraIsl7/LZi5FkdNceEE4VdY/ADZz4wVhU4ufc8ILwpyuj245C1qannvDGS8IG1n4Ki9egheq9pq8yohX5o+wav9B02v+gtC04Se88YIwkR6ihSDn70K6YDaIYDat4PTRIwogSCjzy7SCySB4iJg0h6gRrEVomAVjwQRjZsHnYIK6WRDuz4F+s6AbTNBN+xDapuedxz22bZ9Uoyyz71gRWuyzzKius6vS4CsfifnAJyJqxH9lSUKbLgkPPNPmkSZX/DCB3gDL/mt1oBj/BAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "dc6c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_app_switcher_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5093");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_app_switcher_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_app_switcher_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f49c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_notifications_vue_vue_type_style_index_0_id_47d14338_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fcd0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_notifications_vue_vue_type_style_index_0_id_47d14338_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gw_notifications_vue_vue_type_style_index_0_id_47d14338_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "GwAppSwitcher", function() { return /* reexport */ gw_app_switcher; });
__webpack_require__.d(__webpack_exports__, "GwCompaniesSwitcher", function() { return /* reexport */ gw_companies_switcher; });
__webpack_require__.d(__webpack_exports__, "GwNotifications", function() { return /* reexport */ gw_notifications; });
__webpack_require__.d(__webpack_exports__, "GwUserOptions", function() { return /* reexport */ gw_user_options; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"36a9e6e0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gw-app-switcher.vue?vue&type=template&id=1292016a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dropdown',{staticClass:"app-switcher",attrs:{"is-icon":false}},[_c('template',{slot:"btn"},[_c('span',{staticClass:"app-mode"},[_vm._v("Apps")]),_c('i',{staticClass:"fas fa-th"})]),_c('template',{slot:"body"},_vm._l((_vm.appsList),function(app){return _c('a',{key:("app-" + (app.id)),staticClass:"dropdown-item",attrs:{"href":app.url,"target":"_blank"}},[_c('span',[_vm._v(_vm._s(app.name))])])}),0)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/gw-app-switcher.vue?vue&type=template&id=1292016a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gw-app-switcher.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var gw_app_switchervue_type_script_lang_js_ = ({
  name: "GwAppSwitcher",
  props: {
    appsList: {
      type: Array,

      default() {
        return [];
      }

    }
  }
});
// CONCATENATED MODULE: ./src/components/gw-app-switcher.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_gw_app_switchervue_type_script_lang_js_ = (gw_app_switchervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/gw-app-switcher.vue?vue&type=style&index=0&lang=scss&
var gw_app_switchervue_type_style_index_0_lang_scss_ = __webpack_require__("dc6c");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/gw-app-switcher.vue






/* normalize component */

var component = normalizeComponent(
  components_gw_app_switchervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var gw_app_switcher = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"36a9e6e0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gw-companies-switcher.vue?vue&type=template&id=2089ab1b&
var gw_companies_switchervue_type_template_id_2089ab1b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"company-switcher"},[_c('multiselect',{attrs:{"disabled":!_vm.shouldActivateSwitcher,"allow-empty":false,"options":_vm.companies,"searchable":false,"show-labels":false,"value":_vm.branchData,"group-values":"branches","group-label":"name","label":"name"},on:{"select":function (company) { return _vm.$emit(company.rooftop ? 'rooftop' : 'select', company); }}})],1)}
var gw_companies_switchervue_type_template_id_2089ab1b_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/gw-companies-switcher.vue?vue&type=template&id=2089ab1b&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gw-companies-switcher.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * @NOTE value is used instead of v-model because we are reloading the page
 * and we do not need VueMultiselect to update anything for us.
 * See also: switchCompany()
 */
/* harmony default export */ var gw_companies_switchervue_type_script_lang_js_ = ({
  name: "GwCompaniesSwitcher",
  props: {
    companyData: {
      type: Object,
      required: true
    },
    branchData: {
      type: Object,
      required: true
    },
    companiesList: {
      type: Array,

      default() {
        return [];
      }

    }
  },

  data() {
    return {
      companies: []
    };
  },

  computed: {
    shouldActivateSwitcher() {
      return this.companiesList.length > 1 || this.companyData.branches && this.companyData.branches.length > 1;
    }

  },

  mounted() {
    this.companies = this.companiesList.map((company, index) => {
      if (index + 1 === this.companiesList.length) {
        return { ...company,
          branches: [...company.branches, { ...company.branches[0],
            id: parseInt(Math.random().toString().split(".")[1]),
            name: "All My Rooftops",
            rooftop: true
          }],
          rooftop: true
        };
      }

      return { ...company
      };
    });
  }

});
// CONCATENATED MODULE: ./src/components/gw-companies-switcher.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_gw_companies_switchervue_type_script_lang_js_ = (gw_companies_switchervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/gw-companies-switcher.vue?vue&type=style&index=0&lang=scss&
var gw_companies_switchervue_type_style_index_0_lang_scss_ = __webpack_require__("9268");

// CONCATENATED MODULE: ./src/components/gw-companies-switcher.vue






/* normalize component */

var gw_companies_switcher_component = normalizeComponent(
  components_gw_companies_switchervue_type_script_lang_js_,
  gw_companies_switchervue_type_template_id_2089ab1b_render,
  gw_companies_switchervue_type_template_id_2089ab1b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var gw_companies_switcher = (gw_companies_switcher_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"36a9e6e0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gw-notifications.vue?vue&type=template&id=47d14338&scoped=true&
var gw_notificationsvue_type_template_id_47d14338_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"notification-badge",on:{"click":function($event){$event.preventDefault();return _vm.$emit('toggle-notifications')}}},[(_vm.count)?_c('span',{staticClass:"notification-bubble"}):_vm._e(),_c('i',{staticClass:"fas fa-bell"})])}
var gw_notificationsvue_type_template_id_47d14338_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/gw-notifications.vue?vue&type=template&id=47d14338&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gw-notifications.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var gw_notificationsvue_type_script_lang_js_ = ({
  name: "GwNotifications",
  props: {
    count: {
      type: Number,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/gw-notifications.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_gw_notificationsvue_type_script_lang_js_ = (gw_notificationsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/gw-notifications.vue?vue&type=style&index=0&id=47d14338&lang=scss&scoped=true&
var gw_notificationsvue_type_style_index_0_id_47d14338_lang_scss_scoped_true_ = __webpack_require__("f49c");

// CONCATENATED MODULE: ./src/components/gw-notifications.vue






/* normalize component */

var gw_notifications_component = normalizeComponent(
  components_gw_notificationsvue_type_script_lang_js_,
  gw_notificationsvue_type_template_id_47d14338_scoped_true_render,
  gw_notificationsvue_type_template_id_47d14338_scoped_true_staticRenderFns,
  false,
  null,
  "47d14338",
  null
  
)

/* harmony default export */ var gw_notifications = (gw_notifications_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"36a9e6e0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gw-user-options.vue?vue&type=template&id=032bdca5&
var gw_user_optionsvue_type_template_id_032bdca5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dropdown',{staticClass:"user-bar",attrs:{"x":_vm.userDropdownCoordenates.x,"y":_vm.userDropdownCoordenates.y,"is-icon":false}},[_c('template',{slot:"btn"},[_c('div',{staticClass:"user-name"},[_c('span',{staticClass:"bold"},[_vm._v(_vm._s(_vm.userData.firstname))]),_c('span',[_vm._v(" "+_vm._s(_vm.userData.lastname))])]),_vm._t("icon",[_c('i',{staticClass:"fas fa-chevron-down"})]),_c('div',{staticClass:"profile-image"},[(_vm.userData.photo)?_c('img',{attrs:{"src":_vm.userData.photo.url}}):_c('img',{attrs:{"src":__webpack_require__("af9d")}})])],2),_c('template',{slot:"body"},[(_vm.showOptions)?_c('span',{staticClass:"dropdown-title"},[_vm._v("My Profile")]):_vm._e(),(_vm.showOptions)?_c('div',[_vm._l((_vm.userOptionsList),function(option){return [(!option.validateAcl || _vm.$can(option.name, 'settingsmenu'))?_c('router-link',{key:option.route,staticClass:"dropdown-item",attrs:{"to":{ name: option.route }}},[_c('span',[_vm._v(" "+_vm._s(option.label)+" ")])]):_vm._e()]})],2):_vm._e(),_c('a',{staticClass:"dropdown-item logout-button",attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.$emit('logout')}}},[_c('span',[_vm._v("Logout")]),_c('i',{staticClass:"fas fa-sign-out-alt"})])])],2)}
var gw_user_optionsvue_type_template_id_032bdca5_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/gw-user-options.vue?vue&type=template&id=032bdca5&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gw-user-options.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var gw_user_optionsvue_type_script_lang_js_ = ({
  name: "GwUserOptions",
  props: {
    companyData: {
      type: Object,
      required: true
    },
    showOptions: {
      type: Boolean,
      default: true
    },
    userData: {
      type: Object,
      required: true
    },
    dropdownMapper: {
      type: Object,

      default() {
        return {};
      }

    }
  },

  data() {
    return {
      userDropdownCoordenates: {
        x: -45,
        y: 0
      },
      userDropdownOptions: [{
        name: "user-settings",
        label: "Users Settings",
        route: "settingsUsersProfile"
      }, {
        label: "{company} Settings",
        route: "settingsCompaniesProfile",
        name: "companies-settings",
        validateAcl: true
      }, {
        label: "App Settings",
        route: "settingsAppsCustomFieldsList",
        name: "app-settings",
        validateAcl: true
      }, {
        label: "Companies Manager",
        route: "settingsManagerList",
        name: "companies-manager",
        validateAcl: true
      }]
    };
  },

  computed: {
    userOptionsList() {
      return this.userDropdownOptions.map(item => {
        const label = this.dropdownMapper[item.name] || item.label;
        item.label = label.replace("{company}", this.companyData.name);
        return item;
      });
    }

  },

  created() {
    this.handleUserDropdownCoordenates();
  },

  methods: {
    handleUserDropdownCoordenates() {
      if (window.innerWidth <= 768) {
        this.userDropdownCoordenates.x = -145;
      }
    }

  }
});
// CONCATENATED MODULE: ./src/components/gw-user-options.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_gw_user_optionsvue_type_script_lang_js_ = (gw_user_optionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/gw-user-options.vue?vue&type=style&index=0&lang=scss&
var gw_user_optionsvue_type_style_index_0_lang_scss_ = __webpack_require__("672a");

// CONCATENATED MODULE: ./src/components/gw-user-options.vue






/* normalize component */

var gw_user_options_component = normalizeComponent(
  components_gw_user_optionsvue_type_script_lang_js_,
  gw_user_optionsvue_type_template_id_032bdca5_render,
  gw_user_optionsvue_type_template_id_032bdca5_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var gw_user_options = (gw_user_options_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"36a9e6e0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gw-header.vue?vue&type=template&id=7f1994b2&scoped=true&
var gw_headervue_type_template_id_7f1994b2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header app-header",class:{ 'menu-pinned': _vm.sidebarState == 'opened' }},[_c('div',{staticClass:"sidebar-toggle",on:{"click":function($event){return _vm.$emit('handle-sidebar')}}},[_c('img',{attrs:{"src":"/img/icons/hamburguer-menu.png"}})]),_c('div',{staticClass:"header-container"},[_c('div',{staticClass:"left-side-header d-flex h-100"},[(!_vm.hideCompaniesSwitcher)?_vm._t("companies-switcher",[_c('gw-companies-switcher',{attrs:{"branch-data":_vm.companyBranchData,"company-data":_vm.companyData,"companies-list":_vm.companiesList},on:{"select":function (company) { return _vm.$emit('selected-company', company); },"rooftop":function (company) { return _vm.$emit('rooftop', company); }}})]):_vm._e(),_vm._t("app-switcher",[(_vm.appsList.length > 1)?_c('gw-app-switcher',{attrs:{"apps-list":_vm.appsList}}):_vm._e()])],2),_c('div',{staticClass:"right-side-header d-flex"},[_c('gw-user-options',{attrs:{"company-data":_vm.companyData,"user-data":_vm.userData,"show-options":_vm.showUserOptions,"dropdown-mapper":_vm.dropdownMapper},on:{"logout":function($event){return _vm.$emit('logout')}}}),(_vm.showNotifications)?_c('gw-notifications',{attrs:{"count":_vm.notificationsCount},on:{"toggle-notifications":function($event){return _vm.$emit('toggle-notifications')}}}):_vm._e()],1)])])}
var gw_headervue_type_template_id_7f1994b2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/gw-header.vue?vue&type=template&id=7f1994b2&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/gw-header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var gw_headervue_type_script_lang_js_ = ({
  name: "GwHeader",
  components: {
    GwAppSwitcher: gw_app_switcher,
    GwCompaniesSwitcher: gw_companies_switcher,
    GwNotifications: gw_notifications,
    GwUserOptions: gw_user_options
  },
  props: {
    appsList: {
      type: Array,

      default() {
        return [];
      }

    },
    dropdownMapper: {
      type: Object,

      default() {
        return {};
      }

    },
    companyBranchData: {
      type: Object,
      required: true
    },
    companyData: {
      type: Object,
      required: true,

      validator(data) {
        return data.name;
      }

    },
    companiesList: {
      type: Array,

      default() {
        return [];
      }

    },
    notificationsCount: {
      type: Number,
      required: true
    },
    showNotifications: {
      type: Boolean,
      default: true
    },
    sidebarState: {
      type: String,
      default: "hover"
    },
    showUserOptions: {
      type: Boolean,
      default: true
    },
    userData: {
      type: Object,
      required: true
    },
    hideCompaniesSwitcher: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./src/components/gw-header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_gw_headervue_type_script_lang_js_ = (gw_headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/gw-header.vue?vue&type=style&index=0&id=7f1994b2&lang=scss&scoped=true&
var gw_headervue_type_style_index_0_id_7f1994b2_lang_scss_scoped_true_ = __webpack_require__("8243");

// CONCATENATED MODULE: ./src/components/gw-header.vue






/* normalize component */

var gw_header_component = normalizeComponent(
  components_gw_headervue_type_script_lang_js_,
  gw_headervue_type_template_id_7f1994b2_scoped_true_render,
  gw_headervue_type_template_id_7f1994b2_scoped_true_staticRenderFns,
  false,
  null,
  "7f1994b2",
  null
  
)

/* harmony default export */ var gw_header = (gw_header_component.exports);
// CONCATENATED MODULE: ./src/index.js






/* harmony default export */ var src_0 = (gw_header);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ }),

/***/ "fcd0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=gw-header.common.js.map