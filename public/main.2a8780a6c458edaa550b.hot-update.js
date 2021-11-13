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
      last: 0
    };
    this.transformPrefix = prefix__WEBPACK_IMPORTED_MODULE_1___default()('transform');
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
    this.scroll.current = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.interpolate(this.scroll.current, this.scroll.target, 0.1); // TODO: FIGURE OUT HOW TO IMPLEMENT THE FOREACH HERE.

    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(this.elements, item => {
      item.style[this.transformPrefix] += `translateX(${this.scroll.current}px)`;
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
      // 1634916425079
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1aab3a9740be017efaea")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUsvQixNQUFMLENBQVlDLE9BQVosR0FBc0JYLDhEQUFBLENBQXVCLEtBQUtVLE1BQUwsQ0FBWUMsT0FBbkMsRUFBNEMsS0FBS0QsTUFBTCxDQUFZRSxNQUF4RCxFQUFnRSxHQUFoRSxDQUF0QixDQURRLENBR1I7O0FBRUFYLElBQUFBLGtEQUFJLENBQUMsS0FBS00sUUFBTixFQUFnQnFDLElBQUksSUFBSTtBQUMxQkEsTUFBQUEsSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBSy9CLGVBQWhCLEtBQXFDLGNBQWEsS0FBS0osTUFBTCxDQUFZQyxPQUFRLEtBQXRFO0FBQ0QsS0FGRyxDQUFKO0FBSUE7QUFDSjtBQUNBO0FBQ0c7O0FBRURJLEVBQUFBLGlCQUFpQixHQUFJO0FBQ25CTSxJQUFBQSxNQUFNLENBQUN5QixnQkFBUCxDQUF3QixZQUF4QixFQUF1Q0MsS0FBRCxJQUFXO0FBQy9DLFlBQU07QUFBRUMsUUFBQUE7QUFBRixVQUFhRCxLQUFuQjtBQUNBLFdBQUtyQyxNQUFMLENBQVlFLE1BQVosSUFBc0JvQyxNQUF0QjtBQUNELEtBSEQ7QUFJRDs7QUFqR3VCOzs7Ozs7Ozs7OztBQ04xQjtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsd0pBQWtILGNBQWMsK0JBQStCO0FBQzdMLE1BQU0sVUFBVTtBQUNoQixNQUFNLGlCQUFpQjtBQUN2QjtBQUNBOzs7Ozs7OztVQ1JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NsYXNzZXMvUGFnZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuXG5pbXBvcnQgUHJlZml4IGZyb20gJ3ByZWZpeCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XG4gIGNvbnN0cnVjdG9yICh7IGlkLCBlbGVtZW50LCBlbGVtZW50cyB9KSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5zZWxlY3RvciA9IGVsZW1lbnRcbiAgICB0aGlzLnNlbGVjdG9yQ2hpbGRyZW4gPSB7XG4gICAgICAuLi5lbGVtZW50c1xuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxhc3Q6IDBcbiAgICB9XG5cbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeCgndHJhbnNmb3JtJylcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXG4gICAgLy90aGlzLm9uTW91c2VXaGVlbCgpXG5cbiAgICAvLyB0aGlzLm9uTW91c2VXaGVlbEV2ZW50ID0gdGhpcy5vbk1vdXNlV2hlZWwuYmluZCh0aGlzKVxuICB9XG5cbiAgY3JlYXRlICgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpXG4gICAgdGhpcy5lbGVtZW50cyA9IHt9XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LCBrZXkpID0+IHtcblxuICAgICAgaWYgKGVudHJ5IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8IGVudHJ5IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0IHx8IEFycmF5LmlzQXJyYXkoZW50cnkpKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGVudHJ5XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVudHJ5KVxuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVudHJ5KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vVE9ETzogY2hlY2sgdGhlIHZpZGVvIHRvIHNlZSBob3cgaXMgaGUgdXNpbmcgdGhlIGVsZW1lbnRzW2tleV0gb3V0c2lkZSB0aGlzIGVhY2ggbG9vcFxuXG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudHNba2V5XSlcbiAgICB9KVxuICB9XG4gIFxuICBzaG93ICgpIHtcbiAgICB0aGlzLmFuaW1hdGVJbiA9IEdTQVAudGltZWxpbmUoKVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgR1NBUC5mcm9tKHRoaXMuZWxlbWVudCwge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmVcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGhpZGUgKCkge1xuICAgIHRoaXMuYW5pbWF0ZU91dCA9IEdTQVAudGltZWxpbmUoKVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgR1NBUC50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICBvbkNvbXBsZXRlOiByZXNvbHZlXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKiBvbk1vdXNlV2hlZWwgKGV2ZW50KSB7XG4gICAgY29uc3QgeyBkZWx0YVkgfSA9IGV2ZW50XG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IGRlbHRhWVxuXG4gICAgY29uc29sZS5sb2codGhpcy5zY3JvbGwudGFyZ2V0KVxuICAgIC8vIEZJWE1FOiBUSEUgU0NST0xMIFZBTFVFIE5PVCBVUERBVElORyAgIFxuICB9ICovXG5cbiAgdXBkYXRlICgpIHtcbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNjcm9sbC50YXJnZXQsIDAuMSlcblxuICAgIC8vIFRPRE86IEZJR1VSRSBPVVQgSE9XIFRPIElNUExFTUVOVCBUSEUgRk9SRUFDSCBIRVJFLlxuXG4gICAgZWFjaCh0aGlzLmVsZW1lbnRzLCBpdGVtID0+IHtcbiAgICAgIGl0ZW0uc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdICs9IGB0cmFuc2xhdGVYKCR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgXG4gICAgfSlcbiAgICBcbiAgICAvKiBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVgoJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4KWBcbiAgICB9ICovICBcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBkZWx0YVkgfSA9IGV2ZW50XG4gICAgICB0aGlzLnNjcm9sbC50YXJnZXQgKz0gZGVsdGFZXG4gICAgfSlcbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzNDkxNjQyNTA3OVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS9sdWNhc3NpbHZhL2JhY2t1cC9wcm9qZXRvcy9lbmR1cmFuY2Uvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxYWFiM2E5NzQwYmUwMTdlZmFlYVwiKSJdLCJuYW1lcyI6WyJHU0FQIiwiZWFjaCIsIlByZWZpeCIsIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImlkIiwiZWxlbWVudCIsImVsZW1lbnRzIiwic2VsZWN0b3IiLCJzZWxlY3RvckNoaWxkcmVuIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxhc3QiLCJ0cmFuc2Zvcm1QcmVmaXgiLCJhZGRFdmVudExpc3RlbmVycyIsImNyZWF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVudHJ5Iiwia2V5Iiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwic2hvdyIsImFuaW1hdGVJbiIsInRpbWVsaW5lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJmcm9tIiwiYXV0b0FscGhhIiwib25Db21wbGV0ZSIsImhpZGUiLCJhbmltYXRlT3V0IiwidG8iLCJ1cGRhdGUiLCJ1dGlscyIsImludGVycG9sYXRlIiwiaXRlbSIsInN0eWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiZGVsdGFZIl0sInNvdXJjZVJvb3QiOiIifQ==