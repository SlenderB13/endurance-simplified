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
    this.onMouseWheel();
    this.addEventListeners();
  }

  create() {
    super.create();
  }

  onMouseWheel(event) {
    console.log(event);
  }

  addEventListeners() {
    window.addEventListener('wheel', onMouseWheel());
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
      // 1634661585624
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7dfcedd31a36da4b2e0e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wZjU4ZWE0YzVhNTRjNjdlNTZkZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxNQUFNQyxJQUFOLFNBQW1CRCxvREFBbkIsQ0FBd0I7QUFDckNFLEVBQUFBLFdBQVcsR0FBSTtBQUNiLFVBQU07QUFDSkMsTUFBQUEsRUFBRSxFQUFFLE1BREE7QUFFSkMsTUFBQUEsT0FBTyxFQUFFLE9BRkw7QUFHSkMsTUFBQUEsUUFBUSxFQUFFO0FBQ1JDLFFBQUFBLFVBQVUsRUFBRUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLENBREo7QUFFUkMsUUFBQUEsT0FBTyxFQUFFRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkI7QUFGRDtBQUhOLEtBQU47QUFTQSxTQUFLRSxZQUFMO0FBQ0EsU0FBS0MsaUJBQUw7QUFDRDs7QUFFREMsRUFBQUEsTUFBTSxHQUFJO0FBQ1IsVUFBTUEsTUFBTjtBQUNEOztBQUVERixFQUFBQSxZQUFZLENBQUVHLEtBQUYsRUFBUztBQUNuQkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRDs7QUFFREYsRUFBQUEsaUJBQWlCLEdBQUk7QUFDbkJLLElBQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNQLFlBQVksRUFBN0M7QUFDRDs7QUF6Qm9DOzs7Ozs7Ozs7OztBQ0Z2QztBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsd0pBQWtILGNBQWMsK0JBQStCO0FBQzdMLE1BQU0sVUFBVTtBQUNoQixNQUFNLGlCQUFpQjtBQUN2QjtBQUNBOzs7Ozs7OztVQ1JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL3BhZ2VzL0hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZSBmcm9tICdjbGFzc2VzL1BhZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGlkOiAnaG9tZScsXG4gICAgICBlbGVtZW50OiAnLmhvbWUnLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgbmF2aWdhdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb24nKSxcbiAgICAgICAgd3JhcHBlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfX3RpdGxlcycpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMub25Nb3VzZVdoZWVsKClcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIGNyZWF0ZSAoKSB7XG4gICAgc3VwZXIuY3JlYXRlKClcbiAgfVxuXG4gIG9uTW91c2VXaGVlbCAoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhldmVudClcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBvbk1vdXNlV2hlZWwoKSlcbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzNDY2MTU4NTYyNFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS9sdWNhc3NpbHZhL2JhY2t1cC9wcm9qZXRvcy9lbmR1cmFuY2Uvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3ZGZjZWRkMzFhMzZkYTRiMmUwZVwiKSJdLCJuYW1lcyI6WyJQYWdlIiwiSG9tZSIsImNvbnN0cnVjdG9yIiwiaWQiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJuYXZpZ2F0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid3JhcHBlciIsIm9uTW91c2VXaGVlbCIsImFkZEV2ZW50TGlzdGVuZXJzIiwiY3JlYXRlIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=