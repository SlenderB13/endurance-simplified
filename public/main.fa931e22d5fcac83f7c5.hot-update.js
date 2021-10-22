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
    AutoBind(this);
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
      // 1634668263342
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d9ee82a5c825a07e9896")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bEVPO0FBcUVWOzs7QUFDQSxJQUFJM0MsR0FBSjs7Ozs7Ozs7Ozs7QUMxRUE7QUFDVTtBQUNWLE9BQU8sSUFBVTtBQUNqQjtBQUNBLHNCQUFzQixtQkFBTyxDQUFDLHdKQUFrSCxjQUFjLCtCQUErQjtBQUM3TCxNQUFNLFVBQVU7QUFDaEIsTUFBTSxpQkFBaUI7QUFDdkI7QUFDQTs7Ozs7Ozs7VUNSQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYm91dCBmcm9tICcuL3BhZ2VzL0Fib3V0J1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9wYWdlcy9Ib21lJ1xuaW1wb3J0IHsgZWFjaCB9IGZyb20gJ2xvZGFzaCdcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIEF1dG9CaW5kKHRoaXMpXG4gICAgXG4gICAgdGhpcy5jcmVhdGVDb250ZW50KClcbiAgICB0aGlzLmNyZWF0ZVBhZ2VzKClcbiAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGNyZWF0ZUNvbnRlbnQgKCkge1xuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcbiAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpXG4gIH1cblxuICBjcmVhdGVQYWdlcyAoKSB7XG4gICAgdGhpcy5wYWdlcyA9IHtcbiAgICAgIGhvbWU6IG5ldyBIb21lKCksXG4gICAgICBhYm91dDogbmV3IEFib3V0KCksXG4gICAgfVxuXG4gICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxuICAgIHRoaXMucGFnZS5jcmVhdGUoKVxuICAgIHRoaXMucGFnZS5zaG93KClcbiAgfVxuXG4gIGFzeW5jIG9uQ2hhbmdlICh1cmwpIHtcbiAgICB0aGlzLnBhZ2UuaGlkZSgpXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1cmwpXG5cbiAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgY29uc3QgbmV4dFBhZ2UgPSBhd2FpdCByZXF1ZXN0LnRleHQoKVxuXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgZGl2LmlubmVySFRNTCA9IG5leHRQYWdlXG5cbiAgICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkaXYucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgICAgdGhpcy5jb250ZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScsIGRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJykpXG4gICAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gZGl2Q29udGVudC5pbm5lckhUTUxcblxuICAgICAgdGhpcy5wYWdlLmNyZWF0ZSgpXG4gICAgICB0aGlzLnBhZ2Uuc2hvdygpXG4gICAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnRGV1IHBhdSwgYml4byEhJylcbiAgICB9XG4gIH1cblxuICBhZGRMaW5rTGlzdGVuZXJzICgpIHtcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVxuXG4gICAgZWFjaChsaW5rcywgbGluayA9PiB7XG4gICAgICBsaW5rLm9uY2xpY2sgPSBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBjb25zdCB7IGhyZWYgfSA9IGxpbmtcbiAgICAgICAgdGhpcy5vbkNoYW5nZShocmVmKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLnVwZGF0ZSkge1xuICAgICAgdGhpcy5wYWdlLnVwZGF0ZSgpXG4gICAgfVxuICAgIHRoaXMuZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpXG4gIH1cbn1cblxuLyogZXNsaW50IG5vLW5ldzogXCJvZmZcIiAqL1xubmV3IEFwcCgpXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjM0NjY4MjYzMzQyXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9ob21lL2x1Y2Fzc2lsdmEvYmFja3VwL3Byb2pldG9zL2VuZHVyYW5jZS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCJcIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ5ZWU4MmE1YzgyNWEwN2U5ODk2XCIpIl0sIm5hbWVzIjpbIkFib3V0IiwiSG9tZSIsImVhY2giLCJBcHAiLCJjb25zdHJ1Y3RvciIsIkF1dG9CaW5kIiwiY3JlYXRlQ29udGVudCIsImNyZWF0ZVBhZ2VzIiwiYWRkTGlua0xpc3RlbmVycyIsInVwZGF0ZSIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsImdldEF0dHJpYnV0ZSIsInBhZ2VzIiwiaG9tZSIsImFib3V0IiwicGFnZSIsImNyZWF0ZSIsInNob3ciLCJvbkNoYW5nZSIsInVybCIsImhpZGUiLCJyZXF1ZXN0Iiwid2luZG93IiwiZmV0Y2giLCJzdGF0dXMiLCJuZXh0UGFnZSIsInRleHQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiZGl2Q29udGVudCIsInNldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsaW5rIiwib25jbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiZnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==