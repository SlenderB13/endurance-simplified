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
/* harmony import */ var _components_Preloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Preloader */ "./app/components/Preloader.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);





class App {
  constructor() {
    this.createPreloader();
    this.createContent();
    this.createPages();
    this.addLinkListeners();
    this.update();
  }

  onPreloaded() {
    this.preloader.hide();
    this.preloader.destroy();
  }

  createPreloader() {
    this.preloader = new _components_Preloader__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.preloader.once('completed', this.onPreloaded.bind(this));
  }

  createContent() {
    this.content = document.querySelector('.content');
    this.template = this.content.getAttribute('data-template');
  }

  createPages() {
    this.pages = {
      home: new _pages_Home__WEBPACK_IMPORTED_MODULE_1__["default"](),
      about: new _pages_About__WEBPACK_IMPORTED_MODULE_0__["default"]()
    };
    this.page = this.pages[this.template];
    this.page.create();
    this.page.show();
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
    (0,lodash__WEBPACK_IMPORTED_MODULE_3__.each)(links, link => {
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
      // 1634935446222
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8d617b96fe0e64ff3236")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FQRyxDQUFKO0FBUUQ7O0FBRUR2QyxFQUFBQSxNQUFNLEdBQUk7QUFDUixRQUFJLEtBQUtlLElBQUwsSUFBYSxLQUFLQSxJQUFMLENBQVVmLE1BQTNCLEVBQW1DO0FBQ2pDLFdBQUtlLElBQUwsQ0FBVWYsTUFBVjtBQUNEOztBQUNELFNBQUt3QyxLQUFMLEdBQWFuQixNQUFNLENBQUNvQixxQkFBUCxDQUE2QixLQUFLekMsTUFBTCxDQUFZTSxJQUFaLENBQWlCLElBQWpCLENBQTdCLENBQWI7QUFDRDs7QUEzRU87QUE4RVY7OztBQUNBLElBQUlaLEdBQUo7Ozs7Ozs7Ozs7O0FDckZBO0FBQ1U7QUFDVixPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyx3SkFBa0gsY0FBYywrQkFBK0I7QUFDN0wsTUFBTSxVQUFVO0FBQ2hCLE1BQU0saUJBQWlCO0FBQ3ZCO0FBQ0E7Ozs7Ozs7O1VDUkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJvdXQgZnJvbSAnLi9wYWdlcy9BYm91dCdcbmltcG9ydCBIb21lIGZyb20gJy4vcGFnZXMvSG9tZSdcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnLi9jb21wb25lbnRzL1ByZWxvYWRlcidcblxuaW1wb3J0IHsgZWFjaCB9IGZyb20gJ2xvZGFzaCdcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IgKCkgeyAgXG4gICAgdGhpcy5jcmVhdGVQcmVsb2FkZXIoKSAgXG4gICAgdGhpcy5jcmVhdGVDb250ZW50KClcbiAgICB0aGlzLmNyZWF0ZVBhZ2VzKClcbiAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIG9uUHJlbG9hZGVkICgpIHtcbiAgICB0aGlzLnByZWxvYWRlci5oaWRlKClcbiAgICB0aGlzLnByZWxvYWRlci5kZXN0cm95KClcbiAgfVxuXG4gIGNyZWF0ZVByZWxvYWRlciAoKSB7XG4gICAgdGhpcy5wcmVsb2FkZXIgPSBuZXcgUHJlbG9hZGVyKClcbiAgICB0aGlzLnByZWxvYWRlci5vbmNlKCdjb21wbGV0ZWQnLCB0aGlzLm9uUHJlbG9hZGVkLmJpbmQodGhpcykpXG4gIH1cblxuICBjcmVhdGVDb250ZW50ICgpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxuICB9XG5cbiAgY3JlYXRlUGFnZXMgKCkge1xuICAgIHRoaXMucGFnZXMgPSB7XG4gICAgICBob21lOiBuZXcgSG9tZSgpLFxuICAgICAgYWJvdXQ6IG5ldyBBYm91dCgpLFxuICAgIH1cblxuICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cbiAgICB0aGlzLnBhZ2UuY3JlYXRlKClcbiAgICB0aGlzLnBhZ2Uuc2hvdygpXG4gIH1cblxuICBhc3luYyBvbkNoYW5nZSAodXJsKSB7XG4gICAgdGhpcy5wYWdlLmhpZGUoKVxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCB3aW5kb3cuZmV0Y2godXJsKVxuXG4gICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgIGNvbnN0IG5leHRQYWdlID0gYXdhaXQgcmVxdWVzdC50ZXh0KClcblxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGRpdi5pbm5lckhUTUwgPSBuZXh0UGFnZVxuXG4gICAgICBjb25zdCBkaXZDb250ZW50ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcbiAgICAgIHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnLCBkaXZDb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpKVxuICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IGRpdkNvbnRlbnQuaW5uZXJIVE1MXG5cbiAgICAgIHRoaXMucGFnZS5jcmVhdGUoKVxuICAgICAgdGhpcy5wYWdlLnNob3coKVxuICAgICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ0RldSBwYXUsIGJpeG8hIScpXG4gICAgfVxuICB9XG5cbiAgYWRkTGlua0xpc3RlbmVycyAoKSB7XG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJylcblxuICAgIGVhY2gobGlua3MsIGxpbmsgPT4ge1xuICAgICAgbGluay5vbmNsaWNrID0gZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgY29uc3QgeyBocmVmIH0gPSBsaW5rXG4gICAgICAgIHRoaXMub25DaGFuZ2UoaHJlZilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS51cGRhdGUpIHtcbiAgICAgIHRoaXMucGFnZS51cGRhdGUoKVxuICAgIH1cbiAgICB0aGlzLmZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKVxuICB9XG59XG5cbi8qIGVzbGludCBuby1uZXc6IFwib2ZmXCIgKi9cbm5ldyBBcHAoKVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzNDkzNTQ0NjIyMlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS9sdWNhc3NpbHZhL2JhY2t1cC9wcm9qZXRvcy9lbmR1cmFuY2Uvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4ZDYxN2I5NmZlMGU2NGZmMzIzNlwiKSJdLCJuYW1lcyI6WyJBYm91dCIsIkhvbWUiLCJQcmVsb2FkZXIiLCJlYWNoIiwiQXBwIiwiY29uc3RydWN0b3IiLCJjcmVhdGVQcmVsb2FkZXIiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlUGFnZXMiLCJhZGRMaW5rTGlzdGVuZXJzIiwidXBkYXRlIiwib25QcmVsb2FkZWQiLCJwcmVsb2FkZXIiLCJoaWRlIiwiZGVzdHJveSIsIm9uY2UiLCJiaW5kIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRlbXBsYXRlIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJob21lIiwiYWJvdXQiLCJwYWdlIiwiY3JlYXRlIiwic2hvdyIsIm9uQ2hhbmdlIiwidXJsIiwicmVxdWVzdCIsIndpbmRvdyIsImZldGNoIiwic3RhdHVzIiwibmV4dFBhZ2UiLCJ0ZXh0IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImRpdkNvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGluayIsIm9uY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsImZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==