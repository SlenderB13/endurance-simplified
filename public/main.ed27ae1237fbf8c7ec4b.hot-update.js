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

  update() {
    this.scroll.current = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.interpolate(this.scroll.current, this.scroll.target, 0.1);
    this.scroll.current = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.clamp(0, this.scroll.limit, this.scroll.current);
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(this.elements, item => {
      item.style[this.transformPrefix] = `-${this.scroll.current}px`;
    });
  }

  addEventListeners() {
    window.addEventListener('mousewheel', event => {
      const {
        deltaY
      } = event;
      this.scroll.target += deltaY;
    });
    window.addEventListener('mousemove', event => {
      this.cursor.left = event.clientX;
      this.cursor.top = event.clientY;
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
      // 1635431916139
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f37ca96d2596fb525e2a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QStCO0FBQzdMLE1BQU0sVUFBVTtBQUNoQixNQUFNLGlCQUFpQjtBQUN2QjtBQUNBOzs7Ozs7OztVQ1JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NsYXNzZXMvUGFnZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuXG5pbXBvcnQgUHJlZml4IGZyb20gJ3ByZWZpeCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XG4gIGNvbnN0cnVjdG9yICh7IGlkLCBlbGVtZW50LCBlbGVtZW50cyB9KSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5zZWxlY3RvciA9IGVsZW1lbnRcbiAgICB0aGlzLnNlbGVjdG9yQ2hpbGRyZW4gPSB7XG4gICAgICAuLi5lbGVtZW50c1xuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxpbWl0OiA0MDAwXG4gICAgfVxuXG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoJ2xlZnQnKVxuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG5cbiAgICB0aGlzLmdldEN1cnNvcigpXG5cbiAgICAvL3RoaXMub25Nb3VzZVdoZWVsKClcblxuICAgIC8vIHRoaXMub25Nb3VzZVdoZWVsRXZlbnQgPSB0aGlzLm9uTW91c2VXaGVlbC5iaW5kKHRoaXMpXG4gIH1cblxuICBjcmVhdGUgKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcilcbiAgICB0aGlzLmVsZW1lbnRzID0ge31cblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLCAoZW50cnksIGtleSkgPT4ge1xuXG4gICAgICBpZiAoZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHwgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHwgQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZW50cnlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZW50cnkpXG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZW50cnkpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy9UT0RPOiBjaGVjayB0aGUgdmlkZW8gdG8gc2VlIGhvdyBpcyBoZSB1c2luZyB0aGUgZWxlbWVudHNba2V5XSBvdXRzaWRlIHRoaXMgZWFjaCBsb29wXG5cbiAgICAgIFxuICAgICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50c1trZXldKVxuICAgIH0pXG4gIH1cbiAgXG4gIHNob3cgKCkge1xuICAgIHRoaXMuYW5pbWF0ZUluID0gR1NBUC50aW1lbGluZSgpXG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBHU0FQLmZyb20odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgb25Db21wbGV0ZTogcmVzb2x2ZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgaGlkZSAoKSB7XG4gICAgdGhpcy5hbmltYXRlT3V0ID0gR1NBUC50aW1lbGluZSgpXG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBHU0FQLnRvKHRoaXMuZWxlbWVudCwge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmVcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCAwLjEpXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuY2xhbXAoMCwgdGhpcy5zY3JvbGwubGltaXQsIHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG5cbiAgICBlYWNoKHRoaXMuZWxlbWVudHMsIGl0ZW0gPT4ge1xuICAgICAgaXRlbS5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgLSR7dGhpcy5zY3JvbGwuY3VycmVudH1weGBcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGRlbHRhWSB9ID0gZXZlbnRcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBkZWx0YVlcbiAgICB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5jdXJzb3IubGVmdCA9IGV2ZW50LmNsaWVudFhcbiAgICAgIHRoaXMuY3Vyc29yLnRvcCA9IGV2ZW50LmNsaWVudFlcbiAgICB9KVxuICB9XG5cbiAgZ2V0Q3Vyc29yICgpIHtcbiAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJzb3InKSAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzNTQzMTkxNjEzOVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS9sdWNhc3NpbHZhL2JhY2t1cC9wcm9qZXRvcy9lbmR1cmFuY2Uvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmMzdjYTk2ZDI1OTZmYjUyNWUyYVwiKSJdLCJuYW1lcyI6WyJHU0FQIiwiZWFjaCIsIlByZWZpeCIsIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImlkIiwiZWxlbWVudCIsImVsZW1lbnRzIiwic2VsZWN0b3IiLCJzZWxlY3RvckNoaWxkcmVuIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxpbWl0IiwidHJhbnNmb3JtUHJlZml4IiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJnZXRDdXJzb3IiLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlbnRyeSIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInNob3ciLCJhbmltYXRlSW4iLCJ0aW1lbGluZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbSIsImF1dG9BbHBoYSIsIm9uQ29tcGxldGUiLCJoaWRlIiwiYW5pbWF0ZU91dCIsInRvIiwidXBkYXRlIiwidXRpbHMiLCJpbnRlcnBvbGF0ZSIsImNsYW1wIiwiaXRlbSIsInN0eWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiZGVsdGFZIiwiY3Vyc29yIiwibGVmdCIsImNsaWVudFgiLCJ0b3AiLCJjbGllbnRZIl0sInNvdXJjZVJvb3QiOiIifQ==