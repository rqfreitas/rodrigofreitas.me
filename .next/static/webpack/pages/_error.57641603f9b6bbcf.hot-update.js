"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_error",{

/***/ "./components/Footer.tsx":
/*!*******************************!*\
  !*** ./components/Footer.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FooterImpl\": function() { return /* binding */ FooterImpl; },\n/* harmony export */   \"Footer\": function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_icons_all_files_fa_FaTwitter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-icons/all-files/fa/FaTwitter */ \"./node_modules/@react-icons/all-files/fa/FaTwitter.js\");\n/* harmony import */ var _react_icons_all_files_fa_FaZhihu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-icons/all-files/fa/FaZhihu */ \"./node_modules/@react-icons/all-files/fa/FaZhihu.js\");\n/* harmony import */ var _react_icons_all_files_fa_FaGithub__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @react-icons/all-files/fa/FaGithub */ \"./node_modules/@react-icons/all-files/fa/FaGithub.js\");\n/* harmony import */ var _react_icons_all_files_fa_FaLinkedin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @react-icons/all-files/fa/FaLinkedin */ \"./node_modules/@react-icons/all-files/fa/FaLinkedin.js\");\n/* harmony import */ var _react_icons_all_files_fa_FaEnvelopeOpenText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @react-icons/all-files/fa/FaEnvelopeOpenText */ \"./node_modules/@react-icons/all-files/fa/FaEnvelopeOpenText.js\");\n/* harmony import */ var _react_icons_all_files_fa_FaYoutube__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @react-icons/all-files/fa/FaYoutube */ \"./node_modules/@react-icons/all-files/fa/FaYoutube.js\");\n/* harmony import */ var _react_icons_all_files_io5_IoSunnyOutline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-icons/all-files/io5/IoSunnyOutline */ \"./node_modules/@react-icons/all-files/io5/IoSunnyOutline.js\");\n/* harmony import */ var _react_icons_all_files_io5_IoMoonSharp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-icons/all-files/io5/IoMoonSharp */ \"./node_modules/@react-icons/all-files/io5/IoMoonSharp.js\");\n/* harmony import */ var lib_use_dark_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/use-dark-mode */ \"./lib/use-dark-mode.ts\");\n/* harmony import */ var lib_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/config */ \"./lib/config.ts\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.css */ \"./components/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n// TODO: merge the data and icons from PageSocial with the social links in Footer\nvar FooterImpl = function() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1__.useState(false), 2), hasMounted = ref[0], setHasMounted = ref[1];\n    var ref1 = (0,lib_use_dark_mode__WEBPACK_IMPORTED_MODULE_2__.useDarkMode)(), isDarkMode = ref1.isDarkMode, toggleDarkMode = ref1.toggleDarkMode;\n    var onToggleDarkMode = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function(e) {\n        e.preventDefault();\n        toggleDarkMode();\n    }, [\n        toggleDarkMode\n    ]);\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function() {\n        setHasMounted(true);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().footer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().copyright),\n                children: [\n                    \"Template made by \",\n                    lib_config__WEBPACK_IMPORTED_MODULE_3__.author\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rodrigofreitas/Coding2/rodrigofreitas.me/components/Footer.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().settings),\n                children: hasMounted && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().toggleDarkMode),\n                    href: \"#\",\n                    role: \"button\",\n                    onClick: onToggleDarkMode,\n                    title: \"Toggle dark mode\",\n                    children: isDarkMode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_icons_all_files_io5_IoMoonSharp__WEBPACK_IMPORTED_MODULE_5__.IoMoonSharp, {}, void 0, false, {\n                        fileName: \"/Users/rodrigofreitas/Coding2/rodrigofreitas.me/components/Footer.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 27\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_icons_all_files_io5_IoSunnyOutline__WEBPACK_IMPORTED_MODULE_6__.IoSunnyOutline, {}, void 0, false, {\n                        fileName: \"/Users/rodrigofreitas/Coding2/rodrigofreitas.me/components/Footer.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 45\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/rodrigofreitas/Coding2/rodrigofreitas.me/components/Footer.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/rodrigofreitas/Coding2/rodrigofreitas.me/components/Footer.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().social),\n                children: [\n                    lib_config__WEBPACK_IMPORTED_MODULE_3__.twitter && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().twitter),\n                        href: \"https://twitter.com/\".concat(lib_config__WEBPACK_IMPORTED_MODULE_3__.twitter),\n                        title: \"Twitter @\".concat(lib_config__WEBPACK_IMPORTED_MODULE_3__.twitter),\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_icons_all_files_fa_FaTwitter__WEBPACK_IMPORTED_MODULE_7__.FaTwitter, {}, void 0, false, {\n                            fileName: \"/Users/rodrigofreitas/Coding2/rodrigofreitas.me/components/Footer.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rodrigofreitas/Coding2/rodrigofreitas.me/components/Footer.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, _this),\n                    lib_config__WEBPACK_IMPORTED_MODULE_3__.zhihu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().zhihu),\n                        href: \"https://zhihu.com/people/\".concat(lib_config__WEBPACK_IMPORTED_MODULE_3__.zhihu),\n                        title: \"Zhihu @\".concat(lib_config__WEBPACK_IMPORTED_MODULE_3__.zhihu),\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_icons_all_files_fa_FaZhihu__WEBPACK_IMPORTED_MODULE_8__.FaZhihu, {}, void 0, false, {\n                            fileName: \"/Users/rodrigofreitas/Coding2/rodrigofreitas.me/components/Footer.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rodrigofreitas/Coding2/rodrigofreitas.me/components/Footer.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, _this),\n                    lib_config__WEBPACK_IMPORTED_MODULE_3__.github && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().github),\n                        href: \"https://github.com/\".concat(lib_config__WEBPACK_IMPORTED_MODULE_3__.github),\n                        title: \"GitHub @\".concat(lib_config__WEBPACK_IMPORTED_MODULE_3__.github),\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_icons_all_files_fa_FaGithub__WEBPACK_IMPORTED_MODULE_9__.FaGithub, {}, void 0, false, {\n                            fileName: \"/Users/rodrigofreitas/Coding2/rodrigofreitas.me/components/Footer.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rodrigofreitas/Coding2/rodrigofreitas.me/components/Footer.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, _this),\n                    lib_config__WEBPACK_IMPORTED_MODULE_3__.linkedin && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().linkedin),\n                        href: \"https://www.linkedin.com/in/\".concat(lib_config__WEBPACK_IMPORTED_MODULE_3__.linkedin),\n                        title: \"LinkedIn \".concat(lib_config__WEBPACK_IMPORTED_MODULE_3__.author),\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_icons_all_files_fa_FaLinkedin__WEBPACK_IMPORTED_MODULE_10__.FaLinkedin, {}, void 0, false, {\n                            fileName: \"/Users/rodrigofreitas/Coding2/rodrigofreitas.me/components/Footer.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rodrigofreitas/Coding2/rodrigofreitas.me/components/Footer.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, _this),\n                    lib_config__WEBPACK_IMPORTED_MODULE_3__.newsletter && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().newsletter),\n                        href: \"\".concat(lib_config__WEBPACK_IMPORTED_MODULE_3__.newsletter),\n                        title: \"Newsletter \".concat(lib_config__WEBPACK_IMPORTED_MODULE_3__.author),\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_icons_all_files_fa_FaEnvelopeOpenText__WEBPACK_IMPORTED_MODULE_11__.FaEnvelopeOpenText, {}, void 0, false, {\n                            fileName: \"/Users/rodrigofreitas/Coding2/rodrigofreitas.me/components/Footer.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rodrigofreitas/Coding2/rodrigofreitas.me/components/Footer.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, _this),\n                    lib_config__WEBPACK_IMPORTED_MODULE_3__.youtube && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().youtube),\n                        href: \"https://www.youtube.com/\".concat(lib_config__WEBPACK_IMPORTED_MODULE_3__.youtube),\n                        title: \"YouTube \".concat(lib_config__WEBPACK_IMPORTED_MODULE_3__.author),\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_icons_all_files_fa_FaYoutube__WEBPACK_IMPORTED_MODULE_12__.FaYoutube, {}, void 0, false, {\n                            fileName: \"/Users/rodrigofreitas/Coding2/rodrigofreitas.me/components/Footer.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rodrigofreitas/Coding2/rodrigofreitas.me/components/Footer.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rodrigofreitas/Coding2/rodrigofreitas.me/components/Footer.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rodrigofreitas/Coding2/rodrigofreitas.me/components/Footer.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_s(FooterImpl, \"Nj7Nk2YOaIydUGMCEiP/js6F1Cg=\", false, function() {\n    return [\n        lib_use_dark_mode__WEBPACK_IMPORTED_MODULE_2__.useDarkMode\n    ];\n});\n_c = FooterImpl;\nvar Footer = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.memo(FooterImpl);\n_c1 = Footer;\nvar _c, _c1;\n$RefreshReg$(_c, \"FooterImpl\");\n$RefreshReg$(_c1, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWU7d0JBQ3BEdUIsS0FBSyxFQUFHLENBQVMsV0FBZ0IsT0FBZHZCLDhDQUFhO3dCQUNoQzBCLE1BQU0sRUFBQyxDQUFRO3dCQUNmQyxHQUFHLEVBQUMsQ0FBcUI7OEdBRXhCakMsNkVBQVU7Ozs7Ozs7Ozs7b0JBSWRNLGtEQUFpQixnRkFDZm1CLENBQUM7d0JBQ0FMLFNBQVMsRUFBRWIsc0VBQWlCO3dCQUM1Qm1CLElBQUksRUFBRyxHQUFvQixPQUFsQnBCLGtEQUFpQjt3QkFDMUJ1QixLQUFLLEVBQUcsQ0FBVyxhQUFnQixPQUFkdkIsOENBQWE7d0JBQ2xDMEIsTUFBTSxFQUFDLENBQVE7d0JBQ2ZDLEdBQUcsRUFBQyxDQUFxQjs4R0FFeEJoQyw2RkFBa0I7Ozs7Ozs7Ozs7b0JBSXRCSywrQ0FBYyxnRkFDWm1CLENBQUM7d0JBQ0FMLFNBQVMsRUFBRWIsbUVBQWM7d0JBQ3pCbUIsSUFBSSxFQUFHLENBQXdCLDBCQUFpQixPQUFmcEIsK0NBQWM7d0JBQy9DdUIsS0FBSyxFQUFHLENBQVEsVUFBZ0IsT0FBZHZCLDhDQUFhO3dCQUMvQjBCLE1BQU0sRUFBQyxDQUFRO3dCQUNmQyxHQUFHLEVBQUMsQ0FBcUI7OEdBRXhCL0IsMkVBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEIsQ0FBQztHQTdHWU0sVUFBVTs7UUFFa0JILDBEQUFXOzs7S0FGdkNHLFVBQVU7QUErR2hCLEdBQUssQ0FBQytCLE1BQU0saUJBQUczQyx1Q0FBVSxDQUFDWSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9vdGVyLnRzeD9hNzlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRmFUd2l0dGVyIH0gZnJvbSAnQHJlYWN0LWljb25zL2FsbC1maWxlcy9mYS9GYVR3aXR0ZXInXG5pbXBvcnQgeyBGYVpoaWh1IH0gZnJvbSAnQHJlYWN0LWljb25zL2FsbC1maWxlcy9mYS9GYVpoaWh1J1xuaW1wb3J0IHsgRmFHaXRodWIgfSBmcm9tICdAcmVhY3QtaWNvbnMvYWxsLWZpbGVzL2ZhL0ZhR2l0aHViJ1xuaW1wb3J0IHsgRmFMaW5rZWRpbiB9IGZyb20gJ0ByZWFjdC1pY29ucy9hbGwtZmlsZXMvZmEvRmFMaW5rZWRpbidcbmltcG9ydCB7IEZhRW52ZWxvcGVPcGVuVGV4dCB9IGZyb20gJ0ByZWFjdC1pY29ucy9hbGwtZmlsZXMvZmEvRmFFbnZlbG9wZU9wZW5UZXh0J1xuaW1wb3J0IHsgRmFZb3V0dWJlIH0gZnJvbSAnQHJlYWN0LWljb25zL2FsbC1maWxlcy9mYS9GYVlvdXR1YmUnXG5pbXBvcnQgeyBJb1N1bm55T3V0bGluZSB9IGZyb20gJ0ByZWFjdC1pY29ucy9hbGwtZmlsZXMvaW81L0lvU3VubnlPdXRsaW5lJ1xuaW1wb3J0IHsgSW9Nb29uU2hhcnAgfSBmcm9tICdAcmVhY3QtaWNvbnMvYWxsLWZpbGVzL2lvNS9Jb01vb25TaGFycCdcblxuaW1wb3J0IHsgdXNlRGFya01vZGUgfSBmcm9tICdsaWIvdXNlLWRhcmstbW9kZSdcbmltcG9ydCAqIGFzIGNvbmZpZyBmcm9tICdsaWIvY29uZmlnJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnXG5cbi8vIFRPRE86IG1lcmdlIHRoZSBkYXRhIGFuZCBpY29ucyBmcm9tIFBhZ2VTb2NpYWwgd2l0aCB0aGUgc29jaWFsIGxpbmtzIGluIEZvb3RlclxuXG5leHBvcnQgY29uc3QgRm9vdGVySW1wbDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtoYXNNb3VudGVkLCBzZXRIYXNNb3VudGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCB7IGlzRGFya01vZGUsIHRvZ2dsZURhcmtNb2RlIH0gPSB1c2VEYXJrTW9kZSgpXG5cbiAgY29uc3Qgb25Ub2dnbGVEYXJrTW9kZSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRvZ2dsZURhcmtNb2RlKClcbiAgICB9LFxuICAgIFt0b2dnbGVEYXJrTW9kZV1cbiAgKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SGFzTW91bnRlZCh0cnVlKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29weXJpZ2h0fT5UZW1wbGF0ZSBtYWRlIGJ5IHtjb25maWcuYXV0aG9yfTwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNldHRpbmdzfT5cbiAgICAgICAge2hhc01vdW50ZWQgJiYgKFxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50b2dnbGVEYXJrTW9kZX1cbiAgICAgICAgICAgIGhyZWY9JyMnXG4gICAgICAgICAgICByb2xlPSdidXR0b24nXG4gICAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZURhcmtNb2RlfVxuICAgICAgICAgICAgdGl0bGU9J1RvZ2dsZSBkYXJrIG1vZGUnXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2lzRGFya01vZGUgPyA8SW9Nb29uU2hhcnAgLz4gOiA8SW9TdW5ueU91dGxpbmUgLz59XG4gICAgICAgICAgPC9hPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc29jaWFsfT5cbiAgICAgICAge2NvbmZpZy50d2l0dGVyICYmIChcbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudHdpdHRlcn1cbiAgICAgICAgICAgIGhyZWY9e2BodHRwczovL3R3aXR0ZXIuY29tLyR7Y29uZmlnLnR3aXR0ZXJ9YH1cbiAgICAgICAgICAgIHRpdGxlPXtgVHdpdHRlciBAJHtjb25maWcudHdpdHRlcn1gfVxuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZhVHdpdHRlciAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgKX1cblxuICAgICAgICB7Y29uZmlnLnpoaWh1ICYmIChcbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuemhpaHV9XG4gICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly96aGlodS5jb20vcGVvcGxlLyR7Y29uZmlnLnpoaWh1fWB9XG4gICAgICAgICAgICB0aXRsZT17YFpoaWh1IEAke2NvbmZpZy56aGlodX1gfVxuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZhWmhpaHUgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICl9XG5cbiAgICAgICAge2NvbmZpZy5naXRodWIgJiYgKFxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5naXRodWJ9XG4gICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7Y29uZmlnLmdpdGh1Yn1gfVxuICAgICAgICAgICAgdGl0bGU9e2BHaXRIdWIgQCR7Y29uZmlnLmdpdGh1Yn1gfVxuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZhR2l0aHViIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICApfVxuXG4gICAgICAgIHtjb25maWcubGlua2VkaW4gJiYgKFxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5saW5rZWRpbn1cbiAgICAgICAgICAgIGhyZWY9e2BodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vJHtjb25maWcubGlua2VkaW59YH1cbiAgICAgICAgICAgIHRpdGxlPXtgTGlua2VkSW4gJHtjb25maWcuYXV0aG9yfWB9XG4gICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmFMaW5rZWRpbiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgKX1cblxuICAgICAgICB7Y29uZmlnLm5ld3NsZXR0ZXIgJiYgKFxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZXdzbGV0dGVyfVxuICAgICAgICAgICAgaHJlZj17YCR7Y29uZmlnLm5ld3NsZXR0ZXJ9YH1cbiAgICAgICAgICAgIHRpdGxlPXtgTmV3c2xldHRlciAke2NvbmZpZy5hdXRob3J9YH1cbiAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGYUVudmVsb3BlT3BlblRleHQgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICl9XG5cbiAgICAgICAge2NvbmZpZy55b3V0dWJlICYmIChcbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMueW91dHViZX1cbiAgICAgICAgICAgIGhyZWY9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS8ke2NvbmZpZy55b3V0dWJlfWB9XG4gICAgICAgICAgICB0aXRsZT17YFlvdVR1YmUgJHtjb25maWcuYXV0aG9yfWB9XG4gICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmFZb3V0dWJlIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9IFJlYWN0Lm1lbW8oRm9vdGVySW1wbClcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZhVHdpdHRlciIsIkZhWmhpaHUiLCJGYUdpdGh1YiIsIkZhTGlua2VkaW4iLCJGYUVudmVsb3BlT3BlblRleHQiLCJGYVlvdXR1YmUiLCJJb1N1bm55T3V0bGluZSIsIklvTW9vblNoYXJwIiwidXNlRGFya01vZGUiLCJjb25maWciLCJzdHlsZXMiLCJGb290ZXJJbXBsIiwidXNlU3RhdGUiLCJoYXNNb3VudGVkIiwic2V0SGFzTW91bnRlZCIsImlzRGFya01vZGUiLCJ0b2dnbGVEYXJrTW9kZSIsIm9uVG9nZ2xlRGFya01vZGUiLCJ1c2VDYWxsYmFjayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZUVmZmVjdCIsImZvb3RlciIsImNsYXNzTmFtZSIsImRpdiIsImNvcHlyaWdodCIsImF1dGhvciIsInNldHRpbmdzIiwiYSIsImhyZWYiLCJyb2xlIiwib25DbGljayIsInRpdGxlIiwic29jaWFsIiwidHdpdHRlciIsInRhcmdldCIsInJlbCIsInpoaWh1IiwiZ2l0aHViIiwibGlua2VkaW4iLCJuZXdzbGV0dGVyIiwieW91dHViZSIsIkZvb3RlciIsIm1lbW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Footer.tsx\n");

/***/ })

});