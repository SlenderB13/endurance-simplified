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
    this.onMouseWheel = this.onMouseWheel.bind(this);
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

        if (this.elements[key].length === 0) {
          this.elements[key] = null;
        } else if (this.elements[key].length === 1) {
          this.elements[key] = document.querySelector(entry);
        }
      }

      console.log(this.elements[key]);
      /* if (entry instanceof window.HTMLElement || entry instanceof window.NodeList || Array.isArray(entry)) {
        this.elements[key] = entry
       } else {
        this.elements[key] = document.querySelectorAll(entry)
        if (this.elements[key].lenght === 0) {
          this.elements[key] = null
        } else if (this.elements[key].lenght === 1) {
          this.elements[key] = document.querySelector(entry)
        }
      } */
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
    console.log(this.element);
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
      // 1634690839459
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("551aa989be0ab245246f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zYTJjNjVlMDRiOGI4Y2JlMTljYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVlLE1BQU1HLElBQU4sQ0FBVztBQUN4QkMsRUFBQUEsV0FBVyxDQUFFO0FBQUVDLElBQUFBLEVBQUY7QUFBTUMsSUFBQUEsT0FBTjtBQUFlQyxJQUFBQTtBQUFmLEdBQUYsRUFBNkI7QUFDdEMsU0FBS0YsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsU0FBS0csUUFBTCxHQUFnQkYsT0FBaEI7QUFDQSxTQUFLRyxnQkFBTCxHQUF3QixFQUN0QixHQUFHRjtBQURtQixLQUF4QjtBQUlBLFNBQUtHLE1BQUwsR0FBYztBQUNaQyxNQUFBQSxPQUFPLEVBQUUsQ0FERztBQUVaQyxNQUFBQSxNQUFNLEVBQUUsQ0FGSTtBQUdaQyxNQUFBQSxJQUFJLEVBQUU7QUFITSxLQUFkO0FBTUEsU0FBS0MsZUFBTCxHQUF1QlosNkNBQU0sQ0FBQyxXQUFELENBQTdCO0FBRUEsU0FBS2EsaUJBQUw7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0EsU0FBS0MsTUFBTDtBQUNEOztBQUVEQyxFQUFBQSxNQUFNLEdBQUk7QUFDUixTQUFLYixPQUFMLEdBQWVjLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUFLYixRQUE1QixDQUFmO0FBQ0EsU0FBS0QsUUFBTCxHQUFnQixFQUFoQjtBQUVBTixJQUFBQSxrREFBSSxDQUFDLEtBQUtRLGdCQUFOLEVBQXdCLENBQUNhLEtBQUQsRUFBUUMsR0FBUixLQUFnQjtBQUUxQyxVQUFJRCxLQUFLLFlBQVlFLE1BQU0sQ0FBQ0MsV0FBeEIsSUFBdUNILEtBQUssWUFBWUUsTUFBTSxDQUFDRSxRQUEvRCxJQUEyRUMsS0FBSyxDQUFDQyxPQUFOLENBQWNOLEtBQWQsQ0FBL0UsRUFBcUc7QUFDbkcsYUFBS2YsUUFBTCxDQUFjZ0IsR0FBZCxJQUFxQkQsS0FBckI7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLZixRQUFMLENBQWNnQixHQUFkLElBQXFCSCxRQUFRLENBQUNTLGdCQUFULENBQTBCUCxLQUExQixDQUFyQjs7QUFFQSxZQUFJLEtBQUtmLFFBQUwsQ0FBY2dCLEdBQWQsRUFBbUJPLE1BQW5CLEtBQThCLENBQWxDLEVBQXFDO0FBQ25DLGVBQUt2QixRQUFMLENBQWNnQixHQUFkLElBQXFCLElBQXJCO0FBQ0QsU0FGRCxNQUVPLElBQUksS0FBS2hCLFFBQUwsQ0FBY2dCLEdBQWQsRUFBbUJPLE1BQW5CLEtBQThCLENBQWxDLEVBQXFDO0FBQzFDLGVBQUt2QixRQUFMLENBQWNnQixHQUFkLElBQXFCSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUJDLEtBQXZCLENBQXJCO0FBQ0Q7QUFDRjs7QUFFRFMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS3pCLFFBQUwsQ0FBY2dCLEdBQWQsQ0FBWjtBQUVBO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUssS0EzQkcsQ0FBSjtBQTRCRDs7QUFFRFUsRUFBQUEsSUFBSSxHQUFJO0FBQ04sU0FBS0MsU0FBTCxHQUFpQmxDLHFEQUFBLEVBQWpCO0FBRUEsV0FBTyxJQUFJb0MsT0FBSixDQUFZQyxPQUFPLElBQUk7QUFDNUJyQyxNQUFBQSxpREFBQSxDQUFVLEtBQUtNLE9BQWYsRUFBd0I7QUFDdEJpQyxRQUFBQSxTQUFTLEVBQUUsQ0FEVztBQUV0QkMsUUFBQUEsVUFBVSxFQUFFSDtBQUZVLE9BQXhCO0FBSUQsS0FMTSxDQUFQO0FBTUQ7O0FBRURJLEVBQUFBLElBQUksR0FBSTtBQUNOLFNBQUtDLFVBQUwsR0FBa0IxQyxxREFBQSxFQUFsQjtBQUVBLFdBQU8sSUFBSW9DLE9BQUosQ0FBWUMsT0FBTyxJQUFJO0FBQzVCckMsTUFBQUEsK0NBQUEsQ0FBUSxLQUFLTSxPQUFiLEVBQXNCO0FBQ3BCaUMsUUFBQUEsU0FBUyxFQUFFLENBRFM7QUFFcEJDLFFBQUFBLFVBQVUsRUFBRUg7QUFGUSxPQUF0QjtBQUlELEtBTE0sQ0FBUDtBQU1EOztBQUVEbkIsRUFBQUEsTUFBTSxHQUFJO0FBQ1IsU0FBS1IsTUFBTCxDQUFZQyxPQUFaLEdBQXNCWCw4REFBQSxDQUF1QixLQUFLVSxNQUFMLENBQVlDLE9BQW5DLEVBQTRDLEtBQUtELE1BQUwsQ0FBWUUsTUFBeEQsRUFBZ0UsR0FBaEUsQ0FBdEI7QUFFQTtBQUNKO0FBQ0E7QUFDRzs7QUFFREksRUFBQUEsWUFBWSxDQUFFOEIsS0FBRixFQUFTO0FBQ25CZixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLMUIsT0FBakI7QUFDRDs7QUFFRFMsRUFBQUEsaUJBQWlCLEdBQUk7QUFDbkJTLElBQUFBLE1BQU0sQ0FBQ3VCLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLEtBQUsvQixZQUF0QztBQUNEOztBQTNGdUI7Ozs7Ozs7Ozs7O0FDTjFCO0FBQ1U7QUFDVixPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyx3SkFBa0gsY0FBYywrQkFBK0I7QUFDN0wsTUFBTSxVQUFVO0FBQ2hCLE1BQU0saUJBQWlCO0FBQ3ZCO0FBQ0E7Ozs7Ozs7O1VDUkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY2xhc3Nlcy9QYWdlLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5cbmltcG9ydCBQcmVmaXggZnJvbSAncHJlZml4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIHtcbiAgY29uc3RydWN0b3IgKHsgaWQsIGVsZW1lbnQsIGVsZW1lbnRzIH0pIHtcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLnNlbGVjdG9yID0gZWxlbWVudFxuICAgIHRoaXMuc2VsZWN0b3JDaGlsZHJlbiA9IHtcbiAgICAgIC4uLmVsZW1lbnRzXG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGFzdDogMFxuICAgIH1cblxuICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KCd0cmFuc2Zvcm0nKVxuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gICAgdGhpcy5vbk1vdXNlV2hlZWwgPSB0aGlzLm9uTW91c2VXaGVlbC5iaW5kKHRoaXMpXG4gICAgdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgY3JlYXRlICgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpXG4gICAgdGhpcy5lbGVtZW50cyA9IHt9XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LCBrZXkpID0+IHtcbiAgICAgIFxuICAgICAgaWYgKGVudHJ5IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8IGVudHJ5IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0IHx8IEFycmF5LmlzQXJyYXkoZW50cnkpKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGVudHJ5XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVudHJ5KVxuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVudHJ5KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudHNba2V5XSlcblxuICAgICAgLyogaWYgKGVudHJ5IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8IGVudHJ5IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0IHx8IEFycmF5LmlzQXJyYXkoZW50cnkpKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGVudHJ5XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZW50cnkpXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ2h0ID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5naHQgPT09IDEpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVudHJ5KVxuICAgICAgICB9XG4gICAgICB9ICovXG4gICAgfSlcbiAgfVxuICBcbiAgc2hvdyAoKSB7XG4gICAgdGhpcy5hbmltYXRlSW4gPSBHU0FQLnRpbWVsaW5lKClcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIEdTQVAuZnJvbSh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICBvbkNvbXBsZXRlOiByZXNvbHZlXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBoaWRlICgpIHtcbiAgICB0aGlzLmFuaW1hdGVPdXQgPSBHU0FQLnRpbWVsaW5lKClcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIEdTQVAudG8odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgb25Db21wbGV0ZTogcmVzb2x2ZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNjcm9sbC50YXJnZXQsIDAuMSlcblxuICAgIC8qIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlWCgke3RoaXMuc2Nyb2xsLmN1cnJlbnR9cHgpYFxuICAgIH0gKi8gIFxuICB9XG5cbiAgb25Nb3VzZVdoZWVsIChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudClcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLm9uTW91c2VXaGVlbClcbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzNDY5MDgzOTQ1OVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS9sdWNhc3NpbHZhL2JhY2t1cC9wcm9qZXRvcy9lbmR1cmFuY2Uvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1NTFhYTk4OWJlMGFiMjQ1MjQ2ZlwiKSJdLCJuYW1lcyI6WyJHU0FQIiwiZWFjaCIsIlByZWZpeCIsIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImlkIiwiZWxlbWVudCIsImVsZW1lbnRzIiwic2VsZWN0b3IiLCJzZWxlY3RvckNoaWxkcmVuIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxhc3QiLCJ0cmFuc2Zvcm1QcmVmaXgiLCJhZGRFdmVudExpc3RlbmVycyIsIm9uTW91c2VXaGVlbCIsImJpbmQiLCJ1cGRhdGUiLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlbnRyeSIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInNob3ciLCJhbmltYXRlSW4iLCJ0aW1lbGluZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbSIsImF1dG9BbHBoYSIsIm9uQ29tcGxldGUiLCJoaWRlIiwiYW5pbWF0ZU91dCIsInRvIiwidXRpbHMiLCJpbnRlcnBvbGF0ZSIsImV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=