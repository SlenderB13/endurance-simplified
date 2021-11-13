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
      // 1634661605607
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("12061f5f29c5ca003d79")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mYzMyOGI4OGFjNzljNWNlMjY5MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxNQUFNQyxJQUFOLFNBQW1CRCxvREFBbkIsQ0FBd0I7QUFDckNFLEVBQUFBLFdBQVcsR0FBSTtBQUNiLFVBQU07QUFDSkMsTUFBQUEsRUFBRSxFQUFFLE1BREE7QUFFSkMsTUFBQUEsT0FBTyxFQUFFLE9BRkw7QUFHSkMsTUFBQUEsUUFBUSxFQUFFO0FBQ1JDLFFBQUFBLFVBQVUsRUFBRUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLENBREo7QUFFUkMsUUFBQUEsT0FBTyxFQUFFRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkI7QUFGRDtBQUhOLEtBQU47QUFTQSxTQUFLRSxZQUFMO0FBQ0EsU0FBS0MsaUJBQUw7QUFDRDs7QUFFREMsRUFBQUEsTUFBTSxHQUFJO0FBQ1IsVUFBTUEsTUFBTjtBQUNEOztBQUVERixFQUFBQSxZQUFZLENBQUVHLEtBQUYsRUFBUztBQUNuQkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRDs7QUFFREYsRUFBQUEsaUJBQWlCLEdBQUk7QUFDbkJLLElBQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsS0FBS1AsWUFBTCxFQUFqQztBQUNEOztBQXpCb0M7Ozs7Ozs7Ozs7O0FDRnZDO0FBQ1U7QUFDVixPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyx3SkFBa0gsY0FBYywrQkFBK0I7QUFDN0wsTUFBTSxVQUFVO0FBQ2hCLE1BQU0saUJBQWlCO0FBQ3ZCO0FBQ0E7Ozs7Ozs7O1VDUkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvcGFnZXMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlIGZyb20gJ2NsYXNzZXMvUGFnZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFBhZ2Uge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgaWQ6ICdob21lJyxcbiAgICAgIGVsZW1lbnQ6ICcuaG9tZScsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBuYXZpZ2F0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbicpLFxuICAgICAgICB3cmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fdGl0bGVzJylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5vbk1vdXNlV2hlZWwoKVxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgY3JlYXRlICgpIHtcbiAgICBzdXBlci5jcmVhdGUoKVxuICB9XG5cbiAgb25Nb3VzZVdoZWVsIChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMub25Nb3VzZVdoZWVsKCkpXG4gIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MzQ2NjE2MDU2MDdcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUvbHVjYXNzaWx2YS9iYWNrdXAvcHJvamV0b3MvZW5kdXJhbmNlL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcInB1YmxpY1BhdGhcIjpcIlwiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTIwNjFmNWYyOWM1Y2EwMDNkNzlcIikiXSwibmFtZXMiOlsiUGFnZSIsIkhvbWUiLCJjb25zdHJ1Y3RvciIsImlkIiwiZWxlbWVudCIsImVsZW1lbnRzIiwibmF2aWdhdGlvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndyYXBwZXIiLCJvbk1vdXNlV2hlZWwiLCJhZGRFdmVudExpc3RlbmVycyIsImNyZWF0ZSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9