/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./global-context.js":
/*!***************************!*\
  !*** ./global-context.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GlobalProvider: () => (/* binding */ GlobalProvider),\n/* harmony export */   useGlobalContext: () => (/* binding */ useGlobalContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-intl */ \"next-intl\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst GlobalProvider = ({ initialLocales, children })=>{\n    const localeValue = (0,next_intl__WEBPACK_IMPORTED_MODULE_2__.useLocale)();\n    const [locales, setLocales] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialLocales ?? [\n        {\n            \"name\": \"English\",\n            \"short\": \"en\"\n        }\n    ]);\n    const [locale, setLocale] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        \"name\": \"English\",\n        \"short\": \"en\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"GlobalProvider.useEffect\": ()=>{\n            if (!locales) {\n                return;\n            }\n            const currentLangValue = locales.find({\n                \"GlobalProvider.useEffect.currentLangValue\": (el)=>el.short === localeValue\n            }[\"GlobalProvider.useEffect.currentLangValue\"]);\n            setLocale(currentLangValue);\n        }\n    }[\"GlobalProvider.useEffect\"], [\n        locales\n    ]);\n    const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)({\n        \"GlobalProvider.useMemo[value]\": ()=>{\n            return {\n                locales,\n                locale,\n                setLocales,\n                setLocale\n            };\n        }\n    }[\"GlobalProvider.useMemo[value]\"], [\n        locales,\n        locale\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Muhammad\\\\Downloads\\\\craft-next\\\\global-context.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\nconst useGlobalContext = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(GlobalContext);\n    if (!context) {\n        throw new Error('useGlobalContext must be used within a GlobalProvider');\n    }\n    return {\n        ...context\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2dsb2JhbC1jb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUMrRTtBQUN6QztBQUV0QyxNQUFNTSw4QkFBZ0JOLG9EQUFhQSxDQUFDO0FBRTdCLE1BQU1PLGlCQUFpQixDQUFDLEVBQUVDLGNBQWMsRUFBRUMsUUFBUSxFQUFFO0lBQ3pELE1BQU1DLGNBQWNMLG9EQUFTQTtJQUM3QixNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUNLLGtCQUFrQjtRQUFDO1lBQUMsUUFBTztZQUFVLFNBQVE7UUFBSTtLQUFFO0lBQzFGLE1BQU0sQ0FBQ0ssUUFBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBQztRQUFDLFFBQU87UUFBVSxTQUFRO0lBQUk7SUFFbkVDLGdEQUFTQTtvQ0FBQztZQUNSLElBQUksQ0FBQ08sU0FBUztnQkFDWjtZQUNGO1lBRUEsTUFBTUksbUJBQW1CSixRQUFRSyxJQUFJOzZEQUFDLENBQUNDLEtBQU9BLEdBQUdDLEtBQUssS0FBS1I7O1lBQzNESSxVQUFVQztRQUNaO21DQUFHO1FBQUNKO0tBQVE7SUFFWixNQUFNUSxRQUFRbEIsOENBQU9BO3lDQUFDO1lBQ3BCLE9BQU87Z0JBQ0xVO2dCQUNBRTtnQkFDQUQ7Z0JBQ0FFO1lBQ0Y7UUFDRjt3Q0FBRztRQUFDSDtRQUFTRTtLQUFPO0lBRXBCLHFCQUNFLDhEQUFDUCxjQUFjYyxRQUFRO1FBQUNELE9BQU9BO2tCQUM1QlY7Ozs7OztBQUdQLEVBQUM7QUFFTSxNQUFNWSxtQkFBbUI7SUFDOUIsTUFBTUMsVUFBVXBCLGlEQUFVQSxDQUFDSTtJQUMzQixJQUFJLENBQUNnQixTQUFTO1FBQ1osTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBRUEsT0FBTztRQUNMLEdBQUdELE9BQU87SUFDWjtBQUNGLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTXVoYW1tYWRcXERvd25sb2Fkc1xcY3JhZnQtbmV4dFxcZ2xvYmFsLWNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VNZW1vLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tIFwibmV4dC1pbnRsXCI7XG5cbmNvbnN0IEdsb2JhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpXG5cbmV4cG9ydCBjb25zdCBHbG9iYWxQcm92aWRlciA9ICh7IGluaXRpYWxMb2NhbGVzLCBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IGxvY2FsZVZhbHVlID0gdXNlTG9jYWxlKClcbiAgY29uc3QgW2xvY2FsZXMsIHNldExvY2FsZXNdID0gdXNlU3RhdGUoaW5pdGlhbExvY2FsZXMgPz8gW3tcIm5hbWVcIjpcIkVuZ2xpc2hcIixcInNob3J0XCI6XCJlblwifV0pXG4gIGNvbnN0IFtsb2NhbGUsIHNldExvY2FsZV0gPSB1c2VTdGF0ZSh7XCJuYW1lXCI6XCJFbmdsaXNoXCIsXCJzaG9ydFwiOlwiZW5cIn0pXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbG9jYWxlcykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudExhbmdWYWx1ZSA9IGxvY2FsZXMuZmluZCgoZWwpID0+IGVsLnNob3J0ID09PSBsb2NhbGVWYWx1ZSlcbiAgICBzZXRMb2NhbGUoY3VycmVudExhbmdWYWx1ZSlcbiAgfSwgW2xvY2FsZXNdKVxuXG4gIGNvbnN0IHZhbHVlID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvY2FsZXMsXG4gICAgICBsb2NhbGUsXG4gICAgICBzZXRMb2NhbGVzLFxuICAgICAgc2V0TG9jYWxlXG4gICAgfVxuICB9LCBbbG9jYWxlcywgbG9jYWxlXSlcblxuICByZXR1cm4gKFxuICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCB1c2VHbG9iYWxDb250ZXh0ID0gKCkgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KVxuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUdsb2JhbENvbnRleHQgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIEdsb2JhbFByb3ZpZGVyJylcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLi4uY29udGV4dFxuICB9XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZU1lbW8iLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VMb2NhbGUiLCJHbG9iYWxDb250ZXh0IiwiR2xvYmFsUHJvdmlkZXIiLCJpbml0aWFsTG9jYWxlcyIsImNoaWxkcmVuIiwibG9jYWxlVmFsdWUiLCJsb2NhbGVzIiwic2V0TG9jYWxlcyIsImxvY2FsZSIsInNldExvY2FsZSIsImN1cnJlbnRMYW5nVmFsdWUiLCJmaW5kIiwiZWwiLCJzaG9ydCIsInZhbHVlIiwiUHJvdmlkZXIiLCJ1c2VHbG9iYWxDb250ZXh0IiwiY29udGV4dCIsIkVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./global-context.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"(pages-dir-node)/./pages/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _global_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global-context */ \"(pages-dir-node)/./global-context.js\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-intl */ \"next-intl\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_intl__WEBPACK_IMPORTED_MODULE_3__.NextIntlProvider, {\n        messages: pageProps?.messages,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_context__WEBPACK_IMPORTED_MODULE_2__.GlobalProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Muhammad\\\\Downloads\\\\craft-next\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Muhammad\\\\Downloads\\\\craft-next\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Muhammad\\\\Downloads\\\\craft-next\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW9CO0FBRThCO0FBQ047QUFDN0IsU0FBU0UsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNwRCxxQkFDRSw4REFBQ0gsdURBQWdCQTtRQUFDSSxVQUFVRCxXQUFXQztrQkFDckMsNEVBQUNMLDJEQUFjQTtzQkFDYiw0RUFBQ0c7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxNdWhhbW1hZFxcRG93bmxvYWRzXFxjcmFmdC1uZXh0XFxwYWdlc1xcX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuXG5pbXBvcnQgeyBHbG9iYWxQcm92aWRlciB9IGZyb20gJy4uL2dsb2JhbC1jb250ZXh0J1xuaW1wb3J0IHsgTmV4dEludGxQcm92aWRlciB9IGZyb20gJ25leHQtaW50bCdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxOZXh0SW50bFByb3ZpZGVyIG1lc3NhZ2VzPXtwYWdlUHJvcHM/Lm1lc3NhZ2VzfT5cbiAgICAgIDxHbG9iYWxQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9HbG9iYWxQcm92aWRlcj5cbiAgICA8L05leHRJbnRsUHJvdmlkZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJHbG9iYWxQcm92aWRlciIsIk5leHRJbnRsUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm1lc3NhZ2VzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/style.css":
/*!*************************!*\
  !*** ./pages/style.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "next-intl":
/*!****************************!*\
  !*** external "next-intl" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-intl");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./pages/_app.js"));
module.exports = __webpack_exports__;

})();