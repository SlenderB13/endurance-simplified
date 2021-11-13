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
      limit: 4000
    };
    this.transformPrefix = prefix__WEBPACK_IMPORTED_MODULE_1___default()('left');
    this.addEventListeners();
    this.getCursor(); //this.onMouseWheel()
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
    window.addEventListener('mousemove', event => {
      console.log(this.cursor);
    });
  }

  getCursor() {
    this.cursor = document.querySelector('.cursor');
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
      // 1635431652968
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("42a82cd53676e9fb01d4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBK0I7QUFDN0wsTUFBTSxVQUFVO0FBQ2hCLE1BQU0saUJBQWlCO0FBQ3ZCO0FBQ0E7Ozs7Ozs7O1VDUkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY2xhc3Nlcy9QYWdlLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5cbmltcG9ydCBQcmVmaXggZnJvbSAncHJlZml4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIHtcbiAgY29uc3RydWN0b3IgKHsgaWQsIGVsZW1lbnQsIGVsZW1lbnRzIH0pIHtcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLnNlbGVjdG9yID0gZWxlbWVudFxuICAgIHRoaXMuc2VsZWN0b3JDaGlsZHJlbiA9IHtcbiAgICAgIC4uLmVsZW1lbnRzXG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGltaXQ6IDQwMDBcbiAgICB9XG5cbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeCgnbGVmdCcpXG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcblxuICAgIHRoaXMuZ2V0Q3Vyc29yKClcblxuICAgIC8vdGhpcy5vbk1vdXNlV2hlZWwoKVxuXG4gICAgLy8gdGhpcy5vbk1vdXNlV2hlZWxFdmVudCA9IHRoaXMub25Nb3VzZVdoZWVsLmJpbmQodGhpcylcbiAgfVxuXG4gIGNyZWF0ZSAoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKVxuICAgIHRoaXMuZWxlbWVudHMgPSB7fVxuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4sIChlbnRyeSwga2V5KSA9PiB7XG5cbiAgICAgIGlmIChlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fCBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdCB8fCBBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbnRyeSlcblxuICAgICAgICBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGxcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvL1RPRE86IGNoZWNrIHRoZSB2aWRlbyB0byBzZWUgaG93IGlzIGhlIHVzaW5nIHRoZSBlbGVtZW50c1trZXldIG91dHNpZGUgdGhpcyBlYWNoIGxvb3BcblxuICAgICAgXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnRzW2tleV0pXG4gICAgfSlcbiAgfVxuICBcbiAgc2hvdyAoKSB7XG4gICAgdGhpcy5hbmltYXRlSW4gPSBHU0FQLnRpbWVsaW5lKClcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIEdTQVAuZnJvbSh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICBvbkNvbXBsZXRlOiByZXNvbHZlXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBoaWRlICgpIHtcbiAgICB0aGlzLmFuaW1hdGVPdXQgPSBHU0FQLnRpbWVsaW5lKClcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIEdTQVAudG8odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgb25Db21wbGV0ZTogcmVzb2x2ZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyogb25Nb3VzZVdoZWVsIChldmVudCkge1xuICAgIGNvbnN0IHsgZGVsdGFZIH0gPSBldmVudFxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBkZWx0YVlcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuc2Nyb2xsLnRhcmdldClcbiAgICAvLyBGSVhNRTogVEhFIFNDUk9MTCBWQUxVRSBOT1QgVVBEQVRJTkcgICBcbiAgfSAqL1xuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCAwLjEpXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuY2xhbXAoMCwgdGhpcy5zY3JvbGwubGltaXQsIHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG5cbiAgICAvLyBUT0RPOiBGSUdVUkUgT1VUIEhPVyBUTyBJTVBMRU1FTlQgVEhFIEZPUkVBQ0ggSEVSRS5cblxuICAgIGVhY2godGhpcy5lbGVtZW50cywgaXRlbSA9PiB7XG4gICAgICBpdGVtLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGAtJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4YFxuICAgIH0pXG4gICAgXG4gICAgLyogaWYgKHRoaXMuZWxlbWVudHMud3JhcHBlcikge1xuICAgICAgdGhpcy5lbGVtZW50cy53cmFwcGVyLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGB0cmFuc2xhdGVYKCR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgXG4gICAgfSAqLyAgXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgZGVsdGFZIH0gPSBldmVudFxuICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IGRlbHRhWVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnNvcilcbiAgICB9KVxuICB9XG5cbiAgZ2V0Q3Vyc29yICgpIHtcbiAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJzb3InKSAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzNTQzMTY1Mjk2OFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS9sdWNhc3NpbHZhL2JhY2t1cC9wcm9qZXRvcy9lbmR1cmFuY2Uvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0MmE4MmNkNTM2NzZlOWZiMDFkNFwiKSJdLCJuYW1lcyI6WyJHU0FQIiwiZWFjaCIsIlByZWZpeCIsIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImlkIiwiZWxlbWVudCIsImVsZW1lbnRzIiwic2VsZWN0b3IiLCJzZWxlY3RvckNoaWxkcmVuIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxpbWl0IiwidHJhbnNmb3JtUHJlZml4IiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJnZXRDdXJzb3IiLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlbnRyeSIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInNob3ciLCJhbmltYXRlSW4iLCJ0aW1lbGluZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbSIsImF1dG9BbHBoYSIsIm9uQ29tcGxldGUiLCJoaWRlIiwiYW5pbWF0ZU91dCIsInRvIiwidXBkYXRlIiwidXRpbHMiLCJpbnRlcnBvbGF0ZSIsImNsYW1wIiwiaXRlbSIsInN0eWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiZGVsdGFZIiwiY3Vyc29yIl0sInNvdXJjZVJvb3QiOiIifQ==