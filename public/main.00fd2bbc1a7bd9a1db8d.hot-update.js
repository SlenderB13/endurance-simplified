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
        autoAlpha: 0,
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
      // 1635430488256
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fa4cf03acfa2998f5fb4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wMGZkMmJiYzFhN2JkOWExZGI4ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsTUFBTUksU0FBTixTQUF3QkoseURBQXhCLENBQWtDO0FBQy9DSyxFQUFBQSxXQUFXLEdBQUk7QUFDYixVQUFNO0FBQ0pDLE1BQUFBLE9BQU8sRUFBRSxZQURMO0FBRUpDLE1BQUFBLFFBQVEsRUFBRTtBQUNSQyxRQUFBQSxLQUFLLEVBQUVDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix5QkFBdkIsQ0FEQztBQUVSQyxRQUFBQSxNQUFNLEVBQUVGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixvQkFBdkIsQ0FGQTtBQUdSRSxRQUFBQSxNQUFNLEVBQUVILFFBQVEsQ0FBQ0ksZ0JBQVQsQ0FBMEIsS0FBMUI7QUFIQTtBQUZOLEtBQU47QUFRQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS1IsUUFBTCxDQUFjQyxLQUExQjtBQUVBLFNBQUtRLE1BQUwsR0FBYyxDQUFkO0FBRUEsU0FBS0MsWUFBTDtBQUVBZCxJQUFBQSxpREFBSyxDQUFDO0FBQ0pHLE1BQUFBLE9BQU8sRUFBRSxLQUFLQyxRQUFMLENBQWNDO0FBRG5CLEtBQUQsQ0FBTDtBQUlBTCxJQUFBQSxpREFBSyxDQUFDO0FBQ0pHLE1BQUFBLE9BQU8sRUFBRSxLQUFLQyxRQUFMLENBQWNDO0FBRG5CLEtBQUQsQ0FBTDtBQUlBTCxJQUFBQSxpREFBSyxDQUFDO0FBQ0pHLE1BQUFBLE9BQU8sRUFBRSxLQUFLQyxRQUFMLENBQWNDO0FBRG5CLEtBQUQsQ0FBTDtBQUlBLFNBQUtELFFBQUwsQ0FBY1csVUFBZCxHQUEyQixLQUFLWCxRQUFMLENBQWNDLEtBQWQsQ0FBb0JLLGdCQUFwQixDQUFxQyxnQkFBckMsQ0FBM0I7QUFDRDs7QUFFRE0sRUFBQUEsYUFBYSxDQUFFQyxLQUFGLEVBQVM7QUFDcEIsU0FBS0osTUFBTCxJQUFlLENBQWY7QUFDQSxVQUFNSyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtQLE1BQUwsR0FBYyxLQUFLVCxRQUFMLENBQWNLLE1BQWQsQ0FBcUJJLE1BQW5DLEdBQTRDLEdBQXZELENBQWhCO0FBRUEsU0FBS1QsUUFBTCxDQUFjSSxNQUFkLENBQXFCYSxTQUFyQixHQUFrQyxHQUFFSCxPQUFRLEdBQTVDOztBQUVBLFFBQUlBLE9BQU8sS0FBSyxHQUFoQixFQUFxQjtBQUNuQixXQUFLSSxRQUFMO0FBQ0Q7QUFDRjs7QUFFRFIsRUFBQUEsWUFBWSxHQUFJO0FBQ2RmLElBQUFBLDRDQUFJLENBQUMsS0FBS0ssUUFBTCxDQUFjSyxNQUFmLEVBQXVCTixPQUFPLElBQUk7QUFDcENBLE1BQUFBLE9BQU8sQ0FBQ29CLEdBQVIsR0FBY3BCLE9BQU8sQ0FBQ3FCLFlBQVIsQ0FBcUIsS0FBckIsQ0FBZDs7QUFDQXJCLE1BQUFBLE9BQU8sQ0FBQ3NCLE1BQVIsR0FBaUJDLENBQUMsSUFBSSxLQUFLVixhQUFMLENBQW1CYixPQUFuQixDQUF0QjtBQUNELEtBSEcsQ0FBSjtBQUlEOztBQUVEbUIsRUFBQUEsUUFBUSxHQUFJO0FBRVY7QUFHQSxXQUFPLElBQUlLLE9BQUosQ0FBWUMsT0FBTyxJQUFJO0FBQzVCO0FBQ047QUFDQTtBQUNBO0FBRU0sV0FBS0MsVUFBTCxHQUFrQi9CLHFEQUFBLEVBQWxCO0FBRUEsV0FBSytCLFVBQUwsQ0FBZ0JFLEVBQWhCLENBQW1CLEtBQUszQixRQUFMLENBQWNXLFVBQWpDLEVBQTZDO0FBQzNDaUIsUUFBQUEsT0FBTyxFQUFFLElBRGtDO0FBRTNDQyxRQUFBQSxRQUFRLEVBQUUsQ0FGaUM7QUFHM0NDLFFBQUFBLElBQUksRUFBRSxVQUhxQztBQUkzQ0MsUUFBQUEsQ0FBQyxFQUFFLE9BSndDO0FBSzNDQyxRQUFBQSxLQUFLLEVBQUU7QUFMb0MsT0FBN0M7QUFTQSxXQUFLUCxVQUFMLENBQWdCRSxFQUFoQixDQUFtQixLQUFLM0IsUUFBTCxDQUFjSSxNQUFqQyxFQUF5QztBQUN2QzZCLFFBQUFBLFNBQVMsRUFBRSxDQUQ0QjtBQUV2Q0gsUUFBQUEsSUFBSSxFQUFFLFVBRmlDO0FBR3ZDRCxRQUFBQSxRQUFRLEVBQUU7QUFINkIsT0FBekM7QUFNQSxXQUFLSixVQUFMLENBQWdCRSxFQUFoQixDQUFtQixLQUFLNUIsT0FBeEIsRUFBaUM7QUFDL0JrQyxRQUFBQSxTQUFTLEVBQUUsQ0FEb0I7QUFFL0JILFFBQUFBLElBQUksRUFBRSxVQUZ5QjtBQUcvQkQsUUFBQUEsUUFBUSxFQUFFO0FBSHFCLE9BQWpDO0FBS0QsS0E1Qk0sQ0FBUDtBQTZCRDs7QUFFREssRUFBQUEsT0FBTyxHQUFJO0FBQ1QsU0FBS25DLE9BQUwsQ0FBYW9DLFVBQWIsQ0FBd0JDLFdBQXhCLENBQW9DLEtBQUtyQyxPQUF6QztBQUNEOztBQXZGOEM7Ozs7Ozs7Ozs7O0FDTGpEO0FBQ1U7QUFDVixPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyx3SkFBa0gsY0FBYywrQkFBK0I7QUFDN0wsTUFBTSxVQUFVO0FBQ2hCLE1BQU0saUJBQWlCO0FBQ3ZCO0FBQ0E7Ozs7Ozs7O1VDUkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9QcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gJ2NsYXNzZXMvQ29tcG9uZW50J1xuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCdcbmltcG9ydCB7IGVhY2ggfSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyBzcGxpdCB9IGZyb20gJ3V0aWxzL3RleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcih7XG4gICAgICBlbGVtZW50OiAnLnByZWxvYWRlcicsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICB0aXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWRlcl9fdGV4dF9fdGl0bGUnKSxcbiAgICAgICAgbnVtYmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZGVyX19udW1iZXInKSxcbiAgICAgICAgaW1hZ2VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVxuICAgICAgfVxuICAgIH0pXG4gICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50cy50aXRsZSlcblxuICAgIHRoaXMubGVuZ3RoID0gMFxuXG4gICAgdGhpcy5jcmVhdGVMb2FkZXIoKVxuXG4gICAgc3BsaXQoe1xuICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50cy50aXRsZVxuICAgIH0pXG5cbiAgICBzcGxpdCh7XG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnRzLnRpdGxlLFxuICAgIH0pXG5cbiAgICBzcGxpdCh7XG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnRzLnRpdGxlLFxuICAgIH0pXG5cbiAgICB0aGlzLmVsZW1lbnRzLnRpdGxlU3BhbnMgPSB0aGlzLmVsZW1lbnRzLnRpdGxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4gc3BhbiBzcGFuJylcbiAgfVxuXG4gIG9uQXNzZXRMb2FkZWQgKGltYWdlKSB7XG4gICAgdGhpcy5sZW5ndGggKz0gMVxuICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLnJvdW5kKHRoaXMubGVuZ3RoIC8gdGhpcy5lbGVtZW50cy5pbWFnZXMubGVuZ3RoICogMTAwKVxuXG4gICAgdGhpcy5lbGVtZW50cy5udW1iZXIuaW5uZXJIVE1MID0gYCR7cGVyY2VudH0lYFxuXG4gICAgaWYgKHBlcmNlbnQgPT09IDEwMCkge1xuICAgICAgdGhpcy5vbkxvYWRlZCgpXG4gICAgfVxuICB9XG5cbiAgY3JlYXRlTG9hZGVyICgpIHtcbiAgICBlYWNoKHRoaXMuZWxlbWVudHMuaW1hZ2VzLCBlbGVtZW50ID0+IHtcbiAgICAgIGVsZW1lbnQuc3JjID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3NyYycpXG4gICAgICBlbGVtZW50Lm9ubG9hZCA9IF8gPT4gdGhpcy5vbkFzc2V0TG9hZGVkKGVsZW1lbnQpXG4gICAgfSlcbiAgfVxuXG4gIG9uTG9hZGVkICgpIHtcblxuICAgIC8vIFRPRE86IEFERCBUSEUgQU5JTUFUSU9OUyBBRlRFUiBUSEUgUEFHRSBJUyBMT0FERURcblxuICAgIFxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIC8qICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgZGVsYXk6IDJcbiAgICAgIH0pICovXG5cbiAgICAgIHRoaXMuYW5pbWF0ZU91dCA9IGdzYXAudGltZWxpbmUoKVxuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50cy50aXRsZVNwYW5zLCB7XG4gICAgICAgIHN0YWdnZXI6IDAuMDMsXG4gICAgICAgIGR1cmF0aW9uOiAyLFxuICAgICAgICBlYXNlOiAnZXhwby5vdXQnLFxuICAgICAgICB5OiAnLTEwMCUnLFxuICAgICAgICBkZWxheTogMC41XG4gICAgICB9KVxuXG5cbiAgICAgIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnRzLm51bWJlciwge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIGVhc2U6ICdleHBvLm91dCcsXG4gICAgICAgIGR1cmF0aW9uOiAxXG4gICAgICB9KVxuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgZWFzZTogJ2V4cG8ub3V0JyxcbiAgICAgICAgZHVyYXRpb246IDFcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudClcbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzNTQzMDQ4ODI1NlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS9sdWNhc3NpbHZhL2JhY2t1cC9wcm9qZXRvcy9lbmR1cmFuY2Uvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmYTRjZjAzYWNmYTI5OThmNWZiNFwiKSJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJnc2FwIiwiZWFjaCIsInNwbGl0IiwiUHJlbG9hZGVyIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ0aXRsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm51bWJlciIsImltYWdlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiY3JlYXRlTG9hZGVyIiwidGl0bGVTcGFucyIsIm9uQXNzZXRMb2FkZWQiLCJpbWFnZSIsInBlcmNlbnQiLCJNYXRoIiwicm91bmQiLCJpbm5lckhUTUwiLCJvbkxvYWRlZCIsInNyYyIsImdldEF0dHJpYnV0ZSIsIm9ubG9hZCIsIl8iLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGVPdXQiLCJ0aW1lbGluZSIsInRvIiwic3RhZ2dlciIsImR1cmF0aW9uIiwiZWFzZSIsInkiLCJkZWxheSIsImF1dG9BbHBoYSIsImRlc3Ryb3kiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9