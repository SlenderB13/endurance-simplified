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
      this.animateOut.from(this.elements.titleSpans, {
        duration: 1,
        ease: 'expo.out',
        y: '100%'
      });
      this.animateOut.from(this.elements.titleSpans, {
        stagger: 0.01,
        duration: 1,
        ease: 'expo.out',
        y: '0'
      });
      this.animateOut.to(this.element, {
        opacity: 0,
        transformOrigin: '0 0',
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
      // 1635385374367
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8db72304e99237013cd6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43Yjc4M2Y4YzNmMzcxNzk1OThkMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsTUFBTUksU0FBTixTQUF3QkoseURBQXhCLENBQWtDO0FBQy9DSyxFQUFBQSxXQUFXLEdBQUk7QUFDYixVQUFNO0FBQ0pDLE1BQUFBLE9BQU8sRUFBRSxZQURMO0FBRUpDLE1BQUFBLFFBQVEsRUFBRTtBQUNSQyxRQUFBQSxLQUFLLEVBQUVDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix5QkFBdkIsQ0FEQztBQUVSQyxRQUFBQSxNQUFNLEVBQUVGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixvQkFBdkIsQ0FGQTtBQUdSRSxRQUFBQSxNQUFNLEVBQUVILFFBQVEsQ0FBQ0ksZ0JBQVQsQ0FBMEIsS0FBMUI7QUFIQTtBQUZOLEtBQU47QUFRQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS1IsUUFBTCxDQUFjQyxLQUExQjtBQUVBLFNBQUtRLE1BQUwsR0FBYyxDQUFkO0FBRUEsU0FBS0MsWUFBTDtBQUVBZCxJQUFBQSxpREFBSyxDQUFDO0FBQ0pHLE1BQUFBLE9BQU8sRUFBRSxLQUFLQyxRQUFMLENBQWNDO0FBRG5CLEtBQUQsQ0FBTDtBQUlBTCxJQUFBQSxpREFBSyxDQUFDO0FBQ0pHLE1BQUFBLE9BQU8sRUFBRSxLQUFLQyxRQUFMLENBQWNDO0FBRG5CLEtBQUQsQ0FBTDtBQUlBTCxJQUFBQSxpREFBSyxDQUFDO0FBQ0pHLE1BQUFBLE9BQU8sRUFBRSxLQUFLQyxRQUFMLENBQWNDO0FBRG5CLEtBQUQsQ0FBTDtBQUlBLFNBQUtELFFBQUwsQ0FBY1csVUFBZCxHQUEyQixLQUFLWCxRQUFMLENBQWNDLEtBQWQsQ0FBb0JLLGdCQUFwQixDQUFxQyxnQkFBckMsQ0FBM0I7QUFDRDs7QUFFRE0sRUFBQUEsYUFBYSxDQUFFQyxLQUFGLEVBQVM7QUFDcEIsU0FBS0osTUFBTCxJQUFlLENBQWY7QUFDQSxVQUFNSyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtQLE1BQUwsR0FBYyxLQUFLVCxRQUFMLENBQWNLLE1BQWQsQ0FBcUJJLE1BQW5DLEdBQTRDLEdBQXZELENBQWhCO0FBRUEsU0FBS1QsUUFBTCxDQUFjSSxNQUFkLENBQXFCYSxTQUFyQixHQUFrQyxHQUFFSCxPQUFRLEdBQTVDOztBQUVBLFFBQUlBLE9BQU8sS0FBSyxHQUFoQixFQUFxQjtBQUNuQixXQUFLSSxRQUFMO0FBQ0Q7QUFDRjs7QUFFRFIsRUFBQUEsWUFBWSxHQUFJO0FBQ2RmLElBQUFBLDRDQUFJLENBQUMsS0FBS0ssUUFBTCxDQUFjSyxNQUFmLEVBQXVCTixPQUFPLElBQUk7QUFDcENBLE1BQUFBLE9BQU8sQ0FBQ29CLEdBQVIsR0FBY3BCLE9BQU8sQ0FBQ3FCLFlBQVIsQ0FBcUIsS0FBckIsQ0FBZDs7QUFDQXJCLE1BQUFBLE9BQU8sQ0FBQ3NCLE1BQVIsR0FBaUJDLENBQUMsSUFBSSxLQUFLVixhQUFMLENBQW1CYixPQUFuQixDQUF0QjtBQUNELEtBSEcsQ0FBSjtBQUlEOztBQUVEbUIsRUFBQUEsUUFBUSxHQUFJO0FBRVY7QUFHQSxXQUFPLElBQUlLLE9BQUosQ0FBWUMsT0FBTyxJQUFJO0FBQzVCO0FBQ047QUFDQTtBQUNBO0FBRU0sV0FBS0MsVUFBTCxHQUFrQi9CLHFEQUFBLEVBQWxCO0FBRUEsV0FBSytCLFVBQUwsQ0FBZ0JFLElBQWhCLENBQXFCLEtBQUszQixRQUFMLENBQWNXLFVBQW5DLEVBQStDO0FBQzdDaUIsUUFBQUEsUUFBUSxFQUFFLENBRG1DO0FBRTdDQyxRQUFBQSxJQUFJLEVBQUUsVUFGdUM7QUFHN0NDLFFBQUFBLENBQUMsRUFBRTtBQUgwQyxPQUEvQztBQU1BLFdBQUtMLFVBQUwsQ0FBZ0JFLElBQWhCLENBQXFCLEtBQUszQixRQUFMLENBQWNXLFVBQW5DLEVBQStDO0FBQzdDb0IsUUFBQUEsT0FBTyxFQUFFLElBRG9DO0FBRTdDSCxRQUFBQSxRQUFRLEVBQUUsQ0FGbUM7QUFHN0NDLFFBQUFBLElBQUksRUFBRSxVQUh1QztBQUk3Q0MsUUFBQUEsQ0FBQyxFQUFFO0FBSjBDLE9BQS9DO0FBUUEsV0FBS0wsVUFBTCxDQUFnQk8sRUFBaEIsQ0FBbUIsS0FBS2pDLE9BQXhCLEVBQWlDO0FBQy9Ca0MsUUFBQUEsT0FBTyxFQUFFLENBRHNCO0FBRS9CQyxRQUFBQSxlQUFlLEVBQUUsS0FGYztBQUcvQkwsUUFBQUEsSUFBSSxFQUFFLFVBSHlCO0FBSS9CRCxRQUFBQSxRQUFRLEVBQUU7QUFKcUIsT0FBakM7QUFPQSxXQUFLSCxVQUFMLENBQWdCTyxFQUFoQixDQUFtQixLQUFLakMsT0FBeEIsRUFBaUM7QUFDL0JvQyxRQUFBQSxNQUFNLEVBQUUsR0FEdUI7QUFFL0JELFFBQUFBLGVBQWUsRUFBRSxLQUZjO0FBRy9CTCxRQUFBQSxJQUFJLEVBQUUsVUFIeUI7QUFJL0JELFFBQUFBLFFBQVEsRUFBRTtBQUpxQixPQUFqQztBQU1ELEtBbkNNLENBQVA7QUFvQ0Q7O0FBRURRLEVBQUFBLE9BQU8sR0FBSTtBQUNULFNBQUtyQyxPQUFMLENBQWFzQyxVQUFiLENBQXdCQyxXQUF4QixDQUFvQyxLQUFLdkMsT0FBekM7QUFDRDs7QUE5RjhDOzs7Ozs7Ozs7OztBQ0xqRDtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsd0pBQWtILGNBQWMsK0JBQStCO0FBQzdMLE1BQU0sVUFBVTtBQUNoQixNQUFNLGlCQUFpQjtBQUN2QjtBQUNBOzs7Ozs7OztVQ1JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvUHJlbG9hZGVyLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICdjbGFzc2VzL0NvbXBvbmVudCdcbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgc3BsaXQgfSBmcm9tICd1dGlscy90ZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgZWxlbWVudDogJy5wcmVsb2FkZXInLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgdGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXJfX3RleHRfX3RpdGxlJyksXG4gICAgICAgIG51bWJlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWRlcl9fbnVtYmVyJyksXG4gICAgICAgIGltYWdlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcbiAgICAgIH1cbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudHMudGl0bGUpXG5cbiAgICB0aGlzLmxlbmd0aCA9IDBcblxuICAgIHRoaXMuY3JlYXRlTG9hZGVyKClcblxuICAgIHNwbGl0KHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGVcbiAgICB9KVxuXG4gICAgc3BsaXQoe1xuICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50cy50aXRsZSxcbiAgICB9KVxuXG4gICAgc3BsaXQoe1xuICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50cy50aXRsZSxcbiAgICB9KVxuXG4gICAgdGhpcy5lbGVtZW50cy50aXRsZVNwYW5zID0gdGhpcy5lbGVtZW50cy50aXRsZS5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuIHNwYW4gc3BhbicpXG4gIH1cblxuICBvbkFzc2V0TG9hZGVkIChpbWFnZSkge1xuICAgIHRoaXMubGVuZ3RoICs9IDFcbiAgICBjb25zdCBwZXJjZW50ID0gTWF0aC5yb3VuZCh0aGlzLmxlbmd0aCAvIHRoaXMuZWxlbWVudHMuaW1hZ2VzLmxlbmd0aCAqIDEwMClcblxuICAgIHRoaXMuZWxlbWVudHMubnVtYmVyLmlubmVySFRNTCA9IGAke3BlcmNlbnR9JWBcblxuICAgIGlmIChwZXJjZW50ID09PSAxMDApIHtcbiAgICAgIHRoaXMub25Mb2FkZWQoKVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUxvYWRlciAoKSB7XG4gICAgZWFjaCh0aGlzLmVsZW1lbnRzLmltYWdlcywgZWxlbWVudCA9PiB7XG4gICAgICBlbGVtZW50LnNyYyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzcmMnKVxuICAgICAgZWxlbWVudC5vbmxvYWQgPSBfID0+IHRoaXMub25Bc3NldExvYWRlZChlbGVtZW50KVxuICAgIH0pXG4gIH1cblxuICBvbkxvYWRlZCAoKSB7XG5cbiAgICAvLyBUT0RPOiBBREQgVEhFIEFOSU1BVElPTlMgQUZURVIgVEhFIFBBR0UgSVMgTE9BREVEXG5cbiAgICBcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAvKiAgdGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudCwge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIGRlbGF5OiAyXG4gICAgICB9KSAqL1xuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQgPSBnc2FwLnRpbWVsaW5lKClcblxuICAgICAgdGhpcy5hbmltYXRlT3V0LmZyb20odGhpcy5lbGVtZW50cy50aXRsZVNwYW5zLCB7XG4gICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICBlYXNlOiAnZXhwby5vdXQnLFxuICAgICAgICB5OiAnMTAwJSdcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuYW5pbWF0ZU91dC5mcm9tKHRoaXMuZWxlbWVudHMudGl0bGVTcGFucywge1xuICAgICAgICBzdGFnZ2VyOiAwLjAxLFxuICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgZWFzZTogJ2V4cG8ub3V0JyxcbiAgICAgICAgeTogJzAnXG4gICAgICB9KVxuXG5cbiAgICAgIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCAwJyxcbiAgICAgICAgZWFzZTogJ2V4cG8ub3V0JyxcbiAgICAgICAgZHVyYXRpb246IDFcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgc2NhbGVZOiAnMCcsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAgMCcsXG4gICAgICAgIGVhc2U6ICdleHBvLm91dCcsXG4gICAgICAgIGR1cmF0aW9uOiAxXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpXG4gIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MzUzODUzNzQzNjdcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUvbHVjYXNzaWx2YS9iYWNrdXAvcHJvamV0b3MvZW5kdXJhbmNlL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcInB1YmxpY1BhdGhcIjpcIlwiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGRiNzIzMDRlOTkyMzcwMTNjZDZcIikiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiZ3NhcCIsImVhY2giLCJzcGxpdCIsIlByZWxvYWRlciIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGl0bGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJudW1iZXIiLCJpbWFnZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImNyZWF0ZUxvYWRlciIsInRpdGxlU3BhbnMiLCJvbkFzc2V0TG9hZGVkIiwiaW1hZ2UiLCJwZXJjZW50IiwiTWF0aCIsInJvdW5kIiwiaW5uZXJIVE1MIiwib25Mb2FkZWQiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJvbmxvYWQiLCJfIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRlT3V0IiwidGltZWxpbmUiLCJmcm9tIiwiZHVyYXRpb24iLCJlYXNlIiwieSIsInN0YWdnZXIiLCJ0byIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJzY2FsZVkiLCJkZXN0cm95IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==