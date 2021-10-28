"use strict";
self["webpackHotUpdatefloema"]("main",{

/***/ "./app/components/Preloader.js":
/*!*************************************!*\
  !*** ./app/components/Preloader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Preloader)
/* harmony export */ });
/* harmony import */ var classes_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Component */ "./app/classes/Component.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/text */ "./app/utils/text.js");




class Preloader extends classes_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super({
      element: '.preloader',
      elements: {
        title: document.querySelector('.preloader__text__title'),
        number: document.querySelector('.preloader__number'),
        images: document.querySelectorAll('img')
      }
    });
    console.log(this.elements.title);
    this.length = 0;
    this.createLoader();
    (0,utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
      element: this.elements.title
    });
    (0,utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
      element: this.elements.title
    });
    this.elements.titleSpans = this.elements.title.querySelectorAll('span span');
  }

  onAssetLoaded(image) {
    this.length += 1;
    const percent = Math.round(this.length / this.elements.images.length * 100);
    this.elements.number.innerHTML = `${percent}%`;

    if (percent === 100) {
      this.onLoaded();
    }
  }

  createLoader() {
    (0,lodash__WEBPACK_IMPORTED_MODULE_1__.each)(this.elements.images, element => {
      element.src = element.getAttribute('src');

      element.onload = _ => this.onAssetLoaded(element);
    });
  }

  onLoaded() {
    // TODO: ADD THE ANIMATIONS AFTER THE PAGE IS LOADED
    return new Promise(resolve => {
      /*  this.animateOut.to(this.element, {
        autoAlpha: 0,
        delay: 2
      }) */
      this.animateOut = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline();
      this.animateOut.to(this.elements.titleSpans, {
        stagger: 0.1,
        duration: 3,
        ease: 'expo.out',
        y: '100%'
      });
      this.animateOut.to(this.element, {
        scaleY: 0,
        transformOrigin: '0 0',
        ease: 'expo.out'
      });
    });
  }

  destroy() {
    this.element.parentNode.removeChild(this.element);
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
      // 1635381240097
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("691198a058b9a9a31095")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxPQUFPLEdBQUk7QUFDVCxTQUFLbkMsT0FBTCxDQUFhb0MsVUFBYixDQUF3QkMsV0FBeEIsQ0FBb0MsS0FBS3JDLE9BQXpDO0FBQ0Q7O0FBM0U4Qzs7Ozs7Ozs7Ozs7QUNMakQ7QUFDVTtBQUNWLE9BQU8sSUFBVTtBQUNqQjtBQUNBLHNCQUFzQixtQkFBTyxDQUFDLHdKQUFrSCxjQUFjLCtCQUErQjtBQUM3TCxNQUFNLFVBQVU7QUFDaEIsTUFBTSxpQkFBaUI7QUFDdkI7QUFDQTs7Ozs7Ozs7VUNSQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnY2xhc3Nlcy9Db21wb25lbnQnXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJ1xuaW1wb3J0IHsgZWFjaCB9IGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IHNwbGl0IH0gZnJvbSAndXRpbHMvdGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnQ6ICcucHJlbG9hZGVyJyxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZGVyX190ZXh0X190aXRsZScpLFxuICAgICAgICBudW1iZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXJfX251bWJlcicpLFxuICAgICAgICBpbWFnZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXG4gICAgICB9XG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnRzLnRpdGxlKVxuXG4gICAgdGhpcy5sZW5ndGggPSAwXG5cbiAgICB0aGlzLmNyZWF0ZUxvYWRlcigpXG5cbiAgICBzcGxpdCh7XG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnRzLnRpdGxlXG4gICAgfSlcblxuICAgIHNwbGl0KHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXG4gICAgfSlcblxuICAgIHRoaXMuZWxlbWVudHMudGl0bGVTcGFucyA9IHRoaXMuZWxlbWVudHMudGl0bGUucXVlcnlTZWxlY3RvckFsbCgnc3BhbiBzcGFuJylcbiAgfVxuXG4gIG9uQXNzZXRMb2FkZWQgKGltYWdlKSB7XG4gICAgdGhpcy5sZW5ndGggKz0gMVxuICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLnJvdW5kKHRoaXMubGVuZ3RoIC8gdGhpcy5lbGVtZW50cy5pbWFnZXMubGVuZ3RoICogMTAwKVxuXG4gICAgdGhpcy5lbGVtZW50cy5udW1iZXIuaW5uZXJIVE1MID0gYCR7cGVyY2VudH0lYFxuXG4gICAgaWYgKHBlcmNlbnQgPT09IDEwMCkge1xuICAgICAgdGhpcy5vbkxvYWRlZCgpXG4gICAgfVxuICB9XG5cbiAgY3JlYXRlTG9hZGVyICgpIHtcbiAgICBlYWNoKHRoaXMuZWxlbWVudHMuaW1hZ2VzLCBlbGVtZW50ID0+IHtcbiAgICAgIGVsZW1lbnQuc3JjID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3NyYycpXG4gICAgICBlbGVtZW50Lm9ubG9hZCA9IF8gPT4gdGhpcy5vbkFzc2V0TG9hZGVkKGVsZW1lbnQpXG4gICAgfSlcbiAgfVxuXG4gIG9uTG9hZGVkICgpIHtcblxuICAgIC8vIFRPRE86IEFERCBUSEUgQU5JTUFUSU9OUyBBRlRFUiBUSEUgUEFHRSBJUyBMT0FERURcblxuICAgIFxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIC8qICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgZGVsYXk6IDJcbiAgICAgIH0pICovXG5cbiAgICAgIHRoaXMuYW5pbWF0ZU91dCA9IGdzYXAudGltZWxpbmUoKVxuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50cy50aXRsZVNwYW5zLCB7XG4gICAgICAgIHN0YWdnZXI6IDAuMSxcbiAgICAgICAgZHVyYXRpb246IDMsXG4gICAgICAgIGVhc2U6ICdleHBvLm91dCcsXG4gICAgICAgIHk6ICcxMDAlJ1xuICAgICAgfSlcblxuICAgICAgdGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudCwge1xuICAgICAgICBzY2FsZVk6IDAsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAgMCcsXG4gICAgICAgIGVhc2U6ICdleHBvLm91dCdcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudClcbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzNTM4MTI0MDA5N1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS9sdWNhc3NpbHZhL2JhY2t1cC9wcm9qZXRvcy9lbmR1cmFuY2Uvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2OTExOThhMDU4YjlhOWEzMTA5NVwiKSJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJnc2FwIiwiZWFjaCIsInNwbGl0IiwiUHJlbG9hZGVyIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ0aXRsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm51bWJlciIsImltYWdlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiY3JlYXRlTG9hZGVyIiwidGl0bGVTcGFucyIsIm9uQXNzZXRMb2FkZWQiLCJpbWFnZSIsInBlcmNlbnQiLCJNYXRoIiwicm91bmQiLCJpbm5lckhUTUwiLCJvbkxvYWRlZCIsInNyYyIsImdldEF0dHJpYnV0ZSIsIm9ubG9hZCIsIl8iLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGVPdXQiLCJ0aW1lbGluZSIsInRvIiwic3RhZ2dlciIsImR1cmF0aW9uIiwiZWFzZSIsInkiLCJzY2FsZVkiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJkZXN0cm95IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==