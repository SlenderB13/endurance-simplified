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
    this.getCursor();
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

  getCursor() {
    this.cursor = document.querySelector('.cursor');
    console.log(cursor);
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
      // 1635431255596
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1b2ca99de2284978d6a0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0QsT0FMRDtBQU1ELEtBUEcsQ0FBSjtBQVFEOztBQUVEeEMsRUFBQUEsTUFBTSxHQUFJO0FBQ1IsUUFBSSxLQUFLZ0IsSUFBTCxJQUFhLEtBQUtBLElBQUwsQ0FBVWhCLE1BQTNCLEVBQW1DO0FBQ2pDLFdBQUtnQixJQUFMLENBQVVoQixNQUFWO0FBQ0Q7O0FBQ0QsU0FBS3lDLEtBQUwsR0FBYW5CLE1BQU0sQ0FBQ29CLHFCQUFQLENBQTZCLEtBQUsxQyxNQUFMLENBQVlPLElBQVosQ0FBaUIsSUFBakIsQ0FBN0IsQ0FBYjtBQUNEOztBQUVETixFQUFBQSxTQUFTLEdBQUk7QUFDWCxTQUFLMEMsTUFBTCxHQUFjbEMsUUFBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLENBQWQ7QUFDQXNCLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVSxNQUFaO0FBQ0Q7O0FBakZPO0FBb0ZWOzs7QUFDQSxJQUFJakQsR0FBSjs7Ozs7Ozs7Ozs7QUMzRkE7QUFDVTtBQUNWLE9BQU8sSUFBVTtBQUNqQjtBQUNBLHNCQUFzQixtQkFBTyxDQUFDLHdKQUFrSCxjQUFjLCtCQUErQjtBQUM3TCxNQUFNLFVBQVU7QUFDaEIsTUFBTSxpQkFBaUI7QUFDdkI7QUFDQTs7Ozs7Ozs7VUNSQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYm91dCBmcm9tICcuL3BhZ2VzL0Fib3V0J1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9wYWdlcy9Ib21lJ1xuaW1wb3J0IFByZWxvYWRlciBmcm9tICcuL2NvbXBvbmVudHMvUHJlbG9hZGVyJ1xuXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnbG9kYXNoJ1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvciAoKSB7ICBcbiAgICB0aGlzLmNyZWF0ZVByZWxvYWRlcigpICBcbiAgICB0aGlzLmNyZWF0ZUNvbnRlbnQoKVxuICAgIHRoaXMuY3JlYXRlUGFnZXMoKVxuICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpXG4gICAgdGhpcy51cGRhdGUoKVxuICAgIHRoaXMuZ2V0Q3Vyc29yKClcbiAgfVxuXG4gIG9uUHJlbG9hZGVkICgpIHtcbiAgICB0aGlzLnByZWxvYWRlci5oaWRlKClcbiAgICB0aGlzLnByZWxvYWRlci5kZXN0cm95KClcbiAgfVxuXG4gIGNyZWF0ZVByZWxvYWRlciAoKSB7XG4gICAgdGhpcy5wcmVsb2FkZXIgPSBuZXcgUHJlbG9hZGVyKClcbiAgICB0aGlzLnByZWxvYWRlci5vbmNlKCdjb21wbGV0ZWQnLCB0aGlzLm9uUHJlbG9hZGVkLmJpbmQodGhpcykpXG4gIH1cblxuICBjcmVhdGVDb250ZW50ICgpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxuICB9XG5cbiAgY3JlYXRlUGFnZXMgKCkge1xuICAgIHRoaXMucGFnZXMgPSB7XG4gICAgICBob21lOiBuZXcgSG9tZSgpLFxuICAgICAgYWJvdXQ6IG5ldyBBYm91dCgpLFxuICAgIH1cblxuICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cbiAgICB0aGlzLnBhZ2UuY3JlYXRlKClcbiAgICB0aGlzLnBhZ2Uuc2hvdygpXG4gIH1cblxuICBhc3luYyBvbkNoYW5nZSAodXJsKSB7XG4gICAgdGhpcy5wYWdlLmhpZGUoKVxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCB3aW5kb3cuZmV0Y2godXJsKVxuXG4gICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgIGNvbnN0IG5leHRQYWdlID0gYXdhaXQgcmVxdWVzdC50ZXh0KClcblxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGRpdi5pbm5lckhUTUwgPSBuZXh0UGFnZVxuXG4gICAgICBjb25zdCBkaXZDb250ZW50ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcbiAgICAgIHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnLCBkaXZDb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpKVxuICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IGRpdkNvbnRlbnQuaW5uZXJIVE1MXG5cbiAgICAgIHRoaXMucGFnZS5jcmVhdGUoKVxuICAgICAgdGhpcy5wYWdlLnNob3coKVxuICAgICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ0RldSBwYXUsIGJpeG8hIScpXG4gICAgfVxuICB9XG5cbiAgYWRkTGlua0xpc3RlbmVycyAoKSB7XG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJylcblxuICAgIGVhY2gobGlua3MsIGxpbmsgPT4ge1xuICAgICAgbGluay5vbmNsaWNrID0gZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgY29uc3QgeyBocmVmIH0gPSBsaW5rXG4gICAgICAgIHRoaXMub25DaGFuZ2UoaHJlZilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS51cGRhdGUpIHtcbiAgICAgIHRoaXMucGFnZS51cGRhdGUoKVxuICAgIH1cbiAgICB0aGlzLmZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKVxuICB9XG5cbiAgZ2V0Q3Vyc29yICgpIHtcbiAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJzb3InKVxuICAgIGNvbnNvbGUubG9nKGN1cnNvcilcbiAgfVxufVxuXG4vKiBlc2xpbnQgbm8tbmV3OiBcIm9mZlwiICovXG5uZXcgQXBwKClcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MzU0MzEyNTU1OTZcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUvbHVjYXNzaWx2YS9iYWNrdXAvcHJvamV0b3MvZW5kdXJhbmNlL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcInB1YmxpY1BhdGhcIjpcIlwiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMWIyY2E5OWRlMjI4NDk3OGQ2YTBcIikiXSwibmFtZXMiOlsiQWJvdXQiLCJIb21lIiwiUHJlbG9hZGVyIiwiZWFjaCIsIkFwcCIsImNvbnN0cnVjdG9yIiwiY3JlYXRlUHJlbG9hZGVyIiwiY3JlYXRlQ29udGVudCIsImNyZWF0ZVBhZ2VzIiwiYWRkTGlua0xpc3RlbmVycyIsInVwZGF0ZSIsImdldEN1cnNvciIsIm9uUHJlbG9hZGVkIiwicHJlbG9hZGVyIiwiaGlkZSIsImRlc3Ryb3kiLCJvbmNlIiwiYmluZCIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsImdldEF0dHJpYnV0ZSIsInBhZ2VzIiwiaG9tZSIsImFib3V0IiwicGFnZSIsImNyZWF0ZSIsInNob3ciLCJvbkNoYW5nZSIsInVybCIsInJlcXVlc3QiLCJ3aW5kb3ciLCJmZXRjaCIsInN0YXR1cyIsIm5leHRQYWdlIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImxpbmsiLCJvbmNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJmcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImN1cnNvciJdLCJzb3VyY2VSb290IjoiIn0=