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
    (0,utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
      element: this.elements.title
    });
    this.elements.titleSpans = this.elements.title.querySelectorAll('span span span');
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
        stagger: 0.03,
        duration: 2,
        ease: 'expo.out',
        y: '-100%',
        delay: 0.5
      });
      this.animateOut.to(this.elements.number, {
        autoAlpha: 0,
        ease: 'expo.out',
        duration: 1
      });
      this.animateOut.to(this.element, {
        scaleY: '0',
        transformOrigin: '0 0',
        ease: 'expo.out',
        duration: 1
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
      // 1635430247646
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("00fd2bbc1a7bd9a1db8d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jY2RiM2RhNDZiMzhhZTIxYzM0YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsTUFBTUksU0FBTixTQUF3QkoseURBQXhCLENBQWtDO0FBQy9DSyxFQUFBQSxXQUFXLEdBQUk7QUFDYixVQUFNO0FBQ0pDLE1BQUFBLE9BQU8sRUFBRSxZQURMO0FBRUpDLE1BQUFBLFFBQVEsRUFBRTtBQUNSQyxRQUFBQSxLQUFLLEVBQUVDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix5QkFBdkIsQ0FEQztBQUVSQyxRQUFBQSxNQUFNLEVBQUVGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixvQkFBdkIsQ0FGQTtBQUdSRSxRQUFBQSxNQUFNLEVBQUVILFFBQVEsQ0FBQ0ksZ0JBQVQsQ0FBMEIsS0FBMUI7QUFIQTtBQUZOLEtBQU47QUFRQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS1IsUUFBTCxDQUFjQyxLQUExQjtBQUVBLFNBQUtRLE1BQUwsR0FBYyxDQUFkO0FBRUEsU0FBS0MsWUFBTDtBQUVBZCxJQUFBQSxpREFBSyxDQUFDO0FBQ0pHLE1BQUFBLE9BQU8sRUFBRSxLQUFLQyxRQUFMLENBQWNDO0FBRG5CLEtBQUQsQ0FBTDtBQUlBTCxJQUFBQSxpREFBSyxDQUFDO0FBQ0pHLE1BQUFBLE9BQU8sRUFBRSxLQUFLQyxRQUFMLENBQWNDO0FBRG5CLEtBQUQsQ0FBTDtBQUlBTCxJQUFBQSxpREFBSyxDQUFDO0FBQ0pHLE1BQUFBLE9BQU8sRUFBRSxLQUFLQyxRQUFMLENBQWNDO0FBRG5CLEtBQUQsQ0FBTDtBQUlBLFNBQUtELFFBQUwsQ0FBY1csVUFBZCxHQUEyQixLQUFLWCxRQUFMLENBQWNDLEtBQWQsQ0FBb0JLLGdCQUFwQixDQUFxQyxnQkFBckMsQ0FBM0I7QUFDRDs7QUFFRE0sRUFBQUEsYUFBYSxDQUFFQyxLQUFGLEVBQVM7QUFDcEIsU0FBS0osTUFBTCxJQUFlLENBQWY7QUFDQSxVQUFNSyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtQLE1BQUwsR0FBYyxLQUFLVCxRQUFMLENBQWNLLE1BQWQsQ0FBcUJJLE1BQW5DLEdBQTRDLEdBQXZELENBQWhCO0FBRUEsU0FBS1QsUUFBTCxDQUFjSSxNQUFkLENBQXFCYSxTQUFyQixHQUFrQyxHQUFFSCxPQUFRLEdBQTVDOztBQUVBLFFBQUlBLE9BQU8sS0FBSyxHQUFoQixFQUFxQjtBQUNuQixXQUFLSSxRQUFMO0FBQ0Q7QUFDRjs7QUFFRFIsRUFBQUEsWUFBWSxHQUFJO0FBQ2RmLElBQUFBLDRDQUFJLENBQUMsS0FBS0ssUUFBTCxDQUFjSyxNQUFmLEVBQXVCTixPQUFPLElBQUk7QUFDcENBLE1BQUFBLE9BQU8sQ0FBQ29CLEdBQVIsR0FBY3BCLE9BQU8sQ0FBQ3FCLFlBQVIsQ0FBcUIsS0FBckIsQ0FBZDs7QUFDQXJCLE1BQUFBLE9BQU8sQ0FBQ3NCLE1BQVIsR0FBaUJDLENBQUMsSUFBSSxLQUFLVixhQUFMLENBQW1CYixPQUFuQixDQUF0QjtBQUNELEtBSEcsQ0FBSjtBQUlEOztBQUVEbUIsRUFBQUEsUUFBUSxHQUFJO0FBRVY7QUFHQSxXQUFPLElBQUlLLE9BQUosQ0FBWUMsT0FBTyxJQUFJO0FBQzVCO0FBQ047QUFDQTtBQUNBO0FBRU0sV0FBS0MsVUFBTCxHQUFrQi9CLHFEQUFBLEVBQWxCO0FBRUEsV0FBSytCLFVBQUwsQ0FBZ0JFLEVBQWhCLENBQW1CLEtBQUszQixRQUFMLENBQWNXLFVBQWpDLEVBQTZDO0FBQzNDaUIsUUFBQUEsT0FBTyxFQUFFLElBRGtDO0FBRTNDQyxRQUFBQSxRQUFRLEVBQUUsQ0FGaUM7QUFHM0NDLFFBQUFBLElBQUksRUFBRSxVQUhxQztBQUkzQ0MsUUFBQUEsQ0FBQyxFQUFFLE9BSndDO0FBSzNDQyxRQUFBQSxLQUFLLEVBQUU7QUFMb0MsT0FBN0M7QUFTQSxXQUFLUCxVQUFMLENBQWdCRSxFQUFoQixDQUFtQixLQUFLM0IsUUFBTCxDQUFjSSxNQUFqQyxFQUF5QztBQUN2QzZCLFFBQUFBLFNBQVMsRUFBRSxDQUQ0QjtBQUV2Q0gsUUFBQUEsSUFBSSxFQUFFLFVBRmlDO0FBR3ZDRCxRQUFBQSxRQUFRLEVBQUU7QUFINkIsT0FBekM7QUFNQSxXQUFLSixVQUFMLENBQWdCRSxFQUFoQixDQUFtQixLQUFLNUIsT0FBeEIsRUFBaUM7QUFDL0JtQyxRQUFBQSxNQUFNLEVBQUUsR0FEdUI7QUFFL0JDLFFBQUFBLGVBQWUsRUFBRSxLQUZjO0FBRy9CTCxRQUFBQSxJQUFJLEVBQUUsVUFIeUI7QUFJL0JELFFBQUFBLFFBQVEsRUFBRTtBQUpxQixPQUFqQztBQU1ELEtBN0JNLENBQVA7QUE4QkQ7O0FBRURPLEVBQUFBLE9BQU8sR0FBSTtBQUNULFNBQUtyQyxPQUFMLENBQWFzQyxVQUFiLENBQXdCQyxXQUF4QixDQUFvQyxLQUFLdkMsT0FBekM7QUFDRDs7QUF4RjhDOzs7Ozs7Ozs7OztBQ0xqRDtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsd0pBQWtILGNBQWMsK0JBQStCO0FBQzdMLE1BQU0sVUFBVTtBQUNoQixNQUFNLGlCQUFpQjtBQUN2QjtBQUNBOzs7Ozs7OztVQ1JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvUHJlbG9hZGVyLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICdjbGFzc2VzL0NvbXBvbmVudCdcbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgc3BsaXQgfSBmcm9tICd1dGlscy90ZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgZWxlbWVudDogJy5wcmVsb2FkZXInLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgdGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXJfX3RleHRfX3RpdGxlJyksXG4gICAgICAgIG51bWJlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWRlcl9fbnVtYmVyJyksXG4gICAgICAgIGltYWdlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcbiAgICAgIH1cbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudHMudGl0bGUpXG5cbiAgICB0aGlzLmxlbmd0aCA9IDBcblxuICAgIHRoaXMuY3JlYXRlTG9hZGVyKClcblxuICAgIHNwbGl0KHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGVcbiAgICB9KVxuXG4gICAgc3BsaXQoe1xuICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50cy50aXRsZSxcbiAgICB9KVxuXG4gICAgc3BsaXQoe1xuICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50cy50aXRsZSxcbiAgICB9KVxuXG4gICAgdGhpcy5lbGVtZW50cy50aXRsZVNwYW5zID0gdGhpcy5lbGVtZW50cy50aXRsZS5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuIHNwYW4gc3BhbicpXG4gIH1cblxuICBvbkFzc2V0TG9hZGVkIChpbWFnZSkge1xuICAgIHRoaXMubGVuZ3RoICs9IDFcbiAgICBjb25zdCBwZXJjZW50ID0gTWF0aC5yb3VuZCh0aGlzLmxlbmd0aCAvIHRoaXMuZWxlbWVudHMuaW1hZ2VzLmxlbmd0aCAqIDEwMClcblxuICAgIHRoaXMuZWxlbWVudHMubnVtYmVyLmlubmVySFRNTCA9IGAke3BlcmNlbnR9JWBcblxuICAgIGlmIChwZXJjZW50ID09PSAxMDApIHtcbiAgICAgIHRoaXMub25Mb2FkZWQoKVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUxvYWRlciAoKSB7XG4gICAgZWFjaCh0aGlzLmVsZW1lbnRzLmltYWdlcywgZWxlbWVudCA9PiB7XG4gICAgICBlbGVtZW50LnNyYyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzcmMnKVxuICAgICAgZWxlbWVudC5vbmxvYWQgPSBfID0+IHRoaXMub25Bc3NldExvYWRlZChlbGVtZW50KVxuICAgIH0pXG4gIH1cblxuICBvbkxvYWRlZCAoKSB7XG5cbiAgICAvLyBUT0RPOiBBREQgVEhFIEFOSU1BVElPTlMgQUZURVIgVEhFIFBBR0UgSVMgTE9BREVEXG5cbiAgICBcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAvKiAgdGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudCwge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIGRlbGF5OiAyXG4gICAgICB9KSAqL1xuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQgPSBnc2FwLnRpbWVsaW5lKClcblxuICAgICAgdGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudHMudGl0bGVTcGFucywge1xuICAgICAgICBzdGFnZ2VyOiAwLjAzLFxuICAgICAgICBkdXJhdGlvbjogMixcbiAgICAgICAgZWFzZTogJ2V4cG8ub3V0JyxcbiAgICAgICAgeTogJy0xMDAlJyxcbiAgICAgICAgZGVsYXk6IDAuNVxuICAgICAgfSlcblxuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50cy5udW1iZXIsIHtcbiAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICBlYXNlOiAnZXhwby5vdXQnLFxuICAgICAgICBkdXJhdGlvbjogMVxuICAgICAgfSlcblxuICAgICAgdGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudCwge1xuICAgICAgICBzY2FsZVk6ICcwJyxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCAwJyxcbiAgICAgICAgZWFzZTogJ2V4cG8ub3V0JyxcbiAgICAgICAgZHVyYXRpb246IDFcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudClcbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzNTQzMDI0NzY0NlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS9sdWNhc3NpbHZhL2JhY2t1cC9wcm9qZXRvcy9lbmR1cmFuY2Uvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwMGZkMmJiYzFhN2JkOWExZGI4ZFwiKSJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJnc2FwIiwiZWFjaCIsInNwbGl0IiwiUHJlbG9hZGVyIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ0aXRsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm51bWJlciIsImltYWdlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiY3JlYXRlTG9hZGVyIiwidGl0bGVTcGFucyIsIm9uQXNzZXRMb2FkZWQiLCJpbWFnZSIsInBlcmNlbnQiLCJNYXRoIiwicm91bmQiLCJpbm5lckhUTUwiLCJvbkxvYWRlZCIsInNyYyIsImdldEF0dHJpYnV0ZSIsIm9ubG9hZCIsIl8iLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGVPdXQiLCJ0aW1lbGluZSIsInRvIiwic3RhZ2dlciIsImR1cmF0aW9uIiwiZWFzZSIsInkiLCJkZWxheSIsImF1dG9BbHBoYSIsInNjYWxlWSIsInRyYW5zZm9ybU9yaWdpbiIsImRlc3Ryb3kiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9