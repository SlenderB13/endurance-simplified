self["webpackHotUpdatefloema"]("main",{

/***/ "./app/classes/Page.js":
/*!*****************************!*\
  !*** ./app/classes/Page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    this.update();
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
      /* if (entry instanceof window.HTMLElement || entry instanceof window.NodeList || Array.isArray(entry)) {
        this.elements[key] = entry
       } else {
        this.elements[key] = document.querySelectorAll(entry)
        if (this.elements[key].lenght === 0) {
          this.elements[key] = null
        } else if (this.elements[key].lenght === 1) {
          this.elements[key] = document.querySelector(entry)
        }
      } */
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

  update() {
    this.scroll.current = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.interpolate(this.scroll.current, this.scroll.target, 0.1);
    /* if (this.elements.wrapper) {
      this.elements.wrapper.style[this.transformPrefix] = `translateX(${this.scroll.current}px)`
    } */
  }

  onMouseWheel(event) {
    console.log(this.element);
  }

  addEventListeners() {
    window.addEventListener('wheel', this.onMouseWheel);
  }

}

/***/ }),

/***/ "./node_modules/gsap/CSSPlugin.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/CSSPlugin.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSPlugin": () => (/* binding */ CSSPlugin),
/* harmony export */   "default": () => (/* binding */ CSSPlugin),
/* harmony export */   "_getBBox": () => (/* binding */ _getBBox),
/* harmony export */   "_createElement": () => (/* binding */ _createElement),
/* harmony export */   "checkPrefix": () => (/* binding */ _checkPropPrefix)
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/*!
 * CSSPlugin 3.8.0
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */


var _win,
    _doc,
    _docElement,
    _pluginInitted,
    _tempDiv,
    _tempDivStyler,
    _recentSetterPlugin,
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _transformProps = {},
    _RAD2DEG = 180 / Math.PI,
    _DEG2RAD = Math.PI / 180,
    _atan2 = Math.atan2,
    _bigNum = 1e8,
    _capsExp = /([A-Z])/g,
    _horizontalExp = /(?:left|right|width|margin|padding|x)/i,
    _complexExp = /[\s,\(]\S/,
    _propertyAliases = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
},
    _renderCSSProp = function _renderCSSProp(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
  return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
  return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
},
    //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
  var value = data.s + data.c * ratio;
  data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
},
    _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
  return data.set(data.t, data.p, ratio ? data.e : data.b, data);
},
    _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
  return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
},
    _setterCSSStyle = function _setterCSSStyle(target, property, value) {
  return target.style[property] = value;
},
    _setterCSSProp = function _setterCSSProp(target, property, value) {
  return target.style.setProperty(property, value);
},
    _setterTransform = function _setterTransform(target, property, value) {
  return target._gsap[property] = value;
},
    _setterScale = function _setterScale(target, property, value) {
  return target._gsap.scaleX = target._gsap.scaleY = value;
},
    _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache.scaleX = cache.scaleY = value;
  cache.renderTransform(ratio, cache);
},
    _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache[property] = value;
  cache.renderTransform(ratio, cache);
},
    _transformProp = "transform",
    _transformOriginProp = _transformProp + "Origin",
    _supports3D,
    _createElement = function _createElement(type, ns) {
  var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.

  return e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
},
    _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
  var cs = getComputedStyle(target);
  return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
},
    _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
    _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
  var e = element || _tempDiv,
      s = e.style,
      i = 5;

  if (property in s && !preferPrefix) {
    return property;
  }

  property = property.charAt(0).toUpperCase() + property.substr(1);

  while (i-- && !(_prefixes[i] + property in s)) {}

  return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
},
    _initCore = function _initCore() {
  if (_windowExists() && window.document) {
    _win = window;
    _doc = _win.document;
    _docElement = _doc.documentElement;
    _tempDiv = _createElement("div") || {
      style: {}
    };
    _tempDivStyler = _createElement("div");
    _transformProp = _checkPropPrefix(_transformProp);
    _transformOriginProp = _transformProp + "Origin";
    _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.

    _supports3D = !!_checkPropPrefix("perspective");
    _pluginInitted = 1;
  }
},
    _getBBoxHack = function _getBBoxHack(swapIfPossible) {
  //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
  var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      oldParent = this.parentNode,
      oldSibling = this.nextSibling,
      oldCSS = this.style.cssText,
      bbox;

  _docElement.appendChild(svg);

  svg.appendChild(this);
  this.style.display = "block";

  if (swapIfPossible) {
    try {
      bbox = this.getBBox();
      this._gsapBBox = this.getBBox; //store the original

      this.getBBox = _getBBoxHack;
    } catch (e) {}
  } else if (this._gsapBBox) {
    bbox = this._gsapBBox();
  }

  if (oldParent) {
    if (oldSibling) {
      oldParent.insertBefore(this, oldSibling);
    } else {
      oldParent.appendChild(this);
    }
  }

  _docElement.removeChild(svg);

  this.style.cssText = oldCSS;
  return bbox;
},
    _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
  var i = attributesArray.length;

  while (i--) {
    if (target.hasAttribute(attributesArray[i])) {
      return target.getAttribute(attributesArray[i]);
    }
  }
},
    _getBBox = function _getBBox(target) {
  var bounds;

  try {
    bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
  } catch (error) {
    bounds = _getBBoxHack.call(target, true);
  }

  bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.

  return bounds && !bounds.width && !bounds.x && !bounds.y ? {
    x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
    y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : bounds;
},
    _isSVG = function _isSVG(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
},
    //reports if the element is an SVG on which getBBox() actually works
_removeProperty = function _removeProperty(target, property) {
  if (property) {
    var style = target.style;

    if (property in _transformProps && property !== _transformOriginProp) {
      property = _transformProp;
    }

    if (style.removeProperty) {
      if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
        //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
        property = "-" + property;
      }

      style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
    } else {
      //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
      style.removeAttribute(property);
    }
  }
},
    _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
  plugin._pt = pt;
  pt.b = beginning;
  pt.e = end;

  plugin._props.push(property);

  return pt;
},
    _nonConvertibleUnits = {
  deg: 1,
  rad: 1,
  turn: 1
},
    //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
_convertToUnit = function _convertToUnit(target, property, value, unit) {
  var curValue = parseFloat(value) || 0,
      curUnit = (value + "").trim().substr((curValue + "").length) || "px",
      // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
  style = _tempDiv.style,
      horizontal = _horizontalExp.test(property),
      isRootSVG = target.tagName.toLowerCase() === "svg",
      measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
      amount = 100,
      toPixels = unit === "px",
      toPercent = unit === "%",
      px,
      parent,
      cache,
      isSVG;

  if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
    return curValue;
  }

  curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
  isSVG = target.getCTM && _isSVG(target);

  if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
    px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPercent ? curValue / px * amount : curValue / 100 * px);
  }

  style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
  parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

  if (isSVG) {
    parent = (target.ownerSVGElement || {}).parentNode;
  }

  if (!parent || parent === _doc || !parent.appendChild) {
    parent = _doc.body;
  }

  cache = parent._gsap;

  if (cache && toPercent && cache.width && horizontal && cache.time === _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time) {
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(curValue / cache.width * amount);
  } else {
    (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
    parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.

    parent.appendChild(_tempDiv);
    px = _tempDiv[measureProperty];
    parent.removeChild(_tempDiv);
    style.position = "absolute";

    if (horizontal && toPercent) {
      cache = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(parent);
      cache.time = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time;
      cache.width = parent[measureProperty];
    }
  }

  return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
},
    _get = function _get(target, property, unit, uncache) {
  var value;
  _pluginInitted || _initCore();

  if (property in _propertyAliases && property !== "transform") {
    property = _propertyAliases[property];

    if (~property.indexOf(",")) {
      property = property.split(",")[0];
    }
  }

  if (_transformProps[property] && property !== "transform") {
    value = _parseTransform(target, uncache);
    value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
  } else {
    value = target.style[property];

    if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
      value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getProperty)(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
  }

  return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
},
    _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
  //note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  if (!start || start === "none") {
    // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://greensock.com/forums/topic/18310-clippath-doesnt-work-on-ios/
    var p = _checkPropPrefix(prop, target, 1),
        s = p && _getComputedProperty(target, p, 1);

    if (s && s !== start) {
      prop = p;
      start = s;
    } else if (prop === "borderColor") {
      start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://greensock.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
  }

  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, target.style, prop, 0, 1, _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._renderComplexString),
      index = 0,
      matchIndex = 0,
      a,
      result,
      startValues,
      startNum,
      color,
      startValue,
      endValue,
      endNum,
      chunk,
      endUnit,
      startUnit,
      relative,
      endValues;
  pt.b = start;
  pt.e = end;
  start += ""; //ensure values are strings

  end += "";

  if (end === "auto") {
    target.style[prop] = end;
    end = _getComputedProperty(target, prop) || end;
    target.style[prop] = start;
  }

  a = [start, end];

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorStringFilter)(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().


  start = a[0];
  end = a[1];
  startValues = start.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];
  endValues = end.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];

  if (endValues.length) {
    while (result = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.exec(end)) {
      endValue = result[0];
      chunk = end.substring(index, result.index);

      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
        color = 1;
      }

      if (endValue !== (startValue = startValues[matchIndex++] || "")) {
        startNum = parseFloat(startValue) || 0;
        startUnit = startValue.substr((startNum + "").length);
        relative = endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;

        if (relative) {
          endValue = endValue.substr(2);
        }

        endNum = parseFloat(endValue);
        endUnit = endValue.substr((endNum + "").length);
        index = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.lastIndex - endUnit.length;

        if (!endUnit) {
          //if something like "perspective:300" is passed in and we must add a unit to the end
          endUnit = endUnit || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[prop] || startUnit;

          if (index === end.length) {
            end += endUnit;
            pt.e += endUnit;
          }
        }

        if (startUnit !== endUnit) {
          startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
        } //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.


        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: relative ? relative * endNum : endNum - startNum,
          m: color && color < 4 || prop === "zIndex" ? Math.round : 0
        };
      }
    }

    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
  } else {
    pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
  }

  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._relExp.test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _keywordToPercent = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
},
    _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
  var split = value.split(" "),
      x = split[0],
      y = split[1] || "50%";

  if (x === "top" || x === "bottom" || y === "left" || y === "right") {
    //the user provided them in the wrong order, so flip them
    value = x;
    x = y;
    y = value;
  }

  split[0] = _keywordToPercent[x] || x;
  split[1] = _keywordToPercent[y] || y;
  return split.join(" ");
},
    _renderClearProps = function _renderClearProps(ratio, data) {
  if (data.tween && data.tween._time === data.tween._dur) {
    var target = data.t,
        style = target.style,
        props = data.u,
        cache = target._gsap,
        prop,
        clearTransforms,
        i;

    if (props === "all" || props === true) {
      style.cssText = "";
      clearTransforms = 1;
    } else {
      props = props.split(",");
      i = props.length;

      while (--i > -1) {
        prop = props[i];

        if (_transformProps[prop]) {
          clearTransforms = 1;
          prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
        }

        _removeProperty(target, prop);
      }
    }

    if (clearTransforms) {
      _removeProperty(target, _transformProp);

      if (cache) {
        cache.svg && target.removeAttribute("transform");

        _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.


        cache.uncache = 1;
      }
    }
  }
},
    // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
_specialProps = {
  clearProps: function clearProps(plugin, target, property, endValue, tween) {
    if (tween.data !== "isFromStart") {
      var pt = plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
      pt.u = endValue;
      pt.pr = -10;
      pt.tween = tween;

      plugin._props.push(property);

      return 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */

},

/*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */
_identity2DMatrix = [1, 0, 0, 1, 0, 0],
    _rotationalProperties = {},
    _isNullTransform = function _isNullTransform(value) {
  return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
},
    _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
  var matrixString = _getComputedProperty(target, _transformProp);

  return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numExp).map(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round);
},
    _getMatrix = function _getMatrix(target, force2D) {
  var cache = target._gsap || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(target),
      style = target.style,
      matrix = _getComputedTransformMatrixAsArray(target),
      parent,
      nextSibling,
      temp,
      addedToDOM;

  if (cache.svg && target.getAttribute("transform")) {
    temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.

    matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
    return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
  } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
    //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
    temp = style.display;
    style.display = "block";
    parent = target.parentNode;

    if (!parent || !target.offsetParent) {
      // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
      addedToDOM = 1; //flag

      nextSibling = target.nextSibling;

      _docElement.appendChild(target); //we must add it to the DOM in order to get values properly

    }

    matrix = _getComputedTransformMatrixAsArray(target);
    temp ? style.display = temp : _removeProperty(target, "display");

    if (addedToDOM) {
      nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
  }

  return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
},
    _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
  var cache = target._gsap,
      matrix = matrixArray || _getMatrix(target, true),
      xOriginOld = cache.xOrigin || 0,
      yOriginOld = cache.yOrigin || 0,
      xOffsetOld = cache.xOffset || 0,
      yOffsetOld = cache.yOffset || 0,
      a = matrix[0],
      b = matrix[1],
      c = matrix[2],
      d = matrix[3],
      tx = matrix[4],
      ty = matrix[5],
      originSplit = origin.split(" "),
      xOrigin = parseFloat(originSplit[0]) || 0,
      yOrigin = parseFloat(originSplit[1]) || 0,
      bounds,
      determinant,
      x,
      y;

  if (!originIsAbsolute) {
    bounds = _getBBox(target);
    xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
    yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
  } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
    //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
    x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
    y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
    xOrigin = x;
    yOrigin = y;
  }

  if (smooth || smooth !== false && cache.smooth) {
    tx = xOrigin - xOriginOld;
    ty = yOrigin - yOriginOld;
    cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
    cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
  } else {
    cache.xOffset = cache.yOffset = 0;
  }

  cache.xOrigin = xOrigin;
  cache.yOrigin = yOrigin;
  cache.smooth = !!smooth;
  cache.origin = origin;
  cache.originIsAbsolute = !!originIsAbsolute;
  target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).

  if (pluginToAddPropTweensTo) {
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
  }

  target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
},
    _parseTransform = function _parseTransform(target, uncache) {
  var cache = target._gsap || new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.GSCache(target);

  if ("x" in cache && !uncache && !cache.uncache) {
    return cache;
  }

  var style = target.style,
      invertedScaleX = cache.scaleX < 0,
      px = "px",
      deg = "deg",
      origin = _getComputedProperty(target, _transformOriginProp) || "0",
      x,
      y,
      z,
      scaleX,
      scaleY,
      rotation,
      rotationX,
      rotationY,
      skewX,
      skewY,
      perspective,
      xOrigin,
      yOrigin,
      matrix,
      angle,
      cos,
      sin,
      a,
      b,
      c,
      d,
      a12,
      a22,
      t1,
      t2,
      t3,
      a13,
      a23,
      a33,
      a42,
      a43,
      a32;
  x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
  scaleX = scaleY = 1;
  cache.svg = !!(target.getCTM && _isSVG(target));
  matrix = _getMatrix(target, cache.svg);

  if (cache.svg) {
    t1 = (!cache.uncache || origin === "0px 0px") && !uncache && target.getAttribute("data-svg-origin"); // if origin is 0,0 and cache.uncache is true, let the recorded data-svg-origin stay. Otherwise, whenever we set cache.uncache to true, we'd need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.

    _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
  }

  xOrigin = cache.xOrigin || 0;
  yOrigin = cache.yOrigin || 0;

  if (matrix !== _identity2DMatrix) {
    a = matrix[0]; //a11

    b = matrix[1]; //a21

    c = matrix[2]; //a31

    d = matrix[3]; //a41

    x = a12 = matrix[4];
    y = a22 = matrix[5]; //2D matrix

    if (matrix.length === 6) {
      scaleX = Math.sqrt(a * a + b * b);
      scaleY = Math.sqrt(d * d + c * c);
      rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).

      skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
      skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));

      if (cache.svg) {
        x -= xOrigin - (xOrigin * a + yOrigin * c);
        y -= yOrigin - (xOrigin * b + yOrigin * d);
      } //3D matrix

    } else {
      a32 = matrix[6];
      a42 = matrix[7];
      a13 = matrix[8];
      a23 = matrix[9];
      a33 = matrix[10];
      a43 = matrix[11];
      x = matrix[12];
      y = matrix[13];
      z = matrix[14];
      angle = _atan2(a32, a33);
      rotationX = angle * _RAD2DEG; //rotationX

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a12 * cos + a13 * sin;
        t2 = a22 * cos + a23 * sin;
        t3 = a32 * cos + a33 * sin;
        a13 = a12 * -sin + a13 * cos;
        a23 = a22 * -sin + a23 * cos;
        a33 = a32 * -sin + a33 * cos;
        a43 = a42 * -sin + a43 * cos;
        a12 = t1;
        a22 = t2;
        a32 = t3;
      } //rotationY


      angle = _atan2(-c, a33);
      rotationY = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a * cos - a13 * sin;
        t2 = b * cos - a23 * sin;
        t3 = c * cos - a33 * sin;
        a43 = d * sin + a43 * cos;
        a = t1;
        b = t2;
        c = t3;
      } //rotationZ


      angle = _atan2(b, a);
      rotation = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        t1 = a * cos + b * sin;
        t2 = a12 * cos + a22 * sin;
        b = b * cos - a * sin;
        a22 = a22 * cos - a12 * sin;
        a = t1;
        a12 = t2;
      }

      if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
        //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
        rotationX = rotation = 0;
        rotationY = 180 - rotationY;
      }

      scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a * a + b * b + c * c));
      scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a22 * a22 + a32 * a32));
      angle = _atan2(a12, a22);
      skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
      perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
    }

    if (cache.svg) {
      //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
      t1 = target.getAttribute("transform");
      cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
      t1 && target.setAttribute("transform", t1);
    }
  }

  if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
    if (invertedScaleX) {
      scaleX *= -1;
      skewX += rotation <= 0 ? 180 : -180;
      rotation += rotation <= 0 ? 180 : -180;
    } else {
      scaleY *= -1;
      skewX += skewX <= 0 ? 180 : -180;
    }
  }

  cache.x = x - ((cache.xPercent = x && (cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
  cache.y = y - ((cache.yPercent = y && (cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
  cache.z = z + px;
  cache.scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleX);
  cache.scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleY);
  cache.rotation = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotation) + deg;
  cache.rotationX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationX) + deg;
  cache.rotationY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationY) + deg;
  cache.skewX = skewX + deg;
  cache.skewY = skewY + deg;
  cache.transformPerspective = perspective + px;

  if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
    style[_transformOriginProp] = _firstTwoOnly(origin);
  }

  cache.xOffset = cache.yOffset = 0;
  cache.force3D = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.force3D;
  cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
  cache.uncache = 0;
  return cache;
},
    _firstTwoOnly = function _firstTwoOnly(value) {
  return (value = value.split(" "))[0] + " " + value[1];
},
    //for handling transformOrigin values, stripping out the 3rd dimension
_addPxTranslate = function _addPxTranslate(target, start, value) {
  var unit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(start);
  return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
},
    _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
  cache.z = "0px";
  cache.rotationY = cache.rotationX = "0deg";
  cache.force3D = 0;

  _renderCSSTransforms(ratio, cache);
},
    _zeroDeg = "0deg",
    _zeroPx = "0px",
    _endParenthesis = ") ",
    _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
  var _ref = cache || this,
      xPercent = _ref.xPercent,
      yPercent = _ref.yPercent,
      x = _ref.x,
      y = _ref.y,
      z = _ref.z,
      rotation = _ref.rotation,
      rotationY = _ref.rotationY,
      rotationX = _ref.rotationX,
      skewX = _ref.skewX,
      skewY = _ref.skewY,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      transformPerspective = _ref.transformPerspective,
      force3D = _ref.force3D,
      target = _ref.target,
      zOrigin = _ref.zOrigin,
      transforms = "",
      use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)


  if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
    var angle = parseFloat(rotationY) * _DEG2RAD,
        a13 = Math.sin(angle),
        a33 = Math.cos(angle),
        cos;

    angle = parseFloat(rotationX) * _DEG2RAD;
    cos = Math.cos(angle);
    x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
    y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
    z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
  }

  if (transformPerspective !== _zeroPx) {
    transforms += "perspective(" + transformPerspective + _endParenthesis;
  }

  if (xPercent || yPercent) {
    transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
  }

  if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
    transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
  }

  if (rotation !== _zeroDeg) {
    transforms += "rotate(" + rotation + _endParenthesis;
  }

  if (rotationY !== _zeroDeg) {
    transforms += "rotateY(" + rotationY + _endParenthesis;
  }

  if (rotationX !== _zeroDeg) {
    transforms += "rotateX(" + rotationX + _endParenthesis;
  }

  if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
    transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
  }

  if (scaleX !== 1 || scaleY !== 1) {
    transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
  }

  target.style[_transformProp] = transforms || "translate(0, 0)";
},
    _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
  var _ref2 = cache || this,
      xPercent = _ref2.xPercent,
      yPercent = _ref2.yPercent,
      x = _ref2.x,
      y = _ref2.y,
      rotation = _ref2.rotation,
      skewX = _ref2.skewX,
      skewY = _ref2.skewY,
      scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY,
      target = _ref2.target,
      xOrigin = _ref2.xOrigin,
      yOrigin = _ref2.yOrigin,
      xOffset = _ref2.xOffset,
      yOffset = _ref2.yOffset,
      forceCSS = _ref2.forceCSS,
      tx = parseFloat(x),
      ty = parseFloat(y),
      a11,
      a21,
      a12,
      a22,
      temp;

  rotation = parseFloat(rotation);
  skewX = parseFloat(skewX);
  skewY = parseFloat(skewY);

  if (skewY) {
    //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
    skewY = parseFloat(skewY);
    skewX += skewY;
    rotation += skewY;
  }

  if (rotation || skewX) {
    rotation *= _DEG2RAD;
    skewX *= _DEG2RAD;
    a11 = Math.cos(rotation) * scaleX;
    a21 = Math.sin(rotation) * scaleX;
    a12 = Math.sin(rotation - skewX) * -scaleY;
    a22 = Math.cos(rotation - skewX) * scaleY;

    if (skewX) {
      skewY *= _DEG2RAD;
      temp = Math.tan(skewX - skewY);
      temp = Math.sqrt(1 + temp * temp);
      a12 *= temp;
      a22 *= temp;

      if (skewY) {
        temp = Math.tan(skewY);
        temp = Math.sqrt(1 + temp * temp);
        a11 *= temp;
        a21 *= temp;
      }
    }

    a11 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a11);
    a21 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a21);
    a12 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a12);
    a22 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a22);
  } else {
    a11 = scaleX;
    a22 = scaleY;
    a21 = a12 = 0;
  }

  if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
    tx = _convertToUnit(target, "x", x, "px");
    ty = _convertToUnit(target, "y", y, "px");
  }

  if (xOrigin || yOrigin || xOffset || yOffset) {
    tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
    ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
  }

  if (xPercent || yPercent) {
    //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
    temp = target.getBBox();
    tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xPercent / 100 * temp.width);
    ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yPercent / 100 * temp.height);
  }

  temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
  target.setAttribute("transform", temp);
  forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the  transform attribute changes!)
},
    _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue, relative) {
  var cap = 360,
      isString = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(endValue),
      endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
      change = relative ? endNum * relative : endNum - startNum,
      finalValue = startNum + change + "deg",
      direction,
      pt;

  if (isString) {
    direction = endValue.split("_")[1];

    if (direction === "short") {
      change %= cap;

      if (change !== change % (cap / 2)) {
        change += change < 0 ? cap : -cap;
      }
    }

    if (direction === "cw" && change < 0) {
      change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
    } else if (direction === "ccw" && change > 0) {
      change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
    }
  }

  plugin._pt = pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
  pt.e = finalValue;
  pt.u = "deg";

  plugin._props.push(property);

  return pt;
},
    _assign = function _assign(target, source) {
  // Internet Explorer doesn't have Object.assign(), so we recreate it here.
  for (var p in source) {
    target[p] = source[p];
  }

  return target;
},
    _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
  //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
  var startCache = _assign({}, target._gsap),
      exclude = "perspective,force3D,transformOrigin,svgOrigin",
      style = target.style,
      endCache,
      p,
      startValue,
      endValue,
      startNum,
      endNum,
      startUnit,
      endUnit;

  if (startCache.svg) {
    startValue = target.getAttribute("transform");
    target.setAttribute("transform", "");
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);

    _removeProperty(target, _transformProp);

    target.setAttribute("transform", startValue);
  } else {
    startValue = getComputedStyle(target)[_transformProp];
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);
    style[_transformProp] = startValue;
  }

  for (p in _transformProps) {
    startValue = startCache[p];
    endValue = endCache[p];

    if (startValue !== endValue && exclude.indexOf(p) < 0) {
      //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
      startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
      endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
      startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
      endNum = parseFloat(endValue);
      plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
      plugin._pt.u = endUnit || 0;

      plugin._props.push(p);
    }
  }

  _assign(endCache, startCache);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.


(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("padding,margin,Width,Radius", function (name, index) {
  var t = "Top",
      r = "Right",
      b = "Bottom",
      l = "Left",
      props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
    return index < 2 ? name + side : "border" + side + name;
  });

  _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
    var a, vars;

    if (arguments.length < 4) {
      // getter, passed target, property, and unit (from _get())
      a = props.map(function (prop) {
        return _get(plugin, prop, property);
      });
      vars = a.join(" ");
      return vars.split(a[0]).length === 5 ? a[0] : vars;
    }

    a = (endValue + "").split(" ");
    vars = {};
    props.forEach(function (prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    });
    plugin.init(target, vars, tween);
  };
});

var CSSPlugin = {
  name: "css",
  register: _initCore,
  targetTest: function targetTest(target) {
    return target.style && target.nodeType;
  },
  init: function init(target, vars, tween, index, targets) {
    var props = this._props,
        style = target.style,
        startAt = tween.vars.startAt,
        startValue,
        endValue,
        endNum,
        startNum,
        type,
        specialProp,
        p,
        startUnit,
        endUnit,
        relative,
        isTransformRelated,
        transformPropTween,
        cache,
        smooth,
        hasPriority;
    _pluginInitted || _initCore();

    for (p in vars) {
      if (p === "autoRound") {
        continue;
      }

      endValue = vars[p];

      if (_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._plugins[p] && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._checkPlugin)(p, vars, tween, index, target, targets)) {
        // plugins
        continue;
      }

      type = typeof endValue;
      specialProp = _specialProps[p];

      if (type === "function") {
        endValue = endValue.call(tween, index, target, targets);
        type = typeof endValue;
      }

      if (type === "string" && ~endValue.indexOf("random(")) {
        endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(endValue);
      }

      if (specialProp) {
        specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
      } else if (p.substr(0, 2) === "--") {
        //CSS variable
        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
        endValue += "";
        _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.lastIndex = 0;

        if (!_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.test(startValue)) {
          // colors don't have units
          startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
        }

        endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
        this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
        props.push(p);
      } else if (type !== "undefined") {
        if (startAt && p in startAt) {
          // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
          startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
          p in _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units && !(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue) && (startValue += _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p]); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.

          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(startValue) && ~startValue.indexOf("random(") && (startValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(startValue));
          (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
        } else {
          startValue = _get(target, p);
        }

        startNum = parseFloat(startValue);
        relative = type === "string" && endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
        relative && (endValue = endValue.substr(2));
        endNum = parseFloat(endValue);

        if (p in _propertyAliases) {
          if (p === "autoAlpha") {
            //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
              //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
              startNum = 0;
            }

            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
          }

          if (p !== "scale" && p !== "transform") {
            p = _propertyAliases[p];
            ~p.indexOf(",") && (p = p.split(",")[0]);
          }
        }

        isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---

        if (isTransformRelated) {
          if (!transformPropTween) {
            cache = target._gsap;
            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.

            smooth = vars.smoothOrigin !== false && cache.smooth;
            transformPropTween = this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)

            transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
          }

          if (p === "scale") {
            this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? relative * endNum : endNum - cache.scaleY) || 0);
            props.push("scaleY", p);
            p += "X";
          } else if (p === "transformOrigin") {
            endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.

            if (cache.svg) {
              _applySVGOrigin(target, endValue, 0, smooth, 0, this);
            } else {
              endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!

              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

              _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
            }

            continue;
          } else if (p === "svgOrigin") {
            _applySVGOrigin(target, endValue, 1, smooth, 0, this);

            continue;
          } else if (p in _rotationalProperties) {
            _addRotationalPropTween(this, cache, p, startNum, endValue, relative);

            continue;
          } else if (p === "smoothOrigin") {
            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

            continue;
          } else if (p === "force3D") {
            cache[p] = endValue;
            continue;
          } else if (p === "transform") {
            _addRawTransformPTs(this, endValue, target);

            continue;
          }
        } else if (!(p in style)) {
          p = _checkPropPrefix(p) || p;
        }

        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
          startUnit = (startValue + "").substr((startNum + "").length);
          endNum || (endNum = 0); // protect against NaN

          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue) || (p in _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units ? _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] : startUnit);
          startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
          this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, relative ? relative * endNum : endNum - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
          this._pt.u = endUnit || 0;

          if (startUnit !== endUnit && endUnit !== "%") {
            //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
            this._pt.b = startValue;
            this._pt.r = _renderCSSPropWithBeginning;
          }
        } else if (!(p in style)) {
          if (p in target) {
            //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
            this.add(target, p, startValue || target[p], endValue, index, targets);
          } else {
            (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._missingPlugin)(p, endValue);

            continue;
          }
        } else {
          _tweenComplexCSSString.call(this, target, p, startValue, endValue);
        }

        props.push(p);
      }
    }

    hasPriority && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._sortPropTweensByPriority)(this);
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function getSetter(target, property, plugin) {
    //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
    var p = _propertyAliases[property];
    p && p.indexOf(",") < 0 && (property = p);
    return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isUndefined)(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getSetter)(target, property);
  },
  core: {
    _removeProperty: _removeProperty,
    _getMatrix: _getMatrix
  }
};
_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.checkPrefix = _checkPropPrefix;

(function (positionAndScale, rotation, others, aliases) {
  var all = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(positionAndScale + "," + rotation + "," + others, function (name) {
    _transformProps[name] = 1;
  });

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(rotation, function (name) {
    _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "deg";
    _rotationalProperties[name] = 1;
  });

  _propertyAliases[all[13]] = positionAndScale + "," + rotation;

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(aliases, function (name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "px";
});

_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(CSSPlugin);


/***/ }),

/***/ "./node_modules/gsap/gsap-core.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/gsap-core.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GSCache": () => (/* binding */ GSCache),
/* harmony export */   "Animation": () => (/* binding */ Animation),
/* harmony export */   "Timeline": () => (/* binding */ Timeline),
/* harmony export */   "Tween": () => (/* binding */ Tween),
/* harmony export */   "PropTween": () => (/* binding */ PropTween),
/* harmony export */   "gsap": () => (/* binding */ gsap),
/* harmony export */   "Power0": () => (/* binding */ Power0),
/* harmony export */   "Power1": () => (/* binding */ Power1),
/* harmony export */   "Power2": () => (/* binding */ Power2),
/* harmony export */   "Power3": () => (/* binding */ Power3),
/* harmony export */   "Power4": () => (/* binding */ Power4),
/* harmony export */   "Linear": () => (/* binding */ Linear),
/* harmony export */   "Quad": () => (/* binding */ Quad),
/* harmony export */   "Cubic": () => (/* binding */ Cubic),
/* harmony export */   "Quart": () => (/* binding */ Quart),
/* harmony export */   "Quint": () => (/* binding */ Quint),
/* harmony export */   "Strong": () => (/* binding */ Strong),
/* harmony export */   "Elastic": () => (/* binding */ Elastic),
/* harmony export */   "Back": () => (/* binding */ Back),
/* harmony export */   "SteppedEase": () => (/* binding */ SteppedEase),
/* harmony export */   "Bounce": () => (/* binding */ Bounce),
/* harmony export */   "Sine": () => (/* binding */ Sine),
/* harmony export */   "Expo": () => (/* binding */ Expo),
/* harmony export */   "Circ": () => (/* binding */ Circ),
/* harmony export */   "TweenMax": () => (/* binding */ Tween),
/* harmony export */   "TweenLite": () => (/* binding */ Tween),
/* harmony export */   "TimelineMax": () => (/* binding */ Timeline),
/* harmony export */   "TimelineLite": () => (/* binding */ Timeline),
/* harmony export */   "default": () => (/* binding */ gsap),
/* harmony export */   "wrap": () => (/* binding */ wrap),
/* harmony export */   "wrapYoyo": () => (/* binding */ wrapYoyo),
/* harmony export */   "distribute": () => (/* binding */ distribute),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "snap": () => (/* binding */ snap),
/* harmony export */   "normalize": () => (/* binding */ normalize),
/* harmony export */   "getUnit": () => (/* binding */ getUnit),
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "splitColor": () => (/* binding */ splitColor),
/* harmony export */   "toArray": () => (/* binding */ toArray),
/* harmony export */   "selector": () => (/* binding */ selector),
/* harmony export */   "mapRange": () => (/* binding */ mapRange),
/* harmony export */   "pipe": () => (/* binding */ pipe),
/* harmony export */   "unitize": () => (/* binding */ unitize),
/* harmony export */   "interpolate": () => (/* binding */ interpolate),
/* harmony export */   "shuffle": () => (/* binding */ shuffle),
/* harmony export */   "_getProperty": () => (/* binding */ _getProperty),
/* harmony export */   "_numExp": () => (/* binding */ _numExp),
/* harmony export */   "_numWithUnitExp": () => (/* binding */ _numWithUnitExp),
/* harmony export */   "_isString": () => (/* binding */ _isString),
/* harmony export */   "_isUndefined": () => (/* binding */ _isUndefined),
/* harmony export */   "_renderComplexString": () => (/* binding */ _renderComplexString),
/* harmony export */   "_relExp": () => (/* binding */ _relExp),
/* harmony export */   "_setDefaults": () => (/* binding */ _setDefaults),
/* harmony export */   "_removeLinkedListItem": () => (/* binding */ _removeLinkedListItem),
/* harmony export */   "_forEachName": () => (/* binding */ _forEachName),
/* harmony export */   "_sortPropTweensByPriority": () => (/* binding */ _sortPropTweensByPriority),
/* harmony export */   "_colorStringFilter": () => (/* binding */ _colorStringFilter),
/* harmony export */   "_replaceRandom": () => (/* binding */ _replaceRandom),
/* harmony export */   "_checkPlugin": () => (/* binding */ _checkPlugin),
/* harmony export */   "_plugins": () => (/* binding */ _plugins),
/* harmony export */   "_ticker": () => (/* binding */ _ticker),
/* harmony export */   "_config": () => (/* binding */ _config),
/* harmony export */   "_roundModifier": () => (/* binding */ _roundModifier),
/* harmony export */   "_round": () => (/* binding */ _round),
/* harmony export */   "_missingPlugin": () => (/* binding */ _missingPlugin),
/* harmony export */   "_getSetter": () => (/* binding */ _getSetter),
/* harmony export */   "_getCache": () => (/* binding */ _getCache),
/* harmony export */   "_colorExp": () => (/* binding */ _colorExp)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
/*!
 * GSAP 3.8.0
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */


var _config = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
},
    _defaults = {
  duration: .5,
  overwrite: false,
  delay: 0
},
    _suppressOverwrites,
    _bigNum = 1e8,
    _tinyNum = 1 / _bigNum,
    _2PI = Math.PI * 2,
    _HALF_PI = _2PI / 4,
    _gsID = 0,
    _sqrt = Math.sqrt,
    _cos = Math.cos,
    _sin = Math.sin,
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isUndefined = function _isUndefined(value) {
  return typeof value === "undefined";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _isNotFalse = function _isNotFalse(value) {
  return value !== false;
},
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _isFuncOrString = function _isFuncOrString(value) {
  return _isFunction(value) || _isString(value);
},
    _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
    // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
_isArray = Array.isArray,
    _strictNumExp = /(?:-?\.?\d|\.)+/gi,
    //only numbers (including negatives and decimals) but NOT relative values.
_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
_relExp = /[+-]=-?[.\d]+/,
    _delimitedValueExp = /[^,'"\[\]\s]+/gi,
    // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
_unitExp = /[\d.+\-=]+(?:e[-+]\d*)*/i,
    _globalTimeline,
    _win,
    _coreInitted,
    _doc,
    _globals = {},
    _installScope = {},
    _coreReady,
    _install = function _install(scope) {
  return (_installScope = _merge(scope, _globals)) && gsap;
},
    _missingPlugin = function _missingPlugin(property, value) {
  return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
},
    _warn = function _warn(message, suppress) {
  return !suppress && console.warn(message);
},
    _addGlobal = function _addGlobal(name, obj) {
  return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
},
    _emptyFunc = function _emptyFunc() {
  return 0;
},
    _reservedProps = {},
    _lazyTweens = [],
    _lazyLookup = {},
    _lastRenderedFrame,
    _plugins = {},
    _effects = {},
    _nextGCFrame = 30,
    _harnessPlugins = [],
    _callbackNames = "",
    _harness = function _harness(targets) {
  var target = targets[0],
      harnessPlugin,
      i;
  _isObject(target) || _isFunction(target) || (targets = [targets]);

  if (!(harnessPlugin = (target._gsap || {}).harness)) {
    // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
    i = _harnessPlugins.length;

    while (i-- && !_harnessPlugins[i].targetTest(target)) {}

    harnessPlugin = _harnessPlugins[i];
  }

  i = targets.length;

  while (i--) {
    targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
  }

  return targets;
},
    _getCache = function _getCache(target) {
  return target._gsap || _harness(toArray(target))[0]._gsap;
},
    _getProperty = function _getProperty(target, property, v) {
  return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
},
    _forEachName = function _forEachName(names, func) {
  return (names = names.split(",")).forEach(func) || names;
},
    //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
_round = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _roundPrecise = function _roundPrecise(value) {
  return Math.round(value * 10000000) / 10000000 || 0;
},
    // increased precision mostly for timing values.
_arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
  //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
  var l = toFind.length,
      i = 0;

  for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

  return i < l;
},
    _lazyRender = function _lazyRender() {
  var l = _lazyTweens.length,
      a = _lazyTweens.slice(0),
      i,
      tween;

  _lazyLookup = {};
  _lazyTweens.length = 0;

  for (i = 0; i < l; i++) {
    tween = a[i];
    tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
  }
},
    _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
  _lazyTweens.length && _lazyRender();
  animation.render(time, suppressEvents, force);
  _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
},
    _numericIfPossible = function _numericIfPossible(value) {
  var n = parseFloat(value);
  return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
},
    _passThrough = function _passThrough(p) {
  return p;
},
    _setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _setKeyframeDefaults = function _setKeyframeDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || p === "duration" || p === "ease" || (obj[p] = defaults[p]);
  }
},
    _merge = function _merge(base, toMerge) {
  for (var p in toMerge) {
    base[p] = toMerge[p];
  }

  return base;
},
    _mergeDeep = function _mergeDeep(base, toMerge) {
  for (var p in toMerge) {
    p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
  }

  return base;
},
    _copyExcluding = function _copyExcluding(obj, excluding) {
  var copy = {},
      p;

  for (p in obj) {
    p in excluding || (copy[p] = obj[p]);
  }

  return copy;
},
    _inheritDefaults = function _inheritDefaults(vars) {
  var parent = vars.parent || _globalTimeline,
      func = vars.keyframes ? _setKeyframeDefaults : _setDefaults;

  if (_isNotFalse(vars.inherit)) {
    while (parent) {
      func(vars, parent.vars.defaults);
      parent = parent.parent || parent._dp;
    }
  }

  return vars;
},
    _arraysMatch = function _arraysMatch(a1, a2) {
  var i = a1.length,
      match = i === a2.length;

  while (match && i-- && a1[i] === a2[i]) {}

  return i < 0;
},
    _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = parent[lastProp],
      t;

  if (sortBy) {
    t = child[sortBy];

    while (prev && prev[sortBy] > t) {
      prev = prev._prev;
    }
  }

  if (prev) {
    child._next = prev._next;
    prev._next = child;
  } else {
    child._next = parent[firstProp];
    parent[firstProp] = child;
  }

  if (child._next) {
    child._next._prev = child;
  } else {
    parent[lastProp] = child;
  }

  child._prev = prev;
  child.parent = child._dp = parent;
  return child;
},
    _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = child._prev,
      next = child._next;

  if (prev) {
    prev._next = next;
  } else if (parent[firstProp] === child) {
    parent[firstProp] = next;
  }

  if (next) {
    next._prev = prev;
  } else if (parent[lastProp] === child) {
    parent[lastProp] = prev;
  }

  child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
},
    _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
  child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
  child._act = 0;
},
    _uncache = function _uncache(animation, child) {
  if (animation && (!child || child._end > animation._dur || child._start < 0)) {
    // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
    var a = animation;

    while (a) {
      a._dirty = 1;
      a = a.parent;
    }
  }

  return animation;
},
    _recacheAncestors = function _recacheAncestors(animation) {
  var parent = animation.parent;

  while (parent && parent.parent) {
    //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
    parent._dirty = 1;
    parent.totalDuration();
    parent = parent.parent;
  }

  return animation;
},
    _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
  return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
},
    _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
  return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
},
    // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
_animationCycle = function _animationCycle(tTime, cycleDuration) {
  var whole = Math.floor(tTime /= cycleDuration);
  return tTime && whole === tTime ? whole - 1 : whole;
},
    _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
  return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
},
    _setEnd = function _setEnd(animation) {
  return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
},
    _alignPlayhead = function _alignPlayhead(animation, totalTime) {
  // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
  var parent = animation._dp;

  if (parent && parent.smoothChildTiming && animation._ts) {
    animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

    _setEnd(animation);

    parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
  }

  return animation;
},

/*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/
_postAddChecks = function _postAddChecks(timeline, child) {
  var t;

  if (child._time || child._initted && !child._dur) {
    //in case, for example, the _start is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
    t = _parentToChildTotalTime(timeline.rawTime(), child);

    if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
      child.render(t, true);
    }
  } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.


  if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
    //in case any of the ancestors had completed but should now be enabled...
    if (timeline._dur < timeline.duration()) {
      t = timeline;

      while (t._dp) {
        t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.

        t = t._dp;
      }
    }

    timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
  }
},
    _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
  child.parent && _removeFromParent(child);
  child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
  child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

  _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

  _isFromOrFromStart(child) || (timeline._recent = child);
  skipChecks || _postAddChecks(timeline, child);
  return timeline;
},
    _scrollTrigger = function _scrollTrigger(animation, trigger) {
  return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
},
    _attemptInitTween = function _attemptInitTween(tween, totalTime, force, suppressEvents) {
  _initTween(tween, totalTime);

  if (!tween._initted) {
    return 1;
  }

  if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
    _lazyTweens.push(tween);

    tween._lazy = [totalTime, suppressEvents];
    return 1;
  }
},
    _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
  var parent = _ref.parent;
  return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
},
    // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
  var data = _ref2.data;
  return data === "isFromStart" || data === "isStart";
},
    _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
  var prevRatio = tween.ratio,
      ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1,
      // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
  repeatDelay = tween._rDelay,
      tTime = 0,
      pt,
      iteration,
      prevIteration;

  if (repeatDelay && tween._repeat) {
    // in case there's a zero-duration tween that has a repeat with a repeatDelay
    tTime = _clamp(0, tween._tDur, totalTime);
    iteration = _animationCycle(tTime, repeatDelay);
    prevIteration = _animationCycle(tween._tTime, repeatDelay);
    tween._yoyo && iteration & 1 && (ratio = 1 - ratio);

    if (iteration !== prevIteration) {
      prevRatio = 1 - ratio;
      tween.vars.repeatRefresh && tween._initted && tween.invalidate();
    }
  }

  if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
    if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) {
      // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
      return;
    }

    prevIteration = tween._zTime;
    tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

    suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.

    tween.ratio = ratio;
    tween._from && (ratio = 1 - ratio);
    tween._time = 0;
    tween._tTime = tTime;
    pt = tween._pt;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }

    tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
    tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
    tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

    if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
      ratio && _removeFromParent(tween, 1);

      if (!suppressEvents) {
        _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

        tween._prom && tween._prom();
      }
    }
  } else if (!tween._zTime) {
    tween._zTime = totalTime;
  }
},
    _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
  var child;

  if (time > prevTime) {
    child = animation._first;

    while (child && child._start <= time) {
      if (!child._dur && child.data === "isPause" && child._start > prevTime) {
        return child;
      }

      child = child._next;
    }
  } else {
    child = animation._last;

    while (child && child._start >= time) {
      if (!child._dur && child.data === "isPause" && child._start < prevTime) {
        return child;
      }

      child = child._prev;
    }
  }
},
    _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
  var repeat = animation._repeat,
      dur = _roundPrecise(duration) || 0,
      totalProgress = animation._tTime / animation._tDur;
  totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
  animation._dur = dur;
  animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
  totalProgress && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
  skipUncache || _uncache(animation.parent, animation);
  return animation;
},
    _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
  return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
},
    _zeroPosition = {
  _start: 0,
  endTime: _emptyFunc,
  totalDuration: _emptyFunc
},
    _parsePosition = function _parsePosition(animation, position, percentAnimation) {
  var labels = animation.labels,
      recent = animation._recent || _zeroPosition,
      clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
      //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
  i,
      offset,
      isPercent;

  if (_isString(position) && (isNaN(position) || position in labels)) {
    //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
    offset = position.charAt(0);
    isPercent = position.substr(-1) === "%";
    i = position.indexOf("=");

    if (offset === "<" || offset === ">") {
      i >= 0 && (position = position.replace(/=/, ""));
      return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
    }

    if (i < 0) {
      position in labels || (labels[position] = clippedDuration);
      return labels[position];
    }

    offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));

    if (isPercent && percentAnimation) {
      offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
    }

    return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
  }

  return position == null ? clippedDuration : +position;
},
    _createTweenType = function _createTweenType(type, params, timeline) {
  var isLegacy = _isNumber(params[1]),
      varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
      vars = params[varsIndex],
      irVars,
      parent;

  isLegacy && (vars.duration = params[1]);
  vars.parent = timeline;

  if (type) {
    irVars = vars;
    parent = timeline;

    while (parent && !("immediateRender" in irVars)) {
      // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
      irVars = parent.vars.defaults || {};
      parent = _isNotFalse(parent.vars.inherit) && parent.parent;
    }

    vars.immediateRender = _isNotFalse(irVars.immediateRender);
    type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
  }

  return new Tween(params[0], vars, params[varsIndex + 1]);
},
    _conditionalReturn = function _conditionalReturn(value, func) {
  return value || value === 0 ? func(value) : func;
},
    _clamp = function _clamp(min, max, value) {
  return value < min ? min : value > max ? max : value;
},
    getUnit = function getUnit(value) {
  if (typeof value !== "string") {
    return "";
  }

  var v = _unitExp.exec(value);

  return v ? value.substr(v.index + v[0].length) : "";
},
    // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
clamp = function clamp(min, max, value) {
  return _conditionalReturn(value, function (v) {
    return _clamp(min, max, v);
  });
},
    _slice = [].slice,
    _isArrayLike = function _isArrayLike(value, nonEmpty) {
  return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
},
    _flatten = function _flatten(ar, leaveStrings, accumulator) {
  if (accumulator === void 0) {
    accumulator = [];
  }

  return ar.forEach(function (value) {
    var _accumulator;

    return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
  }) || accumulator;
},
    //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
toArray = function toArray(value, scope, leaveStrings) {
  return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
},
    selector = function selector(value) {
  value = toArray(value)[0] || _warn("Invalid scope") || {};
  return function (v) {
    var el = value.current || value.nativeElement || value;
    return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
  };
},
    shuffle = function shuffle(a) {
  return a.sort(function () {
    return .5 - Math.random();
  });
},
    // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
distribute = function distribute(v) {
  if (_isFunction(v)) {
    return v;
  }

  var vars = _isObject(v) ? v : {
    each: v
  },
      //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
  ease = _parseEase(vars.ease),
      from = vars.from || 0,
      base = parseFloat(vars.base) || 0,
      cache = {},
      isDecimal = from > 0 && from < 1,
      ratios = isNaN(from) || isDecimal,
      axis = vars.axis,
      ratioX = from,
      ratioY = from;

  if (_isString(from)) {
    ratioX = ratioY = {
      center: .5,
      edges: .5,
      end: 1
    }[from] || 0;
  } else if (!isDecimal && ratios) {
    ratioX = from[0];
    ratioY = from[1];
  }

  return function (i, target, a) {
    var l = (a || vars).length,
        distances = cache[l],
        originX,
        originY,
        x,
        y,
        d,
        j,
        max,
        min,
        wrapAt;

    if (!distances) {
      wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

      if (!wrapAt) {
        max = -_bigNum;

        while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

        wrapAt--;
      }

      distances = cache[l] = [];
      originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
      originY = ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
      max = 0;
      min = _bigNum;

      for (j = 0; j < l; j++) {
        x = j % wrapAt - originX;
        y = originY - (j / wrapAt | 0);
        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
        d > max && (max = d);
        d < min && (min = d);
      }

      from === "random" && shuffle(distances);
      distances.max = max - min;
      distances.min = min;
      distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
      distances.b = l < 0 ? base - l : base;
      distances.u = getUnit(vars.amount || vars.each) || 0; //unit

      ease = ease && l < 0 ? _invertEase(ease) : ease;
    }

    l = (distances[i] - distances.min) / distances.max || 0;
    return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
  };
},
    _roundModifier = function _roundModifier(v) {
  //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
  var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())

  return function (raw) {
    var n = Math.round(parseFloat(raw) / v) * v * p;
    return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
  };
},
    snap = function snap(snapTo, value) {
  var isArray = _isArray(snapTo),
      radius,
      is2D;

  if (!isArray && _isObject(snapTo)) {
    radius = isArray = snapTo.radius || _bigNum;

    if (snapTo.values) {
      snapTo = toArray(snapTo.values);

      if (is2D = !_isNumber(snapTo[0])) {
        radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
      }
    } else {
      snapTo = _roundModifier(snapTo.increment);
    }
  }

  return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
    is2D = snapTo(raw);
    return Math.abs(is2D - raw) <= radius ? is2D : raw;
  } : function (raw) {
    var x = parseFloat(is2D ? raw.x : raw),
        y = parseFloat(is2D ? raw.y : 0),
        min = _bigNum,
        closest = 0,
        i = snapTo.length,
        dx,
        dy;

    while (i--) {
      if (is2D) {
        dx = snapTo[i].x - x;
        dy = snapTo[i].y - y;
        dx = dx * dx + dy * dy;
      } else {
        dx = Math.abs(snapTo[i] - x);
      }

      if (dx < min) {
        min = dx;
        closest = i;
      }
    }

    closest = !radius || min <= radius ? snapTo[closest] : raw;
    return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
  });
},
    random = function random(min, max, roundingIncrement, returnFunction) {
  return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
    return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
  });
},
    pipe = function pipe() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function (value) {
    return functions.reduce(function (v, f) {
      return f(v);
    }, value);
  };
},
    unitize = function unitize(func, unit) {
  return function (value) {
    return func(parseFloat(value)) + (unit || getUnit(value));
  };
},
    normalize = function normalize(min, max, value) {
  return mapRange(min, max, 0, 1, value);
},
    _wrapArray = function _wrapArray(a, wrapper, value) {
  return _conditionalReturn(value, function (index) {
    return a[~~wrapper(index)];
  });
},
    wrap = function wrap(min, max, value) {
  // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
  var range = max - min;
  return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
    return (range + (value - min) % range) % range + min;
  });
},
    wrapYoyo = function wrapYoyo(min, max, value) {
  var range = max - min,
      total = range * 2;
  return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
    value = (total + (value - min) % total) % total || 0;
    return min + (value > range ? total - value : value);
  });
},
    _replaceRandom = function _replaceRandom(value) {
  //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
  var prev = 0,
      s = "",
      i,
      nums,
      end,
      isArray;

  while (~(i = value.indexOf("random(", prev))) {
    end = value.indexOf(")", i);
    isArray = value.charAt(i + 7) === "[";
    nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
    s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
    prev = end + 1;
  }

  return s + value.substr(prev, value.length - prev);
},
    mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
  var inRange = inMax - inMin,
      outRange = outMax - outMin;
  return _conditionalReturn(value, function (value) {
    return outMin + ((value - inMin) / inRange * outRange || 0);
  });
},
    interpolate = function interpolate(start, end, progress, mutate) {
  var func = isNaN(start + end) ? 0 : function (p) {
    return (1 - p) * start + p * end;
  };

  if (!func) {
    var isString = _isString(start),
        master = {},
        p,
        i,
        interpolators,
        l,
        il;

    progress === true && (mutate = 1) && (progress = null);

    if (isString) {
      start = {
        p: start
      };
      end = {
        p: end
      };
    } else if (_isArray(start) && !_isArray(end)) {
      interpolators = [];
      l = start.length;
      il = l - 2;

      for (i = 1; i < l; i++) {
        interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
      }

      l--;

      func = function func(p) {
        p *= l;
        var i = Math.min(il, ~~p);
        return interpolators[i](p - i);
      };

      progress = end;
    } else if (!mutate) {
      start = _merge(_isArray(start) ? [] : {}, start);
    }

    if (!interpolators) {
      for (p in end) {
        _addPropTween.call(master, start, p, "get", end[p]);
      }

      func = function func(p) {
        return _renderPropTweens(p, master) || (isString ? start.p : start);
      };
    }
  }

  return _conditionalReturn(progress, func);
},
    _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
  //used for nextLabel() and previousLabel()
  var labels = timeline.labels,
      min = _bigNum,
      p,
      distance,
      label;

  for (p in labels) {
    distance = labels[p] - fromTime;

    if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
      label = p;
      min = distance;
    }
  }

  return label;
},
    _callback = function _callback(animation, type, executeLazyFirst) {
  var v = animation.vars,
      callback = v[type],
      params,
      scope;

  if (!callback) {
    return;
  }

  params = v[type + "Params"];
  scope = v.callbackScope || animation;
  executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.

  return params ? callback.apply(scope, params) : callback.call(scope);
},
    _interrupt = function _interrupt(animation) {
  _removeFromParent(animation);

  animation.scrollTrigger && animation.scrollTrigger.kill(false);
  animation.progress() < 1 && _callback(animation, "onInterrupt");
  return animation;
},
    _quickTween,
    _createPlugin = function _createPlugin(config) {
  config = !config.name && config["default"] || config; //UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.

  var name = config.name,
      isFunc = _isFunction(config),
      Plugin = name && !isFunc && config.init ? function () {
    this._props = [];
  } : config,
      //in case someone passes in an object that's not a plugin, like CustomEase
  instanceDefaults = {
    init: _emptyFunc,
    render: _renderPropTweens,
    add: _addPropTween,
    kill: _killPropTweensOf,
    modifier: _addPluginModifier,
    rawVars: 0
  },
      statics = {
    targetTest: 0,
    get: 0,
    getSetter: _getSetter,
    aliases: {},
    register: 0
  };

  _wake();

  if (config !== Plugin) {
    if (_plugins[name]) {
      return;
    }

    _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods


    _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods


    _plugins[Plugin.prop = name] = Plugin;

    if (config.targetTest) {
      _harnessPlugins.push(Plugin);

      _reservedProps[name] = 1;
    }

    name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
  }

  _addGlobal(name, Plugin);

  config.register && config.register(gsap, Plugin, PropTween);
},

/*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */
_255 = 255,
    _colorLookup = {
  aqua: [0, _255, _255],
  lime: [0, _255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, _255],
  navy: [0, 0, 128],
  white: [_255, _255, _255],
  olive: [128, 128, 0],
  yellow: [_255, _255, 0],
  orange: [_255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [_255, 0, 0],
  pink: [_255, 192, 203],
  cyan: [0, _255, _255],
  transparent: [_255, _255, _255, 0]
},
    _hue = function _hue(h, m1, m2) {
  h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
},
    splitColor = function splitColor(v, toHSL, forceAlpha) {
  var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
      r,
      g,
      b,
      h,
      s,
      l,
      max,
      min,
      d,
      wasHSL;

  if (!a) {
    if (v.substr(-1) === ",") {
      //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
      v = v.substr(0, v.length - 1);
    }

    if (_colorLookup[v]) {
      a = _colorLookup[v];
    } else if (v.charAt(0) === "#") {
      if (v.length < 6) {
        //for shorthand like #9F0 or #9F0F (could have alpha)
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
      }

      if (v.length === 9) {
        // hex with alpha, like #fd5e53ff
        a = parseInt(v.substr(1, 6), 16);
        return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
      }

      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & _255, v & _255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_strictNumExp);

      if (!toHSL) {
        h = +a[0] % 360 / 360;
        s = +a[1] / 100;
        l = +a[2] / 100;
        g = l <= .5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;
        a.length > 3 && (a[3] *= 1); //cast as number

        a[0] = _hue(h + 1 / 3, r, g);
        a[1] = _hue(h, r, g);
        a[2] = _hue(h - 1 / 3, r, g);
      } else if (~v.indexOf("=")) {
        //if relative values are found, just return the raw strings with the relative prefixes in place.
        a = v.match(_numExp);
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      }
    } else {
      a = v.match(_strictNumExp) || _colorLookup.transparent;
    }

    a = a.map(Number);
  }

  if (toHSL && !wasHSL) {
    r = a[0] / _255;
    g = a[1] / _255;
    b = a[2] / _255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }

    a[0] = ~~(h + .5);
    a[1] = ~~(s * 100 + .5);
    a[2] = ~~(l * 100 + .5);
  }

  forceAlpha && a.length < 4 && (a[3] = 1);
  return a;
},
    _colorOrderData = function _colorOrderData(v) {
  // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
  var values = [],
      c = [],
      i = -1;
  v.split(_colorExp).forEach(function (v) {
    var a = v.match(_numWithUnitExp) || [];
    values.push.apply(values, a);
    c.push(i += a.length + 1);
  });
  values.c = c;
  return values;
},
    _formatColors = function _formatColors(s, toHSL, orderMatchData) {
  var result = "",
      colors = (s + result).match(_colorExp),
      type = toHSL ? "hsla(" : "rgba(",
      i = 0,
      c,
      shell,
      d,
      l;

  if (!colors) {
    return s;
  }

  colors = colors.map(function (color) {
    return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
  });

  if (orderMatchData) {
    d = _colorOrderData(s);
    c = orderMatchData.c;

    if (c.join(result) !== d.c.join(result)) {
      shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
      l = shell.length - 1;

      for (; i < l; i++) {
        result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
      }
    }
  }

  if (!shell) {
    shell = s.split(_colorExp);
    l = shell.length - 1;

    for (; i < l; i++) {
      result += shell[i] + colors[i];
    }
  }

  return result + shell[l];
},
    _colorExp = function () {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
  p;

  for (p in _colorLookup) {
    s += "|" + p + "\\b";
  }

  return new RegExp(s + ")", "gi");
}(),
    _hslExp = /hsl[a]?\(/,
    _colorStringFilter = function _colorStringFilter(a) {
  var combined = a.join(" "),
      toHSL;
  _colorExp.lastIndex = 0;

  if (_colorExp.test(combined)) {
    toHSL = _hslExp.test(combined);
    a[1] = _formatColors(a[1], toHSL);
    a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.

    return true;
  }
},

/*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */
_tickerActive,
    _ticker = function () {
  var _getTime = Date.now,
      _lagThreshold = 500,
      _adjustedLag = 33,
      _startTime = _getTime(),
      _lastUpdate = _startTime,
      _gap = 1000 / 240,
      _nextTime = _gap,
      _listeners = [],
      _id,
      _req,
      _raf,
      _self,
      _delta,
      _i,
      _tick = function _tick(v) {
    var elapsed = _getTime() - _lastUpdate,
        manual = v === true,
        overlap,
        dispatch,
        time,
        frame;

    elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
    _lastUpdate += elapsed;
    time = _lastUpdate - _startTime;
    overlap = time - _nextTime;

    if (overlap > 0 || manual) {
      frame = ++_self.frame;
      _delta = time - _self.time * 1000;
      _self.time = time = time / 1000;
      _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
      dispatch = 1;
    }

    manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.

    if (dispatch) {
      for (_i = 0; _i < _listeners.length; _i++) {
        // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
      }
    }
  };

  _self = {
    time: 0,
    frame: 0,
    tick: function tick() {
      _tick(true);
    },
    deltaRatio: function deltaRatio(fps) {
      return _delta / (1000 / (fps || 60));
    },
    wake: function wake() {
      if (_coreReady) {
        if (!_coreInitted && _windowExists()) {
          _win = _coreInitted = window;
          _doc = _win.document || {};
          _globals.gsap = gsap;
          (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

          _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

          _raf = _win.requestAnimationFrame;
        }

        _id && _self.sleep();

        _req = _raf || function (f) {
          return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
        };

        _tickerActive = 1;

        _tick(2);
      }
    },
    sleep: function sleep() {
      (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
      _tickerActive = 0;
      _req = _emptyFunc;
    },
    lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
      _lagThreshold = threshold || 1 / _tinyNum; //zero should be interpreted as basically unlimited

      _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
    },
    fps: function fps(_fps) {
      _gap = 1000 / (_fps || 240);
      _nextTime = _self.time * 1000 + _gap;
    },
    add: function add(callback) {
      _listeners.indexOf(callback) < 0 && _listeners.push(callback);

      _wake();
    },
    remove: function remove(callback) {
      var i;
      ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
    },
    _listeners: _listeners
  };
  return _self;
}(),
    _wake = function _wake() {
  return !_tickerActive && _ticker.wake();
},
    //also ensures the core classes are initialized.

/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/
_easeMap = {},
    _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
    _quotesExp = /["']/g,
    _parseObjectInString = function _parseObjectInString(value) {
  //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
  var obj = {},
      split = value.substr(1, value.length - 3).split(":"),
      key = split[0],
      i = 1,
      l = split.length,
      index,
      val,
      parsedVal;

  for (; i < l; i++) {
    val = split[i];
    index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
    parsedVal = val.substr(0, index);
    obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
    key = val.substr(index + 1).trim();
  }

  return obj;
},
    _valueInParentheses = function _valueInParentheses(value) {
  var open = value.indexOf("(") + 1,
      close = value.indexOf(")"),
      nested = value.indexOf("(", open);
  return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
},
    _configEaseFromString = function _configEaseFromString(name) {
  //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
  var split = (name + "").split("("),
      ease = _easeMap[split[0]];
  return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
},
    _invertEase = function _invertEase(ease) {
  return function (p) {
    return 1 - ease(1 - p);
  };
},
    // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
_propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
  var child = timeline._first,
      ease;

  while (child) {
    if (child instanceof Timeline) {
      _propagateYoyoEase(child, isYoyo);
    } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
      if (child.timeline) {
        _propagateYoyoEase(child.timeline, isYoyo);
      } else {
        ease = child._ease;
        child._ease = child._yEase;
        child._yEase = ease;
        child._yoyo = isYoyo;
      }
    }

    child = child._next;
  }
},
    _parseEase = function _parseEase(ease, defaultEase) {
  return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
},
    _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
  if (easeOut === void 0) {
    easeOut = function easeOut(p) {
      return 1 - easeIn(1 - p);
    };
  }

  if (easeInOut === void 0) {
    easeInOut = function easeInOut(p) {
      return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
  }

  var ease = {
    easeIn: easeIn,
    easeOut: easeOut,
    easeInOut: easeInOut
  },
      lowercaseName;

  _forEachName(names, function (name) {
    _easeMap[name] = _globals[name] = ease;
    _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

    for (var p in ease) {
      _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    }
  });

  return ease;
},
    _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
  return function (p) {
    return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
  };
},
    _configElastic = function _configElastic(type, amplitude, period) {
  var p1 = amplitude >= 1 ? amplitude : 1,
      //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
  p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
      p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
      easeOut = function easeOut(p) {
    return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  p2 = _2PI / p2; //precalculate to optimize

  ease.config = function (amplitude, period) {
    return _configElastic(type, amplitude, period);
  };

  return ease;
},
    _configBack = function _configBack(type, overshoot) {
  if (overshoot === void 0) {
    overshoot = 1.70158;
  }

  var easeOut = function easeOut(p) {
    return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  ease.config = function (overshoot) {
    return _configBack(type, overshoot);
  };

  return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };


_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
  var power = i < 5 ? i + 1 : i;

  _insertEase(name + ",Power" + (power - 1), i ? function (p) {
    return Math.pow(p, power);
  } : function (p) {
    return p;
  }, function (p) {
    return 1 - Math.pow(1 - p, power);
  }, function (p) {
    return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});

_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

(function (n, c) {
  var n1 = 1 / c,
      n2 = 2 * n1,
      n3 = 2.5 * n1,
      easeOut = function easeOut(p) {
    return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
  };

  _insertEase("Bounce", function (p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);

_insertEase("Expo", function (p) {
  return p ? Math.pow(2, 10 * (p - 1)) : 0;
});

_insertEase("Circ", function (p) {
  return -(_sqrt(1 - p * p) - 1);
});

_insertEase("Sine", function (p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});

_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function config(steps, immediateStart) {
    if (steps === void 0) {
      steps = 1;
    }

    var p1 = 1 / steps,
        p2 = steps + (immediateStart ? 0 : 1),
        p3 = immediateStart ? 1 : 0,
        max = 1 - _tinyNum;
    return function (p) {
      return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
    };
  }
};
_defaults.ease = _easeMap["quad.out"];

_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
  return _callbackNames += name + "," + name + "Params,";
});
/*
 * --------------------------------------------------------------------------------------
 * CACHE
 * --------------------------------------------------------------------------------------
 */


var GSCache = function GSCache(target, harness) {
  this.id = _gsID++;
  target._gsap = this;
  this.target = target;
  this.harness = harness;
  this.get = harness ? harness.get : _getProperty;
  this.set = harness ? harness.getSetter : _getSetter;
};
/*
 * --------------------------------------------------------------------------------------
 * ANIMATION
 * --------------------------------------------------------------------------------------
 */

var Animation = /*#__PURE__*/function () {
  function Animation(vars) {
    this.vars = vars;
    this._delay = +vars.delay || 0;

    if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
      // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
      this._rDelay = vars.repeatDelay || 0;
      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
    }

    this._ts = 1;

    _setDuration(this, +vars.duration, 1, 1);

    this.data = vars.data;
    _tickerActive || _ticker.wake();
  }

  var _proto = Animation.prototype;

  _proto.delay = function delay(value) {
    if (value || value === 0) {
      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
      this._delay = value;
      return this;
    }

    return this._delay;
  };

  _proto.duration = function duration(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  };

  _proto.totalDuration = function totalDuration(value) {
    if (!arguments.length) {
      return this._tDur;
    }

    this._dirty = 0;
    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
  };

  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
    _wake();

    if (!arguments.length) {
      return this._tTime;
    }

    var parent = this._dp;

    if (parent && parent.smoothChildTiming && this._ts) {
      _alignPlayhead(this, _totalTime);

      !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
      //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.

      while (parent && parent.parent) {
        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
          parent.totalTime(parent._tTime, true);
        }

        parent = parent.parent;
      }

      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
        //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
        _addToTimeline(this._dp, this, this._start - this._delay);
      }
    }

    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
      // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
      this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
      //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
      //   this._lock = 1;

      _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
      //}

    }

    return this;
  };

  _proto.time = function time(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
  };

  _proto.totalProgress = function totalProgress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  };

  _proto.progress = function progress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  };

  _proto.iteration = function iteration(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;

    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  } // potential future addition:
  // isPlayingBackwards() {
  // 	let animation = this,
  // 		orientation = 1; // 1 = forward, -1 = backward
  // 	while (animation) {
  // 		orientation *= animation.reversed() || (animation.repeat() && !(animation.iteration() & 1)) ? -1 : 1;
  // 		animation = animation.parent;
  // 	}
  // 	return orientation < 0;
  // }
  ;

  _proto.timeScale = function timeScale(value) {
    if (!arguments.length) {
      return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
    }

    if (this._rts === value) {
      return this;
    }

    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
    // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
    //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
    // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.

    this._rts = +value || 0;
    this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.

    _recacheAncestors(this.totalTime(_clamp(-this._delay, this._tDur, tTime), true));

    _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.


    return this;
  };

  _proto.paused = function paused(value) {
    if (!arguments.length) {
      return this._ps;
    }

    if (this._ps !== value) {
      this._ps = value;

      if (value) {
        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.

        this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
      } else {
        _wake();

        this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.

        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
      }
    }

    return this;
  };

  _proto.startTime = function startTime(value) {
    if (arguments.length) {
      this._start = value;
      var parent = this.parent || this._dp;
      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
      return this;
    }

    return this._start;
  };

  _proto.endTime = function endTime(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  };

  _proto.rawTime = function rawTime(wrapRepeats) {
    var parent = this.parent || this._dp; // _dp = detached parent

    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
  };

  _proto.globalTime = function globalTime(rawTime) {
    var animation = this,
        time = arguments.length ? rawTime : animation.rawTime();

    while (animation) {
      time = animation._start + time / (animation._ts || 1);
      animation = animation._dp;
    }

    return time;
  };

  _proto.repeat = function repeat(value) {
    if (arguments.length) {
      this._repeat = value === Infinity ? -2 : value;
      return _onUpdateTotalDuration(this);
    }

    return this._repeat === -2 ? Infinity : this._repeat;
  };

  _proto.repeatDelay = function repeatDelay(value) {
    if (arguments.length) {
      var time = this._time;
      this._rDelay = value;

      _onUpdateTotalDuration(this);

      return time ? this.time(time) : this;
    }

    return this._rDelay;
  };

  _proto.yoyo = function yoyo(value) {
    if (arguments.length) {
      this._yoyo = value;
      return this;
    }

    return this._yoyo;
  };

  _proto.seek = function seek(position, suppressEvents) {
    return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
  };

  _proto.restart = function restart(includeDelay, suppressEvents) {
    return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
  };

  _proto.play = function play(from, suppressEvents) {
    from != null && this.seek(from, suppressEvents);
    return this.reversed(false).paused(false);
  };

  _proto.reverse = function reverse(from, suppressEvents) {
    from != null && this.seek(from || this.totalDuration(), suppressEvents);
    return this.reversed(true).paused(false);
  };

  _proto.pause = function pause(atTime, suppressEvents) {
    atTime != null && this.seek(atTime, suppressEvents);
    return this.paused(true);
  };

  _proto.resume = function resume() {
    return this.paused(false);
  };

  _proto.reversed = function reversed(value) {
    if (arguments.length) {
      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.

      return this;
    }

    return this._rts < 0;
  };

  _proto.invalidate = function invalidate() {
    this._initted = this._act = 0;
    this._zTime = -_tinyNum;
    return this;
  };

  _proto.isActive = function isActive() {
    var parent = this.parent || this._dp,
        start = this._start,
        rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
  };

  _proto.eventCallback = function eventCallback(type, callback, params) {
    var vars = this.vars;

    if (arguments.length > 1) {
      if (!callback) {
        delete vars[type];
      } else {
        vars[type] = callback;
        params && (vars[type + "Params"] = params);
        type === "onUpdate" && (this._onUpdate = callback);
      }

      return this;
    }

    return vars[type];
  };

  _proto.then = function then(onFulfilled) {
    var self = this;
    return new Promise(function (resolve) {
      var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
          _resolve = function _resolve() {
        var _then = self.then;
        self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)

        _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
        resolve(f);
        self.then = _then;
      };

      if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
        _resolve();
      } else {
        self._prom = _resolve;
      }
    });
  };

  _proto.kill = function kill() {
    _interrupt(this);
  };

  return Animation;
}();

_setDefaults(Animation.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -_tinyNum,
  _prom: 0,
  _ps: false,
  _rts: 1
});
/*
 * -------------------------------------------------
 * TIMELINE
 * -------------------------------------------------
 */


var Timeline = /*#__PURE__*/function (_Animation) {
  _inheritsLoose(Timeline, _Animation);

  function Timeline(vars, position) {
    var _this;

    if (vars === void 0) {
      vars = {};
    }

    _this = _Animation.call(this, vars) || this;
    _this.labels = {};
    _this.smoothChildTiming = !!vars.smoothChildTiming;
    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
    _this._sort = _isNotFalse(vars.sortChildren);
    _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
    vars.reversed && _this.reverse();
    vars.paused && _this.paused(true);
    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
    return _this;
  }

  var _proto2 = Timeline.prototype;

  _proto2.to = function to(targets, vars, position) {
    _createTweenType(0, arguments, this);

    return this;
  };

  _proto2.from = function from(targets, vars, position) {
    _createTweenType(1, arguments, this);

    return this;
  };

  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
    _createTweenType(2, arguments, this);

    return this;
  };

  _proto2.set = function set(targets, vars, position) {
    vars.duration = 0;
    vars.parent = this;
    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
    vars.immediateRender = !!vars.immediateRender;
    new Tween(targets, vars, _parsePosition(this, position), 1);
    return this;
  };

  _proto2.call = function call(callback, params, position) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
  } //ONLY for backward compatibility! Maybe delete?
  ;

  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition(this, position));
    return this;
  };

  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._dirty ? this.totalDuration() : this._tDur,
        dur = this._dur,
        tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
        // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
    crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
        time,
        child,
        next,
        iteration,
        cycleDuration,
        prevPaused,
        pauseTween,
        timeScale,
        prevStart,
        prevIteration,
        yoyo,
        isYoyo;
    this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);

    if (tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur) {
        //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
        tTime += this._time - prevTime;
        totalTime += this._time - prevTime;
      }

      time = tTime;
      prevStart = this._start;
      timeScale = this._ts;
      prevPaused = !timeScale;

      if (crossingStart) {
        dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

        (totalTime || !suppressEvents) && (this._zTime = totalTime);
      }

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        yoyo = this._yoyo;
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);
        !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://greensock.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005

        if (yoyo && iteration & 1) {
          time = dur - time;
          isYoyo = 1;
        }
        /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */


        if (iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1,
              doesWrap = rewinding === (yoyo && iteration & 1);
          iteration < prevIteration && (rewinding = !rewinding);
          prevTime = rewinding ? 0 : dur;
          this._lock = 1;
          this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
          this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.

          !suppressEvents && this.parent && _callback(this, "onRepeat");
          this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

          if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
            // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
            return this;
          }

          dur = this._dur; // in case the duration changed in the onRepeat

          tDur = this._tDur;

          if (doesWrap) {
            this._lock = 2;
            prevTime = rewinding ? dur : -0.0001;
            this.render(prevTime, true);
            this.vars.repeatRefresh && !isYoyo && this.invalidate();
          }

          this._lock = 0;

          if (!this._ts && !prevPaused) {
            return this;
          } //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.


          _propagateYoyoEase(this, isYoyo);
        }
      }

      if (this._hasPause && !this._forcing && this._lock < 2) {
        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));

        if (pauseTween) {
          tTime -= time - (time = pauseTween._start);
        }
      }

      this._tTime = tTime;
      this._time = time;
      this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = totalTime;
        prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
      }

      if (!prevTime && time && !suppressEvents) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      if (time >= prevTime && totalTime >= 0) {
        child = this._first;

        while (child) {
          next = child._next;

          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      } else {
        child = this._last;
        var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.

        while (child) {
          next = child._prev;

          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      }

      if (pauseTween && !suppressEvents) {
        this.pause();
        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

        if (this._ts) {
          //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
          this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.

          _setEnd(this);

          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
      if (tTime === tDur && tDur >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
          _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto2.add = function add(child, position) {
    var _this2 = this;

    _isNumber(position) || (position = _parsePosition(this, position, child));

    if (!(child instanceof Animation)) {
      if (_isArray(child)) {
        child.forEach(function (obj) {
          return _this2.add(obj, position);
        });
        return this;
      }

      if (_isString(child)) {
        return this.addLabel(child, position);
      }

      if (_isFunction(child)) {
        child = Tween.delayedCall(0, child);
      } else {
        return this;
      }
    }

    return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
  };

  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
    if (nested === void 0) {
      nested = true;
    }

    if (tweens === void 0) {
      tweens = true;
    }

    if (timelines === void 0) {
      timelines = true;
    }

    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = -_bigNum;
    }

    var a = [],
        child = this._first;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        if (child instanceof Tween) {
          tweens && a.push(child);
        } else {
          timelines && a.push(child);
          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
        }
      }

      child = child._next;
    }

    return a;
  };

  _proto2.getById = function getById(id) {
    var animations = this.getChildren(1, 1, 1),
        i = animations.length;

    while (i--) {
      if (animations[i].vars.id === id) {
        return animations[i];
      }
    }
  };

  _proto2.remove = function remove(child) {
    if (_isString(child)) {
      return this.removeLabel(child);
    }

    if (_isFunction(child)) {
      return this.killTweensOf(child);
    }

    _removeLinkedListItem(this, child);

    if (child === this._recent) {
      this._recent = this._last;
    }

    return _uncache(this);
  };

  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
    if (!arguments.length) {
      return this._tTime;
    }

    this._forcing = 1;

    if (!this._dp && this._ts) {
      //special case for the global timeline (or any other that has no parent or detached parent).
      this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
    }

    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

    this._forcing = 0;
    return this;
  };

  _proto2.addLabel = function addLabel(label, position) {
    this.labels[label] = _parsePosition(this, position);
    return this;
  };

  _proto2.removeLabel = function removeLabel(label) {
    delete this.labels[label];
    return this;
  };

  _proto2.addPause = function addPause(position, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
    t.data = "isPause";
    this._hasPause = 1;
    return _addToTimeline(this, t, _parsePosition(this, position));
  };

  _proto2.removePause = function removePause(position) {
    var child = this._first;
    position = _parsePosition(this, position);

    while (child) {
      if (child._start === position && child.data === "isPause") {
        _removeFromParent(child);
      }

      child = child._next;
    }
  };

  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    var tweens = this.getTweensOf(targets, onlyActive),
        i = tweens.length;

    while (i--) {
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    }

    return this;
  };

  _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
    var a = [],
        parsedTargets = toArray(targets),
        child = this._first,
        isGlobalTime = _isNumber(onlyActive),
        // a number is interpreted as a global time. If the animation spans
    children;

    while (child) {
      if (child instanceof Tween) {
        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
          // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
          a.push(child);
        }
      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
        a.push.apply(a, children);
      }

      child = child._next;
    }

    return a;
  } // potential future feature - targets() on timelines
  // targets() {
  // 	let result = [];
  // 	this.getChildren(true, true, false).forEach(t => result.push(...t.targets()));
  // 	return result.filter((v, i) => result.indexOf(v) === i);
  // }
  ;

  _proto2.tweenTo = function tweenTo(position, vars) {
    vars = vars || {};

    var tl = this,
        endTime = _parsePosition(tl, position),
        _vars = vars,
        startAt = _vars.startAt,
        _onStart = _vars.onStart,
        onStartParams = _vars.onStartParams,
        immediateRender = _vars.immediateRender,
        initted,
        tween = Tween.to(tl, _setDefaults({
      ease: vars.ease || "none",
      lazy: false,
      immediateRender: false,
      time: endTime,
      overwrite: "auto",
      duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
      onStart: function onStart() {
        tl.pause();

        if (!initted) {
          var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
          initted = 1;
        }

        _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
      }
    }, vars));

    return immediateRender ? tween.render(0) : tween;
  };

  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults({
      startAt: {
        time: _parsePosition(this, fromPosition)
      }
    }, vars));
  };

  _proto2.recent = function recent() {
    return this._recent;
  };

  _proto2.nextLabel = function nextLabel(afterTime) {
    if (afterTime === void 0) {
      afterTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, afterTime));
  };

  _proto2.previousLabel = function previousLabel(beforeTime) {
    if (beforeTime === void 0) {
      beforeTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
  };

  _proto2.currentLabel = function currentLabel(value) {
    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
  };

  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = 0;
    }

    var child = this._first,
        labels = this.labels,
        p;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        child._start += amount;
        child._end += amount;
      }

      child = child._next;
    }

    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }

    return _uncache(this);
  };

  _proto2.invalidate = function invalidate() {
    var child = this._first;
    this._lock = 0;

    while (child) {
      child.invalidate();
      child = child._next;
    }

    return _Animation.prototype.invalidate.call(this);
  };

  _proto2.clear = function clear(includeLabels) {
    if (includeLabels === void 0) {
      includeLabels = true;
    }

    var child = this._first,
        next;

    while (child) {
      next = child._next;
      this.remove(child);
      child = next;
    }

    this._dp && (this._time = this._tTime = this._pTime = 0);
    includeLabels && (this.labels = {});
    return _uncache(this);
  };

  _proto2.totalDuration = function totalDuration(value) {
    var max = 0,
        self = this,
        child = self._last,
        prevStart = _bigNum,
        prev,
        start,
        parent;

    if (arguments.length) {
      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
    }

    if (self._dirty) {
      parent = self.parent;

      while (child) {
        prev = child._prev; //record it here in case the tween changes position in the sequence...

        child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.

        start = child._start;

        if (start > prevStart && self._sort && child._ts && !self._lock) {
          //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
          self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().

          _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }

        if (start < 0 && child._ts) {
          //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
          max -= start;

          if (!parent && !self._dp || parent && parent.smoothChildTiming) {
            self._start += start / self._ts;
            self._time -= start;
            self._tTime -= start;
          }

          self.shiftChildren(-start, false, -1e999);
          prevStart = 0;
        }

        child._end > max && child._ts && (max = child._end);
        child = prev;
      }

      _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

      self._dirty = 0;
    }

    return self._tDur;
  };

  Timeline.updateRoot = function updateRoot(time) {
    if (_globalTimeline._ts) {
      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

      _lastRenderedFrame = _ticker.frame;
    }

    if (_ticker.frame >= _nextGCFrame) {
      _nextGCFrame += _config.autoSleep || 120;
      var child = _globalTimeline._first;
      if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
        while (child && !child._ts) {
          child = child._next;
        }

        child || _ticker.sleep();
      }
    }
  };

  return Timeline;
}(Animation);

_setDefaults(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});

var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
  //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
      index = 0,
      matchIndex = 0,
      result,
      startNums,
      color,
      endNum,
      chunk,
      startNum,
      hasRandom,
      a;
  pt.b = start;
  pt.e = end;
  start += ""; //ensure values are strings

  end += "";

  if (hasRandom = ~end.indexOf("random(")) {
    end = _replaceRandom(end);
  }

  if (stringFilter) {
    a = [start, end];
    stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.

    start = a[0];
    end = a[1];
  }

  startNums = start.match(_complexStringNumExp) || [];

  while (result = _complexStringNumExp.exec(end)) {
    endNum = result[0];
    chunk = end.substring(index, result.index);

    if (color) {
      color = (color + 1) % 5;
    } else if (chunk.substr(-5) === "rgba(") {
      color = 1;
    }

    if (endNum !== startNums[matchIndex++]) {
      startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.

      pt._pt = {
        _next: pt._pt,
        p: chunk || matchIndex === 1 ? chunk : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: startNum,
        c: endNum.charAt(1) === "=" ? parseFloat(endNum.substr(2)) * (endNum.charAt(0) === "-" ? -1 : 1) : parseFloat(endNum) - startNum,
        m: color && color < 4 ? Math.round : 0
      };
      index = _complexStringNumExp.lastIndex;
    }
  }

  pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)

  pt.fp = funcParam;

  if (_relExp.test(end) || hasRandom) {
    pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
  }

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
  _isFunction(end) && (end = end(index || 0, target, targets));
  var currentValue = target[prop],
      parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
      setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
      pt;

  if (_isString(end)) {
    if (~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }

    if (end.charAt(1) === "=") {
      pt = parseFloat(parsedStart) + parseFloat(end.substr(2)) * (end.charAt(0) === "-" ? -1 : 1) + (getUnit(parsedStart) || 0);

      if (pt || pt === 0) {
        // to avoid isNaN, like if someone passes in a value like "!= whatever"
        end = pt;
      }
    }
  }

  if (parsedStart !== end) {
    if (!isNaN(parsedStart * end) && end !== "") {
      // fun fact: any number multiplied by "" is evaluated as the number 0!
      pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
      funcParam && (pt.fp = funcParam);
      modifier && pt.modifier(modifier, this, target);
      return this._pt = pt;
    }

    !currentValue && !(prop in target) && _missingPlugin(prop, end);
    return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
  }
},
    //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
_processVars = function _processVars(vars, index, target, targets, tween) {
  _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

  if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
    return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
  }

  var copy = {},
      p;

  for (p in vars) {
    copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
  }

  return copy;
},
    _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
  var plugin, pt, ptLookup, i;

  if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
    tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

    if (tween !== _quickTween) {
      ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.

      i = plugin._props.length;

      while (i--) {
        ptLookup[plugin._props[i]] = pt;
      }
    }
  }

  return plugin;
},
    _overwritingTween,
    //store a reference temporarily so we can avoid overwriting itself.
_initTween = function _initTween(tween, time) {
  var vars = tween.vars,
      ease = vars.ease,
      startAt = vars.startAt,
      immediateRender = vars.immediateRender,
      lazy = vars.lazy,
      onUpdate = vars.onUpdate,
      onUpdateParams = vars.onUpdateParams,
      callbackScope = vars.callbackScope,
      runBackwards = vars.runBackwards,
      yoyoEase = vars.yoyoEase,
      keyframes = vars.keyframes,
      autoRevert = vars.autoRevert,
      dur = tween._dur,
      prevStartAt = tween._startAt,
      targets = tween._targets,
      parent = tween.parent,
      fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets,
      autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
      tl = tween.timeline,
      cleanVars,
      i,
      p,
      pt,
      target,
      hasPriority,
      gsData,
      harness,
      plugin,
      ptLookup,
      index,
      harnessVars,
      overwritten;
  tl && (!keyframes || !ease) && (ease = "none");
  tween._ease = _parseEase(ease, _defaults.ease);
  tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

  if (yoyoEase && tween._yoyo && !tween._repeat) {
    //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
    yoyoEase = tween._yEase;
    tween._yEase = tween._ease;
    tween._ease = yoyoEase;
  }

  tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.

  if (!tl) {
    //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
    harness = targets[0] ? _getCache(targets[0]).harness : 0;
    harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.

    cleanVars = _copyExcluding(vars, _reservedProps);
    prevStartAt && prevStartAt.render(-1, true).kill();

    if (startAt) {
      _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
        data: "isStart",
        overwrite: false,
        parent: parent,
        immediateRender: true,
        lazy: _isNotFalse(lazy),
        startAt: null,
        delay: 0,
        onUpdate: onUpdate,
        onUpdateParams: onUpdateParams,
        callbackScope: callbackScope,
        stagger: 0
      }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);


      time < 0 && !immediateRender && !autoRevert && tween._startAt.render(-1, true); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.

      if (immediateRender) {
        time > 0 && !autoRevert && (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.

        if (dur && time <= 0) {
          time && (tween._zTime = time);
          return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        } // if (time > 0) {
        // 	autoRevert || (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.
        // } else if (dur && !(time < 0 && prevStartAt)) {
        // 	time && (tween._zTime = time);
        // 	return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        // }

      } else if (autoRevert === false) {
        tween._startAt = 0;
      }
    } else if (runBackwards && dur) {
      //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
      if (prevStartAt) {
        !autoRevert && (tween._startAt = 0);
      } else {
        time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0

        p = _setDefaults({
          overwrite: false,
          data: "isFromStart",
          //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
          lazy: immediateRender && _isNotFalse(lazy),
          immediateRender: immediateRender,
          //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
          stagger: 0,
          parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})

        }, cleanVars);
        harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})

        _removeFromParent(tween._startAt = Tween.set(targets, p));

        time < 0 && tween._startAt.render(-1, true); // rare edge case, like if a render is forced in the negative direction of a non-initted from() tween.

        if (!immediateRender) {
          _initTween(tween._startAt, _tinyNum); //ensures that the initial values are recorded

        } else if (!time) {
          return;
        }
      }
    }

    tween._pt = 0;
    lazy = dur && _isNotFalse(lazy) || lazy && !dur;

    for (i = 0; i < targets.length; i++) {
      target = targets[i];
      gsData = target._gsap || _harness(targets)[i]._gsap;
      tween._ptLookup[i] = ptLookup = {};
      _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)

      index = fullTargets === targets ? i : fullTargets.indexOf(target);

      if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

        plugin._props.forEach(function (name) {
          ptLookup[name] = pt;
        });

        plugin.priority && (hasPriority = 1);
      }

      if (!harness || harnessVars) {
        for (p in cleanVars) {
          if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
            plugin.priority && (hasPriority = 1);
          } else {
            ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
          }
        }
      }

      tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

      if (autoOverwrite && tween._pt) {
        _overwritingTween = tween;

        _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!


        overwritten = !tween.parent;
        _overwritingTween = 0;
      }

      tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
    }

    hasPriority && _sortPropTweensByPriority(tween);
    tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
  }

  tween._onUpdate = onUpdate;
  tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.
},
    _addAliasesToVars = function _addAliasesToVars(targets, vars) {
  var harness = targets[0] ? _getCache(targets[0]).harness : 0,
      propertyAliases = harness && harness.aliases,
      copy,
      p,
      i,
      aliases;

  if (!propertyAliases) {
    return vars;
  }

  copy = _merge({}, vars);

  for (p in propertyAliases) {
    if (p in copy) {
      aliases = propertyAliases[p].split(",");
      i = aliases.length;

      while (i--) {
        copy[aliases[i]] = copy[p];
      }
    }
  }

  return copy;
},
    _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
  return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
},
    _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
    _staggerPropsToSkip = (_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger").split(",");
/*
 * --------------------------------------------------------------------------------------
 * TWEEN
 * --------------------------------------------------------------------------------------
 */


var Tween = /*#__PURE__*/function (_Animation2) {
  _inheritsLoose(Tween, _Animation2);

  function Tween(targets, vars, position, skipInherit) {
    var _this3;

    if (typeof vars === "number") {
      position.duration = vars;
      vars = position;
      position = null;
    }

    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
    var _this3$vars = _this3.vars,
        duration = _this3$vars.duration,
        delay = _this3$vars.delay,
        immediateRender = _this3$vars.immediateRender,
        stagger = _this3$vars.stagger,
        overwrite = _this3$vars.overwrite,
        keyframes = _this3$vars.keyframes,
        defaults = _this3$vars.defaults,
        scrollTrigger = _this3$vars.scrollTrigger,
        yoyoEase = _this3$vars.yoyoEase,
        parent = vars.parent || _globalTimeline,
        parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
        tl,
        i,
        copy,
        l,
        p,
        curTarget,
        staggerFunc,
        staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property

    _this3._overwrite = overwrite;

    if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults || {}
      });
      tl.kill();
      tl.parent = tl._dp = _assertThisInitialized(_this3);
      tl._start = 0;

      if (keyframes) {
        _inheritDefaults(_setDefaults(tl.vars.defaults, {
          ease: "none"
        }));

        stagger ? parsedTargets.forEach(function (t, i) {
          return keyframes.forEach(function (frame, j) {
            return tl.to(t, frame, j ? ">" : i * stagger);
          });
        }) : keyframes.forEach(function (frame) {
          return tl.to(parsedTargets, frame, ">");
        });
      } else {
        l = parsedTargets.length;
        staggerFunc = stagger ? distribute(stagger) : _emptyFunc;

        if (_isObject(stagger)) {
          //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
          for (p in stagger) {
            if (~_staggerTweenProps.indexOf(p)) {
              staggerVarsToMerge || (staggerVarsToMerge = {});
              staggerVarsToMerge[p] = stagger[p];
            }
          }
        }

        for (i = 0; i < l; i++) {
          copy = {};

          for (p in vars) {
            if (_staggerPropsToSkip.indexOf(p) < 0) {
              copy[p] = vars[p];
            }
          }

          copy.stagger = 0;
          yoyoEase && (copy.yoyoEase = yoyoEase);
          staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
          curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.

          copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

          if (!stagger && l === 1 && copy.delay) {
            // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
            _this3._delay = delay = copy.delay;
            _this3._start += delay;
            copy.delay = 0;
          }

          tl.to(curTarget, copy, staggerFunc(i, curTarget, parsedTargets));
        }

        tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
      }

      duration || _this3.duration(duration = tl.duration());
    } else {
      _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
    }

    if (overwrite === true && !_suppressOverwrites) {
      _overwritingTween = _assertThisInitialized(_this3);

      _globalTimeline.killTweensOf(parsedTargets);

      _overwritingTween = 0;
    }

    _addToTimeline(parent, _assertThisInitialized(_this3), position);

    vars.reversed && _this3.reverse();
    vars.paused && _this3.paused(true);

    if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      _this3.render(Math.max(0, -delay)); //in case delay is negative

    }

    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }

  var _proto3 = Tween.prototype;

  _proto3.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._tDur,
        dur = this._dur,
        tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime,
        time,
        pt,
        iteration,
        cycleDuration,
        prevIteration,
        isYoyo,
        ratio,
        timeline,
        yoyoEase;

    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
      //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
      time = tTime;
      timeline = this.timeline;

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        isYoyo = this._yoyo && iteration & 1;

        if (isYoyo) {
          yoyoEase = this._yEase;
          time = dur - time;
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);

        if (time === prevTime && !force && this._initted) {
          //could be during the repeatDelay part. No need to render and fire callbacks.
          return this;
        }

        if (iteration !== prevIteration) {
          timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality

          if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
            this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.

            this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
          }
        }
      }

      if (!this._initted) {
        if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
          this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.

          return this;
        }

        if (dur !== this._dur) {
          // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._tTime = tTime;
      this._time = time;

      if (!this._act && this._ts) {
        this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

        this._lazy = 0;
      }

      this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

      if (this._from) {
        this.ratio = ratio = 1 - ratio;
      }

      if (time && !prevTime && !suppressEvents) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      pt = this._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * ratio, suppressEvents, force) || this._startAt && (this._zTime = totalTime);

      if (this._onUpdate && !suppressEvents) {
        totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

        _callback(this, "onUpdate");
      }

      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
        totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
          // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto3.targets = function targets() {
    return this._targets;
  };

  _proto3.invalidate = function invalidate() {
    this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
    this._ptLookup = [];
    this.timeline && this.timeline.invalidate();
    return _Animation2.prototype.invalidate.call(this);
  };

  _proto3.kill = function kill(targets, vars) {
    if (vars === void 0) {
      vars = "all";
    }

    if (!targets && (!vars || vars === "all")) {
      this._lazy = this._pt = 0;
      return this.parent ? _interrupt(this) : this;
    }

    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.

      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.

      return this;
    }

    var parsedTargets = this._targets,
        killingTargets = targets ? toArray(targets) : parsedTargets,
        propTweenLookup = this._ptLookup,
        firstPT = this._pt,
        overwrittenProps,
        curLookup,
        curOverwriteProps,
        props,
        p,
        pt,
        i;

    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
      vars === "all" && (this._pt = 0);
      return _interrupt(this);
    }

    overwrittenProps = this._op = this._op || [];

    if (vars !== "all") {
      //so people can pass in a comma-delimited list of property names
      if (_isString(vars)) {
        p = {};

        _forEachName(vars, function (name) {
          return p[name] = 1;
        });

        vars = p;
      }

      vars = _addAliasesToVars(parsedTargets, vars);
    }

    i = parsedTargets.length;

    while (i--) {
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i];

        if (vars === "all") {
          overwrittenProps[i] = vars;
          props = curLookup;
          curOverwriteProps = {};
        } else {
          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
          props = vars;
        }

        for (p in props) {
          pt = curLookup && curLookup[p];

          if (pt) {
            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
              _removeLinkedListItem(this, pt, "_pt");
            }

            delete curLookup[p];
          }

          if (curOverwriteProps !== "all") {
            curOverwriteProps[p] = 1;
          }
        }
      }
    }

    this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.

    return this;
  };

  Tween.to = function to(targets, vars) {
    return new Tween(targets, vars, arguments[2]);
  };

  Tween.from = function from(targets, vars) {
    return _createTweenType(1, arguments);
  };

  Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
    return new Tween(callback, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay: delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    });
  };

  Tween.fromTo = function fromTo(targets, fromVars, toVars) {
    return _createTweenType(2, arguments);
  };

  Tween.set = function set(targets, vars) {
    vars.duration = 0;
    vars.repeatDelay || (vars.repeat = 0);
    return new Tween(targets, vars);
  };

  Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  };

  return Tween;
}(Animation);

_setDefaults(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.


_forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
  Tween[name] = function () {
    var tl = new Timeline(),
        params = _slice.call(arguments, 0);

    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
    return tl[name].apply(tl, params);
  };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */


var _setterPlain = function _setterPlain(target, property, value) {
  return target[property] = value;
},
    _setterFunc = function _setterFunc(target, property, value) {
  return target[property](value);
},
    _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
  return target[property](data.fp, value);
},
    _setterAttribute = function _setterAttribute(target, property, value) {
  return target.setAttribute(property, value);
},
    _getSetter = function _getSetter(target, property) {
  return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
},
    _renderPlain = function _renderPlain(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
},
    _renderBoolean = function _renderBoolean(ratio, data) {
  return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
},
    _renderComplexString = function _renderComplexString(ratio, data) {
  var pt = data._pt,
      s = "";

  if (!ratio && data.b) {
    //b = beginning string
    s = data.b;
  } else if (ratio === 1 && data.e) {
    //e = ending string
    s = data.e;
  } else {
    while (pt) {
      s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.

      pt = pt._next;
    }

    s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
  }

  data.set(data.t, data.p, s, data);
},
    _renderPropTweens = function _renderPropTweens(ratio, data) {
  var pt = data._pt;

  while (pt) {
    pt.r(ratio, pt.d);
    pt = pt._next;
  }
},
    _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
  var pt = this._pt,
      next;

  while (pt) {
    next = pt._next;
    pt.p === property && pt.modifier(modifier, tween, target);
    pt = next;
  }
},
    _killPropTweensOf = function _killPropTweensOf(property) {
  var pt = this._pt,
      hasNonDependentRemaining,
      next;

  while (pt) {
    next = pt._next;

    if (pt.p === property && !pt.op || pt.op === property) {
      _removeLinkedListItem(this, pt, "_pt");
    } else if (!pt.dep) {
      hasNonDependentRemaining = 1;
    }

    pt = next;
  }

  return !hasNonDependentRemaining;
},
    _setterWithModifier = function _setterWithModifier(target, property, value, data) {
  data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
},
    _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
  var pt = parent._pt,
      next,
      pt2,
      first,
      last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)

  while (pt) {
    next = pt._next;
    pt2 = first;

    while (pt2 && pt2.pr > pt.pr) {
      pt2 = pt2._next;
    }

    if (pt._prev = pt2 ? pt2._prev : last) {
      pt._prev._next = pt;
    } else {
      first = pt;
    }

    if (pt._next = pt2) {
      pt2._prev = pt;
    } else {
      last = pt;
    }

    pt = next;
  }

  parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)


var PropTween = /*#__PURE__*/function () {
  function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
    this.t = target;
    this.s = start;
    this.c = change;
    this.p = prop;
    this.r = renderer || _renderPlain;
    this.d = data || this;
    this.set = setter || _setterPlain;
    this.pr = priority || 0;
    this._next = next;

    if (next) {
      next._prev = this;
    }
  }

  var _proto4 = PropTween.prototype;

  _proto4.modifier = function modifier(func, tween, target) {
    this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)

    this.set = _setterWithModifier;
    this.m = func;
    this.mt = target; //modifier target

    this.tween = tween;
  };

  return PropTween;
}(); //Initialization tasks

_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
  return _reservedProps[name] = 1;
});

_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: false,
  defaults: _defaults,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */

var _gsap = {
  registerPlugin: function registerPlugin() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    args.forEach(function (config) {
      return _createPlugin(config);
    });
  },
  timeline: function timeline(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function getTweensOf(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function getProperty(target, property, unit, uncache) {
    _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in

    var getter = _getCache(target || {}).get,
        format = unit ? _passThrough : _numericIfPossible;

    unit === "native" && (unit = "");
    return !target ? target : !property ? function (property, unit, uncache) {
      return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
  },
  quickSetter: function quickSetter(target, property, unit) {
    target = toArray(target);

    if (target.length > 1) {
      var setters = target.map(function (t) {
        return gsap.quickSetter(t, property, unit);
      }),
          l = setters.length;
      return function (value) {
        var i = l;

        while (i--) {
          setters[i](value);
        }
      };
    }

    target = target[0] || {};

    var Plugin = _plugins[property],
        cache = _getCache(target),
        p = cache.harness && (cache.harness.aliases || {})[property] || property,
        // in case it's an alias, like "rotate" for "rotation".
    setter = Plugin ? function (value) {
      var p = new Plugin();
      _quickTween._pt = 0;
      p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
      p.render(1, p);
      _quickTween._pt && _renderPropTweens(1, _quickTween);
    } : cache.set(target, p);

    return Plugin ? setter : function (value) {
      return setter(target, p, unit ? value + unit : value, cache, 1);
    };
  },
  isTweening: function isTweening(targets) {
    return _globalTimeline.getTweensOf(targets, true).length > 0;
  },
  defaults: function defaults(value) {
    value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
    return _mergeDeep(_defaults, value || {});
  },
  config: function config(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function registerEffect(_ref3) {
    var name = _ref3.name,
        effect = _ref3.effect,
        plugins = _ref3.plugins,
        defaults = _ref3.defaults,
        extendTimeline = _ref3.extendTimeline;
    (plugins || "").split(",").forEach(function (pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });

    _effects[name] = function (targets, vars, tl) {
      return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
    };

    if (extendTimeline) {
      Timeline.prototype[name] = function (targets, vars, position) {
        return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
      };
    }
  },
  registerEase: function registerEase(name, ease) {
    _easeMap[name] = _parseEase(ease);
  },
  parseEase: function parseEase(ease, defaultEase) {
    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
  },
  getById: function getById(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function exportRoot(vars, includeDelayedCalls) {
    if (vars === void 0) {
      vars = {};
    }

    var tl = new Timeline(vars),
        child,
        next;
    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

    _globalTimeline.remove(tl);

    tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).

    tl._time = tl._tTime = _globalTimeline._time;
    child = _globalTimeline._first;

    while (child) {
      next = child._next;

      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
        _addToTimeline(tl, child, child._start - child._delay);
      }

      child = next;
    }

    _addToTimeline(_globalTimeline, tl, 0);

    return tl;
  },
  utils: {
    wrap: wrap,
    wrapYoyo: wrapYoyo,
    distribute: distribute,
    random: random,
    snap: snap,
    normalize: normalize,
    getUnit: getUnit,
    clamp: clamp,
    splitColor: splitColor,
    toArray: toArray,
    selector: selector,
    mapRange: mapRange,
    pipe: pipe,
    unitize: unitize,
    interpolate: interpolate,
    shuffle: shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween: PropTween,
    globals: _addGlobal,
    Tween: Tween,
    Timeline: Timeline,
    Animation: Animation,
    getCache: _getCache,
    _removeLinkedListItem: _removeLinkedListItem,
    suppressOverwrites: function suppressOverwrites(value) {
      return _suppressOverwrites = value;
    }
  }
};

_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
  return _gsap[name] = Tween[name];
});

_ticker.add(Timeline.updateRoot);

_quickTween = _gsap.to({}, {
  duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------

var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
  var pt = plugin._pt;

  while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
    pt = pt._next;
  }

  return pt;
},
    _addModifiers = function _addModifiers(tween, modifiers) {
  var targets = tween._targets,
      p,
      i,
      pt;

  for (p in modifiers) {
    i = targets.length;

    while (i--) {
      pt = tween._ptLookup[i][p];

      if (pt && (pt = pt.d)) {
        if (pt._pt) {
          // is a plugin
          pt = _getPluginPropTween(pt, p);
        }

        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
      }
    }
  }
},
    _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
  return {
    name: name,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function init(target, vars, tween) {
      tween._onInit = function (tween) {
        var temp, p;

        if (_isString(vars)) {
          temp = {};

          _forEachName(vars, function (name) {
            return temp[name] = 1;
          }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.


          vars = temp;
        }

        if (modifier) {
          temp = {};

          for (p in vars) {
            temp[p] = modifier(vars[p]);
          }

          vars = temp;
        }

        _addModifiers(tween, vars);
      };
    }
  };
}; //register core plugins


var gsap = _gsap.registerPlugin({
  name: "attr",
  init: function init(target, vars, tween, index, targets) {
    var p, pt;

    for (p in vars) {
      pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
      pt && (pt.op = p);

      this._props.push(p);
    }
  }
}, {
  name: "endArray",
  init: function init(target, value) {
    var i = value.length;

    while (i--) {
      this.add(target, i, target[i] || 0, value[i]);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.

Tween.version = Timeline.version = gsap.version = "3.8.0";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0,
    Power1 = _easeMap.Power1,
    Power2 = _easeMap.Power2,
    Power3 = _easeMap.Power3,
    Power4 = _easeMap.Power4,
    Linear = _easeMap.Linear,
    Quad = _easeMap.Quad,
    Cubic = _easeMap.Cubic,
    Quart = _easeMap.Quart,
    Quint = _easeMap.Quint,
    Strong = _easeMap.Strong,
    Elastic = _easeMap.Elastic,
    Back = _easeMap.Back,
    SteppedEase = _easeMap.SteppedEase,
    Bounce = _easeMap.Bounce,
    Sine = _easeMap.Sine,
    Expo = _easeMap.Expo,
    Circ = _easeMap.Circ;

 //export some internal methods/orojects for use in CSSPlugin so that we can externalize that file and allow custom builds that exclude it.



/***/ }),

/***/ "./node_modules/gsap/index.js":
/*!************************************!*\
  !*** ./node_modules/gsap/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gsap": () => (/* binding */ gsapWithCSS),
/* harmony export */   "default": () => (/* binding */ gsapWithCSS),
/* harmony export */   "CSSPlugin": () => (/* reexport safe */ _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin),
/* harmony export */   "TweenMax": () => (/* binding */ TweenMaxWithCSS),
/* harmony export */   "TweenLite": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TweenLite),
/* harmony export */   "TimelineMax": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineMax),
/* harmony export */   "TimelineLite": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineLite),
/* harmony export */   "Power0": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power0),
/* harmony export */   "Power1": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power1),
/* harmony export */   "Power2": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power2),
/* harmony export */   "Power3": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power3),
/* harmony export */   "Power4": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power4),
/* harmony export */   "Linear": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Linear),
/* harmony export */   "Quad": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quad),
/* harmony export */   "Cubic": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Cubic),
/* harmony export */   "Quart": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quart),
/* harmony export */   "Quint": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quint),
/* harmony export */   "Strong": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Strong),
/* harmony export */   "Elastic": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Elastic),
/* harmony export */   "Back": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Back),
/* harmony export */   "SteppedEase": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.SteppedEase),
/* harmony export */   "Bounce": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Bounce),
/* harmony export */   "Sine": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Sine),
/* harmony export */   "Expo": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Expo),
/* harmony export */   "Circ": () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Circ)
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/* harmony import */ var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSPlugin.js */ "./node_modules/gsap/CSSPlugin.js");


var gsapWithCSS = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(_CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin) || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap,
    // to protect from tree shaking
TweenMaxWithCSS = gsapWithCSS.core.Tween;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Built-in value references. */


var Symbol = root.Symbol;
module.exports = Symbol;

/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }

  return array;
}

module.exports = arrayEach;

/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || isBuff && (key == 'offset' || key == 'parent') || isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

module.exports = arrayLikeKeys;

/***/ }),

/***/ "./node_modules/lodash/_baseEach.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseEach.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ "./node_modules/lodash/_createBaseEach.js");
/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */


var baseEach = createBaseEach(baseForOwn);
module.exports = baseEach;

/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");
/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */


var baseFor = createBaseFor();
module.exports = baseFor;

/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");
/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */


function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");
/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */

function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }

  var result = [];

  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }

  return result;
}

module.exports = baseKeys;

/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

module.exports = baseTimes;

/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

module.exports = baseUnary;

/***/ }),

/***/ "./node_modules/lodash/_castFunction.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_castFunction.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");
/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */


function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;

/***/ }),

/***/ "./node_modules/lodash/_createBaseEach.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createBaseEach.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");
/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */


function createBaseEach(eachFunc, fromRight) {
  return function (collection, iteratee) {
    if (collection == null) {
      return collection;
    }

    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }

    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }

    return collection;
  };
}

module.exports = createBaseEach;

/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];

      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }

    return object;
  };
}

module.exports = createBaseFor;

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;
module.exports = freeGlobal;

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

module.exports = getRawTag;

/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}

module.exports = isPrototype;

/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeKeys = overArg(Object.keys, Object);
module.exports = nativeKeys;

/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    } // Legacy `process.binding('util')` for Node.js < 10.


    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

module.exports = nodeUtil;

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");
/** Detect free variable `self`. */


var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

/***/ }),

/***/ "./node_modules/lodash/each.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/each.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./forEach */ "./node_modules/lodash/forEach.js");

/***/ }),

/***/ "./node_modules/lodash/forEach.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/forEach.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    castFunction = __webpack_require__(/*! ./_castFunction */ "./node_modules/lodash/_castFunction.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");
/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */


function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;

/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
module.exports = isArguments;

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
module.exports = isArray;

/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */


function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */

var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");
/** `Object#toString` result references. */


var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");
/* Node.js helper references. */


var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
module.exports = isTypedArray;

/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */


function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;

/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;

/***/ }),

/***/ "./node_modules/prefix/index.js":
/*!**************************************!*\
  !*** ./node_modules/prefix/index.js ***!
  \**************************************/
/***/ ((module) => {

// check document first so it doesn't error in node.js
var style = typeof document != 'undefined' ? document.createElement('p').style : {};
var prefixes = ['O', 'ms', 'Moz', 'Webkit'];
var upper = /([A-Z])/g;
var memo = {};
/**
 * prefix `key`
 *
 *   prefix('transform') // => WebkitTransform
 *
 * @param {String} key
 * @return {String}
 * @api public
 */

function prefix(key) {
  // Camel case
  key = key.replace(/-([a-z])/g, function (_, char) {
    return char.toUpperCase();
  }); // Without prefix

  if (style[key] !== undefined) return key; // With prefix

  var Key = key.charAt(0).toUpperCase() + key.slice(1);
  var i = prefixes.length;

  while (i--) {
    var name = prefixes[i] + Key;
    if (style[name] !== undefined) return name;
  }

  return key;
}
/**
 * Memoized version of `prefix`
 *
 * @param {String} key
 * @return {String}
 * @api public
 */


function prefixMemozied(key) {
  return key in memo ? memo[key] : memo[key] = prefix(key);
}
/**
 * Create a dashed prefix
 *
 * @param {String} key
 * @return {String}
 * @api public
 */


function prefixDashed(key) {
  key = prefix(key);

  if (upper.test(key)) {
    key = '-' + key.replace(upper, '-$1');
    upper.lastIndex = 0;
  }

  return key.toLowerCase();
}

module.exports = prefixMemozied;
module.exports.dash = prefixDashed;

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1634766251133
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("874fc51528f0b84a9e5d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yNzQ2MjUwMzRkODQ3NWE5YWM5Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVlLE1BQU1HLElBQU4sQ0FBVztBQUN4QkMsRUFBQUEsV0FBVyxDQUFFO0FBQUVDLElBQUFBLEVBQUY7QUFBTUMsSUFBQUEsT0FBTjtBQUFlQyxJQUFBQTtBQUFmLEdBQUYsRUFBNkI7QUFDdEMsU0FBS0YsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsU0FBS0csUUFBTCxHQUFnQkYsT0FBaEI7QUFDQSxTQUFLRyxnQkFBTCxHQUF3QixFQUN0QixHQUFHRjtBQURtQixLQUF4QjtBQUlBLFNBQUtHLE1BQUwsR0FBYztBQUNaQyxNQUFBQSxPQUFPLEVBQUUsQ0FERztBQUVaQyxNQUFBQSxNQUFNLEVBQUUsQ0FGSTtBQUdaQyxNQUFBQSxJQUFJLEVBQUU7QUFITSxLQUFkO0FBTUEsU0FBS0MsZUFBTCxHQUF1QlosNkNBQU0sQ0FBQyxXQUFELENBQTdCO0FBRUEsU0FBS2EsaUJBQUw7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0EsU0FBS0MsTUFBTDtBQUNEOztBQUVEQyxFQUFBQSxNQUFNLEdBQUk7QUFDUixTQUFLYixPQUFMLEdBQWVjLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUFLYixRQUE1QixDQUFmO0FBQ0EsU0FBS0QsUUFBTCxHQUFnQixFQUFoQjtBQUVBTixJQUFBQSxrREFBSSxDQUFDLEtBQUtRLGdCQUFOLEVBQXdCLENBQUNhLEtBQUQsRUFBUUMsR0FBUixLQUFnQjtBQUUxQyxVQUFJRCxLQUFLLFlBQVlFLE1BQU0sQ0FBQ0MsV0FBeEIsSUFBdUNILEtBQUssWUFBWUUsTUFBTSxDQUFDRSxRQUEvRCxJQUEyRUMsS0FBSyxDQUFDQyxPQUFOLENBQWNOLEtBQWQsQ0FBL0UsRUFBcUc7QUFDbkcsYUFBS2YsUUFBTCxDQUFjZ0IsR0FB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QUFOLENBQVd4TCxHQUFYLENBQUosRUFBcUI7QUFDbkJBLElBQUFBLEdBQUcsR0FBRyxNQUFNQSxHQUFHLENBQUNnSCxPQUFKLENBQVkwK0IsS0FBWixFQUFtQixLQUFuQixDQUFaO0FBQ0FBLElBQUFBLEtBQUssQ0FBQ3gzQixTQUFOLEdBQWtCLENBQWxCO0FBQ0Q7O0FBQ0QsU0FBT2xPLEdBQUcsQ0FBQ3VILFdBQUosRUFBUDtBQUNEOztBQUVEcTNCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQm1ILGNBQWpCO0FBQ0FwSCxtQkFBQSxHQUFzQnFILFlBQXRCOzs7Ozs7Ozs7Ozs7QUNwRUE7QUFDVTtBQUNWLE9BQU8sSUFBVTtBQUNqQjtBQUNBLHNCQUFzQixtQkFBTyxDQUFDLHdKQUFrSCxjQUFjLCtCQUErQjtBQUM3TCxNQUFNLFVBQVU7QUFDaEIsTUFBTSxpQkFBaUI7QUFDdkI7QUFDQTs7Ozs7Ozs7VUNSQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jbGFzc2VzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2dzYXAvQ1NTUGx1Z2luLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9nc2FwL2dzYXAtY29yZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvZ3NhcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlFYWNoLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUVhY2guanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUZvci5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRm9yT3duLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jYXN0RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQmFzZUVhY2guanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQmFzZUZvci5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbm9kZVV0aWwuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb3ZlckFyZy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZWFjaC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2ZvckVhY2guanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJndW1lbnRzLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zdHViRmFsc2UuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL3ByZWZpeC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuXG5pbXBvcnQgUHJlZml4IGZyb20gJ3ByZWZpeCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XG4gIGNvbnN0cnVjdG9yICh7IGlkLCBlbGVtZW50LCBlbGVtZW50cyB9KSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5zZWxlY3RvciA9IGVsZW1lbnRcbiAgICB0aGlzLnNlbGVjdG9yQ2hpbGRyZW4gPSB7XG4gICAgICAuLi5lbGVtZW50c1xuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxhc3Q6IDBcbiAgICB9XG5cbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeCgndHJhbnNmb3JtJylcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIHRoaXMub25Nb3VzZVdoZWVsID0gdGhpcy5vbk1vdXNlV2hlZWwuYmluZCh0aGlzKVxuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIGNyZWF0ZSAoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKVxuICAgIHRoaXMuZWxlbWVudHMgPSB7fVxuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4sIChlbnRyeSwga2V5KSA9PiB7XG5cbiAgICAgIGlmIChlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fCBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdCB8fCBBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbnRyeSlcblxuICAgICAgICBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGxcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvL1RPRE86IGNoZWNrIHRoZSB2aWRlbyB0byBzZWUgaG93IGlzIGhlIHVzaW5nIHRoZSBlbGVtZW50c1trZXldIG91dHNpZGUgdGhpcyBlYWNoIGxvb3BcblxuICAgICAgXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnRzW2tleV0pXG5cbiAgICAgIC8qIGlmIChlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fCBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdCB8fCBBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVudHJ5KVxuICAgICAgICBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmdodCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGxcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ2h0ID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSlcbiAgICAgICAgfVxuICAgICAgfSAqL1xuICAgIH0pXG4gIH1cbiAgXG4gIHNob3cgKCkge1xuICAgIHRoaXMuYW5pbWF0ZUluID0gR1NBUC50aW1lbGluZSgpXG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBHU0FQLmZyb20odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgb25Db21wbGV0ZTogcmVzb2x2ZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgaGlkZSAoKSB7XG4gICAgdGhpcy5hbmltYXRlT3V0ID0gR1NBUC50aW1lbGluZSgpXG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBHU0FQLnRvKHRoaXMuZWxlbWVudCwge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmVcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCAwLjEpXG5cbiAgICAvKiBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVgoJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4KWBcbiAgICB9ICovICBcbiAgfVxuXG4gIG9uTW91c2VXaGVlbCAoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnQpXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5vbk1vdXNlV2hlZWwpXG4gIH1cbn1cbiIsIi8qIVxuICogQ1NTUGx1Z2luIDMuOC4wXG4gKiBodHRwczovL2dyZWVuc29jay5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAwOC0yMDIxLCBHcmVlblNvY2suIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBTdWJqZWN0IHRvIHRoZSB0ZXJtcyBhdCBodHRwczovL2dyZWVuc29jay5jb20vc3RhbmRhcmQtbGljZW5zZSBvciBmb3JcbiAqIENsdWIgR3JlZW5Tb2NrIG1lbWJlcnMsIHRoZSBhZ3JlZW1lbnQgaXNzdWVkIHdpdGggdGhhdCBtZW1iZXJzaGlwLlxuICogQGF1dGhvcjogSmFjayBEb3lsZSwgamFja0BncmVlbnNvY2suY29tXG4qL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgZ3NhcCwgX2dldFByb3BlcnR5LCBfbnVtRXhwLCBfbnVtV2l0aFVuaXRFeHAsIGdldFVuaXQsIF9pc1N0cmluZywgX2lzVW5kZWZpbmVkLCBfcmVuZGVyQ29tcGxleFN0cmluZywgX3JlbEV4cCwgX2ZvckVhY2hOYW1lLCBfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5LCBfY29sb3JTdHJpbmdGaWx0ZXIsIF9jaGVja1BsdWdpbiwgX3JlcGxhY2VSYW5kb20sIF9wbHVnaW5zLCBHU0NhY2hlLCBQcm9wVHdlZW4sIF9jb25maWcsIF90aWNrZXIsIF9yb3VuZCwgX21pc3NpbmdQbHVnaW4sIF9nZXRTZXR0ZXIsIF9nZXRDYWNoZSwgX2NvbG9yRXhwLCBfc2V0RGVmYXVsdHMsIF9yZW1vdmVMaW5rZWRMaXN0SXRlbSAvL2ZvciB0aGUgY29tbWVudGVkLW91dCBjbGFzc05hbWUgZmVhdHVyZS5cbn0gZnJvbSBcIi4vZ3NhcC1jb3JlLmpzXCI7XG5cbnZhciBfd2luLFxuICAgIF9kb2MsXG4gICAgX2RvY0VsZW1lbnQsXG4gICAgX3BsdWdpbkluaXR0ZWQsXG4gICAgX3RlbXBEaXYsXG4gICAgX3RlbXBEaXZTdHlsZXIsXG4gICAgX3JlY2VudFNldHRlclBsdWdpbixcbiAgICBfd2luZG93RXhpc3RzID0gZnVuY3Rpb24gX3dpbmRvd0V4aXN0cygpIHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCI7XG59LFxuICAgIF90cmFuc2Zvcm1Qcm9wcyA9IHt9LFxuICAgIF9SQUQyREVHID0gMTgwIC8gTWF0aC5QSSxcbiAgICBfREVHMlJBRCA9IE1hdGguUEkgLyAxODAsXG4gICAgX2F0YW4yID0gTWF0aC5hdGFuMixcbiAgICBfYmlnTnVtID0gMWU4LFxuICAgIF9jYXBzRXhwID0gLyhbQS1aXSkvZyxcbiAgICBfaG9yaXpvbnRhbEV4cCA9IC8oPzpsZWZ0fHJpZ2h0fHdpZHRofG1hcmdpbnxwYWRkaW5nfHgpL2ksXG4gICAgX2NvbXBsZXhFeHAgPSAvW1xccyxcXChdXFxTLyxcbiAgICBfcHJvcGVydHlBbGlhc2VzID0ge1xuICBhdXRvQWxwaGE6IFwib3BhY2l0eSx2aXNpYmlsaXR5XCIsXG4gIHNjYWxlOiBcInNjYWxlWCxzY2FsZVlcIixcbiAgYWxwaGE6IFwib3BhY2l0eVwiXG59LFxuICAgIF9yZW5kZXJDU1NQcm9wID0gZnVuY3Rpb24gX3JlbmRlckNTU1Byb3AocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCBNYXRoLnJvdW5kKChkYXRhLnMgKyBkYXRhLmMgKiByYXRpbykgKiAxMDAwMCkgLyAxMDAwMCArIGRhdGEudSwgZGF0YSk7XG59LFxuICAgIF9yZW5kZXJQcm9wV2l0aEVuZCA9IGZ1bmN0aW9uIF9yZW5kZXJQcm9wV2l0aEVuZChyYXRpbywgZGF0YSkge1xuICByZXR1cm4gZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIHJhdGlvID09PSAxID8gZGF0YS5lIDogTWF0aC5yb3VuZCgoZGF0YS5zICsgZGF0YS5jICogcmF0aW8pICogMTAwMDApIC8gMTAwMDAgKyBkYXRhLnUsIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyQ1NTUHJvcFdpdGhCZWdpbm5pbmcgPSBmdW5jdGlvbiBfcmVuZGVyQ1NTUHJvcFdpdGhCZWdpbm5pbmcocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCByYXRpbyA/IE1hdGgucm91bmQoKGRhdGEucyArIGRhdGEuYyAqIHJhdGlvKSAqIDEwMDAwKSAvIDEwMDAwICsgZGF0YS51IDogZGF0YS5iLCBkYXRhKTtcbn0sXG4gICAgLy9pZiB1bml0cyBjaGFuZ2UsIHdlIG5lZWQgYSB3YXkgdG8gcmVuZGVyIHRoZSBvcmlnaW5hbCB1bml0L3ZhbHVlIHdoZW4gdGhlIHR3ZWVuIGdvZXMgYWxsIHRoZSB3YXkgYmFjayB0byB0aGUgYmVnaW5uaW5nIChyYXRpbzowKVxuX3JlbmRlclJvdW5kZWRDU1NQcm9wID0gZnVuY3Rpb24gX3JlbmRlclJvdW5kZWRDU1NQcm9wKHJhdGlvLCBkYXRhKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGEucyArIGRhdGEuYyAqIHJhdGlvO1xuICBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgfn4odmFsdWUgKyAodmFsdWUgPCAwID8gLS41IDogLjUpKSArIGRhdGEudSwgZGF0YSk7XG59LFxuICAgIF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlID0gZnVuY3Rpb24gX3JlbmRlck5vblR3ZWVuaW5nVmFsdWUocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCByYXRpbyA/IGRhdGEuZSA6IGRhdGEuYiwgZGF0YSk7XG59LFxuICAgIF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlT25seUF0RW5kID0gZnVuY3Rpb24gX3JlbmRlck5vblR3ZWVuaW5nVmFsdWVPbmx5QXRFbmQocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCByYXRpbyAhPT0gMSA/IGRhdGEuYiA6IGRhdGEuZSwgZGF0YSk7XG59LFxuICAgIF9zZXR0ZXJDU1NTdHlsZSA9IGZ1bmN0aW9uIF9zZXR0ZXJDU1NTdHlsZSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gdGFyZ2V0LnN0eWxlW3Byb3BlcnR5XSA9IHZhbHVlO1xufSxcbiAgICBfc2V0dGVyQ1NTUHJvcCA9IGZ1bmN0aW9uIF9zZXR0ZXJDU1NQcm9wKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlKTtcbn0sXG4gICAgX3NldHRlclRyYW5zZm9ybSA9IGZ1bmN0aW9uIF9zZXR0ZXJUcmFuc2Zvcm0odGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIHRhcmdldC5fZ3NhcFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbn0sXG4gICAgX3NldHRlclNjYWxlID0gZnVuY3Rpb24gX3NldHRlclNjYWxlKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiB0YXJnZXQuX2dzYXAuc2NhbGVYID0gdGFyZ2V0Ll9nc2FwLnNjYWxlWSA9IHZhbHVlO1xufSxcbiAgICBfc2V0dGVyU2NhbGVXaXRoUmVuZGVyID0gZnVuY3Rpb24gX3NldHRlclNjYWxlV2l0aFJlbmRlcih0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgZGF0YSwgcmF0aW8pIHtcbiAgdmFyIGNhY2hlID0gdGFyZ2V0Ll9nc2FwO1xuICBjYWNoZS5zY2FsZVggPSBjYWNoZS5zY2FsZVkgPSB2YWx1ZTtcbiAgY2FjaGUucmVuZGVyVHJhbnNmb3JtKHJhdGlvLCBjYWNoZSk7XG59LFxuICAgIF9zZXR0ZXJUcmFuc2Zvcm1XaXRoUmVuZGVyID0gZnVuY3Rpb24gX3NldHRlclRyYW5zZm9ybVdpdGhSZW5kZXIodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIGRhdGEsIHJhdGlvKSB7XG4gIHZhciBjYWNoZSA9IHRhcmdldC5fZ3NhcDtcbiAgY2FjaGVbcHJvcGVydHldID0gdmFsdWU7XG4gIGNhY2hlLnJlbmRlclRyYW5zZm9ybShyYXRpbywgY2FjaGUpO1xufSxcbiAgICBfdHJhbnNmb3JtUHJvcCA9IFwidHJhbnNmb3JtXCIsXG4gICAgX3RyYW5zZm9ybU9yaWdpblByb3AgPSBfdHJhbnNmb3JtUHJvcCArIFwiT3JpZ2luXCIsXG4gICAgX3N1cHBvcnRzM0QsXG4gICAgX2NyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiBfY3JlYXRlRWxlbWVudCh0eXBlLCBucykge1xuICB2YXIgZSA9IF9kb2MuY3JlYXRlRWxlbWVudE5TID8gX2RvYy5jcmVhdGVFbGVtZW50TlMoKG5zIHx8IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiKS5yZXBsYWNlKC9eaHR0cHMvLCBcImh0dHBcIiksIHR5cGUpIDogX2RvYy5jcmVhdGVFbGVtZW50KHR5cGUpOyAvL3NvbWUgc2VydmVycyBzd2FwIGluIGh0dHBzIGZvciBodHRwIGluIHRoZSBuYW1lc3BhY2Ugd2hpY2ggY2FuIGJyZWFrIHRoaW5ncywgbWFraW5nIFwic3R5bGVcIiBpbmFjY2Vzc2libGUuXG5cbiAgcmV0dXJuIGUuc3R5bGUgPyBlIDogX2RvYy5jcmVhdGVFbGVtZW50KHR5cGUpOyAvL3NvbWUgZW52aXJvbm1lbnRzIHdvbid0IGFsbG93IGFjY2VzcyB0byB0aGUgZWxlbWVudCdzIHN0eWxlIHdoZW4gY3JlYXRlZCB3aXRoIGEgbmFtZXNwYWNlIGluIHdoaWNoIGNhc2Ugd2UgZGVmYXVsdCB0byB0aGUgc3RhbmRhcmQgY3JlYXRlRWxlbWVudCgpIHRvIHdvcmsgYXJvdW5kIHRoZSBpc3N1ZS4gQWxzbyBub3RlIHRoYXQgd2hlbiBHU0FQIGlzIGVtYmVkZGVkIGRpcmVjdGx5IGluc2lkZSBhbiBTVkcgZmlsZSwgY3JlYXRlRWxlbWVudCgpIHdvbid0IGFsbG93IGFjY2VzcyB0byB0aGUgc3R5bGUgb2JqZWN0IGluIEZpcmVmb3ggKHNlZSBodHRwczovL2dyZWVuc29jay5jb20vZm9ydW1zL3RvcGljLzIwMjE1LXByb2JsZW0tdXNpbmctdHdlZW5tYXgtaW4tc3RhbmRhbG9uZS1zZWxmLWNvbnRhaW5pbmctc3ZnLWZpbGUtZXJyLWNhbm5vdC1zZXQtcHJvcGVydHktY3NzdGV4dC1vZi11bmRlZmluZWQvKS5cbn0sXG4gICAgX2dldENvbXB1dGVkUHJvcGVydHkgPSBmdW5jdGlvbiBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCBza2lwUHJlZml4RmFsbGJhY2spIHtcbiAgdmFyIGNzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpO1xuICByZXR1cm4gY3NbcHJvcGVydHldIHx8IGNzLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkucmVwbGFjZShfY2Fwc0V4cCwgXCItJDFcIikudG9Mb3dlckNhc2UoKSkgfHwgY3MuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSkgfHwgIXNraXBQcmVmaXhGYWxsYmFjayAmJiBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIF9jaGVja1Byb3BQcmVmaXgocHJvcGVydHkpIHx8IHByb3BlcnR5LCAxKSB8fCBcIlwiOyAvL2NzcyB2YXJpYWJsZXMgbWF5IG5vdCBuZWVkIGNhcHMgc3dhcHBlZCBvdXQgZm9yIGRhc2hlcyBhbmQgbG93ZXJjYXNlLlxufSxcbiAgICBfcHJlZml4ZXMgPSBcIk8sTW96LG1zLE1zLFdlYmtpdFwiLnNwbGl0KFwiLFwiKSxcbiAgICBfY2hlY2tQcm9wUHJlZml4ID0gZnVuY3Rpb24gX2NoZWNrUHJvcFByZWZpeChwcm9wZXJ0eSwgZWxlbWVudCwgcHJlZmVyUHJlZml4KSB7XG4gIHZhciBlID0gZWxlbWVudCB8fCBfdGVtcERpdixcbiAgICAgIHMgPSBlLnN0eWxlLFxuICAgICAgaSA9IDU7XG5cbiAgaWYgKHByb3BlcnR5IGluIHMgJiYgIXByZWZlclByZWZpeCkge1xuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIHByb3BlcnR5ID0gcHJvcGVydHkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wZXJ0eS5zdWJzdHIoMSk7XG5cbiAgd2hpbGUgKGktLSAmJiAhKF9wcmVmaXhlc1tpXSArIHByb3BlcnR5IGluIHMpKSB7fVxuXG4gIHJldHVybiBpIDwgMCA/IG51bGwgOiAoaSA9PT0gMyA/IFwibXNcIiA6IGkgPj0gMCA/IF9wcmVmaXhlc1tpXSA6IFwiXCIpICsgcHJvcGVydHk7XG59LFxuICAgIF9pbml0Q29yZSA9IGZ1bmN0aW9uIF9pbml0Q29yZSgpIHtcbiAgaWYgKF93aW5kb3dFeGlzdHMoKSAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICBfd2luID0gd2luZG93O1xuICAgIF9kb2MgPSBfd2luLmRvY3VtZW50O1xuICAgIF9kb2NFbGVtZW50ID0gX2RvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgX3RlbXBEaXYgPSBfY3JlYXRlRWxlbWVudChcImRpdlwiKSB8fCB7XG4gICAgICBzdHlsZToge31cbiAgICB9O1xuICAgIF90ZW1wRGl2U3R5bGVyID0gX2NyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgX3RyYW5zZm9ybVByb3AgPSBfY2hlY2tQcm9wUHJlZml4KF90cmFuc2Zvcm1Qcm9wKTtcbiAgICBfdHJhbnNmb3JtT3JpZ2luUHJvcCA9IF90cmFuc2Zvcm1Qcm9wICsgXCJPcmlnaW5cIjtcbiAgICBfdGVtcERpdi5zdHlsZS5jc3NUZXh0ID0gXCJib3JkZXItd2lkdGg6MDtsaW5lLWhlaWdodDowO3Bvc2l0aW9uOmFic29sdXRlO3BhZGRpbmc6MFwiOyAvL21ha2Ugc3VyZSB0byBvdmVycmlkZSBjZXJ0YWluIHByb3BlcnRpZXMgdGhhdCBtYXkgY29udGFtaW5hdGUgbWVhc3VyZW1lbnRzLCBpbiBjYXNlIHRoZSB1c2VyIGhhcyBvdmVycmVhY2hpbmcgc3R5bGUgc2hlZXRzLlxuXG4gICAgX3N1cHBvcnRzM0QgPSAhIV9jaGVja1Byb3BQcmVmaXgoXCJwZXJzcGVjdGl2ZVwiKTtcbiAgICBfcGx1Z2luSW5pdHRlZCA9IDE7XG4gIH1cbn0sXG4gICAgX2dldEJCb3hIYWNrID0gZnVuY3Rpb24gX2dldEJCb3hIYWNrKHN3YXBJZlBvc3NpYmxlKSB7XG4gIC8vd29ya3MgYXJvdW5kIGlzc3VlcyBpbiBzb21lIGJyb3dzZXJzIChsaWtlIEZpcmVmb3gpIHRoYXQgZG9uJ3QgY29ycmVjdGx5IHJlcG9ydCBnZXRCQm94KCkgb24gU1ZHIGVsZW1lbnRzIGluc2lkZSBhIDxkZWZzPiBlbGVtZW50IGFuZC9vciA8bWFzaz4uIFdlIHRyeSBjcmVhdGluZyBhbiBTVkcsIGFkZGluZyBpdCB0byB0aGUgZG9jdW1lbnRFbGVtZW50IGFuZCB0b3NzIHRoZSBlbGVtZW50IGluIHRoZXJlIHNvIHRoYXQgaXQncyBkZWZpbml0ZWx5IHBhcnQgb2YgdGhlIHJlbmRlcmluZyB0cmVlLCB0aGVuIGdyYWIgdGhlIGJib3ggYW5kIGlmIGl0IHdvcmtzLCB3ZSBhY3R1YWxseSBzd2FwIG91dCB0aGUgb3JpZ2luYWwgZ2V0QkJveCgpIG1ldGhvZCBmb3Igb3VyIG93biB0aGF0IGRvZXMgdGhlc2UgZXh0cmEgc3RlcHMgd2hlbmV2ZXIgZ2V0QkJveCBpcyBuZWVkZWQuIFRoaXMgaGVscHMgZW5zdXJlIHRoYXQgcGVyZm9ybWFuY2UgaXMgb3B0aW1hbCAob25seSBkbyBhbGwgdGhlc2UgZXh0cmEgc3RlcHMgd2hlbiBhYnNvbHV0ZWx5IG5lY2Vzc2FyeS4uLm1vc3QgZWxlbWVudHMgZG9uJ3QgbmVlZCBpdCkuXG4gIHZhciBzdmcgPSBfY3JlYXRlRWxlbWVudChcInN2Z1wiLCB0aGlzLm93bmVyU1ZHRWxlbWVudCAmJiB0aGlzLm93bmVyU1ZHRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ4bWxuc1wiKSB8fCBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIpLFxuICAgICAgb2xkUGFyZW50ID0gdGhpcy5wYXJlbnROb2RlLFxuICAgICAgb2xkU2libGluZyA9IHRoaXMubmV4dFNpYmxpbmcsXG4gICAgICBvbGRDU1MgPSB0aGlzLnN0eWxlLmNzc1RleHQsXG4gICAgICBiYm94O1xuXG4gIF9kb2NFbGVtZW50LmFwcGVuZENoaWxkKHN2Zyk7XG5cbiAgc3ZnLmFwcGVuZENoaWxkKHRoaXMpO1xuICB0aGlzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgaWYgKHN3YXBJZlBvc3NpYmxlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGJib3ggPSB0aGlzLmdldEJCb3goKTtcbiAgICAgIHRoaXMuX2dzYXBCQm94ID0gdGhpcy5nZXRCQm94OyAvL3N0b3JlIHRoZSBvcmlnaW5hbFxuXG4gICAgICB0aGlzLmdldEJCb3ggPSBfZ2V0QkJveEhhY2s7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfSBlbHNlIGlmICh0aGlzLl9nc2FwQkJveCkge1xuICAgIGJib3ggPSB0aGlzLl9nc2FwQkJveCgpO1xuICB9XG5cbiAgaWYgKG9sZFBhcmVudCkge1xuICAgIGlmIChvbGRTaWJsaW5nKSB7XG4gICAgICBvbGRQYXJlbnQuaW5zZXJ0QmVmb3JlKHRoaXMsIG9sZFNpYmxpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvbGRQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgX2RvY0VsZW1lbnQucmVtb3ZlQ2hpbGQoc3ZnKTtcblxuICB0aGlzLnN0eWxlLmNzc1RleHQgPSBvbGRDU1M7XG4gIHJldHVybiBiYm94O1xufSxcbiAgICBfZ2V0QXR0cmlidXRlRmFsbGJhY2tzID0gZnVuY3Rpb24gX2dldEF0dHJpYnV0ZUZhbGxiYWNrcyh0YXJnZXQsIGF0dHJpYnV0ZXNBcnJheSkge1xuICB2YXIgaSA9IGF0dHJpYnV0ZXNBcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIGlmICh0YXJnZXQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZXNBcnJheVtpXSkpIHtcbiAgICAgIHJldHVybiB0YXJnZXQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZXNBcnJheVtpXSk7XG4gICAgfVxuICB9XG59LFxuICAgIF9nZXRCQm94ID0gZnVuY3Rpb24gX2dldEJCb3godGFyZ2V0KSB7XG4gIHZhciBib3VuZHM7XG5cbiAgdHJ5IHtcbiAgICBib3VuZHMgPSB0YXJnZXQuZ2V0QkJveCgpOyAvL0ZpcmVmb3ggdGhyb3dzIGVycm9ycyBpZiB5b3UgdHJ5IGNhbGxpbmcgZ2V0QkJveCgpIG9uIGFuIFNWRyBlbGVtZW50IHRoYXQncyBub3QgcmVuZGVyZWQgKGxpa2UgaW4gYSA8c3ltYm9sPiBvciA8ZGVmcz4pLiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02MTIxMThcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBib3VuZHMgPSBfZ2V0QkJveEhhY2suY2FsbCh0YXJnZXQsIHRydWUpO1xuICB9XG5cbiAgYm91bmRzICYmIChib3VuZHMud2lkdGggfHwgYm91bmRzLmhlaWdodCkgfHwgdGFyZ2V0LmdldEJCb3ggPT09IF9nZXRCQm94SGFjayB8fCAoYm91bmRzID0gX2dldEJCb3hIYWNrLmNhbGwodGFyZ2V0LCB0cnVlKSk7IC8vc29tZSBicm93c2VycyAobGlrZSBGaXJlZm94KSBtaXNyZXBvcnQgdGhlIGJvdW5kcyBpZiB0aGUgZWxlbWVudCBoYXMgemVybyB3aWR0aCBhbmQgaGVpZ2h0IChpdCBqdXN0IGFzc3VtZXMgaXQncyBhdCB4OjAsIHk6MCksIHRodXMgd2UgbmVlZCB0byBtYW51YWxseSBncmFiIHRoZSBwb3NpdGlvbiBpbiB0aGF0IGNhc2UuXG5cbiAgcmV0dXJuIGJvdW5kcyAmJiAhYm91bmRzLndpZHRoICYmICFib3VuZHMueCAmJiAhYm91bmRzLnkgPyB7XG4gICAgeDogK19nZXRBdHRyaWJ1dGVGYWxsYmFja3ModGFyZ2V0LCBbXCJ4XCIsIFwiY3hcIiwgXCJ4MVwiXSkgfHwgMCxcbiAgICB5OiArX2dldEF0dHJpYnV0ZUZhbGxiYWNrcyh0YXJnZXQsIFtcInlcIiwgXCJjeVwiLCBcInkxXCJdKSB8fCAwLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMFxuICB9IDogYm91bmRzO1xufSxcbiAgICBfaXNTVkcgPSBmdW5jdGlvbiBfaXNTVkcoZSkge1xuICByZXR1cm4gISEoZS5nZXRDVE0gJiYgKCFlLnBhcmVudE5vZGUgfHwgZS5vd25lclNWR0VsZW1lbnQpICYmIF9nZXRCQm94KGUpKTtcbn0sXG4gICAgLy9yZXBvcnRzIGlmIHRoZSBlbGVtZW50IGlzIGFuIFNWRyBvbiB3aGljaCBnZXRCQm94KCkgYWN0dWFsbHkgd29ya3Ncbl9yZW1vdmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIF9yZW1vdmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5KSB7XG4gIGlmIChwcm9wZXJ0eSkge1xuICAgIHZhciBzdHlsZSA9IHRhcmdldC5zdHlsZTtcblxuICAgIGlmIChwcm9wZXJ0eSBpbiBfdHJhbnNmb3JtUHJvcHMgJiYgcHJvcGVydHkgIT09IF90cmFuc2Zvcm1PcmlnaW5Qcm9wKSB7XG4gICAgICBwcm9wZXJ0eSA9IF90cmFuc2Zvcm1Qcm9wO1xuICAgIH1cblxuICAgIGlmIChzdHlsZS5yZW1vdmVQcm9wZXJ0eSkge1xuICAgICAgaWYgKHByb3BlcnR5LnN1YnN0cigwLCAyKSA9PT0gXCJtc1wiIHx8IHByb3BlcnR5LnN1YnN0cigwLCA2KSA9PT0gXCJ3ZWJraXRcIikge1xuICAgICAgICAvL01pY3Jvc29mdCBhbmQgc29tZSBXZWJraXQgYnJvd3NlcnMgZG9uJ3QgY29uZm9ybSB0byB0aGUgc3RhbmRhcmQgb2YgY2FwaXRhbGl6aW5nIHRoZSBmaXJzdCBwcmVmaXggY2hhcmFjdGVyLCBzbyB3ZSBhZGp1c3Qgc28gdGhhdCB3aGVuIHdlIHByZWZpeCB0aGUgY2FwcyB3aXRoIGEgZGFzaCwgaXQncyBjb3JyZWN0IChvdGhlcndpc2UgaXQnZCBiZSBcIm1zLXRyYW5zZm9ybVwiIGluc3RlYWQgb2YgXCItbXMtdHJhbnNmb3JtXCIgZm9yIElFOSwgZm9yIGV4YW1wbGUpXG4gICAgICAgIHByb3BlcnR5ID0gXCItXCIgKyBwcm9wZXJ0eTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcGVydHkucmVwbGFjZShfY2Fwc0V4cCwgXCItJDFcIikudG9Mb3dlckNhc2UoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vbm90ZTogb2xkIHZlcnNpb25zIG9mIElFIHVzZSBcInJlbW92ZUF0dHJpYnV0ZSgpXCIgaW5zdGVhZCBvZiBcInJlbW92ZVByb3BlcnR5KClcIlxuICAgICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKHByb3BlcnR5KTtcbiAgICB9XG4gIH1cbn0sXG4gICAgX2FkZE5vblR3ZWVuaW5nUFQgPSBmdW5jdGlvbiBfYWRkTm9uVHdlZW5pbmdQVChwbHVnaW4sIHRhcmdldCwgcHJvcGVydHksIGJlZ2lubmluZywgZW5kLCBvbmx5U2V0QXRFbmQpIHtcbiAgdmFyIHB0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCB0YXJnZXQsIHByb3BlcnR5LCAwLCAxLCBvbmx5U2V0QXRFbmQgPyBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZU9ubHlBdEVuZCA6IF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlKTtcbiAgcGx1Z2luLl9wdCA9IHB0O1xuICBwdC5iID0gYmVnaW5uaW5nO1xuICBwdC5lID0gZW5kO1xuXG4gIHBsdWdpbi5fcHJvcHMucHVzaChwcm9wZXJ0eSk7XG5cbiAgcmV0dXJuIHB0O1xufSxcbiAgICBfbm9uQ29udmVydGlibGVVbml0cyA9IHtcbiAgZGVnOiAxLFxuICByYWQ6IDEsXG4gIHR1cm46IDFcbn0sXG4gICAgLy90YWtlcyBhIHNpbmdsZSB2YWx1ZSBsaWtlIDIwcHggYW5kIGNvbnZlcnRzIGl0IHRvIHRoZSB1bml0IHNwZWNpZmllZCwgbGlrZSBcIiVcIiwgcmV0dXJuaW5nIG9ubHkgdGhlIG51bWVyaWMgYW1vdW50LlxuX2NvbnZlcnRUb1VuaXQgPSBmdW5jdGlvbiBfY29udmVydFRvVW5pdCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgdW5pdCkge1xuICB2YXIgY3VyVmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKSB8fCAwLFxuICAgICAgY3VyVW5pdCA9ICh2YWx1ZSArIFwiXCIpLnRyaW0oKS5zdWJzdHIoKGN1clZhbHVlICsgXCJcIikubGVuZ3RoKSB8fCBcInB4XCIsXG4gICAgICAvLyBzb21lIGJyb3dzZXJzIGxlYXZlIGV4dHJhIHdoaXRlc3BhY2UgYXQgdGhlIGJlZ2lubmluZyBvZiBDU1MgdmFyaWFibGVzLCBoZW5jZSB0aGUgbmVlZCB0byB0cmltKClcbiAgc3R5bGUgPSBfdGVtcERpdi5zdHlsZSxcbiAgICAgIGhvcml6b250YWwgPSBfaG9yaXpvbnRhbEV4cC50ZXN0KHByb3BlcnR5KSxcbiAgICAgIGlzUm9vdFNWRyA9IHRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwic3ZnXCIsXG4gICAgICBtZWFzdXJlUHJvcGVydHkgPSAoaXNSb290U1ZHID8gXCJjbGllbnRcIiA6IFwib2Zmc2V0XCIpICsgKGhvcml6b250YWwgPyBcIldpZHRoXCIgOiBcIkhlaWdodFwiKSxcbiAgICAgIGFtb3VudCA9IDEwMCxcbiAgICAgIHRvUGl4ZWxzID0gdW5pdCA9PT0gXCJweFwiLFxuICAgICAgdG9QZXJjZW50ID0gdW5pdCA9PT0gXCIlXCIsXG4gICAgICBweCxcbiAgICAgIHBhcmVudCxcbiAgICAgIGNhY2hlLFxuICAgICAgaXNTVkc7XG5cbiAgaWYgKHVuaXQgPT09IGN1clVuaXQgfHwgIWN1clZhbHVlIHx8IF9ub25Db252ZXJ0aWJsZVVuaXRzW3VuaXRdIHx8IF9ub25Db252ZXJ0aWJsZVVuaXRzW2N1clVuaXRdKSB7XG4gICAgcmV0dXJuIGN1clZhbHVlO1xuICB9XG5cbiAgY3VyVW5pdCAhPT0gXCJweFwiICYmICF0b1BpeGVscyAmJiAoY3VyVmFsdWUgPSBfY29udmVydFRvVW5pdCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgXCJweFwiKSk7XG4gIGlzU1ZHID0gdGFyZ2V0LmdldENUTSAmJiBfaXNTVkcodGFyZ2V0KTtcblxuICBpZiAoKHRvUGVyY2VudCB8fCBjdXJVbml0ID09PSBcIiVcIikgJiYgKF90cmFuc2Zvcm1Qcm9wc1twcm9wZXJ0eV0gfHwgfnByb3BlcnR5LmluZGV4T2YoXCJhZGl1c1wiKSkpIHtcbiAgICBweCA9IGlzU1ZHID8gdGFyZ2V0LmdldEJCb3goKVtob3Jpem9udGFsID8gXCJ3aWR0aFwiIDogXCJoZWlnaHRcIl0gOiB0YXJnZXRbbWVhc3VyZVByb3BlcnR5XTtcbiAgICByZXR1cm4gX3JvdW5kKHRvUGVyY2VudCA/IGN1clZhbHVlIC8gcHggKiBhbW91bnQgOiBjdXJWYWx1ZSAvIDEwMCAqIHB4KTtcbiAgfVxuXG4gIHN0eWxlW2hvcml6b250YWwgPyBcIndpZHRoXCIgOiBcImhlaWdodFwiXSA9IGFtb3VudCArICh0b1BpeGVscyA/IGN1clVuaXQgOiB1bml0KTtcbiAgcGFyZW50ID0gfnByb3BlcnR5LmluZGV4T2YoXCJhZGl1c1wiKSB8fCB1bml0ID09PSBcImVtXCIgJiYgdGFyZ2V0LmFwcGVuZENoaWxkICYmICFpc1Jvb3RTVkcgPyB0YXJnZXQgOiB0YXJnZXQucGFyZW50Tm9kZTtcblxuICBpZiAoaXNTVkcpIHtcbiAgICBwYXJlbnQgPSAodGFyZ2V0Lm93bmVyU1ZHRWxlbWVudCB8fCB7fSkucGFyZW50Tm9kZTtcbiAgfVxuXG4gIGlmICghcGFyZW50IHx8IHBhcmVudCA9PT0gX2RvYyB8fCAhcGFyZW50LmFwcGVuZENoaWxkKSB7XG4gICAgcGFyZW50ID0gX2RvYy5ib2R5O1xuICB9XG5cbiAgY2FjaGUgPSBwYXJlbnQuX2dzYXA7XG5cbiAgaWYgKGNhY2hlICYmIHRvUGVyY2VudCAmJiBjYWNoZS53aWR0aCAmJiBob3Jpem9udGFsICYmIGNhY2hlLnRpbWUgPT09IF90aWNrZXIudGltZSkge1xuICAgIHJldHVybiBfcm91bmQoY3VyVmFsdWUgLyBjYWNoZS53aWR0aCAqIGFtb3VudCk7XG4gIH0gZWxzZSB7XG4gICAgKHRvUGVyY2VudCB8fCBjdXJVbml0ID09PSBcIiVcIikgJiYgKHN0eWxlLnBvc2l0aW9uID0gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBcInBvc2l0aW9uXCIpKTtcbiAgICBwYXJlbnQgPT09IHRhcmdldCAmJiAoc3R5bGUucG9zaXRpb24gPSBcInN0YXRpY1wiKTsgLy8gbGlrZSBmb3IgYm9yZGVyUmFkaXVzLCBpZiBpdCdzIGEgJSB3ZSBtdXN0IGhhdmUgaXQgcmVsYXRpdmUgdG8gdGhlIHRhcmdldCBpdHNlbGYgYnV0IHRoYXQgbWF5IG5vdCBoYXZlIHBvc2l0aW9uOiByZWxhdGl2ZSBvciBwb3NpdGlvbjogYWJzb2x1dGUgaW4gd2hpY2ggY2FzZSBpdCdkIGdvIHVwIHRoZSBjaGFpbiB1bnRpbCBpdCBmaW5kcyBpdHMgb2Zmc2V0UGFyZW50IChiYWQpLiBwb3NpdGlvbjogc3RhdGljIHByb3RlY3RzIGFnYWluc3QgdGhhdC5cblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChfdGVtcERpdik7XG4gICAgcHggPSBfdGVtcERpdlttZWFzdXJlUHJvcGVydHldO1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChfdGVtcERpdik7XG4gICAgc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5cbiAgICBpZiAoaG9yaXpvbnRhbCAmJiB0b1BlcmNlbnQpIHtcbiAgICAgIGNhY2hlID0gX2dldENhY2hlKHBhcmVudCk7XG4gICAgICBjYWNoZS50aW1lID0gX3RpY2tlci50aW1lO1xuICAgICAgY2FjaGUud2lkdGggPSBwYXJlbnRbbWVhc3VyZVByb3BlcnR5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX3JvdW5kKHRvUGl4ZWxzID8gcHggKiBjdXJWYWx1ZSAvIGFtb3VudCA6IHB4ICYmIGN1clZhbHVlID8gYW1vdW50IC8gcHggKiBjdXJWYWx1ZSA6IDApO1xufSxcbiAgICBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCB1bml0LCB1bmNhY2hlKSB7XG4gIHZhciB2YWx1ZTtcbiAgX3BsdWdpbkluaXR0ZWQgfHwgX2luaXRDb3JlKCk7XG5cbiAgaWYgKHByb3BlcnR5IGluIF9wcm9wZXJ0eUFsaWFzZXMgJiYgcHJvcGVydHkgIT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICBwcm9wZXJ0eSA9IF9wcm9wZXJ0eUFsaWFzZXNbcHJvcGVydHldO1xuXG4gICAgaWYgKH5wcm9wZXJ0eS5pbmRleE9mKFwiLFwiKSkge1xuICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eS5zcGxpdChcIixcIilbMF07XG4gICAgfVxuICB9XG5cbiAgaWYgKF90cmFuc2Zvcm1Qcm9wc1twcm9wZXJ0eV0gJiYgcHJvcGVydHkgIT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICB2YWx1ZSA9IF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIHVuY2FjaGUpO1xuICAgIHZhbHVlID0gcHJvcGVydHkgIT09IFwidHJhbnNmb3JtT3JpZ2luXCIgPyB2YWx1ZVtwcm9wZXJ0eV0gOiB2YWx1ZS5zdmcgPyB2YWx1ZS5vcmlnaW4gOiBfZmlyc3RUd29Pbmx5KF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybU9yaWdpblByb3ApKSArIFwiIFwiICsgdmFsdWUuek9yaWdpbiArIFwicHhcIjtcbiAgfSBlbHNlIHtcbiAgICB2YWx1ZSA9IHRhcmdldC5zdHlsZVtwcm9wZXJ0eV07XG5cbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlID09PSBcImF1dG9cIiB8fCB1bmNhY2hlIHx8IH4odmFsdWUgKyBcIlwiKS5pbmRleE9mKFwiY2FsYyhcIikpIHtcbiAgICAgIHZhbHVlID0gX3NwZWNpYWxQcm9wc1twcm9wZXJ0eV0gJiYgX3NwZWNpYWxQcm9wc1twcm9wZXJ0eV0odGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCkgfHwgX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSkgfHwgX2dldFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHkpIHx8IChwcm9wZXJ0eSA9PT0gXCJvcGFjaXR5XCIgPyAxIDogMCk7IC8vIG5vdGU6IHNvbWUgYnJvd3NlcnMsIGxpa2UgRmlyZWZveCwgZG9uJ3QgcmVwb3J0IGJvcmRlclJhZGl1cyBjb3JyZWN0bHkhIEluc3RlYWQsIGl0IG9ubHkgcmVwb3J0cyBldmVyeSBjb3JuZXIgbGlrZSAgYm9yZGVyVG9wTGVmdFJhZGl1c1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bml0ICYmICF+KHZhbHVlICsgXCJcIikudHJpbSgpLmluZGV4T2YoXCIgXCIpID8gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHVuaXQpICsgdW5pdCA6IHZhbHVlO1xufSxcbiAgICBfdHdlZW5Db21wbGV4Q1NTU3RyaW5nID0gZnVuY3Rpb24gX3R3ZWVuQ29tcGxleENTU1N0cmluZyh0YXJnZXQsIHByb3AsIHN0YXJ0LCBlbmQpIHtcbiAgLy9ub3RlOiB3ZSBjYWxsIF90d2VlbkNvbXBsZXhDU1NTdHJpbmcuY2FsbChwbHVnaW5JbnN0YW5jZS4uLikgdG8gZW5zdXJlIHRoYXQgaXQncyBzY29wZWQgcHJvcGVybHkuIFdlIG1heSBjYWxsIGl0IGZyb20gd2l0aGluIGEgcGx1Z2luIHRvbywgdGh1cyBcInRoaXNcIiB3b3VsZCByZWZlciB0byB0aGUgcGx1Z2luLlxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0ID09PSBcIm5vbmVcIikge1xuICAgIC8vIHNvbWUgYnJvd3NlcnMgbGlrZSBTYWZhcmkgYWN0dWFsbHkgUFJFRkVSIHRoZSBwcmVmaXhlZCBwcm9wZXJ0eSBhbmQgbWlzLXJlcG9ydCB0aGUgdW5wcmVmaXhlZCB2YWx1ZSBsaWtlIGNsaXBQYXRoIChCVUcpLiBJbiBvdGhlciB3b3JkcywgZXZlbiB0aG91Z2ggY2xpcFBhdGggZXhpc3RzIGluIHRoZSBzdHlsZSAoXCJjbGlwUGF0aFwiIGluIHRhcmdldC5zdHlsZSkgYW5kIGl0J3Mgc2V0IGluIHRoZSBDU1MgcHJvcGVybHkgKGFsb25nIHdpdGggLXdlYmtpdC1jbGlwLXBhdGgpLCBTYWZhcmkgcmVwb3J0cyBjbGlwUGF0aCBhcyBcIm5vbmVcIiB3aGVyZWFzIFdlYmtpdENsaXBQYXRoIHJlcG9ydHMgYWNjdXJhdGVseSBsaWtlIFwiZWxsaXBzZSgxMDAlIDAlIGF0IDUwJSAwJSlcIiwgc28gaW4gdGhpcyBjYXNlIHdlIG11c3QgU1dJVENIIHRvIHVzaW5nIHRoZSBwcmVmaXhlZCBwcm9wZXJ0eSBpbnN0ZWFkLiBTZWUgaHR0cHM6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy8xODMxMC1jbGlwcGF0aC1kb2VzbnQtd29yay1vbi1pb3MvXG4gICAgdmFyIHAgPSBfY2hlY2tQcm9wUHJlZml4KHByb3AsIHRhcmdldCwgMSksXG4gICAgICAgIHMgPSBwICYmIF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgcCwgMSk7XG5cbiAgICBpZiAocyAmJiBzICE9PSBzdGFydCkge1xuICAgICAgcHJvcCA9IHA7XG4gICAgICBzdGFydCA9IHM7XG4gICAgfSBlbHNlIGlmIChwcm9wID09PSBcImJvcmRlckNvbG9yXCIpIHtcbiAgICAgIHN0YXJ0ID0gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBcImJvcmRlclRvcENvbG9yXCIpOyAvLyBGaXJlZm94IGJ1ZzogYWx3YXlzIHJlcG9ydHMgXCJib3JkZXJDb2xvclwiIGFzIFwiXCIsIHNvIHdlIG11c3QgZmFsbCBiYWNrIHRvIGJvcmRlclRvcENvbG9yLiBTZWUgaHR0cHM6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy8yNDU4My1ob3ctdG8tcmV0dXJuLWNvbG9ycy10aGF0LWktaGFkLWFmdGVyLXJldmVyc2UvXG4gICAgfVxuICB9XG5cbiAgdmFyIHB0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgdGFyZ2V0LnN0eWxlLCBwcm9wLCAwLCAxLCBfcmVuZGVyQ29tcGxleFN0cmluZyksXG4gICAgICBpbmRleCA9IDAsXG4gICAgICBtYXRjaEluZGV4ID0gMCxcbiAgICAgIGEsXG4gICAgICByZXN1bHQsXG4gICAgICBzdGFydFZhbHVlcyxcbiAgICAgIHN0YXJ0TnVtLFxuICAgICAgY29sb3IsXG4gICAgICBzdGFydFZhbHVlLFxuICAgICAgZW5kVmFsdWUsXG4gICAgICBlbmROdW0sXG4gICAgICBjaHVuayxcbiAgICAgIGVuZFVuaXQsXG4gICAgICBzdGFydFVuaXQsXG4gICAgICByZWxhdGl2ZSxcbiAgICAgIGVuZFZhbHVlcztcbiAgcHQuYiA9IHN0YXJ0O1xuICBwdC5lID0gZW5kO1xuICBzdGFydCArPSBcIlwiOyAvL2Vuc3VyZSB2YWx1ZXMgYXJlIHN0cmluZ3NcblxuICBlbmQgKz0gXCJcIjtcblxuICBpZiAoZW5kID09PSBcImF1dG9cIikge1xuICAgIHRhcmdldC5zdHlsZVtwcm9wXSA9IGVuZDtcbiAgICBlbmQgPSBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIHByb3ApIHx8IGVuZDtcbiAgICB0YXJnZXQuc3R5bGVbcHJvcF0gPSBzdGFydDtcbiAgfVxuXG4gIGEgPSBbc3RhcnQsIGVuZF07XG5cbiAgX2NvbG9yU3RyaW5nRmlsdGVyKGEpOyAvL3Bhc3MgYW4gYXJyYXkgd2l0aCB0aGUgc3RhcnRpbmcgYW5kIGVuZGluZyB2YWx1ZXMgYW5kIGxldCB0aGUgZmlsdGVyIGRvIHdoYXRldmVyIGl0IG5lZWRzIHRvIHRoZSB2YWx1ZXMuIElmIGNvbG9ycyBhcmUgZm91bmQsIGl0IHJldHVybnMgdHJ1ZSBhbmQgdGhlbiB3ZSBtdXN0IG1hdGNoIHdoZXJlIHRoZSBjb2xvciBzaG93cyB1cCBvcmRlci13aXNlIGJlY2F1c2UgZm9yIHRoaW5ncyBsaWtlIGJveFNoYWRvdywgc29tZXRpbWVzIHRoZSBicm93c2VyIHByb3ZpZGVzIHRoZSBjb21wdXRlZCB2YWx1ZXMgd2l0aCB0aGUgY29sb3IgRklSU1QsIGJ1dCB0aGUgdXNlciBwcm92aWRlcyBpdCB3aXRoIHRoZSBjb2xvciBMQVNULCBzbyBmbGlwIHRoZW0gaWYgbmVjZXNzYXJ5LiBTYW1lIGZvciBkcm9wLXNoYWRvdygpLlxuXG5cbiAgc3RhcnQgPSBhWzBdO1xuICBlbmQgPSBhWzFdO1xuICBzdGFydFZhbHVlcyA9IHN0YXJ0Lm1hdGNoKF9udW1XaXRoVW5pdEV4cCkgfHwgW107XG4gIGVuZFZhbHVlcyA9IGVuZC5tYXRjaChfbnVtV2l0aFVuaXRFeHApIHx8IFtdO1xuXG4gIGlmIChlbmRWYWx1ZXMubGVuZ3RoKSB7XG4gICAgd2hpbGUgKHJlc3VsdCA9IF9udW1XaXRoVW5pdEV4cC5leGVjKGVuZCkpIHtcbiAgICAgIGVuZFZhbHVlID0gcmVzdWx0WzBdO1xuICAgICAgY2h1bmsgPSBlbmQuc3Vic3RyaW5nKGluZGV4LCByZXN1bHQuaW5kZXgpO1xuXG4gICAgICBpZiAoY29sb3IpIHtcbiAgICAgICAgY29sb3IgPSAoY29sb3IgKyAxKSAlIDU7XG4gICAgICB9IGVsc2UgaWYgKGNodW5rLnN1YnN0cigtNSkgPT09IFwicmdiYShcIiB8fCBjaHVuay5zdWJzdHIoLTUpID09PSBcImhzbGEoXCIpIHtcbiAgICAgICAgY29sb3IgPSAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW5kVmFsdWUgIT09IChzdGFydFZhbHVlID0gc3RhcnRWYWx1ZXNbbWF0Y2hJbmRleCsrXSB8fCBcIlwiKSkge1xuICAgICAgICBzdGFydE51bSA9IHBhcnNlRmxvYXQoc3RhcnRWYWx1ZSkgfHwgMDtcbiAgICAgICAgc3RhcnRVbml0ID0gc3RhcnRWYWx1ZS5zdWJzdHIoKHN0YXJ0TnVtICsgXCJcIikubGVuZ3RoKTtcbiAgICAgICAgcmVsYXRpdmUgPSBlbmRWYWx1ZS5jaGFyQXQoMSkgPT09IFwiPVwiID8gKyhlbmRWYWx1ZS5jaGFyQXQoMCkgKyBcIjFcIikgOiAwO1xuXG4gICAgICAgIGlmIChyZWxhdGl2ZSkge1xuICAgICAgICAgIGVuZFZhbHVlID0gZW5kVmFsdWUuc3Vic3RyKDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZW5kTnVtID0gcGFyc2VGbG9hdChlbmRWYWx1ZSk7XG4gICAgICAgIGVuZFVuaXQgPSBlbmRWYWx1ZS5zdWJzdHIoKGVuZE51bSArIFwiXCIpLmxlbmd0aCk7XG4gICAgICAgIGluZGV4ID0gX251bVdpdGhVbml0RXhwLmxhc3RJbmRleCAtIGVuZFVuaXQubGVuZ3RoO1xuXG4gICAgICAgIGlmICghZW5kVW5pdCkge1xuICAgICAgICAgIC8vaWYgc29tZXRoaW5nIGxpa2UgXCJwZXJzcGVjdGl2ZTozMDBcIiBpcyBwYXNzZWQgaW4gYW5kIHdlIG11c3QgYWRkIGEgdW5pdCB0byB0aGUgZW5kXG4gICAgICAgICAgZW5kVW5pdCA9IGVuZFVuaXQgfHwgX2NvbmZpZy51bml0c1twcm9wXSB8fCBzdGFydFVuaXQ7XG5cbiAgICAgICAgICBpZiAoaW5kZXggPT09IGVuZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVuZCArPSBlbmRVbml0O1xuICAgICAgICAgICAgcHQuZSArPSBlbmRVbml0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGFydFVuaXQgIT09IGVuZFVuaXQpIHtcbiAgICAgICAgICBzdGFydE51bSA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcHJvcCwgc3RhcnRWYWx1ZSwgZW5kVW5pdCkgfHwgMDtcbiAgICAgICAgfSAvL3RoZXNlIG5lc3RlZCBQcm9wVHdlZW5zIGFyZSBoYW5kbGVkIGluIGEgc3BlY2lhbCB3YXkgLSB3ZSdsbCBuZXZlciBhY3R1YWxseSBjYWxsIGEgcmVuZGVyIG9yIHNldHRlciBtZXRob2Qgb24gdGhlbS4gV2UnbGwganVzdCBsb29wIHRocm91Z2ggdGhlbSBpbiB0aGUgcGFyZW50IGNvbXBsZXggc3RyaW5nIFByb3BUd2VlbidzIHJlbmRlciBtZXRob2QuXG5cblxuICAgICAgICBwdC5fcHQgPSB7XG4gICAgICAgICAgX25leHQ6IHB0Ll9wdCxcbiAgICAgICAgICBwOiBjaHVuayB8fCBtYXRjaEluZGV4ID09PSAxID8gY2h1bmsgOiBcIixcIixcbiAgICAgICAgICAvL25vdGU6IFNWRyBzcGVjIGFsbG93cyBvbWlzc2lvbiBvZiBjb21tYS9zcGFjZSB3aGVuIGEgbmVnYXRpdmUgc2lnbiBpcyB3ZWRnZWQgYmV0d2VlbiB0d28gbnVtYmVycywgbGlrZSAyLjUtNS4zIGluc3RlYWQgb2YgMi41LC01LjMgYnV0IHdoZW4gdHdlZW5pbmcsIHRoZSBuZWdhdGl2ZSB2YWx1ZSBtYXkgc3dpdGNoIHRvIHBvc2l0aXZlLCBzbyB3ZSBpbnNlcnQgdGhlIGNvbW1hIGp1c3QgaW4gY2FzZS5cbiAgICAgICAgICBzOiBzdGFydE51bSxcbiAgICAgICAgICBjOiByZWxhdGl2ZSA/IHJlbGF0aXZlICogZW5kTnVtIDogZW5kTnVtIC0gc3RhcnROdW0sXG4gICAgICAgICAgbTogY29sb3IgJiYgY29sb3IgPCA0IHx8IHByb3AgPT09IFwiekluZGV4XCIgPyBNYXRoLnJvdW5kIDogMFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHB0LmMgPSBpbmRleCA8IGVuZC5sZW5ndGggPyBlbmQuc3Vic3RyaW5nKGluZGV4LCBlbmQubGVuZ3RoKSA6IFwiXCI7IC8vd2UgdXNlIHRoZSBcImNcIiBvZiB0aGUgUHJvcFR3ZWVuIHRvIHN0b3JlIHRoZSBmaW5hbCBwYXJ0IG9mIHRoZSBzdHJpbmcgKGFmdGVyIHRoZSBsYXN0IG51bWJlcilcbiAgfSBlbHNlIHtcbiAgICBwdC5yID0gcHJvcCA9PT0gXCJkaXNwbGF5XCIgJiYgZW5kID09PSBcIm5vbmVcIiA/IF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlT25seUF0RW5kIDogX3JlbmRlck5vblR3ZWVuaW5nVmFsdWU7XG4gIH1cblxuICBfcmVsRXhwLnRlc3QoZW5kKSAmJiAocHQuZSA9IDApOyAvL2lmIHRoZSBlbmQgc3RyaW5nIGNvbnRhaW5zIHJlbGF0aXZlIHZhbHVlcyBvciBkeW5hbWljIHJhbmRvbSguLi4pIHZhbHVlcywgZGVsZXRlIHRoZSBlbmQgaXQgc28gdGhhdCBvbiB0aGUgZmluYWwgcmVuZGVyIHdlIGRvbid0IGFjdHVhbGx5IHNldCBpdCB0byB0aGUgc3RyaW5nIHdpdGggKz0gb3IgLT0gY2hhcmFjdGVycyAoZm9yY2VzIGl0IHRvIHVzZSB0aGUgY2FsY3VsYXRlZCB2YWx1ZSkuXG5cbiAgdGhpcy5fcHQgPSBwdDsgLy9zdGFydCB0aGUgbGlua2VkIGxpc3Qgd2l0aCB0aGlzIG5ldyBQcm9wVHdlZW4uIFJlbWVtYmVyLCB3ZSBjYWxsIF90d2VlbkNvbXBsZXhDU1NTdHJpbmcuY2FsbChwbHVnaW5JbnN0YW5jZS4uLikgdG8gZW5zdXJlIHRoYXQgaXQncyBzY29wZWQgcHJvcGVybHkuIFdlIG1heSBjYWxsIGl0IGZyb20gd2l0aGluIGFub3RoZXIgcGx1Z2luIHRvbywgdGh1cyBcInRoaXNcIiB3b3VsZCByZWZlciB0byB0aGUgcGx1Z2luLlxuXG4gIHJldHVybiBwdDtcbn0sXG4gICAgX2tleXdvcmRUb1BlcmNlbnQgPSB7XG4gIHRvcDogXCIwJVwiLFxuICBib3R0b206IFwiMTAwJVwiLFxuICBsZWZ0OiBcIjAlXCIsXG4gIHJpZ2h0OiBcIjEwMCVcIixcbiAgY2VudGVyOiBcIjUwJVwiXG59LFxuICAgIF9jb252ZXJ0S2V5d29yZHNUb1BlcmNlbnRhZ2VzID0gZnVuY3Rpb24gX2NvbnZlcnRLZXl3b3Jkc1RvUGVyY2VudGFnZXModmFsdWUpIHtcbiAgdmFyIHNwbGl0ID0gdmFsdWUuc3BsaXQoXCIgXCIpLFxuICAgICAgeCA9IHNwbGl0WzBdLFxuICAgICAgeSA9IHNwbGl0WzFdIHx8IFwiNTAlXCI7XG5cbiAgaWYgKHggPT09IFwidG9wXCIgfHwgeCA9PT0gXCJib3R0b21cIiB8fCB5ID09PSBcImxlZnRcIiB8fCB5ID09PSBcInJpZ2h0XCIpIHtcbiAgICAvL3RoZSB1c2VyIHByb3ZpZGVkIHRoZW0gaW4gdGhlIHdyb25nIG9yZGVyLCBzbyBmbGlwIHRoZW1cbiAgICB2YWx1ZSA9IHg7XG4gICAgeCA9IHk7XG4gICAgeSA9IHZhbHVlO1xuICB9XG5cbiAgc3BsaXRbMF0gPSBfa2V5d29yZFRvUGVyY2VudFt4XSB8fCB4O1xuICBzcGxpdFsxXSA9IF9rZXl3b3JkVG9QZXJjZW50W3ldIHx8IHk7XG4gIHJldHVybiBzcGxpdC5qb2luKFwiIFwiKTtcbn0sXG4gICAgX3JlbmRlckNsZWFyUHJvcHMgPSBmdW5jdGlvbiBfcmVuZGVyQ2xlYXJQcm9wcyhyYXRpbywgZGF0YSkge1xuICBpZiAoZGF0YS50d2VlbiAmJiBkYXRhLnR3ZWVuLl90aW1lID09PSBkYXRhLnR3ZWVuLl9kdXIpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZGF0YS50LFxuICAgICAgICBzdHlsZSA9IHRhcmdldC5zdHlsZSxcbiAgICAgICAgcHJvcHMgPSBkYXRhLnUsXG4gICAgICAgIGNhY2hlID0gdGFyZ2V0Ll9nc2FwLFxuICAgICAgICBwcm9wLFxuICAgICAgICBjbGVhclRyYW5zZm9ybXMsXG4gICAgICAgIGk7XG5cbiAgICBpZiAocHJvcHMgPT09IFwiYWxsXCIgfHwgcHJvcHMgPT09IHRydWUpIHtcbiAgICAgIHN0eWxlLmNzc1RleHQgPSBcIlwiO1xuICAgICAgY2xlYXJUcmFuc2Zvcm1zID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcHMgPSBwcm9wcy5zcGxpdChcIixcIik7XG4gICAgICBpID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAoLS1pID4gLTEpIHtcbiAgICAgICAgcHJvcCA9IHByb3BzW2ldO1xuXG4gICAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHNbcHJvcF0pIHtcbiAgICAgICAgICBjbGVhclRyYW5zZm9ybXMgPSAxO1xuICAgICAgICAgIHByb3AgPSBwcm9wID09PSBcInRyYW5zZm9ybU9yaWdpblwiID8gX3RyYW5zZm9ybU9yaWdpblByb3AgOiBfdHJhbnNmb3JtUHJvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIF9yZW1vdmVQcm9wZXJ0eSh0YXJnZXQsIHByb3ApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjbGVhclRyYW5zZm9ybXMpIHtcbiAgICAgIF9yZW1vdmVQcm9wZXJ0eSh0YXJnZXQsIF90cmFuc2Zvcm1Qcm9wKTtcblxuICAgICAgaWYgKGNhY2hlKSB7XG4gICAgICAgIGNhY2hlLnN2ZyAmJiB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKFwidHJhbnNmb3JtXCIpO1xuXG4gICAgICAgIF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIDEpOyAvLyBmb3JjZSBhbGwgdGhlIGNhY2hlZCB2YWx1ZXMgYmFjayB0byBcIm5vcm1hbFwiL2lkZW50aXR5LCBvdGhlcndpc2UgaWYgdGhlcmUncyBhbm90aGVyIHR3ZWVuIHRoYXQncyBhbHJlYWR5IHNldCB0byByZW5kZXIgdHJhbnNmb3JtcyBvbiB0aGlzIGVsZW1lbnQsIGl0IGNvdWxkIGRpc3BsYXkgdGhlIHdyb25nIHZhbHVlcy5cblxuXG4gICAgICAgIGNhY2hlLnVuY2FjaGUgPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSxcbiAgICAvLyBub3RlOiBzcGVjaWFsUHJvcHMgc2hvdWxkIHJldHVybiAxIGlmIChhbmQgb25seSBpZikgdGhleSBoYXZlIGEgbm9uLXplcm8gcHJpb3JpdHkuIEl0IGluZGljYXRlcyB3ZSBuZWVkIHRvIHNvcnQgdGhlIGxpbmtlZCBsaXN0LlxuX3NwZWNpYWxQcm9wcyA9IHtcbiAgY2xlYXJQcm9wczogZnVuY3Rpb24gY2xlYXJQcm9wcyhwbHVnaW4sIHRhcmdldCwgcHJvcGVydHksIGVuZFZhbHVlLCB0d2Vlbikge1xuICAgIGlmICh0d2Vlbi5kYXRhICE9PSBcImlzRnJvbVN0YXJ0XCIpIHtcbiAgICAgIHZhciBwdCA9IHBsdWdpbi5fcHQgPSBuZXcgUHJvcFR3ZWVuKHBsdWdpbi5fcHQsIHRhcmdldCwgcHJvcGVydHksIDAsIDAsIF9yZW5kZXJDbGVhclByb3BzKTtcbiAgICAgIHB0LnUgPSBlbmRWYWx1ZTtcbiAgICAgIHB0LnByID0gLTEwO1xuICAgICAgcHQudHdlZW4gPSB0d2VlbjtcblxuICAgICAgcGx1Z2luLl9wcm9wcy5wdXNoKHByb3BlcnR5KTtcblxuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9XG4gIC8qIGNsYXNzTmFtZSBmZWF0dXJlIChhYm91dCAwLjRrYiBnemlwcGVkKS5cbiAgLCBjbGFzc05hbWUocGx1Z2luLCB0YXJnZXQsIHByb3BlcnR5LCBlbmRWYWx1ZSwgdHdlZW4pIHtcbiAgXHRsZXQgX3JlbmRlckNsYXNzTmFtZSA9IChyYXRpbywgZGF0YSkgPT4ge1xuICBcdFx0XHRkYXRhLmNzcy5yZW5kZXIocmF0aW8sIGRhdGEuY3NzKTtcbiAgXHRcdFx0aWYgKCFyYXRpbyB8fCByYXRpbyA9PT0gMSkge1xuICBcdFx0XHRcdGxldCBpbmxpbmUgPSBkYXRhLnJtdixcbiAgXHRcdFx0XHRcdHRhcmdldCA9IGRhdGEudCxcbiAgXHRcdFx0XHRcdHA7XG4gIFx0XHRcdFx0dGFyZ2V0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHJhdGlvID8gZGF0YS5lIDogZGF0YS5iKTtcbiAgXHRcdFx0XHRmb3IgKHAgaW4gaW5saW5lKSB7XG4gIFx0XHRcdFx0XHRfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBwKTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdH0sXG4gIFx0XHRfZ2V0QWxsU3R5bGVzID0gKHRhcmdldCkgPT4ge1xuICBcdFx0XHRsZXQgc3R5bGVzID0ge30sXG4gIFx0XHRcdFx0Y29tcHV0ZWQgPSBnZXRDb21wdXRlZFN0eWxlKHRhcmdldCksXG4gIFx0XHRcdFx0cDtcbiAgXHRcdFx0Zm9yIChwIGluIGNvbXB1dGVkKSB7XG4gIFx0XHRcdFx0aWYgKGlzTmFOKHApICYmIHAgIT09IFwiY3NzVGV4dFwiICYmIHAgIT09IFwibGVuZ3RoXCIpIHtcbiAgXHRcdFx0XHRcdHN0eWxlc1twXSA9IGNvbXB1dGVkW3BdO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuICBcdFx0XHRfc2V0RGVmYXVsdHMoc3R5bGVzLCBfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0LCAxKSk7XG4gIFx0XHRcdHJldHVybiBzdHlsZXM7XG4gIFx0XHR9LFxuICBcdFx0c3RhcnRDbGFzc0xpc3QgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIiksXG4gIFx0XHRzdHlsZSA9IHRhcmdldC5zdHlsZSxcbiAgXHRcdGNzc1RleHQgPSBzdHlsZS5jc3NUZXh0LFxuICBcdFx0Y2FjaGUgPSB0YXJnZXQuX2dzYXAsXG4gIFx0XHRjbGFzc1BUID0gY2FjaGUuY2xhc3NQVCxcbiAgXHRcdGlubGluZVRvUmVtb3ZlQXRFbmQgPSB7fSxcbiAgXHRcdGRhdGEgPSB7dDp0YXJnZXQsIHBsdWdpbjpwbHVnaW4sIHJtdjppbmxpbmVUb1JlbW92ZUF0RW5kLCBiOnN0YXJ0Q2xhc3NMaXN0LCBlOihlbmRWYWx1ZS5jaGFyQXQoMSkgIT09IFwiPVwiKSA/IGVuZFZhbHVlIDogc3RhcnRDbGFzc0xpc3QucmVwbGFjZShuZXcgUmVnRXhwKFwiKD86XFxcXHN8XilcIiArIGVuZFZhbHVlLnN1YnN0cigyKSArIFwiKD8hW1xcXFx3LV0pXCIpLCBcIlwiKSArICgoZW5kVmFsdWUuY2hhckF0KDApID09PSBcIitcIikgPyBcIiBcIiArIGVuZFZhbHVlLnN1YnN0cigyKSA6IFwiXCIpfSxcbiAgXHRcdGNoYW5naW5nVmFycyA9IHt9LFxuICBcdFx0c3RhcnRWYXJzID0gX2dldEFsbFN0eWxlcyh0YXJnZXQpLFxuICBcdFx0dHJhbnNmb3JtUmVsYXRlZCA9IC8odHJhbnNmb3JtfHBlcnNwZWN0aXZlKS9pLFxuICBcdFx0ZW5kVmFycywgcDtcbiAgXHRpZiAoY2xhc3NQVCkge1xuICBcdFx0Y2xhc3NQVC5yKDEsIGNsYXNzUFQuZCk7XG4gIFx0XHRfcmVtb3ZlTGlua2VkTGlzdEl0ZW0oY2xhc3NQVC5kLnBsdWdpbiwgY2xhc3NQVCwgXCJfcHRcIik7XG4gIFx0fVxuICBcdHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBkYXRhLmUpO1xuICBcdGVuZFZhcnMgPSBfZ2V0QWxsU3R5bGVzKHRhcmdldCwgdHJ1ZSk7XG4gIFx0dGFyZ2V0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHN0YXJ0Q2xhc3NMaXN0KTtcbiAgXHRmb3IgKHAgaW4gZW5kVmFycykge1xuICBcdFx0aWYgKGVuZFZhcnNbcF0gIT09IHN0YXJ0VmFyc1twXSAmJiAhdHJhbnNmb3JtUmVsYXRlZC50ZXN0KHApKSB7XG4gIFx0XHRcdGNoYW5naW5nVmFyc1twXSA9IGVuZFZhcnNbcF07XG4gIFx0XHRcdGlmICghc3R5bGVbcF0gJiYgc3R5bGVbcF0gIT09IFwiMFwiKSB7XG4gIFx0XHRcdFx0aW5saW5lVG9SZW1vdmVBdEVuZFtwXSA9IDE7XG4gIFx0XHRcdH1cbiAgXHRcdH1cbiAgXHR9XG4gIFx0Y2FjaGUuY2xhc3NQVCA9IHBsdWdpbi5fcHQgPSBuZXcgUHJvcFR3ZWVuKHBsdWdpbi5fcHQsIHRhcmdldCwgXCJjbGFzc05hbWVcIiwgMCwgMCwgX3JlbmRlckNsYXNzTmFtZSwgZGF0YSwgMCwgLTExKTtcbiAgXHRpZiAoc3R5bGUuY3NzVGV4dCAhPT0gY3NzVGV4dCkgeyAvL29ubHkgYXBwbHkgaWYgdGhpbmdzIGNoYW5nZS4gT3RoZXJ3aXNlLCBpbiBjYXNlcyBsaWtlIGEgYmFja2dyb3VuZC1pbWFnZSB0aGF0J3MgcHVsbGVkIGR5bmFtaWNhbGx5LCBpdCBjb3VsZCBjYXVzZSBhIHJlZnJlc2guIFNlZSBodHRwczovL2dyZWVuc29jay5jb20vZm9ydW1zL3RvcGljLzIwMzY4LXBvc3NpYmxlLWdzYXAtYnVnLXN3aXRjaGluZy1jbGFzc25hbWVzLWluLWNocm9tZS8uXG4gIFx0XHRzdHlsZS5jc3NUZXh0ID0gY3NzVGV4dDsgLy93ZSByZWNvcmRlZCBjc3NUZXh0IGJlZm9yZSB3ZSBzd2FwcGVkIGNsYXNzZXMgYW5kIHJhbiBfZ2V0QWxsU3R5bGVzKCkgYmVjYXVzZSBpbiBjYXNlcyB3aGVuIGEgY2xhc3NOYW1lIHR3ZWVuIGlzIG92ZXJ3cml0dGVuLCB3ZSByZW1vdmUgYWxsIHRoZSByZWxhdGVkIHR3ZWVuaW5nIHByb3BlcnRpZXMgZnJvbSB0aGF0IGNsYXNzIGNoYW5nZSAob3RoZXJ3aXNlIGNsYXNzLXNwZWNpZmljIHN0dWZmIGNhbid0IG92ZXJyaWRlIHByb3BlcnRpZXMgd2UndmUgZGlyZWN0bHkgc2V0IG9uIHRoZSB0YXJnZXQncyBzdHlsZSBvYmplY3QgZHVlIHRvIHNwZWNpZmljaXR5KS5cbiAgXHR9XG4gIFx0X3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgdHJ1ZSk7IC8vdG8gY2xlYXIgdGhlIGNhY2hpbmcgb2YgdHJhbnNmb3Jtc1xuICBcdGRhdGEuY3NzID0gbmV3IGdzYXAucGx1Z2lucy5jc3MoKTtcbiAgXHRkYXRhLmNzcy5pbml0KHRhcmdldCwgY2hhbmdpbmdWYXJzLCB0d2Vlbik7XG4gIFx0cGx1Z2luLl9wcm9wcy5wdXNoKC4uLmRhdGEuY3NzLl9wcm9wcyk7XG4gIFx0cmV0dXJuIDE7XG4gIH1cbiAgKi9cblxufSxcblxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBUUkFOU0ZPUk1TXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5faWRlbnRpdHkyRE1hdHJpeCA9IFsxLCAwLCAwLCAxLCAwLCAwXSxcbiAgICBfcm90YXRpb25hbFByb3BlcnRpZXMgPSB7fSxcbiAgICBfaXNOdWxsVHJhbnNmb3JtID0gZnVuY3Rpb24gX2lzTnVsbFRyYW5zZm9ybSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IFwibWF0cml4KDEsIDAsIDAsIDEsIDAsIDApXCIgfHwgdmFsdWUgPT09IFwibm9uZVwiIHx8ICF2YWx1ZTtcbn0sXG4gICAgX2dldENvbXB1dGVkVHJhbnNmb3JtTWF0cml4QXNBcnJheSA9IGZ1bmN0aW9uIF9nZXRDb21wdXRlZFRyYW5zZm9ybU1hdHJpeEFzQXJyYXkodGFyZ2V0KSB7XG4gIHZhciBtYXRyaXhTdHJpbmcgPSBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIF90cmFuc2Zvcm1Qcm9wKTtcblxuICByZXR1cm4gX2lzTnVsbFRyYW5zZm9ybShtYXRyaXhTdHJpbmcpID8gX2lkZW50aXR5MkRNYXRyaXggOiBtYXRyaXhTdHJpbmcuc3Vic3RyKDcpLm1hdGNoKF9udW1FeHApLm1hcChfcm91bmQpO1xufSxcbiAgICBfZ2V0TWF0cml4ID0gZnVuY3Rpb24gX2dldE1hdHJpeCh0YXJnZXQsIGZvcmNlMkQpIHtcbiAgdmFyIGNhY2hlID0gdGFyZ2V0Ll9nc2FwIHx8IF9nZXRDYWNoZSh0YXJnZXQpLFxuICAgICAgc3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gICAgICBtYXRyaXggPSBfZ2V0Q29tcHV0ZWRUcmFuc2Zvcm1NYXRyaXhBc0FycmF5KHRhcmdldCksXG4gICAgICBwYXJlbnQsXG4gICAgICBuZXh0U2libGluZyxcbiAgICAgIHRlbXAsXG4gICAgICBhZGRlZFRvRE9NO1xuXG4gIGlmIChjYWNoZS5zdmcgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKSkge1xuICAgIHRlbXAgPSB0YXJnZXQudHJhbnNmb3JtLmJhc2VWYWwuY29uc29saWRhdGUoKS5tYXRyaXg7IC8vZW5zdXJlcyB0aGF0IGV2ZW4gY29tcGxleCB2YWx1ZXMgbGlrZSBcInRyYW5zbGF0ZSg1MCw2MCkgcm90YXRlKDEzNSwwLDApXCIgYXJlIHBhcnNlZCBiZWNhdXNlIGl0IG1hc2hlcyBpdCBpbnRvIGEgbWF0cml4LlxuXG4gICAgbWF0cml4ID0gW3RlbXAuYSwgdGVtcC5iLCB0ZW1wLmMsIHRlbXAuZCwgdGVtcC5lLCB0ZW1wLmZdO1xuICAgIHJldHVybiBtYXRyaXguam9pbihcIixcIikgPT09IFwiMSwwLDAsMSwwLDBcIiA/IF9pZGVudGl0eTJETWF0cml4IDogbWF0cml4O1xuICB9IGVsc2UgaWYgKG1hdHJpeCA9PT0gX2lkZW50aXR5MkRNYXRyaXggJiYgIXRhcmdldC5vZmZzZXRQYXJlbnQgJiYgdGFyZ2V0ICE9PSBfZG9jRWxlbWVudCAmJiAhY2FjaGUuc3ZnKSB7XG4gICAgLy9ub3RlOiBpZiBvZmZzZXRQYXJlbnQgaXMgbnVsbCwgdGhhdCBtZWFucyB0aGUgZWxlbWVudCBpc24ndCBpbiB0aGUgbm9ybWFsIGRvY3VtZW50IGZsb3csIGxpa2UgaWYgaXQgaGFzIGRpc3BsYXk6bm9uZSBvciBvbmUgb2YgaXRzIGFuY2VzdG9ycyBoYXMgZGlzcGxheTpub25lKS4gRmlyZWZveCByZXR1cm5zIG51bGwgZm9yIGdldENvbXB1dGVkU3R5bGUoKSBpZiB0aGUgZWxlbWVudCBpcyBpbiBhbiBpZnJhbWUgdGhhdCBoYXMgZGlzcGxheTpub25lLiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NDgzOTdcbiAgICAvL2Jyb3dzZXJzIGRvbid0IHJlcG9ydCB0cmFuc2Zvcm1zIGFjY3VyYXRlbHkgdW5sZXNzIHRoZSBlbGVtZW50IGlzIGluIHRoZSBET00gYW5kIGhhcyBhIGRpc3BsYXkgdmFsdWUgdGhhdCdzIG5vdCBcIm5vbmVcIi4gRmlyZWZveCBhbmQgTWljcm9zb2Z0IGJyb3dzZXJzIGhhdmUgYSBwYXJ0aWFsIGJ1ZyB3aGVyZSB0aGV5J2xsIHJlcG9ydCB0cmFuc2Zvcm1zIGV2ZW4gaWYgZGlzcGxheTpub25lIEJVVCBub3QgYW55IHBlcmNlbnRhZ2UtYmFzZWQgdmFsdWVzIGxpa2UgdHJhbnNsYXRlKC01MCUsIDhweCkgd2lsbCBiZSByZXBvcnRlZCBhcyBpZiBpdCdzIHRyYW5zbGF0ZSgwLCA4cHgpLlxuICAgIHRlbXAgPSBzdHlsZS5kaXNwbGF5O1xuICAgIHN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG5cbiAgICBpZiAoIXBhcmVudCB8fCAhdGFyZ2V0Lm9mZnNldFBhcmVudCkge1xuICAgICAgLy8gbm90ZTogaW4gMy4zLjAgd2Ugc3dpdGNoZWQgdGFyZ2V0Lm9mZnNldFBhcmVudCB0byBfZG9jLmJvZHkuY29udGFpbnModGFyZ2V0KSB0byBhdm9pZCBbc29tZXRpbWVzIHVubmVjZXNzYXJ5XSBNdXRhdGlvbk9ic2VydmVyIGNhbGxzIGJ1dCB0aGF0IHdhc24ndCBhZGVxdWF0ZSBiZWNhdXNlIHRoZXJlIGFyZSBlZGdlIGNhc2VzIHdoZXJlIG5lc3RlZCBwb3NpdGlvbjogZml4ZWQgZWxlbWVudHMgbmVlZCB0byBnZXQgcmVwYXJlbnRlZCB0byBhY2N1cmF0ZWx5IHNlbnNlIHRyYW5zZm9ybXMuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZ3JlZW5zb2NrL0dTQVAvaXNzdWVzLzM4OCBhbmQgaHR0cHM6Ly9naXRodWIuY29tL2dyZWVuc29jay9HU0FQL2lzc3Vlcy8zNzVcbiAgICAgIGFkZGVkVG9ET00gPSAxOyAvL2ZsYWdcblxuICAgICAgbmV4dFNpYmxpbmcgPSB0YXJnZXQubmV4dFNpYmxpbmc7XG5cbiAgICAgIF9kb2NFbGVtZW50LmFwcGVuZENoaWxkKHRhcmdldCk7IC8vd2UgbXVzdCBhZGQgaXQgdG8gdGhlIERPTSBpbiBvcmRlciB0byBnZXQgdmFsdWVzIHByb3Blcmx5XG5cbiAgICB9XG5cbiAgICBtYXRyaXggPSBfZ2V0Q29tcHV0ZWRUcmFuc2Zvcm1NYXRyaXhBc0FycmF5KHRhcmdldCk7XG4gICAgdGVtcCA/IHN0eWxlLmRpc3BsYXkgPSB0ZW1wIDogX3JlbW92ZVByb3BlcnR5KHRhcmdldCwgXCJkaXNwbGF5XCIpO1xuXG4gICAgaWYgKGFkZGVkVG9ET00pIHtcbiAgICAgIG5leHRTaWJsaW5nID8gcGFyZW50Lmluc2VydEJlZm9yZSh0YXJnZXQsIG5leHRTaWJsaW5nKSA6IHBhcmVudCA/IHBhcmVudC5hcHBlbmRDaGlsZCh0YXJnZXQpIDogX2RvY0VsZW1lbnQucmVtb3ZlQ2hpbGQodGFyZ2V0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9yY2UyRCAmJiBtYXRyaXgubGVuZ3RoID4gNiA/IFttYXRyaXhbMF0sIG1hdHJpeFsxXSwgbWF0cml4WzRdLCBtYXRyaXhbNV0sIG1hdHJpeFsxMl0sIG1hdHJpeFsxM11dIDogbWF0cml4O1xufSxcbiAgICBfYXBwbHlTVkdPcmlnaW4gPSBmdW5jdGlvbiBfYXBwbHlTVkdPcmlnaW4odGFyZ2V0LCBvcmlnaW4sIG9yaWdpbklzQWJzb2x1dGUsIHNtb290aCwgbWF0cml4QXJyYXksIHBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvKSB7XG4gIHZhciBjYWNoZSA9IHRhcmdldC5fZ3NhcCxcbiAgICAgIG1hdHJpeCA9IG1hdHJpeEFycmF5IHx8IF9nZXRNYXRyaXgodGFyZ2V0LCB0cnVlKSxcbiAgICAgIHhPcmlnaW5PbGQgPSBjYWNoZS54T3JpZ2luIHx8IDAsXG4gICAgICB5T3JpZ2luT2xkID0gY2FjaGUueU9yaWdpbiB8fCAwLFxuICAgICAgeE9mZnNldE9sZCA9IGNhY2hlLnhPZmZzZXQgfHwgMCxcbiAgICAgIHlPZmZzZXRPbGQgPSBjYWNoZS55T2Zmc2V0IHx8IDAsXG4gICAgICBhID0gbWF0cml4WzBdLFxuICAgICAgYiA9IG1hdHJpeFsxXSxcbiAgICAgIGMgPSBtYXRyaXhbMl0sXG4gICAgICBkID0gbWF0cml4WzNdLFxuICAgICAgdHggPSBtYXRyaXhbNF0sXG4gICAgICB0eSA9IG1hdHJpeFs1XSxcbiAgICAgIG9yaWdpblNwbGl0ID0gb3JpZ2luLnNwbGl0KFwiIFwiKSxcbiAgICAgIHhPcmlnaW4gPSBwYXJzZUZsb2F0KG9yaWdpblNwbGl0WzBdKSB8fCAwLFxuICAgICAgeU9yaWdpbiA9IHBhcnNlRmxvYXQob3JpZ2luU3BsaXRbMV0pIHx8IDAsXG4gICAgICBib3VuZHMsXG4gICAgICBkZXRlcm1pbmFudCxcbiAgICAgIHgsXG4gICAgICB5O1xuXG4gIGlmICghb3JpZ2luSXNBYnNvbHV0ZSkge1xuICAgIGJvdW5kcyA9IF9nZXRCQm94KHRhcmdldCk7XG4gICAgeE9yaWdpbiA9IGJvdW5kcy54ICsgKH5vcmlnaW5TcGxpdFswXS5pbmRleE9mKFwiJVwiKSA/IHhPcmlnaW4gLyAxMDAgKiBib3VuZHMud2lkdGggOiB4T3JpZ2luKTtcbiAgICB5T3JpZ2luID0gYm91bmRzLnkgKyAofihvcmlnaW5TcGxpdFsxXSB8fCBvcmlnaW5TcGxpdFswXSkuaW5kZXhPZihcIiVcIikgPyB5T3JpZ2luIC8gMTAwICogYm91bmRzLmhlaWdodCA6IHlPcmlnaW4pO1xuICB9IGVsc2UgaWYgKG1hdHJpeCAhPT0gX2lkZW50aXR5MkRNYXRyaXggJiYgKGRldGVybWluYW50ID0gYSAqIGQgLSBiICogYykpIHtcbiAgICAvL2lmIGl0J3MgemVybyAobGlrZSBpZiBzY2FsZVggYW5kIHNjYWxlWSBhcmUgemVybyksIHNraXAgaXQgdG8gYXZvaWQgZXJyb3JzIHdpdGggZGl2aWRpbmcgYnkgemVyby5cbiAgICB4ID0geE9yaWdpbiAqIChkIC8gZGV0ZXJtaW5hbnQpICsgeU9yaWdpbiAqICgtYyAvIGRldGVybWluYW50KSArIChjICogdHkgLSBkICogdHgpIC8gZGV0ZXJtaW5hbnQ7XG4gICAgeSA9IHhPcmlnaW4gKiAoLWIgLyBkZXRlcm1pbmFudCkgKyB5T3JpZ2luICogKGEgLyBkZXRlcm1pbmFudCkgLSAoYSAqIHR5IC0gYiAqIHR4KSAvIGRldGVybWluYW50O1xuICAgIHhPcmlnaW4gPSB4O1xuICAgIHlPcmlnaW4gPSB5O1xuICB9XG5cbiAgaWYgKHNtb290aCB8fCBzbW9vdGggIT09IGZhbHNlICYmIGNhY2hlLnNtb290aCkge1xuICAgIHR4ID0geE9yaWdpbiAtIHhPcmlnaW5PbGQ7XG4gICAgdHkgPSB5T3JpZ2luIC0geU9yaWdpbk9sZDtcbiAgICBjYWNoZS54T2Zmc2V0ID0geE9mZnNldE9sZCArICh0eCAqIGEgKyB0eSAqIGMpIC0gdHg7XG4gICAgY2FjaGUueU9mZnNldCA9IHlPZmZzZXRPbGQgKyAodHggKiBiICsgdHkgKiBkKSAtIHR5O1xuICB9IGVsc2Uge1xuICAgIGNhY2hlLnhPZmZzZXQgPSBjYWNoZS55T2Zmc2V0ID0gMDtcbiAgfVxuXG4gIGNhY2hlLnhPcmlnaW4gPSB4T3JpZ2luO1xuICBjYWNoZS55T3JpZ2luID0geU9yaWdpbjtcbiAgY2FjaGUuc21vb3RoID0gISFzbW9vdGg7XG4gIGNhY2hlLm9yaWdpbiA9IG9yaWdpbjtcbiAgY2FjaGUub3JpZ2luSXNBYnNvbHV0ZSA9ICEhb3JpZ2luSXNBYnNvbHV0ZTtcbiAgdGFyZ2V0LnN0eWxlW190cmFuc2Zvcm1PcmlnaW5Qcm9wXSA9IFwiMHB4IDBweFwiOyAvL290aGVyd2lzZSwgaWYgc29tZW9uZSBzZXRzICBhbiBvcmlnaW4gdmlhIENTUywgaXQgd2lsbCBsaWtlbHkgaW50ZXJmZXJlIHdpdGggdGhlIFNWRyB0cmFuc2Zvcm0gYXR0cmlidXRlIG9uZXMgKGJlY2F1c2UgcmVtZW1iZXIsIHdlJ3JlIGJha2luZyB0aGUgb3JpZ2luIGludG8gdGhlIG1hdHJpeCgpIHZhbHVlKS5cblxuICBpZiAocGx1Z2luVG9BZGRQcm9wVHdlZW5zVG8pIHtcbiAgICBfYWRkTm9uVHdlZW5pbmdQVChwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbywgY2FjaGUsIFwieE9yaWdpblwiLCB4T3JpZ2luT2xkLCB4T3JpZ2luKTtcblxuICAgIF9hZGROb25Ud2VlbmluZ1BUKHBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvLCBjYWNoZSwgXCJ5T3JpZ2luXCIsIHlPcmlnaW5PbGQsIHlPcmlnaW4pO1xuXG4gICAgX2FkZE5vblR3ZWVuaW5nUFQocGx1Z2luVG9BZGRQcm9wVHdlZW5zVG8sIGNhY2hlLCBcInhPZmZzZXRcIiwgeE9mZnNldE9sZCwgY2FjaGUueE9mZnNldCk7XG5cbiAgICBfYWRkTm9uVHdlZW5pbmdQVChwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbywgY2FjaGUsIFwieU9mZnNldFwiLCB5T2Zmc2V0T2xkLCBjYWNoZS55T2Zmc2V0KTtcbiAgfVxuXG4gIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN2Zy1vcmlnaW5cIiwgeE9yaWdpbiArIFwiIFwiICsgeU9yaWdpbik7XG59LFxuICAgIF9wYXJzZVRyYW5zZm9ybSA9IGZ1bmN0aW9uIF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIHVuY2FjaGUpIHtcbiAgdmFyIGNhY2hlID0gdGFyZ2V0Ll9nc2FwIHx8IG5ldyBHU0NhY2hlKHRhcmdldCk7XG5cbiAgaWYgKFwieFwiIGluIGNhY2hlICYmICF1bmNhY2hlICYmICFjYWNoZS51bmNhY2hlKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9XG5cbiAgdmFyIHN0eWxlID0gdGFyZ2V0LnN0eWxlLFxuICAgICAgaW52ZXJ0ZWRTY2FsZVggPSBjYWNoZS5zY2FsZVggPCAwLFxuICAgICAgcHggPSBcInB4XCIsXG4gICAgICBkZWcgPSBcImRlZ1wiLFxuICAgICAgb3JpZ2luID0gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBfdHJhbnNmb3JtT3JpZ2luUHJvcCkgfHwgXCIwXCIsXG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIHosXG4gICAgICBzY2FsZVgsXG4gICAgICBzY2FsZVksXG4gICAgICByb3RhdGlvbixcbiAgICAgIHJvdGF0aW9uWCxcbiAgICAgIHJvdGF0aW9uWSxcbiAgICAgIHNrZXdYLFxuICAgICAgc2tld1ksXG4gICAgICBwZXJzcGVjdGl2ZSxcbiAgICAgIHhPcmlnaW4sXG4gICAgICB5T3JpZ2luLFxuICAgICAgbWF0cml4LFxuICAgICAgYW5nbGUsXG4gICAgICBjb3MsXG4gICAgICBzaW4sXG4gICAgICBhLFxuICAgICAgYixcbiAgICAgIGMsXG4gICAgICBkLFxuICAgICAgYTEyLFxuICAgICAgYTIyLFxuICAgICAgdDEsXG4gICAgICB0MixcbiAgICAgIHQzLFxuICAgICAgYTEzLFxuICAgICAgYTIzLFxuICAgICAgYTMzLFxuICAgICAgYTQyLFxuICAgICAgYTQzLFxuICAgICAgYTMyO1xuICB4ID0geSA9IHogPSByb3RhdGlvbiA9IHJvdGF0aW9uWCA9IHJvdGF0aW9uWSA9IHNrZXdYID0gc2tld1kgPSBwZXJzcGVjdGl2ZSA9IDA7XG4gIHNjYWxlWCA9IHNjYWxlWSA9IDE7XG4gIGNhY2hlLnN2ZyA9ICEhKHRhcmdldC5nZXRDVE0gJiYgX2lzU1ZHKHRhcmdldCkpO1xuICBtYXRyaXggPSBfZ2V0TWF0cml4KHRhcmdldCwgY2FjaGUuc3ZnKTtcblxuICBpZiAoY2FjaGUuc3ZnKSB7XG4gICAgdDEgPSAoIWNhY2hlLnVuY2FjaGUgfHwgb3JpZ2luID09PSBcIjBweCAwcHhcIikgJiYgIXVuY2FjaGUgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtc3ZnLW9yaWdpblwiKTsgLy8gaWYgb3JpZ2luIGlzIDAsMCBhbmQgY2FjaGUudW5jYWNoZSBpcyB0cnVlLCBsZXQgdGhlIHJlY29yZGVkIGRhdGEtc3ZnLW9yaWdpbiBzdGF5LiBPdGhlcndpc2UsIHdoZW5ldmVyIHdlIHNldCBjYWNoZS51bmNhY2hlIHRvIHRydWUsIHdlJ2QgbmVlZCB0byBzZXQgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSAoY2FjaGUueE9yaWdpbiAtIGJib3gueCkgKyBcInB4IFwiICsgKGNhY2hlLnlPcmlnaW4gLSBiYm94LnkpICsgXCJweFwiLiBSZW1lbWJlciwgdG8gd29yayBhcm91bmQgYnJvd3NlciBpbmNvbnNpc3RlbmNpZXMgd2UgYWx3YXlzIGZvcmNlIFNWRyBlbGVtZW50cycgdHJhbnNmb3JtT3JpZ2luIHRvIDAsMCBhbmQgb2Zmc2V0IHRoZSB0cmFuc2xhdGlvbiBhY2NvcmRpbmdseS5cblxuICAgIF9hcHBseVNWR09yaWdpbih0YXJnZXQsIHQxIHx8IG9yaWdpbiwgISF0MSB8fCBjYWNoZS5vcmlnaW5Jc0Fic29sdXRlLCBjYWNoZS5zbW9vdGggIT09IGZhbHNlLCBtYXRyaXgpO1xuICB9XG5cbiAgeE9yaWdpbiA9IGNhY2hlLnhPcmlnaW4gfHwgMDtcbiAgeU9yaWdpbiA9IGNhY2hlLnlPcmlnaW4gfHwgMDtcblxuICBpZiAobWF0cml4ICE9PSBfaWRlbnRpdHkyRE1hdHJpeCkge1xuICAgIGEgPSBtYXRyaXhbMF07IC8vYTExXG5cbiAgICBiID0gbWF0cml4WzFdOyAvL2EyMVxuXG4gICAgYyA9IG1hdHJpeFsyXTsgLy9hMzFcblxuICAgIGQgPSBtYXRyaXhbM107IC8vYTQxXG5cbiAgICB4ID0gYTEyID0gbWF0cml4WzRdO1xuICAgIHkgPSBhMjIgPSBtYXRyaXhbNV07IC8vMkQgbWF0cml4XG5cbiAgICBpZiAobWF0cml4Lmxlbmd0aCA9PT0gNikge1xuICAgICAgc2NhbGVYID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuICAgICAgc2NhbGVZID0gTWF0aC5zcXJ0KGQgKiBkICsgYyAqIGMpO1xuICAgICAgcm90YXRpb24gPSBhIHx8IGIgPyBfYXRhbjIoYiwgYSkgKiBfUkFEMkRFRyA6IDA7IC8vbm90ZTogaWYgc2NhbGVYIGlzIDAsIHdlIGNhbm5vdCBhY2N1cmF0ZWx5IG1lYXN1cmUgcm90YXRpb24uIFNhbWUgZm9yIHNrZXdYIHdpdGggYSBzY2FsZVkgb2YgMC4gVGhlcmVmb3JlLCB3ZSBkZWZhdWx0IHRvIHRoZSBwcmV2aW91c2x5IHJlY29yZGVkIHZhbHVlIChvciB6ZXJvIGlmIHRoYXQgZG9lc24ndCBleGlzdCkuXG5cbiAgICAgIHNrZXdYID0gYyB8fCBkID8gX2F0YW4yKGMsIGQpICogX1JBRDJERUcgKyByb3RhdGlvbiA6IDA7XG4gICAgICBza2V3WCAmJiAoc2NhbGVZICo9IE1hdGguYWJzKE1hdGguY29zKHNrZXdYICogX0RFRzJSQUQpKSk7XG5cbiAgICAgIGlmIChjYWNoZS5zdmcpIHtcbiAgICAgICAgeCAtPSB4T3JpZ2luIC0gKHhPcmlnaW4gKiBhICsgeU9yaWdpbiAqIGMpO1xuICAgICAgICB5IC09IHlPcmlnaW4gLSAoeE9yaWdpbiAqIGIgKyB5T3JpZ2luICogZCk7XG4gICAgICB9IC8vM0QgbWF0cml4XG5cbiAgICB9IGVsc2Uge1xuICAgICAgYTMyID0gbWF0cml4WzZdO1xuICAgICAgYTQyID0gbWF0cml4WzddO1xuICAgICAgYTEzID0gbWF0cml4WzhdO1xuICAgICAgYTIzID0gbWF0cml4WzldO1xuICAgICAgYTMzID0gbWF0cml4WzEwXTtcbiAgICAgIGE0MyA9IG1hdHJpeFsxMV07XG4gICAgICB4ID0gbWF0cml4WzEyXTtcbiAgICAgIHkgPSBtYXRyaXhbMTNdO1xuICAgICAgeiA9IG1hdHJpeFsxNF07XG4gICAgICBhbmdsZSA9IF9hdGFuMihhMzIsIGEzMyk7XG4gICAgICByb3RhdGlvblggPSBhbmdsZSAqIF9SQUQyREVHOyAvL3JvdGF0aW9uWFxuXG4gICAgICBpZiAoYW5nbGUpIHtcbiAgICAgICAgY29zID0gTWF0aC5jb3MoLWFuZ2xlKTtcbiAgICAgICAgc2luID0gTWF0aC5zaW4oLWFuZ2xlKTtcbiAgICAgICAgdDEgPSBhMTIgKiBjb3MgKyBhMTMgKiBzaW47XG4gICAgICAgIHQyID0gYTIyICogY29zICsgYTIzICogc2luO1xuICAgICAgICB0MyA9IGEzMiAqIGNvcyArIGEzMyAqIHNpbjtcbiAgICAgICAgYTEzID0gYTEyICogLXNpbiArIGExMyAqIGNvcztcbiAgICAgICAgYTIzID0gYTIyICogLXNpbiArIGEyMyAqIGNvcztcbiAgICAgICAgYTMzID0gYTMyICogLXNpbiArIGEzMyAqIGNvcztcbiAgICAgICAgYTQzID0gYTQyICogLXNpbiArIGE0MyAqIGNvcztcbiAgICAgICAgYTEyID0gdDE7XG4gICAgICAgIGEyMiA9IHQyO1xuICAgICAgICBhMzIgPSB0MztcbiAgICAgIH0gLy9yb3RhdGlvbllcblxuXG4gICAgICBhbmdsZSA9IF9hdGFuMigtYywgYTMzKTtcbiAgICAgIHJvdGF0aW9uWSA9IGFuZ2xlICogX1JBRDJERUc7XG5cbiAgICAgIGlmIChhbmdsZSkge1xuICAgICAgICBjb3MgPSBNYXRoLmNvcygtYW5nbGUpO1xuICAgICAgICBzaW4gPSBNYXRoLnNpbigtYW5nbGUpO1xuICAgICAgICB0MSA9IGEgKiBjb3MgLSBhMTMgKiBzaW47XG4gICAgICAgIHQyID0gYiAqIGNvcyAtIGEyMyAqIHNpbjtcbiAgICAgICAgdDMgPSBjICogY29zIC0gYTMzICogc2luO1xuICAgICAgICBhNDMgPSBkICogc2luICsgYTQzICogY29zO1xuICAgICAgICBhID0gdDE7XG4gICAgICAgIGIgPSB0MjtcbiAgICAgICAgYyA9IHQzO1xuICAgICAgfSAvL3JvdGF0aW9uWlxuXG5cbiAgICAgIGFuZ2xlID0gX2F0YW4yKGIsIGEpO1xuICAgICAgcm90YXRpb24gPSBhbmdsZSAqIF9SQUQyREVHO1xuXG4gICAgICBpZiAoYW5nbGUpIHtcbiAgICAgICAgY29zID0gTWF0aC5jb3MoYW5nbGUpO1xuICAgICAgICBzaW4gPSBNYXRoLnNpbihhbmdsZSk7XG4gICAgICAgIHQxID0gYSAqIGNvcyArIGIgKiBzaW47XG4gICAgICAgIHQyID0gYTEyICogY29zICsgYTIyICogc2luO1xuICAgICAgICBiID0gYiAqIGNvcyAtIGEgKiBzaW47XG4gICAgICAgIGEyMiA9IGEyMiAqIGNvcyAtIGExMiAqIHNpbjtcbiAgICAgICAgYSA9IHQxO1xuICAgICAgICBhMTIgPSB0MjtcbiAgICAgIH1cblxuICAgICAgaWYgKHJvdGF0aW9uWCAmJiBNYXRoLmFicyhyb3RhdGlvblgpICsgTWF0aC5hYnMocm90YXRpb24pID4gMzU5LjkpIHtcbiAgICAgICAgLy93aGVuIHJvdGF0aW9uWSBpcyBzZXQsIGl0IHdpbGwgb2Z0ZW4gYmUgcGFyc2VkIGFzIDE4MCBkZWdyZWVzIGRpZmZlcmVudCB0aGFuIGl0IHNob3VsZCBiZSwgYW5kIHJvdGF0aW9uWCBhbmQgcm90YXRpb24gYm90aCBiZWluZyAxODAgKGl0IGxvb2tzIHRoZSBzYW1lKSwgc28gd2UgYWRqdXN0IGZvciB0aGF0IGhlcmUuXG4gICAgICAgIHJvdGF0aW9uWCA9IHJvdGF0aW9uID0gMDtcbiAgICAgICAgcm90YXRpb25ZID0gMTgwIC0gcm90YXRpb25ZO1xuICAgICAgfVxuXG4gICAgICBzY2FsZVggPSBfcm91bmQoTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIgKyBjICogYykpO1xuICAgICAgc2NhbGVZID0gX3JvdW5kKE1hdGguc3FydChhMjIgKiBhMjIgKyBhMzIgKiBhMzIpKTtcbiAgICAgIGFuZ2xlID0gX2F0YW4yKGExMiwgYTIyKTtcbiAgICAgIHNrZXdYID0gTWF0aC5hYnMoYW5nbGUpID4gMC4wMDAyID8gYW5nbGUgKiBfUkFEMkRFRyA6IDA7XG4gICAgICBwZXJzcGVjdGl2ZSA9IGE0MyA/IDEgLyAoYTQzIDwgMCA/IC1hNDMgOiBhNDMpIDogMDtcbiAgICB9XG5cbiAgICBpZiAoY2FjaGUuc3ZnKSB7XG4gICAgICAvL3NlbnNlIGlmIHRoZXJlIGFyZSBDU1MgdHJhbnNmb3JtcyBhcHBsaWVkIG9uIGFuIFNWRyBlbGVtZW50IGluIHdoaWNoIGNhc2Ugd2UgbXVzdCBvdmVyd3JpdGUgdGhlbSB3aGVuIHJlbmRlcmluZy4gVGhlIHRyYW5zZm9ybSBhdHRyaWJ1dGUgaXMgbW9yZSByZWxpYWJsZSBjcm9zcy1icm93c2VyLCBidXQgd2UgY2FuJ3QganVzdCByZW1vdmUgdGhlIENTUyBvbmVzIGJlY2F1c2UgdGhleSBtYXkgYmUgYXBwbGllZCBpbiBhIENTUyBydWxlIHNvbWV3aGVyZSAobm90IGp1c3QgaW5saW5lKS5cbiAgICAgIHQxID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKTtcbiAgICAgIGNhY2hlLmZvcmNlQ1NTID0gdGFyZ2V0LnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcIlwiKSB8fCAhX2lzTnVsbFRyYW5zZm9ybShfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIF90cmFuc2Zvcm1Qcm9wKSk7XG4gICAgICB0MSAmJiB0YXJnZXQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIHQxKTtcbiAgICB9XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoc2tld1gpID4gOTAgJiYgTWF0aC5hYnMoc2tld1gpIDwgMjcwKSB7XG4gICAgaWYgKGludmVydGVkU2NhbGVYKSB7XG4gICAgICBzY2FsZVggKj0gLTE7XG4gICAgICBza2V3WCArPSByb3RhdGlvbiA8PSAwID8gMTgwIDogLTE4MDtcbiAgICAgIHJvdGF0aW9uICs9IHJvdGF0aW9uIDw9IDAgPyAxODAgOiAtMTgwO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY2FsZVkgKj0gLTE7XG4gICAgICBza2V3WCArPSBza2V3WCA8PSAwID8gMTgwIDogLTE4MDtcbiAgICB9XG4gIH1cblxuICBjYWNoZS54ID0geCAtICgoY2FjaGUueFBlcmNlbnQgPSB4ICYmIChjYWNoZS54UGVyY2VudCB8fCAoTWF0aC5yb3VuZCh0YXJnZXQub2Zmc2V0V2lkdGggLyAyKSA9PT0gTWF0aC5yb3VuZCgteCkgPyAtNTAgOiAwKSkpID8gdGFyZ2V0Lm9mZnNldFdpZHRoICogY2FjaGUueFBlcmNlbnQgLyAxMDAgOiAwKSArIHB4O1xuICBjYWNoZS55ID0geSAtICgoY2FjaGUueVBlcmNlbnQgPSB5ICYmIChjYWNoZS55UGVyY2VudCB8fCAoTWF0aC5yb3VuZCh0YXJnZXQub2Zmc2V0SGVpZ2h0IC8gMikgPT09IE1hdGgucm91bmQoLXkpID8gLTUwIDogMCkpKSA/IHRhcmdldC5vZmZzZXRIZWlnaHQgKiBjYWNoZS55UGVyY2VudCAvIDEwMCA6IDApICsgcHg7XG4gIGNhY2hlLnogPSB6ICsgcHg7XG4gIGNhY2hlLnNjYWxlWCA9IF9yb3VuZChzY2FsZVgpO1xuICBjYWNoZS5zY2FsZVkgPSBfcm91bmQoc2NhbGVZKTtcbiAgY2FjaGUucm90YXRpb24gPSBfcm91bmQocm90YXRpb24pICsgZGVnO1xuICBjYWNoZS5yb3RhdGlvblggPSBfcm91bmQocm90YXRpb25YKSArIGRlZztcbiAgY2FjaGUucm90YXRpb25ZID0gX3JvdW5kKHJvdGF0aW9uWSkgKyBkZWc7XG4gIGNhY2hlLnNrZXdYID0gc2tld1ggKyBkZWc7XG4gIGNhY2hlLnNrZXdZID0gc2tld1kgKyBkZWc7XG4gIGNhY2hlLnRyYW5zZm9ybVBlcnNwZWN0aXZlID0gcGVyc3BlY3RpdmUgKyBweDtcblxuICBpZiAoY2FjaGUuek9yaWdpbiA9IHBhcnNlRmxvYXQob3JpZ2luLnNwbGl0KFwiIFwiKVsyXSkgfHwgMCkge1xuICAgIHN0eWxlW190cmFuc2Zvcm1PcmlnaW5Qcm9wXSA9IF9maXJzdFR3b09ubHkob3JpZ2luKTtcbiAgfVxuXG4gIGNhY2hlLnhPZmZzZXQgPSBjYWNoZS55T2Zmc2V0ID0gMDtcbiAgY2FjaGUuZm9yY2UzRCA9IF9jb25maWcuZm9yY2UzRDtcbiAgY2FjaGUucmVuZGVyVHJhbnNmb3JtID0gY2FjaGUuc3ZnID8gX3JlbmRlclNWR1RyYW5zZm9ybXMgOiBfc3VwcG9ydHMzRCA/IF9yZW5kZXJDU1NUcmFuc2Zvcm1zIDogX3JlbmRlck5vbjNEVHJhbnNmb3JtcztcbiAgY2FjaGUudW5jYWNoZSA9IDA7XG4gIHJldHVybiBjYWNoZTtcbn0sXG4gICAgX2ZpcnN0VHdvT25seSA9IGZ1bmN0aW9uIF9maXJzdFR3b09ubHkodmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSA9IHZhbHVlLnNwbGl0KFwiIFwiKSlbMF0gKyBcIiBcIiArIHZhbHVlWzFdO1xufSxcbiAgICAvL2ZvciBoYW5kbGluZyB0cmFuc2Zvcm1PcmlnaW4gdmFsdWVzLCBzdHJpcHBpbmcgb3V0IHRoZSAzcmQgZGltZW5zaW9uXG5fYWRkUHhUcmFuc2xhdGUgPSBmdW5jdGlvbiBfYWRkUHhUcmFuc2xhdGUodGFyZ2V0LCBzdGFydCwgdmFsdWUpIHtcbiAgdmFyIHVuaXQgPSBnZXRVbml0KHN0YXJ0KTtcbiAgcmV0dXJuIF9yb3VuZChwYXJzZUZsb2F0KHN0YXJ0KSArIHBhcnNlRmxvYXQoX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBcInhcIiwgdmFsdWUgKyBcInB4XCIsIHVuaXQpKSkgKyB1bml0O1xufSxcbiAgICBfcmVuZGVyTm9uM0RUcmFuc2Zvcm1zID0gZnVuY3Rpb24gX3JlbmRlck5vbjNEVHJhbnNmb3JtcyhyYXRpbywgY2FjaGUpIHtcbiAgY2FjaGUueiA9IFwiMHB4XCI7XG4gIGNhY2hlLnJvdGF0aW9uWSA9IGNhY2hlLnJvdGF0aW9uWCA9IFwiMGRlZ1wiO1xuICBjYWNoZS5mb3JjZTNEID0gMDtcblxuICBfcmVuZGVyQ1NTVHJhbnNmb3JtcyhyYXRpbywgY2FjaGUpO1xufSxcbiAgICBfemVyb0RlZyA9IFwiMGRlZ1wiLFxuICAgIF96ZXJvUHggPSBcIjBweFwiLFxuICAgIF9lbmRQYXJlbnRoZXNpcyA9IFwiKSBcIixcbiAgICBfcmVuZGVyQ1NTVHJhbnNmb3JtcyA9IGZ1bmN0aW9uIF9yZW5kZXJDU1NUcmFuc2Zvcm1zKHJhdGlvLCBjYWNoZSkge1xuICB2YXIgX3JlZiA9IGNhY2hlIHx8IHRoaXMsXG4gICAgICB4UGVyY2VudCA9IF9yZWYueFBlcmNlbnQsXG4gICAgICB5UGVyY2VudCA9IF9yZWYueVBlcmNlbnQsXG4gICAgICB4ID0gX3JlZi54LFxuICAgICAgeSA9IF9yZWYueSxcbiAgICAgIHogPSBfcmVmLnosXG4gICAgICByb3RhdGlvbiA9IF9yZWYucm90YXRpb24sXG4gICAgICByb3RhdGlvblkgPSBfcmVmLnJvdGF0aW9uWSxcbiAgICAgIHJvdGF0aW9uWCA9IF9yZWYucm90YXRpb25YLFxuICAgICAgc2tld1ggPSBfcmVmLnNrZXdYLFxuICAgICAgc2tld1kgPSBfcmVmLnNrZXdZLFxuICAgICAgc2NhbGVYID0gX3JlZi5zY2FsZVgsXG4gICAgICBzY2FsZVkgPSBfcmVmLnNjYWxlWSxcbiAgICAgIHRyYW5zZm9ybVBlcnNwZWN0aXZlID0gX3JlZi50cmFuc2Zvcm1QZXJzcGVjdGl2ZSxcbiAgICAgIGZvcmNlM0QgPSBfcmVmLmZvcmNlM0QsXG4gICAgICB0YXJnZXQgPSBfcmVmLnRhcmdldCxcbiAgICAgIHpPcmlnaW4gPSBfcmVmLnpPcmlnaW4sXG4gICAgICB0cmFuc2Zvcm1zID0gXCJcIixcbiAgICAgIHVzZTNEID0gZm9yY2UzRCA9PT0gXCJhdXRvXCIgJiYgcmF0aW8gJiYgcmF0aW8gIT09IDEgfHwgZm9yY2UzRCA9PT0gdHJ1ZTsgLy8gU2FmYXJpIGhhcyBhIGJ1ZyB0aGF0IGNhdXNlcyBpdCBub3QgdG8gcmVuZGVyIDNEIHRyYW5zZm9ybS1vcmlnaW4gdmFsdWVzIHByb3Blcmx5LCBzbyB3ZSBmb3JjZSB0aGUgeiBvcmlnaW4gdG8gMCwgcmVjb3JkIGl0IGluIHRoZSBjYWNoZSwgYW5kIHRoZW4gZG8gdGhlIG1hdGggaGVyZSB0byBvZmZzZXQgdGhlIHRyYW5zbGF0ZSB2YWx1ZXMgYWNjb3JkaW5nbHkgKGJhc2ljYWxseSBkbyB0aGUgM0QgdHJhbnNmb3JtLW9yaWdpbiBwYXJ0IG1hbnVhbGx5KVxuXG5cbiAgaWYgKHpPcmlnaW4gJiYgKHJvdGF0aW9uWCAhPT0gX3plcm9EZWcgfHwgcm90YXRpb25ZICE9PSBfemVyb0RlZykpIHtcbiAgICB2YXIgYW5nbGUgPSBwYXJzZUZsb2F0KHJvdGF0aW9uWSkgKiBfREVHMlJBRCxcbiAgICAgICAgYTEzID0gTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICBhMzMgPSBNYXRoLmNvcyhhbmdsZSksXG4gICAgICAgIGNvcztcblxuICAgIGFuZ2xlID0gcGFyc2VGbG9hdChyb3RhdGlvblgpICogX0RFRzJSQUQ7XG4gICAgY29zID0gTWF0aC5jb3MoYW5nbGUpO1xuICAgIHggPSBfYWRkUHhUcmFuc2xhdGUodGFyZ2V0LCB4LCBhMTMgKiBjb3MgKiAtek9yaWdpbik7XG4gICAgeSA9IF9hZGRQeFRyYW5zbGF0ZSh0YXJnZXQsIHksIC1NYXRoLnNpbihhbmdsZSkgKiAtek9yaWdpbik7XG4gICAgeiA9IF9hZGRQeFRyYW5zbGF0ZSh0YXJnZXQsIHosIGEzMyAqIGNvcyAqIC16T3JpZ2luICsgek9yaWdpbik7XG4gIH1cblxuICBpZiAodHJhbnNmb3JtUGVyc3BlY3RpdmUgIT09IF96ZXJvUHgpIHtcbiAgICB0cmFuc2Zvcm1zICs9IFwicGVyc3BlY3RpdmUoXCIgKyB0cmFuc2Zvcm1QZXJzcGVjdGl2ZSArIF9lbmRQYXJlbnRoZXNpcztcbiAgfVxuXG4gIGlmICh4UGVyY2VudCB8fCB5UGVyY2VudCkge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJ0cmFuc2xhdGUoXCIgKyB4UGVyY2VudCArIFwiJSwgXCIgKyB5UGVyY2VudCArIFwiJSkgXCI7XG4gIH1cblxuICBpZiAodXNlM0QgfHwgeCAhPT0gX3plcm9QeCB8fCB5ICE9PSBfemVyb1B4IHx8IHogIT09IF96ZXJvUHgpIHtcbiAgICB0cmFuc2Zvcm1zICs9IHogIT09IF96ZXJvUHggfHwgdXNlM0QgPyBcInRyYW5zbGF0ZTNkKFwiICsgeCArIFwiLCBcIiArIHkgKyBcIiwgXCIgKyB6ICsgXCIpIFwiIDogXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsIFwiICsgeSArIF9lbmRQYXJlbnRoZXNpcztcbiAgfVxuXG4gIGlmIChyb3RhdGlvbiAhPT0gX3plcm9EZWcpIHtcbiAgICB0cmFuc2Zvcm1zICs9IFwicm90YXRlKFwiICsgcm90YXRpb24gKyBfZW5kUGFyZW50aGVzaXM7XG4gIH1cblxuICBpZiAocm90YXRpb25ZICE9PSBfemVyb0RlZykge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJyb3RhdGVZKFwiICsgcm90YXRpb25ZICsgX2VuZFBhcmVudGhlc2lzO1xuICB9XG5cbiAgaWYgKHJvdGF0aW9uWCAhPT0gX3plcm9EZWcpIHtcbiAgICB0cmFuc2Zvcm1zICs9IFwicm90YXRlWChcIiArIHJvdGF0aW9uWCArIF9lbmRQYXJlbnRoZXNpcztcbiAgfVxuXG4gIGlmIChza2V3WCAhPT0gX3plcm9EZWcgfHwgc2tld1kgIT09IF96ZXJvRGVnKSB7XG4gICAgdHJhbnNmb3JtcyArPSBcInNrZXcoXCIgKyBza2V3WCArIFwiLCBcIiArIHNrZXdZICsgX2VuZFBhcmVudGhlc2lzO1xuICB9XG5cbiAgaWYgKHNjYWxlWCAhPT0gMSB8fCBzY2FsZVkgIT09IDEpIHtcbiAgICB0cmFuc2Zvcm1zICs9IFwic2NhbGUoXCIgKyBzY2FsZVggKyBcIiwgXCIgKyBzY2FsZVkgKyBfZW5kUGFyZW50aGVzaXM7XG4gIH1cblxuICB0YXJnZXQuc3R5bGVbX3RyYW5zZm9ybVByb3BdID0gdHJhbnNmb3JtcyB8fCBcInRyYW5zbGF0ZSgwLCAwKVwiO1xufSxcbiAgICBfcmVuZGVyU1ZHVHJhbnNmb3JtcyA9IGZ1bmN0aW9uIF9yZW5kZXJTVkdUcmFuc2Zvcm1zKHJhdGlvLCBjYWNoZSkge1xuICB2YXIgX3JlZjIgPSBjYWNoZSB8fCB0aGlzLFxuICAgICAgeFBlcmNlbnQgPSBfcmVmMi54UGVyY2VudCxcbiAgICAgIHlQZXJjZW50ID0gX3JlZjIueVBlcmNlbnQsXG4gICAgICB4ID0gX3JlZjIueCxcbiAgICAgIHkgPSBfcmVmMi55LFxuICAgICAgcm90YXRpb24gPSBfcmVmMi5yb3RhdGlvbixcbiAgICAgIHNrZXdYID0gX3JlZjIuc2tld1gsXG4gICAgICBza2V3WSA9IF9yZWYyLnNrZXdZLFxuICAgICAgc2NhbGVYID0gX3JlZjIuc2NhbGVYLFxuICAgICAgc2NhbGVZID0gX3JlZjIuc2NhbGVZLFxuICAgICAgdGFyZ2V0ID0gX3JlZjIudGFyZ2V0LFxuICAgICAgeE9yaWdpbiA9IF9yZWYyLnhPcmlnaW4sXG4gICAgICB5T3JpZ2luID0gX3JlZjIueU9yaWdpbixcbiAgICAgIHhPZmZzZXQgPSBfcmVmMi54T2Zmc2V0LFxuICAgICAgeU9mZnNldCA9IF9yZWYyLnlPZmZzZXQsXG4gICAgICBmb3JjZUNTUyA9IF9yZWYyLmZvcmNlQ1NTLFxuICAgICAgdHggPSBwYXJzZUZsb2F0KHgpLFxuICAgICAgdHkgPSBwYXJzZUZsb2F0KHkpLFxuICAgICAgYTExLFxuICAgICAgYTIxLFxuICAgICAgYTEyLFxuICAgICAgYTIyLFxuICAgICAgdGVtcDtcblxuICByb3RhdGlvbiA9IHBhcnNlRmxvYXQocm90YXRpb24pO1xuICBza2V3WCA9IHBhcnNlRmxvYXQoc2tld1gpO1xuICBza2V3WSA9IHBhcnNlRmxvYXQoc2tld1kpO1xuXG4gIGlmIChza2V3WSkge1xuICAgIC8vZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsIHdlIGNvbWJpbmUgYWxsIHNrZXdpbmcgaW50byB0aGUgc2tld1ggYW5kIHJvdGF0aW9uIHZhbHVlcy4gUmVtZW1iZXIsIGEgc2tld1kgb2YgMTAgZGVncmVlcyBsb29rcyB0aGUgc2FtZSBhcyBhIHJvdGF0aW9uIG9mIDEwIGRlZ3JlZXMgcGx1cyBhIHNrZXdYIG9mIDEwIGRlZ3JlZXMuXG4gICAgc2tld1kgPSBwYXJzZUZsb2F0KHNrZXdZKTtcbiAgICBza2V3WCArPSBza2V3WTtcbiAgICByb3RhdGlvbiArPSBza2V3WTtcbiAgfVxuXG4gIGlmIChyb3RhdGlvbiB8fCBza2V3WCkge1xuICAgIHJvdGF0aW9uICo9IF9ERUcyUkFEO1xuICAgIHNrZXdYICo9IF9ERUcyUkFEO1xuICAgIGExMSA9IE1hdGguY29zKHJvdGF0aW9uKSAqIHNjYWxlWDtcbiAgICBhMjEgPSBNYXRoLnNpbihyb3RhdGlvbikgKiBzY2FsZVg7XG4gICAgYTEyID0gTWF0aC5zaW4ocm90YXRpb24gLSBza2V3WCkgKiAtc2NhbGVZO1xuICAgIGEyMiA9IE1hdGguY29zKHJvdGF0aW9uIC0gc2tld1gpICogc2NhbGVZO1xuXG4gICAgaWYgKHNrZXdYKSB7XG4gICAgICBza2V3WSAqPSBfREVHMlJBRDtcbiAgICAgIHRlbXAgPSBNYXRoLnRhbihza2V3WCAtIHNrZXdZKTtcbiAgICAgIHRlbXAgPSBNYXRoLnNxcnQoMSArIHRlbXAgKiB0ZW1wKTtcbiAgICAgIGExMiAqPSB0ZW1wO1xuICAgICAgYTIyICo9IHRlbXA7XG5cbiAgICAgIGlmIChza2V3WSkge1xuICAgICAgICB0ZW1wID0gTWF0aC50YW4oc2tld1kpO1xuICAgICAgICB0ZW1wID0gTWF0aC5zcXJ0KDEgKyB0ZW1wICogdGVtcCk7XG4gICAgICAgIGExMSAqPSB0ZW1wO1xuICAgICAgICBhMjEgKj0gdGVtcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhMTEgPSBfcm91bmQoYTExKTtcbiAgICBhMjEgPSBfcm91bmQoYTIxKTtcbiAgICBhMTIgPSBfcm91bmQoYTEyKTtcbiAgICBhMjIgPSBfcm91bmQoYTIyKTtcbiAgfSBlbHNlIHtcbiAgICBhMTEgPSBzY2FsZVg7XG4gICAgYTIyID0gc2NhbGVZO1xuICAgIGEyMSA9IGExMiA9IDA7XG4gIH1cblxuICBpZiAodHggJiYgIX4oeCArIFwiXCIpLmluZGV4T2YoXCJweFwiKSB8fCB0eSAmJiAhfih5ICsgXCJcIikuaW5kZXhPZihcInB4XCIpKSB7XG4gICAgdHggPSBfY29udmVydFRvVW5pdCh0YXJnZXQsIFwieFwiLCB4LCBcInB4XCIpO1xuICAgIHR5ID0gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBcInlcIiwgeSwgXCJweFwiKTtcbiAgfVxuXG4gIGlmICh4T3JpZ2luIHx8IHlPcmlnaW4gfHwgeE9mZnNldCB8fCB5T2Zmc2V0KSB7XG4gICAgdHggPSBfcm91bmQodHggKyB4T3JpZ2luIC0gKHhPcmlnaW4gKiBhMTEgKyB5T3JpZ2luICogYTEyKSArIHhPZmZzZXQpO1xuICAgIHR5ID0gX3JvdW5kKHR5ICsgeU9yaWdpbiAtICh4T3JpZ2luICogYTIxICsgeU9yaWdpbiAqIGEyMikgKyB5T2Zmc2V0KTtcbiAgfVxuXG4gIGlmICh4UGVyY2VudCB8fCB5UGVyY2VudCkge1xuICAgIC8vVGhlIFNWRyBzcGVjIGRvZXNuJ3Qgc3VwcG9ydCBwZXJjZW50YWdlLWJhc2VkIHRyYW5zbGF0aW9uIGluIHRoZSBcInRyYW5zZm9ybVwiIGF0dHJpYnV0ZSwgc28gd2UgbWVyZ2UgaXQgaW50byB0aGUgdHJhbnNsYXRpb24gdG8gc2ltdWxhdGUgaXQuXG4gICAgdGVtcCA9IHRhcmdldC5nZXRCQm94KCk7XG4gICAgdHggPSBfcm91bmQodHggKyB4UGVyY2VudCAvIDEwMCAqIHRlbXAud2lkdGgpO1xuICAgIHR5ID0gX3JvdW5kKHR5ICsgeVBlcmNlbnQgLyAxMDAgKiB0ZW1wLmhlaWdodCk7XG4gIH1cblxuICB0ZW1wID0gXCJtYXRyaXgoXCIgKyBhMTEgKyBcIixcIiArIGEyMSArIFwiLFwiICsgYTEyICsgXCIsXCIgKyBhMjIgKyBcIixcIiArIHR4ICsgXCIsXCIgKyB0eSArIFwiKVwiO1xuICB0YXJnZXQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIHRlbXApO1xuICBmb3JjZUNTUyAmJiAodGFyZ2V0LnN0eWxlW190cmFuc2Zvcm1Qcm9wXSA9IHRlbXApOyAvL3NvbWUgYnJvd3NlcnMgcHJpb3JpdGl6ZSBDU1MgdHJhbnNmb3JtcyBvdmVyIHRoZSB0cmFuc2Zvcm0gYXR0cmlidXRlLiBXaGVuIHdlIHNlbnNlIHRoYXQgdGhlIHVzZXIgaGFzIENTUyB0cmFuc2Zvcm1zIGFwcGxpZWQsIHdlIG11c3Qgb3ZlcndyaXRlIHRoZW0gdGhpcyB3YXkgKG90aGVyd2lzZSBzb21lIGJyb3dzZXIgc2ltcGx5IHdvbid0IHJlbmRlciB0aGUgIHRyYW5zZm9ybSBhdHRyaWJ1dGUgY2hhbmdlcyEpXG59LFxuICAgIF9hZGRSb3RhdGlvbmFsUHJvcFR3ZWVuID0gZnVuY3Rpb24gX2FkZFJvdGF0aW9uYWxQcm9wVHdlZW4ocGx1Z2luLCB0YXJnZXQsIHByb3BlcnR5LCBzdGFydE51bSwgZW5kVmFsdWUsIHJlbGF0aXZlKSB7XG4gIHZhciBjYXAgPSAzNjAsXG4gICAgICBpc1N0cmluZyA9IF9pc1N0cmluZyhlbmRWYWx1ZSksXG4gICAgICBlbmROdW0gPSBwYXJzZUZsb2F0KGVuZFZhbHVlKSAqIChpc1N0cmluZyAmJiB+ZW5kVmFsdWUuaW5kZXhPZihcInJhZFwiKSA/IF9SQUQyREVHIDogMSksXG4gICAgICBjaGFuZ2UgPSByZWxhdGl2ZSA/IGVuZE51bSAqIHJlbGF0aXZlIDogZW5kTnVtIC0gc3RhcnROdW0sXG4gICAgICBmaW5hbFZhbHVlID0gc3RhcnROdW0gKyBjaGFuZ2UgKyBcImRlZ1wiLFxuICAgICAgZGlyZWN0aW9uLFxuICAgICAgcHQ7XG5cbiAgaWYgKGlzU3RyaW5nKSB7XG4gICAgZGlyZWN0aW9uID0gZW5kVmFsdWUuc3BsaXQoXCJfXCIpWzFdO1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJzaG9ydFwiKSB7XG4gICAgICBjaGFuZ2UgJT0gY2FwO1xuXG4gICAgICBpZiAoY2hhbmdlICE9PSBjaGFuZ2UgJSAoY2FwIC8gMikpIHtcbiAgICAgICAgY2hhbmdlICs9IGNoYW5nZSA8IDAgPyBjYXAgOiAtY2FwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwiY3dcIiAmJiBjaGFuZ2UgPCAwKSB7XG4gICAgICBjaGFuZ2UgPSAoY2hhbmdlICsgY2FwICogX2JpZ051bSkgJSBjYXAgLSB+fihjaGFuZ2UgLyBjYXApICogY2FwO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImNjd1wiICYmIGNoYW5nZSA+IDApIHtcbiAgICAgIGNoYW5nZSA9IChjaGFuZ2UgLSBjYXAgKiBfYmlnTnVtKSAlIGNhcCAtIH5+KGNoYW5nZSAvIGNhcCkgKiBjYXA7XG4gICAgfVxuICB9XG5cbiAgcGx1Z2luLl9wdCA9IHB0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCB0YXJnZXQsIHByb3BlcnR5LCBzdGFydE51bSwgY2hhbmdlLCBfcmVuZGVyUHJvcFdpdGhFbmQpO1xuICBwdC5lID0gZmluYWxWYWx1ZTtcbiAgcHQudSA9IFwiZGVnXCI7XG5cbiAgcGx1Z2luLl9wcm9wcy5wdXNoKHByb3BlcnR5KTtcblxuICByZXR1cm4gcHQ7XG59LFxuICAgIF9hc3NpZ24gPSBmdW5jdGlvbiBfYXNzaWduKHRhcmdldCwgc291cmNlKSB7XG4gIC8vIEludGVybmV0IEV4cGxvcmVyIGRvZXNuJ3QgaGF2ZSBPYmplY3QuYXNzaWduKCksIHNvIHdlIHJlY3JlYXRlIGl0IGhlcmUuXG4gIGZvciAodmFyIHAgaW4gc291cmNlKSB7XG4gICAgdGFyZ2V0W3BdID0gc291cmNlW3BdO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0sXG4gICAgX2FkZFJhd1RyYW5zZm9ybVBUcyA9IGZ1bmN0aW9uIF9hZGRSYXdUcmFuc2Zvcm1QVHMocGx1Z2luLCB0cmFuc2Zvcm1zLCB0YXJnZXQpIHtcbiAgLy9mb3IgaGFuZGxpbmcgY2FzZXMgd2hlcmUgc29tZW9uZSBwYXNzZXMgaW4gYSB3aG9sZSB0cmFuc2Zvcm0gc3RyaW5nLCBsaWtlIHRyYW5zZm9ybTogXCJzY2FsZSgyLCAzKSByb3RhdGUoMjBkZWcpIHRyYW5zbGF0ZVkoMzBlbSlcIlxuICB2YXIgc3RhcnRDYWNoZSA9IF9hc3NpZ24oe30sIHRhcmdldC5fZ3NhcCksXG4gICAgICBleGNsdWRlID0gXCJwZXJzcGVjdGl2ZSxmb3JjZTNELHRyYW5zZm9ybU9yaWdpbixzdmdPcmlnaW5cIixcbiAgICAgIHN0eWxlID0gdGFyZ2V0LnN0eWxlLFxuICAgICAgZW5kQ2FjaGUsXG4gICAgICBwLFxuICAgICAgc3RhcnRWYWx1ZSxcbiAgICAgIGVuZFZhbHVlLFxuICAgICAgc3RhcnROdW0sXG4gICAgICBlbmROdW0sXG4gICAgICBzdGFydFVuaXQsXG4gICAgICBlbmRVbml0O1xuXG4gIGlmIChzdGFydENhY2hlLnN2Zykge1xuICAgIHN0YXJ0VmFsdWUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpO1xuICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJcIik7XG4gICAgc3R5bGVbX3RyYW5zZm9ybVByb3BdID0gdHJhbnNmb3JtcztcbiAgICBlbmRDYWNoZSA9IF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIDEpO1xuXG4gICAgX3JlbW92ZVByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybVByb3ApO1xuXG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBzdGFydFZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdGFydFZhbHVlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpW190cmFuc2Zvcm1Qcm9wXTtcbiAgICBzdHlsZVtfdHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm1zO1xuICAgIGVuZENhY2hlID0gX3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgMSk7XG4gICAgc3R5bGVbX3RyYW5zZm9ybVByb3BdID0gc3RhcnRWYWx1ZTtcbiAgfVxuXG4gIGZvciAocCBpbiBfdHJhbnNmb3JtUHJvcHMpIHtcbiAgICBzdGFydFZhbHVlID0gc3RhcnRDYWNoZVtwXTtcbiAgICBlbmRWYWx1ZSA9IGVuZENhY2hlW3BdO1xuXG4gICAgaWYgKHN0YXJ0VmFsdWUgIT09IGVuZFZhbHVlICYmIGV4Y2x1ZGUuaW5kZXhPZihwKSA8IDApIHtcbiAgICAgIC8vdHdlZW5pbmcgdG8gbm8gcGVyc3BlY3RpdmUgZ2l2ZXMgdmVyeSB1bmludHVpdGl2ZSByZXN1bHRzIC0ganVzdCBrZWVwIHRoZSBzYW1lIHBlcnNwZWN0aXZlIGluIHRoYXQgY2FzZS5cbiAgICAgIHN0YXJ0VW5pdCA9IGdldFVuaXQoc3RhcnRWYWx1ZSk7XG4gICAgICBlbmRVbml0ID0gZ2V0VW5pdChlbmRWYWx1ZSk7XG4gICAgICBzdGFydE51bSA9IHN0YXJ0VW5pdCAhPT0gZW5kVW5pdCA/IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcCwgc3RhcnRWYWx1ZSwgZW5kVW5pdCkgOiBwYXJzZUZsb2F0KHN0YXJ0VmFsdWUpO1xuICAgICAgZW5kTnVtID0gcGFyc2VGbG9hdChlbmRWYWx1ZSk7XG4gICAgICBwbHVnaW4uX3B0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCBlbmRDYWNoZSwgcCwgc3RhcnROdW0sIGVuZE51bSAtIHN0YXJ0TnVtLCBfcmVuZGVyQ1NTUHJvcCk7XG4gICAgICBwbHVnaW4uX3B0LnUgPSBlbmRVbml0IHx8IDA7XG5cbiAgICAgIHBsdWdpbi5fcHJvcHMucHVzaChwKTtcbiAgICB9XG4gIH1cblxuICBfYXNzaWduKGVuZENhY2hlLCBzdGFydENhY2hlKTtcbn07IC8vIGhhbmRsZSBzcGxpdHRpbmcgYXBhcnQgcGFkZGluZywgbWFyZ2luLCBib3JkZXJXaWR0aCwgYW5kIGJvcmRlclJhZGl1cyBpbnRvIHRoZWlyIDQgY29tcG9uZW50cy4gRmlyZWZveCwgZm9yIGV4YW1wbGUsIHdvbid0IHJlcG9ydCBib3JkZXJSYWRpdXMgY29ycmVjdGx5IC0gaXQgd2lsbCBvbmx5IGRvIGJvcmRlclRvcExlZnRSYWRpdXMgYW5kIHRoZSBvdGhlciBjb3JuZXJzLiBXZSBhbHNvIHdhbnQgdG8gaGFuZGxlIHBhZGRpbmdUb3AsIG1hcmdpbkxlZnQsIGJvcmRlclJpZ2h0V2lkdGgsIGV0Yy5cblxuXG5fZm9yRWFjaE5hbWUoXCJwYWRkaW5nLG1hcmdpbixXaWR0aCxSYWRpdXNcIiwgZnVuY3Rpb24gKG5hbWUsIGluZGV4KSB7XG4gIHZhciB0ID0gXCJUb3BcIixcbiAgICAgIHIgPSBcIlJpZ2h0XCIsXG4gICAgICBiID0gXCJCb3R0b21cIixcbiAgICAgIGwgPSBcIkxlZnRcIixcbiAgICAgIHByb3BzID0gKGluZGV4IDwgMyA/IFt0LCByLCBiLCBsXSA6IFt0ICsgbCwgdCArIHIsIGIgKyByLCBiICsgbF0pLm1hcChmdW5jdGlvbiAoc2lkZSkge1xuICAgIHJldHVybiBpbmRleCA8IDIgPyBuYW1lICsgc2lkZSA6IFwiYm9yZGVyXCIgKyBzaWRlICsgbmFtZTtcbiAgfSk7XG5cbiAgX3NwZWNpYWxQcm9wc1tpbmRleCA+IDEgPyBcImJvcmRlclwiICsgbmFtZSA6IG5hbWVdID0gZnVuY3Rpb24gKHBsdWdpbiwgdGFyZ2V0LCBwcm9wZXJ0eSwgZW5kVmFsdWUsIHR3ZWVuKSB7XG4gICAgdmFyIGEsIHZhcnM7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDQpIHtcbiAgICAgIC8vIGdldHRlciwgcGFzc2VkIHRhcmdldCwgcHJvcGVydHksIGFuZCB1bml0IChmcm9tIF9nZXQoKSlcbiAgICAgIGEgPSBwcm9wcy5tYXAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgcmV0dXJuIF9nZXQocGx1Z2luLCBwcm9wLCBwcm9wZXJ0eSk7XG4gICAgICB9KTtcbiAgICAgIHZhcnMgPSBhLmpvaW4oXCIgXCIpO1xuICAgICAgcmV0dXJuIHZhcnMuc3BsaXQoYVswXSkubGVuZ3RoID09PSA1ID8gYVswXSA6IHZhcnM7XG4gICAgfVxuXG4gICAgYSA9IChlbmRWYWx1ZSArIFwiXCIpLnNwbGl0KFwiIFwiKTtcbiAgICB2YXJzID0ge307XG4gICAgcHJvcHMuZm9yRWFjaChmdW5jdGlvbiAocHJvcCwgaSkge1xuICAgICAgcmV0dXJuIHZhcnNbcHJvcF0gPSBhW2ldID0gYVtpXSB8fCBhWyhpIC0gMSkgLyAyIHwgMF07XG4gICAgfSk7XG4gICAgcGx1Z2luLmluaXQodGFyZ2V0LCB2YXJzLCB0d2Vlbik7XG4gIH07XG59KTtcblxuZXhwb3J0IHZhciBDU1NQbHVnaW4gPSB7XG4gIG5hbWU6IFwiY3NzXCIsXG4gIHJlZ2lzdGVyOiBfaW5pdENvcmUsXG4gIHRhcmdldFRlc3Q6IGZ1bmN0aW9uIHRhcmdldFRlc3QodGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRhcmdldC5zdHlsZSAmJiB0YXJnZXQubm9kZVR5cGU7XG4gIH0sXG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQodGFyZ2V0LCB2YXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldHMpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLl9wcm9wcyxcbiAgICAgICAgc3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gICAgICAgIHN0YXJ0QXQgPSB0d2Vlbi52YXJzLnN0YXJ0QXQsXG4gICAgICAgIHN0YXJ0VmFsdWUsXG4gICAgICAgIGVuZFZhbHVlLFxuICAgICAgICBlbmROdW0sXG4gICAgICAgIHN0YXJ0TnVtLFxuICAgICAgICB0eXBlLFxuICAgICAgICBzcGVjaWFsUHJvcCxcbiAgICAgICAgcCxcbiAgICAgICAgc3RhcnRVbml0LFxuICAgICAgICBlbmRVbml0LFxuICAgICAgICByZWxhdGl2ZSxcbiAgICAgICAgaXNUcmFuc2Zvcm1SZWxhdGVkLFxuICAgICAgICB0cmFuc2Zvcm1Qcm9wVHdlZW4sXG4gICAgICAgIGNhY2hlLFxuICAgICAgICBzbW9vdGgsXG4gICAgICAgIGhhc1ByaW9yaXR5O1xuICAgIF9wbHVnaW5Jbml0dGVkIHx8IF9pbml0Q29yZSgpO1xuXG4gICAgZm9yIChwIGluIHZhcnMpIHtcbiAgICAgIGlmIChwID09PSBcImF1dG9Sb3VuZFwiKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBlbmRWYWx1ZSA9IHZhcnNbcF07XG5cbiAgICAgIGlmIChfcGx1Z2luc1twXSAmJiBfY2hlY2tQbHVnaW4ocCwgdmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpKSB7XG4gICAgICAgIC8vIHBsdWdpbnNcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHR5cGUgPSB0eXBlb2YgZW5kVmFsdWU7XG4gICAgICBzcGVjaWFsUHJvcCA9IF9zcGVjaWFsUHJvcHNbcF07XG5cbiAgICAgIGlmICh0eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZW5kVmFsdWUgPSBlbmRWYWx1ZS5jYWxsKHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzKTtcbiAgICAgICAgdHlwZSA9IHR5cGVvZiBlbmRWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGUgPT09IFwic3RyaW5nXCIgJiYgfmVuZFZhbHVlLmluZGV4T2YoXCJyYW5kb20oXCIpKSB7XG4gICAgICAgIGVuZFZhbHVlID0gX3JlcGxhY2VSYW5kb20oZW5kVmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3BlY2lhbFByb3ApIHtcbiAgICAgICAgc3BlY2lhbFByb3AodGhpcywgdGFyZ2V0LCBwLCBlbmRWYWx1ZSwgdHdlZW4pICYmIChoYXNQcmlvcml0eSA9IDEpO1xuICAgICAgfSBlbHNlIGlmIChwLnN1YnN0cigwLCAyKSA9PT0gXCItLVwiKSB7XG4gICAgICAgIC8vQ1NTIHZhcmlhYmxlXG4gICAgICAgIHN0YXJ0VmFsdWUgPSAoZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmdldFByb3BlcnR5VmFsdWUocCkgKyBcIlwiKS50cmltKCk7XG4gICAgICAgIGVuZFZhbHVlICs9IFwiXCI7XG4gICAgICAgIF9jb2xvckV4cC5sYXN0SW5kZXggPSAwO1xuXG4gICAgICAgIGlmICghX2NvbG9yRXhwLnRlc3Qoc3RhcnRWYWx1ZSkpIHtcbiAgICAgICAgICAvLyBjb2xvcnMgZG9uJ3QgaGF2ZSB1bml0c1xuICAgICAgICAgIHN0YXJ0VW5pdCA9IGdldFVuaXQoc3RhcnRWYWx1ZSk7XG4gICAgICAgICAgZW5kVW5pdCA9IGdldFVuaXQoZW5kVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZW5kVW5pdCA/IHN0YXJ0VW5pdCAhPT0gZW5kVW5pdCAmJiAoc3RhcnRWYWx1ZSA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcCwgc3RhcnRWYWx1ZSwgZW5kVW5pdCkgKyBlbmRVbml0KSA6IHN0YXJ0VW5pdCAmJiAoZW5kVmFsdWUgKz0gc3RhcnRVbml0KTtcbiAgICAgICAgdGhpcy5hZGQoc3R5bGUsIFwic2V0UHJvcGVydHlcIiwgc3RhcnRWYWx1ZSwgZW5kVmFsdWUsIGluZGV4LCB0YXJnZXRzLCAwLCAwLCBwKTtcbiAgICAgICAgcHJvcHMucHVzaChwKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAoc3RhcnRBdCAmJiBwIGluIHN0YXJ0QXQpIHtcbiAgICAgICAgICAvLyBpbiBjYXNlIHNvbWVvbmUgaGFyZC1jb2RlcyBhIGNvbXBsZXggdmFsdWUgYXMgdGhlIHN0YXJ0LCBsaWtlIHRvcDogXCJjYWxjKDJ2aCAvIDIpXCIuIFdpdGhvdXQgdGhpcywgaXQnZCB1c2UgdGhlIGNvbXB1dGVkIHZhbHVlIChhbHdheXMgaW4gcHgpXG4gICAgICAgICAgc3RhcnRWYWx1ZSA9IHR5cGVvZiBzdGFydEF0W3BdID09PSBcImZ1bmN0aW9uXCIgPyBzdGFydEF0W3BdLmNhbGwodHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpIDogc3RhcnRBdFtwXTtcbiAgICAgICAgICBwIGluIF9jb25maWcudW5pdHMgJiYgIWdldFVuaXQoc3RhcnRWYWx1ZSkgJiYgKHN0YXJ0VmFsdWUgKz0gX2NvbmZpZy51bml0c1twXSk7IC8vIGZvciBjYXNlcyB3aGVuIHNvbWVvbmUgcGFzc2VzIGluIGEgdW5pdGxlc3MgdmFsdWUgbGlrZSB7eDogMTAwfTsgaWYgd2UgdHJ5IHNldHRpbmcgdHJhbnNsYXRlKDEwMCwgMHB4KSBpdCB3b24ndCB3b3JrLlxuXG4gICAgICAgICAgX2lzU3RyaW5nKHN0YXJ0VmFsdWUpICYmIH5zdGFydFZhbHVlLmluZGV4T2YoXCJyYW5kb20oXCIpICYmIChzdGFydFZhbHVlID0gX3JlcGxhY2VSYW5kb20oc3RhcnRWYWx1ZSkpO1xuICAgICAgICAgIChzdGFydFZhbHVlICsgXCJcIikuY2hhckF0KDEpID09PSBcIj1cIiAmJiAoc3RhcnRWYWx1ZSA9IF9nZXQodGFyZ2V0LCBwKSk7IC8vIGNhbid0IHdvcmsgd2l0aCByZWxhdGl2ZSB2YWx1ZXNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGFydFZhbHVlID0gX2dldCh0YXJnZXQsIHApO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhcnROdW0gPSBwYXJzZUZsb2F0KHN0YXJ0VmFsdWUpO1xuICAgICAgICByZWxhdGl2ZSA9IHR5cGUgPT09IFwic3RyaW5nXCIgJiYgZW5kVmFsdWUuY2hhckF0KDEpID09PSBcIj1cIiA/ICsoZW5kVmFsdWUuY2hhckF0KDApICsgXCIxXCIpIDogMDtcbiAgICAgICAgcmVsYXRpdmUgJiYgKGVuZFZhbHVlID0gZW5kVmFsdWUuc3Vic3RyKDIpKTtcbiAgICAgICAgZW5kTnVtID0gcGFyc2VGbG9hdChlbmRWYWx1ZSk7XG5cbiAgICAgICAgaWYgKHAgaW4gX3Byb3BlcnR5QWxpYXNlcykge1xuICAgICAgICAgIGlmIChwID09PSBcImF1dG9BbHBoYVwiKSB7XG4gICAgICAgICAgICAvL3NwZWNpYWwgY2FzZSB3aGVyZSB3ZSBjb250cm9sIHRoZSB2aXNpYmlsaXR5IGFsb25nIHdpdGggb3BhY2l0eS4gV2Ugc3RpbGwgYWxsb3cgdGhlIG9wYWNpdHkgdmFsdWUgdG8gcGFzcyB0aHJvdWdoIGFuZCBnZXQgdHdlZW5lZC5cbiAgICAgICAgICAgIGlmIChzdGFydE51bSA9PT0gMSAmJiBfZ2V0KHRhcmdldCwgXCJ2aXNpYmlsaXR5XCIpID09PSBcImhpZGRlblwiICYmIGVuZE51bSkge1xuICAgICAgICAgICAgICAvL2lmIHZpc2liaWxpdHkgaXMgaW5pdGlhbGx5IHNldCB0byBcImhpZGRlblwiLCB3ZSBzaG91bGQgaW50ZXJwcmV0IHRoYXQgYXMgaW50ZW50IHRvIG1ha2Ugb3BhY2l0eSAwIChhIGNvbnZlbmllbmNlKVxuICAgICAgICAgICAgICBzdGFydE51bSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9hZGROb25Ud2VlbmluZ1BUKHRoaXMsIHN0eWxlLCBcInZpc2liaWxpdHlcIiwgc3RhcnROdW0gPyBcImluaGVyaXRcIiA6IFwiaGlkZGVuXCIsIGVuZE51bSA/IFwiaW5oZXJpdFwiIDogXCJoaWRkZW5cIiwgIWVuZE51bSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHAgIT09IFwic2NhbGVcIiAmJiBwICE9PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgICAgICAgICBwID0gX3Byb3BlcnR5QWxpYXNlc1twXTtcbiAgICAgICAgICAgIH5wLmluZGV4T2YoXCIsXCIpICYmIChwID0gcC5zcGxpdChcIixcIilbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlzVHJhbnNmb3JtUmVsYXRlZCA9IHAgaW4gX3RyYW5zZm9ybVByb3BzOyAvLy0tLSBUUkFOU0ZPUk0tUkVMQVRFRCAtLS1cblxuICAgICAgICBpZiAoaXNUcmFuc2Zvcm1SZWxhdGVkKSB7XG4gICAgICAgICAgaWYgKCF0cmFuc2Zvcm1Qcm9wVHdlZW4pIHtcbiAgICAgICAgICAgIGNhY2hlID0gdGFyZ2V0Ll9nc2FwO1xuICAgICAgICAgICAgY2FjaGUucmVuZGVyVHJhbnNmb3JtICYmICF2YXJzLnBhcnNlVHJhbnNmb3JtIHx8IF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIHZhcnMucGFyc2VUcmFuc2Zvcm0pOyAvLyBpZiwgZm9yIGV4YW1wbGUsIGdzYXAuc2V0KC4uLiB7dHJhbnNmb3JtOlwidHJhbnNsYXRlWCg1MHZ3KVwifSksIHRoZSBfZ2V0KCkgY2FsbCBkb2Vzbid0IHBhcnNlIHRoZSB0cmFuc2Zvcm0sIHRodXMgY2FjaGUucmVuZGVyVHJhbnNmb3JtIHdvbid0IGJlIHNldCB5ZXQgc28gZm9yY2UgdGhlIHBhcnNpbmcgb2YgdGhlIHRyYW5zZm9ybSBoZXJlLlxuXG4gICAgICAgICAgICBzbW9vdGggPSB2YXJzLnNtb290aE9yaWdpbiAhPT0gZmFsc2UgJiYgY2FjaGUuc21vb3RoO1xuICAgICAgICAgICAgdHJhbnNmb3JtUHJvcFR3ZWVuID0gdGhpcy5fcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCBzdHlsZSwgX3RyYW5zZm9ybVByb3AsIDAsIDEsIGNhY2hlLnJlbmRlclRyYW5zZm9ybSwgY2FjaGUsIDAsIC0xKTsgLy90aGUgZmlyc3QgdGltZSB0aHJvdWdoLCBjcmVhdGUgdGhlIHJlbmRlcmluZyBQcm9wVHdlZW4gc28gdGhhdCBpdCBydW5zIExBU1QgKGluIHRoZSBsaW5rZWQgbGlzdCwgd2Uga2VlcCBhZGRpbmcgdG8gdGhlIGJlZ2lubmluZylcblxuICAgICAgICAgICAgdHJhbnNmb3JtUHJvcFR3ZWVuLmRlcCA9IDE7IC8vZmxhZyBpdCBhcyBkZXBlbmRlbnQgc28gdGhhdCBpZiB0aGluZ3MgZ2V0IGtpbGxlZC9vdmVyd3JpdHRlbiBhbmQgdGhpcyBpcyB0aGUgb25seSBQcm9wVHdlZW4gbGVmdCwgd2UgY2FuIHNhZmVseSBraWxsIHRoZSB3aG9sZSB0d2Vlbi5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocCA9PT0gXCJzY2FsZVwiKSB7XG4gICAgICAgICAgICB0aGlzLl9wdCA9IG5ldyBQcm9wVHdlZW4odGhpcy5fcHQsIGNhY2hlLCBcInNjYWxlWVwiLCBjYWNoZS5zY2FsZVksIChyZWxhdGl2ZSA/IHJlbGF0aXZlICogZW5kTnVtIDogZW5kTnVtIC0gY2FjaGUuc2NhbGVZKSB8fCAwKTtcbiAgICAgICAgICAgIHByb3BzLnB1c2goXCJzY2FsZVlcIiwgcCk7XG4gICAgICAgICAgICBwICs9IFwiWFwiO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gXCJ0cmFuc2Zvcm1PcmlnaW5cIikge1xuICAgICAgICAgICAgZW5kVmFsdWUgPSBfY29udmVydEtleXdvcmRzVG9QZXJjZW50YWdlcyhlbmRWYWx1ZSk7IC8vaW4gY2FzZSBzb21ldGhpbmcgbGlrZSBcImxlZnQgdG9wXCIgb3IgXCJib3R0b20gcmlnaHRcIiBpcyBwYXNzZWQgaW4uIENvbnZlcnQgdG8gcGVyY2VudGFnZXMuXG5cbiAgICAgICAgICAgIGlmIChjYWNoZS5zdmcpIHtcbiAgICAgICAgICAgICAgX2FwcGx5U1ZHT3JpZ2luKHRhcmdldCwgZW5kVmFsdWUsIDAsIHNtb290aCwgMCwgdGhpcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbmRVbml0ID0gcGFyc2VGbG9hdChlbmRWYWx1ZS5zcGxpdChcIiBcIilbMl0pIHx8IDA7IC8vaGFuZGxlIHRoZSB6T3JpZ2luIHNlcGFyYXRlbHkhXG5cbiAgICAgICAgICAgICAgZW5kVW5pdCAhPT0gY2FjaGUuek9yaWdpbiAmJiBfYWRkTm9uVHdlZW5pbmdQVCh0aGlzLCBjYWNoZSwgXCJ6T3JpZ2luXCIsIGNhY2hlLnpPcmlnaW4sIGVuZFVuaXQpO1xuXG4gICAgICAgICAgICAgIF9hZGROb25Ud2VlbmluZ1BUKHRoaXMsIHN0eWxlLCBwLCBfZmlyc3RUd29Pbmx5KHN0YXJ0VmFsdWUpLCBfZmlyc3RUd29Pbmx5KGVuZFZhbHVlKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gXCJzdmdPcmlnaW5cIikge1xuICAgICAgICAgICAgX2FwcGx5U1ZHT3JpZ2luKHRhcmdldCwgZW5kVmFsdWUsIDEsIHNtb290aCwgMCwgdGhpcyk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCBpbiBfcm90YXRpb25hbFByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIF9hZGRSb3RhdGlvbmFsUHJvcFR3ZWVuKHRoaXMsIGNhY2hlLCBwLCBzdGFydE51bSwgZW5kVmFsdWUsIHJlbGF0aXZlKTtcblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwID09PSBcInNtb290aE9yaWdpblwiKSB7XG4gICAgICAgICAgICBfYWRkTm9uVHdlZW5pbmdQVCh0aGlzLCBjYWNoZSwgXCJzbW9vdGhcIiwgY2FjaGUuc21vb3RoLCBlbmRWYWx1ZSk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gXCJmb3JjZTNEXCIpIHtcbiAgICAgICAgICAgIGNhY2hlW3BdID0gZW5kVmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHAgPT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICAgICAgICAgIF9hZGRSYXdUcmFuc2Zvcm1QVHModGhpcywgZW5kVmFsdWUsIHRhcmdldCk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghKHAgaW4gc3R5bGUpKSB7XG4gICAgICAgICAgcCA9IF9jaGVja1Byb3BQcmVmaXgocCkgfHwgcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1RyYW5zZm9ybVJlbGF0ZWQgfHwgKGVuZE51bSB8fCBlbmROdW0gPT09IDApICYmIChzdGFydE51bSB8fCBzdGFydE51bSA9PT0gMCkgJiYgIV9jb21wbGV4RXhwLnRlc3QoZW5kVmFsdWUpICYmIHAgaW4gc3R5bGUpIHtcbiAgICAgICAgICBzdGFydFVuaXQgPSAoc3RhcnRWYWx1ZSArIFwiXCIpLnN1YnN0cigoc3RhcnROdW0gKyBcIlwiKS5sZW5ndGgpO1xuICAgICAgICAgIGVuZE51bSB8fCAoZW5kTnVtID0gMCk7IC8vIHByb3RlY3QgYWdhaW5zdCBOYU5cblxuICAgICAgICAgIGVuZFVuaXQgPSBnZXRVbml0KGVuZFZhbHVlKSB8fCAocCBpbiBfY29uZmlnLnVuaXRzID8gX2NvbmZpZy51bml0c1twXSA6IHN0YXJ0VW5pdCk7XG4gICAgICAgICAgc3RhcnRVbml0ICE9PSBlbmRVbml0ICYmIChzdGFydE51bSA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcCwgc3RhcnRWYWx1ZSwgZW5kVW5pdCkpO1xuICAgICAgICAgIHRoaXMuX3B0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgaXNUcmFuc2Zvcm1SZWxhdGVkID8gY2FjaGUgOiBzdHlsZSwgcCwgc3RhcnROdW0sIHJlbGF0aXZlID8gcmVsYXRpdmUgKiBlbmROdW0gOiBlbmROdW0gLSBzdGFydE51bSwgIWlzVHJhbnNmb3JtUmVsYXRlZCAmJiAoZW5kVW5pdCA9PT0gXCJweFwiIHx8IHAgPT09IFwiekluZGV4XCIpICYmIHZhcnMuYXV0b1JvdW5kICE9PSBmYWxzZSA/IF9yZW5kZXJSb3VuZGVkQ1NTUHJvcCA6IF9yZW5kZXJDU1NQcm9wKTtcbiAgICAgICAgICB0aGlzLl9wdC51ID0gZW5kVW5pdCB8fCAwO1xuXG4gICAgICAgICAgaWYgKHN0YXJ0VW5pdCAhPT0gZW5kVW5pdCAmJiBlbmRVbml0ICE9PSBcIiVcIikge1xuICAgICAgICAgICAgLy93aGVuIHRoZSB0d2VlbiBnb2VzIGFsbCB0aGUgd2F5IGJhY2sgdG8gdGhlIGJlZ2lubmluZywgd2UgbmVlZCB0byByZXZlcnQgaXQgdG8gdGhlIE9MRC9PUklHSU5BTCB2YWx1ZSAod2l0aCB0aG9zZSB1bml0cykuIFdlIHJlY29yZCB0aGF0IGFzIGEgXCJiXCIgKGJlZ2lubmluZykgcHJvcGVydHkgYW5kIHBvaW50IHRvIGEgcmVuZGVyIG1ldGhvZCB0aGF0IGhhbmRsZXMgdGhhdC4gKHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbilcbiAgICAgICAgICAgIHRoaXMuX3B0LmIgPSBzdGFydFZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fcHQuciA9IF9yZW5kZXJDU1NQcm9wV2l0aEJlZ2lubmluZztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIShwIGluIHN0eWxlKSkge1xuICAgICAgICAgIGlmIChwIGluIHRhcmdldCkge1xuICAgICAgICAgICAgLy9tYXliZSBpdCdzIG5vdCBhIHN0eWxlIC0gaXQgY291bGQgYmUgYSBwcm9wZXJ0eSBhZGRlZCBkaXJlY3RseSB0byBhbiBlbGVtZW50IGluIHdoaWNoIGNhc2Ugd2UnbGwgdHJ5IHRvIGFuaW1hdGUgdGhhdC5cbiAgICAgICAgICAgIHRoaXMuYWRkKHRhcmdldCwgcCwgc3RhcnRWYWx1ZSB8fCB0YXJnZXRbcF0sIGVuZFZhbHVlLCBpbmRleCwgdGFyZ2V0cyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9taXNzaW5nUGx1Z2luKHAsIGVuZFZhbHVlKTtcblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90d2VlbkNvbXBsZXhDU1NTdHJpbmcuY2FsbCh0aGlzLCB0YXJnZXQsIHAsIHN0YXJ0VmFsdWUsIGVuZFZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BzLnB1c2gocCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGFzUHJpb3JpdHkgJiYgX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eSh0aGlzKTtcbiAgfSxcbiAgZ2V0OiBfZ2V0LFxuICBhbGlhc2VzOiBfcHJvcGVydHlBbGlhc2VzLFxuICBnZXRTZXR0ZXI6IGZ1bmN0aW9uIGdldFNldHRlcih0YXJnZXQsIHByb3BlcnR5LCBwbHVnaW4pIHtcbiAgICAvL3JldHVybnMgYSBzZXR0ZXIgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIHRhcmdldCwgcHJvcGVydHksIHZhbHVlIGFuZCBhcHBsaWVzIGl0IGFjY29yZGluZ2x5LiBSZW1lbWJlciwgcHJvcGVydGllcyBsaWtlIFwieFwiIGFyZW4ndCBhcyBzaW1wbGUgYXMgdGFyZ2V0LnN0eWxlLnByb3BlcnR5ID0gdmFsdWUgYmVjYXVzZSB0aGV5J3ZlIGdvdCB0byBiZSBhcHBsaWVkIHRvIGEgcHJveHkgb2JqZWN0IGFuZCB0aGVuIG1lcmdlZCBpbnRvIGEgdHJhbnNmb3JtIHN0cmluZyBpbiBhIHJlbmRlcmVyLlxuICAgIHZhciBwID0gX3Byb3BlcnR5QWxpYXNlc1twcm9wZXJ0eV07XG4gICAgcCAmJiBwLmluZGV4T2YoXCIsXCIpIDwgMCAmJiAocHJvcGVydHkgPSBwKTtcbiAgICByZXR1cm4gcHJvcGVydHkgaW4gX3RyYW5zZm9ybVByb3BzICYmIHByb3BlcnR5ICE9PSBfdHJhbnNmb3JtT3JpZ2luUHJvcCAmJiAodGFyZ2V0Ll9nc2FwLnggfHwgX2dldCh0YXJnZXQsIFwieFwiKSkgPyBwbHVnaW4gJiYgX3JlY2VudFNldHRlclBsdWdpbiA9PT0gcGx1Z2luID8gcHJvcGVydHkgPT09IFwic2NhbGVcIiA/IF9zZXR0ZXJTY2FsZSA6IF9zZXR0ZXJUcmFuc2Zvcm0gOiAoX3JlY2VudFNldHRlclBsdWdpbiA9IHBsdWdpbiB8fCB7fSkgJiYgKHByb3BlcnR5ID09PSBcInNjYWxlXCIgPyBfc2V0dGVyU2NhbGVXaXRoUmVuZGVyIDogX3NldHRlclRyYW5zZm9ybVdpdGhSZW5kZXIpIDogdGFyZ2V0LnN0eWxlICYmICFfaXNVbmRlZmluZWQodGFyZ2V0LnN0eWxlW3Byb3BlcnR5XSkgPyBfc2V0dGVyQ1NTU3R5bGUgOiB+cHJvcGVydHkuaW5kZXhPZihcIi1cIikgPyBfc2V0dGVyQ1NTUHJvcCA6IF9nZXRTZXR0ZXIodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gIH0sXG4gIGNvcmU6IHtcbiAgICBfcmVtb3ZlUHJvcGVydHk6IF9yZW1vdmVQcm9wZXJ0eSxcbiAgICBfZ2V0TWF0cml4OiBfZ2V0TWF0cml4XG4gIH1cbn07XG5nc2FwLnV0aWxzLmNoZWNrUHJlZml4ID0gX2NoZWNrUHJvcFByZWZpeDtcblxuKGZ1bmN0aW9uIChwb3NpdGlvbkFuZFNjYWxlLCByb3RhdGlvbiwgb3RoZXJzLCBhbGlhc2VzKSB7XG4gIHZhciBhbGwgPSBfZm9yRWFjaE5hbWUocG9zaXRpb25BbmRTY2FsZSArIFwiLFwiICsgcm90YXRpb24gKyBcIixcIiArIG90aGVycywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBfdHJhbnNmb3JtUHJvcHNbbmFtZV0gPSAxO1xuICB9KTtcblxuICBfZm9yRWFjaE5hbWUocm90YXRpb24sIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgX2NvbmZpZy51bml0c1tuYW1lXSA9IFwiZGVnXCI7XG4gICAgX3JvdGF0aW9uYWxQcm9wZXJ0aWVzW25hbWVdID0gMTtcbiAgfSk7XG5cbiAgX3Byb3BlcnR5QWxpYXNlc1thbGxbMTNdXSA9IHBvc2l0aW9uQW5kU2NhbGUgKyBcIixcIiArIHJvdGF0aW9uO1xuXG4gIF9mb3JFYWNoTmFtZShhbGlhc2VzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBzcGxpdCA9IG5hbWUuc3BsaXQoXCI6XCIpO1xuICAgIF9wcm9wZXJ0eUFsaWFzZXNbc3BsaXRbMV1dID0gYWxsW3NwbGl0WzBdXTtcbiAgfSk7XG59KShcIngseSx6LHNjYWxlLHNjYWxlWCxzY2FsZVkseFBlcmNlbnQseVBlcmNlbnRcIiwgXCJyb3RhdGlvbixyb3RhdGlvblgscm90YXRpb25ZLHNrZXdYLHNrZXdZXCIsIFwidHJhbnNmb3JtLHRyYW5zZm9ybU9yaWdpbixzdmdPcmlnaW4sZm9yY2UzRCxzbW9vdGhPcmlnaW4sdHJhbnNmb3JtUGVyc3BlY3RpdmVcIiwgXCIwOnRyYW5zbGF0ZVgsMTp0cmFuc2xhdGVZLDI6dHJhbnNsYXRlWiw4OnJvdGF0ZSw4OnJvdGF0aW9uWiw4OnJvdGF0ZVosOTpyb3RhdGVYLDEwOnJvdGF0ZVlcIik7XG5cbl9mb3JFYWNoTmFtZShcIngseSx6LHRvcCxyaWdodCxib3R0b20sbGVmdCx3aWR0aCxoZWlnaHQsZm9udFNpemUscGFkZGluZyxtYXJnaW4scGVyc3BlY3RpdmVcIiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgX2NvbmZpZy51bml0c1tuYW1lXSA9IFwicHhcIjtcbn0pO1xuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKENTU1BsdWdpbik7XG5leHBvcnQgeyBDU1NQbHVnaW4gYXMgZGVmYXVsdCwgX2dldEJCb3gsIF9jcmVhdGVFbGVtZW50LCBfY2hlY2tQcm9wUHJlZml4IGFzIGNoZWNrUHJlZml4IH07IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKiFcbiAqIEdTQVAgMy44LjBcbiAqIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbVxuICpcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAyMDA4LTIwMjEsIEdyZWVuU29jay4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFN1YmplY3QgdG8gdGhlIHRlcm1zIGF0IGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9zdGFuZGFyZC1saWNlbnNlIG9yIGZvclxuICogQ2x1YiBHcmVlblNvY2sgbWVtYmVycywgdGhlIGFncmVlbWVudCBpc3N1ZWQgd2l0aCB0aGF0IG1lbWJlcnNoaXAuXG4gKiBAYXV0aG9yOiBKYWNrIERveWxlLCBqYWNrQGdyZWVuc29jay5jb21cbiovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG52YXIgX2NvbmZpZyA9IHtcbiAgYXV0b1NsZWVwOiAxMjAsXG4gIGZvcmNlM0Q6IFwiYXV0b1wiLFxuICBudWxsVGFyZ2V0V2FybjogMSxcbiAgdW5pdHM6IHtcbiAgICBsaW5lSGVpZ2h0OiBcIlwiXG4gIH1cbn0sXG4gICAgX2RlZmF1bHRzID0ge1xuICBkdXJhdGlvbjogLjUsXG4gIG92ZXJ3cml0ZTogZmFsc2UsXG4gIGRlbGF5OiAwXG59LFxuICAgIF9zdXBwcmVzc092ZXJ3cml0ZXMsXG4gICAgX2JpZ051bSA9IDFlOCxcbiAgICBfdGlueU51bSA9IDEgLyBfYmlnTnVtLFxuICAgIF8yUEkgPSBNYXRoLlBJICogMixcbiAgICBfSEFMRl9QSSA9IF8yUEkgLyA0LFxuICAgIF9nc0lEID0gMCxcbiAgICBfc3FydCA9IE1hdGguc3FydCxcbiAgICBfY29zID0gTWF0aC5jb3MsXG4gICAgX3NpbiA9IE1hdGguc2luLFxuICAgIF9pc1N0cmluZyA9IGZ1bmN0aW9uIF9pc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiO1xufSxcbiAgICBfaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIF9pc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIjtcbn0sXG4gICAgX2lzTnVtYmVyID0gZnVuY3Rpb24gX2lzTnVtYmVyKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCI7XG59LFxuICAgIF9pc1VuZGVmaW5lZCA9IGZ1bmN0aW9uIF9pc1VuZGVmaW5lZCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiO1xufSxcbiAgICBfaXNPYmplY3QgPSBmdW5jdGlvbiBfaXNPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIjtcbn0sXG4gICAgX2lzTm90RmFsc2UgPSBmdW5jdGlvbiBfaXNOb3RGYWxzZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IGZhbHNlO1xufSxcbiAgICBfd2luZG93RXhpc3RzID0gZnVuY3Rpb24gX3dpbmRvd0V4aXN0cygpIHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCI7XG59LFxuICAgIF9pc0Z1bmNPclN0cmluZyA9IGZ1bmN0aW9uIF9pc0Z1bmNPclN0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gX2lzRnVuY3Rpb24odmFsdWUpIHx8IF9pc1N0cmluZyh2YWx1ZSk7XG59LFxuICAgIF9pc1R5cGVkQXJyYXkgPSB0eXBlb2YgQXJyYXlCdWZmZXIgPT09IFwiZnVuY3Rpb25cIiAmJiBBcnJheUJ1ZmZlci5pc1ZpZXcgfHwgZnVuY3Rpb24gKCkge30sXG4gICAgLy8gbm90ZTogSUUxMCBoYXMgQXJyYXlCdWZmZXIsIGJ1dCBOT1QgQXJyYXlCdWZmZXIuaXNWaWV3KCkuXG5faXNBcnJheSA9IEFycmF5LmlzQXJyYXksXG4gICAgX3N0cmljdE51bUV4cCA9IC8oPzotP1xcLj9cXGR8XFwuKSsvZ2ksXG4gICAgLy9vbmx5IG51bWJlcnMgKGluY2x1ZGluZyBuZWdhdGl2ZXMgYW5kIGRlY2ltYWxzKSBidXQgTk9UIHJlbGF0aXZlIHZhbHVlcy5cbl9udW1FeHAgPSAvWy0rPS5dKlxcZCtbLmVcXC0rXSpcXGQqW2VcXC0rXSpcXGQqL2csXG4gICAgLy9maW5kcyBhbnkgbnVtYmVycywgaW5jbHVkaW5nIG9uZXMgdGhhdCBzdGFydCB3aXRoICs9IG9yIC09LCBuZWdhdGl2ZSBudW1iZXJzLCBhbmQgb25lcyBpbiBzY2llbnRpZmljIG5vdGF0aW9uIGxpa2UgMWUtOC5cbl9udW1XaXRoVW5pdEV4cCA9IC9bLSs9Ll0qXFxkK1suZS1dKlxcZCpbYS16JV0qL2csXG4gICAgX2NvbXBsZXhTdHJpbmdOdW1FeHAgPSAvWy0rPS5dKlxcZCtcXC4/XFxkKig/OmUtfGVcXCspP1xcZCovZ2ksXG4gICAgLy9kdXBsaWNhdGUgc28gdGhhdCB3aGlsZSB3ZSdyZSBsb29waW5nIHRocm91Z2ggbWF0Y2hlcyBmcm9tIGV4ZWMoKSwgaXQgZG9lc24ndCBjb250YW1pbmF0ZSB0aGUgbGFzdEluZGV4IG9mIF9udW1FeHAgd2hpY2ggd2UgdXNlIHRvIHNlYXJjaCBmb3IgY29sb3JzIHRvby5cbl9yZWxFeHAgPSAvWystXT0tP1suXFxkXSsvLFxuICAgIF9kZWxpbWl0ZWRWYWx1ZUV4cCA9IC9bXiwnXCJcXFtcXF1cXHNdKy9naSxcbiAgICAvLyBwcmV2aW91c2x5IC9bI1xcLSsuXSpcXGJbYS16XFxkXFwtPSslLl0rL2dpIGJ1dCBkaWRuJ3QgY2F0Y2ggc3BlY2lhbCBjaGFyYWN0ZXJzLlxuX3VuaXRFeHAgPSAvW1xcZC4rXFwtPV0rKD86ZVstK11cXGQqKSovaSxcbiAgICBfZ2xvYmFsVGltZWxpbmUsXG4gICAgX3dpbixcbiAgICBfY29yZUluaXR0ZWQsXG4gICAgX2RvYyxcbiAgICBfZ2xvYmFscyA9IHt9LFxuICAgIF9pbnN0YWxsU2NvcGUgPSB7fSxcbiAgICBfY29yZVJlYWR5LFxuICAgIF9pbnN0YWxsID0gZnVuY3Rpb24gX2luc3RhbGwoc2NvcGUpIHtcbiAgcmV0dXJuIChfaW5zdGFsbFNjb3BlID0gX21lcmdlKHNjb3BlLCBfZ2xvYmFscykpICYmIGdzYXA7XG59LFxuICAgIF9taXNzaW5nUGx1Z2luID0gZnVuY3Rpb24gX21pc3NpbmdQbHVnaW4ocHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiBjb25zb2xlLndhcm4oXCJJbnZhbGlkIHByb3BlcnR5XCIsIHByb3BlcnR5LCBcInNldCB0b1wiLCB2YWx1ZSwgXCJNaXNzaW5nIHBsdWdpbj8gZ3NhcC5yZWdpc3RlclBsdWdpbigpXCIpO1xufSxcbiAgICBfd2FybiA9IGZ1bmN0aW9uIF93YXJuKG1lc3NhZ2UsIHN1cHByZXNzKSB7XG4gIHJldHVybiAhc3VwcHJlc3MgJiYgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xufSxcbiAgICBfYWRkR2xvYmFsID0gZnVuY3Rpb24gX2FkZEdsb2JhbChuYW1lLCBvYmopIHtcbiAgcmV0dXJuIG5hbWUgJiYgKF9nbG9iYWxzW25hbWVdID0gb2JqKSAmJiBfaW5zdGFsbFNjb3BlICYmIChfaW5zdGFsbFNjb3BlW25hbWVdID0gb2JqKSB8fCBfZ2xvYmFscztcbn0sXG4gICAgX2VtcHR5RnVuYyA9IGZ1bmN0aW9uIF9lbXB0eUZ1bmMoKSB7XG4gIHJldHVybiAwO1xufSxcbiAgICBfcmVzZXJ2ZWRQcm9wcyA9IHt9LFxuICAgIF9sYXp5VHdlZW5zID0gW10sXG4gICAgX2xhenlMb29rdXAgPSB7fSxcbiAgICBfbGFzdFJlbmRlcmVkRnJhbWUsXG4gICAgX3BsdWdpbnMgPSB7fSxcbiAgICBfZWZmZWN0cyA9IHt9LFxuICAgIF9uZXh0R0NGcmFtZSA9IDMwLFxuICAgIF9oYXJuZXNzUGx1Z2lucyA9IFtdLFxuICAgIF9jYWxsYmFja05hbWVzID0gXCJcIixcbiAgICBfaGFybmVzcyA9IGZ1bmN0aW9uIF9oYXJuZXNzKHRhcmdldHMpIHtcbiAgdmFyIHRhcmdldCA9IHRhcmdldHNbMF0sXG4gICAgICBoYXJuZXNzUGx1Z2luLFxuICAgICAgaTtcbiAgX2lzT2JqZWN0KHRhcmdldCkgfHwgX2lzRnVuY3Rpb24odGFyZ2V0KSB8fCAodGFyZ2V0cyA9IFt0YXJnZXRzXSk7XG5cbiAgaWYgKCEoaGFybmVzc1BsdWdpbiA9ICh0YXJnZXQuX2dzYXAgfHwge30pLmhhcm5lc3MpKSB7XG4gICAgLy8gZmluZCB0aGUgZmlyc3QgdGFyZ2V0IHdpdGggYSBoYXJuZXNzLiBXZSBhc3N1bWUgdGFyZ2V0cyBwYXNzZWQgaW50byBhbiBhbmltYXRpb24gd2lsbCBiZSBvZiBzaW1pbGFyIHR5cGUsIG1lYW5pbmcgdGhlIHNhbWUga2luZCBvZiBoYXJuZXNzIGNhbiBiZSB1c2VkIGZvciB0aGVtIGFsbCAocGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uKVxuICAgIGkgPSBfaGFybmVzc1BsdWdpbnMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSAmJiAhX2hhcm5lc3NQbHVnaW5zW2ldLnRhcmdldFRlc3QodGFyZ2V0KSkge31cblxuICAgIGhhcm5lc3NQbHVnaW4gPSBfaGFybmVzc1BsdWdpbnNbaV07XG4gIH1cblxuICBpID0gdGFyZ2V0cy5sZW5ndGg7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIHRhcmdldHNbaV0gJiYgKHRhcmdldHNbaV0uX2dzYXAgfHwgKHRhcmdldHNbaV0uX2dzYXAgPSBuZXcgR1NDYWNoZSh0YXJnZXRzW2ldLCBoYXJuZXNzUGx1Z2luKSkpIHx8IHRhcmdldHMuc3BsaWNlKGksIDEpO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldHM7XG59LFxuICAgIF9nZXRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRDYWNoZSh0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldC5fZ3NhcCB8fCBfaGFybmVzcyh0b0FycmF5KHRhcmdldCkpWzBdLl9nc2FwO1xufSxcbiAgICBfZ2V0UHJvcGVydHkgPSBmdW5jdGlvbiBfZ2V0UHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgdikge1xuICByZXR1cm4gKHYgPSB0YXJnZXRbcHJvcGVydHldKSAmJiBfaXNGdW5jdGlvbih2KSA/IHRhcmdldFtwcm9wZXJ0eV0oKSA6IF9pc1VuZGVmaW5lZCh2KSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUocHJvcGVydHkpIHx8IHY7XG59LFxuICAgIF9mb3JFYWNoTmFtZSA9IGZ1bmN0aW9uIF9mb3JFYWNoTmFtZShuYW1lcywgZnVuYykge1xuICByZXR1cm4gKG5hbWVzID0gbmFtZXMuc3BsaXQoXCIsXCIpKS5mb3JFYWNoKGZ1bmMpIHx8IG5hbWVzO1xufSxcbiAgICAvL3NwbGl0IGEgY29tbWEtZGVsaW1pdGVkIGxpc3Qgb2YgbmFtZXMgaW50byBhbiBhcnJheSwgdGhlbiBydW4gYSBmb3JFYWNoKCkgZnVuY3Rpb24gYW5kIHJldHVybiB0aGUgc3BsaXQgYXJyYXkgKHRoaXMgaXMganVzdCBhIHdheSB0byBjb25zb2xpZGF0ZS9zaG9ydGVuIHNvbWUgY29kZSkuXG5fcm91bmQgPSBmdW5jdGlvbiBfcm91bmQodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAxMDAwMDApIC8gMTAwMDAwIHx8IDA7XG59LFxuICAgIF9yb3VuZFByZWNpc2UgPSBmdW5jdGlvbiBfcm91bmRQcmVjaXNlKHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogMTAwMDAwMDApIC8gMTAwMDAwMDAgfHwgMDtcbn0sXG4gICAgLy8gaW5jcmVhc2VkIHByZWNpc2lvbiBtb3N0bHkgZm9yIHRpbWluZyB2YWx1ZXMuXG5fYXJyYXlDb250YWluc0FueSA9IGZ1bmN0aW9uIF9hcnJheUNvbnRhaW5zQW55KHRvU2VhcmNoLCB0b0ZpbmQpIHtcbiAgLy9zZWFyY2hlcyBvbmUgYXJyYXkgdG8gZmluZCBtYXRjaGVzIGZvciBhbnkgb2YgdGhlIGl0ZW1zIGluIHRoZSB0b0ZpbmQgYXJyYXkuIEFzIHNvb24gYXMgb25lIGlzIGZvdW5kLCBpdCByZXR1cm5zIHRydWUuIEl0IGRvZXMgTk9UIHJldHVybiBhbGwgdGhlIG1hdGNoZXM7IGl0J3Mgc2ltcGx5IGEgYm9vbGVhbiBzZWFyY2guXG4gIHZhciBsID0gdG9GaW5kLmxlbmd0aCxcbiAgICAgIGkgPSAwO1xuXG4gIGZvciAoOyB0b1NlYXJjaC5pbmRleE9mKHRvRmluZFtpXSkgPCAwICYmICsraSA8IGw7KSB7fVxuXG4gIHJldHVybiBpIDwgbDtcbn0sXG4gICAgX2xhenlSZW5kZXIgPSBmdW5jdGlvbiBfbGF6eVJlbmRlcigpIHtcbiAgdmFyIGwgPSBfbGF6eVR3ZWVucy5sZW5ndGgsXG4gICAgICBhID0gX2xhenlUd2VlbnMuc2xpY2UoMCksXG4gICAgICBpLFxuICAgICAgdHdlZW47XG5cbiAgX2xhenlMb29rdXAgPSB7fTtcbiAgX2xhenlUd2VlbnMubGVuZ3RoID0gMDtcblxuICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgdHdlZW4gPSBhW2ldO1xuICAgIHR3ZWVuICYmIHR3ZWVuLl9sYXp5ICYmICh0d2Vlbi5yZW5kZXIodHdlZW4uX2xhenlbMF0sIHR3ZWVuLl9sYXp5WzFdLCB0cnVlKS5fbGF6eSA9IDApO1xuICB9XG59LFxuICAgIF9sYXp5U2FmZVJlbmRlciA9IGZ1bmN0aW9uIF9sYXp5U2FmZVJlbmRlcihhbmltYXRpb24sIHRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSkge1xuICBfbGF6eVR3ZWVucy5sZW5ndGggJiYgX2xhenlSZW5kZXIoKTtcbiAgYW5pbWF0aW9uLnJlbmRlcih0aW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuICBfbGF6eVR3ZWVucy5sZW5ndGggJiYgX2xhenlSZW5kZXIoKTsgLy9pbiBjYXNlIHJlbmRlcmluZyBjYXVzZWQgYW55IHR3ZWVucyB0byBsYXp5LWluaXQsIHdlIHNob3VsZCByZW5kZXIgdGhlbSBiZWNhdXNlIHR5cGljYWxseSB3aGVuIHNvbWVvbmUgY2FsbHMgc2VlaygpIG9yIHRpbWUoKSBvciBwcm9ncmVzcygpLCB0aGV5IGV4cGVjdCBhbiBpbW1lZGlhdGUgcmVuZGVyLlxufSxcbiAgICBfbnVtZXJpY0lmUG9zc2libGUgPSBmdW5jdGlvbiBfbnVtZXJpY0lmUG9zc2libGUodmFsdWUpIHtcbiAgdmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgcmV0dXJuIChuIHx8IG4gPT09IDApICYmICh2YWx1ZSArIFwiXCIpLm1hdGNoKF9kZWxpbWl0ZWRWYWx1ZUV4cCkubGVuZ3RoIDwgMiA/IG4gOiBfaXNTdHJpbmcodmFsdWUpID8gdmFsdWUudHJpbSgpIDogdmFsdWU7XG59LFxuICAgIF9wYXNzVGhyb3VnaCA9IGZ1bmN0aW9uIF9wYXNzVGhyb3VnaChwKSB7XG4gIHJldHVybiBwO1xufSxcbiAgICBfc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiBfc2V0RGVmYXVsdHMob2JqLCBkZWZhdWx0cykge1xuICBmb3IgKHZhciBwIGluIGRlZmF1bHRzKSB7XG4gICAgcCBpbiBvYmogfHwgKG9ialtwXSA9IGRlZmF1bHRzW3BdKTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59LFxuICAgIF9zZXRLZXlmcmFtZURlZmF1bHRzID0gZnVuY3Rpb24gX3NldEtleWZyYW1lRGVmYXVsdHMob2JqLCBkZWZhdWx0cykge1xuICBmb3IgKHZhciBwIGluIGRlZmF1bHRzKSB7XG4gICAgcCBpbiBvYmogfHwgcCA9PT0gXCJkdXJhdGlvblwiIHx8IHAgPT09IFwiZWFzZVwiIHx8IChvYmpbcF0gPSBkZWZhdWx0c1twXSk7XG4gIH1cbn0sXG4gICAgX21lcmdlID0gZnVuY3Rpb24gX21lcmdlKGJhc2UsIHRvTWVyZ2UpIHtcbiAgZm9yICh2YXIgcCBpbiB0b01lcmdlKSB7XG4gICAgYmFzZVtwXSA9IHRvTWVyZ2VbcF07XG4gIH1cblxuICByZXR1cm4gYmFzZTtcbn0sXG4gICAgX21lcmdlRGVlcCA9IGZ1bmN0aW9uIF9tZXJnZURlZXAoYmFzZSwgdG9NZXJnZSkge1xuICBmb3IgKHZhciBwIGluIHRvTWVyZ2UpIHtcbiAgICBwICE9PSBcIl9fcHJvdG9fX1wiICYmIHAgIT09IFwiY29uc3RydWN0b3JcIiAmJiBwICE9PSBcInByb3RvdHlwZVwiICYmIChiYXNlW3BdID0gX2lzT2JqZWN0KHRvTWVyZ2VbcF0pID8gX21lcmdlRGVlcChiYXNlW3BdIHx8IChiYXNlW3BdID0ge30pLCB0b01lcmdlW3BdKSA6IHRvTWVyZ2VbcF0pO1xuICB9XG5cbiAgcmV0dXJuIGJhc2U7XG59LFxuICAgIF9jb3B5RXhjbHVkaW5nID0gZnVuY3Rpb24gX2NvcHlFeGNsdWRpbmcob2JqLCBleGNsdWRpbmcpIHtcbiAgdmFyIGNvcHkgPSB7fSxcbiAgICAgIHA7XG5cbiAgZm9yIChwIGluIG9iaikge1xuICAgIHAgaW4gZXhjbHVkaW5nIHx8IChjb3B5W3BdID0gb2JqW3BdKTtcbiAgfVxuXG4gIHJldHVybiBjb3B5O1xufSxcbiAgICBfaW5oZXJpdERlZmF1bHRzID0gZnVuY3Rpb24gX2luaGVyaXREZWZhdWx0cyh2YXJzKSB7XG4gIHZhciBwYXJlbnQgPSB2YXJzLnBhcmVudCB8fCBfZ2xvYmFsVGltZWxpbmUsXG4gICAgICBmdW5jID0gdmFycy5rZXlmcmFtZXMgPyBfc2V0S2V5ZnJhbWVEZWZhdWx0cyA6IF9zZXREZWZhdWx0cztcblxuICBpZiAoX2lzTm90RmFsc2UodmFycy5pbmhlcml0KSkge1xuICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgIGZ1bmModmFycywgcGFyZW50LnZhcnMuZGVmYXVsdHMpO1xuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudCB8fCBwYXJlbnQuX2RwO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YXJzO1xufSxcbiAgICBfYXJyYXlzTWF0Y2ggPSBmdW5jdGlvbiBfYXJyYXlzTWF0Y2goYTEsIGEyKSB7XG4gIHZhciBpID0gYTEubGVuZ3RoLFxuICAgICAgbWF0Y2ggPSBpID09PSBhMi5sZW5ndGg7XG5cbiAgd2hpbGUgKG1hdGNoICYmIGktLSAmJiBhMVtpXSA9PT0gYTJbaV0pIHt9XG5cbiAgcmV0dXJuIGkgPCAwO1xufSxcbiAgICBfYWRkTGlua2VkTGlzdEl0ZW0gPSBmdW5jdGlvbiBfYWRkTGlua2VkTGlzdEl0ZW0ocGFyZW50LCBjaGlsZCwgZmlyc3RQcm9wLCBsYXN0UHJvcCwgc29ydEJ5KSB7XG4gIGlmIChmaXJzdFByb3AgPT09IHZvaWQgMCkge1xuICAgIGZpcnN0UHJvcCA9IFwiX2ZpcnN0XCI7XG4gIH1cblxuICBpZiAobGFzdFByb3AgPT09IHZvaWQgMCkge1xuICAgIGxhc3RQcm9wID0gXCJfbGFzdFwiO1xuICB9XG5cbiAgdmFyIHByZXYgPSBwYXJlbnRbbGFzdFByb3BdLFxuICAgICAgdDtcblxuICBpZiAoc29ydEJ5KSB7XG4gICAgdCA9IGNoaWxkW3NvcnRCeV07XG5cbiAgICB3aGlsZSAocHJldiAmJiBwcmV2W3NvcnRCeV0gPiB0KSB7XG4gICAgICBwcmV2ID0gcHJldi5fcHJldjtcbiAgICB9XG4gIH1cblxuICBpZiAocHJldikge1xuICAgIGNoaWxkLl9uZXh0ID0gcHJldi5fbmV4dDtcbiAgICBwcmV2Ll9uZXh0ID0gY2hpbGQ7XG4gIH0gZWxzZSB7XG4gICAgY2hpbGQuX25leHQgPSBwYXJlbnRbZmlyc3RQcm9wXTtcbiAgICBwYXJlbnRbZmlyc3RQcm9wXSA9IGNoaWxkO1xuICB9XG5cbiAgaWYgKGNoaWxkLl9uZXh0KSB7XG4gICAgY2hpbGQuX25leHQuX3ByZXYgPSBjaGlsZDtcbiAgfSBlbHNlIHtcbiAgICBwYXJlbnRbbGFzdFByb3BdID0gY2hpbGQ7XG4gIH1cblxuICBjaGlsZC5fcHJldiA9IHByZXY7XG4gIGNoaWxkLnBhcmVudCA9IGNoaWxkLl9kcCA9IHBhcmVudDtcbiAgcmV0dXJuIGNoaWxkO1xufSxcbiAgICBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0gPSBmdW5jdGlvbiBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0ocGFyZW50LCBjaGlsZCwgZmlyc3RQcm9wLCBsYXN0UHJvcCkge1xuICBpZiAoZmlyc3RQcm9wID09PSB2b2lkIDApIHtcbiAgICBmaXJzdFByb3AgPSBcIl9maXJzdFwiO1xuICB9XG5cbiAgaWYgKGxhc3RQcm9wID09PSB2b2lkIDApIHtcbiAgICBsYXN0UHJvcCA9IFwiX2xhc3RcIjtcbiAgfVxuXG4gIHZhciBwcmV2ID0gY2hpbGQuX3ByZXYsXG4gICAgICBuZXh0ID0gY2hpbGQuX25leHQ7XG5cbiAgaWYgKHByZXYpIHtcbiAgICBwcmV2Ll9uZXh0ID0gbmV4dDtcbiAgfSBlbHNlIGlmIChwYXJlbnRbZmlyc3RQcm9wXSA9PT0gY2hpbGQpIHtcbiAgICBwYXJlbnRbZmlyc3RQcm9wXSA9IG5leHQ7XG4gIH1cblxuICBpZiAobmV4dCkge1xuICAgIG5leHQuX3ByZXYgPSBwcmV2O1xuICB9IGVsc2UgaWYgKHBhcmVudFtsYXN0UHJvcF0gPT09IGNoaWxkKSB7XG4gICAgcGFyZW50W2xhc3RQcm9wXSA9IHByZXY7XG4gIH1cblxuICBjaGlsZC5fbmV4dCA9IGNoaWxkLl9wcmV2ID0gY2hpbGQucGFyZW50ID0gbnVsbDsgLy8gZG9uJ3QgZGVsZXRlIHRoZSBfZHAganVzdCBzbyB3ZSBjYW4gcmV2ZXJ0IGlmIG5lY2Vzc2FyeS4gQnV0IHBhcmVudCBzaG91bGQgYmUgbnVsbCB0byBpbmRpY2F0ZSB0aGUgaXRlbSBpc24ndCBpbiBhIGxpbmtlZCBsaXN0LlxufSxcbiAgICBfcmVtb3ZlRnJvbVBhcmVudCA9IGZ1bmN0aW9uIF9yZW1vdmVGcm9tUGFyZW50KGNoaWxkLCBvbmx5SWZQYXJlbnRIYXNBdXRvUmVtb3ZlKSB7XG4gIGNoaWxkLnBhcmVudCAmJiAoIW9ubHlJZlBhcmVudEhhc0F1dG9SZW1vdmUgfHwgY2hpbGQucGFyZW50LmF1dG9SZW1vdmVDaGlsZHJlbikgJiYgY2hpbGQucGFyZW50LnJlbW92ZShjaGlsZCk7XG4gIGNoaWxkLl9hY3QgPSAwO1xufSxcbiAgICBfdW5jYWNoZSA9IGZ1bmN0aW9uIF91bmNhY2hlKGFuaW1hdGlvbiwgY2hpbGQpIHtcbiAgaWYgKGFuaW1hdGlvbiAmJiAoIWNoaWxkIHx8IGNoaWxkLl9lbmQgPiBhbmltYXRpb24uX2R1ciB8fCBjaGlsZC5fc3RhcnQgPCAwKSkge1xuICAgIC8vIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbjogaWYgYSBjaGlsZCBhbmltYXRpb24gaXMgcGFzc2VkIGluIHdlIHNob3VsZCBvbmx5IHVuY2FjaGUgaWYgdGhhdCBjaGlsZCBFWFRFTkRTIHRoZSBhbmltYXRpb24gKGl0cyBlbmQgdGltZSBpcyBiZXlvbmQgdGhlIGVuZClcbiAgICB2YXIgYSA9IGFuaW1hdGlvbjtcblxuICAgIHdoaWxlIChhKSB7XG4gICAgICBhLl9kaXJ0eSA9IDE7XG4gICAgICBhID0gYS5wYXJlbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFuaW1hdGlvbjtcbn0sXG4gICAgX3JlY2FjaGVBbmNlc3RvcnMgPSBmdW5jdGlvbiBfcmVjYWNoZUFuY2VzdG9ycyhhbmltYXRpb24pIHtcbiAgdmFyIHBhcmVudCA9IGFuaW1hdGlvbi5wYXJlbnQ7XG5cbiAgd2hpbGUgKHBhcmVudCAmJiBwYXJlbnQucGFyZW50KSB7XG4gICAgLy9zb21ldGltZXMgd2UgbXVzdCBmb3JjZSBhIHJlLXNvcnQgb2YgYWxsIGNoaWxkcmVuIGFuZCB1cGRhdGUgdGhlIGR1cmF0aW9uL3RvdGFsRHVyYXRpb24gb2YgYWxsIGFuY2VzdG9yIHRpbWVsaW5lcyBpbW1lZGlhdGVseSBpbiBjYXNlLCBmb3IgZXhhbXBsZSwgaW4gdGhlIG1pZGRsZSBvZiBhIHJlbmRlciBsb29wLCBvbmUgdHdlZW4gYWx0ZXJzIGFub3RoZXIgdHdlZW4ncyB0aW1lU2NhbGUgd2hpY2ggc2hvdmVzIGl0cyBzdGFydFRpbWUgYmVmb3JlIDAsIGZvcmNpbmcgdGhlIHBhcmVudCB0aW1lbGluZSB0byBzaGlmdCBhcm91bmQgYW5kIHNoaWZ0Q2hpbGRyZW4oKSB3aGljaCBjb3VsZCBhZmZlY3QgdGhhdCBuZXh0IHR3ZWVuJ3MgcmVuZGVyIChzdGFydFRpbWUpLiBEb2Vzbid0IG1hdHRlciBmb3IgdGhlIHJvb3QgdGltZWxpbmUgdGhvdWdoLlxuICAgIHBhcmVudC5fZGlydHkgPSAxO1xuICAgIHBhcmVudC50b3RhbER1cmF0aW9uKCk7XG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgfVxuXG4gIHJldHVybiBhbmltYXRpb247XG59LFxuICAgIF9oYXNOb1BhdXNlZEFuY2VzdG9ycyA9IGZ1bmN0aW9uIF9oYXNOb1BhdXNlZEFuY2VzdG9ycyhhbmltYXRpb24pIHtcbiAgcmV0dXJuICFhbmltYXRpb24gfHwgYW5pbWF0aW9uLl90cyAmJiBfaGFzTm9QYXVzZWRBbmNlc3RvcnMoYW5pbWF0aW9uLnBhcmVudCk7XG59LFxuICAgIF9lbGFwc2VkQ3ljbGVEdXJhdGlvbiA9IGZ1bmN0aW9uIF9lbGFwc2VkQ3ljbGVEdXJhdGlvbihhbmltYXRpb24pIHtcbiAgcmV0dXJuIGFuaW1hdGlvbi5fcmVwZWF0ID8gX2FuaW1hdGlvbkN5Y2xlKGFuaW1hdGlvbi5fdFRpbWUsIGFuaW1hdGlvbiA9IGFuaW1hdGlvbi5kdXJhdGlvbigpICsgYW5pbWF0aW9uLl9yRGVsYXkpICogYW5pbWF0aW9uIDogMDtcbn0sXG4gICAgLy8gZmVlZCBpbiB0aGUgdG90YWxUaW1lIGFuZCBjeWNsZUR1cmF0aW9uIGFuZCBpdCdsbCByZXR1cm4gdGhlIGN5Y2xlIChpdGVyYXRpb24gbWludXMgMSkgYW5kIGlmIHRoZSBwbGF5aGVhZCBpcyBleGFjdGx5IGF0IHRoZSB2ZXJ5IEVORCwgaXQgd2lsbCBOT1QgYnVtcCB1cCB0byB0aGUgbmV4dCBjeWNsZS5cbl9hbmltYXRpb25DeWNsZSA9IGZ1bmN0aW9uIF9hbmltYXRpb25DeWNsZSh0VGltZSwgY3ljbGVEdXJhdGlvbikge1xuICB2YXIgd2hvbGUgPSBNYXRoLmZsb29yKHRUaW1lIC89IGN5Y2xlRHVyYXRpb24pO1xuICByZXR1cm4gdFRpbWUgJiYgd2hvbGUgPT09IHRUaW1lID8gd2hvbGUgLSAxIDogd2hvbGU7XG59LFxuICAgIF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lID0gZnVuY3Rpb24gX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUocGFyZW50VGltZSwgY2hpbGQpIHtcbiAgcmV0dXJuIChwYXJlbnRUaW1lIC0gY2hpbGQuX3N0YXJ0KSAqIGNoaWxkLl90cyArIChjaGlsZC5fdHMgPj0gMCA/IDAgOiBjaGlsZC5fZGlydHkgPyBjaGlsZC50b3RhbER1cmF0aW9uKCkgOiBjaGlsZC5fdER1cik7XG59LFxuICAgIF9zZXRFbmQgPSBmdW5jdGlvbiBfc2V0RW5kKGFuaW1hdGlvbikge1xuICByZXR1cm4gYW5pbWF0aW9uLl9lbmQgPSBfcm91bmRQcmVjaXNlKGFuaW1hdGlvbi5fc3RhcnQgKyAoYW5pbWF0aW9uLl90RHVyIC8gTWF0aC5hYnMoYW5pbWF0aW9uLl90cyB8fCBhbmltYXRpb24uX3J0cyB8fCBfdGlueU51bSkgfHwgMCkpO1xufSxcbiAgICBfYWxpZ25QbGF5aGVhZCA9IGZ1bmN0aW9uIF9hbGlnblBsYXloZWFkKGFuaW1hdGlvbiwgdG90YWxUaW1lKSB7XG4gIC8vIGFkanVzdHMgdGhlIGFuaW1hdGlvbidzIF9zdGFydCBhbmQgX2VuZCBhY2NvcmRpbmcgdG8gdGhlIHByb3ZpZGVkIHRvdGFsVGltZSAob25seSBpZiB0aGUgcGFyZW50J3Mgc21vb3RoQ2hpbGRUaW1pbmcgaXMgdHJ1ZSBhbmQgdGhlIGFuaW1hdGlvbiBpc24ndCBwYXVzZWQpLiBJdCBkb2Vzbid0IGRvIGFueSByZW5kZXJpbmcgb3IgZm9yY2luZyB0aGluZ3MgYmFjayBpbnRvIHBhcmVudCB0aW1lbGluZXMsIGV0Yy4gLSB0aGF0J3Mgd2hhdCB0b3RhbFRpbWUoKSBpcyBmb3IuXG4gIHZhciBwYXJlbnQgPSBhbmltYXRpb24uX2RwO1xuXG4gIGlmIChwYXJlbnQgJiYgcGFyZW50LnNtb290aENoaWxkVGltaW5nICYmIGFuaW1hdGlvbi5fdHMpIHtcbiAgICBhbmltYXRpb24uX3N0YXJ0ID0gX3JvdW5kUHJlY2lzZShwYXJlbnQuX3RpbWUgLSAoYW5pbWF0aW9uLl90cyA+IDAgPyB0b3RhbFRpbWUgLyBhbmltYXRpb24uX3RzIDogKChhbmltYXRpb24uX2RpcnR5ID8gYW5pbWF0aW9uLnRvdGFsRHVyYXRpb24oKSA6IGFuaW1hdGlvbi5fdER1cikgLSB0b3RhbFRpbWUpIC8gLWFuaW1hdGlvbi5fdHMpKTtcblxuICAgIF9zZXRFbmQoYW5pbWF0aW9uKTtcblxuICAgIHBhcmVudC5fZGlydHkgfHwgX3VuY2FjaGUocGFyZW50LCBhbmltYXRpb24pOyAvL2ZvciBwZXJmb3JtYW5jZSBpbXByb3ZlbWVudC4gSWYgdGhlIHBhcmVudCdzIGNhY2hlIGlzIGFscmVhZHkgZGlydHksIGl0IGFscmVhZHkgdG9vayBjYXJlIG9mIG1hcmtpbmcgdGhlIGFuY2VzdG9ycyBhcyBkaXJ0eSB0b28sIHNvIHNraXAgdGhlIGZ1bmN0aW9uIGNhbGwgaGVyZS5cbiAgfVxuXG4gIHJldHVybiBhbmltYXRpb247XG59LFxuXG4vKlxuX3RvdGFsVGltZVRvVGltZSA9IChjbGFtcGVkVG90YWxUaW1lLCBkdXJhdGlvbiwgcmVwZWF0LCByZXBlYXREZWxheSwgeW95bykgPT4ge1xuXHRsZXQgY3ljbGVEdXJhdGlvbiA9IGR1cmF0aW9uICsgcmVwZWF0RGVsYXksXG5cdFx0dGltZSA9IF9yb3VuZChjbGFtcGVkVG90YWxUaW1lICUgY3ljbGVEdXJhdGlvbik7XG5cdGlmICh0aW1lID4gZHVyYXRpb24pIHtcblx0XHR0aW1lID0gZHVyYXRpb247XG5cdH1cblx0cmV0dXJuICh5b3lvICYmICh+fihjbGFtcGVkVG90YWxUaW1lIC8gY3ljbGVEdXJhdGlvbikgJiAxKSkgPyBkdXJhdGlvbiAtIHRpbWUgOiB0aW1lO1xufSxcbiovXG5fcG9zdEFkZENoZWNrcyA9IGZ1bmN0aW9uIF9wb3N0QWRkQ2hlY2tzKHRpbWVsaW5lLCBjaGlsZCkge1xuICB2YXIgdDtcblxuICBpZiAoY2hpbGQuX3RpbWUgfHwgY2hpbGQuX2luaXR0ZWQgJiYgIWNoaWxkLl9kdXIpIHtcbiAgICAvL2luIGNhc2UsIGZvciBleGFtcGxlLCB0aGUgX3N0YXJ0IGlzIG1vdmVkIG9uIGEgdHdlZW4gdGhhdCBoYXMgYWxyZWFkeSByZW5kZXJlZC4gSW1hZ2luZSBpdCdzIGF0IGl0cyBlbmQgc3RhdGUsIHRoZW4gdGhlIHN0YXJ0VGltZSBpcyBtb3ZlZCBXQVkgbGF0ZXIgKGFmdGVyIHRoZSBlbmQgb2YgdGhpcyB0aW1lbGluZSksIGl0IHNob3VsZCByZW5kZXIgYXQgaXRzIGJlZ2lubmluZy5cbiAgICB0ID0gX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUodGltZWxpbmUucmF3VGltZSgpLCBjaGlsZCk7XG5cbiAgICBpZiAoIWNoaWxkLl9kdXIgfHwgX2NsYW1wKDAsIGNoaWxkLnRvdGFsRHVyYXRpb24oKSwgdCkgLSBjaGlsZC5fdFRpbWUgPiBfdGlueU51bSkge1xuICAgICAgY2hpbGQucmVuZGVyKHQsIHRydWUpO1xuICAgIH1cbiAgfSAvL2lmIHRoZSB0aW1lbGluZSBoYXMgYWxyZWFkeSBlbmRlZCBidXQgdGhlIGluc2VydGVkIHR3ZWVuL3RpbWVsaW5lIGV4dGVuZHMgdGhlIGR1cmF0aW9uLCB3ZSBzaG91bGQgZW5hYmxlIHRoaXMgdGltZWxpbmUgYWdhaW4gc28gdGhhdCBpdCByZW5kZXJzIHByb3Blcmx5LiBXZSBzaG91bGQgYWxzbyBhbGlnbiB0aGUgcGxheWhlYWQgd2l0aCB0aGUgcGFyZW50IHRpbWVsaW5lJ3Mgd2hlbiBhcHByb3ByaWF0ZS5cblxuXG4gIGlmIChfdW5jYWNoZSh0aW1lbGluZSwgY2hpbGQpLl9kcCAmJiB0aW1lbGluZS5faW5pdHRlZCAmJiB0aW1lbGluZS5fdGltZSA+PSB0aW1lbGluZS5fZHVyICYmIHRpbWVsaW5lLl90cykge1xuICAgIC8vaW4gY2FzZSBhbnkgb2YgdGhlIGFuY2VzdG9ycyBoYWQgY29tcGxldGVkIGJ1dCBzaG91bGQgbm93IGJlIGVuYWJsZWQuLi5cbiAgICBpZiAodGltZWxpbmUuX2R1ciA8IHRpbWVsaW5lLmR1cmF0aW9uKCkpIHtcbiAgICAgIHQgPSB0aW1lbGluZTtcblxuICAgICAgd2hpbGUgKHQuX2RwKSB7XG4gICAgICAgIHQucmF3VGltZSgpID49IDAgJiYgdC50b3RhbFRpbWUodC5fdFRpbWUpOyAvL21vdmVzIHRoZSB0aW1lbGluZSAoc2hpZnRzIGl0cyBzdGFydFRpbWUpIGlmIG5lY2Vzc2FyeSwgYW5kIGFsc28gZW5hYmxlcyBpdC4gSWYgaXQncyBjdXJyZW50bHkgemVybywgdGhvdWdoLCBpdCBtYXkgbm90IGJlIHNjaGVkdWxlZCB0byByZW5kZXIgdW50aWwgbGF0ZXIgc28gdGhlcmUncyBubyBuZWVkIHRvIGZvcmNlIGl0IHRvIGFsaWduIHdpdGggdGhlIGN1cnJlbnQgcGxheWhlYWQgcG9zaXRpb24uIE9ubHkgbW92ZSB0byBjYXRjaCB1cCB3aXRoIHRoZSBwbGF5aGVhZC5cblxuICAgICAgICB0ID0gdC5fZHA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGltZWxpbmUuX3pUaW1lID0gLV90aW55TnVtOyAvLyBoZWxwcyBlbnN1cmUgdGhhdCB0aGUgbmV4dCByZW5kZXIoKSB3aWxsIGJlIGZvcmNlZCAoY3Jvc3NpbmdTdGFydCA9IHRydWUgaW4gcmVuZGVyKCkpLCBldmVuIGlmIHRoZSBkdXJhdGlvbiBoYXNuJ3QgY2hhbmdlZCAod2UncmUgYWRkaW5nIGEgY2hpbGQgd2hpY2ggd291bGQgbmVlZCB0byBnZXQgcmVuZGVyZWQpLiBEZWZpbml0ZWx5IGFuIGVkZ2UgY2FzZS4gTm90ZTogd2UgTVVTVCBkbyB0aGlzIEFGVEVSIHRoZSBsb29wIGFib3ZlIHdoZXJlIHRoZSB0b3RhbFRpbWUoKSBtaWdodCB0cmlnZ2VyIGEgcmVuZGVyKCkgYmVjYXVzZSB0aGlzIF9hZGRUb1RpbWVsaW5lKCkgbWV0aG9kIGdldHMgY2FsbGVkIGZyb20gdGhlIEFuaW1hdGlvbiBjb25zdHJ1Y3RvciwgQkVGT1JFIHR3ZWVucyBldmVuIHJlY29yZCB0aGVpciB0YXJnZXRzLCBldGMuIHNvIHdlIHdvdWxkbid0IHdhbnQgdGhpbmdzIHRvIGdldCB0cmlnZ2VyZWQgaW4gdGhlIHdyb25nIG9yZGVyLlxuICB9XG59LFxuICAgIF9hZGRUb1RpbWVsaW5lID0gZnVuY3Rpb24gX2FkZFRvVGltZWxpbmUodGltZWxpbmUsIGNoaWxkLCBwb3NpdGlvbiwgc2tpcENoZWNrcykge1xuICBjaGlsZC5wYXJlbnQgJiYgX3JlbW92ZUZyb21QYXJlbnQoY2hpbGQpO1xuICBjaGlsZC5fc3RhcnQgPSBfcm91bmRQcmVjaXNlKChfaXNOdW1iZXIocG9zaXRpb24pID8gcG9zaXRpb24gOiBwb3NpdGlvbiB8fCB0aW1lbGluZSAhPT0gX2dsb2JhbFRpbWVsaW5lID8gX3BhcnNlUG9zaXRpb24odGltZWxpbmUsIHBvc2l0aW9uLCBjaGlsZCkgOiB0aW1lbGluZS5fdGltZSkgKyBjaGlsZC5fZGVsYXkpO1xuICBjaGlsZC5fZW5kID0gX3JvdW5kUHJlY2lzZShjaGlsZC5fc3RhcnQgKyAoY2hpbGQudG90YWxEdXJhdGlvbigpIC8gTWF0aC5hYnMoY2hpbGQudGltZVNjYWxlKCkpIHx8IDApKTtcblxuICBfYWRkTGlua2VkTGlzdEl0ZW0odGltZWxpbmUsIGNoaWxkLCBcIl9maXJzdFwiLCBcIl9sYXN0XCIsIHRpbWVsaW5lLl9zb3J0ID8gXCJfc3RhcnRcIiA6IDApO1xuXG4gIF9pc0Zyb21PckZyb21TdGFydChjaGlsZCkgfHwgKHRpbWVsaW5lLl9yZWNlbnQgPSBjaGlsZCk7XG4gIHNraXBDaGVja3MgfHwgX3Bvc3RBZGRDaGVja3ModGltZWxpbmUsIGNoaWxkKTtcbiAgcmV0dXJuIHRpbWVsaW5lO1xufSxcbiAgICBfc2Nyb2xsVHJpZ2dlciA9IGZ1bmN0aW9uIF9zY3JvbGxUcmlnZ2VyKGFuaW1hdGlvbiwgdHJpZ2dlcikge1xuICByZXR1cm4gKF9nbG9iYWxzLlNjcm9sbFRyaWdnZXIgfHwgX21pc3NpbmdQbHVnaW4oXCJzY3JvbGxUcmlnZ2VyXCIsIHRyaWdnZXIpKSAmJiBfZ2xvYmFscy5TY3JvbGxUcmlnZ2VyLmNyZWF0ZSh0cmlnZ2VyLCBhbmltYXRpb24pO1xufSxcbiAgICBfYXR0ZW1wdEluaXRUd2VlbiA9IGZ1bmN0aW9uIF9hdHRlbXB0SW5pdFR3ZWVuKHR3ZWVuLCB0b3RhbFRpbWUsIGZvcmNlLCBzdXBwcmVzc0V2ZW50cykge1xuICBfaW5pdFR3ZWVuKHR3ZWVuLCB0b3RhbFRpbWUpO1xuXG4gIGlmICghdHdlZW4uX2luaXR0ZWQpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIGlmICghZm9yY2UgJiYgdHdlZW4uX3B0ICYmICh0d2Vlbi5fZHVyICYmIHR3ZWVuLnZhcnMubGF6eSAhPT0gZmFsc2UgfHwgIXR3ZWVuLl9kdXIgJiYgdHdlZW4udmFycy5sYXp5KSAmJiBfbGFzdFJlbmRlcmVkRnJhbWUgIT09IF90aWNrZXIuZnJhbWUpIHtcbiAgICBfbGF6eVR3ZWVucy5wdXNoKHR3ZWVuKTtcblxuICAgIHR3ZWVuLl9sYXp5ID0gW3RvdGFsVGltZSwgc3VwcHJlc3NFdmVudHNdO1xuICAgIHJldHVybiAxO1xuICB9XG59LFxuICAgIF9wYXJlbnRQbGF5aGVhZElzQmVmb3JlU3RhcnQgPSBmdW5jdGlvbiBfcGFyZW50UGxheWhlYWRJc0JlZm9yZVN0YXJ0KF9yZWYpIHtcbiAgdmFyIHBhcmVudCA9IF9yZWYucGFyZW50O1xuICByZXR1cm4gcGFyZW50ICYmIHBhcmVudC5fdHMgJiYgcGFyZW50Ll9pbml0dGVkICYmICFwYXJlbnQuX2xvY2sgJiYgKHBhcmVudC5yYXdUaW1lKCkgPCAwIHx8IF9wYXJlbnRQbGF5aGVhZElzQmVmb3JlU3RhcnQocGFyZW50KSk7XG59LFxuICAgIC8vIGNoZWNrIHBhcmVudCdzIF9sb2NrIGJlY2F1c2Ugd2hlbiBhIHRpbWVsaW5lIHJlcGVhdHMveW95b3MgYW5kIGRvZXMgaXRzIGFydGlmaWNpYWwgd3JhcHBpbmcsIHdlIHNob3VsZG4ndCBmb3JjZSB0aGUgcmF0aW8gYmFjayB0byAwXG5faXNGcm9tT3JGcm9tU3RhcnQgPSBmdW5jdGlvbiBfaXNGcm9tT3JGcm9tU3RhcnQoX3JlZjIpIHtcbiAgdmFyIGRhdGEgPSBfcmVmMi5kYXRhO1xuICByZXR1cm4gZGF0YSA9PT0gXCJpc0Zyb21TdGFydFwiIHx8IGRhdGEgPT09IFwiaXNTdGFydFwiO1xufSxcbiAgICBfcmVuZGVyWmVyb0R1cmF0aW9uVHdlZW4gPSBmdW5jdGlvbiBfcmVuZGVyWmVyb0R1cmF0aW9uVHdlZW4odHdlZW4sIHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG4gIHZhciBwcmV2UmF0aW8gPSB0d2Vlbi5yYXRpbyxcbiAgICAgIHJhdGlvID0gdG90YWxUaW1lIDwgMCB8fCAhdG90YWxUaW1lICYmICghdHdlZW4uX3N0YXJ0ICYmIF9wYXJlbnRQbGF5aGVhZElzQmVmb3JlU3RhcnQodHdlZW4pICYmICEoIXR3ZWVuLl9pbml0dGVkICYmIF9pc0Zyb21PckZyb21TdGFydCh0d2VlbikpIHx8ICh0d2Vlbi5fdHMgPCAwIHx8IHR3ZWVuLl9kcC5fdHMgPCAwKSAmJiAhX2lzRnJvbU9yRnJvbVN0YXJ0KHR3ZWVuKSkgPyAwIDogMSxcbiAgICAgIC8vIGlmIHRoZSB0d2VlbiBvciBpdHMgcGFyZW50IGlzIHJldmVyc2VkIGFuZCB0aGUgdG90YWxUaW1lIGlzIDAsIHdlIHNob3VsZCBnbyB0byBhIHJhdGlvIG9mIDAuIEVkZ2UgY2FzZTogaWYgYSBmcm9tKCkgb3IgZnJvbVRvKCkgc3RhZ2dlciB0d2VlbiBpcyBwbGFjZWQgbGF0ZXIgaW4gYSB0aW1lbGluZSwgdGhlIFwic3RhcnRBdFwiIHplcm8tZHVyYXRpb24gdHdlZW4gY291bGQgaW5pdGlhbGx5IHJlbmRlciBhdCBhIHRpbWUgd2hlbiB0aGUgcGFyZW50IHRpbWVsaW5lJ3MgcGxheWhlYWQgaXMgdGVjaG5pY2FsbHkgQkVGT1JFIHdoZXJlIHRoaXMgdHdlZW4gaXMsIHNvIG1ha2Ugc3VyZSB0aGF0IGFueSBcImZyb21cIiBhbmQgXCJmcm9tVG9cIiBzdGFydEF0IHR3ZWVucyBhcmUgcmVuZGVyZWQgdGhlIGZpcnN0IHRpbWUgYXQgYSByYXRpbyBvZiAxLlxuICByZXBlYXREZWxheSA9IHR3ZWVuLl9yRGVsYXksXG4gICAgICB0VGltZSA9IDAsXG4gICAgICBwdCxcbiAgICAgIGl0ZXJhdGlvbixcbiAgICAgIHByZXZJdGVyYXRpb247XG5cbiAgaWYgKHJlcGVhdERlbGF5ICYmIHR3ZWVuLl9yZXBlYXQpIHtcbiAgICAvLyBpbiBjYXNlIHRoZXJlJ3MgYSB6ZXJvLWR1cmF0aW9uIHR3ZWVuIHRoYXQgaGFzIGEgcmVwZWF0IHdpdGggYSByZXBlYXREZWxheVxuICAgIHRUaW1lID0gX2NsYW1wKDAsIHR3ZWVuLl90RHVyLCB0b3RhbFRpbWUpO1xuICAgIGl0ZXJhdGlvbiA9IF9hbmltYXRpb25DeWNsZSh0VGltZSwgcmVwZWF0RGVsYXkpO1xuICAgIHByZXZJdGVyYXRpb24gPSBfYW5pbWF0aW9uQ3ljbGUodHdlZW4uX3RUaW1lLCByZXBlYXREZWxheSk7XG4gICAgdHdlZW4uX3lveW8gJiYgaXRlcmF0aW9uICYgMSAmJiAocmF0aW8gPSAxIC0gcmF0aW8pO1xuXG4gICAgaWYgKGl0ZXJhdGlvbiAhPT0gcHJldkl0ZXJhdGlvbikge1xuICAgICAgcHJldlJhdGlvID0gMSAtIHJhdGlvO1xuICAgICAgdHdlZW4udmFycy5yZXBlYXRSZWZyZXNoICYmIHR3ZWVuLl9pbml0dGVkICYmIHR3ZWVuLmludmFsaWRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBpZiAocmF0aW8gIT09IHByZXZSYXRpbyB8fCBmb3JjZSB8fCB0d2Vlbi5felRpbWUgPT09IF90aW55TnVtIHx8ICF0b3RhbFRpbWUgJiYgdHdlZW4uX3pUaW1lKSB7XG4gICAgaWYgKCF0d2Vlbi5faW5pdHRlZCAmJiBfYXR0ZW1wdEluaXRUd2Vlbih0d2VlbiwgdG90YWxUaW1lLCBmb3JjZSwgc3VwcHJlc3NFdmVudHMpKSB7XG4gICAgICAvLyBpZiB3ZSByZW5kZXIgdGhlIHZlcnkgYmVnaW5uaW5nICh0aW1lID09IDApIG9mIGEgZnJvbVRvKCksIHdlIG11c3QgZm9yY2UgdGhlIHJlbmRlciAobm9ybWFsIHR3ZWVucyB3b3VsZG4ndCBuZWVkIHRvIHJlbmRlciBhdCBhIHRpbWUgb2YgMCB3aGVuIHRoZSBwcmV2VGltZSB3YXMgYWxzbyAwKS4gVGhpcyBpcyBhbHNvIG1hbmRhdG9yeSB0byBtYWtlIHN1cmUgb3ZlcndyaXRpbmcga2lja3MgaW4gaW1tZWRpYXRlbHkuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJldkl0ZXJhdGlvbiA9IHR3ZWVuLl96VGltZTtcbiAgICB0d2Vlbi5felRpbWUgPSB0b3RhbFRpbWUgfHwgKHN1cHByZXNzRXZlbnRzID8gX3RpbnlOdW0gOiAwKTsgLy8gd2hlbiB0aGUgcGxheWhlYWQgYXJyaXZlcyBhdCBFWEFDVExZIHRpbWUgMCAocmlnaHQgb24gdG9wKSBvZiBhIHplcm8tZHVyYXRpb24gdHdlZW4sIHdlIG5lZWQgdG8gZGlzY2VybiBpZiBldmVudHMgYXJlIHN1cHByZXNzZWQgc28gdGhhdCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBhZ2FpbiAobmV4dCB0aW1lKSwgaXQnbGwgdHJpZ2dlciB0aGUgY2FsbGJhY2suIElmIGV2ZW50cyBhcmUgTk9UIHN1cHByZXNzZWQsIG9idmlvdXNseSB0aGUgY2FsbGJhY2sgd291bGQgYmUgdHJpZ2dlcmVkIGluIHRoaXMgcmVuZGVyLiBCYXNpY2FsbHksIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZSBlaXRoZXIgd2hlbiB0aGUgcGxheWhlYWQgQVJSSVZFUyBvciBMRUFWRVMgdGhpcyBleGFjdCBzcG90LCBub3QgYm90aC4gSW1hZ2luZSBkb2luZyBhIHRpbWVsaW5lLnNlZWsoMCkgYW5kIHRoZXJlJ3MgYSBjYWxsYmFjayB0aGF0IHNpdHMgYXQgMC4gU2luY2UgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIG9uIHRoYXQgc2VlaygpIGJ5IGRlZmF1bHQsIG5vdGhpbmcgd2lsbCBmaXJlLCBidXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgb2ZmIG9mIHRoYXQgcG9zaXRpb24sIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZS4gVGhpcyBiZWhhdmlvciBpcyB3aGF0IHBlb3BsZSBpbnR1aXRpdmVseSBleHBlY3QuXG5cbiAgICBzdXBwcmVzc0V2ZW50cyB8fCAoc3VwcHJlc3NFdmVudHMgPSB0b3RhbFRpbWUgJiYgIXByZXZJdGVyYXRpb24pOyAvLyBpZiBpdCB3YXMgcmVuZGVyZWQgcHJldmlvdXNseSBhdCBleGFjdGx5IDAgKF96VGltZSkgYW5kIG5vdyB0aGUgcGxheWhlYWQgaXMgbW92aW5nIGF3YXksIERPTidUIGZpcmUgY2FsbGJhY2tzIG90aGVyd2lzZSB0aGV5J2xsIHNlZW0gbGlrZSBkdXBsaWNhdGVzLlxuXG4gICAgdHdlZW4ucmF0aW8gPSByYXRpbztcbiAgICB0d2Vlbi5fZnJvbSAmJiAocmF0aW8gPSAxIC0gcmF0aW8pO1xuICAgIHR3ZWVuLl90aW1lID0gMDtcbiAgICB0d2Vlbi5fdFRpbWUgPSB0VGltZTtcbiAgICBwdCA9IHR3ZWVuLl9wdDtcblxuICAgIHdoaWxlIChwdCkge1xuICAgICAgcHQucihyYXRpbywgcHQuZCk7XG4gICAgICBwdCA9IHB0Ll9uZXh0O1xuICAgIH1cblxuICAgIHR3ZWVuLl9zdGFydEF0ICYmIHRvdGFsVGltZSA8IDAgJiYgdHdlZW4uX3N0YXJ0QXQucmVuZGVyKHRvdGFsVGltZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgdHdlZW4uX29uVXBkYXRlICYmICFzdXBwcmVzc0V2ZW50cyAmJiBfY2FsbGJhY2sodHdlZW4sIFwib25VcGRhdGVcIik7XG4gICAgdFRpbWUgJiYgdHdlZW4uX3JlcGVhdCAmJiAhc3VwcHJlc3NFdmVudHMgJiYgdHdlZW4ucGFyZW50ICYmIF9jYWxsYmFjayh0d2VlbiwgXCJvblJlcGVhdFwiKTtcblxuICAgIGlmICgodG90YWxUaW1lID49IHR3ZWVuLl90RHVyIHx8IHRvdGFsVGltZSA8IDApICYmIHR3ZWVuLnJhdGlvID09PSByYXRpbykge1xuICAgICAgcmF0aW8gJiYgX3JlbW92ZUZyb21QYXJlbnQodHdlZW4sIDEpO1xuXG4gICAgICBpZiAoIXN1cHByZXNzRXZlbnRzKSB7XG4gICAgICAgIF9jYWxsYmFjayh0d2VlbiwgcmF0aW8gPyBcIm9uQ29tcGxldGVcIiA6IFwib25SZXZlcnNlQ29tcGxldGVcIiwgdHJ1ZSk7XG5cbiAgICAgICAgdHdlZW4uX3Byb20gJiYgdHdlZW4uX3Byb20oKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoIXR3ZWVuLl96VGltZSkge1xuICAgIHR3ZWVuLl96VGltZSA9IHRvdGFsVGltZTtcbiAgfVxufSxcbiAgICBfZmluZE5leHRQYXVzZVR3ZWVuID0gZnVuY3Rpb24gX2ZpbmROZXh0UGF1c2VUd2VlbihhbmltYXRpb24sIHByZXZUaW1lLCB0aW1lKSB7XG4gIHZhciBjaGlsZDtcblxuICBpZiAodGltZSA+IHByZXZUaW1lKSB7XG4gICAgY2hpbGQgPSBhbmltYXRpb24uX2ZpcnN0O1xuXG4gICAgd2hpbGUgKGNoaWxkICYmIGNoaWxkLl9zdGFydCA8PSB0aW1lKSB7XG4gICAgICBpZiAoIWNoaWxkLl9kdXIgJiYgY2hpbGQuZGF0YSA9PT0gXCJpc1BhdXNlXCIgJiYgY2hpbGQuX3N0YXJ0ID4gcHJldlRpbWUpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgfVxuXG4gICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjaGlsZCA9IGFuaW1hdGlvbi5fbGFzdDtcblxuICAgIHdoaWxlIChjaGlsZCAmJiBjaGlsZC5fc3RhcnQgPj0gdGltZSkge1xuICAgICAgaWYgKCFjaGlsZC5fZHVyICYmIGNoaWxkLmRhdGEgPT09IFwiaXNQYXVzZVwiICYmIGNoaWxkLl9zdGFydCA8IHByZXZUaW1lKSB7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBjaGlsZC5fcHJldjtcbiAgICB9XG4gIH1cbn0sXG4gICAgX3NldER1cmF0aW9uID0gZnVuY3Rpb24gX3NldER1cmF0aW9uKGFuaW1hdGlvbiwgZHVyYXRpb24sIHNraXBVbmNhY2hlLCBsZWF2ZVBsYXloZWFkKSB7XG4gIHZhciByZXBlYXQgPSBhbmltYXRpb24uX3JlcGVhdCxcbiAgICAgIGR1ciA9IF9yb3VuZFByZWNpc2UoZHVyYXRpb24pIHx8IDAsXG4gICAgICB0b3RhbFByb2dyZXNzID0gYW5pbWF0aW9uLl90VGltZSAvIGFuaW1hdGlvbi5fdER1cjtcbiAgdG90YWxQcm9ncmVzcyAmJiAhbGVhdmVQbGF5aGVhZCAmJiAoYW5pbWF0aW9uLl90aW1lICo9IGR1ciAvIGFuaW1hdGlvbi5fZHVyKTtcbiAgYW5pbWF0aW9uLl9kdXIgPSBkdXI7XG4gIGFuaW1hdGlvbi5fdER1ciA9ICFyZXBlYXQgPyBkdXIgOiByZXBlYXQgPCAwID8gMWUxMCA6IF9yb3VuZFByZWNpc2UoZHVyICogKHJlcGVhdCArIDEpICsgYW5pbWF0aW9uLl9yRGVsYXkgKiByZXBlYXQpO1xuICB0b3RhbFByb2dyZXNzICYmICFsZWF2ZVBsYXloZWFkID8gX2FsaWduUGxheWhlYWQoYW5pbWF0aW9uLCBhbmltYXRpb24uX3RUaW1lID0gYW5pbWF0aW9uLl90RHVyICogdG90YWxQcm9ncmVzcykgOiBhbmltYXRpb24ucGFyZW50ICYmIF9zZXRFbmQoYW5pbWF0aW9uKTtcbiAgc2tpcFVuY2FjaGUgfHwgX3VuY2FjaGUoYW5pbWF0aW9uLnBhcmVudCwgYW5pbWF0aW9uKTtcbiAgcmV0dXJuIGFuaW1hdGlvbjtcbn0sXG4gICAgX29uVXBkYXRlVG90YWxEdXJhdGlvbiA9IGZ1bmN0aW9uIF9vblVwZGF0ZVRvdGFsRHVyYXRpb24oYW5pbWF0aW9uKSB7XG4gIHJldHVybiBhbmltYXRpb24gaW5zdGFuY2VvZiBUaW1lbGluZSA/IF91bmNhY2hlKGFuaW1hdGlvbikgOiBfc2V0RHVyYXRpb24oYW5pbWF0aW9uLCBhbmltYXRpb24uX2R1cik7XG59LFxuICAgIF96ZXJvUG9zaXRpb24gPSB7XG4gIF9zdGFydDogMCxcbiAgZW5kVGltZTogX2VtcHR5RnVuYyxcbiAgdG90YWxEdXJhdGlvbjogX2VtcHR5RnVuY1xufSxcbiAgICBfcGFyc2VQb3NpdGlvbiA9IGZ1bmN0aW9uIF9wYXJzZVBvc2l0aW9uKGFuaW1hdGlvbiwgcG9zaXRpb24sIHBlcmNlbnRBbmltYXRpb24pIHtcbiAgdmFyIGxhYmVscyA9IGFuaW1hdGlvbi5sYWJlbHMsXG4gICAgICByZWNlbnQgPSBhbmltYXRpb24uX3JlY2VudCB8fCBfemVyb1Bvc2l0aW9uLFxuICAgICAgY2xpcHBlZER1cmF0aW9uID0gYW5pbWF0aW9uLmR1cmF0aW9uKCkgPj0gX2JpZ051bSA/IHJlY2VudC5lbmRUaW1lKGZhbHNlKSA6IGFuaW1hdGlvbi5fZHVyLFxuICAgICAgLy9pbiBjYXNlIHRoZXJlJ3MgYSBjaGlsZCB0aGF0IGluZmluaXRlbHkgcmVwZWF0cywgdXNlcnMgYWxtb3N0IG5ldmVyIGludGVuZCBmb3IgdGhlIGluc2VydGlvbiBwb2ludCBvZiBhIG5ldyBjaGlsZCB0byBiZSBiYXNlZCBvbiBhIFNVUEVSIGxvbmcgdmFsdWUgbGlrZSB0aGF0IHNvIHdlIGNsaXAgaXQgYW5kIGFzc3VtZSB0aGUgbW9zdCByZWNlbnRseS1hZGRlZCBjaGlsZCdzIGVuZFRpbWUgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZC5cbiAgaSxcbiAgICAgIG9mZnNldCxcbiAgICAgIGlzUGVyY2VudDtcblxuICBpZiAoX2lzU3RyaW5nKHBvc2l0aW9uKSAmJiAoaXNOYU4ocG9zaXRpb24pIHx8IHBvc2l0aW9uIGluIGxhYmVscykpIHtcbiAgICAvL2lmIHRoZSBzdHJpbmcgaXMgYSBudW1iZXIgbGlrZSBcIjFcIiwgY2hlY2sgdG8gc2VlIGlmIHRoZXJlJ3MgYSBsYWJlbCB3aXRoIHRoYXQgbmFtZSwgb3RoZXJ3aXNlIGludGVycHJldCBpdCBhcyBhIG51bWJlciAoYWJzb2x1dGUgdmFsdWUpLlxuICAgIG9mZnNldCA9IHBvc2l0aW9uLmNoYXJBdCgwKTtcbiAgICBpc1BlcmNlbnQgPSBwb3NpdGlvbi5zdWJzdHIoLTEpID09PSBcIiVcIjtcbiAgICBpID0gcG9zaXRpb24uaW5kZXhPZihcIj1cIik7XG5cbiAgICBpZiAob2Zmc2V0ID09PSBcIjxcIiB8fCBvZmZzZXQgPT09IFwiPlwiKSB7XG4gICAgICBpID49IDAgJiYgKHBvc2l0aW9uID0gcG9zaXRpb24ucmVwbGFjZSgvPS8sIFwiXCIpKTtcbiAgICAgIHJldHVybiAob2Zmc2V0ID09PSBcIjxcIiA/IHJlY2VudC5fc3RhcnQgOiByZWNlbnQuZW5kVGltZShyZWNlbnQuX3JlcGVhdCA+PSAwKSkgKyAocGFyc2VGbG9hdChwb3NpdGlvbi5zdWJzdHIoMSkpIHx8IDApICogKGlzUGVyY2VudCA/IChpIDwgMCA/IHJlY2VudCA6IHBlcmNlbnRBbmltYXRpb24pLnRvdGFsRHVyYXRpb24oKSAvIDEwMCA6IDEpO1xuICAgIH1cblxuICAgIGlmIChpIDwgMCkge1xuICAgICAgcG9zaXRpb24gaW4gbGFiZWxzIHx8IChsYWJlbHNbcG9zaXRpb25dID0gY2xpcHBlZER1cmF0aW9uKTtcbiAgICAgIHJldHVybiBsYWJlbHNbcG9zaXRpb25dO1xuICAgIH1cblxuICAgIG9mZnNldCA9IHBhcnNlRmxvYXQocG9zaXRpb24uY2hhckF0KGkgLSAxKSArIHBvc2l0aW9uLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGlzUGVyY2VudCAmJiBwZXJjZW50QW5pbWF0aW9uKSB7XG4gICAgICBvZmZzZXQgPSBvZmZzZXQgLyAxMDAgKiAoX2lzQXJyYXkocGVyY2VudEFuaW1hdGlvbikgPyBwZXJjZW50QW5pbWF0aW9uWzBdIDogcGVyY2VudEFuaW1hdGlvbikudG90YWxEdXJhdGlvbigpO1xuICAgIH1cblxuICAgIHJldHVybiBpID4gMSA/IF9wYXJzZVBvc2l0aW9uKGFuaW1hdGlvbiwgcG9zaXRpb24uc3Vic3RyKDAsIGkgLSAxKSwgcGVyY2VudEFuaW1hdGlvbikgKyBvZmZzZXQgOiBjbGlwcGVkRHVyYXRpb24gKyBvZmZzZXQ7XG4gIH1cblxuICByZXR1cm4gcG9zaXRpb24gPT0gbnVsbCA/IGNsaXBwZWREdXJhdGlvbiA6ICtwb3NpdGlvbjtcbn0sXG4gICAgX2NyZWF0ZVR3ZWVuVHlwZSA9IGZ1bmN0aW9uIF9jcmVhdGVUd2VlblR5cGUodHlwZSwgcGFyYW1zLCB0aW1lbGluZSkge1xuICB2YXIgaXNMZWdhY3kgPSBfaXNOdW1iZXIocGFyYW1zWzFdKSxcbiAgICAgIHZhcnNJbmRleCA9IChpc0xlZ2FjeSA/IDIgOiAxKSArICh0eXBlIDwgMiA/IDAgOiAxKSxcbiAgICAgIHZhcnMgPSBwYXJhbXNbdmFyc0luZGV4XSxcbiAgICAgIGlyVmFycyxcbiAgICAgIHBhcmVudDtcblxuICBpc0xlZ2FjeSAmJiAodmFycy5kdXJhdGlvbiA9IHBhcmFtc1sxXSk7XG4gIHZhcnMucGFyZW50ID0gdGltZWxpbmU7XG5cbiAgaWYgKHR5cGUpIHtcbiAgICBpclZhcnMgPSB2YXJzO1xuICAgIHBhcmVudCA9IHRpbWVsaW5lO1xuXG4gICAgd2hpbGUgKHBhcmVudCAmJiAhKFwiaW1tZWRpYXRlUmVuZGVyXCIgaW4gaXJWYXJzKSkge1xuICAgICAgLy8gaW5oZXJpdGFuY2UgaGFzbid0IGhhcHBlbmVkIHlldCwgYnV0IHNvbWVvbmUgbWF5IGhhdmUgc2V0IGEgZGVmYXVsdCBpbiBhbiBhbmNlc3RvciB0aW1lbGluZS4gV2UgY291bGQgZG8gdmFycy5pbW1lZGlhdGVSZW5kZXIgPSBfaXNOb3RGYWxzZShfaW5oZXJpdERlZmF1bHRzKHZhcnMpLmltbWVkaWF0ZVJlbmRlcikgYnV0IHRoYXQnZCBleGFjdCBhIHNsaWdodCBwZXJmb3JtYW5jZSBwZW5hbHR5IGJlY2F1c2UgX2luaGVyaXREZWZhdWx0cygpIGFsc28gcnVucyBpbiB0aGUgVHdlZW4gY29uc3RydWN0b3IuIFdlJ3JlIHBheWluZyBhIHNtYWxsIGtiIHByaWNlIGhlcmUgdG8gZ2FpbiBzcGVlZC5cbiAgICAgIGlyVmFycyA9IHBhcmVudC52YXJzLmRlZmF1bHRzIHx8IHt9O1xuICAgICAgcGFyZW50ID0gX2lzTm90RmFsc2UocGFyZW50LnZhcnMuaW5oZXJpdCkgJiYgcGFyZW50LnBhcmVudDtcbiAgICB9XG5cbiAgICB2YXJzLmltbWVkaWF0ZVJlbmRlciA9IF9pc05vdEZhbHNlKGlyVmFycy5pbW1lZGlhdGVSZW5kZXIpO1xuICAgIHR5cGUgPCAyID8gdmFycy5ydW5CYWNrd2FyZHMgPSAxIDogdmFycy5zdGFydEF0ID0gcGFyYW1zW3ZhcnNJbmRleCAtIDFdOyAvLyBcImZyb21cIiB2YXJzXG4gIH1cblxuICByZXR1cm4gbmV3IFR3ZWVuKHBhcmFtc1swXSwgdmFycywgcGFyYW1zW3ZhcnNJbmRleCArIDFdKTtcbn0sXG4gICAgX2NvbmRpdGlvbmFsUmV0dXJuID0gZnVuY3Rpb24gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jKSB7XG4gIHJldHVybiB2YWx1ZSB8fCB2YWx1ZSA9PT0gMCA/IGZ1bmModmFsdWUpIDogZnVuYztcbn0sXG4gICAgX2NsYW1wID0gZnVuY3Rpb24gX2NsYW1wKG1pbiwgbWF4LCB2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPCBtaW4gPyBtaW4gOiB2YWx1ZSA+IG1heCA/IG1heCA6IHZhbHVlO1xufSxcbiAgICBnZXRVbml0ID0gZnVuY3Rpb24gZ2V0VW5pdCh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICB2YXIgdiA9IF91bml0RXhwLmV4ZWModmFsdWUpO1xuXG4gIHJldHVybiB2ID8gdmFsdWUuc3Vic3RyKHYuaW5kZXggKyB2WzBdLmxlbmd0aCkgOiBcIlwiO1xufSxcbiAgICAvLyBub3RlOiBwcm90ZWN0IGFnYWluc3QgcGFkZGVkIG51bWJlcnMgYXMgc3RyaW5ncywgbGlrZSBcIjEwMC4xMDBcIi4gVGhhdCBzaG91bGRuJ3QgcmV0dXJuIFwiMDBcIiBhcyB0aGUgdW5pdC4gSWYgaXQncyBudW1lcmljLCByZXR1cm4gbm8gdW5pdC5cbmNsYW1wID0gZnVuY3Rpb24gY2xhbXAobWluLCBtYXgsIHZhbHVlKSB7XG4gIHJldHVybiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIF9jbGFtcChtaW4sIG1heCwgdik7XG4gIH0pO1xufSxcbiAgICBfc2xpY2UgPSBbXS5zbGljZSxcbiAgICBfaXNBcnJheUxpa2UgPSBmdW5jdGlvbiBfaXNBcnJheUxpa2UodmFsdWUsIG5vbkVtcHR5KSB7XG4gIHJldHVybiB2YWx1ZSAmJiBfaXNPYmplY3QodmFsdWUpICYmIFwibGVuZ3RoXCIgaW4gdmFsdWUgJiYgKCFub25FbXB0eSAmJiAhdmFsdWUubGVuZ3RoIHx8IHZhbHVlLmxlbmd0aCAtIDEgaW4gdmFsdWUgJiYgX2lzT2JqZWN0KHZhbHVlWzBdKSkgJiYgIXZhbHVlLm5vZGVUeXBlICYmIHZhbHVlICE9PSBfd2luO1xufSxcbiAgICBfZmxhdHRlbiA9IGZ1bmN0aW9uIF9mbGF0dGVuKGFyLCBsZWF2ZVN0cmluZ3MsIGFjY3VtdWxhdG9yKSB7XG4gIGlmIChhY2N1bXVsYXRvciA9PT0gdm9pZCAwKSB7XG4gICAgYWNjdW11bGF0b3IgPSBbXTtcbiAgfVxuXG4gIHJldHVybiBhci5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBfYWNjdW11bGF0b3I7XG5cbiAgICByZXR1cm4gX2lzU3RyaW5nKHZhbHVlKSAmJiAhbGVhdmVTdHJpbmdzIHx8IF9pc0FycmF5TGlrZSh2YWx1ZSwgMSkgPyAoX2FjY3VtdWxhdG9yID0gYWNjdW11bGF0b3IpLnB1c2guYXBwbHkoX2FjY3VtdWxhdG9yLCB0b0FycmF5KHZhbHVlKSkgOiBhY2N1bXVsYXRvci5wdXNoKHZhbHVlKTtcbiAgfSkgfHwgYWNjdW11bGF0b3I7XG59LFxuICAgIC8vdGFrZXMgYW55IHZhbHVlIGFuZCByZXR1cm5zIGFuIGFycmF5LiBJZiBpdCdzIGEgc3RyaW5nIChhbmQgbGVhdmVTdHJpbmdzIGlzbid0IHRydWUpLCBpdCdsbCB1c2UgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgpIGFuZCBjb252ZXJ0IHRoYXQgdG8gYW4gYXJyYXkuIEl0J2xsIGFsc28gYWNjZXB0IGl0ZXJhYmxlcyBsaWtlIGpRdWVyeSBvYmplY3RzLlxudG9BcnJheSA9IGZ1bmN0aW9uIHRvQXJyYXkodmFsdWUsIHNjb3BlLCBsZWF2ZVN0cmluZ3MpIHtcbiAgcmV0dXJuIF9pc1N0cmluZyh2YWx1ZSkgJiYgIWxlYXZlU3RyaW5ncyAmJiAoX2NvcmVJbml0dGVkIHx8ICFfd2FrZSgpKSA/IF9zbGljZS5jYWxsKChzY29wZSB8fCBfZG9jKS5xdWVyeVNlbGVjdG9yQWxsKHZhbHVlKSwgMCkgOiBfaXNBcnJheSh2YWx1ZSkgPyBfZmxhdHRlbih2YWx1ZSwgbGVhdmVTdHJpbmdzKSA6IF9pc0FycmF5TGlrZSh2YWx1ZSkgPyBfc2xpY2UuY2FsbCh2YWx1ZSwgMCkgOiB2YWx1ZSA/IFt2YWx1ZV0gOiBbXTtcbn0sXG4gICAgc2VsZWN0b3IgPSBmdW5jdGlvbiBzZWxlY3Rvcih2YWx1ZSkge1xuICB2YWx1ZSA9IHRvQXJyYXkodmFsdWUpWzBdIHx8IF93YXJuKFwiSW52YWxpZCBzY29wZVwiKSB8fCB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIGVsID0gdmFsdWUuY3VycmVudCB8fCB2YWx1ZS5uYXRpdmVFbGVtZW50IHx8IHZhbHVlO1xuICAgIHJldHVybiB0b0FycmF5KHYsIGVsLnF1ZXJ5U2VsZWN0b3JBbGwgPyBlbCA6IGVsID09PSB2YWx1ZSA/IF93YXJuKFwiSW52YWxpZCBzY29wZVwiKSB8fCBfZG9jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgOiB2YWx1ZSk7XG4gIH07XG59LFxuICAgIHNodWZmbGUgPSBmdW5jdGlvbiBzaHVmZmxlKGEpIHtcbiAgcmV0dXJuIGEuc29ydChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIC41IC0gTWF0aC5yYW5kb20oKTtcbiAgfSk7XG59LFxuICAgIC8vIGFsdGVybmF0aXZlIHRoYXQncyBhIGJpdCBmYXN0ZXIgYW5kIG1vcmUgcmVsaWFibHkgZGl2ZXJzZSBidXQgYmlnZ2VyOiAgIGZvciAobGV0IGosIHYsIGkgPSBhLmxlbmd0aDsgaTsgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGkpLCB2ID0gYVstLWldLCBhW2ldID0gYVtqXSwgYVtqXSA9IHYpOyByZXR1cm4gYTtcbi8vZm9yIGRpc3RyaWJ1dGluZyB2YWx1ZXMgYWNyb3NzIGFuIGFycmF5LiBDYW4gYWNjZXB0IGEgbnVtYmVyLCBhIGZ1bmN0aW9uIG9yIChtb3N0IGNvbW1vbmx5KSBhIGZ1bmN0aW9uIHdoaWNoIGNhbiBjb250YWluIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczoge2Jhc2UsIGFtb3VudCwgZnJvbSwgZWFzZSwgZ3JpZCwgYXhpcywgbGVuZ3RoLCBlYWNofS4gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgZXhwZWN0cyB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnM6IGluZGV4LCB0YXJnZXQsIGFycmF5LiBSZWNvZ25pemVzIHRoZSBmb2xsb3dpbmdcbmRpc3RyaWJ1dGUgPSBmdW5jdGlvbiBkaXN0cmlidXRlKHYpIHtcbiAgaWYgKF9pc0Z1bmN0aW9uKHYpKSB7XG4gICAgcmV0dXJuIHY7XG4gIH1cblxuICB2YXIgdmFycyA9IF9pc09iamVjdCh2KSA/IHYgOiB7XG4gICAgZWFjaDogdlxuICB9LFxuICAgICAgLy9uOjEgaXMganVzdCB0byBpbmRpY2F0ZSB2IHdhcyBhIG51bWJlcjsgd2UgbGV2ZXJhZ2UgdGhhdCBsYXRlciB0byBzZXQgdiBhY2NvcmRpbmcgdG8gdGhlIGxlbmd0aCB3ZSBnZXQuIElmIGEgbnVtYmVyIGlzIHBhc3NlZCBpbiwgd2UgdHJlYXQgaXQgbGlrZSB0aGUgb2xkIHN0YWdnZXIgdmFsdWUgd2hlcmUgMC4xLCBmb3IgZXhhbXBsZSwgd291bGQgbWVhbiB0aGF0IHRoaW5ncyB3b3VsZCBiZSBkaXN0cmlidXRlZCB3aXRoIDAuMSBiZXR3ZWVuIGVhY2ggZWxlbWVudCBpbiB0aGUgYXJyYXkgcmF0aGVyIHRoYW4gYSB0b3RhbCBcImFtb3VudFwiIHRoYXQncyBjaHVua2VkIG91dCBhbW9uZyB0aGVtIGFsbC5cbiAgZWFzZSA9IF9wYXJzZUVhc2UodmFycy5lYXNlKSxcbiAgICAgIGZyb20gPSB2YXJzLmZyb20gfHwgMCxcbiAgICAgIGJhc2UgPSBwYXJzZUZsb2F0KHZhcnMuYmFzZSkgfHwgMCxcbiAgICAgIGNhY2hlID0ge30sXG4gICAgICBpc0RlY2ltYWwgPSBmcm9tID4gMCAmJiBmcm9tIDwgMSxcbiAgICAgIHJhdGlvcyA9IGlzTmFOKGZyb20pIHx8IGlzRGVjaW1hbCxcbiAgICAgIGF4aXMgPSB2YXJzLmF4aXMsXG4gICAgICByYXRpb1ggPSBmcm9tLFxuICAgICAgcmF0aW9ZID0gZnJvbTtcblxuICBpZiAoX2lzU3RyaW5nKGZyb20pKSB7XG4gICAgcmF0aW9YID0gcmF0aW9ZID0ge1xuICAgICAgY2VudGVyOiAuNSxcbiAgICAgIGVkZ2VzOiAuNSxcbiAgICAgIGVuZDogMVxuICAgIH1bZnJvbV0gfHwgMDtcbiAgfSBlbHNlIGlmICghaXNEZWNpbWFsICYmIHJhdGlvcykge1xuICAgIHJhdGlvWCA9IGZyb21bMF07XG4gICAgcmF0aW9ZID0gZnJvbVsxXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaSwgdGFyZ2V0LCBhKSB7XG4gICAgdmFyIGwgPSAoYSB8fCB2YXJzKS5sZW5ndGgsXG4gICAgICAgIGRpc3RhbmNlcyA9IGNhY2hlW2xdLFxuICAgICAgICBvcmlnaW5YLFxuICAgICAgICBvcmlnaW5ZLFxuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgICBkLFxuICAgICAgICBqLFxuICAgICAgICBtYXgsXG4gICAgICAgIG1pbixcbiAgICAgICAgd3JhcEF0O1xuXG4gICAgaWYgKCFkaXN0YW5jZXMpIHtcbiAgICAgIHdyYXBBdCA9IHZhcnMuZ3JpZCA9PT0gXCJhdXRvXCIgPyAwIDogKHZhcnMuZ3JpZCB8fCBbMSwgX2JpZ051bV0pWzFdO1xuXG4gICAgICBpZiAoIXdyYXBBdCkge1xuICAgICAgICBtYXggPSAtX2JpZ051bTtcblxuICAgICAgICB3aGlsZSAobWF4IDwgKG1heCA9IGFbd3JhcEF0KytdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpICYmIHdyYXBBdCA8IGwpIHt9XG5cbiAgICAgICAgd3JhcEF0LS07XG4gICAgICB9XG5cbiAgICAgIGRpc3RhbmNlcyA9IGNhY2hlW2xdID0gW107XG4gICAgICBvcmlnaW5YID0gcmF0aW9zID8gTWF0aC5taW4od3JhcEF0LCBsKSAqIHJhdGlvWCAtIC41IDogZnJvbSAlIHdyYXBBdDtcbiAgICAgIG9yaWdpblkgPSByYXRpb3MgPyBsICogcmF0aW9ZIC8gd3JhcEF0IC0gLjUgOiBmcm9tIC8gd3JhcEF0IHwgMDtcbiAgICAgIG1heCA9IDA7XG4gICAgICBtaW4gPSBfYmlnTnVtO1xuXG4gICAgICBmb3IgKGogPSAwOyBqIDwgbDsgaisrKSB7XG4gICAgICAgIHggPSBqICUgd3JhcEF0IC0gb3JpZ2luWDtcbiAgICAgICAgeSA9IG9yaWdpblkgLSAoaiAvIHdyYXBBdCB8IDApO1xuICAgICAgICBkaXN0YW5jZXNbal0gPSBkID0gIWF4aXMgPyBfc3FydCh4ICogeCArIHkgKiB5KSA6IE1hdGguYWJzKGF4aXMgPT09IFwieVwiID8geSA6IHgpO1xuICAgICAgICBkID4gbWF4ICYmIChtYXggPSBkKTtcbiAgICAgICAgZCA8IG1pbiAmJiAobWluID0gZCk7XG4gICAgICB9XG5cbiAgICAgIGZyb20gPT09IFwicmFuZG9tXCIgJiYgc2h1ZmZsZShkaXN0YW5jZXMpO1xuICAgICAgZGlzdGFuY2VzLm1heCA9IG1heCAtIG1pbjtcbiAgICAgIGRpc3RhbmNlcy5taW4gPSBtaW47XG4gICAgICBkaXN0YW5jZXMudiA9IGwgPSAocGFyc2VGbG9hdCh2YXJzLmFtb3VudCkgfHwgcGFyc2VGbG9hdCh2YXJzLmVhY2gpICogKHdyYXBBdCA+IGwgPyBsIC0gMSA6ICFheGlzID8gTWF0aC5tYXgod3JhcEF0LCBsIC8gd3JhcEF0KSA6IGF4aXMgPT09IFwieVwiID8gbCAvIHdyYXBBdCA6IHdyYXBBdCkgfHwgMCkgKiAoZnJvbSA9PT0gXCJlZGdlc1wiID8gLTEgOiAxKTtcbiAgICAgIGRpc3RhbmNlcy5iID0gbCA8IDAgPyBiYXNlIC0gbCA6IGJhc2U7XG4gICAgICBkaXN0YW5jZXMudSA9IGdldFVuaXQodmFycy5hbW91bnQgfHwgdmFycy5lYWNoKSB8fCAwOyAvL3VuaXRcblxuICAgICAgZWFzZSA9IGVhc2UgJiYgbCA8IDAgPyBfaW52ZXJ0RWFzZShlYXNlKSA6IGVhc2U7XG4gICAgfVxuXG4gICAgbCA9IChkaXN0YW5jZXNbaV0gLSBkaXN0YW5jZXMubWluKSAvIGRpc3RhbmNlcy5tYXggfHwgMDtcbiAgICByZXR1cm4gX3JvdW5kUHJlY2lzZShkaXN0YW5jZXMuYiArIChlYXNlID8gZWFzZShsKSA6IGwpICogZGlzdGFuY2VzLnYpICsgZGlzdGFuY2VzLnU7IC8vcm91bmQgaW4gb3JkZXIgdG8gd29yayBhcm91bmQgZmxvYXRpbmcgcG9pbnQgZXJyb3JzXG4gIH07XG59LFxuICAgIF9yb3VuZE1vZGlmaWVyID0gZnVuY3Rpb24gX3JvdW5kTW9kaWZpZXIodikge1xuICAvL3Bhc3MgaW4gMC4xIGdldCBhIGZ1bmN0aW9uIHRoYXQnbGwgcm91bmQgdG8gdGhlIG5lYXJlc3QgdGVudGgsIG9yIDUgdG8gcm91bmQgdG8gdGhlIGNsb3Nlc3QgNSwgb3IgMC4wMDEgdG8gdGhlIGNsb3Nlc3QgMTAwMHRoLCBldGMuXG4gIHZhciBwID0gTWF0aC5wb3coMTAsICgodiArIFwiXCIpLnNwbGl0KFwiLlwiKVsxXSB8fCBcIlwiKS5sZW5ndGgpOyAvL3RvIGF2b2lkIGZsb2F0aW5nIHBvaW50IG1hdGggZXJyb3JzIChsaWtlIDI0ICogMC4xID09IDIuNDAwMDAwMDAwMDAwMDAwNCksIHdlIGNob3Agb2ZmIGF0IGEgc3BlY2lmaWMgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIChtdWNoIGZhc3RlciB0aGFuIHRvRml4ZWQoKSlcblxuICByZXR1cm4gZnVuY3Rpb24gKHJhdykge1xuICAgIHZhciBuID0gTWF0aC5yb3VuZChwYXJzZUZsb2F0KHJhdykgLyB2KSAqIHYgKiBwO1xuICAgIHJldHVybiAobiAtIG4gJSAxKSAvIHAgKyAoX2lzTnVtYmVyKHJhdykgPyAwIDogZ2V0VW5pdChyYXcpKTsgLy8gbiAtIG4gJSAxIHJlcGxhY2VzIE1hdGguZmxvb3IoKSBpbiBvcmRlciB0byBoYW5kbGUgbmVnYXRpdmUgdmFsdWVzIHByb3Blcmx5LiBGb3IgZXhhbXBsZSwgTWF0aC5mbG9vcigtMTUwLjAwMDAwMDAwMDAwMDAzKSBpcyAxNTEhXG4gIH07XG59LFxuICAgIHNuYXAgPSBmdW5jdGlvbiBzbmFwKHNuYXBUbywgdmFsdWUpIHtcbiAgdmFyIGlzQXJyYXkgPSBfaXNBcnJheShzbmFwVG8pLFxuICAgICAgcmFkaXVzLFxuICAgICAgaXMyRDtcblxuICBpZiAoIWlzQXJyYXkgJiYgX2lzT2JqZWN0KHNuYXBUbykpIHtcbiAgICByYWRpdXMgPSBpc0FycmF5ID0gc25hcFRvLnJhZGl1cyB8fCBfYmlnTnVtO1xuXG4gICAgaWYgKHNuYXBUby52YWx1ZXMpIHtcbiAgICAgIHNuYXBUbyA9IHRvQXJyYXkoc25hcFRvLnZhbHVlcyk7XG5cbiAgICAgIGlmIChpczJEID0gIV9pc051bWJlcihzbmFwVG9bMF0pKSB7XG4gICAgICAgIHJhZGl1cyAqPSByYWRpdXM7IC8vcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uIHNvIHdlIGRvbid0IGhhdmUgdG8gTWF0aC5zcXJ0KCkgaW4gdGhlIGxvb3AuXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNuYXBUbyA9IF9yb3VuZE1vZGlmaWVyKHNuYXBUby5pbmNyZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsICFpc0FycmF5ID8gX3JvdW5kTW9kaWZpZXIoc25hcFRvKSA6IF9pc0Z1bmN0aW9uKHNuYXBUbykgPyBmdW5jdGlvbiAocmF3KSB7XG4gICAgaXMyRCA9IHNuYXBUbyhyYXcpO1xuICAgIHJldHVybiBNYXRoLmFicyhpczJEIC0gcmF3KSA8PSByYWRpdXMgPyBpczJEIDogcmF3O1xuICB9IDogZnVuY3Rpb24gKHJhdykge1xuICAgIHZhciB4ID0gcGFyc2VGbG9hdChpczJEID8gcmF3LnggOiByYXcpLFxuICAgICAgICB5ID0gcGFyc2VGbG9hdChpczJEID8gcmF3LnkgOiAwKSxcbiAgICAgICAgbWluID0gX2JpZ051bSxcbiAgICAgICAgY2xvc2VzdCA9IDAsXG4gICAgICAgIGkgPSBzbmFwVG8ubGVuZ3RoLFxuICAgICAgICBkeCxcbiAgICAgICAgZHk7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBpZiAoaXMyRCkge1xuICAgICAgICBkeCA9IHNuYXBUb1tpXS54IC0geDtcbiAgICAgICAgZHkgPSBzbmFwVG9baV0ueSAtIHk7XG4gICAgICAgIGR4ID0gZHggKiBkeCArIGR5ICogZHk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkeCA9IE1hdGguYWJzKHNuYXBUb1tpXSAtIHgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZHggPCBtaW4pIHtcbiAgICAgICAgbWluID0gZHg7XG4gICAgICAgIGNsb3Nlc3QgPSBpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNsb3Nlc3QgPSAhcmFkaXVzIHx8IG1pbiA8PSByYWRpdXMgPyBzbmFwVG9bY2xvc2VzdF0gOiByYXc7XG4gICAgcmV0dXJuIGlzMkQgfHwgY2xvc2VzdCA9PT0gcmF3IHx8IF9pc051bWJlcihyYXcpID8gY2xvc2VzdCA6IGNsb3Nlc3QgKyBnZXRVbml0KHJhdyk7XG4gIH0pO1xufSxcbiAgICByYW5kb20gPSBmdW5jdGlvbiByYW5kb20obWluLCBtYXgsIHJvdW5kaW5nSW5jcmVtZW50LCByZXR1cm5GdW5jdGlvbikge1xuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKF9pc0FycmF5KG1pbikgPyAhbWF4IDogcm91bmRpbmdJbmNyZW1lbnQgPT09IHRydWUgPyAhIShyb3VuZGluZ0luY3JlbWVudCA9IDApIDogIXJldHVybkZ1bmN0aW9uLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc0FycmF5KG1pbikgPyBtaW5bfn4oTWF0aC5yYW5kb20oKSAqIG1pbi5sZW5ndGgpXSA6IChyb3VuZGluZ0luY3JlbWVudCA9IHJvdW5kaW5nSW5jcmVtZW50IHx8IDFlLTUpICYmIChyZXR1cm5GdW5jdGlvbiA9IHJvdW5kaW5nSW5jcmVtZW50IDwgMSA/IE1hdGgucG93KDEwLCAocm91bmRpbmdJbmNyZW1lbnQgKyBcIlwiKS5sZW5ndGggLSAyKSA6IDEpICYmIE1hdGguZmxvb3IoTWF0aC5yb3VuZCgobWluIC0gcm91bmRpbmdJbmNyZW1lbnQgLyAyICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyByb3VuZGluZ0luY3JlbWVudCAqIC45OSkpIC8gcm91bmRpbmdJbmNyZW1lbnQpICogcm91bmRpbmdJbmNyZW1lbnQgKiByZXR1cm5GdW5jdGlvbikgLyByZXR1cm5GdW5jdGlvbjtcbiAgfSk7XG59LFxuICAgIHBpcGUgPSBmdW5jdGlvbiBwaXBlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3Rpb25zID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZ1bmN0aW9uc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25zLnJlZHVjZShmdW5jdGlvbiAodiwgZikge1xuICAgICAgcmV0dXJuIGYodik7XG4gICAgfSwgdmFsdWUpO1xuICB9O1xufSxcbiAgICB1bml0aXplID0gZnVuY3Rpb24gdW5pdGl6ZShmdW5jLCB1bml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyhwYXJzZUZsb2F0KHZhbHVlKSkgKyAodW5pdCB8fCBnZXRVbml0KHZhbHVlKSk7XG4gIH07XG59LFxuICAgIG5vcm1hbGl6ZSA9IGZ1bmN0aW9uIG5vcm1hbGl6ZShtaW4sIG1heCwgdmFsdWUpIHtcbiAgcmV0dXJuIG1hcFJhbmdlKG1pbiwgbWF4LCAwLCAxLCB2YWx1ZSk7XG59LFxuICAgIF93cmFwQXJyYXkgPSBmdW5jdGlvbiBfd3JhcEFycmF5KGEsIHdyYXBwZXIsIHZhbHVlKSB7XG4gIHJldHVybiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHJldHVybiBhW35+d3JhcHBlcihpbmRleCldO1xuICB9KTtcbn0sXG4gICAgd3JhcCA9IGZ1bmN0aW9uIHdyYXAobWluLCBtYXgsIHZhbHVlKSB7XG4gIC8vIE5PVEU6IHdyYXAoKSBDQU5OT1QgYmUgYW4gYXJyb3cgZnVuY3Rpb24hIEEgdmVyeSBvZGQgY29tcGlsaW5nIGJ1ZyBjYXVzZXMgcHJvYmxlbXMgKHVucmVsYXRlZCB0byBHU0FQKS5cbiAgdmFyIHJhbmdlID0gbWF4IC0gbWluO1xuICByZXR1cm4gX2lzQXJyYXkobWluKSA/IF93cmFwQXJyYXkobWluLCB3cmFwKDAsIG1pbi5sZW5ndGgpLCBtYXgpIDogX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gKHJhbmdlICsgKHZhbHVlIC0gbWluKSAlIHJhbmdlKSAlIHJhbmdlICsgbWluO1xuICB9KTtcbn0sXG4gICAgd3JhcFlveW8gPSBmdW5jdGlvbiB3cmFwWW95byhtaW4sIG1heCwgdmFsdWUpIHtcbiAgdmFyIHJhbmdlID0gbWF4IC0gbWluLFxuICAgICAgdG90YWwgPSByYW5nZSAqIDI7XG4gIHJldHVybiBfaXNBcnJheShtaW4pID8gX3dyYXBBcnJheShtaW4sIHdyYXBZb3lvKDAsIG1pbi5sZW5ndGggLSAxKSwgbWF4KSA6IF9jb25kaXRpb25hbFJldHVybih2YWx1ZSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFsdWUgPSAodG90YWwgKyAodmFsdWUgLSBtaW4pICUgdG90YWwpICUgdG90YWwgfHwgMDtcbiAgICByZXR1cm4gbWluICsgKHZhbHVlID4gcmFuZ2UgPyB0b3RhbCAtIHZhbHVlIDogdmFsdWUpO1xuICB9KTtcbn0sXG4gICAgX3JlcGxhY2VSYW5kb20gPSBmdW5jdGlvbiBfcmVwbGFjZVJhbmRvbSh2YWx1ZSkge1xuICAvL3JlcGxhY2VzIGFsbCBvY2N1cnJlbmNlcyBvZiByYW5kb20oLi4uKSBpbiBhIHN0cmluZyB3aXRoIHRoZSBjYWxjdWxhdGVkIHJhbmRvbSB2YWx1ZS4gY2FuIGJlIGEgcmFuZ2UgbGlrZSByYW5kb20oLTEwMCwgMTAwLCA1KSBvciBhbiBhcnJheSBsaWtlIHJhbmRvbShbMCwgMTAwLCA1MDBdKVxuICB2YXIgcHJldiA9IDAsXG4gICAgICBzID0gXCJcIixcbiAgICAgIGksXG4gICAgICBudW1zLFxuICAgICAgZW5kLFxuICAgICAgaXNBcnJheTtcblxuICB3aGlsZSAofihpID0gdmFsdWUuaW5kZXhPZihcInJhbmRvbShcIiwgcHJldikpKSB7XG4gICAgZW5kID0gdmFsdWUuaW5kZXhPZihcIilcIiwgaSk7XG4gICAgaXNBcnJheSA9IHZhbHVlLmNoYXJBdChpICsgNykgPT09IFwiW1wiO1xuICAgIG51bXMgPSB2YWx1ZS5zdWJzdHIoaSArIDcsIGVuZCAtIGkgLSA3KS5tYXRjaChpc0FycmF5ID8gX2RlbGltaXRlZFZhbHVlRXhwIDogX3N0cmljdE51bUV4cCk7XG4gICAgcyArPSB2YWx1ZS5zdWJzdHIocHJldiwgaSAtIHByZXYpICsgcmFuZG9tKGlzQXJyYXkgPyBudW1zIDogK251bXNbMF0sIGlzQXJyYXkgPyAwIDogK251bXNbMV0sICtudW1zWzJdIHx8IDFlLTUpO1xuICAgIHByZXYgPSBlbmQgKyAxO1xuICB9XG5cbiAgcmV0dXJuIHMgKyB2YWx1ZS5zdWJzdHIocHJldiwgdmFsdWUubGVuZ3RoIC0gcHJldik7XG59LFxuICAgIG1hcFJhbmdlID0gZnVuY3Rpb24gbWFwUmFuZ2UoaW5NaW4sIGluTWF4LCBvdXRNaW4sIG91dE1heCwgdmFsdWUpIHtcbiAgdmFyIGluUmFuZ2UgPSBpbk1heCAtIGluTWluLFxuICAgICAgb3V0UmFuZ2UgPSBvdXRNYXggLSBvdXRNaW47XG4gIHJldHVybiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBvdXRNaW4gKyAoKHZhbHVlIC0gaW5NaW4pIC8gaW5SYW5nZSAqIG91dFJhbmdlIHx8IDApO1xuICB9KTtcbn0sXG4gICAgaW50ZXJwb2xhdGUgPSBmdW5jdGlvbiBpbnRlcnBvbGF0ZShzdGFydCwgZW5kLCBwcm9ncmVzcywgbXV0YXRlKSB7XG4gIHZhciBmdW5jID0gaXNOYU4oc3RhcnQgKyBlbmQpID8gMCA6IGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuICgxIC0gcCkgKiBzdGFydCArIHAgKiBlbmQ7XG4gIH07XG5cbiAgaWYgKCFmdW5jKSB7XG4gICAgdmFyIGlzU3RyaW5nID0gX2lzU3RyaW5nKHN0YXJ0KSxcbiAgICAgICAgbWFzdGVyID0ge30sXG4gICAgICAgIHAsXG4gICAgICAgIGksXG4gICAgICAgIGludGVycG9sYXRvcnMsXG4gICAgICAgIGwsXG4gICAgICAgIGlsO1xuXG4gICAgcHJvZ3Jlc3MgPT09IHRydWUgJiYgKG11dGF0ZSA9IDEpICYmIChwcm9ncmVzcyA9IG51bGwpO1xuXG4gICAgaWYgKGlzU3RyaW5nKSB7XG4gICAgICBzdGFydCA9IHtcbiAgICAgICAgcDogc3RhcnRcbiAgICAgIH07XG4gICAgICBlbmQgPSB7XG4gICAgICAgIHA6IGVuZFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKF9pc0FycmF5KHN0YXJ0KSAmJiAhX2lzQXJyYXkoZW5kKSkge1xuICAgICAgaW50ZXJwb2xhdG9ycyA9IFtdO1xuICAgICAgbCA9IHN0YXJ0Lmxlbmd0aDtcbiAgICAgIGlsID0gbCAtIDI7XG5cbiAgICAgIGZvciAoaSA9IDE7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaW50ZXJwb2xhdG9ycy5wdXNoKGludGVycG9sYXRlKHN0YXJ0W2kgLSAxXSwgc3RhcnRbaV0pKTsgLy9idWlsZCB0aGUgaW50ZXJwb2xhdG9ycyB1cCBmcm9udCBhcyBhIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbiBzbyB0aGF0IHdoZW4gdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCBtYW55IHRpbWVzLCBpdCBjYW4ganVzdCByZXVzZSB0aGVtLlxuICAgICAgfVxuXG4gICAgICBsLS07XG5cbiAgICAgIGZ1bmMgPSBmdW5jdGlvbiBmdW5jKHApIHtcbiAgICAgICAgcCAqPSBsO1xuICAgICAgICB2YXIgaSA9IE1hdGgubWluKGlsLCB+fnApO1xuICAgICAgICByZXR1cm4gaW50ZXJwb2xhdG9yc1tpXShwIC0gaSk7XG4gICAgICB9O1xuXG4gICAgICBwcm9ncmVzcyA9IGVuZDtcbiAgICB9IGVsc2UgaWYgKCFtdXRhdGUpIHtcbiAgICAgIHN0YXJ0ID0gX21lcmdlKF9pc0FycmF5KHN0YXJ0KSA/IFtdIDoge30sIHN0YXJ0KTtcbiAgICB9XG5cbiAgICBpZiAoIWludGVycG9sYXRvcnMpIHtcbiAgICAgIGZvciAocCBpbiBlbmQpIHtcbiAgICAgICAgX2FkZFByb3BUd2Vlbi5jYWxsKG1hc3Rlciwgc3RhcnQsIHAsIFwiZ2V0XCIsIGVuZFtwXSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmMgPSBmdW5jdGlvbiBmdW5jKHApIHtcbiAgICAgICAgcmV0dXJuIF9yZW5kZXJQcm9wVHdlZW5zKHAsIG1hc3RlcikgfHwgKGlzU3RyaW5nID8gc3RhcnQucCA6IHN0YXJ0KTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9jb25kaXRpb25hbFJldHVybihwcm9ncmVzcywgZnVuYyk7XG59LFxuICAgIF9nZXRMYWJlbEluRGlyZWN0aW9uID0gZnVuY3Rpb24gX2dldExhYmVsSW5EaXJlY3Rpb24odGltZWxpbmUsIGZyb21UaW1lLCBiYWNrd2FyZCkge1xuICAvL3VzZWQgZm9yIG5leHRMYWJlbCgpIGFuZCBwcmV2aW91c0xhYmVsKClcbiAgdmFyIGxhYmVscyA9IHRpbWVsaW5lLmxhYmVscyxcbiAgICAgIG1pbiA9IF9iaWdOdW0sXG4gICAgICBwLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICBsYWJlbDtcblxuICBmb3IgKHAgaW4gbGFiZWxzKSB7XG4gICAgZGlzdGFuY2UgPSBsYWJlbHNbcF0gLSBmcm9tVGltZTtcblxuICAgIGlmIChkaXN0YW5jZSA8IDAgPT09ICEhYmFja3dhcmQgJiYgZGlzdGFuY2UgJiYgbWluID4gKGRpc3RhbmNlID0gTWF0aC5hYnMoZGlzdGFuY2UpKSkge1xuICAgICAgbGFiZWwgPSBwO1xuICAgICAgbWluID0gZGlzdGFuY2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxhYmVsO1xufSxcbiAgICBfY2FsbGJhY2sgPSBmdW5jdGlvbiBfY2FsbGJhY2soYW5pbWF0aW9uLCB0eXBlLCBleGVjdXRlTGF6eUZpcnN0KSB7XG4gIHZhciB2ID0gYW5pbWF0aW9uLnZhcnMsXG4gICAgICBjYWxsYmFjayA9IHZbdHlwZV0sXG4gICAgICBwYXJhbXMsXG4gICAgICBzY29wZTtcblxuICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcGFyYW1zID0gdlt0eXBlICsgXCJQYXJhbXNcIl07XG4gIHNjb3BlID0gdi5jYWxsYmFja1Njb3BlIHx8IGFuaW1hdGlvbjtcbiAgZXhlY3V0ZUxhenlGaXJzdCAmJiBfbGF6eVR3ZWVucy5sZW5ndGggJiYgX2xhenlSZW5kZXIoKTsgLy9pbiBjYXNlIHJlbmRlcmluZyBjYXVzZWQgYW55IHR3ZWVucyB0byBsYXp5LWluaXQsIHdlIHNob3VsZCByZW5kZXIgdGhlbSBiZWNhdXNlIHR5cGljYWxseSB3aGVuIGEgdGltZWxpbmUgZmluaXNoZXMsIHVzZXJzIGV4cGVjdCB0aGluZ3MgdG8gaGF2ZSByZW5kZXJlZCBmdWxseS4gSW1hZ2luZSBhbiBvblVwZGF0ZSBvbiBhIHRpbWVsaW5lIHRoYXQgcmVwb3J0cy9jaGVja3MgdHdlZW5lZCB2YWx1ZXMuXG5cbiAgcmV0dXJuIHBhcmFtcyA/IGNhbGxiYWNrLmFwcGx5KHNjb3BlLCBwYXJhbXMpIDogY2FsbGJhY2suY2FsbChzY29wZSk7XG59LFxuICAgIF9pbnRlcnJ1cHQgPSBmdW5jdGlvbiBfaW50ZXJydXB0KGFuaW1hdGlvbikge1xuICBfcmVtb3ZlRnJvbVBhcmVudChhbmltYXRpb24pO1xuXG4gIGFuaW1hdGlvbi5zY3JvbGxUcmlnZ2VyICYmIGFuaW1hdGlvbi5zY3JvbGxUcmlnZ2VyLmtpbGwoZmFsc2UpO1xuICBhbmltYXRpb24ucHJvZ3Jlc3MoKSA8IDEgJiYgX2NhbGxiYWNrKGFuaW1hdGlvbiwgXCJvbkludGVycnVwdFwiKTtcbiAgcmV0dXJuIGFuaW1hdGlvbjtcbn0sXG4gICAgX3F1aWNrVHdlZW4sXG4gICAgX2NyZWF0ZVBsdWdpbiA9IGZ1bmN0aW9uIF9jcmVhdGVQbHVnaW4oY29uZmlnKSB7XG4gIGNvbmZpZyA9ICFjb25maWcubmFtZSAmJiBjb25maWdbXCJkZWZhdWx0XCJdIHx8IGNvbmZpZzsgLy9VTUQgcGFja2FnaW5nIHdyYXBzIHRoaW5ncyBvZGRseSwgc28gZm9yIGV4YW1wbGUgTW90aW9uUGF0aEhlbHBlciBiZWNvbWVzIHtNb3Rpb25QYXRoSGVscGVyOk1vdGlvblBhdGhIZWxwZXIsIGRlZmF1bHQ6TW90aW9uUGF0aEhlbHBlcn0uXG5cbiAgdmFyIG5hbWUgPSBjb25maWcubmFtZSxcbiAgICAgIGlzRnVuYyA9IF9pc0Z1bmN0aW9uKGNvbmZpZyksXG4gICAgICBQbHVnaW4gPSBuYW1lICYmICFpc0Z1bmMgJiYgY29uZmlnLmluaXQgPyBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fcHJvcHMgPSBbXTtcbiAgfSA6IGNvbmZpZyxcbiAgICAgIC8vaW4gY2FzZSBzb21lb25lIHBhc3NlcyBpbiBhbiBvYmplY3QgdGhhdCdzIG5vdCBhIHBsdWdpbiwgbGlrZSBDdXN0b21FYXNlXG4gIGluc3RhbmNlRGVmYXVsdHMgPSB7XG4gICAgaW5pdDogX2VtcHR5RnVuYyxcbiAgICByZW5kZXI6IF9yZW5kZXJQcm9wVHdlZW5zLFxuICAgIGFkZDogX2FkZFByb3BUd2VlbixcbiAgICBraWxsOiBfa2lsbFByb3BUd2VlbnNPZixcbiAgICBtb2RpZmllcjogX2FkZFBsdWdpbk1vZGlmaWVyLFxuICAgIHJhd1ZhcnM6IDBcbiAgfSxcbiAgICAgIHN0YXRpY3MgPSB7XG4gICAgdGFyZ2V0VGVzdDogMCxcbiAgICBnZXQ6IDAsXG4gICAgZ2V0U2V0dGVyOiBfZ2V0U2V0dGVyLFxuICAgIGFsaWFzZXM6IHt9LFxuICAgIHJlZ2lzdGVyOiAwXG4gIH07XG5cbiAgX3dha2UoKTtcblxuICBpZiAoY29uZmlnICE9PSBQbHVnaW4pIHtcbiAgICBpZiAoX3BsdWdpbnNbbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBfc2V0RGVmYXVsdHMoUGx1Z2luLCBfc2V0RGVmYXVsdHMoX2NvcHlFeGNsdWRpbmcoY29uZmlnLCBpbnN0YW5jZURlZmF1bHRzKSwgc3RhdGljcykpOyAvL3N0YXRpYyBtZXRob2RzXG5cblxuICAgIF9tZXJnZShQbHVnaW4ucHJvdG90eXBlLCBfbWVyZ2UoaW5zdGFuY2VEZWZhdWx0cywgX2NvcHlFeGNsdWRpbmcoY29uZmlnLCBzdGF0aWNzKSkpOyAvL2luc3RhbmNlIG1ldGhvZHNcblxuXG4gICAgX3BsdWdpbnNbUGx1Z2luLnByb3AgPSBuYW1lXSA9IFBsdWdpbjtcblxuICAgIGlmIChjb25maWcudGFyZ2V0VGVzdCkge1xuICAgICAgX2hhcm5lc3NQbHVnaW5zLnB1c2goUGx1Z2luKTtcblxuICAgICAgX3Jlc2VydmVkUHJvcHNbbmFtZV0gPSAxO1xuICAgIH1cblxuICAgIG5hbWUgPSAobmFtZSA9PT0gXCJjc3NcIiA/IFwiQ1NTXCIgOiBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHIoMSkpICsgXCJQbHVnaW5cIjsgLy9mb3IgdGhlIGdsb2JhbCBuYW1lLiBcIm1vdGlvblBhdGhcIiBzaG91bGQgYmVjb21lIE1vdGlvblBhdGhQbHVnaW5cbiAgfVxuXG4gIF9hZGRHbG9iYWwobmFtZSwgUGx1Z2luKTtcblxuICBjb25maWcucmVnaXN0ZXIgJiYgY29uZmlnLnJlZ2lzdGVyKGdzYXAsIFBsdWdpbiwgUHJvcFR3ZWVuKTtcbn0sXG5cbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ09MT1JTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5fMjU1ID0gMjU1LFxuICAgIF9jb2xvckxvb2t1cCA9IHtcbiAgYXF1YTogWzAsIF8yNTUsIF8yNTVdLFxuICBsaW1lOiBbMCwgXzI1NSwgMF0sXG4gIHNpbHZlcjogWzE5MiwgMTkyLCAxOTJdLFxuICBibGFjazogWzAsIDAsIDBdLFxuICBtYXJvb246IFsxMjgsIDAsIDBdLFxuICB0ZWFsOiBbMCwgMTI4LCAxMjhdLFxuICBibHVlOiBbMCwgMCwgXzI1NV0sXG4gIG5hdnk6IFswLCAwLCAxMjhdLFxuICB3aGl0ZTogW18yNTUsIF8yNTUsIF8yNTVdLFxuICBvbGl2ZTogWzEyOCwgMTI4LCAwXSxcbiAgeWVsbG93OiBbXzI1NSwgXzI1NSwgMF0sXG4gIG9yYW5nZTogW18yNTUsIDE2NSwgMF0sXG4gIGdyYXk6IFsxMjgsIDEyOCwgMTI4XSxcbiAgcHVycGxlOiBbMTI4LCAwLCAxMjhdLFxuICBncmVlbjogWzAsIDEyOCwgMF0sXG4gIHJlZDogW18yNTUsIDAsIDBdLFxuICBwaW5rOiBbXzI1NSwgMTkyLCAyMDNdLFxuICBjeWFuOiBbMCwgXzI1NSwgXzI1NV0sXG4gIHRyYW5zcGFyZW50OiBbXzI1NSwgXzI1NSwgXzI1NSwgMF1cbn0sXG4gICAgX2h1ZSA9IGZ1bmN0aW9uIF9odWUoaCwgbTEsIG0yKSB7XG4gIGggPSBoIDwgMCA/IGggKyAxIDogaCA+IDEgPyBoIC0gMSA6IGg7XG4gIHJldHVybiAoaCAqIDYgPCAxID8gbTEgKyAobTIgLSBtMSkgKiBoICogNiA6IGggPCAuNSA/IG0yIDogaCAqIDMgPCAyID8gbTEgKyAobTIgLSBtMSkgKiAoMiAvIDMgLSBoKSAqIDYgOiBtMSkgKiBfMjU1ICsgLjUgfCAwO1xufSxcbiAgICBzcGxpdENvbG9yID0gZnVuY3Rpb24gc3BsaXRDb2xvcih2LCB0b0hTTCwgZm9yY2VBbHBoYSkge1xuICB2YXIgYSA9ICF2ID8gX2NvbG9yTG9va3VwLmJsYWNrIDogX2lzTnVtYmVyKHYpID8gW3YgPj4gMTYsIHYgPj4gOCAmIF8yNTUsIHYgJiBfMjU1XSA6IDAsXG4gICAgICByLFxuICAgICAgZyxcbiAgICAgIGIsXG4gICAgICBoLFxuICAgICAgcyxcbiAgICAgIGwsXG4gICAgICBtYXgsXG4gICAgICBtaW4sXG4gICAgICBkLFxuICAgICAgd2FzSFNMO1xuXG4gIGlmICghYSkge1xuICAgIGlmICh2LnN1YnN0cigtMSkgPT09IFwiLFwiKSB7XG4gICAgICAvL3NvbWV0aW1lcyBhIHRyYWlsaW5nIGNvbW1hIGlzIGluY2x1ZGVkIGFuZCB3ZSBzaG91bGQgY2hvcCBpdCBvZmYgKHR5cGljYWxseSBmcm9tIGEgY29tbWEtZGVsaW1pdGVkIGxpc3Qgb2YgdmFsdWVzIGxpa2UgYSB0ZXh0U2hhZG93OlwiMnB4IDJweCAycHggYmx1ZSwgNXB4IDVweCA1cHggcmdiKDI1NSwwLDApXCIgLSBpbiB0aGlzIGV4YW1wbGUgXCJibHVlLFwiIGhhcyBhIHRyYWlsaW5nIGNvbW1hLiBXZSBjb3VsZCBzdHJpcCBpdCBvdXQgaW5zaWRlIHBhcnNlQ29tcGxleCgpIGJ1dCB3ZSdkIG5lZWQgdG8gZG8gaXQgdG8gdGhlIGJlZ2lubmluZyBhbmQgZW5kaW5nIHZhbHVlcyBwbHVzIGl0IHdvdWxkbid0IHByb3ZpZGUgcHJvdGVjdGlvbiBmcm9tIG90aGVyIHBvdGVudGlhbCBzY2VuYXJpb3MgbGlrZSBpZiB0aGUgdXNlciBwYXNzZXMgaW4gYSBzaW1pbGFyIHZhbHVlLlxuICAgICAgdiA9IHYuc3Vic3RyKDAsIHYubGVuZ3RoIC0gMSk7XG4gICAgfVxuXG4gICAgaWYgKF9jb2xvckxvb2t1cFt2XSkge1xuICAgICAgYSA9IF9jb2xvckxvb2t1cFt2XTtcbiAgICB9IGVsc2UgaWYgKHYuY2hhckF0KDApID09PSBcIiNcIikge1xuICAgICAgaWYgKHYubGVuZ3RoIDwgNikge1xuICAgICAgICAvL2ZvciBzaG9ydGhhbmQgbGlrZSAjOUYwIG9yICM5RjBGIChjb3VsZCBoYXZlIGFscGhhKVxuICAgICAgICByID0gdi5jaGFyQXQoMSk7XG4gICAgICAgIGcgPSB2LmNoYXJBdCgyKTtcbiAgICAgICAgYiA9IHYuY2hhckF0KDMpO1xuICAgICAgICB2ID0gXCIjXCIgKyByICsgciArIGcgKyBnICsgYiArIGIgKyAodi5sZW5ndGggPT09IDUgPyB2LmNoYXJBdCg0KSArIHYuY2hhckF0KDQpIDogXCJcIik7XG4gICAgICB9XG5cbiAgICAgIGlmICh2Lmxlbmd0aCA9PT0gOSkge1xuICAgICAgICAvLyBoZXggd2l0aCBhbHBoYSwgbGlrZSAjZmQ1ZTUzZmZcbiAgICAgICAgYSA9IHBhcnNlSW50KHYuc3Vic3RyKDEsIDYpLCAxNik7XG4gICAgICAgIHJldHVybiBbYSA+PiAxNiwgYSA+PiA4ICYgXzI1NSwgYSAmIF8yNTUsIHBhcnNlSW50KHYuc3Vic3RyKDcpLCAxNikgLyAyNTVdO1xuICAgICAgfVxuXG4gICAgICB2ID0gcGFyc2VJbnQodi5zdWJzdHIoMSksIDE2KTtcbiAgICAgIGEgPSBbdiA+PiAxNiwgdiA+PiA4ICYgXzI1NSwgdiAmIF8yNTVdO1xuICAgIH0gZWxzZSBpZiAodi5zdWJzdHIoMCwgMykgPT09IFwiaHNsXCIpIHtcbiAgICAgIGEgPSB3YXNIU0wgPSB2Lm1hdGNoKF9zdHJpY3ROdW1FeHApO1xuXG4gICAgICBpZiAoIXRvSFNMKSB7XG4gICAgICAgIGggPSArYVswXSAlIDM2MCAvIDM2MDtcbiAgICAgICAgcyA9ICthWzFdIC8gMTAwO1xuICAgICAgICBsID0gK2FbMl0gLyAxMDA7XG4gICAgICAgIGcgPSBsIDw9IC41ID8gbCAqIChzICsgMSkgOiBsICsgcyAtIGwgKiBzO1xuICAgICAgICByID0gbCAqIDIgLSBnO1xuICAgICAgICBhLmxlbmd0aCA+IDMgJiYgKGFbM10gKj0gMSk7IC8vY2FzdCBhcyBudW1iZXJcblxuICAgICAgICBhWzBdID0gX2h1ZShoICsgMSAvIDMsIHIsIGcpO1xuICAgICAgICBhWzFdID0gX2h1ZShoLCByLCBnKTtcbiAgICAgICAgYVsyXSA9IF9odWUoaCAtIDEgLyAzLCByLCBnKTtcbiAgICAgIH0gZWxzZSBpZiAofnYuaW5kZXhPZihcIj1cIikpIHtcbiAgICAgICAgLy9pZiByZWxhdGl2ZSB2YWx1ZXMgYXJlIGZvdW5kLCBqdXN0IHJldHVybiB0aGUgcmF3IHN0cmluZ3Mgd2l0aCB0aGUgcmVsYXRpdmUgcHJlZml4ZXMgaW4gcGxhY2UuXG4gICAgICAgIGEgPSB2Lm1hdGNoKF9udW1FeHApO1xuICAgICAgICBmb3JjZUFscGhhICYmIGEubGVuZ3RoIDwgNCAmJiAoYVszXSA9IDEpO1xuICAgICAgICByZXR1cm4gYTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYSA9IHYubWF0Y2goX3N0cmljdE51bUV4cCkgfHwgX2NvbG9yTG9va3VwLnRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIGEgPSBhLm1hcChOdW1iZXIpO1xuICB9XG5cbiAgaWYgKHRvSFNMICYmICF3YXNIU0wpIHtcbiAgICByID0gYVswXSAvIF8yNTU7XG4gICAgZyA9IGFbMV0gLyBfMjU1O1xuICAgIGIgPSBhWzJdIC8gXzI1NTtcbiAgICBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgICBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICBsID0gKG1heCArIG1pbikgLyAyO1xuXG4gICAgaWYgKG1heCA9PT0gbWluKSB7XG4gICAgICBoID0gcyA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGQgPSBtYXggLSBtaW47XG4gICAgICBzID0gbCA+IDAuNSA/IGQgLyAoMiAtIG1heCAtIG1pbikgOiBkIC8gKG1heCArIG1pbik7XG4gICAgICBoID0gbWF4ID09PSByID8gKGcgLSBiKSAvIGQgKyAoZyA8IGIgPyA2IDogMCkgOiBtYXggPT09IGcgPyAoYiAtIHIpIC8gZCArIDIgOiAociAtIGcpIC8gZCArIDQ7XG4gICAgICBoICo9IDYwO1xuICAgIH1cblxuICAgIGFbMF0gPSB+fihoICsgLjUpO1xuICAgIGFbMV0gPSB+fihzICogMTAwICsgLjUpO1xuICAgIGFbMl0gPSB+fihsICogMTAwICsgLjUpO1xuICB9XG5cbiAgZm9yY2VBbHBoYSAmJiBhLmxlbmd0aCA8IDQgJiYgKGFbM10gPSAxKTtcbiAgcmV0dXJuIGE7XG59LFxuICAgIF9jb2xvck9yZGVyRGF0YSA9IGZ1bmN0aW9uIF9jb2xvck9yZGVyRGF0YSh2KSB7XG4gIC8vIHN0cmlwcyBvdXQgdGhlIGNvbG9ycyBmcm9tIHRoZSBzdHJpbmcsIGZpbmRzIGFsbCB0aGUgbnVtZXJpYyBzbG90cyAod2l0aCB1bml0cykgYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgdGhvc2UuIFRoZSBBcnJheSBhbHNvIGhhcyBhIFwiY1wiIHByb3BlcnR5IHdoaWNoIGlzIGFuIEFycmF5IG9mIHRoZSBpbmRleCB2YWx1ZXMgd2hlcmUgdGhlIGNvbG9ycyBiZWxvbmcuIFRoaXMgaXMgdG8gaGVscCB3b3JrIGFyb3VuZCBpc3N1ZXMgd2hlcmUgdGhlcmUncyBhIG1pcy1tYXRjaGVkIG9yZGVyIG9mIGNvbG9yL251bWVyaWMgZGF0YSBsaWtlIGRyb3Atc2hhZG93KCNmMDAgMHB4IDFweCAycHgpIGFuZCBkcm9wLXNoYWRvdygweCAxcHggMnB4ICNmMDApLiBUaGlzIGlzIGJhc2ljYWxseSBhIGhlbHBlciBmdW5jdGlvbiB1c2VkIGluIF9mb3JtYXRDb2xvcnMoKVxuICB2YXIgdmFsdWVzID0gW10sXG4gICAgICBjID0gW10sXG4gICAgICBpID0gLTE7XG4gIHYuc3BsaXQoX2NvbG9yRXhwKS5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIGEgPSB2Lm1hdGNoKF9udW1XaXRoVW5pdEV4cCkgfHwgW107XG4gICAgdmFsdWVzLnB1c2guYXBwbHkodmFsdWVzLCBhKTtcbiAgICBjLnB1c2goaSArPSBhLmxlbmd0aCArIDEpO1xuICB9KTtcbiAgdmFsdWVzLmMgPSBjO1xuICByZXR1cm4gdmFsdWVzO1xufSxcbiAgICBfZm9ybWF0Q29sb3JzID0gZnVuY3Rpb24gX2Zvcm1hdENvbG9ycyhzLCB0b0hTTCwgb3JkZXJNYXRjaERhdGEpIHtcbiAgdmFyIHJlc3VsdCA9IFwiXCIsXG4gICAgICBjb2xvcnMgPSAocyArIHJlc3VsdCkubWF0Y2goX2NvbG9yRXhwKSxcbiAgICAgIHR5cGUgPSB0b0hTTCA/IFwiaHNsYShcIiA6IFwicmdiYShcIixcbiAgICAgIGkgPSAwLFxuICAgICAgYyxcbiAgICAgIHNoZWxsLFxuICAgICAgZCxcbiAgICAgIGw7XG5cbiAgaWYgKCFjb2xvcnMpIHtcbiAgICByZXR1cm4gcztcbiAgfVxuXG4gIGNvbG9ycyA9IGNvbG9ycy5tYXAoZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgcmV0dXJuIChjb2xvciA9IHNwbGl0Q29sb3IoY29sb3IsIHRvSFNMLCAxKSkgJiYgdHlwZSArICh0b0hTTCA/IGNvbG9yWzBdICsgXCIsXCIgKyBjb2xvclsxXSArIFwiJSxcIiArIGNvbG9yWzJdICsgXCIlLFwiICsgY29sb3JbM10gOiBjb2xvci5qb2luKFwiLFwiKSkgKyBcIilcIjtcbiAgfSk7XG5cbiAgaWYgKG9yZGVyTWF0Y2hEYXRhKSB7XG4gICAgZCA9IF9jb2xvck9yZGVyRGF0YShzKTtcbiAgICBjID0gb3JkZXJNYXRjaERhdGEuYztcblxuICAgIGlmIChjLmpvaW4ocmVzdWx0KSAhPT0gZC5jLmpvaW4ocmVzdWx0KSkge1xuICAgICAgc2hlbGwgPSBzLnJlcGxhY2UoX2NvbG9yRXhwLCBcIjFcIikuc3BsaXQoX251bVdpdGhVbml0RXhwKTtcbiAgICAgIGwgPSBzaGVsbC5sZW5ndGggLSAxO1xuXG4gICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgICByZXN1bHQgKz0gc2hlbGxbaV0gKyAofmMuaW5kZXhPZihpKSA/IGNvbG9ycy5zaGlmdCgpIHx8IHR5cGUgKyBcIjAsMCwwLDApXCIgOiAoZC5sZW5ndGggPyBkIDogY29sb3JzLmxlbmd0aCA/IGNvbG9ycyA6IG9yZGVyTWF0Y2hEYXRhKS5zaGlmdCgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIXNoZWxsKSB7XG4gICAgc2hlbGwgPSBzLnNwbGl0KF9jb2xvckV4cCk7XG4gICAgbCA9IHNoZWxsLmxlbmd0aCAtIDE7XG5cbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgcmVzdWx0ICs9IHNoZWxsW2ldICsgY29sb3JzW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQgKyBzaGVsbFtsXTtcbn0sXG4gICAgX2NvbG9yRXhwID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcyA9IFwiKD86XFxcXGIoPzooPzpyZ2J8cmdiYXxoc2x8aHNsYSlcXFxcKC4rP1xcXFwpKXxcXFxcQiMoPzpbMC05YS1mXXszLDR9KXsxLDJ9XFxcXGJcIixcbiAgICAgIC8vd2UnbGwgZHluYW1pY2FsbHkgYnVpbGQgdGhpcyBSZWd1bGFyIEV4cHJlc3Npb24gdG8gY29uc2VydmUgZmlsZSBzaXplLiBBZnRlciBidWlsZGluZyBpdCwgaXQgd2lsbCBiZSBhYmxlIHRvIGZpbmQgcmdiKCksIHJnYmEoKSwgIyAoaGV4YWRlY2ltYWwpLCBhbmQgbmFtZWQgY29sb3IgdmFsdWVzIGxpa2UgcmVkLCBibHVlLCBwdXJwbGUsIGV0Yy4sXG4gIHA7XG5cbiAgZm9yIChwIGluIF9jb2xvckxvb2t1cCkge1xuICAgIHMgKz0gXCJ8XCIgKyBwICsgXCJcXFxcYlwiO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAocyArIFwiKVwiLCBcImdpXCIpO1xufSgpLFxuICAgIF9oc2xFeHAgPSAvaHNsW2FdP1xcKC8sXG4gICAgX2NvbG9yU3RyaW5nRmlsdGVyID0gZnVuY3Rpb24gX2NvbG9yU3RyaW5nRmlsdGVyKGEpIHtcbiAgdmFyIGNvbWJpbmVkID0gYS5qb2luKFwiIFwiKSxcbiAgICAgIHRvSFNMO1xuICBfY29sb3JFeHAubGFzdEluZGV4ID0gMDtcblxuICBpZiAoX2NvbG9yRXhwLnRlc3QoY29tYmluZWQpKSB7XG4gICAgdG9IU0wgPSBfaHNsRXhwLnRlc3QoY29tYmluZWQpO1xuICAgIGFbMV0gPSBfZm9ybWF0Q29sb3JzKGFbMV0sIHRvSFNMKTtcbiAgICBhWzBdID0gX2Zvcm1hdENvbG9ycyhhWzBdLCB0b0hTTCwgX2NvbG9yT3JkZXJEYXRhKGFbMV0pKTsgLy8gbWFrZSBzdXJlIHRoZSBvcmRlciBvZiBudW1iZXJzL2NvbG9ycyBtYXRjaCB3aXRoIHRoZSBFTkQgdmFsdWUuXG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSxcblxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBUSUNLRVJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbl90aWNrZXJBY3RpdmUsXG4gICAgX3RpY2tlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF9nZXRUaW1lID0gRGF0ZS5ub3csXG4gICAgICBfbGFnVGhyZXNob2xkID0gNTAwLFxuICAgICAgX2FkanVzdGVkTGFnID0gMzMsXG4gICAgICBfc3RhcnRUaW1lID0gX2dldFRpbWUoKSxcbiAgICAgIF9sYXN0VXBkYXRlID0gX3N0YXJ0VGltZSxcbiAgICAgIF9nYXAgPSAxMDAwIC8gMjQwLFxuICAgICAgX25leHRUaW1lID0gX2dhcCxcbiAgICAgIF9saXN0ZW5lcnMgPSBbXSxcbiAgICAgIF9pZCxcbiAgICAgIF9yZXEsXG4gICAgICBfcmFmLFxuICAgICAgX3NlbGYsXG4gICAgICBfZGVsdGEsXG4gICAgICBfaSxcbiAgICAgIF90aWNrID0gZnVuY3Rpb24gX3RpY2sodikge1xuICAgIHZhciBlbGFwc2VkID0gX2dldFRpbWUoKSAtIF9sYXN0VXBkYXRlLFxuICAgICAgICBtYW51YWwgPSB2ID09PSB0cnVlLFxuICAgICAgICBvdmVybGFwLFxuICAgICAgICBkaXNwYXRjaCxcbiAgICAgICAgdGltZSxcbiAgICAgICAgZnJhbWU7XG5cbiAgICBlbGFwc2VkID4gX2xhZ1RocmVzaG9sZCAmJiAoX3N0YXJ0VGltZSArPSBlbGFwc2VkIC0gX2FkanVzdGVkTGFnKTtcbiAgICBfbGFzdFVwZGF0ZSArPSBlbGFwc2VkO1xuICAgIHRpbWUgPSBfbGFzdFVwZGF0ZSAtIF9zdGFydFRpbWU7XG4gICAgb3ZlcmxhcCA9IHRpbWUgLSBfbmV4dFRpbWU7XG5cbiAgICBpZiAob3ZlcmxhcCA+IDAgfHwgbWFudWFsKSB7XG4gICAgICBmcmFtZSA9ICsrX3NlbGYuZnJhbWU7XG4gICAgICBfZGVsdGEgPSB0aW1lIC0gX3NlbGYudGltZSAqIDEwMDA7XG4gICAgICBfc2VsZi50aW1lID0gdGltZSA9IHRpbWUgLyAxMDAwO1xuICAgICAgX25leHRUaW1lICs9IG92ZXJsYXAgKyAob3ZlcmxhcCA+PSBfZ2FwID8gNCA6IF9nYXAgLSBvdmVybGFwKTtcbiAgICAgIGRpc3BhdGNoID0gMTtcbiAgICB9XG5cbiAgICBtYW51YWwgfHwgKF9pZCA9IF9yZXEoX3RpY2spKTsgLy9tYWtlIHN1cmUgdGhlIHJlcXVlc3QgaXMgbWFkZSBiZWZvcmUgd2UgZGlzcGF0Y2ggdGhlIFwidGlja1wiIGV2ZW50IHNvIHRoYXQgdGltaW5nIGlzIG1haW50YWluZWQuIE90aGVyd2lzZSwgaWYgcHJvY2Vzc2luZyB0aGUgXCJ0aWNrXCIgcmVxdWlyZXMgYSBidW5jaCBvZiB0aW1lIChsaWtlIDE1bXMpIGFuZCB3ZSdyZSB1c2luZyBhIHNldFRpbWVvdXQoKSB0aGF0J3MgYmFzZWQgb24gMTYuN21zLCBpdCdkIHRlY2huaWNhbGx5IHRha2UgMzEuN21zIGJldHdlZW4gZnJhbWVzIG90aGVyd2lzZS5cblxuICAgIGlmIChkaXNwYXRjaCkge1xuICAgICAgZm9yIChfaSA9IDA7IF9pIDwgX2xpc3RlbmVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgLy8gdXNlIF9pIGFuZCBjaGVjayBfbGlzdGVuZXJzLmxlbmd0aCBpbnN0ZWFkIG9mIGEgdmFyaWFibGUgYmVjYXVzZSBhIGxpc3RlbmVyIGNvdWxkIGdldCByZW1vdmVkIGR1cmluZyB0aGUgbG9vcCwgYW5kIGlmIHRoYXQgaGFwcGVucyB0byBhbiBlbGVtZW50IGxlc3MgdGhhbiB0aGUgY3VycmVudCBpbmRleCwgaXQnZCB0aHJvdyB0aGluZ3Mgb2ZmIGluIHRoZSBsb29wLlxuICAgICAgICBfbGlzdGVuZXJzW19pXSh0aW1lLCBfZGVsdGEsIGZyYW1lLCB2KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3NlbGYgPSB7XG4gICAgdGltZTogMCxcbiAgICBmcmFtZTogMCxcbiAgICB0aWNrOiBmdW5jdGlvbiB0aWNrKCkge1xuICAgICAgX3RpY2sodHJ1ZSk7XG4gICAgfSxcbiAgICBkZWx0YVJhdGlvOiBmdW5jdGlvbiBkZWx0YVJhdGlvKGZwcykge1xuICAgICAgcmV0dXJuIF9kZWx0YSAvICgxMDAwIC8gKGZwcyB8fCA2MCkpO1xuICAgIH0sXG4gICAgd2FrZTogZnVuY3Rpb24gd2FrZSgpIHtcbiAgICAgIGlmIChfY29yZVJlYWR5KSB7XG4gICAgICAgIGlmICghX2NvcmVJbml0dGVkICYmIF93aW5kb3dFeGlzdHMoKSkge1xuICAgICAgICAgIF93aW4gPSBfY29yZUluaXR0ZWQgPSB3aW5kb3c7XG4gICAgICAgICAgX2RvYyA9IF93aW4uZG9jdW1lbnQgfHwge307XG4gICAgICAgICAgX2dsb2JhbHMuZ3NhcCA9IGdzYXA7XG4gICAgICAgICAgKF93aW4uZ3NhcFZlcnNpb25zIHx8IChfd2luLmdzYXBWZXJzaW9ucyA9IFtdKSkucHVzaChnc2FwLnZlcnNpb24pO1xuXG4gICAgICAgICAgX2luc3RhbGwoX2luc3RhbGxTY29wZSB8fCBfd2luLkdyZWVuU29ja0dsb2JhbHMgfHwgIV93aW4uZ3NhcCAmJiBfd2luIHx8IHt9KTtcblxuICAgICAgICAgIF9yYWYgPSBfd2luLnJlcXVlc3RBbmltYXRpb25GcmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9pZCAmJiBfc2VsZi5zbGVlcCgpO1xuXG4gICAgICAgIF9yZXEgPSBfcmFmIHx8IGZ1bmN0aW9uIChmKSB7XG4gICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZiwgX25leHRUaW1lIC0gX3NlbGYudGltZSAqIDEwMDAgKyAxIHwgMCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgX3RpY2tlckFjdGl2ZSA9IDE7XG5cbiAgICAgICAgX3RpY2soMik7XG4gICAgICB9XG4gICAgfSxcbiAgICBzbGVlcDogZnVuY3Rpb24gc2xlZXAoKSB7XG4gICAgICAoX3JhZiA/IF93aW4uY2FuY2VsQW5pbWF0aW9uRnJhbWUgOiBjbGVhclRpbWVvdXQpKF9pZCk7XG4gICAgICBfdGlja2VyQWN0aXZlID0gMDtcbiAgICAgIF9yZXEgPSBfZW1wdHlGdW5jO1xuICAgIH0sXG4gICAgbGFnU21vb3RoaW5nOiBmdW5jdGlvbiBsYWdTbW9vdGhpbmcodGhyZXNob2xkLCBhZGp1c3RlZExhZykge1xuICAgICAgX2xhZ1RocmVzaG9sZCA9IHRocmVzaG9sZCB8fCAxIC8gX3RpbnlOdW07IC8vemVybyBzaG91bGQgYmUgaW50ZXJwcmV0ZWQgYXMgYmFzaWNhbGx5IHVubGltaXRlZFxuXG4gICAgICBfYWRqdXN0ZWRMYWcgPSBNYXRoLm1pbihhZGp1c3RlZExhZywgX2xhZ1RocmVzaG9sZCwgMCk7XG4gICAgfSxcbiAgICBmcHM6IGZ1bmN0aW9uIGZwcyhfZnBzKSB7XG4gICAgICBfZ2FwID0gMTAwMCAvIChfZnBzIHx8IDI0MCk7XG4gICAgICBfbmV4dFRpbWUgPSBfc2VsZi50aW1lICogMTAwMCArIF9nYXA7XG4gICAgfSxcbiAgICBhZGQ6IGZ1bmN0aW9uIGFkZChjYWxsYmFjaykge1xuICAgICAgX2xpc3RlbmVycy5pbmRleE9mKGNhbGxiYWNrKSA8IDAgJiYgX2xpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcblxuICAgICAgX3dha2UoKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgaTtcbiAgICAgIH4oaSA9IF9saXN0ZW5lcnMuaW5kZXhPZihjYWxsYmFjaykpICYmIF9saXN0ZW5lcnMuc3BsaWNlKGksIDEpICYmIF9pID49IGkgJiYgX2ktLTtcbiAgICB9LFxuICAgIF9saXN0ZW5lcnM6IF9saXN0ZW5lcnNcbiAgfTtcbiAgcmV0dXJuIF9zZWxmO1xufSgpLFxuICAgIF93YWtlID0gZnVuY3Rpb24gX3dha2UoKSB7XG4gIHJldHVybiAhX3RpY2tlckFjdGl2ZSAmJiBfdGlja2VyLndha2UoKTtcbn0sXG4gICAgLy9hbHNvIGVuc3VyZXMgdGhlIGNvcmUgY2xhc3NlcyBhcmUgaW5pdGlhbGl6ZWQuXG5cbi8qXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiogRUFTSU5HXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5fZWFzZU1hcCA9IHt9LFxuICAgIF9jdXN0b21FYXNlRXhwID0gL15bXFxkLlxcLU1dW1xcZC5cXC0sXFxzXS8sXG4gICAgX3F1b3Rlc0V4cCA9IC9bXCInXS9nLFxuICAgIF9wYXJzZU9iamVjdEluU3RyaW5nID0gZnVuY3Rpb24gX3BhcnNlT2JqZWN0SW5TdHJpbmcodmFsdWUpIHtcbiAgLy90YWtlcyBhIHN0cmluZyBsaWtlIFwie3dpZ2dsZXM6MTAsIHR5cGU6YW50aWNpcGF0ZX0pXCIgYW5kIHR1cm5zIGl0IGludG8gYSByZWFsIG9iamVjdC4gTm90aWNlIGl0IGVuZHMgaW4gXCIpXCIgYW5kIGluY2x1ZGVzIHRoZSB7fSB3cmFwcGVycy4gVGhpcyBpcyBiZWNhdXNlIHdlIG9ubHkgdXNlIHRoaXMgZnVuY3Rpb24gZm9yIHBhcnNpbmcgZWFzZSBjb25maWdzIGFuZCBwcmlvcml0aXplZCBvcHRpbWl6YXRpb24gcmF0aGVyIHRoYW4gcmV1c2FiaWxpdHkuXG4gIHZhciBvYmogPSB7fSxcbiAgICAgIHNwbGl0ID0gdmFsdWUuc3Vic3RyKDEsIHZhbHVlLmxlbmd0aCAtIDMpLnNwbGl0KFwiOlwiKSxcbiAgICAgIGtleSA9IHNwbGl0WzBdLFxuICAgICAgaSA9IDEsXG4gICAgICBsID0gc3BsaXQubGVuZ3RoLFxuICAgICAgaW5kZXgsXG4gICAgICB2YWwsXG4gICAgICBwYXJzZWRWYWw7XG5cbiAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICB2YWwgPSBzcGxpdFtpXTtcbiAgICBpbmRleCA9IGkgIT09IGwgLSAxID8gdmFsLmxhc3RJbmRleE9mKFwiLFwiKSA6IHZhbC5sZW5ndGg7XG4gICAgcGFyc2VkVmFsID0gdmFsLnN1YnN0cigwLCBpbmRleCk7XG4gICAgb2JqW2tleV0gPSBpc05hTihwYXJzZWRWYWwpID8gcGFyc2VkVmFsLnJlcGxhY2UoX3F1b3Rlc0V4cCwgXCJcIikudHJpbSgpIDogK3BhcnNlZFZhbDtcbiAgICBrZXkgPSB2YWwuc3Vic3RyKGluZGV4ICsgMSkudHJpbSgpO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0sXG4gICAgX3ZhbHVlSW5QYXJlbnRoZXNlcyA9IGZ1bmN0aW9uIF92YWx1ZUluUGFyZW50aGVzZXModmFsdWUpIHtcbiAgdmFyIG9wZW4gPSB2YWx1ZS5pbmRleE9mKFwiKFwiKSArIDEsXG4gICAgICBjbG9zZSA9IHZhbHVlLmluZGV4T2YoXCIpXCIpLFxuICAgICAgbmVzdGVkID0gdmFsdWUuaW5kZXhPZihcIihcIiwgb3Blbik7XG4gIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcob3Blbiwgfm5lc3RlZCAmJiBuZXN0ZWQgPCBjbG9zZSA/IHZhbHVlLmluZGV4T2YoXCIpXCIsIGNsb3NlICsgMSkgOiBjbG9zZSk7XG59LFxuICAgIF9jb25maWdFYXNlRnJvbVN0cmluZyA9IGZ1bmN0aW9uIF9jb25maWdFYXNlRnJvbVN0cmluZyhuYW1lKSB7XG4gIC8vbmFtZSBjYW4gYmUgYSBzdHJpbmcgbGlrZSBcImVsYXN0aWMub3V0KDEsMC41KVwiLCBhbmQgcGFzcyBpbiBfZWFzZU1hcCBhcyBvYmogYW5kIGl0J2xsIHBhcnNlIGl0IG91dCBhbmQgY2FsbCB0aGUgYWN0dWFsIGZ1bmN0aW9uIGxpa2UgX2Vhc2VNYXAuRWxhc3RpYy5lYXNlT3V0LmNvbmZpZygxLDAuNSkuIEl0IHdpbGwgYWxzbyBwYXJzZSBjdXN0b20gZWFzZSBzdHJpbmdzIGFzIGxvbmcgYXMgQ3VzdG9tRWFzZSBpcyBsb2FkZWQgYW5kIHJlZ2lzdGVyZWQgKGludGVybmFsbHkgYXMgX2Vhc2VNYXAuX0NFKS5cbiAgdmFyIHNwbGl0ID0gKG5hbWUgKyBcIlwiKS5zcGxpdChcIihcIiksXG4gICAgICBlYXNlID0gX2Vhc2VNYXBbc3BsaXRbMF1dO1xuICByZXR1cm4gZWFzZSAmJiBzcGxpdC5sZW5ndGggPiAxICYmIGVhc2UuY29uZmlnID8gZWFzZS5jb25maWcuYXBwbHkobnVsbCwgfm5hbWUuaW5kZXhPZihcIntcIikgPyBbX3BhcnNlT2JqZWN0SW5TdHJpbmcoc3BsaXRbMV0pXSA6IF92YWx1ZUluUGFyZW50aGVzZXMobmFtZSkuc3BsaXQoXCIsXCIpLm1hcChfbnVtZXJpY0lmUG9zc2libGUpKSA6IF9lYXNlTWFwLl9DRSAmJiBfY3VzdG9tRWFzZUV4cC50ZXN0KG5hbWUpID8gX2Vhc2VNYXAuX0NFKFwiXCIsIG5hbWUpIDogZWFzZTtcbn0sXG4gICAgX2ludmVydEVhc2UgPSBmdW5jdGlvbiBfaW52ZXJ0RWFzZShlYXNlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAxIC0gZWFzZSgxIC0gcCk7XG4gIH07XG59LFxuICAgIC8vIGFsbG93IHlveW9FYXNlIHRvIGJlIHNldCBpbiBjaGlsZHJlbiBhbmQgaGF2ZSB0aG9zZSBhZmZlY3RlZCB3aGVuIHRoZSBwYXJlbnQvYW5jZXN0b3IgdGltZWxpbmUgeW95b3MuXG5fcHJvcGFnYXRlWW95b0Vhc2UgPSBmdW5jdGlvbiBfcHJvcGFnYXRlWW95b0Vhc2UodGltZWxpbmUsIGlzWW95bykge1xuICB2YXIgY2hpbGQgPSB0aW1lbGluZS5fZmlyc3QsXG4gICAgICBlYXNlO1xuXG4gIHdoaWxlIChjaGlsZCkge1xuICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFRpbWVsaW5lKSB7XG4gICAgICBfcHJvcGFnYXRlWW95b0Vhc2UoY2hpbGQsIGlzWW95byk7XG4gICAgfSBlbHNlIGlmIChjaGlsZC52YXJzLnlveW9FYXNlICYmICghY2hpbGQuX3lveW8gfHwgIWNoaWxkLl9yZXBlYXQpICYmIGNoaWxkLl95b3lvICE9PSBpc1lveW8pIHtcbiAgICAgIGlmIChjaGlsZC50aW1lbGluZSkge1xuICAgICAgICBfcHJvcGFnYXRlWW95b0Vhc2UoY2hpbGQudGltZWxpbmUsIGlzWW95byk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlYXNlID0gY2hpbGQuX2Vhc2U7XG4gICAgICAgIGNoaWxkLl9lYXNlID0gY2hpbGQuX3lFYXNlO1xuICAgICAgICBjaGlsZC5feUVhc2UgPSBlYXNlO1xuICAgICAgICBjaGlsZC5feW95byA9IGlzWW95bztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICB9XG59LFxuICAgIF9wYXJzZUVhc2UgPSBmdW5jdGlvbiBfcGFyc2VFYXNlKGVhc2UsIGRlZmF1bHRFYXNlKSB7XG4gIHJldHVybiAhZWFzZSA/IGRlZmF1bHRFYXNlIDogKF9pc0Z1bmN0aW9uKGVhc2UpID8gZWFzZSA6IF9lYXNlTWFwW2Vhc2VdIHx8IF9jb25maWdFYXNlRnJvbVN0cmluZyhlYXNlKSkgfHwgZGVmYXVsdEVhc2U7XG59LFxuICAgIF9pbnNlcnRFYXNlID0gZnVuY3Rpb24gX2luc2VydEVhc2UobmFtZXMsIGVhc2VJbiwgZWFzZU91dCwgZWFzZUluT3V0KSB7XG4gIGlmIChlYXNlT3V0ID09PSB2b2lkIDApIHtcbiAgICBlYXNlT3V0ID0gZnVuY3Rpb24gZWFzZU91dChwKSB7XG4gICAgICByZXR1cm4gMSAtIGVhc2VJbigxIC0gcCk7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChlYXNlSW5PdXQgPT09IHZvaWQgMCkge1xuICAgIGVhc2VJbk91dCA9IGZ1bmN0aW9uIGVhc2VJbk91dChwKSB7XG4gICAgICByZXR1cm4gcCA8IC41ID8gZWFzZUluKHAgKiAyKSAvIDIgOiAxIC0gZWFzZUluKCgxIC0gcCkgKiAyKSAvIDI7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBlYXNlID0ge1xuICAgIGVhc2VJbjogZWFzZUluLFxuICAgIGVhc2VPdXQ6IGVhc2VPdXQsXG4gICAgZWFzZUluT3V0OiBlYXNlSW5PdXRcbiAgfSxcbiAgICAgIGxvd2VyY2FzZU5hbWU7XG5cbiAgX2ZvckVhY2hOYW1lKG5hbWVzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgIF9lYXNlTWFwW25hbWVdID0gX2dsb2JhbHNbbmFtZV0gPSBlYXNlO1xuICAgIF9lYXNlTWFwW2xvd2VyY2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCldID0gZWFzZU91dDtcblxuICAgIGZvciAodmFyIHAgaW4gZWFzZSkge1xuICAgICAgX2Vhc2VNYXBbbG93ZXJjYXNlTmFtZSArIChwID09PSBcImVhc2VJblwiID8gXCIuaW5cIiA6IHAgPT09IFwiZWFzZU91dFwiID8gXCIub3V0XCIgOiBcIi5pbk91dFwiKV0gPSBfZWFzZU1hcFtuYW1lICsgXCIuXCIgKyBwXSA9IGVhc2VbcF07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWFzZTtcbn0sXG4gICAgX2Vhc2VJbk91dEZyb21PdXQgPSBmdW5jdGlvbiBfZWFzZUluT3V0RnJvbU91dChlYXNlT3V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwIDwgLjUgPyAoMSAtIGVhc2VPdXQoMSAtIHAgKiAyKSkgLyAyIDogLjUgKyBlYXNlT3V0KChwIC0gLjUpICogMikgLyAyO1xuICB9O1xufSxcbiAgICBfY29uZmlnRWxhc3RpYyA9IGZ1bmN0aW9uIF9jb25maWdFbGFzdGljKHR5cGUsIGFtcGxpdHVkZSwgcGVyaW9kKSB7XG4gIHZhciBwMSA9IGFtcGxpdHVkZSA+PSAxID8gYW1wbGl0dWRlIDogMSxcbiAgICAgIC8vbm90ZTogaWYgYW1wbGl0dWRlIGlzIDwgMSwgd2Ugc2ltcGx5IGFkanVzdCB0aGUgcGVyaW9kIGZvciBhIG1vcmUgbmF0dXJhbCBmZWVsLiBPdGhlcndpc2UgdGhlIG1hdGggZG9lc24ndCB3b3JrIHJpZ2h0IGFuZCB0aGUgY3VydmUgc3RhcnRzIGF0IDEuXG4gIHAyID0gKHBlcmlvZCB8fCAodHlwZSA/IC4zIDogLjQ1KSkgLyAoYW1wbGl0dWRlIDwgMSA/IGFtcGxpdHVkZSA6IDEpLFxuICAgICAgcDMgPSBwMiAvIF8yUEkgKiAoTWF0aC5hc2luKDEgLyBwMSkgfHwgMCksXG4gICAgICBlYXNlT3V0ID0gZnVuY3Rpb24gZWFzZU91dChwKSB7XG4gICAgcmV0dXJuIHAgPT09IDEgPyAxIDogcDEgKiBNYXRoLnBvdygyLCAtMTAgKiBwKSAqIF9zaW4oKHAgLSBwMykgKiBwMikgKyAxO1xuICB9LFxuICAgICAgZWFzZSA9IHR5cGUgPT09IFwib3V0XCIgPyBlYXNlT3V0IDogdHlwZSA9PT0gXCJpblwiID8gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gMSAtIGVhc2VPdXQoMSAtIHApO1xuICB9IDogX2Vhc2VJbk91dEZyb21PdXQoZWFzZU91dCk7XG5cbiAgcDIgPSBfMlBJIC8gcDI7IC8vcHJlY2FsY3VsYXRlIHRvIG9wdGltaXplXG5cbiAgZWFzZS5jb25maWcgPSBmdW5jdGlvbiAoYW1wbGl0dWRlLCBwZXJpb2QpIHtcbiAgICByZXR1cm4gX2NvbmZpZ0VsYXN0aWModHlwZSwgYW1wbGl0dWRlLCBwZXJpb2QpO1xuICB9O1xuXG4gIHJldHVybiBlYXNlO1xufSxcbiAgICBfY29uZmlnQmFjayA9IGZ1bmN0aW9uIF9jb25maWdCYWNrKHR5cGUsIG92ZXJzaG9vdCkge1xuICBpZiAob3ZlcnNob290ID09PSB2b2lkIDApIHtcbiAgICBvdmVyc2hvb3QgPSAxLjcwMTU4O1xuICB9XG5cbiAgdmFyIGVhc2VPdXQgPSBmdW5jdGlvbiBlYXNlT3V0KHApIHtcbiAgICByZXR1cm4gcCA/IC0tcCAqIHAgKiAoKG92ZXJzaG9vdCArIDEpICogcCArIG92ZXJzaG9vdCkgKyAxIDogMDtcbiAgfSxcbiAgICAgIGVhc2UgPSB0eXBlID09PSBcIm91dFwiID8gZWFzZU91dCA6IHR5cGUgPT09IFwiaW5cIiA/IGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIDEgLSBlYXNlT3V0KDEgLSBwKTtcbiAgfSA6IF9lYXNlSW5PdXRGcm9tT3V0KGVhc2VPdXQpO1xuXG4gIGVhc2UuY29uZmlnID0gZnVuY3Rpb24gKG92ZXJzaG9vdCkge1xuICAgIHJldHVybiBfY29uZmlnQmFjayh0eXBlLCBvdmVyc2hvb3QpO1xuICB9O1xuXG4gIHJldHVybiBlYXNlO1xufTsgLy8gYSBjaGVhcGVyIChrYiBhbmQgY3B1KSBidXQgbW9yZSBtaWxkIHdheSB0byBnZXQgYSBwYXJhbWV0ZXJpemVkIHdlaWdodGVkIGVhc2UgYnkgZmVlZGluZyBpbiBhIHZhbHVlIGJldHdlZW4gLTEgKGVhc2VJbikgYW5kIDEgKGVhc2VPdXQpIHdoZXJlIDAgaXMgbGluZWFyLlxuLy8gX3dlaWdodGVkRWFzZSA9IHJhdGlvID0+IHtcbi8vIFx0bGV0IHkgPSAwLjUgKyByYXRpbyAvIDI7XG4vLyBcdHJldHVybiBwID0+ICgyICogKDEgLSBwKSAqIHAgKiB5ICsgcCAqIHApO1xuLy8gfSxcbi8vIGEgc3Ryb25nZXIgKGJ1dCBtb3JlIGV4cGVuc2l2ZSBrYi9jcHUpIHBhcmFtZXRlcml6ZWQgd2VpZ2h0ZWQgZWFzZSB0aGF0IGxldHMgeW91IGZlZWQgaW4gYSB2YWx1ZSBiZXR3ZWVuIC0xIChlYXNlSW4pIGFuZCAxIChlYXNlT3V0KSB3aGVyZSAwIGlzIGxpbmVhci5cbi8vIF93ZWlnaHRlZEVhc2VTdHJvbmcgPSByYXRpbyA9PiB7XG4vLyBcdHJhdGlvID0gLjUgKyByYXRpbyAvIDI7XG4vLyBcdGxldCBvID0gMSAvIDMgKiAocmF0aW8gPCAuNSA/IHJhdGlvIDogMSAtIHJhdGlvKSxcbi8vIFx0XHRiID0gcmF0aW8gLSBvLFxuLy8gXHRcdGMgPSByYXRpbyArIG87XG4vLyBcdHJldHVybiBwID0+IHAgPT09IDEgPyBwIDogMyAqIGIgKiAoMSAtIHApICogKDEgLSBwKSAqIHAgKyAzICogYyAqICgxIC0gcCkgKiBwICogcCArIHAgKiBwICogcDtcbi8vIH07XG5cblxuX2ZvckVhY2hOYW1lKFwiTGluZWFyLFF1YWQsQ3ViaWMsUXVhcnQsUXVpbnQsU3Ryb25nXCIsIGZ1bmN0aW9uIChuYW1lLCBpKSB7XG4gIHZhciBwb3dlciA9IGkgPCA1ID8gaSArIDEgOiBpO1xuXG4gIF9pbnNlcnRFYXNlKG5hbWUgKyBcIixQb3dlclwiICsgKHBvd2VyIC0gMSksIGkgPyBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBNYXRoLnBvdyhwLCBwb3dlcik7XG4gIH0gOiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwO1xuICB9LCBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAxIC0gTWF0aC5wb3coMSAtIHAsIHBvd2VyKTtcbiAgfSwgZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcCA8IC41ID8gTWF0aC5wb3cocCAqIDIsIHBvd2VyKSAvIDIgOiAxIC0gTWF0aC5wb3coKDEgLSBwKSAqIDIsIHBvd2VyKSAvIDI7XG4gIH0pO1xufSk7XG5cbl9lYXNlTWFwLkxpbmVhci5lYXNlTm9uZSA9IF9lYXNlTWFwLm5vbmUgPSBfZWFzZU1hcC5MaW5lYXIuZWFzZUluO1xuXG5faW5zZXJ0RWFzZShcIkVsYXN0aWNcIiwgX2NvbmZpZ0VsYXN0aWMoXCJpblwiKSwgX2NvbmZpZ0VsYXN0aWMoXCJvdXRcIiksIF9jb25maWdFbGFzdGljKCkpO1xuXG4oZnVuY3Rpb24gKG4sIGMpIHtcbiAgdmFyIG4xID0gMSAvIGMsXG4gICAgICBuMiA9IDIgKiBuMSxcbiAgICAgIG4zID0gMi41ICogbjEsXG4gICAgICBlYXNlT3V0ID0gZnVuY3Rpb24gZWFzZU91dChwKSB7XG4gICAgcmV0dXJuIHAgPCBuMSA/IG4gKiBwICogcCA6IHAgPCBuMiA/IG4gKiBNYXRoLnBvdyhwIC0gMS41IC8gYywgMikgKyAuNzUgOiBwIDwgbjMgPyBuICogKHAgLT0gMi4yNSAvIGMpICogcCArIC45Mzc1IDogbiAqIE1hdGgucG93KHAgLSAyLjYyNSAvIGMsIDIpICsgLjk4NDM3NTtcbiAgfTtcblxuICBfaW5zZXJ0RWFzZShcIkJvdW5jZVwiLCBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAxIC0gZWFzZU91dCgxIC0gcCk7XG4gIH0sIGVhc2VPdXQpO1xufSkoNy41NjI1LCAyLjc1KTtcblxuX2luc2VydEVhc2UoXCJFeHBvXCIsIGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiBwID8gTWF0aC5wb3coMiwgMTAgKiAocCAtIDEpKSA6IDA7XG59KTtcblxuX2luc2VydEVhc2UoXCJDaXJjXCIsIGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiAtKF9zcXJ0KDEgLSBwICogcCkgLSAxKTtcbn0pO1xuXG5faW5zZXJ0RWFzZShcIlNpbmVcIiwgZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIHAgPT09IDEgPyAxIDogLV9jb3MocCAqIF9IQUxGX1BJKSArIDE7XG59KTtcblxuX2luc2VydEVhc2UoXCJCYWNrXCIsIF9jb25maWdCYWNrKFwiaW5cIiksIF9jb25maWdCYWNrKFwib3V0XCIpLCBfY29uZmlnQmFjaygpKTtcblxuX2Vhc2VNYXAuU3RlcHBlZEVhc2UgPSBfZWFzZU1hcC5zdGVwcyA9IF9nbG9iYWxzLlN0ZXBwZWRFYXNlID0ge1xuICBjb25maWc6IGZ1bmN0aW9uIGNvbmZpZyhzdGVwcywgaW1tZWRpYXRlU3RhcnQpIHtcbiAgICBpZiAoc3RlcHMgPT09IHZvaWQgMCkge1xuICAgICAgc3RlcHMgPSAxO1xuICAgIH1cblxuICAgIHZhciBwMSA9IDEgLyBzdGVwcyxcbiAgICAgICAgcDIgPSBzdGVwcyArIChpbW1lZGlhdGVTdGFydCA/IDAgOiAxKSxcbiAgICAgICAgcDMgPSBpbW1lZGlhdGVTdGFydCA/IDEgOiAwLFxuICAgICAgICBtYXggPSAxIC0gX3RpbnlOdW07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gKChwMiAqIF9jbGFtcCgwLCBtYXgsIHApIHwgMCkgKyBwMykgKiBwMTtcbiAgICB9O1xuICB9XG59O1xuX2RlZmF1bHRzLmVhc2UgPSBfZWFzZU1hcFtcInF1YWQub3V0XCJdO1xuXG5fZm9yRWFjaE5hbWUoXCJvbkNvbXBsZXRlLG9uVXBkYXRlLG9uU3RhcnQsb25SZXBlYXQsb25SZXZlcnNlQ29tcGxldGUsb25JbnRlcnJ1cHRcIiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIF9jYWxsYmFja05hbWVzICs9IG5hbWUgKyBcIixcIiArIG5hbWUgKyBcIlBhcmFtcyxcIjtcbn0pO1xuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDQUNIRVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5cbmV4cG9ydCB2YXIgR1NDYWNoZSA9IGZ1bmN0aW9uIEdTQ2FjaGUodGFyZ2V0LCBoYXJuZXNzKSB7XG4gIHRoaXMuaWQgPSBfZ3NJRCsrO1xuICB0YXJnZXQuX2dzYXAgPSB0aGlzO1xuICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgdGhpcy5oYXJuZXNzID0gaGFybmVzcztcbiAgdGhpcy5nZXQgPSBoYXJuZXNzID8gaGFybmVzcy5nZXQgOiBfZ2V0UHJvcGVydHk7XG4gIHRoaXMuc2V0ID0gaGFybmVzcyA/IGhhcm5lc3MuZ2V0U2V0dGVyIDogX2dldFNldHRlcjtcbn07XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFOSU1BVElPTlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5leHBvcnQgdmFyIEFuaW1hdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEFuaW1hdGlvbih2YXJzKSB7XG4gICAgdGhpcy52YXJzID0gdmFycztcbiAgICB0aGlzLl9kZWxheSA9ICt2YXJzLmRlbGF5IHx8IDA7XG5cbiAgICBpZiAodGhpcy5fcmVwZWF0ID0gdmFycy5yZXBlYXQgPT09IEluZmluaXR5ID8gLTIgOiB2YXJzLnJlcGVhdCB8fCAwKSB7XG4gICAgICAvLyBUT0RPOiByZXBlYXQ6IEluZmluaXR5IG9uIGEgdGltZWxpbmUncyBjaGlsZHJlbiBtdXN0IGZsYWcgdGhhdCB0aW1lbGluZSBpbnRlcm5hbGx5IGFuZCBhZmZlY3QgaXRzIHRvdGFsRHVyYXRpb24sIG90aGVyd2lzZSBpdCdsbCBzdG9wIGluIHRoZSBuZWdhdGl2ZSBkaXJlY3Rpb24gd2hlbiByZWFjaGluZyB0aGUgc3RhcnQuXG4gICAgICB0aGlzLl9yRGVsYXkgPSB2YXJzLnJlcGVhdERlbGF5IHx8IDA7XG4gICAgICB0aGlzLl95b3lvID0gISF2YXJzLnlveW8gfHwgISF2YXJzLnlveW9FYXNlO1xuICAgIH1cblxuICAgIHRoaXMuX3RzID0gMTtcblxuICAgIF9zZXREdXJhdGlvbih0aGlzLCArdmFycy5kdXJhdGlvbiwgMSwgMSk7XG5cbiAgICB0aGlzLmRhdGEgPSB2YXJzLmRhdGE7XG4gICAgX3RpY2tlckFjdGl2ZSB8fCBfdGlja2VyLndha2UoKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBBbmltYXRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5kZWxheSA9IGZ1bmN0aW9uIGRlbGF5KHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlIHx8IHZhbHVlID09PSAwKSB7XG4gICAgICB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5zbW9vdGhDaGlsZFRpbWluZyAmJiB0aGlzLnN0YXJ0VGltZSh0aGlzLl9zdGFydCArIHZhbHVlIC0gdGhpcy5fZGVsYXkpO1xuICAgICAgdGhpcy5fZGVsYXkgPSB2YWx1ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9kZWxheTtcbiAgfTtcblxuICBfcHJvdG8uZHVyYXRpb24gPSBmdW5jdGlvbiBkdXJhdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy50b3RhbER1cmF0aW9uKHRoaXMuX3JlcGVhdCA+IDAgPyB2YWx1ZSArICh2YWx1ZSArIHRoaXMuX3JEZWxheSkgKiB0aGlzLl9yZXBlYXQgOiB2YWx1ZSkgOiB0aGlzLnRvdGFsRHVyYXRpb24oKSAmJiB0aGlzLl9kdXI7XG4gIH07XG5cbiAgX3Byb3RvLnRvdGFsRHVyYXRpb24gPSBmdW5jdGlvbiB0b3RhbER1cmF0aW9uKHZhbHVlKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdER1cjtcbiAgICB9XG5cbiAgICB0aGlzLl9kaXJ0eSA9IDA7XG4gICAgcmV0dXJuIF9zZXREdXJhdGlvbih0aGlzLCB0aGlzLl9yZXBlYXQgPCAwID8gdmFsdWUgOiAodmFsdWUgLSB0aGlzLl9yZXBlYXQgKiB0aGlzLl9yRGVsYXkpIC8gKHRoaXMuX3JlcGVhdCArIDEpKTtcbiAgfTtcblxuICBfcHJvdG8udG90YWxUaW1lID0gZnVuY3Rpb24gdG90YWxUaW1lKF90b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgX3dha2UoKTtcblxuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RUaW1lO1xuICAgIH1cblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLl9kcDtcblxuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LnNtb290aENoaWxkVGltaW5nICYmIHRoaXMuX3RzKSB7XG4gICAgICBfYWxpZ25QbGF5aGVhZCh0aGlzLCBfdG90YWxUaW1lKTtcblxuICAgICAgIXBhcmVudC5fZHAgfHwgcGFyZW50LnBhcmVudCB8fCBfcG9zdEFkZENoZWNrcyhwYXJlbnQsIHRoaXMpOyAvLyBlZGdlIGNhc2U6IGlmIHRoaXMgaXMgYSBjaGlsZCBvZiBhIHRpbWVsaW5lIHRoYXQgYWxyZWFkeSBjb21wbGV0ZWQsIGZvciBleGFtcGxlLCB3ZSBtdXN0IHJlLWFjdGl2YXRlIHRoZSBwYXJlbnQuXG4gICAgICAvL2luIGNhc2UgYW55IG9mIHRoZSBhbmNlc3RvciB0aW1lbGluZXMgaGFkIGNvbXBsZXRlZCBidXQgc2hvdWxkIG5vdyBiZSBlbmFibGVkLCB3ZSBzaG91bGQgcmVzZXQgdGhlaXIgdG90YWxUaW1lKCkgd2hpY2ggd2lsbCBhbHNvIGVuc3VyZSB0aGF0IHRoZXkncmUgbGluZWQgdXAgcHJvcGVybHkgYW5kIGVuYWJsZWQuIFNraXAgZm9yIGFuaW1hdGlvbnMgdGhhdCBhcmUgb24gdGhlIHJvb3QgKHdhc3RlZnVsKS4gRXhhbXBsZTogYSBUaW1lbGluZUxpdGUuZXhwb3J0Um9vdCgpIGlzIHBlcmZvcm1lZCB3aGVuIHRoZXJlJ3MgYSBwYXVzZWQgdHdlZW4gb24gdGhlIHJvb3QsIHRoZSBleHBvcnQgd2lsbCBub3QgY29tcGxldGUgdW50aWwgdGhhdCB0d2VlbiBpcyB1bnBhdXNlZCwgYnV0IGltYWdpbmUgYSBjaGlsZCBnZXRzIHJlc3RhcnRlZCBsYXRlciwgYWZ0ZXIgYWxsIFt1bnBhdXNlZF0gdHdlZW5zIGhhdmUgY29tcGxldGVkLiBUaGUgc3RhcnQgb2YgdGhhdCBjaGlsZCB3b3VsZCBnZXQgcHVzaGVkIG91dCwgYnV0IG9uZSBvZiB0aGUgYW5jZXN0b3JzIG1heSBoYXZlIGNvbXBsZXRlZC5cblxuICAgICAgd2hpbGUgKHBhcmVudCAmJiBwYXJlbnQucGFyZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnQucGFyZW50Ll90aW1lICE9PSBwYXJlbnQuX3N0YXJ0ICsgKHBhcmVudC5fdHMgPj0gMCA/IHBhcmVudC5fdFRpbWUgLyBwYXJlbnQuX3RzIDogKHBhcmVudC50b3RhbER1cmF0aW9uKCkgLSBwYXJlbnQuX3RUaW1lKSAvIC1wYXJlbnQuX3RzKSkge1xuICAgICAgICAgIHBhcmVudC50b3RhbFRpbWUocGFyZW50Ll90VGltZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMucGFyZW50ICYmIHRoaXMuX2RwLmF1dG9SZW1vdmVDaGlsZHJlbiAmJiAodGhpcy5fdHMgPiAwICYmIF90b3RhbFRpbWUgPCB0aGlzLl90RHVyIHx8IHRoaXMuX3RzIDwgMCAmJiBfdG90YWxUaW1lID4gMCB8fCAhdGhpcy5fdER1ciAmJiAhX3RvdGFsVGltZSkpIHtcbiAgICAgICAgLy9pZiB0aGUgYW5pbWF0aW9uIGRvZXNuJ3QgaGF2ZSBhIHBhcmVudCwgcHV0IGl0IGJhY2sgaW50byBpdHMgbGFzdCBwYXJlbnQgKHJlY29yZGVkIGFzIF9kcCBmb3IgZXhhY3RseSBjYXNlcyBsaWtlIHRoaXMpLiBMaW1pdCB0byBwYXJlbnRzIHdpdGggYXV0b1JlbW92ZUNoaWxkcmVuIChsaWtlIGdsb2JhbFRpbWVsaW5lKSBzbyB0aGF0IGlmIHRoZSB1c2VyIG1hbnVhbGx5IHJlbW92ZXMgYW4gYW5pbWF0aW9uIGZyb20gYSB0aW1lbGluZSBhbmQgdGhlbiBhbHRlcnMgaXRzIHBsYXloZWFkLCBpdCBkb2Vzbid0IGdldCBhZGRlZCBiYWNrIGluLlxuICAgICAgICBfYWRkVG9UaW1lbGluZSh0aGlzLl9kcCwgdGhpcywgdGhpcy5fc3RhcnQgLSB0aGlzLl9kZWxheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3RUaW1lICE9PSBfdG90YWxUaW1lIHx8ICF0aGlzLl9kdXIgJiYgIXN1cHByZXNzRXZlbnRzIHx8IHRoaXMuX2luaXR0ZWQgJiYgTWF0aC5hYnModGhpcy5felRpbWUpID09PSBfdGlueU51bSB8fCAhX3RvdGFsVGltZSAmJiAhdGhpcy5faW5pdHRlZCAmJiAodGhpcy5hZGQgfHwgdGhpcy5fcHRMb29rdXApKSB7XG4gICAgICAvLyBjaGVjayBmb3IgX3B0TG9va3VwIG9uIGEgVHdlZW4gaW5zdGFuY2UgdG8gZW5zdXJlIGl0IGhhcyBhY3R1YWxseSBmaW5pc2hlZCBiZWluZyBpbnN0YW50aWF0ZWQsIG90aGVyd2lzZSBpZiB0aGlzLnJldmVyc2UoKSBnZXRzIGNhbGxlZCBpbiB0aGUgQW5pbWF0aW9uIGNvbnN0cnVjdG9yLCBpdCBjb3VsZCB0cmlnZ2VyIGEgcmVuZGVyKCkgaGVyZSBldmVuIHRob3VnaCB0aGUgX3RhcmdldHMgd2VyZW4ndCBwb3B1bGF0ZWQsIHRodXMgd2hlbiBfaW5pdCgpIGlzIGNhbGxlZCB0aGVyZSB3b24ndCBiZSBhbnkgUHJvcFR3ZWVucyAoaXQnbGwgYWN0IGxpa2UgdGhlIHR3ZWVuIGlzIG5vbi1mdW5jdGlvbmFsKVxuICAgICAgdGhpcy5fdHMgfHwgKHRoaXMuX3BUaW1lID0gX3RvdGFsVGltZSk7IC8vIG90aGVyd2lzZSwgaWYgYW4gYW5pbWF0aW9uIGlzIHBhdXNlZCwgdGhlbiB0aGUgcGxheWhlYWQgaXMgbW92ZWQgYmFjayB0byB6ZXJvLCB0aGVuIHJlc3VtZWQsIGl0J2QgcmV2ZXJ0IGJhY2sgdG8gdGhlIG9yaWdpbmFsIHRpbWUgYXQgdGhlIHBhdXNlXG4gICAgICAvL2lmICghdGhpcy5fbG9jaykgeyAvLyBhdm9pZCBlbmRsZXNzIHJlY3Vyc2lvbiAobm90IHN1cmUgd2UgbmVlZCB0aGlzIHlldCBvciBpZiBpdCdzIHdvcnRoIHRoZSBwZXJmb3JtYW5jZSBoaXQpXG4gICAgICAvLyAgIHRoaXMuX2xvY2sgPSAxO1xuXG4gICAgICBfbGF6eVNhZmVSZW5kZXIodGhpcywgX3RvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMpOyAvLyAgIHRoaXMuX2xvY2sgPSAwO1xuICAgICAgLy99XG5cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8udGltZSA9IGZ1bmN0aW9uIHRpbWUodmFsdWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnRvdGFsVGltZShNYXRoLm1pbih0aGlzLnRvdGFsRHVyYXRpb24oKSwgdmFsdWUgKyBfZWxhcHNlZEN5Y2xlRHVyYXRpb24odGhpcykpICUgKHRoaXMuX2R1ciArIHRoaXMuX3JEZWxheSkgfHwgKHZhbHVlID8gdGhpcy5fZHVyIDogMCksIHN1cHByZXNzRXZlbnRzKSA6IHRoaXMuX3RpbWU7IC8vIG5vdGU6IGlmIHRoZSBtb2R1bHVzIHJlc3VsdHMgaW4gMCwgdGhlIHBsYXloZWFkIGNvdWxkIGJlIGV4YWN0bHkgYXQgdGhlIGVuZCBvciB0aGUgYmVnaW5uaW5nLCBhbmQgd2UgYWx3YXlzIGRlZmVyIHRvIHRoZSBFTkQgd2l0aCBhIG5vbi16ZXJvIHZhbHVlLCBvdGhlcndpc2UgaWYgeW91IHNldCB0aGUgdGltZSgpIHRvIHRoZSB2ZXJ5IGVuZCAoZHVyYXRpb24oKSksIGl0IHdvdWxkIHJlbmRlciBhdCB0aGUgU1RBUlQhXG4gIH07XG5cbiAgX3Byb3RvLnRvdGFsUHJvZ3Jlc3MgPSBmdW5jdGlvbiB0b3RhbFByb2dyZXNzKHZhbHVlLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy50b3RhbFRpbWUodGhpcy50b3RhbER1cmF0aW9uKCkgKiB2YWx1ZSwgc3VwcHJlc3NFdmVudHMpIDogdGhpcy50b3RhbER1cmF0aW9uKCkgPyBNYXRoLm1pbigxLCB0aGlzLl90VGltZSAvIHRoaXMuX3REdXIpIDogdGhpcy5yYXRpbztcbiAgfTtcblxuICBfcHJvdG8ucHJvZ3Jlc3MgPSBmdW5jdGlvbiBwcm9ncmVzcyh2YWx1ZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMudG90YWxUaW1lKHRoaXMuZHVyYXRpb24oKSAqICh0aGlzLl95b3lvICYmICEodGhpcy5pdGVyYXRpb24oKSAmIDEpID8gMSAtIHZhbHVlIDogdmFsdWUpICsgX2VsYXBzZWRDeWNsZUR1cmF0aW9uKHRoaXMpLCBzdXBwcmVzc0V2ZW50cykgOiB0aGlzLmR1cmF0aW9uKCkgPyBNYXRoLm1pbigxLCB0aGlzLl90aW1lIC8gdGhpcy5fZHVyKSA6IHRoaXMucmF0aW87XG4gIH07XG5cbiAgX3Byb3RvLml0ZXJhdGlvbiA9IGZ1bmN0aW9uIGl0ZXJhdGlvbih2YWx1ZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICB2YXIgY3ljbGVEdXJhdGlvbiA9IHRoaXMuZHVyYXRpb24oKSArIHRoaXMuX3JEZWxheTtcblxuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy50b3RhbFRpbWUodGhpcy5fdGltZSArICh2YWx1ZSAtIDEpICogY3ljbGVEdXJhdGlvbiwgc3VwcHJlc3NFdmVudHMpIDogdGhpcy5fcmVwZWF0ID8gX2FuaW1hdGlvbkN5Y2xlKHRoaXMuX3RUaW1lLCBjeWNsZUR1cmF0aW9uKSArIDEgOiAxO1xuICB9IC8vIHBvdGVudGlhbCBmdXR1cmUgYWRkaXRpb246XG4gIC8vIGlzUGxheWluZ0JhY2t3YXJkcygpIHtcbiAgLy8gXHRsZXQgYW5pbWF0aW9uID0gdGhpcyxcbiAgLy8gXHRcdG9yaWVudGF0aW9uID0gMTsgLy8gMSA9IGZvcndhcmQsIC0xID0gYmFja3dhcmRcbiAgLy8gXHR3aGlsZSAoYW5pbWF0aW9uKSB7XG4gIC8vIFx0XHRvcmllbnRhdGlvbiAqPSBhbmltYXRpb24ucmV2ZXJzZWQoKSB8fCAoYW5pbWF0aW9uLnJlcGVhdCgpICYmICEoYW5pbWF0aW9uLml0ZXJhdGlvbigpICYgMSkpID8gLTEgOiAxO1xuICAvLyBcdFx0YW5pbWF0aW9uID0gYW5pbWF0aW9uLnBhcmVudDtcbiAgLy8gXHR9XG4gIC8vIFx0cmV0dXJuIG9yaWVudGF0aW9uIDwgMDtcbiAgLy8gfVxuICA7XG5cbiAgX3Byb3RvLnRpbWVTY2FsZSA9IGZ1bmN0aW9uIHRpbWVTY2FsZSh2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3J0cyA9PT0gLV90aW55TnVtID8gMCA6IHRoaXMuX3J0czsgLy8gcmVjb3JkZWQgdGltZVNjYWxlLiBTcGVjaWFsIGNhc2U6IGlmIHNvbWVvbmUgY2FsbHMgcmV2ZXJzZSgpIG9uIGFuIGFuaW1hdGlvbiB3aXRoIHRpbWVTY2FsZSBvZiAwLCB3ZSBhc3NpZ24gaXQgLV90aW55TnVtIHRvIHJlbWVtYmVyIGl0J3MgcmV2ZXJzZWQuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3J0cyA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHZhciB0VGltZSA9IHRoaXMucGFyZW50ICYmIHRoaXMuX3RzID8gX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUodGhpcy5wYXJlbnQuX3RpbWUsIHRoaXMpIDogdGhpcy5fdFRpbWU7IC8vIG1ha2Ugc3VyZSB0byBkbyB0aGUgcGFyZW50VG9DaGlsZFRvdGFsVGltZSgpIEJFRk9SRSBzZXR0aW5nIHRoZSBuZXcgX3RzIGJlY2F1c2UgdGhlIG9sZCBvbmUgbXVzdCBiZSB1c2VkIGluIHRoYXQgY2FsY3VsYXRpb24uXG4gICAgLy8gZnV0dXJlIGFkZGl0aW9uPyBVcCBzaWRlOiBmYXN0IGFuZCBtaW5pbWFsIGZpbGUgc2l6ZS4gRG93biBzaWRlOiBvbmx5IHdvcmtzIG9uIHRoaXMgYW5pbWF0aW9uOyBpZiBhIHRpbWVsaW5lIGlzIHJldmVyc2VkLCBmb3IgZXhhbXBsZSwgaXRzIGNoaWxkcmVucycgb25SZXZlcnNlIHdvdWxkbid0IGdldCBjYWxsZWQuXG4gICAgLy8oK3ZhbHVlIDwgMCAmJiB0aGlzLl9ydHMgPj0gMCkgJiYgX2NhbGxiYWNrKHRoaXMsIFwib25SZXZlcnNlXCIsIHRydWUpO1xuICAgIC8vIHByaW9yaXRpemUgcmVuZGVyaW5nIHdoZXJlIHRoZSBwYXJlbnQncyBwbGF5aGVhZCBsaW5lcyB1cCBpbnN0ZWFkIG9mIHRoaXMuX3RUaW1lIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgYSB0d2VlbiB0aGF0J3MgYW5pbWF0aW5nIGFub3RoZXIgdHdlZW4ncyB0aW1lU2NhbGUgaW4gdGhlIHNhbWUgcmVuZGVyaW5nIGxvb3AgKHNhbWUgcGFyZW50KSwgdGh1cyBpZiB0aGUgdGltZVNjYWxlIHR3ZWVuIHJlbmRlcnMgZmlyc3QsIGl0IHdvdWxkIGFsdGVyIF9zdGFydCBCRUZPUkUgX3RUaW1lIHdhcyBzZXQgb24gdGhhdCB0aWNrIChpbiB0aGUgcmVuZGVyaW5nIGxvb3ApLCBlZmZlY3RpdmVseSBmcmVlemluZyBpdCB1bnRpbCB0aGUgdGltZVNjYWxlIHR3ZWVuIGZpbmlzaGVzLlxuXG4gICAgdGhpcy5fcnRzID0gK3ZhbHVlIHx8IDA7XG4gICAgdGhpcy5fdHMgPSB0aGlzLl9wcyB8fCB2YWx1ZSA9PT0gLV90aW55TnVtID8gMCA6IHRoaXMuX3J0czsgLy8gX3RzIGlzIHRoZSBmdW5jdGlvbmFsIHRpbWVTY2FsZSB3aGljaCB3b3VsZCBiZSAwIGlmIHRoZSBhbmltYXRpb24gaXMgcGF1c2VkLlxuXG4gICAgX3JlY2FjaGVBbmNlc3RvcnModGhpcy50b3RhbFRpbWUoX2NsYW1wKC10aGlzLl9kZWxheSwgdGhpcy5fdER1ciwgdFRpbWUpLCB0cnVlKSk7XG5cbiAgICBfc2V0RW5kKHRoaXMpOyAvLyBpZiBwYXJlbnQuc21vb3RoQ2hpbGRUaW1pbmcgd2FzIGZhbHNlLCB0aGUgZW5kIHRpbWUgZGlkbid0IGdldCB1cGRhdGVkIGluIHRoZSBfYWxpZ25QbGF5aGVhZCgpIG1ldGhvZCwgc28gZG8gaXQgaGVyZS5cblxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnBhdXNlZCA9IGZ1bmN0aW9uIHBhdXNlZCh2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3BzO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wcyAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX3BzID0gdmFsdWU7XG5cbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9wVGltZSA9IHRoaXMuX3RUaW1lIHx8IE1hdGgubWF4KC10aGlzLl9kZWxheSwgdGhpcy5yYXdUaW1lKCkpOyAvLyBpZiB0aGUgcGF1c2Ugb2NjdXJzIGR1cmluZyB0aGUgZGVsYXkgcGhhc2UsIG1ha2Ugc3VyZSB0aGF0J3MgZmFjdG9yZWQgaW4gd2hlbiByZXN1bWluZy5cblxuICAgICAgICB0aGlzLl90cyA9IHRoaXMuX2FjdCA9IDA7IC8vIF90cyBpcyB0aGUgZnVuY3Rpb25hbCB0aW1lU2NhbGUsIHNvIGEgcGF1c2VkIHR3ZWVuIHdvdWxkIGVmZmVjdGl2ZWx5IGhhdmUgYSB0aW1lU2NhbGUgb2YgMC4gV2UgcmVjb3JkIHRoZSBcInJlYWxcIiB0aW1lU2NhbGUgYXMgX3J0cyAocmVjb3JkZWQgdGltZSBzY2FsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF93YWtlKCk7XG5cbiAgICAgICAgdGhpcy5fdHMgPSB0aGlzLl9ydHM7IC8vb25seSBkZWZlciB0byBfcFRpbWUgKHBhdXNlVGltZSkgaWYgdFRpbWUgaXMgemVyby4gUmVtZW1iZXIsIHNvbWVvbmUgY291bGQgcGF1c2UoKSBhbiBhbmltYXRpb24sIHRoZW4gc2NydWIgdGhlIHBsYXloZWFkIGFuZCByZXN1bWUoKS4gSWYgdGhlIHBhcmVudCBkb2Vzbid0IGhhdmUgc21vb3RoQ2hpbGRUaW1pbmcsIHdlIHJlbmRlciBhdCB0aGUgcmF3VGltZSgpIGJlY2F1c2UgdGhlIHN0YXJ0VGltZSB3b24ndCBnZXQgdXBkYXRlZC5cblxuICAgICAgICB0aGlzLnRvdGFsVGltZSh0aGlzLnBhcmVudCAmJiAhdGhpcy5wYXJlbnQuc21vb3RoQ2hpbGRUaW1pbmcgPyB0aGlzLnJhd1RpbWUoKSA6IHRoaXMuX3RUaW1lIHx8IHRoaXMuX3BUaW1lLCB0aGlzLnByb2dyZXNzKCkgPT09IDEgJiYgTWF0aC5hYnModGhpcy5felRpbWUpICE9PSBfdGlueU51bSAmJiAodGhpcy5fdFRpbWUgLT0gX3RpbnlOdW0pKTsgLy8gZWRnZSBjYXNlOiBhbmltYXRpb24ucHJvZ3Jlc3MoMSkucGF1c2UoKS5wbGF5KCkgd291bGRuJ3QgcmVuZGVyIGFnYWluIGJlY2F1c2UgdGhlIHBsYXloZWFkIGlzIGFscmVhZHkgYXQgdGhlIGVuZCwgYnV0IHRoZSBjYWxsIHRvIHRvdGFsVGltZSgpIGJlbG93IHdpbGwgYWRkIGl0IGJhY2sgdG8gaXRzIHBhcmVudC4uLmFuZCBub3QgcmVtb3ZlIGl0IGFnYWluIChzaW5jZSByZW1vdmluZyBvbmx5IGhhcHBlbnMgdXBvbiByZW5kZXJpbmcgYXQgYSBuZXcgdGltZSkuIE9mZnNldHRpbmcgdGhlIF90VGltZSBzbGlnaHRseSBpcyBkb25lIHNpbXBseSB0byBjYXVzZSB0aGUgZmluYWwgcmVuZGVyIGluIHRvdGFsVGltZSgpIHRoYXQnbGwgcG9wIGl0IG9mZiBpdHMgdGltZWxpbmUgKGlmIGF1dG9SZW1vdmVDaGlsZHJlbiBpcyB0cnVlLCBvZiBjb3Vyc2UpLiBDaGVjayB0byBtYWtlIHN1cmUgX3pUaW1lIGlzbid0IC1fdGlueU51bSB0byBhdm9pZCBhbiBlZGdlIGNhc2Ugd2hlcmUgdGhlIHBsYXloZWFkIGlzIHB1c2hlZCB0byB0aGUgZW5kIGJ1dCBJTlNJREUgYSB0d2Vlbi9jYWxsYmFjaywgdGhlIHRpbWVsaW5lIGl0c2VsZiBpcyBwYXVzZWQgdGh1cyBoYWx0aW5nIHJlbmRlcmluZyBhbmQgbGVhdmluZyBhIGZldyB1bnJlbmRlcmVkLiBXaGVuIHJlc3VtaW5nLCBpdCB3b3VsZG4ndCByZW5kZXIgdGhvc2Ugb3RoZXJ3aXNlLlxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5zdGFydFRpbWUgPSBmdW5jdGlvbiBzdGFydFRpbWUodmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fc3RhcnQgPSB2YWx1ZTtcbiAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudCB8fCB0aGlzLl9kcDtcbiAgICAgIHBhcmVudCAmJiAocGFyZW50Ll9zb3J0IHx8ICF0aGlzLnBhcmVudCkgJiYgX2FkZFRvVGltZWxpbmUocGFyZW50LCB0aGlzLCB2YWx1ZSAtIHRoaXMuX2RlbGF5KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9zdGFydDtcbiAgfTtcblxuICBfcHJvdG8uZW5kVGltZSA9IGZ1bmN0aW9uIGVuZFRpbWUoaW5jbHVkZVJlcGVhdHMpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnQgKyAoX2lzTm90RmFsc2UoaW5jbHVkZVJlcGVhdHMpID8gdGhpcy50b3RhbER1cmF0aW9uKCkgOiB0aGlzLmR1cmF0aW9uKCkpIC8gTWF0aC5hYnModGhpcy5fdHMgfHwgMSk7XG4gIH07XG5cbiAgX3Byb3RvLnJhd1RpbWUgPSBmdW5jdGlvbiByYXdUaW1lKHdyYXBSZXBlYXRzKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50IHx8IHRoaXMuX2RwOyAvLyBfZHAgPSBkZXRhY2hlZCBwYXJlbnRcblxuICAgIHJldHVybiAhcGFyZW50ID8gdGhpcy5fdFRpbWUgOiB3cmFwUmVwZWF0cyAmJiAoIXRoaXMuX3RzIHx8IHRoaXMuX3JlcGVhdCAmJiB0aGlzLl90aW1lICYmIHRoaXMudG90YWxQcm9ncmVzcygpIDwgMSkgPyB0aGlzLl90VGltZSAlICh0aGlzLl9kdXIgKyB0aGlzLl9yRGVsYXkpIDogIXRoaXMuX3RzID8gdGhpcy5fdFRpbWUgOiBfcGFyZW50VG9DaGlsZFRvdGFsVGltZShwYXJlbnQucmF3VGltZSh3cmFwUmVwZWF0cyksIHRoaXMpO1xuICB9O1xuXG4gIF9wcm90by5nbG9iYWxUaW1lID0gZnVuY3Rpb24gZ2xvYmFsVGltZShyYXdUaW1lKSB7XG4gICAgdmFyIGFuaW1hdGlvbiA9IHRoaXMsXG4gICAgICAgIHRpbWUgPSBhcmd1bWVudHMubGVuZ3RoID8gcmF3VGltZSA6IGFuaW1hdGlvbi5yYXdUaW1lKCk7XG5cbiAgICB3aGlsZSAoYW5pbWF0aW9uKSB7XG4gICAgICB0aW1lID0gYW5pbWF0aW9uLl9zdGFydCArIHRpbWUgLyAoYW5pbWF0aW9uLl90cyB8fCAxKTtcbiAgICAgIGFuaW1hdGlvbiA9IGFuaW1hdGlvbi5fZHA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRpbWU7XG4gIH07XG5cbiAgX3Byb3RvLnJlcGVhdCA9IGZ1bmN0aW9uIHJlcGVhdCh2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9yZXBlYXQgPSB2YWx1ZSA9PT0gSW5maW5pdHkgPyAtMiA6IHZhbHVlO1xuICAgICAgcmV0dXJuIF9vblVwZGF0ZVRvdGFsRHVyYXRpb24odGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3JlcGVhdCA9PT0gLTIgPyBJbmZpbml0eSA6IHRoaXMuX3JlcGVhdDtcbiAgfTtcblxuICBfcHJvdG8ucmVwZWF0RGVsYXkgPSBmdW5jdGlvbiByZXBlYXREZWxheSh2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICB2YXIgdGltZSA9IHRoaXMuX3RpbWU7XG4gICAgICB0aGlzLl9yRGVsYXkgPSB2YWx1ZTtcblxuICAgICAgX29uVXBkYXRlVG90YWxEdXJhdGlvbih0aGlzKTtcblxuICAgICAgcmV0dXJuIHRpbWUgPyB0aGlzLnRpbWUodGltZSkgOiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9yRGVsYXk7XG4gIH07XG5cbiAgX3Byb3RvLnlveW8gPSBmdW5jdGlvbiB5b3lvKHZhbHVlKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3lveW8gPSB2YWx1ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl95b3lvO1xuICB9O1xuXG4gIF9wcm90by5zZWVrID0gZnVuY3Rpb24gc2Vlayhwb3NpdGlvbiwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICByZXR1cm4gdGhpcy50b3RhbFRpbWUoX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24pLCBfaXNOb3RGYWxzZShzdXBwcmVzc0V2ZW50cykpO1xuICB9O1xuXG4gIF9wcm90by5yZXN0YXJ0ID0gZnVuY3Rpb24gcmVzdGFydChpbmNsdWRlRGVsYXksIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheSgpLnRvdGFsVGltZShpbmNsdWRlRGVsYXkgPyAtdGhpcy5fZGVsYXkgOiAwLCBfaXNOb3RGYWxzZShzdXBwcmVzc0V2ZW50cykpO1xuICB9O1xuXG4gIF9wcm90by5wbGF5ID0gZnVuY3Rpb24gcGxheShmcm9tLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIGZyb20gIT0gbnVsbCAmJiB0aGlzLnNlZWsoZnJvbSwgc3VwcHJlc3NFdmVudHMpO1xuICAgIHJldHVybiB0aGlzLnJldmVyc2VkKGZhbHNlKS5wYXVzZWQoZmFsc2UpO1xuICB9O1xuXG4gIF9wcm90by5yZXZlcnNlID0gZnVuY3Rpb24gcmV2ZXJzZShmcm9tLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIGZyb20gIT0gbnVsbCAmJiB0aGlzLnNlZWsoZnJvbSB8fCB0aGlzLnRvdGFsRHVyYXRpb24oKSwgc3VwcHJlc3NFdmVudHMpO1xuICAgIHJldHVybiB0aGlzLnJldmVyc2VkKHRydWUpLnBhdXNlZChmYWxzZSk7XG4gIH07XG5cbiAgX3Byb3RvLnBhdXNlID0gZnVuY3Rpb24gcGF1c2UoYXRUaW1lLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIGF0VGltZSAhPSBudWxsICYmIHRoaXMuc2VlayhhdFRpbWUsIHN1cHByZXNzRXZlbnRzKTtcbiAgICByZXR1cm4gdGhpcy5wYXVzZWQodHJ1ZSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlc3VtZSA9IGZ1bmN0aW9uIHJlc3VtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXVzZWQoZmFsc2UpO1xuICB9O1xuXG4gIF9wcm90by5yZXZlcnNlZCA9IGZ1bmN0aW9uIHJldmVyc2VkKHZhbHVlKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICEhdmFsdWUgIT09IHRoaXMucmV2ZXJzZWQoKSAmJiB0aGlzLnRpbWVTY2FsZSgtdGhpcy5fcnRzIHx8ICh2YWx1ZSA/IC1fdGlueU51bSA6IDApKTsgLy8gaW4gY2FzZSB0aW1lU2NhbGUgaXMgemVybywgcmV2ZXJzaW5nIHdvdWxkIGhhdmUgbm8gZWZmZWN0IHNvIHdlIHVzZSBfdGlueU51bS5cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3J0cyA8IDA7XG4gIH07XG5cbiAgX3Byb3RvLmludmFsaWRhdGUgPSBmdW5jdGlvbiBpbnZhbGlkYXRlKCkge1xuICAgIHRoaXMuX2luaXR0ZWQgPSB0aGlzLl9hY3QgPSAwO1xuICAgIHRoaXMuX3pUaW1lID0gLV90aW55TnVtO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5pc0FjdGl2ZSA9IGZ1bmN0aW9uIGlzQWN0aXZlKCkge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudCB8fCB0aGlzLl9kcCxcbiAgICAgICAgc3RhcnQgPSB0aGlzLl9zdGFydCxcbiAgICAgICAgcmF3VGltZTtcbiAgICByZXR1cm4gISEoIXBhcmVudCB8fCB0aGlzLl90cyAmJiB0aGlzLl9pbml0dGVkICYmIHBhcmVudC5pc0FjdGl2ZSgpICYmIChyYXdUaW1lID0gcGFyZW50LnJhd1RpbWUodHJ1ZSkpID49IHN0YXJ0ICYmIHJhd1RpbWUgPCB0aGlzLmVuZFRpbWUodHJ1ZSkgLSBfdGlueU51bSk7XG4gIH07XG5cbiAgX3Byb3RvLmV2ZW50Q2FsbGJhY2sgPSBmdW5jdGlvbiBldmVudENhbGxiYWNrKHR5cGUsIGNhbGxiYWNrLCBwYXJhbXMpIHtcbiAgICB2YXIgdmFycyA9IHRoaXMudmFycztcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICBkZWxldGUgdmFyc1t0eXBlXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhcnNbdHlwZV0gPSBjYWxsYmFjaztcbiAgICAgICAgcGFyYW1zICYmICh2YXJzW3R5cGUgKyBcIlBhcmFtc1wiXSA9IHBhcmFtcyk7XG4gICAgICAgIHR5cGUgPT09IFwib25VcGRhdGVcIiAmJiAodGhpcy5fb25VcGRhdGUgPSBjYWxsYmFjayk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJzW3R5cGVdO1xuICB9O1xuXG4gIF9wcm90by50aGVuID0gZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIHZhciBmID0gX2lzRnVuY3Rpb24ob25GdWxmaWxsZWQpID8gb25GdWxmaWxsZWQgOiBfcGFzc1Rocm91Z2gsXG4gICAgICAgICAgX3Jlc29sdmUgPSBmdW5jdGlvbiBfcmVzb2x2ZSgpIHtcbiAgICAgICAgdmFyIF90aGVuID0gc2VsZi50aGVuO1xuICAgICAgICBzZWxmLnRoZW4gPSBudWxsOyAvLyB0ZW1wb3JhcmlseSBudWxsIHRoZSB0aGVuKCkgbWV0aG9kIHRvIGF2b2lkIGFuIGluZmluaXRlIGxvb3AgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vZ3JlZW5zb2NrL0dTQVAvaXNzdWVzLzMyMilcblxuICAgICAgICBfaXNGdW5jdGlvbihmKSAmJiAoZiA9IGYoc2VsZikpICYmIChmLnRoZW4gfHwgZiA9PT0gc2VsZikgJiYgKHNlbGYudGhlbiA9IF90aGVuKTtcbiAgICAgICAgcmVzb2x2ZShmKTtcbiAgICAgICAgc2VsZi50aGVuID0gX3RoZW47XG4gICAgICB9O1xuXG4gICAgICBpZiAoc2VsZi5faW5pdHRlZCAmJiBzZWxmLnRvdGFsUHJvZ3Jlc3MoKSA9PT0gMSAmJiBzZWxmLl90cyA+PSAwIHx8ICFzZWxmLl90VGltZSAmJiBzZWxmLl90cyA8IDApIHtcbiAgICAgICAgX3Jlc29sdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuX3Byb20gPSBfcmVzb2x2ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ua2lsbCA9IGZ1bmN0aW9uIGtpbGwoKSB7XG4gICAgX2ludGVycnVwdCh0aGlzKTtcbiAgfTtcblxuICByZXR1cm4gQW5pbWF0aW9uO1xufSgpO1xuXG5fc2V0RGVmYXVsdHMoQW5pbWF0aW9uLnByb3RvdHlwZSwge1xuICBfdGltZTogMCxcbiAgX3N0YXJ0OiAwLFxuICBfZW5kOiAwLFxuICBfdFRpbWU6IDAsXG4gIF90RHVyOiAwLFxuICBfZGlydHk6IDAsXG4gIF9yZXBlYXQ6IDAsXG4gIF95b3lvOiBmYWxzZSxcbiAgcGFyZW50OiBudWxsLFxuICBfaW5pdHRlZDogZmFsc2UsXG4gIF9yRGVsYXk6IDAsXG4gIF90czogMSxcbiAgX2RwOiAwLFxuICByYXRpbzogMCxcbiAgX3pUaW1lOiAtX3RpbnlOdW0sXG4gIF9wcm9tOiAwLFxuICBfcHM6IGZhbHNlLFxuICBfcnRzOiAxXG59KTtcbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBUSU1FTElORVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cblxuZXhwb3J0IHZhciBUaW1lbGluZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0FuaW1hdGlvbikge1xuICBfaW5oZXJpdHNMb29zZShUaW1lbGluZSwgX0FuaW1hdGlvbik7XG5cbiAgZnVuY3Rpb24gVGltZWxpbmUodmFycywgcG9zaXRpb24pIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBpZiAodmFycyA9PT0gdm9pZCAwKSB7XG4gICAgICB2YXJzID0ge307XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfQW5pbWF0aW9uLmNhbGwodGhpcywgdmFycykgfHwgdGhpcztcbiAgICBfdGhpcy5sYWJlbHMgPSB7fTtcbiAgICBfdGhpcy5zbW9vdGhDaGlsZFRpbWluZyA9ICEhdmFycy5zbW9vdGhDaGlsZFRpbWluZztcbiAgICBfdGhpcy5hdXRvUmVtb3ZlQ2hpbGRyZW4gPSAhIXZhcnMuYXV0b1JlbW92ZUNoaWxkcmVuO1xuICAgIF90aGlzLl9zb3J0ID0gX2lzTm90RmFsc2UodmFycy5zb3J0Q2hpbGRyZW4pO1xuICAgIF9nbG9iYWxUaW1lbGluZSAmJiBfYWRkVG9UaW1lbGluZSh2YXJzLnBhcmVudCB8fCBfZ2xvYmFsVGltZWxpbmUsIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBwb3NpdGlvbik7XG4gICAgdmFycy5yZXZlcnNlZCAmJiBfdGhpcy5yZXZlcnNlKCk7XG4gICAgdmFycy5wYXVzZWQgJiYgX3RoaXMucGF1c2VkKHRydWUpO1xuICAgIHZhcnMuc2Nyb2xsVHJpZ2dlciAmJiBfc2Nyb2xsVHJpZ2dlcihfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgdmFycy5zY3JvbGxUcmlnZ2VyKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvMiA9IFRpbWVsaW5lLnByb3RvdHlwZTtcblxuICBfcHJvdG8yLnRvID0gZnVuY3Rpb24gdG8odGFyZ2V0cywgdmFycywgcG9zaXRpb24pIHtcbiAgICBfY3JlYXRlVHdlZW5UeXBlKDAsIGFyZ3VtZW50cywgdGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLmZyb20gPSBmdW5jdGlvbiBmcm9tKHRhcmdldHMsIHZhcnMsIHBvc2l0aW9uKSB7XG4gICAgX2NyZWF0ZVR3ZWVuVHlwZSgxLCBhcmd1bWVudHMsIHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5mcm9tVG8gPSBmdW5jdGlvbiBmcm9tVG8odGFyZ2V0cywgZnJvbVZhcnMsIHRvVmFycywgcG9zaXRpb24pIHtcbiAgICBfY3JlYXRlVHdlZW5UeXBlKDIsIGFyZ3VtZW50cywgdGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLnNldCA9IGZ1bmN0aW9uIHNldCh0YXJnZXRzLCB2YXJzLCBwb3NpdGlvbikge1xuICAgIHZhcnMuZHVyYXRpb24gPSAwO1xuICAgIHZhcnMucGFyZW50ID0gdGhpcztcbiAgICBfaW5oZXJpdERlZmF1bHRzKHZhcnMpLnJlcGVhdERlbGF5IHx8ICh2YXJzLnJlcGVhdCA9IDApO1xuICAgIHZhcnMuaW1tZWRpYXRlUmVuZGVyID0gISF2YXJzLmltbWVkaWF0ZVJlbmRlcjtcbiAgICBuZXcgVHdlZW4odGFyZ2V0cywgdmFycywgX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24pLCAxKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLmNhbGwgPSBmdW5jdGlvbiBjYWxsKGNhbGxiYWNrLCBwYXJhbXMsIHBvc2l0aW9uKSB7XG4gICAgcmV0dXJuIF9hZGRUb1RpbWVsaW5lKHRoaXMsIFR3ZWVuLmRlbGF5ZWRDYWxsKDAsIGNhbGxiYWNrLCBwYXJhbXMpLCBwb3NpdGlvbik7XG4gIH0gLy9PTkxZIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5ISBNYXliZSBkZWxldGU/XG4gIDtcblxuICBfcHJvdG8yLnN0YWdnZXJUbyA9IGZ1bmN0aW9uIHN0YWdnZXJUbyh0YXJnZXRzLCBkdXJhdGlvbiwgdmFycywgc3RhZ2dlciwgcG9zaXRpb24sIG9uQ29tcGxldGVBbGwsIG9uQ29tcGxldGVBbGxQYXJhbXMpIHtcbiAgICB2YXJzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgdmFycy5zdGFnZ2VyID0gdmFycy5zdGFnZ2VyIHx8IHN0YWdnZXI7XG4gICAgdmFycy5vbkNvbXBsZXRlID0gb25Db21wbGV0ZUFsbDtcbiAgICB2YXJzLm9uQ29tcGxldGVQYXJhbXMgPSBvbkNvbXBsZXRlQWxsUGFyYW1zO1xuICAgIHZhcnMucGFyZW50ID0gdGhpcztcbiAgICBuZXcgVHdlZW4odGFyZ2V0cywgdmFycywgX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24pKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLnN0YWdnZXJGcm9tID0gZnVuY3Rpb24gc3RhZ2dlckZyb20odGFyZ2V0cywgZHVyYXRpb24sIHZhcnMsIHN0YWdnZXIsIHBvc2l0aW9uLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zKSB7XG4gICAgdmFycy5ydW5CYWNrd2FyZHMgPSAxO1xuICAgIF9pbmhlcml0RGVmYXVsdHModmFycykuaW1tZWRpYXRlUmVuZGVyID0gX2lzTm90RmFsc2UodmFycy5pbW1lZGlhdGVSZW5kZXIpO1xuICAgIHJldHVybiB0aGlzLnN0YWdnZXJUbyh0YXJnZXRzLCBkdXJhdGlvbiwgdmFycywgc3RhZ2dlciwgcG9zaXRpb24sIG9uQ29tcGxldGVBbGwsIG9uQ29tcGxldGVBbGxQYXJhbXMpO1xuICB9O1xuXG4gIF9wcm90bzIuc3RhZ2dlckZyb21UbyA9IGZ1bmN0aW9uIHN0YWdnZXJGcm9tVG8odGFyZ2V0cywgZHVyYXRpb24sIGZyb21WYXJzLCB0b1ZhcnMsIHN0YWdnZXIsIHBvc2l0aW9uLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zKSB7XG4gICAgdG9WYXJzLnN0YXJ0QXQgPSBmcm9tVmFycztcbiAgICBfaW5oZXJpdERlZmF1bHRzKHRvVmFycykuaW1tZWRpYXRlUmVuZGVyID0gX2lzTm90RmFsc2UodG9WYXJzLmltbWVkaWF0ZVJlbmRlcik7XG4gICAgcmV0dXJuIHRoaXMuc3RhZ2dlclRvKHRhcmdldHMsIGR1cmF0aW9uLCB0b1ZhcnMsIHN0YWdnZXIsIHBvc2l0aW9uLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zKTtcbiAgfTtcblxuICBfcHJvdG8yLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSkge1xuICAgIHZhciBwcmV2VGltZSA9IHRoaXMuX3RpbWUsXG4gICAgICAgIHREdXIgPSB0aGlzLl9kaXJ0eSA/IHRoaXMudG90YWxEdXJhdGlvbigpIDogdGhpcy5fdER1cixcbiAgICAgICAgZHVyID0gdGhpcy5fZHVyLFxuICAgICAgICB0VGltZSA9IHRvdGFsVGltZSA8PSAwID8gMCA6IF9yb3VuZFByZWNpc2UodG90YWxUaW1lKSxcbiAgICAgICAgLy8gaWYgYSBwYXVzZWQgdGltZWxpbmUgaXMgcmVzdW1lZCAob3IgaXRzIF9zdGFydCBpcyB1cGRhdGVkIGZvciBhbm90aGVyIHJlYXNvbi4uLndoaWNoIHJvdW5kcyBpdCksIHRoYXQgY291bGQgcmVzdWx0IGluIHRoZSBwbGF5aGVhZCBzaGlmdGluZyBhICoqdGlueSoqIGFtb3VudCBhbmQgYSB6ZXJvLWR1cmF0aW9uIGNoaWxkIGF0IHRoYXQgc3BvdCBtYXkgZ2V0IHJlbmRlcmVkIGF0IGEgZGlmZmVyZW50IHJhdGlvLCBsaWtlIGl0cyB0b3RhbFRpbWUgaW4gcmVuZGVyKCkgbWF5IGJlIDFlLTE3IGluc3RlYWQgb2YgMCwgZm9yIGV4YW1wbGUuXG4gICAgY3Jvc3NpbmdTdGFydCA9IHRoaXMuX3pUaW1lIDwgMCAhPT0gdG90YWxUaW1lIDwgMCAmJiAodGhpcy5faW5pdHRlZCB8fCAhZHVyKSxcbiAgICAgICAgdGltZSxcbiAgICAgICAgY2hpbGQsXG4gICAgICAgIG5leHQsXG4gICAgICAgIGl0ZXJhdGlvbixcbiAgICAgICAgY3ljbGVEdXJhdGlvbixcbiAgICAgICAgcHJldlBhdXNlZCxcbiAgICAgICAgcGF1c2VUd2VlbixcbiAgICAgICAgdGltZVNjYWxlLFxuICAgICAgICBwcmV2U3RhcnQsXG4gICAgICAgIHByZXZJdGVyYXRpb24sXG4gICAgICAgIHlveW8sXG4gICAgICAgIGlzWW95bztcbiAgICB0aGlzICE9PSBfZ2xvYmFsVGltZWxpbmUgJiYgdFRpbWUgPiB0RHVyICYmIHRvdGFsVGltZSA+PSAwICYmICh0VGltZSA9IHREdXIpO1xuXG4gICAgaWYgKHRUaW1lICE9PSB0aGlzLl90VGltZSB8fCBmb3JjZSB8fCBjcm9zc2luZ1N0YXJ0KSB7XG4gICAgICBpZiAocHJldlRpbWUgIT09IHRoaXMuX3RpbWUgJiYgZHVyKSB7XG4gICAgICAgIC8vaWYgdG90YWxEdXJhdGlvbigpIGZpbmRzIGEgY2hpbGQgd2l0aCBhIG5lZ2F0aXZlIHN0YXJ0VGltZSBhbmQgc21vb3RoQ2hpbGRUaW1pbmcgaXMgdHJ1ZSwgdGhpbmdzIGdldCBzaGlmdGVkIGFyb3VuZCBpbnRlcm5hbGx5IHNvIHdlIG5lZWQgdG8gYWRqdXN0IHRoZSB0aW1lIGFjY29yZGluZ2x5LiBGb3IgZXhhbXBsZSwgaWYgYSB0d2VlbiBzdGFydHMgYXQgLTMwIHdlIG11c3Qgc2hpZnQgRVZFUllUSElORyBmb3J3YXJkIDMwIHNlY29uZHMgYW5kIG1vdmUgdGhpcyB0aW1lbGluZSdzIHN0YXJ0VGltZSBiYWNrd2FyZCBieSAzMCBzZWNvbmRzIHNvIHRoYXQgdGhpbmdzIGFsaWduIHdpdGggdGhlIHBsYXloZWFkIChubyBqdW1wKS5cbiAgICAgICAgdFRpbWUgKz0gdGhpcy5fdGltZSAtIHByZXZUaW1lO1xuICAgICAgICB0b3RhbFRpbWUgKz0gdGhpcy5fdGltZSAtIHByZXZUaW1lO1xuICAgICAgfVxuXG4gICAgICB0aW1lID0gdFRpbWU7XG4gICAgICBwcmV2U3RhcnQgPSB0aGlzLl9zdGFydDtcbiAgICAgIHRpbWVTY2FsZSA9IHRoaXMuX3RzO1xuICAgICAgcHJldlBhdXNlZCA9ICF0aW1lU2NhbGU7XG5cbiAgICAgIGlmIChjcm9zc2luZ1N0YXJ0KSB7XG4gICAgICAgIGR1ciB8fCAocHJldlRpbWUgPSB0aGlzLl96VGltZSk7IC8vd2hlbiB0aGUgcGxheWhlYWQgYXJyaXZlcyBhdCBFWEFDVExZIHRpbWUgMCAocmlnaHQgb24gdG9wKSBvZiBhIHplcm8tZHVyYXRpb24gdGltZWxpbmUsIHdlIG5lZWQgdG8gZGlzY2VybiBpZiBldmVudHMgYXJlIHN1cHByZXNzZWQgc28gdGhhdCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBhZ2FpbiAobmV4dCB0aW1lKSwgaXQnbGwgdHJpZ2dlciB0aGUgY2FsbGJhY2suIElmIGV2ZW50cyBhcmUgTk9UIHN1cHByZXNzZWQsIG9idmlvdXNseSB0aGUgY2FsbGJhY2sgd291bGQgYmUgdHJpZ2dlcmVkIGluIHRoaXMgcmVuZGVyLiBCYXNpY2FsbHksIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZSBlaXRoZXIgd2hlbiB0aGUgcGxheWhlYWQgQVJSSVZFUyBvciBMRUFWRVMgdGhpcyBleGFjdCBzcG90LCBub3QgYm90aC4gSW1hZ2luZSBkb2luZyBhIHRpbWVsaW5lLnNlZWsoMCkgYW5kIHRoZXJlJ3MgYSBjYWxsYmFjayB0aGF0IHNpdHMgYXQgMC4gU2luY2UgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIG9uIHRoYXQgc2VlaygpIGJ5IGRlZmF1bHQsIG5vdGhpbmcgd2lsbCBmaXJlLCBidXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgb2ZmIG9mIHRoYXQgcG9zaXRpb24sIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZS4gVGhpcyBiZWhhdmlvciBpcyB3aGF0IHBlb3BsZSBpbnR1aXRpdmVseSBleHBlY3QuXG5cbiAgICAgICAgKHRvdGFsVGltZSB8fCAhc3VwcHJlc3NFdmVudHMpICYmICh0aGlzLl96VGltZSA9IHRvdGFsVGltZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9yZXBlYXQpIHtcbiAgICAgICAgLy9hZGp1c3QgdGhlIHRpbWUgZm9yIHJlcGVhdHMgYW5kIHlveW9zXG4gICAgICAgIHlveW8gPSB0aGlzLl95b3lvO1xuICAgICAgICBjeWNsZUR1cmF0aW9uID0gZHVyICsgdGhpcy5fckRlbGF5O1xuXG4gICAgICAgIGlmICh0aGlzLl9yZXBlYXQgPCAtMSAmJiB0b3RhbFRpbWUgPCAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudG90YWxUaW1lKGN5Y2xlRHVyYXRpb24gKiAxMDAgKyB0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aW1lID0gX3JvdW5kUHJlY2lzZSh0VGltZSAlIGN5Y2xlRHVyYXRpb24pOyAvL3JvdW5kIHRvIGF2b2lkIGZsb2F0aW5nIHBvaW50IGVycm9ycy4gKDQgJSAwLjggc2hvdWxkIGJlIDAgYnV0IHNvbWUgYnJvd3NlcnMgcmVwb3J0IGl0IGFzIDAuNzk5OTk5OTkhKVxuXG4gICAgICAgIGlmICh0VGltZSA9PT0gdER1cikge1xuICAgICAgICAgIC8vIHRoZSB0RHVyID09PSB0VGltZSBpcyBmb3IgZWRnZSBjYXNlcyB3aGVyZSB0aGVyZSdzIGEgbGVuZ3RoeSBkZWNpbWFsIG9uIHRoZSBkdXJhdGlvbiBhbmQgaXQgbWF5IHJlYWNoIHRoZSB2ZXJ5IGVuZCBidXQgdGhlIHRpbWUgaXMgcmVuZGVyZWQgYXMgbm90LXF1aXRlLXRoZXJlIChyZW1lbWJlciwgdER1ciBpcyByb3VuZGVkIHRvIDQgZGVjaW1hbHMgd2hlcmVhcyBkdXIgaXNuJ3QpXG4gICAgICAgICAgaXRlcmF0aW9uID0gdGhpcy5fcmVwZWF0O1xuICAgICAgICAgIHRpbWUgPSBkdXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlcmF0aW9uID0gfn4odFRpbWUgLyBjeWNsZUR1cmF0aW9uKTtcblxuICAgICAgICAgIGlmIChpdGVyYXRpb24gJiYgaXRlcmF0aW9uID09PSB0VGltZSAvIGN5Y2xlRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRpbWUgPSBkdXI7XG4gICAgICAgICAgICBpdGVyYXRpb24tLTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aW1lID4gZHVyICYmICh0aW1lID0gZHVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByZXZJdGVyYXRpb24gPSBfYW5pbWF0aW9uQ3ljbGUodGhpcy5fdFRpbWUsIGN5Y2xlRHVyYXRpb24pO1xuICAgICAgICAhcHJldlRpbWUgJiYgdGhpcy5fdFRpbWUgJiYgcHJldkl0ZXJhdGlvbiAhPT0gaXRlcmF0aW9uICYmIChwcmV2SXRlcmF0aW9uID0gaXRlcmF0aW9uKTsgLy8gZWRnZSBjYXNlIC0gaWYgc29tZW9uZSBkb2VzIGFkZFBhdXNlKCkgYXQgdGhlIHZlcnkgYmVnaW5uaW5nIG9mIGEgcmVwZWF0aW5nIHRpbWVsaW5lLCB0aGF0IHBhdXNlIGlzIHRlY2huaWNhbGx5IGF0IHRoZSBzYW1lIHNwb3QgYXMgdGhlIGVuZCB3aGljaCBjYXVzZXMgdGhpcy5fdGltZSB0byBnZXQgc2V0IHRvIDAgd2hlbiB0aGUgdG90YWxUaW1lIHdvdWxkIG5vcm1hbGx5IHBsYWNlIHRoZSBwbGF5aGVhZCBhdCB0aGUgZW5kLiBTZWUgaHR0cHM6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy8yMzgyMy1jbG9zaW5nLW5hdi1hbmltYXRpb24tbm90LXdvcmtpbmctb24taWUtYW5kLWlwaG9uZS02LW1heWJlLW90aGVyLW9sZGVyLWJyb3dzZXIvP3RhYj1jb21tZW50cyNjb21tZW50LTExMzAwNVxuXG4gICAgICAgIGlmICh5b3lvICYmIGl0ZXJhdGlvbiAmIDEpIHtcbiAgICAgICAgICB0aW1lID0gZHVyIC0gdGltZTtcbiAgICAgICAgICBpc1lveW8gPSAxO1xuICAgICAgICB9XG4gICAgICAgIC8qXG4gICAgICAgIG1ha2Ugc3VyZSBjaGlsZHJlbiBhdCB0aGUgZW5kL2JlZ2lubmluZyBvZiB0aGUgdGltZWxpbmUgYXJlIHJlbmRlcmVkIHByb3Blcmx5LiBJZiwgZm9yIGV4YW1wbGUsXG4gICAgICAgIGEgMy1zZWNvbmQgbG9uZyB0aW1lbGluZSByZW5kZXJlZCBhdCAyLjkgc2Vjb25kcyBwcmV2aW91c2x5LCBhbmQgbm93IHJlbmRlcnMgYXQgMy4yIHNlY29uZHMgKHdoaWNoXG4gICAgICAgIHdvdWxkIGdldCB0cmFuc2xhdGVkIHRvIDIuOCBzZWNvbmRzIGlmIHRoZSB0aW1lbGluZSB5b3lvcyBvciAwLjIgc2Vjb25kcyBpZiBpdCBqdXN0IHJlcGVhdHMpLCB0aGVyZVxuICAgICAgICBjb3VsZCBiZSBhIGNhbGxiYWNrIG9yIGEgc2hvcnQgdHdlZW4gdGhhdCdzIGF0IDIuOTUgb3IgMyBzZWNvbmRzIGluIHdoaWNoIHdvdWxkbid0IHJlbmRlci4gU29cbiAgICAgICAgd2UgbmVlZCB0byBwdXNoIHRoZSB0aW1lbGluZSB0byB0aGUgZW5kIChhbmQvb3IgYmVnaW5uaW5nIGRlcGVuZGluZyBvbiBpdHMgeW95byB2YWx1ZSkuIEFsc28gd2UgbXVzdFxuICAgICAgICBlbnN1cmUgdGhhdCB6ZXJvLWR1cmF0aW9uIHR3ZWVucyBhdCB0aGUgdmVyeSBiZWdpbm5pbmcgb3IgZW5kIG9mIHRoZSBUaW1lbGluZSB3b3JrLlxuICAgICAgICAqL1xuXG5cbiAgICAgICAgaWYgKGl0ZXJhdGlvbiAhPT0gcHJldkl0ZXJhdGlvbiAmJiAhdGhpcy5fbG9jaykge1xuICAgICAgICAgIHZhciByZXdpbmRpbmcgPSB5b3lvICYmIHByZXZJdGVyYXRpb24gJiAxLFxuICAgICAgICAgICAgICBkb2VzV3JhcCA9IHJld2luZGluZyA9PT0gKHlveW8gJiYgaXRlcmF0aW9uICYgMSk7XG4gICAgICAgICAgaXRlcmF0aW9uIDwgcHJldkl0ZXJhdGlvbiAmJiAocmV3aW5kaW5nID0gIXJld2luZGluZyk7XG4gICAgICAgICAgcHJldlRpbWUgPSByZXdpbmRpbmcgPyAwIDogZHVyO1xuICAgICAgICAgIHRoaXMuX2xvY2sgPSAxO1xuICAgICAgICAgIHRoaXMucmVuZGVyKHByZXZUaW1lIHx8IChpc1lveW8gPyAwIDogX3JvdW5kUHJlY2lzZShpdGVyYXRpb24gKiBjeWNsZUR1cmF0aW9uKSksIHN1cHByZXNzRXZlbnRzLCAhZHVyKS5fbG9jayA9IDA7XG4gICAgICAgICAgdGhpcy5fdFRpbWUgPSB0VGltZTsgLy8gaWYgYSB1c2VyIGdldHMgdGhlIGl0ZXJhdGlvbigpIGluc2lkZSB0aGUgb25SZXBlYXQsIGZvciBleGFtcGxlLCBpdCBzaG91bGQgYmUgYWNjdXJhdGUuXG5cbiAgICAgICAgICAhc3VwcHJlc3NFdmVudHMgJiYgdGhpcy5wYXJlbnQgJiYgX2NhbGxiYWNrKHRoaXMsIFwib25SZXBlYXRcIik7XG4gICAgICAgICAgdGhpcy52YXJzLnJlcGVhdFJlZnJlc2ggJiYgIWlzWW95byAmJiAodGhpcy5pbnZhbGlkYXRlKCkuX2xvY2sgPSAxKTtcblxuICAgICAgICAgIGlmIChwcmV2VGltZSAmJiBwcmV2VGltZSAhPT0gdGhpcy5fdGltZSB8fCBwcmV2UGF1c2VkICE9PSAhdGhpcy5fdHMgfHwgdGhpcy52YXJzLm9uUmVwZWF0ICYmICF0aGlzLnBhcmVudCAmJiAhdGhpcy5fYWN0KSB7XG4gICAgICAgICAgICAvLyBpZiBwcmV2VGltZSBpcyAwIGFuZCB3ZSByZW5kZXIgYXQgdGhlIHZlcnkgZW5kLCBfdGltZSB3aWxsIGJlIHRoZSBlbmQsIHRodXMgd29uJ3QgbWF0Y2guIFNvIGluIHRoaXMgZWRnZSBjYXNlLCBwcmV2VGltZSB3b24ndCBtYXRjaCBfdGltZSBidXQgdGhhdCdzIG9rYXkuIElmIGl0IGdldHMga2lsbGVkIGluIHRoZSBvblJlcGVhdCwgZWplY3QgYXMgd2VsbC5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGR1ciA9IHRoaXMuX2R1cjsgLy8gaW4gY2FzZSB0aGUgZHVyYXRpb24gY2hhbmdlZCBpbiB0aGUgb25SZXBlYXRcblxuICAgICAgICAgIHREdXIgPSB0aGlzLl90RHVyO1xuXG4gICAgICAgICAgaWYgKGRvZXNXcmFwKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2NrID0gMjtcbiAgICAgICAgICAgIHByZXZUaW1lID0gcmV3aW5kaW5nID8gZHVyIDogLTAuMDAwMTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKHByZXZUaW1lLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMudmFycy5yZXBlYXRSZWZyZXNoICYmICFpc1lveW8gJiYgdGhpcy5pbnZhbGlkYXRlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbG9jayA9IDA7XG5cbiAgICAgICAgICBpZiAoIXRoaXMuX3RzICYmICFwcmV2UGF1c2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICB9IC8vaW4gb3JkZXIgZm9yIHlveW9FYXNlIHRvIHdvcmsgcHJvcGVybHkgd2hlbiB0aGVyZSdzIGEgc3RhZ2dlciwgd2UgbXVzdCBzd2FwIG91dCB0aGUgZWFzZSBpbiBlYWNoIHN1Yi10d2Vlbi5cblxuXG4gICAgICAgICAgX3Byb3BhZ2F0ZVlveW9FYXNlKHRoaXMsIGlzWW95byk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2hhc1BhdXNlICYmICF0aGlzLl9mb3JjaW5nICYmIHRoaXMuX2xvY2sgPCAyKSB7XG4gICAgICAgIHBhdXNlVHdlZW4gPSBfZmluZE5leHRQYXVzZVR3ZWVuKHRoaXMsIF9yb3VuZFByZWNpc2UocHJldlRpbWUpLCBfcm91bmRQcmVjaXNlKHRpbWUpKTtcblxuICAgICAgICBpZiAocGF1c2VUd2Vlbikge1xuICAgICAgICAgIHRUaW1lIC09IHRpbWUgLSAodGltZSA9IHBhdXNlVHdlZW4uX3N0YXJ0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl90VGltZSA9IHRUaW1lO1xuICAgICAgdGhpcy5fdGltZSA9IHRpbWU7XG4gICAgICB0aGlzLl9hY3QgPSAhdGltZVNjYWxlOyAvL2FzIGxvbmcgYXMgaXQncyBub3QgcGF1c2VkLCBmb3JjZSBpdCB0byBiZSBhY3RpdmUgc28gdGhhdCBpZiB0aGUgdXNlciByZW5kZXJzIGluZGVwZW5kZW50IG9mIHRoZSBwYXJlbnQgdGltZWxpbmUsIGl0J2xsIGJlIGZvcmNlZCB0byByZS1yZW5kZXIgb24gdGhlIG5leHQgdGljay5cblxuICAgICAgaWYgKCF0aGlzLl9pbml0dGVkKSB7XG4gICAgICAgIHRoaXMuX29uVXBkYXRlID0gdGhpcy52YXJzLm9uVXBkYXRlO1xuICAgICAgICB0aGlzLl9pbml0dGVkID0gMTtcbiAgICAgICAgdGhpcy5felRpbWUgPSB0b3RhbFRpbWU7XG4gICAgICAgIHByZXZUaW1lID0gMDsgLy8gdXBvbiBpbml0LCB0aGUgcGxheWhlYWQgc2hvdWxkIGFsd2F5cyBnbyBmb3J3YXJkOyBzb21lb25lIGNvdWxkIGludmFsaWRhdGUoKSBhIGNvbXBsZXRlZCB0aW1lbGluZSBhbmQgdGhlbiBpZiB0aGV5IHJlc3RhcnQoKSwgdGhhdCB3b3VsZCBtYWtlIGNoaWxkIHR3ZWVucyByZW5kZXIgaW4gcmV2ZXJzZSBvcmRlciB3aGljaCBjb3VsZCBsb2NrIGluIHRoZSB3cm9uZyBzdGFydGluZyB2YWx1ZXMgaWYgdGhleSBidWlsZCBvbiBlYWNoIG90aGVyLCBsaWtlIHRsLnRvKG9iaiwge3g6IDEwMH0pLnRvKG9iaiwge3g6IDB9KS5cbiAgICAgIH1cblxuICAgICAgaWYgKCFwcmV2VGltZSAmJiB0aW1lICYmICFzdXBwcmVzc0V2ZW50cykge1xuICAgICAgICBfY2FsbGJhY2sodGhpcywgXCJvblN0YXJ0XCIpO1xuXG4gICAgICAgIGlmICh0aGlzLl90VGltZSAhPT0gdFRpbWUpIHtcbiAgICAgICAgICAvLyBpbiBjYXNlIHRoZSBvblN0YXJ0IHRyaWdnZXJlZCBhIHJlbmRlciBhdCBhIGRpZmZlcmVudCBzcG90LCBlamVjdC4gTGlrZSBpZiBzb21lb25lIGRpZCBhbmltYXRpb24ucGF1c2UoMC41KSBvciBzb21ldGhpbmcgaW5zaWRlIHRoZSBvblN0YXJ0LlxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aW1lID49IHByZXZUaW1lICYmIHRvdGFsVGltZSA+PSAwKSB7XG4gICAgICAgIGNoaWxkID0gdGhpcy5fZmlyc3Q7XG5cbiAgICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgICAgbmV4dCA9IGNoaWxkLl9uZXh0O1xuXG4gICAgICAgICAgaWYgKChjaGlsZC5fYWN0IHx8IHRpbWUgPj0gY2hpbGQuX3N0YXJ0KSAmJiBjaGlsZC5fdHMgJiYgcGF1c2VUd2VlbiAhPT0gY2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5wYXJlbnQgIT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgLy8gYW4gZXh0cmVtZSBlZGdlIGNhc2UgLSB0aGUgY2hpbGQncyByZW5kZXIgY291bGQgZG8gc29tZXRoaW5nIGxpa2Uga2lsbCgpIHRoZSBcIm5leHRcIiBvbmUgaW4gdGhlIGxpbmtlZCBsaXN0LCBvciByZXBhcmVudCBpdC4gSW4gdGhhdCBjYXNlIHdlIG11c3QgcmUtaW5pdGlhdGUgdGhlIHdob2xlIHJlbmRlciB0byBiZSBzYWZlLlxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGlsZC5yZW5kZXIoY2hpbGQuX3RzID4gMCA/ICh0aW1lIC0gY2hpbGQuX3N0YXJ0KSAqIGNoaWxkLl90cyA6IChjaGlsZC5fZGlydHkgPyBjaGlsZC50b3RhbER1cmF0aW9uKCkgOiBjaGlsZC5fdER1cikgKyAodGltZSAtIGNoaWxkLl9zdGFydCkgKiBjaGlsZC5fdHMsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG5cbiAgICAgICAgICAgIGlmICh0aW1lICE9PSB0aGlzLl90aW1lIHx8ICF0aGlzLl90cyAmJiAhcHJldlBhdXNlZCkge1xuICAgICAgICAgICAgICAvL2luIGNhc2UgYSB0d2VlbiBwYXVzZXMgb3Igc2Vla3MgdGhlIHRpbWVsaW5lIHdoZW4gcmVuZGVyaW5nLCBsaWtlIGluc2lkZSBvZiBhbiBvblVwZGF0ZS9vbkNvbXBsZXRlXG4gICAgICAgICAgICAgIHBhdXNlVHdlZW4gPSAwO1xuICAgICAgICAgICAgICBuZXh0ICYmICh0VGltZSArPSB0aGlzLl96VGltZSA9IC1fdGlueU51bSk7IC8vIGl0IGRpZG4ndCBmaW5pc2ggcmVuZGVyaW5nLCBzbyBmbGFnIHpUaW1lIGFzIG5lZ2F0aXZlIHNvIHRoYXQgc28gdGhhdCB0aGUgbmV4dCB0aW1lIHJlbmRlcigpIGlzIGNhbGxlZCBpdCdsbCBiZSBmb3JjZWQgKHRvIHJlbmRlciBhbnkgcmVtYWluaW5nIGNoaWxkcmVuKVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNoaWxkID0gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSB0aGlzLl9sYXN0O1xuICAgICAgICB2YXIgYWRqdXN0ZWRUaW1lID0gdG90YWxUaW1lIDwgMCA/IHRvdGFsVGltZSA6IHRpbWU7IC8vd2hlbiB0aGUgcGxheWhlYWQgZ29lcyBiYWNrd2FyZCBiZXlvbmQgdGhlIHN0YXJ0IG9mIHRoaXMgdGltZWxpbmUsIHdlIG11c3QgcGFzcyB0aGF0IGluZm9ybWF0aW9uIGRvd24gdG8gdGhlIGNoaWxkIGFuaW1hdGlvbnMgc28gdGhhdCB6ZXJvLWR1cmF0aW9uIHR3ZWVucyBrbm93IHdoZXRoZXIgdG8gcmVuZGVyIHRoZWlyIHN0YXJ0aW5nIG9yIGVuZGluZyB2YWx1ZXMuXG5cbiAgICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgICAgbmV4dCA9IGNoaWxkLl9wcmV2O1xuXG4gICAgICAgICAgaWYgKChjaGlsZC5fYWN0IHx8IGFkanVzdGVkVGltZSA8PSBjaGlsZC5fZW5kKSAmJiBjaGlsZC5fdHMgJiYgcGF1c2VUd2VlbiAhPT0gY2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5wYXJlbnQgIT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgLy8gYW4gZXh0cmVtZSBlZGdlIGNhc2UgLSB0aGUgY2hpbGQncyByZW5kZXIgY291bGQgZG8gc29tZXRoaW5nIGxpa2Uga2lsbCgpIHRoZSBcIm5leHRcIiBvbmUgaW4gdGhlIGxpbmtlZCBsaXN0LCBvciByZXBhcmVudCBpdC4gSW4gdGhhdCBjYXNlIHdlIG11c3QgcmUtaW5pdGlhdGUgdGhlIHdob2xlIHJlbmRlciB0byBiZSBzYWZlLlxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGlsZC5yZW5kZXIoY2hpbGQuX3RzID4gMCA/IChhZGp1c3RlZFRpbWUgLSBjaGlsZC5fc3RhcnQpICogY2hpbGQuX3RzIDogKGNoaWxkLl9kaXJ0eSA/IGNoaWxkLnRvdGFsRHVyYXRpb24oKSA6IGNoaWxkLl90RHVyKSArIChhZGp1c3RlZFRpbWUgLSBjaGlsZC5fc3RhcnQpICogY2hpbGQuX3RzLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuXG4gICAgICAgICAgICBpZiAodGltZSAhPT0gdGhpcy5fdGltZSB8fCAhdGhpcy5fdHMgJiYgIXByZXZQYXVzZWQpIHtcbiAgICAgICAgICAgICAgLy9pbiBjYXNlIGEgdHdlZW4gcGF1c2VzIG9yIHNlZWtzIHRoZSB0aW1lbGluZSB3aGVuIHJlbmRlcmluZywgbGlrZSBpbnNpZGUgb2YgYW4gb25VcGRhdGUvb25Db21wbGV0ZVxuICAgICAgICAgICAgICBwYXVzZVR3ZWVuID0gMDtcbiAgICAgICAgICAgICAgbmV4dCAmJiAodFRpbWUgKz0gdGhpcy5felRpbWUgPSBhZGp1c3RlZFRpbWUgPyAtX3RpbnlOdW0gOiBfdGlueU51bSk7IC8vIGl0IGRpZG4ndCBmaW5pc2ggcmVuZGVyaW5nLCBzbyBhZGp1c3QgelRpbWUgc28gdGhhdCBzbyB0aGF0IHRoZSBuZXh0IHRpbWUgcmVuZGVyKCkgaXMgY2FsbGVkIGl0J2xsIGJlIGZvcmNlZCAodG8gcmVuZGVyIGFueSByZW1haW5pbmcgY2hpbGRyZW4pXG5cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hpbGQgPSBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXVzZVR3ZWVuICYmICFzdXBwcmVzc0V2ZW50cykge1xuICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgIHBhdXNlVHdlZW4ucmVuZGVyKHRpbWUgPj0gcHJldlRpbWUgPyAwIDogLV90aW55TnVtKS5felRpbWUgPSB0aW1lID49IHByZXZUaW1lID8gMSA6IC0xO1xuXG4gICAgICAgIGlmICh0aGlzLl90cykge1xuICAgICAgICAgIC8vdGhlIGNhbGxiYWNrIHJlc3VtZWQgcGxheWJhY2shIFNvIHNpbmNlIHdlIG1heSBoYXZlIGhlbGQgYmFjayB0aGUgcGxheWhlYWQgZHVlIHRvIHdoZXJlIHRoZSBwYXVzZSBpcyBwb3NpdGlvbmVkLCBnbyBhaGVhZCBhbmQganVtcCB0byB3aGVyZSBpdCdzIFNVUFBPU0VEIHRvIGJlIChpZiBubyBwYXVzZSBoYXBwZW5lZCkuXG4gICAgICAgICAgdGhpcy5fc3RhcnQgPSBwcmV2U3RhcnQ7IC8vaWYgdGhlIHBhdXNlIHdhcyBhdCBhbiBlYXJsaWVyIHRpbWUgYW5kIHRoZSB1c2VyIHJlc3VtZWQgaW4gdGhlIGNhbGxiYWNrLCBpdCBjb3VsZCByZXBvc2l0aW9uIHRoZSB0aW1lbGluZSAoY2hhbmdpbmcgaXRzIHN0YXJ0VGltZSksIHRocm93aW5nIHRoaW5ncyBvZmYgc2xpZ2h0bHksIHNvIHdlIG1ha2Ugc3VyZSB0aGUgX3N0YXJ0IGRvZXNuJ3Qgc2hpZnQuXG5cbiAgICAgICAgICBfc2V0RW5kKHRoaXMpO1xuXG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9vblVwZGF0ZSAmJiAhc3VwcHJlc3NFdmVudHMgJiYgX2NhbGxiYWNrKHRoaXMsIFwib25VcGRhdGVcIiwgdHJ1ZSk7XG4gICAgICBpZiAodFRpbWUgPT09IHREdXIgJiYgdER1ciA+PSB0aGlzLnRvdGFsRHVyYXRpb24oKSB8fCAhdFRpbWUgJiYgcHJldlRpbWUpIGlmIChwcmV2U3RhcnQgPT09IHRoaXMuX3N0YXJ0IHx8IE1hdGguYWJzKHRpbWVTY2FsZSkgIT09IE1hdGguYWJzKHRoaXMuX3RzKSkgaWYgKCF0aGlzLl9sb2NrKSB7XG4gICAgICAgICh0b3RhbFRpbWUgfHwgIWR1cikgJiYgKHRUaW1lID09PSB0RHVyICYmIHRoaXMuX3RzID4gMCB8fCAhdFRpbWUgJiYgdGhpcy5fdHMgPCAwKSAmJiBfcmVtb3ZlRnJvbVBhcmVudCh0aGlzLCAxKTsgLy8gZG9uJ3QgcmVtb3ZlIGlmIHRoZSB0aW1lbGluZSBpcyByZXZlcnNlZCBhbmQgdGhlIHBsYXloZWFkIGlzbid0IGF0IDAsIG90aGVyd2lzZSB0bC5wcm9ncmVzcygxKS5yZXZlcnNlKCkgd29uJ3Qgd29yay4gT25seSByZW1vdmUgaWYgdGhlIHBsYXloZWFkIGlzIGF0IHRoZSBlbmQgYW5kIHRpbWVTY2FsZSBpcyBwb3NpdGl2ZSwgb3IgaWYgdGhlIHBsYXloZWFkIGlzIGF0IDAgYW5kIHRoZSB0aW1lU2NhbGUgaXMgbmVnYXRpdmUuXG5cbiAgICAgICAgaWYgKCFzdXBwcmVzc0V2ZW50cyAmJiAhKHRvdGFsVGltZSA8IDAgJiYgIXByZXZUaW1lKSAmJiAodFRpbWUgfHwgcHJldlRpbWUgfHwgIXREdXIpKSB7XG4gICAgICAgICAgX2NhbGxiYWNrKHRoaXMsIHRUaW1lID09PSB0RHVyICYmIHRvdGFsVGltZSA+PSAwID8gXCJvbkNvbXBsZXRlXCIgOiBcIm9uUmV2ZXJzZUNvbXBsZXRlXCIsIHRydWUpO1xuXG4gICAgICAgICAgdGhpcy5fcHJvbSAmJiAhKHRUaW1lIDwgdER1ciAmJiB0aGlzLnRpbWVTY2FsZSgpID4gMCkgJiYgdGhpcy5fcHJvbSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5hZGQgPSBmdW5jdGlvbiBhZGQoY2hpbGQsIHBvc2l0aW9uKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBfaXNOdW1iZXIocG9zaXRpb24pIHx8IChwb3NpdGlvbiA9IF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uLCBjaGlsZCkpO1xuXG4gICAgaWYgKCEoY2hpbGQgaW5zdGFuY2VvZiBBbmltYXRpb24pKSB7XG4gICAgICBpZiAoX2lzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgIGNoaWxkLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuYWRkKG9iaiwgcG9zaXRpb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGlmIChfaXNTdHJpbmcoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZExhYmVsKGNoaWxkLCBwb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChfaXNGdW5jdGlvbihjaGlsZCkpIHtcbiAgICAgICAgY2hpbGQgPSBUd2Vlbi5kZWxheWVkQ2FsbCgwLCBjaGlsZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcyAhPT0gY2hpbGQgPyBfYWRkVG9UaW1lbGluZSh0aGlzLCBjaGlsZCwgcG9zaXRpb24pIDogdGhpczsgLy9kb24ndCBhbGxvdyBhIHRpbWVsaW5lIHRvIGJlIGFkZGVkIHRvIGl0c2VsZiBhcyBhIGNoaWxkIVxuICB9O1xuXG4gIF9wcm90bzIuZ2V0Q2hpbGRyZW4gPSBmdW5jdGlvbiBnZXRDaGlsZHJlbihuZXN0ZWQsIHR3ZWVucywgdGltZWxpbmVzLCBpZ25vcmVCZWZvcmVUaW1lKSB7XG4gICAgaWYgKG5lc3RlZCA9PT0gdm9pZCAwKSB7XG4gICAgICBuZXN0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0d2VlbnMgPT09IHZvaWQgMCkge1xuICAgICAgdHdlZW5zID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGltZWxpbmVzID09PSB2b2lkIDApIHtcbiAgICAgIHRpbWVsaW5lcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGlnbm9yZUJlZm9yZVRpbWUgPT09IHZvaWQgMCkge1xuICAgICAgaWdub3JlQmVmb3JlVGltZSA9IC1fYmlnTnVtO1xuICAgIH1cblxuICAgIHZhciBhID0gW10sXG4gICAgICAgIGNoaWxkID0gdGhpcy5fZmlyc3Q7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIGlmIChjaGlsZC5fc3RhcnQgPj0gaWdub3JlQmVmb3JlVGltZSkge1xuICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBUd2Vlbikge1xuICAgICAgICAgIHR3ZWVucyAmJiBhLnB1c2goY2hpbGQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpbWVsaW5lcyAmJiBhLnB1c2goY2hpbGQpO1xuICAgICAgICAgIG5lc3RlZCAmJiBhLnB1c2guYXBwbHkoYSwgY2hpbGQuZ2V0Q2hpbGRyZW4odHJ1ZSwgdHdlZW5zLCB0aW1lbGluZXMpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9O1xuXG4gIF9wcm90bzIuZ2V0QnlJZCA9IGZ1bmN0aW9uIGdldEJ5SWQoaWQpIHtcbiAgICB2YXIgYW5pbWF0aW9ucyA9IHRoaXMuZ2V0Q2hpbGRyZW4oMSwgMSwgMSksXG4gICAgICAgIGkgPSBhbmltYXRpb25zLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGlmIChhbmltYXRpb25zW2ldLnZhcnMuaWQgPT09IGlkKSB7XG4gICAgICAgIHJldHVybiBhbmltYXRpb25zW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8yLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShjaGlsZCkge1xuICAgIGlmIChfaXNTdHJpbmcoY2hpbGQpKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW1vdmVMYWJlbChjaGlsZCk7XG4gICAgfVxuXG4gICAgaWYgKF9pc0Z1bmN0aW9uKGNoaWxkKSkge1xuICAgICAgcmV0dXJuIHRoaXMua2lsbFR3ZWVuc09mKGNoaWxkKTtcbiAgICB9XG5cbiAgICBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0odGhpcywgY2hpbGQpO1xuXG4gICAgaWYgKGNoaWxkID09PSB0aGlzLl9yZWNlbnQpIHtcbiAgICAgIHRoaXMuX3JlY2VudCA9IHRoaXMuX2xhc3Q7XG4gICAgfVxuXG4gICAgcmV0dXJuIF91bmNhY2hlKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90bzIudG90YWxUaW1lID0gZnVuY3Rpb24gdG90YWxUaW1lKF90b3RhbFRpbWUyLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RUaW1lO1xuICAgIH1cblxuICAgIHRoaXMuX2ZvcmNpbmcgPSAxO1xuXG4gICAgaWYgKCF0aGlzLl9kcCAmJiB0aGlzLl90cykge1xuICAgICAgLy9zcGVjaWFsIGNhc2UgZm9yIHRoZSBnbG9iYWwgdGltZWxpbmUgKG9yIGFueSBvdGhlciB0aGF0IGhhcyBubyBwYXJlbnQgb3IgZGV0YWNoZWQgcGFyZW50KS5cbiAgICAgIHRoaXMuX3N0YXJ0ID0gX3JvdW5kUHJlY2lzZShfdGlja2VyLnRpbWUgLSAodGhpcy5fdHMgPiAwID8gX3RvdGFsVGltZTIgLyB0aGlzLl90cyA6ICh0aGlzLnRvdGFsRHVyYXRpb24oKSAtIF90b3RhbFRpbWUyKSAvIC10aGlzLl90cykpO1xuICAgIH1cblxuICAgIF9BbmltYXRpb24ucHJvdG90eXBlLnRvdGFsVGltZS5jYWxsKHRoaXMsIF90b3RhbFRpbWUyLCBzdXBwcmVzc0V2ZW50cyk7XG5cbiAgICB0aGlzLl9mb3JjaW5nID0gMDtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLmFkZExhYmVsID0gZnVuY3Rpb24gYWRkTGFiZWwobGFiZWwsIHBvc2l0aW9uKSB7XG4gICAgdGhpcy5sYWJlbHNbbGFiZWxdID0gX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24pO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIucmVtb3ZlTGFiZWwgPSBmdW5jdGlvbiByZW1vdmVMYWJlbChsYWJlbCkge1xuICAgIGRlbGV0ZSB0aGlzLmxhYmVsc1tsYWJlbF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5hZGRQYXVzZSA9IGZ1bmN0aW9uIGFkZFBhdXNlKHBvc2l0aW9uLCBjYWxsYmFjaywgcGFyYW1zKSB7XG4gICAgdmFyIHQgPSBUd2Vlbi5kZWxheWVkQ2FsbCgwLCBjYWxsYmFjayB8fCBfZW1wdHlGdW5jLCBwYXJhbXMpO1xuICAgIHQuZGF0YSA9IFwiaXNQYXVzZVwiO1xuICAgIHRoaXMuX2hhc1BhdXNlID0gMTtcbiAgICByZXR1cm4gX2FkZFRvVGltZWxpbmUodGhpcywgdCwgX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24pKTtcbiAgfTtcblxuICBfcHJvdG8yLnJlbW92ZVBhdXNlID0gZnVuY3Rpb24gcmVtb3ZlUGF1c2UocG9zaXRpb24pIHtcbiAgICB2YXIgY2hpbGQgPSB0aGlzLl9maXJzdDtcbiAgICBwb3NpdGlvbiA9IF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKTtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgaWYgKGNoaWxkLl9zdGFydCA9PT0gcG9zaXRpb24gJiYgY2hpbGQuZGF0YSA9PT0gXCJpc1BhdXNlXCIpIHtcbiAgICAgICAgX3JlbW92ZUZyb21QYXJlbnQoY2hpbGQpO1xuICAgICAgfVxuXG4gICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8yLmtpbGxUd2VlbnNPZiA9IGZ1bmN0aW9uIGtpbGxUd2VlbnNPZih0YXJnZXRzLCBwcm9wcywgb25seUFjdGl2ZSkge1xuICAgIHZhciB0d2VlbnMgPSB0aGlzLmdldFR3ZWVuc09mKHRhcmdldHMsIG9ubHlBY3RpdmUpLFxuICAgICAgICBpID0gdHdlZW5zLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIF9vdmVyd3JpdGluZ1R3ZWVuICE9PSB0d2VlbnNbaV0gJiYgdHdlZW5zW2ldLmtpbGwodGFyZ2V0cywgcHJvcHMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuZ2V0VHdlZW5zT2YgPSBmdW5jdGlvbiBnZXRUd2VlbnNPZih0YXJnZXRzLCBvbmx5QWN0aXZlKSB7XG4gICAgdmFyIGEgPSBbXSxcbiAgICAgICAgcGFyc2VkVGFyZ2V0cyA9IHRvQXJyYXkodGFyZ2V0cyksXG4gICAgICAgIGNoaWxkID0gdGhpcy5fZmlyc3QsXG4gICAgICAgIGlzR2xvYmFsVGltZSA9IF9pc051bWJlcihvbmx5QWN0aXZlKSxcbiAgICAgICAgLy8gYSBudW1iZXIgaXMgaW50ZXJwcmV0ZWQgYXMgYSBnbG9iYWwgdGltZS4gSWYgdGhlIGFuaW1hdGlvbiBzcGFuc1xuICAgIGNoaWxkcmVuO1xuXG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBUd2Vlbikge1xuICAgICAgICBpZiAoX2FycmF5Q29udGFpbnNBbnkoY2hpbGQuX3RhcmdldHMsIHBhcnNlZFRhcmdldHMpICYmIChpc0dsb2JhbFRpbWUgPyAoIV9vdmVyd3JpdGluZ1R3ZWVuIHx8IGNoaWxkLl9pbml0dGVkICYmIGNoaWxkLl90cykgJiYgY2hpbGQuZ2xvYmFsVGltZSgwKSA8PSBvbmx5QWN0aXZlICYmIGNoaWxkLmdsb2JhbFRpbWUoY2hpbGQudG90YWxEdXJhdGlvbigpKSA+IG9ubHlBY3RpdmUgOiAhb25seUFjdGl2ZSB8fCBjaGlsZC5pc0FjdGl2ZSgpKSkge1xuICAgICAgICAgIC8vIG5vdGU6IGlmIHRoaXMgaXMgZm9yIG92ZXJ3cml0aW5nLCBpdCBzaG91bGQgb25seSBiZSBmb3IgdHdlZW5zIHRoYXQgYXJlbid0IHBhdXNlZCBhbmQgYXJlIGluaXR0ZWQuXG4gICAgICAgICAgYS5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICgoY2hpbGRyZW4gPSBjaGlsZC5nZXRUd2VlbnNPZihwYXJzZWRUYXJnZXRzLCBvbmx5QWN0aXZlKSkubGVuZ3RoKSB7XG4gICAgICAgIGEucHVzaC5hcHBseShhLCBjaGlsZHJlbik7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG4gIH0gLy8gcG90ZW50aWFsIGZ1dHVyZSBmZWF0dXJlIC0gdGFyZ2V0cygpIG9uIHRpbWVsaW5lc1xuICAvLyB0YXJnZXRzKCkge1xuICAvLyBcdGxldCByZXN1bHQgPSBbXTtcbiAgLy8gXHR0aGlzLmdldENoaWxkcmVuKHRydWUsIHRydWUsIGZhbHNlKS5mb3JFYWNoKHQgPT4gcmVzdWx0LnB1c2goLi4udC50YXJnZXRzKCkpKTtcbiAgLy8gXHRyZXR1cm4gcmVzdWx0LmZpbHRlcigodiwgaSkgPT4gcmVzdWx0LmluZGV4T2YodikgPT09IGkpO1xuICAvLyB9XG4gIDtcblxuICBfcHJvdG8yLnR3ZWVuVG8gPSBmdW5jdGlvbiB0d2VlblRvKHBvc2l0aW9uLCB2YXJzKSB7XG4gICAgdmFycyA9IHZhcnMgfHwge307XG5cbiAgICB2YXIgdGwgPSB0aGlzLFxuICAgICAgICBlbmRUaW1lID0gX3BhcnNlUG9zaXRpb24odGwsIHBvc2l0aW9uKSxcbiAgICAgICAgX3ZhcnMgPSB2YXJzLFxuICAgICAgICBzdGFydEF0ID0gX3ZhcnMuc3RhcnRBdCxcbiAgICAgICAgX29uU3RhcnQgPSBfdmFycy5vblN0YXJ0LFxuICAgICAgICBvblN0YXJ0UGFyYW1zID0gX3ZhcnMub25TdGFydFBhcmFtcyxcbiAgICAgICAgaW1tZWRpYXRlUmVuZGVyID0gX3ZhcnMuaW1tZWRpYXRlUmVuZGVyLFxuICAgICAgICBpbml0dGVkLFxuICAgICAgICB0d2VlbiA9IFR3ZWVuLnRvKHRsLCBfc2V0RGVmYXVsdHMoe1xuICAgICAgZWFzZTogdmFycy5lYXNlIHx8IFwibm9uZVwiLFxuICAgICAgbGF6eTogZmFsc2UsXG4gICAgICBpbW1lZGlhdGVSZW5kZXI6IGZhbHNlLFxuICAgICAgdGltZTogZW5kVGltZSxcbiAgICAgIG92ZXJ3cml0ZTogXCJhdXRvXCIsXG4gICAgICBkdXJhdGlvbjogdmFycy5kdXJhdGlvbiB8fCBNYXRoLmFicygoZW5kVGltZSAtIChzdGFydEF0ICYmIFwidGltZVwiIGluIHN0YXJ0QXQgPyBzdGFydEF0LnRpbWUgOiB0bC5fdGltZSkpIC8gdGwudGltZVNjYWxlKCkpIHx8IF90aW55TnVtLFxuICAgICAgb25TdGFydDogZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICAgICAgdGwucGF1c2UoKTtcblxuICAgICAgICBpZiAoIWluaXR0ZWQpIHtcbiAgICAgICAgICB2YXIgZHVyYXRpb24gPSB2YXJzLmR1cmF0aW9uIHx8IE1hdGguYWJzKChlbmRUaW1lIC0gKHN0YXJ0QXQgJiYgXCJ0aW1lXCIgaW4gc3RhcnRBdCA/IHN0YXJ0QXQudGltZSA6IHRsLl90aW1lKSkgLyB0bC50aW1lU2NhbGUoKSk7XG4gICAgICAgICAgdHdlZW4uX2R1ciAhPT0gZHVyYXRpb24gJiYgX3NldER1cmF0aW9uKHR3ZWVuLCBkdXJhdGlvbiwgMCwgMSkucmVuZGVyKHR3ZWVuLl90aW1lLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICBpbml0dGVkID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9vblN0YXJ0ICYmIF9vblN0YXJ0LmFwcGx5KHR3ZWVuLCBvblN0YXJ0UGFyYW1zIHx8IFtdKTsgLy9pbiBjYXNlIHRoZSB1c2VyIGhhZCBhbiBvblN0YXJ0IGluIHRoZSB2YXJzIC0gd2UgZG9uJ3Qgd2FudCB0byBvdmVyd3JpdGUgaXQuXG4gICAgICB9XG4gICAgfSwgdmFycykpO1xuXG4gICAgcmV0dXJuIGltbWVkaWF0ZVJlbmRlciA/IHR3ZWVuLnJlbmRlcigwKSA6IHR3ZWVuO1xuICB9O1xuXG4gIF9wcm90bzIudHdlZW5Gcm9tVG8gPSBmdW5jdGlvbiB0d2VlbkZyb21Ubyhmcm9tUG9zaXRpb24sIHRvUG9zaXRpb24sIHZhcnMpIHtcbiAgICByZXR1cm4gdGhpcy50d2VlblRvKHRvUG9zaXRpb24sIF9zZXREZWZhdWx0cyh7XG4gICAgICBzdGFydEF0OiB7XG4gICAgICAgIHRpbWU6IF9wYXJzZVBvc2l0aW9uKHRoaXMsIGZyb21Qb3NpdGlvbilcbiAgICAgIH1cbiAgICB9LCB2YXJzKSk7XG4gIH07XG5cbiAgX3Byb3RvMi5yZWNlbnQgPSBmdW5jdGlvbiByZWNlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY2VudDtcbiAgfTtcblxuICBfcHJvdG8yLm5leHRMYWJlbCA9IGZ1bmN0aW9uIG5leHRMYWJlbChhZnRlclRpbWUpIHtcbiAgICBpZiAoYWZ0ZXJUaW1lID09PSB2b2lkIDApIHtcbiAgICAgIGFmdGVyVGltZSA9IHRoaXMuX3RpbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9nZXRMYWJlbEluRGlyZWN0aW9uKHRoaXMsIF9wYXJzZVBvc2l0aW9uKHRoaXMsIGFmdGVyVGltZSkpO1xuICB9O1xuXG4gIF9wcm90bzIucHJldmlvdXNMYWJlbCA9IGZ1bmN0aW9uIHByZXZpb3VzTGFiZWwoYmVmb3JlVGltZSkge1xuICAgIGlmIChiZWZvcmVUaW1lID09PSB2b2lkIDApIHtcbiAgICAgIGJlZm9yZVRpbWUgPSB0aGlzLl90aW1lO1xuICAgIH1cblxuICAgIHJldHVybiBfZ2V0TGFiZWxJbkRpcmVjdGlvbih0aGlzLCBfcGFyc2VQb3NpdGlvbih0aGlzLCBiZWZvcmVUaW1lKSwgMSk7XG4gIH07XG5cbiAgX3Byb3RvMi5jdXJyZW50TGFiZWwgPSBmdW5jdGlvbiBjdXJyZW50TGFiZWwodmFsdWUpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMuc2Vlayh2YWx1ZSwgdHJ1ZSkgOiB0aGlzLnByZXZpb3VzTGFiZWwodGhpcy5fdGltZSArIF90aW55TnVtKTtcbiAgfTtcblxuICBfcHJvdG8yLnNoaWZ0Q2hpbGRyZW4gPSBmdW5jdGlvbiBzaGlmdENoaWxkcmVuKGFtb3VudCwgYWRqdXN0TGFiZWxzLCBpZ25vcmVCZWZvcmVUaW1lKSB7XG4gICAgaWYgKGlnbm9yZUJlZm9yZVRpbWUgPT09IHZvaWQgMCkge1xuICAgICAgaWdub3JlQmVmb3JlVGltZSA9IDA7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkID0gdGhpcy5fZmlyc3QsXG4gICAgICAgIGxhYmVscyA9IHRoaXMubGFiZWxzLFxuICAgICAgICBwO1xuXG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBpZiAoY2hpbGQuX3N0YXJ0ID49IGlnbm9yZUJlZm9yZVRpbWUpIHtcbiAgICAgICAgY2hpbGQuX3N0YXJ0ICs9IGFtb3VudDtcbiAgICAgICAgY2hpbGQuX2VuZCArPSBhbW91bnQ7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgfVxuXG4gICAgaWYgKGFkanVzdExhYmVscykge1xuICAgICAgZm9yIChwIGluIGxhYmVscykge1xuICAgICAgICBpZiAobGFiZWxzW3BdID49IGlnbm9yZUJlZm9yZVRpbWUpIHtcbiAgICAgICAgICBsYWJlbHNbcF0gKz0gYW1vdW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF91bmNhY2hlKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90bzIuaW52YWxpZGF0ZSA9IGZ1bmN0aW9uIGludmFsaWRhdGUoKSB7XG4gICAgdmFyIGNoaWxkID0gdGhpcy5fZmlyc3Q7XG4gICAgdGhpcy5fbG9jayA9IDA7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIGNoaWxkLmludmFsaWRhdGUoKTtcbiAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9BbmltYXRpb24ucHJvdG90eXBlLmludmFsaWRhdGUuY2FsbCh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8yLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoaW5jbHVkZUxhYmVscykge1xuICAgIGlmIChpbmNsdWRlTGFiZWxzID09PSB2b2lkIDApIHtcbiAgICAgIGluY2x1ZGVMYWJlbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBjaGlsZCA9IHRoaXMuX2ZpcnN0LFxuICAgICAgICBuZXh0O1xuXG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBuZXh0ID0gY2hpbGQuX25leHQ7XG4gICAgICB0aGlzLnJlbW92ZShjaGlsZCk7XG4gICAgICBjaGlsZCA9IG5leHQ7XG4gICAgfVxuXG4gICAgdGhpcy5fZHAgJiYgKHRoaXMuX3RpbWUgPSB0aGlzLl90VGltZSA9IHRoaXMuX3BUaW1lID0gMCk7XG4gICAgaW5jbHVkZUxhYmVscyAmJiAodGhpcy5sYWJlbHMgPSB7fSk7XG4gICAgcmV0dXJuIF91bmNhY2hlKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90bzIudG90YWxEdXJhdGlvbiA9IGZ1bmN0aW9uIHRvdGFsRHVyYXRpb24odmFsdWUpIHtcbiAgICB2YXIgbWF4ID0gMCxcbiAgICAgICAgc2VsZiA9IHRoaXMsXG4gICAgICAgIGNoaWxkID0gc2VsZi5fbGFzdCxcbiAgICAgICAgcHJldlN0YXJ0ID0gX2JpZ051bSxcbiAgICAgICAgcHJldixcbiAgICAgICAgc3RhcnQsXG4gICAgICAgIHBhcmVudDtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gc2VsZi50aW1lU2NhbGUoKHNlbGYuX3JlcGVhdCA8IDAgPyBzZWxmLmR1cmF0aW9uKCkgOiBzZWxmLnRvdGFsRHVyYXRpb24oKSkgLyAoc2VsZi5yZXZlcnNlZCgpID8gLXZhbHVlIDogdmFsdWUpKTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi5fZGlydHkpIHtcbiAgICAgIHBhcmVudCA9IHNlbGYucGFyZW50O1xuXG4gICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgcHJldiA9IGNoaWxkLl9wcmV2OyAvL3JlY29yZCBpdCBoZXJlIGluIGNhc2UgdGhlIHR3ZWVuIGNoYW5nZXMgcG9zaXRpb24gaW4gdGhlIHNlcXVlbmNlLi4uXG5cbiAgICAgICAgY2hpbGQuX2RpcnR5ICYmIGNoaWxkLnRvdGFsRHVyYXRpb24oKTsgLy9jb3VsZCBjaGFuZ2UgdGhlIHR3ZWVuLl9zdGFydFRpbWUsIHNvIG1ha2Ugc3VyZSB0aGUgYW5pbWF0aW9uJ3MgY2FjaGUgaXMgY2xlYW4gYmVmb3JlIGFuYWx5emluZyBpdC5cblxuICAgICAgICBzdGFydCA9IGNoaWxkLl9zdGFydDtcblxuICAgICAgICBpZiAoc3RhcnQgPiBwcmV2U3RhcnQgJiYgc2VsZi5fc29ydCAmJiBjaGlsZC5fdHMgJiYgIXNlbGYuX2xvY2spIHtcbiAgICAgICAgICAvL2luIGNhc2Ugb25lIG9mIHRoZSB0d2VlbnMgc2hpZnRlZCBvdXQgb2Ygb3JkZXIsIGl0IG5lZWRzIHRvIGJlIHJlLWluc2VydGVkIGludG8gdGhlIGNvcnJlY3QgcG9zaXRpb24gaW4gdGhlIHNlcXVlbmNlXG4gICAgICAgICAgc2VsZi5fbG9jayA9IDE7IC8vcHJldmVudCBlbmRsZXNzIHJlY3Vyc2l2ZSBjYWxscyAtIHRoZXJlIGFyZSBtZXRob2RzIHRoYXQgZ2V0IHRyaWdnZXJlZCB0aGF0IGNoZWNrIGR1cmF0aW9uL3RvdGFsRHVyYXRpb24gd2hlbiB3ZSBhZGQoKS5cblxuICAgICAgICAgIF9hZGRUb1RpbWVsaW5lKHNlbGYsIGNoaWxkLCBzdGFydCAtIGNoaWxkLl9kZWxheSwgMSkuX2xvY2sgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXZTdGFydCA9IHN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXJ0IDwgMCAmJiBjaGlsZC5fdHMpIHtcbiAgICAgICAgICAvL2NoaWxkcmVuIGFyZW4ndCBhbGxvd2VkIHRvIGhhdmUgbmVnYXRpdmUgc3RhcnRUaW1lcyB1bmxlc3Mgc21vb3RoQ2hpbGRUaW1pbmcgaXMgdHJ1ZSwgc28gYWRqdXN0IGhlcmUgaWYgb25lIGlzIGZvdW5kLlxuICAgICAgICAgIG1heCAtPSBzdGFydDtcblxuICAgICAgICAgIGlmICghcGFyZW50ICYmICFzZWxmLl9kcCB8fCBwYXJlbnQgJiYgcGFyZW50LnNtb290aENoaWxkVGltaW5nKSB7XG4gICAgICAgICAgICBzZWxmLl9zdGFydCArPSBzdGFydCAvIHNlbGYuX3RzO1xuICAgICAgICAgICAgc2VsZi5fdGltZSAtPSBzdGFydDtcbiAgICAgICAgICAgIHNlbGYuX3RUaW1lIC09IHN0YXJ0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYuc2hpZnRDaGlsZHJlbigtc3RhcnQsIGZhbHNlLCAtMWU5OTkpO1xuICAgICAgICAgIHByZXZTdGFydCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5fZW5kID4gbWF4ICYmIGNoaWxkLl90cyAmJiAobWF4ID0gY2hpbGQuX2VuZCk7XG4gICAgICAgIGNoaWxkID0gcHJldjtcbiAgICAgIH1cblxuICAgICAgX3NldER1cmF0aW9uKHNlbGYsIHNlbGYgPT09IF9nbG9iYWxUaW1lbGluZSAmJiBzZWxmLl90aW1lID4gbWF4ID8gc2VsZi5fdGltZSA6IG1heCwgMSwgMSk7XG5cbiAgICAgIHNlbGYuX2RpcnR5ID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZi5fdER1cjtcbiAgfTtcblxuICBUaW1lbGluZS51cGRhdGVSb290ID0gZnVuY3Rpb24gdXBkYXRlUm9vdCh0aW1lKSB7XG4gICAgaWYgKF9nbG9iYWxUaW1lbGluZS5fdHMpIHtcbiAgICAgIF9sYXp5U2FmZVJlbmRlcihfZ2xvYmFsVGltZWxpbmUsIF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lKHRpbWUsIF9nbG9iYWxUaW1lbGluZSkpO1xuXG4gICAgICBfbGFzdFJlbmRlcmVkRnJhbWUgPSBfdGlja2VyLmZyYW1lO1xuICAgIH1cblxuICAgIGlmIChfdGlja2VyLmZyYW1lID49IF9uZXh0R0NGcmFtZSkge1xuICAgICAgX25leHRHQ0ZyYW1lICs9IF9jb25maWcuYXV0b1NsZWVwIHx8IDEyMDtcbiAgICAgIHZhciBjaGlsZCA9IF9nbG9iYWxUaW1lbGluZS5fZmlyc3Q7XG4gICAgICBpZiAoIWNoaWxkIHx8ICFjaGlsZC5fdHMpIGlmIChfY29uZmlnLmF1dG9TbGVlcCAmJiBfdGlja2VyLl9saXN0ZW5lcnMubGVuZ3RoIDwgMikge1xuICAgICAgICB3aGlsZSAoY2hpbGQgJiYgIWNoaWxkLl90cykge1xuICAgICAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZCB8fCBfdGlja2VyLnNsZWVwKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBUaW1lbGluZTtcbn0oQW5pbWF0aW9uKTtcblxuX3NldERlZmF1bHRzKFRpbWVsaW5lLnByb3RvdHlwZSwge1xuICBfbG9jazogMCxcbiAgX2hhc1BhdXNlOiAwLFxuICBfZm9yY2luZzogMFxufSk7XG5cbnZhciBfYWRkQ29tcGxleFN0cmluZ1Byb3BUd2VlbiA9IGZ1bmN0aW9uIF9hZGRDb21wbGV4U3RyaW5nUHJvcFR3ZWVuKHRhcmdldCwgcHJvcCwgc3RhcnQsIGVuZCwgc2V0dGVyLCBzdHJpbmdGaWx0ZXIsIGZ1bmNQYXJhbSkge1xuICAvL25vdGU6IHdlIGNhbGwgX2FkZENvbXBsZXhTdHJpbmdQcm9wVHdlZW4uY2FsbCh0d2Vlbkluc3RhbmNlLi4uKSB0byBlbnN1cmUgdGhhdCBpdCdzIHNjb3BlZCBwcm9wZXJseS4gV2UgbWF5IGNhbGwgaXQgZnJvbSB3aXRoaW4gYSBwbHVnaW4gdG9vLCB0aHVzIFwidGhpc1wiIHdvdWxkIHJlZmVyIHRvIHRoZSBwbHVnaW4uXG4gIHZhciBwdCA9IG5ldyBQcm9wVHdlZW4odGhpcy5fcHQsIHRhcmdldCwgcHJvcCwgMCwgMSwgX3JlbmRlckNvbXBsZXhTdHJpbmcsIG51bGwsIHNldHRlciksXG4gICAgICBpbmRleCA9IDAsXG4gICAgICBtYXRjaEluZGV4ID0gMCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHN0YXJ0TnVtcyxcbiAgICAgIGNvbG9yLFxuICAgICAgZW5kTnVtLFxuICAgICAgY2h1bmssXG4gICAgICBzdGFydE51bSxcbiAgICAgIGhhc1JhbmRvbSxcbiAgICAgIGE7XG4gIHB0LmIgPSBzdGFydDtcbiAgcHQuZSA9IGVuZDtcbiAgc3RhcnQgKz0gXCJcIjsgLy9lbnN1cmUgdmFsdWVzIGFyZSBzdHJpbmdzXG5cbiAgZW5kICs9IFwiXCI7XG5cbiAgaWYgKGhhc1JhbmRvbSA9IH5lbmQuaW5kZXhPZihcInJhbmRvbShcIikpIHtcbiAgICBlbmQgPSBfcmVwbGFjZVJhbmRvbShlbmQpO1xuICB9XG5cbiAgaWYgKHN0cmluZ0ZpbHRlcikge1xuICAgIGEgPSBbc3RhcnQsIGVuZF07XG4gICAgc3RyaW5nRmlsdGVyKGEsIHRhcmdldCwgcHJvcCk7IC8vcGFzcyBhbiBhcnJheSB3aXRoIHRoZSBzdGFydGluZyBhbmQgZW5kaW5nIHZhbHVlcyBhbmQgbGV0IHRoZSBmaWx0ZXIgZG8gd2hhdGV2ZXIgaXQgbmVlZHMgdG8gdGhlIHZhbHVlcy5cblxuICAgIHN0YXJ0ID0gYVswXTtcbiAgICBlbmQgPSBhWzFdO1xuICB9XG5cbiAgc3RhcnROdW1zID0gc3RhcnQubWF0Y2goX2NvbXBsZXhTdHJpbmdOdW1FeHApIHx8IFtdO1xuXG4gIHdoaWxlIChyZXN1bHQgPSBfY29tcGxleFN0cmluZ051bUV4cC5leGVjKGVuZCkpIHtcbiAgICBlbmROdW0gPSByZXN1bHRbMF07XG4gICAgY2h1bmsgPSBlbmQuc3Vic3RyaW5nKGluZGV4LCByZXN1bHQuaW5kZXgpO1xuXG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICBjb2xvciA9IChjb2xvciArIDEpICUgNTtcbiAgICB9IGVsc2UgaWYgKGNodW5rLnN1YnN0cigtNSkgPT09IFwicmdiYShcIikge1xuICAgICAgY29sb3IgPSAxO1xuICAgIH1cblxuICAgIGlmIChlbmROdW0gIT09IHN0YXJ0TnVtc1ttYXRjaEluZGV4KytdKSB7XG4gICAgICBzdGFydE51bSA9IHBhcnNlRmxvYXQoc3RhcnROdW1zW21hdGNoSW5kZXggLSAxXSkgfHwgMDsgLy90aGVzZSBuZXN0ZWQgUHJvcFR3ZWVucyBhcmUgaGFuZGxlZCBpbiBhIHNwZWNpYWwgd2F5IC0gd2UnbGwgbmV2ZXIgYWN0dWFsbHkgY2FsbCBhIHJlbmRlciBvciBzZXR0ZXIgbWV0aG9kIG9uIHRoZW0uIFdlJ2xsIGp1c3QgbG9vcCB0aHJvdWdoIHRoZW0gaW4gdGhlIHBhcmVudCBjb21wbGV4IHN0cmluZyBQcm9wVHdlZW4ncyByZW5kZXIgbWV0aG9kLlxuXG4gICAgICBwdC5fcHQgPSB7XG4gICAgICAgIF9uZXh0OiBwdC5fcHQsXG4gICAgICAgIHA6IGNodW5rIHx8IG1hdGNoSW5kZXggPT09IDEgPyBjaHVuayA6IFwiLFwiLFxuICAgICAgICAvL25vdGU6IFNWRyBzcGVjIGFsbG93cyBvbWlzc2lvbiBvZiBjb21tYS9zcGFjZSB3aGVuIGEgbmVnYXRpdmUgc2lnbiBpcyB3ZWRnZWQgYmV0d2VlbiB0d28gbnVtYmVycywgbGlrZSAyLjUtNS4zIGluc3RlYWQgb2YgMi41LC01LjMgYnV0IHdoZW4gdHdlZW5pbmcsIHRoZSBuZWdhdGl2ZSB2YWx1ZSBtYXkgc3dpdGNoIHRvIHBvc2l0aXZlLCBzbyB3ZSBpbnNlcnQgdGhlIGNvbW1hIGp1c3QgaW4gY2FzZS5cbiAgICAgICAgczogc3RhcnROdW0sXG4gICAgICAgIGM6IGVuZE51bS5jaGFyQXQoMSkgPT09IFwiPVwiID8gcGFyc2VGbG9hdChlbmROdW0uc3Vic3RyKDIpKSAqIChlbmROdW0uY2hhckF0KDApID09PSBcIi1cIiA/IC0xIDogMSkgOiBwYXJzZUZsb2F0KGVuZE51bSkgLSBzdGFydE51bSxcbiAgICAgICAgbTogY29sb3IgJiYgY29sb3IgPCA0ID8gTWF0aC5yb3VuZCA6IDBcbiAgICAgIH07XG4gICAgICBpbmRleCA9IF9jb21wbGV4U3RyaW5nTnVtRXhwLmxhc3RJbmRleDtcbiAgICB9XG4gIH1cblxuICBwdC5jID0gaW5kZXggPCBlbmQubGVuZ3RoID8gZW5kLnN1YnN0cmluZyhpbmRleCwgZW5kLmxlbmd0aCkgOiBcIlwiOyAvL3dlIHVzZSB0aGUgXCJjXCIgb2YgdGhlIFByb3BUd2VlbiB0byBzdG9yZSB0aGUgZmluYWwgcGFydCBvZiB0aGUgc3RyaW5nIChhZnRlciB0aGUgbGFzdCBudW1iZXIpXG5cbiAgcHQuZnAgPSBmdW5jUGFyYW07XG5cbiAgaWYgKF9yZWxFeHAudGVzdChlbmQpIHx8IGhhc1JhbmRvbSkge1xuICAgIHB0LmUgPSAwOyAvL2lmIHRoZSBlbmQgc3RyaW5nIGNvbnRhaW5zIHJlbGF0aXZlIHZhbHVlcyBvciBkeW5hbWljIHJhbmRvbSguLi4pIHZhbHVlcywgZGVsZXRlIHRoZSBlbmQgaXQgc28gdGhhdCBvbiB0aGUgZmluYWwgcmVuZGVyIHdlIGRvbid0IGFjdHVhbGx5IHNldCBpdCB0byB0aGUgc3RyaW5nIHdpdGggKz0gb3IgLT0gY2hhcmFjdGVycyAoZm9yY2VzIGl0IHRvIHVzZSB0aGUgY2FsY3VsYXRlZCB2YWx1ZSkuXG4gIH1cblxuICB0aGlzLl9wdCA9IHB0OyAvL3N0YXJ0IHRoZSBsaW5rZWQgbGlzdCB3aXRoIHRoaXMgbmV3IFByb3BUd2Vlbi4gUmVtZW1iZXIsIHdlIGNhbGwgX2FkZENvbXBsZXhTdHJpbmdQcm9wVHdlZW4uY2FsbCh0d2Vlbkluc3RhbmNlLi4uKSB0byBlbnN1cmUgdGhhdCBpdCdzIHNjb3BlZCBwcm9wZXJseS4gV2UgbWF5IGNhbGwgaXQgZnJvbSB3aXRoaW4gYSBwbHVnaW4gdG9vLCB0aHVzIFwidGhpc1wiIHdvdWxkIHJlZmVyIHRvIHRoZSBwbHVnaW4uXG5cbiAgcmV0dXJuIHB0O1xufSxcbiAgICBfYWRkUHJvcFR3ZWVuID0gZnVuY3Rpb24gX2FkZFByb3BUd2Vlbih0YXJnZXQsIHByb3AsIHN0YXJ0LCBlbmQsIGluZGV4LCB0YXJnZXRzLCBtb2RpZmllciwgc3RyaW5nRmlsdGVyLCBmdW5jUGFyYW0pIHtcbiAgX2lzRnVuY3Rpb24oZW5kKSAmJiAoZW5kID0gZW5kKGluZGV4IHx8IDAsIHRhcmdldCwgdGFyZ2V0cykpO1xuICB2YXIgY3VycmVudFZhbHVlID0gdGFyZ2V0W3Byb3BdLFxuICAgICAgcGFyc2VkU3RhcnQgPSBzdGFydCAhPT0gXCJnZXRcIiA/IHN0YXJ0IDogIV9pc0Z1bmN0aW9uKGN1cnJlbnRWYWx1ZSkgPyBjdXJyZW50VmFsdWUgOiBmdW5jUGFyYW0gPyB0YXJnZXRbcHJvcC5pbmRleE9mKFwic2V0XCIpIHx8ICFfaXNGdW5jdGlvbih0YXJnZXRbXCJnZXRcIiArIHByb3Auc3Vic3RyKDMpXSkgPyBwcm9wIDogXCJnZXRcIiArIHByb3Auc3Vic3RyKDMpXShmdW5jUGFyYW0pIDogdGFyZ2V0W3Byb3BdKCksXG4gICAgICBzZXR0ZXIgPSAhX2lzRnVuY3Rpb24oY3VycmVudFZhbHVlKSA/IF9zZXR0ZXJQbGFpbiA6IGZ1bmNQYXJhbSA/IF9zZXR0ZXJGdW5jV2l0aFBhcmFtIDogX3NldHRlckZ1bmMsXG4gICAgICBwdDtcblxuICBpZiAoX2lzU3RyaW5nKGVuZCkpIHtcbiAgICBpZiAofmVuZC5pbmRleE9mKFwicmFuZG9tKFwiKSkge1xuICAgICAgZW5kID0gX3JlcGxhY2VSYW5kb20oZW5kKTtcbiAgICB9XG5cbiAgICBpZiAoZW5kLmNoYXJBdCgxKSA9PT0gXCI9XCIpIHtcbiAgICAgIHB0ID0gcGFyc2VGbG9hdChwYXJzZWRTdGFydCkgKyBwYXJzZUZsb2F0KGVuZC5zdWJzdHIoMikpICogKGVuZC5jaGFyQXQoMCkgPT09IFwiLVwiID8gLTEgOiAxKSArIChnZXRVbml0KHBhcnNlZFN0YXJ0KSB8fCAwKTtcblxuICAgICAgaWYgKHB0IHx8IHB0ID09PSAwKSB7XG4gICAgICAgIC8vIHRvIGF2b2lkIGlzTmFOLCBsaWtlIGlmIHNvbWVvbmUgcGFzc2VzIGluIGEgdmFsdWUgbGlrZSBcIiE9IHdoYXRldmVyXCJcbiAgICAgICAgZW5kID0gcHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcnNlZFN0YXJ0ICE9PSBlbmQpIHtcbiAgICBpZiAoIWlzTmFOKHBhcnNlZFN0YXJ0ICogZW5kKSAmJiBlbmQgIT09IFwiXCIpIHtcbiAgICAgIC8vIGZ1biBmYWN0OiBhbnkgbnVtYmVyIG11bHRpcGxpZWQgYnkgXCJcIiBpcyBldmFsdWF0ZWQgYXMgdGhlIG51bWJlciAwIVxuICAgICAgcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCB0YXJnZXQsIHByb3AsICtwYXJzZWRTdGFydCB8fCAwLCBlbmQgLSAocGFyc2VkU3RhcnQgfHwgMCksIHR5cGVvZiBjdXJyZW50VmFsdWUgPT09IFwiYm9vbGVhblwiID8gX3JlbmRlckJvb2xlYW4gOiBfcmVuZGVyUGxhaW4sIDAsIHNldHRlcik7XG4gICAgICBmdW5jUGFyYW0gJiYgKHB0LmZwID0gZnVuY1BhcmFtKTtcbiAgICAgIG1vZGlmaWVyICYmIHB0Lm1vZGlmaWVyKG1vZGlmaWVyLCB0aGlzLCB0YXJnZXQpO1xuICAgICAgcmV0dXJuIHRoaXMuX3B0ID0gcHQ7XG4gICAgfVxuXG4gICAgIWN1cnJlbnRWYWx1ZSAmJiAhKHByb3AgaW4gdGFyZ2V0KSAmJiBfbWlzc2luZ1BsdWdpbihwcm9wLCBlbmQpO1xuICAgIHJldHVybiBfYWRkQ29tcGxleFN0cmluZ1Byb3BUd2Vlbi5jYWxsKHRoaXMsIHRhcmdldCwgcHJvcCwgcGFyc2VkU3RhcnQsIGVuZCwgc2V0dGVyLCBzdHJpbmdGaWx0ZXIgfHwgX2NvbmZpZy5zdHJpbmdGaWx0ZXIsIGZ1bmNQYXJhbSk7XG4gIH1cbn0sXG4gICAgLy9jcmVhdGVzIGEgY29weSBvZiB0aGUgdmFycyBvYmplY3QgYW5kIHByb2Nlc3NlcyBhbnkgZnVuY3Rpb24tYmFzZWQgdmFsdWVzIChwdXR0aW5nIHRoZSByZXN1bHRpbmcgdmFsdWVzIGRpcmVjdGx5IGludG8gdGhlIGNvcHkpIGFzIHdlbGwgYXMgc3RyaW5ncyB3aXRoIFwicmFuZG9tKClcIiBpbiB0aGVtLiBJdCBkb2VzIE5PVCBwcm9jZXNzIHJlbGF0aXZlIHZhbHVlcy5cbl9wcm9jZXNzVmFycyA9IGZ1bmN0aW9uIF9wcm9jZXNzVmFycyh2YXJzLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzLCB0d2Vlbikge1xuICBfaXNGdW5jdGlvbih2YXJzKSAmJiAodmFycyA9IF9wYXJzZUZ1bmNPclN0cmluZyh2YXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cykpO1xuXG4gIGlmICghX2lzT2JqZWN0KHZhcnMpIHx8IHZhcnMuc3R5bGUgJiYgdmFycy5ub2RlVHlwZSB8fCBfaXNBcnJheSh2YXJzKSB8fCBfaXNUeXBlZEFycmF5KHZhcnMpKSB7XG4gICAgcmV0dXJuIF9pc1N0cmluZyh2YXJzKSA/IF9wYXJzZUZ1bmNPclN0cmluZyh2YXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cykgOiB2YXJzO1xuICB9XG5cbiAgdmFyIGNvcHkgPSB7fSxcbiAgICAgIHA7XG5cbiAgZm9yIChwIGluIHZhcnMpIHtcbiAgICBjb3B5W3BdID0gX3BhcnNlRnVuY09yU3RyaW5nKHZhcnNbcF0sIHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzKTtcbiAgfVxuXG4gIHJldHVybiBjb3B5O1xufSxcbiAgICBfY2hlY2tQbHVnaW4gPSBmdW5jdGlvbiBfY2hlY2tQbHVnaW4ocHJvcGVydHksIHZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzKSB7XG4gIHZhciBwbHVnaW4sIHB0LCBwdExvb2t1cCwgaTtcblxuICBpZiAoX3BsdWdpbnNbcHJvcGVydHldICYmIChwbHVnaW4gPSBuZXcgX3BsdWdpbnNbcHJvcGVydHldKCkpLmluaXQodGFyZ2V0LCBwbHVnaW4ucmF3VmFycyA/IHZhcnNbcHJvcGVydHldIDogX3Byb2Nlc3NWYXJzKHZhcnNbcHJvcGVydHldLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzLCB0d2VlbiksIHR3ZWVuLCBpbmRleCwgdGFyZ2V0cykgIT09IGZhbHNlKSB7XG4gICAgdHdlZW4uX3B0ID0gcHQgPSBuZXcgUHJvcFR3ZWVuKHR3ZWVuLl9wdCwgdGFyZ2V0LCBwcm9wZXJ0eSwgMCwgMSwgcGx1Z2luLnJlbmRlciwgcGx1Z2luLCAwLCBwbHVnaW4ucHJpb3JpdHkpO1xuXG4gICAgaWYgKHR3ZWVuICE9PSBfcXVpY2tUd2Vlbikge1xuICAgICAgcHRMb29rdXAgPSB0d2Vlbi5fcHRMb29rdXBbdHdlZW4uX3RhcmdldHMuaW5kZXhPZih0YXJnZXQpXTsgLy9ub3RlOiB3ZSBjYW4ndCB1c2UgdHdlZW4uX3B0TG9va3VwW2luZGV4XSBiZWNhdXNlIGZvciBzdGFnZ2VyZWQgdHdlZW5zLCB0aGUgaW5kZXggZnJvbSB0aGUgZnVsbFRhcmdldHMgYXJyYXkgd29uJ3QgbWF0Y2ggd2hhdCBpdCBpcyBpbiBlYWNoIGluZGl2aWR1YWwgdHdlZW4gdGhhdCBzcGF3bnMgZnJvbSB0aGUgc3RhZ2dlci5cblxuICAgICAgaSA9IHBsdWdpbi5fcHJvcHMubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHB0TG9va3VwW3BsdWdpbi5fcHJvcHNbaV1dID0gcHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBsdWdpbjtcbn0sXG4gICAgX292ZXJ3cml0aW5nVHdlZW4sXG4gICAgLy9zdG9yZSBhIHJlZmVyZW5jZSB0ZW1wb3JhcmlseSBzbyB3ZSBjYW4gYXZvaWQgb3ZlcndyaXRpbmcgaXRzZWxmLlxuX2luaXRUd2VlbiA9IGZ1bmN0aW9uIF9pbml0VHdlZW4odHdlZW4sIHRpbWUpIHtcbiAgdmFyIHZhcnMgPSB0d2Vlbi52YXJzLFxuICAgICAgZWFzZSA9IHZhcnMuZWFzZSxcbiAgICAgIHN0YXJ0QXQgPSB2YXJzLnN0YXJ0QXQsXG4gICAgICBpbW1lZGlhdGVSZW5kZXIgPSB2YXJzLmltbWVkaWF0ZVJlbmRlcixcbiAgICAgIGxhenkgPSB2YXJzLmxhenksXG4gICAgICBvblVwZGF0ZSA9IHZhcnMub25VcGRhdGUsXG4gICAgICBvblVwZGF0ZVBhcmFtcyA9IHZhcnMub25VcGRhdGVQYXJhbXMsXG4gICAgICBjYWxsYmFja1Njb3BlID0gdmFycy5jYWxsYmFja1Njb3BlLFxuICAgICAgcnVuQmFja3dhcmRzID0gdmFycy5ydW5CYWNrd2FyZHMsXG4gICAgICB5b3lvRWFzZSA9IHZhcnMueW95b0Vhc2UsXG4gICAgICBrZXlmcmFtZXMgPSB2YXJzLmtleWZyYW1lcyxcbiAgICAgIGF1dG9SZXZlcnQgPSB2YXJzLmF1dG9SZXZlcnQsXG4gICAgICBkdXIgPSB0d2Vlbi5fZHVyLFxuICAgICAgcHJldlN0YXJ0QXQgPSB0d2Vlbi5fc3RhcnRBdCxcbiAgICAgIHRhcmdldHMgPSB0d2Vlbi5fdGFyZ2V0cyxcbiAgICAgIHBhcmVudCA9IHR3ZWVuLnBhcmVudCxcbiAgICAgIGZ1bGxUYXJnZXRzID0gcGFyZW50ICYmIHBhcmVudC5kYXRhID09PSBcIm5lc3RlZFwiID8gcGFyZW50LnBhcmVudC5fdGFyZ2V0cyA6IHRhcmdldHMsXG4gICAgICBhdXRvT3ZlcndyaXRlID0gdHdlZW4uX292ZXJ3cml0ZSA9PT0gXCJhdXRvXCIgJiYgIV9zdXBwcmVzc092ZXJ3cml0ZXMsXG4gICAgICB0bCA9IHR3ZWVuLnRpbWVsaW5lLFxuICAgICAgY2xlYW5WYXJzLFxuICAgICAgaSxcbiAgICAgIHAsXG4gICAgICBwdCxcbiAgICAgIHRhcmdldCxcbiAgICAgIGhhc1ByaW9yaXR5LFxuICAgICAgZ3NEYXRhLFxuICAgICAgaGFybmVzcyxcbiAgICAgIHBsdWdpbixcbiAgICAgIHB0TG9va3VwLFxuICAgICAgaW5kZXgsXG4gICAgICBoYXJuZXNzVmFycyxcbiAgICAgIG92ZXJ3cml0dGVuO1xuICB0bCAmJiAoIWtleWZyYW1lcyB8fCAhZWFzZSkgJiYgKGVhc2UgPSBcIm5vbmVcIik7XG4gIHR3ZWVuLl9lYXNlID0gX3BhcnNlRWFzZShlYXNlLCBfZGVmYXVsdHMuZWFzZSk7XG4gIHR3ZWVuLl95RWFzZSA9IHlveW9FYXNlID8gX2ludmVydEVhc2UoX3BhcnNlRWFzZSh5b3lvRWFzZSA9PT0gdHJ1ZSA/IGVhc2UgOiB5b3lvRWFzZSwgX2RlZmF1bHRzLmVhc2UpKSA6IDA7XG5cbiAgaWYgKHlveW9FYXNlICYmIHR3ZWVuLl95b3lvICYmICF0d2Vlbi5fcmVwZWF0KSB7XG4gICAgLy90aGVyZSBtdXN0IGhhdmUgYmVlbiBhIHBhcmVudCB0aW1lbGluZSB3aXRoIHlveW86dHJ1ZSB0aGF0IGlzIGN1cnJlbnRseSBpbiBpdHMgeW95byBwaGFzZSwgc28gZmxpcCB0aGUgZWFzZXMuXG4gICAgeW95b0Vhc2UgPSB0d2Vlbi5feUVhc2U7XG4gICAgdHdlZW4uX3lFYXNlID0gdHdlZW4uX2Vhc2U7XG4gICAgdHdlZW4uX2Vhc2UgPSB5b3lvRWFzZTtcbiAgfVxuXG4gIHR3ZWVuLl9mcm9tID0gIXRsICYmICEhdmFycy5ydW5CYWNrd2FyZHM7IC8vbmVzdGVkIHRpbWVsaW5lcyBzaG91bGQgbmV2ZXIgcnVuIGJhY2t3YXJkcyAtIHRoZSBiYWNrd2FyZHMtbmVzcyBpcyBpbiB0aGUgY2hpbGQgdHdlZW5zLlxuXG4gIGlmICghdGwpIHtcbiAgICAvL2lmIHRoZXJlJ3MgYW4gaW50ZXJuYWwgdGltZWxpbmUsIHNraXAgYWxsIHRoZSBwYXJzaW5nIGJlY2F1c2Ugd2UgcGFzc2VkIHRoYXQgdGFzayBkb3duIHRoZSBjaGFpbi5cbiAgICBoYXJuZXNzID0gdGFyZ2V0c1swXSA/IF9nZXRDYWNoZSh0YXJnZXRzWzBdKS5oYXJuZXNzIDogMDtcbiAgICBoYXJuZXNzVmFycyA9IGhhcm5lc3MgJiYgdmFyc1toYXJuZXNzLnByb3BdOyAvL3NvbWVvbmUgbWF5IG5lZWQgdG8gc3BlY2lmeSBDU1Mtc3BlY2lmaWMgdmFsdWVzIEFORCBub24tQ1NTIHZhbHVlcywgbGlrZSBpZiB0aGUgZWxlbWVudCBoYXMgYW4gXCJ4XCIgcHJvcGVydHkgcGx1cyBpdCdzIGEgc3RhbmRhcmQgRE9NIGVsZW1lbnQuIFdlIGFsbG93IHBlb3BsZSB0byBkaXN0aW5ndWlzaCBieSB3cmFwcGluZyBwbHVnaW4tc3BlY2lmaWMgc3R1ZmYgaW4gYSBjc3M6e30gb2JqZWN0IGZvciBleGFtcGxlLlxuXG4gICAgY2xlYW5WYXJzID0gX2NvcHlFeGNsdWRpbmcodmFycywgX3Jlc2VydmVkUHJvcHMpO1xuICAgIHByZXZTdGFydEF0ICYmIHByZXZTdGFydEF0LnJlbmRlcigtMSwgdHJ1ZSkua2lsbCgpO1xuXG4gICAgaWYgKHN0YXJ0QXQpIHtcbiAgICAgIF9yZW1vdmVGcm9tUGFyZW50KHR3ZWVuLl9zdGFydEF0ID0gVHdlZW4uc2V0KHRhcmdldHMsIF9zZXREZWZhdWx0cyh7XG4gICAgICAgIGRhdGE6IFwiaXNTdGFydFwiLFxuICAgICAgICBvdmVyd3JpdGU6IGZhbHNlLFxuICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgaW1tZWRpYXRlUmVuZGVyOiB0cnVlLFxuICAgICAgICBsYXp5OiBfaXNOb3RGYWxzZShsYXp5KSxcbiAgICAgICAgc3RhcnRBdDogbnVsbCxcbiAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgIG9uVXBkYXRlOiBvblVwZGF0ZSxcbiAgICAgICAgb25VcGRhdGVQYXJhbXM6IG9uVXBkYXRlUGFyYW1zLFxuICAgICAgICBjYWxsYmFja1Njb3BlOiBjYWxsYmFja1Njb3BlLFxuICAgICAgICBzdGFnZ2VyOiAwXG4gICAgICB9LCBzdGFydEF0KSkpOyAvL2NvcHkgdGhlIHByb3BlcnRpZXMvdmFsdWVzIGludG8gYSBuZXcgb2JqZWN0IHRvIGF2b2lkIGNvbGxpc2lvbnMsIGxpa2UgdmFyIHRvID0ge3g6MH0sIGZyb20gPSB7eDo1MDB9OyB0aW1lbGluZS5mcm9tVG8oZSwgZnJvbSwgdG8pLmZyb21UbyhlLCB0bywgZnJvbSk7XG5cblxuICAgICAgdGltZSA8IDAgJiYgIWltbWVkaWF0ZVJlbmRlciAmJiAhYXV0b1JldmVydCAmJiB0d2Vlbi5fc3RhcnRBdC5yZW5kZXIoLTEsIHRydWUpOyAvLyByYXJlIGVkZ2UgY2FzZSwgbGlrZSBpZiBhIHJlbmRlciBpcyBmb3JjZWQgaW4gdGhlIG5lZ2F0aXZlIGRpcmVjdGlvbiBvZiBhIG5vbi1pbml0dGVkIHR3ZWVuLlxuXG4gICAgICBpZiAoaW1tZWRpYXRlUmVuZGVyKSB7XG4gICAgICAgIHRpbWUgPiAwICYmICFhdXRvUmV2ZXJ0ICYmICh0d2Vlbi5fc3RhcnRBdCA9IDApOyAvL3R3ZWVucyB0aGF0IHJlbmRlciBpbW1lZGlhdGVseSAobGlrZSBtb3N0IGZyb20oKSBhbmQgZnJvbVRvKCkgdHdlZW5zKSBzaG91bGRuJ3QgcmV2ZXJ0IHdoZW4gdGhlaXIgcGFyZW50IHRpbWVsaW5lJ3MgcGxheWhlYWQgZ29lcyBiYWNrd2FyZCBwYXN0IHRoZSBzdGFydFRpbWUgYmVjYXVzZSB0aGUgaW5pdGlhbCByZW5kZXIgY291bGQgaGF2ZSBoYXBwZW5lZCBhbnl0aW1lIGFuZCBpdCBzaG91bGRuJ3QgYmUgZGlyZWN0bHkgY29ycmVsYXRlZCB0byB0aGlzIHR3ZWVuJ3Mgc3RhcnRUaW1lLiBJbWFnaW5lIHNldHRpbmcgdXAgYSBjb21wbGV4IGFuaW1hdGlvbiB3aGVyZSB0aGUgYmVnaW5uaW5nIHN0YXRlcyBvZiB2YXJpb3VzIG9iamVjdHMgYXJlIHJlbmRlcmVkIGltbWVkaWF0ZWx5IGJ1dCB0aGUgdHdlZW4gZG9lc24ndCBoYXBwZW4gZm9yIHF1aXRlIHNvbWUgdGltZSAtIGlmIHdlIHJldmVydCB0byB0aGUgc3RhcnRpbmcgdmFsdWVzIGFzIHNvb24gYXMgdGhlIHBsYXloZWFkIGdvZXMgYmFja3dhcmQgcGFzdCB0aGUgdHdlZW4ncyBzdGFydFRpbWUsIGl0IHdpbGwgdGhyb3cgdGhpbmdzIG9mZiB2aXN1YWxseS4gUmV2ZXJzaW9uIHNob3VsZCBvbmx5IGhhcHBlbiBpbiBUaW1lbGluZSBpbnN0YW5jZXMgd2hlcmUgaW1tZWRpYXRlUmVuZGVyIHdhcyBmYWxzZSBvciB3aGVuIGF1dG9SZXZlcnQgaXMgZXhwbGljaXRseSBzZXQgdG8gdHJ1ZS5cblxuICAgICAgICBpZiAoZHVyICYmIHRpbWUgPD0gMCkge1xuICAgICAgICAgIHRpbWUgJiYgKHR3ZWVuLl96VGltZSA9IHRpbWUpO1xuICAgICAgICAgIHJldHVybjsgLy93ZSBza2lwIGluaXRpYWxpemF0aW9uIGhlcmUgc28gdGhhdCBvdmVyd3JpdGluZyBkb2Vzbid0IG9jY3VyIHVudGlsIHRoZSB0d2VlbiBhY3R1YWxseSBiZWdpbnMuIE90aGVyd2lzZSwgaWYgeW91IGNyZWF0ZSBzZXZlcmFsIGltbWVkaWF0ZVJlbmRlcjp0cnVlIHR3ZWVucyBvZiB0aGUgc2FtZSB0YXJnZXQvcHJvcGVydGllcyB0byBkcm9wIGludG8gYSBUaW1lbGluZSwgdGhlIGxhc3Qgb25lIGNyZWF0ZWQgd291bGQgb3ZlcndyaXRlIHRoZSBmaXJzdCBvbmVzIGJlY2F1c2UgdGhleSBkaWRuJ3QgZ2V0IHBsYWNlZCBpbnRvIHRoZSB0aW1lbGluZSB5ZXQgYmVmb3JlIHRoZSBmaXJzdCByZW5kZXIgb2NjdXJzIGFuZCBraWNrcyBpbiBvdmVyd3JpdGluZy5cbiAgICAgICAgfSAvLyBpZiAodGltZSA+IDApIHtcbiAgICAgICAgLy8gXHRhdXRvUmV2ZXJ0IHx8ICh0d2Vlbi5fc3RhcnRBdCA9IDApOyAvL3R3ZWVucyB0aGF0IHJlbmRlciBpbW1lZGlhdGVseSAobGlrZSBtb3N0IGZyb20oKSBhbmQgZnJvbVRvKCkgdHdlZW5zKSBzaG91bGRuJ3QgcmV2ZXJ0IHdoZW4gdGhlaXIgcGFyZW50IHRpbWVsaW5lJ3MgcGxheWhlYWQgZ29lcyBiYWNrd2FyZCBwYXN0IHRoZSBzdGFydFRpbWUgYmVjYXVzZSB0aGUgaW5pdGlhbCByZW5kZXIgY291bGQgaGF2ZSBoYXBwZW5lZCBhbnl0aW1lIGFuZCBpdCBzaG91bGRuJ3QgYmUgZGlyZWN0bHkgY29ycmVsYXRlZCB0byB0aGlzIHR3ZWVuJ3Mgc3RhcnRUaW1lLiBJbWFnaW5lIHNldHRpbmcgdXAgYSBjb21wbGV4IGFuaW1hdGlvbiB3aGVyZSB0aGUgYmVnaW5uaW5nIHN0YXRlcyBvZiB2YXJpb3VzIG9iamVjdHMgYXJlIHJlbmRlcmVkIGltbWVkaWF0ZWx5IGJ1dCB0aGUgdHdlZW4gZG9lc24ndCBoYXBwZW4gZm9yIHF1aXRlIHNvbWUgdGltZSAtIGlmIHdlIHJldmVydCB0byB0aGUgc3RhcnRpbmcgdmFsdWVzIGFzIHNvb24gYXMgdGhlIHBsYXloZWFkIGdvZXMgYmFja3dhcmQgcGFzdCB0aGUgdHdlZW4ncyBzdGFydFRpbWUsIGl0IHdpbGwgdGhyb3cgdGhpbmdzIG9mZiB2aXN1YWxseS4gUmV2ZXJzaW9uIHNob3VsZCBvbmx5IGhhcHBlbiBpbiBUaW1lbGluZSBpbnN0YW5jZXMgd2hlcmUgaW1tZWRpYXRlUmVuZGVyIHdhcyBmYWxzZSBvciB3aGVuIGF1dG9SZXZlcnQgaXMgZXhwbGljaXRseSBzZXQgdG8gdHJ1ZS5cbiAgICAgICAgLy8gfSBlbHNlIGlmIChkdXIgJiYgISh0aW1lIDwgMCAmJiBwcmV2U3RhcnRBdCkpIHtcbiAgICAgICAgLy8gXHR0aW1lICYmICh0d2Vlbi5felRpbWUgPSB0aW1lKTtcbiAgICAgICAgLy8gXHRyZXR1cm47IC8vd2Ugc2tpcCBpbml0aWFsaXphdGlvbiBoZXJlIHNvIHRoYXQgb3ZlcndyaXRpbmcgZG9lc24ndCBvY2N1ciB1bnRpbCB0aGUgdHdlZW4gYWN0dWFsbHkgYmVnaW5zLiBPdGhlcndpc2UsIGlmIHlvdSBjcmVhdGUgc2V2ZXJhbCBpbW1lZGlhdGVSZW5kZXI6dHJ1ZSB0d2VlbnMgb2YgdGhlIHNhbWUgdGFyZ2V0L3Byb3BlcnRpZXMgdG8gZHJvcCBpbnRvIGEgVGltZWxpbmUsIHRoZSBsYXN0IG9uZSBjcmVhdGVkIHdvdWxkIG92ZXJ3cml0ZSB0aGUgZmlyc3Qgb25lcyBiZWNhdXNlIHRoZXkgZGlkbid0IGdldCBwbGFjZWQgaW50byB0aGUgdGltZWxpbmUgeWV0IGJlZm9yZSB0aGUgZmlyc3QgcmVuZGVyIG9jY3VycyBhbmQga2lja3MgaW4gb3ZlcndyaXRpbmcuXG4gICAgICAgIC8vIH1cblxuICAgICAgfSBlbHNlIGlmIChhdXRvUmV2ZXJ0ID09PSBmYWxzZSkge1xuICAgICAgICB0d2Vlbi5fc3RhcnRBdCA9IDA7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChydW5CYWNrd2FyZHMgJiYgZHVyKSB7XG4gICAgICAvL2Zyb20oKSB0d2VlbnMgbXVzdCBiZSBoYW5kbGVkIHVuaXF1ZWx5OiB0aGVpciBiZWdpbm5pbmcgdmFsdWVzIG11c3QgYmUgcmVuZGVyZWQgYnV0IHdlIGRvbid0IHdhbnQgb3ZlcndyaXRpbmcgdG8gb2NjdXIgeWV0ICh3aGVuIHRpbWUgaXMgc3RpbGwgMCkuIFdhaXQgdW50aWwgdGhlIHR3ZWVuIGFjdHVhbGx5IGJlZ2lucyBiZWZvcmUgZG9pbmcgYWxsIHRoZSByb3V0aW5lcyBsaWtlIG92ZXJ3cml0aW5nLiBBdCB0aGF0IHRpbWUsIHdlIHNob3VsZCByZW5kZXIgYXQgdGhlIEVORCBvZiB0aGUgdHdlZW4gdG8gZW5zdXJlIHRoYXQgdGhpbmdzIGluaXRpYWxpemUgY29ycmVjdGx5IChyZW1lbWJlciwgZnJvbSgpIHR3ZWVucyBnbyBiYWNrd2FyZHMpXG4gICAgICBpZiAocHJldlN0YXJ0QXQpIHtcbiAgICAgICAgIWF1dG9SZXZlcnQgJiYgKHR3ZWVuLl9zdGFydEF0ID0gMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aW1lICYmIChpbW1lZGlhdGVSZW5kZXIgPSBmYWxzZSk7IC8vaW4gcmFyZSBjYXNlcyAobGlrZSBpZiBhIGZyb20oKSB0d2VlbiBydW5zIGFuZCB0aGVuIGlzIGludmFsaWRhdGUoKS1lZCksIGltbWVkaWF0ZVJlbmRlciBjb3VsZCBiZSB0cnVlIGJ1dCB0aGUgaW5pdGlhbCBmb3JjZWQtcmVuZGVyIGdldHMgc2tpcHBlZCwgc28gdGhlcmUncyBubyBuZWVkIHRvIGZvcmNlIHRoZSByZW5kZXIgaW4gdGhpcyBjb250ZXh0IHdoZW4gdGhlIF90aW1lIGlzIGdyZWF0ZXIgdGhhbiAwXG5cbiAgICAgICAgcCA9IF9zZXREZWZhdWx0cyh7XG4gICAgICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcbiAgICAgICAgICBkYXRhOiBcImlzRnJvbVN0YXJ0XCIsXG4gICAgICAgICAgLy93ZSB0YWcgdGhlIHR3ZWVuIHdpdGggYXMgXCJpc0Zyb21TdGFydFwiIHNvIHRoYXQgaWYgW2luc2lkZSBhIHBsdWdpbl0gd2UgbmVlZCB0byBvbmx5IGRvIHNvbWV0aGluZyBhdCB0aGUgdmVyeSBFTkQgb2YgYSB0d2Vlbiwgd2UgaGF2ZSBhIHdheSBvZiBpZGVudGlmeWluZyB0aGlzIHR3ZWVuIGFzIG1lcmVseSB0aGUgb25lIHRoYXQncyBzZXR0aW5nIHRoZSBiZWdpbm5pbmcgdmFsdWVzIGZvciBhIFwiZnJvbSgpXCIgdHdlZW4uIEZvciBleGFtcGxlLCBjbGVhclByb3BzIGluIENTU1BsdWdpbiBzaG91bGQgb25seSBnZXQgYXBwbGllZCBhdCB0aGUgdmVyeSBFTkQgb2YgYSB0d2VlbiBhbmQgd2l0aG91dCB0aGlzIHRhZywgZnJvbSguLi57aGVpZ2h0OjEwMCwgY2xlYXJQcm9wczpcImhlaWdodFwiLCBkZWxheToxfSkgd291bGQgd2lwZSB0aGUgaGVpZ2h0IGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHR3ZWVuIGFuZCBhZnRlciAxIHNlY29uZCwgaXQnZCBraWNrIGJhY2sgaW4uXG4gICAgICAgICAgbGF6eTogaW1tZWRpYXRlUmVuZGVyICYmIF9pc05vdEZhbHNlKGxhenkpLFxuICAgICAgICAgIGltbWVkaWF0ZVJlbmRlcjogaW1tZWRpYXRlUmVuZGVyLFxuICAgICAgICAgIC8vemVyby1kdXJhdGlvbiB0d2VlbnMgcmVuZGVyIGltbWVkaWF0ZWx5IGJ5IGRlZmF1bHQsIGJ1dCBpZiB3ZSdyZSBub3Qgc3BlY2lmaWNhbGx5IGluc3RydWN0ZWQgdG8gcmVuZGVyIHRoaXMgdHdlZW4gaW1tZWRpYXRlbHksIHdlIHNob3VsZCBza2lwIHRoaXMgYW5kIG1lcmVseSBfaW5pdCgpIHRvIHJlY29yZCB0aGUgc3RhcnRpbmcgdmFsdWVzIChyZW5kZXJpbmcgdGhlbSBpbW1lZGlhdGVseSB3b3VsZCBwdXNoIHRoZW0gdG8gY29tcGxldGlvbiB3aGljaCBpcyB3YXN0ZWZ1bCBpbiB0aGF0IGNhc2UgLSB3ZSdkIGhhdmUgdG8gcmVuZGVyKC0xKSBpbW1lZGlhdGVseSBhZnRlcilcbiAgICAgICAgICBzdGFnZ2VyOiAwLFxuICAgICAgICAgIHBhcmVudDogcGFyZW50IC8vZW5zdXJlcyB0aGF0IG5lc3RlZCB0d2VlbnMgdGhhdCBoYWQgYSBzdGFnZ2VyIGFyZSBoYW5kbGVkIHByb3Blcmx5LCBsaWtlIGdzYXAuZnJvbShcIi5jbGFzc1wiLCB7eTpnc2FwLnV0aWxzLndyYXAoWy0xMDAsMTAwXSl9KVxuXG4gICAgICAgIH0sIGNsZWFuVmFycyk7XG4gICAgICAgIGhhcm5lc3NWYXJzICYmIChwW2hhcm5lc3MucHJvcF0gPSBoYXJuZXNzVmFycyk7IC8vIGluIGNhc2Ugc29tZW9uZSBkb2VzIHNvbWV0aGluZyBsaWtlIC5mcm9tKC4uLiwge2Nzczp7fX0pXG5cbiAgICAgICAgX3JlbW92ZUZyb21QYXJlbnQodHdlZW4uX3N0YXJ0QXQgPSBUd2Vlbi5zZXQodGFyZ2V0cywgcCkpO1xuXG4gICAgICAgIHRpbWUgPCAwICYmIHR3ZWVuLl9zdGFydEF0LnJlbmRlcigtMSwgdHJ1ZSk7IC8vIHJhcmUgZWRnZSBjYXNlLCBsaWtlIGlmIGEgcmVuZGVyIGlzIGZvcmNlZCBpbiB0aGUgbmVnYXRpdmUgZGlyZWN0aW9uIG9mIGEgbm9uLWluaXR0ZWQgZnJvbSgpIHR3ZWVuLlxuXG4gICAgICAgIGlmICghaW1tZWRpYXRlUmVuZGVyKSB7XG4gICAgICAgICAgX2luaXRUd2Vlbih0d2Vlbi5fc3RhcnRBdCwgX3RpbnlOdW0pOyAvL2Vuc3VyZXMgdGhhdCB0aGUgaW5pdGlhbCB2YWx1ZXMgYXJlIHJlY29yZGVkXG5cbiAgICAgICAgfSBlbHNlIGlmICghdGltZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHR3ZWVuLl9wdCA9IDA7XG4gICAgbGF6eSA9IGR1ciAmJiBfaXNOb3RGYWxzZShsYXp5KSB8fCBsYXp5ICYmICFkdXI7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFyZ2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgdGFyZ2V0ID0gdGFyZ2V0c1tpXTtcbiAgICAgIGdzRGF0YSA9IHRhcmdldC5fZ3NhcCB8fCBfaGFybmVzcyh0YXJnZXRzKVtpXS5fZ3NhcDtcbiAgICAgIHR3ZWVuLl9wdExvb2t1cFtpXSA9IHB0TG9va3VwID0ge307XG4gICAgICBfbGF6eUxvb2t1cFtnc0RhdGEuaWRdICYmIF9sYXp5VHdlZW5zLmxlbmd0aCAmJiBfbGF6eVJlbmRlcigpOyAvL2lmIG90aGVyIHR3ZWVucyBvZiB0aGUgc2FtZSB0YXJnZXQgaGF2ZSByZWNlbnRseSBpbml0dGVkIGJ1dCBoYXZlbid0IHJlbmRlcmVkIHlldCwgd2UndmUgZ290IHRvIGZvcmNlIHRoZSByZW5kZXIgc28gdGhhdCB0aGUgc3RhcnRpbmcgdmFsdWVzIGFyZSBjb3JyZWN0IChpbWFnaW5lIHBvcHVsYXRpbmcgYSB0aW1lbGluZSB3aXRoIGEgYnVuY2ggb2Ygc2VxdWVudGlhbCB0d2VlbnMgYW5kIHRoZW4ganVtcGluZyB0byB0aGUgZW5kKVxuXG4gICAgICBpbmRleCA9IGZ1bGxUYXJnZXRzID09PSB0YXJnZXRzID8gaSA6IGZ1bGxUYXJnZXRzLmluZGV4T2YodGFyZ2V0KTtcblxuICAgICAgaWYgKGhhcm5lc3MgJiYgKHBsdWdpbiA9IG5ldyBoYXJuZXNzKCkpLmluaXQodGFyZ2V0LCBoYXJuZXNzVmFycyB8fCBjbGVhblZhcnMsIHR3ZWVuLCBpbmRleCwgZnVsbFRhcmdldHMpICE9PSBmYWxzZSkge1xuICAgICAgICB0d2Vlbi5fcHQgPSBwdCA9IG5ldyBQcm9wVHdlZW4odHdlZW4uX3B0LCB0YXJnZXQsIHBsdWdpbi5uYW1lLCAwLCAxLCBwbHVnaW4ucmVuZGVyLCBwbHVnaW4sIDAsIHBsdWdpbi5wcmlvcml0eSk7XG5cbiAgICAgICAgcGx1Z2luLl9wcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgcHRMb29rdXBbbmFtZV0gPSBwdDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcGx1Z2luLnByaW9yaXR5ICYmIChoYXNQcmlvcml0eSA9IDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWhhcm5lc3MgfHwgaGFybmVzc1ZhcnMpIHtcbiAgICAgICAgZm9yIChwIGluIGNsZWFuVmFycykge1xuICAgICAgICAgIGlmIChfcGx1Z2luc1twXSAmJiAocGx1Z2luID0gX2NoZWNrUGx1Z2luKHAsIGNsZWFuVmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXQsIGZ1bGxUYXJnZXRzKSkpIHtcbiAgICAgICAgICAgIHBsdWdpbi5wcmlvcml0eSAmJiAoaGFzUHJpb3JpdHkgPSAxKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHRMb29rdXBbcF0gPSBwdCA9IF9hZGRQcm9wVHdlZW4uY2FsbCh0d2VlbiwgdGFyZ2V0LCBwLCBcImdldFwiLCBjbGVhblZhcnNbcF0sIGluZGV4LCBmdWxsVGFyZ2V0cywgMCwgdmFycy5zdHJpbmdGaWx0ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0d2Vlbi5fb3AgJiYgdHdlZW4uX29wW2ldICYmIHR3ZWVuLmtpbGwodGFyZ2V0LCB0d2Vlbi5fb3BbaV0pO1xuXG4gICAgICBpZiAoYXV0b092ZXJ3cml0ZSAmJiB0d2Vlbi5fcHQpIHtcbiAgICAgICAgX292ZXJ3cml0aW5nVHdlZW4gPSB0d2VlbjtcblxuICAgICAgICBfZ2xvYmFsVGltZWxpbmUua2lsbFR3ZWVuc09mKHRhcmdldCwgcHRMb29rdXAsIHR3ZWVuLmdsb2JhbFRpbWUodGltZSkpOyAvLyBtYWtlIHN1cmUgdGhlIG92ZXJ3cml0aW5nIGRvZXNuJ3Qgb3ZlcndyaXRlIFRISVMgdHdlZW4hISFcblxuXG4gICAgICAgIG92ZXJ3cml0dGVuID0gIXR3ZWVuLnBhcmVudDtcbiAgICAgICAgX292ZXJ3cml0aW5nVHdlZW4gPSAwO1xuICAgICAgfVxuXG4gICAgICB0d2Vlbi5fcHQgJiYgbGF6eSAmJiAoX2xhenlMb29rdXBbZ3NEYXRhLmlkXSA9IDEpO1xuICAgIH1cblxuICAgIGhhc1ByaW9yaXR5ICYmIF9zb3J0UHJvcFR3ZWVuc0J5UHJpb3JpdHkodHdlZW4pO1xuICAgIHR3ZWVuLl9vbkluaXQgJiYgdHdlZW4uX29uSW5pdCh0d2Vlbik7IC8vcGx1Z2lucyBsaWtlIFJvdW5kUHJvcHMgbXVzdCB3YWl0IHVudGlsIEFMTCBvZiB0aGUgUHJvcFR3ZWVucyBhcmUgaW5zdGFudGlhdGVkLiBJbiB0aGUgcGx1Z2luJ3MgaW5pdCgpIGZ1bmN0aW9uLCBpdCBzZXRzIHRoZSBfb25Jbml0IG9uIHRoZSB0d2VlbiBpbnN0YW5jZS4gTWF5IG5vdCBiZSBwcmV0dHkvaW50dWl0aXZlLCBidXQgaXQncyBmYXN0IGFuZCBrZWVwcyBmaWxlIHNpemUgZG93bi5cbiAgfVxuXG4gIHR3ZWVuLl9vblVwZGF0ZSA9IG9uVXBkYXRlO1xuICB0d2Vlbi5faW5pdHRlZCA9ICghdHdlZW4uX29wIHx8IHR3ZWVuLl9wdCkgJiYgIW92ZXJ3cml0dGVuOyAvLyBpZiBvdmVyd3JpdHRlblByb3BzIHJlc3VsdGVkIGluIHRoZSBlbnRpcmUgdHdlZW4gYmVpbmcga2lsbGVkLCBkbyBOT1QgZmxhZyBpdCBhcyBpbml0dGVkIG9yIGVsc2UgaXQgbWF5IHJlbmRlciBmb3Igb25lIHRpY2suXG59LFxuICAgIF9hZGRBbGlhc2VzVG9WYXJzID0gZnVuY3Rpb24gX2FkZEFsaWFzZXNUb1ZhcnModGFyZ2V0cywgdmFycykge1xuICB2YXIgaGFybmVzcyA9IHRhcmdldHNbMF0gPyBfZ2V0Q2FjaGUodGFyZ2V0c1swXSkuaGFybmVzcyA6IDAsXG4gICAgICBwcm9wZXJ0eUFsaWFzZXMgPSBoYXJuZXNzICYmIGhhcm5lc3MuYWxpYXNlcyxcbiAgICAgIGNvcHksXG4gICAgICBwLFxuICAgICAgaSxcbiAgICAgIGFsaWFzZXM7XG5cbiAgaWYgKCFwcm9wZXJ0eUFsaWFzZXMpIHtcbiAgICByZXR1cm4gdmFycztcbiAgfVxuXG4gIGNvcHkgPSBfbWVyZ2Uoe30sIHZhcnMpO1xuXG4gIGZvciAocCBpbiBwcm9wZXJ0eUFsaWFzZXMpIHtcbiAgICBpZiAocCBpbiBjb3B5KSB7XG4gICAgICBhbGlhc2VzID0gcHJvcGVydHlBbGlhc2VzW3BdLnNwbGl0KFwiLFwiKTtcbiAgICAgIGkgPSBhbGlhc2VzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBjb3B5W2FsaWFzZXNbaV1dID0gY29weVtwXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29weTtcbn0sXG4gICAgX3BhcnNlRnVuY09yU3RyaW5nID0gZnVuY3Rpb24gX3BhcnNlRnVuY09yU3RyaW5nKHZhbHVlLCB0d2VlbiwgaSwgdGFyZ2V0LCB0YXJnZXRzKSB7XG4gIHJldHVybiBfaXNGdW5jdGlvbih2YWx1ZSkgPyB2YWx1ZS5jYWxsKHR3ZWVuLCBpLCB0YXJnZXQsIHRhcmdldHMpIDogX2lzU3RyaW5nKHZhbHVlKSAmJiB+dmFsdWUuaW5kZXhPZihcInJhbmRvbShcIikgPyBfcmVwbGFjZVJhbmRvbSh2YWx1ZSkgOiB2YWx1ZTtcbn0sXG4gICAgX3N0YWdnZXJUd2VlblByb3BzID0gX2NhbGxiYWNrTmFtZXMgKyBcInJlcGVhdCxyZXBlYXREZWxheSx5b3lvLHJlcGVhdFJlZnJlc2gseW95b0Vhc2VcIixcbiAgICBfc3RhZ2dlclByb3BzVG9Ta2lwID0gKF9zdGFnZ2VyVHdlZW5Qcm9wcyArIFwiLGlkLHN0YWdnZXIsZGVsYXksZHVyYXRpb24scGF1c2VkLHNjcm9sbFRyaWdnZXJcIikuc3BsaXQoXCIsXCIpO1xuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBUV0VFTlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5cbmV4cG9ydCB2YXIgVHdlZW4gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9BbmltYXRpb24yKSB7XG4gIF9pbmhlcml0c0xvb3NlKFR3ZWVuLCBfQW5pbWF0aW9uMik7XG5cbiAgZnVuY3Rpb24gVHdlZW4odGFyZ2V0cywgdmFycywgcG9zaXRpb24sIHNraXBJbmhlcml0KSB7XG4gICAgdmFyIF90aGlzMztcblxuICAgIGlmICh0eXBlb2YgdmFycyA9PT0gXCJudW1iZXJcIikge1xuICAgICAgcG9zaXRpb24uZHVyYXRpb24gPSB2YXJzO1xuICAgICAgdmFycyA9IHBvc2l0aW9uO1xuICAgICAgcG9zaXRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIF90aGlzMyA9IF9BbmltYXRpb24yLmNhbGwodGhpcywgc2tpcEluaGVyaXQgPyB2YXJzIDogX2luaGVyaXREZWZhdWx0cyh2YXJzKSkgfHwgdGhpcztcbiAgICB2YXIgX3RoaXMzJHZhcnMgPSBfdGhpczMudmFycyxcbiAgICAgICAgZHVyYXRpb24gPSBfdGhpczMkdmFycy5kdXJhdGlvbixcbiAgICAgICAgZGVsYXkgPSBfdGhpczMkdmFycy5kZWxheSxcbiAgICAgICAgaW1tZWRpYXRlUmVuZGVyID0gX3RoaXMzJHZhcnMuaW1tZWRpYXRlUmVuZGVyLFxuICAgICAgICBzdGFnZ2VyID0gX3RoaXMzJHZhcnMuc3RhZ2dlcixcbiAgICAgICAgb3ZlcndyaXRlID0gX3RoaXMzJHZhcnMub3ZlcndyaXRlLFxuICAgICAgICBrZXlmcmFtZXMgPSBfdGhpczMkdmFycy5rZXlmcmFtZXMsXG4gICAgICAgIGRlZmF1bHRzID0gX3RoaXMzJHZhcnMuZGVmYXVsdHMsXG4gICAgICAgIHNjcm9sbFRyaWdnZXIgPSBfdGhpczMkdmFycy5zY3JvbGxUcmlnZ2VyLFxuICAgICAgICB5b3lvRWFzZSA9IF90aGlzMyR2YXJzLnlveW9FYXNlLFxuICAgICAgICBwYXJlbnQgPSB2YXJzLnBhcmVudCB8fCBfZ2xvYmFsVGltZWxpbmUsXG4gICAgICAgIHBhcnNlZFRhcmdldHMgPSAoX2lzQXJyYXkodGFyZ2V0cykgfHwgX2lzVHlwZWRBcnJheSh0YXJnZXRzKSA/IF9pc051bWJlcih0YXJnZXRzWzBdKSA6IFwibGVuZ3RoXCIgaW4gdmFycykgPyBbdGFyZ2V0c10gOiB0b0FycmF5KHRhcmdldHMpLFxuICAgICAgICB0bCxcbiAgICAgICAgaSxcbiAgICAgICAgY29weSxcbiAgICAgICAgbCxcbiAgICAgICAgcCxcbiAgICAgICAgY3VyVGFyZ2V0LFxuICAgICAgICBzdGFnZ2VyRnVuYyxcbiAgICAgICAgc3RhZ2dlclZhcnNUb01lcmdlO1xuICAgIF90aGlzMy5fdGFyZ2V0cyA9IHBhcnNlZFRhcmdldHMubGVuZ3RoID8gX2hhcm5lc3MocGFyc2VkVGFyZ2V0cykgOiBfd2FybihcIkdTQVAgdGFyZ2V0IFwiICsgdGFyZ2V0cyArIFwiIG5vdCBmb3VuZC4gaHR0cHM6Ly9ncmVlbnNvY2suY29tXCIsICFfY29uZmlnLm51bGxUYXJnZXRXYXJuKSB8fCBbXTtcbiAgICBfdGhpczMuX3B0TG9va3VwID0gW107IC8vUHJvcFR3ZWVuIGxvb2t1cC4gQW4gYXJyYXkgY29udGFpbmluZyBhbiBvYmplY3QgZm9yIGVhY2ggdGFyZ2V0LCBoYXZpbmcga2V5cyBmb3IgZWFjaCB0d2VlbmluZyBwcm9wZXJ0eVxuXG4gICAgX3RoaXMzLl9vdmVyd3JpdGUgPSBvdmVyd3JpdGU7XG5cbiAgICBpZiAoa2V5ZnJhbWVzIHx8IHN0YWdnZXIgfHwgX2lzRnVuY09yU3RyaW5nKGR1cmF0aW9uKSB8fCBfaXNGdW5jT3JTdHJpbmcoZGVsYXkpKSB7XG4gICAgICB2YXJzID0gX3RoaXMzLnZhcnM7XG4gICAgICB0bCA9IF90aGlzMy50aW1lbGluZSA9IG5ldyBUaW1lbGluZSh7XG4gICAgICAgIGRhdGE6IFwibmVzdGVkXCIsXG4gICAgICAgIGRlZmF1bHRzOiBkZWZhdWx0cyB8fCB7fVxuICAgICAgfSk7XG4gICAgICB0bC5raWxsKCk7XG4gICAgICB0bC5wYXJlbnQgPSB0bC5fZHAgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMyk7XG4gICAgICB0bC5fc3RhcnQgPSAwO1xuXG4gICAgICBpZiAoa2V5ZnJhbWVzKSB7XG4gICAgICAgIF9pbmhlcml0RGVmYXVsdHMoX3NldERlZmF1bHRzKHRsLnZhcnMuZGVmYXVsdHMsIHtcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIlxuICAgICAgICB9KSk7XG5cbiAgICAgICAgc3RhZ2dlciA/IHBhcnNlZFRhcmdldHMuZm9yRWFjaChmdW5jdGlvbiAodCwgaSkge1xuICAgICAgICAgIHJldHVybiBrZXlmcmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoZnJhbWUsIGopIHtcbiAgICAgICAgICAgIHJldHVybiB0bC50byh0LCBmcmFtZSwgaiA/IFwiPlwiIDogaSAqIHN0YWdnZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KSA6IGtleWZyYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChmcmFtZSkge1xuICAgICAgICAgIHJldHVybiB0bC50byhwYXJzZWRUYXJnZXRzLCBmcmFtZSwgXCI+XCIpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGwgPSBwYXJzZWRUYXJnZXRzLmxlbmd0aDtcbiAgICAgICAgc3RhZ2dlckZ1bmMgPSBzdGFnZ2VyID8gZGlzdHJpYnV0ZShzdGFnZ2VyKSA6IF9lbXB0eUZ1bmM7XG5cbiAgICAgICAgaWYgKF9pc09iamVjdChzdGFnZ2VyKSkge1xuICAgICAgICAgIC8vdXNlcnMgY2FuIHBhc3MgaW4gY2FsbGJhY2tzIGxpa2Ugb25TdGFydC9vbkNvbXBsZXRlIGluIHRoZSBzdGFnZ2VyIG9iamVjdC4gVGhlc2Ugc2hvdWxkIGZpcmUgd2l0aCBlYWNoIGluZGl2aWR1YWwgdHdlZW4uXG4gICAgICAgICAgZm9yIChwIGluIHN0YWdnZXIpIHtcbiAgICAgICAgICAgIGlmICh+X3N0YWdnZXJUd2VlblByb3BzLmluZGV4T2YocCkpIHtcbiAgICAgICAgICAgICAgc3RhZ2dlclZhcnNUb01lcmdlIHx8IChzdGFnZ2VyVmFyc1RvTWVyZ2UgPSB7fSk7XG4gICAgICAgICAgICAgIHN0YWdnZXJWYXJzVG9NZXJnZVtwXSA9IHN0YWdnZXJbcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGNvcHkgPSB7fTtcblxuICAgICAgICAgIGZvciAocCBpbiB2YXJzKSB7XG4gICAgICAgICAgICBpZiAoX3N0YWdnZXJQcm9wc1RvU2tpcC5pbmRleE9mKHApIDwgMCkge1xuICAgICAgICAgICAgICBjb3B5W3BdID0gdmFyc1twXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb3B5LnN0YWdnZXIgPSAwO1xuICAgICAgICAgIHlveW9FYXNlICYmIChjb3B5LnlveW9FYXNlID0geW95b0Vhc2UpO1xuICAgICAgICAgIHN0YWdnZXJWYXJzVG9NZXJnZSAmJiBfbWVyZ2UoY29weSwgc3RhZ2dlclZhcnNUb01lcmdlKTtcbiAgICAgICAgICBjdXJUYXJnZXQgPSBwYXJzZWRUYXJnZXRzW2ldOyAvL2Rvbid0IGp1c3QgY29weSBkdXJhdGlvbiBvciBkZWxheSBiZWNhdXNlIGlmIHRoZXkncmUgYSBzdHJpbmcgb3IgZnVuY3Rpb24sIHdlJ2QgZW5kIHVwIGluIGFuIGluZmluaXRlIGxvb3AgYmVjYXVzZSBfaXNGdW5jT3JTdHJpbmcoKSB3b3VsZCBldmFsdWF0ZSBhcyB0cnVlIGluIHRoZSBjaGlsZCB0d2VlbnMsIGVudGVyaW5nIHRoaXMgbG9vcCwgZXRjLiBTbyB3ZSBwYXJzZSB0aGUgdmFsdWUgc3RyYWlnaHQgZnJvbSB2YXJzIGFuZCBkZWZhdWx0IHRvIDAuXG5cbiAgICAgICAgICBjb3B5LmR1cmF0aW9uID0gK19wYXJzZUZ1bmNPclN0cmluZyhkdXJhdGlvbiwgX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpLCBpLCBjdXJUYXJnZXQsIHBhcnNlZFRhcmdldHMpO1xuICAgICAgICAgIGNvcHkuZGVsYXkgPSAoK19wYXJzZUZ1bmNPclN0cmluZyhkZWxheSwgX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpLCBpLCBjdXJUYXJnZXQsIHBhcnNlZFRhcmdldHMpIHx8IDApIC0gX3RoaXMzLl9kZWxheTtcblxuICAgICAgICAgIGlmICghc3RhZ2dlciAmJiBsID09PSAxICYmIGNvcHkuZGVsYXkpIHtcbiAgICAgICAgICAgIC8vIGlmIHNvbWVvbmUgZG9lcyBkZWxheTpcInJhbmRvbSgxLCA1KVwiLCByZXBlYXQ6LTEsIGZvciBleGFtcGxlLCB0aGUgZGVsYXkgc2hvdWxkbid0IGJlIGluc2lkZSB0aGUgcmVwZWF0LlxuICAgICAgICAgICAgX3RoaXMzLl9kZWxheSA9IGRlbGF5ID0gY29weS5kZWxheTtcbiAgICAgICAgICAgIF90aGlzMy5fc3RhcnQgKz0gZGVsYXk7XG4gICAgICAgICAgICBjb3B5LmRlbGF5ID0gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0bC50byhjdXJUYXJnZXQsIGNvcHksIHN0YWdnZXJGdW5jKGksIGN1clRhcmdldCwgcGFyc2VkVGFyZ2V0cykpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGwuZHVyYXRpb24oKSA/IGR1cmF0aW9uID0gZGVsYXkgPSAwIDogX3RoaXMzLnRpbWVsaW5lID0gMDsgLy8gaWYgdGhlIHRpbWVsaW5lJ3MgZHVyYXRpb24gaXMgMCwgd2UgZG9uJ3QgbmVlZCBhIHRpbWVsaW5lIGludGVybmFsbHkhXG4gICAgICB9XG5cbiAgICAgIGR1cmF0aW9uIHx8IF90aGlzMy5kdXJhdGlvbihkdXJhdGlvbiA9IHRsLmR1cmF0aW9uKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfdGhpczMudGltZWxpbmUgPSAwOyAvL3NwZWVkIG9wdGltaXphdGlvbiwgZmFzdGVyIGxvb2t1cHMgKG5vIGdvaW5nIHVwIHRoZSBwcm90b3R5cGUgY2hhaW4pXG4gICAgfVxuXG4gICAgaWYgKG92ZXJ3cml0ZSA9PT0gdHJ1ZSAmJiAhX3N1cHByZXNzT3ZlcndyaXRlcykge1xuICAgICAgX292ZXJ3cml0aW5nVHdlZW4gPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMyk7XG5cbiAgICAgIF9nbG9iYWxUaW1lbGluZS5raWxsVHdlZW5zT2YocGFyc2VkVGFyZ2V0cyk7XG5cbiAgICAgIF9vdmVyd3JpdGluZ1R3ZWVuID0gMDtcbiAgICB9XG5cbiAgICBfYWRkVG9UaW1lbGluZShwYXJlbnQsIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKSwgcG9zaXRpb24pO1xuXG4gICAgdmFycy5yZXZlcnNlZCAmJiBfdGhpczMucmV2ZXJzZSgpO1xuICAgIHZhcnMucGF1c2VkICYmIF90aGlzMy5wYXVzZWQodHJ1ZSk7XG5cbiAgICBpZiAoaW1tZWRpYXRlUmVuZGVyIHx8ICFkdXJhdGlvbiAmJiAha2V5ZnJhbWVzICYmIF90aGlzMy5fc3RhcnQgPT09IF9yb3VuZFByZWNpc2UocGFyZW50Ll90aW1lKSAmJiBfaXNOb3RGYWxzZShpbW1lZGlhdGVSZW5kZXIpICYmIF9oYXNOb1BhdXNlZEFuY2VzdG9ycyhfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMykpICYmIHBhcmVudC5kYXRhICE9PSBcIm5lc3RlZFwiKSB7XG4gICAgICBfdGhpczMuX3RUaW1lID0gLV90aW55TnVtOyAvL2ZvcmNlcyBhIHJlbmRlciB3aXRob3V0IGhhdmluZyB0byBzZXQgdGhlIHJlbmRlcigpIFwiZm9yY2VcIiBwYXJhbWV0ZXIgdG8gdHJ1ZSBiZWNhdXNlIHdlIHdhbnQgdG8gYWxsb3cgbGF6eWluZyBieSBkZWZhdWx0ICh1c2luZyB0aGUgXCJmb3JjZVwiIHBhcmFtZXRlciBhbHdheXMgZm9yY2VzIGFuIGltbWVkaWF0ZSBmdWxsIHJlbmRlcilcblxuICAgICAgX3RoaXMzLnJlbmRlcihNYXRoLm1heCgwLCAtZGVsYXkpKTsgLy9pbiBjYXNlIGRlbGF5IGlzIG5lZ2F0aXZlXG5cbiAgICB9XG5cbiAgICBzY3JvbGxUcmlnZ2VyICYmIF9zY3JvbGxUcmlnZ2VyKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKSwgc2Nyb2xsVHJpZ2dlcik7XG4gICAgcmV0dXJuIF90aGlzMztcbiAgfVxuXG4gIHZhciBfcHJvdG8zID0gVHdlZW4ucHJvdG90eXBlO1xuXG4gIF9wcm90bzMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG4gICAgdmFyIHByZXZUaW1lID0gdGhpcy5fdGltZSxcbiAgICAgICAgdER1ciA9IHRoaXMuX3REdXIsXG4gICAgICAgIGR1ciA9IHRoaXMuX2R1cixcbiAgICAgICAgdFRpbWUgPSB0b3RhbFRpbWUgPiB0RHVyIC0gX3RpbnlOdW0gJiYgdG90YWxUaW1lID49IDAgPyB0RHVyIDogdG90YWxUaW1lIDwgX3RpbnlOdW0gPyAwIDogdG90YWxUaW1lLFxuICAgICAgICB0aW1lLFxuICAgICAgICBwdCxcbiAgICAgICAgaXRlcmF0aW9uLFxuICAgICAgICBjeWNsZUR1cmF0aW9uLFxuICAgICAgICBwcmV2SXRlcmF0aW9uLFxuICAgICAgICBpc1lveW8sXG4gICAgICAgIHJhdGlvLFxuICAgICAgICB0aW1lbGluZSxcbiAgICAgICAgeW95b0Vhc2U7XG5cbiAgICBpZiAoIWR1cikge1xuICAgICAgX3JlbmRlclplcm9EdXJhdGlvblR3ZWVuKHRoaXMsIHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICB9IGVsc2UgaWYgKHRUaW1lICE9PSB0aGlzLl90VGltZSB8fCAhdG90YWxUaW1lIHx8IGZvcmNlIHx8ICF0aGlzLl9pbml0dGVkICYmIHRoaXMuX3RUaW1lIHx8IHRoaXMuX3N0YXJ0QXQgJiYgdGhpcy5felRpbWUgPCAwICE9PSB0b3RhbFRpbWUgPCAwKSB7XG4gICAgICAvL3RoaXMgc2Vuc2VzIGlmIHdlJ3JlIGNyb3NzaW5nIG92ZXIgdGhlIHN0YXJ0IHRpbWUsIGluIHdoaWNoIGNhc2Ugd2UgbXVzdCByZWNvcmQgX3pUaW1lIGFuZCBmb3JjZSB0aGUgcmVuZGVyLCBidXQgd2UgZG8gaXQgaW4gdGhpcyBsZW5ndGh5IGNvbmRpdGlvbmFsIHdheSBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucyAodXN1YWxseSB3ZSBjYW4gc2tpcCB0aGUgY2FsY3VsYXRpb25zKTogdGhpcy5faW5pdHRlZCAmJiAodGhpcy5felRpbWUgPCAwKSAhPT0gKHRvdGFsVGltZSA8IDApXG4gICAgICB0aW1lID0gdFRpbWU7XG4gICAgICB0aW1lbGluZSA9IHRoaXMudGltZWxpbmU7XG5cbiAgICAgIGlmICh0aGlzLl9yZXBlYXQpIHtcbiAgICAgICAgLy9hZGp1c3QgdGhlIHRpbWUgZm9yIHJlcGVhdHMgYW5kIHlveW9zXG4gICAgICAgIGN5Y2xlRHVyYXRpb24gPSBkdXIgKyB0aGlzLl9yRGVsYXk7XG5cbiAgICAgICAgaWYgKHRoaXMuX3JlcGVhdCA8IC0xICYmIHRvdGFsVGltZSA8IDApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy50b3RhbFRpbWUoY3ljbGVEdXJhdGlvbiAqIDEwMCArIHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWUgPSBfcm91bmRQcmVjaXNlKHRUaW1lICUgY3ljbGVEdXJhdGlvbik7IC8vcm91bmQgdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgZXJyb3JzLiAoNCAlIDAuOCBzaG91bGQgYmUgMCBidXQgc29tZSBicm93c2VycyByZXBvcnQgaXQgYXMgMC43OTk5OTk5OSEpXG5cbiAgICAgICAgaWYgKHRUaW1lID09PSB0RHVyKSB7XG4gICAgICAgICAgLy8gdGhlIHREdXIgPT09IHRUaW1lIGlzIGZvciBlZGdlIGNhc2VzIHdoZXJlIHRoZXJlJ3MgYSBsZW5ndGh5IGRlY2ltYWwgb24gdGhlIGR1cmF0aW9uIGFuZCBpdCBtYXkgcmVhY2ggdGhlIHZlcnkgZW5kIGJ1dCB0aGUgdGltZSBpcyByZW5kZXJlZCBhcyBub3QtcXVpdGUtdGhlcmUgKHJlbWVtYmVyLCB0RHVyIGlzIHJvdW5kZWQgdG8gNCBkZWNpbWFscyB3aGVyZWFzIGR1ciBpc24ndClcbiAgICAgICAgICBpdGVyYXRpb24gPSB0aGlzLl9yZXBlYXQ7XG4gICAgICAgICAgdGltZSA9IGR1cjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVyYXRpb24gPSB+fih0VGltZSAvIGN5Y2xlRHVyYXRpb24pO1xuXG4gICAgICAgICAgaWYgKGl0ZXJhdGlvbiAmJiBpdGVyYXRpb24gPT09IHRUaW1lIC8gY3ljbGVEdXJhdGlvbikge1xuICAgICAgICAgICAgdGltZSA9IGR1cjtcbiAgICAgICAgICAgIGl0ZXJhdGlvbi0tO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRpbWUgPiBkdXIgJiYgKHRpbWUgPSBkdXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaXNZb3lvID0gdGhpcy5feW95byAmJiBpdGVyYXRpb24gJiAxO1xuXG4gICAgICAgIGlmIChpc1lveW8pIHtcbiAgICAgICAgICB5b3lvRWFzZSA9IHRoaXMuX3lFYXNlO1xuICAgICAgICAgIHRpbWUgPSBkdXIgLSB0aW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJldkl0ZXJhdGlvbiA9IF9hbmltYXRpb25DeWNsZSh0aGlzLl90VGltZSwgY3ljbGVEdXJhdGlvbik7XG5cbiAgICAgICAgaWYgKHRpbWUgPT09IHByZXZUaW1lICYmICFmb3JjZSAmJiB0aGlzLl9pbml0dGVkKSB7XG4gICAgICAgICAgLy9jb3VsZCBiZSBkdXJpbmcgdGhlIHJlcGVhdERlbGF5IHBhcnQuIE5vIG5lZWQgdG8gcmVuZGVyIGFuZCBmaXJlIGNhbGxiYWNrcy5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVyYXRpb24gIT09IHByZXZJdGVyYXRpb24pIHtcbiAgICAgICAgICB0aW1lbGluZSAmJiB0aGlzLl95RWFzZSAmJiBfcHJvcGFnYXRlWW95b0Vhc2UodGltZWxpbmUsIGlzWW95byk7IC8vcmVwZWF0UmVmcmVzaCBmdW5jdGlvbmFsaXR5XG5cbiAgICAgICAgICBpZiAodGhpcy52YXJzLnJlcGVhdFJlZnJlc2ggJiYgIWlzWW95byAmJiAhdGhpcy5fbG9jaykge1xuICAgICAgICAgICAgdGhpcy5fbG9jayA9IGZvcmNlID0gMTsgLy9mb3JjZSwgb3RoZXJ3aXNlIGlmIGxhenkgaXMgdHJ1ZSwgdGhlIF9hdHRlbXB0SW5pdFR3ZWVuKCkgd2lsbCByZXR1cm4gYW5kIHdlJ2xsIGp1bXAgb3V0IGFuZCBnZXQgY2F1Z2h0IGJvdW5jaW5nIG9uIGVhY2ggdGljay5cblxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoX3JvdW5kUHJlY2lzZShjeWNsZUR1cmF0aW9uICogaXRlcmF0aW9uKSwgdHJ1ZSkuaW52YWxpZGF0ZSgpLl9sb2NrID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLl9pbml0dGVkKSB7XG4gICAgICAgIGlmIChfYXR0ZW1wdEluaXRUd2Vlbih0aGlzLCB0b3RhbFRpbWUgPCAwID8gdG90YWxUaW1lIDogdGltZSwgZm9yY2UsIHN1cHByZXNzRXZlbnRzKSkge1xuICAgICAgICAgIHRoaXMuX3RUaW1lID0gMDsgLy8gaW4gY29uc3RydWN0b3IgaWYgaW1tZWRpYXRlUmVuZGVyIGlzIHRydWUsIHdlIHNldCBfdFRpbWUgdG8gLV90aW55TnVtIHRvIGhhdmUgdGhlIHBsYXloZWFkIGNyb3NzIHRoZSBzdGFydGluZyBwb2ludCBidXQgd2UgY2FuJ3QgbGVhdmUgX3RUaW1lIGFzIGEgbmVnYXRpdmUgbnVtYmVyLlxuXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZHVyICE9PSB0aGlzLl9kdXIpIHtcbiAgICAgICAgICAvLyB3aGlsZSBpbml0dGluZywgYSBwbHVnaW4gbGlrZSBJbmVydGlhUGx1Z2luIG1pZ2h0IGFsdGVyIHRoZSBkdXJhdGlvbiwgc28gcmVydW4gZnJvbSB0aGUgc3RhcnQgdG8gZW5zdXJlIGV2ZXJ5dGhpbmcgcmVuZGVycyBhcyBpdCBzaG91bGQuXG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl90VGltZSA9IHRUaW1lO1xuICAgICAgdGhpcy5fdGltZSA9IHRpbWU7XG5cbiAgICAgIGlmICghdGhpcy5fYWN0ICYmIHRoaXMuX3RzKSB7XG4gICAgICAgIHRoaXMuX2FjdCA9IDE7IC8vYXMgbG9uZyBhcyBpdCdzIG5vdCBwYXVzZWQsIGZvcmNlIGl0IHRvIGJlIGFjdGl2ZSBzbyB0aGF0IGlmIHRoZSB1c2VyIHJlbmRlcnMgaW5kZXBlbmRlbnQgb2YgdGhlIHBhcmVudCB0aW1lbGluZSwgaXQnbGwgYmUgZm9yY2VkIHRvIHJlLXJlbmRlciBvbiB0aGUgbmV4dCB0aWNrLlxuXG4gICAgICAgIHRoaXMuX2xhenkgPSAwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJhdGlvID0gcmF0aW8gPSAoeW95b0Vhc2UgfHwgdGhpcy5fZWFzZSkodGltZSAvIGR1cik7XG5cbiAgICAgIGlmICh0aGlzLl9mcm9tKSB7XG4gICAgICAgIHRoaXMucmF0aW8gPSByYXRpbyA9IDEgLSByYXRpbztcbiAgICAgIH1cblxuICAgICAgaWYgKHRpbWUgJiYgIXByZXZUaW1lICYmICFzdXBwcmVzc0V2ZW50cykge1xuICAgICAgICBfY2FsbGJhY2sodGhpcywgXCJvblN0YXJ0XCIpO1xuXG4gICAgICAgIGlmICh0aGlzLl90VGltZSAhPT0gdFRpbWUpIHtcbiAgICAgICAgICAvLyBpbiBjYXNlIHRoZSBvblN0YXJ0IHRyaWdnZXJlZCBhIHJlbmRlciBhdCBhIGRpZmZlcmVudCBzcG90LCBlamVjdC4gTGlrZSBpZiBzb21lb25lIGRpZCBhbmltYXRpb24ucGF1c2UoMC41KSBvciBzb21ldGhpbmcgaW5zaWRlIHRoZSBvblN0YXJ0LlxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHB0ID0gdGhpcy5fcHQ7XG5cbiAgICAgIHdoaWxlIChwdCkge1xuICAgICAgICBwdC5yKHJhdGlvLCBwdC5kKTtcbiAgICAgICAgcHQgPSBwdC5fbmV4dDtcbiAgICAgIH1cblxuICAgICAgdGltZWxpbmUgJiYgdGltZWxpbmUucmVuZGVyKHRvdGFsVGltZSA8IDAgPyB0b3RhbFRpbWUgOiAhdGltZSAmJiBpc1lveW8gPyAtX3RpbnlOdW0gOiB0aW1lbGluZS5fZHVyICogcmF0aW8sIHN1cHByZXNzRXZlbnRzLCBmb3JjZSkgfHwgdGhpcy5fc3RhcnRBdCAmJiAodGhpcy5felRpbWUgPSB0b3RhbFRpbWUpO1xuXG4gICAgICBpZiAodGhpcy5fb25VcGRhdGUgJiYgIXN1cHByZXNzRXZlbnRzKSB7XG4gICAgICAgIHRvdGFsVGltZSA8IDAgJiYgdGhpcy5fc3RhcnRBdCAmJiB0aGlzLl9zdGFydEF0LnJlbmRlcih0b3RhbFRpbWUsIHRydWUsIGZvcmNlKTsgLy9ub3RlOiBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucywgd2UgdHVjayB0aGlzIGNvbmRpdGlvbmFsIGxvZ2ljIGluc2lkZSBsZXNzIHRyYXZlbGVkIGFyZWFzIChtb3N0IHR3ZWVucyBkb24ndCBoYXZlIGFuIG9uVXBkYXRlKS4gV2UnZCBqdXN0IGhhdmUgaXQgYXQgdGhlIGVuZCBiZWZvcmUgdGhlIG9uQ29tcGxldGUsIGJ1dCB0aGUgdmFsdWVzIHNob3VsZCBiZSB1cGRhdGVkIGJlZm9yZSBhbnkgb25VcGRhdGUgaXMgY2FsbGVkLCBzbyB3ZSBBTFNPIHB1dCBpdCBoZXJlIGFuZCB0aGVuIGlmIGl0J3Mgbm90IGNhbGxlZCwgd2UgZG8gc28gbGF0ZXIgbmVhciB0aGUgb25Db21wbGV0ZS5cblxuICAgICAgICBfY2FsbGJhY2sodGhpcywgXCJvblVwZGF0ZVwiKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVwZWF0ICYmIGl0ZXJhdGlvbiAhPT0gcHJldkl0ZXJhdGlvbiAmJiB0aGlzLnZhcnMub25SZXBlYXQgJiYgIXN1cHByZXNzRXZlbnRzICYmIHRoaXMucGFyZW50ICYmIF9jYWxsYmFjayh0aGlzLCBcIm9uUmVwZWF0XCIpO1xuXG4gICAgICBpZiAoKHRUaW1lID09PSB0aGlzLl90RHVyIHx8ICF0VGltZSkgJiYgdGhpcy5fdFRpbWUgPT09IHRUaW1lKSB7XG4gICAgICAgIHRvdGFsVGltZSA8IDAgJiYgdGhpcy5fc3RhcnRBdCAmJiAhdGhpcy5fb25VcGRhdGUgJiYgdGhpcy5fc3RhcnRBdC5yZW5kZXIodG90YWxUaW1lLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgKHRvdGFsVGltZSB8fCAhZHVyKSAmJiAodFRpbWUgPT09IHRoaXMuX3REdXIgJiYgdGhpcy5fdHMgPiAwIHx8ICF0VGltZSAmJiB0aGlzLl90cyA8IDApICYmIF9yZW1vdmVGcm9tUGFyZW50KHRoaXMsIDEpOyAvLyBkb24ndCByZW1vdmUgaWYgd2UncmUgcmVuZGVyaW5nIGF0IGV4YWN0bHkgYSB0aW1lIG9mIDAsIGFzIHRoZXJlIGNvdWxkIGJlIGF1dG9SZXZlcnQgdmFsdWVzIHRoYXQgc2hvdWxkIGdldCBzZXQgb24gdGhlIG5leHQgdGljayAoaWYgdGhlIHBsYXloZWFkIGdvZXMgYmFja3dhcmQgYmV5b25kIHRoZSBzdGFydFRpbWUsIG5lZ2F0aXZlIHRvdGFsVGltZSkuIERvbid0IHJlbW92ZSBpZiB0aGUgdGltZWxpbmUgaXMgcmV2ZXJzZWQgYW5kIHRoZSBwbGF5aGVhZCBpc24ndCBhdCAwLCBvdGhlcndpc2UgdGwucHJvZ3Jlc3MoMSkucmV2ZXJzZSgpIHdvbid0IHdvcmsuIE9ubHkgcmVtb3ZlIGlmIHRoZSBwbGF5aGVhZCBpcyBhdCB0aGUgZW5kIGFuZCB0aW1lU2NhbGUgaXMgcG9zaXRpdmUsIG9yIGlmIHRoZSBwbGF5aGVhZCBpcyBhdCAwIGFuZCB0aGUgdGltZVNjYWxlIGlzIG5lZ2F0aXZlLlxuXG4gICAgICAgIGlmICghc3VwcHJlc3NFdmVudHMgJiYgISh0b3RhbFRpbWUgPCAwICYmICFwcmV2VGltZSkgJiYgKHRUaW1lIHx8IHByZXZUaW1lKSkge1xuICAgICAgICAgIC8vIGlmIHByZXZUaW1lIGFuZCB0VGltZSBhcmUgemVybywgd2Ugc2hvdWxkbid0IGZpcmUgdGhlIG9uUmV2ZXJzZUNvbXBsZXRlLiBUaGlzIGNvdWxkIGhhcHBlbiBpZiB5b3UgZ3NhcC50byguLi4ge3BhdXNlZDp0cnVlfSkucGxheSgpO1xuICAgICAgICAgIF9jYWxsYmFjayh0aGlzLCB0VGltZSA9PT0gdER1ciA/IFwib25Db21wbGV0ZVwiIDogXCJvblJldmVyc2VDb21wbGV0ZVwiLCB0cnVlKTtcblxuICAgICAgICAgIHRoaXMuX3Byb20gJiYgISh0VGltZSA8IHREdXIgJiYgdGhpcy50aW1lU2NhbGUoKSA+IDApICYmIHRoaXMuX3Byb20oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzMudGFyZ2V0cyA9IGZ1bmN0aW9uIHRhcmdldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldHM7XG4gIH07XG5cbiAgX3Byb3RvMy5pbnZhbGlkYXRlID0gZnVuY3Rpb24gaW52YWxpZGF0ZSgpIHtcbiAgICB0aGlzLl9wdCA9IHRoaXMuX29wID0gdGhpcy5fc3RhcnRBdCA9IHRoaXMuX29uVXBkYXRlID0gdGhpcy5fbGF6eSA9IHRoaXMucmF0aW8gPSAwO1xuICAgIHRoaXMuX3B0TG9va3VwID0gW107XG4gICAgdGhpcy50aW1lbGluZSAmJiB0aGlzLnRpbWVsaW5lLmludmFsaWRhdGUoKTtcbiAgICByZXR1cm4gX0FuaW1hdGlvbjIucHJvdG90eXBlLmludmFsaWRhdGUuY2FsbCh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8zLmtpbGwgPSBmdW5jdGlvbiBraWxsKHRhcmdldHMsIHZhcnMpIHtcbiAgICBpZiAodmFycyA9PT0gdm9pZCAwKSB7XG4gICAgICB2YXJzID0gXCJhbGxcIjtcbiAgICB9XG5cbiAgICBpZiAoIXRhcmdldHMgJiYgKCF2YXJzIHx8IHZhcnMgPT09IFwiYWxsXCIpKSB7XG4gICAgICB0aGlzLl9sYXp5ID0gdGhpcy5fcHQgPSAwO1xuICAgICAgcmV0dXJuIHRoaXMucGFyZW50ID8gX2ludGVycnVwdCh0aGlzKSA6IHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGltZWxpbmUpIHtcbiAgICAgIHZhciB0RHVyID0gdGhpcy50aW1lbGluZS50b3RhbER1cmF0aW9uKCk7XG4gICAgICB0aGlzLnRpbWVsaW5lLmtpbGxUd2VlbnNPZih0YXJnZXRzLCB2YXJzLCBfb3ZlcndyaXRpbmdUd2VlbiAmJiBfb3ZlcndyaXRpbmdUd2Vlbi52YXJzLm92ZXJ3cml0ZSAhPT0gdHJ1ZSkuX2ZpcnN0IHx8IF9pbnRlcnJ1cHQodGhpcyk7IC8vIGlmIG5vdGhpbmcgaXMgbGVmdCB0d2VlbmluZywgaW50ZXJydXB0LlxuXG4gICAgICB0aGlzLnBhcmVudCAmJiB0RHVyICE9PSB0aGlzLnRpbWVsaW5lLnRvdGFsRHVyYXRpb24oKSAmJiBfc2V0RHVyYXRpb24odGhpcywgdGhpcy5fZHVyICogdGhpcy50aW1lbGluZS5fdER1ciAvIHREdXIsIDAsIDEpOyAvLyBpZiBhIG5lc3RlZCB0d2VlbiBpcyBraWxsZWQgdGhhdCBjaGFuZ2VzIHRoZSBkdXJhdGlvbiwgaXQgc2hvdWxkIGFmZmVjdCB0aGlzIHR3ZWVuJ3MgZHVyYXRpb24uIFdlIG11c3QgdXNlIHRoZSByYXRpbywgdGhvdWdoLCBiZWNhdXNlIHNvbWV0aW1lcyB0aGUgaW50ZXJuYWwgdGltZWxpbmUgaXMgc3RyZXRjaGVkIGxpa2UgZm9yIGtleWZyYW1lcyB3aGVyZSB0aGV5IGRvbid0IGFsbCBhZGQgdXAgdG8gd2hhdGV2ZXIgdGhlIHBhcmVudCB0d2VlbidzIGR1cmF0aW9uIHdhcyBzZXQgdG8uXG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHZhciBwYXJzZWRUYXJnZXRzID0gdGhpcy5fdGFyZ2V0cyxcbiAgICAgICAga2lsbGluZ1RhcmdldHMgPSB0YXJnZXRzID8gdG9BcnJheSh0YXJnZXRzKSA6IHBhcnNlZFRhcmdldHMsXG4gICAgICAgIHByb3BUd2Vlbkxvb2t1cCA9IHRoaXMuX3B0TG9va3VwLFxuICAgICAgICBmaXJzdFBUID0gdGhpcy5fcHQsXG4gICAgICAgIG92ZXJ3cml0dGVuUHJvcHMsXG4gICAgICAgIGN1ckxvb2t1cCxcbiAgICAgICAgY3VyT3ZlcndyaXRlUHJvcHMsXG4gICAgICAgIHByb3BzLFxuICAgICAgICBwLFxuICAgICAgICBwdCxcbiAgICAgICAgaTtcblxuICAgIGlmICgoIXZhcnMgfHwgdmFycyA9PT0gXCJhbGxcIikgJiYgX2FycmF5c01hdGNoKHBhcnNlZFRhcmdldHMsIGtpbGxpbmdUYXJnZXRzKSkge1xuICAgICAgdmFycyA9PT0gXCJhbGxcIiAmJiAodGhpcy5fcHQgPSAwKTtcbiAgICAgIHJldHVybiBfaW50ZXJydXB0KHRoaXMpO1xuICAgIH1cblxuICAgIG92ZXJ3cml0dGVuUHJvcHMgPSB0aGlzLl9vcCA9IHRoaXMuX29wIHx8IFtdO1xuXG4gICAgaWYgKHZhcnMgIT09IFwiYWxsXCIpIHtcbiAgICAgIC8vc28gcGVvcGxlIGNhbiBwYXNzIGluIGEgY29tbWEtZGVsaW1pdGVkIGxpc3Qgb2YgcHJvcGVydHkgbmFtZXNcbiAgICAgIGlmIChfaXNTdHJpbmcodmFycykpIHtcbiAgICAgICAgcCA9IHt9O1xuXG4gICAgICAgIF9mb3JFYWNoTmFtZSh2YXJzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgIHJldHVybiBwW25hbWVdID0gMTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFycyA9IHA7XG4gICAgICB9XG5cbiAgICAgIHZhcnMgPSBfYWRkQWxpYXNlc1RvVmFycyhwYXJzZWRUYXJnZXRzLCB2YXJzKTtcbiAgICB9XG5cbiAgICBpID0gcGFyc2VkVGFyZ2V0cy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBpZiAofmtpbGxpbmdUYXJnZXRzLmluZGV4T2YocGFyc2VkVGFyZ2V0c1tpXSkpIHtcbiAgICAgICAgY3VyTG9va3VwID0gcHJvcFR3ZWVuTG9va3VwW2ldO1xuXG4gICAgICAgIGlmICh2YXJzID09PSBcImFsbFwiKSB7XG4gICAgICAgICAgb3ZlcndyaXR0ZW5Qcm9wc1tpXSA9IHZhcnM7XG4gICAgICAgICAgcHJvcHMgPSBjdXJMb29rdXA7XG4gICAgICAgICAgY3VyT3ZlcndyaXRlUHJvcHMgPSB7fTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdXJPdmVyd3JpdGVQcm9wcyA9IG92ZXJ3cml0dGVuUHJvcHNbaV0gPSBvdmVyd3JpdHRlblByb3BzW2ldIHx8IHt9O1xuICAgICAgICAgIHByb3BzID0gdmFycztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAocCBpbiBwcm9wcykge1xuICAgICAgICAgIHB0ID0gY3VyTG9va3VwICYmIGN1ckxvb2t1cFtwXTtcblxuICAgICAgICAgIGlmIChwdCkge1xuICAgICAgICAgICAgaWYgKCEoXCJraWxsXCIgaW4gcHQuZCkgfHwgcHQuZC5raWxsKHApID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIF9yZW1vdmVMaW5rZWRMaXN0SXRlbSh0aGlzLCBwdCwgXCJfcHRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGV0ZSBjdXJMb29rdXBbcF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGN1ck92ZXJ3cml0ZVByb3BzICE9PSBcImFsbFwiKSB7XG4gICAgICAgICAgICBjdXJPdmVyd3JpdGVQcm9wc1twXSA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faW5pdHRlZCAmJiAhdGhpcy5fcHQgJiYgZmlyc3RQVCAmJiBfaW50ZXJydXB0KHRoaXMpOyAvL2lmIGFsbCB0d2VlbmluZyBwcm9wZXJ0aWVzIGFyZSBraWxsZWQsIGtpbGwgdGhlIHR3ZWVuLiBXaXRob3V0IHRoaXMgbGluZSwgaWYgdGhlcmUncyBhIHR3ZWVuIHdpdGggbXVsdGlwbGUgdGFyZ2V0cyBhbmQgdGhlbiB5b3Uga2lsbFR3ZWVuc09mKCkgZWFjaCB0YXJnZXQgaW5kaXZpZHVhbGx5LCB0aGUgdHdlZW4gd291bGQgdGVjaG5pY2FsbHkgc3RpbGwgcmVtYWluIGFjdGl2ZSBhbmQgZmlyZSBpdHMgb25Db21wbGV0ZSBldmVuIHRob3VnaCB0aGVyZSBhcmVuJ3QgYW55IG1vcmUgcHJvcGVydGllcyB0d2VlbmluZy5cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFR3ZWVuLnRvID0gZnVuY3Rpb24gdG8odGFyZ2V0cywgdmFycykge1xuICAgIHJldHVybiBuZXcgVHdlZW4odGFyZ2V0cywgdmFycywgYXJndW1lbnRzWzJdKTtcbiAgfTtcblxuICBUd2Vlbi5mcm9tID0gZnVuY3Rpb24gZnJvbSh0YXJnZXRzLCB2YXJzKSB7XG4gICAgcmV0dXJuIF9jcmVhdGVUd2VlblR5cGUoMSwgYXJndW1lbnRzKTtcbiAgfTtcblxuICBUd2Vlbi5kZWxheWVkQ2FsbCA9IGZ1bmN0aW9uIGRlbGF5ZWRDYWxsKGRlbGF5LCBjYWxsYmFjaywgcGFyYW1zLCBzY29wZSkge1xuICAgIHJldHVybiBuZXcgVHdlZW4oY2FsbGJhY2ssIDAsIHtcbiAgICAgIGltbWVkaWF0ZVJlbmRlcjogZmFsc2UsXG4gICAgICBsYXp5OiBmYWxzZSxcbiAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXG4gICAgICBkZWxheTogZGVsYXksXG4gICAgICBvbkNvbXBsZXRlOiBjYWxsYmFjayxcbiAgICAgIG9uUmV2ZXJzZUNvbXBsZXRlOiBjYWxsYmFjayxcbiAgICAgIG9uQ29tcGxldGVQYXJhbXM6IHBhcmFtcyxcbiAgICAgIG9uUmV2ZXJzZUNvbXBsZXRlUGFyYW1zOiBwYXJhbXMsXG4gICAgICBjYWxsYmFja1Njb3BlOiBzY29wZVxuICAgIH0pO1xuICB9O1xuXG4gIFR3ZWVuLmZyb21UbyA9IGZ1bmN0aW9uIGZyb21Ubyh0YXJnZXRzLCBmcm9tVmFycywgdG9WYXJzKSB7XG4gICAgcmV0dXJuIF9jcmVhdGVUd2VlblR5cGUoMiwgYXJndW1lbnRzKTtcbiAgfTtcblxuICBUd2Vlbi5zZXQgPSBmdW5jdGlvbiBzZXQodGFyZ2V0cywgdmFycykge1xuICAgIHZhcnMuZHVyYXRpb24gPSAwO1xuICAgIHZhcnMucmVwZWF0RGVsYXkgfHwgKHZhcnMucmVwZWF0ID0gMCk7XG4gICAgcmV0dXJuIG5ldyBUd2Vlbih0YXJnZXRzLCB2YXJzKTtcbiAgfTtcblxuICBUd2Vlbi5raWxsVHdlZW5zT2YgPSBmdW5jdGlvbiBraWxsVHdlZW5zT2YodGFyZ2V0cywgcHJvcHMsIG9ubHlBY3RpdmUpIHtcbiAgICByZXR1cm4gX2dsb2JhbFRpbWVsaW5lLmtpbGxUd2VlbnNPZih0YXJnZXRzLCBwcm9wcywgb25seUFjdGl2ZSk7XG4gIH07XG5cbiAgcmV0dXJuIFR3ZWVuO1xufShBbmltYXRpb24pO1xuXG5fc2V0RGVmYXVsdHMoVHdlZW4ucHJvdG90eXBlLCB7XG4gIF90YXJnZXRzOiBbXSxcbiAgX2xhenk6IDAsXG4gIF9zdGFydEF0OiAwLFxuICBfb3A6IDAsXG4gIF9vbkluaXQ6IDBcbn0pOyAvL2FkZCB0aGUgcGVydGluZW50IHRpbWVsaW5lIG1ldGhvZHMgdG8gVHdlZW4gaW5zdGFuY2VzIHNvIHRoYXQgdXNlcnMgY2FuIGNoYWluIGNvbnZlbmllbnRseSBhbmQgY3JlYXRlIGEgdGltZWxpbmUgYXV0b21hdGljYWxseS4gKHJlbW92ZWQgZHVlIHRvIGNvbmNlcm5zIHRoYXQgaXQnZCB1bHRpbWF0ZWx5IGFkZCB0byBtb3JlIGNvbmZ1c2lvbiBlc3BlY2lhbGx5IGZvciBiZWdpbm5lcnMpXG4vLyBfZm9yRWFjaE5hbWUoXCJ0byxmcm9tLGZyb21UbyxzZXQsY2FsbCxhZGQsYWRkTGFiZWwsYWRkUGF1c2VcIiwgbmFtZSA9PiB7XG4vLyBcdFR3ZWVuLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuLy8gXHRcdGxldCB0bCA9IG5ldyBUaW1lbGluZSgpO1xuLy8gXHRcdHJldHVybiBfYWRkVG9UaW1lbGluZSh0bCwgdGhpcylbbmFtZV0uYXBwbHkodGwsIHRvQXJyYXkoYXJndW1lbnRzKSk7XG4vLyBcdH1cbi8vIH0pO1xuLy9mb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eS4gTGV2ZXJhZ2UgdGhlIHRpbWVsaW5lIGNhbGxzLlxuXG5cbl9mb3JFYWNoTmFtZShcInN0YWdnZXJUbyxzdGFnZ2VyRnJvbSxzdGFnZ2VyRnJvbVRvXCIsIGZ1bmN0aW9uIChuYW1lKSB7XG4gIFR3ZWVuW25hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZSgpLFxuICAgICAgICBwYXJhbXMgPSBfc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuXG4gICAgcGFyYW1zLnNwbGljZShuYW1lID09PSBcInN0YWdnZXJGcm9tVG9cIiA/IDUgOiA0LCAwLCAwKTtcbiAgICByZXR1cm4gdGxbbmFtZV0uYXBwbHkodGwsIHBhcmFtcyk7XG4gIH07XG59KTtcbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUFJPUFRXRUVOXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cblxudmFyIF9zZXR0ZXJQbGFpbiA9IGZ1bmN0aW9uIF9zZXR0ZXJQbGFpbih0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gdGFyZ2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xufSxcbiAgICBfc2V0dGVyRnVuYyA9IGZ1bmN0aW9uIF9zZXR0ZXJGdW5jKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiB0YXJnZXRbcHJvcGVydHldKHZhbHVlKTtcbn0sXG4gICAgX3NldHRlckZ1bmNXaXRoUGFyYW0gPSBmdW5jdGlvbiBfc2V0dGVyRnVuY1dpdGhQYXJhbSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgZGF0YSkge1xuICByZXR1cm4gdGFyZ2V0W3Byb3BlcnR5XShkYXRhLmZwLCB2YWx1ZSk7XG59LFxuICAgIF9zZXR0ZXJBdHRyaWJ1dGUgPSBmdW5jdGlvbiBfc2V0dGVyQXR0cmlidXRlKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiB0YXJnZXQuc2V0QXR0cmlidXRlKHByb3BlcnR5LCB2YWx1ZSk7XG59LFxuICAgIF9nZXRTZXR0ZXIgPSBmdW5jdGlvbiBfZ2V0U2V0dGVyKHRhcmdldCwgcHJvcGVydHkpIHtcbiAgcmV0dXJuIF9pc0Z1bmN0aW9uKHRhcmdldFtwcm9wZXJ0eV0pID8gX3NldHRlckZ1bmMgOiBfaXNVbmRlZmluZWQodGFyZ2V0W3Byb3BlcnR5XSkgJiYgdGFyZ2V0LnNldEF0dHJpYnV0ZSA/IF9zZXR0ZXJBdHRyaWJ1dGUgOiBfc2V0dGVyUGxhaW47XG59LFxuICAgIF9yZW5kZXJQbGFpbiA9IGZ1bmN0aW9uIF9yZW5kZXJQbGFpbihyYXRpbywgZGF0YSkge1xuICByZXR1cm4gZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIE1hdGgucm91bmQoKGRhdGEucyArIGRhdGEuYyAqIHJhdGlvKSAqIDEwMDAwMDApIC8gMTAwMDAwMCwgZGF0YSk7XG59LFxuICAgIF9yZW5kZXJCb29sZWFuID0gZnVuY3Rpb24gX3JlbmRlckJvb2xlYW4ocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCAhIShkYXRhLnMgKyBkYXRhLmMgKiByYXRpbyksIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyQ29tcGxleFN0cmluZyA9IGZ1bmN0aW9uIF9yZW5kZXJDb21wbGV4U3RyaW5nKHJhdGlvLCBkYXRhKSB7XG4gIHZhciBwdCA9IGRhdGEuX3B0LFxuICAgICAgcyA9IFwiXCI7XG5cbiAgaWYgKCFyYXRpbyAmJiBkYXRhLmIpIHtcbiAgICAvL2IgPSBiZWdpbm5pbmcgc3RyaW5nXG4gICAgcyA9IGRhdGEuYjtcbiAgfSBlbHNlIGlmIChyYXRpbyA9PT0gMSAmJiBkYXRhLmUpIHtcbiAgICAvL2UgPSBlbmRpbmcgc3RyaW5nXG4gICAgcyA9IGRhdGEuZTtcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAocHQpIHtcbiAgICAgIHMgPSBwdC5wICsgKHB0Lm0gPyBwdC5tKHB0LnMgKyBwdC5jICogcmF0aW8pIDogTWF0aC5yb3VuZCgocHQucyArIHB0LmMgKiByYXRpbykgKiAxMDAwMCkgLyAxMDAwMCkgKyBzOyAvL3dlIHVzZSB0aGUgXCJwXCIgcHJvcGVydHkgZm9yIHRoZSB0ZXh0IGluYmV0d2VlbiAobGlrZSBhIHN1ZmZpeCkuIEFuZCBpbiB0aGUgY29udGV4dCBvZiBhIGNvbXBsZXggc3RyaW5nLCB0aGUgbW9kaWZpZXIgKG0pIGlzIHR5cGljYWxseSBqdXN0IE1hdGgucm91bmQoKSwgbGlrZSBmb3IgUkdCIGNvbG9ycy5cblxuICAgICAgcHQgPSBwdC5fbmV4dDtcbiAgICB9XG5cbiAgICBzICs9IGRhdGEuYzsgLy93ZSB1c2UgdGhlIFwiY1wiIG9mIHRoZSBQcm9wVHdlZW4gdG8gc3RvcmUgdGhlIGZpbmFsIGNodW5rIG9mIG5vbi1udW1lcmljIHRleHQuXG4gIH1cblxuICBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgcywgZGF0YSk7XG59LFxuICAgIF9yZW5kZXJQcm9wVHdlZW5zID0gZnVuY3Rpb24gX3JlbmRlclByb3BUd2VlbnMocmF0aW8sIGRhdGEpIHtcbiAgdmFyIHB0ID0gZGF0YS5fcHQ7XG5cbiAgd2hpbGUgKHB0KSB7XG4gICAgcHQucihyYXRpbywgcHQuZCk7XG4gICAgcHQgPSBwdC5fbmV4dDtcbiAgfVxufSxcbiAgICBfYWRkUGx1Z2luTW9kaWZpZXIgPSBmdW5jdGlvbiBfYWRkUGx1Z2luTW9kaWZpZXIobW9kaWZpZXIsIHR3ZWVuLCB0YXJnZXQsIHByb3BlcnR5KSB7XG4gIHZhciBwdCA9IHRoaXMuX3B0LFxuICAgICAgbmV4dDtcblxuICB3aGlsZSAocHQpIHtcbiAgICBuZXh0ID0gcHQuX25leHQ7XG4gICAgcHQucCA9PT0gcHJvcGVydHkgJiYgcHQubW9kaWZpZXIobW9kaWZpZXIsIHR3ZWVuLCB0YXJnZXQpO1xuICAgIHB0ID0gbmV4dDtcbiAgfVxufSxcbiAgICBfa2lsbFByb3BUd2VlbnNPZiA9IGZ1bmN0aW9uIF9raWxsUHJvcFR3ZWVuc09mKHByb3BlcnR5KSB7XG4gIHZhciBwdCA9IHRoaXMuX3B0LFxuICAgICAgaGFzTm9uRGVwZW5kZW50UmVtYWluaW5nLFxuICAgICAgbmV4dDtcblxuICB3aGlsZSAocHQpIHtcbiAgICBuZXh0ID0gcHQuX25leHQ7XG5cbiAgICBpZiAocHQucCA9PT0gcHJvcGVydHkgJiYgIXB0Lm9wIHx8IHB0Lm9wID09PSBwcm9wZXJ0eSkge1xuICAgICAgX3JlbW92ZUxpbmtlZExpc3RJdGVtKHRoaXMsIHB0LCBcIl9wdFwiKTtcbiAgICB9IGVsc2UgaWYgKCFwdC5kZXApIHtcbiAgICAgIGhhc05vbkRlcGVuZGVudFJlbWFpbmluZyA9IDE7XG4gICAgfVxuXG4gICAgcHQgPSBuZXh0O1xuICB9XG5cbiAgcmV0dXJuICFoYXNOb25EZXBlbmRlbnRSZW1haW5pbmc7XG59LFxuICAgIF9zZXR0ZXJXaXRoTW9kaWZpZXIgPSBmdW5jdGlvbiBfc2V0dGVyV2l0aE1vZGlmaWVyKHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCBkYXRhKSB7XG4gIGRhdGEubVNldCh0YXJnZXQsIHByb3BlcnR5LCBkYXRhLm0uY2FsbChkYXRhLnR3ZWVuLCB2YWx1ZSwgZGF0YS5tdCksIGRhdGEpO1xufSxcbiAgICBfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5ID0gZnVuY3Rpb24gX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eShwYXJlbnQpIHtcbiAgdmFyIHB0ID0gcGFyZW50Ll9wdCxcbiAgICAgIG5leHQsXG4gICAgICBwdDIsXG4gICAgICBmaXJzdCxcbiAgICAgIGxhc3Q7IC8vc29ydHMgdGhlIFByb3BUd2VlbiBsaW5rZWQgbGlzdCBpbiBvcmRlciBvZiBwcmlvcml0eSBiZWNhdXNlIHNvbWUgcGx1Z2lucyBuZWVkIHRvIGRvIHRoZWlyIHdvcmsgYWZ0ZXIgQUxMIG9mIHRoZSBQcm9wVHdlZW5zIHdlcmUgY3JlYXRlZCAobGlrZSBSb3VuZFByb3BzUGx1Z2luIGFuZCBNb2RpZmllcnNQbHVnaW4pXG5cbiAgd2hpbGUgKHB0KSB7XG4gICAgbmV4dCA9IHB0Ll9uZXh0O1xuICAgIHB0MiA9IGZpcnN0O1xuXG4gICAgd2hpbGUgKHB0MiAmJiBwdDIucHIgPiBwdC5wcikge1xuICAgICAgcHQyID0gcHQyLl9uZXh0O1xuICAgIH1cblxuICAgIGlmIChwdC5fcHJldiA9IHB0MiA/IHB0Mi5fcHJldiA6IGxhc3QpIHtcbiAgICAgIHB0Ll9wcmV2Ll9uZXh0ID0gcHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpcnN0ID0gcHQ7XG4gICAgfVxuXG4gICAgaWYgKHB0Ll9uZXh0ID0gcHQyKSB7XG4gICAgICBwdDIuX3ByZXYgPSBwdDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFzdCA9IHB0O1xuICAgIH1cblxuICAgIHB0ID0gbmV4dDtcbiAgfVxuXG4gIHBhcmVudC5fcHQgPSBmaXJzdDtcbn07IC8vUHJvcFR3ZWVuIGtleTogdCA9IHRhcmdldCwgcCA9IHByb3AsIHIgPSByZW5kZXJlciwgZCA9IGRhdGEsIHMgPSBzdGFydCwgYyA9IGNoYW5nZSwgb3AgPSBvdmVyd3JpdGVQcm9wZXJ0eSAoT05MWSBwb3B1bGF0ZWQgd2hlbiBpdCdzIGRpZmZlcmVudCB0aGFuIHApLCBwciA9IHByaW9yaXR5LCBfbmV4dC9fcHJldiBmb3IgdGhlIGxpbmtlZCBsaXN0IHNpYmxpbmdzLCBzZXQgPSBzZXR0ZXIsIG0gPSBtb2RpZmllciwgbVNldCA9IG1vZGlmaWVyU2V0dGVyICh0aGUgb3JpZ2luYWwgc2V0dGVyLCBiZWZvcmUgYSBtb2RpZmllciB3YXMgYWRkZWQpXG5cblxuZXhwb3J0IHZhciBQcm9wVHdlZW4gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQcm9wVHdlZW4obmV4dCwgdGFyZ2V0LCBwcm9wLCBzdGFydCwgY2hhbmdlLCByZW5kZXJlciwgZGF0YSwgc2V0dGVyLCBwcmlvcml0eSkge1xuICAgIHRoaXMudCA9IHRhcmdldDtcbiAgICB0aGlzLnMgPSBzdGFydDtcbiAgICB0aGlzLmMgPSBjaGFuZ2U7XG4gICAgdGhpcy5wID0gcHJvcDtcbiAgICB0aGlzLnIgPSByZW5kZXJlciB8fCBfcmVuZGVyUGxhaW47XG4gICAgdGhpcy5kID0gZGF0YSB8fCB0aGlzO1xuICAgIHRoaXMuc2V0ID0gc2V0dGVyIHx8IF9zZXR0ZXJQbGFpbjtcbiAgICB0aGlzLnByID0gcHJpb3JpdHkgfHwgMDtcbiAgICB0aGlzLl9uZXh0ID0gbmV4dDtcblxuICAgIGlmIChuZXh0KSB7XG4gICAgICBuZXh0Ll9wcmV2ID0gdGhpcztcbiAgICB9XG4gIH1cblxuICB2YXIgX3Byb3RvNCA9IFByb3BUd2Vlbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvNC5tb2RpZmllciA9IGZ1bmN0aW9uIG1vZGlmaWVyKGZ1bmMsIHR3ZWVuLCB0YXJnZXQpIHtcbiAgICB0aGlzLm1TZXQgPSB0aGlzLm1TZXQgfHwgdGhpcy5zZXQ7IC8vaW4gY2FzZSBpdCB3YXMgYWxyZWFkeSBzZXQgKGEgUHJvcFR3ZWVuIGNhbiBvbmx5IGhhdmUgb25lIG1vZGlmaWVyKVxuXG4gICAgdGhpcy5zZXQgPSBfc2V0dGVyV2l0aE1vZGlmaWVyO1xuICAgIHRoaXMubSA9IGZ1bmM7XG4gICAgdGhpcy5tdCA9IHRhcmdldDsgLy9tb2RpZmllciB0YXJnZXRcblxuICAgIHRoaXMudHdlZW4gPSB0d2VlbjtcbiAgfTtcblxuICByZXR1cm4gUHJvcFR3ZWVuO1xufSgpOyAvL0luaXRpYWxpemF0aW9uIHRhc2tzXG5cbl9mb3JFYWNoTmFtZShfY2FsbGJhY2tOYW1lcyArIFwicGFyZW50LGR1cmF0aW9uLGVhc2UsZGVsYXksb3ZlcndyaXRlLHJ1bkJhY2t3YXJkcyxzdGFydEF0LHlveW8saW1tZWRpYXRlUmVuZGVyLHJlcGVhdCxyZXBlYXREZWxheSxkYXRhLHBhdXNlZCxyZXZlcnNlZCxsYXp5LGNhbGxiYWNrU2NvcGUsc3RyaW5nRmlsdGVyLGlkLHlveW9FYXNlLHN0YWdnZXIsaW5oZXJpdCxyZXBlYXRSZWZyZXNoLGtleWZyYW1lcyxhdXRvUmV2ZXJ0LHNjcm9sbFRyaWdnZXJcIiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIF9yZXNlcnZlZFByb3BzW25hbWVdID0gMTtcbn0pO1xuXG5fZ2xvYmFscy5Ud2Vlbk1heCA9IF9nbG9iYWxzLlR3ZWVuTGl0ZSA9IFR3ZWVuO1xuX2dsb2JhbHMuVGltZWxpbmVMaXRlID0gX2dsb2JhbHMuVGltZWxpbmVNYXggPSBUaW1lbGluZTtcbl9nbG9iYWxUaW1lbGluZSA9IG5ldyBUaW1lbGluZSh7XG4gIHNvcnRDaGlsZHJlbjogZmFsc2UsXG4gIGRlZmF1bHRzOiBfZGVmYXVsdHMsXG4gIGF1dG9SZW1vdmVDaGlsZHJlbjogdHJ1ZSxcbiAgaWQ6IFwicm9vdFwiLFxuICBzbW9vdGhDaGlsZFRpbWluZzogdHJ1ZVxufSk7XG5fY29uZmlnLnN0cmluZ0ZpbHRlciA9IF9jb2xvclN0cmluZ0ZpbHRlcjtcbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogR1NBUFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG52YXIgX2dzYXAgPSB7XG4gIHJlZ2lzdGVyUGx1Z2luOiBmdW5jdGlvbiByZWdpc3RlclBsdWdpbigpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBhcmdzLmZvckVhY2goZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgcmV0dXJuIF9jcmVhdGVQbHVnaW4oY29uZmlnKTtcbiAgICB9KTtcbiAgfSxcbiAgdGltZWxpbmU6IGZ1bmN0aW9uIHRpbWVsaW5lKHZhcnMpIHtcbiAgICByZXR1cm4gbmV3IFRpbWVsaW5lKHZhcnMpO1xuICB9LFxuICBnZXRUd2VlbnNPZjogZnVuY3Rpb24gZ2V0VHdlZW5zT2YodGFyZ2V0cywgb25seUFjdGl2ZSkge1xuICAgIHJldHVybiBfZ2xvYmFsVGltZWxpbmUuZ2V0VHdlZW5zT2YodGFyZ2V0cywgb25seUFjdGl2ZSk7XG4gIH0sXG4gIGdldFByb3BlcnR5OiBmdW5jdGlvbiBnZXRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCB1bml0LCB1bmNhY2hlKSB7XG4gICAgX2lzU3RyaW5nKHRhcmdldCkgJiYgKHRhcmdldCA9IHRvQXJyYXkodGFyZ2V0KVswXSk7IC8vaW4gY2FzZSBzZWxlY3RvciB0ZXh0IG9yIGFuIGFycmF5IGlzIHBhc3NlZCBpblxuXG4gICAgdmFyIGdldHRlciA9IF9nZXRDYWNoZSh0YXJnZXQgfHwge30pLmdldCxcbiAgICAgICAgZm9ybWF0ID0gdW5pdCA/IF9wYXNzVGhyb3VnaCA6IF9udW1lcmljSWZQb3NzaWJsZTtcblxuICAgIHVuaXQgPT09IFwibmF0aXZlXCIgJiYgKHVuaXQgPSBcIlwiKTtcbiAgICByZXR1cm4gIXRhcmdldCA/IHRhcmdldCA6ICFwcm9wZXJ0eSA/IGZ1bmN0aW9uIChwcm9wZXJ0eSwgdW5pdCwgdW5jYWNoZSkge1xuICAgICAgcmV0dXJuIGZvcm1hdCgoX3BsdWdpbnNbcHJvcGVydHldICYmIF9wbHVnaW5zW3Byb3BlcnR5XS5nZXQgfHwgZ2V0dGVyKSh0YXJnZXQsIHByb3BlcnR5LCB1bml0LCB1bmNhY2hlKSk7XG4gICAgfSA6IGZvcm1hdCgoX3BsdWdpbnNbcHJvcGVydHldICYmIF9wbHVnaW5zW3Byb3BlcnR5XS5nZXQgfHwgZ2V0dGVyKSh0YXJnZXQsIHByb3BlcnR5LCB1bml0LCB1bmNhY2hlKSk7XG4gIH0sXG4gIHF1aWNrU2V0dGVyOiBmdW5jdGlvbiBxdWlja1NldHRlcih0YXJnZXQsIHByb3BlcnR5LCB1bml0KSB7XG4gICAgdGFyZ2V0ID0gdG9BcnJheSh0YXJnZXQpO1xuXG4gICAgaWYgKHRhcmdldC5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgc2V0dGVycyA9IHRhcmdldC5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGdzYXAucXVpY2tTZXR0ZXIodCwgcHJvcGVydHksIHVuaXQpO1xuICAgICAgfSksXG4gICAgICAgICAgbCA9IHNldHRlcnMubGVuZ3RoO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgaSA9IGw7XG5cbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIHNldHRlcnNbaV0odmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHRhcmdldCA9IHRhcmdldFswXSB8fCB7fTtcblxuICAgIHZhciBQbHVnaW4gPSBfcGx1Z2luc1twcm9wZXJ0eV0sXG4gICAgICAgIGNhY2hlID0gX2dldENhY2hlKHRhcmdldCksXG4gICAgICAgIHAgPSBjYWNoZS5oYXJuZXNzICYmIChjYWNoZS5oYXJuZXNzLmFsaWFzZXMgfHwge30pW3Byb3BlcnR5XSB8fCBwcm9wZXJ0eSxcbiAgICAgICAgLy8gaW4gY2FzZSBpdCdzIGFuIGFsaWFzLCBsaWtlIFwicm90YXRlXCIgZm9yIFwicm90YXRpb25cIi5cbiAgICBzZXR0ZXIgPSBQbHVnaW4gPyBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciBwID0gbmV3IFBsdWdpbigpO1xuICAgICAgX3F1aWNrVHdlZW4uX3B0ID0gMDtcbiAgICAgIHAuaW5pdCh0YXJnZXQsIHVuaXQgPyB2YWx1ZSArIHVuaXQgOiB2YWx1ZSwgX3F1aWNrVHdlZW4sIDAsIFt0YXJnZXRdKTtcbiAgICAgIHAucmVuZGVyKDEsIHApO1xuICAgICAgX3F1aWNrVHdlZW4uX3B0ICYmIF9yZW5kZXJQcm9wVHdlZW5zKDEsIF9xdWlja1R3ZWVuKTtcbiAgICB9IDogY2FjaGUuc2V0KHRhcmdldCwgcCk7XG5cbiAgICByZXR1cm4gUGx1Z2luID8gc2V0dGVyIDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gc2V0dGVyKHRhcmdldCwgcCwgdW5pdCA/IHZhbHVlICsgdW5pdCA6IHZhbHVlLCBjYWNoZSwgMSk7XG4gICAgfTtcbiAgfSxcbiAgaXNUd2VlbmluZzogZnVuY3Rpb24gaXNUd2VlbmluZyh0YXJnZXRzKSB7XG4gICAgcmV0dXJuIF9nbG9iYWxUaW1lbGluZS5nZXRUd2VlbnNPZih0YXJnZXRzLCB0cnVlKS5sZW5ndGggPiAwO1xuICB9LFxuICBkZWZhdWx0czogZnVuY3Rpb24gZGVmYXVsdHModmFsdWUpIHtcbiAgICB2YWx1ZSAmJiB2YWx1ZS5lYXNlICYmICh2YWx1ZS5lYXNlID0gX3BhcnNlRWFzZSh2YWx1ZS5lYXNlLCBfZGVmYXVsdHMuZWFzZSkpO1xuICAgIHJldHVybiBfbWVyZ2VEZWVwKF9kZWZhdWx0cywgdmFsdWUgfHwge30pO1xuICB9LFxuICBjb25maWc6IGZ1bmN0aW9uIGNvbmZpZyh2YWx1ZSkge1xuICAgIHJldHVybiBfbWVyZ2VEZWVwKF9jb25maWcsIHZhbHVlIHx8IHt9KTtcbiAgfSxcbiAgcmVnaXN0ZXJFZmZlY3Q6IGZ1bmN0aW9uIHJlZ2lzdGVyRWZmZWN0KF9yZWYzKSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMy5uYW1lLFxuICAgICAgICBlZmZlY3QgPSBfcmVmMy5lZmZlY3QsXG4gICAgICAgIHBsdWdpbnMgPSBfcmVmMy5wbHVnaW5zLFxuICAgICAgICBkZWZhdWx0cyA9IF9yZWYzLmRlZmF1bHRzLFxuICAgICAgICBleHRlbmRUaW1lbGluZSA9IF9yZWYzLmV4dGVuZFRpbWVsaW5lO1xuICAgIChwbHVnaW5zIHx8IFwiXCIpLnNwbGl0KFwiLFwiKS5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW5OYW1lKSB7XG4gICAgICByZXR1cm4gcGx1Z2luTmFtZSAmJiAhX3BsdWdpbnNbcGx1Z2luTmFtZV0gJiYgIV9nbG9iYWxzW3BsdWdpbk5hbWVdICYmIF93YXJuKG5hbWUgKyBcIiBlZmZlY3QgcmVxdWlyZXMgXCIgKyBwbHVnaW5OYW1lICsgXCIgcGx1Z2luLlwiKTtcbiAgICB9KTtcblxuICAgIF9lZmZlY3RzW25hbWVdID0gZnVuY3Rpb24gKHRhcmdldHMsIHZhcnMsIHRsKSB7XG4gICAgICByZXR1cm4gZWZmZWN0KHRvQXJyYXkodGFyZ2V0cyksIF9zZXREZWZhdWx0cyh2YXJzIHx8IHt9LCBkZWZhdWx0cyksIHRsKTtcbiAgICB9O1xuXG4gICAgaWYgKGV4dGVuZFRpbWVsaW5lKSB7XG4gICAgICBUaW1lbGluZS5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbiAodGFyZ2V0cywgdmFycywgcG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkKF9lZmZlY3RzW25hbWVdKHRhcmdldHMsIF9pc09iamVjdCh2YXJzKSA/IHZhcnMgOiAocG9zaXRpb24gPSB2YXJzKSAmJiB7fSwgdGhpcyksIHBvc2l0aW9uKTtcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICByZWdpc3RlckVhc2U6IGZ1bmN0aW9uIHJlZ2lzdGVyRWFzZShuYW1lLCBlYXNlKSB7XG4gICAgX2Vhc2VNYXBbbmFtZV0gPSBfcGFyc2VFYXNlKGVhc2UpO1xuICB9LFxuICBwYXJzZUVhc2U6IGZ1bmN0aW9uIHBhcnNlRWFzZShlYXNlLCBkZWZhdWx0RWFzZSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gX3BhcnNlRWFzZShlYXNlLCBkZWZhdWx0RWFzZSkgOiBfZWFzZU1hcDtcbiAgfSxcbiAgZ2V0QnlJZDogZnVuY3Rpb24gZ2V0QnlJZChpZCkge1xuICAgIHJldHVybiBfZ2xvYmFsVGltZWxpbmUuZ2V0QnlJZChpZCk7XG4gIH0sXG4gIGV4cG9ydFJvb3Q6IGZ1bmN0aW9uIGV4cG9ydFJvb3QodmFycywgaW5jbHVkZURlbGF5ZWRDYWxscykge1xuICAgIGlmICh2YXJzID09PSB2b2lkIDApIHtcbiAgICAgIHZhcnMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmUodmFycyksXG4gICAgICAgIGNoaWxkLFxuICAgICAgICBuZXh0O1xuICAgIHRsLnNtb290aENoaWxkVGltaW5nID0gX2lzTm90RmFsc2UodmFycy5zbW9vdGhDaGlsZFRpbWluZyk7XG5cbiAgICBfZ2xvYmFsVGltZWxpbmUucmVtb3ZlKHRsKTtcblxuICAgIHRsLl9kcCA9IDA7IC8vb3RoZXJ3aXNlIGl0J2xsIGdldCByZS1hY3RpdmF0ZWQgd2hlbiBhZGRpbmcgY2hpbGRyZW4gYW5kIGJlIHJlLWludHJvZHVjZWQgaW50byBfZ2xvYmFsVGltZWxpbmUncyBsaW5rZWQgbGlzdCAodGhlbiBhZGRlZCB0byBpdHNlbGYpLlxuXG4gICAgdGwuX3RpbWUgPSB0bC5fdFRpbWUgPSBfZ2xvYmFsVGltZWxpbmUuX3RpbWU7XG4gICAgY2hpbGQgPSBfZ2xvYmFsVGltZWxpbmUuX2ZpcnN0O1xuXG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBuZXh0ID0gY2hpbGQuX25leHQ7XG5cbiAgICAgIGlmIChpbmNsdWRlRGVsYXllZENhbGxzIHx8ICEoIWNoaWxkLl9kdXIgJiYgY2hpbGQgaW5zdGFuY2VvZiBUd2VlbiAmJiBjaGlsZC52YXJzLm9uQ29tcGxldGUgPT09IGNoaWxkLl90YXJnZXRzWzBdKSkge1xuICAgICAgICBfYWRkVG9UaW1lbGluZSh0bCwgY2hpbGQsIGNoaWxkLl9zdGFydCAtIGNoaWxkLl9kZWxheSk7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkID0gbmV4dDtcbiAgICB9XG5cbiAgICBfYWRkVG9UaW1lbGluZShfZ2xvYmFsVGltZWxpbmUsIHRsLCAwKTtcblxuICAgIHJldHVybiB0bDtcbiAgfSxcbiAgdXRpbHM6IHtcbiAgICB3cmFwOiB3cmFwLFxuICAgIHdyYXBZb3lvOiB3cmFwWW95byxcbiAgICBkaXN0cmlidXRlOiBkaXN0cmlidXRlLFxuICAgIHJhbmRvbTogcmFuZG9tLFxuICAgIHNuYXA6IHNuYXAsXG4gICAgbm9ybWFsaXplOiBub3JtYWxpemUsXG4gICAgZ2V0VW5pdDogZ2V0VW5pdCxcbiAgICBjbGFtcDogY2xhbXAsXG4gICAgc3BsaXRDb2xvcjogc3BsaXRDb2xvcixcbiAgICB0b0FycmF5OiB0b0FycmF5LFxuICAgIHNlbGVjdG9yOiBzZWxlY3RvcixcbiAgICBtYXBSYW5nZTogbWFwUmFuZ2UsXG4gICAgcGlwZTogcGlwZSxcbiAgICB1bml0aXplOiB1bml0aXplLFxuICAgIGludGVycG9sYXRlOiBpbnRlcnBvbGF0ZSxcbiAgICBzaHVmZmxlOiBzaHVmZmxlXG4gIH0sXG4gIGluc3RhbGw6IF9pbnN0YWxsLFxuICBlZmZlY3RzOiBfZWZmZWN0cyxcbiAgdGlja2VyOiBfdGlja2VyLFxuICB1cGRhdGVSb290OiBUaW1lbGluZS51cGRhdGVSb290LFxuICBwbHVnaW5zOiBfcGx1Z2lucyxcbiAgZ2xvYmFsVGltZWxpbmU6IF9nbG9iYWxUaW1lbGluZSxcbiAgY29yZToge1xuICAgIFByb3BUd2VlbjogUHJvcFR3ZWVuLFxuICAgIGdsb2JhbHM6IF9hZGRHbG9iYWwsXG4gICAgVHdlZW46IFR3ZWVuLFxuICAgIFRpbWVsaW5lOiBUaW1lbGluZSxcbiAgICBBbmltYXRpb246IEFuaW1hdGlvbixcbiAgICBnZXRDYWNoZTogX2dldENhY2hlLFxuICAgIF9yZW1vdmVMaW5rZWRMaXN0SXRlbTogX3JlbW92ZUxpbmtlZExpc3RJdGVtLFxuICAgIHN1cHByZXNzT3ZlcndyaXRlczogZnVuY3Rpb24gc3VwcHJlc3NPdmVyd3JpdGVzKHZhbHVlKSB7XG4gICAgICByZXR1cm4gX3N1cHByZXNzT3ZlcndyaXRlcyA9IHZhbHVlO1xuICAgIH1cbiAgfVxufTtcblxuX2ZvckVhY2hOYW1lKFwidG8sZnJvbSxmcm9tVG8sZGVsYXllZENhbGwsc2V0LGtpbGxUd2VlbnNPZlwiLCBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gX2dzYXBbbmFtZV0gPSBUd2VlbltuYW1lXTtcbn0pO1xuXG5fdGlja2VyLmFkZChUaW1lbGluZS51cGRhdGVSb290KTtcblxuX3F1aWNrVHdlZW4gPSBfZ3NhcC50byh7fSwge1xuICBkdXJhdGlvbjogMFxufSk7IC8vIC0tLS0gRVhUUkEgUExVR0lOUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgX2dldFBsdWdpblByb3BUd2VlbiA9IGZ1bmN0aW9uIF9nZXRQbHVnaW5Qcm9wVHdlZW4ocGx1Z2luLCBwcm9wKSB7XG4gIHZhciBwdCA9IHBsdWdpbi5fcHQ7XG5cbiAgd2hpbGUgKHB0ICYmIHB0LnAgIT09IHByb3AgJiYgcHQub3AgIT09IHByb3AgJiYgcHQuZnAgIT09IHByb3ApIHtcbiAgICBwdCA9IHB0Ll9uZXh0O1xuICB9XG5cbiAgcmV0dXJuIHB0O1xufSxcbiAgICBfYWRkTW9kaWZpZXJzID0gZnVuY3Rpb24gX2FkZE1vZGlmaWVycyh0d2VlbiwgbW9kaWZpZXJzKSB7XG4gIHZhciB0YXJnZXRzID0gdHdlZW4uX3RhcmdldHMsXG4gICAgICBwLFxuICAgICAgaSxcbiAgICAgIHB0O1xuXG4gIGZvciAocCBpbiBtb2RpZmllcnMpIHtcbiAgICBpID0gdGFyZ2V0cy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBwdCA9IHR3ZWVuLl9wdExvb2t1cFtpXVtwXTtcblxuICAgICAgaWYgKHB0ICYmIChwdCA9IHB0LmQpKSB7XG4gICAgICAgIGlmIChwdC5fcHQpIHtcbiAgICAgICAgICAvLyBpcyBhIHBsdWdpblxuICAgICAgICAgIHB0ID0gX2dldFBsdWdpblByb3BUd2VlbihwdCwgcCk7XG4gICAgICAgIH1cblxuICAgICAgICBwdCAmJiBwdC5tb2RpZmllciAmJiBwdC5tb2RpZmllcihtb2RpZmllcnNbcF0sIHR3ZWVuLCB0YXJnZXRzW2ldLCBwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0sXG4gICAgX2J1aWxkTW9kaWZpZXJQbHVnaW4gPSBmdW5jdGlvbiBfYnVpbGRNb2RpZmllclBsdWdpbihuYW1lLCBtb2RpZmllcikge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgcmF3VmFyczogMSxcbiAgICAvL2Rvbid0IHByZS1wcm9jZXNzIGZ1bmN0aW9uLWJhc2VkIHZhbHVlcyBvciBcInJhbmRvbSgpXCIgc3RyaW5ncy5cbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHRhcmdldCwgdmFycywgdHdlZW4pIHtcbiAgICAgIHR3ZWVuLl9vbkluaXQgPSBmdW5jdGlvbiAodHdlZW4pIHtcbiAgICAgICAgdmFyIHRlbXAsIHA7XG5cbiAgICAgICAgaWYgKF9pc1N0cmluZyh2YXJzKSkge1xuICAgICAgICAgIHRlbXAgPSB7fTtcblxuICAgICAgICAgIF9mb3JFYWNoTmFtZSh2YXJzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBbbmFtZV0gPSAxO1xuICAgICAgICAgIH0pOyAvL2lmIHRoZSB1c2VyIHBhc3NlcyBpbiBhIGNvbW1hLWRlbGltaXRlZCBsaXN0IG9mIHByb3BlcnR5IG5hbWVzIHRvIHJvdW5kUHJvcHMsIGxpa2UgXCJ4LHlcIiwgd2Ugcm91bmQgdG8gd2hvbGUgbnVtYmVycy5cblxuXG4gICAgICAgICAgdmFycyA9IHRlbXA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9kaWZpZXIpIHtcbiAgICAgICAgICB0ZW1wID0ge307XG5cbiAgICAgICAgICBmb3IgKHAgaW4gdmFycykge1xuICAgICAgICAgICAgdGVtcFtwXSA9IG1vZGlmaWVyKHZhcnNbcF0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhcnMgPSB0ZW1wO1xuICAgICAgICB9XG5cbiAgICAgICAgX2FkZE1vZGlmaWVycyh0d2VlbiwgdmFycyk7XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn07IC8vcmVnaXN0ZXIgY29yZSBwbHVnaW5zXG5cblxuZXhwb3J0IHZhciBnc2FwID0gX2dzYXAucmVnaXN0ZXJQbHVnaW4oe1xuICBuYW1lOiBcImF0dHJcIixcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCh0YXJnZXQsIHZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0cykge1xuICAgIHZhciBwLCBwdDtcblxuICAgIGZvciAocCBpbiB2YXJzKSB7XG4gICAgICBwdCA9IHRoaXMuYWRkKHRhcmdldCwgXCJzZXRBdHRyaWJ1dGVcIiwgKHRhcmdldC5nZXRBdHRyaWJ1dGUocCkgfHwgMCkgKyBcIlwiLCB2YXJzW3BdLCBpbmRleCwgdGFyZ2V0cywgMCwgMCwgcCk7XG4gICAgICBwdCAmJiAocHQub3AgPSBwKTtcblxuICAgICAgdGhpcy5fcHJvcHMucHVzaChwKTtcbiAgICB9XG4gIH1cbn0sIHtcbiAgbmFtZTogXCJlbmRBcnJheVwiLFxuICBpbml0OiBmdW5jdGlvbiBpbml0KHRhcmdldCwgdmFsdWUpIHtcbiAgICB2YXIgaSA9IHZhbHVlLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHRoaXMuYWRkKHRhcmdldCwgaSwgdGFyZ2V0W2ldIHx8IDAsIHZhbHVlW2ldKTtcbiAgICB9XG4gIH1cbn0sIF9idWlsZE1vZGlmaWVyUGx1Z2luKFwicm91bmRQcm9wc1wiLCBfcm91bmRNb2RpZmllciksIF9idWlsZE1vZGlmaWVyUGx1Z2luKFwibW9kaWZpZXJzXCIpLCBfYnVpbGRNb2RpZmllclBsdWdpbihcInNuYXBcIiwgc25hcCkpIHx8IF9nc2FwOyAvL3RvIHByZXZlbnQgdGhlIGNvcmUgcGx1Z2lucyBmcm9tIGJlaW5nIGRyb3BwZWQgdmlhIGFnZ3Jlc3NpdmUgdHJlZSBzaGFraW5nLCB3ZSBtdXN0IGluY2x1ZGUgdGhlbSBpbiB0aGUgdmFyaWFibGUgZGVjbGFyYXRpb24gaW4gdGhpcyB3YXkuXG5cblR3ZWVuLnZlcnNpb24gPSBUaW1lbGluZS52ZXJzaW9uID0gZ3NhcC52ZXJzaW9uID0gXCIzLjguMFwiO1xuX2NvcmVSZWFkeSA9IDE7XG5fd2luZG93RXhpc3RzKCkgJiYgX3dha2UoKTtcbnZhciBQb3dlcjAgPSBfZWFzZU1hcC5Qb3dlcjAsXG4gICAgUG93ZXIxID0gX2Vhc2VNYXAuUG93ZXIxLFxuICAgIFBvd2VyMiA9IF9lYXNlTWFwLlBvd2VyMixcbiAgICBQb3dlcjMgPSBfZWFzZU1hcC5Qb3dlcjMsXG4gICAgUG93ZXI0ID0gX2Vhc2VNYXAuUG93ZXI0LFxuICAgIExpbmVhciA9IF9lYXNlTWFwLkxpbmVhcixcbiAgICBRdWFkID0gX2Vhc2VNYXAuUXVhZCxcbiAgICBDdWJpYyA9IF9lYXNlTWFwLkN1YmljLFxuICAgIFF1YXJ0ID0gX2Vhc2VNYXAuUXVhcnQsXG4gICAgUXVpbnQgPSBfZWFzZU1hcC5RdWludCxcbiAgICBTdHJvbmcgPSBfZWFzZU1hcC5TdHJvbmcsXG4gICAgRWxhc3RpYyA9IF9lYXNlTWFwLkVsYXN0aWMsXG4gICAgQmFjayA9IF9lYXNlTWFwLkJhY2ssXG4gICAgU3RlcHBlZEVhc2UgPSBfZWFzZU1hcC5TdGVwcGVkRWFzZSxcbiAgICBCb3VuY2UgPSBfZWFzZU1hcC5Cb3VuY2UsXG4gICAgU2luZSA9IF9lYXNlTWFwLlNpbmUsXG4gICAgRXhwbyA9IF9lYXNlTWFwLkV4cG8sXG4gICAgQ2lyYyA9IF9lYXNlTWFwLkNpcmM7XG5leHBvcnQgeyBQb3dlcjAsIFBvd2VyMSwgUG93ZXIyLCBQb3dlcjMsIFBvd2VyNCwgTGluZWFyLCBRdWFkLCBDdWJpYywgUXVhcnQsIFF1aW50LCBTdHJvbmcsIEVsYXN0aWMsIEJhY2ssIFN0ZXBwZWRFYXNlLCBCb3VuY2UsIFNpbmUsIEV4cG8sIENpcmMgfTtcbmV4cG9ydCB7IFR3ZWVuIGFzIFR3ZWVuTWF4LCBUd2VlbiBhcyBUd2VlbkxpdGUsIFRpbWVsaW5lIGFzIFRpbWVsaW5lTWF4LCBUaW1lbGluZSBhcyBUaW1lbGluZUxpdGUsIGdzYXAgYXMgZGVmYXVsdCwgd3JhcCwgd3JhcFlveW8sIGRpc3RyaWJ1dGUsIHJhbmRvbSwgc25hcCwgbm9ybWFsaXplLCBnZXRVbml0LCBjbGFtcCwgc3BsaXRDb2xvciwgdG9BcnJheSwgc2VsZWN0b3IsIG1hcFJhbmdlLCBwaXBlLCB1bml0aXplLCBpbnRlcnBvbGF0ZSwgc2h1ZmZsZSB9OyAvL2V4cG9ydCBzb21lIGludGVybmFsIG1ldGhvZHMvb3JvamVjdHMgZm9yIHVzZSBpbiBDU1NQbHVnaW4gc28gdGhhdCB3ZSBjYW4gZXh0ZXJuYWxpemUgdGhhdCBmaWxlIGFuZCBhbGxvdyBjdXN0b20gYnVpbGRzIHRoYXQgZXhjbHVkZSBpdC5cblxuZXhwb3J0IHsgX2dldFByb3BlcnR5LCBfbnVtRXhwLCBfbnVtV2l0aFVuaXRFeHAsIF9pc1N0cmluZywgX2lzVW5kZWZpbmVkLCBfcmVuZGVyQ29tcGxleFN0cmluZywgX3JlbEV4cCwgX3NldERlZmF1bHRzLCBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0sIF9mb3JFYWNoTmFtZSwgX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eSwgX2NvbG9yU3RyaW5nRmlsdGVyLCBfcmVwbGFjZVJhbmRvbSwgX2NoZWNrUGx1Z2luLCBfcGx1Z2lucywgX3RpY2tlciwgX2NvbmZpZywgX3JvdW5kTW9kaWZpZXIsIF9yb3VuZCwgX21pc3NpbmdQbHVnaW4sIF9nZXRTZXR0ZXIsIF9nZXRDYWNoZSwgX2NvbG9yRXhwIH07IiwiaW1wb3J0IHsgZ3NhcCwgUG93ZXIwLCBQb3dlcjEsIFBvd2VyMiwgUG93ZXIzLCBQb3dlcjQsIExpbmVhciwgUXVhZCwgQ3ViaWMsIFF1YXJ0LCBRdWludCwgU3Ryb25nLCBFbGFzdGljLCBCYWNrLCBTdGVwcGVkRWFzZSwgQm91bmNlLCBTaW5lLCBFeHBvLCBDaXJjLCBUd2VlbkxpdGUsIFRpbWVsaW5lTGl0ZSwgVGltZWxpbmVNYXggfSBmcm9tIFwiLi9nc2FwLWNvcmUuanNcIjtcbmltcG9ydCB7IENTU1BsdWdpbiB9IGZyb20gXCIuL0NTU1BsdWdpbi5qc1wiO1xudmFyIGdzYXBXaXRoQ1NTID0gZ3NhcC5yZWdpc3RlclBsdWdpbihDU1NQbHVnaW4pIHx8IGdzYXAsXG4gICAgLy8gdG8gcHJvdGVjdCBmcm9tIHRyZWUgc2hha2luZ1xuVHdlZW5NYXhXaXRoQ1NTID0gZ3NhcFdpdGhDU1MuY29yZS5Ud2VlbjtcbmV4cG9ydCB7IGdzYXBXaXRoQ1NTIGFzIGdzYXAsIGdzYXBXaXRoQ1NTIGFzIGRlZmF1bHQsIENTU1BsdWdpbiwgVHdlZW5NYXhXaXRoQ1NTIGFzIFR3ZWVuTWF4LCBUd2VlbkxpdGUsIFRpbWVsaW5lTWF4LCBUaW1lbGluZUxpdGUsIFBvd2VyMCwgUG93ZXIxLCBQb3dlcjIsIFBvd2VyMywgUG93ZXI0LCBMaW5lYXIsIFF1YWQsIEN1YmljLCBRdWFydCwgUXVpbnQsIFN0cm9uZywgRWxhc3RpYywgQmFjaywgU3RlcHBlZEVhc2UsIEJvdW5jZSwgU2luZSwgRXhwbywgQ2lyYyB9OyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlFYWNoO1xuIiwidmFyIGJhc2VUaW1lcyA9IHJlcXVpcmUoJy4vX2Jhc2VUaW1lcycpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUxpa2VLZXlzO1xuIiwidmFyIGJhc2VGb3JPd24gPSByZXF1aXJlKCcuL19iYXNlRm9yT3duJyksXG4gICAgY3JlYXRlQmFzZUVhY2ggPSByZXF1aXJlKCcuL19jcmVhdGVCYXNlRWFjaCcpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZvckVhY2hgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheXxPYmplY3R9IFJldHVybnMgYGNvbGxlY3Rpb25gLlxuICovXG52YXIgYmFzZUVhY2ggPSBjcmVhdGVCYXNlRWFjaChiYXNlRm9yT3duKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRWFjaDtcbiIsInZhciBjcmVhdGVCYXNlRm9yID0gcmVxdWlyZSgnLi9fY3JlYXRlQmFzZUZvcicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBiYXNlRm9yT3duYCB3aGljaCBpdGVyYXRlcyBvdmVyIGBvYmplY3RgXG4gKiBwcm9wZXJ0aWVzIHJldHVybmVkIGJ5IGBrZXlzRnVuY2AgYW5kIGludm9rZXMgYGl0ZXJhdGVlYCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseSByZXR1cm5pbmcgYGZhbHNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xudmFyIGJhc2VGb3IgPSBjcmVhdGVCYXNlRm9yKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZvcjtcbiIsInZhciBiYXNlRm9yID0gcmVxdWlyZSgnLi9fYmFzZUZvcicpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5mb3JPd25gIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlRm9yT3duKG9iamVjdCwgaXRlcmF0ZWUpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBiYXNlRm9yKG9iamVjdCwgaXRlcmF0ZWUsIGtleXMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGb3JPd247XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzVHlwZWRBcnJheTtcbiIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVGltZXM7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuYXJ5O1xuIiwidmFyIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpO1xuXG4vKipcbiAqIENhc3RzIGB2YWx1ZWAgdG8gYGlkZW50aXR5YCBpZiBpdCdzIG5vdCBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGNhc3QgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNhc3RGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicgPyB2YWx1ZSA6IGlkZW50aXR5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RGdW5jdGlvbjtcbiIsInZhciBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgYGJhc2VFYWNoYCBvciBgYmFzZUVhY2hSaWdodGAgZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVhY2hGdW5jIFRoZSBmdW5jdGlvbiB0byBpdGVyYXRlIG92ZXIgYSBjb2xsZWN0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRWFjaChlYWNoRnVuYywgZnJvbVJpZ2h0KSB7XG4gIHJldHVybiBmdW5jdGlvbihjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICAgIGlmIChjb2xsZWN0aW9uID09IG51bGwpIHtcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICAgIH1cbiAgICBpZiAoIWlzQXJyYXlMaWtlKGNvbGxlY3Rpb24pKSB7XG4gICAgICByZXR1cm4gZWFjaEZ1bmMoY29sbGVjdGlvbiwgaXRlcmF0ZWUpO1xuICAgIH1cbiAgICB2YXIgbGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGgsXG4gICAgICAgIGluZGV4ID0gZnJvbVJpZ2h0ID8gbGVuZ3RoIDogLTEsXG4gICAgICAgIGl0ZXJhYmxlID0gT2JqZWN0KGNvbGxlY3Rpb24pO1xuXG4gICAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtpbmRleF0sIGluZGV4LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVCYXNlRWFjaDtcbiIsIi8qKlxuICogQ3JlYXRlcyBhIGJhc2UgZnVuY3Rpb24gZm9yIG1ldGhvZHMgbGlrZSBgXy5mb3JJbmAgYW5kIGBfLmZvck93bmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYmFzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmFzZUZvcihmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCwgaXRlcmF0ZWUsIGtleXNGdW5jKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGl0ZXJhYmxlID0gT2JqZWN0KG9iamVjdCksXG4gICAgICAgIHByb3BzID0ga2V5c0Z1bmMob2JqZWN0KSxcbiAgICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcHNbZnJvbVJpZ2h0ID8gbGVuZ3RoIDogKytpbmRleF07XG4gICAgICBpZiAoaXRlcmF0ZWUoaXRlcmFibGVba2V5XSwga2V5LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUJhc2VGb3I7XG4iLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcblxuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZSA9PSAnbnVtYmVyJyB8fFxuICAgICAgKHR5cGUgIT0gJ3N5bWJvbCcgJiYgcmVJc1VpbnQudGVzdCh2YWx1ZSkpKSAmJlxuICAgICAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJbmRleDtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Byb3RvdHlwZTtcbiIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5cztcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIC8vIFVzZSBgdXRpbC50eXBlc2AgZm9yIE5vZGUuanMgMTArLlxuICAgIHZhciB0eXBlcyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlICYmIGZyZWVNb2R1bGUucmVxdWlyZSgndXRpbCcpLnR5cGVzO1xuXG4gICAgaWYgKHR5cGVzKSB7XG4gICAgICByZXR1cm4gdHlwZXM7XG4gICAgfVxuXG4gICAgLy8gTGVnYWN5IGBwcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKWAgZm9yIE5vZGUuanMgPCAxMC5cbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZvckVhY2gnKTtcbiIsInZhciBhcnJheUVhY2ggPSByZXF1aXJlKCcuL19hcnJheUVhY2gnKSxcbiAgICBiYXNlRWFjaCA9IHJlcXVpcmUoJy4vX2Jhc2VFYWNoJyksXG4gICAgY2FzdEZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fY2FzdEZ1bmN0aW9uJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIEl0ZXJhdGVzIG92ZXIgZWxlbWVudHMgb2YgYGNvbGxlY3Rpb25gIGFuZCBpbnZva2VzIGBpdGVyYXRlZWAgZm9yIGVhY2ggZWxlbWVudC5cbiAqIFRoZSBpdGVyYXRlZSBpcyBpbnZva2VkIHdpdGggdGhyZWUgYXJndW1lbnRzOiAodmFsdWUsIGluZGV4fGtleSwgY29sbGVjdGlvbikuXG4gKiBJdGVyYXRlZSBmdW5jdGlvbnMgbWF5IGV4aXQgaXRlcmF0aW9uIGVhcmx5IGJ5IGV4cGxpY2l0bHkgcmV0dXJuaW5nIGBmYWxzZWAuXG4gKlxuICogKipOb3RlOioqIEFzIHdpdGggb3RoZXIgXCJDb2xsZWN0aW9uc1wiIG1ldGhvZHMsIG9iamVjdHMgd2l0aCBhIFwibGVuZ3RoXCJcbiAqIHByb3BlcnR5IGFyZSBpdGVyYXRlZCBsaWtlIGFycmF5cy4gVG8gYXZvaWQgdGhpcyBiZWhhdmlvciB1c2UgYF8uZm9ySW5gXG4gKiBvciBgXy5mb3JPd25gIGZvciBvYmplY3QgaXRlcmF0aW9uLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBhbGlhcyBlYWNoXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl8T2JqZWN0fSBSZXR1cm5zIGBjb2xsZWN0aW9uYC5cbiAqIEBzZWUgXy5mb3JFYWNoUmlnaHRcbiAqIEBleGFtcGxlXG4gKlxuICogXy5mb3JFYWNoKFsxLCAyXSwgZnVuY3Rpb24odmFsdWUpIHtcbiAqICAgY29uc29sZS5sb2codmFsdWUpO1xuICogfSk7XG4gKiAvLyA9PiBMb2dzIGAxYCB0aGVuIGAyYC5cbiAqXG4gKiBfLmZvckVhY2goeyAnYSc6IDEsICdiJzogMiB9LCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gKiAgIGNvbnNvbGUubG9nKGtleSk7XG4gKiB9KTtcbiAqIC8vID0+IExvZ3MgJ2EnIHRoZW4gJ2InIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpLlxuICovXG5mdW5jdGlvbiBmb3JFYWNoKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSB7XG4gIHZhciBmdW5jID0gaXNBcnJheShjb2xsZWN0aW9uKSA/IGFycmF5RWFjaCA6IGJhc2VFYWNoO1xuICByZXR1cm4gZnVuYyhjb2xsZWN0aW9uLCBjYXN0RnVuY3Rpb24oaXRlcmF0ZWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmb3JFYWNoO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBpdCByZWNlaXZlcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqXG4gKiBjb25zb2xlLmxvZyhfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcbiIsInZhciBiYXNlSXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL19iYXNlSXNBcmd1bWVudHMnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG4iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpLFxuICAgIHN0dWJGYWxzZSA9IHJlcXVpcmUoJy4vc3R1YkZhbHNlJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZmZlcjtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsInZhciBiYXNlSXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fYmFzZUlzVHlwZWRBcnJheScpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNUeXBlZEFycmF5O1xuIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXMgPSByZXF1aXJlKCcuL19iYXNlS2V5cycpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcbiIsIi8vIGNoZWNrIGRvY3VtZW50IGZpcnN0IHNvIGl0IGRvZXNuJ3QgZXJyb3IgaW4gbm9kZS5qc1xudmFyIHN0eWxlID0gdHlwZW9mIGRvY3VtZW50ICE9ICd1bmRlZmluZWQnXG4gID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLnN0eWxlXG4gIDoge31cblxudmFyIHByZWZpeGVzID0gWydPJywgJ21zJywgJ01veicsICdXZWJraXQnXVxudmFyIHVwcGVyID0gLyhbQS1aXSkvZ1xudmFyIG1lbW8gPSB7fVxuXG4vKipcbiAqIHByZWZpeCBga2V5YFxuICpcbiAqICAgcHJlZml4KCd0cmFuc2Zvcm0nKSAvLyA9PiBXZWJraXRUcmFuc2Zvcm1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBwcmVmaXgoa2V5KXtcbiAgLy8gQ2FtZWwgY2FzZVxuICBrZXkgPSBrZXkucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24oXywgY2hhcil7XG4gICAgcmV0dXJuIGNoYXIudG9VcHBlckNhc2UoKVxuICB9KVxuXG4gIC8vIFdpdGhvdXQgcHJlZml4XG4gIGlmIChzdHlsZVtrZXldICE9PSB1bmRlZmluZWQpIHJldHVybiBrZXlcblxuICAvLyBXaXRoIHByZWZpeFxuICB2YXIgS2V5ID0ga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpXG4gIHZhciBpID0gcHJlZml4ZXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIgbmFtZSA9IHByZWZpeGVzW2ldICsgS2V5XG4gICAgaWYgKHN0eWxlW25hbWVdICE9PSB1bmRlZmluZWQpIHJldHVybiBuYW1lXG4gIH1cblxuICByZXR1cm4ga2V5XG59XG5cbi8qKlxuICogTWVtb2l6ZWQgdmVyc2lvbiBvZiBgcHJlZml4YFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIHByZWZpeE1lbW96aWVkKGtleSl7XG4gIHJldHVybiBrZXkgaW4gbWVtb1xuICAgID8gbWVtb1trZXldXG4gICAgOiBtZW1vW2tleV0gPSBwcmVmaXgoa2V5KVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIGRhc2hlZCBwcmVmaXhcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBwcmVmaXhEYXNoZWQoa2V5KXtcbiAga2V5ID0gcHJlZml4KGtleSlcbiAgaWYgKHVwcGVyLnRlc3Qoa2V5KSkge1xuICAgIGtleSA9ICctJyArIGtleS5yZXBsYWNlKHVwcGVyLCAnLSQxJylcbiAgICB1cHBlci5sYXN0SW5kZXggPSAwXG4gIH1cbiAgcmV0dXJuIGtleS50b0xvd2VyQ2FzZSgpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHJlZml4TWVtb3ppZWRcbm1vZHVsZS5leHBvcnRzLmRhc2ggPSBwcmVmaXhEYXNoZWRcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MzQ3NjYyNTExMzNcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL2hvbWUvbHVjYXNzaWx2YS9iYWNrdXAvcHJvamV0b3MvZW5kdXJhbmNlL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcInB1YmxpY1BhdGhcIjpcIlwiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODc0ZmM1MTUyOGYwYjg0YTllNWRcIikiXSwibmFtZXMiOlsiR1NBUCIsImVhY2giLCJQcmVmaXgiLCJQYWdlIiwiY29uc3RydWN0b3IiLCJpZCIsImVsZW1lbnQiLCJlbGVtZW50cyIsInNlbGVjdG9yIiwic2VsZWN0b3JDaGlsZHJlbiIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsYXN0IiwidHJhbnNmb3JtUHJlZml4IiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJvbk1vdXNlV2hlZWwiLCJiaW5kIiwidXBkYXRlIiwiY3JlYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZW50cnkiLCJrZXkiLCJ3aW5kb3ciLCJIVE1MRWxlbWVudCIsIk5vZGVMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJzaG93IiwiYW5pbWF0ZUluIiwidGltZWxpbmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImZyb20iLCJhdXRvQWxwaGEiLCJvbkNvbXBsZXRlIiwiaGlkZSIsImFuaW1hdGVPdXQiLCJ0byIsInV0aWxzIiwiaW50ZXJwb2xhdGUiLCJldmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJnc2FwIiwiX2dldFByb3BlcnR5IiwiX251bUV4cCIsIl9udW1XaXRoVW5pdEV4cCIsImdldFVuaXQiLCJfaXNTdHJpbmciLCJfaXNVbmRlZmluZWQiLCJfcmVuZGVyQ29tcGxleFN0cmluZyIsIl9yZWxFeHAiLCJfZm9yRWFjaE5hbWUiLCJfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5IiwiX2NvbG9yU3RyaW5nRmlsdGVyIiwiX2NoZWNrUGx1Z2luIiwiX3JlcGxhY2VSYW5kb20iLCJfcGx1Z2lucyIsIkdTQ2FjaGUiLCJQcm9wVHdlZW4iLCJfY29uZmlnIiwiX3RpY2tlciIsIl9yb3VuZCIsIl9taXNzaW5nUGx1Z2luIiwiX2dldFNldHRlciIsIl9nZXRDYWNoZSIsIl9jb2xvckV4cCIsIl9zZXREZWZhdWx0cyIsIl9yZW1vdmVMaW5rZWRMaXN0SXRlbSIsIl93aW4iLCJfZG9jIiwiX2RvY0VsZW1lbnQiLCJfcGx1Z2luSW5pdHRlZCIsIl90ZW1wRGl2IiwiX3RlbXBEaXZTdHlsZXIiLCJfcmVjZW50U2V0dGVyUGx1Z2luIiwiX3dpbmRvd0V4aXN0cyIsIl90cmFuc2Zvcm1Qcm9wcyIsIl9SQUQyREVHIiwiTWF0aCIsIlBJIiwiX0RFRzJSQUQiLCJfYXRhbjIiLCJhdGFuMiIsIl9iaWdOdW0iLCJfY2Fwc0V4cCIsIl9ob3Jpem9udGFsRXhwIiwiX2NvbXBsZXhFeHAiLCJfcHJvcGVydHlBbGlhc2VzIiwic2NhbGUiLCJhbHBoYSIsIl9yZW5kZXJDU1NQcm9wIiwicmF0aW8iLCJkYXRhIiwic2V0IiwidCIsInAiLCJyb3VuZCIsInMiLCJjIiwidSIsIl9yZW5kZXJQcm9wV2l0aEVuZCIsImUiLCJfcmVuZGVyQ1NTUHJvcFdpdGhCZWdpbm5pbmciLCJiIiwiX3JlbmRlclJvdW5kZWRDU1NQcm9wIiwidmFsdWUiLCJfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZSIsIl9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlT25seUF0RW5kIiwiX3NldHRlckNTU1N0eWxlIiwicHJvcGVydHkiLCJzdHlsZSIsIl9zZXR0ZXJDU1NQcm9wIiwic2V0UHJvcGVydHkiLCJfc2V0dGVyVHJhbnNmb3JtIiwiX2dzYXAiLCJfc2V0dGVyU2NhbGUiLCJzY2FsZVgiLCJzY2FsZVkiLCJfc2V0dGVyU2NhbGVXaXRoUmVuZGVyIiwiY2FjaGUiLCJyZW5kZXJUcmFuc2Zvcm0iLCJfc2V0dGVyVHJhbnNmb3JtV2l0aFJlbmRlciIsIl90cmFuc2Zvcm1Qcm9wIiwiX3RyYW5zZm9ybU9yaWdpblByb3AiLCJfc3VwcG9ydHMzRCIsIl9jcmVhdGVFbGVtZW50IiwidHlwZSIsIm5zIiwiY3JlYXRlRWxlbWVudE5TIiwicmVwbGFjZSIsImNyZWF0ZUVsZW1lbnQiLCJfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSIsInNraXBQcmVmaXhGYWxsYmFjayIsImNzIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJ0b0xvd2VyQ2FzZSIsIl9jaGVja1Byb3BQcmVmaXgiLCJfcHJlZml4ZXMiLCJzcGxpdCIsInByZWZlclByZWZpeCIsImkiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0ciIsIl9pbml0Q29yZSIsImRvY3VtZW50RWxlbWVudCIsImNzc1RleHQiLCJfZ2V0QkJveEhhY2siLCJzd2FwSWZQb3NzaWJsZSIsInN2ZyIsIm93bmVyU1ZHRWxlbWVudCIsImdldEF0dHJpYnV0ZSIsIm9sZFBhcmVudCIsInBhcmVudE5vZGUiLCJvbGRTaWJsaW5nIiwibmV4dFNpYmxpbmciLCJvbGRDU1MiLCJiYm94IiwiYXBwZW5kQ2hpbGQiLCJkaXNwbGF5IiwiZ2V0QkJveCIsIl9nc2FwQkJveCIsImluc2VydEJlZm9yZSIsInJlbW92ZUNoaWxkIiwiX2dldEF0dHJpYnV0ZUZhbGxiYWNrcyIsImF0dHJpYnV0ZXNBcnJheSIsImhhc0F0dHJpYnV0ZSIsIl9nZXRCQm94IiwiYm91bmRzIiwiZXJyb3IiLCJjYWxsIiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwieSIsIl9pc1NWRyIsImdldENUTSIsIl9yZW1vdmVQcm9wZXJ0eSIsInJlbW92ZVByb3BlcnR5IiwicmVtb3ZlQXR0cmlidXRlIiwiX2FkZE5vblR3ZWVuaW5nUFQiLCJwbHVnaW4iLCJiZWdpbm5pbmciLCJlbmQiLCJvbmx5U2V0QXRFbmQiLCJwdCIsIl9wdCIsIl9wcm9wcyIsInB1c2giLCJfbm9uQ29udmVydGlibGVVbml0cyIsImRlZyIsInJhZCIsInR1cm4iLCJfY29udmVydFRvVW5pdCIsInVuaXQiLCJjdXJWYWx1ZSIsInBhcnNlRmxvYXQiLCJjdXJVbml0IiwidHJpbSIsImhvcml6b250YWwiLCJ0ZXN0IiwiaXNSb290U1ZHIiwidGFnTmFtZSIsIm1lYXN1cmVQcm9wZXJ0eSIsImFtb3VudCIsInRvUGl4ZWxzIiwidG9QZXJjZW50IiwicHgiLCJwYXJlbnQiLCJpc1NWRyIsImluZGV4T2YiLCJib2R5IiwidGltZSIsInBvc2l0aW9uIiwiX2dldCIsInVuY2FjaGUiLCJfcGFyc2VUcmFuc2Zvcm0iLCJvcmlnaW4iLCJfZmlyc3RUd29Pbmx5Iiwiek9yaWdpbiIsIl9zcGVjaWFsUHJvcHMiLCJfdHdlZW5Db21wbGV4Q1NTU3RyaW5nIiwicHJvcCIsInN0YXJ0IiwiaW5kZXgiLCJtYXRjaEluZGV4IiwiYSIsInJlc3VsdCIsInN0YXJ0VmFsdWVzIiwic3RhcnROdW0iLCJjb2xvciIsInN0YXJ0VmFsdWUiLCJlbmRWYWx1ZSIsImVuZE51bSIsImNodW5rIiwiZW5kVW5pdCIsInN0YXJ0VW5pdCIsInJlbGF0aXZlIiwiZW5kVmFsdWVzIiwibWF0Y2giLCJleGVjIiwic3Vic3RyaW5nIiwibGFzdEluZGV4IiwidW5pdHMiLCJfbmV4dCIsIm0iLCJyIiwiX2tleXdvcmRUb1BlcmNlbnQiLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJjZW50ZXIiLCJfY29udmVydEtleXdvcmRzVG9QZXJjZW50YWdlcyIsImpvaW4iLCJfcmVuZGVyQ2xlYXJQcm9wcyIsInR3ZWVuIiwiX3RpbWUiLCJfZHVyIiwicHJvcHMiLCJjbGVhclRyYW5zZm9ybXMiLCJjbGVhclByb3BzIiwicHIiLCJfaWRlbnRpdHkyRE1hdHJpeCIsIl9yb3RhdGlvbmFsUHJvcGVydGllcyIsIl9pc051bGxUcmFuc2Zvcm0iLCJfZ2V0Q29tcHV0ZWRUcmFuc2Zvcm1NYXRyaXhBc0FycmF5IiwibWF0cml4U3RyaW5nIiwibWFwIiwiX2dldE1hdHJpeCIsImZvcmNlMkQiLCJtYXRyaXgiLCJ0ZW1wIiwiYWRkZWRUb0RPTSIsInRyYW5zZm9ybSIsImJhc2VWYWwiLCJjb25zb2xpZGF0ZSIsImQiLCJmIiwib2Zmc2V0UGFyZW50IiwiX2FwcGx5U1ZHT3JpZ2luIiwib3JpZ2luSXNBYnNvbHV0ZSIsInNtb290aCIsIm1hdHJpeEFycmF5IiwicGx1Z2luVG9BZGRQcm9wVHdlZW5zVG8iLCJ4T3JpZ2luT2xkIiwieE9yaWdpbiIsInlPcmlnaW5PbGQiLCJ5T3JpZ2luIiwieE9mZnNldE9sZCIsInhPZmZzZXQiLCJ5T2Zmc2V0T2xkIiwieU9mZnNldCIsInR4IiwidHkiLCJvcmlnaW5TcGxpdCIsImRldGVybWluYW50Iiwic2V0QXR0cmlidXRlIiwiaW52ZXJ0ZWRTY2FsZVgiLCJ6Iiwicm90YXRpb24iLCJyb3RhdGlvblgiLCJyb3RhdGlvblkiLCJza2V3WCIsInNrZXdZIiwicGVyc3BlY3RpdmUiLCJhbmdsZSIsImNvcyIsInNpbiIsImExMiIsImEyMiIsInQxIiwidDIiLCJ0MyIsImExMyIsImEyMyIsImEzMyIsImE0MiIsImE0MyIsImEzMiIsInNxcnQiLCJhYnMiLCJmb3JjZUNTUyIsInhQZXJjZW50Iiwib2Zmc2V0V2lkdGgiLCJ5UGVyY2VudCIsIm9mZnNldEhlaWdodCIsInRyYW5zZm9ybVBlcnNwZWN0aXZlIiwiZm9yY2UzRCIsIl9yZW5kZXJTVkdUcmFuc2Zvcm1zIiwiX3JlbmRlckNTU1RyYW5zZm9ybXMiLCJfcmVuZGVyTm9uM0RUcmFuc2Zvcm1zIiwiX2FkZFB4VHJhbnNsYXRlIiwiX3plcm9EZWciLCJfemVyb1B4IiwiX2VuZFBhcmVudGhlc2lzIiwiX3JlZiIsInRyYW5zZm9ybXMiLCJ1c2UzRCIsIl9yZWYyIiwiYTExIiwiYTIxIiwidGFuIiwiX2FkZFJvdGF0aW9uYWxQcm9wVHdlZW4iLCJjYXAiLCJpc1N0cmluZyIsImNoYW5nZSIsImZpbmFsVmFsdWUiLCJkaXJlY3Rpb24iLCJfYXNzaWduIiwic291cmNlIiwiX2FkZFJhd1RyYW5zZm9ybVBUcyIsInN0YXJ0Q2FjaGUiLCJleGNsdWRlIiwiZW5kQ2FjaGUiLCJuYW1lIiwibCIsInNpZGUiLCJ2YXJzIiwiYXJndW1lbnRzIiwiZm9yRWFjaCIsImluaXQiLCJDU1NQbHVnaW4iLCJyZWdpc3RlciIsInRhcmdldFRlc3QiLCJub2RlVHlwZSIsInRhcmdldHMiLCJzdGFydEF0Iiwic3BlY2lhbFByb3AiLCJpc1RyYW5zZm9ybVJlbGF0ZWQiLCJ0cmFuc2Zvcm1Qcm9wVHdlZW4iLCJoYXNQcmlvcml0eSIsImFkZCIsInBhcnNlVHJhbnNmb3JtIiwic21vb3RoT3JpZ2luIiwiZGVwIiwiYXV0b1JvdW5kIiwiZ2V0IiwiYWxpYXNlcyIsImdldFNldHRlciIsImNvcmUiLCJjaGVja1ByZWZpeCIsInBvc2l0aW9uQW5kU2NhbGUiLCJvdGhlcnMiLCJhbGwiLCJyZWdpc3RlclBsdWdpbiIsImRlZmF1bHQiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwic2VsZiIsIlJlZmVyZW5jZUVycm9yIiwiX2luaGVyaXRzTG9vc2UiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJwcm90b3R5cGUiLCJPYmplY3QiLCJfX3Byb3RvX18iLCJhdXRvU2xlZXAiLCJudWxsVGFyZ2V0V2FybiIsImxpbmVIZWlnaHQiLCJfZGVmYXVsdHMiLCJkdXJhdGlvbiIsIm92ZXJ3cml0ZSIsImRlbGF5IiwiX3N1cHByZXNzT3ZlcndyaXRlcyIsIl90aW55TnVtIiwiXzJQSSIsIl9IQUxGX1BJIiwiX2dzSUQiLCJfc3FydCIsIl9jb3MiLCJfc2luIiwiX2lzRnVuY3Rpb24iLCJfaXNOdW1iZXIiLCJfaXNPYmplY3QiLCJfaXNOb3RGYWxzZSIsIl9pc0Z1bmNPclN0cmluZyIsIl9pc1R5cGVkQXJyYXkiLCJBcnJheUJ1ZmZlciIsImlzVmlldyIsIl9pc0FycmF5IiwiX3N0cmljdE51bUV4cCIsIl9jb21wbGV4U3RyaW5nTnVtRXhwIiwiX2RlbGltaXRlZFZhbHVlRXhwIiwiX3VuaXRFeHAiLCJfZ2xvYmFsVGltZWxpbmUiLCJfY29yZUluaXR0ZWQiLCJfZ2xvYmFscyIsIl9pbnN0YWxsU2NvcGUiLCJfY29yZVJlYWR5IiwiX2luc3RhbGwiLCJzY29wZSIsIl9tZXJnZSIsIndhcm4iLCJfd2FybiIsIm1lc3NhZ2UiLCJzdXBwcmVzcyIsIl9hZGRHbG9iYWwiLCJvYmoiLCJfZW1wdHlGdW5jIiwiX3Jlc2VydmVkUHJvcHMiLCJfbGF6eVR3ZWVucyIsIl9sYXp5TG9va3VwIiwiX2xhc3RSZW5kZXJlZEZyYW1lIiwiX2VmZmVjdHMiLCJfbmV4dEdDRnJhbWUiLCJfaGFybmVzc1BsdWdpbnMiLCJfY2FsbGJhY2tOYW1lcyIsIl9oYXJuZXNzIiwiaGFybmVzc1BsdWdpbiIsImhhcm5lc3MiLCJzcGxpY2UiLCJ0b0FycmF5IiwidiIsIm5hbWVzIiwiZnVuYyIsIl9yb3VuZFByZWNpc2UiLCJfYXJyYXlDb250YWluc0FueSIsInRvU2VhcmNoIiwidG9GaW5kIiwiX2xhenlSZW5kZXIiLCJzbGljZSIsIl9sYXp5IiwicmVuZGVyIiwiX2xhenlTYWZlUmVuZGVyIiwiYW5pbWF0aW9uIiwic3VwcHJlc3NFdmVudHMiLCJmb3JjZSIsIl9udW1lcmljSWZQb3NzaWJsZSIsIm4iLCJfcGFzc1Rocm91Z2giLCJkZWZhdWx0cyIsIl9zZXRLZXlmcmFtZURlZmF1bHRzIiwiYmFzZSIsInRvTWVyZ2UiLCJfbWVyZ2VEZWVwIiwiX2NvcHlFeGNsdWRpbmciLCJleGNsdWRpbmciLCJjb3B5IiwiX2luaGVyaXREZWZhdWx0cyIsImtleWZyYW1lcyIsImluaGVyaXQiLCJfZHAiLCJfYXJyYXlzTWF0Y2giLCJhMSIsImEyIiwiX2FkZExpbmtlZExpc3RJdGVtIiwiY2hpbGQiLCJmaXJzdFByb3AiLCJsYXN0UHJvcCIsInNvcnRCeSIsInByZXYiLCJfcHJldiIsIm5leHQiLCJfcmVtb3ZlRnJvbVBhcmVudCIsIm9ubHlJZlBhcmVudEhhc0F1dG9SZW1vdmUiLCJhdXRvUmVtb3ZlQ2hpbGRyZW4iLCJyZW1vdmUiLCJfYWN0IiwiX3VuY2FjaGUiLCJfZW5kIiwiX3N0YXJ0IiwiX2RpcnR5IiwiX3JlY2FjaGVBbmNlc3RvcnMiLCJ0b3RhbER1cmF0aW9uIiwiX2hhc05vUGF1c2VkQW5jZXN0b3JzIiwiX3RzIiwiX2VsYXBzZWRDeWNsZUR1cmF0aW9uIiwiX3JlcGVhdCIsIl9hbmltYXRpb25DeWNsZSIsIl90VGltZSIsIl9yRGVsYXkiLCJ0VGltZSIsImN5Y2xlRHVyYXRpb24iLCJ3aG9sZSIsImZsb29yIiwiX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUiLCJwYXJlbnRUaW1lIiwiX3REdXIiLCJfc2V0RW5kIiwiX3J0cyIsIl9hbGlnblBsYXloZWFkIiwidG90YWxUaW1lIiwic21vb3RoQ2hpbGRUaW1pbmciLCJfcG9zdEFkZENoZWNrcyIsIl9pbml0dGVkIiwicmF3VGltZSIsIl9jbGFtcCIsIl96VGltZSIsIl9hZGRUb1RpbWVsaW5lIiwic2tpcENoZWNrcyIsIl9wYXJzZVBvc2l0aW9uIiwiX2RlbGF5IiwidGltZVNjYWxlIiwiX3NvcnQiLCJfaXNGcm9tT3JGcm9tU3RhcnQiLCJfcmVjZW50IiwiX3Njcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwiU2Nyb2xsVHJpZ2dlciIsIl9hdHRlbXB0SW5pdFR3ZWVuIiwiX2luaXRUd2VlbiIsImxhenkiLCJmcmFtZSIsIl9wYXJlbnRQbGF5aGVhZElzQmVmb3JlU3RhcnQiLCJfbG9jayIsIl9yZW5kZXJaZXJvRHVyYXRpb25Ud2VlbiIsInByZXZSYXRpbyIsInJlcGVhdERlbGF5IiwiaXRlcmF0aW9uIiwicHJldkl0ZXJhdGlvbiIsIl95b3lvIiwicmVwZWF0UmVmcmVzaCIsImludmFsaWRhdGUiLCJfZnJvbSIsIl9zdGFydEF0IiwiX29uVXBkYXRlIiwiX2NhbGxiYWNrIiwiX3Byb20iLCJfZmluZE5leHRQYXVzZVR3ZWVuIiwicHJldlRpbWUiLCJfZmlyc3QiLCJfbGFzdCIsIl9zZXREdXJhdGlvbiIsInNraXBVbmNhY2hlIiwibGVhdmVQbGF5aGVhZCIsInJlcGVhdCIsImR1ciIsInRvdGFsUHJvZ3Jlc3MiLCJfb25VcGRhdGVUb3RhbER1cmF0aW9uIiwiVGltZWxpbmUiLCJfemVyb1Bvc2l0aW9uIiwiZW5kVGltZSIsInBlcmNlbnRBbmltYXRpb24iLCJsYWJlbHMiLCJyZWNlbnQiLCJjbGlwcGVkRHVyYXRpb24iLCJvZmZzZXQiLCJpc1BlcmNlbnQiLCJpc05hTiIsIl9jcmVhdGVUd2VlblR5cGUiLCJwYXJhbXMiLCJpc0xlZ2FjeSIsInZhcnNJbmRleCIsImlyVmFycyIsImltbWVkaWF0ZVJlbmRlciIsInJ1bkJhY2t3YXJkcyIsIlR3ZWVuIiwiX2NvbmRpdGlvbmFsUmV0dXJuIiwibWluIiwibWF4IiwiY2xhbXAiLCJfc2xpY2UiLCJfaXNBcnJheUxpa2UiLCJub25FbXB0eSIsIl9mbGF0dGVuIiwiYXIiLCJsZWF2ZVN0cmluZ3MiLCJhY2N1bXVsYXRvciIsIl9hY2N1bXVsYXRvciIsImFwcGx5IiwiX3dha2UiLCJlbCIsIm5hdGl2ZUVsZW1lbnQiLCJzaHVmZmxlIiwic29ydCIsInJhbmRvbSIsImRpc3RyaWJ1dGUiLCJlYXNlIiwiX3BhcnNlRWFzZSIsImlzRGVjaW1hbCIsInJhdGlvcyIsImF4aXMiLCJyYXRpb1giLCJyYXRpb1kiLCJlZGdlcyIsImRpc3RhbmNlcyIsIm9yaWdpblgiLCJvcmlnaW5ZIiwiaiIsIndyYXBBdCIsImdyaWQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJfaW52ZXJ0RWFzZSIsIl9yb3VuZE1vZGlmaWVyIiwicG93IiwicmF3Iiwic25hcCIsInNuYXBUbyIsInJhZGl1cyIsImlzMkQiLCJ2YWx1ZXMiLCJpbmNyZW1lbnQiLCJjbG9zZXN0IiwiZHgiLCJkeSIsInJvdW5kaW5nSW5jcmVtZW50IiwicmV0dXJuRnVuY3Rpb24iLCJwaXBlIiwiX2xlbiIsImZ1bmN0aW9ucyIsIl9rZXkiLCJyZWR1Y2UiLCJ1bml0aXplIiwibm9ybWFsaXplIiwibWFwUmFuZ2UiLCJfd3JhcEFycmF5Iiwid3JhcHBlciIsIndyYXAiLCJyYW5nZSIsIndyYXBZb3lvIiwidG90YWwiLCJudW1zIiwiaW5NaW4iLCJpbk1heCIsIm91dE1pbiIsIm91dE1heCIsImluUmFuZ2UiLCJvdXRSYW5nZSIsInByb2dyZXNzIiwibXV0YXRlIiwibWFzdGVyIiwiaW50ZXJwb2xhdG9ycyIsImlsIiwiX2FkZFByb3BUd2VlbiIsIl9yZW5kZXJQcm9wVHdlZW5zIiwiX2dldExhYmVsSW5EaXJlY3Rpb24iLCJmcm9tVGltZSIsImJhY2t3YXJkIiwiZGlzdGFuY2UiLCJsYWJlbCIsImV4ZWN1dGVMYXp5Rmlyc3QiLCJjYWxsYmFjayIsImNhbGxiYWNrU2NvcGUiLCJfaW50ZXJydXB0Iiwic2Nyb2xsVHJpZ2dlciIsImtpbGwiLCJfcXVpY2tUd2VlbiIsIl9jcmVhdGVQbHVnaW4iLCJjb25maWciLCJpc0Z1bmMiLCJQbHVnaW4iLCJpbnN0YW5jZURlZmF1bHRzIiwiX2tpbGxQcm9wVHdlZW5zT2YiLCJtb2RpZmllciIsIl9hZGRQbHVnaW5Nb2RpZmllciIsInJhd1ZhcnMiLCJzdGF0aWNzIiwiXzI1NSIsIl9jb2xvckxvb2t1cCIsImFxdWEiLCJsaW1lIiwic2lsdmVyIiwiYmxhY2siLCJtYXJvb24iLCJ0ZWFsIiwiYmx1ZSIsIm5hdnkiLCJ3aGl0ZSIsIm9saXZlIiwieWVsbG93Iiwib3JhbmdlIiwiZ3JheSIsInB1cnBsZSIsImdyZWVuIiwicmVkIiwicGluayIsImN5YW4iLCJ0cmFuc3BhcmVudCIsIl9odWUiLCJoIiwibTEiLCJtMiIsInNwbGl0Q29sb3IiLCJ0b0hTTCIsImZvcmNlQWxwaGEiLCJnIiwid2FzSFNMIiwicGFyc2VJbnQiLCJOdW1iZXIiLCJfY29sb3JPcmRlckRhdGEiLCJfZm9ybWF0Q29sb3JzIiwib3JkZXJNYXRjaERhdGEiLCJjb2xvcnMiLCJzaGVsbCIsInNoaWZ0IiwiUmVnRXhwIiwiX2hzbEV4cCIsImNvbWJpbmVkIiwiX3RpY2tlckFjdGl2ZSIsIl9nZXRUaW1lIiwiRGF0ZSIsIm5vdyIsIl9sYWdUaHJlc2hvbGQiLCJfYWRqdXN0ZWRMYWciLCJfc3RhcnRUaW1lIiwiX2xhc3RVcGRhdGUiLCJfZ2FwIiwiX25leHRUaW1lIiwiX2xpc3RlbmVycyIsIl9pZCIsIl9yZXEiLCJfcmFmIiwiX3NlbGYiLCJfZGVsdGEiLCJfaSIsIl90aWNrIiwiZWxhcHNlZCIsIm1hbnVhbCIsIm92ZXJsYXAiLCJkaXNwYXRjaCIsInRpY2siLCJkZWx0YVJhdGlvIiwiZnBzIiwid2FrZSIsImdzYXBWZXJzaW9ucyIsInZlcnNpb24iLCJHcmVlblNvY2tHbG9iYWxzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2xlZXAiLCJzZXRUaW1lb3V0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjbGVhclRpbWVvdXQiLCJsYWdTbW9vdGhpbmciLCJ0aHJlc2hvbGQiLCJhZGp1c3RlZExhZyIsIl9mcHMiLCJfZWFzZU1hcCIsIl9jdXN0b21FYXNlRXhwIiwiX3F1b3Rlc0V4cCIsIl9wYXJzZU9iamVjdEluU3RyaW5nIiwidmFsIiwicGFyc2VkVmFsIiwibGFzdEluZGV4T2YiLCJfdmFsdWVJblBhcmVudGhlc2VzIiwib3BlbiIsImNsb3NlIiwibmVzdGVkIiwiX2NvbmZpZ0Vhc2VGcm9tU3RyaW5nIiwiX0NFIiwiX3Byb3BhZ2F0ZVlveW9FYXNlIiwiaXNZb3lvIiwieW95b0Vhc2UiLCJfZWFzZSIsIl95RWFzZSIsImRlZmF1bHRFYXNlIiwiX2luc2VydEVhc2UiLCJlYXNlSW4iLCJlYXNlT3V0IiwiZWFzZUluT3V0IiwibG93ZXJjYXNlTmFtZSIsIl9lYXNlSW5PdXRGcm9tT3V0IiwiX2NvbmZpZ0VsYXN0aWMiLCJhbXBsaXR1ZGUiLCJwZXJpb2QiLCJwMSIsInAyIiwicDMiLCJhc2luIiwiX2NvbmZpZ0JhY2siLCJvdmVyc2hvb3QiLCJwb3dlciIsIkxpbmVhciIsImVhc2VOb25lIiwibm9uZSIsIm4xIiwibjIiLCJuMyIsIlN0ZXBwZWRFYXNlIiwic3RlcHMiLCJpbW1lZGlhdGVTdGFydCIsIkFuaW1hdGlvbiIsIkluZmluaXR5IiwieW95byIsIl9wcm90byIsInN0YXJ0VGltZSIsIl90b3RhbFRpbWUiLCJfcHRMb29rdXAiLCJfcFRpbWUiLCJfcHMiLCJwYXVzZWQiLCJpbmNsdWRlUmVwZWF0cyIsIndyYXBSZXBlYXRzIiwiZ2xvYmFsVGltZSIsInNlZWsiLCJyZXN0YXJ0IiwiaW5jbHVkZURlbGF5IiwicGxheSIsInJldmVyc2VkIiwicmV2ZXJzZSIsInBhdXNlIiwiYXRUaW1lIiwicmVzdW1lIiwiaXNBY3RpdmUiLCJldmVudENhbGxiYWNrIiwidGhlbiIsIm9uRnVsZmlsbGVkIiwiX3Jlc29sdmUiLCJfdGhlbiIsIl9BbmltYXRpb24iLCJfdGhpcyIsInNvcnRDaGlsZHJlbiIsIl9wcm90bzIiLCJmcm9tVG8iLCJmcm9tVmFycyIsInRvVmFycyIsImRlbGF5ZWRDYWxsIiwic3RhZ2dlclRvIiwic3RhZ2dlciIsIm9uQ29tcGxldGVBbGwiLCJvbkNvbXBsZXRlQWxsUGFyYW1zIiwib25Db21wbGV0ZVBhcmFtcyIsInN0YWdnZXJGcm9tIiwic3RhZ2dlckZyb21UbyIsInREdXIiLCJjcm9zc2luZ1N0YXJ0IiwicHJldlBhdXNlZCIsInBhdXNlVHdlZW4iLCJwcmV2U3RhcnQiLCJyZXdpbmRpbmciLCJkb2VzV3JhcCIsIm9uUmVwZWF0IiwiX2hhc1BhdXNlIiwiX2ZvcmNpbmciLCJvblVwZGF0ZSIsImFkanVzdGVkVGltZSIsIl90aGlzMiIsImFkZExhYmVsIiwiZ2V0Q2hpbGRyZW4iLCJ0d2VlbnMiLCJ0aW1lbGluZXMiLCJpZ25vcmVCZWZvcmVUaW1lIiwiZ2V0QnlJZCIsImFuaW1hdGlvbnMiLCJyZW1vdmVMYWJlbCIsImtpbGxUd2VlbnNPZiIsIl90b3RhbFRpbWUyIiwiYWRkUGF1c2UiLCJyZW1vdmVQYXVzZSIsIm9ubHlBY3RpdmUiLCJnZXRUd2VlbnNPZiIsIl9vdmVyd3JpdGluZ1R3ZWVuIiwicGFyc2VkVGFyZ2V0cyIsImlzR2xvYmFsVGltZSIsImNoaWxkcmVuIiwiX3RhcmdldHMiLCJ0d2VlblRvIiwidGwiLCJfdmFycyIsIl9vblN0YXJ0Iiwib25TdGFydCIsIm9uU3RhcnRQYXJhbXMiLCJpbml0dGVkIiwidHdlZW5Gcm9tVG8iLCJmcm9tUG9zaXRpb24iLCJ0b1Bvc2l0aW9uIiwibmV4dExhYmVsIiwiYWZ0ZXJUaW1lIiwicHJldmlvdXNMYWJlbCIsImJlZm9yZVRpbWUiLCJjdXJyZW50TGFiZWwiLCJzaGlmdENoaWxkcmVuIiwiYWRqdXN0TGFiZWxzIiwiY2xlYXIiLCJpbmNsdWRlTGFiZWxzIiwidXBkYXRlUm9vdCIsIl9hZGRDb21wbGV4U3RyaW5nUHJvcFR3ZWVuIiwic2V0dGVyIiwic3RyaW5nRmlsdGVyIiwiZnVuY1BhcmFtIiwic3RhcnROdW1zIiwiaGFzUmFuZG9tIiwiZnAiLCJjdXJyZW50VmFsdWUiLCJwYXJzZWRTdGFydCIsIl9zZXR0ZXJQbGFpbiIsIl9zZXR0ZXJGdW5jV2l0aFBhcmFtIiwiX3NldHRlckZ1bmMiLCJfcmVuZGVyQm9vbGVhbiIsIl9yZW5kZXJQbGFpbiIsIl9wcm9jZXNzVmFycyIsIl9wYXJzZUZ1bmNPclN0cmluZyIsInB0TG9va3VwIiwicHJpb3JpdHkiLCJvblVwZGF0ZVBhcmFtcyIsImF1dG9SZXZlcnQiLCJwcmV2U3RhcnRBdCIsImZ1bGxUYXJnZXRzIiwiYXV0b092ZXJ3cml0ZSIsIl9vdmVyd3JpdGUiLCJjbGVhblZhcnMiLCJnc0RhdGEiLCJoYXJuZXNzVmFycyIsIm92ZXJ3cml0dGVuIiwiX29wIiwiX29uSW5pdCIsIl9hZGRBbGlhc2VzVG9WYXJzIiwicHJvcGVydHlBbGlhc2VzIiwiX3N0YWdnZXJUd2VlblByb3BzIiwiX3N0YWdnZXJQcm9wc1RvU2tpcCIsIl9BbmltYXRpb24yIiwic2tpcEluaGVyaXQiLCJfdGhpczMiLCJfdGhpczMkdmFycyIsImN1clRhcmdldCIsInN0YWdnZXJGdW5jIiwic3RhZ2dlclZhcnNUb01lcmdlIiwiX3Byb3RvMyIsImtpbGxpbmdUYXJnZXRzIiwicHJvcFR3ZWVuTG9va3VwIiwiZmlyc3RQVCIsIm92ZXJ3cml0dGVuUHJvcHMiLCJjdXJMb29rdXAiLCJjdXJPdmVyd3JpdGVQcm9wcyIsIm9uUmV2ZXJzZUNvbXBsZXRlIiwib25SZXZlcnNlQ29tcGxldGVQYXJhbXMiLCJfc2V0dGVyQXR0cmlidXRlIiwiaGFzTm9uRGVwZW5kZW50UmVtYWluaW5nIiwib3AiLCJfc2V0dGVyV2l0aE1vZGlmaWVyIiwibVNldCIsIm10IiwicHQyIiwiZmlyc3QiLCJyZW5kZXJlciIsIl9wcm90bzQiLCJUd2Vlbk1heCIsIlR3ZWVuTGl0ZSIsIlRpbWVsaW5lTGl0ZSIsIlRpbWVsaW5lTWF4IiwiX2xlbjIiLCJhcmdzIiwiX2tleTIiLCJnZXRQcm9wZXJ0eSIsImdldHRlciIsImZvcm1hdCIsInF1aWNrU2V0dGVyIiwic2V0dGVycyIsImlzVHdlZW5pbmciLCJyZWdpc3RlckVmZmVjdCIsIl9yZWYzIiwiZWZmZWN0IiwicGx1Z2lucyIsImV4dGVuZFRpbWVsaW5lIiwicGx1Z2luTmFtZSIsInJlZ2lzdGVyRWFzZSIsInBhcnNlRWFzZSIsImV4cG9ydFJvb3QiLCJpbmNsdWRlRGVsYXllZENhbGxzIiwiaW5zdGFsbCIsImVmZmVjdHMiLCJ0aWNrZXIiLCJnbG9iYWxUaW1lbGluZSIsImdsb2JhbHMiLCJnZXRDYWNoZSIsInN1cHByZXNzT3ZlcndyaXRlcyIsIl9nZXRQbHVnaW5Qcm9wVHdlZW4iLCJfYWRkTW9kaWZpZXJzIiwibW9kaWZpZXJzIiwiX2J1aWxkTW9kaWZpZXJQbHVnaW4iLCJQb3dlcjAiLCJQb3dlcjEiLCJQb3dlcjIiLCJQb3dlcjMiLCJQb3dlcjQiLCJRdWFkIiwiQ3ViaWMiLCJRdWFydCIsIlF1aW50IiwiU3Ryb25nIiwiRWxhc3RpYyIsIkJhY2siLCJCb3VuY2UiLCJTaW5lIiwiRXhwbyIsIkNpcmMiLCJnc2FwV2l0aENTUyIsIlR3ZWVuTWF4V2l0aENTUyIsInJvb3QiLCJyZXF1aXJlIiwiU3ltYm9sIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5RWFjaCIsImFycmF5IiwiaXRlcmF0ZWUiLCJiYXNlVGltZXMiLCJpc0FyZ3VtZW50cyIsImlzQnVmZmVyIiwiaXNJbmRleCIsImlzVHlwZWRBcnJheSIsIm9iamVjdFByb3RvIiwiaGFzT3duUHJvcGVydHkiLCJhcnJheUxpa2VLZXlzIiwiaW5oZXJpdGVkIiwiaXNBcnIiLCJpc0FyZyIsImlzQnVmZiIsImlzVHlwZSIsInNraXBJbmRleGVzIiwiU3RyaW5nIiwiYmFzZUZvck93biIsImNyZWF0ZUJhc2VFYWNoIiwiYmFzZUVhY2giLCJjcmVhdGVCYXNlRm9yIiwiYmFzZUZvciIsImtleXMiLCJvYmplY3QiLCJnZXRSYXdUYWciLCJvYmplY3RUb1N0cmluZyIsIm51bGxUYWciLCJ1bmRlZmluZWRUYWciLCJzeW1Ub1N0cmluZ1RhZyIsInRvU3RyaW5nVGFnIiwidW5kZWZpbmVkIiwiYmFzZUdldFRhZyIsImlzT2JqZWN0TGlrZSIsImFyZ3NUYWciLCJiYXNlSXNBcmd1bWVudHMiLCJpc0xlbmd0aCIsImFycmF5VGFnIiwiYm9vbFRhZyIsImRhdGVUYWciLCJlcnJvclRhZyIsImZ1bmNUYWciLCJtYXBUYWciLCJudW1iZXJUYWciLCJvYmplY3RUYWciLCJyZWdleHBUYWciLCJzZXRUYWciLCJzdHJpbmdUYWciLCJ3ZWFrTWFwVGFnIiwiYXJyYXlCdWZmZXJUYWciLCJkYXRhVmlld1RhZyIsImZsb2F0MzJUYWciLCJmbG9hdDY0VGFnIiwiaW50OFRhZyIsImludDE2VGFnIiwiaW50MzJUYWciLCJ1aW50OFRhZyIsInVpbnQ4Q2xhbXBlZFRhZyIsInVpbnQxNlRhZyIsInVpbnQzMlRhZyIsInR5cGVkQXJyYXlUYWdzIiwiYmFzZUlzVHlwZWRBcnJheSIsImlzUHJvdG90eXBlIiwibmF0aXZlS2V5cyIsImJhc2VLZXlzIiwiYmFzZVVuYXJ5IiwiaWRlbnRpdHkiLCJjYXN0RnVuY3Rpb24iLCJpc0FycmF5TGlrZSIsImVhY2hGdW5jIiwiZnJvbVJpZ2h0IiwiY29sbGVjdGlvbiIsIml0ZXJhYmxlIiwia2V5c0Z1bmMiLCJmcmVlR2xvYmFsIiwiZ2xvYmFsIiwibmF0aXZlT2JqZWN0VG9TdHJpbmciLCJ0b1N0cmluZyIsImlzT3duIiwidGFnIiwidW5tYXNrZWQiLCJNQVhfU0FGRV9JTlRFR0VSIiwicmVJc1VpbnQiLCJDdG9yIiwicHJvdG8iLCJvdmVyQXJnIiwiZnJlZUV4cG9ydHMiLCJmcmVlTW9kdWxlIiwibW9kdWxlRXhwb3J0cyIsImZyZWVQcm9jZXNzIiwicHJvY2VzcyIsIm5vZGVVdGlsIiwidHlwZXMiLCJiaW5kaW5nIiwiYXJnIiwiZnJlZVNlbGYiLCJGdW5jdGlvbiIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiaXNGdW5jdGlvbiIsInN0dWJGYWxzZSIsIkJ1ZmZlciIsIm5hdGl2ZUlzQnVmZmVyIiwiaXNPYmplY3QiLCJhc3luY1RhZyIsImdlblRhZyIsInByb3h5VGFnIiwibm9kZUlzVHlwZWRBcnJheSIsInByZWZpeGVzIiwidXBwZXIiLCJtZW1vIiwicHJlZml4IiwiXyIsImNoYXIiLCJLZXkiLCJwcmVmaXhNZW1vemllZCIsInByZWZpeERhc2hlZCIsImRhc2giXSwic291cmNlUm9vdCI6IiJ9