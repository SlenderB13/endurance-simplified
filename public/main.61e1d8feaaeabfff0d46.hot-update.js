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
      limit: window.innerWidth
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
      // 1634921351176
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e0e6b52ee80089752db6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42MWUxZDhmZWFhZWFiZmZmMGQ0Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVlLE1BQU1HLElBQU4sQ0FBVztBQUN4QkMsRUFBQUEsV0FBVyxDQUFFO0FBQUVDLElBQUFBLEVBQUY7QUFBTUMsSUFBQUEsT0FBTjtBQUFlQyxJQUFBQTtBQUFmLEdBQUYsRUFBNkI7QUFDdEMsU0FBS0YsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsU0FBS0csUUFBTCxHQUFnQkYsT0FBaEI7QUFDQSxTQUFLRyxnQkFBTCxHQUF3QixFQUN0QixHQUFHRjtBQURtQixLQUF4QjtBQUlBLFNBQUtHLE1BQUwsR0FBYztBQUNaQyxNQUFBQSxPQUFPLEVBQUUsQ0FERztBQUVaQyxNQUFBQSxNQUFNLEVBQUUsQ0FGSTtBQUdaQyxNQUFBQSxLQUFLLEVBQUVDLE1BQU0sQ0FBQ0M7QUFIRixLQUFkO0FBTUEsU0FBS0MsZUFBTCxHQUF1QmQsNkNBQU0sQ0FBQyxNQUFELENBQTdCO0FBRUEsU0FBS2UsaUJBQUwsR0Fmc0MsQ0FpQnRDO0FBRUE7QUFDRDs7QUFFREMsRUFBQUEsTUFBTSxHQUFJO0FBQ1IsU0FBS1osT0FBTCxHQUFlYSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBS1osUUFBNUIsQ0FBZjtBQUNBLFNBQUtELFFBQUwsR0FBZ0IsRUFBaEI7QUFFQU4sSUFBQUEsa0RBQUksQ0FBQyxLQUFLUSxnQkFBTixFQUF3QixDQUFDWSxLQUFELEVBQVFDLEdBQVIsS0FBZ0I7QUFFMUMsVUFBSUQsS0FBSyxZQUFZUCxNQUFNLENBQUNTLFdBQXhCLElBQXVDRixLQUFLLFlBQVlQLE1BQU0sQ0FBQ1UsUUFBL0QsSUFBMkVDLEtBQUssQ0FBQ0MsT0FBTixDQUFjTCxLQUFkLENBQS9FLEVBQXFHO0FBQ25HLGFBQUtkLFFBQUwsQ0FBY2UsR0FBZCxJQUFxQkQsS0FBckI7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLZCxRQUFMLENBQWNlLEdBQWQsSUFBcUJILFFBQVEsQ0FBQ1EsZ0JBQVQsQ0FBMEJOLEtBQTFCLENBQXJCOztBQUVBLFlBQUksS0FBS2QsUUFBTCxDQUFjZSxHQUFkLEVBQW1CTSxNQUFuQixLQUE4QixDQUFsQyxFQUFxQztBQUNuQyxlQUFLckIsUUFBTCxDQUFjZSxHQUFkLElBQXFCLElBQXJCO0FBQ0QsU0FGRCxNQUVPLElBQUksS0FBS2YsUUFBTCxDQUFjZSxHQUFkLEVBQW1CTSxNQUFuQixLQUE4QixDQUFsQyxFQUFxQztBQUMxQyxlQUFLckIsUUFBTCxDQUFjZSxHQUFkLElBQXFCSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUJDLEtBQXZCLENBQXJCO0FBQ0Q7QUFDRixPQVp5QyxDQWMxQzs7O0FBR0FRLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUt2QixRQUFMLENBQWNlLEdBQWQsQ0FBWjtBQUNELEtBbEJHLENBQUo7QUFtQkQ7O0FBRURTLEVBQUFBLElBQUksR0FBSTtBQUNOLFNBQUtDLFNBQUwsR0FBaUJoQyxxREFBQSxFQUFqQjtBQUVBLFdBQU8sSUFBSWtDLE9BQUosQ0FBWUMsT0FBTyxJQUFJO0FBQzVCbkMsTUFBQUEsaURBQUEsQ0FBVSxLQUFLTSxPQUFmLEVBQXdCO0FBQ3RCK0IsUUFBQUEsU0FBUyxFQUFFLENBRFc7QUFFdEJDLFFBQUFBLFVBQVUsRUFBRUg7QUFGVSxPQUF4QjtBQUlELEtBTE0sQ0FBUDtBQU1EOztBQUVESSxFQUFBQSxJQUFJLEdBQUk7QUFDTixTQUFLQyxVQUFMLEdBQWtCeEMscURBQUEsRUFBbEI7QUFFQSxXQUFPLElBQUlrQyxPQUFKLENBQVlDLE9BQU8sSUFBSTtBQUM1Qm5DLE1BQUFBLCtDQUFBLENBQVEsS0FBS00sT0FBYixFQUFzQjtBQUNwQitCLFFBQUFBLFNBQVMsRUFBRSxDQURTO0FBRXBCQyxRQUFBQSxVQUFVLEVBQUVIO0FBRlEsT0FBdEI7QUFJRCxLQUxNLENBQVA7QUFNRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0VPLEVBQUFBLE1BQU0sR0FBSTtBQUNSLFNBQUtoQyxNQUFMLENBQVlDLE9BQVosR0FBc0JYLDhEQUFBLENBQXVCLEtBQUtVLE1BQUwsQ0FBWUMsT0FBbkMsRUFBNEMsS0FBS0QsTUFBTCxDQUFZRSxNQUF4RCxFQUFnRSxHQUFoRSxDQUF0QjtBQUNBLFNBQUtGLE1BQUwsQ0FBWUMsT0FBWixHQUFzQlgsd0RBQUEsQ0FBaUIsQ0FBakIsRUFBb0IsS0FBS1UsTUFBTCxDQUFZRyxLQUFoQyxFQUF1QyxLQUFLSCxNQUFMLENBQVlDLE9BQW5ELENBQXRCLENBRlEsQ0FJUjs7QUFFQVYsSUFBQUEsa0RBQUksQ0FBQyxLQUFLTSxRQUFOLEVBQWdCdUMsSUFBSSxJQUFJO0FBQzFCQSxNQUFBQSxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLL0IsZUFBaEIsSUFBb0MsSUFBRyxLQUFLTixNQUFMLENBQVlDLE9BQVEsSUFBM0Q7QUFDRCxLQUZHLENBQUo7QUFJQTtBQUNKO0FBQ0E7QUFDRzs7QUFFRE0sRUFBQUEsaUJBQWlCLEdBQUk7QUFDbkJILElBQUFBLE1BQU0sQ0FBQ2tDLGdCQUFQLENBQXdCLFlBQXhCLEVBQXVDQyxLQUFELElBQVc7QUFDL0MsWUFBTTtBQUFFQyxRQUFBQTtBQUFGLFVBQWFELEtBQW5CO0FBQ0EsV0FBS3ZDLE1BQUwsQ0FBWUUsTUFBWixJQUFzQnNDLE1BQXRCO0FBQ0QsS0FIRDtBQUlEOztBQWxHdUI7Ozs7Ozs7Ozs7O0FDTjFCO0FBQ1U7QUFDVixPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyx3SkFBa0gsY0FBYywrQkFBK0I7QUFDN0wsTUFBTSxVQUFVO0FBQ2hCLE1BQU0saUJBQWlCO0FBQ3ZCO0FBQ0E7Ozs7Ozs7O1VDUkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY2xhc3Nlcy9QYWdlLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5cbmltcG9ydCBQcmVmaXggZnJvbSAncHJlZml4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIHtcbiAgY29uc3RydWN0b3IgKHsgaWQsIGVsZW1lbnQsIGVsZW1lbnRzIH0pIHtcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLnNlbGVjdG9yID0gZWxlbWVudFxuICAgIHRoaXMuc2VsZWN0b3JDaGlsZHJlbiA9IHtcbiAgICAgIC4uLmVsZW1lbnRzXG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGltaXQ6IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgfVxuXG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoJ2xlZnQnKVxuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG5cbiAgICAvL3RoaXMub25Nb3VzZVdoZWVsKClcblxuICAgIC8vIHRoaXMub25Nb3VzZVdoZWVsRXZlbnQgPSB0aGlzLm9uTW91c2VXaGVlbC5iaW5kKHRoaXMpXG4gIH1cblxuICBjcmVhdGUgKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcilcbiAgICB0aGlzLmVsZW1lbnRzID0ge31cblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLCAoZW50cnksIGtleSkgPT4ge1xuXG4gICAgICBpZiAoZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHwgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHwgQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZW50cnlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZW50cnkpXG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZW50cnkpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy9UT0RPOiBjaGVjayB0aGUgdmlkZW8gdG8gc2VlIGhvdyBpcyBoZSB1c2luZyB0aGUgZWxlbWVudHNba2V5XSBvdXRzaWRlIHRoaXMgZWFjaCBsb29wXG5cbiAgICAgIFxuICAgICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50c1trZXldKVxuICAgIH0pXG4gIH1cbiAgXG4gIHNob3cgKCkge1xuICAgIHRoaXMuYW5pbWF0ZUluID0gR1NBUC50aW1lbGluZSgpXG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBHU0FQLmZyb20odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgb25Db21wbGV0ZTogcmVzb2x2ZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgaGlkZSAoKSB7XG4gICAgdGhpcy5hbmltYXRlT3V0ID0gR1NBUC50aW1lbGluZSgpXG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBHU0FQLnRvKHRoaXMuZWxlbWVudCwge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmVcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qIG9uTW91c2VXaGVlbCAoZXZlbnQpIHtcbiAgICBjb25zdCB7IGRlbHRhWSB9ID0gZXZlbnRcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgKz0gZGVsdGFZXG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLnNjcm9sbC50YXJnZXQpXG4gICAgLy8gRklYTUU6IFRIRSBTQ1JPTEwgVkFMVUUgTk9UIFVQREFUSU5HICAgXG4gIH0gKi9cblxuICB1cGRhdGUgKCkge1xuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc2Nyb2xsLnRhcmdldCwgMC4xKVxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmNsYW1wKDAsIHRoaXMuc2Nyb2xsLmxpbWl0LCB0aGlzLnNjcm9sbC5jdXJyZW50KVxuXG4gICAgLy8gVE9ETzogRklHVVJFIE9VVCBIT1cgVE8gSU1QTEVNRU5UIFRIRSBGT1JFQUNIIEhFUkUuXG5cbiAgICBlYWNoKHRoaXMuZWxlbWVudHMsIGl0ZW0gPT4ge1xuICAgICAgaXRlbS5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgLSR7dGhpcy5zY3JvbGwuY3VycmVudH1weGBcbiAgICB9KVxuICAgIFxuICAgIC8qIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlWCgke3RoaXMuc2Nyb2xsLmN1cnJlbnR9cHgpYFxuICAgIH0gKi8gIFxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGRlbHRhWSB9ID0gZXZlbnRcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBkZWx0YVlcbiAgICB9KVxuICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjM0OTIxMzUxMTc2XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9ob21lL2x1Y2Fzc2lsdmEvYmFja3VwL3Byb2pldG9zL2VuZHVyYW5jZS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCJcIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImUwZTZiNTJlZTgwMDg5NzUyZGI2XCIpIl0sIm5hbWVzIjpbIkdTQVAiLCJlYWNoIiwiUHJlZml4IiwiUGFnZSIsImNvbnN0cnVjdG9yIiwiaWQiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJzZWxlY3RvciIsInNlbGVjdG9yQ2hpbGRyZW4iLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGltaXQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidHJhbnNmb3JtUHJlZml4IiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlbnRyeSIsImtleSIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInNob3ciLCJhbmltYXRlSW4iLCJ0aW1lbGluZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbSIsImF1dG9BbHBoYSIsIm9uQ29tcGxldGUiLCJoaWRlIiwiYW5pbWF0ZU91dCIsInRvIiwidXBkYXRlIiwidXRpbHMiLCJpbnRlcnBvbGF0ZSIsImNsYW1wIiwiaXRlbSIsInN0eWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiZGVsdGFZIl0sInNvdXJjZVJvb3QiOiIifQ==