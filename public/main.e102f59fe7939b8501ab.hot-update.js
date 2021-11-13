"use strict";
self["webpackHotUpdatefloema"]("main",{

/***/ "./app/classes/Component.js":
/*!**********************************!*\
  !*** ./app/classes/Component.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_1__);


class Component extends (events__WEBPACK_IMPORTED_MODULE_0___default()) {
  constructor({
    element,
    elements
  }) {
    super();
    this.selector = element;
    this.selectorChildren = { ...elements
    };
    this.create();
    this.addEventListeners();
  }

  create() {
    this.element = document.querySelector(this.selector);
    this.elements = {};
    lodash_each__WEBPACK_IMPORTED_MODULE_1___default()(this.selectorChildren, (entry, key) => {
      if (entry instanceof window.HTMLElement || entry instanceof window.NodeList || Array.isArray(entry)) {
        this.elements[key] = entry;
      } else {
        this.elements[key] = document.querySelectorAll(entry);

        if (this.elements[key].lenght === 0) {
          this.elements[key] = null;
        } else if (this.elements[key].lenght === 1) {
          this.elements[key] = document.querySelector(entry);
        }
      }
    });
  }

  addEventListeners() {}

  removeEventListeners() {}

}

/***/ }),

/***/ "./app/components/Preloader.js":
/*!*************************************!*\
  !*** ./app/components/Preloader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Preloader)
/* harmony export */ });
/* harmony import */ var classes_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Component */ "./app/classes/Component.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/text */ "./app/utils/text.js");




class Preloader extends classes_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super({
      element: '.preloader',
      elements: {
        title: document.querySelector('.preloader__text__title'),
        number: document.querySelector('.preloader__number'),
        images: document.querySelectorAll('img')
      }
    });
    this.length = 0;
    this.createLoader();
    (0,utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
      element: this.elements.title,
      expression: '<br>'
    });
    (0,utils_text__WEBPACK_IMPORTED_MODULE_2__.split)({
      element: this.elements.title,
      expression: '<br>'
    });
    this.elements.titleSpans = this.elements.title.querySelectorAll('span span');
  }

  onAssetLoaded(image) {
    this.length += 1;
    const percent = Math.round(this.length / this.elements.images.length * 100);
    this.elements.number.innerHTML = `${percent}%`;

    if (percent === 100) {
      this.onLoaded();
    }
  }

  createLoader() {
    (0,lodash__WEBPACK_IMPORTED_MODULE_1__.each)(this.elements.images, element => {
      element.src = element.getAttribute('data-src');

      element.onload = _ => this.onAssetLoaded(element);
    });
  }

  onLoaded() {
    return new Promise(resolve => {
      /*  this.animateOut.to(this.element, {
        autoAlpha: 0,
        delay: 2
      }) */
      this.animateOut = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline();
      this.animateOut.to(this.elements.titleSpans, {
        stagger: 0.1,
        duration: 1.5,
        ease: 'expo.out',
        y: '100%'
      });
      this.animateOut.to(this.element, {
        scaleY: 0,
        transformOrigin: '0 0',
        ease: 'expo.out'
      });
    });
  }

  destroy() {
    this.element.parentNode.removeChild(this.element);
  }

}

/***/ }),

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

  createPreloader() {
    this.preloader = new _components_Preloader__WEBPACK_IMPORTED_MODULE_2__["default"]();
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

/***/ "./app/utils/text.js":
/*!***************************!*\
  !*** ./app/utils/text.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "split": () => (/* binding */ split),
/* harmony export */   "calculate": () => (/* binding */ calculate)
/* harmony export */ });
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);

function split({
  element,
  expression = ' ',
  append = true
}) {
  const words = splitText(element.innerHTML.toString().trim(), expression);
  let innerHTML = '';
  lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(words, line => {
    if (line.indexOf('<br>') > -1) {
      const lines = line.split('<br>');
      lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(lines, (line, index) => {
        innerHTML += index > 0 ? '<br>' + parseLine(line) : parseLine(line);
      });
    } else {
      innerHTML += parseLine(line);
    }
  });
  element.innerHTML = innerHTML;
  const spans = element.querySelectorAll('span');

  if (append) {
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(spans, span => {
      const isSingleLetter = span.textContent.length === 1;
      const isNotEmpty = span.innerHTML.trim() !== '';
      const isNotAndCharacter = span.textContent !== '&';
      const isNotDashCharacter = span.textContent !== '-';

      if (isSingleLetter && isNotEmpty && isNotAndCharacter && isNotDashCharacter) {
        span.innerHTML = `${span.textContent}&nbsp;`;
      }
    });
  }

  return spans;
}
function calculate(spans) {
  const lines = [];
  let words = [];
  let position = spans[0].offsetTop;
  lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(spans, (span, index) => {
    if (span.offsetTop === position) {
      words.push(span);
    }

    if (span.offsetTop !== position) {
      lines.push(words);
      words = [];
      words.push(span);
      position = span.offsetTop;
    }

    if (index + 1 === spans.length) {
      lines.push(words);
    }
  });
  return lines;
}

function splitText(text, expression) {
  const splits = text.split('<br>');
  let words = [];
  lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(splits, (item, index) => {
    if (index > 0) {
      words.push('<br>');
    }

    words = words.concat(item.split(expression));
    let isLink = false;
    let link = '';
    const innerHTML = [];
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(words, word => {
      if (!isLink && (word.includes('<a') || word.includes('<strong'))) {
        link = '';
        isLink = true;
      }

      if (isLink) {
        link += ` ${word}`;
      }

      if (isLink && (word.includes('/a>') || word.includes('/strong>'))) {
        innerHTML.push(link);
        link = '';
      }

      if (!isLink && link === '') {
        innerHTML.push(word);
      }

      if (isLink && (word.includes('/a>') || word.includes('/strong>'))) {
        isLink = false;
      }
    });
    words = innerHTML;
  });
  return words;
}

function parseLine(line) {
  if (line === '') {
    return line;
  } else if (line === ' ') {
    return '&nbsp;';
  } else {
    line = line.trim();
    return line === '<br>' ? '<br>' : `<span>${line}</span>` + (line.length > 1 ? ' ' : '');
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
      // 1634933764924
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a65e5290f11538d02044")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUMsSUFBSSxLQUFLLE1BQVYsR0FBb0IsTUFBcEIsR0FBOEIsU0FBUUEsSUFBSyxTQUFkLElBQTJCQSxJQUFJLENBQUN6RSxNQUFMLEdBQWMsQ0FBZixHQUFvQixHQUFwQixHQUEwQixFQUFwRCxDQUFwQztBQUNEO0FBQ0Y7Ozs7Ozs7Ozs7O0FDOUhEO0FBQ1U7QUFDVixPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyx3SkFBa0gsY0FBYywrQkFBK0I7QUFDN0wsTUFBTSxVQUFVO0FBQ2hCLE1BQU0saUJBQWlCO0FBQ3ZCO0FBQ0E7Ozs7Ozs7O1VDUkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY2xhc3Nlcy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvUHJlbG9hZGVyLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvdXRpbHMvdGV4dC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnZXZlbnRzJ1xuXG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKHsgZWxlbWVudCwgZWxlbWVudHMgfSkge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMuc2VsZWN0b3IgPSBlbGVtZW50XG4gICAgdGhpcy5zZWxlY3RvckNoaWxkcmVuID0ge1xuICAgICAgLi4uZWxlbWVudHNcbiAgICB9XG5cbiAgICB0aGlzLmNyZWF0ZSgpXG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIGNyZWF0ZSAoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKVxuICAgIHRoaXMuZWxlbWVudHMgPSB7fVxuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4sIChlbnRyeSwga2V5KSA9PiB7XG4gICAgICBpZiAoZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHwgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHwgQXJyYXkuaXNBcnJheShlbnRyeSkpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZW50cnlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZW50cnkpXG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5naHQgPT09IDApIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmdodCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZW50cnkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuXG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVycyAoKSB7XG5cbiAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICdjbGFzc2VzL0NvbXBvbmVudCdcbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgc3BsaXQgfSBmcm9tICd1dGlscy90ZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgZWxlbWVudDogJy5wcmVsb2FkZXInLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgdGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXJfX3RleHRfX3RpdGxlJyksXG4gICAgICAgIG51bWJlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWRlcl9fbnVtYmVyJyksXG4gICAgICAgIGltYWdlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5sZW5ndGggPSAwXG5cbiAgICB0aGlzLmNyZWF0ZUxvYWRlcigpXG5cbiAgICBzcGxpdCh7XG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnRzLnRpdGxlLFxuICAgICAgZXhwcmVzc2lvbjogJzxicj4nXG4gICAgfSlcblxuICAgIHNwbGl0KHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXG4gICAgICBleHByZXNzaW9uOiAnPGJyPidcbiAgICB9KVxuXG4gICAgdGhpcy5lbGVtZW50cy50aXRsZVNwYW5zID0gdGhpcy5lbGVtZW50cy50aXRsZS5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuIHNwYW4nKVxuICB9XG5cbiAgb25Bc3NldExvYWRlZCAoaW1hZ2UpIHtcbiAgICB0aGlzLmxlbmd0aCArPSAxXG4gICAgY29uc3QgcGVyY2VudCA9IE1hdGgucm91bmQodGhpcy5sZW5ndGggLyB0aGlzLmVsZW1lbnRzLmltYWdlcy5sZW5ndGggKiAxMDApXG5cbiAgICB0aGlzLmVsZW1lbnRzLm51bWJlci5pbm5lckhUTUwgPSBgJHtwZXJjZW50fSVgXG5cbiAgICBpZiAocGVyY2VudCA9PT0gMTAwKSB7XG4gICAgICB0aGlzLm9uTG9hZGVkKClcbiAgICB9XG4gIH1cblxuICBjcmVhdGVMb2FkZXIgKCkge1xuICAgIGVhY2godGhpcy5lbGVtZW50cy5pbWFnZXMsIGVsZW1lbnQgPT4ge1xuICAgICAgZWxlbWVudC5zcmMgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKVxuICAgICAgZWxlbWVudC5vbmxvYWQgPSBfID0+IHRoaXMub25Bc3NldExvYWRlZChlbGVtZW50KVxuICAgIH0pXG4gIH1cblxuICBvbkxvYWRlZCAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgLyogIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICBkZWxheTogMlxuICAgICAgfSkgKi9cblxuICAgICAgdGhpcy5hbmltYXRlT3V0ID0gZ3NhcC50aW1lbGluZSgpXG5cbiAgICAgIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnRzLnRpdGxlU3BhbnMsIHtcbiAgICAgICAgc3RhZ2dlcjogMC4xLFxuICAgICAgICBkdXJhdGlvbjogMS41LFxuICAgICAgICBlYXNlOiAnZXhwby5vdXQnLFxuICAgICAgICB5OiAnMTAwJSdcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgc2NhbGVZOiAwLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwIDAnLFxuICAgICAgICBlYXNlOiAnZXhwby5vdXQnXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpXG4gIH1cbn1cbiIsImltcG9ydCBBYm91dCBmcm9tICcuL3BhZ2VzL0Fib3V0J1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9wYWdlcy9Ib21lJ1xuaW1wb3J0IFByZWxvYWRlciBmcm9tICcuL2NvbXBvbmVudHMvUHJlbG9hZGVyJ1xuXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnbG9kYXNoJ1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvciAoKSB7ICBcbiAgICB0aGlzLmNyZWF0ZVByZWxvYWRlcigpICBcbiAgICB0aGlzLmNyZWF0ZUNvbnRlbnQoKVxuICAgIHRoaXMuY3JlYXRlUGFnZXMoKVxuICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpXG4gICAgdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgY3JlYXRlUHJlbG9hZGVyICgpIHtcbiAgICB0aGlzLnByZWxvYWRlciA9IG5ldyBQcmVsb2FkZXIoKVxuICB9XG5cbiAgY3JlYXRlQ29udGVudCAoKSB7XG4gICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcbiAgfVxuXG4gIGNyZWF0ZVBhZ2VzICgpIHtcbiAgICB0aGlzLnBhZ2VzID0ge1xuICAgICAgaG9tZTogbmV3IEhvbWUoKSxcbiAgICAgIGFib3V0OiBuZXcgQWJvdXQoKSxcbiAgICB9XG5cbiAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG4gICAgdGhpcy5wYWdlLmNyZWF0ZSgpXG4gICAgdGhpcy5wYWdlLnNob3coKVxuICB9XG5cbiAgYXN5bmMgb25DaGFuZ2UgKHVybCkge1xuICAgIHRoaXMucGFnZS5oaWRlKClcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgd2luZG93LmZldGNoKHVybClcblxuICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBjb25zdCBuZXh0UGFnZSA9IGF3YWl0IHJlcXVlc3QudGV4dCgpXG5cbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBkaXYuaW5uZXJIVE1MID0gbmV4dFBhZ2VcblxuICAgICAgY29uc3QgZGl2Q29udGVudCA9IGRpdi5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG4gICAgICB0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJywgZGl2Q29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKSlcbiAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBkaXZDb250ZW50LmlubmVySFRNTFxuXG4gICAgICB0aGlzLnBhZ2UuY3JlYXRlKClcbiAgICAgIHRoaXMucGFnZS5zaG93KClcbiAgICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdEZXUgcGF1LCBiaXhvISEnKVxuICAgIH1cbiAgfVxuXG4gIGFkZExpbmtMaXN0ZW5lcnMgKCkge1xuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpXG5cbiAgICBlYWNoKGxpbmtzLCBsaW5rID0+IHtcbiAgICAgIGxpbmsub25jbGljayA9IGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGNvbnN0IHsgaHJlZiB9ID0gbGlua1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKGhyZWYpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2UudXBkYXRlKSB7XG4gICAgICB0aGlzLnBhZ2UudXBkYXRlKClcbiAgICB9XG4gICAgdGhpcy5mcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSlcbiAgfVxufVxuXG4vKiBlc2xpbnQgbm8tbmV3OiBcIm9mZlwiICovXG5uZXcgQXBwKClcbiIsImltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuXG5leHBvcnQgZnVuY3Rpb24gc3BsaXQgKHsgZWxlbWVudCwgZXhwcmVzc2lvbiA9ICcgJywgYXBwZW5kID0gdHJ1ZSB9KSB7XG4gIGNvbnN0IHdvcmRzID0gc3BsaXRUZXh0KGVsZW1lbnQuaW5uZXJIVE1MLnRvU3RyaW5nKCkudHJpbSgpLCBleHByZXNzaW9uKVxuXG4gIGxldCBpbm5lckhUTUwgPSAnJ1xuXG4gIGVhY2god29yZHMsIGxpbmUgPT4ge1xuICAgIGlmIChsaW5lLmluZGV4T2YoJzxicj4nKSA+IC0xKSB7XG4gICAgICBjb25zdCBsaW5lcyA9IGxpbmUuc3BsaXQoJzxicj4nKVxuXG4gICAgICBlYWNoKGxpbmVzLCAobGluZSwgaW5kZXgpID0+IHtcbiAgICAgICAgaW5uZXJIVE1MICs9IChpbmRleCA+IDApID8gJzxicj4nICsgcGFyc2VMaW5lKGxpbmUpIDogcGFyc2VMaW5lKGxpbmUpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBpbm5lckhUTUwgKz0gcGFyc2VMaW5lKGxpbmUpXG4gICAgfVxuICB9KVxuXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MXG5cbiAgY29uc3Qgc3BhbnMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4nKVxuXG4gIGlmIChhcHBlbmQpIHtcbiAgICBlYWNoKHNwYW5zLCBzcGFuID0+IHtcbiAgICAgIGNvbnN0IGlzU2luZ2xlTGV0dGVyID0gc3Bhbi50ZXh0Q29udGVudC5sZW5ndGggPT09IDFcbiAgICAgIGNvbnN0IGlzTm90RW1wdHkgPSBzcGFuLmlubmVySFRNTC50cmltKCkgIT09ICcnXG4gICAgICBjb25zdCBpc05vdEFuZENoYXJhY3RlciA9IHNwYW4udGV4dENvbnRlbnQgIT09ICcmJ1xuICAgICAgY29uc3QgaXNOb3REYXNoQ2hhcmFjdGVyID0gc3Bhbi50ZXh0Q29udGVudCAhPT0gJy0nXG5cbiAgICAgIGlmIChpc1NpbmdsZUxldHRlciAmJiBpc05vdEVtcHR5ICYmIGlzTm90QW5kQ2hhcmFjdGVyICYmIGlzTm90RGFzaENoYXJhY3Rlcikge1xuICAgICAgICBzcGFuLmlubmVySFRNTCA9IGAke3NwYW4udGV4dENvbnRlbnR9Jm5ic3A7YFxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gc3BhbnNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZSAoc3BhbnMpIHtcbiAgY29uc3QgbGluZXMgPSBbXVxuICBsZXQgd29yZHMgPSBbXVxuXG4gIGxldCBwb3NpdGlvbiA9IHNwYW5zWzBdLm9mZnNldFRvcFxuXG4gIGVhY2goc3BhbnMsIChzcGFuLCBpbmRleCkgPT4ge1xuICAgIGlmIChzcGFuLm9mZnNldFRvcCA9PT0gcG9zaXRpb24pIHtcbiAgICAgIHdvcmRzLnB1c2goc3BhbilcbiAgICB9XG5cbiAgICBpZiAoc3Bhbi5vZmZzZXRUb3AgIT09IHBvc2l0aW9uKSB7XG4gICAgICBsaW5lcy5wdXNoKHdvcmRzKVxuXG4gICAgICB3b3JkcyA9IFtdXG4gICAgICB3b3Jkcy5wdXNoKHNwYW4pXG5cbiAgICAgIHBvc2l0aW9uID0gc3Bhbi5vZmZzZXRUb3BcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggKyAxID09PSBzcGFucy5sZW5ndGgpIHtcbiAgICAgIGxpbmVzLnB1c2god29yZHMpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBsaW5lc1xufVxuXG5mdW5jdGlvbiBzcGxpdFRleHQgKHRleHQsIGV4cHJlc3Npb24pIHtcbiAgY29uc3Qgc3BsaXRzID0gdGV4dC5zcGxpdCgnPGJyPicpXG5cbiAgbGV0IHdvcmRzID0gW11cblxuICBlYWNoKHNwbGl0cywgKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgd29yZHMucHVzaCgnPGJyPicpXG4gICAgfVxuXG4gICAgd29yZHMgPSB3b3Jkcy5jb25jYXQoaXRlbS5zcGxpdChleHByZXNzaW9uKSlcblxuICAgIGxldCBpc0xpbmsgPSBmYWxzZVxuICAgIGxldCBsaW5rID0gJydcblxuICAgIGNvbnN0IGlubmVySFRNTCA9IFtdXG5cbiAgICBlYWNoKHdvcmRzLCB3b3JkID0+IHtcbiAgICAgIGlmICghaXNMaW5rICYmICh3b3JkLmluY2x1ZGVzKCc8YScpIHx8IHdvcmQuaW5jbHVkZXMoJzxzdHJvbmcnKSkpIHtcbiAgICAgICAgbGluayA9ICcnXG5cbiAgICAgICAgaXNMaW5rID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNMaW5rKSB7XG4gICAgICAgIGxpbmsgKz0gYCAke3dvcmR9YFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNMaW5rICYmICh3b3JkLmluY2x1ZGVzKCcvYT4nKSB8fCB3b3JkLmluY2x1ZGVzKCcvc3Ryb25nPicpKSkge1xuICAgICAgICBpbm5lckhUTUwucHVzaChsaW5rKVxuXG4gICAgICAgIGxpbmsgPSAnJ1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTGluayAmJiBsaW5rID09PSAnJykge1xuICAgICAgICBpbm5lckhUTUwucHVzaCh3b3JkKVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNMaW5rICYmICh3b3JkLmluY2x1ZGVzKCcvYT4nKSB8fCB3b3JkLmluY2x1ZGVzKCcvc3Ryb25nPicpKSkge1xuICAgICAgICBpc0xpbmsgPSBmYWxzZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3b3JkcyA9IGlubmVySFRNTFxuICB9KVxuXG4gIHJldHVybiB3b3Jkc1xufVxuXG5mdW5jdGlvbiBwYXJzZUxpbmUgKGxpbmUpIHtcbiAgaWYgKGxpbmUgPT09ICcnKSB7XG4gICAgcmV0dXJuIGxpbmVcbiAgfSBlbHNlIGlmIChsaW5lID09PSAnICcpIHtcbiAgICByZXR1cm4gJyZuYnNwOydcbiAgfSBlbHNlIHtcbiAgICBsaW5lID0gbGluZS50cmltKClcblxuICAgIHJldHVybiAobGluZSA9PT0gJzxicj4nKSA/ICc8YnI+JyA6IGA8c3Bhbj4ke2xpbmV9PC9zcGFuPmAgKyAoKGxpbmUubGVuZ3RoID4gMSkgPyAnICcgOiAnJylcbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzNDkzMzc2NDkyNFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS9sdWNhc3NpbHZhL2JhY2t1cC9wcm9qZXRvcy9lbmR1cmFuY2Uvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhNjVlNTI5MGYxMTUzOGQwMjA0NFwiKSJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJlYWNoIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJzZWxlY3RvciIsInNlbGVjdG9yQ2hpbGRyZW4iLCJjcmVhdGUiLCJhZGRFdmVudExpc3RlbmVycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVudHJ5Iiwia2V5Iiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5naHQiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsImdzYXAiLCJzcGxpdCIsIlByZWxvYWRlciIsInRpdGxlIiwibnVtYmVyIiwiaW1hZ2VzIiwibGVuZ3RoIiwiY3JlYXRlTG9hZGVyIiwiZXhwcmVzc2lvbiIsInRpdGxlU3BhbnMiLCJvbkFzc2V0TG9hZGVkIiwiaW1hZ2UiLCJwZXJjZW50IiwiTWF0aCIsInJvdW5kIiwiaW5uZXJIVE1MIiwib25Mb2FkZWQiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJvbmxvYWQiLCJfIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRlT3V0IiwidGltZWxpbmUiLCJ0byIsInN0YWdnZXIiLCJkdXJhdGlvbiIsImVhc2UiLCJ5Iiwic2NhbGVZIiwidHJhbnNmb3JtT3JpZ2luIiwiZGVzdHJveSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIkFib3V0IiwiSG9tZSIsIkFwcCIsImNyZWF0ZVByZWxvYWRlciIsImNyZWF0ZUNvbnRlbnQiLCJjcmVhdGVQYWdlcyIsImFkZExpbmtMaXN0ZW5lcnMiLCJ1cGRhdGUiLCJwcmVsb2FkZXIiLCJjb250ZW50IiwidGVtcGxhdGUiLCJwYWdlcyIsImhvbWUiLCJhYm91dCIsInBhZ2UiLCJzaG93Iiwib25DaGFuZ2UiLCJ1cmwiLCJoaWRlIiwicmVxdWVzdCIsImZldGNoIiwic3RhdHVzIiwibmV4dFBhZ2UiLCJ0ZXh0IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImRpdkNvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwibGlua3MiLCJsaW5rIiwib25jbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiZnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwiYXBwZW5kIiwid29yZHMiLCJzcGxpdFRleHQiLCJ0b1N0cmluZyIsInRyaW0iLCJsaW5lIiwiaW5kZXhPZiIsImxpbmVzIiwiaW5kZXgiLCJwYXJzZUxpbmUiLCJzcGFucyIsInNwYW4iLCJpc1NpbmdsZUxldHRlciIsInRleHRDb250ZW50IiwiaXNOb3RFbXB0eSIsImlzTm90QW5kQ2hhcmFjdGVyIiwiaXNOb3REYXNoQ2hhcmFjdGVyIiwiY2FsY3VsYXRlIiwicG9zaXRpb24iLCJvZmZzZXRUb3AiLCJwdXNoIiwic3BsaXRzIiwiaXRlbSIsImNvbmNhdCIsImlzTGluayIsIndvcmQiLCJpbmNsdWRlcyJdLCJzb3VyY2VSb290IjoiIn0=