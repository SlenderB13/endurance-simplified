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
      element: this.elements.title,
      expression: '<br>'
    });
    (0,utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
      element: this.elements.title,
      expression: '<br>'
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
      // 1635381158174
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("95f664c9728d9a022bf3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLEVBQUU7QUFIeUIsT0FBakM7QUFLRCxLQXBCTSxDQUFQO0FBcUJEOztBQUVESSxFQUFBQSxPQUFPLEdBQUk7QUFDVCxTQUFLcEMsT0FBTCxDQUFhcUMsVUFBYixDQUF3QkMsV0FBeEIsQ0FBb0MsS0FBS3RDLE9BQXpDO0FBQ0Q7O0FBN0U4Qzs7Ozs7Ozs7Ozs7QUNMakQ7QUFDVTtBQUNWLE9BQU8sSUFBVTtBQUNqQjtBQUNBLHNCQUFzQixtQkFBTyxDQUFDLHdKQUFrSCxjQUFjLCtCQUErQjtBQUM3TCxNQUFNLFVBQVU7QUFDaEIsTUFBTSxpQkFBaUI7QUFDdkI7QUFDQTs7Ozs7Ozs7VUNSQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnY2xhc3Nlcy9Db21wb25lbnQnXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJ1xuaW1wb3J0IHsgZWFjaCB9IGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IHNwbGl0IH0gZnJvbSAndXRpbHMvdGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnQ6ICcucHJlbG9hZGVyJyxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZGVyX190ZXh0X190aXRsZScpLFxuICAgICAgICBudW1iZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXJfX251bWJlcicpLFxuICAgICAgICBpbWFnZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXG4gICAgICB9XG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnRzLnRpdGxlKVxuXG4gICAgdGhpcy5sZW5ndGggPSAwXG5cbiAgICB0aGlzLmNyZWF0ZUxvYWRlcigpXG5cbiAgICBzcGxpdCh7XG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnRzLnRpdGxlLFxuICAgICAgZXhwcmVzc2lvbjogJzxicj4nXG4gICAgfSlcblxuICAgIHNwbGl0KHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXG4gICAgICBleHByZXNzaW9uOiAnPGJyPidcbiAgICB9KVxuXG4gICAgdGhpcy5lbGVtZW50cy50aXRsZVNwYW5zID0gdGhpcy5lbGVtZW50cy50aXRsZS5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuIHNwYW4nKVxuICB9XG5cbiAgb25Bc3NldExvYWRlZCAoaW1hZ2UpIHtcbiAgICB0aGlzLmxlbmd0aCArPSAxXG4gICAgY29uc3QgcGVyY2VudCA9IE1hdGgucm91bmQodGhpcy5sZW5ndGggLyB0aGlzLmVsZW1lbnRzLmltYWdlcy5sZW5ndGggKiAxMDApXG5cbiAgICB0aGlzLmVsZW1lbnRzLm51bWJlci5pbm5lckhUTUwgPSBgJHtwZXJjZW50fSVgXG5cbiAgICBpZiAocGVyY2VudCA9PT0gMTAwKSB7XG4gICAgICB0aGlzLm9uTG9hZGVkKClcbiAgICB9XG4gIH1cblxuICBjcmVhdGVMb2FkZXIgKCkge1xuICAgIGVhY2godGhpcy5lbGVtZW50cy5pbWFnZXMsIGVsZW1lbnQgPT4ge1xuICAgICAgZWxlbWVudC5zcmMgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnc3JjJylcbiAgICAgIGVsZW1lbnQub25sb2FkID0gXyA9PiB0aGlzLm9uQXNzZXRMb2FkZWQoZWxlbWVudClcbiAgICB9KVxuICB9XG5cbiAgb25Mb2FkZWQgKCkge1xuXG4gICAgLy8gVE9ETzogQUREIFRIRSBBTklNQVRJT05TIEFGVEVSIFRIRSBQQUdFIElTIExPQURFRFxuXG4gICAgXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgLyogIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICBkZWxheTogMlxuICAgICAgfSkgKi9cblxuICAgICAgdGhpcy5hbmltYXRlT3V0ID0gZ3NhcC50aW1lbGluZSgpXG5cbiAgICAgIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnRzLnRpdGxlU3BhbnMsIHtcbiAgICAgICAgc3RhZ2dlcjogMC4xLFxuICAgICAgICBkdXJhdGlvbjogMyxcbiAgICAgICAgZWFzZTogJ2V4cG8ub3V0JyxcbiAgICAgICAgeTogJzEwMCUnXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIHNjYWxlWTogMCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCAwJyxcbiAgICAgICAgZWFzZTogJ2V4cG8ub3V0J1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KVxuICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjM1MzgxMTU4MTc0XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9ob21lL2x1Y2Fzc2lsdmEvYmFja3VwL3Byb2pldG9zL2VuZHVyYW5jZS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCJcIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk1ZjY2NGM5NzI4ZDlhMDIyYmYzXCIpIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImdzYXAiLCJlYWNoIiwic3BsaXQiLCJQcmVsb2FkZXIiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsInRpdGxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibnVtYmVyIiwiaW1hZ2VzIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJjcmVhdGVMb2FkZXIiLCJleHByZXNzaW9uIiwidGl0bGVTcGFucyIsIm9uQXNzZXRMb2FkZWQiLCJpbWFnZSIsInBlcmNlbnQiLCJNYXRoIiwicm91bmQiLCJpbm5lckhUTUwiLCJvbkxvYWRlZCIsInNyYyIsImdldEF0dHJpYnV0ZSIsIm9ubG9hZCIsIl8iLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGVPdXQiLCJ0aW1lbGluZSIsInRvIiwic3RhZ2dlciIsImR1cmF0aW9uIiwiZWFzZSIsInkiLCJzY2FsZVkiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJkZXN0cm95IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==