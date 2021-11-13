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
    console.log(image);
    this.length += 1;
    const percent = Math.round(this.length / this.elements.images.length * 100);
    this.elements.number.innerHTML = `${percent}%`;

    if (percent === 100) {
      this.onLoaded();
    }
  }

  createLoader() {
    (0,lodash__WEBPACK_IMPORTED_MODULE_1__.each)(this.elements.images, element => {
      element.src = element.getAttribute('data-src');

      element.onload = _ => this.onAssetLoaded(element);
    });
  }

  onLoaded() {
    return new Promise(resolve => {
      /*  this.animateOut.to(this.element, {
        autoAlpha: 0,
        delay: 2
      }) */
      this.animateOut = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline();
      this.animateOut.to(this.elements.titleSpans, {
        stagger: 0.1,
        duration: 1.5,
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
      // 1634935782390
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("efe860b034cdd395352b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44ZDYxN2I5NmZlMGU2NGZmMzIzNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsTUFBTUksU0FBTixTQUF3QkoseURBQXhCLENBQWtDO0FBQy9DSyxFQUFBQSxXQUFXLEdBQUk7QUFDYixVQUFNO0FBQ0pDLE1BQUFBLE9BQU8sRUFBRSxZQURMO0FBRUpDLE1BQUFBLFFBQVEsRUFBRTtBQUNSQyxRQUFBQSxLQUFLLEVBQUVDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix5QkFBdkIsQ0FEQztBQUVSQyxRQUFBQSxNQUFNLEVBQUVGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixvQkFBdkIsQ0FGQTtBQUdSRSxRQUFBQSxNQUFNLEVBQUVILFFBQVEsQ0FBQ0ksZ0JBQVQsQ0FBMEIsS0FBMUI7QUFIQTtBQUZOLEtBQU47QUFTQSxTQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUVBLFNBQUtDLFlBQUw7QUFFQVosSUFBQUEsaURBQUssQ0FBQztBQUNKRyxNQUFBQSxPQUFPLEVBQUUsS0FBS0MsUUFBTCxDQUFjQyxLQURuQjtBQUVKUSxNQUFBQSxVQUFVLEVBQUU7QUFGUixLQUFELENBQUw7QUFLQWIsSUFBQUEsaURBQUssQ0FBQztBQUNKRyxNQUFBQSxPQUFPLEVBQUUsS0FBS0MsUUFBTCxDQUFjQyxLQURuQjtBQUVKUSxNQUFBQSxVQUFVLEVBQUU7QUFGUixLQUFELENBQUw7QUFLQSxTQUFLVCxRQUFMLENBQWNVLFVBQWQsR0FBMkIsS0FBS1YsUUFBTCxDQUFjQyxLQUFkLENBQW9CSyxnQkFBcEIsQ0FBcUMsV0FBckMsQ0FBM0I7QUFDRDs7QUFFREssRUFBQUEsYUFBYSxDQUFFQyxLQUFGLEVBQVM7QUFDcEJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0EsU0FBS0wsTUFBTCxJQUFlLENBQWY7QUFDQSxVQUFNUSxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtWLE1BQUwsR0FBYyxLQUFLUCxRQUFMLENBQWNLLE1BQWQsQ0FBcUJFLE1BQW5DLEdBQTRDLEdBQXZELENBQWhCO0FBRUEsU0FBS1AsUUFBTCxDQUFjSSxNQUFkLENBQXFCYyxTQUFyQixHQUFrQyxHQUFFSCxPQUFRLEdBQTVDOztBQUVBLFFBQUlBLE9BQU8sS0FBSyxHQUFoQixFQUFxQjtBQUNuQixXQUFLSSxRQUFMO0FBQ0Q7QUFDRjs7QUFFRFgsRUFBQUEsWUFBWSxHQUFJO0FBQ2RiLElBQUFBLDRDQUFJLENBQUMsS0FBS0ssUUFBTCxDQUFjSyxNQUFmLEVBQXVCTixPQUFPLElBQUk7QUFDcENBLE1BQUFBLE9BQU8sQ0FBQ3FCLEdBQVIsR0FBY3JCLE9BQU8sQ0FBQ3NCLFlBQVIsQ0FBcUIsVUFBckIsQ0FBZDs7QUFDQXRCLE1BQUFBLE9BQU8sQ0FBQ3VCLE1BQVIsR0FBaUJDLENBQUMsSUFBSSxLQUFLWixhQUFMLENBQW1CWixPQUFuQixDQUF0QjtBQUNELEtBSEcsQ0FBSjtBQUlEOztBQUVEb0IsRUFBQUEsUUFBUSxHQUFJO0FBQ1YsV0FBTyxJQUFJSyxPQUFKLENBQVlDLE9BQU8sSUFBSTtBQUM1QjtBQUNOO0FBQ0E7QUFDQTtBQUVNLFdBQUtDLFVBQUwsR0FBa0JoQyxxREFBQSxFQUFsQjtBQUVBLFdBQUtnQyxVQUFMLENBQWdCRSxFQUFoQixDQUFtQixLQUFLNUIsUUFBTCxDQUFjVSxVQUFqQyxFQUE2QztBQUMzQ21CLFFBQUFBLE9BQU8sRUFBRSxHQURrQztBQUUzQ0MsUUFBQUEsUUFBUSxFQUFFLEdBRmlDO0FBRzNDQyxRQUFBQSxJQUFJLEVBQUUsVUFIcUM7QUFJM0NDLFFBQUFBLENBQUMsRUFBRTtBQUp3QyxPQUE3QztBQU9BLFdBQUtOLFVBQUwsQ0FBZ0JFLEVBQWhCLENBQW1CLEtBQUs3QixPQUF4QixFQUFpQztBQUMvQmtDLFFBQUFBLE1BQU0sRUFBRSxDQUR1QjtBQUUvQkMsUUFBQUEsZUFBZSxFQUFFLEtBRmM7QUFHL0JILFFBQUFBLElBQUksRUFBRTtBQUh5QixPQUFqQztBQUtELEtBcEJNLENBQVA7QUFxQkQ7O0FBRURJLEVBQUFBLE9BQU8sR0FBSTtBQUNULFNBQUtwQyxPQUFMLENBQWFxQyxVQUFiLENBQXdCQyxXQUF4QixDQUFvQyxLQUFLdEMsT0FBekM7QUFDRDs7QUF6RThDOzs7Ozs7Ozs7OztBQ0xqRDtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsd0pBQWtILGNBQWMsK0JBQStCO0FBQzdMLE1BQU0sVUFBVTtBQUNoQixNQUFNLGlCQUFpQjtBQUN2QjtBQUNBOzs7Ozs7OztVQ1JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvUHJlbG9hZGVyLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICdjbGFzc2VzL0NvbXBvbmVudCdcbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgc3BsaXQgfSBmcm9tICd1dGlscy90ZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgZWxlbWVudDogJy5wcmVsb2FkZXInLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgdGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXJfX3RleHRfX3RpdGxlJyksXG4gICAgICAgIG51bWJlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWRlcl9fbnVtYmVyJyksXG4gICAgICAgIGltYWdlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5sZW5ndGggPSAwXG5cbiAgICB0aGlzLmNyZWF0ZUxvYWRlcigpXG5cbiAgICBzcGxpdCh7XG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnRzLnRpdGxlLFxuICAgICAgZXhwcmVzc2lvbjogJzxicj4nXG4gICAgfSlcblxuICAgIHNwbGl0KHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXG4gICAgICBleHByZXNzaW9uOiAnPGJyPidcbiAgICB9KVxuXG4gICAgdGhpcy5lbGVtZW50cy50aXRsZVNwYW5zID0gdGhpcy5lbGVtZW50cy50aXRsZS5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuIHNwYW4nKVxuICB9XG5cbiAgb25Bc3NldExvYWRlZCAoaW1hZ2UpIHtcbiAgICBjb25zb2xlLmxvZyhpbWFnZSlcbiAgICB0aGlzLmxlbmd0aCArPSAxXG4gICAgY29uc3QgcGVyY2VudCA9IE1hdGgucm91bmQodGhpcy5sZW5ndGggLyB0aGlzLmVsZW1lbnRzLmltYWdlcy5sZW5ndGggKiAxMDApXG5cbiAgICB0aGlzLmVsZW1lbnRzLm51bWJlci5pbm5lckhUTUwgPSBgJHtwZXJjZW50fSVgXG5cbiAgICBpZiAocGVyY2VudCA9PT0gMTAwKSB7XG4gICAgICB0aGlzLm9uTG9hZGVkKClcbiAgICB9XG4gIH1cblxuICBjcmVhdGVMb2FkZXIgKCkge1xuICAgIGVhY2godGhpcy5lbGVtZW50cy5pbWFnZXMsIGVsZW1lbnQgPT4ge1xuICAgICAgZWxlbWVudC5zcmMgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKVxuICAgICAgZWxlbWVudC5vbmxvYWQgPSBfID0+IHRoaXMub25Bc3NldExvYWRlZChlbGVtZW50KVxuICAgIH0pXG4gIH1cblxuICBvbkxvYWRlZCAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgLyogIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICBkZWxheTogMlxuICAgICAgfSkgKi9cblxuICAgICAgdGhpcy5hbmltYXRlT3V0ID0gZ3NhcC50aW1lbGluZSgpXG5cbiAgICAgIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnRzLnRpdGxlU3BhbnMsIHtcbiAgICAgICAgc3RhZ2dlcjogMC4xLFxuICAgICAgICBkdXJhdGlvbjogMS41LFxuICAgICAgICBlYXNlOiAnZXhwby5vdXQnLFxuICAgICAgICB5OiAnMTAwJSdcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgc2NhbGVZOiAwLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwIDAnLFxuICAgICAgICBlYXNlOiAnZXhwby5vdXQnXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpXG4gIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MzQ5MzU3ODIzOTBcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUvbHVjYXNzaWx2YS9iYWNrdXAvcHJvamV0b3MvZW5kdXJhbmNlL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcInB1YmxpY1BhdGhcIjpcIlwiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWZlODYwYjAzNGNkZDM5NTM1MmJcIikiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiZ3NhcCIsImVhY2giLCJzcGxpdCIsIlByZWxvYWRlciIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGl0bGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJudW1iZXIiLCJpbWFnZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiY3JlYXRlTG9hZGVyIiwiZXhwcmVzc2lvbiIsInRpdGxlU3BhbnMiLCJvbkFzc2V0TG9hZGVkIiwiaW1hZ2UiLCJjb25zb2xlIiwibG9nIiwicGVyY2VudCIsIk1hdGgiLCJyb3VuZCIsImlubmVySFRNTCIsIm9uTG9hZGVkIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwib25sb2FkIiwiXyIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0ZU91dCIsInRpbWVsaW5lIiwidG8iLCJzdGFnZ2VyIiwiZHVyYXRpb24iLCJlYXNlIiwieSIsInNjYWxlWSIsInRyYW5zZm9ybU9yaWdpbiIsImRlc3Ryb3kiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9