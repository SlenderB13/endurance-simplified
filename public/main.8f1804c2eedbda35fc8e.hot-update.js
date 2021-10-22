"use strict";
self["webpackHotUpdatefloema"]("main",{

/***/ "./app/classes/Page.js":
/*!*****************************!*\
  !*** ./app/classes/Page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prefix */ "./node_modules/prefix/index.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prefix__WEBPACK_IMPORTED_MODULE_1__);



class Page {
  constructor({
    id,
    element,
    elements
  }) {
    this.id = id;
    this.selector = element;
    this.selectorChildren = { ...elements
    };
    this.scroll = {
      current: 0,
      target: 0,
      limit: 1900
    };
    this.transformPrefix = prefix__WEBPACK_IMPORTED_MODULE_1___default()('left');
    this.addEventListeners(); //this.onMouseWheel()
    // this.onMouseWheelEvent = this.onMouseWheel.bind(this)
  }

  create() {
    this.element = document.querySelector(this.selector);
    this.elements = {};
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(this.selectorChildren, (entry, key) => {
      if (entry instanceof window.HTMLElement || entry instanceof window.NodeList || Array.isArray(entry)) {
        this.elements[key] = entry;
      } else {
        this.elements[key] = document.querySelectorAll(entry);

        if (this.elements[key].length === 0) {
          this.elements[key] = null;
        } else if (this.elements[key].length === 1) {
          this.elements[key] = document.querySelector(entry);
        }
      } //TODO: check the video to see how is he using the elements[key] outside this each loop


      console.log(this.elements[key]);
    });
  }

  show() {
    this.animateIn = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline();
    return new Promise(resolve => {
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].from(this.element, {
        autoAlpha: 0,
        onComplete: resolve
      });
    });
  }

  hide() {
    this.animateOut = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline();
    return new Promise(resolve => {
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(this.element, {
        autoAlpha: 0,
        onComplete: resolve
      });
    });
  }
  /* onMouseWheel (event) {
    const { deltaY } = event
    this.scroll.target += deltaY
     console.log(this.scroll.target)
    // FIXME: THE SCROLL VALUE NOT UPDATING   
  } */


  update() {
    this.scroll.current = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.interpolate(this.scroll.current, this.scroll.target, 0.1);
    this.scroll.current = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.clamp(0, this.scroll.limit, this.scroll.current); // TODO: FIGURE OUT HOW TO IMPLEMENT THE FOREACH HERE.

    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(this.elements, item => {
      item.style[this.transformPrefix] = `-${this.scroll.current}px`;
    });
    /* if (this.elements.wrapper) {
      this.elements.wrapper.style[this.transformPrefix] = `translateX(${this.scroll.current}px)`
    } */
  }

  addEventListeners() {
    window.addEventListener('mousewheel', event => {
      const {
        deltaY
      } = event;
      this.scroll.target += deltaY;
    });
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
      // 1634921653362
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f008a445503df0b3ba4b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUsvQixNQUFMLENBQVlDLE9BQVosR0FBc0JYLDhEQUFBLENBQXVCLEtBQUtVLE1BQUwsQ0FBWUMsT0FBbkMsRUFBNEMsS0FBS0QsTUFBTCxDQUFZRSxNQUF4RCxFQUFnRSxHQUFoRSxDQUF0QjtBQUNBLFNBQUtGLE1BQUwsQ0FBWUMsT0FBWixHQUFzQlgsd0RBQUEsQ0FBaUIsQ0FBakIsRUFBb0IsS0FBS1UsTUFBTCxDQUFZRyxLQUFoQyxFQUF1QyxLQUFLSCxNQUFMLENBQVlDLE9BQW5ELENBQXRCLENBRlEsQ0FJUjs7QUFFQVYsSUFBQUEsa0RBQUksQ0FBQyxLQUFLTSxRQUFOLEVBQWdCc0MsSUFBSSxJQUFJO0FBQzFCQSxNQUFBQSxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLaEMsZUFBaEIsSUFBb0MsSUFBRyxLQUFLSixNQUFMLENBQVlDLE9BQVEsSUFBM0Q7QUFDRCxLQUZHLENBQUo7QUFJQTtBQUNKO0FBQ0E7QUFDRzs7QUFFREksRUFBQUEsaUJBQWlCLEdBQUk7QUFDbkJNLElBQUFBLE1BQU0sQ0FBQzBCLGdCQUFQLENBQXdCLFlBQXhCLEVBQXVDQyxLQUFELElBQVc7QUFDL0MsWUFBTTtBQUFFQyxRQUFBQTtBQUFGLFVBQWFELEtBQW5CO0FBQ0EsV0FBS3RDLE1BQUwsQ0FBWUUsTUFBWixJQUFzQnFDLE1BQXRCO0FBQ0QsS0FIRDtBQUlEOztBQWxHdUI7Ozs7Ozs7Ozs7O0FDTjFCO0FBQ1U7QUFDVixPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyx3SkFBa0gsY0FBYywrQkFBK0I7QUFDN0wsTUFBTSxVQUFVO0FBQ2hCLE1BQU0saUJBQWlCO0FBQ3ZCO0FBQ0E7Ozs7Ozs7O1VDUkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY2xhc3Nlcy9QYWdlLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5cbmltcG9ydCBQcmVmaXggZnJvbSAncHJlZml4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIHtcbiAgY29uc3RydWN0b3IgKHsgaWQsIGVsZW1lbnQsIGVsZW1lbnRzIH0pIHtcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLnNlbGVjdG9yID0gZWxlbWVudFxuICAgIHRoaXMuc2VsZWN0b3JDaGlsZHJlbiA9IHtcbiAgICAgIC4uLmVsZW1lbnRzXG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGltaXQ6IDE5MDBcbiAgICB9XG5cbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeCgnbGVmdCcpXG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcblxuICAgIC8vdGhpcy5vbk1vdXNlV2hlZWwoKVxuXG4gICAgLy8gdGhpcy5vbk1vdXNlV2hlZWxFdmVudCA9IHRoaXMub25Nb3VzZVdoZWVsLmJpbmQodGhpcylcbiAgfVxuXG4gIGNyZWF0ZSAoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKVxuICAgIHRoaXMuZWxlbWVudHMgPSB7fVxuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4sIChlbnRyeSwga2V5KSA9PiB7XG5cbiAgICAgIGlmIChlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fCBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdCB8fCBBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbnRyeSlcblxuICAgICAgICBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGxcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvL1RPRE86IGNoZWNrIHRoZSB2aWRlbyB0byBzZWUgaG93IGlzIGhlIHVzaW5nIHRoZSBlbGVtZW50c1trZXldIG91dHNpZGUgdGhpcyBlYWNoIGxvb3BcblxuICAgICAgXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnRzW2tleV0pXG4gICAgfSlcbiAgfVxuICBcbiAgc2hvdyAoKSB7XG4gICAgdGhpcy5hbmltYXRlSW4gPSBHU0FQLnRpbWVsaW5lKClcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIEdTQVAuZnJvbSh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICBvbkNvbXBsZXRlOiByZXNvbHZlXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBoaWRlICgpIHtcbiAgICB0aGlzLmFuaW1hdGVPdXQgPSBHU0FQLnRpbWVsaW5lKClcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIEdTQVAudG8odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgb25Db21wbGV0ZTogcmVzb2x2ZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyogb25Nb3VzZVdoZWVsIChldmVudCkge1xuICAgIGNvbnN0IHsgZGVsdGFZIH0gPSBldmVudFxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBkZWx0YVlcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuc2Nyb2xsLnRhcmdldClcbiAgICAvLyBGSVhNRTogVEhFIFNDUk9MTCBWQUxVRSBOT1QgVVBEQVRJTkcgICBcbiAgfSAqL1xuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCAwLjEpXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuY2xhbXAoMCwgdGhpcy5zY3JvbGwubGltaXQsIHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG5cbiAgICAvLyBUT0RPOiBGSUdVUkUgT1VUIEhPVyBUTyBJTVBMRU1FTlQgVEhFIEZPUkVBQ0ggSEVSRS5cblxuICAgIGVhY2godGhpcy5lbGVtZW50cywgaXRlbSA9PiB7XG4gICAgICBpdGVtLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGAtJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4YFxuICAgIH0pXG4gICAgXG4gICAgLyogaWYgKHRoaXMuZWxlbWVudHMud3JhcHBlcikge1xuICAgICAgdGhpcy5lbGVtZW50cy53cmFwcGVyLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGB0cmFuc2xhdGVYKCR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgXG4gICAgfSAqLyAgXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgZGVsdGFZIH0gPSBldmVudFxuICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IGRlbHRhWVxuICAgIH0pXG4gIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MzQ5MjE2NTMzNjJcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUvbHVjYXNzaWx2YS9iYWNrdXAvcHJvamV0b3MvZW5kdXJhbmNlL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcInB1YmxpY1BhdGhcIjpcIlwiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjAwOGE0NDU1MDNkZjBiM2JhNGJcIikiXSwibmFtZXMiOlsiR1NBUCIsImVhY2giLCJQcmVmaXgiLCJQYWdlIiwiY29uc3RydWN0b3IiLCJpZCIsImVsZW1lbnQiLCJlbGVtZW50cyIsInNlbGVjdG9yIiwic2VsZWN0b3JDaGlsZHJlbiIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsaW1pdCIsInRyYW5zZm9ybVByZWZpeCIsImFkZEV2ZW50TGlzdGVuZXJzIiwiY3JlYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZW50cnkiLCJrZXkiLCJ3aW5kb3ciLCJIVE1MRWxlbWVudCIsIk5vZGVMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJzaG93IiwiYW5pbWF0ZUluIiwidGltZWxpbmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImZyb20iLCJhdXRvQWxwaGEiLCJvbkNvbXBsZXRlIiwiaGlkZSIsImFuaW1hdGVPdXQiLCJ0byIsInVwZGF0ZSIsInV0aWxzIiwiaW50ZXJwb2xhdGUiLCJjbGFtcCIsIml0ZW0iLCJzdHlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImRlbHRhWSJdLCJzb3VyY2VSb290IjoiIn0=