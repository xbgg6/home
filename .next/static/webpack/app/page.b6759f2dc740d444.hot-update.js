"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/home/projects.tsx":
/*!******************************************!*\
  !*** ./src/components/home/projects.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-icons */ \"(app-pages-browser)/./node_modules/@radix-ui/react-icons/dist/react-icons.esm.js\");\n\n\n\n\n\nconst projects = [\n    {\n        cover: \"/assets/moyu.png\",\n        name: \"聚合热搜\",\n        link: \"#\",\n        codePath: null,\n        description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: \"聚合常见网站的热搜\"\n        }, void 0, false)\n    },\n    {\n        cover: \"/assets/project-it-tools.png\",\n        name: \"开发工具箱\",\n        link: \"#\",\n        codePath: \"https://github.com/hualafun/it-tools\",\n        description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: \"众多实用的的工具箱，全在这里，永久免费使用\"\n        }, void 0, false)\n    }\n];\nconst Projects = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"projects\",\n        className: \"flex flex-col justify-content: start; text-center min-h-screen py-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-md\",\n                        children: \"Projects\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projects\\\\homepage\\\\src\\\\components\\\\home\\\\projects.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl tracking-widest mt-4 font-bold\",\n                        children: \"项目\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projects\\\\homepage\\\\src\\\\components\\\\home\\\\projects.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Projects\\\\homepage\\\\src\\\\components\\\\home\\\\projects.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8 grid grid-cols-3 gap-4 justify-center max-lg:grid-cols-1\",\n                children: projects.map((item)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                        className: \"w-full max-lg:w-full shadow-none\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                                className: \"p-0\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-center items-center w-full flex-col text-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            width: 400,\n                                            height: 400,\n                                            src: item.cover,\n                                            alt: \"Project 2\",\n                                            className: \"rounded-md\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Projects\\\\homepage\\\\src\\\\components\\\\home\\\\projects.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col gap-2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"text-2xl mt-4\",\n                                                    children: item.name\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Projects\\\\homepage\\\\src\\\\components\\\\home\\\\projects.tsx\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-inherit text-sm\",\n                                                    children: item.description\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Projects\\\\homepage\\\\src\\\\components\\\\home\\\\projects.tsx\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"E:\\\\Projects\\\\homepage\\\\src\\\\components\\\\home\\\\projects.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\Projects\\\\homepage\\\\src\\\\components\\\\home\\\\projects.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\homepage\\\\src\\\\components\\\\home\\\\projects.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardFooter, {\n                                className: \"pb-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex gap-4 justify-center w-full\",\n                                    children: [\n                                        item.codePath ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            variant: \"link\",\n                                            onClick: ()=>window.open(item.codePath),\n                                            children: \"源码地址\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Projects\\\\homepage\\\\src\\\\components\\\\home\\\\projects.tsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 21\n                                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            disabled: true,\n                                            variant: \"link\",\n                                            children: \"暂未开放\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Projects\\\\homepage\\\\src\\\\components\\\\home\\\\projects.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            variant: \"link\",\n                                            onClick: ()=>window.open(item.link),\n                                            children: [\n                                                \"在线访问 \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_4__.EnterIcon, {\n                                                    className: \"ml-2\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Projects\\\\homepage\\\\src\\\\components\\\\home\\\\projects.tsx\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 26\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"E:\\\\Projects\\\\homepage\\\\src\\\\components\\\\home\\\\projects.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\Projects\\\\homepage\\\\src\\\\components\\\\home\\\\projects.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\homepage\\\\src\\\\components\\\\home\\\\projects.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, item.name, true, {\n                        fileName: \"E:\\\\Projects\\\\homepage\\\\src\\\\components\\\\home\\\\projects.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\homepage\\\\src\\\\components\\\\home\\\\projects.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Projects\\\\homepage\\\\src\\\\components\\\\home\\\\projects.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2hvbWUvcHJvamVjdHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQStCO0FBT0Q7QUFFa0I7QUFFRTtBQUVsRCxNQUFNTSxXQUFXO0lBQ2Y7UUFDRUMsT0FBTztRQUNQQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsVUFBVTtRQUNWQywyQkFBYTtzQkFBRTs7SUFDakI7SUFFQTtRQUNFSixPQUFPO1FBQ1BDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLDJCQUFhO3NCQUFFOztJQUNqQjtDQUVEO0FBRUQsTUFBTUMsV0FBVztJQUNmLHFCQUNFLDhEQUFDQztRQUNDQyxJQUFHO1FBQ0hDLFdBQVU7OzBCQUNWLDhEQUFDQzs7a0NBQ0MsOERBQUNDO3dCQUFFRixXQUFVO2tDQUFVOzs7Ozs7a0NBQ3ZCLDhEQUFDRzt3QkFBR0gsV0FBVTtrQ0FBMEM7Ozs7Ozs7Ozs7OzswQkFFMUQsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNaVCxTQUFTYSxHQUFHLENBQUMsQ0FBQ0M7b0JBQ2IscUJBQ0UsOERBQUNuQixxREFBSUE7d0JBQWlCYyxXQUFVOzswQ0FDOUIsOERBQUNiLDREQUFXQTtnQ0FBQ2EsV0FBVTswQ0FDckIsNEVBQUNDO29DQUFJRCxXQUFVOztzREFDYiw4REFBQ2YsbURBQUtBOzRDQUNKcUIsT0FBTzs0Q0FDUEMsUUFBUTs0Q0FDUkMsS0FBS0gsS0FBS2IsS0FBSzs0Q0FDZmlCLEtBQUk7NENBQ0pULFdBQVU7Ozs7OztzREFFWiw4REFBQ0M7NENBQUlELFdBQVU7OzhEQUNiLDhEQUFDVTtvREFBS1YsV0FBVTs4REFBaUJLLEtBQUtaLElBQUk7Ozs7Ozs4REFDMUMsOERBQUNTO29EQUFFRixXQUFVOzhEQUF3QkssS0FBS1QsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSTNELDhEQUFDUiwyREFBVUE7Z0NBQUNZLFdBQVU7MENBQ3BCLDRFQUFDQztvQ0FBSUQsV0FBVTs7d0NBQ1pLLEtBQUtWLFFBQVEsaUJBQ1osOERBQUNOLHlEQUFNQTs0Q0FDTHNCLFNBQVE7NENBQ1JDLFNBQVMsSUFBTUMsT0FBT0MsSUFBSSxDQUFDVCxLQUFLVixRQUFRO3NEQUFHOzs7OztzRUFJN0MsOERBQUNOLHlEQUFNQTs0Q0FBQzBCLFFBQVE7NENBQUNKLFNBQVE7c0RBQU87Ozs7OztzREFFbEMsOERBQUN0Qix5REFBTUE7NENBQUNzQixTQUFROzRDQUFPQyxTQUFTLElBQU1DLE9BQU9DLElBQUksQ0FBQ1QsS0FBS1gsSUFBSTs7Z0RBQUc7OERBQ3ZELDhEQUFDSiw0REFBU0E7b0RBQUNVLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkE1QnZCSyxLQUFLWixJQUFJOzs7OztnQkFrQ3hCOzs7Ozs7Ozs7Ozs7QUFJUjtLQWxETUk7QUFvRE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9tZS9wcm9qZWN0cy50c3g/ZjE4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBDYXJkQ29udGVudCxcclxuICBDYXJkSGVhZGVyLFxyXG4gIENhcmRGb290ZXIsXHJcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XHJcblxyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xyXG5cclxuaW1wb3J0IHsgRW50ZXJJY29uIH0gZnJvbSBcIkByYWRpeC11aS9yZWFjdC1pY29uc1wiO1xyXG5cclxuY29uc3QgcHJvamVjdHMgPSBbXHJcbiAge1xyXG4gICAgY292ZXI6IFwiL2Fzc2V0cy9tb3l1LnBuZ1wiLFxyXG4gICAgbmFtZTogXCLogZrlkIjng63mkJxcIixcclxuICAgIGxpbms6IFwiI1wiLFxyXG4gICAgY29kZVBhdGg6IG51bGwsXHJcbiAgICBkZXNjcmlwdGlvbjogPD7ogZrlkIjluLjop4HnvZHnq5nnmoTng63mkJw8Lz4sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgY292ZXI6IFwiL2Fzc2V0cy9wcm9qZWN0LWl0LXRvb2xzLnBuZ1wiLFxyXG4gICAgbmFtZTogXCLlvIDlj5Hlt6XlhbfnrrFcIixcclxuICAgIGxpbms6IFwiI1wiLFxyXG4gICAgY29kZVBhdGg6IFwiaHR0cHM6Ly9naXRodWIuY29tL2h1YWxhZnVuL2l0LXRvb2xzXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogPD7kvJflpJrlrp7nlKjnmoTnmoTlt6XlhbfnrrHvvIzlhajlnKjov5nph4zvvIzmsLjkuYXlhY3otLnkvb/nlKg8Lz4sXHJcbiAgfSxcclxuXHJcbl07XHJcblxyXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb25cclxuICAgICAgaWQ9XCJwcm9qZWN0c1wiXHJcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jb250ZW50OiBzdGFydDsgdGV4dC1jZW50ZXIgbWluLWgtc2NyZWVuIHB5LTE2XCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tZFwiPlByb2plY3RzPC9wPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0cmFja2luZy13aWRlc3QgbXQtNCBmb250LWJvbGRcIj7pobnnm648L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IGdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTQganVzdGlmeS1jZW50ZXIgbWF4LWxnOmdyaWQtY29scy0xXCI+XHJcbiAgICAgICAge3Byb2plY3RzLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENhcmQga2V5PXtpdGVtLm5hbWV9IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtbGc6dy1mdWxsIHNoYWRvdy1ub25lXCI+XHJcbiAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgZmxleC1jb2wgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwMH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwMH1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uY292ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiUHJvamVjdCAyXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgbXQtNFwiPntpdGVtLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtaW5oZXJpdCB0ZXh0LXNtXCI+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPENhcmRGb290ZXIgY2xhc3NOYW1lPVwicGItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC00IGp1c3RpZnktY2VudGVyIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5jb2RlUGF0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwibGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3BlbihpdGVtLmNvZGVQYXRoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICDmupDnoIHlnLDlnYBcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkIHZhcmlhbnQ9XCJsaW5rXCI+5pqC5pyq5byA5pS+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImxpbmtcIiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3BlbihpdGVtLmxpbmspfT5cclxuICAgICAgICAgICAgICAgICAgICDlnKjnur/orr/pl64gPEVudGVySWNvbiBjbGFzc05hbWU9XCJtbC0yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NhcmRGb290ZXI+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEZvb3RlciIsIkJ1dHRvbiIsIkVudGVySWNvbiIsInByb2plY3RzIiwiY292ZXIiLCJuYW1lIiwibGluayIsImNvZGVQYXRoIiwiZGVzY3JpcHRpb24iLCJQcm9qZWN0cyIsInNlY3Rpb24iLCJpZCIsImNsYXNzTmFtZSIsImRpdiIsInAiLCJoMSIsIm1hcCIsIml0ZW0iLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsImFsdCIsInNwYW4iLCJ2YXJpYW50Iiwib25DbGljayIsIndpbmRvdyIsIm9wZW4iLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/home/projects.tsx\n"));

/***/ })

});