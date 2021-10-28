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
        title: document.querySelector('.preloader__text__title').innerHTML,
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
      // 1635381194128
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("98edf8ac722b4fb7732f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45NWY2NjRjOTcyOGQ5YTAyMmJmMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsTUFBTUksU0FBTixTQUF3QkoseURBQXhCLENBQWtDO0FBQy9DSyxFQUFBQSxXQUFXLEdBQUk7QUFDYixVQUFNO0FBQ0pDLE1BQUFBLE9BQU8sRUFBRSxZQURMO0FBRUpDLE1BQUFBLFFBQVEsRUFBRTtBQUNSQyxRQUFBQSxLQUFLLEVBQUVDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix5QkFBdkIsRUFBa0RDLFNBRGpEO0FBRVJDLFFBQUFBLE1BQU0sRUFBRUgsUUFBUSxDQUFDQyxhQUFULENBQXVCLG9CQUF2QixDQUZBO0FBR1JHLFFBQUFBLE1BQU0sRUFBRUosUUFBUSxDQUFDSyxnQkFBVCxDQUEwQixLQUExQjtBQUhBO0FBRk4sS0FBTjtBQVFBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLVCxRQUFMLENBQWNDLEtBQTFCO0FBRUEsU0FBS1MsTUFBTCxHQUFjLENBQWQ7QUFFQSxTQUFLQyxZQUFMO0FBRUFmLElBQUFBLGlEQUFLLENBQUM7QUFDSkcsTUFBQUEsT0FBTyxFQUFFLEtBQUtDLFFBQUwsQ0FBY0MsS0FEbkI7QUFFSlcsTUFBQUEsVUFBVSxFQUFFO0FBRlIsS0FBRCxDQUFMO0FBS0FoQixJQUFBQSxpREFBSyxDQUFDO0FBQ0pHLE1BQUFBLE9BQU8sRUFBRSxLQUFLQyxRQUFMLENBQWNDLEtBRG5CO0FBRUpXLE1BQUFBLFVBQVUsRUFBRTtBQUZSLEtBQUQsQ0FBTDtBQUtBLFNBQUtaLFFBQUwsQ0FBY2EsVUFBZCxHQUEyQixLQUFLYixRQUFMLENBQWNDLEtBQWQsQ0FBb0JNLGdCQUFwQixDQUFxQyxXQUFyQyxDQUEzQjtBQUNEOztBQUVETyxFQUFBQSxhQUFhLENBQUVDLEtBQUYsRUFBUztBQUNwQixTQUFLTCxNQUFMLElBQWUsQ0FBZjtBQUNBLFVBQU1NLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBS1IsTUFBTCxHQUFjLEtBQUtWLFFBQUwsQ0FBY00sTUFBZCxDQUFxQkksTUFBbkMsR0FBNEMsR0FBdkQsQ0FBaEI7QUFFQSxTQUFLVixRQUFMLENBQWNLLE1BQWQsQ0FBcUJELFNBQXJCLEdBQWtDLEdBQUVZLE9BQVEsR0FBNUM7O0FBRUEsUUFBSUEsT0FBTyxLQUFLLEdBQWhCLEVBQXFCO0FBQ25CLFdBQUtHLFFBQUw7QUFDRDtBQUNGOztBQUVEUixFQUFBQSxZQUFZLEdBQUk7QUFDZGhCLElBQUFBLDRDQUFJLENBQUMsS0FBS0ssUUFBTCxDQUFjTSxNQUFmLEVBQXVCUCxPQUFPLElBQUk7QUFDcENBLE1BQUFBLE9BQU8sQ0FBQ3FCLEdBQVIsR0FBY3JCLE9BQU8sQ0FBQ3NCLFlBQVIsQ0FBcUIsS0FBckIsQ0FBZDs7QUFDQXRCLE1BQUFBLE9BQU8sQ0FBQ3VCLE1BQVIsR0FBaUJDLENBQUMsSUFBSSxLQUFLVCxhQUFMLENBQW1CZixPQUFuQixDQUF0QjtBQUNELEtBSEcsQ0FBSjtBQUlEOztBQUVEb0IsRUFBQUEsUUFBUSxHQUFJO0FBRVY7QUFHQSxXQUFPLElBQUlLLE9BQUosQ0FBWUMsT0FBTyxJQUFJO0FBQzVCO0FBQ047QUFDQTtBQUNBO0FBRU0sV0FBS0MsVUFBTCxHQUFrQmhDLHFEQUFBLEVBQWxCO0FBRUEsV0FBS2dDLFVBQUwsQ0FBZ0JFLEVBQWhCLENBQW1CLEtBQUs1QixRQUFMLENBQWNhLFVBQWpDLEVBQTZDO0FBQzNDZ0IsUUFBQUEsT0FBTyxFQUFFLEdBRGtDO0FBRTNDQyxRQUFBQSxRQUFRLEVBQUUsQ0FGaUM7QUFHM0NDLFFBQUFBLElBQUksRUFBRSxVQUhxQztBQUkzQ0MsUUFBQUEsQ0FBQyxFQUFFO0FBSndDLE9BQTdDO0FBT0EsV0FBS04sVUFBTCxDQUFnQkUsRUFBaEIsQ0FBbUIsS0FBSzdCLE9BQXhCLEVBQWlDO0FBQy9Ca0MsUUFBQUEsTUFBTSxFQUFFLENBRHVCO0FBRS9CQyxRQUFBQSxlQUFlLEVBQUUsS0FGYztBQUcvQkgsUUFBQUEsSUFBSSxFQUFFO0FBSHlCLE9BQWpDO0FBS0QsS0FwQk0sQ0FBUDtBQXFCRDs7QUFFREksRUFBQUEsT0FBTyxHQUFJO0FBQ1QsU0FBS3BDLE9BQUwsQ0FBYXFDLFVBQWIsQ0FBd0JDLFdBQXhCLENBQW9DLEtBQUt0QyxPQUF6QztBQUNEOztBQTdFOEM7Ozs7Ozs7Ozs7O0FDTGpEO0FBQ1U7QUFDVixPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyx3SkFBa0gsY0FBYywrQkFBK0I7QUFDN0wsTUFBTSxVQUFVO0FBQ2hCLE1BQU0saUJBQWlCO0FBQ3ZCO0FBQ0E7Ozs7Ozs7O1VDUkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9QcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gJ2NsYXNzZXMvQ29tcG9uZW50J1xuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCdcbmltcG9ydCB7IGVhY2ggfSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyBzcGxpdCB9IGZyb20gJ3V0aWxzL3RleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcih7XG4gICAgICBlbGVtZW50OiAnLnByZWxvYWRlcicsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICB0aXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWRlcl9fdGV4dF9fdGl0bGUnKS5pbm5lckhUTUwsXG4gICAgICAgIG51bWJlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWRlcl9fbnVtYmVyJyksXG4gICAgICAgIGltYWdlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcbiAgICAgIH1cbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudHMudGl0bGUpXG5cbiAgICB0aGlzLmxlbmd0aCA9IDBcblxuICAgIHRoaXMuY3JlYXRlTG9hZGVyKClcblxuICAgIHNwbGl0KHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXG4gICAgICBleHByZXNzaW9uOiAnPGJyPidcbiAgICB9KVxuXG4gICAgc3BsaXQoe1xuICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50cy50aXRsZSxcbiAgICAgIGV4cHJlc3Npb246ICc8YnI+J1xuICAgIH0pXG5cbiAgICB0aGlzLmVsZW1lbnRzLnRpdGxlU3BhbnMgPSB0aGlzLmVsZW1lbnRzLnRpdGxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4gc3BhbicpXG4gIH1cblxuICBvbkFzc2V0TG9hZGVkIChpbWFnZSkge1xuICAgIHRoaXMubGVuZ3RoICs9IDFcbiAgICBjb25zdCBwZXJjZW50ID0gTWF0aC5yb3VuZCh0aGlzLmxlbmd0aCAvIHRoaXMuZWxlbWVudHMuaW1hZ2VzLmxlbmd0aCAqIDEwMClcblxuICAgIHRoaXMuZWxlbWVudHMubnVtYmVyLmlubmVySFRNTCA9IGAke3BlcmNlbnR9JWBcblxuICAgIGlmIChwZXJjZW50ID09PSAxMDApIHtcbiAgICAgIHRoaXMub25Mb2FkZWQoKVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUxvYWRlciAoKSB7XG4gICAgZWFjaCh0aGlzLmVsZW1lbnRzLmltYWdlcywgZWxlbWVudCA9PiB7XG4gICAgICBlbGVtZW50LnNyYyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzcmMnKVxuICAgICAgZWxlbWVudC5vbmxvYWQgPSBfID0+IHRoaXMub25Bc3NldExvYWRlZChlbGVtZW50KVxuICAgIH0pXG4gIH1cblxuICBvbkxvYWRlZCAoKSB7XG5cbiAgICAvLyBUT0RPOiBBREQgVEhFIEFOSU1BVElPTlMgQUZURVIgVEhFIFBBR0UgSVMgTE9BREVEXG5cbiAgICBcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAvKiAgdGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudCwge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIGRlbGF5OiAyXG4gICAgICB9KSAqL1xuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQgPSBnc2FwLnRpbWVsaW5lKClcblxuICAgICAgdGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudHMudGl0bGVTcGFucywge1xuICAgICAgICBzdGFnZ2VyOiAwLjEsXG4gICAgICAgIGR1cmF0aW9uOiAzLFxuICAgICAgICBlYXNlOiAnZXhwby5vdXQnLFxuICAgICAgICB5OiAnMTAwJSdcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgc2NhbGVZOiAwLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwIDAnLFxuICAgICAgICBlYXNlOiAnZXhwby5vdXQnXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpXG4gIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MzUzODExOTQxMjhcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUvbHVjYXNzaWx2YS9iYWNrdXAvcHJvamV0b3MvZW5kdXJhbmNlL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcInB1YmxpY1BhdGhcIjpcIlwiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOThlZGY4YWM3MjJiNGZiNzczMmZcIikiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiZ3NhcCIsImVhY2giLCJzcGxpdCIsIlByZWxvYWRlciIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGl0bGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJudW1iZXIiLCJpbWFnZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImNyZWF0ZUxvYWRlciIsImV4cHJlc3Npb24iLCJ0aXRsZVNwYW5zIiwib25Bc3NldExvYWRlZCIsImltYWdlIiwicGVyY2VudCIsIk1hdGgiLCJyb3VuZCIsIm9uTG9hZGVkIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwib25sb2FkIiwiXyIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0ZU91dCIsInRpbWVsaW5lIiwidG8iLCJzdGFnZ2VyIiwiZHVyYXRpb24iLCJlYXNlIiwieSIsInNjYWxlWSIsInRyYW5zZm9ybU9yaWdpbiIsImRlc3Ryb3kiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9