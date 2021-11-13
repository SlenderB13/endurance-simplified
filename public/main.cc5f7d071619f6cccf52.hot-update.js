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
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(this.selectorChildren, (entry, key) => {
      if (entry instanceof window.HTMLElement || entry instanceof window.NodeList || Array.isArray(entry)) {
        this.elements[key] = entry;
      } else {
        this.elements[key] = document.querySelectorAll(entry);

        if (this.elements[key].lenght === 0) {
          this.elements[key] = null;
        } else if (this.elements[key] === 1) {
          this.elements[key] = document.querySelector(entry);
        }
      }
    });
    console.log(this.elements.values());
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
    }  */
  }

  onMouseWheel(event) {
    console.log(event);
    console.log(this.elements);
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
      // 1634672994688
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("beaa0114f8b8f594b2c3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jYzVmN2QwNzE2MTlmNmNjY2Y1Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVlLE1BQU1HLElBQU4sQ0FBVztBQUN4QkMsRUFBQUEsV0FBVyxDQUFFO0FBQUVDLElBQUFBLEVBQUY7QUFBTUMsSUFBQUEsT0FBTjtBQUFlQyxJQUFBQTtBQUFmLEdBQUYsRUFBNkI7QUFDdEMsU0FBS0YsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsU0FBS0csUUFBTCxHQUFnQkYsT0FBaEI7QUFDQSxTQUFLRyxnQkFBTCxHQUF3QixFQUN0QixHQUFHRjtBQURtQixLQUF4QjtBQUlBLFNBQUtHLE1BQUwsR0FBYztBQUNaQyxNQUFBQSxPQUFPLEVBQUUsQ0FERztBQUVaQyxNQUFBQSxNQUFNLEVBQUUsQ0FGSTtBQUdaQyxNQUFBQSxJQUFJLEVBQUU7QUFITSxLQUFkO0FBTUEsU0FBS0MsZUFBTCxHQUF1QlosNkNBQU0sQ0FBQyxXQUFELENBQTdCO0FBRUEsU0FBS2EsaUJBQUw7QUFDQSxTQUFLQyxZQUFMO0FBQ0EsU0FBS0MsTUFBTDtBQUNEOztBQUVEQyxFQUFBQSxNQUFNLEdBQUk7QUFDUixTQUFLWixPQUFMLEdBQWVhLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUFLWixRQUE1QixDQUFmO0FBQ0EsU0FBS0QsUUFBTCxHQUFnQixFQUFoQjtBQUVBTixJQUFBQSxrREFBSSxDQUFDLEtBQUtRLGdCQUFOLEVBQXdCLENBQUNZLEtBQUQsRUFBUUMsR0FBUixLQUFnQjtBQUMxQyxVQUFJRCxLQUFLLFlBQVlFLE1BQU0sQ0FBQ0MsV0FBeEIsSUFBdUNILEtBQUssWUFBWUUsTUFBTSxDQUFDRSxRQUEvRCxJQUEyRUMsS0FBSyxDQUFDQyxPQUFOLENBQWNOLEtBQWQsQ0FBL0UsRUFBcUc7QUFDbkcsYUFBS2QsUUFBTCxDQUFjZSxHQUFkLElBQXFCRCxLQUFyQjtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtkLFFBQUwsQ0FBY2UsR0FBZCxJQUFxQkgsUUFBUSxDQUFDUyxnQkFBVCxDQUEwQlAsS0FBMUIsQ0FBckI7O0FBRUEsWUFBSSxLQUFLZCxRQUFMLENBQWNlLEdBQWQsRUFBbUJPLE1BQW5CLEtBQThCLENBQWxDLEVBQXFDO0FBQ25DLGVBQUt0QixRQUFMLENBQWNlLEdBQWQsSUFBcUIsSUFBckI7QUFDRCxTQUZELE1BRU8sSUFBSSxLQUFLZixRQUFMLENBQWNlLEdBQWQsTUFBdUIsQ0FBM0IsRUFBOEI7QUFDbkMsZUFBS2YsUUFBTCxDQUFjZSxHQUFkLElBQXFCSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUJDLEtBQXZCLENBQXJCO0FBQ0Q7QUFDRjtBQUNGLEtBWkcsQ0FBSjtBQWFBUyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLeEIsUUFBTCxDQUFjeUIsTUFBZCxFQUFaO0FBQ0Q7O0FBRURDLEVBQUFBLElBQUksR0FBSTtBQUNOLFNBQUtDLFNBQUwsR0FBaUJsQyxxREFBQSxFQUFqQjtBQUVBLFdBQU8sSUFBSW9DLE9BQUosQ0FBWUMsT0FBTyxJQUFJO0FBQzVCckMsTUFBQUEsaURBQUEsQ0FBVSxLQUFLTSxPQUFmLEVBQXdCO0FBQ3RCaUMsUUFBQUEsU0FBUyxFQUFFLENBRFc7QUFFdEJDLFFBQUFBLFVBQVUsRUFBRUg7QUFGVSxPQUF4QjtBQUlELEtBTE0sQ0FBUDtBQU1EOztBQUVESSxFQUFBQSxJQUFJLEdBQUk7QUFDTixTQUFLQyxVQUFMLEdBQWtCMUMscURBQUEsRUFBbEI7QUFFQSxXQUFPLElBQUlvQyxPQUFKLENBQVlDLE9BQU8sSUFBSTtBQUM1QnJDLE1BQUFBLCtDQUFBLENBQVEsS0FBS00sT0FBYixFQUFzQjtBQUNwQmlDLFFBQUFBLFNBQVMsRUFBRSxDQURTO0FBRXBCQyxRQUFBQSxVQUFVLEVBQUVIO0FBRlEsT0FBdEI7QUFJRCxLQUxNLENBQVA7QUFNRDs7QUFFRHBCLEVBQUFBLE1BQU0sR0FBSTtBQUNSLFNBQUtQLE1BQUwsQ0FBWUMsT0FBWixHQUFzQlgsOERBQUEsQ0FBdUIsS0FBS1UsTUFBTCxDQUFZQyxPQUFuQyxFQUE0QyxLQUFLRCxNQUFMLENBQVlFLE1BQXhELEVBQWdFLEdBQWhFLENBQXRCO0FBQ0E7QUFDSjtBQUNBO0FBQ0c7O0FBRURJLEVBQUFBLFlBQVksQ0FBRThCLEtBQUYsRUFBUztBQUNuQmhCLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZSxLQUFaO0FBQ0FoQixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLeEIsUUFBakI7QUFFRDs7QUFFRFEsRUFBQUEsaUJBQWlCLEdBQUk7QUFDbkJRLElBQUFBLE1BQU0sQ0FBQ3dCLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLEtBQUsvQixZQUF0QztBQUNEOztBQTlFdUI7Ozs7Ozs7Ozs7O0FDTjFCO0FBQ1U7QUFDVixPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyx3SkFBa0gsY0FBYywrQkFBK0I7QUFDN0wsTUFBTSxVQUFVO0FBQ2hCLE1BQU0saUJBQWlCO0FBQ3ZCO0FBQ0E7Ozs7Ozs7O1VDUkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY2xhc3Nlcy9QYWdlLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5cbmltcG9ydCBQcmVmaXggZnJvbSAncHJlZml4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIHtcbiAgY29uc3RydWN0b3IgKHsgaWQsIGVsZW1lbnQsIGVsZW1lbnRzIH0pIHtcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLnNlbGVjdG9yID0gZWxlbWVudFxuICAgIHRoaXMuc2VsZWN0b3JDaGlsZHJlbiA9IHtcbiAgICAgIC4uLmVsZW1lbnRzXG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGFzdDogMFxuICAgIH1cblxuICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KCd0cmFuc2Zvcm0nKVxuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gICAgdGhpcy5vbk1vdXNlV2hlZWwoKVxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGNyZWF0ZSAoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKVxuICAgIHRoaXMuZWxlbWVudHMgPSB7fVxuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4sIChlbnRyeSwga2V5KSA9PiB7XG4gICAgICBpZiAoZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHwgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHwgQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZW50cnlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZW50cnkpXG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5naHQgPT09IDApIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50cy52YWx1ZXMoKSlcbiAgfVxuXG4gIHNob3cgKCkge1xuICAgIHRoaXMuYW5pbWF0ZUluID0gR1NBUC50aW1lbGluZSgpXG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBHU0FQLmZyb20odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgb25Db21wbGV0ZTogcmVzb2x2ZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgaGlkZSAoKSB7XG4gICAgdGhpcy5hbmltYXRlT3V0ID0gR1NBUC50aW1lbGluZSgpXG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBHU0FQLnRvKHRoaXMuZWxlbWVudCwge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmVcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCAwLjEpXG4gICAgLyogaWYgKHRoaXMuZWxlbWVudHMud3JhcHBlcikge1xuICAgICAgdGhpcy5lbGVtZW50cy53cmFwcGVyLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGB0cmFuc2xhdGVYKCR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgXG4gICAgfSAgKi8gXG4gIH1cblxuICBvbk1vdXNlV2hlZWwgKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpXG4gICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50cylcblxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMub25Nb3VzZVdoZWVsKVxuICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjM0NjcyOTk0Njg4XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9ob21lL2x1Y2Fzc2lsdmEvYmFja3VwL3Byb2pldG9zL2VuZHVyYW5jZS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCJcIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImJlYWEwMTE0ZjhiOGY1OTRiMmMzXCIpIl0sIm5hbWVzIjpbIkdTQVAiLCJlYWNoIiwiUHJlZml4IiwiUGFnZSIsImNvbnN0cnVjdG9yIiwiaWQiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJzZWxlY3RvciIsInNlbGVjdG9yQ2hpbGRyZW4iLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGFzdCIsInRyYW5zZm9ybVByZWZpeCIsImFkZEV2ZW50TGlzdGVuZXJzIiwib25Nb3VzZVdoZWVsIiwidXBkYXRlIiwiY3JlYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZW50cnkiLCJrZXkiLCJ3aW5kb3ciLCJIVE1MRWxlbWVudCIsIk5vZGVMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmdodCIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZXMiLCJzaG93IiwiYW5pbWF0ZUluIiwidGltZWxpbmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImZyb20iLCJhdXRvQWxwaGEiLCJvbkNvbXBsZXRlIiwiaGlkZSIsImFuaW1hdGVPdXQiLCJ0byIsInV0aWxzIiwiaW50ZXJwb2xhdGUiLCJldmVudCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9