"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"4c37809d1e61\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2I2ZDQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI0YzM3ODA5ZDFlNjFcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/SidebarItem.tsx":
/*!************************************!*\
  !*** ./components/SidebarItem.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwind-merge */ \"(app-pages-browser)/./node_modules/tailwind-merge/dist/lib/tw-merge.mjs\");\n\n\n\nconst SidebarItem = (param)=>{\n    let { icon, label, active, href } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: href,\n        className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__.twMerge)(\"flex flex-col h-auto items-center w-full \\n        gap-x-4 text-md font-medium cursor-pointer\\n         hover:text-white transition text-neutral-400 py-1\", active && \"text-white\")\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\hcaha\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\nextjs-spotify-clone\\\\next-spotify-clone\\\\components\\\\SidebarItem.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_c = SidebarItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SidebarItem);\nvar _c;\n$RefreshReg$(_c, \"SidebarItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2lkZWJhckl0ZW0udHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QjtBQUVZO0FBU3pDLE1BQU1FLGNBQTBDO1FBQUMsRUFDL0NDLElBQUksRUFDSkMsS0FBSyxFQUNMQyxNQUFNLEVBQ05DLElBQUksRUFDTDtJQUNDLHFCQUNFLDhEQUFDTixrREFBSUE7UUFDSE0sTUFBTUE7UUFDTkMsV0FBV04sdURBQU9BLENBQ2YsNkpBR0RJLFVBQVc7Ozs7OztBQUluQjtLQWpCTUg7QUFtQk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFySXRlbS50c3g/ZGQ3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEljb25UeXBlIH0gZnJvbSBcInJlYWN0LWljb25zXCI7XHJcbmltcG9ydCB7IHR3TWVyZ2UgfSBmcm9tIFwidGFpbHdpbmQtbWVyZ2VcIjtcclxuXHJcbmludGVyZmFjZSBTaWRlYmFySXRlbVByb3BzIHtcclxuICBpY29uOiBJY29uVHlwZTtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIGFjdGl2ZT86IGJvb2xlYW47XHJcbiAgaHJlZjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBTaWRlYmFySXRlbTogUmVhY3QuRkM8U2lkZWJhckl0ZW1Qcm9wcz4gPSAoe1xyXG4gIGljb24sXHJcbiAgbGFiZWwsXHJcbiAgYWN0aXZlLFxyXG4gIGhyZWYsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmtcclxuICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgY2xhc3NOYW1lPXt0d01lcmdlKFxyXG4gICAgICAgIGBmbGV4IGZsZXgtY29sIGgtYXV0byBpdGVtcy1jZW50ZXIgdy1mdWxsIFxyXG4gICAgICAgIGdhcC14LTQgdGV4dC1tZCBmb250LW1lZGl1bSBjdXJzb3ItcG9pbnRlclxyXG4gICAgICAgICBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24gdGV4dC1uZXV0cmFsLTQwMCBweS0xYCxcclxuICAgICAgICBhY3RpdmUgJiYgYHRleHQtd2hpdGVgXHJcbiAgICAgICl9XHJcbiAgICA+PC9MaW5rPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFySXRlbTtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ0d01lcmdlIiwiU2lkZWJhckl0ZW0iLCJpY29uIiwibGFiZWwiLCJhY3RpdmUiLCJocmVmIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/SidebarItem.tsx\n"));

/***/ })

});