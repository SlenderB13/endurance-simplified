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
    this.transformPrefix = prefix__WEBPACK_IMPORTED_MODULE_1___default()('transform');
    this.addEventListeners();
    this.onMouseWheelEvent = this.onMouseWheel.bind(this);
  }

  create() {
    this.element = document.querySelector(this.selector);
    this.elements = {};
    this.scroll = {
      current: 0,
      target: 0,
      last: 0
    };
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

  onMouseWheel(event) {
    const {
      deltaY
    } = event;
    let value = 0;
    value += deltaY;
    console.log(value); // TODO: FIX THE SCROLL VALUE NOT UPDATING   
  }

  update() {
    this.scroll.current = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.interpolate(this.scroll.current, this.scroll.target, 0.1); // TODO: FIGURE OUT HOW TO IMPLEMENT THE FOREACH HERE.

    /* if (this.elements.wrapper) {
      this.elements.wrapper.style[this.transformPrefix] = `translateX(${this.scroll.current}px)`
    } */
  }

  addEventListeners() {
    window.addEventListener('mousewheel', this.onMouseWheel);
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
      // 1634911419519
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9eee856600ce72b28868")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eEIsRUFBQUEsWUFBWSxDQUFFK0IsS0FBRixFQUFTO0FBQ25CLFVBQU07QUFBRUMsTUFBQUE7QUFBRixRQUFhRCxLQUFuQjtBQUVBLFFBQUlFLEtBQUssR0FBRyxDQUFaO0FBRUFBLElBQUFBLEtBQUssSUFBSUQsTUFBVDtBQUVBZCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWMsS0FBWixFQVBtQixDQVFuQjtBQUNEOztBQUVEQyxFQUFBQSxNQUFNLEdBQUk7QUFDUixTQUFLN0IsTUFBTCxDQUFZQyxPQUFaLEdBQXNCbkIsOERBQUEsQ0FBdUIsS0FBS2tCLE1BQUwsQ0FBWUMsT0FBbkMsRUFBNEMsS0FBS0QsTUFBTCxDQUFZRSxNQUF4RCxFQUFnRSxHQUFoRSxDQUF0QixDQURRLENBR1I7O0FBR0E7QUFDSjtBQUNBO0FBQ0c7O0FBRURULEVBQUFBLGlCQUFpQixHQUFJO0FBQ25CYSxJQUFBQSxNQUFNLENBQUMwQixnQkFBUCxDQUF3QixZQUF4QixFQUFzQyxLQUFLckMsWUFBM0M7QUFDRDs7QUE3RnVCOzs7Ozs7Ozs7OztBQ04xQjtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsd0pBQWtILGNBQWMsK0JBQStCO0FBQzdMLE1BQU0sVUFBVTtBQUNoQixNQUFNLGlCQUFpQjtBQUN2QjtBQUNBOzs7Ozs7OztVQ1JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NsYXNzZXMvUGFnZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuXG5pbXBvcnQgUHJlZml4IGZyb20gJ3ByZWZpeCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XG4gIGNvbnN0cnVjdG9yICh7IGlkLCBlbGVtZW50LCBlbGVtZW50cyB9KSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5zZWxlY3RvciA9IGVsZW1lbnRcbiAgICB0aGlzLnNlbGVjdG9yQ2hpbGRyZW4gPSB7XG4gICAgICAuLi5lbGVtZW50c1xuICAgIH1cblxuXG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoJ3RyYW5zZm9ybScpXG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcblxuICAgIHRoaXMub25Nb3VzZVdoZWVsRXZlbnQgPSB0aGlzLm9uTW91c2VXaGVlbC5iaW5kKHRoaXMpXG4gIH1cblxuICBjcmVhdGUgKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcilcbiAgICB0aGlzLmVsZW1lbnRzID0ge31cblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxhc3Q6IDBcbiAgICB9XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LCBrZXkpID0+IHtcblxuICAgICAgaWYgKGVudHJ5IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8IGVudHJ5IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0IHx8IEFycmF5LmlzQXJyYXkoZW50cnkpKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGVudHJ5XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVudHJ5KVxuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVudHJ5KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vVE9ETzogY2hlY2sgdGhlIHZpZGVvIHRvIHNlZSBob3cgaXMgaGUgdXNpbmcgdGhlIGVsZW1lbnRzW2tleV0gb3V0c2lkZSB0aGlzIGVhY2ggbG9vcFxuXG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudHNba2V5XSlcbiAgICB9KVxuICB9XG4gIFxuICBzaG93ICgpIHtcbiAgICB0aGlzLmFuaW1hdGVJbiA9IEdTQVAudGltZWxpbmUoKVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgR1NBUC5mcm9tKHRoaXMuZWxlbWVudCwge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmVcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGhpZGUgKCkge1xuICAgIHRoaXMuYW5pbWF0ZU91dCA9IEdTQVAudGltZWxpbmUoKVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgR1NBUC50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICBvbkNvbXBsZXRlOiByZXNvbHZlXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBvbk1vdXNlV2hlZWwgKGV2ZW50KSB7XG4gICAgY29uc3QgeyBkZWx0YVkgfSA9IGV2ZW50XG5cbiAgICBsZXQgdmFsdWUgPSAwXG5cbiAgICB2YWx1ZSArPSBkZWx0YVlcblxuICAgIGNvbnNvbGUubG9nKHZhbHVlKVxuICAgIC8vIFRPRE86IEZJWCBUSEUgU0NST0xMIFZBTFVFIE5PVCBVUERBVElORyAgIFxuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNjcm9sbC50YXJnZXQsIDAuMSlcblxuICAgIC8vIFRPRE86IEZJR1VSRSBPVVQgSE9XIFRPIElNUExFTUVOVCBUSEUgRk9SRUFDSCBIRVJFLlxuXG4gICAgXG4gICAgLyogaWYgKHRoaXMuZWxlbWVudHMud3JhcHBlcikge1xuICAgICAgdGhpcy5lbGVtZW50cy53cmFwcGVyLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGB0cmFuc2xhdGVYKCR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgXG4gICAgfSAqLyAgXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLm9uTW91c2VXaGVlbClcbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzNDkxMTQxOTUxOVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS9sdWNhc3NpbHZhL2JhY2t1cC9wcm9qZXRvcy9lbmR1cmFuY2Uvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5ZWVlODU2NjAwY2U3MmIyODg2OFwiKSJdLCJuYW1lcyI6WyJHU0FQIiwiZWFjaCIsIlByZWZpeCIsIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImlkIiwiZWxlbWVudCIsImVsZW1lbnRzIiwic2VsZWN0b3IiLCJzZWxlY3RvckNoaWxkcmVuIiwidHJhbnNmb3JtUHJlZml4IiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJvbk1vdXNlV2hlZWxFdmVudCIsIm9uTW91c2VXaGVlbCIsImJpbmQiLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGFzdCIsImVudHJ5Iiwia2V5Iiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwic2hvdyIsImFuaW1hdGVJbiIsInRpbWVsaW5lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJmcm9tIiwiYXV0b0FscGhhIiwib25Db21wbGV0ZSIsImhpZGUiLCJhbmltYXRlT3V0IiwidG8iLCJldmVudCIsImRlbHRhWSIsInZhbHVlIiwidXBkYXRlIiwidXRpbHMiLCJpbnRlcnBvbGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9