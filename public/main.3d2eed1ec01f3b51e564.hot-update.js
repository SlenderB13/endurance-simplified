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
      home: new _pages_Home__WEBPACK_IMPORTED_MODULE_1__["default"](),
      about: new _pages_About__WEBPACK_IMPORTED_MODULE_0__["default"]()
    };
    this.page = this.pages[this.template];
    this.page.create();
    this.page.show();
    console.log(this.template);
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
      // 1634670383181
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e5b238387e03dab3bad9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWI7QUFDRDs7QUFqRU87QUFvRVY7OztBQUNBLElBQUkxQyxHQUFKOzs7Ozs7Ozs7OztBQ3pFQTtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsd0pBQWtILGNBQWMsK0JBQStCO0FBQzdMLE1BQU0sVUFBVTtBQUNoQixNQUFNLGlCQUFpQjtBQUN2QjtBQUNBOzs7Ozs7OztVQ1JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFib3V0IGZyb20gJy4vcGFnZXMvQWJvdXQnXG5pbXBvcnQgSG9tZSBmcm9tICcuL3BhZ2VzL0hvbWUnXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnbG9kYXNoJ1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvciAoKSB7ICAgIFxuICAgIHRoaXMuY3JlYXRlQ29udGVudCgpXG4gICAgdGhpcy5jcmVhdGVQYWdlcygpXG4gICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBjcmVhdGVDb250ZW50ICgpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxuICB9XG5cbiAgY3JlYXRlUGFnZXMgKCkge1xuICAgIHRoaXMucGFnZXMgPSB7XG4gICAgICBob21lOiBuZXcgSG9tZSgpLFxuICAgICAgYWJvdXQ6IG5ldyBBYm91dCgpLFxuICAgIH1cblxuICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cbiAgICB0aGlzLnBhZ2UuY3JlYXRlKClcbiAgICB0aGlzLnBhZ2Uuc2hvdygpXG4gICAgY29uc29sZS5sb2codGhpcy50ZW1wbGF0ZSlcbiAgfVxuXG4gIGFzeW5jIG9uQ2hhbmdlICh1cmwpIHtcbiAgICB0aGlzLnBhZ2UuaGlkZSgpXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1cmwpXG5cbiAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgY29uc3QgbmV4dFBhZ2UgPSBhd2FpdCByZXF1ZXN0LnRleHQoKVxuXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgZGl2LmlubmVySFRNTCA9IG5leHRQYWdlXG5cbiAgICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkaXYucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgICAgdGhpcy5jb250ZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScsIGRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJykpXG4gICAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gZGl2Q29udGVudC5pbm5lckhUTUxcblxuICAgICAgdGhpcy5wYWdlLmNyZWF0ZSgpXG4gICAgICB0aGlzLnBhZ2Uuc2hvdygpXG4gICAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnRGV1IHBhdSwgYml4byEhJylcbiAgICB9XG4gIH1cblxuICBhZGRMaW5rTGlzdGVuZXJzICgpIHtcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVxuXG4gICAgZWFjaChsaW5rcywgbGluayA9PiB7XG4gICAgICBsaW5rLm9uY2xpY2sgPSBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBjb25zdCB7IGhyZWYgfSA9IGxpbmtcbiAgICAgICAgdGhpcy5vbkNoYW5nZShocmVmKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLnVwZGF0ZSkge1xuICAgICAgdGhpcy5wYWdlLnVwZGF0ZSgpXG4gICAgfVxuICAgIHRoaXMuZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpXG4gIH1cbn1cblxuLyogZXNsaW50IG5vLW5ldzogXCJvZmZcIiAqL1xubmV3IEFwcCgpXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjM0NjcwMzgzMTgxXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9ob21lL2x1Y2Fzc2lsdmEvYmFja3VwL3Byb2pldG9zL2VuZHVyYW5jZS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCJcIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImU1YjIzODM4N2UwM2RhYjNiYWQ5XCIpIl0sIm5hbWVzIjpbIkFib3V0IiwiSG9tZSIsImVhY2giLCJBcHAiLCJjb25zdHJ1Y3RvciIsImNyZWF0ZUNvbnRlbnQiLCJjcmVhdGVQYWdlcyIsImFkZExpbmtMaXN0ZW5lcnMiLCJ1cGRhdGUiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGVtcGxhdGUiLCJnZXRBdHRyaWJ1dGUiLCJwYWdlcyIsImhvbWUiLCJhYm91dCIsInBhZ2UiLCJjcmVhdGUiLCJzaG93IiwiY29uc29sZSIsImxvZyIsIm9uQ2hhbmdlIiwidXJsIiwiaGlkZSIsInJlcXVlc3QiLCJ3aW5kb3ciLCJmZXRjaCIsInN0YXR1cyIsIm5leHRQYWdlIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGluayIsIm9uY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsImZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCJdLCJzb3VyY2VSb290IjoiIn0=