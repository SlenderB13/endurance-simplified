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
      // 1634937375688
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("68a0897e8d2d486433f4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40YmE1NjkxMGRjOWI3MjNjM2E0ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsTUFBTUksU0FBTixTQUF3QkoseURBQXhCLENBQWtDO0FBQy9DSyxFQUFBQSxXQUFXLEdBQUk7QUFDYixVQUFNO0FBQ0pDLE1BQUFBLE9BQU8sRUFBRSxZQURMO0FBRUpDLE1BQUFBLFFBQVEsRUFBRTtBQUNSQyxRQUFBQSxLQUFLLEVBQUVDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix5QkFBdkIsQ0FEQztBQUVSQyxRQUFBQSxNQUFNLEVBQUVGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixvQkFBdkIsQ0FGQTtBQUdSRSxRQUFBQSxNQUFNLEVBQUVILFFBQVEsQ0FBQ0ksZ0JBQVQsQ0FBMEIsS0FBMUI7QUFIQTtBQUZOLEtBQU47QUFTQSxTQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUVBLFNBQUtDLFlBQUw7QUFFQVosSUFBQUEsaURBQUssQ0FBQztBQUNKRyxNQUFBQSxPQUFPLEVBQUUsS0FBS0MsUUFBTCxDQUFjQyxLQURuQjtBQUVKUSxNQUFBQSxVQUFVLEVBQUU7QUFGUixLQUFELENBQUw7QUFLQWIsSUFBQUEsaURBQUssQ0FBQztBQUNKRyxNQUFBQSxPQUFPLEVBQUUsS0FBS0MsUUFBTCxDQUFjQyxLQURuQjtBQUVKUSxNQUFBQSxVQUFVLEVBQUU7QUFGUixLQUFELENBQUw7QUFLQSxTQUFLVCxRQUFMLENBQWNVLFVBQWQsR0FBMkIsS0FBS1YsUUFBTCxDQUFjQyxLQUFkLENBQW9CSyxnQkFBcEIsQ0FBcUMsV0FBckMsQ0FBM0I7QUFDRDs7QUFFREssRUFBQUEsYUFBYSxDQUFFQyxLQUFGLEVBQVM7QUFDcEIsU0FBS0wsTUFBTCxJQUFlLENBQWY7QUFDQSxVQUFNTSxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtSLE1BQUwsR0FBYyxLQUFLUCxRQUFMLENBQWNLLE1BQWQsQ0FBcUJFLE1BQW5DLEdBQTRDLEdBQXZELENBQWhCO0FBRUEsU0FBS1AsUUFBTCxDQUFjSSxNQUFkLENBQXFCWSxTQUFyQixHQUFrQyxHQUFFSCxPQUFRLEdBQTVDOztBQUVBLFFBQUlBLE9BQU8sS0FBSyxHQUFoQixFQUFxQjtBQUNuQixXQUFLSSxRQUFMO0FBQ0Q7QUFDRjs7QUFFRFQsRUFBQUEsWUFBWSxHQUFJO0FBQ2RiLElBQUFBLDRDQUFJLENBQUMsS0FBS0ssUUFBTCxDQUFjSyxNQUFmLEVBQXVCTixPQUFPLElBQUk7QUFDcENBLE1BQUFBLE9BQU8sQ0FBQ21CLEdBQVIsR0FBY25CLE9BQU8sQ0FBQ29CLFlBQVIsQ0FBcUIsS0FBckIsQ0FBZDs7QUFDQXBCLE1BQUFBLE9BQU8sQ0FBQ3FCLE1BQVIsR0FBaUJDLENBQUMsSUFBSSxLQUFLVixhQUFMLENBQW1CWixPQUFuQixDQUF0QjtBQUNELEtBSEcsQ0FBSjtBQUlEOztBQUVEa0IsRUFBQUEsUUFBUSxHQUFJO0FBQ1YsV0FBTyxJQUFJSyxPQUFKLENBQVlDLE9BQU8sSUFBSTtBQUM1QjtBQUNOO0FBQ0E7QUFDQTtBQUVNLFdBQUtDLFVBQUwsR0FBa0I5QixxREFBQSxFQUFsQjtBQUVBLFdBQUs4QixVQUFMLENBQWdCRSxFQUFoQixDQUFtQixLQUFLMUIsUUFBTCxDQUFjVSxVQUFqQyxFQUE2QztBQUMzQ2lCLFFBQUFBLE9BQU8sRUFBRSxHQURrQztBQUUzQ0MsUUFBQUEsUUFBUSxFQUFFLEdBRmlDO0FBRzNDQyxRQUFBQSxJQUFJLEVBQUUsVUFIcUM7QUFJM0NDLFFBQUFBLENBQUMsRUFBRTtBQUp3QyxPQUE3QztBQU9BLFdBQUtOLFVBQUwsQ0FBZ0JFLEVBQWhCLENBQW1CLEtBQUszQixPQUF4QixFQUFpQztBQUMvQmdDLFFBQUFBLE1BQU0sRUFBRSxDQUR1QjtBQUUvQkMsUUFBQUEsZUFBZSxFQUFFLEtBRmM7QUFHL0JILFFBQUFBLElBQUksRUFBRTtBQUh5QixPQUFqQztBQUtELEtBcEJNLENBQVA7QUFxQkQ7O0FBRURJLEVBQUFBLE9BQU8sR0FBSTtBQUNULFNBQUtsQyxPQUFMLENBQWFtQyxVQUFiLENBQXdCQyxXQUF4QixDQUFvQyxLQUFLcEMsT0FBekM7QUFDRDs7QUF4RThDOzs7Ozs7Ozs7OztBQ0xqRDtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsd0pBQWtILGNBQWMsK0JBQStCO0FBQzdMLE1BQU0sVUFBVTtBQUNoQixNQUFNLGlCQUFpQjtBQUN2QjtBQUNBOzs7Ozs7OztVQ1JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvUHJlbG9hZGVyLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICdjbGFzc2VzL0NvbXBvbmVudCdcbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgc3BsaXQgfSBmcm9tICd1dGlscy90ZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgZWxlbWVudDogJy5wcmVsb2FkZXInLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgdGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXJfX3RleHRfX3RpdGxlJyksXG4gICAgICAgIG51bWJlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWRlcl9fbnVtYmVyJyksXG4gICAgICAgIGltYWdlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5sZW5ndGggPSAwXG5cbiAgICB0aGlzLmNyZWF0ZUxvYWRlcigpXG5cbiAgICBzcGxpdCh7XG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnRzLnRpdGxlLFxuICAgICAgZXhwcmVzc2lvbjogJzxicj4nXG4gICAgfSlcblxuICAgIHNwbGl0KHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXG4gICAgICBleHByZXNzaW9uOiAnPGJyPidcbiAgICB9KVxuXG4gICAgdGhpcy5lbGVtZW50cy50aXRsZVNwYW5zID0gdGhpcy5lbGVtZW50cy50aXRsZS5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuIHNwYW4nKVxuICB9XG5cbiAgb25Bc3NldExvYWRlZCAoaW1hZ2UpIHtcbiAgICB0aGlzLmxlbmd0aCArPSAxXG4gICAgY29uc3QgcGVyY2VudCA9IE1hdGgucm91bmQodGhpcy5sZW5ndGggLyB0aGlzLmVsZW1lbnRzLmltYWdlcy5sZW5ndGggKiAxMDApXG5cbiAgICB0aGlzLmVsZW1lbnRzLm51bWJlci5pbm5lckhUTUwgPSBgJHtwZXJjZW50fSVgXG5cbiAgICBpZiAocGVyY2VudCA9PT0gMTAwKSB7XG4gICAgICB0aGlzLm9uTG9hZGVkKClcbiAgICB9XG4gIH1cblxuICBjcmVhdGVMb2FkZXIgKCkge1xuICAgIGVhY2godGhpcy5lbGVtZW50cy5pbWFnZXMsIGVsZW1lbnQgPT4ge1xuICAgICAgZWxlbWVudC5zcmMgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnc3JjJylcbiAgICAgIGVsZW1lbnQub25sb2FkID0gXyA9PiB0aGlzLm9uQXNzZXRMb2FkZWQoZWxlbWVudClcbiAgICB9KVxuICB9XG5cbiAgb25Mb2FkZWQgKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIC8qICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgZGVsYXk6IDJcbiAgICAgIH0pICovXG5cbiAgICAgIHRoaXMuYW5pbWF0ZU91dCA9IGdzYXAudGltZWxpbmUoKVxuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50cy50aXRsZVNwYW5zLCB7XG4gICAgICAgIHN0YWdnZXI6IDAuMSxcbiAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgICAgZWFzZTogJ2V4cG8ub3V0JyxcbiAgICAgICAgeTogJzEwMCUnXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIHNjYWxlWTogMCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCAwJyxcbiAgICAgICAgZWFzZTogJ2V4cG8ub3V0J1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KVxuICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjM0OTM3Mzc1Njg4XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9ob21lL2x1Y2Fzc2lsdmEvYmFja3VwL3Byb2pldG9zL2VuZHVyYW5jZS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCJcIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjY4YTA4OTdlOGQyZDQ4NjQzM2Y0XCIpIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImdzYXAiLCJlYWNoIiwic3BsaXQiLCJQcmVsb2FkZXIiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsInRpdGxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibnVtYmVyIiwiaW1hZ2VzIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImNyZWF0ZUxvYWRlciIsImV4cHJlc3Npb24iLCJ0aXRsZVNwYW5zIiwib25Bc3NldExvYWRlZCIsImltYWdlIiwicGVyY2VudCIsIk1hdGgiLCJyb3VuZCIsImlubmVySFRNTCIsIm9uTG9hZGVkIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwib25sb2FkIiwiXyIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0ZU91dCIsInRpbWVsaW5lIiwidG8iLCJzdGFnZ2VyIiwiZHVyYXRpb24iLCJlYXNlIiwieSIsInNjYWxlWSIsInRyYW5zZm9ybU9yaWdpbiIsImRlc3Ryb3kiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9