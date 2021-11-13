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
    this.addEventListeners();
    this.onMouseWheel();
    this.update();
  }

  create() {
    this.element = document.querySelector(this.selector);
    this.elements = {};

    _.each(this.selectorChildren, (entry, key) => {
      if (entry instanceof window.HTMLElement || entry instanceof window.NodeList || Array.isArray(entry)) {
        this.elements[key] = entry;
      } else {
        this.elements[key] = document.querySelectorAll(entry);

        if (this.elements[key].lenght === 0) {
          this.elements[key] = null;
        } else if (this.elements[key].lenght === 1) {
          this.elements[key] = document.querySelector(entry);
        }
      }
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
    /* if (this.elements.wrapper) {
      this.elements.wrapper.style[this.transformPrefix] = `translateX(${this.scroll.current}px)`
    } */
  }

  onMouseWheel(event) {
    console.log(event);
  }

  addEventListeners() {
    window.addEventListener('wheel', this.onMouseWheel);
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
      // 1634675614454
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1f0d95c450ee343f7f6c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBWUUsTUFBeEQsRUFBZ0UsR0FBaEUsQ0FBdEI7QUFDQTtBQUNKO0FBQ0E7QUFDRzs7QUFFREksRUFBQUEsWUFBWSxDQUFFNEIsS0FBRixFQUFTO0FBQ25CQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNEOztBQUVEN0IsRUFBQUEsaUJBQWlCLEdBQUk7QUFDbkJTLElBQUFBLE1BQU0sQ0FBQ3VCLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLEtBQUsvQixZQUF0QztBQUNEOztBQTNFdUI7Ozs7Ozs7Ozs7O0FDTjFCO0FBQ1U7QUFDVixPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyx3SkFBa0gsY0FBYywrQkFBK0I7QUFDN0wsTUFBTSxVQUFVO0FBQ2hCLE1BQU0saUJBQWlCO0FBQ3ZCO0FBQ0E7Ozs7Ozs7O1VDUkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY2xhc3Nlcy9QYWdlLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5cbmltcG9ydCBQcmVmaXggZnJvbSAncHJlZml4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIHtcbiAgY29uc3RydWN0b3IgKHsgaWQsIGVsZW1lbnQsIGVsZW1lbnRzIH0pIHtcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLnNlbGVjdG9yID0gZWxlbWVudFxuICAgIHRoaXMuc2VsZWN0b3JDaGlsZHJlbiA9IHtcbiAgICAgIC4uLmVsZW1lbnRzXG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGFzdDogMFxuICAgIH1cblxuICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KCd0cmFuc2Zvcm0nKVxuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gICAgdGhpcy5vbk1vdXNlV2hlZWwoKVxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGNyZWF0ZSAoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKVxuICAgIHRoaXMuZWxlbWVudHMgPSB7fVxuXG4gICAgXy5lYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LCBrZXkpID0+IHtcbiAgICAgIGlmIChlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fCBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdCB8fCBBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbnRyeSlcblxuICAgICAgICBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmdodCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGxcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ2h0ID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzaG93ICgpIHtcbiAgICB0aGlzLmFuaW1hdGVJbiA9IEdTQVAudGltZWxpbmUoKVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgR1NBUC5mcm9tKHRoaXMuZWxlbWVudCwge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmVcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGhpZGUgKCkge1xuICAgIHRoaXMuYW5pbWF0ZU91dCA9IEdTQVAudGltZWxpbmUoKVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgR1NBUC50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICBvbkNvbXBsZXRlOiByZXNvbHZlXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc2Nyb2xsLnRhcmdldCwgMC4xKVxuICAgIC8qIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlWCgke3RoaXMuc2Nyb2xsLmN1cnJlbnR9cHgpYFxuICAgIH0gKi8gIFxuICB9XG5cbiAgb25Nb3VzZVdoZWVsIChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMub25Nb3VzZVdoZWVsKVxuICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjM0Njc1NjE0NDU0XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9ob21lL2x1Y2Fzc2lsdmEvYmFja3VwL3Byb2pldG9zL2VuZHVyYW5jZS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCJcIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjFmMGQ5NWM0NTBlZTM0M2Y3ZjZjXCIpIl0sIm5hbWVzIjpbIkdTQVAiLCJlYWNoIiwiUHJlZml4IiwiUGFnZSIsImNvbnN0cnVjdG9yIiwiaWQiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJzZWxlY3RvciIsInNlbGVjdG9yQ2hpbGRyZW4iLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGFzdCIsInRyYW5zZm9ybVByZWZpeCIsImFkZEV2ZW50TGlzdGVuZXJzIiwib25Nb3VzZVdoZWVsIiwidXBkYXRlIiwiY3JlYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiXyIsImVudHJ5Iiwia2V5Iiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5naHQiLCJzaG93IiwiYW5pbWF0ZUluIiwidGltZWxpbmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImZyb20iLCJhdXRvQWxwaGEiLCJvbkNvbXBsZXRlIiwiaGlkZSIsImFuaW1hdGVPdXQiLCJ0byIsInV0aWxzIiwiaW50ZXJwb2xhdGUiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==