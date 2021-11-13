"use strict";
self["webpackHotUpdatefloema"]("main",{

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/About */ "./app/pages/About/index.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Home */ "./app/pages/Home/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);




class App {
  constructor() {
    this.createContent();
    this.createPages();
    this.addLinkListeners();
    this.update();
  }

  createContent() {
    this.content = document.querySelector('.content');
    this.template = this.content.getAttribute('data-template');
  }

  createPages() {
    this.pages = {
      'home': new _pages_Home__WEBPACK_IMPORTED_MODULE_1__["default"](),
      'about': new _pages_About__WEBPACK_IMPORTED_MODULE_0__["default"]()
    };
    this.page = this.pages[this.template];
    this.page.create();
    this.page.show();
    console.log(this.element);
  }

  async onChange(url) {
    this.page.hide();
    const request = await window.fetch(url);

    if (request.status === 200) {
      const nextPage = await request.text();
      const div = document.createElement('div');
      div.innerHTML = nextPage;
      const divContent = div.querySelector('.content');
      this.content.setAttribute('data-template', divContent.getAttribute('data-template'));
      this.content.innerHTML = divContent.innerHTML;
      this.page.create();
      this.page.show();
      this.addLinkListeners();
    } else {
      console.log('Deu pau, bixo!!');
    }
  }

  addLinkListeners() {
    const links = document.querySelectorAll('a');
    (0,lodash__WEBPACK_IMPORTED_MODULE_2__.each)(links, link => {
      link.onclick = event => {
        event.preventDefault();
        const {
          href
        } = link;
        this.onChange(href);
      };
    });
  }

  update() {
    if (this.page && this.page.update) {
      this.page.update();
    }

    this.frame = window.requestAnimationFrame(this.update.bind(this));
  }

}
/* eslint no-new: "off" */


new App();

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1634670307278
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e644f96632e6058631a0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42MzRlODhkYTQ4YzI0OWU3MDlkMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1HLEdBQU4sQ0FBVTtBQUNSQyxFQUFBQSxXQUFXLEdBQUk7QUFDYixTQUFLQyxhQUFMO0FBQ0EsU0FBS0MsV0FBTDtBQUNBLFNBQUtDLGdCQUFMO0FBQ0EsU0FBS0MsTUFBTDtBQUNEOztBQUVESCxFQUFBQSxhQUFhLEdBQUk7QUFDZixTQUFLSSxPQUFMLEdBQWVDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFmO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFLSCxPQUFMLENBQWFJLFlBQWIsQ0FBMEIsZUFBMUIsQ0FBaEI7QUFDRDs7QUFFRFAsRUFBQUEsV0FBVyxHQUFJO0FBQ2IsU0FBS1EsS0FBTCxHQUFhO0FBQ1gsY0FBUSxJQUFJYixtREFBSixFQURHO0FBRVgsZUFBUyxJQUFJRCxvREFBSjtBQUZFLEtBQWI7QUFLQSxTQUFLZSxJQUFMLEdBQVksS0FBS0QsS0FBTCxDQUFXLEtBQUtGLFFBQWhCLENBQVo7QUFDQSxTQUFLRyxJQUFMLENBQVVDLE1BQVY7QUFDQSxTQUFLRCxJQUFMLENBQVVFLElBQVY7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsT0FBakI7QUFDRDs7QUFFYSxRQUFSQyxRQUFRLENBQUVDLEdBQUYsRUFBTztBQUNuQixTQUFLUCxJQUFMLENBQVVRLElBQVY7QUFDQSxVQUFNQyxPQUFPLEdBQUcsTUFBTUMsTUFBTSxDQUFDQyxLQUFQLENBQWFKLEdBQWIsQ0FBdEI7O0FBRUEsUUFBSUUsT0FBTyxDQUFDRyxNQUFSLEtBQW1CLEdBQXZCLEVBQTRCO0FBQzFCLFlBQU1DLFFBQVEsR0FBRyxNQUFNSixPQUFPLENBQUNLLElBQVIsRUFBdkI7QUFFQSxZQUFNQyxHQUFHLEdBQUdwQixRQUFRLENBQUNxQixhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQUQsTUFBQUEsR0FBRyxDQUFDRSxTQUFKLEdBQWdCSixRQUFoQjtBQUVBLFlBQU1LLFVBQVUsR0FBR0gsR0FBRyxDQUFDbkIsYUFBSixDQUFrQixVQUFsQixDQUFuQjtBQUNBLFdBQUtGLE9BQUwsQ0FBYXlCLFlBQWIsQ0FBMEIsZUFBMUIsRUFBMkNELFVBQVUsQ0FBQ3BCLFlBQVgsQ0FBd0IsZUFBeEIsQ0FBM0M7QUFDQSxXQUFLSixPQUFMLENBQWF1QixTQUFiLEdBQXlCQyxVQUFVLENBQUNELFNBQXBDO0FBRUEsV0FBS2pCLElBQUwsQ0FBVUMsTUFBVjtBQUNBLFdBQUtELElBQUwsQ0FBVUUsSUFBVjtBQUNBLFdBQUtWLGdCQUFMO0FBQ0QsS0FiRCxNQWFPO0FBQ0xXLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0Q7QUFDRjs7QUFFRFosRUFBQUEsZ0JBQWdCLEdBQUk7QUFDbEIsVUFBTTRCLEtBQUssR0FBR3pCLFFBQVEsQ0FBQzBCLGdCQUFULENBQTBCLEdBQTFCLENBQWQ7QUFFQWxDLElBQUFBLDRDQUFJLENBQUNpQyxLQUFELEVBQVFFLElBQUksSUFBSTtBQUNsQkEsTUFBQUEsSUFBSSxDQUFDQyxPQUFMLEdBQWVDLEtBQUssSUFBSTtBQUN0QkEsUUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBRUEsY0FBTTtBQUFFQyxVQUFBQTtBQUFGLFlBQVdKLElBQWpCO0FBQ0EsYUFBS2hCLFFBQUwsQ0FBY29CLElBQWQ7QUFDRCxPQUxEO0FBTUQsS0FQRyxDQUFKO0FBUUQ7O0FBRURqQyxFQUFBQSxNQUFNLEdBQUk7QUFDUixRQUFJLEtBQUtPLElBQUwsSUFBYSxLQUFLQSxJQUFMLENBQVVQLE1BQTNCLEVBQW1DO0FBQ2pDLFdBQUtPLElBQUwsQ0FBVVAsTUFBVjtBQUNEOztBQUNELFNBQUtrQyxLQUFMLEdBQWFqQixNQUFNLENBQUNrQixxQkFBUCxDQUE2QixLQUFLbkMsTUFBTCxDQUFZb0MsSUFBWixDQUFpQixJQUFqQixDQUE3QixDQUFiO0FBQ0Q7O0FBakVPO0FBb0VWOzs7QUFDQSxJQUFJekMsR0FBSjs7Ozs7Ozs7Ozs7QUN6RUE7QUFDVTtBQUNWLE9BQU8sSUFBVTtBQUNqQjtBQUNBLHNCQUFzQixtQkFBTyxDQUFDLHdKQUFrSCxjQUFjLCtCQUErQjtBQUM3TCxNQUFNLFVBQVU7QUFDaEIsTUFBTSxpQkFBaUI7QUFDdkI7QUFDQTs7Ozs7Ozs7VUNSQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYm91dCBmcm9tICcuL3BhZ2VzL0Fib3V0J1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9wYWdlcy9Ib21lJ1xuaW1wb3J0IHsgZWFjaCB9IGZyb20gJ2xvZGFzaCdcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IgKCkgeyAgICBcbiAgICB0aGlzLmNyZWF0ZUNvbnRlbnQoKVxuICAgIHRoaXMuY3JlYXRlUGFnZXMoKVxuICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpXG4gICAgdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgY3JlYXRlQ29udGVudCAoKSB7XG4gICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcbiAgfVxuXG4gIGNyZWF0ZVBhZ2VzICgpIHtcbiAgICB0aGlzLnBhZ2VzID0ge1xuICAgICAgJ2hvbWUnOiBuZXcgSG9tZSgpLFxuICAgICAgJ2Fib3V0JzogbmV3IEFib3V0KCksXG4gICAgfVxuXG4gICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxuICAgIHRoaXMucGFnZS5jcmVhdGUoKVxuICAgIHRoaXMucGFnZS5zaG93KClcbiAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnQpXG4gIH1cblxuICBhc3luYyBvbkNoYW5nZSAodXJsKSB7XG4gICAgdGhpcy5wYWdlLmhpZGUoKVxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCB3aW5kb3cuZmV0Y2godXJsKVxuXG4gICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgIGNvbnN0IG5leHRQYWdlID0gYXdhaXQgcmVxdWVzdC50ZXh0KClcblxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGRpdi5pbm5lckhUTUwgPSBuZXh0UGFnZVxuXG4gICAgICBjb25zdCBkaXZDb250ZW50ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcbiAgICAgIHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnLCBkaXZDb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpKVxuICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IGRpdkNvbnRlbnQuaW5uZXJIVE1MXG5cbiAgICAgIHRoaXMucGFnZS5jcmVhdGUoKVxuICAgICAgdGhpcy5wYWdlLnNob3coKVxuICAgICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ0RldSBwYXUsIGJpeG8hIScpXG4gICAgfVxuICB9XG5cbiAgYWRkTGlua0xpc3RlbmVycyAoKSB7XG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJylcblxuICAgIGVhY2gobGlua3MsIGxpbmsgPT4ge1xuICAgICAgbGluay5vbmNsaWNrID0gZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgY29uc3QgeyBocmVmIH0gPSBsaW5rXG4gICAgICAgIHRoaXMub25DaGFuZ2UoaHJlZilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS51cGRhdGUpIHtcbiAgICAgIHRoaXMucGFnZS51cGRhdGUoKVxuICAgIH1cbiAgICB0aGlzLmZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKVxuICB9XG59XG5cbi8qIGVzbGludCBuby1uZXc6IFwib2ZmXCIgKi9cbm5ldyBBcHAoKVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzNDY3MDMwNzI3OFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS9sdWNhc3NpbHZhL2JhY2t1cC9wcm9qZXRvcy9lbmR1cmFuY2Uvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlNjQ0Zjk2NjMyZTYwNTg2MzFhMFwiKSJdLCJuYW1lcyI6WyJBYm91dCIsIkhvbWUiLCJlYWNoIiwiQXBwIiwiY29uc3RydWN0b3IiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlUGFnZXMiLCJhZGRMaW5rTGlzdGVuZXJzIiwidXBkYXRlIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRlbXBsYXRlIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJwYWdlIiwiY3JlYXRlIiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJlbGVtZW50Iiwib25DaGFuZ2UiLCJ1cmwiLCJoaWRlIiwicmVxdWVzdCIsIndpbmRvdyIsImZldGNoIiwic3RhdHVzIiwibmV4dFBhZ2UiLCJ0ZXh0IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImRpdkNvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsaW5rIiwib25jbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiZnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==