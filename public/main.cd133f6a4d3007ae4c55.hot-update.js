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
    console.log(this.template);
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
      // 1634670425039
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bf8d59d6d0b501e78bf0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFiO0FBQ0Q7O0FBbEVPO0FBcUVWOzs7QUFDQSxJQUFJMUMsR0FBSjs7Ozs7Ozs7Ozs7QUMxRUE7QUFDVTtBQUNWLE9BQU8sSUFBVTtBQUNqQjtBQUNBLHNCQUFzQixtQkFBTyxDQUFDLHdKQUFrSCxjQUFjLCtCQUErQjtBQUM3TCxNQUFNLFVBQVU7QUFDaEIsTUFBTSxpQkFBaUI7QUFDdkI7QUFDQTs7Ozs7Ozs7VUNSQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYm91dCBmcm9tICcuL3BhZ2VzL0Fib3V0J1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9wYWdlcy9Ib21lJ1xuaW1wb3J0IHsgZWFjaCB9IGZyb20gJ2xvZGFzaCdcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IgKCkgeyAgICBcbiAgICB0aGlzLmNyZWF0ZUNvbnRlbnQoKVxuICAgIHRoaXMuY3JlYXRlUGFnZXMoKVxuICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpXG4gICAgdGhpcy51cGRhdGUoKVxuICAgIGNvbnNvbGUubG9nKHRoaXMudGVtcGxhdGUpXG5cbiAgfVxuXG4gIGNyZWF0ZUNvbnRlbnQgKCkge1xuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcbiAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpXG4gIH1cblxuICBjcmVhdGVQYWdlcyAoKSB7XG4gICAgdGhpcy5wYWdlcyA9IHtcbiAgICAgIGhvbWU6IG5ldyBIb21lKCksXG4gICAgICBhYm91dDogbmV3IEFib3V0KCksXG4gICAgfVxuXG4gICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxuICAgIHRoaXMucGFnZS5jcmVhdGUoKVxuICAgIHRoaXMucGFnZS5zaG93KClcbiAgfVxuXG4gIGFzeW5jIG9uQ2hhbmdlICh1cmwpIHtcbiAgICB0aGlzLnBhZ2UuaGlkZSgpXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1cmwpXG5cbiAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgY29uc3QgbmV4dFBhZ2UgPSBhd2FpdCByZXF1ZXN0LnRleHQoKVxuXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgZGl2LmlubmVySFRNTCA9IG5leHRQYWdlXG5cbiAgICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkaXYucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgICAgdGhpcy5jb250ZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScsIGRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJykpXG4gICAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gZGl2Q29udGVudC5pbm5lckhUTUxcblxuICAgICAgdGhpcy5wYWdlLmNyZWF0ZSgpXG4gICAgICB0aGlzLnBhZ2Uuc2hvdygpXG4gICAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnRGV1IHBhdSwgYml4byEhJylcbiAgICB9XG4gIH1cblxuICBhZGRMaW5rTGlzdGVuZXJzICgpIHtcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVxuXG4gICAgZWFjaChsaW5rcywgbGluayA9PiB7XG4gICAgICBsaW5rLm9uY2xpY2sgPSBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBjb25zdCB7IGhyZWYgfSA9IGxpbmtcbiAgICAgICAgdGhpcy5vbkNoYW5nZShocmVmKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLnVwZGF0ZSkge1xuICAgICAgdGhpcy5wYWdlLnVwZGF0ZSgpXG4gICAgfVxuICAgIHRoaXMuZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpXG4gIH1cbn1cblxuLyogZXNsaW50IG5vLW5ldzogXCJvZmZcIiAqL1xubmV3IEFwcCgpXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjM0NjcwNDI1MDM5XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9ob21lL2x1Y2Fzc2lsdmEvYmFja3VwL3Byb2pldG9zL2VuZHVyYW5jZS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCJcIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImJmOGQ1OWQ2ZDBiNTAxZTc4YmYwXCIpIl0sIm5hbWVzIjpbIkFib3V0IiwiSG9tZSIsImVhY2giLCJBcHAiLCJjb25zdHJ1Y3RvciIsImNyZWF0ZUNvbnRlbnQiLCJjcmVhdGVQYWdlcyIsImFkZExpbmtMaXN0ZW5lcnMiLCJ1cGRhdGUiLCJjb25zb2xlIiwibG9nIiwidGVtcGxhdGUiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJob21lIiwiYWJvdXQiLCJwYWdlIiwiY3JlYXRlIiwic2hvdyIsIm9uQ2hhbmdlIiwidXJsIiwiaGlkZSIsInJlcXVlc3QiLCJ3aW5kb3ciLCJmZXRjaCIsInN0YXR1cyIsIm5leHRQYWdlIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGluayIsIm9uY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsImZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCJdLCJzb3VyY2VSb290IjoiIn0=