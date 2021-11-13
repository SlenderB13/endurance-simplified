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
    this.addEventListener();
  }

  create() {
    super.create();
  }

  onMouseWheel(event) {
    console.log(event);
  }

  addEventListeners() {
    window.addEventListener('wheel', this.onMouseWheel());
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
      // 1634661451442
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b80ee69acbbad9b7de8f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xODRjZTY0MDZhM2JiM2EzNTQyMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxNQUFNQyxJQUFOLFNBQW1CRCxvREFBbkIsQ0FBd0I7QUFDckNFLEVBQUFBLFdBQVcsR0FBSTtBQUNiLFVBQU07QUFDSkMsTUFBQUEsRUFBRSxFQUFFLE1BREE7QUFFSkMsTUFBQUEsT0FBTyxFQUFFLE9BRkw7QUFHSkMsTUFBQUEsUUFBUSxFQUFFO0FBQ1JDLFFBQUFBLFVBQVUsRUFBRUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLENBREo7QUFFUkMsUUFBQUEsT0FBTyxFQUFFRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkI7QUFGRDtBQUhOLEtBQU47QUFTQSxTQUFLRSxZQUFMO0FBQ0EsU0FBS0MsZ0JBQUw7QUFDRDs7QUFFREMsRUFBQUEsTUFBTSxHQUFJO0FBQ1IsVUFBTUEsTUFBTjtBQUNEOztBQUVERixFQUFBQSxZQUFZLENBQUVHLEtBQUYsRUFBUztBQUNuQkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRDs7QUFFREcsRUFBQUEsaUJBQWlCLEdBQUk7QUFDbkJDLElBQUFBLE1BQU0sQ0FBQ04sZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsS0FBS0QsWUFBTCxFQUFqQztBQUNEOztBQXpCb0M7Ozs7Ozs7Ozs7O0FDRnZDO0FBQ1U7QUFDVixPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyx3SkFBa0gsY0FBYywrQkFBK0I7QUFDN0wsTUFBTSxVQUFVO0FBQ2hCLE1BQU0saUJBQWlCO0FBQ3ZCO0FBQ0E7Ozs7Ozs7O1VDUkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvcGFnZXMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlIGZyb20gJ2NsYXNzZXMvUGFnZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFBhZ2Uge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgaWQ6ICdob21lJyxcbiAgICAgIGVsZW1lbnQ6ICcuaG9tZScsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBuYXZpZ2F0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbicpLFxuICAgICAgICB3cmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fdGl0bGVzJylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5vbk1vdXNlV2hlZWwoKVxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigpXG4gIH1cblxuICBjcmVhdGUgKCkge1xuICAgIHN1cGVyLmNyZWF0ZSgpXG4gIH1cblxuICBvbk1vdXNlV2hlZWwgKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5vbk1vdXNlV2hlZWwoKSlcbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzNDY2MTQ1MTQ0MlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS9sdWNhc3NpbHZhL2JhY2t1cC9wcm9qZXRvcy9lbmR1cmFuY2Uvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiODBlZTY5YWNiYmFkOWI3ZGU4ZlwiKSJdLCJuYW1lcyI6WyJQYWdlIiwiSG9tZSIsImNvbnN0cnVjdG9yIiwiaWQiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJuYXZpZ2F0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid3JhcHBlciIsIm9uTW91c2VXaGVlbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjcmVhdGUiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVycyIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=