"use strict";
self["webpackHotUpdatefloema"]("main",{

/***/ "./app/pages/Home/index.js":
/*!*********************************!*\
  !*** ./app/pages/Home/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var classes_Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Page */ "./app/classes/Page.js");

class Home extends classes_Page__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super({
      id: 'home',
      element: '.home',
      elements: {
        navigation: document.querySelector('.navigation'),
        wrapper: document.querySelector('.home__titles')
      }
    });
    console.log(this.elements.wrapper);
  }

  create() {
    super.create();
  }

}

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1634669415192
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("143e139b335bd214e4e0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42OTBhYTZmYTYwN2Y1OTFiZmI3NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxNQUFNQyxJQUFOLFNBQW1CRCxvREFBbkIsQ0FBd0I7QUFDckNFLEVBQUFBLFdBQVcsR0FBSTtBQUNiLFVBQU07QUFDSkMsTUFBQUEsRUFBRSxFQUFFLE1BREE7QUFFSkMsTUFBQUEsT0FBTyxFQUFFLE9BRkw7QUFHSkMsTUFBQUEsUUFBUSxFQUFFO0FBQ1JDLFFBQUFBLFVBQVUsRUFBRUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLENBREo7QUFFUkMsUUFBQUEsT0FBTyxFQUFFRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkI7QUFGRDtBQUhOLEtBQU47QUFRQUUsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS04sUUFBTCxDQUFjSSxPQUExQjtBQUNEOztBQUVERyxFQUFBQSxNQUFNLEdBQUk7QUFDUixVQUFNQSxNQUFOO0FBQ0Q7O0FBZm9DOzs7Ozs7Ozs7OztBQ0Z2QztBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsd0pBQWtILGNBQWMsK0JBQStCO0FBQzdMLE1BQU0sVUFBVTtBQUNoQixNQUFNLGlCQUFpQjtBQUN2QjtBQUNBOzs7Ozs7OztVQ1JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL3BhZ2VzL0hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZSBmcm9tICdjbGFzc2VzL1BhZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGlkOiAnaG9tZScsXG4gICAgICBlbGVtZW50OiAnLmhvbWUnLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgbmF2aWdhdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb24nKSxcbiAgICAgICAgd3JhcHBlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfX3RpdGxlcycpXG4gICAgICB9XG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnRzLndyYXBwZXIpO1xuICB9XG5cbiAgY3JlYXRlICgpIHtcbiAgICBzdXBlci5jcmVhdGUoKVxuICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjM0NjY5NDE1MTkyXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9ob21lL2x1Y2Fzc2lsdmEvYmFja3VwL3Byb2pldG9zL2VuZHVyYW5jZS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCJcIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE0M2UxMzliMzM1YmQyMTRlNGUwXCIpIl0sIm5hbWVzIjpbIlBhZ2UiLCJIb21lIiwiY29uc3RydWN0b3IiLCJpZCIsImVsZW1lbnQiLCJlbGVtZW50cyIsIm5hdmlnYXRpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3cmFwcGVyIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZSJdLCJzb3VyY2VSb290IjoiIn0=