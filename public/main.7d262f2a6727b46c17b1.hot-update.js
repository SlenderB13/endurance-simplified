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
      // 1634670266823
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("634e88da48c249e709d3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWI7QUFDRDs7QUFqRU87QUFvRVY7OztBQUNBLElBQUkzQyxHQUFKOzs7Ozs7Ozs7OztBQ3pFQTtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsd0pBQWtILGNBQWMsK0JBQStCO0FBQzdMLE1BQU0sVUFBVTtBQUNoQixNQUFNLGlCQUFpQjtBQUN2QjtBQUNBOzs7Ozs7OztVQ1JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFib3V0IGZyb20gJy4vcGFnZXMvQWJvdXQnXG5pbXBvcnQgSG9tZSBmcm9tICcuL3BhZ2VzL0hvbWUnXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnbG9kYXNoJ1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvciAoKSB7ICAgIFxuICAgIHRoaXMuY3JlYXRlQ29udGVudCgpXG4gICAgdGhpcy5jcmVhdGVQYWdlcygpXG4gICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBjcmVhdGVDb250ZW50ICgpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxuICB9XG5cbiAgY3JlYXRlUGFnZXMgKCkge1xuICAgIHRoaXMucGFnZXMgPSB7XG4gICAgICBob21lOiBuZXcgSG9tZSgpLFxuICAgICAgYWJvdXQ6IG5ldyBBYm91dCgpLFxuICAgIH1cblxuICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cbiAgICB0aGlzLnBhZ2UuY3JlYXRlKClcbiAgICB0aGlzLnBhZ2Uuc2hvdygpXG4gICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50KVxuICB9XG5cbiAgYXN5bmMgb25DaGFuZ2UgKHVybCkge1xuICAgIHRoaXMucGFnZS5oaWRlKClcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgd2luZG93LmZldGNoKHVybClcblxuICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBjb25zdCBuZXh0UGFnZSA9IGF3YWl0IHJlcXVlc3QudGV4dCgpXG5cbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBkaXYuaW5uZXJIVE1MID0gbmV4dFBhZ2VcblxuICAgICAgY29uc3QgZGl2Q29udGVudCA9IGRpdi5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgICB0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJywgZGl2Q29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKSlcbiAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBkaXZDb250ZW50LmlubmVySFRNTFxuXG4gICAgICB0aGlzLnBhZ2UuY3JlYXRlKClcbiAgICAgIHRoaXMucGFnZS5zaG93KClcbiAgICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdEZXUgcGF1LCBiaXhvISEnKVxuICAgIH1cbiAgfVxuXG4gIGFkZExpbmtMaXN0ZW5lcnMgKCkge1xuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpXG5cbiAgICBlYWNoKGxpbmtzLCBsaW5rID0+IHtcbiAgICAgIGxpbmsub25jbGljayA9IGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGNvbnN0IHsgaHJlZiB9ID0gbGlua1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKGhyZWYpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2UudXBkYXRlKSB7XG4gICAgICB0aGlzLnBhZ2UudXBkYXRlKClcbiAgICB9XG4gICAgdGhpcy5mcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSlcbiAgfVxufVxuXG4vKiBlc2xpbnQgbm8tbmV3OiBcIm9mZlwiICovXG5uZXcgQXBwKClcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MzQ2NzAyNjY4MjNcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUvbHVjYXNzaWx2YS9iYWNrdXAvcHJvamV0b3MvZW5kdXJhbmNlL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcInB1YmxpY1BhdGhcIjpcIlwiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjM0ZTg4ZGE0OGMyNDllNzA5ZDNcIikiXSwibmFtZXMiOlsiQWJvdXQiLCJIb21lIiwiZWFjaCIsIkFwcCIsImNvbnN0cnVjdG9yIiwiY3JlYXRlQ29udGVudCIsImNyZWF0ZVBhZ2VzIiwiYWRkTGlua0xpc3RlbmVycyIsInVwZGF0ZSIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsImdldEF0dHJpYnV0ZSIsInBhZ2VzIiwiaG9tZSIsImFib3V0IiwicGFnZSIsImNyZWF0ZSIsInNob3ciLCJjb25zb2xlIiwibG9nIiwiZWxlbWVudCIsIm9uQ2hhbmdlIiwidXJsIiwiaGlkZSIsInJlcXVlc3QiLCJ3aW5kb3ciLCJmZXRjaCIsInN0YXR1cyIsIm5leHRQYWdlIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGluayIsIm9uY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsImZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCJdLCJzb3VyY2VSb290IjoiIn0=