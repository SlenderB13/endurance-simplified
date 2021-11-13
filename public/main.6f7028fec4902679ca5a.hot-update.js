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

  onMouseWheel(event) {
    const {
      deltaY
    } = event;
    this.scroll.target = deltaY;
  }

  update() {
    this.scroll.current = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.interpolate(this.scroll.current, this.scroll.target, 0.1);
    /* if (this.elements.wrapper) {
      this.elements.wrapper.style[this.transformPrefix] = `translateX(${this.scroll.current}px)`
    } */
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
      // 1634768575957
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b28f6bd4baa131abf951")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42ZjcwMjhmZWM0OTAyNjc5Y2E1YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVlLE1BQU1HLElBQU4sQ0FBVztBQUN4QkMsRUFBQUEsV0FBVyxDQUFFO0FBQUVDLElBQUFBLEVBQUY7QUFBTUMsSUFBQUEsT0FBTjtBQUFlQyxJQUFBQTtBQUFmLEdBQUYsRUFBNkI7QUFDdEMsU0FBS0YsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsU0FBS0csUUFBTCxHQUFnQkYsT0FBaEI7QUFDQSxTQUFLRyxnQkFBTCxHQUF3QixFQUN0QixHQUFHRjtBQURtQixLQUF4QjtBQUlBLFNBQUtHLE1BQUwsR0FBYztBQUNaQyxNQUFBQSxPQUFPLEVBQUUsQ0FERztBQUVaQyxNQUFBQSxNQUFNLEVBQUUsQ0FGSTtBQUdaQyxNQUFBQSxJQUFJLEVBQUU7QUFITSxLQUFkO0FBTUEsU0FBS0MsZUFBTCxHQUF1QlosNkNBQU0sQ0FBQyxXQUFELENBQTdCO0FBRUEsU0FBS2EsaUJBQUw7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0Q7O0FBRURDLEVBQUFBLE1BQU0sR0FBSTtBQUNSLFNBQUtaLE9BQUwsR0FBZWEsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQUtaLFFBQTVCLENBQWY7QUFDQSxTQUFLRCxRQUFMLEdBQWdCLEVBQWhCO0FBR0FOLElBQUFBLGtEQUFJLENBQUMsS0FBS1EsZ0JBQU4sRUFBd0IsQ0FBQ1ksS0FBRCxFQUFRQyxHQUFSLEtBQWdCO0FBRTFDLFVBQUlELEtBQUssWUFBWUUsTUFBTSxDQUFDQyxXQUF4QixJQUF1Q0gsS0FBSyxZQUFZRSxNQUFNLENBQUNFLFFBQS9ELElBQTJFQyxLQUFLLENBQUNDLE9BQU4sQ0FBY04sS0FBZCxDQUEvRSxFQUFxRztBQUNuRyxhQUFLZCxRQUFMLENBQWNlLEdBQWQsSUFBcUJELEtBQXJCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS2QsUUFBTCxDQUFjZSxHQUFkLElBQXFCSCxRQUFRLENBQUNTLGdCQUFULENBQTBCUCxLQUExQixDQUFyQjs7QUFFQSxZQUFJLEtBQUtkLFFBQUwsQ0FBY2UsR0FBZCxFQUFtQk8sTUFBbkIsS0FBOEIsQ0FBbEMsRUFBcUM7QUFDbkMsZUFBS3RCLFFBQUwsQ0FBY2UsR0FBZCxJQUFxQixJQUFyQjtBQUNELFNBRkQsTUFFTyxJQUFJLEtBQUtmLFFBQUwsQ0FBY2UsR0FBZCxFQUFtQk8sTUFBbkIsS0FBOEIsQ0FBbEMsRUFBcUM7QUFDMUMsZUFBS3RCLFFBQUwsQ0FBY2UsR0FBZCxJQUFxQkgsUUFBUSxDQUFDQyxhQUFULENBQXVCQyxLQUF2QixDQUFyQjtBQUNEO0FBQ0YsT0FaeUMsQ0FjMUM7OztBQUdBUyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLeEIsUUFBTCxDQUFjZSxHQUFkLENBQVo7QUFDRCxLQWxCRyxDQUFKO0FBbUJEOztBQUVEVSxFQUFBQSxJQUFJLEdBQUk7QUFDTixTQUFLQyxTQUFMLEdBQWlCakMscURBQUEsRUFBakI7QUFFQSxXQUFPLElBQUltQyxPQUFKLENBQVlDLE9BQU8sSUFBSTtBQUM1QnBDLE1BQUFBLGlEQUFBLENBQVUsS0FBS00sT0FBZixFQUF3QjtBQUN0QmdDLFFBQUFBLFNBQVMsRUFBRSxDQURXO0FBRXRCQyxRQUFBQSxVQUFVLEVBQUVIO0FBRlUsT0FBeEI7QUFJRCxLQUxNLENBQVA7QUFNRDs7QUFFREksRUFBQUEsSUFBSSxHQUFJO0FBQ04sU0FBS0MsVUFBTCxHQUFrQnpDLHFEQUFBLEVBQWxCO0FBRUEsV0FBTyxJQUFJbUMsT0FBSixDQUFZQyxPQUFPLElBQUk7QUFDNUJwQyxNQUFBQSwrQ0FBQSxDQUFRLEtBQUtNLE9BQWIsRUFBc0I7QUFDcEJnQyxRQUFBQSxTQUFTLEVBQUUsQ0FEUztBQUVwQkMsUUFBQUEsVUFBVSxFQUFFSDtBQUZRLE9BQXRCO0FBSUQsS0FMTSxDQUFQO0FBTUQ7O0FBRURwQixFQUFBQSxZQUFZLENBQUUyQixLQUFGLEVBQVM7QUFDbkIsVUFBTTtBQUFFQyxNQUFBQTtBQUFGLFFBQWFELEtBQW5CO0FBRUEsU0FBS2pDLE1BQUwsQ0FBWUUsTUFBWixHQUFxQmdDLE1BQXJCO0FBQ0Q7O0FBRURDLEVBQUFBLE1BQU0sR0FBSTtBQUNSLFNBQUtuQyxNQUFMLENBQVlDLE9BQVosR0FBc0JYLDhEQUFBLENBQXVCLEtBQUtVLE1BQUwsQ0FBWUMsT0FBbkMsRUFBNEMsS0FBS0QsTUFBTCxDQUFZRSxNQUF4RCxFQUFnRSxHQUFoRSxDQUF0QjtBQUVBO0FBQ0o7QUFDQTtBQUNHOztBQUVERyxFQUFBQSxpQkFBaUIsR0FBSTtBQUNuQlEsSUFBQUEsTUFBTSxDQUFDeUIsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsS0FBS2hDLFlBQXRDO0FBQ0Q7O0FBcEZ1Qjs7Ozs7Ozs7Ozs7QUNOMUI7QUFDVTtBQUNWLE9BQU8sSUFBVTtBQUNqQjtBQUNBLHNCQUFzQixtQkFBTyxDQUFDLHdKQUFrSCxjQUFjLCtCQUErQjtBQUM3TCxNQUFNLFVBQVU7QUFDaEIsTUFBTSxpQkFBaUI7QUFDdkI7QUFDQTs7Ozs7Ozs7VUNSQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jbGFzc2VzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcblxuaW1wb3J0IFByZWZpeCBmcm9tICdwcmVmaXgnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2Uge1xuICBjb25zdHJ1Y3RvciAoeyBpZCwgZWxlbWVudCwgZWxlbWVudHMgfSkge1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMuc2VsZWN0b3IgPSBlbGVtZW50XG4gICAgdGhpcy5zZWxlY3RvckNoaWxkcmVuID0ge1xuICAgICAgLi4uZWxlbWVudHNcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsYXN0OiAwXG4gICAgfVxuXG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoJ3RyYW5zZm9ybScpXG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgICB0aGlzLm9uTW91c2VXaGVlbCA9IHRoaXMub25Nb3VzZVdoZWVsLmJpbmQodGhpcylcbiAgfVxuXG4gIGNyZWF0ZSAoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKVxuICAgIHRoaXMuZWxlbWVudHMgPSB7fVxuXG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LCBrZXkpID0+IHtcblxuICAgICAgaWYgKGVudHJ5IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8IGVudHJ5IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0IHx8IEFycmF5LmlzQXJyYXkoZW50cnkpKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGVudHJ5XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVudHJ5KVxuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVudHJ5KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vVE9ETzogY2hlY2sgdGhlIHZpZGVvIHRvIHNlZSBob3cgaXMgaGUgdXNpbmcgdGhlIGVsZW1lbnRzW2tleV0gb3V0c2lkZSB0aGlzIGVhY2ggbG9vcFxuXG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudHNba2V5XSlcbiAgICB9KVxuICB9XG4gIFxuICBzaG93ICgpIHtcbiAgICB0aGlzLmFuaW1hdGVJbiA9IEdTQVAudGltZWxpbmUoKVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgR1NBUC5mcm9tKHRoaXMuZWxlbWVudCwge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmVcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGhpZGUgKCkge1xuICAgIHRoaXMuYW5pbWF0ZU91dCA9IEdTQVAudGltZWxpbmUoKVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgR1NBUC50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICBvbkNvbXBsZXRlOiByZXNvbHZlXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBvbk1vdXNlV2hlZWwgKGV2ZW50KSB7XG4gICAgY29uc3QgeyBkZWx0YVkgfSA9IGV2ZW50XG5cbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSBkZWx0YVlcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCAwLjEpXG5cbiAgICAvKiBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVgoJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4KWBcbiAgICB9ICovICBcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLm9uTW91c2VXaGVlbClcbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzNDc2ODU3NTk1N1xuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS9sdWNhc3NpbHZhL2JhY2t1cC9wcm9qZXRvcy9lbmR1cmFuY2Uvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiMjhmNmJkNGJhYTEzMWFiZjk1MVwiKSJdLCJuYW1lcyI6WyJHU0FQIiwiZWFjaCIsIlByZWZpeCIsIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImlkIiwiZWxlbWVudCIsImVsZW1lbnRzIiwic2VsZWN0b3IiLCJzZWxlY3RvckNoaWxkcmVuIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxhc3QiLCJ0cmFuc2Zvcm1QcmVmaXgiLCJhZGRFdmVudExpc3RlbmVycyIsIm9uTW91c2VXaGVlbCIsImJpbmQiLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlbnRyeSIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInNob3ciLCJhbmltYXRlSW4iLCJ0aW1lbGluZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiZnJvbSIsImF1dG9BbHBoYSIsIm9uQ29tcGxldGUiLCJoaWRlIiwiYW5pbWF0ZU91dCIsInRvIiwiZXZlbnQiLCJkZWx0YVkiLCJ1cGRhdGUiLCJ1dGlscyIsImludGVycG9sYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=