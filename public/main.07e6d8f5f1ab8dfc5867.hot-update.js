"use strict";
self["webpackHotUpdatefloema"]("main",{

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/About */ "./app/pages/About/index.js");
/* harmony import */ var _pages_Detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Detail */ "./app/pages/Detail/index.js");
/* harmony import */ var _pages_Collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Collections */ "./app/pages/Collections/index.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Home */ "./app/pages/Home/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Preloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Preloader */ "./app/components/Preloader.js");







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
      home: new _pages_Home__WEBPACK_IMPORTED_MODULE_3__["default"](),
      collections: new _pages_Collections__WEBPACK_IMPORTED_MODULE_2__["default"](),
      about: new _pages_About__WEBPACK_IMPORTED_MODULE_0__["default"](),
      detail: new _pages_Detail__WEBPACK_IMPORTED_MODULE_1__["default"]()
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
    (0,lodash__WEBPACK_IMPORTED_MODULE_4__.each)(links, link => {
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
      // 1634344349126
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("61bcf75c492b45910526")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHFCQUFQLENBQTZCLEtBQUt0QyxNQUFMLENBQVl1QyxJQUFaLENBQWlCLElBQWpCLENBQTdCLENBQWI7QUFDRDs7QUFsRU87QUFxRVY7OztBQUNBLElBQUk1QyxHQUFKOzs7Ozs7Ozs7OztBQzdFQTtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsd0pBQWtILGNBQWMsK0JBQStCO0FBQzdMLE1BQU0sVUFBVTtBQUNoQixNQUFNLGlCQUFpQjtBQUN2QjtBQUNBOzs7Ozs7OztVQ1JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFib3V0IGZyb20gJy4vcGFnZXMvQWJvdXQnXG5pbXBvcnQgRGV0YWlsIGZyb20gJy4vcGFnZXMvRGV0YWlsJ1xuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gJy4vcGFnZXMvQ29sbGVjdGlvbnMnXG5pbXBvcnQgSG9tZSBmcm9tICcuL3BhZ2VzL0hvbWUnXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IFByZWxvYWRlciBmcm9tICdjb21wb25lbnRzL1ByZWxvYWRlcidcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuY3JlYXRlQ29udGVudCgpXG4gICAgdGhpcy5jcmVhdGVQYWdlcygpXG4gICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBjcmVhdGVDb250ZW50ICgpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxuICB9XG5cbiAgY3JlYXRlUGFnZXMgKCkge1xuICAgIHRoaXMucGFnZXMgPSB7XG4gICAgICBob21lOiBuZXcgSG9tZSgpLFxuICAgICAgY29sbGVjdGlvbnM6IG5ldyBDb2xsZWN0aW9ucygpLFxuICAgICAgYWJvdXQ6IG5ldyBBYm91dCgpLFxuICAgICAgZGV0YWlsOiBuZXcgRGV0YWlsKClcbiAgICB9XG5cbiAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG4gICAgdGhpcy5wYWdlLmNyZWF0ZSgpXG4gICAgdGhpcy5wYWdlLnNob3coKVxuICB9XG5cbiAgYXN5bmMgb25DaGFuZ2UgKHVybCkge1xuICAgIHRoaXMucGFnZS5oaWRlKClcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgd2luZG93LmZldGNoKHVybClcblxuICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBjb25zdCBuZXh0UGFnZSA9IGF3YWl0IHJlcXVlc3QudGV4dCgpXG5cbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBkaXYuaW5uZXJIVE1MID0gbmV4dFBhZ2VcblxuICAgICAgY29uc3QgZGl2Q29udGVudCA9IGRpdi5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgICB0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJywgZGl2Q29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKSlcbiAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBkaXZDb250ZW50LmlubmVySFRNTFxuXG4gICAgICB0aGlzLnBhZ2UuY3JlYXRlKClcbiAgICAgIHRoaXMucGFnZS5zaG93KClcbiAgICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdEZXUgcGF1LCBiaXhvISEnKVxuICAgIH1cbiAgfVxuXG4gIGFkZExpbmtMaXN0ZW5lcnMgKCkge1xuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpXG5cbiAgICBlYWNoKGxpbmtzLCBsaW5rID0+IHtcbiAgICAgIGxpbmsub25jbGljayA9IGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGNvbnN0IHsgaHJlZiB9ID0gbGlua1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKGhyZWYpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2UudXBkYXRlKSB7XG4gICAgICB0aGlzLnBhZ2UudXBkYXRlKClcbiAgICB9XG4gICAgdGhpcy5mcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSlcbiAgfVxufVxuXG4vKiBlc2xpbnQgbm8tbmV3OiBcIm9mZlwiICovXG5uZXcgQXBwKClcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MzQzNDQzNDkxMjZcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUvbHVjYXNzaWx2YS9iYWNrdXAvcHJvamV0b3MvZW5kdXJhbmNlL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcInB1YmxpY1BhdGhcIjpcIlwiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjFiY2Y3NWM0OTJiNDU5MTA1MjZcIikiXSwibmFtZXMiOlsiQWJvdXQiLCJEZXRhaWwiLCJDb2xsZWN0aW9ucyIsIkhvbWUiLCJlYWNoIiwiUHJlbG9hZGVyIiwiQXBwIiwiY29uc3RydWN0b3IiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlUGFnZXMiLCJhZGRMaW5rTGlzdGVuZXJzIiwidXBkYXRlIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRlbXBsYXRlIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJob21lIiwiY29sbGVjdGlvbnMiLCJhYm91dCIsImRldGFpbCIsInBhZ2UiLCJjcmVhdGUiLCJzaG93Iiwib25DaGFuZ2UiLCJ1cmwiLCJoaWRlIiwicmVxdWVzdCIsIndpbmRvdyIsImZldGNoIiwic3RhdHVzIiwibmV4dFBhZ2UiLCJ0ZXh0IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImRpdkNvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGluayIsIm9uY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsImZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCJdLCJzb3VyY2VSb290IjoiIn0=