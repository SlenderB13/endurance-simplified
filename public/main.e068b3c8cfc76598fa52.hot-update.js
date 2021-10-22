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

        if (this.elements[key].lenght === 0) {
          this.elements[key] = null;
        } else if (this.elements[key].lenght === 1) {
          this.elements[key] = document.querySelector(entry);
        }
      }
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
    console.log(this.elements.wrapper);
    console.log(this.elements[wrapper]);
    const {
      jordon
    } = this.elements;
    console.log(jordon);
    /* if (this.elements.wrapper) {
      this.elements.wrapper.style[this.transformPrefix] = `translateX(${this.scroll.current}px)`
    } */
  }

  onMouseWheel(event) {
    console.log(event);
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
      // 1634684855195
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dda9fc5cbd3c5524a076")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lMDY4YjNjOGNmYzc2NTk4ZmE1Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVlLE1BQU1HLElBQU4sQ0FBVztBQUN4QkMsRUFBQUEsV0FBVyxDQUFFO0FBQUVDLElBQUFBLEVBQUY7QUFBTUMsSUFBQUEsT0FBTjtBQUFlQyxJQUFBQTtBQUFmLEdBQUYsRUFBNkI7QUFDdEMsU0FBS0YsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsU0FBS0csUUFBTCxHQUFnQkYsT0FBaEI7QUFDQSxTQUFLRyxnQkFBTCxHQUF3QixFQUN0QixHQUFHRjtBQURtQixLQUF4QjtBQUlBLFNBQUtHLE1BQUwsR0FBYztBQUNaQyxNQUFBQSxPQUFPLEVBQUUsQ0FERztBQUVaQyxNQUFBQSxNQUFNLEVBQUUsQ0FGSTtBQUdaQyxNQUFBQSxJQUFJLEVBQUU7QUFITSxLQUFkO0FBTUEsU0FBS0MsZUFBTCxHQUF1QlosNkNBQU0sQ0FBQyxXQUFELENBQTdCO0FBRUEsU0FBS2EsaUJBQUw7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0EsU0FBS0MsTUFBTDtBQUNEOztBQUVEQyxFQUFBQSxNQUFNLEdBQUk7QUFDUixTQUFLYixPQUFMLEdBQWVjLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUFLYixRQUE1QixDQUFmO0FBQ0EsU0FBS0QsUUFBTCxHQUFnQixFQUFoQjtBQUVBTixJQUFBQSxrREFBSSxDQUFDLEtBQUtRLGdCQUFOLEVBQXdCLENBQUNhLEtBQUQsRUFBUUMsR0FBUixLQUFnQjtBQUMxQyxVQUFJRCxLQUFLLFlBQVlFLE1BQU0sQ0FBQ0MsV0FBeEIsSUFBdUNILEtBQUssWUFBWUUsTUFBTSxDQUFDRSxRQUEvRCxJQUEyRUMsS0FBSyxDQUFDQyxPQUFOLENBQWNOLEtBQWQsQ0FBL0UsRUFBcUc7QUFDbkcsYUFBS2YsUUFBTCxDQUFjZ0IsR0FB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QUcsR0FBRzhsQyxNQUFNLENBQUM5bEMsR0FBRCxDQUFaOztBQUNBLE1BQUk0bEMsS0FBSyxDQUFDajZCLElBQU4sQ0FBVzNMLEdBQVgsQ0FBSixFQUFxQjtBQUNuQkEsSUFBQUEsR0FBRyxHQUFHLE1BQU1BLEdBQUcsQ0FBQ2tILE9BQUosQ0FBWTArQixLQUFaLEVBQW1CLEtBQW5CLENBQVo7QUFDQUEsSUFBQUEsS0FBSyxDQUFDdjNCLFNBQU4sR0FBa0IsQ0FBbEI7QUFDRDs7QUFDRCxTQUFPck8sR0FBRyxDQUFDeUgsV0FBSixFQUFQO0FBQ0Q7O0FBRURxM0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbUgsY0FBakI7QUFDQXBILG1CQUFBLEdBQXNCcUgsWUFBdEI7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsd0pBQWtILGNBQWMsK0JBQStCO0FBQzdMLE1BQU0sVUFBVTtBQUNoQixNQUFNLGlCQUFpQjtBQUN2QjtBQUNBOzs7Ozs7OztVQ1JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NsYXNzZXMvUGFnZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvZ3NhcC9DU1NQbHVnaW4uanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2dzYXAvZ3NhcC1jb3JlLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9nc2FwL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUVhY2guanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRWFjaC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRm9yLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VGb3JPd24uanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5cy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVGltZXMuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nhc3RGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jcmVhdGVCYXNlRWFjaC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jcmVhdGVCYXNlRm9yLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vdmVyQXJnLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9lYWNoLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZm9yRWFjaC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lkZW50aXR5LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0J1ZmZlci5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gva2V5cy5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJGYWxzZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9ub2RlX21vZHVsZXMvcHJlZml4L2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS8uL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5cbmltcG9ydCBQcmVmaXggZnJvbSAncHJlZml4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIHtcbiAgY29uc3RydWN0b3IgKHsgaWQsIGVsZW1lbnQsIGVsZW1lbnRzIH0pIHtcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLnNlbGVjdG9yID0gZWxlbWVudFxuICAgIHRoaXMuc2VsZWN0b3JDaGlsZHJlbiA9IHtcbiAgICAgIC4uLmVsZW1lbnRzXG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGFzdDogMFxuICAgIH1cblxuICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KCd0cmFuc2Zvcm0nKVxuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gICAgdGhpcy5vbk1vdXNlV2hlZWwgPSB0aGlzLm9uTW91c2VXaGVlbC5iaW5kKHRoaXMpXG4gICAgdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgY3JlYXRlICgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpXG4gICAgdGhpcy5lbGVtZW50cyA9IHt9XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LCBrZXkpID0+IHtcbiAgICAgIGlmIChlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fCBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdCB8fCBBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVudHJ5KVxuICAgICAgICBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmdodCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGxcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ2h0ID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgXG4gIHNob3cgKCkge1xuICAgIHRoaXMuYW5pbWF0ZUluID0gR1NBUC50aW1lbGluZSgpXG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBHU0FQLmZyb20odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgb25Db21wbGV0ZTogcmVzb2x2ZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgaGlkZSAoKSB7XG4gICAgdGhpcy5hbmltYXRlT3V0ID0gR1NBUC50aW1lbGluZSgpXG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBHU0FQLnRvKHRoaXMuZWxlbWVudCwge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmVcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCAwLjEpXG4gICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50cy53cmFwcGVyKVxuICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudHNbd3JhcHBlcl0pXG4gICAgY29uc3QgeyBqb3Jkb24gfSA9IHRoaXMuZWxlbWVudHNcbiAgICBjb25zb2xlLmxvZyhqb3Jkb24pXG5cbiAgICAvKiBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVgoJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4KWBcbiAgICB9ICovICBcbiAgfVxuXG4gIG9uTW91c2VXaGVlbCAoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhldmVudClcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLm9uTW91c2VXaGVlbClcbiAgfVxufVxuIiwiLyohXG4gKiBDU1NQbHVnaW4gMy44LjBcbiAqIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbVxuICpcbiAqIENvcHlyaWdodCAyMDA4LTIwMjEsIEdyZWVuU29jay4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFN1YmplY3QgdG8gdGhlIHRlcm1zIGF0IGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9zdGFuZGFyZC1saWNlbnNlIG9yIGZvclxuICogQ2x1YiBHcmVlblNvY2sgbWVtYmVycywgdGhlIGFncmVlbWVudCBpc3N1ZWQgd2l0aCB0aGF0IG1lbWJlcnNoaXAuXG4gKiBAYXV0aG9yOiBKYWNrIERveWxlLCBqYWNrQGdyZWVuc29jay5jb21cbiovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBnc2FwLCBfZ2V0UHJvcGVydHksIF9udW1FeHAsIF9udW1XaXRoVW5pdEV4cCwgZ2V0VW5pdCwgX2lzU3RyaW5nLCBfaXNVbmRlZmluZWQsIF9yZW5kZXJDb21wbGV4U3RyaW5nLCBfcmVsRXhwLCBfZm9yRWFjaE5hbWUsIF9zb3J0UHJvcFR3ZWVuc0J5UHJpb3JpdHksIF9jb2xvclN0cmluZ0ZpbHRlciwgX2NoZWNrUGx1Z2luLCBfcmVwbGFjZVJhbmRvbSwgX3BsdWdpbnMsIEdTQ2FjaGUsIFByb3BUd2VlbiwgX2NvbmZpZywgX3RpY2tlciwgX3JvdW5kLCBfbWlzc2luZ1BsdWdpbiwgX2dldFNldHRlciwgX2dldENhY2hlLCBfY29sb3JFeHAsIF9zZXREZWZhdWx0cywgX3JlbW92ZUxpbmtlZExpc3RJdGVtIC8vZm9yIHRoZSBjb21tZW50ZWQtb3V0IGNsYXNzTmFtZSBmZWF0dXJlLlxufSBmcm9tIFwiLi9nc2FwLWNvcmUuanNcIjtcblxudmFyIF93aW4sXG4gICAgX2RvYyxcbiAgICBfZG9jRWxlbWVudCxcbiAgICBfcGx1Z2luSW5pdHRlZCxcbiAgICBfdGVtcERpdixcbiAgICBfdGVtcERpdlN0eWxlcixcbiAgICBfcmVjZW50U2V0dGVyUGx1Z2luLFxuICAgIF93aW5kb3dFeGlzdHMgPSBmdW5jdGlvbiBfd2luZG93RXhpc3RzKCkge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIjtcbn0sXG4gICAgX3RyYW5zZm9ybVByb3BzID0ge30sXG4gICAgX1JBRDJERUcgPSAxODAgLyBNYXRoLlBJLFxuICAgIF9ERUcyUkFEID0gTWF0aC5QSSAvIDE4MCxcbiAgICBfYXRhbjIgPSBNYXRoLmF0YW4yLFxuICAgIF9iaWdOdW0gPSAxZTgsXG4gICAgX2NhcHNFeHAgPSAvKFtBLVpdKS9nLFxuICAgIF9ob3Jpem9udGFsRXhwID0gLyg/OmxlZnR8cmlnaHR8d2lkdGh8bWFyZ2lufHBhZGRpbmd8eCkvaSxcbiAgICBfY29tcGxleEV4cCA9IC9bXFxzLFxcKF1cXFMvLFxuICAgIF9wcm9wZXJ0eUFsaWFzZXMgPSB7XG4gIGF1dG9BbHBoYTogXCJvcGFjaXR5LHZpc2liaWxpdHlcIixcbiAgc2NhbGU6IFwic2NhbGVYLHNjYWxlWVwiLFxuICBhbHBoYTogXCJvcGFjaXR5XCJcbn0sXG4gICAgX3JlbmRlckNTU1Byb3AgPSBmdW5jdGlvbiBfcmVuZGVyQ1NTUHJvcChyYXRpbywgZGF0YSkge1xuICByZXR1cm4gZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIE1hdGgucm91bmQoKGRhdGEucyArIGRhdGEuYyAqIHJhdGlvKSAqIDEwMDAwKSAvIDEwMDAwICsgZGF0YS51LCBkYXRhKTtcbn0sXG4gICAgX3JlbmRlclByb3BXaXRoRW5kID0gZnVuY3Rpb24gX3JlbmRlclByb3BXaXRoRW5kKHJhdGlvLCBkYXRhKSB7XG4gIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgcmF0aW8gPT09IDEgPyBkYXRhLmUgOiBNYXRoLnJvdW5kKChkYXRhLnMgKyBkYXRhLmMgKiByYXRpbykgKiAxMDAwMCkgLyAxMDAwMCArIGRhdGEudSwgZGF0YSk7XG59LFxuICAgIF9yZW5kZXJDU1NQcm9wV2l0aEJlZ2lubmluZyA9IGZ1bmN0aW9uIF9yZW5kZXJDU1NQcm9wV2l0aEJlZ2lubmluZyhyYXRpbywgZGF0YSkge1xuICByZXR1cm4gZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIHJhdGlvID8gTWF0aC5yb3VuZCgoZGF0YS5zICsgZGF0YS5jICogcmF0aW8pICogMTAwMDApIC8gMTAwMDAgKyBkYXRhLnUgOiBkYXRhLmIsIGRhdGEpO1xufSxcbiAgICAvL2lmIHVuaXRzIGNoYW5nZSwgd2UgbmVlZCBhIHdheSB0byByZW5kZXIgdGhlIG9yaWdpbmFsIHVuaXQvdmFsdWUgd2hlbiB0aGUgdHdlZW4gZ29lcyBhbGwgdGhlIHdheSBiYWNrIHRvIHRoZSBiZWdpbm5pbmcgKHJhdGlvOjApXG5fcmVuZGVyUm91bmRlZENTU1Byb3AgPSBmdW5jdGlvbiBfcmVuZGVyUm91bmRlZENTU1Byb3AocmF0aW8sIGRhdGEpIHtcbiAgdmFyIHZhbHVlID0gZGF0YS5zICsgZGF0YS5jICogcmF0aW87XG4gIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCB+fih2YWx1ZSArICh2YWx1ZSA8IDAgPyAtLjUgOiAuNSkpICsgZGF0YS51LCBkYXRhKTtcbn0sXG4gICAgX3JlbmRlck5vblR3ZWVuaW5nVmFsdWUgPSBmdW5jdGlvbiBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZShyYXRpbywgZGF0YSkge1xuICByZXR1cm4gZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIHJhdGlvID8gZGF0YS5lIDogZGF0YS5iLCBkYXRhKTtcbn0sXG4gICAgX3JlbmRlck5vblR3ZWVuaW5nVmFsdWVPbmx5QXRFbmQgPSBmdW5jdGlvbiBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZU9ubHlBdEVuZChyYXRpbywgZGF0YSkge1xuICByZXR1cm4gZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIHJhdGlvICE9PSAxID8gZGF0YS5iIDogZGF0YS5lLCBkYXRhKTtcbn0sXG4gICAgX3NldHRlckNTU1N0eWxlID0gZnVuY3Rpb24gX3NldHRlckNTU1N0eWxlKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiB0YXJnZXQuc3R5bGVbcHJvcGVydHldID0gdmFsdWU7XG59LFxuICAgIF9zZXR0ZXJDU1NQcm9wID0gZnVuY3Rpb24gX3NldHRlckNTU1Byb3AodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIHRhcmdldC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpO1xufSxcbiAgICBfc2V0dGVyVHJhbnNmb3JtID0gZnVuY3Rpb24gX3NldHRlclRyYW5zZm9ybSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gdGFyZ2V0Ll9nc2FwW3Byb3BlcnR5XSA9IHZhbHVlO1xufSxcbiAgICBfc2V0dGVyU2NhbGUgPSBmdW5jdGlvbiBfc2V0dGVyU2NhbGUodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIHRhcmdldC5fZ3NhcC5zY2FsZVggPSB0YXJnZXQuX2dzYXAuc2NhbGVZID0gdmFsdWU7XG59LFxuICAgIF9zZXR0ZXJTY2FsZVdpdGhSZW5kZXIgPSBmdW5jdGlvbiBfc2V0dGVyU2NhbGVXaXRoUmVuZGVyKHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCBkYXRhLCByYXRpbykge1xuICB2YXIgY2FjaGUgPSB0YXJnZXQuX2dzYXA7XG4gIGNhY2hlLnNjYWxlWCA9IGNhY2hlLnNjYWxlWSA9IHZhbHVlO1xuICBjYWNoZS5yZW5kZXJUcmFuc2Zvcm0ocmF0aW8sIGNhY2hlKTtcbn0sXG4gICAgX3NldHRlclRyYW5zZm9ybVdpdGhSZW5kZXIgPSBmdW5jdGlvbiBfc2V0dGVyVHJhbnNmb3JtV2l0aFJlbmRlcih0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgZGF0YSwgcmF0aW8pIHtcbiAgdmFyIGNhY2hlID0gdGFyZ2V0Ll9nc2FwO1xuICBjYWNoZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgY2FjaGUucmVuZGVyVHJhbnNmb3JtKHJhdGlvLCBjYWNoZSk7XG59LFxuICAgIF90cmFuc2Zvcm1Qcm9wID0gXCJ0cmFuc2Zvcm1cIixcbiAgICBfdHJhbnNmb3JtT3JpZ2luUHJvcCA9IF90cmFuc2Zvcm1Qcm9wICsgXCJPcmlnaW5cIixcbiAgICBfc3VwcG9ydHMzRCxcbiAgICBfY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIF9jcmVhdGVFbGVtZW50KHR5cGUsIG5zKSB7XG4gIHZhciBlID0gX2RvYy5jcmVhdGVFbGVtZW50TlMgPyBfZG9jLmNyZWF0ZUVsZW1lbnROUygobnMgfHwgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIpLnJlcGxhY2UoL15odHRwcy8sIFwiaHR0cFwiKSwgdHlwZSkgOiBfZG9jLmNyZWF0ZUVsZW1lbnQodHlwZSk7IC8vc29tZSBzZXJ2ZXJzIHN3YXAgaW4gaHR0cHMgZm9yIGh0dHAgaW4gdGhlIG5hbWVzcGFjZSB3aGljaCBjYW4gYnJlYWsgdGhpbmdzLCBtYWtpbmcgXCJzdHlsZVwiIGluYWNjZXNzaWJsZS5cblxuICByZXR1cm4gZS5zdHlsZSA/IGUgOiBfZG9jLmNyZWF0ZUVsZW1lbnQodHlwZSk7IC8vc29tZSBlbnZpcm9ubWVudHMgd29uJ3QgYWxsb3cgYWNjZXNzIHRvIHRoZSBlbGVtZW50J3Mgc3R5bGUgd2hlbiBjcmVhdGVkIHdpdGggYSBuYW1lc3BhY2UgaW4gd2hpY2ggY2FzZSB3ZSBkZWZhdWx0IHRvIHRoZSBzdGFuZGFyZCBjcmVhdGVFbGVtZW50KCkgdG8gd29yayBhcm91bmQgdGhlIGlzc3VlLiBBbHNvIG5vdGUgdGhhdCB3aGVuIEdTQVAgaXMgZW1iZWRkZWQgZGlyZWN0bHkgaW5zaWRlIGFuIFNWRyBmaWxlLCBjcmVhdGVFbGVtZW50KCkgd29uJ3QgYWxsb3cgYWNjZXNzIHRvIHRoZSBzdHlsZSBvYmplY3QgaW4gRmlyZWZveCAoc2VlIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9mb3J1bXMvdG9waWMvMjAyMTUtcHJvYmxlbS11c2luZy10d2Vlbm1heC1pbi1zdGFuZGFsb25lLXNlbGYtY29udGFpbmluZy1zdmctZmlsZS1lcnItY2Fubm90LXNldC1wcm9wZXJ0eS1jc3N0ZXh0LW9mLXVuZGVmaW5lZC8pLlxufSxcbiAgICBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSA9IGZ1bmN0aW9uIF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIHNraXBQcmVmaXhGYWxsYmFjaykge1xuICB2YXIgY3MgPSBnZXRDb21wdXRlZFN0eWxlKHRhcmdldCk7XG4gIHJldHVybiBjc1twcm9wZXJ0eV0gfHwgY3MuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eS5yZXBsYWNlKF9jYXBzRXhwLCBcIi0kMVwiKS50b0xvd2VyQ2FzZSgpKSB8fCBjcy5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KSB8fCAhc2tpcFByZWZpeEZhbGxiYWNrICYmIF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgX2NoZWNrUHJvcFByZWZpeChwcm9wZXJ0eSkgfHwgcHJvcGVydHksIDEpIHx8IFwiXCI7IC8vY3NzIHZhcmlhYmxlcyBtYXkgbm90IG5lZWQgY2FwcyBzd2FwcGVkIG91dCBmb3IgZGFzaGVzIGFuZCBsb3dlcmNhc2UuXG59LFxuICAgIF9wcmVmaXhlcyA9IFwiTyxNb3osbXMsTXMsV2Via2l0XCIuc3BsaXQoXCIsXCIpLFxuICAgIF9jaGVja1Byb3BQcmVmaXggPSBmdW5jdGlvbiBfY2hlY2tQcm9wUHJlZml4KHByb3BlcnR5LCBlbGVtZW50LCBwcmVmZXJQcmVmaXgpIHtcbiAgdmFyIGUgPSBlbGVtZW50IHx8IF90ZW1wRGl2LFxuICAgICAgcyA9IGUuc3R5bGUsXG4gICAgICBpID0gNTtcblxuICBpZiAocHJvcGVydHkgaW4gcyAmJiAhcHJlZmVyUHJlZml4KSB7XG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgcHJvcGVydHkgPSBwcm9wZXJ0eS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BlcnR5LnN1YnN0cigxKTtcblxuICB3aGlsZSAoaS0tICYmICEoX3ByZWZpeGVzW2ldICsgcHJvcGVydHkgaW4gcykpIHt9XG5cbiAgcmV0dXJuIGkgPCAwID8gbnVsbCA6IChpID09PSAzID8gXCJtc1wiIDogaSA+PSAwID8gX3ByZWZpeGVzW2ldIDogXCJcIikgKyBwcm9wZXJ0eTtcbn0sXG4gICAgX2luaXRDb3JlID0gZnVuY3Rpb24gX2luaXRDb3JlKCkge1xuICBpZiAoX3dpbmRvd0V4aXN0cygpICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgIF93aW4gPSB3aW5kb3c7XG4gICAgX2RvYyA9IF93aW4uZG9jdW1lbnQ7XG4gICAgX2RvY0VsZW1lbnQgPSBfZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICBfdGVtcERpdiA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIpIHx8IHtcbiAgICAgIHN0eWxlOiB7fVxuICAgIH07XG4gICAgX3RlbXBEaXZTdHlsZXIgPSBfY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBfdHJhbnNmb3JtUHJvcCA9IF9jaGVja1Byb3BQcmVmaXgoX3RyYW5zZm9ybVByb3ApO1xuICAgIF90cmFuc2Zvcm1PcmlnaW5Qcm9wID0gX3RyYW5zZm9ybVByb3AgKyBcIk9yaWdpblwiO1xuICAgIF90ZW1wRGl2LnN0eWxlLmNzc1RleHQgPSBcImJvcmRlci13aWR0aDowO2xpbmUtaGVpZ2h0OjA7cG9zaXRpb246YWJzb2x1dGU7cGFkZGluZzowXCI7IC8vbWFrZSBzdXJlIHRvIG92ZXJyaWRlIGNlcnRhaW4gcHJvcGVydGllcyB0aGF0IG1heSBjb250YW1pbmF0ZSBtZWFzdXJlbWVudHMsIGluIGNhc2UgdGhlIHVzZXIgaGFzIG92ZXJyZWFjaGluZyBzdHlsZSBzaGVldHMuXG5cbiAgICBfc3VwcG9ydHMzRCA9ICEhX2NoZWNrUHJvcFByZWZpeChcInBlcnNwZWN0aXZlXCIpO1xuICAgIF9wbHVnaW5Jbml0dGVkID0gMTtcbiAgfVxufSxcbiAgICBfZ2V0QkJveEhhY2sgPSBmdW5jdGlvbiBfZ2V0QkJveEhhY2soc3dhcElmUG9zc2libGUpIHtcbiAgLy93b3JrcyBhcm91bmQgaXNzdWVzIGluIHNvbWUgYnJvd3NlcnMgKGxpa2UgRmlyZWZveCkgdGhhdCBkb24ndCBjb3JyZWN0bHkgcmVwb3J0IGdldEJCb3goKSBvbiBTVkcgZWxlbWVudHMgaW5zaWRlIGEgPGRlZnM+IGVsZW1lbnQgYW5kL29yIDxtYXNrPi4gV2UgdHJ5IGNyZWF0aW5nIGFuIFNWRywgYWRkaW5nIGl0IHRvIHRoZSBkb2N1bWVudEVsZW1lbnQgYW5kIHRvc3MgdGhlIGVsZW1lbnQgaW4gdGhlcmUgc28gdGhhdCBpdCdzIGRlZmluaXRlbHkgcGFydCBvZiB0aGUgcmVuZGVyaW5nIHRyZWUsIHRoZW4gZ3JhYiB0aGUgYmJveCBhbmQgaWYgaXQgd29ya3MsIHdlIGFjdHVhbGx5IHN3YXAgb3V0IHRoZSBvcmlnaW5hbCBnZXRCQm94KCkgbWV0aG9kIGZvciBvdXIgb3duIHRoYXQgZG9lcyB0aGVzZSBleHRyYSBzdGVwcyB3aGVuZXZlciBnZXRCQm94IGlzIG5lZWRlZC4gVGhpcyBoZWxwcyBlbnN1cmUgdGhhdCBwZXJmb3JtYW5jZSBpcyBvcHRpbWFsIChvbmx5IGRvIGFsbCB0aGVzZSBleHRyYSBzdGVwcyB3aGVuIGFic29sdXRlbHkgbmVjZXNzYXJ5Li4ubW9zdCBlbGVtZW50cyBkb24ndCBuZWVkIGl0KS5cbiAgdmFyIHN2ZyA9IF9jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHRoaXMub3duZXJTVkdFbGVtZW50ICYmIHRoaXMub3duZXJTVkdFbGVtZW50LmdldEF0dHJpYnV0ZShcInhtbG5zXCIpIHx8IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiksXG4gICAgICBvbGRQYXJlbnQgPSB0aGlzLnBhcmVudE5vZGUsXG4gICAgICBvbGRTaWJsaW5nID0gdGhpcy5uZXh0U2libGluZyxcbiAgICAgIG9sZENTUyA9IHRoaXMuc3R5bGUuY3NzVGV4dCxcbiAgICAgIGJib3g7XG5cbiAgX2RvY0VsZW1lbnQuYXBwZW5kQ2hpbGQoc3ZnKTtcblxuICBzdmcuYXBwZW5kQ2hpbGQodGhpcyk7XG4gIHRoaXMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICBpZiAoc3dhcElmUG9zc2libGUpIHtcbiAgICB0cnkge1xuICAgICAgYmJveCA9IHRoaXMuZ2V0QkJveCgpO1xuICAgICAgdGhpcy5fZ3NhcEJCb3ggPSB0aGlzLmdldEJCb3g7IC8vc3RvcmUgdGhlIG9yaWdpbmFsXG5cbiAgICAgIHRoaXMuZ2V0QkJveCA9IF9nZXRCQm94SGFjaztcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9IGVsc2UgaWYgKHRoaXMuX2dzYXBCQm94KSB7XG4gICAgYmJveCA9IHRoaXMuX2dzYXBCQm94KCk7XG4gIH1cblxuICBpZiAob2xkUGFyZW50KSB7XG4gICAgaWYgKG9sZFNpYmxpbmcpIHtcbiAgICAgIG9sZFBhcmVudC5pbnNlcnRCZWZvcmUodGhpcywgb2xkU2libGluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9sZFBhcmVudC5hcHBlbmRDaGlsZCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBfZG9jRWxlbWVudC5yZW1vdmVDaGlsZChzdmcpO1xuXG4gIHRoaXMuc3R5bGUuY3NzVGV4dCA9IG9sZENTUztcbiAgcmV0dXJuIGJib3g7XG59LFxuICAgIF9nZXRBdHRyaWJ1dGVGYWxsYmFja3MgPSBmdW5jdGlvbiBfZ2V0QXR0cmlidXRlRmFsbGJhY2tzKHRhcmdldCwgYXR0cmlidXRlc0FycmF5KSB7XG4gIHZhciBpID0gYXR0cmlidXRlc0FycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgaWYgKHRhcmdldC5oYXNBdHRyaWJ1dGUoYXR0cmlidXRlc0FycmF5W2ldKSkge1xuICAgICAgcmV0dXJuIHRhcmdldC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlc0FycmF5W2ldKTtcbiAgICB9XG4gIH1cbn0sXG4gICAgX2dldEJCb3ggPSBmdW5jdGlvbiBfZ2V0QkJveCh0YXJnZXQpIHtcbiAgdmFyIGJvdW5kcztcblxuICB0cnkge1xuICAgIGJvdW5kcyA9IHRhcmdldC5nZXRCQm94KCk7IC8vRmlyZWZveCB0aHJvd3MgZXJyb3JzIGlmIHlvdSB0cnkgY2FsbGluZyBnZXRCQm94KCkgb24gYW4gU1ZHIGVsZW1lbnQgdGhhdCdzIG5vdCByZW5kZXJlZCAobGlrZSBpbiBhIDxzeW1ib2w+IG9yIDxkZWZzPikuIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTYxMjExOFxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGJvdW5kcyA9IF9nZXRCQm94SGFjay5jYWxsKHRhcmdldCwgdHJ1ZSk7XG4gIH1cblxuICBib3VuZHMgJiYgKGJvdW5kcy53aWR0aCB8fCBib3VuZHMuaGVpZ2h0KSB8fCB0YXJnZXQuZ2V0QkJveCA9PT0gX2dldEJCb3hIYWNrIHx8IChib3VuZHMgPSBfZ2V0QkJveEhhY2suY2FsbCh0YXJnZXQsIHRydWUpKTsgLy9zb21lIGJyb3dzZXJzIChsaWtlIEZpcmVmb3gpIG1pc3JlcG9ydCB0aGUgYm91bmRzIGlmIHRoZSBlbGVtZW50IGhhcyB6ZXJvIHdpZHRoIGFuZCBoZWlnaHQgKGl0IGp1c3QgYXNzdW1lcyBpdCdzIGF0IHg6MCwgeTowKSwgdGh1cyB3ZSBuZWVkIHRvIG1hbnVhbGx5IGdyYWIgdGhlIHBvc2l0aW9uIGluIHRoYXQgY2FzZS5cblxuICByZXR1cm4gYm91bmRzICYmICFib3VuZHMud2lkdGggJiYgIWJvdW5kcy54ICYmICFib3VuZHMueSA/IHtcbiAgICB4OiArX2dldEF0dHJpYnV0ZUZhbGxiYWNrcyh0YXJnZXQsIFtcInhcIiwgXCJjeFwiLCBcIngxXCJdKSB8fCAwLFxuICAgIHk6ICtfZ2V0QXR0cmlidXRlRmFsbGJhY2tzKHRhcmdldCwgW1wieVwiLCBcImN5XCIsIFwieTFcIl0pIHx8IDAsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwXG4gIH0gOiBib3VuZHM7XG59LFxuICAgIF9pc1NWRyA9IGZ1bmN0aW9uIF9pc1NWRyhlKSB7XG4gIHJldHVybiAhIShlLmdldENUTSAmJiAoIWUucGFyZW50Tm9kZSB8fCBlLm93bmVyU1ZHRWxlbWVudCkgJiYgX2dldEJCb3goZSkpO1xufSxcbiAgICAvL3JlcG9ydHMgaWYgdGhlIGVsZW1lbnQgaXMgYW4gU1ZHIG9uIHdoaWNoIGdldEJCb3goKSBhY3R1YWxseSB3b3Jrc1xuX3JlbW92ZVByb3BlcnR5ID0gZnVuY3Rpb24gX3JlbW92ZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHkpIHtcbiAgaWYgKHByb3BlcnR5KSB7XG4gICAgdmFyIHN0eWxlID0gdGFyZ2V0LnN0eWxlO1xuXG4gICAgaWYgKHByb3BlcnR5IGluIF90cmFuc2Zvcm1Qcm9wcyAmJiBwcm9wZXJ0eSAhPT0gX3RyYW5zZm9ybU9yaWdpblByb3ApIHtcbiAgICAgIHByb3BlcnR5ID0gX3RyYW5zZm9ybVByb3A7XG4gICAgfVxuXG4gICAgaWYgKHN0eWxlLnJlbW92ZVByb3BlcnR5KSB7XG4gICAgICBpZiAocHJvcGVydHkuc3Vic3RyKDAsIDIpID09PSBcIm1zXCIgfHwgcHJvcGVydHkuc3Vic3RyKDAsIDYpID09PSBcIndlYmtpdFwiKSB7XG4gICAgICAgIC8vTWljcm9zb2Z0IGFuZCBzb21lIFdlYmtpdCBicm93c2VycyBkb24ndCBjb25mb3JtIHRvIHRoZSBzdGFuZGFyZCBvZiBjYXBpdGFsaXppbmcgdGhlIGZpcnN0IHByZWZpeCBjaGFyYWN0ZXIsIHNvIHdlIGFkanVzdCBzbyB0aGF0IHdoZW4gd2UgcHJlZml4IHRoZSBjYXBzIHdpdGggYSBkYXNoLCBpdCdzIGNvcnJlY3QgKG90aGVyd2lzZSBpdCdkIGJlIFwibXMtdHJhbnNmb3JtXCIgaW5zdGVhZCBvZiBcIi1tcy10cmFuc2Zvcm1cIiBmb3IgSUU5LCBmb3IgZXhhbXBsZSlcbiAgICAgICAgcHJvcGVydHkgPSBcIi1cIiArIHByb3BlcnR5O1xuICAgICAgfVxuXG4gICAgICBzdHlsZS5yZW1vdmVQcm9wZXJ0eShwcm9wZXJ0eS5yZXBsYWNlKF9jYXBzRXhwLCBcIi0kMVwiKS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy9ub3RlOiBvbGQgdmVyc2lvbnMgb2YgSUUgdXNlIFwicmVtb3ZlQXR0cmlidXRlKClcIiBpbnN0ZWFkIG9mIFwicmVtb3ZlUHJvcGVydHkoKVwiXG4gICAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUocHJvcGVydHkpO1xuICAgIH1cbiAgfVxufSxcbiAgICBfYWRkTm9uVHdlZW5pbmdQVCA9IGZ1bmN0aW9uIF9hZGROb25Ud2VlbmluZ1BUKHBsdWdpbiwgdGFyZ2V0LCBwcm9wZXJ0eSwgYmVnaW5uaW5nLCBlbmQsIG9ubHlTZXRBdEVuZCkge1xuICB2YXIgcHQgPSBuZXcgUHJvcFR3ZWVuKHBsdWdpbi5fcHQsIHRhcmdldCwgcHJvcGVydHksIDAsIDEsIG9ubHlTZXRBdEVuZCA/IF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlT25seUF0RW5kIDogX3JlbmRlck5vblR3ZWVuaW5nVmFsdWUpO1xuICBwbHVnaW4uX3B0ID0gcHQ7XG4gIHB0LmIgPSBiZWdpbm5pbmc7XG4gIHB0LmUgPSBlbmQ7XG5cbiAgcGx1Z2luLl9wcm9wcy5wdXNoKHByb3BlcnR5KTtcblxuICByZXR1cm4gcHQ7XG59LFxuICAgIF9ub25Db252ZXJ0aWJsZVVuaXRzID0ge1xuICBkZWc6IDEsXG4gIHJhZDogMSxcbiAgdHVybjogMVxufSxcbiAgICAvL3Rha2VzIGEgc2luZ2xlIHZhbHVlIGxpa2UgMjBweCBhbmQgY29udmVydHMgaXQgdG8gdGhlIHVuaXQgc3BlY2lmaWVkLCBsaWtlIFwiJVwiLCByZXR1cm5pbmcgb25seSB0aGUgbnVtZXJpYyBhbW91bnQuXG5fY29udmVydFRvVW5pdCA9IGZ1bmN0aW9uIF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCB1bml0KSB7XG4gIHZhciBjdXJWYWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpIHx8IDAsXG4gICAgICBjdXJVbml0ID0gKHZhbHVlICsgXCJcIikudHJpbSgpLnN1YnN0cigoY3VyVmFsdWUgKyBcIlwiKS5sZW5ndGgpIHx8IFwicHhcIixcbiAgICAgIC8vIHNvbWUgYnJvd3NlcnMgbGVhdmUgZXh0cmEgd2hpdGVzcGFjZSBhdCB0aGUgYmVnaW5uaW5nIG9mIENTUyB2YXJpYWJsZXMsIGhlbmNlIHRoZSBuZWVkIHRvIHRyaW0oKVxuICBzdHlsZSA9IF90ZW1wRGl2LnN0eWxlLFxuICAgICAgaG9yaXpvbnRhbCA9IF9ob3Jpem9udGFsRXhwLnRlc3QocHJvcGVydHkpLFxuICAgICAgaXNSb290U1ZHID0gdGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzdmdcIixcbiAgICAgIG1lYXN1cmVQcm9wZXJ0eSA9IChpc1Jvb3RTVkcgPyBcImNsaWVudFwiIDogXCJvZmZzZXRcIikgKyAoaG9yaXpvbnRhbCA/IFwiV2lkdGhcIiA6IFwiSGVpZ2h0XCIpLFxuICAgICAgYW1vdW50ID0gMTAwLFxuICAgICAgdG9QaXhlbHMgPSB1bml0ID09PSBcInB4XCIsXG4gICAgICB0b1BlcmNlbnQgPSB1bml0ID09PSBcIiVcIixcbiAgICAgIHB4LFxuICAgICAgcGFyZW50LFxuICAgICAgY2FjaGUsXG4gICAgICBpc1NWRztcblxuICBpZiAodW5pdCA9PT0gY3VyVW5pdCB8fCAhY3VyVmFsdWUgfHwgX25vbkNvbnZlcnRpYmxlVW5pdHNbdW5pdF0gfHwgX25vbkNvbnZlcnRpYmxlVW5pdHNbY3VyVW5pdF0pIHtcbiAgICByZXR1cm4gY3VyVmFsdWU7XG4gIH1cblxuICBjdXJVbml0ICE9PSBcInB4XCIgJiYgIXRvUGl4ZWxzICYmIChjdXJWYWx1ZSA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCBcInB4XCIpKTtcbiAgaXNTVkcgPSB0YXJnZXQuZ2V0Q1RNICYmIF9pc1NWRyh0YXJnZXQpO1xuXG4gIGlmICgodG9QZXJjZW50IHx8IGN1clVuaXQgPT09IFwiJVwiKSAmJiAoX3RyYW5zZm9ybVByb3BzW3Byb3BlcnR5XSB8fCB+cHJvcGVydHkuaW5kZXhPZihcImFkaXVzXCIpKSkge1xuICAgIHB4ID0gaXNTVkcgPyB0YXJnZXQuZ2V0QkJveCgpW2hvcml6b250YWwgPyBcIndpZHRoXCIgOiBcImhlaWdodFwiXSA6IHRhcmdldFttZWFzdXJlUHJvcGVydHldO1xuICAgIHJldHVybiBfcm91bmQodG9QZXJjZW50ID8gY3VyVmFsdWUgLyBweCAqIGFtb3VudCA6IGN1clZhbHVlIC8gMTAwICogcHgpO1xuICB9XG5cbiAgc3R5bGVbaG9yaXpvbnRhbCA/IFwid2lkdGhcIiA6IFwiaGVpZ2h0XCJdID0gYW1vdW50ICsgKHRvUGl4ZWxzID8gY3VyVW5pdCA6IHVuaXQpO1xuICBwYXJlbnQgPSB+cHJvcGVydHkuaW5kZXhPZihcImFkaXVzXCIpIHx8IHVuaXQgPT09IFwiZW1cIiAmJiB0YXJnZXQuYXBwZW5kQ2hpbGQgJiYgIWlzUm9vdFNWRyA/IHRhcmdldCA6IHRhcmdldC5wYXJlbnROb2RlO1xuXG4gIGlmIChpc1NWRykge1xuICAgIHBhcmVudCA9ICh0YXJnZXQub3duZXJTVkdFbGVtZW50IHx8IHt9KS5wYXJlbnROb2RlO1xuICB9XG5cbiAgaWYgKCFwYXJlbnQgfHwgcGFyZW50ID09PSBfZG9jIHx8ICFwYXJlbnQuYXBwZW5kQ2hpbGQpIHtcbiAgICBwYXJlbnQgPSBfZG9jLmJvZHk7XG4gIH1cblxuICBjYWNoZSA9IHBhcmVudC5fZ3NhcDtcblxuICBpZiAoY2FjaGUgJiYgdG9QZXJjZW50ICYmIGNhY2hlLndpZHRoICYmIGhvcml6b250YWwgJiYgY2FjaGUudGltZSA9PT0gX3RpY2tlci50aW1lKSB7XG4gICAgcmV0dXJuIF9yb3VuZChjdXJWYWx1ZSAvIGNhY2hlLndpZHRoICogYW1vdW50KTtcbiAgfSBlbHNlIHtcbiAgICAodG9QZXJjZW50IHx8IGN1clVuaXQgPT09IFwiJVwiKSAmJiAoc3R5bGUucG9zaXRpb24gPSBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIFwicG9zaXRpb25cIikpO1xuICAgIHBhcmVudCA9PT0gdGFyZ2V0ICYmIChzdHlsZS5wb3NpdGlvbiA9IFwic3RhdGljXCIpOyAvLyBsaWtlIGZvciBib3JkZXJSYWRpdXMsIGlmIGl0J3MgYSAlIHdlIG11c3QgaGF2ZSBpdCByZWxhdGl2ZSB0byB0aGUgdGFyZ2V0IGl0c2VsZiBidXQgdGhhdCBtYXkgbm90IGhhdmUgcG9zaXRpb246IHJlbGF0aXZlIG9yIHBvc2l0aW9uOiBhYnNvbHV0ZSBpbiB3aGljaCBjYXNlIGl0J2QgZ28gdXAgdGhlIGNoYWluIHVudGlsIGl0IGZpbmRzIGl0cyBvZmZzZXRQYXJlbnQgKGJhZCkuIHBvc2l0aW9uOiBzdGF0aWMgcHJvdGVjdHMgYWdhaW5zdCB0aGF0LlxuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKF90ZW1wRGl2KTtcbiAgICBweCA9IF90ZW1wRGl2W21lYXN1cmVQcm9wZXJ0eV07XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKF90ZW1wRGl2KTtcbiAgICBzdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcblxuICAgIGlmIChob3Jpem9udGFsICYmIHRvUGVyY2VudCkge1xuICAgICAgY2FjaGUgPSBfZ2V0Q2FjaGUocGFyZW50KTtcbiAgICAgIGNhY2hlLnRpbWUgPSBfdGlja2VyLnRpbWU7XG4gICAgICBjYWNoZS53aWR0aCA9IHBhcmVudFttZWFzdXJlUHJvcGVydHldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfcm91bmQodG9QaXhlbHMgPyBweCAqIGN1clZhbHVlIC8gYW1vdW50IDogcHggJiYgY3VyVmFsdWUgPyBhbW91bnQgLyBweCAqIGN1clZhbHVlIDogMCk7XG59LFxuICAgIF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHVuaXQsIHVuY2FjaGUpIHtcbiAgdmFyIHZhbHVlO1xuICBfcGx1Z2luSW5pdHRlZCB8fCBfaW5pdENvcmUoKTtcblxuICBpZiAocHJvcGVydHkgaW4gX3Byb3BlcnR5QWxpYXNlcyAmJiBwcm9wZXJ0eSAhPT0gXCJ0cmFuc2Zvcm1cIikge1xuICAgIHByb3BlcnR5ID0gX3Byb3BlcnR5QWxpYXNlc1twcm9wZXJ0eV07XG5cbiAgICBpZiAofnByb3BlcnR5LmluZGV4T2YoXCIsXCIpKSB7XG4gICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5LnNwbGl0KFwiLFwiKVswXTtcbiAgICB9XG4gIH1cblxuICBpZiAoX3RyYW5zZm9ybVByb3BzW3Byb3BlcnR5XSAmJiBwcm9wZXJ0eSAhPT0gXCJ0cmFuc2Zvcm1cIikge1xuICAgIHZhbHVlID0gX3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgdW5jYWNoZSk7XG4gICAgdmFsdWUgPSBwcm9wZXJ0eSAhPT0gXCJ0cmFuc2Zvcm1PcmlnaW5cIiA/IHZhbHVlW3Byb3BlcnR5XSA6IHZhbHVlLnN2ZyA/IHZhbHVlLm9yaWdpbiA6IF9maXJzdFR3b09ubHkoX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBfdHJhbnNmb3JtT3JpZ2luUHJvcCkpICsgXCIgXCIgKyB2YWx1ZS56T3JpZ2luICsgXCJweFwiO1xuICB9IGVsc2Uge1xuICAgIHZhbHVlID0gdGFyZ2V0LnN0eWxlW3Byb3BlcnR5XTtcblxuICAgIGlmICghdmFsdWUgfHwgdmFsdWUgPT09IFwiYXV0b1wiIHx8IHVuY2FjaGUgfHwgfih2YWx1ZSArIFwiXCIpLmluZGV4T2YoXCJjYWxjKFwiKSkge1xuICAgICAgdmFsdWUgPSBfc3BlY2lhbFByb3BzW3Byb3BlcnR5XSAmJiBfc3BlY2lhbFByb3BzW3Byb3BlcnR5XSh0YXJnZXQsIHByb3BlcnR5LCB1bml0KSB8fCBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5KSB8fCBfZ2V0UHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSkgfHwgKHByb3BlcnR5ID09PSBcIm9wYWNpdHlcIiA/IDEgOiAwKTsgLy8gbm90ZTogc29tZSBicm93c2VycywgbGlrZSBGaXJlZm94LCBkb24ndCByZXBvcnQgYm9yZGVyUmFkaXVzIGNvcnJlY3RseSEgSW5zdGVhZCwgaXQgb25seSByZXBvcnRzIGV2ZXJ5IGNvcm5lciBsaWtlICBib3JkZXJUb3BMZWZ0UmFkaXVzXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaXQgJiYgIX4odmFsdWUgKyBcIlwiKS50cmltKCkuaW5kZXhPZihcIiBcIikgPyBfY29udmVydFRvVW5pdCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgdW5pdCkgKyB1bml0IDogdmFsdWU7XG59LFxuICAgIF90d2VlbkNvbXBsZXhDU1NTdHJpbmcgPSBmdW5jdGlvbiBfdHdlZW5Db21wbGV4Q1NTU3RyaW5nKHRhcmdldCwgcHJvcCwgc3RhcnQsIGVuZCkge1xuICAvL25vdGU6IHdlIGNhbGwgX3R3ZWVuQ29tcGxleENTU1N0cmluZy5jYWxsKHBsdWdpbkluc3RhbmNlLi4uKSB0byBlbnN1cmUgdGhhdCBpdCdzIHNjb3BlZCBwcm9wZXJseS4gV2UgbWF5IGNhbGwgaXQgZnJvbSB3aXRoaW4gYSBwbHVnaW4gdG9vLCB0aHVzIFwidGhpc1wiIHdvdWxkIHJlZmVyIHRvIHRoZSBwbHVnaW4uXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPT09IFwibm9uZVwiKSB7XG4gICAgLy8gc29tZSBicm93c2VycyBsaWtlIFNhZmFyaSBhY3R1YWxseSBQUkVGRVIgdGhlIHByZWZpeGVkIHByb3BlcnR5IGFuZCBtaXMtcmVwb3J0IHRoZSB1bnByZWZpeGVkIHZhbHVlIGxpa2UgY2xpcFBhdGggKEJVRykuIEluIG90aGVyIHdvcmRzLCBldmVuIHRob3VnaCBjbGlwUGF0aCBleGlzdHMgaW4gdGhlIHN0eWxlIChcImNsaXBQYXRoXCIgaW4gdGFyZ2V0LnN0eWxlKSBhbmQgaXQncyBzZXQgaW4gdGhlIENTUyBwcm9wZXJseSAoYWxvbmcgd2l0aCAtd2Via2l0LWNsaXAtcGF0aCksIFNhZmFyaSByZXBvcnRzIGNsaXBQYXRoIGFzIFwibm9uZVwiIHdoZXJlYXMgV2Via2l0Q2xpcFBhdGggcmVwb3J0cyBhY2N1cmF0ZWx5IGxpa2UgXCJlbGxpcHNlKDEwMCUgMCUgYXQgNTAlIDAlKVwiLCBzbyBpbiB0aGlzIGNhc2Ugd2UgbXVzdCBTV0lUQ0ggdG8gdXNpbmcgdGhlIHByZWZpeGVkIHByb3BlcnR5IGluc3RlYWQuIFNlZSBodHRwczovL2dyZWVuc29jay5jb20vZm9ydW1zL3RvcGljLzE4MzEwLWNsaXBwYXRoLWRvZXNudC13b3JrLW9uLWlvcy9cbiAgICB2YXIgcCA9IF9jaGVja1Byb3BQcmVmaXgocHJvcCwgdGFyZ2V0LCAxKSxcbiAgICAgICAgcyA9IHAgJiYgX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBwLCAxKTtcblxuICAgIGlmIChzICYmIHMgIT09IHN0YXJ0KSB7XG4gICAgICBwcm9wID0gcDtcbiAgICAgIHN0YXJ0ID0gcztcbiAgICB9IGVsc2UgaWYgKHByb3AgPT09IFwiYm9yZGVyQ29sb3JcIikge1xuICAgICAgc3RhcnQgPSBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIFwiYm9yZGVyVG9wQ29sb3JcIik7IC8vIEZpcmVmb3ggYnVnOiBhbHdheXMgcmVwb3J0cyBcImJvcmRlckNvbG9yXCIgYXMgXCJcIiwgc28gd2UgbXVzdCBmYWxsIGJhY2sgdG8gYm9yZGVyVG9wQ29sb3IuIFNlZSBodHRwczovL2dyZWVuc29jay5jb20vZm9ydW1zL3RvcGljLzI0NTgzLWhvdy10by1yZXR1cm4tY29sb3JzLXRoYXQtaS1oYWQtYWZ0ZXItcmV2ZXJzZS9cbiAgICB9XG4gIH1cblxuICB2YXIgcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCB0YXJnZXQuc3R5bGUsIHByb3AsIDAsIDEsIF9yZW5kZXJDb21wbGV4U3RyaW5nKSxcbiAgICAgIGluZGV4ID0gMCxcbiAgICAgIG1hdGNoSW5kZXggPSAwLFxuICAgICAgYSxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHN0YXJ0VmFsdWVzLFxuICAgICAgc3RhcnROdW0sXG4gICAgICBjb2xvcixcbiAgICAgIHN0YXJ0VmFsdWUsXG4gICAgICBlbmRWYWx1ZSxcbiAgICAgIGVuZE51bSxcbiAgICAgIGNodW5rLFxuICAgICAgZW5kVW5pdCxcbiAgICAgIHN0YXJ0VW5pdCxcbiAgICAgIHJlbGF0aXZlLFxuICAgICAgZW5kVmFsdWVzO1xuICBwdC5iID0gc3RhcnQ7XG4gIHB0LmUgPSBlbmQ7XG4gIHN0YXJ0ICs9IFwiXCI7IC8vZW5zdXJlIHZhbHVlcyBhcmUgc3RyaW5nc1xuXG4gIGVuZCArPSBcIlwiO1xuXG4gIGlmIChlbmQgPT09IFwiYXV0b1wiKSB7XG4gICAgdGFyZ2V0LnN0eWxlW3Byb3BdID0gZW5kO1xuICAgIGVuZCA9IF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgcHJvcCkgfHwgZW5kO1xuICAgIHRhcmdldC5zdHlsZVtwcm9wXSA9IHN0YXJ0O1xuICB9XG5cbiAgYSA9IFtzdGFydCwgZW5kXTtcblxuICBfY29sb3JTdHJpbmdGaWx0ZXIoYSk7IC8vcGFzcyBhbiBhcnJheSB3aXRoIHRoZSBzdGFydGluZyBhbmQgZW5kaW5nIHZhbHVlcyBhbmQgbGV0IHRoZSBmaWx0ZXIgZG8gd2hhdGV2ZXIgaXQgbmVlZHMgdG8gdGhlIHZhbHVlcy4gSWYgY29sb3JzIGFyZSBmb3VuZCwgaXQgcmV0dXJucyB0cnVlIGFuZCB0aGVuIHdlIG11c3QgbWF0Y2ggd2hlcmUgdGhlIGNvbG9yIHNob3dzIHVwIG9yZGVyLXdpc2UgYmVjYXVzZSBmb3IgdGhpbmdzIGxpa2UgYm94U2hhZG93LCBzb21ldGltZXMgdGhlIGJyb3dzZXIgcHJvdmlkZXMgdGhlIGNvbXB1dGVkIHZhbHVlcyB3aXRoIHRoZSBjb2xvciBGSVJTVCwgYnV0IHRoZSB1c2VyIHByb3ZpZGVzIGl0IHdpdGggdGhlIGNvbG9yIExBU1QsIHNvIGZsaXAgdGhlbSBpZiBuZWNlc3NhcnkuIFNhbWUgZm9yIGRyb3Atc2hhZG93KCkuXG5cblxuICBzdGFydCA9IGFbMF07XG4gIGVuZCA9IGFbMV07XG4gIHN0YXJ0VmFsdWVzID0gc3RhcnQubWF0Y2goX251bVdpdGhVbml0RXhwKSB8fCBbXTtcbiAgZW5kVmFsdWVzID0gZW5kLm1hdGNoKF9udW1XaXRoVW5pdEV4cCkgfHwgW107XG5cbiAgaWYgKGVuZFZhbHVlcy5sZW5ndGgpIHtcbiAgICB3aGlsZSAocmVzdWx0ID0gX251bVdpdGhVbml0RXhwLmV4ZWMoZW5kKSkge1xuICAgICAgZW5kVmFsdWUgPSByZXN1bHRbMF07XG4gICAgICBjaHVuayA9IGVuZC5zdWJzdHJpbmcoaW5kZXgsIHJlc3VsdC5pbmRleCk7XG5cbiAgICAgIGlmIChjb2xvcikge1xuICAgICAgICBjb2xvciA9IChjb2xvciArIDEpICUgNTtcbiAgICAgIH0gZWxzZSBpZiAoY2h1bmsuc3Vic3RyKC01KSA9PT0gXCJyZ2JhKFwiIHx8IGNodW5rLnN1YnN0cigtNSkgPT09IFwiaHNsYShcIikge1xuICAgICAgICBjb2xvciA9IDE7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmRWYWx1ZSAhPT0gKHN0YXJ0VmFsdWUgPSBzdGFydFZhbHVlc1ttYXRjaEluZGV4KytdIHx8IFwiXCIpKSB7XG4gICAgICAgIHN0YXJ0TnVtID0gcGFyc2VGbG9hdChzdGFydFZhbHVlKSB8fCAwO1xuICAgICAgICBzdGFydFVuaXQgPSBzdGFydFZhbHVlLnN1YnN0cigoc3RhcnROdW0gKyBcIlwiKS5sZW5ndGgpO1xuICAgICAgICByZWxhdGl2ZSA9IGVuZFZhbHVlLmNoYXJBdCgxKSA9PT0gXCI9XCIgPyArKGVuZFZhbHVlLmNoYXJBdCgwKSArIFwiMVwiKSA6IDA7XG5cbiAgICAgICAgaWYgKHJlbGF0aXZlKSB7XG4gICAgICAgICAgZW5kVmFsdWUgPSBlbmRWYWx1ZS5zdWJzdHIoMik7XG4gICAgICAgIH1cblxuICAgICAgICBlbmROdW0gPSBwYXJzZUZsb2F0KGVuZFZhbHVlKTtcbiAgICAgICAgZW5kVW5pdCA9IGVuZFZhbHVlLnN1YnN0cigoZW5kTnVtICsgXCJcIikubGVuZ3RoKTtcbiAgICAgICAgaW5kZXggPSBfbnVtV2l0aFVuaXRFeHAubGFzdEluZGV4IC0gZW5kVW5pdC5sZW5ndGg7XG5cbiAgICAgICAgaWYgKCFlbmRVbml0KSB7XG4gICAgICAgICAgLy9pZiBzb21ldGhpbmcgbGlrZSBcInBlcnNwZWN0aXZlOjMwMFwiIGlzIHBhc3NlZCBpbiBhbmQgd2UgbXVzdCBhZGQgYSB1bml0IHRvIHRoZSBlbmRcbiAgICAgICAgICBlbmRVbml0ID0gZW5kVW5pdCB8fCBfY29uZmlnLnVuaXRzW3Byb3BdIHx8IHN0YXJ0VW5pdDtcblxuICAgICAgICAgIGlmIChpbmRleCA9PT0gZW5kLmxlbmd0aCkge1xuICAgICAgICAgICAgZW5kICs9IGVuZFVuaXQ7XG4gICAgICAgICAgICBwdC5lICs9IGVuZFVuaXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXJ0VW5pdCAhPT0gZW5kVW5pdCkge1xuICAgICAgICAgIHN0YXJ0TnVtID0gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBwcm9wLCBzdGFydFZhbHVlLCBlbmRVbml0KSB8fCAwO1xuICAgICAgICB9IC8vdGhlc2UgbmVzdGVkIFByb3BUd2VlbnMgYXJlIGhhbmRsZWQgaW4gYSBzcGVjaWFsIHdheSAtIHdlJ2xsIG5ldmVyIGFjdHVhbGx5IGNhbGwgYSByZW5kZXIgb3Igc2V0dGVyIG1ldGhvZCBvbiB0aGVtLiBXZSdsbCBqdXN0IGxvb3AgdGhyb3VnaCB0aGVtIGluIHRoZSBwYXJlbnQgY29tcGxleCBzdHJpbmcgUHJvcFR3ZWVuJ3MgcmVuZGVyIG1ldGhvZC5cblxuXG4gICAgICAgIHB0Ll9wdCA9IHtcbiAgICAgICAgICBfbmV4dDogcHQuX3B0LFxuICAgICAgICAgIHA6IGNodW5rIHx8IG1hdGNoSW5kZXggPT09IDEgPyBjaHVuayA6IFwiLFwiLFxuICAgICAgICAgIC8vbm90ZTogU1ZHIHNwZWMgYWxsb3dzIG9taXNzaW9uIG9mIGNvbW1hL3NwYWNlIHdoZW4gYSBuZWdhdGl2ZSBzaWduIGlzIHdlZGdlZCBiZXR3ZWVuIHR3byBudW1iZXJzLCBsaWtlIDIuNS01LjMgaW5zdGVhZCBvZiAyLjUsLTUuMyBidXQgd2hlbiB0d2VlbmluZywgdGhlIG5lZ2F0aXZlIHZhbHVlIG1heSBzd2l0Y2ggdG8gcG9zaXRpdmUsIHNvIHdlIGluc2VydCB0aGUgY29tbWEganVzdCBpbiBjYXNlLlxuICAgICAgICAgIHM6IHN0YXJ0TnVtLFxuICAgICAgICAgIGM6IHJlbGF0aXZlID8gcmVsYXRpdmUgKiBlbmROdW0gOiBlbmROdW0gLSBzdGFydE51bSxcbiAgICAgICAgICBtOiBjb2xvciAmJiBjb2xvciA8IDQgfHwgcHJvcCA9PT0gXCJ6SW5kZXhcIiA/IE1hdGgucm91bmQgOiAwXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHQuYyA9IGluZGV4IDwgZW5kLmxlbmd0aCA/IGVuZC5zdWJzdHJpbmcoaW5kZXgsIGVuZC5sZW5ndGgpIDogXCJcIjsgLy93ZSB1c2UgdGhlIFwiY1wiIG9mIHRoZSBQcm9wVHdlZW4gdG8gc3RvcmUgdGhlIGZpbmFsIHBhcnQgb2YgdGhlIHN0cmluZyAoYWZ0ZXIgdGhlIGxhc3QgbnVtYmVyKVxuICB9IGVsc2Uge1xuICAgIHB0LnIgPSBwcm9wID09PSBcImRpc3BsYXlcIiAmJiBlbmQgPT09IFwibm9uZVwiID8gX3JlbmRlck5vblR3ZWVuaW5nVmFsdWVPbmx5QXRFbmQgOiBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZTtcbiAgfVxuXG4gIF9yZWxFeHAudGVzdChlbmQpICYmIChwdC5lID0gMCk7IC8vaWYgdGhlIGVuZCBzdHJpbmcgY29udGFpbnMgcmVsYXRpdmUgdmFsdWVzIG9yIGR5bmFtaWMgcmFuZG9tKC4uLikgdmFsdWVzLCBkZWxldGUgdGhlIGVuZCBpdCBzbyB0aGF0IG9uIHRoZSBmaW5hbCByZW5kZXIgd2UgZG9uJ3QgYWN0dWFsbHkgc2V0IGl0IHRvIHRoZSBzdHJpbmcgd2l0aCArPSBvciAtPSBjaGFyYWN0ZXJzIChmb3JjZXMgaXQgdG8gdXNlIHRoZSBjYWxjdWxhdGVkIHZhbHVlKS5cblxuICB0aGlzLl9wdCA9IHB0OyAvL3N0YXJ0IHRoZSBsaW5rZWQgbGlzdCB3aXRoIHRoaXMgbmV3IFByb3BUd2Vlbi4gUmVtZW1iZXIsIHdlIGNhbGwgX3R3ZWVuQ29tcGxleENTU1N0cmluZy5jYWxsKHBsdWdpbkluc3RhbmNlLi4uKSB0byBlbnN1cmUgdGhhdCBpdCdzIHNjb3BlZCBwcm9wZXJseS4gV2UgbWF5IGNhbGwgaXQgZnJvbSB3aXRoaW4gYW5vdGhlciBwbHVnaW4gdG9vLCB0aHVzIFwidGhpc1wiIHdvdWxkIHJlZmVyIHRvIHRoZSBwbHVnaW4uXG5cbiAgcmV0dXJuIHB0O1xufSxcbiAgICBfa2V5d29yZFRvUGVyY2VudCA9IHtcbiAgdG9wOiBcIjAlXCIsXG4gIGJvdHRvbTogXCIxMDAlXCIsXG4gIGxlZnQ6IFwiMCVcIixcbiAgcmlnaHQ6IFwiMTAwJVwiLFxuICBjZW50ZXI6IFwiNTAlXCJcbn0sXG4gICAgX2NvbnZlcnRLZXl3b3Jkc1RvUGVyY2VudGFnZXMgPSBmdW5jdGlvbiBfY29udmVydEtleXdvcmRzVG9QZXJjZW50YWdlcyh2YWx1ZSkge1xuICB2YXIgc3BsaXQgPSB2YWx1ZS5zcGxpdChcIiBcIiksXG4gICAgICB4ID0gc3BsaXRbMF0sXG4gICAgICB5ID0gc3BsaXRbMV0gfHwgXCI1MCVcIjtcblxuICBpZiAoeCA9PT0gXCJ0b3BcIiB8fCB4ID09PSBcImJvdHRvbVwiIHx8IHkgPT09IFwibGVmdFwiIHx8IHkgPT09IFwicmlnaHRcIikge1xuICAgIC8vdGhlIHVzZXIgcHJvdmlkZWQgdGhlbSBpbiB0aGUgd3Jvbmcgb3JkZXIsIHNvIGZsaXAgdGhlbVxuICAgIHZhbHVlID0geDtcbiAgICB4ID0geTtcbiAgICB5ID0gdmFsdWU7XG4gIH1cblxuICBzcGxpdFswXSA9IF9rZXl3b3JkVG9QZXJjZW50W3hdIHx8IHg7XG4gIHNwbGl0WzFdID0gX2tleXdvcmRUb1BlcmNlbnRbeV0gfHwgeTtcbiAgcmV0dXJuIHNwbGl0LmpvaW4oXCIgXCIpO1xufSxcbiAgICBfcmVuZGVyQ2xlYXJQcm9wcyA9IGZ1bmN0aW9uIF9yZW5kZXJDbGVhclByb3BzKHJhdGlvLCBkYXRhKSB7XG4gIGlmIChkYXRhLnR3ZWVuICYmIGRhdGEudHdlZW4uX3RpbWUgPT09IGRhdGEudHdlZW4uX2R1cikge1xuICAgIHZhciB0YXJnZXQgPSBkYXRhLnQsXG4gICAgICAgIHN0eWxlID0gdGFyZ2V0LnN0eWxlLFxuICAgICAgICBwcm9wcyA9IGRhdGEudSxcbiAgICAgICAgY2FjaGUgPSB0YXJnZXQuX2dzYXAsXG4gICAgICAgIHByb3AsXG4gICAgICAgIGNsZWFyVHJhbnNmb3JtcyxcbiAgICAgICAgaTtcblxuICAgIGlmIChwcm9wcyA9PT0gXCJhbGxcIiB8fCBwcm9wcyA9PT0gdHJ1ZSkge1xuICAgICAgc3R5bGUuY3NzVGV4dCA9IFwiXCI7XG4gICAgICBjbGVhclRyYW5zZm9ybXMgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wcyA9IHByb3BzLnNwbGl0KFwiLFwiKTtcbiAgICAgIGkgPSBwcm9wcy5sZW5ndGg7XG5cbiAgICAgIHdoaWxlICgtLWkgPiAtMSkge1xuICAgICAgICBwcm9wID0gcHJvcHNbaV07XG5cbiAgICAgICAgaWYgKF90cmFuc2Zvcm1Qcm9wc1twcm9wXSkge1xuICAgICAgICAgIGNsZWFyVHJhbnNmb3JtcyA9IDE7XG4gICAgICAgICAgcHJvcCA9IHByb3AgPT09IFwidHJhbnNmb3JtT3JpZ2luXCIgPyBfdHJhbnNmb3JtT3JpZ2luUHJvcCA6IF90cmFuc2Zvcm1Qcm9wO1xuICAgICAgICB9XG5cbiAgICAgICAgX3JlbW92ZVByb3BlcnR5KHRhcmdldCwgcHJvcCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNsZWFyVHJhbnNmb3Jtcykge1xuICAgICAgX3JlbW92ZVByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybVByb3ApO1xuXG4gICAgICBpZiAoY2FjaGUpIHtcbiAgICAgICAgY2FjaGUuc3ZnICYmIHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIik7XG5cbiAgICAgICAgX3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgMSk7IC8vIGZvcmNlIGFsbCB0aGUgY2FjaGVkIHZhbHVlcyBiYWNrIHRvIFwibm9ybWFsXCIvaWRlbnRpdHksIG90aGVyd2lzZSBpZiB0aGVyZSdzIGFub3RoZXIgdHdlZW4gdGhhdCdzIGFscmVhZHkgc2V0IHRvIHJlbmRlciB0cmFuc2Zvcm1zIG9uIHRoaXMgZWxlbWVudCwgaXQgY291bGQgZGlzcGxheSB0aGUgd3JvbmcgdmFsdWVzLlxuXG5cbiAgICAgICAgY2FjaGUudW5jYWNoZSA9IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG59LFxuICAgIC8vIG5vdGU6IHNwZWNpYWxQcm9wcyBzaG91bGQgcmV0dXJuIDEgaWYgKGFuZCBvbmx5IGlmKSB0aGV5IGhhdmUgYSBub24temVybyBwcmlvcml0eS4gSXQgaW5kaWNhdGVzIHdlIG5lZWQgdG8gc29ydCB0aGUgbGlua2VkIGxpc3QuXG5fc3BlY2lhbFByb3BzID0ge1xuICBjbGVhclByb3BzOiBmdW5jdGlvbiBjbGVhclByb3BzKHBsdWdpbiwgdGFyZ2V0LCBwcm9wZXJ0eSwgZW5kVmFsdWUsIHR3ZWVuKSB7XG4gICAgaWYgKHR3ZWVuLmRhdGEgIT09IFwiaXNGcm9tU3RhcnRcIikge1xuICAgICAgdmFyIHB0ID0gcGx1Z2luLl9wdCA9IG5ldyBQcm9wVHdlZW4ocGx1Z2luLl9wdCwgdGFyZ2V0LCBwcm9wZXJ0eSwgMCwgMCwgX3JlbmRlckNsZWFyUHJvcHMpO1xuICAgICAgcHQudSA9IGVuZFZhbHVlO1xuICAgICAgcHQucHIgPSAtMTA7XG4gICAgICBwdC50d2VlbiA9IHR3ZWVuO1xuXG4gICAgICBwbHVnaW4uX3Byb3BzLnB1c2gocHJvcGVydHkpO1xuXG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gIH1cbiAgLyogY2xhc3NOYW1lIGZlYXR1cmUgKGFib3V0IDAuNGtiIGd6aXBwZWQpLlxuICAsIGNsYXNzTmFtZShwbHVnaW4sIHRhcmdldCwgcHJvcGVydHksIGVuZFZhbHVlLCB0d2Vlbikge1xuICBcdGxldCBfcmVuZGVyQ2xhc3NOYW1lID0gKHJhdGlvLCBkYXRhKSA9PiB7XG4gIFx0XHRcdGRhdGEuY3NzLnJlbmRlcihyYXRpbywgZGF0YS5jc3MpO1xuICBcdFx0XHRpZiAoIXJhdGlvIHx8IHJhdGlvID09PSAxKSB7XG4gIFx0XHRcdFx0bGV0IGlubGluZSA9IGRhdGEucm12LFxuICBcdFx0XHRcdFx0dGFyZ2V0ID0gZGF0YS50LFxuICBcdFx0XHRcdFx0cDtcbiAgXHRcdFx0XHR0YXJnZXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgcmF0aW8gPyBkYXRhLmUgOiBkYXRhLmIpO1xuICBcdFx0XHRcdGZvciAocCBpbiBpbmxpbmUpIHtcbiAgXHRcdFx0XHRcdF9yZW1vdmVQcm9wZXJ0eSh0YXJnZXQsIHApO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuICBcdFx0fSxcbiAgXHRcdF9nZXRBbGxTdHlsZXMgPSAodGFyZ2V0KSA9PiB7XG4gIFx0XHRcdGxldCBzdHlsZXMgPSB7fSxcbiAgXHRcdFx0XHRjb21wdXRlZCA9IGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KSxcbiAgXHRcdFx0XHRwO1xuICBcdFx0XHRmb3IgKHAgaW4gY29tcHV0ZWQpIHtcbiAgXHRcdFx0XHRpZiAoaXNOYU4ocCkgJiYgcCAhPT0gXCJjc3NUZXh0XCIgJiYgcCAhPT0gXCJsZW5ndGhcIikge1xuICBcdFx0XHRcdFx0c3R5bGVzW3BdID0gY29tcHV0ZWRbcF07XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG4gIFx0XHRcdF9zZXREZWZhdWx0cyhzdHlsZXMsIF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIDEpKTtcbiAgXHRcdFx0cmV0dXJuIHN0eWxlcztcbiAgXHRcdH0sXG4gIFx0XHRzdGFydENsYXNzTGlzdCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSxcbiAgXHRcdHN0eWxlID0gdGFyZ2V0LnN0eWxlLFxuICBcdFx0Y3NzVGV4dCA9IHN0eWxlLmNzc1RleHQsXG4gIFx0XHRjYWNoZSA9IHRhcmdldC5fZ3NhcCxcbiAgXHRcdGNsYXNzUFQgPSBjYWNoZS5jbGFzc1BULFxuICBcdFx0aW5saW5lVG9SZW1vdmVBdEVuZCA9IHt9LFxuICBcdFx0ZGF0YSA9IHt0OnRhcmdldCwgcGx1Z2luOnBsdWdpbiwgcm12OmlubGluZVRvUmVtb3ZlQXRFbmQsIGI6c3RhcnRDbGFzc0xpc3QsIGU6KGVuZFZhbHVlLmNoYXJBdCgxKSAhPT0gXCI9XCIpID8gZW5kVmFsdWUgOiBzdGFydENsYXNzTGlzdC5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoPzpcXFxcc3xeKVwiICsgZW5kVmFsdWUuc3Vic3RyKDIpICsgXCIoPyFbXFxcXHctXSlcIiksIFwiXCIpICsgKChlbmRWYWx1ZS5jaGFyQXQoMCkgPT09IFwiK1wiKSA/IFwiIFwiICsgZW5kVmFsdWUuc3Vic3RyKDIpIDogXCJcIil9LFxuICBcdFx0Y2hhbmdpbmdWYXJzID0ge30sXG4gIFx0XHRzdGFydFZhcnMgPSBfZ2V0QWxsU3R5bGVzKHRhcmdldCksXG4gIFx0XHR0cmFuc2Zvcm1SZWxhdGVkID0gLyh0cmFuc2Zvcm18cGVyc3BlY3RpdmUpL2ksXG4gIFx0XHRlbmRWYXJzLCBwO1xuICBcdGlmIChjbGFzc1BUKSB7XG4gIFx0XHRjbGFzc1BULnIoMSwgY2xhc3NQVC5kKTtcbiAgXHRcdF9yZW1vdmVMaW5rZWRMaXN0SXRlbShjbGFzc1BULmQucGx1Z2luLCBjbGFzc1BULCBcIl9wdFwiKTtcbiAgXHR9XG4gIFx0dGFyZ2V0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGRhdGEuZSk7XG4gIFx0ZW5kVmFycyA9IF9nZXRBbGxTdHlsZXModGFyZ2V0LCB0cnVlKTtcbiAgXHR0YXJnZXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgc3RhcnRDbGFzc0xpc3QpO1xuICBcdGZvciAocCBpbiBlbmRWYXJzKSB7XG4gIFx0XHRpZiAoZW5kVmFyc1twXSAhPT0gc3RhcnRWYXJzW3BdICYmICF0cmFuc2Zvcm1SZWxhdGVkLnRlc3QocCkpIHtcbiAgXHRcdFx0Y2hhbmdpbmdWYXJzW3BdID0gZW5kVmFyc1twXTtcbiAgXHRcdFx0aWYgKCFzdHlsZVtwXSAmJiBzdHlsZVtwXSAhPT0gXCIwXCIpIHtcbiAgXHRcdFx0XHRpbmxpbmVUb1JlbW92ZUF0RW5kW3BdID0gMTtcbiAgXHRcdFx0fVxuICBcdFx0fVxuICBcdH1cbiAgXHRjYWNoZS5jbGFzc1BUID0gcGx1Z2luLl9wdCA9IG5ldyBQcm9wVHdlZW4ocGx1Z2luLl9wdCwgdGFyZ2V0LCBcImNsYXNzTmFtZVwiLCAwLCAwLCBfcmVuZGVyQ2xhc3NOYW1lLCBkYXRhLCAwLCAtMTEpO1xuICBcdGlmIChzdHlsZS5jc3NUZXh0ICE9PSBjc3NUZXh0KSB7IC8vb25seSBhcHBseSBpZiB0aGluZ3MgY2hhbmdlLiBPdGhlcndpc2UsIGluIGNhc2VzIGxpa2UgYSBiYWNrZ3JvdW5kLWltYWdlIHRoYXQncyBwdWxsZWQgZHluYW1pY2FsbHksIGl0IGNvdWxkIGNhdXNlIGEgcmVmcmVzaC4gU2VlIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9mb3J1bXMvdG9waWMvMjAzNjgtcG9zc2libGUtZ3NhcC1idWctc3dpdGNoaW5nLWNsYXNzbmFtZXMtaW4tY2hyb21lLy5cbiAgXHRcdHN0eWxlLmNzc1RleHQgPSBjc3NUZXh0OyAvL3dlIHJlY29yZGVkIGNzc1RleHQgYmVmb3JlIHdlIHN3YXBwZWQgY2xhc3NlcyBhbmQgcmFuIF9nZXRBbGxTdHlsZXMoKSBiZWNhdXNlIGluIGNhc2VzIHdoZW4gYSBjbGFzc05hbWUgdHdlZW4gaXMgb3ZlcndyaXR0ZW4sIHdlIHJlbW92ZSBhbGwgdGhlIHJlbGF0ZWQgdHdlZW5pbmcgcHJvcGVydGllcyBmcm9tIHRoYXQgY2xhc3MgY2hhbmdlIChvdGhlcndpc2UgY2xhc3Mtc3BlY2lmaWMgc3R1ZmYgY2FuJ3Qgb3ZlcnJpZGUgcHJvcGVydGllcyB3ZSd2ZSBkaXJlY3RseSBzZXQgb24gdGhlIHRhcmdldCdzIHN0eWxlIG9iamVjdCBkdWUgdG8gc3BlY2lmaWNpdHkpLlxuICBcdH1cbiAgXHRfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0LCB0cnVlKTsgLy90byBjbGVhciB0aGUgY2FjaGluZyBvZiB0cmFuc2Zvcm1zXG4gIFx0ZGF0YS5jc3MgPSBuZXcgZ3NhcC5wbHVnaW5zLmNzcygpO1xuICBcdGRhdGEuY3NzLmluaXQodGFyZ2V0LCBjaGFuZ2luZ1ZhcnMsIHR3ZWVuKTtcbiAgXHRwbHVnaW4uX3Byb3BzLnB1c2goLi4uZGF0YS5jc3MuX3Byb3BzKTtcbiAgXHRyZXR1cm4gMTtcbiAgfVxuICAqL1xuXG59LFxuXG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFRSQU5TRk9STVNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbl9pZGVudGl0eTJETWF0cml4ID0gWzEsIDAsIDAsIDEsIDAsIDBdLFxuICAgIF9yb3RhdGlvbmFsUHJvcGVydGllcyA9IHt9LFxuICAgIF9pc051bGxUcmFuc2Zvcm0gPSBmdW5jdGlvbiBfaXNOdWxsVHJhbnNmb3JtKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gXCJtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMClcIiB8fCB2YWx1ZSA9PT0gXCJub25lXCIgfHwgIXZhbHVlO1xufSxcbiAgICBfZ2V0Q29tcHV0ZWRUcmFuc2Zvcm1NYXRyaXhBc0FycmF5ID0gZnVuY3Rpb24gX2dldENvbXB1dGVkVHJhbnNmb3JtTWF0cml4QXNBcnJheSh0YXJnZXQpIHtcbiAgdmFyIG1hdHJpeFN0cmluZyA9IF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybVByb3ApO1xuXG4gIHJldHVybiBfaXNOdWxsVHJhbnNmb3JtKG1hdHJpeFN0cmluZykgPyBfaWRlbnRpdHkyRE1hdHJpeCA6IG1hdHJpeFN0cmluZy5zdWJzdHIoNykubWF0Y2goX251bUV4cCkubWFwKF9yb3VuZCk7XG59LFxuICAgIF9nZXRNYXRyaXggPSBmdW5jdGlvbiBfZ2V0TWF0cml4KHRhcmdldCwgZm9yY2UyRCkge1xuICB2YXIgY2FjaGUgPSB0YXJnZXQuX2dzYXAgfHwgX2dldENhY2hlKHRhcmdldCksXG4gICAgICBzdHlsZSA9IHRhcmdldC5zdHlsZSxcbiAgICAgIG1hdHJpeCA9IF9nZXRDb21wdXRlZFRyYW5zZm9ybU1hdHJpeEFzQXJyYXkodGFyZ2V0KSxcbiAgICAgIHBhcmVudCxcbiAgICAgIG5leHRTaWJsaW5nLFxuICAgICAgdGVtcCxcbiAgICAgIGFkZGVkVG9ET007XG5cbiAgaWYgKGNhY2hlLnN2ZyAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpKSB7XG4gICAgdGVtcCA9IHRhcmdldC50cmFuc2Zvcm0uYmFzZVZhbC5jb25zb2xpZGF0ZSgpLm1hdHJpeDsgLy9lbnN1cmVzIHRoYXQgZXZlbiBjb21wbGV4IHZhbHVlcyBsaWtlIFwidHJhbnNsYXRlKDUwLDYwKSByb3RhdGUoMTM1LDAsMClcIiBhcmUgcGFyc2VkIGJlY2F1c2UgaXQgbWFzaGVzIGl0IGludG8gYSBtYXRyaXguXG5cbiAgICBtYXRyaXggPSBbdGVtcC5hLCB0ZW1wLmIsIHRlbXAuYywgdGVtcC5kLCB0ZW1wLmUsIHRlbXAuZl07XG4gICAgcmV0dXJuIG1hdHJpeC5qb2luKFwiLFwiKSA9PT0gXCIxLDAsMCwxLDAsMFwiID8gX2lkZW50aXR5MkRNYXRyaXggOiBtYXRyaXg7XG4gIH0gZWxzZSBpZiAobWF0cml4ID09PSBfaWRlbnRpdHkyRE1hdHJpeCAmJiAhdGFyZ2V0Lm9mZnNldFBhcmVudCAmJiB0YXJnZXQgIT09IF9kb2NFbGVtZW50ICYmICFjYWNoZS5zdmcpIHtcbiAgICAvL25vdGU6IGlmIG9mZnNldFBhcmVudCBpcyBudWxsLCB0aGF0IG1lYW5zIHRoZSBlbGVtZW50IGlzbid0IGluIHRoZSBub3JtYWwgZG9jdW1lbnQgZmxvdywgbGlrZSBpZiBpdCBoYXMgZGlzcGxheTpub25lIG9yIG9uZSBvZiBpdHMgYW5jZXN0b3JzIGhhcyBkaXNwbGF5Om5vbmUpLiBGaXJlZm94IHJldHVybnMgbnVsbCBmb3IgZ2V0Q29tcHV0ZWRTdHlsZSgpIGlmIHRoZSBlbGVtZW50IGlzIGluIGFuIGlmcmFtZSB0aGF0IGhhcyBkaXNwbGF5Om5vbmUuIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTU0ODM5N1xuICAgIC8vYnJvd3NlcnMgZG9uJ3QgcmVwb3J0IHRyYW5zZm9ybXMgYWNjdXJhdGVseSB1bmxlc3MgdGhlIGVsZW1lbnQgaXMgaW4gdGhlIERPTSBhbmQgaGFzIGEgZGlzcGxheSB2YWx1ZSB0aGF0J3Mgbm90IFwibm9uZVwiLiBGaXJlZm94IGFuZCBNaWNyb3NvZnQgYnJvd3NlcnMgaGF2ZSBhIHBhcnRpYWwgYnVnIHdoZXJlIHRoZXknbGwgcmVwb3J0IHRyYW5zZm9ybXMgZXZlbiBpZiBkaXNwbGF5Om5vbmUgQlVUIG5vdCBhbnkgcGVyY2VudGFnZS1iYXNlZCB2YWx1ZXMgbGlrZSB0cmFuc2xhdGUoLTUwJSwgOHB4KSB3aWxsIGJlIHJlcG9ydGVkIGFzIGlmIGl0J3MgdHJhbnNsYXRlKDAsIDhweCkuXG4gICAgdGVtcCA9IHN0eWxlLmRpc3BsYXk7XG4gICAgc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZTtcblxuICAgIGlmICghcGFyZW50IHx8ICF0YXJnZXQub2Zmc2V0UGFyZW50KSB7XG4gICAgICAvLyBub3RlOiBpbiAzLjMuMCB3ZSBzd2l0Y2hlZCB0YXJnZXQub2Zmc2V0UGFyZW50IHRvIF9kb2MuYm9keS5jb250YWlucyh0YXJnZXQpIHRvIGF2b2lkIFtzb21ldGltZXMgdW5uZWNlc3NhcnldIE11dGF0aW9uT2JzZXJ2ZXIgY2FsbHMgYnV0IHRoYXQgd2Fzbid0IGFkZXF1YXRlIGJlY2F1c2UgdGhlcmUgYXJlIGVkZ2UgY2FzZXMgd2hlcmUgbmVzdGVkIHBvc2l0aW9uOiBmaXhlZCBlbGVtZW50cyBuZWVkIHRvIGdldCByZXBhcmVudGVkIHRvIGFjY3VyYXRlbHkgc2Vuc2UgdHJhbnNmb3Jtcy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmVlbnNvY2svR1NBUC9pc3N1ZXMvMzg4IGFuZCBodHRwczovL2dpdGh1Yi5jb20vZ3JlZW5zb2NrL0dTQVAvaXNzdWVzLzM3NVxuICAgICAgYWRkZWRUb0RPTSA9IDE7IC8vZmxhZ1xuXG4gICAgICBuZXh0U2libGluZyA9IHRhcmdldC5uZXh0U2libGluZztcblxuICAgICAgX2RvY0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFyZ2V0KTsgLy93ZSBtdXN0IGFkZCBpdCB0byB0aGUgRE9NIGluIG9yZGVyIHRvIGdldCB2YWx1ZXMgcHJvcGVybHlcblxuICAgIH1cblxuICAgIG1hdHJpeCA9IF9nZXRDb21wdXRlZFRyYW5zZm9ybU1hdHJpeEFzQXJyYXkodGFyZ2V0KTtcbiAgICB0ZW1wID8gc3R5bGUuZGlzcGxheSA9IHRlbXAgOiBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBcImRpc3BsYXlcIik7XG5cbiAgICBpZiAoYWRkZWRUb0RPTSkge1xuICAgICAgbmV4dFNpYmxpbmcgPyBwYXJlbnQuaW5zZXJ0QmVmb3JlKHRhcmdldCwgbmV4dFNpYmxpbmcpIDogcGFyZW50ID8gcGFyZW50LmFwcGVuZENoaWxkKHRhcmdldCkgOiBfZG9jRWxlbWVudC5yZW1vdmVDaGlsZCh0YXJnZXQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JjZTJEICYmIG1hdHJpeC5sZW5ndGggPiA2ID8gW21hdHJpeFswXSwgbWF0cml4WzFdLCBtYXRyaXhbNF0sIG1hdHJpeFs1XSwgbWF0cml4WzEyXSwgbWF0cml4WzEzXV0gOiBtYXRyaXg7XG59LFxuICAgIF9hcHBseVNWR09yaWdpbiA9IGZ1bmN0aW9uIF9hcHBseVNWR09yaWdpbih0YXJnZXQsIG9yaWdpbiwgb3JpZ2luSXNBYnNvbHV0ZSwgc21vb3RoLCBtYXRyaXhBcnJheSwgcGx1Z2luVG9BZGRQcm9wVHdlZW5zVG8pIHtcbiAgdmFyIGNhY2hlID0gdGFyZ2V0Ll9nc2FwLFxuICAgICAgbWF0cml4ID0gbWF0cml4QXJyYXkgfHwgX2dldE1hdHJpeCh0YXJnZXQsIHRydWUpLFxuICAgICAgeE9yaWdpbk9sZCA9IGNhY2hlLnhPcmlnaW4gfHwgMCxcbiAgICAgIHlPcmlnaW5PbGQgPSBjYWNoZS55T3JpZ2luIHx8IDAsXG4gICAgICB4T2Zmc2V0T2xkID0gY2FjaGUueE9mZnNldCB8fCAwLFxuICAgICAgeU9mZnNldE9sZCA9IGNhY2hlLnlPZmZzZXQgfHwgMCxcbiAgICAgIGEgPSBtYXRyaXhbMF0sXG4gICAgICBiID0gbWF0cml4WzFdLFxuICAgICAgYyA9IG1hdHJpeFsyXSxcbiAgICAgIGQgPSBtYXRyaXhbM10sXG4gICAgICB0eCA9IG1hdHJpeFs0XSxcbiAgICAgIHR5ID0gbWF0cml4WzVdLFxuICAgICAgb3JpZ2luU3BsaXQgPSBvcmlnaW4uc3BsaXQoXCIgXCIpLFxuICAgICAgeE9yaWdpbiA9IHBhcnNlRmxvYXQob3JpZ2luU3BsaXRbMF0pIHx8IDAsXG4gICAgICB5T3JpZ2luID0gcGFyc2VGbG9hdChvcmlnaW5TcGxpdFsxXSkgfHwgMCxcbiAgICAgIGJvdW5kcyxcbiAgICAgIGRldGVybWluYW50LFxuICAgICAgeCxcbiAgICAgIHk7XG5cbiAgaWYgKCFvcmlnaW5Jc0Fic29sdXRlKSB7XG4gICAgYm91bmRzID0gX2dldEJCb3godGFyZ2V0KTtcbiAgICB4T3JpZ2luID0gYm91bmRzLnggKyAofm9yaWdpblNwbGl0WzBdLmluZGV4T2YoXCIlXCIpID8geE9yaWdpbiAvIDEwMCAqIGJvdW5kcy53aWR0aCA6IHhPcmlnaW4pO1xuICAgIHlPcmlnaW4gPSBib3VuZHMueSArICh+KG9yaWdpblNwbGl0WzFdIHx8IG9yaWdpblNwbGl0WzBdKS5pbmRleE9mKFwiJVwiKSA/IHlPcmlnaW4gLyAxMDAgKiBib3VuZHMuaGVpZ2h0IDogeU9yaWdpbik7XG4gIH0gZWxzZSBpZiAobWF0cml4ICE9PSBfaWRlbnRpdHkyRE1hdHJpeCAmJiAoZGV0ZXJtaW5hbnQgPSBhICogZCAtIGIgKiBjKSkge1xuICAgIC8vaWYgaXQncyB6ZXJvIChsaWtlIGlmIHNjYWxlWCBhbmQgc2NhbGVZIGFyZSB6ZXJvKSwgc2tpcCBpdCB0byBhdm9pZCBlcnJvcnMgd2l0aCBkaXZpZGluZyBieSB6ZXJvLlxuICAgIHggPSB4T3JpZ2luICogKGQgLyBkZXRlcm1pbmFudCkgKyB5T3JpZ2luICogKC1jIC8gZGV0ZXJtaW5hbnQpICsgKGMgKiB0eSAtIGQgKiB0eCkgLyBkZXRlcm1pbmFudDtcbiAgICB5ID0geE9yaWdpbiAqICgtYiAvIGRldGVybWluYW50KSArIHlPcmlnaW4gKiAoYSAvIGRldGVybWluYW50KSAtIChhICogdHkgLSBiICogdHgpIC8gZGV0ZXJtaW5hbnQ7XG4gICAgeE9yaWdpbiA9IHg7XG4gICAgeU9yaWdpbiA9IHk7XG4gIH1cblxuICBpZiAoc21vb3RoIHx8IHNtb290aCAhPT0gZmFsc2UgJiYgY2FjaGUuc21vb3RoKSB7XG4gICAgdHggPSB4T3JpZ2luIC0geE9yaWdpbk9sZDtcbiAgICB0eSA9IHlPcmlnaW4gLSB5T3JpZ2luT2xkO1xuICAgIGNhY2hlLnhPZmZzZXQgPSB4T2Zmc2V0T2xkICsgKHR4ICogYSArIHR5ICogYykgLSB0eDtcbiAgICBjYWNoZS55T2Zmc2V0ID0geU9mZnNldE9sZCArICh0eCAqIGIgKyB0eSAqIGQpIC0gdHk7XG4gIH0gZWxzZSB7XG4gICAgY2FjaGUueE9mZnNldCA9IGNhY2hlLnlPZmZzZXQgPSAwO1xuICB9XG5cbiAgY2FjaGUueE9yaWdpbiA9IHhPcmlnaW47XG4gIGNhY2hlLnlPcmlnaW4gPSB5T3JpZ2luO1xuICBjYWNoZS5zbW9vdGggPSAhIXNtb290aDtcbiAgY2FjaGUub3JpZ2luID0gb3JpZ2luO1xuICBjYWNoZS5vcmlnaW5Jc0Fic29sdXRlID0gISFvcmlnaW5Jc0Fic29sdXRlO1xuICB0YXJnZXQuc3R5bGVbX3RyYW5zZm9ybU9yaWdpblByb3BdID0gXCIwcHggMHB4XCI7IC8vb3RoZXJ3aXNlLCBpZiBzb21lb25lIHNldHMgIGFuIG9yaWdpbiB2aWEgQ1NTLCBpdCB3aWxsIGxpa2VseSBpbnRlcmZlcmUgd2l0aCB0aGUgU1ZHIHRyYW5zZm9ybSBhdHRyaWJ1dGUgb25lcyAoYmVjYXVzZSByZW1lbWJlciwgd2UncmUgYmFraW5nIHRoZSBvcmlnaW4gaW50byB0aGUgbWF0cml4KCkgdmFsdWUpLlxuXG4gIGlmIChwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbykge1xuICAgIF9hZGROb25Ud2VlbmluZ1BUKHBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvLCBjYWNoZSwgXCJ4T3JpZ2luXCIsIHhPcmlnaW5PbGQsIHhPcmlnaW4pO1xuXG4gICAgX2FkZE5vblR3ZWVuaW5nUFQocGx1Z2luVG9BZGRQcm9wVHdlZW5zVG8sIGNhY2hlLCBcInlPcmlnaW5cIiwgeU9yaWdpbk9sZCwgeU9yaWdpbik7XG5cbiAgICBfYWRkTm9uVHdlZW5pbmdQVChwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbywgY2FjaGUsIFwieE9mZnNldFwiLCB4T2Zmc2V0T2xkLCBjYWNoZS54T2Zmc2V0KTtcblxuICAgIF9hZGROb25Ud2VlbmluZ1BUKHBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvLCBjYWNoZSwgXCJ5T2Zmc2V0XCIsIHlPZmZzZXRPbGQsIGNhY2hlLnlPZmZzZXQpO1xuICB9XG5cbiAgdGFyZ2V0LnNldEF0dHJpYnV0ZShcImRhdGEtc3ZnLW9yaWdpblwiLCB4T3JpZ2luICsgXCIgXCIgKyB5T3JpZ2luKTtcbn0sXG4gICAgX3BhcnNlVHJhbnNmb3JtID0gZnVuY3Rpb24gX3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgdW5jYWNoZSkge1xuICB2YXIgY2FjaGUgPSB0YXJnZXQuX2dzYXAgfHwgbmV3IEdTQ2FjaGUodGFyZ2V0KTtcblxuICBpZiAoXCJ4XCIgaW4gY2FjaGUgJiYgIXVuY2FjaGUgJiYgIWNhY2hlLnVuY2FjaGUpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH1cblxuICB2YXIgc3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gICAgICBpbnZlcnRlZFNjYWxlWCA9IGNhY2hlLnNjYWxlWCA8IDAsXG4gICAgICBweCA9IFwicHhcIixcbiAgICAgIGRlZyA9IFwiZGVnXCIsXG4gICAgICBvcmlnaW4gPSBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIF90cmFuc2Zvcm1PcmlnaW5Qcm9wKSB8fCBcIjBcIixcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgeixcbiAgICAgIHNjYWxlWCxcbiAgICAgIHNjYWxlWSxcbiAgICAgIHJvdGF0aW9uLFxuICAgICAgcm90YXRpb25YLFxuICAgICAgcm90YXRpb25ZLFxuICAgICAgc2tld1gsXG4gICAgICBza2V3WSxcbiAgICAgIHBlcnNwZWN0aXZlLFxuICAgICAgeE9yaWdpbixcbiAgICAgIHlPcmlnaW4sXG4gICAgICBtYXRyaXgsXG4gICAgICBhbmdsZSxcbiAgICAgIGNvcyxcbiAgICAgIHNpbixcbiAgICAgIGEsXG4gICAgICBiLFxuICAgICAgYyxcbiAgICAgIGQsXG4gICAgICBhMTIsXG4gICAgICBhMjIsXG4gICAgICB0MSxcbiAgICAgIHQyLFxuICAgICAgdDMsXG4gICAgICBhMTMsXG4gICAgICBhMjMsXG4gICAgICBhMzMsXG4gICAgICBhNDIsXG4gICAgICBhNDMsXG4gICAgICBhMzI7XG4gIHggPSB5ID0geiA9IHJvdGF0aW9uID0gcm90YXRpb25YID0gcm90YXRpb25ZID0gc2tld1ggPSBza2V3WSA9IHBlcnNwZWN0aXZlID0gMDtcbiAgc2NhbGVYID0gc2NhbGVZID0gMTtcbiAgY2FjaGUuc3ZnID0gISEodGFyZ2V0LmdldENUTSAmJiBfaXNTVkcodGFyZ2V0KSk7XG4gIG1hdHJpeCA9IF9nZXRNYXRyaXgodGFyZ2V0LCBjYWNoZS5zdmcpO1xuXG4gIGlmIChjYWNoZS5zdmcpIHtcbiAgICB0MSA9ICghY2FjaGUudW5jYWNoZSB8fCBvcmlnaW4gPT09IFwiMHB4IDBweFwiKSAmJiAhdW5jYWNoZSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdmctb3JpZ2luXCIpOyAvLyBpZiBvcmlnaW4gaXMgMCwwIGFuZCBjYWNoZS51bmNhY2hlIGlzIHRydWUsIGxldCB0aGUgcmVjb3JkZWQgZGF0YS1zdmctb3JpZ2luIHN0YXkuIE90aGVyd2lzZSwgd2hlbmV2ZXIgd2Ugc2V0IGNhY2hlLnVuY2FjaGUgdG8gdHJ1ZSwgd2UnZCBuZWVkIHRvIHNldCBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IChjYWNoZS54T3JpZ2luIC0gYmJveC54KSArIFwicHggXCIgKyAoY2FjaGUueU9yaWdpbiAtIGJib3gueSkgKyBcInB4XCIuIFJlbWVtYmVyLCB0byB3b3JrIGFyb3VuZCBicm93c2VyIGluY29uc2lzdGVuY2llcyB3ZSBhbHdheXMgZm9yY2UgU1ZHIGVsZW1lbnRzJyB0cmFuc2Zvcm1PcmlnaW4gdG8gMCwwIGFuZCBvZmZzZXQgdGhlIHRyYW5zbGF0aW9uIGFjY29yZGluZ2x5LlxuXG4gICAgX2FwcGx5U1ZHT3JpZ2luKHRhcmdldCwgdDEgfHwgb3JpZ2luLCAhIXQxIHx8IGNhY2hlLm9yaWdpbklzQWJzb2x1dGUsIGNhY2hlLnNtb290aCAhPT0gZmFsc2UsIG1hdHJpeCk7XG4gIH1cblxuICB4T3JpZ2luID0gY2FjaGUueE9yaWdpbiB8fCAwO1xuICB5T3JpZ2luID0gY2FjaGUueU9yaWdpbiB8fCAwO1xuXG4gIGlmIChtYXRyaXggIT09IF9pZGVudGl0eTJETWF0cml4KSB7XG4gICAgYSA9IG1hdHJpeFswXTsgLy9hMTFcblxuICAgIGIgPSBtYXRyaXhbMV07IC8vYTIxXG5cbiAgICBjID0gbWF0cml4WzJdOyAvL2EzMVxuXG4gICAgZCA9IG1hdHJpeFszXTsgLy9hNDFcblxuICAgIHggPSBhMTIgPSBtYXRyaXhbNF07XG4gICAgeSA9IGEyMiA9IG1hdHJpeFs1XTsgLy8yRCBtYXRyaXhcblxuICAgIGlmIChtYXRyaXgubGVuZ3RoID09PSA2KSB7XG4gICAgICBzY2FsZVggPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG4gICAgICBzY2FsZVkgPSBNYXRoLnNxcnQoZCAqIGQgKyBjICogYyk7XG4gICAgICByb3RhdGlvbiA9IGEgfHwgYiA/IF9hdGFuMihiLCBhKSAqIF9SQUQyREVHIDogMDsgLy9ub3RlOiBpZiBzY2FsZVggaXMgMCwgd2UgY2Fubm90IGFjY3VyYXRlbHkgbWVhc3VyZSByb3RhdGlvbi4gU2FtZSBmb3Igc2tld1ggd2l0aCBhIHNjYWxlWSBvZiAwLiBUaGVyZWZvcmUsIHdlIGRlZmF1bHQgdG8gdGhlIHByZXZpb3VzbHkgcmVjb3JkZWQgdmFsdWUgKG9yIHplcm8gaWYgdGhhdCBkb2Vzbid0IGV4aXN0KS5cblxuICAgICAgc2tld1ggPSBjIHx8IGQgPyBfYXRhbjIoYywgZCkgKiBfUkFEMkRFRyArIHJvdGF0aW9uIDogMDtcbiAgICAgIHNrZXdYICYmIChzY2FsZVkgKj0gTWF0aC5hYnMoTWF0aC5jb3Moc2tld1ggKiBfREVHMlJBRCkpKTtcblxuICAgICAgaWYgKGNhY2hlLnN2Zykge1xuICAgICAgICB4IC09IHhPcmlnaW4gLSAoeE9yaWdpbiAqIGEgKyB5T3JpZ2luICogYyk7XG4gICAgICAgIHkgLT0geU9yaWdpbiAtICh4T3JpZ2luICogYiArIHlPcmlnaW4gKiBkKTtcbiAgICAgIH0gLy8zRCBtYXRyaXhcblxuICAgIH0gZWxzZSB7XG4gICAgICBhMzIgPSBtYXRyaXhbNl07XG4gICAgICBhNDIgPSBtYXRyaXhbN107XG4gICAgICBhMTMgPSBtYXRyaXhbOF07XG4gICAgICBhMjMgPSBtYXRyaXhbOV07XG4gICAgICBhMzMgPSBtYXRyaXhbMTBdO1xuICAgICAgYTQzID0gbWF0cml4WzExXTtcbiAgICAgIHggPSBtYXRyaXhbMTJdO1xuICAgICAgeSA9IG1hdHJpeFsxM107XG4gICAgICB6ID0gbWF0cml4WzE0XTtcbiAgICAgIGFuZ2xlID0gX2F0YW4yKGEzMiwgYTMzKTtcbiAgICAgIHJvdGF0aW9uWCA9IGFuZ2xlICogX1JBRDJERUc7IC8vcm90YXRpb25YXG5cbiAgICAgIGlmIChhbmdsZSkge1xuICAgICAgICBjb3MgPSBNYXRoLmNvcygtYW5nbGUpO1xuICAgICAgICBzaW4gPSBNYXRoLnNpbigtYW5nbGUpO1xuICAgICAgICB0MSA9IGExMiAqIGNvcyArIGExMyAqIHNpbjtcbiAgICAgICAgdDIgPSBhMjIgKiBjb3MgKyBhMjMgKiBzaW47XG4gICAgICAgIHQzID0gYTMyICogY29zICsgYTMzICogc2luO1xuICAgICAgICBhMTMgPSBhMTIgKiAtc2luICsgYTEzICogY29zO1xuICAgICAgICBhMjMgPSBhMjIgKiAtc2luICsgYTIzICogY29zO1xuICAgICAgICBhMzMgPSBhMzIgKiAtc2luICsgYTMzICogY29zO1xuICAgICAgICBhNDMgPSBhNDIgKiAtc2luICsgYTQzICogY29zO1xuICAgICAgICBhMTIgPSB0MTtcbiAgICAgICAgYTIyID0gdDI7XG4gICAgICAgIGEzMiA9IHQzO1xuICAgICAgfSAvL3JvdGF0aW9uWVxuXG5cbiAgICAgIGFuZ2xlID0gX2F0YW4yKC1jLCBhMzMpO1xuICAgICAgcm90YXRpb25ZID0gYW5nbGUgKiBfUkFEMkRFRztcblxuICAgICAgaWYgKGFuZ2xlKSB7XG4gICAgICAgIGNvcyA9IE1hdGguY29zKC1hbmdsZSk7XG4gICAgICAgIHNpbiA9IE1hdGguc2luKC1hbmdsZSk7XG4gICAgICAgIHQxID0gYSAqIGNvcyAtIGExMyAqIHNpbjtcbiAgICAgICAgdDIgPSBiICogY29zIC0gYTIzICogc2luO1xuICAgICAgICB0MyA9IGMgKiBjb3MgLSBhMzMgKiBzaW47XG4gICAgICAgIGE0MyA9IGQgKiBzaW4gKyBhNDMgKiBjb3M7XG4gICAgICAgIGEgPSB0MTtcbiAgICAgICAgYiA9IHQyO1xuICAgICAgICBjID0gdDM7XG4gICAgICB9IC8vcm90YXRpb25aXG5cblxuICAgICAgYW5nbGUgPSBfYXRhbjIoYiwgYSk7XG4gICAgICByb3RhdGlvbiA9IGFuZ2xlICogX1JBRDJERUc7XG5cbiAgICAgIGlmIChhbmdsZSkge1xuICAgICAgICBjb3MgPSBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICAgIHNpbiA9IE1hdGguc2luKGFuZ2xlKTtcbiAgICAgICAgdDEgPSBhICogY29zICsgYiAqIHNpbjtcbiAgICAgICAgdDIgPSBhMTIgKiBjb3MgKyBhMjIgKiBzaW47XG4gICAgICAgIGIgPSBiICogY29zIC0gYSAqIHNpbjtcbiAgICAgICAgYTIyID0gYTIyICogY29zIC0gYTEyICogc2luO1xuICAgICAgICBhID0gdDE7XG4gICAgICAgIGExMiA9IHQyO1xuICAgICAgfVxuXG4gICAgICBpZiAocm90YXRpb25YICYmIE1hdGguYWJzKHJvdGF0aW9uWCkgKyBNYXRoLmFicyhyb3RhdGlvbikgPiAzNTkuOSkge1xuICAgICAgICAvL3doZW4gcm90YXRpb25ZIGlzIHNldCwgaXQgd2lsbCBvZnRlbiBiZSBwYXJzZWQgYXMgMTgwIGRlZ3JlZXMgZGlmZmVyZW50IHRoYW4gaXQgc2hvdWxkIGJlLCBhbmQgcm90YXRpb25YIGFuZCByb3RhdGlvbiBib3RoIGJlaW5nIDE4MCAoaXQgbG9va3MgdGhlIHNhbWUpLCBzbyB3ZSBhZGp1c3QgZm9yIHRoYXQgaGVyZS5cbiAgICAgICAgcm90YXRpb25YID0gcm90YXRpb24gPSAwO1xuICAgICAgICByb3RhdGlvblkgPSAxODAgLSByb3RhdGlvblk7XG4gICAgICB9XG5cbiAgICAgIHNjYWxlWCA9IF9yb3VuZChNYXRoLnNxcnQoYSAqIGEgKyBiICogYiArIGMgKiBjKSk7XG4gICAgICBzY2FsZVkgPSBfcm91bmQoTWF0aC5zcXJ0KGEyMiAqIGEyMiArIGEzMiAqIGEzMikpO1xuICAgICAgYW5nbGUgPSBfYXRhbjIoYTEyLCBhMjIpO1xuICAgICAgc2tld1ggPSBNYXRoLmFicyhhbmdsZSkgPiAwLjAwMDIgPyBhbmdsZSAqIF9SQUQyREVHIDogMDtcbiAgICAgIHBlcnNwZWN0aXZlID0gYTQzID8gMSAvIChhNDMgPCAwID8gLWE0MyA6IGE0MykgOiAwO1xuICAgIH1cblxuICAgIGlmIChjYWNoZS5zdmcpIHtcbiAgICAgIC8vc2Vuc2UgaWYgdGhlcmUgYXJlIENTUyB0cmFuc2Zvcm1zIGFwcGxpZWQgb24gYW4gU1ZHIGVsZW1lbnQgaW4gd2hpY2ggY2FzZSB3ZSBtdXN0IG92ZXJ3cml0ZSB0aGVtIHdoZW4gcmVuZGVyaW5nLiBUaGUgdHJhbnNmb3JtIGF0dHJpYnV0ZSBpcyBtb3JlIHJlbGlhYmxlIGNyb3NzLWJyb3dzZXIsIGJ1dCB3ZSBjYW4ndCBqdXN0IHJlbW92ZSB0aGUgQ1NTIG9uZXMgYmVjYXVzZSB0aGV5IG1heSBiZSBhcHBsaWVkIGluIGEgQ1NTIHJ1bGUgc29tZXdoZXJlIChub3QganVzdCBpbmxpbmUpLlxuICAgICAgdDEgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpO1xuICAgICAgY2FjaGUuZm9yY2VDU1MgPSB0YXJnZXQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwiXCIpIHx8ICFfaXNOdWxsVHJhbnNmb3JtKF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybVByb3ApKTtcbiAgICAgIHQxICYmIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgdDEpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChNYXRoLmFicyhza2V3WCkgPiA5MCAmJiBNYXRoLmFicyhza2V3WCkgPCAyNzApIHtcbiAgICBpZiAoaW52ZXJ0ZWRTY2FsZVgpIHtcbiAgICAgIHNjYWxlWCAqPSAtMTtcbiAgICAgIHNrZXdYICs9IHJvdGF0aW9uIDw9IDAgPyAxODAgOiAtMTgwO1xuICAgICAgcm90YXRpb24gKz0gcm90YXRpb24gPD0gMCA/IDE4MCA6IC0xODA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjYWxlWSAqPSAtMTtcbiAgICAgIHNrZXdYICs9IHNrZXdYIDw9IDAgPyAxODAgOiAtMTgwO1xuICAgIH1cbiAgfVxuXG4gIGNhY2hlLnggPSB4IC0gKChjYWNoZS54UGVyY2VudCA9IHggJiYgKGNhY2hlLnhQZXJjZW50IHx8IChNYXRoLnJvdW5kKHRhcmdldC5vZmZzZXRXaWR0aCAvIDIpID09PSBNYXRoLnJvdW5kKC14KSA/IC01MCA6IDApKSkgPyB0YXJnZXQub2Zmc2V0V2lkdGggKiBjYWNoZS54UGVyY2VudCAvIDEwMCA6IDApICsgcHg7XG4gIGNhY2hlLnkgPSB5IC0gKChjYWNoZS55UGVyY2VudCA9IHkgJiYgKGNhY2hlLnlQZXJjZW50IHx8IChNYXRoLnJvdW5kKHRhcmdldC5vZmZzZXRIZWlnaHQgLyAyKSA9PT0gTWF0aC5yb3VuZCgteSkgPyAtNTAgOiAwKSkpID8gdGFyZ2V0Lm9mZnNldEhlaWdodCAqIGNhY2hlLnlQZXJjZW50IC8gMTAwIDogMCkgKyBweDtcbiAgY2FjaGUueiA9IHogKyBweDtcbiAgY2FjaGUuc2NhbGVYID0gX3JvdW5kKHNjYWxlWCk7XG4gIGNhY2hlLnNjYWxlWSA9IF9yb3VuZChzY2FsZVkpO1xuICBjYWNoZS5yb3RhdGlvbiA9IF9yb3VuZChyb3RhdGlvbikgKyBkZWc7XG4gIGNhY2hlLnJvdGF0aW9uWCA9IF9yb3VuZChyb3RhdGlvblgpICsgZGVnO1xuICBjYWNoZS5yb3RhdGlvblkgPSBfcm91bmQocm90YXRpb25ZKSArIGRlZztcbiAgY2FjaGUuc2tld1ggPSBza2V3WCArIGRlZztcbiAgY2FjaGUuc2tld1kgPSBza2V3WSArIGRlZztcbiAgY2FjaGUudHJhbnNmb3JtUGVyc3BlY3RpdmUgPSBwZXJzcGVjdGl2ZSArIHB4O1xuXG4gIGlmIChjYWNoZS56T3JpZ2luID0gcGFyc2VGbG9hdChvcmlnaW4uc3BsaXQoXCIgXCIpWzJdKSB8fCAwKSB7XG4gICAgc3R5bGVbX3RyYW5zZm9ybU9yaWdpblByb3BdID0gX2ZpcnN0VHdvT25seShvcmlnaW4pO1xuICB9XG5cbiAgY2FjaGUueE9mZnNldCA9IGNhY2hlLnlPZmZzZXQgPSAwO1xuICBjYWNoZS5mb3JjZTNEID0gX2NvbmZpZy5mb3JjZTNEO1xuICBjYWNoZS5yZW5kZXJUcmFuc2Zvcm0gPSBjYWNoZS5zdmcgPyBfcmVuZGVyU1ZHVHJhbnNmb3JtcyA6IF9zdXBwb3J0czNEID8gX3JlbmRlckNTU1RyYW5zZm9ybXMgOiBfcmVuZGVyTm9uM0RUcmFuc2Zvcm1zO1xuICBjYWNoZS51bmNhY2hlID0gMDtcbiAgcmV0dXJuIGNhY2hlO1xufSxcbiAgICBfZmlyc3RUd29Pbmx5ID0gZnVuY3Rpb24gX2ZpcnN0VHdvT25seSh2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlID0gdmFsdWUuc3BsaXQoXCIgXCIpKVswXSArIFwiIFwiICsgdmFsdWVbMV07XG59LFxuICAgIC8vZm9yIGhhbmRsaW5nIHRyYW5zZm9ybU9yaWdpbiB2YWx1ZXMsIHN0cmlwcGluZyBvdXQgdGhlIDNyZCBkaW1lbnNpb25cbl9hZGRQeFRyYW5zbGF0ZSA9IGZ1bmN0aW9uIF9hZGRQeFRyYW5zbGF0ZSh0YXJnZXQsIHN0YXJ0LCB2YWx1ZSkge1xuICB2YXIgdW5pdCA9IGdldFVuaXQoc3RhcnQpO1xuICByZXR1cm4gX3JvdW5kKHBhcnNlRmxvYXQoc3RhcnQpICsgcGFyc2VGbG9hdChfY29udmVydFRvVW5pdCh0YXJnZXQsIFwieFwiLCB2YWx1ZSArIFwicHhcIiwgdW5pdCkpKSArIHVuaXQ7XG59LFxuICAgIF9yZW5kZXJOb24zRFRyYW5zZm9ybXMgPSBmdW5jdGlvbiBfcmVuZGVyTm9uM0RUcmFuc2Zvcm1zKHJhdGlvLCBjYWNoZSkge1xuICBjYWNoZS56ID0gXCIwcHhcIjtcbiAgY2FjaGUucm90YXRpb25ZID0gY2FjaGUucm90YXRpb25YID0gXCIwZGVnXCI7XG4gIGNhY2hlLmZvcmNlM0QgPSAwO1xuXG4gIF9yZW5kZXJDU1NUcmFuc2Zvcm1zKHJhdGlvLCBjYWNoZSk7XG59LFxuICAgIF96ZXJvRGVnID0gXCIwZGVnXCIsXG4gICAgX3plcm9QeCA9IFwiMHB4XCIsXG4gICAgX2VuZFBhcmVudGhlc2lzID0gXCIpIFwiLFxuICAgIF9yZW5kZXJDU1NUcmFuc2Zvcm1zID0gZnVuY3Rpb24gX3JlbmRlckNTU1RyYW5zZm9ybXMocmF0aW8sIGNhY2hlKSB7XG4gIHZhciBfcmVmID0gY2FjaGUgfHwgdGhpcyxcbiAgICAgIHhQZXJjZW50ID0gX3JlZi54UGVyY2VudCxcbiAgICAgIHlQZXJjZW50ID0gX3JlZi55UGVyY2VudCxcbiAgICAgIHggPSBfcmVmLngsXG4gICAgICB5ID0gX3JlZi55LFxuICAgICAgeiA9IF9yZWYueixcbiAgICAgIHJvdGF0aW9uID0gX3JlZi5yb3RhdGlvbixcbiAgICAgIHJvdGF0aW9uWSA9IF9yZWYucm90YXRpb25ZLFxuICAgICAgcm90YXRpb25YID0gX3JlZi5yb3RhdGlvblgsXG4gICAgICBza2V3WCA9IF9yZWYuc2tld1gsXG4gICAgICBza2V3WSA9IF9yZWYuc2tld1ksXG4gICAgICBzY2FsZVggPSBfcmVmLnNjYWxlWCxcbiAgICAgIHNjYWxlWSA9IF9yZWYuc2NhbGVZLFxuICAgICAgdHJhbnNmb3JtUGVyc3BlY3RpdmUgPSBfcmVmLnRyYW5zZm9ybVBlcnNwZWN0aXZlLFxuICAgICAgZm9yY2UzRCA9IF9yZWYuZm9yY2UzRCxcbiAgICAgIHRhcmdldCA9IF9yZWYudGFyZ2V0LFxuICAgICAgek9yaWdpbiA9IF9yZWYuek9yaWdpbixcbiAgICAgIHRyYW5zZm9ybXMgPSBcIlwiLFxuICAgICAgdXNlM0QgPSBmb3JjZTNEID09PSBcImF1dG9cIiAmJiByYXRpbyAmJiByYXRpbyAhPT0gMSB8fCBmb3JjZTNEID09PSB0cnVlOyAvLyBTYWZhcmkgaGFzIGEgYnVnIHRoYXQgY2F1c2VzIGl0IG5vdCB0byByZW5kZXIgM0QgdHJhbnNmb3JtLW9yaWdpbiB2YWx1ZXMgcHJvcGVybHksIHNvIHdlIGZvcmNlIHRoZSB6IG9yaWdpbiB0byAwLCByZWNvcmQgaXQgaW4gdGhlIGNhY2hlLCBhbmQgdGhlbiBkbyB0aGUgbWF0aCBoZXJlIHRvIG9mZnNldCB0aGUgdHJhbnNsYXRlIHZhbHVlcyBhY2NvcmRpbmdseSAoYmFzaWNhbGx5IGRvIHRoZSAzRCB0cmFuc2Zvcm0tb3JpZ2luIHBhcnQgbWFudWFsbHkpXG5cblxuICBpZiAoek9yaWdpbiAmJiAocm90YXRpb25YICE9PSBfemVyb0RlZyB8fCByb3RhdGlvblkgIT09IF96ZXJvRGVnKSkge1xuICAgIHZhciBhbmdsZSA9IHBhcnNlRmxvYXQocm90YXRpb25ZKSAqIF9ERUcyUkFELFxuICAgICAgICBhMTMgPSBNYXRoLnNpbihhbmdsZSksXG4gICAgICAgIGEzMyA9IE1hdGguY29zKGFuZ2xlKSxcbiAgICAgICAgY29zO1xuXG4gICAgYW5nbGUgPSBwYXJzZUZsb2F0KHJvdGF0aW9uWCkgKiBfREVHMlJBRDtcbiAgICBjb3MgPSBNYXRoLmNvcyhhbmdsZSk7XG4gICAgeCA9IF9hZGRQeFRyYW5zbGF0ZSh0YXJnZXQsIHgsIGExMyAqIGNvcyAqIC16T3JpZ2luKTtcbiAgICB5ID0gX2FkZFB4VHJhbnNsYXRlKHRhcmdldCwgeSwgLU1hdGguc2luKGFuZ2xlKSAqIC16T3JpZ2luKTtcbiAgICB6ID0gX2FkZFB4VHJhbnNsYXRlKHRhcmdldCwgeiwgYTMzICogY29zICogLXpPcmlnaW4gKyB6T3JpZ2luKTtcbiAgfVxuXG4gIGlmICh0cmFuc2Zvcm1QZXJzcGVjdGl2ZSAhPT0gX3plcm9QeCkge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJwZXJzcGVjdGl2ZShcIiArIHRyYW5zZm9ybVBlcnNwZWN0aXZlICsgX2VuZFBhcmVudGhlc2lzO1xuICB9XG5cbiAgaWYgKHhQZXJjZW50IHx8IHlQZXJjZW50KSB7XG4gICAgdHJhbnNmb3JtcyArPSBcInRyYW5zbGF0ZShcIiArIHhQZXJjZW50ICsgXCIlLCBcIiArIHlQZXJjZW50ICsgXCIlKSBcIjtcbiAgfVxuXG4gIGlmICh1c2UzRCB8fCB4ICE9PSBfemVyb1B4IHx8IHkgIT09IF96ZXJvUHggfHwgeiAhPT0gX3plcm9QeCkge1xuICAgIHRyYW5zZm9ybXMgKz0geiAhPT0gX3plcm9QeCB8fCB1c2UzRCA/IFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCIsIFwiICsgeSArIFwiLCBcIiArIHogKyBcIikgXCIgOiBcInRyYW5zbGF0ZShcIiArIHggKyBcIiwgXCIgKyB5ICsgX2VuZFBhcmVudGhlc2lzO1xuICB9XG5cbiAgaWYgKHJvdGF0aW9uICE9PSBfemVyb0RlZykge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJyb3RhdGUoXCIgKyByb3RhdGlvbiArIF9lbmRQYXJlbnRoZXNpcztcbiAgfVxuXG4gIGlmIChyb3RhdGlvblkgIT09IF96ZXJvRGVnKSB7XG4gICAgdHJhbnNmb3JtcyArPSBcInJvdGF0ZVkoXCIgKyByb3RhdGlvblkgKyBfZW5kUGFyZW50aGVzaXM7XG4gIH1cblxuICBpZiAocm90YXRpb25YICE9PSBfemVyb0RlZykge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJyb3RhdGVYKFwiICsgcm90YXRpb25YICsgX2VuZFBhcmVudGhlc2lzO1xuICB9XG5cbiAgaWYgKHNrZXdYICE9PSBfemVyb0RlZyB8fCBza2V3WSAhPT0gX3plcm9EZWcpIHtcbiAgICB0cmFuc2Zvcm1zICs9IFwic2tldyhcIiArIHNrZXdYICsgXCIsIFwiICsgc2tld1kgKyBfZW5kUGFyZW50aGVzaXM7XG4gIH1cblxuICBpZiAoc2NhbGVYICE9PSAxIHx8IHNjYWxlWSAhPT0gMSkge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJzY2FsZShcIiArIHNjYWxlWCArIFwiLCBcIiArIHNjYWxlWSArIF9lbmRQYXJlbnRoZXNpcztcbiAgfVxuXG4gIHRhcmdldC5zdHlsZVtfdHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm1zIHx8IFwidHJhbnNsYXRlKDAsIDApXCI7XG59LFxuICAgIF9yZW5kZXJTVkdUcmFuc2Zvcm1zID0gZnVuY3Rpb24gX3JlbmRlclNWR1RyYW5zZm9ybXMocmF0aW8sIGNhY2hlKSB7XG4gIHZhciBfcmVmMiA9IGNhY2hlIHx8IHRoaXMsXG4gICAgICB4UGVyY2VudCA9IF9yZWYyLnhQZXJjZW50LFxuICAgICAgeVBlcmNlbnQgPSBfcmVmMi55UGVyY2VudCxcbiAgICAgIHggPSBfcmVmMi54LFxuICAgICAgeSA9IF9yZWYyLnksXG4gICAgICByb3RhdGlvbiA9IF9yZWYyLnJvdGF0aW9uLFxuICAgICAgc2tld1ggPSBfcmVmMi5za2V3WCxcbiAgICAgIHNrZXdZID0gX3JlZjIuc2tld1ksXG4gICAgICBzY2FsZVggPSBfcmVmMi5zY2FsZVgsXG4gICAgICBzY2FsZVkgPSBfcmVmMi5zY2FsZVksXG4gICAgICB0YXJnZXQgPSBfcmVmMi50YXJnZXQsXG4gICAgICB4T3JpZ2luID0gX3JlZjIueE9yaWdpbixcbiAgICAgIHlPcmlnaW4gPSBfcmVmMi55T3JpZ2luLFxuICAgICAgeE9mZnNldCA9IF9yZWYyLnhPZmZzZXQsXG4gICAgICB5T2Zmc2V0ID0gX3JlZjIueU9mZnNldCxcbiAgICAgIGZvcmNlQ1NTID0gX3JlZjIuZm9yY2VDU1MsXG4gICAgICB0eCA9IHBhcnNlRmxvYXQoeCksXG4gICAgICB0eSA9IHBhcnNlRmxvYXQoeSksXG4gICAgICBhMTEsXG4gICAgICBhMjEsXG4gICAgICBhMTIsXG4gICAgICBhMjIsXG4gICAgICB0ZW1wO1xuXG4gIHJvdGF0aW9uID0gcGFyc2VGbG9hdChyb3RhdGlvbik7XG4gIHNrZXdYID0gcGFyc2VGbG9hdChza2V3WCk7XG4gIHNrZXdZID0gcGFyc2VGbG9hdChza2V3WSk7XG5cbiAgaWYgKHNrZXdZKSB7XG4gICAgLy9mb3IgcGVyZm9ybWFuY2UgcmVhc29ucywgd2UgY29tYmluZSBhbGwgc2tld2luZyBpbnRvIHRoZSBza2V3WCBhbmQgcm90YXRpb24gdmFsdWVzLiBSZW1lbWJlciwgYSBza2V3WSBvZiAxMCBkZWdyZWVzIGxvb2tzIHRoZSBzYW1lIGFzIGEgcm90YXRpb24gb2YgMTAgZGVncmVlcyBwbHVzIGEgc2tld1ggb2YgMTAgZGVncmVlcy5cbiAgICBza2V3WSA9IHBhcnNlRmxvYXQoc2tld1kpO1xuICAgIHNrZXdYICs9IHNrZXdZO1xuICAgIHJvdGF0aW9uICs9IHNrZXdZO1xuICB9XG5cbiAgaWYgKHJvdGF0aW9uIHx8IHNrZXdYKSB7XG4gICAgcm90YXRpb24gKj0gX0RFRzJSQUQ7XG4gICAgc2tld1ggKj0gX0RFRzJSQUQ7XG4gICAgYTExID0gTWF0aC5jb3Mocm90YXRpb24pICogc2NhbGVYO1xuICAgIGEyMSA9IE1hdGguc2luKHJvdGF0aW9uKSAqIHNjYWxlWDtcbiAgICBhMTIgPSBNYXRoLnNpbihyb3RhdGlvbiAtIHNrZXdYKSAqIC1zY2FsZVk7XG4gICAgYTIyID0gTWF0aC5jb3Mocm90YXRpb24gLSBza2V3WCkgKiBzY2FsZVk7XG5cbiAgICBpZiAoc2tld1gpIHtcbiAgICAgIHNrZXdZICo9IF9ERUcyUkFEO1xuICAgICAgdGVtcCA9IE1hdGgudGFuKHNrZXdYIC0gc2tld1kpO1xuICAgICAgdGVtcCA9IE1hdGguc3FydCgxICsgdGVtcCAqIHRlbXApO1xuICAgICAgYTEyICo9IHRlbXA7XG4gICAgICBhMjIgKj0gdGVtcDtcblxuICAgICAgaWYgKHNrZXdZKSB7XG4gICAgICAgIHRlbXAgPSBNYXRoLnRhbihza2V3WSk7XG4gICAgICAgIHRlbXAgPSBNYXRoLnNxcnQoMSArIHRlbXAgKiB0ZW1wKTtcbiAgICAgICAgYTExICo9IHRlbXA7XG4gICAgICAgIGEyMSAqPSB0ZW1wO1xuICAgICAgfVxuICAgIH1cblxuICAgIGExMSA9IF9yb3VuZChhMTEpO1xuICAgIGEyMSA9IF9yb3VuZChhMjEpO1xuICAgIGExMiA9IF9yb3VuZChhMTIpO1xuICAgIGEyMiA9IF9yb3VuZChhMjIpO1xuICB9IGVsc2Uge1xuICAgIGExMSA9IHNjYWxlWDtcbiAgICBhMjIgPSBzY2FsZVk7XG4gICAgYTIxID0gYTEyID0gMDtcbiAgfVxuXG4gIGlmICh0eCAmJiAhfih4ICsgXCJcIikuaW5kZXhPZihcInB4XCIpIHx8IHR5ICYmICF+KHkgKyBcIlwiKS5pbmRleE9mKFwicHhcIikpIHtcbiAgICB0eCA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgXCJ4XCIsIHgsIFwicHhcIik7XG4gICAgdHkgPSBfY29udmVydFRvVW5pdCh0YXJnZXQsIFwieVwiLCB5LCBcInB4XCIpO1xuICB9XG5cbiAgaWYgKHhPcmlnaW4gfHwgeU9yaWdpbiB8fCB4T2Zmc2V0IHx8IHlPZmZzZXQpIHtcbiAgICB0eCA9IF9yb3VuZCh0eCArIHhPcmlnaW4gLSAoeE9yaWdpbiAqIGExMSArIHlPcmlnaW4gKiBhMTIpICsgeE9mZnNldCk7XG4gICAgdHkgPSBfcm91bmQodHkgKyB5T3JpZ2luIC0gKHhPcmlnaW4gKiBhMjEgKyB5T3JpZ2luICogYTIyKSArIHlPZmZzZXQpO1xuICB9XG5cbiAgaWYgKHhQZXJjZW50IHx8IHlQZXJjZW50KSB7XG4gICAgLy9UaGUgU1ZHIHNwZWMgZG9lc24ndCBzdXBwb3J0IHBlcmNlbnRhZ2UtYmFzZWQgdHJhbnNsYXRpb24gaW4gdGhlIFwidHJhbnNmb3JtXCIgYXR0cmlidXRlLCBzbyB3ZSBtZXJnZSBpdCBpbnRvIHRoZSB0cmFuc2xhdGlvbiB0byBzaW11bGF0ZSBpdC5cbiAgICB0ZW1wID0gdGFyZ2V0LmdldEJCb3goKTtcbiAgICB0eCA9IF9yb3VuZCh0eCArIHhQZXJjZW50IC8gMTAwICogdGVtcC53aWR0aCk7XG4gICAgdHkgPSBfcm91bmQodHkgKyB5UGVyY2VudCAvIDEwMCAqIHRlbXAuaGVpZ2h0KTtcbiAgfVxuXG4gIHRlbXAgPSBcIm1hdHJpeChcIiArIGExMSArIFwiLFwiICsgYTIxICsgXCIsXCIgKyBhMTIgKyBcIixcIiArIGEyMiArIFwiLFwiICsgdHggKyBcIixcIiArIHR5ICsgXCIpXCI7XG4gIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgdGVtcCk7XG4gIGZvcmNlQ1NTICYmICh0YXJnZXQuc3R5bGVbX3RyYW5zZm9ybVByb3BdID0gdGVtcCk7IC8vc29tZSBicm93c2VycyBwcmlvcml0aXplIENTUyB0cmFuc2Zvcm1zIG92ZXIgdGhlIHRyYW5zZm9ybSBhdHRyaWJ1dGUuIFdoZW4gd2Ugc2Vuc2UgdGhhdCB0aGUgdXNlciBoYXMgQ1NTIHRyYW5zZm9ybXMgYXBwbGllZCwgd2UgbXVzdCBvdmVyd3JpdGUgdGhlbSB0aGlzIHdheSAob3RoZXJ3aXNlIHNvbWUgYnJvd3NlciBzaW1wbHkgd29uJ3QgcmVuZGVyIHRoZSAgdHJhbnNmb3JtIGF0dHJpYnV0ZSBjaGFuZ2VzISlcbn0sXG4gICAgX2FkZFJvdGF0aW9uYWxQcm9wVHdlZW4gPSBmdW5jdGlvbiBfYWRkUm90YXRpb25hbFByb3BUd2VlbihwbHVnaW4sIHRhcmdldCwgcHJvcGVydHksIHN0YXJ0TnVtLCBlbmRWYWx1ZSwgcmVsYXRpdmUpIHtcbiAgdmFyIGNhcCA9IDM2MCxcbiAgICAgIGlzU3RyaW5nID0gX2lzU3RyaW5nKGVuZFZhbHVlKSxcbiAgICAgIGVuZE51bSA9IHBhcnNlRmxvYXQoZW5kVmFsdWUpICogKGlzU3RyaW5nICYmIH5lbmRWYWx1ZS5pbmRleE9mKFwicmFkXCIpID8gX1JBRDJERUcgOiAxKSxcbiAgICAgIGNoYW5nZSA9IHJlbGF0aXZlID8gZW5kTnVtICogcmVsYXRpdmUgOiBlbmROdW0gLSBzdGFydE51bSxcbiAgICAgIGZpbmFsVmFsdWUgPSBzdGFydE51bSArIGNoYW5nZSArIFwiZGVnXCIsXG4gICAgICBkaXJlY3Rpb24sXG4gICAgICBwdDtcblxuICBpZiAoaXNTdHJpbmcpIHtcbiAgICBkaXJlY3Rpb24gPSBlbmRWYWx1ZS5zcGxpdChcIl9cIilbMV07XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSBcInNob3J0XCIpIHtcbiAgICAgIGNoYW5nZSAlPSBjYXA7XG5cbiAgICAgIGlmIChjaGFuZ2UgIT09IGNoYW5nZSAlIChjYXAgLyAyKSkge1xuICAgICAgICBjaGFuZ2UgKz0gY2hhbmdlIDwgMCA/IGNhcCA6IC1jYXA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJjd1wiICYmIGNoYW5nZSA8IDApIHtcbiAgICAgIGNoYW5nZSA9IChjaGFuZ2UgKyBjYXAgKiBfYmlnTnVtKSAlIGNhcCAtIH5+KGNoYW5nZSAvIGNhcCkgKiBjYXA7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwiY2N3XCIgJiYgY2hhbmdlID4gMCkge1xuICAgICAgY2hhbmdlID0gKGNoYW5nZSAtIGNhcCAqIF9iaWdOdW0pICUgY2FwIC0gfn4oY2hhbmdlIC8gY2FwKSAqIGNhcDtcbiAgICB9XG4gIH1cblxuICBwbHVnaW4uX3B0ID0gcHQgPSBuZXcgUHJvcFR3ZWVuKHBsdWdpbi5fcHQsIHRhcmdldCwgcHJvcGVydHksIHN0YXJ0TnVtLCBjaGFuZ2UsIF9yZW5kZXJQcm9wV2l0aEVuZCk7XG4gIHB0LmUgPSBmaW5hbFZhbHVlO1xuICBwdC51ID0gXCJkZWdcIjtcblxuICBwbHVnaW4uX3Byb3BzLnB1c2gocHJvcGVydHkpO1xuXG4gIHJldHVybiBwdDtcbn0sXG4gICAgX2Fzc2lnbiA9IGZ1bmN0aW9uIF9hc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHtcbiAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgZG9lc24ndCBoYXZlIE9iamVjdC5hc3NpZ24oKSwgc28gd2UgcmVjcmVhdGUgaXQgaGVyZS5cbiAgZm9yICh2YXIgcCBpbiBzb3VyY2UpIHtcbiAgICB0YXJnZXRbcF0gPSBzb3VyY2VbcF07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSxcbiAgICBfYWRkUmF3VHJhbnNmb3JtUFRzID0gZnVuY3Rpb24gX2FkZFJhd1RyYW5zZm9ybVBUcyhwbHVnaW4sIHRyYW5zZm9ybXMsIHRhcmdldCkge1xuICAvL2ZvciBoYW5kbGluZyBjYXNlcyB3aGVyZSBzb21lb25lIHBhc3NlcyBpbiBhIHdob2xlIHRyYW5zZm9ybSBzdHJpbmcsIGxpa2UgdHJhbnNmb3JtOiBcInNjYWxlKDIsIDMpIHJvdGF0ZSgyMGRlZykgdHJhbnNsYXRlWSgzMGVtKVwiXG4gIHZhciBzdGFydENhY2hlID0gX2Fzc2lnbih7fSwgdGFyZ2V0Ll9nc2FwKSxcbiAgICAgIGV4Y2x1ZGUgPSBcInBlcnNwZWN0aXZlLGZvcmNlM0QsdHJhbnNmb3JtT3JpZ2luLHN2Z09yaWdpblwiLFxuICAgICAgc3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gICAgICBlbmRDYWNoZSxcbiAgICAgIHAsXG4gICAgICBzdGFydFZhbHVlLFxuICAgICAgZW5kVmFsdWUsXG4gICAgICBzdGFydE51bSxcbiAgICAgIGVuZE51bSxcbiAgICAgIHN0YXJ0VW5pdCxcbiAgICAgIGVuZFVuaXQ7XG5cbiAgaWYgKHN0YXJ0Q2FjaGUuc3ZnKSB7XG4gICAgc3RhcnRWYWx1ZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIik7XG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcIlwiKTtcbiAgICBzdHlsZVtfdHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm1zO1xuICAgIGVuZENhY2hlID0gX3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgMSk7XG5cbiAgICBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBfdHJhbnNmb3JtUHJvcCk7XG5cbiAgICB0YXJnZXQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIHN0YXJ0VmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHN0YXJ0VmFsdWUgPSBnZXRDb21wdXRlZFN0eWxlKHRhcmdldClbX3RyYW5zZm9ybVByb3BdO1xuICAgIHN0eWxlW190cmFuc2Zvcm1Qcm9wXSA9IHRyYW5zZm9ybXM7XG4gICAgZW5kQ2FjaGUgPSBfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0LCAxKTtcbiAgICBzdHlsZVtfdHJhbnNmb3JtUHJvcF0gPSBzdGFydFZhbHVlO1xuICB9XG5cbiAgZm9yIChwIGluIF90cmFuc2Zvcm1Qcm9wcykge1xuICAgIHN0YXJ0VmFsdWUgPSBzdGFydENhY2hlW3BdO1xuICAgIGVuZFZhbHVlID0gZW5kQ2FjaGVbcF07XG5cbiAgICBpZiAoc3RhcnRWYWx1ZSAhPT0gZW5kVmFsdWUgJiYgZXhjbHVkZS5pbmRleE9mKHApIDwgMCkge1xuICAgICAgLy90d2VlbmluZyB0byBubyBwZXJzcGVjdGl2ZSBnaXZlcyB2ZXJ5IHVuaW50dWl0aXZlIHJlc3VsdHMgLSBqdXN0IGtlZXAgdGhlIHNhbWUgcGVyc3BlY3RpdmUgaW4gdGhhdCBjYXNlLlxuICAgICAgc3RhcnRVbml0ID0gZ2V0VW5pdChzdGFydFZhbHVlKTtcbiAgICAgIGVuZFVuaXQgPSBnZXRVbml0KGVuZFZhbHVlKTtcbiAgICAgIHN0YXJ0TnVtID0gc3RhcnRVbml0ICE9PSBlbmRVbml0ID8gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBwLCBzdGFydFZhbHVlLCBlbmRVbml0KSA6IHBhcnNlRmxvYXQoc3RhcnRWYWx1ZSk7XG4gICAgICBlbmROdW0gPSBwYXJzZUZsb2F0KGVuZFZhbHVlKTtcbiAgICAgIHBsdWdpbi5fcHQgPSBuZXcgUHJvcFR3ZWVuKHBsdWdpbi5fcHQsIGVuZENhY2hlLCBwLCBzdGFydE51bSwgZW5kTnVtIC0gc3RhcnROdW0sIF9yZW5kZXJDU1NQcm9wKTtcbiAgICAgIHBsdWdpbi5fcHQudSA9IGVuZFVuaXQgfHwgMDtcblxuICAgICAgcGx1Z2luLl9wcm9wcy5wdXNoKHApO1xuICAgIH1cbiAgfVxuXG4gIF9hc3NpZ24oZW5kQ2FjaGUsIHN0YXJ0Q2FjaGUpO1xufTsgLy8gaGFuZGxlIHNwbGl0dGluZyBhcGFydCBwYWRkaW5nLCBtYXJnaW4sIGJvcmRlcldpZHRoLCBhbmQgYm9yZGVyUmFkaXVzIGludG8gdGhlaXIgNCBjb21wb25lbnRzLiBGaXJlZm94LCBmb3IgZXhhbXBsZSwgd29uJ3QgcmVwb3J0IGJvcmRlclJhZGl1cyBjb3JyZWN0bHkgLSBpdCB3aWxsIG9ubHkgZG8gYm9yZGVyVG9wTGVmdFJhZGl1cyBhbmQgdGhlIG90aGVyIGNvcm5lcnMuIFdlIGFsc28gd2FudCB0byBoYW5kbGUgcGFkZGluZ1RvcCwgbWFyZ2luTGVmdCwgYm9yZGVyUmlnaHRXaWR0aCwgZXRjLlxuXG5cbl9mb3JFYWNoTmFtZShcInBhZGRpbmcsbWFyZ2luLFdpZHRoLFJhZGl1c1wiLCBmdW5jdGlvbiAobmFtZSwgaW5kZXgpIHtcbiAgdmFyIHQgPSBcIlRvcFwiLFxuICAgICAgciA9IFwiUmlnaHRcIixcbiAgICAgIGIgPSBcIkJvdHRvbVwiLFxuICAgICAgbCA9IFwiTGVmdFwiLFxuICAgICAgcHJvcHMgPSAoaW5kZXggPCAzID8gW3QsIHIsIGIsIGxdIDogW3QgKyBsLCB0ICsgciwgYiArIHIsIGIgKyBsXSkubWFwKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgcmV0dXJuIGluZGV4IDwgMiA/IG5hbWUgKyBzaWRlIDogXCJib3JkZXJcIiArIHNpZGUgKyBuYW1lO1xuICB9KTtcblxuICBfc3BlY2lhbFByb3BzW2luZGV4ID4gMSA/IFwiYm9yZGVyXCIgKyBuYW1lIDogbmFtZV0gPSBmdW5jdGlvbiAocGx1Z2luLCB0YXJnZXQsIHByb3BlcnR5LCBlbmRWYWx1ZSwgdHdlZW4pIHtcbiAgICB2YXIgYSwgdmFycztcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgNCkge1xuICAgICAgLy8gZ2V0dGVyLCBwYXNzZWQgdGFyZ2V0LCBwcm9wZXJ0eSwgYW5kIHVuaXQgKGZyb20gX2dldCgpKVxuICAgICAgYSA9IHByb3BzLm1hcChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICByZXR1cm4gX2dldChwbHVnaW4sIHByb3AsIHByb3BlcnR5KTtcbiAgICAgIH0pO1xuICAgICAgdmFycyA9IGEuam9pbihcIiBcIik7XG4gICAgICByZXR1cm4gdmFycy5zcGxpdChhWzBdKS5sZW5ndGggPT09IDUgPyBhWzBdIDogdmFycztcbiAgICB9XG5cbiAgICBhID0gKGVuZFZhbHVlICsgXCJcIikuc3BsaXQoXCIgXCIpO1xuICAgIHZhcnMgPSB7fTtcbiAgICBwcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wLCBpKSB7XG4gICAgICByZXR1cm4gdmFyc1twcm9wXSA9IGFbaV0gPSBhW2ldIHx8IGFbKGkgLSAxKSAvIDIgfCAwXTtcbiAgICB9KTtcbiAgICBwbHVnaW4uaW5pdCh0YXJnZXQsIHZhcnMsIHR3ZWVuKTtcbiAgfTtcbn0pO1xuXG5leHBvcnQgdmFyIENTU1BsdWdpbiA9IHtcbiAgbmFtZTogXCJjc3NcIixcbiAgcmVnaXN0ZXI6IF9pbml0Q29yZSxcbiAgdGFyZ2V0VGVzdDogZnVuY3Rpb24gdGFyZ2V0VGVzdCh0YXJnZXQpIHtcbiAgICByZXR1cm4gdGFyZ2V0LnN0eWxlICYmIHRhcmdldC5ub2RlVHlwZTtcbiAgfSxcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCh0YXJnZXQsIHZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0cykge1xuICAgIHZhciBwcm9wcyA9IHRoaXMuX3Byb3BzLFxuICAgICAgICBzdHlsZSA9IHRhcmdldC5zdHlsZSxcbiAgICAgICAgc3RhcnRBdCA9IHR3ZWVuLnZhcnMuc3RhcnRBdCxcbiAgICAgICAgc3RhcnRWYWx1ZSxcbiAgICAgICAgZW5kVmFsdWUsXG4gICAgICAgIGVuZE51bSxcbiAgICAgICAgc3RhcnROdW0sXG4gICAgICAgIHR5cGUsXG4gICAgICAgIHNwZWNpYWxQcm9wLFxuICAgICAgICBwLFxuICAgICAgICBzdGFydFVuaXQsXG4gICAgICAgIGVuZFVuaXQsXG4gICAgICAgIHJlbGF0aXZlLFxuICAgICAgICBpc1RyYW5zZm9ybVJlbGF0ZWQsXG4gICAgICAgIHRyYW5zZm9ybVByb3BUd2VlbixcbiAgICAgICAgY2FjaGUsXG4gICAgICAgIHNtb290aCxcbiAgICAgICAgaGFzUHJpb3JpdHk7XG4gICAgX3BsdWdpbkluaXR0ZWQgfHwgX2luaXRDb3JlKCk7XG5cbiAgICBmb3IgKHAgaW4gdmFycykge1xuICAgICAgaWYgKHAgPT09IFwiYXV0b1JvdW5kXCIpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGVuZFZhbHVlID0gdmFyc1twXTtcblxuICAgICAgaWYgKF9wbHVnaW5zW3BdICYmIF9jaGVja1BsdWdpbihwLCB2YXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cykpIHtcbiAgICAgICAgLy8gcGx1Z2luc1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdHlwZSA9IHR5cGVvZiBlbmRWYWx1ZTtcbiAgICAgIHNwZWNpYWxQcm9wID0gX3NwZWNpYWxQcm9wc1twXTtcblxuICAgICAgaWYgKHR5cGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBlbmRWYWx1ZSA9IGVuZFZhbHVlLmNhbGwodHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpO1xuICAgICAgICB0eXBlID0gdHlwZW9mIGVuZFZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZSA9PT0gXCJzdHJpbmdcIiAmJiB+ZW5kVmFsdWUuaW5kZXhPZihcInJhbmRvbShcIikpIHtcbiAgICAgICAgZW5kVmFsdWUgPSBfcmVwbGFjZVJhbmRvbShlbmRWYWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzcGVjaWFsUHJvcCkge1xuICAgICAgICBzcGVjaWFsUHJvcCh0aGlzLCB0YXJnZXQsIHAsIGVuZFZhbHVlLCB0d2VlbikgJiYgKGhhc1ByaW9yaXR5ID0gMSk7XG4gICAgICB9IGVsc2UgaWYgKHAuc3Vic3RyKDAsIDIpID09PSBcIi0tXCIpIHtcbiAgICAgICAgLy9DU1MgdmFyaWFibGVcbiAgICAgICAgc3RhcnRWYWx1ZSA9IChnZXRDb21wdXRlZFN0eWxlKHRhcmdldCkuZ2V0UHJvcGVydHlWYWx1ZShwKSArIFwiXCIpLnRyaW0oKTtcbiAgICAgICAgZW5kVmFsdWUgKz0gXCJcIjtcbiAgICAgICAgX2NvbG9yRXhwLmxhc3RJbmRleCA9IDA7XG5cbiAgICAgICAgaWYgKCFfY29sb3JFeHAudGVzdChzdGFydFZhbHVlKSkge1xuICAgICAgICAgIC8vIGNvbG9ycyBkb24ndCBoYXZlIHVuaXRzXG4gICAgICAgICAgc3RhcnRVbml0ID0gZ2V0VW5pdChzdGFydFZhbHVlKTtcbiAgICAgICAgICBlbmRVbml0ID0gZ2V0VW5pdChlbmRWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbmRVbml0ID8gc3RhcnRVbml0ICE9PSBlbmRVbml0ICYmIChzdGFydFZhbHVlID0gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBwLCBzdGFydFZhbHVlLCBlbmRVbml0KSArIGVuZFVuaXQpIDogc3RhcnRVbml0ICYmIChlbmRWYWx1ZSArPSBzdGFydFVuaXQpO1xuICAgICAgICB0aGlzLmFkZChzdHlsZSwgXCJzZXRQcm9wZXJ0eVwiLCBzdGFydFZhbHVlLCBlbmRWYWx1ZSwgaW5kZXgsIHRhcmdldHMsIDAsIDAsIHApO1xuICAgICAgICBwcm9wcy5wdXNoKHApO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmIChzdGFydEF0ICYmIHAgaW4gc3RhcnRBdCkge1xuICAgICAgICAgIC8vIGluIGNhc2Ugc29tZW9uZSBoYXJkLWNvZGVzIGEgY29tcGxleCB2YWx1ZSBhcyB0aGUgc3RhcnQsIGxpa2UgdG9wOiBcImNhbGMoMnZoIC8gMilcIi4gV2l0aG91dCB0aGlzLCBpdCdkIHVzZSB0aGUgY29tcHV0ZWQgdmFsdWUgKGFsd2F5cyBpbiBweClcbiAgICAgICAgICBzdGFydFZhbHVlID0gdHlwZW9mIHN0YXJ0QXRbcF0gPT09IFwiZnVuY3Rpb25cIiA/IHN0YXJ0QXRbcF0uY2FsbCh0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cykgOiBzdGFydEF0W3BdO1xuICAgICAgICAgIHAgaW4gX2NvbmZpZy51bml0cyAmJiAhZ2V0VW5pdChzdGFydFZhbHVlKSAmJiAoc3RhcnRWYWx1ZSArPSBfY29uZmlnLnVuaXRzW3BdKTsgLy8gZm9yIGNhc2VzIHdoZW4gc29tZW9uZSBwYXNzZXMgaW4gYSB1bml0bGVzcyB2YWx1ZSBsaWtlIHt4OiAxMDB9OyBpZiB3ZSB0cnkgc2V0dGluZyB0cmFuc2xhdGUoMTAwLCAwcHgpIGl0IHdvbid0IHdvcmsuXG5cbiAgICAgICAgICBfaXNTdHJpbmcoc3RhcnRWYWx1ZSkgJiYgfnN0YXJ0VmFsdWUuaW5kZXhPZihcInJhbmRvbShcIikgJiYgKHN0YXJ0VmFsdWUgPSBfcmVwbGFjZVJhbmRvbShzdGFydFZhbHVlKSk7XG4gICAgICAgICAgKHN0YXJ0VmFsdWUgKyBcIlwiKS5jaGFyQXQoMSkgPT09IFwiPVwiICYmIChzdGFydFZhbHVlID0gX2dldCh0YXJnZXQsIHApKTsgLy8gY2FuJ3Qgd29yayB3aXRoIHJlbGF0aXZlIHZhbHVlc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXJ0VmFsdWUgPSBfZ2V0KHRhcmdldCwgcCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGFydE51bSA9IHBhcnNlRmxvYXQoc3RhcnRWYWx1ZSk7XG4gICAgICAgIHJlbGF0aXZlID0gdHlwZSA9PT0gXCJzdHJpbmdcIiAmJiBlbmRWYWx1ZS5jaGFyQXQoMSkgPT09IFwiPVwiID8gKyhlbmRWYWx1ZS5jaGFyQXQoMCkgKyBcIjFcIikgOiAwO1xuICAgICAgICByZWxhdGl2ZSAmJiAoZW5kVmFsdWUgPSBlbmRWYWx1ZS5zdWJzdHIoMikpO1xuICAgICAgICBlbmROdW0gPSBwYXJzZUZsb2F0KGVuZFZhbHVlKTtcblxuICAgICAgICBpZiAocCBpbiBfcHJvcGVydHlBbGlhc2VzKSB7XG4gICAgICAgICAgaWYgKHAgPT09IFwiYXV0b0FscGhhXCIpIHtcbiAgICAgICAgICAgIC8vc3BlY2lhbCBjYXNlIHdoZXJlIHdlIGNvbnRyb2wgdGhlIHZpc2liaWxpdHkgYWxvbmcgd2l0aCBvcGFjaXR5LiBXZSBzdGlsbCBhbGxvdyB0aGUgb3BhY2l0eSB2YWx1ZSB0byBwYXNzIHRocm91Z2ggYW5kIGdldCB0d2VlbmVkLlxuICAgICAgICAgICAgaWYgKHN0YXJ0TnVtID09PSAxICYmIF9nZXQodGFyZ2V0LCBcInZpc2liaWxpdHlcIikgPT09IFwiaGlkZGVuXCIgJiYgZW5kTnVtKSB7XG4gICAgICAgICAgICAgIC8vaWYgdmlzaWJpbGl0eSBpcyBpbml0aWFsbHkgc2V0IHRvIFwiaGlkZGVuXCIsIHdlIHNob3VsZCBpbnRlcnByZXQgdGhhdCBhcyBpbnRlbnQgdG8gbWFrZSBvcGFjaXR5IDAgKGEgY29udmVuaWVuY2UpXG4gICAgICAgICAgICAgIHN0YXJ0TnVtID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX2FkZE5vblR3ZWVuaW5nUFQodGhpcywgc3R5bGUsIFwidmlzaWJpbGl0eVwiLCBzdGFydE51bSA/IFwiaW5oZXJpdFwiIDogXCJoaWRkZW5cIiwgZW5kTnVtID8gXCJpbmhlcml0XCIgOiBcImhpZGRlblwiLCAhZW5kTnVtKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocCAhPT0gXCJzY2FsZVwiICYmIHAgIT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICAgICAgICAgIHAgPSBfcHJvcGVydHlBbGlhc2VzW3BdO1xuICAgICAgICAgICAgfnAuaW5kZXhPZihcIixcIikgJiYgKHAgPSBwLnNwbGl0KFwiLFwiKVswXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaXNUcmFuc2Zvcm1SZWxhdGVkID0gcCBpbiBfdHJhbnNmb3JtUHJvcHM7IC8vLS0tIFRSQU5TRk9STS1SRUxBVEVEIC0tLVxuXG4gICAgICAgIGlmIChpc1RyYW5zZm9ybVJlbGF0ZWQpIHtcbiAgICAgICAgICBpZiAoIXRyYW5zZm9ybVByb3BUd2Vlbikge1xuICAgICAgICAgICAgY2FjaGUgPSB0YXJnZXQuX2dzYXA7XG4gICAgICAgICAgICBjYWNoZS5yZW5kZXJUcmFuc2Zvcm0gJiYgIXZhcnMucGFyc2VUcmFuc2Zvcm0gfHwgX3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgdmFycy5wYXJzZVRyYW5zZm9ybSk7IC8vIGlmLCBmb3IgZXhhbXBsZSwgZ3NhcC5zZXQoLi4uIHt0cmFuc2Zvcm06XCJ0cmFuc2xhdGVYKDUwdncpXCJ9KSwgdGhlIF9nZXQoKSBjYWxsIGRvZXNuJ3QgcGFyc2UgdGhlIHRyYW5zZm9ybSwgdGh1cyBjYWNoZS5yZW5kZXJUcmFuc2Zvcm0gd29uJ3QgYmUgc2V0IHlldCBzbyBmb3JjZSB0aGUgcGFyc2luZyBvZiB0aGUgdHJhbnNmb3JtIGhlcmUuXG5cbiAgICAgICAgICAgIHNtb290aCA9IHZhcnMuc21vb3RoT3JpZ2luICE9PSBmYWxzZSAmJiBjYWNoZS5zbW9vdGg7XG4gICAgICAgICAgICB0cmFuc2Zvcm1Qcm9wVHdlZW4gPSB0aGlzLl9wdCA9IG5ldyBQcm9wVHdlZW4odGhpcy5fcHQsIHN0eWxlLCBfdHJhbnNmb3JtUHJvcCwgMCwgMSwgY2FjaGUucmVuZGVyVHJhbnNmb3JtLCBjYWNoZSwgMCwgLTEpOyAvL3RoZSBmaXJzdCB0aW1lIHRocm91Z2gsIGNyZWF0ZSB0aGUgcmVuZGVyaW5nIFByb3BUd2VlbiBzbyB0aGF0IGl0IHJ1bnMgTEFTVCAoaW4gdGhlIGxpbmtlZCBsaXN0LCB3ZSBrZWVwIGFkZGluZyB0byB0aGUgYmVnaW5uaW5nKVxuXG4gICAgICAgICAgICB0cmFuc2Zvcm1Qcm9wVHdlZW4uZGVwID0gMTsgLy9mbGFnIGl0IGFzIGRlcGVuZGVudCBzbyB0aGF0IGlmIHRoaW5ncyBnZXQga2lsbGVkL292ZXJ3cml0dGVuIGFuZCB0aGlzIGlzIHRoZSBvbmx5IFByb3BUd2VlbiBsZWZ0LCB3ZSBjYW4gc2FmZWx5IGtpbGwgdGhlIHdob2xlIHR3ZWVuLlxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwID09PSBcInNjYWxlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX3B0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgY2FjaGUsIFwic2NhbGVZXCIsIGNhY2hlLnNjYWxlWSwgKHJlbGF0aXZlID8gcmVsYXRpdmUgKiBlbmROdW0gOiBlbmROdW0gLSBjYWNoZS5zY2FsZVkpIHx8IDApO1xuICAgICAgICAgICAgcHJvcHMucHVzaChcInNjYWxlWVwiLCBwKTtcbiAgICAgICAgICAgIHAgKz0gXCJYXCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChwID09PSBcInRyYW5zZm9ybU9yaWdpblwiKSB7XG4gICAgICAgICAgICBlbmRWYWx1ZSA9IF9jb252ZXJ0S2V5d29yZHNUb1BlcmNlbnRhZ2VzKGVuZFZhbHVlKTsgLy9pbiBjYXNlIHNvbWV0aGluZyBsaWtlIFwibGVmdCB0b3BcIiBvciBcImJvdHRvbSByaWdodFwiIGlzIHBhc3NlZCBpbi4gQ29udmVydCB0byBwZXJjZW50YWdlcy5cblxuICAgICAgICAgICAgaWYgKGNhY2hlLnN2Zykge1xuICAgICAgICAgICAgICBfYXBwbHlTVkdPcmlnaW4odGFyZ2V0LCBlbmRWYWx1ZSwgMCwgc21vb3RoLCAwLCB0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVuZFVuaXQgPSBwYXJzZUZsb2F0KGVuZFZhbHVlLnNwbGl0KFwiIFwiKVsyXSkgfHwgMDsgLy9oYW5kbGUgdGhlIHpPcmlnaW4gc2VwYXJhdGVseSFcblxuICAgICAgICAgICAgICBlbmRVbml0ICE9PSBjYWNoZS56T3JpZ2luICYmIF9hZGROb25Ud2VlbmluZ1BUKHRoaXMsIGNhY2hlLCBcInpPcmlnaW5cIiwgY2FjaGUuek9yaWdpbiwgZW5kVW5pdCk7XG5cbiAgICAgICAgICAgICAgX2FkZE5vblR3ZWVuaW5nUFQodGhpcywgc3R5bGUsIHAsIF9maXJzdFR3b09ubHkoc3RhcnRWYWx1ZSksIF9maXJzdFR3b09ubHkoZW5kVmFsdWUpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwID09PSBcInN2Z09yaWdpblwiKSB7XG4gICAgICAgICAgICBfYXBwbHlTVkdPcmlnaW4odGFyZ2V0LCBlbmRWYWx1ZSwgMSwgc21vb3RoLCAwLCB0aGlzKTtcblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwIGluIF9yb3RhdGlvbmFsUHJvcGVydGllcykge1xuICAgICAgICAgICAgX2FkZFJvdGF0aW9uYWxQcm9wVHdlZW4odGhpcywgY2FjaGUsIHAsIHN0YXJ0TnVtLCBlbmRWYWx1ZSwgcmVsYXRpdmUpO1xuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHAgPT09IFwic21vb3RoT3JpZ2luXCIpIHtcbiAgICAgICAgICAgIF9hZGROb25Ud2VlbmluZ1BUKHRoaXMsIGNhY2hlLCBcInNtb290aFwiLCBjYWNoZS5zbW9vdGgsIGVuZFZhbHVlKTtcblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwID09PSBcImZvcmNlM0RcIikge1xuICAgICAgICAgICAgY2FjaGVbcF0gPSBlbmRWYWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gXCJ0cmFuc2Zvcm1cIikge1xuICAgICAgICAgICAgX2FkZFJhd1RyYW5zZm9ybVBUcyh0aGlzLCBlbmRWYWx1ZSwgdGFyZ2V0KTtcblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCEocCBpbiBzdHlsZSkpIHtcbiAgICAgICAgICBwID0gX2NoZWNrUHJvcFByZWZpeChwKSB8fCBwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzVHJhbnNmb3JtUmVsYXRlZCB8fCAoZW5kTnVtIHx8IGVuZE51bSA9PT0gMCkgJiYgKHN0YXJ0TnVtIHx8IHN0YXJ0TnVtID09PSAwKSAmJiAhX2NvbXBsZXhFeHAudGVzdChlbmRWYWx1ZSkgJiYgcCBpbiBzdHlsZSkge1xuICAgICAgICAgIHN0YXJ0VW5pdCA9IChzdGFydFZhbHVlICsgXCJcIikuc3Vic3RyKChzdGFydE51bSArIFwiXCIpLmxlbmd0aCk7XG4gICAgICAgICAgZW5kTnVtIHx8IChlbmROdW0gPSAwKTsgLy8gcHJvdGVjdCBhZ2FpbnN0IE5hTlxuXG4gICAgICAgICAgZW5kVW5pdCA9IGdldFVuaXQoZW5kVmFsdWUpIHx8IChwIGluIF9jb25maWcudW5pdHMgPyBfY29uZmlnLnVuaXRzW3BdIDogc3RhcnRVbml0KTtcbiAgICAgICAgICBzdGFydFVuaXQgIT09IGVuZFVuaXQgJiYgKHN0YXJ0TnVtID0gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBwLCBzdGFydFZhbHVlLCBlbmRVbml0KSk7XG4gICAgICAgICAgdGhpcy5fcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCBpc1RyYW5zZm9ybVJlbGF0ZWQgPyBjYWNoZSA6IHN0eWxlLCBwLCBzdGFydE51bSwgcmVsYXRpdmUgPyByZWxhdGl2ZSAqIGVuZE51bSA6IGVuZE51bSAtIHN0YXJ0TnVtLCAhaXNUcmFuc2Zvcm1SZWxhdGVkICYmIChlbmRVbml0ID09PSBcInB4XCIgfHwgcCA9PT0gXCJ6SW5kZXhcIikgJiYgdmFycy5hdXRvUm91bmQgIT09IGZhbHNlID8gX3JlbmRlclJvdW5kZWRDU1NQcm9wIDogX3JlbmRlckNTU1Byb3ApO1xuICAgICAgICAgIHRoaXMuX3B0LnUgPSBlbmRVbml0IHx8IDA7XG5cbiAgICAgICAgICBpZiAoc3RhcnRVbml0ICE9PSBlbmRVbml0ICYmIGVuZFVuaXQgIT09IFwiJVwiKSB7XG4gICAgICAgICAgICAvL3doZW4gdGhlIHR3ZWVuIGdvZXMgYWxsIHRoZSB3YXkgYmFjayB0byB0aGUgYmVnaW5uaW5nLCB3ZSBuZWVkIHRvIHJldmVydCBpdCB0byB0aGUgT0xEL09SSUdJTkFMIHZhbHVlICh3aXRoIHRob3NlIHVuaXRzKS4gV2UgcmVjb3JkIHRoYXQgYXMgYSBcImJcIiAoYmVnaW5uaW5nKSBwcm9wZXJ0eSBhbmQgcG9pbnQgdG8gYSByZW5kZXIgbWV0aG9kIHRoYXQgaGFuZGxlcyB0aGF0LiAocGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uKVxuICAgICAgICAgICAgdGhpcy5fcHQuYiA9IHN0YXJ0VmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9wdC5yID0gX3JlbmRlckNTU1Byb3BXaXRoQmVnaW5uaW5nO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghKHAgaW4gc3R5bGUpKSB7XG4gICAgICAgICAgaWYgKHAgaW4gdGFyZ2V0KSB7XG4gICAgICAgICAgICAvL21heWJlIGl0J3Mgbm90IGEgc3R5bGUgLSBpdCBjb3VsZCBiZSBhIHByb3BlcnR5IGFkZGVkIGRpcmVjdGx5IHRvIGFuIGVsZW1lbnQgaW4gd2hpY2ggY2FzZSB3ZSdsbCB0cnkgdG8gYW5pbWF0ZSB0aGF0LlxuICAgICAgICAgICAgdGhpcy5hZGQodGFyZ2V0LCBwLCBzdGFydFZhbHVlIHx8IHRhcmdldFtwXSwgZW5kVmFsdWUsIGluZGV4LCB0YXJnZXRzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX21pc3NpbmdQbHVnaW4ocCwgZW5kVmFsdWUpO1xuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3R3ZWVuQ29tcGxleENTU1N0cmluZy5jYWxsKHRoaXMsIHRhcmdldCwgcCwgc3RhcnRWYWx1ZSwgZW5kVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvcHMucHVzaChwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNQcmlvcml0eSAmJiBfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5KHRoaXMpO1xuICB9LFxuICBnZXQ6IF9nZXQsXG4gIGFsaWFzZXM6IF9wcm9wZXJ0eUFsaWFzZXMsXG4gIGdldFNldHRlcjogZnVuY3Rpb24gZ2V0U2V0dGVyKHRhcmdldCwgcHJvcGVydHksIHBsdWdpbikge1xuICAgIC8vcmV0dXJucyBhIHNldHRlciBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgdGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUgYW5kIGFwcGxpZXMgaXQgYWNjb3JkaW5nbHkuIFJlbWVtYmVyLCBwcm9wZXJ0aWVzIGxpa2UgXCJ4XCIgYXJlbid0IGFzIHNpbXBsZSBhcyB0YXJnZXQuc3R5bGUucHJvcGVydHkgPSB2YWx1ZSBiZWNhdXNlIHRoZXkndmUgZ290IHRvIGJlIGFwcGxpZWQgdG8gYSBwcm94eSBvYmplY3QgYW5kIHRoZW4gbWVyZ2VkIGludG8gYSB0cmFuc2Zvcm0gc3RyaW5nIGluIGEgcmVuZGVyZXIuXG4gICAgdmFyIHAgPSBfcHJvcGVydHlBbGlhc2VzW3Byb3BlcnR5XTtcbiAgICBwICYmIHAuaW5kZXhPZihcIixcIikgPCAwICYmIChwcm9wZXJ0eSA9IHApO1xuICAgIHJldHVybiBwcm9wZXJ0eSBpbiBfdHJhbnNmb3JtUHJvcHMgJiYgcHJvcGVydHkgIT09IF90cmFuc2Zvcm1PcmlnaW5Qcm9wICYmICh0YXJnZXQuX2dzYXAueCB8fCBfZ2V0KHRhcmdldCwgXCJ4XCIpKSA/IHBsdWdpbiAmJiBfcmVjZW50U2V0dGVyUGx1Z2luID09PSBwbHVnaW4gPyBwcm9wZXJ0eSA9PT0gXCJzY2FsZVwiID8gX3NldHRlclNjYWxlIDogX3NldHRlclRyYW5zZm9ybSA6IChfcmVjZW50U2V0dGVyUGx1Z2luID0gcGx1Z2luIHx8IHt9KSAmJiAocHJvcGVydHkgPT09IFwic2NhbGVcIiA/IF9zZXR0ZXJTY2FsZVdpdGhSZW5kZXIgOiBfc2V0dGVyVHJhbnNmb3JtV2l0aFJlbmRlcikgOiB0YXJnZXQuc3R5bGUgJiYgIV9pc1VuZGVmaW5lZCh0YXJnZXQuc3R5bGVbcHJvcGVydHldKSA/IF9zZXR0ZXJDU1NTdHlsZSA6IH5wcm9wZXJ0eS5pbmRleE9mKFwiLVwiKSA/IF9zZXR0ZXJDU1NQcm9wIDogX2dldFNldHRlcih0YXJnZXQsIHByb3BlcnR5KTtcbiAgfSxcbiAgY29yZToge1xuICAgIF9yZW1vdmVQcm9wZXJ0eTogX3JlbW92ZVByb3BlcnR5LFxuICAgIF9nZXRNYXRyaXg6IF9nZXRNYXRyaXhcbiAgfVxufTtcbmdzYXAudXRpbHMuY2hlY2tQcmVmaXggPSBfY2hlY2tQcm9wUHJlZml4O1xuXG4oZnVuY3Rpb24gKHBvc2l0aW9uQW5kU2NhbGUsIHJvdGF0aW9uLCBvdGhlcnMsIGFsaWFzZXMpIHtcbiAgdmFyIGFsbCA9IF9mb3JFYWNoTmFtZShwb3NpdGlvbkFuZFNjYWxlICsgXCIsXCIgKyByb3RhdGlvbiArIFwiLFwiICsgb3RoZXJzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgIF90cmFuc2Zvcm1Qcm9wc1tuYW1lXSA9IDE7XG4gIH0pO1xuXG4gIF9mb3JFYWNoTmFtZShyb3RhdGlvbiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBfY29uZmlnLnVuaXRzW25hbWVdID0gXCJkZWdcIjtcbiAgICBfcm90YXRpb25hbFByb3BlcnRpZXNbbmFtZV0gPSAxO1xuICB9KTtcblxuICBfcHJvcGVydHlBbGlhc2VzW2FsbFsxM11dID0gcG9zaXRpb25BbmRTY2FsZSArIFwiLFwiICsgcm90YXRpb247XG5cbiAgX2ZvckVhY2hOYW1lKGFsaWFzZXMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHNwbGl0ID0gbmFtZS5zcGxpdChcIjpcIik7XG4gICAgX3Byb3BlcnR5QWxpYXNlc1tzcGxpdFsxXV0gPSBhbGxbc3BsaXRbMF1dO1xuICB9KTtcbn0pKFwieCx5LHosc2NhbGUsc2NhbGVYLHNjYWxlWSx4UGVyY2VudCx5UGVyY2VudFwiLCBcInJvdGF0aW9uLHJvdGF0aW9uWCxyb3RhdGlvblksc2tld1gsc2tld1lcIiwgXCJ0cmFuc2Zvcm0sdHJhbnNmb3JtT3JpZ2luLHN2Z09yaWdpbixmb3JjZTNELHNtb290aE9yaWdpbix0cmFuc2Zvcm1QZXJzcGVjdGl2ZVwiLCBcIjA6dHJhbnNsYXRlWCwxOnRyYW5zbGF0ZVksMjp0cmFuc2xhdGVaLDg6cm90YXRlLDg6cm90YXRpb25aLDg6cm90YXRlWiw5OnJvdGF0ZVgsMTA6cm90YXRlWVwiKTtcblxuX2ZvckVhY2hOYW1lKFwieCx5LHosdG9wLHJpZ2h0LGJvdHRvbSxsZWZ0LHdpZHRoLGhlaWdodCxmb250U2l6ZSxwYWRkaW5nLG1hcmdpbixwZXJzcGVjdGl2ZVwiLCBmdW5jdGlvbiAobmFtZSkge1xuICBfY29uZmlnLnVuaXRzW25hbWVdID0gXCJweFwiO1xufSk7XG5cbmdzYXAucmVnaXN0ZXJQbHVnaW4oQ1NTUGx1Z2luKTtcbmV4cG9ydCB7IENTU1BsdWdpbiBhcyBkZWZhdWx0LCBfZ2V0QkJveCwgX2NyZWF0ZUVsZW1lbnQsIF9jaGVja1Byb3BQcmVmaXggYXMgY2hlY2tQcmVmaXggfTsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qIVxuICogR1NBUCAzLjguMFxuICogaHR0cHM6Ly9ncmVlbnNvY2suY29tXG4gKlxuICogQGxpY2Vuc2UgQ29weXJpZ2h0IDIwMDgtMjAyMSwgR3JlZW5Tb2NrLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogU3ViamVjdCB0byB0aGUgdGVybXMgYXQgaHR0cHM6Ly9ncmVlbnNvY2suY29tL3N0YW5kYXJkLWxpY2Vuc2Ugb3IgZm9yXG4gKiBDbHViIEdyZWVuU29jayBtZW1iZXJzLCB0aGUgYWdyZWVtZW50IGlzc3VlZCB3aXRoIHRoYXQgbWVtYmVyc2hpcC5cbiAqIEBhdXRob3I6IEphY2sgRG95bGUsIGphY2tAZ3JlZW5zb2NrLmNvbVxuKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cbnZhciBfY29uZmlnID0ge1xuICBhdXRvU2xlZXA6IDEyMCxcbiAgZm9yY2UzRDogXCJhdXRvXCIsXG4gIG51bGxUYXJnZXRXYXJuOiAxLFxuICB1bml0czoge1xuICAgIGxpbmVIZWlnaHQ6IFwiXCJcbiAgfVxufSxcbiAgICBfZGVmYXVsdHMgPSB7XG4gIGR1cmF0aW9uOiAuNSxcbiAgb3ZlcndyaXRlOiBmYWxzZSxcbiAgZGVsYXk6IDBcbn0sXG4gICAgX3N1cHByZXNzT3ZlcndyaXRlcyxcbiAgICBfYmlnTnVtID0gMWU4LFxuICAgIF90aW55TnVtID0gMSAvIF9iaWdOdW0sXG4gICAgXzJQSSA9IE1hdGguUEkgKiAyLFxuICAgIF9IQUxGX1BJID0gXzJQSSAvIDQsXG4gICAgX2dzSUQgPSAwLFxuICAgIF9zcXJ0ID0gTWF0aC5zcXJ0LFxuICAgIF9jb3MgPSBNYXRoLmNvcyxcbiAgICBfc2luID0gTWF0aC5zaW4sXG4gICAgX2lzU3RyaW5nID0gZnVuY3Rpb24gX2lzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCI7XG59LFxuICAgIF9pc0Z1bmN0aW9uID0gZnVuY3Rpb24gX2lzRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiO1xufSxcbiAgICBfaXNOdW1iZXIgPSBmdW5jdGlvbiBfaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIjtcbn0sXG4gICAgX2lzVW5kZWZpbmVkID0gZnVuY3Rpb24gX2lzVW5kZWZpbmVkKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCI7XG59LFxuICAgIF9pc09iamVjdCA9IGZ1bmN0aW9uIF9pc09iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiO1xufSxcbiAgICBfaXNOb3RGYWxzZSA9IGZ1bmN0aW9uIF9pc05vdEZhbHNlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gZmFsc2U7XG59LFxuICAgIF93aW5kb3dFeGlzdHMgPSBmdW5jdGlvbiBfd2luZG93RXhpc3RzKCkge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIjtcbn0sXG4gICAgX2lzRnVuY09yU3RyaW5nID0gZnVuY3Rpb24gX2lzRnVuY09yU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBfaXNGdW5jdGlvbih2YWx1ZSkgfHwgX2lzU3RyaW5nKHZhbHVlKTtcbn0sXG4gICAgX2lzVHlwZWRBcnJheSA9IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gXCJmdW5jdGlvblwiICYmIEFycmF5QnVmZmVyLmlzVmlldyB8fCBmdW5jdGlvbiAoKSB7fSxcbiAgICAvLyBub3RlOiBJRTEwIGhhcyBBcnJheUJ1ZmZlciwgYnV0IE5PVCBBcnJheUJ1ZmZlci5pc1ZpZXcoKS5cbl9pc0FycmF5ID0gQXJyYXkuaXNBcnJheSxcbiAgICBfc3RyaWN0TnVtRXhwID0gLyg/Oi0/XFwuP1xcZHxcXC4pKy9naSxcbiAgICAvL29ubHkgbnVtYmVycyAoaW5jbHVkaW5nIG5lZ2F0aXZlcyBhbmQgZGVjaW1hbHMpIGJ1dCBOT1QgcmVsYXRpdmUgdmFsdWVzLlxuX251bUV4cCA9IC9bLSs9Ll0qXFxkK1suZVxcLStdKlxcZCpbZVxcLStdKlxcZCovZyxcbiAgICAvL2ZpbmRzIGFueSBudW1iZXJzLCBpbmNsdWRpbmcgb25lcyB0aGF0IHN0YXJ0IHdpdGggKz0gb3IgLT0sIG5lZ2F0aXZlIG51bWJlcnMsIGFuZCBvbmVzIGluIHNjaWVudGlmaWMgbm90YXRpb24gbGlrZSAxZS04LlxuX251bVdpdGhVbml0RXhwID0gL1stKz0uXSpcXGQrWy5lLV0qXFxkKlthLXolXSovZyxcbiAgICBfY29tcGxleFN0cmluZ051bUV4cCA9IC9bLSs9Ll0qXFxkK1xcLj9cXGQqKD86ZS18ZVxcKyk/XFxkKi9naSxcbiAgICAvL2R1cGxpY2F0ZSBzbyB0aGF0IHdoaWxlIHdlJ3JlIGxvb3BpbmcgdGhyb3VnaCBtYXRjaGVzIGZyb20gZXhlYygpLCBpdCBkb2Vzbid0IGNvbnRhbWluYXRlIHRoZSBsYXN0SW5kZXggb2YgX251bUV4cCB3aGljaCB3ZSB1c2UgdG8gc2VhcmNoIGZvciBjb2xvcnMgdG9vLlxuX3JlbEV4cCA9IC9bKy1dPS0/Wy5cXGRdKy8sXG4gICAgX2RlbGltaXRlZFZhbHVlRXhwID0gL1teLCdcIlxcW1xcXVxcc10rL2dpLFxuICAgIC8vIHByZXZpb3VzbHkgL1sjXFwtKy5dKlxcYlthLXpcXGRcXC09KyUuXSsvZ2kgYnV0IGRpZG4ndCBjYXRjaCBzcGVjaWFsIGNoYXJhY3RlcnMuXG5fdW5pdEV4cCA9IC9bXFxkLitcXC09XSsoPzplWy0rXVxcZCopKi9pLFxuICAgIF9nbG9iYWxUaW1lbGluZSxcbiAgICBfd2luLFxuICAgIF9jb3JlSW5pdHRlZCxcbiAgICBfZG9jLFxuICAgIF9nbG9iYWxzID0ge30sXG4gICAgX2luc3RhbGxTY29wZSA9IHt9LFxuICAgIF9jb3JlUmVhZHksXG4gICAgX2luc3RhbGwgPSBmdW5jdGlvbiBfaW5zdGFsbChzY29wZSkge1xuICByZXR1cm4gKF9pbnN0YWxsU2NvcGUgPSBfbWVyZ2Uoc2NvcGUsIF9nbG9iYWxzKSkgJiYgZ3NhcDtcbn0sXG4gICAgX21pc3NpbmdQbHVnaW4gPSBmdW5jdGlvbiBfbWlzc2luZ1BsdWdpbihwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIGNvbnNvbGUud2FybihcIkludmFsaWQgcHJvcGVydHlcIiwgcHJvcGVydHksIFwic2V0IHRvXCIsIHZhbHVlLCBcIk1pc3NpbmcgcGx1Z2luPyBnc2FwLnJlZ2lzdGVyUGx1Z2luKClcIik7XG59LFxuICAgIF93YXJuID0gZnVuY3Rpb24gX3dhcm4obWVzc2FnZSwgc3VwcHJlc3MpIHtcbiAgcmV0dXJuICFzdXBwcmVzcyAmJiBjb25zb2xlLndhcm4obWVzc2FnZSk7XG59LFxuICAgIF9hZGRHbG9iYWwgPSBmdW5jdGlvbiBfYWRkR2xvYmFsKG5hbWUsIG9iaikge1xuICByZXR1cm4gbmFtZSAmJiAoX2dsb2JhbHNbbmFtZV0gPSBvYmopICYmIF9pbnN0YWxsU2NvcGUgJiYgKF9pbnN0YWxsU2NvcGVbbmFtZV0gPSBvYmopIHx8IF9nbG9iYWxzO1xufSxcbiAgICBfZW1wdHlGdW5jID0gZnVuY3Rpb24gX2VtcHR5RnVuYygpIHtcbiAgcmV0dXJuIDA7XG59LFxuICAgIF9yZXNlcnZlZFByb3BzID0ge30sXG4gICAgX2xhenlUd2VlbnMgPSBbXSxcbiAgICBfbGF6eUxvb2t1cCA9IHt9LFxuICAgIF9sYXN0UmVuZGVyZWRGcmFtZSxcbiAgICBfcGx1Z2lucyA9IHt9LFxuICAgIF9lZmZlY3RzID0ge30sXG4gICAgX25leHRHQ0ZyYW1lID0gMzAsXG4gICAgX2hhcm5lc3NQbHVnaW5zID0gW10sXG4gICAgX2NhbGxiYWNrTmFtZXMgPSBcIlwiLFxuICAgIF9oYXJuZXNzID0gZnVuY3Rpb24gX2hhcm5lc3ModGFyZ2V0cykge1xuICB2YXIgdGFyZ2V0ID0gdGFyZ2V0c1swXSxcbiAgICAgIGhhcm5lc3NQbHVnaW4sXG4gICAgICBpO1xuICBfaXNPYmplY3QodGFyZ2V0KSB8fCBfaXNGdW5jdGlvbih0YXJnZXQpIHx8ICh0YXJnZXRzID0gW3RhcmdldHNdKTtcblxuICBpZiAoIShoYXJuZXNzUGx1Z2luID0gKHRhcmdldC5fZ3NhcCB8fCB7fSkuaGFybmVzcykpIHtcbiAgICAvLyBmaW5kIHRoZSBmaXJzdCB0YXJnZXQgd2l0aCBhIGhhcm5lc3MuIFdlIGFzc3VtZSB0YXJnZXRzIHBhc3NlZCBpbnRvIGFuIGFuaW1hdGlvbiB3aWxsIGJlIG9mIHNpbWlsYXIgdHlwZSwgbWVhbmluZyB0aGUgc2FtZSBraW5kIG9mIGhhcm5lc3MgY2FuIGJlIHVzZWQgZm9yIHRoZW0gYWxsIChwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24pXG4gICAgaSA9IF9oYXJuZXNzUGx1Z2lucy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tICYmICFfaGFybmVzc1BsdWdpbnNbaV0udGFyZ2V0VGVzdCh0YXJnZXQpKSB7fVxuXG4gICAgaGFybmVzc1BsdWdpbiA9IF9oYXJuZXNzUGx1Z2luc1tpXTtcbiAgfVxuXG4gIGkgPSB0YXJnZXRzLmxlbmd0aDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgdGFyZ2V0c1tpXSAmJiAodGFyZ2V0c1tpXS5fZ3NhcCB8fCAodGFyZ2V0c1tpXS5fZ3NhcCA9IG5ldyBHU0NhY2hlKHRhcmdldHNbaV0sIGhhcm5lc3NQbHVnaW4pKSkgfHwgdGFyZ2V0cy5zcGxpY2UoaSwgMSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0cztcbn0sXG4gICAgX2dldENhY2hlID0gZnVuY3Rpb24gX2dldENhY2hlKHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0Ll9nc2FwIHx8IF9oYXJuZXNzKHRvQXJyYXkodGFyZ2V0KSlbMF0uX2dzYXA7XG59LFxuICAgIF9nZXRQcm9wZXJ0eSA9IGZ1bmN0aW9uIF9nZXRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCB2KSB7XG4gIHJldHVybiAodiA9IHRhcmdldFtwcm9wZXJ0eV0pICYmIF9pc0Z1bmN0aW9uKHYpID8gdGFyZ2V0W3Byb3BlcnR5XSgpIDogX2lzVW5kZWZpbmVkKHYpICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZShwcm9wZXJ0eSkgfHwgdjtcbn0sXG4gICAgX2ZvckVhY2hOYW1lID0gZnVuY3Rpb24gX2ZvckVhY2hOYW1lKG5hbWVzLCBmdW5jKSB7XG4gIHJldHVybiAobmFtZXMgPSBuYW1lcy5zcGxpdChcIixcIikpLmZvckVhY2goZnVuYykgfHwgbmFtZXM7XG59LFxuICAgIC8vc3BsaXQgYSBjb21tYS1kZWxpbWl0ZWQgbGlzdCBvZiBuYW1lcyBpbnRvIGFuIGFycmF5LCB0aGVuIHJ1biBhIGZvckVhY2goKSBmdW5jdGlvbiBhbmQgcmV0dXJuIHRoZSBzcGxpdCBhcnJheSAodGhpcyBpcyBqdXN0IGEgd2F5IHRvIGNvbnNvbGlkYXRlL3Nob3J0ZW4gc29tZSBjb2RlKS5cbl9yb3VuZCA9IGZ1bmN0aW9uIF9yb3VuZCh2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMDAwMCkgLyAxMDAwMDAgfHwgMDtcbn0sXG4gICAgX3JvdW5kUHJlY2lzZSA9IGZ1bmN0aW9uIF9yb3VuZFByZWNpc2UodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAxMDAwMDAwMCkgLyAxMDAwMDAwMCB8fCAwO1xufSxcbiAgICAvLyBpbmNyZWFzZWQgcHJlY2lzaW9uIG1vc3RseSBmb3IgdGltaW5nIHZhbHVlcy5cbl9hcnJheUNvbnRhaW5zQW55ID0gZnVuY3Rpb24gX2FycmF5Q29udGFpbnNBbnkodG9TZWFyY2gsIHRvRmluZCkge1xuICAvL3NlYXJjaGVzIG9uZSBhcnJheSB0byBmaW5kIG1hdGNoZXMgZm9yIGFueSBvZiB0aGUgaXRlbXMgaW4gdGhlIHRvRmluZCBhcnJheS4gQXMgc29vbiBhcyBvbmUgaXMgZm91bmQsIGl0IHJldHVybnMgdHJ1ZS4gSXQgZG9lcyBOT1QgcmV0dXJuIGFsbCB0aGUgbWF0Y2hlczsgaXQncyBzaW1wbHkgYSBib29sZWFuIHNlYXJjaC5cbiAgdmFyIGwgPSB0b0ZpbmQubGVuZ3RoLFxuICAgICAgaSA9IDA7XG5cbiAgZm9yICg7IHRvU2VhcmNoLmluZGV4T2YodG9GaW5kW2ldKSA8IDAgJiYgKytpIDwgbDspIHt9XG5cbiAgcmV0dXJuIGkgPCBsO1xufSxcbiAgICBfbGF6eVJlbmRlciA9IGZ1bmN0aW9uIF9sYXp5UmVuZGVyKCkge1xuICB2YXIgbCA9IF9sYXp5VHdlZW5zLmxlbmd0aCxcbiAgICAgIGEgPSBfbGF6eVR3ZWVucy5zbGljZSgwKSxcbiAgICAgIGksXG4gICAgICB0d2VlbjtcblxuICBfbGF6eUxvb2t1cCA9IHt9O1xuICBfbGF6eVR3ZWVucy5sZW5ndGggPSAwO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICB0d2VlbiA9IGFbaV07XG4gICAgdHdlZW4gJiYgdHdlZW4uX2xhenkgJiYgKHR3ZWVuLnJlbmRlcih0d2Vlbi5fbGF6eVswXSwgdHdlZW4uX2xhenlbMV0sIHRydWUpLl9sYXp5ID0gMCk7XG4gIH1cbn0sXG4gICAgX2xhenlTYWZlUmVuZGVyID0gZnVuY3Rpb24gX2xhenlTYWZlUmVuZGVyKGFuaW1hdGlvbiwgdGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG4gIF9sYXp5VHdlZW5zLmxlbmd0aCAmJiBfbGF6eVJlbmRlcigpO1xuICBhbmltYXRpb24ucmVuZGVyKHRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gIF9sYXp5VHdlZW5zLmxlbmd0aCAmJiBfbGF6eVJlbmRlcigpOyAvL2luIGNhc2UgcmVuZGVyaW5nIGNhdXNlZCBhbnkgdHdlZW5zIHRvIGxhenktaW5pdCwgd2Ugc2hvdWxkIHJlbmRlciB0aGVtIGJlY2F1c2UgdHlwaWNhbGx5IHdoZW4gc29tZW9uZSBjYWxscyBzZWVrKCkgb3IgdGltZSgpIG9yIHByb2dyZXNzKCksIHRoZXkgZXhwZWN0IGFuIGltbWVkaWF0ZSByZW5kZXIuXG59LFxuICAgIF9udW1lcmljSWZQb3NzaWJsZSA9IGZ1bmN0aW9uIF9udW1lcmljSWZQb3NzaWJsZSh2YWx1ZSkge1xuICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICByZXR1cm4gKG4gfHwgbiA9PT0gMCkgJiYgKHZhbHVlICsgXCJcIikubWF0Y2goX2RlbGltaXRlZFZhbHVlRXhwKS5sZW5ndGggPCAyID8gbiA6IF9pc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS50cmltKCkgOiB2YWx1ZTtcbn0sXG4gICAgX3Bhc3NUaHJvdWdoID0gZnVuY3Rpb24gX3Bhc3NUaHJvdWdoKHApIHtcbiAgcmV0dXJuIHA7XG59LFxuICAgIF9zZXREZWZhdWx0cyA9IGZ1bmN0aW9uIF9zZXREZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7XG4gIGZvciAodmFyIHAgaW4gZGVmYXVsdHMpIHtcbiAgICBwIGluIG9iaiB8fCAob2JqW3BdID0gZGVmYXVsdHNbcF0pO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0sXG4gICAgX3NldEtleWZyYW1lRGVmYXVsdHMgPSBmdW5jdGlvbiBfc2V0S2V5ZnJhbWVEZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7XG4gIGZvciAodmFyIHAgaW4gZGVmYXVsdHMpIHtcbiAgICBwIGluIG9iaiB8fCBwID09PSBcImR1cmF0aW9uXCIgfHwgcCA9PT0gXCJlYXNlXCIgfHwgKG9ialtwXSA9IGRlZmF1bHRzW3BdKTtcbiAgfVxufSxcbiAgICBfbWVyZ2UgPSBmdW5jdGlvbiBfbWVyZ2UoYmFzZSwgdG9NZXJnZSkge1xuICBmb3IgKHZhciBwIGluIHRvTWVyZ2UpIHtcbiAgICBiYXNlW3BdID0gdG9NZXJnZVtwXTtcbiAgfVxuXG4gIHJldHVybiBiYXNlO1xufSxcbiAgICBfbWVyZ2VEZWVwID0gZnVuY3Rpb24gX21lcmdlRGVlcChiYXNlLCB0b01lcmdlKSB7XG4gIGZvciAodmFyIHAgaW4gdG9NZXJnZSkge1xuICAgIHAgIT09IFwiX19wcm90b19fXCIgJiYgcCAhPT0gXCJjb25zdHJ1Y3RvclwiICYmIHAgIT09IFwicHJvdG90eXBlXCIgJiYgKGJhc2VbcF0gPSBfaXNPYmplY3QodG9NZXJnZVtwXSkgPyBfbWVyZ2VEZWVwKGJhc2VbcF0gfHwgKGJhc2VbcF0gPSB7fSksIHRvTWVyZ2VbcF0pIDogdG9NZXJnZVtwXSk7XG4gIH1cblxuICByZXR1cm4gYmFzZTtcbn0sXG4gICAgX2NvcHlFeGNsdWRpbmcgPSBmdW5jdGlvbiBfY29weUV4Y2x1ZGluZyhvYmosIGV4Y2x1ZGluZykge1xuICB2YXIgY29weSA9IHt9LFxuICAgICAgcDtcblxuICBmb3IgKHAgaW4gb2JqKSB7XG4gICAgcCBpbiBleGNsdWRpbmcgfHwgKGNvcHlbcF0gPSBvYmpbcF0pO1xuICB9XG5cbiAgcmV0dXJuIGNvcHk7XG59LFxuICAgIF9pbmhlcml0RGVmYXVsdHMgPSBmdW5jdGlvbiBfaW5oZXJpdERlZmF1bHRzKHZhcnMpIHtcbiAgdmFyIHBhcmVudCA9IHZhcnMucGFyZW50IHx8IF9nbG9iYWxUaW1lbGluZSxcbiAgICAgIGZ1bmMgPSB2YXJzLmtleWZyYW1lcyA/IF9zZXRLZXlmcmFtZURlZmF1bHRzIDogX3NldERlZmF1bHRzO1xuXG4gIGlmIChfaXNOb3RGYWxzZSh2YXJzLmluaGVyaXQpKSB7XG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgZnVuYyh2YXJzLCBwYXJlbnQudmFycy5kZWZhdWx0cyk7XG4gICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50IHx8IHBhcmVudC5fZHA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhcnM7XG59LFxuICAgIF9hcnJheXNNYXRjaCA9IGZ1bmN0aW9uIF9hcnJheXNNYXRjaChhMSwgYTIpIHtcbiAgdmFyIGkgPSBhMS5sZW5ndGgsXG4gICAgICBtYXRjaCA9IGkgPT09IGEyLmxlbmd0aDtcblxuICB3aGlsZSAobWF0Y2ggJiYgaS0tICYmIGExW2ldID09PSBhMltpXSkge31cblxuICByZXR1cm4gaSA8IDA7XG59LFxuICAgIF9hZGRMaW5rZWRMaXN0SXRlbSA9IGZ1bmN0aW9uIF9hZGRMaW5rZWRMaXN0SXRlbShwYXJlbnQsIGNoaWxkLCBmaXJzdFByb3AsIGxhc3RQcm9wLCBzb3J0QnkpIHtcbiAgaWYgKGZpcnN0UHJvcCA9PT0gdm9pZCAwKSB7XG4gICAgZmlyc3RQcm9wID0gXCJfZmlyc3RcIjtcbiAgfVxuXG4gIGlmIChsYXN0UHJvcCA9PT0gdm9pZCAwKSB7XG4gICAgbGFzdFByb3AgPSBcIl9sYXN0XCI7XG4gIH1cblxuICB2YXIgcHJldiA9IHBhcmVudFtsYXN0UHJvcF0sXG4gICAgICB0O1xuXG4gIGlmIChzb3J0QnkpIHtcbiAgICB0ID0gY2hpbGRbc29ydEJ5XTtcblxuICAgIHdoaWxlIChwcmV2ICYmIHByZXZbc29ydEJ5XSA+IHQpIHtcbiAgICAgIHByZXYgPSBwcmV2Ll9wcmV2O1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcmV2KSB7XG4gICAgY2hpbGQuX25leHQgPSBwcmV2Ll9uZXh0O1xuICAgIHByZXYuX25leHQgPSBjaGlsZDtcbiAgfSBlbHNlIHtcbiAgICBjaGlsZC5fbmV4dCA9IHBhcmVudFtmaXJzdFByb3BdO1xuICAgIHBhcmVudFtmaXJzdFByb3BdID0gY2hpbGQ7XG4gIH1cblxuICBpZiAoY2hpbGQuX25leHQpIHtcbiAgICBjaGlsZC5fbmV4dC5fcHJldiA9IGNoaWxkO1xuICB9IGVsc2Uge1xuICAgIHBhcmVudFtsYXN0UHJvcF0gPSBjaGlsZDtcbiAgfVxuXG4gIGNoaWxkLl9wcmV2ID0gcHJldjtcbiAgY2hpbGQucGFyZW50ID0gY2hpbGQuX2RwID0gcGFyZW50O1xuICByZXR1cm4gY2hpbGQ7XG59LFxuICAgIF9yZW1vdmVMaW5rZWRMaXN0SXRlbSA9IGZ1bmN0aW9uIF9yZW1vdmVMaW5rZWRMaXN0SXRlbShwYXJlbnQsIGNoaWxkLCBmaXJzdFByb3AsIGxhc3RQcm9wKSB7XG4gIGlmIChmaXJzdFByb3AgPT09IHZvaWQgMCkge1xuICAgIGZpcnN0UHJvcCA9IFwiX2ZpcnN0XCI7XG4gIH1cblxuICBpZiAobGFzdFByb3AgPT09IHZvaWQgMCkge1xuICAgIGxhc3RQcm9wID0gXCJfbGFzdFwiO1xuICB9XG5cbiAgdmFyIHByZXYgPSBjaGlsZC5fcHJldixcbiAgICAgIG5leHQgPSBjaGlsZC5fbmV4dDtcblxuICBpZiAocHJldikge1xuICAgIHByZXYuX25leHQgPSBuZXh0O1xuICB9IGVsc2UgaWYgKHBhcmVudFtmaXJzdFByb3BdID09PSBjaGlsZCkge1xuICAgIHBhcmVudFtmaXJzdFByb3BdID0gbmV4dDtcbiAgfVxuXG4gIGlmIChuZXh0KSB7XG4gICAgbmV4dC5fcHJldiA9IHByZXY7XG4gIH0gZWxzZSBpZiAocGFyZW50W2xhc3RQcm9wXSA9PT0gY2hpbGQpIHtcbiAgICBwYXJlbnRbbGFzdFByb3BdID0gcHJldjtcbiAgfVxuXG4gIGNoaWxkLl9uZXh0ID0gY2hpbGQuX3ByZXYgPSBjaGlsZC5wYXJlbnQgPSBudWxsOyAvLyBkb24ndCBkZWxldGUgdGhlIF9kcCBqdXN0IHNvIHdlIGNhbiByZXZlcnQgaWYgbmVjZXNzYXJ5LiBCdXQgcGFyZW50IHNob3VsZCBiZSBudWxsIHRvIGluZGljYXRlIHRoZSBpdGVtIGlzbid0IGluIGEgbGlua2VkIGxpc3QuXG59LFxuICAgIF9yZW1vdmVGcm9tUGFyZW50ID0gZnVuY3Rpb24gX3JlbW92ZUZyb21QYXJlbnQoY2hpbGQsIG9ubHlJZlBhcmVudEhhc0F1dG9SZW1vdmUpIHtcbiAgY2hpbGQucGFyZW50ICYmICghb25seUlmUGFyZW50SGFzQXV0b1JlbW92ZSB8fCBjaGlsZC5wYXJlbnQuYXV0b1JlbW92ZUNoaWxkcmVuKSAmJiBjaGlsZC5wYXJlbnQucmVtb3ZlKGNoaWxkKTtcbiAgY2hpbGQuX2FjdCA9IDA7XG59LFxuICAgIF91bmNhY2hlID0gZnVuY3Rpb24gX3VuY2FjaGUoYW5pbWF0aW9uLCBjaGlsZCkge1xuICBpZiAoYW5pbWF0aW9uICYmICghY2hpbGQgfHwgY2hpbGQuX2VuZCA+IGFuaW1hdGlvbi5fZHVyIHx8IGNoaWxkLl9zdGFydCA8IDApKSB7XG4gICAgLy8gcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uOiBpZiBhIGNoaWxkIGFuaW1hdGlvbiBpcyBwYXNzZWQgaW4gd2Ugc2hvdWxkIG9ubHkgdW5jYWNoZSBpZiB0aGF0IGNoaWxkIEVYVEVORFMgdGhlIGFuaW1hdGlvbiAoaXRzIGVuZCB0aW1lIGlzIGJleW9uZCB0aGUgZW5kKVxuICAgIHZhciBhID0gYW5pbWF0aW9uO1xuXG4gICAgd2hpbGUgKGEpIHtcbiAgICAgIGEuX2RpcnR5ID0gMTtcbiAgICAgIGEgPSBhLnBhcmVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYW5pbWF0aW9uO1xufSxcbiAgICBfcmVjYWNoZUFuY2VzdG9ycyA9IGZ1bmN0aW9uIF9yZWNhY2hlQW5jZXN0b3JzKGFuaW1hdGlvbikge1xuICB2YXIgcGFyZW50ID0gYW5pbWF0aW9uLnBhcmVudDtcblxuICB3aGlsZSAocGFyZW50ICYmIHBhcmVudC5wYXJlbnQpIHtcbiAgICAvL3NvbWV0aW1lcyB3ZSBtdXN0IGZvcmNlIGEgcmUtc29ydCBvZiBhbGwgY2hpbGRyZW4gYW5kIHVwZGF0ZSB0aGUgZHVyYXRpb24vdG90YWxEdXJhdGlvbiBvZiBhbGwgYW5jZXN0b3IgdGltZWxpbmVzIGltbWVkaWF0ZWx5IGluIGNhc2UsIGZvciBleGFtcGxlLCBpbiB0aGUgbWlkZGxlIG9mIGEgcmVuZGVyIGxvb3AsIG9uZSB0d2VlbiBhbHRlcnMgYW5vdGhlciB0d2VlbidzIHRpbWVTY2FsZSB3aGljaCBzaG92ZXMgaXRzIHN0YXJ0VGltZSBiZWZvcmUgMCwgZm9yY2luZyB0aGUgcGFyZW50IHRpbWVsaW5lIHRvIHNoaWZ0IGFyb3VuZCBhbmQgc2hpZnRDaGlsZHJlbigpIHdoaWNoIGNvdWxkIGFmZmVjdCB0aGF0IG5leHQgdHdlZW4ncyByZW5kZXIgKHN0YXJ0VGltZSkuIERvZXNuJ3QgbWF0dGVyIGZvciB0aGUgcm9vdCB0aW1lbGluZSB0aG91Z2guXG4gICAgcGFyZW50Ll9kaXJ0eSA9IDE7XG4gICAgcGFyZW50LnRvdGFsRHVyYXRpb24oKTtcbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICB9XG5cbiAgcmV0dXJuIGFuaW1hdGlvbjtcbn0sXG4gICAgX2hhc05vUGF1c2VkQW5jZXN0b3JzID0gZnVuY3Rpb24gX2hhc05vUGF1c2VkQW5jZXN0b3JzKGFuaW1hdGlvbikge1xuICByZXR1cm4gIWFuaW1hdGlvbiB8fCBhbmltYXRpb24uX3RzICYmIF9oYXNOb1BhdXNlZEFuY2VzdG9ycyhhbmltYXRpb24ucGFyZW50KTtcbn0sXG4gICAgX2VsYXBzZWRDeWNsZUR1cmF0aW9uID0gZnVuY3Rpb24gX2VsYXBzZWRDeWNsZUR1cmF0aW9uKGFuaW1hdGlvbikge1xuICByZXR1cm4gYW5pbWF0aW9uLl9yZXBlYXQgPyBfYW5pbWF0aW9uQ3ljbGUoYW5pbWF0aW9uLl90VGltZSwgYW5pbWF0aW9uID0gYW5pbWF0aW9uLmR1cmF0aW9uKCkgKyBhbmltYXRpb24uX3JEZWxheSkgKiBhbmltYXRpb24gOiAwO1xufSxcbiAgICAvLyBmZWVkIGluIHRoZSB0b3RhbFRpbWUgYW5kIGN5Y2xlRHVyYXRpb24gYW5kIGl0J2xsIHJldHVybiB0aGUgY3ljbGUgKGl0ZXJhdGlvbiBtaW51cyAxKSBhbmQgaWYgdGhlIHBsYXloZWFkIGlzIGV4YWN0bHkgYXQgdGhlIHZlcnkgRU5ELCBpdCB3aWxsIE5PVCBidW1wIHVwIHRvIHRoZSBuZXh0IGN5Y2xlLlxuX2FuaW1hdGlvbkN5Y2xlID0gZnVuY3Rpb24gX2FuaW1hdGlvbkN5Y2xlKHRUaW1lLCBjeWNsZUR1cmF0aW9uKSB7XG4gIHZhciB3aG9sZSA9IE1hdGguZmxvb3IodFRpbWUgLz0gY3ljbGVEdXJhdGlvbik7XG4gIHJldHVybiB0VGltZSAmJiB3aG9sZSA9PT0gdFRpbWUgPyB3aG9sZSAtIDEgOiB3aG9sZTtcbn0sXG4gICAgX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUgPSBmdW5jdGlvbiBfcGFyZW50VG9DaGlsZFRvdGFsVGltZShwYXJlbnRUaW1lLCBjaGlsZCkge1xuICByZXR1cm4gKHBhcmVudFRpbWUgLSBjaGlsZC5fc3RhcnQpICogY2hpbGQuX3RzICsgKGNoaWxkLl90cyA+PSAwID8gMCA6IGNoaWxkLl9kaXJ0eSA/IGNoaWxkLnRvdGFsRHVyYXRpb24oKSA6IGNoaWxkLl90RHVyKTtcbn0sXG4gICAgX3NldEVuZCA9IGZ1bmN0aW9uIF9zZXRFbmQoYW5pbWF0aW9uKSB7XG4gIHJldHVybiBhbmltYXRpb24uX2VuZCA9IF9yb3VuZFByZWNpc2UoYW5pbWF0aW9uLl9zdGFydCArIChhbmltYXRpb24uX3REdXIgLyBNYXRoLmFicyhhbmltYXRpb24uX3RzIHx8IGFuaW1hdGlvbi5fcnRzIHx8IF90aW55TnVtKSB8fCAwKSk7XG59LFxuICAgIF9hbGlnblBsYXloZWFkID0gZnVuY3Rpb24gX2FsaWduUGxheWhlYWQoYW5pbWF0aW9uLCB0b3RhbFRpbWUpIHtcbiAgLy8gYWRqdXN0cyB0aGUgYW5pbWF0aW9uJ3MgX3N0YXJ0IGFuZCBfZW5kIGFjY29yZGluZyB0byB0aGUgcHJvdmlkZWQgdG90YWxUaW1lIChvbmx5IGlmIHRoZSBwYXJlbnQncyBzbW9vdGhDaGlsZFRpbWluZyBpcyB0cnVlIGFuZCB0aGUgYW5pbWF0aW9uIGlzbid0IHBhdXNlZCkuIEl0IGRvZXNuJ3QgZG8gYW55IHJlbmRlcmluZyBvciBmb3JjaW5nIHRoaW5ncyBiYWNrIGludG8gcGFyZW50IHRpbWVsaW5lcywgZXRjLiAtIHRoYXQncyB3aGF0IHRvdGFsVGltZSgpIGlzIGZvci5cbiAgdmFyIHBhcmVudCA9IGFuaW1hdGlvbi5fZHA7XG5cbiAgaWYgKHBhcmVudCAmJiBwYXJlbnQuc21vb3RoQ2hpbGRUaW1pbmcgJiYgYW5pbWF0aW9uLl90cykge1xuICAgIGFuaW1hdGlvbi5fc3RhcnQgPSBfcm91bmRQcmVjaXNlKHBhcmVudC5fdGltZSAtIChhbmltYXRpb24uX3RzID4gMCA/IHRvdGFsVGltZSAvIGFuaW1hdGlvbi5fdHMgOiAoKGFuaW1hdGlvbi5fZGlydHkgPyBhbmltYXRpb24udG90YWxEdXJhdGlvbigpIDogYW5pbWF0aW9uLl90RHVyKSAtIHRvdGFsVGltZSkgLyAtYW5pbWF0aW9uLl90cykpO1xuXG4gICAgX3NldEVuZChhbmltYXRpb24pO1xuXG4gICAgcGFyZW50Ll9kaXJ0eSB8fCBfdW5jYWNoZShwYXJlbnQsIGFuaW1hdGlvbik7IC8vZm9yIHBlcmZvcm1hbmNlIGltcHJvdmVtZW50LiBJZiB0aGUgcGFyZW50J3MgY2FjaGUgaXMgYWxyZWFkeSBkaXJ0eSwgaXQgYWxyZWFkeSB0b29rIGNhcmUgb2YgbWFya2luZyB0aGUgYW5jZXN0b3JzIGFzIGRpcnR5IHRvbywgc28gc2tpcCB0aGUgZnVuY3Rpb24gY2FsbCBoZXJlLlxuICB9XG5cbiAgcmV0dXJuIGFuaW1hdGlvbjtcbn0sXG5cbi8qXG5fdG90YWxUaW1lVG9UaW1lID0gKGNsYW1wZWRUb3RhbFRpbWUsIGR1cmF0aW9uLCByZXBlYXQsIHJlcGVhdERlbGF5LCB5b3lvKSA9PiB7XG5cdGxldCBjeWNsZUR1cmF0aW9uID0gZHVyYXRpb24gKyByZXBlYXREZWxheSxcblx0XHR0aW1lID0gX3JvdW5kKGNsYW1wZWRUb3RhbFRpbWUgJSBjeWNsZUR1cmF0aW9uKTtcblx0aWYgKHRpbWUgPiBkdXJhdGlvbikge1xuXHRcdHRpbWUgPSBkdXJhdGlvbjtcblx0fVxuXHRyZXR1cm4gKHlveW8gJiYgKH5+KGNsYW1wZWRUb3RhbFRpbWUgLyBjeWNsZUR1cmF0aW9uKSAmIDEpKSA/IGR1cmF0aW9uIC0gdGltZSA6IHRpbWU7XG59LFxuKi9cbl9wb3N0QWRkQ2hlY2tzID0gZnVuY3Rpb24gX3Bvc3RBZGRDaGVja3ModGltZWxpbmUsIGNoaWxkKSB7XG4gIHZhciB0O1xuXG4gIGlmIChjaGlsZC5fdGltZSB8fCBjaGlsZC5faW5pdHRlZCAmJiAhY2hpbGQuX2R1cikge1xuICAgIC8vaW4gY2FzZSwgZm9yIGV4YW1wbGUsIHRoZSBfc3RhcnQgaXMgbW92ZWQgb24gYSB0d2VlbiB0aGF0IGhhcyBhbHJlYWR5IHJlbmRlcmVkLiBJbWFnaW5lIGl0J3MgYXQgaXRzIGVuZCBzdGF0ZSwgdGhlbiB0aGUgc3RhcnRUaW1lIGlzIG1vdmVkIFdBWSBsYXRlciAoYWZ0ZXIgdGhlIGVuZCBvZiB0aGlzIHRpbWVsaW5lKSwgaXQgc2hvdWxkIHJlbmRlciBhdCBpdHMgYmVnaW5uaW5nLlxuICAgIHQgPSBfcGFyZW50VG9DaGlsZFRvdGFsVGltZSh0aW1lbGluZS5yYXdUaW1lKCksIGNoaWxkKTtcblxuICAgIGlmICghY2hpbGQuX2R1ciB8fCBfY2xhbXAoMCwgY2hpbGQudG90YWxEdXJhdGlvbigpLCB0KSAtIGNoaWxkLl90VGltZSA+IF90aW55TnVtKSB7XG4gICAgICBjaGlsZC5yZW5kZXIodCwgdHJ1ZSk7XG4gICAgfVxuICB9IC8vaWYgdGhlIHRpbWVsaW5lIGhhcyBhbHJlYWR5IGVuZGVkIGJ1dCB0aGUgaW5zZXJ0ZWQgdHdlZW4vdGltZWxpbmUgZXh0ZW5kcyB0aGUgZHVyYXRpb24sIHdlIHNob3VsZCBlbmFibGUgdGhpcyB0aW1lbGluZSBhZ2FpbiBzbyB0aGF0IGl0IHJlbmRlcnMgcHJvcGVybHkuIFdlIHNob3VsZCBhbHNvIGFsaWduIHRoZSBwbGF5aGVhZCB3aXRoIHRoZSBwYXJlbnQgdGltZWxpbmUncyB3aGVuIGFwcHJvcHJpYXRlLlxuXG5cbiAgaWYgKF91bmNhY2hlKHRpbWVsaW5lLCBjaGlsZCkuX2RwICYmIHRpbWVsaW5lLl9pbml0dGVkICYmIHRpbWVsaW5lLl90aW1lID49IHRpbWVsaW5lLl9kdXIgJiYgdGltZWxpbmUuX3RzKSB7XG4gICAgLy9pbiBjYXNlIGFueSBvZiB0aGUgYW5jZXN0b3JzIGhhZCBjb21wbGV0ZWQgYnV0IHNob3VsZCBub3cgYmUgZW5hYmxlZC4uLlxuICAgIGlmICh0aW1lbGluZS5fZHVyIDwgdGltZWxpbmUuZHVyYXRpb24oKSkge1xuICAgICAgdCA9IHRpbWVsaW5lO1xuXG4gICAgICB3aGlsZSAodC5fZHApIHtcbiAgICAgICAgdC5yYXdUaW1lKCkgPj0gMCAmJiB0LnRvdGFsVGltZSh0Ll90VGltZSk7IC8vbW92ZXMgdGhlIHRpbWVsaW5lIChzaGlmdHMgaXRzIHN0YXJ0VGltZSkgaWYgbmVjZXNzYXJ5LCBhbmQgYWxzbyBlbmFibGVzIGl0LiBJZiBpdCdzIGN1cnJlbnRseSB6ZXJvLCB0aG91Z2gsIGl0IG1heSBub3QgYmUgc2NoZWR1bGVkIHRvIHJlbmRlciB1bnRpbCBsYXRlciBzbyB0aGVyZSdzIG5vIG5lZWQgdG8gZm9yY2UgaXQgdG8gYWxpZ24gd2l0aCB0aGUgY3VycmVudCBwbGF5aGVhZCBwb3NpdGlvbi4gT25seSBtb3ZlIHRvIGNhdGNoIHVwIHdpdGggdGhlIHBsYXloZWFkLlxuXG4gICAgICAgIHQgPSB0Ll9kcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aW1lbGluZS5felRpbWUgPSAtX3RpbnlOdW07IC8vIGhlbHBzIGVuc3VyZSB0aGF0IHRoZSBuZXh0IHJlbmRlcigpIHdpbGwgYmUgZm9yY2VkIChjcm9zc2luZ1N0YXJ0ID0gdHJ1ZSBpbiByZW5kZXIoKSksIGV2ZW4gaWYgdGhlIGR1cmF0aW9uIGhhc24ndCBjaGFuZ2VkICh3ZSdyZSBhZGRpbmcgYSBjaGlsZCB3aGljaCB3b3VsZCBuZWVkIHRvIGdldCByZW5kZXJlZCkuIERlZmluaXRlbHkgYW4gZWRnZSBjYXNlLiBOb3RlOiB3ZSBNVVNUIGRvIHRoaXMgQUZURVIgdGhlIGxvb3AgYWJvdmUgd2hlcmUgdGhlIHRvdGFsVGltZSgpIG1pZ2h0IHRyaWdnZXIgYSByZW5kZXIoKSBiZWNhdXNlIHRoaXMgX2FkZFRvVGltZWxpbmUoKSBtZXRob2QgZ2V0cyBjYWxsZWQgZnJvbSB0aGUgQW5pbWF0aW9uIGNvbnN0cnVjdG9yLCBCRUZPUkUgdHdlZW5zIGV2ZW4gcmVjb3JkIHRoZWlyIHRhcmdldHMsIGV0Yy4gc28gd2Ugd291bGRuJ3Qgd2FudCB0aGluZ3MgdG8gZ2V0IHRyaWdnZXJlZCBpbiB0aGUgd3Jvbmcgb3JkZXIuXG4gIH1cbn0sXG4gICAgX2FkZFRvVGltZWxpbmUgPSBmdW5jdGlvbiBfYWRkVG9UaW1lbGluZSh0aW1lbGluZSwgY2hpbGQsIHBvc2l0aW9uLCBza2lwQ2hlY2tzKSB7XG4gIGNoaWxkLnBhcmVudCAmJiBfcmVtb3ZlRnJvbVBhcmVudChjaGlsZCk7XG4gIGNoaWxkLl9zdGFydCA9IF9yb3VuZFByZWNpc2UoKF9pc051bWJlcihwb3NpdGlvbikgPyBwb3NpdGlvbiA6IHBvc2l0aW9uIHx8IHRpbWVsaW5lICE9PSBfZ2xvYmFsVGltZWxpbmUgPyBfcGFyc2VQb3NpdGlvbih0aW1lbGluZSwgcG9zaXRpb24sIGNoaWxkKSA6IHRpbWVsaW5lLl90aW1lKSArIGNoaWxkLl9kZWxheSk7XG4gIGNoaWxkLl9lbmQgPSBfcm91bmRQcmVjaXNlKGNoaWxkLl9zdGFydCArIChjaGlsZC50b3RhbER1cmF0aW9uKCkgLyBNYXRoLmFicyhjaGlsZC50aW1lU2NhbGUoKSkgfHwgMCkpO1xuXG4gIF9hZGRMaW5rZWRMaXN0SXRlbSh0aW1lbGluZSwgY2hpbGQsIFwiX2ZpcnN0XCIsIFwiX2xhc3RcIiwgdGltZWxpbmUuX3NvcnQgPyBcIl9zdGFydFwiIDogMCk7XG5cbiAgX2lzRnJvbU9yRnJvbVN0YXJ0KGNoaWxkKSB8fCAodGltZWxpbmUuX3JlY2VudCA9IGNoaWxkKTtcbiAgc2tpcENoZWNrcyB8fCBfcG9zdEFkZENoZWNrcyh0aW1lbGluZSwgY2hpbGQpO1xuICByZXR1cm4gdGltZWxpbmU7XG59LFxuICAgIF9zY3JvbGxUcmlnZ2VyID0gZnVuY3Rpb24gX3Njcm9sbFRyaWdnZXIoYW5pbWF0aW9uLCB0cmlnZ2VyKSB7XG4gIHJldHVybiAoX2dsb2JhbHMuU2Nyb2xsVHJpZ2dlciB8fCBfbWlzc2luZ1BsdWdpbihcInNjcm9sbFRyaWdnZXJcIiwgdHJpZ2dlcikpICYmIF9nbG9iYWxzLlNjcm9sbFRyaWdnZXIuY3JlYXRlKHRyaWdnZXIsIGFuaW1hdGlvbik7XG59LFxuICAgIF9hdHRlbXB0SW5pdFR3ZWVuID0gZnVuY3Rpb24gX2F0dGVtcHRJbml0VHdlZW4odHdlZW4sIHRvdGFsVGltZSwgZm9yY2UsIHN1cHByZXNzRXZlbnRzKSB7XG4gIF9pbml0VHdlZW4odHdlZW4sIHRvdGFsVGltZSk7XG5cbiAgaWYgKCF0d2Vlbi5faW5pdHRlZCkge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgaWYgKCFmb3JjZSAmJiB0d2Vlbi5fcHQgJiYgKHR3ZWVuLl9kdXIgJiYgdHdlZW4udmFycy5sYXp5ICE9PSBmYWxzZSB8fCAhdHdlZW4uX2R1ciAmJiB0d2Vlbi52YXJzLmxhenkpICYmIF9sYXN0UmVuZGVyZWRGcmFtZSAhPT0gX3RpY2tlci5mcmFtZSkge1xuICAgIF9sYXp5VHdlZW5zLnB1c2godHdlZW4pO1xuXG4gICAgdHdlZW4uX2xhenkgPSBbdG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50c107XG4gICAgcmV0dXJuIDE7XG4gIH1cbn0sXG4gICAgX3BhcmVudFBsYXloZWFkSXNCZWZvcmVTdGFydCA9IGZ1bmN0aW9uIF9wYXJlbnRQbGF5aGVhZElzQmVmb3JlU3RhcnQoX3JlZikge1xuICB2YXIgcGFyZW50ID0gX3JlZi5wYXJlbnQ7XG4gIHJldHVybiBwYXJlbnQgJiYgcGFyZW50Ll90cyAmJiBwYXJlbnQuX2luaXR0ZWQgJiYgIXBhcmVudC5fbG9jayAmJiAocGFyZW50LnJhd1RpbWUoKSA8IDAgfHwgX3BhcmVudFBsYXloZWFkSXNCZWZvcmVTdGFydChwYXJlbnQpKTtcbn0sXG4gICAgLy8gY2hlY2sgcGFyZW50J3MgX2xvY2sgYmVjYXVzZSB3aGVuIGEgdGltZWxpbmUgcmVwZWF0cy95b3lvcyBhbmQgZG9lcyBpdHMgYXJ0aWZpY2lhbCB3cmFwcGluZywgd2Ugc2hvdWxkbid0IGZvcmNlIHRoZSByYXRpbyBiYWNrIHRvIDBcbl9pc0Zyb21PckZyb21TdGFydCA9IGZ1bmN0aW9uIF9pc0Zyb21PckZyb21TdGFydChfcmVmMikge1xuICB2YXIgZGF0YSA9IF9yZWYyLmRhdGE7XG4gIHJldHVybiBkYXRhID09PSBcImlzRnJvbVN0YXJ0XCIgfHwgZGF0YSA9PT0gXCJpc1N0YXJ0XCI7XG59LFxuICAgIF9yZW5kZXJaZXJvRHVyYXRpb25Ud2VlbiA9IGZ1bmN0aW9uIF9yZW5kZXJaZXJvRHVyYXRpb25Ud2Vlbih0d2VlbiwgdG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpIHtcbiAgdmFyIHByZXZSYXRpbyA9IHR3ZWVuLnJhdGlvLFxuICAgICAgcmF0aW8gPSB0b3RhbFRpbWUgPCAwIHx8ICF0b3RhbFRpbWUgJiYgKCF0d2Vlbi5fc3RhcnQgJiYgX3BhcmVudFBsYXloZWFkSXNCZWZvcmVTdGFydCh0d2VlbikgJiYgISghdHdlZW4uX2luaXR0ZWQgJiYgX2lzRnJvbU9yRnJvbVN0YXJ0KHR3ZWVuKSkgfHwgKHR3ZWVuLl90cyA8IDAgfHwgdHdlZW4uX2RwLl90cyA8IDApICYmICFfaXNGcm9tT3JGcm9tU3RhcnQodHdlZW4pKSA/IDAgOiAxLFxuICAgICAgLy8gaWYgdGhlIHR3ZWVuIG9yIGl0cyBwYXJlbnQgaXMgcmV2ZXJzZWQgYW5kIHRoZSB0b3RhbFRpbWUgaXMgMCwgd2Ugc2hvdWxkIGdvIHRvIGEgcmF0aW8gb2YgMC4gRWRnZSBjYXNlOiBpZiBhIGZyb20oKSBvciBmcm9tVG8oKSBzdGFnZ2VyIHR3ZWVuIGlzIHBsYWNlZCBsYXRlciBpbiBhIHRpbWVsaW5lLCB0aGUgXCJzdGFydEF0XCIgemVyby1kdXJhdGlvbiB0d2VlbiBjb3VsZCBpbml0aWFsbHkgcmVuZGVyIGF0IGEgdGltZSB3aGVuIHRoZSBwYXJlbnQgdGltZWxpbmUncyBwbGF5aGVhZCBpcyB0ZWNobmljYWxseSBCRUZPUkUgd2hlcmUgdGhpcyB0d2VlbiBpcywgc28gbWFrZSBzdXJlIHRoYXQgYW55IFwiZnJvbVwiIGFuZCBcImZyb21Ub1wiIHN0YXJ0QXQgdHdlZW5zIGFyZSByZW5kZXJlZCB0aGUgZmlyc3QgdGltZSBhdCBhIHJhdGlvIG9mIDEuXG4gIHJlcGVhdERlbGF5ID0gdHdlZW4uX3JEZWxheSxcbiAgICAgIHRUaW1lID0gMCxcbiAgICAgIHB0LFxuICAgICAgaXRlcmF0aW9uLFxuICAgICAgcHJldkl0ZXJhdGlvbjtcblxuICBpZiAocmVwZWF0RGVsYXkgJiYgdHdlZW4uX3JlcGVhdCkge1xuICAgIC8vIGluIGNhc2UgdGhlcmUncyBhIHplcm8tZHVyYXRpb24gdHdlZW4gdGhhdCBoYXMgYSByZXBlYXQgd2l0aCBhIHJlcGVhdERlbGF5XG4gICAgdFRpbWUgPSBfY2xhbXAoMCwgdHdlZW4uX3REdXIsIHRvdGFsVGltZSk7XG4gICAgaXRlcmF0aW9uID0gX2FuaW1hdGlvbkN5Y2xlKHRUaW1lLCByZXBlYXREZWxheSk7XG4gICAgcHJldkl0ZXJhdGlvbiA9IF9hbmltYXRpb25DeWNsZSh0d2Vlbi5fdFRpbWUsIHJlcGVhdERlbGF5KTtcbiAgICB0d2Vlbi5feW95byAmJiBpdGVyYXRpb24gJiAxICYmIChyYXRpbyA9IDEgLSByYXRpbyk7XG5cbiAgICBpZiAoaXRlcmF0aW9uICE9PSBwcmV2SXRlcmF0aW9uKSB7XG4gICAgICBwcmV2UmF0aW8gPSAxIC0gcmF0aW87XG4gICAgICB0d2Vlbi52YXJzLnJlcGVhdFJlZnJlc2ggJiYgdHdlZW4uX2luaXR0ZWQgJiYgdHdlZW4uaW52YWxpZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChyYXRpbyAhPT0gcHJldlJhdGlvIHx8IGZvcmNlIHx8IHR3ZWVuLl96VGltZSA9PT0gX3RpbnlOdW0gfHwgIXRvdGFsVGltZSAmJiB0d2Vlbi5felRpbWUpIHtcbiAgICBpZiAoIXR3ZWVuLl9pbml0dGVkICYmIF9hdHRlbXB0SW5pdFR3ZWVuKHR3ZWVuLCB0b3RhbFRpbWUsIGZvcmNlLCBzdXBwcmVzc0V2ZW50cykpIHtcbiAgICAgIC8vIGlmIHdlIHJlbmRlciB0aGUgdmVyeSBiZWdpbm5pbmcgKHRpbWUgPT0gMCkgb2YgYSBmcm9tVG8oKSwgd2UgbXVzdCBmb3JjZSB0aGUgcmVuZGVyIChub3JtYWwgdHdlZW5zIHdvdWxkbid0IG5lZWQgdG8gcmVuZGVyIGF0IGEgdGltZSBvZiAwIHdoZW4gdGhlIHByZXZUaW1lIHdhcyBhbHNvIDApLiBUaGlzIGlzIGFsc28gbWFuZGF0b3J5IHRvIG1ha2Ugc3VyZSBvdmVyd3JpdGluZyBraWNrcyBpbiBpbW1lZGlhdGVseS5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcmV2SXRlcmF0aW9uID0gdHdlZW4uX3pUaW1lO1xuICAgIHR3ZWVuLl96VGltZSA9IHRvdGFsVGltZSB8fCAoc3VwcHJlc3NFdmVudHMgPyBfdGlueU51bSA6IDApOyAvLyB3aGVuIHRoZSBwbGF5aGVhZCBhcnJpdmVzIGF0IEVYQUNUTFkgdGltZSAwIChyaWdodCBvbiB0b3ApIG9mIGEgemVyby1kdXJhdGlvbiB0d2Vlbiwgd2UgbmVlZCB0byBkaXNjZXJuIGlmIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBzbyB0aGF0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIGFnYWluIChuZXh0IHRpbWUpLCBpdCdsbCB0cmlnZ2VyIHRoZSBjYWxsYmFjay4gSWYgZXZlbnRzIGFyZSBOT1Qgc3VwcHJlc3NlZCwgb2J2aW91c2x5IHRoZSBjYWxsYmFjayB3b3VsZCBiZSB0cmlnZ2VyZWQgaW4gdGhpcyByZW5kZXIuIEJhc2ljYWxseSwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlIGVpdGhlciB3aGVuIHRoZSBwbGF5aGVhZCBBUlJJVkVTIG9yIExFQVZFUyB0aGlzIGV4YWN0IHNwb3QsIG5vdCBib3RoLiBJbWFnaW5lIGRvaW5nIGEgdGltZWxpbmUuc2VlaygwKSBhbmQgdGhlcmUncyBhIGNhbGxiYWNrIHRoYXQgc2l0cyBhdCAwLiBTaW5jZSBldmVudHMgYXJlIHN1cHByZXNzZWQgb24gdGhhdCBzZWVrKCkgYnkgZGVmYXVsdCwgbm90aGluZyB3aWxsIGZpcmUsIGJ1dCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBvZmYgb2YgdGhhdCBwb3NpdGlvbiwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlLiBUaGlzIGJlaGF2aW9yIGlzIHdoYXQgcGVvcGxlIGludHVpdGl2ZWx5IGV4cGVjdC5cblxuICAgIHN1cHByZXNzRXZlbnRzIHx8IChzdXBwcmVzc0V2ZW50cyA9IHRvdGFsVGltZSAmJiAhcHJldkl0ZXJhdGlvbik7IC8vIGlmIGl0IHdhcyByZW5kZXJlZCBwcmV2aW91c2x5IGF0IGV4YWN0bHkgMCAoX3pUaW1lKSBhbmQgbm93IHRoZSBwbGF5aGVhZCBpcyBtb3ZpbmcgYXdheSwgRE9OJ1QgZmlyZSBjYWxsYmFja3Mgb3RoZXJ3aXNlIHRoZXknbGwgc2VlbSBsaWtlIGR1cGxpY2F0ZXMuXG5cbiAgICB0d2Vlbi5yYXRpbyA9IHJhdGlvO1xuICAgIHR3ZWVuLl9mcm9tICYmIChyYXRpbyA9IDEgLSByYXRpbyk7XG4gICAgdHdlZW4uX3RpbWUgPSAwO1xuICAgIHR3ZWVuLl90VGltZSA9IHRUaW1lO1xuICAgIHB0ID0gdHdlZW4uX3B0O1xuXG4gICAgd2hpbGUgKHB0KSB7XG4gICAgICBwdC5yKHJhdGlvLCBwdC5kKTtcbiAgICAgIHB0ID0gcHQuX25leHQ7XG4gICAgfVxuXG4gICAgdHdlZW4uX3N0YXJ0QXQgJiYgdG90YWxUaW1lIDwgMCAmJiB0d2Vlbi5fc3RhcnRBdC5yZW5kZXIodG90YWxUaW1lLCB0cnVlLCB0cnVlKTtcbiAgICB0d2Vlbi5fb25VcGRhdGUgJiYgIXN1cHByZXNzRXZlbnRzICYmIF9jYWxsYmFjayh0d2VlbiwgXCJvblVwZGF0ZVwiKTtcbiAgICB0VGltZSAmJiB0d2Vlbi5fcmVwZWF0ICYmICFzdXBwcmVzc0V2ZW50cyAmJiB0d2Vlbi5wYXJlbnQgJiYgX2NhbGxiYWNrKHR3ZWVuLCBcIm9uUmVwZWF0XCIpO1xuXG4gICAgaWYgKCh0b3RhbFRpbWUgPj0gdHdlZW4uX3REdXIgfHwgdG90YWxUaW1lIDwgMCkgJiYgdHdlZW4ucmF0aW8gPT09IHJhdGlvKSB7XG4gICAgICByYXRpbyAmJiBfcmVtb3ZlRnJvbVBhcmVudCh0d2VlbiwgMSk7XG5cbiAgICAgIGlmICghc3VwcHJlc3NFdmVudHMpIHtcbiAgICAgICAgX2NhbGxiYWNrKHR3ZWVuLCByYXRpbyA/IFwib25Db21wbGV0ZVwiIDogXCJvblJldmVyc2VDb21wbGV0ZVwiLCB0cnVlKTtcblxuICAgICAgICB0d2Vlbi5fcHJvbSAmJiB0d2Vlbi5fcHJvbSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmICghdHdlZW4uX3pUaW1lKSB7XG4gICAgdHdlZW4uX3pUaW1lID0gdG90YWxUaW1lO1xuICB9XG59LFxuICAgIF9maW5kTmV4dFBhdXNlVHdlZW4gPSBmdW5jdGlvbiBfZmluZE5leHRQYXVzZVR3ZWVuKGFuaW1hdGlvbiwgcHJldlRpbWUsIHRpbWUpIHtcbiAgdmFyIGNoaWxkO1xuXG4gIGlmICh0aW1lID4gcHJldlRpbWUpIHtcbiAgICBjaGlsZCA9IGFuaW1hdGlvbi5fZmlyc3Q7XG5cbiAgICB3aGlsZSAoY2hpbGQgJiYgY2hpbGQuX3N0YXJ0IDw9IHRpbWUpIHtcbiAgICAgIGlmICghY2hpbGQuX2R1ciAmJiBjaGlsZC5kYXRhID09PSBcImlzUGF1c2VcIiAmJiBjaGlsZC5fc3RhcnQgPiBwcmV2VGltZSkge1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNoaWxkID0gYW5pbWF0aW9uLl9sYXN0O1xuXG4gICAgd2hpbGUgKGNoaWxkICYmIGNoaWxkLl9zdGFydCA+PSB0aW1lKSB7XG4gICAgICBpZiAoIWNoaWxkLl9kdXIgJiYgY2hpbGQuZGF0YSA9PT0gXCJpc1BhdXNlXCIgJiYgY2hpbGQuX3N0YXJ0IDwgcHJldlRpbWUpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgfVxuXG4gICAgICBjaGlsZCA9IGNoaWxkLl9wcmV2O1xuICAgIH1cbiAgfVxufSxcbiAgICBfc2V0RHVyYXRpb24gPSBmdW5jdGlvbiBfc2V0RHVyYXRpb24oYW5pbWF0aW9uLCBkdXJhdGlvbiwgc2tpcFVuY2FjaGUsIGxlYXZlUGxheWhlYWQpIHtcbiAgdmFyIHJlcGVhdCA9IGFuaW1hdGlvbi5fcmVwZWF0LFxuICAgICAgZHVyID0gX3JvdW5kUHJlY2lzZShkdXJhdGlvbikgfHwgMCxcbiAgICAgIHRvdGFsUHJvZ3Jlc3MgPSBhbmltYXRpb24uX3RUaW1lIC8gYW5pbWF0aW9uLl90RHVyO1xuICB0b3RhbFByb2dyZXNzICYmICFsZWF2ZVBsYXloZWFkICYmIChhbmltYXRpb24uX3RpbWUgKj0gZHVyIC8gYW5pbWF0aW9uLl9kdXIpO1xuICBhbmltYXRpb24uX2R1ciA9IGR1cjtcbiAgYW5pbWF0aW9uLl90RHVyID0gIXJlcGVhdCA/IGR1ciA6IHJlcGVhdCA8IDAgPyAxZTEwIDogX3JvdW5kUHJlY2lzZShkdXIgKiAocmVwZWF0ICsgMSkgKyBhbmltYXRpb24uX3JEZWxheSAqIHJlcGVhdCk7XG4gIHRvdGFsUHJvZ3Jlc3MgJiYgIWxlYXZlUGxheWhlYWQgPyBfYWxpZ25QbGF5aGVhZChhbmltYXRpb24sIGFuaW1hdGlvbi5fdFRpbWUgPSBhbmltYXRpb24uX3REdXIgKiB0b3RhbFByb2dyZXNzKSA6IGFuaW1hdGlvbi5wYXJlbnQgJiYgX3NldEVuZChhbmltYXRpb24pO1xuICBza2lwVW5jYWNoZSB8fCBfdW5jYWNoZShhbmltYXRpb24ucGFyZW50LCBhbmltYXRpb24pO1xuICByZXR1cm4gYW5pbWF0aW9uO1xufSxcbiAgICBfb25VcGRhdGVUb3RhbER1cmF0aW9uID0gZnVuY3Rpb24gX29uVXBkYXRlVG90YWxEdXJhdGlvbihhbmltYXRpb24pIHtcbiAgcmV0dXJuIGFuaW1hdGlvbiBpbnN0YW5jZW9mIFRpbWVsaW5lID8gX3VuY2FjaGUoYW5pbWF0aW9uKSA6IF9zZXREdXJhdGlvbihhbmltYXRpb24sIGFuaW1hdGlvbi5fZHVyKTtcbn0sXG4gICAgX3plcm9Qb3NpdGlvbiA9IHtcbiAgX3N0YXJ0OiAwLFxuICBlbmRUaW1lOiBfZW1wdHlGdW5jLFxuICB0b3RhbER1cmF0aW9uOiBfZW1wdHlGdW5jXG59LFxuICAgIF9wYXJzZVBvc2l0aW9uID0gZnVuY3Rpb24gX3BhcnNlUG9zaXRpb24oYW5pbWF0aW9uLCBwb3NpdGlvbiwgcGVyY2VudEFuaW1hdGlvbikge1xuICB2YXIgbGFiZWxzID0gYW5pbWF0aW9uLmxhYmVscyxcbiAgICAgIHJlY2VudCA9IGFuaW1hdGlvbi5fcmVjZW50IHx8IF96ZXJvUG9zaXRpb24sXG4gICAgICBjbGlwcGVkRHVyYXRpb24gPSBhbmltYXRpb24uZHVyYXRpb24oKSA+PSBfYmlnTnVtID8gcmVjZW50LmVuZFRpbWUoZmFsc2UpIDogYW5pbWF0aW9uLl9kdXIsXG4gICAgICAvL2luIGNhc2UgdGhlcmUncyBhIGNoaWxkIHRoYXQgaW5maW5pdGVseSByZXBlYXRzLCB1c2VycyBhbG1vc3QgbmV2ZXIgaW50ZW5kIGZvciB0aGUgaW5zZXJ0aW9uIHBvaW50IG9mIGEgbmV3IGNoaWxkIHRvIGJlIGJhc2VkIG9uIGEgU1VQRVIgbG9uZyB2YWx1ZSBsaWtlIHRoYXQgc28gd2UgY2xpcCBpdCBhbmQgYXNzdW1lIHRoZSBtb3N0IHJlY2VudGx5LWFkZGVkIGNoaWxkJ3MgZW5kVGltZSBzaG91bGQgYmUgdXNlZCBpbnN0ZWFkLlxuICBpLFxuICAgICAgb2Zmc2V0LFxuICAgICAgaXNQZXJjZW50O1xuXG4gIGlmIChfaXNTdHJpbmcocG9zaXRpb24pICYmIChpc05hTihwb3NpdGlvbikgfHwgcG9zaXRpb24gaW4gbGFiZWxzKSkge1xuICAgIC8vaWYgdGhlIHN0cmluZyBpcyBhIG51bWJlciBsaWtlIFwiMVwiLCBjaGVjayB0byBzZWUgaWYgdGhlcmUncyBhIGxhYmVsIHdpdGggdGhhdCBuYW1lLCBvdGhlcndpc2UgaW50ZXJwcmV0IGl0IGFzIGEgbnVtYmVyIChhYnNvbHV0ZSB2YWx1ZSkuXG4gICAgb2Zmc2V0ID0gcG9zaXRpb24uY2hhckF0KDApO1xuICAgIGlzUGVyY2VudCA9IHBvc2l0aW9uLnN1YnN0cigtMSkgPT09IFwiJVwiO1xuICAgIGkgPSBwb3NpdGlvbi5pbmRleE9mKFwiPVwiKTtcblxuICAgIGlmIChvZmZzZXQgPT09IFwiPFwiIHx8IG9mZnNldCA9PT0gXCI+XCIpIHtcbiAgICAgIGkgPj0gMCAmJiAocG9zaXRpb24gPSBwb3NpdGlvbi5yZXBsYWNlKC89LywgXCJcIikpO1xuICAgICAgcmV0dXJuIChvZmZzZXQgPT09IFwiPFwiID8gcmVjZW50Ll9zdGFydCA6IHJlY2VudC5lbmRUaW1lKHJlY2VudC5fcmVwZWF0ID49IDApKSArIChwYXJzZUZsb2F0KHBvc2l0aW9uLnN1YnN0cigxKSkgfHwgMCkgKiAoaXNQZXJjZW50ID8gKGkgPCAwID8gcmVjZW50IDogcGVyY2VudEFuaW1hdGlvbikudG90YWxEdXJhdGlvbigpIC8gMTAwIDogMSk7XG4gICAgfVxuXG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICBwb3NpdGlvbiBpbiBsYWJlbHMgfHwgKGxhYmVsc1twb3NpdGlvbl0gPSBjbGlwcGVkRHVyYXRpb24pO1xuICAgICAgcmV0dXJuIGxhYmVsc1twb3NpdGlvbl07XG4gICAgfVxuXG4gICAgb2Zmc2V0ID0gcGFyc2VGbG9hdChwb3NpdGlvbi5jaGFyQXQoaSAtIDEpICsgcG9zaXRpb24uc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoaXNQZXJjZW50ICYmIHBlcmNlbnRBbmltYXRpb24pIHtcbiAgICAgIG9mZnNldCA9IG9mZnNldCAvIDEwMCAqIChfaXNBcnJheShwZXJjZW50QW5pbWF0aW9uKSA/IHBlcmNlbnRBbmltYXRpb25bMF0gOiBwZXJjZW50QW5pbWF0aW9uKS50b3RhbER1cmF0aW9uKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGkgPiAxID8gX3BhcnNlUG9zaXRpb24oYW5pbWF0aW9uLCBwb3NpdGlvbi5zdWJzdHIoMCwgaSAtIDEpLCBwZXJjZW50QW5pbWF0aW9uKSArIG9mZnNldCA6IGNsaXBwZWREdXJhdGlvbiArIG9mZnNldDtcbiAgfVxuXG4gIHJldHVybiBwb3NpdGlvbiA9PSBudWxsID8gY2xpcHBlZER1cmF0aW9uIDogK3Bvc2l0aW9uO1xufSxcbiAgICBfY3JlYXRlVHdlZW5UeXBlID0gZnVuY3Rpb24gX2NyZWF0ZVR3ZWVuVHlwZSh0eXBlLCBwYXJhbXMsIHRpbWVsaW5lKSB7XG4gIHZhciBpc0xlZ2FjeSA9IF9pc051bWJlcihwYXJhbXNbMV0pLFxuICAgICAgdmFyc0luZGV4ID0gKGlzTGVnYWN5ID8gMiA6IDEpICsgKHR5cGUgPCAyID8gMCA6IDEpLFxuICAgICAgdmFycyA9IHBhcmFtc1t2YXJzSW5kZXhdLFxuICAgICAgaXJWYXJzLFxuICAgICAgcGFyZW50O1xuXG4gIGlzTGVnYWN5ICYmICh2YXJzLmR1cmF0aW9uID0gcGFyYW1zWzFdKTtcbiAgdmFycy5wYXJlbnQgPSB0aW1lbGluZTtcblxuICBpZiAodHlwZSkge1xuICAgIGlyVmFycyA9IHZhcnM7XG4gICAgcGFyZW50ID0gdGltZWxpbmU7XG5cbiAgICB3aGlsZSAocGFyZW50ICYmICEoXCJpbW1lZGlhdGVSZW5kZXJcIiBpbiBpclZhcnMpKSB7XG4gICAgICAvLyBpbmhlcml0YW5jZSBoYXNuJ3QgaGFwcGVuZWQgeWV0LCBidXQgc29tZW9uZSBtYXkgaGF2ZSBzZXQgYSBkZWZhdWx0IGluIGFuIGFuY2VzdG9yIHRpbWVsaW5lLiBXZSBjb3VsZCBkbyB2YXJzLmltbWVkaWF0ZVJlbmRlciA9IF9pc05vdEZhbHNlKF9pbmhlcml0RGVmYXVsdHModmFycykuaW1tZWRpYXRlUmVuZGVyKSBidXQgdGhhdCdkIGV4YWN0IGEgc2xpZ2h0IHBlcmZvcm1hbmNlIHBlbmFsdHkgYmVjYXVzZSBfaW5oZXJpdERlZmF1bHRzKCkgYWxzbyBydW5zIGluIHRoZSBUd2VlbiBjb25zdHJ1Y3Rvci4gV2UncmUgcGF5aW5nIGEgc21hbGwga2IgcHJpY2UgaGVyZSB0byBnYWluIHNwZWVkLlxuICAgICAgaXJWYXJzID0gcGFyZW50LnZhcnMuZGVmYXVsdHMgfHwge307XG4gICAgICBwYXJlbnQgPSBfaXNOb3RGYWxzZShwYXJlbnQudmFycy5pbmhlcml0KSAmJiBwYXJlbnQucGFyZW50O1xuICAgIH1cblxuICAgIHZhcnMuaW1tZWRpYXRlUmVuZGVyID0gX2lzTm90RmFsc2UoaXJWYXJzLmltbWVkaWF0ZVJlbmRlcik7XG4gICAgdHlwZSA8IDIgPyB2YXJzLnJ1bkJhY2t3YXJkcyA9IDEgOiB2YXJzLnN0YXJ0QXQgPSBwYXJhbXNbdmFyc0luZGV4IC0gMV07IC8vIFwiZnJvbVwiIHZhcnNcbiAgfVxuXG4gIHJldHVybiBuZXcgVHdlZW4ocGFyYW1zWzBdLCB2YXJzLCBwYXJhbXNbdmFyc0luZGV4ICsgMV0pO1xufSxcbiAgICBfY29uZGl0aW9uYWxSZXR1cm4gPSBmdW5jdGlvbiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmMpIHtcbiAgcmV0dXJuIHZhbHVlIHx8IHZhbHVlID09PSAwID8gZnVuYyh2YWx1ZSkgOiBmdW5jO1xufSxcbiAgICBfY2xhbXAgPSBmdW5jdGlvbiBfY2xhbXAobWluLCBtYXgsIHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA8IG1pbiA/IG1pbiA6IHZhbHVlID4gbWF4ID8gbWF4IDogdmFsdWU7XG59LFxuICAgIGdldFVuaXQgPSBmdW5jdGlvbiBnZXRVbml0KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIHZhciB2ID0gX3VuaXRFeHAuZXhlYyh2YWx1ZSk7XG5cbiAgcmV0dXJuIHYgPyB2YWx1ZS5zdWJzdHIodi5pbmRleCArIHZbMF0ubGVuZ3RoKSA6IFwiXCI7XG59LFxuICAgIC8vIG5vdGU6IHByb3RlY3QgYWdhaW5zdCBwYWRkZWQgbnVtYmVycyBhcyBzdHJpbmdzLCBsaWtlIFwiMTAwLjEwMFwiLiBUaGF0IHNob3VsZG4ndCByZXR1cm4gXCIwMFwiIGFzIHRoZSB1bml0LiBJZiBpdCdzIG51bWVyaWMsIHJldHVybiBubyB1bml0LlxuY2xhbXAgPSBmdW5jdGlvbiBjbGFtcChtaW4sIG1heCwgdmFsdWUpIHtcbiAgcmV0dXJuIF9jb25kaXRpb25hbFJldHVybih2YWx1ZSwgZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gX2NsYW1wKG1pbiwgbWF4LCB2KTtcbiAgfSk7XG59LFxuICAgIF9zbGljZSA9IFtdLnNsaWNlLFxuICAgIF9pc0FycmF5TGlrZSA9IGZ1bmN0aW9uIF9pc0FycmF5TGlrZSh2YWx1ZSwgbm9uRW1wdHkpIHtcbiAgcmV0dXJuIHZhbHVlICYmIF9pc09iamVjdCh2YWx1ZSkgJiYgXCJsZW5ndGhcIiBpbiB2YWx1ZSAmJiAoIW5vbkVtcHR5ICYmICF2YWx1ZS5sZW5ndGggfHwgdmFsdWUubGVuZ3RoIC0gMSBpbiB2YWx1ZSAmJiBfaXNPYmplY3QodmFsdWVbMF0pKSAmJiAhdmFsdWUubm9kZVR5cGUgJiYgdmFsdWUgIT09IF93aW47XG59LFxuICAgIF9mbGF0dGVuID0gZnVuY3Rpb24gX2ZsYXR0ZW4oYXIsIGxlYXZlU3RyaW5ncywgYWNjdW11bGF0b3IpIHtcbiAgaWYgKGFjY3VtdWxhdG9yID09PSB2b2lkIDApIHtcbiAgICBhY2N1bXVsYXRvciA9IFtdO1xuICB9XG5cbiAgcmV0dXJuIGFyLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIF9hY2N1bXVsYXRvcjtcblxuICAgIHJldHVybiBfaXNTdHJpbmcodmFsdWUpICYmICFsZWF2ZVN0cmluZ3MgfHwgX2lzQXJyYXlMaWtlKHZhbHVlLCAxKSA/IChfYWNjdW11bGF0b3IgPSBhY2N1bXVsYXRvcikucHVzaC5hcHBseShfYWNjdW11bGF0b3IsIHRvQXJyYXkodmFsdWUpKSA6IGFjY3VtdWxhdG9yLnB1c2godmFsdWUpO1xuICB9KSB8fCBhY2N1bXVsYXRvcjtcbn0sXG4gICAgLy90YWtlcyBhbnkgdmFsdWUgYW5kIHJldHVybnMgYW4gYXJyYXkuIElmIGl0J3MgYSBzdHJpbmcgKGFuZCBsZWF2ZVN0cmluZ3MgaXNuJ3QgdHJ1ZSksIGl0J2xsIHVzZSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCkgYW5kIGNvbnZlcnQgdGhhdCB0byBhbiBhcnJheS4gSXQnbGwgYWxzbyBhY2NlcHQgaXRlcmFibGVzIGxpa2UgalF1ZXJ5IG9iamVjdHMuXG50b0FycmF5ID0gZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSwgc2NvcGUsIGxlYXZlU3RyaW5ncykge1xuICByZXR1cm4gX2lzU3RyaW5nKHZhbHVlKSAmJiAhbGVhdmVTdHJpbmdzICYmIChfY29yZUluaXR0ZWQgfHwgIV93YWtlKCkpID8gX3NsaWNlLmNhbGwoKHNjb3BlIHx8IF9kb2MpLnF1ZXJ5U2VsZWN0b3JBbGwodmFsdWUpLCAwKSA6IF9pc0FycmF5KHZhbHVlKSA/IF9mbGF0dGVuKHZhbHVlLCBsZWF2ZVN0cmluZ3MpIDogX2lzQXJyYXlMaWtlKHZhbHVlKSA/IF9zbGljZS5jYWxsKHZhbHVlLCAwKSA6IHZhbHVlID8gW3ZhbHVlXSA6IFtdO1xufSxcbiAgICBzZWxlY3RvciA9IGZ1bmN0aW9uIHNlbGVjdG9yKHZhbHVlKSB7XG4gIHZhbHVlID0gdG9BcnJheSh2YWx1ZSlbMF0gfHwgX3dhcm4oXCJJbnZhbGlkIHNjb3BlXCIpIHx8IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgZWwgPSB2YWx1ZS5jdXJyZW50IHx8IHZhbHVlLm5hdGl2ZUVsZW1lbnQgfHwgdmFsdWU7XG4gICAgcmV0dXJuIHRvQXJyYXkodiwgZWwucXVlcnlTZWxlY3RvckFsbCA/IGVsIDogZWwgPT09IHZhbHVlID8gX3dhcm4oXCJJbnZhbGlkIHNjb3BlXCIpIHx8IF9kb2MuY3JlYXRlRWxlbWVudChcImRpdlwiKSA6IHZhbHVlKTtcbiAgfTtcbn0sXG4gICAgc2h1ZmZsZSA9IGZ1bmN0aW9uIHNodWZmbGUoYSkge1xuICByZXR1cm4gYS5zb3J0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gLjUgLSBNYXRoLnJhbmRvbSgpO1xuICB9KTtcbn0sXG4gICAgLy8gYWx0ZXJuYXRpdmUgdGhhdCdzIGEgYml0IGZhc3RlciBhbmQgbW9yZSByZWxpYWJseSBkaXZlcnNlIGJ1dCBiaWdnZXI6ICAgZm9yIChsZXQgaiwgdiwgaSA9IGEubGVuZ3RoOyBpOyBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaSksIHYgPSBhWy0taV0sIGFbaV0gPSBhW2pdLCBhW2pdID0gdik7IHJldHVybiBhO1xuLy9mb3IgZGlzdHJpYnV0aW5nIHZhbHVlcyBhY3Jvc3MgYW4gYXJyYXkuIENhbiBhY2NlcHQgYSBudW1iZXIsIGEgZnVuY3Rpb24gb3IgKG1vc3QgY29tbW9ubHkpIGEgZnVuY3Rpb24gd2hpY2ggY2FuIGNvbnRhaW4gdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOiB7YmFzZSwgYW1vdW50LCBmcm9tLCBlYXNlLCBncmlkLCBheGlzLCBsZW5ndGgsIGVhY2h9LiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBleHBlY3RzIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczogaW5kZXgsIHRhcmdldCwgYXJyYXkuIFJlY29nbml6ZXMgdGhlIGZvbGxvd2luZ1xuZGlzdHJpYnV0ZSA9IGZ1bmN0aW9uIGRpc3RyaWJ1dGUodikge1xuICBpZiAoX2lzRnVuY3Rpb24odikpIHtcbiAgICByZXR1cm4gdjtcbiAgfVxuXG4gIHZhciB2YXJzID0gX2lzT2JqZWN0KHYpID8gdiA6IHtcbiAgICBlYWNoOiB2XG4gIH0sXG4gICAgICAvL246MSBpcyBqdXN0IHRvIGluZGljYXRlIHYgd2FzIGEgbnVtYmVyOyB3ZSBsZXZlcmFnZSB0aGF0IGxhdGVyIHRvIHNldCB2IGFjY29yZGluZyB0byB0aGUgbGVuZ3RoIHdlIGdldC4gSWYgYSBudW1iZXIgaXMgcGFzc2VkIGluLCB3ZSB0cmVhdCBpdCBsaWtlIHRoZSBvbGQgc3RhZ2dlciB2YWx1ZSB3aGVyZSAwLjEsIGZvciBleGFtcGxlLCB3b3VsZCBtZWFuIHRoYXQgdGhpbmdzIHdvdWxkIGJlIGRpc3RyaWJ1dGVkIHdpdGggMC4xIGJldHdlZW4gZWFjaCBlbGVtZW50IGluIHRoZSBhcnJheSByYXRoZXIgdGhhbiBhIHRvdGFsIFwiYW1vdW50XCIgdGhhdCdzIGNodW5rZWQgb3V0IGFtb25nIHRoZW0gYWxsLlxuICBlYXNlID0gX3BhcnNlRWFzZSh2YXJzLmVhc2UpLFxuICAgICAgZnJvbSA9IHZhcnMuZnJvbSB8fCAwLFxuICAgICAgYmFzZSA9IHBhcnNlRmxvYXQodmFycy5iYXNlKSB8fCAwLFxuICAgICAgY2FjaGUgPSB7fSxcbiAgICAgIGlzRGVjaW1hbCA9IGZyb20gPiAwICYmIGZyb20gPCAxLFxuICAgICAgcmF0aW9zID0gaXNOYU4oZnJvbSkgfHwgaXNEZWNpbWFsLFxuICAgICAgYXhpcyA9IHZhcnMuYXhpcyxcbiAgICAgIHJhdGlvWCA9IGZyb20sXG4gICAgICByYXRpb1kgPSBmcm9tO1xuXG4gIGlmIChfaXNTdHJpbmcoZnJvbSkpIHtcbiAgICByYXRpb1ggPSByYXRpb1kgPSB7XG4gICAgICBjZW50ZXI6IC41LFxuICAgICAgZWRnZXM6IC41LFxuICAgICAgZW5kOiAxXG4gICAgfVtmcm9tXSB8fCAwO1xuICB9IGVsc2UgaWYgKCFpc0RlY2ltYWwgJiYgcmF0aW9zKSB7XG4gICAgcmF0aW9YID0gZnJvbVswXTtcbiAgICByYXRpb1kgPSBmcm9tWzFdO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpLCB0YXJnZXQsIGEpIHtcbiAgICB2YXIgbCA9IChhIHx8IHZhcnMpLmxlbmd0aCxcbiAgICAgICAgZGlzdGFuY2VzID0gY2FjaGVbbF0sXG4gICAgICAgIG9yaWdpblgsXG4gICAgICAgIG9yaWdpblksXG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIGQsXG4gICAgICAgIGosXG4gICAgICAgIG1heCxcbiAgICAgICAgbWluLFxuICAgICAgICB3cmFwQXQ7XG5cbiAgICBpZiAoIWRpc3RhbmNlcykge1xuICAgICAgd3JhcEF0ID0gdmFycy5ncmlkID09PSBcImF1dG9cIiA/IDAgOiAodmFycy5ncmlkIHx8IFsxLCBfYmlnTnVtXSlbMV07XG5cbiAgICAgIGlmICghd3JhcEF0KSB7XG4gICAgICAgIG1heCA9IC1fYmlnTnVtO1xuXG4gICAgICAgIHdoaWxlIChtYXggPCAobWF4ID0gYVt3cmFwQXQrK10uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCkgJiYgd3JhcEF0IDwgbCkge31cblxuICAgICAgICB3cmFwQXQtLTtcbiAgICAgIH1cblxuICAgICAgZGlzdGFuY2VzID0gY2FjaGVbbF0gPSBbXTtcbiAgICAgIG9yaWdpblggPSByYXRpb3MgPyBNYXRoLm1pbih3cmFwQXQsIGwpICogcmF0aW9YIC0gLjUgOiBmcm9tICUgd3JhcEF0O1xuICAgICAgb3JpZ2luWSA9IHJhdGlvcyA/IGwgKiByYXRpb1kgLyB3cmFwQXQgLSAuNSA6IGZyb20gLyB3cmFwQXQgfCAwO1xuICAgICAgbWF4ID0gMDtcbiAgICAgIG1pbiA9IF9iaWdOdW07XG5cbiAgICAgIGZvciAoaiA9IDA7IGogPCBsOyBqKyspIHtcbiAgICAgICAgeCA9IGogJSB3cmFwQXQgLSBvcmlnaW5YO1xuICAgICAgICB5ID0gb3JpZ2luWSAtIChqIC8gd3JhcEF0IHwgMCk7XG4gICAgICAgIGRpc3RhbmNlc1tqXSA9IGQgPSAhYXhpcyA/IF9zcXJ0KHggKiB4ICsgeSAqIHkpIDogTWF0aC5hYnMoYXhpcyA9PT0gXCJ5XCIgPyB5IDogeCk7XG4gICAgICAgIGQgPiBtYXggJiYgKG1heCA9IGQpO1xuICAgICAgICBkIDwgbWluICYmIChtaW4gPSBkKTtcbiAgICAgIH1cblxuICAgICAgZnJvbSA9PT0gXCJyYW5kb21cIiAmJiBzaHVmZmxlKGRpc3RhbmNlcyk7XG4gICAgICBkaXN0YW5jZXMubWF4ID0gbWF4IC0gbWluO1xuICAgICAgZGlzdGFuY2VzLm1pbiA9IG1pbjtcbiAgICAgIGRpc3RhbmNlcy52ID0gbCA9IChwYXJzZUZsb2F0KHZhcnMuYW1vdW50KSB8fCBwYXJzZUZsb2F0KHZhcnMuZWFjaCkgKiAod3JhcEF0ID4gbCA/IGwgLSAxIDogIWF4aXMgPyBNYXRoLm1heCh3cmFwQXQsIGwgLyB3cmFwQXQpIDogYXhpcyA9PT0gXCJ5XCIgPyBsIC8gd3JhcEF0IDogd3JhcEF0KSB8fCAwKSAqIChmcm9tID09PSBcImVkZ2VzXCIgPyAtMSA6IDEpO1xuICAgICAgZGlzdGFuY2VzLmIgPSBsIDwgMCA/IGJhc2UgLSBsIDogYmFzZTtcbiAgICAgIGRpc3RhbmNlcy51ID0gZ2V0VW5pdCh2YXJzLmFtb3VudCB8fCB2YXJzLmVhY2gpIHx8IDA7IC8vdW5pdFxuXG4gICAgICBlYXNlID0gZWFzZSAmJiBsIDwgMCA/IF9pbnZlcnRFYXNlKGVhc2UpIDogZWFzZTtcbiAgICB9XG5cbiAgICBsID0gKGRpc3RhbmNlc1tpXSAtIGRpc3RhbmNlcy5taW4pIC8gZGlzdGFuY2VzLm1heCB8fCAwO1xuICAgIHJldHVybiBfcm91bmRQcmVjaXNlKGRpc3RhbmNlcy5iICsgKGVhc2UgPyBlYXNlKGwpIDogbCkgKiBkaXN0YW5jZXMudikgKyBkaXN0YW5jZXMudTsgLy9yb3VuZCBpbiBvcmRlciB0byB3b3JrIGFyb3VuZCBmbG9hdGluZyBwb2ludCBlcnJvcnNcbiAgfTtcbn0sXG4gICAgX3JvdW5kTW9kaWZpZXIgPSBmdW5jdGlvbiBfcm91bmRNb2RpZmllcih2KSB7XG4gIC8vcGFzcyBpbiAwLjEgZ2V0IGEgZnVuY3Rpb24gdGhhdCdsbCByb3VuZCB0byB0aGUgbmVhcmVzdCB0ZW50aCwgb3IgNSB0byByb3VuZCB0byB0aGUgY2xvc2VzdCA1LCBvciAwLjAwMSB0byB0aGUgY2xvc2VzdCAxMDAwdGgsIGV0Yy5cbiAgdmFyIHAgPSBNYXRoLnBvdygxMCwgKCh2ICsgXCJcIikuc3BsaXQoXCIuXCIpWzFdIHx8IFwiXCIpLmxlbmd0aCk7IC8vdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgbWF0aCBlcnJvcnMgKGxpa2UgMjQgKiAwLjEgPT0gMi40MDAwMDAwMDAwMDAwMDA0KSwgd2UgY2hvcCBvZmYgYXQgYSBzcGVjaWZpYyBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgKG11Y2ggZmFzdGVyIHRoYW4gdG9GaXhlZCgpKVxuXG4gIHJldHVybiBmdW5jdGlvbiAocmF3KSB7XG4gICAgdmFyIG4gPSBNYXRoLnJvdW5kKHBhcnNlRmxvYXQocmF3KSAvIHYpICogdiAqIHA7XG4gICAgcmV0dXJuIChuIC0gbiAlIDEpIC8gcCArIChfaXNOdW1iZXIocmF3KSA/IDAgOiBnZXRVbml0KHJhdykpOyAvLyBuIC0gbiAlIDEgcmVwbGFjZXMgTWF0aC5mbG9vcigpIGluIG9yZGVyIHRvIGhhbmRsZSBuZWdhdGl2ZSB2YWx1ZXMgcHJvcGVybHkuIEZvciBleGFtcGxlLCBNYXRoLmZsb29yKC0xNTAuMDAwMDAwMDAwMDAwMDMpIGlzIDE1MSFcbiAgfTtcbn0sXG4gICAgc25hcCA9IGZ1bmN0aW9uIHNuYXAoc25hcFRvLCB2YWx1ZSkge1xuICB2YXIgaXNBcnJheSA9IF9pc0FycmF5KHNuYXBUbyksXG4gICAgICByYWRpdXMsXG4gICAgICBpczJEO1xuXG4gIGlmICghaXNBcnJheSAmJiBfaXNPYmplY3Qoc25hcFRvKSkge1xuICAgIHJhZGl1cyA9IGlzQXJyYXkgPSBzbmFwVG8ucmFkaXVzIHx8IF9iaWdOdW07XG5cbiAgICBpZiAoc25hcFRvLnZhbHVlcykge1xuICAgICAgc25hcFRvID0gdG9BcnJheShzbmFwVG8udmFsdWVzKTtcblxuICAgICAgaWYgKGlzMkQgPSAhX2lzTnVtYmVyKHNuYXBUb1swXSkpIHtcbiAgICAgICAgcmFkaXVzICo9IHJhZGl1czsgLy9wZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24gc28gd2UgZG9uJ3QgaGF2ZSB0byBNYXRoLnNxcnQoKSBpbiB0aGUgbG9vcC5cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc25hcFRvID0gX3JvdW5kTW9kaWZpZXIoc25hcFRvLmluY3JlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9jb25kaXRpb25hbFJldHVybih2YWx1ZSwgIWlzQXJyYXkgPyBfcm91bmRNb2RpZmllcihzbmFwVG8pIDogX2lzRnVuY3Rpb24oc25hcFRvKSA/IGZ1bmN0aW9uIChyYXcpIHtcbiAgICBpczJEID0gc25hcFRvKHJhdyk7XG4gICAgcmV0dXJuIE1hdGguYWJzKGlzMkQgLSByYXcpIDw9IHJhZGl1cyA/IGlzMkQgOiByYXc7XG4gIH0gOiBmdW5jdGlvbiAocmF3KSB7XG4gICAgdmFyIHggPSBwYXJzZUZsb2F0KGlzMkQgPyByYXcueCA6IHJhdyksXG4gICAgICAgIHkgPSBwYXJzZUZsb2F0KGlzMkQgPyByYXcueSA6IDApLFxuICAgICAgICBtaW4gPSBfYmlnTnVtLFxuICAgICAgICBjbG9zZXN0ID0gMCxcbiAgICAgICAgaSA9IHNuYXBUby5sZW5ndGgsXG4gICAgICAgIGR4LFxuICAgICAgICBkeTtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGlmIChpczJEKSB7XG4gICAgICAgIGR4ID0gc25hcFRvW2ldLnggLSB4O1xuICAgICAgICBkeSA9IHNuYXBUb1tpXS55IC0geTtcbiAgICAgICAgZHggPSBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGR4ID0gTWF0aC5hYnMoc25hcFRvW2ldIC0geCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkeCA8IG1pbikge1xuICAgICAgICBtaW4gPSBkeDtcbiAgICAgICAgY2xvc2VzdCA9IGk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2VzdCA9ICFyYWRpdXMgfHwgbWluIDw9IHJhZGl1cyA/IHNuYXBUb1tjbG9zZXN0XSA6IHJhdztcbiAgICByZXR1cm4gaXMyRCB8fCBjbG9zZXN0ID09PSByYXcgfHwgX2lzTnVtYmVyKHJhdykgPyBjbG9zZXN0IDogY2xvc2VzdCArIGdldFVuaXQocmF3KTtcbiAgfSk7XG59LFxuICAgIHJhbmRvbSA9IGZ1bmN0aW9uIHJhbmRvbShtaW4sIG1heCwgcm91bmRpbmdJbmNyZW1lbnQsIHJldHVybkZ1bmN0aW9uKSB7XG4gIHJldHVybiBfY29uZGl0aW9uYWxSZXR1cm4oX2lzQXJyYXkobWluKSA/ICFtYXggOiByb3VuZGluZ0luY3JlbWVudCA9PT0gdHJ1ZSA/ICEhKHJvdW5kaW5nSW5jcmVtZW50ID0gMCkgOiAhcmV0dXJuRnVuY3Rpb24sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2lzQXJyYXkobWluKSA/IG1pblt+fihNYXRoLnJhbmRvbSgpICogbWluLmxlbmd0aCldIDogKHJvdW5kaW5nSW5jcmVtZW50ID0gcm91bmRpbmdJbmNyZW1lbnQgfHwgMWUtNSkgJiYgKHJldHVybkZ1bmN0aW9uID0gcm91bmRpbmdJbmNyZW1lbnQgPCAxID8gTWF0aC5wb3coMTAsIChyb3VuZGluZ0luY3JlbWVudCArIFwiXCIpLmxlbmd0aCAtIDIpIDogMSkgJiYgTWF0aC5mbG9vcihNYXRoLnJvdW5kKChtaW4gLSByb3VuZGluZ0luY3JlbWVudCAvIDIgKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIHJvdW5kaW5nSW5jcmVtZW50ICogLjk5KSkgLyByb3VuZGluZ0luY3JlbWVudCkgKiByb3VuZGluZ0luY3JlbWVudCAqIHJldHVybkZ1bmN0aW9uKSAvIHJldHVybkZ1bmN0aW9uO1xuICB9KTtcbn0sXG4gICAgcGlwZSA9IGZ1bmN0aW9uIHBpcGUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jdGlvbnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3Rpb25zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbnMucmVkdWNlKGZ1bmN0aW9uICh2LCBmKSB7XG4gICAgICByZXR1cm4gZih2KTtcbiAgICB9LCB2YWx1ZSk7XG4gIH07XG59LFxuICAgIHVuaXRpemUgPSBmdW5jdGlvbiB1bml0aXplKGZ1bmMsIHVuaXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHBhcnNlRmxvYXQodmFsdWUpKSArICh1bml0IHx8IGdldFVuaXQodmFsdWUpKTtcbiAgfTtcbn0sXG4gICAgbm9ybWFsaXplID0gZnVuY3Rpb24gbm9ybWFsaXplKG1pbiwgbWF4LCB2YWx1ZSkge1xuICByZXR1cm4gbWFwUmFuZ2UobWluLCBtYXgsIDAsIDEsIHZhbHVlKTtcbn0sXG4gICAgX3dyYXBBcnJheSA9IGZ1bmN0aW9uIF93cmFwQXJyYXkoYSwgd3JhcHBlciwgdmFsdWUpIHtcbiAgcmV0dXJuIF9jb25kaXRpb25hbFJldHVybih2YWx1ZSwgZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgcmV0dXJuIGFbfn53cmFwcGVyKGluZGV4KV07XG4gIH0pO1xufSxcbiAgICB3cmFwID0gZnVuY3Rpb24gd3JhcChtaW4sIG1heCwgdmFsdWUpIHtcbiAgLy8gTk9URTogd3JhcCgpIENBTk5PVCBiZSBhbiBhcnJvdyBmdW5jdGlvbiEgQSB2ZXJ5IG9kZCBjb21waWxpbmcgYnVnIGNhdXNlcyBwcm9ibGVtcyAodW5yZWxhdGVkIHRvIEdTQVApLlxuICB2YXIgcmFuZ2UgPSBtYXggLSBtaW47XG4gIHJldHVybiBfaXNBcnJheShtaW4pID8gX3dyYXBBcnJheShtaW4sIHdyYXAoMCwgbWluLmxlbmd0aCksIG1heCkgOiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAocmFuZ2UgKyAodmFsdWUgLSBtaW4pICUgcmFuZ2UpICUgcmFuZ2UgKyBtaW47XG4gIH0pO1xufSxcbiAgICB3cmFwWW95byA9IGZ1bmN0aW9uIHdyYXBZb3lvKG1pbiwgbWF4LCB2YWx1ZSkge1xuICB2YXIgcmFuZ2UgPSBtYXggLSBtaW4sXG4gICAgICB0b3RhbCA9IHJhbmdlICogMjtcbiAgcmV0dXJuIF9pc0FycmF5KG1pbikgPyBfd3JhcEFycmF5KG1pbiwgd3JhcFlveW8oMCwgbWluLmxlbmd0aCAtIDEpLCBtYXgpIDogX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YWx1ZSA9ICh0b3RhbCArICh2YWx1ZSAtIG1pbikgJSB0b3RhbCkgJSB0b3RhbCB8fCAwO1xuICAgIHJldHVybiBtaW4gKyAodmFsdWUgPiByYW5nZSA/IHRvdGFsIC0gdmFsdWUgOiB2YWx1ZSk7XG4gIH0pO1xufSxcbiAgICBfcmVwbGFjZVJhbmRvbSA9IGZ1bmN0aW9uIF9yZXBsYWNlUmFuZG9tKHZhbHVlKSB7XG4gIC8vcmVwbGFjZXMgYWxsIG9jY3VycmVuY2VzIG9mIHJhbmRvbSguLi4pIGluIGEgc3RyaW5nIHdpdGggdGhlIGNhbGN1bGF0ZWQgcmFuZG9tIHZhbHVlLiBjYW4gYmUgYSByYW5nZSBsaWtlIHJhbmRvbSgtMTAwLCAxMDAsIDUpIG9yIGFuIGFycmF5IGxpa2UgcmFuZG9tKFswLCAxMDAsIDUwMF0pXG4gIHZhciBwcmV2ID0gMCxcbiAgICAgIHMgPSBcIlwiLFxuICAgICAgaSxcbiAgICAgIG51bXMsXG4gICAgICBlbmQsXG4gICAgICBpc0FycmF5O1xuXG4gIHdoaWxlICh+KGkgPSB2YWx1ZS5pbmRleE9mKFwicmFuZG9tKFwiLCBwcmV2KSkpIHtcbiAgICBlbmQgPSB2YWx1ZS5pbmRleE9mKFwiKVwiLCBpKTtcbiAgICBpc0FycmF5ID0gdmFsdWUuY2hhckF0KGkgKyA3KSA9PT0gXCJbXCI7XG4gICAgbnVtcyA9IHZhbHVlLnN1YnN0cihpICsgNywgZW5kIC0gaSAtIDcpLm1hdGNoKGlzQXJyYXkgPyBfZGVsaW1pdGVkVmFsdWVFeHAgOiBfc3RyaWN0TnVtRXhwKTtcbiAgICBzICs9IHZhbHVlLnN1YnN0cihwcmV2LCBpIC0gcHJldikgKyByYW5kb20oaXNBcnJheSA/IG51bXMgOiArbnVtc1swXSwgaXNBcnJheSA/IDAgOiArbnVtc1sxXSwgK251bXNbMl0gfHwgMWUtNSk7XG4gICAgcHJldiA9IGVuZCArIDE7XG4gIH1cblxuICByZXR1cm4gcyArIHZhbHVlLnN1YnN0cihwcmV2LCB2YWx1ZS5sZW5ndGggLSBwcmV2KTtcbn0sXG4gICAgbWFwUmFuZ2UgPSBmdW5jdGlvbiBtYXBSYW5nZShpbk1pbiwgaW5NYXgsIG91dE1pbiwgb3V0TWF4LCB2YWx1ZSkge1xuICB2YXIgaW5SYW5nZSA9IGluTWF4IC0gaW5NaW4sXG4gICAgICBvdXRSYW5nZSA9IG91dE1heCAtIG91dE1pbjtcbiAgcmV0dXJuIF9jb25kaXRpb25hbFJldHVybih2YWx1ZSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIG91dE1pbiArICgodmFsdWUgLSBpbk1pbikgLyBpblJhbmdlICogb3V0UmFuZ2UgfHwgMCk7XG4gIH0pO1xufSxcbiAgICBpbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uIGludGVycG9sYXRlKHN0YXJ0LCBlbmQsIHByb2dyZXNzLCBtdXRhdGUpIHtcbiAgdmFyIGZ1bmMgPSBpc05hTihzdGFydCArIGVuZCkgPyAwIDogZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gKDEgLSBwKSAqIHN0YXJ0ICsgcCAqIGVuZDtcbiAgfTtcblxuICBpZiAoIWZ1bmMpIHtcbiAgICB2YXIgaXNTdHJpbmcgPSBfaXNTdHJpbmcoc3RhcnQpLFxuICAgICAgICBtYXN0ZXIgPSB7fSxcbiAgICAgICAgcCxcbiAgICAgICAgaSxcbiAgICAgICAgaW50ZXJwb2xhdG9ycyxcbiAgICAgICAgbCxcbiAgICAgICAgaWw7XG5cbiAgICBwcm9ncmVzcyA9PT0gdHJ1ZSAmJiAobXV0YXRlID0gMSkgJiYgKHByb2dyZXNzID0gbnVsbCk7XG5cbiAgICBpZiAoaXNTdHJpbmcpIHtcbiAgICAgIHN0YXJ0ID0ge1xuICAgICAgICBwOiBzdGFydFxuICAgICAgfTtcbiAgICAgIGVuZCA9IHtcbiAgICAgICAgcDogZW5kXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoX2lzQXJyYXkoc3RhcnQpICYmICFfaXNBcnJheShlbmQpKSB7XG4gICAgICBpbnRlcnBvbGF0b3JzID0gW107XG4gICAgICBsID0gc3RhcnQubGVuZ3RoO1xuICAgICAgaWwgPSBsIC0gMjtcblxuICAgICAgZm9yIChpID0gMTsgaSA8IGw7IGkrKykge1xuICAgICAgICBpbnRlcnBvbGF0b3JzLnB1c2goaW50ZXJwb2xhdGUoc3RhcnRbaSAtIDFdLCBzdGFydFtpXSkpOyAvL2J1aWxkIHRoZSBpbnRlcnBvbGF0b3JzIHVwIGZyb250IGFzIGEgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uIHNvIHRoYXQgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIG1hbnkgdGltZXMsIGl0IGNhbiBqdXN0IHJldXNlIHRoZW0uXG4gICAgICB9XG5cbiAgICAgIGwtLTtcblxuICAgICAgZnVuYyA9IGZ1bmN0aW9uIGZ1bmMocCkge1xuICAgICAgICBwICo9IGw7XG4gICAgICAgIHZhciBpID0gTWF0aC5taW4oaWwsIH5+cCk7XG4gICAgICAgIHJldHVybiBpbnRlcnBvbGF0b3JzW2ldKHAgLSBpKTtcbiAgICAgIH07XG5cbiAgICAgIHByb2dyZXNzID0gZW5kO1xuICAgIH0gZWxzZSBpZiAoIW11dGF0ZSkge1xuICAgICAgc3RhcnQgPSBfbWVyZ2UoX2lzQXJyYXkoc3RhcnQpID8gW10gOiB7fSwgc3RhcnQpO1xuICAgIH1cblxuICAgIGlmICghaW50ZXJwb2xhdG9ycykge1xuICAgICAgZm9yIChwIGluIGVuZCkge1xuICAgICAgICBfYWRkUHJvcFR3ZWVuLmNhbGwobWFzdGVyLCBzdGFydCwgcCwgXCJnZXRcIiwgZW5kW3BdKTtcbiAgICAgIH1cblxuICAgICAgZnVuYyA9IGZ1bmN0aW9uIGZ1bmMocCkge1xuICAgICAgICByZXR1cm4gX3JlbmRlclByb3BUd2VlbnMocCwgbWFzdGVyKSB8fCAoaXNTdHJpbmcgPyBzdGFydC5wIDogc3RhcnQpO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHByb2dyZXNzLCBmdW5jKTtcbn0sXG4gICAgX2dldExhYmVsSW5EaXJlY3Rpb24gPSBmdW5jdGlvbiBfZ2V0TGFiZWxJbkRpcmVjdGlvbih0aW1lbGluZSwgZnJvbVRpbWUsIGJhY2t3YXJkKSB7XG4gIC8vdXNlZCBmb3IgbmV4dExhYmVsKCkgYW5kIHByZXZpb3VzTGFiZWwoKVxuICB2YXIgbGFiZWxzID0gdGltZWxpbmUubGFiZWxzLFxuICAgICAgbWluID0gX2JpZ051bSxcbiAgICAgIHAsXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIGxhYmVsO1xuXG4gIGZvciAocCBpbiBsYWJlbHMpIHtcbiAgICBkaXN0YW5jZSA9IGxhYmVsc1twXSAtIGZyb21UaW1lO1xuXG4gICAgaWYgKGRpc3RhbmNlIDwgMCA9PT0gISFiYWNrd2FyZCAmJiBkaXN0YW5jZSAmJiBtaW4gPiAoZGlzdGFuY2UgPSBNYXRoLmFicyhkaXN0YW5jZSkpKSB7XG4gICAgICBsYWJlbCA9IHA7XG4gICAgICBtaW4gPSBkaXN0YW5jZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGFiZWw7XG59LFxuICAgIF9jYWxsYmFjayA9IGZ1bmN0aW9uIF9jYWxsYmFjayhhbmltYXRpb24sIHR5cGUsIGV4ZWN1dGVMYXp5Rmlyc3QpIHtcbiAgdmFyIHYgPSBhbmltYXRpb24udmFycyxcbiAgICAgIGNhbGxiYWNrID0gdlt0eXBlXSxcbiAgICAgIHBhcmFtcyxcbiAgICAgIHNjb3BlO1xuXG4gIGlmICghY2FsbGJhY2spIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBwYXJhbXMgPSB2W3R5cGUgKyBcIlBhcmFtc1wiXTtcbiAgc2NvcGUgPSB2LmNhbGxiYWNrU2NvcGUgfHwgYW5pbWF0aW9uO1xuICBleGVjdXRlTGF6eUZpcnN0ICYmIF9sYXp5VHdlZW5zLmxlbmd0aCAmJiBfbGF6eVJlbmRlcigpOyAvL2luIGNhc2UgcmVuZGVyaW5nIGNhdXNlZCBhbnkgdHdlZW5zIHRvIGxhenktaW5pdCwgd2Ugc2hvdWxkIHJlbmRlciB0aGVtIGJlY2F1c2UgdHlwaWNhbGx5IHdoZW4gYSB0aW1lbGluZSBmaW5pc2hlcywgdXNlcnMgZXhwZWN0IHRoaW5ncyB0byBoYXZlIHJlbmRlcmVkIGZ1bGx5LiBJbWFnaW5lIGFuIG9uVXBkYXRlIG9uIGEgdGltZWxpbmUgdGhhdCByZXBvcnRzL2NoZWNrcyB0d2VlbmVkIHZhbHVlcy5cblxuICByZXR1cm4gcGFyYW1zID8gY2FsbGJhY2suYXBwbHkoc2NvcGUsIHBhcmFtcykgOiBjYWxsYmFjay5jYWxsKHNjb3BlKTtcbn0sXG4gICAgX2ludGVycnVwdCA9IGZ1bmN0aW9uIF9pbnRlcnJ1cHQoYW5pbWF0aW9uKSB7XG4gIF9yZW1vdmVGcm9tUGFyZW50KGFuaW1hdGlvbik7XG5cbiAgYW5pbWF0aW9uLnNjcm9sbFRyaWdnZXIgJiYgYW5pbWF0aW9uLnNjcm9sbFRyaWdnZXIua2lsbChmYWxzZSk7XG4gIGFuaW1hdGlvbi5wcm9ncmVzcygpIDwgMSAmJiBfY2FsbGJhY2soYW5pbWF0aW9uLCBcIm9uSW50ZXJydXB0XCIpO1xuICByZXR1cm4gYW5pbWF0aW9uO1xufSxcbiAgICBfcXVpY2tUd2VlbixcbiAgICBfY3JlYXRlUGx1Z2luID0gZnVuY3Rpb24gX2NyZWF0ZVBsdWdpbihjb25maWcpIHtcbiAgY29uZmlnID0gIWNvbmZpZy5uYW1lICYmIGNvbmZpZ1tcImRlZmF1bHRcIl0gfHwgY29uZmlnOyAvL1VNRCBwYWNrYWdpbmcgd3JhcHMgdGhpbmdzIG9kZGx5LCBzbyBmb3IgZXhhbXBsZSBNb3Rpb25QYXRoSGVscGVyIGJlY29tZXMge01vdGlvblBhdGhIZWxwZXI6TW90aW9uUGF0aEhlbHBlciwgZGVmYXVsdDpNb3Rpb25QYXRoSGVscGVyfS5cblxuICB2YXIgbmFtZSA9IGNvbmZpZy5uYW1lLFxuICAgICAgaXNGdW5jID0gX2lzRnVuY3Rpb24oY29uZmlnKSxcbiAgICAgIFBsdWdpbiA9IG5hbWUgJiYgIWlzRnVuYyAmJiBjb25maWcuaW5pdCA/IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9wcm9wcyA9IFtdO1xuICB9IDogY29uZmlnLFxuICAgICAgLy9pbiBjYXNlIHNvbWVvbmUgcGFzc2VzIGluIGFuIG9iamVjdCB0aGF0J3Mgbm90IGEgcGx1Z2luLCBsaWtlIEN1c3RvbUVhc2VcbiAgaW5zdGFuY2VEZWZhdWx0cyA9IHtcbiAgICBpbml0OiBfZW1wdHlGdW5jLFxuICAgIHJlbmRlcjogX3JlbmRlclByb3BUd2VlbnMsXG4gICAgYWRkOiBfYWRkUHJvcFR3ZWVuLFxuICAgIGtpbGw6IF9raWxsUHJvcFR3ZWVuc09mLFxuICAgIG1vZGlmaWVyOiBfYWRkUGx1Z2luTW9kaWZpZXIsXG4gICAgcmF3VmFyczogMFxuICB9LFxuICAgICAgc3RhdGljcyA9IHtcbiAgICB0YXJnZXRUZXN0OiAwLFxuICAgIGdldDogMCxcbiAgICBnZXRTZXR0ZXI6IF9nZXRTZXR0ZXIsXG4gICAgYWxpYXNlczoge30sXG4gICAgcmVnaXN0ZXI6IDBcbiAgfTtcblxuICBfd2FrZSgpO1xuXG4gIGlmIChjb25maWcgIT09IFBsdWdpbikge1xuICAgIGlmIChfcGx1Z2luc1tuYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIF9zZXREZWZhdWx0cyhQbHVnaW4sIF9zZXREZWZhdWx0cyhfY29weUV4Y2x1ZGluZyhjb25maWcsIGluc3RhbmNlRGVmYXVsdHMpLCBzdGF0aWNzKSk7IC8vc3RhdGljIG1ldGhvZHNcblxuXG4gICAgX21lcmdlKFBsdWdpbi5wcm90b3R5cGUsIF9tZXJnZShpbnN0YW5jZURlZmF1bHRzLCBfY29weUV4Y2x1ZGluZyhjb25maWcsIHN0YXRpY3MpKSk7IC8vaW5zdGFuY2UgbWV0aG9kc1xuXG5cbiAgICBfcGx1Z2luc1tQbHVnaW4ucHJvcCA9IG5hbWVdID0gUGx1Z2luO1xuXG4gICAgaWYgKGNvbmZpZy50YXJnZXRUZXN0KSB7XG4gICAgICBfaGFybmVzc1BsdWdpbnMucHVzaChQbHVnaW4pO1xuXG4gICAgICBfcmVzZXJ2ZWRQcm9wc1tuYW1lXSA9IDE7XG4gICAgfVxuXG4gICAgbmFtZSA9IChuYW1lID09PSBcImNzc1wiID8gXCJDU1NcIiA6IG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnN1YnN0cigxKSkgKyBcIlBsdWdpblwiOyAvL2ZvciB0aGUgZ2xvYmFsIG5hbWUuIFwibW90aW9uUGF0aFwiIHNob3VsZCBiZWNvbWUgTW90aW9uUGF0aFBsdWdpblxuICB9XG5cbiAgX2FkZEdsb2JhbChuYW1lLCBQbHVnaW4pO1xuXG4gIGNvbmZpZy5yZWdpc3RlciAmJiBjb25maWcucmVnaXN0ZXIoZ3NhcCwgUGx1Z2luLCBQcm9wVHdlZW4pO1xufSxcblxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDT0xPUlNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbl8yNTUgPSAyNTUsXG4gICAgX2NvbG9yTG9va3VwID0ge1xuICBhcXVhOiBbMCwgXzI1NSwgXzI1NV0sXG4gIGxpbWU6IFswLCBfMjU1LCAwXSxcbiAgc2lsdmVyOiBbMTkyLCAxOTIsIDE5Ml0sXG4gIGJsYWNrOiBbMCwgMCwgMF0sXG4gIG1hcm9vbjogWzEyOCwgMCwgMF0sXG4gIHRlYWw6IFswLCAxMjgsIDEyOF0sXG4gIGJsdWU6IFswLCAwLCBfMjU1XSxcbiAgbmF2eTogWzAsIDAsIDEyOF0sXG4gIHdoaXRlOiBbXzI1NSwgXzI1NSwgXzI1NV0sXG4gIG9saXZlOiBbMTI4LCAxMjgsIDBdLFxuICB5ZWxsb3c6IFtfMjU1LCBfMjU1LCAwXSxcbiAgb3JhbmdlOiBbXzI1NSwgMTY1LCAwXSxcbiAgZ3JheTogWzEyOCwgMTI4LCAxMjhdLFxuICBwdXJwbGU6IFsxMjgsIDAsIDEyOF0sXG4gIGdyZWVuOiBbMCwgMTI4LCAwXSxcbiAgcmVkOiBbXzI1NSwgMCwgMF0sXG4gIHBpbms6IFtfMjU1LCAxOTIsIDIwM10sXG4gIGN5YW46IFswLCBfMjU1LCBfMjU1XSxcbiAgdHJhbnNwYXJlbnQ6IFtfMjU1LCBfMjU1LCBfMjU1LCAwXVxufSxcbiAgICBfaHVlID0gZnVuY3Rpb24gX2h1ZShoLCBtMSwgbTIpIHtcbiAgaCA9IGggPCAwID8gaCArIDEgOiBoID4gMSA/IGggLSAxIDogaDtcbiAgcmV0dXJuIChoICogNiA8IDEgPyBtMSArIChtMiAtIG0xKSAqIGggKiA2IDogaCA8IC41ID8gbTIgOiBoICogMyA8IDIgPyBtMSArIChtMiAtIG0xKSAqICgyIC8gMyAtIGgpICogNiA6IG0xKSAqIF8yNTUgKyAuNSB8IDA7XG59LFxuICAgIHNwbGl0Q29sb3IgPSBmdW5jdGlvbiBzcGxpdENvbG9yKHYsIHRvSFNMLCBmb3JjZUFscGhhKSB7XG4gIHZhciBhID0gIXYgPyBfY29sb3JMb29rdXAuYmxhY2sgOiBfaXNOdW1iZXIodikgPyBbdiA+PiAxNiwgdiA+PiA4ICYgXzI1NSwgdiAmIF8yNTVdIDogMCxcbiAgICAgIHIsXG4gICAgICBnLFxuICAgICAgYixcbiAgICAgIGgsXG4gICAgICBzLFxuICAgICAgbCxcbiAgICAgIG1heCxcbiAgICAgIG1pbixcbiAgICAgIGQsXG4gICAgICB3YXNIU0w7XG5cbiAgaWYgKCFhKSB7XG4gICAgaWYgKHYuc3Vic3RyKC0xKSA9PT0gXCIsXCIpIHtcbiAgICAgIC8vc29tZXRpbWVzIGEgdHJhaWxpbmcgY29tbWEgaXMgaW5jbHVkZWQgYW5kIHdlIHNob3VsZCBjaG9wIGl0IG9mZiAodHlwaWNhbGx5IGZyb20gYSBjb21tYS1kZWxpbWl0ZWQgbGlzdCBvZiB2YWx1ZXMgbGlrZSBhIHRleHRTaGFkb3c6XCIycHggMnB4IDJweCBibHVlLCA1cHggNXB4IDVweCByZ2IoMjU1LDAsMClcIiAtIGluIHRoaXMgZXhhbXBsZSBcImJsdWUsXCIgaGFzIGEgdHJhaWxpbmcgY29tbWEuIFdlIGNvdWxkIHN0cmlwIGl0IG91dCBpbnNpZGUgcGFyc2VDb21wbGV4KCkgYnV0IHdlJ2QgbmVlZCB0byBkbyBpdCB0byB0aGUgYmVnaW5uaW5nIGFuZCBlbmRpbmcgdmFsdWVzIHBsdXMgaXQgd291bGRuJ3QgcHJvdmlkZSBwcm90ZWN0aW9uIGZyb20gb3RoZXIgcG90ZW50aWFsIHNjZW5hcmlvcyBsaWtlIGlmIHRoZSB1c2VyIHBhc3NlcyBpbiBhIHNpbWlsYXIgdmFsdWUuXG4gICAgICB2ID0gdi5zdWJzdHIoMCwgdi5sZW5ndGggLSAxKTtcbiAgICB9XG5cbiAgICBpZiAoX2NvbG9yTG9va3VwW3ZdKSB7XG4gICAgICBhID0gX2NvbG9yTG9va3VwW3ZdO1xuICAgIH0gZWxzZSBpZiAodi5jaGFyQXQoMCkgPT09IFwiI1wiKSB7XG4gICAgICBpZiAodi5sZW5ndGggPCA2KSB7XG4gICAgICAgIC8vZm9yIHNob3J0aGFuZCBsaWtlICM5RjAgb3IgIzlGMEYgKGNvdWxkIGhhdmUgYWxwaGEpXG4gICAgICAgIHIgPSB2LmNoYXJBdCgxKTtcbiAgICAgICAgZyA9IHYuY2hhckF0KDIpO1xuICAgICAgICBiID0gdi5jaGFyQXQoMyk7XG4gICAgICAgIHYgPSBcIiNcIiArIHIgKyByICsgZyArIGcgKyBiICsgYiArICh2Lmxlbmd0aCA9PT0gNSA/IHYuY2hhckF0KDQpICsgdi5jaGFyQXQoNCkgOiBcIlwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHYubGVuZ3RoID09PSA5KSB7XG4gICAgICAgIC8vIGhleCB3aXRoIGFscGhhLCBsaWtlICNmZDVlNTNmZlxuICAgICAgICBhID0gcGFyc2VJbnQodi5zdWJzdHIoMSwgNiksIDE2KTtcbiAgICAgICAgcmV0dXJuIFthID4+IDE2LCBhID4+IDggJiBfMjU1LCBhICYgXzI1NSwgcGFyc2VJbnQodi5zdWJzdHIoNyksIDE2KSAvIDI1NV07XG4gICAgICB9XG5cbiAgICAgIHYgPSBwYXJzZUludCh2LnN1YnN0cigxKSwgMTYpO1xuICAgICAgYSA9IFt2ID4+IDE2LCB2ID4+IDggJiBfMjU1LCB2ICYgXzI1NV07XG4gICAgfSBlbHNlIGlmICh2LnN1YnN0cigwLCAzKSA9PT0gXCJoc2xcIikge1xuICAgICAgYSA9IHdhc0hTTCA9IHYubWF0Y2goX3N0cmljdE51bUV4cCk7XG5cbiAgICAgIGlmICghdG9IU0wpIHtcbiAgICAgICAgaCA9ICthWzBdICUgMzYwIC8gMzYwO1xuICAgICAgICBzID0gK2FbMV0gLyAxMDA7XG4gICAgICAgIGwgPSArYVsyXSAvIDEwMDtcbiAgICAgICAgZyA9IGwgPD0gLjUgPyBsICogKHMgKyAxKSA6IGwgKyBzIC0gbCAqIHM7XG4gICAgICAgIHIgPSBsICogMiAtIGc7XG4gICAgICAgIGEubGVuZ3RoID4gMyAmJiAoYVszXSAqPSAxKTsgLy9jYXN0IGFzIG51bWJlclxuXG4gICAgICAgIGFbMF0gPSBfaHVlKGggKyAxIC8gMywgciwgZyk7XG4gICAgICAgIGFbMV0gPSBfaHVlKGgsIHIsIGcpO1xuICAgICAgICBhWzJdID0gX2h1ZShoIC0gMSAvIDMsIHIsIGcpO1xuICAgICAgfSBlbHNlIGlmICh+di5pbmRleE9mKFwiPVwiKSkge1xuICAgICAgICAvL2lmIHJlbGF0aXZlIHZhbHVlcyBhcmUgZm91bmQsIGp1c3QgcmV0dXJuIHRoZSByYXcgc3RyaW5ncyB3aXRoIHRoZSByZWxhdGl2ZSBwcmVmaXhlcyBpbiBwbGFjZS5cbiAgICAgICAgYSA9IHYubWF0Y2goX251bUV4cCk7XG4gICAgICAgIGZvcmNlQWxwaGEgJiYgYS5sZW5ndGggPCA0ICYmIChhWzNdID0gMSk7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhID0gdi5tYXRjaChfc3RyaWN0TnVtRXhwKSB8fCBfY29sb3JMb29rdXAudHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgYSA9IGEubWFwKE51bWJlcik7XG4gIH1cblxuICBpZiAodG9IU0wgJiYgIXdhc0hTTCkge1xuICAgIHIgPSBhWzBdIC8gXzI1NTtcbiAgICBnID0gYVsxXSAvIF8yNTU7XG4gICAgYiA9IGFbMl0gLyBfMjU1O1xuICAgIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuICAgIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgIGwgPSAobWF4ICsgbWluKSAvIDI7XG5cbiAgICBpZiAobWF4ID09PSBtaW4pIHtcbiAgICAgIGggPSBzID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgZCA9IG1heCAtIG1pbjtcbiAgICAgIHMgPSBsID4gMC41ID8gZCAvICgyIC0gbWF4IC0gbWluKSA6IGQgLyAobWF4ICsgbWluKTtcbiAgICAgIGggPSBtYXggPT09IHIgPyAoZyAtIGIpIC8gZCArIChnIDwgYiA/IDYgOiAwKSA6IG1heCA9PT0gZyA/IChiIC0gcikgLyBkICsgMiA6IChyIC0gZykgLyBkICsgNDtcbiAgICAgIGggKj0gNjA7XG4gICAgfVxuXG4gICAgYVswXSA9IH5+KGggKyAuNSk7XG4gICAgYVsxXSA9IH5+KHMgKiAxMDAgKyAuNSk7XG4gICAgYVsyXSA9IH5+KGwgKiAxMDAgKyAuNSk7XG4gIH1cblxuICBmb3JjZUFscGhhICYmIGEubGVuZ3RoIDwgNCAmJiAoYVszXSA9IDEpO1xuICByZXR1cm4gYTtcbn0sXG4gICAgX2NvbG9yT3JkZXJEYXRhID0gZnVuY3Rpb24gX2NvbG9yT3JkZXJEYXRhKHYpIHtcbiAgLy8gc3RyaXBzIG91dCB0aGUgY29sb3JzIGZyb20gdGhlIHN0cmluZywgZmluZHMgYWxsIHRoZSBudW1lcmljIHNsb3RzICh3aXRoIHVuaXRzKSBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiB0aG9zZS4gVGhlIEFycmF5IGFsc28gaGFzIGEgXCJjXCIgcHJvcGVydHkgd2hpY2ggaXMgYW4gQXJyYXkgb2YgdGhlIGluZGV4IHZhbHVlcyB3aGVyZSB0aGUgY29sb3JzIGJlbG9uZy4gVGhpcyBpcyB0byBoZWxwIHdvcmsgYXJvdW5kIGlzc3VlcyB3aGVyZSB0aGVyZSdzIGEgbWlzLW1hdGNoZWQgb3JkZXIgb2YgY29sb3IvbnVtZXJpYyBkYXRhIGxpa2UgZHJvcC1zaGFkb3coI2YwMCAwcHggMXB4IDJweCkgYW5kIGRyb3Atc2hhZG93KDB4IDFweCAycHggI2YwMCkuIFRoaXMgaXMgYmFzaWNhbGx5IGEgaGVscGVyIGZ1bmN0aW9uIHVzZWQgaW4gX2Zvcm1hdENvbG9ycygpXG4gIHZhciB2YWx1ZXMgPSBbXSxcbiAgICAgIGMgPSBbXSxcbiAgICAgIGkgPSAtMTtcbiAgdi5zcGxpdChfY29sb3JFeHApLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgYSA9IHYubWF0Y2goX251bVdpdGhVbml0RXhwKSB8fCBbXTtcbiAgICB2YWx1ZXMucHVzaC5hcHBseSh2YWx1ZXMsIGEpO1xuICAgIGMucHVzaChpICs9IGEubGVuZ3RoICsgMSk7XG4gIH0pO1xuICB2YWx1ZXMuYyA9IGM7XG4gIHJldHVybiB2YWx1ZXM7XG59LFxuICAgIF9mb3JtYXRDb2xvcnMgPSBmdW5jdGlvbiBfZm9ybWF0Q29sb3JzKHMsIHRvSFNMLCBvcmRlck1hdGNoRGF0YSkge1xuICB2YXIgcmVzdWx0ID0gXCJcIixcbiAgICAgIGNvbG9ycyA9IChzICsgcmVzdWx0KS5tYXRjaChfY29sb3JFeHApLFxuICAgICAgdHlwZSA9IHRvSFNMID8gXCJoc2xhKFwiIDogXCJyZ2JhKFwiLFxuICAgICAgaSA9IDAsXG4gICAgICBjLFxuICAgICAgc2hlbGwsXG4gICAgICBkLFxuICAgICAgbDtcblxuICBpZiAoIWNvbG9ycykge1xuICAgIHJldHVybiBzO1xuICB9XG5cbiAgY29sb3JzID0gY29sb3JzLm1hcChmdW5jdGlvbiAoY29sb3IpIHtcbiAgICByZXR1cm4gKGNvbG9yID0gc3BsaXRDb2xvcihjb2xvciwgdG9IU0wsIDEpKSAmJiB0eXBlICsgKHRvSFNMID8gY29sb3JbMF0gKyBcIixcIiArIGNvbG9yWzFdICsgXCIlLFwiICsgY29sb3JbMl0gKyBcIiUsXCIgKyBjb2xvclszXSA6IGNvbG9yLmpvaW4oXCIsXCIpKSArIFwiKVwiO1xuICB9KTtcblxuICBpZiAob3JkZXJNYXRjaERhdGEpIHtcbiAgICBkID0gX2NvbG9yT3JkZXJEYXRhKHMpO1xuICAgIGMgPSBvcmRlck1hdGNoRGF0YS5jO1xuXG4gICAgaWYgKGMuam9pbihyZXN1bHQpICE9PSBkLmMuam9pbihyZXN1bHQpKSB7XG4gICAgICBzaGVsbCA9IHMucmVwbGFjZShfY29sb3JFeHAsIFwiMVwiKS5zcGxpdChfbnVtV2l0aFVuaXRFeHApO1xuICAgICAgbCA9IHNoZWxsLmxlbmd0aCAtIDE7XG5cbiAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCArPSBzaGVsbFtpXSArICh+Yy5pbmRleE9mKGkpID8gY29sb3JzLnNoaWZ0KCkgfHwgdHlwZSArIFwiMCwwLDAsMClcIiA6IChkLmxlbmd0aCA/IGQgOiBjb2xvcnMubGVuZ3RoID8gY29sb3JzIDogb3JkZXJNYXRjaERhdGEpLnNoaWZ0KCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICghc2hlbGwpIHtcbiAgICBzaGVsbCA9IHMuc3BsaXQoX2NvbG9yRXhwKTtcbiAgICBsID0gc2hlbGwubGVuZ3RoIC0gMTtcblxuICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICByZXN1bHQgKz0gc2hlbGxbaV0gKyBjb2xvcnNbaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdCArIHNoZWxsW2xdO1xufSxcbiAgICBfY29sb3JFeHAgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzID0gXCIoPzpcXFxcYig/Oig/OnJnYnxyZ2JhfGhzbHxoc2xhKVxcXFwoLis/XFxcXCkpfFxcXFxCIyg/OlswLTlhLWZdezMsNH0pezEsMn1cXFxcYlwiLFxuICAgICAgLy93ZSdsbCBkeW5hbWljYWxseSBidWlsZCB0aGlzIFJlZ3VsYXIgRXhwcmVzc2lvbiB0byBjb25zZXJ2ZSBmaWxlIHNpemUuIEFmdGVyIGJ1aWxkaW5nIGl0LCBpdCB3aWxsIGJlIGFibGUgdG8gZmluZCByZ2IoKSwgcmdiYSgpLCAjIChoZXhhZGVjaW1hbCksIGFuZCBuYW1lZCBjb2xvciB2YWx1ZXMgbGlrZSByZWQsIGJsdWUsIHB1cnBsZSwgZXRjLixcbiAgcDtcblxuICBmb3IgKHAgaW4gX2NvbG9yTG9va3VwKSB7XG4gICAgcyArPSBcInxcIiArIHAgKyBcIlxcXFxiXCI7XG4gIH1cblxuICByZXR1cm4gbmV3IFJlZ0V4cChzICsgXCIpXCIsIFwiZ2lcIik7XG59KCksXG4gICAgX2hzbEV4cCA9IC9oc2xbYV0/XFwoLyxcbiAgICBfY29sb3JTdHJpbmdGaWx0ZXIgPSBmdW5jdGlvbiBfY29sb3JTdHJpbmdGaWx0ZXIoYSkge1xuICB2YXIgY29tYmluZWQgPSBhLmpvaW4oXCIgXCIpLFxuICAgICAgdG9IU0w7XG4gIF9jb2xvckV4cC5sYXN0SW5kZXggPSAwO1xuXG4gIGlmIChfY29sb3JFeHAudGVzdChjb21iaW5lZCkpIHtcbiAgICB0b0hTTCA9IF9oc2xFeHAudGVzdChjb21iaW5lZCk7XG4gICAgYVsxXSA9IF9mb3JtYXRDb2xvcnMoYVsxXSwgdG9IU0wpO1xuICAgIGFbMF0gPSBfZm9ybWF0Q29sb3JzKGFbMF0sIHRvSFNMLCBfY29sb3JPcmRlckRhdGEoYVsxXSkpOyAvLyBtYWtlIHN1cmUgdGhlIG9yZGVyIG9mIG51bWJlcnMvY29sb3JzIG1hdGNoIHdpdGggdGhlIEVORCB2YWx1ZS5cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG59LFxuXG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFRJQ0tFUlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuX3RpY2tlckFjdGl2ZSxcbiAgICBfdGlja2VyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX2dldFRpbWUgPSBEYXRlLm5vdyxcbiAgICAgIF9sYWdUaHJlc2hvbGQgPSA1MDAsXG4gICAgICBfYWRqdXN0ZWRMYWcgPSAzMyxcbiAgICAgIF9zdGFydFRpbWUgPSBfZ2V0VGltZSgpLFxuICAgICAgX2xhc3RVcGRhdGUgPSBfc3RhcnRUaW1lLFxuICAgICAgX2dhcCA9IDEwMDAgLyAyNDAsXG4gICAgICBfbmV4dFRpbWUgPSBfZ2FwLFxuICAgICAgX2xpc3RlbmVycyA9IFtdLFxuICAgICAgX2lkLFxuICAgICAgX3JlcSxcbiAgICAgIF9yYWYsXG4gICAgICBfc2VsZixcbiAgICAgIF9kZWx0YSxcbiAgICAgIF9pLFxuICAgICAgX3RpY2sgPSBmdW5jdGlvbiBfdGljayh2KSB7XG4gICAgdmFyIGVsYXBzZWQgPSBfZ2V0VGltZSgpIC0gX2xhc3RVcGRhdGUsXG4gICAgICAgIG1hbnVhbCA9IHYgPT09IHRydWUsXG4gICAgICAgIG92ZXJsYXAsXG4gICAgICAgIGRpc3BhdGNoLFxuICAgICAgICB0aW1lLFxuICAgICAgICBmcmFtZTtcblxuICAgIGVsYXBzZWQgPiBfbGFnVGhyZXNob2xkICYmIChfc3RhcnRUaW1lICs9IGVsYXBzZWQgLSBfYWRqdXN0ZWRMYWcpO1xuICAgIF9sYXN0VXBkYXRlICs9IGVsYXBzZWQ7XG4gICAgdGltZSA9IF9sYXN0VXBkYXRlIC0gX3N0YXJ0VGltZTtcbiAgICBvdmVybGFwID0gdGltZSAtIF9uZXh0VGltZTtcblxuICAgIGlmIChvdmVybGFwID4gMCB8fCBtYW51YWwpIHtcbiAgICAgIGZyYW1lID0gKytfc2VsZi5mcmFtZTtcbiAgICAgIF9kZWx0YSA9IHRpbWUgLSBfc2VsZi50aW1lICogMTAwMDtcbiAgICAgIF9zZWxmLnRpbWUgPSB0aW1lID0gdGltZSAvIDEwMDA7XG4gICAgICBfbmV4dFRpbWUgKz0gb3ZlcmxhcCArIChvdmVybGFwID49IF9nYXAgPyA0IDogX2dhcCAtIG92ZXJsYXApO1xuICAgICAgZGlzcGF0Y2ggPSAxO1xuICAgIH1cblxuICAgIG1hbnVhbCB8fCAoX2lkID0gX3JlcShfdGljaykpOyAvL21ha2Ugc3VyZSB0aGUgcmVxdWVzdCBpcyBtYWRlIGJlZm9yZSB3ZSBkaXNwYXRjaCB0aGUgXCJ0aWNrXCIgZXZlbnQgc28gdGhhdCB0aW1pbmcgaXMgbWFpbnRhaW5lZC4gT3RoZXJ3aXNlLCBpZiBwcm9jZXNzaW5nIHRoZSBcInRpY2tcIiByZXF1aXJlcyBhIGJ1bmNoIG9mIHRpbWUgKGxpa2UgMTVtcykgYW5kIHdlJ3JlIHVzaW5nIGEgc2V0VGltZW91dCgpIHRoYXQncyBiYXNlZCBvbiAxNi43bXMsIGl0J2QgdGVjaG5pY2FsbHkgdGFrZSAzMS43bXMgYmV0d2VlbiBmcmFtZXMgb3RoZXJ3aXNlLlxuXG4gICAgaWYgKGRpc3BhdGNoKSB7XG4gICAgICBmb3IgKF9pID0gMDsgX2kgPCBfbGlzdGVuZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAvLyB1c2UgX2kgYW5kIGNoZWNrIF9saXN0ZW5lcnMubGVuZ3RoIGluc3RlYWQgb2YgYSB2YXJpYWJsZSBiZWNhdXNlIGEgbGlzdGVuZXIgY291bGQgZ2V0IHJlbW92ZWQgZHVyaW5nIHRoZSBsb29wLCBhbmQgaWYgdGhhdCBoYXBwZW5zIHRvIGFuIGVsZW1lbnQgbGVzcyB0aGFuIHRoZSBjdXJyZW50IGluZGV4LCBpdCdkIHRocm93IHRoaW5ncyBvZmYgaW4gdGhlIGxvb3AuXG4gICAgICAgIF9saXN0ZW5lcnNbX2ldKHRpbWUsIF9kZWx0YSwgZnJhbWUsIHYpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfc2VsZiA9IHtcbiAgICB0aW1lOiAwLFxuICAgIGZyYW1lOiAwLFxuICAgIHRpY2s6IGZ1bmN0aW9uIHRpY2soKSB7XG4gICAgICBfdGljayh0cnVlKTtcbiAgICB9LFxuICAgIGRlbHRhUmF0aW86IGZ1bmN0aW9uIGRlbHRhUmF0aW8oZnBzKSB7XG4gICAgICByZXR1cm4gX2RlbHRhIC8gKDEwMDAgLyAoZnBzIHx8IDYwKSk7XG4gICAgfSxcbiAgICB3YWtlOiBmdW5jdGlvbiB3YWtlKCkge1xuICAgICAgaWYgKF9jb3JlUmVhZHkpIHtcbiAgICAgICAgaWYgKCFfY29yZUluaXR0ZWQgJiYgX3dpbmRvd0V4aXN0cygpKSB7XG4gICAgICAgICAgX3dpbiA9IF9jb3JlSW5pdHRlZCA9IHdpbmRvdztcbiAgICAgICAgICBfZG9jID0gX3dpbi5kb2N1bWVudCB8fCB7fTtcbiAgICAgICAgICBfZ2xvYmFscy5nc2FwID0gZ3NhcDtcbiAgICAgICAgICAoX3dpbi5nc2FwVmVyc2lvbnMgfHwgKF93aW4uZ3NhcFZlcnNpb25zID0gW10pKS5wdXNoKGdzYXAudmVyc2lvbik7XG5cbiAgICAgICAgICBfaW5zdGFsbChfaW5zdGFsbFNjb3BlIHx8IF93aW4uR3JlZW5Tb2NrR2xvYmFscyB8fCAhX3dpbi5nc2FwICYmIF93aW4gfHwge30pO1xuXG4gICAgICAgICAgX3JhZiA9IF93aW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgX2lkICYmIF9zZWxmLnNsZWVwKCk7XG5cbiAgICAgICAgX3JlcSA9IF9yYWYgfHwgZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChmLCBfbmV4dFRpbWUgLSBfc2VsZi50aW1lICogMTAwMCArIDEgfCAwKTtcbiAgICAgICAgfTtcblxuICAgICAgICBfdGlja2VyQWN0aXZlID0gMTtcblxuICAgICAgICBfdGljaygyKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNsZWVwOiBmdW5jdGlvbiBzbGVlcCgpIHtcbiAgICAgIChfcmFmID8gX3dpbi5jYW5jZWxBbmltYXRpb25GcmFtZSA6IGNsZWFyVGltZW91dCkoX2lkKTtcbiAgICAgIF90aWNrZXJBY3RpdmUgPSAwO1xuICAgICAgX3JlcSA9IF9lbXB0eUZ1bmM7XG4gICAgfSxcbiAgICBsYWdTbW9vdGhpbmc6IGZ1bmN0aW9uIGxhZ1Ntb290aGluZyh0aHJlc2hvbGQsIGFkanVzdGVkTGFnKSB7XG4gICAgICBfbGFnVGhyZXNob2xkID0gdGhyZXNob2xkIHx8IDEgLyBfdGlueU51bTsgLy96ZXJvIHNob3VsZCBiZSBpbnRlcnByZXRlZCBhcyBiYXNpY2FsbHkgdW5saW1pdGVkXG5cbiAgICAgIF9hZGp1c3RlZExhZyA9IE1hdGgubWluKGFkanVzdGVkTGFnLCBfbGFnVGhyZXNob2xkLCAwKTtcbiAgICB9LFxuICAgIGZwczogZnVuY3Rpb24gZnBzKF9mcHMpIHtcbiAgICAgIF9nYXAgPSAxMDAwIC8gKF9mcHMgfHwgMjQwKTtcbiAgICAgIF9uZXh0VGltZSA9IF9zZWxmLnRpbWUgKiAxMDAwICsgX2dhcDtcbiAgICB9LFxuICAgIGFkZDogZnVuY3Rpb24gYWRkKGNhbGxiYWNrKSB7XG4gICAgICBfbGlzdGVuZXJzLmluZGV4T2YoY2FsbGJhY2spIDwgMCAmJiBfbGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuXG4gICAgICBfd2FrZSgpO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoY2FsbGJhY2spIHtcbiAgICAgIHZhciBpO1xuICAgICAgfihpID0gX2xpc3RlbmVycy5pbmRleE9mKGNhbGxiYWNrKSkgJiYgX2xpc3RlbmVycy5zcGxpY2UoaSwgMSkgJiYgX2kgPj0gaSAmJiBfaS0tO1xuICAgIH0sXG4gICAgX2xpc3RlbmVyczogX2xpc3RlbmVyc1xuICB9O1xuICByZXR1cm4gX3NlbGY7XG59KCksXG4gICAgX3dha2UgPSBmdW5jdGlvbiBfd2FrZSgpIHtcbiAgcmV0dXJuICFfdGlja2VyQWN0aXZlICYmIF90aWNrZXIud2FrZSgpO1xufSxcbiAgICAvL2Fsc28gZW5zdXJlcyB0aGUgY29yZSBjbGFzc2VzIGFyZSBpbml0aWFsaXplZC5cblxuLypcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKiBFQVNJTkdcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbl9lYXNlTWFwID0ge30sXG4gICAgX2N1c3RvbUVhc2VFeHAgPSAvXltcXGQuXFwtTV1bXFxkLlxcLSxcXHNdLyxcbiAgICBfcXVvdGVzRXhwID0gL1tcIiddL2csXG4gICAgX3BhcnNlT2JqZWN0SW5TdHJpbmcgPSBmdW5jdGlvbiBfcGFyc2VPYmplY3RJblN0cmluZyh2YWx1ZSkge1xuICAvL3Rha2VzIGEgc3RyaW5nIGxpa2UgXCJ7d2lnZ2xlczoxMCwgdHlwZTphbnRpY2lwYXRlfSlcIiBhbmQgdHVybnMgaXQgaW50byBhIHJlYWwgb2JqZWN0LiBOb3RpY2UgaXQgZW5kcyBpbiBcIilcIiBhbmQgaW5jbHVkZXMgdGhlIHt9IHdyYXBwZXJzLiBUaGlzIGlzIGJlY2F1c2Ugd2Ugb25seSB1c2UgdGhpcyBmdW5jdGlvbiBmb3IgcGFyc2luZyBlYXNlIGNvbmZpZ3MgYW5kIHByaW9yaXRpemVkIG9wdGltaXphdGlvbiByYXRoZXIgdGhhbiByZXVzYWJpbGl0eS5cbiAgdmFyIG9iaiA9IHt9LFxuICAgICAgc3BsaXQgPSB2YWx1ZS5zdWJzdHIoMSwgdmFsdWUubGVuZ3RoIC0gMykuc3BsaXQoXCI6XCIpLFxuICAgICAga2V5ID0gc3BsaXRbMF0sXG4gICAgICBpID0gMSxcbiAgICAgIGwgPSBzcGxpdC5sZW5ndGgsXG4gICAgICBpbmRleCxcbiAgICAgIHZhbCxcbiAgICAgIHBhcnNlZFZhbDtcblxuICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgIHZhbCA9IHNwbGl0W2ldO1xuICAgIGluZGV4ID0gaSAhPT0gbCAtIDEgPyB2YWwubGFzdEluZGV4T2YoXCIsXCIpIDogdmFsLmxlbmd0aDtcbiAgICBwYXJzZWRWYWwgPSB2YWwuc3Vic3RyKDAsIGluZGV4KTtcbiAgICBvYmpba2V5XSA9IGlzTmFOKHBhcnNlZFZhbCkgPyBwYXJzZWRWYWwucmVwbGFjZShfcXVvdGVzRXhwLCBcIlwiKS50cmltKCkgOiArcGFyc2VkVmFsO1xuICAgIGtleSA9IHZhbC5zdWJzdHIoaW5kZXggKyAxKS50cmltKCk7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSxcbiAgICBfdmFsdWVJblBhcmVudGhlc2VzID0gZnVuY3Rpb24gX3ZhbHVlSW5QYXJlbnRoZXNlcyh2YWx1ZSkge1xuICB2YXIgb3BlbiA9IHZhbHVlLmluZGV4T2YoXCIoXCIpICsgMSxcbiAgICAgIGNsb3NlID0gdmFsdWUuaW5kZXhPZihcIilcIiksXG4gICAgICBuZXN0ZWQgPSB2YWx1ZS5pbmRleE9mKFwiKFwiLCBvcGVuKTtcbiAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZyhvcGVuLCB+bmVzdGVkICYmIG5lc3RlZCA8IGNsb3NlID8gdmFsdWUuaW5kZXhPZihcIilcIiwgY2xvc2UgKyAxKSA6IGNsb3NlKTtcbn0sXG4gICAgX2NvbmZpZ0Vhc2VGcm9tU3RyaW5nID0gZnVuY3Rpb24gX2NvbmZpZ0Vhc2VGcm9tU3RyaW5nKG5hbWUpIHtcbiAgLy9uYW1lIGNhbiBiZSBhIHN0cmluZyBsaWtlIFwiZWxhc3RpYy5vdXQoMSwwLjUpXCIsIGFuZCBwYXNzIGluIF9lYXNlTWFwIGFzIG9iaiBhbmQgaXQnbGwgcGFyc2UgaXQgb3V0IGFuZCBjYWxsIHRoZSBhY3R1YWwgZnVuY3Rpb24gbGlrZSBfZWFzZU1hcC5FbGFzdGljLmVhc2VPdXQuY29uZmlnKDEsMC41KS4gSXQgd2lsbCBhbHNvIHBhcnNlIGN1c3RvbSBlYXNlIHN0cmluZ3MgYXMgbG9uZyBhcyBDdXN0b21FYXNlIGlzIGxvYWRlZCBhbmQgcmVnaXN0ZXJlZCAoaW50ZXJuYWxseSBhcyBfZWFzZU1hcC5fQ0UpLlxuICB2YXIgc3BsaXQgPSAobmFtZSArIFwiXCIpLnNwbGl0KFwiKFwiKSxcbiAgICAgIGVhc2UgPSBfZWFzZU1hcFtzcGxpdFswXV07XG4gIHJldHVybiBlYXNlICYmIHNwbGl0Lmxlbmd0aCA+IDEgJiYgZWFzZS5jb25maWcgPyBlYXNlLmNvbmZpZy5hcHBseShudWxsLCB+bmFtZS5pbmRleE9mKFwie1wiKSA/IFtfcGFyc2VPYmplY3RJblN0cmluZyhzcGxpdFsxXSldIDogX3ZhbHVlSW5QYXJlbnRoZXNlcyhuYW1lKS5zcGxpdChcIixcIikubWFwKF9udW1lcmljSWZQb3NzaWJsZSkpIDogX2Vhc2VNYXAuX0NFICYmIF9jdXN0b21FYXNlRXhwLnRlc3QobmFtZSkgPyBfZWFzZU1hcC5fQ0UoXCJcIiwgbmFtZSkgOiBlYXNlO1xufSxcbiAgICBfaW52ZXJ0RWFzZSA9IGZ1bmN0aW9uIF9pbnZlcnRFYXNlKGVhc2UpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIDEgLSBlYXNlKDEgLSBwKTtcbiAgfTtcbn0sXG4gICAgLy8gYWxsb3cgeW95b0Vhc2UgdG8gYmUgc2V0IGluIGNoaWxkcmVuIGFuZCBoYXZlIHRob3NlIGFmZmVjdGVkIHdoZW4gdGhlIHBhcmVudC9hbmNlc3RvciB0aW1lbGluZSB5b3lvcy5cbl9wcm9wYWdhdGVZb3lvRWFzZSA9IGZ1bmN0aW9uIF9wcm9wYWdhdGVZb3lvRWFzZSh0aW1lbGluZSwgaXNZb3lvKSB7XG4gIHZhciBjaGlsZCA9IHRpbWVsaW5lLl9maXJzdCxcbiAgICAgIGVhc2U7XG5cbiAgd2hpbGUgKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgVGltZWxpbmUpIHtcbiAgICAgIF9wcm9wYWdhdGVZb3lvRWFzZShjaGlsZCwgaXNZb3lvKTtcbiAgICB9IGVsc2UgaWYgKGNoaWxkLnZhcnMueW95b0Vhc2UgJiYgKCFjaGlsZC5feW95byB8fCAhY2hpbGQuX3JlcGVhdCkgJiYgY2hpbGQuX3lveW8gIT09IGlzWW95bykge1xuICAgICAgaWYgKGNoaWxkLnRpbWVsaW5lKSB7XG4gICAgICAgIF9wcm9wYWdhdGVZb3lvRWFzZShjaGlsZC50aW1lbGluZSwgaXNZb3lvKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVhc2UgPSBjaGlsZC5fZWFzZTtcbiAgICAgICAgY2hpbGQuX2Vhc2UgPSBjaGlsZC5feUVhc2U7XG4gICAgICAgIGNoaWxkLl95RWFzZSA9IGVhc2U7XG4gICAgICAgIGNoaWxkLl95b3lvID0gaXNZb3lvO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gIH1cbn0sXG4gICAgX3BhcnNlRWFzZSA9IGZ1bmN0aW9uIF9wYXJzZUVhc2UoZWFzZSwgZGVmYXVsdEVhc2UpIHtcbiAgcmV0dXJuICFlYXNlID8gZGVmYXVsdEVhc2UgOiAoX2lzRnVuY3Rpb24oZWFzZSkgPyBlYXNlIDogX2Vhc2VNYXBbZWFzZV0gfHwgX2NvbmZpZ0Vhc2VGcm9tU3RyaW5nKGVhc2UpKSB8fCBkZWZhdWx0RWFzZTtcbn0sXG4gICAgX2luc2VydEVhc2UgPSBmdW5jdGlvbiBfaW5zZXJ0RWFzZShuYW1lcywgZWFzZUluLCBlYXNlT3V0LCBlYXNlSW5PdXQpIHtcbiAgaWYgKGVhc2VPdXQgPT09IHZvaWQgMCkge1xuICAgIGVhc2VPdXQgPSBmdW5jdGlvbiBlYXNlT3V0KHApIHtcbiAgICAgIHJldHVybiAxIC0gZWFzZUluKDEgLSBwKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKGVhc2VJbk91dCA9PT0gdm9pZCAwKSB7XG4gICAgZWFzZUluT3V0ID0gZnVuY3Rpb24gZWFzZUluT3V0KHApIHtcbiAgICAgIHJldHVybiBwIDwgLjUgPyBlYXNlSW4ocCAqIDIpIC8gMiA6IDEgLSBlYXNlSW4oKDEgLSBwKSAqIDIpIC8gMjtcbiAgICB9O1xuICB9XG5cbiAgdmFyIGVhc2UgPSB7XG4gICAgZWFzZUluOiBlYXNlSW4sXG4gICAgZWFzZU91dDogZWFzZU91dCxcbiAgICBlYXNlSW5PdXQ6IGVhc2VJbk91dFxuICB9LFxuICAgICAgbG93ZXJjYXNlTmFtZTtcblxuICBfZm9yRWFjaE5hbWUobmFtZXMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgX2Vhc2VNYXBbbmFtZV0gPSBfZ2xvYmFsc1tuYW1lXSA9IGVhc2U7XG4gICAgX2Vhc2VNYXBbbG93ZXJjYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKV0gPSBlYXNlT3V0O1xuXG4gICAgZm9yICh2YXIgcCBpbiBlYXNlKSB7XG4gICAgICBfZWFzZU1hcFtsb3dlcmNhc2VOYW1lICsgKHAgPT09IFwiZWFzZUluXCIgPyBcIi5pblwiIDogcCA9PT0gXCJlYXNlT3V0XCIgPyBcIi5vdXRcIiA6IFwiLmluT3V0XCIpXSA9IF9lYXNlTWFwW25hbWUgKyBcIi5cIiArIHBdID0gZWFzZVtwXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlYXNlO1xufSxcbiAgICBfZWFzZUluT3V0RnJvbU91dCA9IGZ1bmN0aW9uIF9lYXNlSW5PdXRGcm9tT3V0KGVhc2VPdXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAgPCAuNSA/ICgxIC0gZWFzZU91dCgxIC0gcCAqIDIpKSAvIDIgOiAuNSArIGVhc2VPdXQoKHAgLSAuNSkgKiAyKSAvIDI7XG4gIH07XG59LFxuICAgIF9jb25maWdFbGFzdGljID0gZnVuY3Rpb24gX2NvbmZpZ0VsYXN0aWModHlwZSwgYW1wbGl0dWRlLCBwZXJpb2QpIHtcbiAgdmFyIHAxID0gYW1wbGl0dWRlID49IDEgPyBhbXBsaXR1ZGUgOiAxLFxuICAgICAgLy9ub3RlOiBpZiBhbXBsaXR1ZGUgaXMgPCAxLCB3ZSBzaW1wbHkgYWRqdXN0IHRoZSBwZXJpb2QgZm9yIGEgbW9yZSBuYXR1cmFsIGZlZWwuIE90aGVyd2lzZSB0aGUgbWF0aCBkb2Vzbid0IHdvcmsgcmlnaHQgYW5kIHRoZSBjdXJ2ZSBzdGFydHMgYXQgMS5cbiAgcDIgPSAocGVyaW9kIHx8ICh0eXBlID8gLjMgOiAuNDUpKSAvIChhbXBsaXR1ZGUgPCAxID8gYW1wbGl0dWRlIDogMSksXG4gICAgICBwMyA9IHAyIC8gXzJQSSAqIChNYXRoLmFzaW4oMSAvIHAxKSB8fCAwKSxcbiAgICAgIGVhc2VPdXQgPSBmdW5jdGlvbiBlYXNlT3V0KHApIHtcbiAgICByZXR1cm4gcCA9PT0gMSA/IDEgOiBwMSAqIE1hdGgucG93KDIsIC0xMCAqIHApICogX3NpbigocCAtIHAzKSAqIHAyKSArIDE7XG4gIH0sXG4gICAgICBlYXNlID0gdHlwZSA9PT0gXCJvdXRcIiA/IGVhc2VPdXQgOiB0eXBlID09PSBcImluXCIgPyBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAxIC0gZWFzZU91dCgxIC0gcCk7XG4gIH0gOiBfZWFzZUluT3V0RnJvbU91dChlYXNlT3V0KTtcblxuICBwMiA9IF8yUEkgLyBwMjsgLy9wcmVjYWxjdWxhdGUgdG8gb3B0aW1pemVcblxuICBlYXNlLmNvbmZpZyA9IGZ1bmN0aW9uIChhbXBsaXR1ZGUsIHBlcmlvZCkge1xuICAgIHJldHVybiBfY29uZmlnRWxhc3RpYyh0eXBlLCBhbXBsaXR1ZGUsIHBlcmlvZCk7XG4gIH07XG5cbiAgcmV0dXJuIGVhc2U7XG59LFxuICAgIF9jb25maWdCYWNrID0gZnVuY3Rpb24gX2NvbmZpZ0JhY2sodHlwZSwgb3ZlcnNob290KSB7XG4gIGlmIChvdmVyc2hvb3QgPT09IHZvaWQgMCkge1xuICAgIG92ZXJzaG9vdCA9IDEuNzAxNTg7XG4gIH1cblxuICB2YXIgZWFzZU91dCA9IGZ1bmN0aW9uIGVhc2VPdXQocCkge1xuICAgIHJldHVybiBwID8gLS1wICogcCAqICgob3ZlcnNob290ICsgMSkgKiBwICsgb3ZlcnNob290KSArIDEgOiAwO1xuICB9LFxuICAgICAgZWFzZSA9IHR5cGUgPT09IFwib3V0XCIgPyBlYXNlT3V0IDogdHlwZSA9PT0gXCJpblwiID8gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gMSAtIGVhc2VPdXQoMSAtIHApO1xuICB9IDogX2Vhc2VJbk91dEZyb21PdXQoZWFzZU91dCk7XG5cbiAgZWFzZS5jb25maWcgPSBmdW5jdGlvbiAob3ZlcnNob290KSB7XG4gICAgcmV0dXJuIF9jb25maWdCYWNrKHR5cGUsIG92ZXJzaG9vdCk7XG4gIH07XG5cbiAgcmV0dXJuIGVhc2U7XG59OyAvLyBhIGNoZWFwZXIgKGtiIGFuZCBjcHUpIGJ1dCBtb3JlIG1pbGQgd2F5IHRvIGdldCBhIHBhcmFtZXRlcml6ZWQgd2VpZ2h0ZWQgZWFzZSBieSBmZWVkaW5nIGluIGEgdmFsdWUgYmV0d2VlbiAtMSAoZWFzZUluKSBhbmQgMSAoZWFzZU91dCkgd2hlcmUgMCBpcyBsaW5lYXIuXG4vLyBfd2VpZ2h0ZWRFYXNlID0gcmF0aW8gPT4ge1xuLy8gXHRsZXQgeSA9IDAuNSArIHJhdGlvIC8gMjtcbi8vIFx0cmV0dXJuIHAgPT4gKDIgKiAoMSAtIHApICogcCAqIHkgKyBwICogcCk7XG4vLyB9LFxuLy8gYSBzdHJvbmdlciAoYnV0IG1vcmUgZXhwZW5zaXZlIGtiL2NwdSkgcGFyYW1ldGVyaXplZCB3ZWlnaHRlZCBlYXNlIHRoYXQgbGV0cyB5b3UgZmVlZCBpbiBhIHZhbHVlIGJldHdlZW4gLTEgKGVhc2VJbikgYW5kIDEgKGVhc2VPdXQpIHdoZXJlIDAgaXMgbGluZWFyLlxuLy8gX3dlaWdodGVkRWFzZVN0cm9uZyA9IHJhdGlvID0+IHtcbi8vIFx0cmF0aW8gPSAuNSArIHJhdGlvIC8gMjtcbi8vIFx0bGV0IG8gPSAxIC8gMyAqIChyYXRpbyA8IC41ID8gcmF0aW8gOiAxIC0gcmF0aW8pLFxuLy8gXHRcdGIgPSByYXRpbyAtIG8sXG4vLyBcdFx0YyA9IHJhdGlvICsgbztcbi8vIFx0cmV0dXJuIHAgPT4gcCA9PT0gMSA/IHAgOiAzICogYiAqICgxIC0gcCkgKiAoMSAtIHApICogcCArIDMgKiBjICogKDEgLSBwKSAqIHAgKiBwICsgcCAqIHAgKiBwO1xuLy8gfTtcblxuXG5fZm9yRWFjaE5hbWUoXCJMaW5lYXIsUXVhZCxDdWJpYyxRdWFydCxRdWludCxTdHJvbmdcIiwgZnVuY3Rpb24gKG5hbWUsIGkpIHtcbiAgdmFyIHBvd2VyID0gaSA8IDUgPyBpICsgMSA6IGk7XG5cbiAgX2luc2VydEVhc2UobmFtZSArIFwiLFBvd2VyXCIgKyAocG93ZXIgLSAxKSwgaSA/IGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIE1hdGgucG93KHAsIHBvd2VyKTtcbiAgfSA6IGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHA7XG4gIH0sIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIDEgLSBNYXRoLnBvdygxIC0gcCwgcG93ZXIpO1xuICB9LCBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwIDwgLjUgPyBNYXRoLnBvdyhwICogMiwgcG93ZXIpIC8gMiA6IDEgLSBNYXRoLnBvdygoMSAtIHApICogMiwgcG93ZXIpIC8gMjtcbiAgfSk7XG59KTtcblxuX2Vhc2VNYXAuTGluZWFyLmVhc2VOb25lID0gX2Vhc2VNYXAubm9uZSA9IF9lYXNlTWFwLkxpbmVhci5lYXNlSW47XG5cbl9pbnNlcnRFYXNlKFwiRWxhc3RpY1wiLCBfY29uZmlnRWxhc3RpYyhcImluXCIpLCBfY29uZmlnRWxhc3RpYyhcIm91dFwiKSwgX2NvbmZpZ0VsYXN0aWMoKSk7XG5cbihmdW5jdGlvbiAobiwgYykge1xuICB2YXIgbjEgPSAxIC8gYyxcbiAgICAgIG4yID0gMiAqIG4xLFxuICAgICAgbjMgPSAyLjUgKiBuMSxcbiAgICAgIGVhc2VPdXQgPSBmdW5jdGlvbiBlYXNlT3V0KHApIHtcbiAgICByZXR1cm4gcCA8IG4xID8gbiAqIHAgKiBwIDogcCA8IG4yID8gbiAqIE1hdGgucG93KHAgLSAxLjUgLyBjLCAyKSArIC43NSA6IHAgPCBuMyA/IG4gKiAocCAtPSAyLjI1IC8gYykgKiBwICsgLjkzNzUgOiBuICogTWF0aC5wb3cocCAtIDIuNjI1IC8gYywgMikgKyAuOTg0Mzc1O1xuICB9O1xuXG4gIF9pbnNlcnRFYXNlKFwiQm91bmNlXCIsIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIDEgLSBlYXNlT3V0KDEgLSBwKTtcbiAgfSwgZWFzZU91dCk7XG59KSg3LjU2MjUsIDIuNzUpO1xuXG5faW5zZXJ0RWFzZShcIkV4cG9cIiwgZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIHAgPyBNYXRoLnBvdygyLCAxMCAqIChwIC0gMSkpIDogMDtcbn0pO1xuXG5faW5zZXJ0RWFzZShcIkNpcmNcIiwgZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIC0oX3NxcnQoMSAtIHAgKiBwKSAtIDEpO1xufSk7XG5cbl9pbnNlcnRFYXNlKFwiU2luZVwiLCBmdW5jdGlvbiAocCkge1xuICByZXR1cm4gcCA9PT0gMSA/IDEgOiAtX2NvcyhwICogX0hBTEZfUEkpICsgMTtcbn0pO1xuXG5faW5zZXJ0RWFzZShcIkJhY2tcIiwgX2NvbmZpZ0JhY2soXCJpblwiKSwgX2NvbmZpZ0JhY2soXCJvdXRcIiksIF9jb25maWdCYWNrKCkpO1xuXG5fZWFzZU1hcC5TdGVwcGVkRWFzZSA9IF9lYXNlTWFwLnN0ZXBzID0gX2dsb2JhbHMuU3RlcHBlZEVhc2UgPSB7XG4gIGNvbmZpZzogZnVuY3Rpb24gY29uZmlnKHN0ZXBzLCBpbW1lZGlhdGVTdGFydCkge1xuICAgIGlmIChzdGVwcyA9PT0gdm9pZCAwKSB7XG4gICAgICBzdGVwcyA9IDE7XG4gICAgfVxuXG4gICAgdmFyIHAxID0gMSAvIHN0ZXBzLFxuICAgICAgICBwMiA9IHN0ZXBzICsgKGltbWVkaWF0ZVN0YXJ0ID8gMCA6IDEpLFxuICAgICAgICBwMyA9IGltbWVkaWF0ZVN0YXJ0ID8gMSA6IDAsXG4gICAgICAgIG1heCA9IDEgLSBfdGlueU51bTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiAoKHAyICogX2NsYW1wKDAsIG1heCwgcCkgfCAwKSArIHAzKSAqIHAxO1xuICAgIH07XG4gIH1cbn07XG5fZGVmYXVsdHMuZWFzZSA9IF9lYXNlTWFwW1wicXVhZC5vdXRcIl07XG5cbl9mb3JFYWNoTmFtZShcIm9uQ29tcGxldGUsb25VcGRhdGUsb25TdGFydCxvblJlcGVhdCxvblJldmVyc2VDb21wbGV0ZSxvbkludGVycnVwdFwiLCBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gX2NhbGxiYWNrTmFtZXMgKz0gbmFtZSArIFwiLFwiICsgbmFtZSArIFwiUGFyYW1zLFwiO1xufSk7XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENBQ0hFXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cblxuZXhwb3J0IHZhciBHU0NhY2hlID0gZnVuY3Rpb24gR1NDYWNoZSh0YXJnZXQsIGhhcm5lc3MpIHtcbiAgdGhpcy5pZCA9IF9nc0lEKys7XG4gIHRhcmdldC5fZ3NhcCA9IHRoaXM7XG4gIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICB0aGlzLmhhcm5lc3MgPSBoYXJuZXNzO1xuICB0aGlzLmdldCA9IGhhcm5lc3MgPyBoYXJuZXNzLmdldCA6IF9nZXRQcm9wZXJ0eTtcbiAgdGhpcy5zZXQgPSBoYXJuZXNzID8gaGFybmVzcy5nZXRTZXR0ZXIgOiBfZ2V0U2V0dGVyO1xufTtcbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQU5JTUFUSU9OXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmV4cG9ydCB2YXIgQW5pbWF0aW9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQW5pbWF0aW9uKHZhcnMpIHtcbiAgICB0aGlzLnZhcnMgPSB2YXJzO1xuICAgIHRoaXMuX2RlbGF5ID0gK3ZhcnMuZGVsYXkgfHwgMDtcblxuICAgIGlmICh0aGlzLl9yZXBlYXQgPSB2YXJzLnJlcGVhdCA9PT0gSW5maW5pdHkgPyAtMiA6IHZhcnMucmVwZWF0IHx8IDApIHtcbiAgICAgIC8vIFRPRE86IHJlcGVhdDogSW5maW5pdHkgb24gYSB0aW1lbGluZSdzIGNoaWxkcmVuIG11c3QgZmxhZyB0aGF0IHRpbWVsaW5lIGludGVybmFsbHkgYW5kIGFmZmVjdCBpdHMgdG90YWxEdXJhdGlvbiwgb3RoZXJ3aXNlIGl0J2xsIHN0b3AgaW4gdGhlIG5lZ2F0aXZlIGRpcmVjdGlvbiB3aGVuIHJlYWNoaW5nIHRoZSBzdGFydC5cbiAgICAgIHRoaXMuX3JEZWxheSA9IHZhcnMucmVwZWF0RGVsYXkgfHwgMDtcbiAgICAgIHRoaXMuX3lveW8gPSAhIXZhcnMueW95byB8fCAhIXZhcnMueW95b0Vhc2U7XG4gICAgfVxuXG4gICAgdGhpcy5fdHMgPSAxO1xuXG4gICAgX3NldER1cmF0aW9uKHRoaXMsICt2YXJzLmR1cmF0aW9uLCAxLCAxKTtcblxuICAgIHRoaXMuZGF0YSA9IHZhcnMuZGF0YTtcbiAgICBfdGlja2VyQWN0aXZlIHx8IF90aWNrZXIud2FrZSgpO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEFuaW1hdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmRlbGF5ID0gZnVuY3Rpb24gZGVsYXkodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgfHwgdmFsdWUgPT09IDApIHtcbiAgICAgIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LnNtb290aENoaWxkVGltaW5nICYmIHRoaXMuc3RhcnRUaW1lKHRoaXMuX3N0YXJ0ICsgdmFsdWUgLSB0aGlzLl9kZWxheSk7XG4gICAgICB0aGlzLl9kZWxheSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2RlbGF5O1xuICB9O1xuXG4gIF9wcm90by5kdXJhdGlvbiA9IGZ1bmN0aW9uIGR1cmF0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnRvdGFsRHVyYXRpb24odGhpcy5fcmVwZWF0ID4gMCA/IHZhbHVlICsgKHZhbHVlICsgdGhpcy5fckRlbGF5KSAqIHRoaXMuX3JlcGVhdCA6IHZhbHVlKSA6IHRoaXMudG90YWxEdXJhdGlvbigpICYmIHRoaXMuX2R1cjtcbiAgfTtcblxuICBfcHJvdG8udG90YWxEdXJhdGlvbiA9IGZ1bmN0aW9uIHRvdGFsRHVyYXRpb24odmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90RHVyO1xuICAgIH1cblxuICAgIHRoaXMuX2RpcnR5ID0gMDtcbiAgICByZXR1cm4gX3NldER1cmF0aW9uKHRoaXMsIHRoaXMuX3JlcGVhdCA8IDAgPyB2YWx1ZSA6ICh2YWx1ZSAtIHRoaXMuX3JlcGVhdCAqIHRoaXMuX3JEZWxheSkgLyAodGhpcy5fcmVwZWF0ICsgMSkpO1xuICB9O1xuXG4gIF9wcm90by50b3RhbFRpbWUgPSBmdW5jdGlvbiB0b3RhbFRpbWUoX3RvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICBfd2FrZSgpO1xuXG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdFRpbWU7XG4gICAgfVxuXG4gICAgdmFyIHBhcmVudCA9IHRoaXMuX2RwO1xuXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuc21vb3RoQ2hpbGRUaW1pbmcgJiYgdGhpcy5fdHMpIHtcbiAgICAgIF9hbGlnblBsYXloZWFkKHRoaXMsIF90b3RhbFRpbWUpO1xuXG4gICAgICAhcGFyZW50Ll9kcCB8fCBwYXJlbnQucGFyZW50IHx8IF9wb3N0QWRkQ2hlY2tzKHBhcmVudCwgdGhpcyk7IC8vIGVkZ2UgY2FzZTogaWYgdGhpcyBpcyBhIGNoaWxkIG9mIGEgdGltZWxpbmUgdGhhdCBhbHJlYWR5IGNvbXBsZXRlZCwgZm9yIGV4YW1wbGUsIHdlIG11c3QgcmUtYWN0aXZhdGUgdGhlIHBhcmVudC5cbiAgICAgIC8vaW4gY2FzZSBhbnkgb2YgdGhlIGFuY2VzdG9yIHRpbWVsaW5lcyBoYWQgY29tcGxldGVkIGJ1dCBzaG91bGQgbm93IGJlIGVuYWJsZWQsIHdlIHNob3VsZCByZXNldCB0aGVpciB0b3RhbFRpbWUoKSB3aGljaCB3aWxsIGFsc28gZW5zdXJlIHRoYXQgdGhleSdyZSBsaW5lZCB1cCBwcm9wZXJseSBhbmQgZW5hYmxlZC4gU2tpcCBmb3IgYW5pbWF0aW9ucyB0aGF0IGFyZSBvbiB0aGUgcm9vdCAod2FzdGVmdWwpLiBFeGFtcGxlOiBhIFRpbWVsaW5lTGl0ZS5leHBvcnRSb290KCkgaXMgcGVyZm9ybWVkIHdoZW4gdGhlcmUncyBhIHBhdXNlZCB0d2VlbiBvbiB0aGUgcm9vdCwgdGhlIGV4cG9ydCB3aWxsIG5vdCBjb21wbGV0ZSB1bnRpbCB0aGF0IHR3ZWVuIGlzIHVucGF1c2VkLCBidXQgaW1hZ2luZSBhIGNoaWxkIGdldHMgcmVzdGFydGVkIGxhdGVyLCBhZnRlciBhbGwgW3VucGF1c2VkXSB0d2VlbnMgaGF2ZSBjb21wbGV0ZWQuIFRoZSBzdGFydCBvZiB0aGF0IGNoaWxkIHdvdWxkIGdldCBwdXNoZWQgb3V0LCBidXQgb25lIG9mIHRoZSBhbmNlc3RvcnMgbWF5IGhhdmUgY29tcGxldGVkLlxuXG4gICAgICB3aGlsZSAocGFyZW50ICYmIHBhcmVudC5wYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudC5wYXJlbnQuX3RpbWUgIT09IHBhcmVudC5fc3RhcnQgKyAocGFyZW50Ll90cyA+PSAwID8gcGFyZW50Ll90VGltZSAvIHBhcmVudC5fdHMgOiAocGFyZW50LnRvdGFsRHVyYXRpb24oKSAtIHBhcmVudC5fdFRpbWUpIC8gLXBhcmVudC5fdHMpKSB7XG4gICAgICAgICAgcGFyZW50LnRvdGFsVGltZShwYXJlbnQuX3RUaW1lLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5wYXJlbnQgJiYgdGhpcy5fZHAuYXV0b1JlbW92ZUNoaWxkcmVuICYmICh0aGlzLl90cyA+IDAgJiYgX3RvdGFsVGltZSA8IHRoaXMuX3REdXIgfHwgdGhpcy5fdHMgPCAwICYmIF90b3RhbFRpbWUgPiAwIHx8ICF0aGlzLl90RHVyICYmICFfdG90YWxUaW1lKSkge1xuICAgICAgICAvL2lmIHRoZSBhbmltYXRpb24gZG9lc24ndCBoYXZlIGEgcGFyZW50LCBwdXQgaXQgYmFjayBpbnRvIGl0cyBsYXN0IHBhcmVudCAocmVjb3JkZWQgYXMgX2RwIGZvciBleGFjdGx5IGNhc2VzIGxpa2UgdGhpcykuIExpbWl0IHRvIHBhcmVudHMgd2l0aCBhdXRvUmVtb3ZlQ2hpbGRyZW4gKGxpa2UgZ2xvYmFsVGltZWxpbmUpIHNvIHRoYXQgaWYgdGhlIHVzZXIgbWFudWFsbHkgcmVtb3ZlcyBhbiBhbmltYXRpb24gZnJvbSBhIHRpbWVsaW5lIGFuZCB0aGVuIGFsdGVycyBpdHMgcGxheWhlYWQsIGl0IGRvZXNuJ3QgZ2V0IGFkZGVkIGJhY2sgaW4uXG4gICAgICAgIF9hZGRUb1RpbWVsaW5lKHRoaXMuX2RwLCB0aGlzLCB0aGlzLl9zdGFydCAtIHRoaXMuX2RlbGF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fdFRpbWUgIT09IF90b3RhbFRpbWUgfHwgIXRoaXMuX2R1ciAmJiAhc3VwcHJlc3NFdmVudHMgfHwgdGhpcy5faW5pdHRlZCAmJiBNYXRoLmFicyh0aGlzLl96VGltZSkgPT09IF90aW55TnVtIHx8ICFfdG90YWxUaW1lICYmICF0aGlzLl9pbml0dGVkICYmICh0aGlzLmFkZCB8fCB0aGlzLl9wdExvb2t1cCkpIHtcbiAgICAgIC8vIGNoZWNrIGZvciBfcHRMb29rdXAgb24gYSBUd2VlbiBpbnN0YW5jZSB0byBlbnN1cmUgaXQgaGFzIGFjdHVhbGx5IGZpbmlzaGVkIGJlaW5nIGluc3RhbnRpYXRlZCwgb3RoZXJ3aXNlIGlmIHRoaXMucmV2ZXJzZSgpIGdldHMgY2FsbGVkIGluIHRoZSBBbmltYXRpb24gY29uc3RydWN0b3IsIGl0IGNvdWxkIHRyaWdnZXIgYSByZW5kZXIoKSBoZXJlIGV2ZW4gdGhvdWdoIHRoZSBfdGFyZ2V0cyB3ZXJlbid0IHBvcHVsYXRlZCwgdGh1cyB3aGVuIF9pbml0KCkgaXMgY2FsbGVkIHRoZXJlIHdvbid0IGJlIGFueSBQcm9wVHdlZW5zIChpdCdsbCBhY3QgbGlrZSB0aGUgdHdlZW4gaXMgbm9uLWZ1bmN0aW9uYWwpXG4gICAgICB0aGlzLl90cyB8fCAodGhpcy5fcFRpbWUgPSBfdG90YWxUaW1lKTsgLy8gb3RoZXJ3aXNlLCBpZiBhbiBhbmltYXRpb24gaXMgcGF1c2VkLCB0aGVuIHRoZSBwbGF5aGVhZCBpcyBtb3ZlZCBiYWNrIHRvIHplcm8sIHRoZW4gcmVzdW1lZCwgaXQnZCByZXZlcnQgYmFjayB0byB0aGUgb3JpZ2luYWwgdGltZSBhdCB0aGUgcGF1c2VcbiAgICAgIC8vaWYgKCF0aGlzLl9sb2NrKSB7IC8vIGF2b2lkIGVuZGxlc3MgcmVjdXJzaW9uIChub3Qgc3VyZSB3ZSBuZWVkIHRoaXMgeWV0IG9yIGlmIGl0J3Mgd29ydGggdGhlIHBlcmZvcm1hbmNlIGhpdClcbiAgICAgIC8vICAgdGhpcy5fbG9jayA9IDE7XG5cbiAgICAgIF9sYXp5U2FmZVJlbmRlcih0aGlzLCBfdG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cyk7IC8vICAgdGhpcy5fbG9jayA9IDA7XG4gICAgICAvL31cblxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by50aW1lID0gZnVuY3Rpb24gdGltZSh2YWx1ZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMudG90YWxUaW1lKE1hdGgubWluKHRoaXMudG90YWxEdXJhdGlvbigpLCB2YWx1ZSArIF9lbGFwc2VkQ3ljbGVEdXJhdGlvbih0aGlzKSkgJSAodGhpcy5fZHVyICsgdGhpcy5fckRlbGF5KSB8fCAodmFsdWUgPyB0aGlzLl9kdXIgOiAwKSwgc3VwcHJlc3NFdmVudHMpIDogdGhpcy5fdGltZTsgLy8gbm90ZTogaWYgdGhlIG1vZHVsdXMgcmVzdWx0cyBpbiAwLCB0aGUgcGxheWhlYWQgY291bGQgYmUgZXhhY3RseSBhdCB0aGUgZW5kIG9yIHRoZSBiZWdpbm5pbmcsIGFuZCB3ZSBhbHdheXMgZGVmZXIgdG8gdGhlIEVORCB3aXRoIGEgbm9uLXplcm8gdmFsdWUsIG90aGVyd2lzZSBpZiB5b3Ugc2V0IHRoZSB0aW1lKCkgdG8gdGhlIHZlcnkgZW5kIChkdXJhdGlvbigpKSwgaXQgd291bGQgcmVuZGVyIGF0IHRoZSBTVEFSVCFcbiAgfTtcblxuICBfcHJvdG8udG90YWxQcm9ncmVzcyA9IGZ1bmN0aW9uIHRvdGFsUHJvZ3Jlc3ModmFsdWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnRvdGFsVGltZSh0aGlzLnRvdGFsRHVyYXRpb24oKSAqIHZhbHVlLCBzdXBwcmVzc0V2ZW50cykgOiB0aGlzLnRvdGFsRHVyYXRpb24oKSA/IE1hdGgubWluKDEsIHRoaXMuX3RUaW1lIC8gdGhpcy5fdER1cikgOiB0aGlzLnJhdGlvO1xuICB9O1xuXG4gIF9wcm90by5wcm9ncmVzcyA9IGZ1bmN0aW9uIHByb2dyZXNzKHZhbHVlLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy50b3RhbFRpbWUodGhpcy5kdXJhdGlvbigpICogKHRoaXMuX3lveW8gJiYgISh0aGlzLml0ZXJhdGlvbigpICYgMSkgPyAxIC0gdmFsdWUgOiB2YWx1ZSkgKyBfZWxhcHNlZEN5Y2xlRHVyYXRpb24odGhpcyksIHN1cHByZXNzRXZlbnRzKSA6IHRoaXMuZHVyYXRpb24oKSA/IE1hdGgubWluKDEsIHRoaXMuX3RpbWUgLyB0aGlzLl9kdXIpIDogdGhpcy5yYXRpbztcbiAgfTtcblxuICBfcHJvdG8uaXRlcmF0aW9uID0gZnVuY3Rpb24gaXRlcmF0aW9uKHZhbHVlLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIHZhciBjeWNsZUR1cmF0aW9uID0gdGhpcy5kdXJhdGlvbigpICsgdGhpcy5fckRlbGF5O1xuXG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnRvdGFsVGltZSh0aGlzLl90aW1lICsgKHZhbHVlIC0gMSkgKiBjeWNsZUR1cmF0aW9uLCBzdXBwcmVzc0V2ZW50cykgOiB0aGlzLl9yZXBlYXQgPyBfYW5pbWF0aW9uQ3ljbGUodGhpcy5fdFRpbWUsIGN5Y2xlRHVyYXRpb24pICsgMSA6IDE7XG4gIH0gLy8gcG90ZW50aWFsIGZ1dHVyZSBhZGRpdGlvbjpcbiAgLy8gaXNQbGF5aW5nQmFja3dhcmRzKCkge1xuICAvLyBcdGxldCBhbmltYXRpb24gPSB0aGlzLFxuICAvLyBcdFx0b3JpZW50YXRpb24gPSAxOyAvLyAxID0gZm9yd2FyZCwgLTEgPSBiYWNrd2FyZFxuICAvLyBcdHdoaWxlIChhbmltYXRpb24pIHtcbiAgLy8gXHRcdG9yaWVudGF0aW9uICo9IGFuaW1hdGlvbi5yZXZlcnNlZCgpIHx8IChhbmltYXRpb24ucmVwZWF0KCkgJiYgIShhbmltYXRpb24uaXRlcmF0aW9uKCkgJiAxKSkgPyAtMSA6IDE7XG4gIC8vIFx0XHRhbmltYXRpb24gPSBhbmltYXRpb24ucGFyZW50O1xuICAvLyBcdH1cbiAgLy8gXHRyZXR1cm4gb3JpZW50YXRpb24gPCAwO1xuICAvLyB9XG4gIDtcblxuICBfcHJvdG8udGltZVNjYWxlID0gZnVuY3Rpb24gdGltZVNjYWxlKHZhbHVlKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcnRzID09PSAtX3RpbnlOdW0gPyAwIDogdGhpcy5fcnRzOyAvLyByZWNvcmRlZCB0aW1lU2NhbGUuIFNwZWNpYWwgY2FzZTogaWYgc29tZW9uZSBjYWxscyByZXZlcnNlKCkgb24gYW4gYW5pbWF0aW9uIHdpdGggdGltZVNjYWxlIG9mIDAsIHdlIGFzc2lnbiBpdCAtX3RpbnlOdW0gdG8gcmVtZW1iZXIgaXQncyByZXZlcnNlZC5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcnRzID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIHRUaW1lID0gdGhpcy5wYXJlbnQgJiYgdGhpcy5fdHMgPyBfcGFyZW50VG9DaGlsZFRvdGFsVGltZSh0aGlzLnBhcmVudC5fdGltZSwgdGhpcykgOiB0aGlzLl90VGltZTsgLy8gbWFrZSBzdXJlIHRvIGRvIHRoZSBwYXJlbnRUb0NoaWxkVG90YWxUaW1lKCkgQkVGT1JFIHNldHRpbmcgdGhlIG5ldyBfdHMgYmVjYXVzZSB0aGUgb2xkIG9uZSBtdXN0IGJlIHVzZWQgaW4gdGhhdCBjYWxjdWxhdGlvbi5cbiAgICAvLyBmdXR1cmUgYWRkaXRpb24/IFVwIHNpZGU6IGZhc3QgYW5kIG1pbmltYWwgZmlsZSBzaXplLiBEb3duIHNpZGU6IG9ubHkgd29ya3Mgb24gdGhpcyBhbmltYXRpb247IGlmIGEgdGltZWxpbmUgaXMgcmV2ZXJzZWQsIGZvciBleGFtcGxlLCBpdHMgY2hpbGRyZW5zJyBvblJldmVyc2Ugd291bGRuJ3QgZ2V0IGNhbGxlZC5cbiAgICAvLygrdmFsdWUgPCAwICYmIHRoaXMuX3J0cyA+PSAwKSAmJiBfY2FsbGJhY2sodGhpcywgXCJvblJldmVyc2VcIiwgdHJ1ZSk7XG4gICAgLy8gcHJpb3JpdGl6ZSByZW5kZXJpbmcgd2hlcmUgdGhlIHBhcmVudCdzIHBsYXloZWFkIGxpbmVzIHVwIGluc3RlYWQgb2YgdGhpcy5fdFRpbWUgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBhIHR3ZWVuIHRoYXQncyBhbmltYXRpbmcgYW5vdGhlciB0d2VlbidzIHRpbWVTY2FsZSBpbiB0aGUgc2FtZSByZW5kZXJpbmcgbG9vcCAoc2FtZSBwYXJlbnQpLCB0aHVzIGlmIHRoZSB0aW1lU2NhbGUgdHdlZW4gcmVuZGVycyBmaXJzdCwgaXQgd291bGQgYWx0ZXIgX3N0YXJ0IEJFRk9SRSBfdFRpbWUgd2FzIHNldCBvbiB0aGF0IHRpY2sgKGluIHRoZSByZW5kZXJpbmcgbG9vcCksIGVmZmVjdGl2ZWx5IGZyZWV6aW5nIGl0IHVudGlsIHRoZSB0aW1lU2NhbGUgdHdlZW4gZmluaXNoZXMuXG5cbiAgICB0aGlzLl9ydHMgPSArdmFsdWUgfHwgMDtcbiAgICB0aGlzLl90cyA9IHRoaXMuX3BzIHx8IHZhbHVlID09PSAtX3RpbnlOdW0gPyAwIDogdGhpcy5fcnRzOyAvLyBfdHMgaXMgdGhlIGZ1bmN0aW9uYWwgdGltZVNjYWxlIHdoaWNoIHdvdWxkIGJlIDAgaWYgdGhlIGFuaW1hdGlvbiBpcyBwYXVzZWQuXG5cbiAgICBfcmVjYWNoZUFuY2VzdG9ycyh0aGlzLnRvdGFsVGltZShfY2xhbXAoLXRoaXMuX2RlbGF5LCB0aGlzLl90RHVyLCB0VGltZSksIHRydWUpKTtcblxuICAgIF9zZXRFbmQodGhpcyk7IC8vIGlmIHBhcmVudC5zbW9vdGhDaGlsZFRpbWluZyB3YXMgZmFsc2UsIHRoZSBlbmQgdGltZSBkaWRuJ3QgZ2V0IHVwZGF0ZWQgaW4gdGhlIF9hbGlnblBsYXloZWFkKCkgbWV0aG9kLCBzbyBkbyBpdCBoZXJlLlxuXG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8ucGF1c2VkID0gZnVuY3Rpb24gcGF1c2VkKHZhbHVlKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcHM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BzICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fcHMgPSB2YWx1ZTtcblxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3BUaW1lID0gdGhpcy5fdFRpbWUgfHwgTWF0aC5tYXgoLXRoaXMuX2RlbGF5LCB0aGlzLnJhd1RpbWUoKSk7IC8vIGlmIHRoZSBwYXVzZSBvY2N1cnMgZHVyaW5nIHRoZSBkZWxheSBwaGFzZSwgbWFrZSBzdXJlIHRoYXQncyBmYWN0b3JlZCBpbiB3aGVuIHJlc3VtaW5nLlxuXG4gICAgICAgIHRoaXMuX3RzID0gdGhpcy5fYWN0ID0gMDsgLy8gX3RzIGlzIHRoZSBmdW5jdGlvbmFsIHRpbWVTY2FsZSwgc28gYSBwYXVzZWQgdHdlZW4gd291bGQgZWZmZWN0aXZlbHkgaGF2ZSBhIHRpbWVTY2FsZSBvZiAwLiBXZSByZWNvcmQgdGhlIFwicmVhbFwiIHRpbWVTY2FsZSBhcyBfcnRzIChyZWNvcmRlZCB0aW1lIHNjYWxlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3dha2UoKTtcblxuICAgICAgICB0aGlzLl90cyA9IHRoaXMuX3J0czsgLy9vbmx5IGRlZmVyIHRvIF9wVGltZSAocGF1c2VUaW1lKSBpZiB0VGltZSBpcyB6ZXJvLiBSZW1lbWJlciwgc29tZW9uZSBjb3VsZCBwYXVzZSgpIGFuIGFuaW1hdGlvbiwgdGhlbiBzY3J1YiB0aGUgcGxheWhlYWQgYW5kIHJlc3VtZSgpLiBJZiB0aGUgcGFyZW50IGRvZXNuJ3QgaGF2ZSBzbW9vdGhDaGlsZFRpbWluZywgd2UgcmVuZGVyIGF0IHRoZSByYXdUaW1lKCkgYmVjYXVzZSB0aGUgc3RhcnRUaW1lIHdvbid0IGdldCB1cGRhdGVkLlxuXG4gICAgICAgIHRoaXMudG90YWxUaW1lKHRoaXMucGFyZW50ICYmICF0aGlzLnBhcmVudC5zbW9vdGhDaGlsZFRpbWluZyA/IHRoaXMucmF3VGltZSgpIDogdGhpcy5fdFRpbWUgfHwgdGhpcy5fcFRpbWUsIHRoaXMucHJvZ3Jlc3MoKSA9PT0gMSAmJiBNYXRoLmFicyh0aGlzLl96VGltZSkgIT09IF90aW55TnVtICYmICh0aGlzLl90VGltZSAtPSBfdGlueU51bSkpOyAvLyBlZGdlIGNhc2U6IGFuaW1hdGlvbi5wcm9ncmVzcygxKS5wYXVzZSgpLnBsYXkoKSB3b3VsZG4ndCByZW5kZXIgYWdhaW4gYmVjYXVzZSB0aGUgcGxheWhlYWQgaXMgYWxyZWFkeSBhdCB0aGUgZW5kLCBidXQgdGhlIGNhbGwgdG8gdG90YWxUaW1lKCkgYmVsb3cgd2lsbCBhZGQgaXQgYmFjayB0byBpdHMgcGFyZW50Li4uYW5kIG5vdCByZW1vdmUgaXQgYWdhaW4gKHNpbmNlIHJlbW92aW5nIG9ubHkgaGFwcGVucyB1cG9uIHJlbmRlcmluZyBhdCBhIG5ldyB0aW1lKS4gT2Zmc2V0dGluZyB0aGUgX3RUaW1lIHNsaWdodGx5IGlzIGRvbmUgc2ltcGx5IHRvIGNhdXNlIHRoZSBmaW5hbCByZW5kZXIgaW4gdG90YWxUaW1lKCkgdGhhdCdsbCBwb3AgaXQgb2ZmIGl0cyB0aW1lbGluZSAoaWYgYXV0b1JlbW92ZUNoaWxkcmVuIGlzIHRydWUsIG9mIGNvdXJzZSkuIENoZWNrIHRvIG1ha2Ugc3VyZSBfelRpbWUgaXNuJ3QgLV90aW55TnVtIHRvIGF2b2lkIGFuIGVkZ2UgY2FzZSB3aGVyZSB0aGUgcGxheWhlYWQgaXMgcHVzaGVkIHRvIHRoZSBlbmQgYnV0IElOU0lERSBhIHR3ZWVuL2NhbGxiYWNrLCB0aGUgdGltZWxpbmUgaXRzZWxmIGlzIHBhdXNlZCB0aHVzIGhhbHRpbmcgcmVuZGVyaW5nIGFuZCBsZWF2aW5nIGEgZmV3IHVucmVuZGVyZWQuIFdoZW4gcmVzdW1pbmcsIGl0IHdvdWxkbid0IHJlbmRlciB0aG9zZSBvdGhlcndpc2UuXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnN0YXJ0VGltZSA9IGZ1bmN0aW9uIHN0YXJ0VGltZSh2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9zdGFydCA9IHZhbHVlO1xuICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50IHx8IHRoaXMuX2RwO1xuICAgICAgcGFyZW50ICYmIChwYXJlbnQuX3NvcnQgfHwgIXRoaXMucGFyZW50KSAmJiBfYWRkVG9UaW1lbGluZShwYXJlbnQsIHRoaXMsIHZhbHVlIC0gdGhpcy5fZGVsYXkpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0O1xuICB9O1xuXG4gIF9wcm90by5lbmRUaW1lID0gZnVuY3Rpb24gZW5kVGltZShpbmNsdWRlUmVwZWF0cykge1xuICAgIHJldHVybiB0aGlzLl9zdGFydCArIChfaXNOb3RGYWxzZShpbmNsdWRlUmVwZWF0cykgPyB0aGlzLnRvdGFsRHVyYXRpb24oKSA6IHRoaXMuZHVyYXRpb24oKSkgLyBNYXRoLmFicyh0aGlzLl90cyB8fCAxKTtcbiAgfTtcblxuICBfcHJvdG8ucmF3VGltZSA9IGZ1bmN0aW9uIHJhd1RpbWUod3JhcFJlcGVhdHMpIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQgfHwgdGhpcy5fZHA7IC8vIF9kcCA9IGRldGFjaGVkIHBhcmVudFxuXG4gICAgcmV0dXJuICFwYXJlbnQgPyB0aGlzLl90VGltZSA6IHdyYXBSZXBlYXRzICYmICghdGhpcy5fdHMgfHwgdGhpcy5fcmVwZWF0ICYmIHRoaXMuX3RpbWUgJiYgdGhpcy50b3RhbFByb2dyZXNzKCkgPCAxKSA/IHRoaXMuX3RUaW1lICUgKHRoaXMuX2R1ciArIHRoaXMuX3JEZWxheSkgOiAhdGhpcy5fdHMgPyB0aGlzLl90VGltZSA6IF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lKHBhcmVudC5yYXdUaW1lKHdyYXBSZXBlYXRzKSwgdGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvLmdsb2JhbFRpbWUgPSBmdW5jdGlvbiBnbG9iYWxUaW1lKHJhd1RpbWUpIHtcbiAgICB2YXIgYW5pbWF0aW9uID0gdGhpcyxcbiAgICAgICAgdGltZSA9IGFyZ3VtZW50cy5sZW5ndGggPyByYXdUaW1lIDogYW5pbWF0aW9uLnJhd1RpbWUoKTtcblxuICAgIHdoaWxlIChhbmltYXRpb24pIHtcbiAgICAgIHRpbWUgPSBhbmltYXRpb24uX3N0YXJ0ICsgdGltZSAvIChhbmltYXRpb24uX3RzIHx8IDEpO1xuICAgICAgYW5pbWF0aW9uID0gYW5pbWF0aW9uLl9kcDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGltZTtcbiAgfTtcblxuICBfcHJvdG8ucmVwZWF0ID0gZnVuY3Rpb24gcmVwZWF0KHZhbHVlKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3JlcGVhdCA9IHZhbHVlID09PSBJbmZpbml0eSA/IC0yIDogdmFsdWU7XG4gICAgICByZXR1cm4gX29uVXBkYXRlVG90YWxEdXJhdGlvbih0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcmVwZWF0ID09PSAtMiA/IEluZmluaXR5IDogdGhpcy5fcmVwZWF0O1xuICB9O1xuXG4gIF9wcm90by5yZXBlYXREZWxheSA9IGZ1bmN0aW9uIHJlcGVhdERlbGF5KHZhbHVlKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHZhciB0aW1lID0gdGhpcy5fdGltZTtcbiAgICAgIHRoaXMuX3JEZWxheSA9IHZhbHVlO1xuXG4gICAgICBfb25VcGRhdGVUb3RhbER1cmF0aW9uKHRoaXMpO1xuXG4gICAgICByZXR1cm4gdGltZSA/IHRoaXMudGltZSh0aW1lKSA6IHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3JEZWxheTtcbiAgfTtcblxuICBfcHJvdG8ueW95byA9IGZ1bmN0aW9uIHlveW8odmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5feW95byA9IHZhbHVlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3lveW87XG4gIH07XG5cbiAgX3Byb3RvLnNlZWsgPSBmdW5jdGlvbiBzZWVrKHBvc2l0aW9uLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIHJldHVybiB0aGlzLnRvdGFsVGltZShfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbiksIF9pc05vdEZhbHNlKHN1cHByZXNzRXZlbnRzKSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlc3RhcnQgPSBmdW5jdGlvbiByZXN0YXJ0KGluY2x1ZGVEZWxheSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5KCkudG90YWxUaW1lKGluY2x1ZGVEZWxheSA/IC10aGlzLl9kZWxheSA6IDAsIF9pc05vdEZhbHNlKHN1cHByZXNzRXZlbnRzKSk7XG4gIH07XG5cbiAgX3Byb3RvLnBsYXkgPSBmdW5jdGlvbiBwbGF5KGZyb20sIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgZnJvbSAhPSBudWxsICYmIHRoaXMuc2Vlayhmcm9tLCBzdXBwcmVzc0V2ZW50cyk7XG4gICAgcmV0dXJuIHRoaXMucmV2ZXJzZWQoZmFsc2UpLnBhdXNlZChmYWxzZSk7XG4gIH07XG5cbiAgX3Byb3RvLnJldmVyc2UgPSBmdW5jdGlvbiByZXZlcnNlKGZyb20sIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgZnJvbSAhPSBudWxsICYmIHRoaXMuc2Vlayhmcm9tIHx8IHRoaXMudG90YWxEdXJhdGlvbigpLCBzdXBwcmVzc0V2ZW50cyk7XG4gICAgcmV0dXJuIHRoaXMucmV2ZXJzZWQodHJ1ZSkucGF1c2VkKGZhbHNlKTtcbiAgfTtcblxuICBfcHJvdG8ucGF1c2UgPSBmdW5jdGlvbiBwYXVzZShhdFRpbWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgYXRUaW1lICE9IG51bGwgJiYgdGhpcy5zZWVrKGF0VGltZSwgc3VwcHJlc3NFdmVudHMpO1xuICAgIHJldHVybiB0aGlzLnBhdXNlZCh0cnVlKTtcbiAgfTtcblxuICBfcHJvdG8ucmVzdW1lID0gZnVuY3Rpb24gcmVzdW1lKCkge1xuICAgIHJldHVybiB0aGlzLnBhdXNlZChmYWxzZSk7XG4gIH07XG5cbiAgX3Byb3RvLnJldmVyc2VkID0gZnVuY3Rpb24gcmV2ZXJzZWQodmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgISF2YWx1ZSAhPT0gdGhpcy5yZXZlcnNlZCgpICYmIHRoaXMudGltZVNjYWxlKC10aGlzLl9ydHMgfHwgKHZhbHVlID8gLV90aW55TnVtIDogMCkpOyAvLyBpbiBjYXNlIHRpbWVTY2FsZSBpcyB6ZXJvLCByZXZlcnNpbmcgd291bGQgaGF2ZSBubyBlZmZlY3Qgc28gd2UgdXNlIF90aW55TnVtLlxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcnRzIDwgMDtcbiAgfTtcblxuICBfcHJvdG8uaW52YWxpZGF0ZSA9IGZ1bmN0aW9uIGludmFsaWRhdGUoKSB7XG4gICAgdGhpcy5faW5pdHRlZCA9IHRoaXMuX2FjdCA9IDA7XG4gICAgdGhpcy5felRpbWUgPSAtX3RpbnlOdW07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmlzQWN0aXZlID0gZnVuY3Rpb24gaXNBY3RpdmUoKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50IHx8IHRoaXMuX2RwLFxuICAgICAgICBzdGFydCA9IHRoaXMuX3N0YXJ0LFxuICAgICAgICByYXdUaW1lO1xuICAgIHJldHVybiAhISghcGFyZW50IHx8IHRoaXMuX3RzICYmIHRoaXMuX2luaXR0ZWQgJiYgcGFyZW50LmlzQWN0aXZlKCkgJiYgKHJhd1RpbWUgPSBwYXJlbnQucmF3VGltZSh0cnVlKSkgPj0gc3RhcnQgJiYgcmF3VGltZSA8IHRoaXMuZW5kVGltZSh0cnVlKSAtIF90aW55TnVtKTtcbiAgfTtcblxuICBfcHJvdG8uZXZlbnRDYWxsYmFjayA9IGZ1bmN0aW9uIGV2ZW50Q2FsbGJhY2sodHlwZSwgY2FsbGJhY2ssIHBhcmFtcykge1xuICAgIHZhciB2YXJzID0gdGhpcy52YXJzO1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgIGRlbGV0ZSB2YXJzW3R5cGVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyc1t0eXBlXSA9IGNhbGxiYWNrO1xuICAgICAgICBwYXJhbXMgJiYgKHZhcnNbdHlwZSArIFwiUGFyYW1zXCJdID0gcGFyYW1zKTtcbiAgICAgICAgdHlwZSA9PT0gXCJvblVwZGF0ZVwiICYmICh0aGlzLl9vblVwZGF0ZSA9IGNhbGxiYWNrKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcnNbdHlwZV07XG4gIH07XG5cbiAgX3Byb3RvLnRoZW4gPSBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgdmFyIGYgPSBfaXNGdW5jdGlvbihvbkZ1bGZpbGxlZCkgPyBvbkZ1bGZpbGxlZCA6IF9wYXNzVGhyb3VnaCxcbiAgICAgICAgICBfcmVzb2x2ZSA9IGZ1bmN0aW9uIF9yZXNvbHZlKCkge1xuICAgICAgICB2YXIgX3RoZW4gPSBzZWxmLnRoZW47XG4gICAgICAgIHNlbGYudGhlbiA9IG51bGw7IC8vIHRlbXBvcmFyaWx5IG51bGwgdGhlIHRoZW4oKSBtZXRob2QgdG8gYXZvaWQgYW4gaW5maW5pdGUgbG9vcCAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmVlbnNvY2svR1NBUC9pc3N1ZXMvMzIyKVxuXG4gICAgICAgIF9pc0Z1bmN0aW9uKGYpICYmIChmID0gZihzZWxmKSkgJiYgKGYudGhlbiB8fCBmID09PSBzZWxmKSAmJiAoc2VsZi50aGVuID0gX3RoZW4pO1xuICAgICAgICByZXNvbHZlKGYpO1xuICAgICAgICBzZWxmLnRoZW4gPSBfdGhlbjtcbiAgICAgIH07XG5cbiAgICAgIGlmIChzZWxmLl9pbml0dGVkICYmIHNlbGYudG90YWxQcm9ncmVzcygpID09PSAxICYmIHNlbGYuX3RzID49IDAgfHwgIXNlbGYuX3RUaW1lICYmIHNlbGYuX3RzIDwgMCkge1xuICAgICAgICBfcmVzb2x2ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5fcHJvbSA9IF9yZXNvbHZlO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5raWxsID0gZnVuY3Rpb24ga2lsbCgpIHtcbiAgICBfaW50ZXJydXB0KHRoaXMpO1xuICB9O1xuXG4gIHJldHVybiBBbmltYXRpb247XG59KCk7XG5cbl9zZXREZWZhdWx0cyhBbmltYXRpb24ucHJvdG90eXBlLCB7XG4gIF90aW1lOiAwLFxuICBfc3RhcnQ6IDAsXG4gIF9lbmQ6IDAsXG4gIF90VGltZTogMCxcbiAgX3REdXI6IDAsXG4gIF9kaXJ0eTogMCxcbiAgX3JlcGVhdDogMCxcbiAgX3lveW86IGZhbHNlLFxuICBwYXJlbnQ6IG51bGwsXG4gIF9pbml0dGVkOiBmYWxzZSxcbiAgX3JEZWxheTogMCxcbiAgX3RzOiAxLFxuICBfZHA6IDAsXG4gIHJhdGlvOiAwLFxuICBfelRpbWU6IC1fdGlueU51bSxcbiAgX3Byb206IDAsXG4gIF9wczogZmFsc2UsXG4gIF9ydHM6IDFcbn0pO1xuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFRJTUVMSU5FXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuXG5leHBvcnQgdmFyIFRpbWVsaW5lID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQW5pbWF0aW9uKSB7XG4gIF9pbmhlcml0c0xvb3NlKFRpbWVsaW5lLCBfQW5pbWF0aW9uKTtcblxuICBmdW5jdGlvbiBUaW1lbGluZSh2YXJzLCBwb3NpdGlvbikge1xuICAgIHZhciBfdGhpcztcblxuICAgIGlmICh2YXJzID09PSB2b2lkIDApIHtcbiAgICAgIHZhcnMgPSB7fTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9BbmltYXRpb24uY2FsbCh0aGlzLCB2YXJzKSB8fCB0aGlzO1xuICAgIF90aGlzLmxhYmVscyA9IHt9O1xuICAgIF90aGlzLnNtb290aENoaWxkVGltaW5nID0gISF2YXJzLnNtb290aENoaWxkVGltaW5nO1xuICAgIF90aGlzLmF1dG9SZW1vdmVDaGlsZHJlbiA9ICEhdmFycy5hdXRvUmVtb3ZlQ2hpbGRyZW47XG4gICAgX3RoaXMuX3NvcnQgPSBfaXNOb3RGYWxzZSh2YXJzLnNvcnRDaGlsZHJlbik7XG4gICAgX2dsb2JhbFRpbWVsaW5lICYmIF9hZGRUb1RpbWVsaW5lKHZhcnMucGFyZW50IHx8IF9nbG9iYWxUaW1lbGluZSwgX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIHBvc2l0aW9uKTtcbiAgICB2YXJzLnJldmVyc2VkICYmIF90aGlzLnJldmVyc2UoKTtcbiAgICB2YXJzLnBhdXNlZCAmJiBfdGhpcy5wYXVzZWQodHJ1ZSk7XG4gICAgdmFycy5zY3JvbGxUcmlnZ2VyICYmIF9zY3JvbGxUcmlnZ2VyKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCB2YXJzLnNjcm9sbFRyaWdnZXIpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8yID0gVGltZWxpbmUucHJvdG90eXBlO1xuXG4gIF9wcm90bzIudG8gPSBmdW5jdGlvbiB0byh0YXJnZXRzLCB2YXJzLCBwb3NpdGlvbikge1xuICAgIF9jcmVhdGVUd2VlblR5cGUoMCwgYXJndW1lbnRzLCB0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuZnJvbSA9IGZ1bmN0aW9uIGZyb20odGFyZ2V0cywgdmFycywgcG9zaXRpb24pIHtcbiAgICBfY3JlYXRlVHdlZW5UeXBlKDEsIGFyZ3VtZW50cywgdGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLmZyb21UbyA9IGZ1bmN0aW9uIGZyb21Ubyh0YXJnZXRzLCBmcm9tVmFycywgdG9WYXJzLCBwb3NpdGlvbikge1xuICAgIF9jcmVhdGVUd2VlblR5cGUoMiwgYXJndW1lbnRzLCB0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuc2V0ID0gZnVuY3Rpb24gc2V0KHRhcmdldHMsIHZhcnMsIHBvc2l0aW9uKSB7XG4gICAgdmFycy5kdXJhdGlvbiA9IDA7XG4gICAgdmFycy5wYXJlbnQgPSB0aGlzO1xuICAgIF9pbmhlcml0RGVmYXVsdHModmFycykucmVwZWF0RGVsYXkgfHwgKHZhcnMucmVwZWF0ID0gMCk7XG4gICAgdmFycy5pbW1lZGlhdGVSZW5kZXIgPSAhIXZhcnMuaW1tZWRpYXRlUmVuZGVyO1xuICAgIG5ldyBUd2Vlbih0YXJnZXRzLCB2YXJzLCBfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbiksIDEpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuY2FsbCA9IGZ1bmN0aW9uIGNhbGwoY2FsbGJhY2ssIHBhcmFtcywgcG9zaXRpb24pIHtcbiAgICByZXR1cm4gX2FkZFRvVGltZWxpbmUodGhpcywgVHdlZW4uZGVsYXllZENhbGwoMCwgY2FsbGJhY2ssIHBhcmFtcyksIHBvc2l0aW9uKTtcbiAgfSAvL09OTFkgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkhIE1heWJlIGRlbGV0ZT9cbiAgO1xuXG4gIF9wcm90bzIuc3RhZ2dlclRvID0gZnVuY3Rpb24gc3RhZ2dlclRvKHRhcmdldHMsIGR1cmF0aW9uLCB2YXJzLCBzdGFnZ2VyLCBwb3NpdGlvbiwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcykge1xuICAgIHZhcnMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICB2YXJzLnN0YWdnZXIgPSB2YXJzLnN0YWdnZXIgfHwgc3RhZ2dlcjtcbiAgICB2YXJzLm9uQ29tcGxldGUgPSBvbkNvbXBsZXRlQWxsO1xuICAgIHZhcnMub25Db21wbGV0ZVBhcmFtcyA9IG9uQ29tcGxldGVBbGxQYXJhbXM7XG4gICAgdmFycy5wYXJlbnQgPSB0aGlzO1xuICAgIG5ldyBUd2Vlbih0YXJnZXRzLCB2YXJzLCBfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbikpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuc3RhZ2dlckZyb20gPSBmdW5jdGlvbiBzdGFnZ2VyRnJvbSh0YXJnZXRzLCBkdXJhdGlvbiwgdmFycywgc3RhZ2dlciwgcG9zaXRpb24sIG9uQ29tcGxldGVBbGwsIG9uQ29tcGxldGVBbGxQYXJhbXMpIHtcbiAgICB2YXJzLnJ1bkJhY2t3YXJkcyA9IDE7XG4gICAgX2luaGVyaXREZWZhdWx0cyh2YXJzKS5pbW1lZGlhdGVSZW5kZXIgPSBfaXNOb3RGYWxzZSh2YXJzLmltbWVkaWF0ZVJlbmRlcik7XG4gICAgcmV0dXJuIHRoaXMuc3RhZ2dlclRvKHRhcmdldHMsIGR1cmF0aW9uLCB2YXJzLCBzdGFnZ2VyLCBwb3NpdGlvbiwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcyk7XG4gIH07XG5cbiAgX3Byb3RvMi5zdGFnZ2VyRnJvbVRvID0gZnVuY3Rpb24gc3RhZ2dlckZyb21Ubyh0YXJnZXRzLCBkdXJhdGlvbiwgZnJvbVZhcnMsIHRvVmFycywgc3RhZ2dlciwgcG9zaXRpb24sIG9uQ29tcGxldGVBbGwsIG9uQ29tcGxldGVBbGxQYXJhbXMpIHtcbiAgICB0b1ZhcnMuc3RhcnRBdCA9IGZyb21WYXJzO1xuICAgIF9pbmhlcml0RGVmYXVsdHModG9WYXJzKS5pbW1lZGlhdGVSZW5kZXIgPSBfaXNOb3RGYWxzZSh0b1ZhcnMuaW1tZWRpYXRlUmVuZGVyKTtcbiAgICByZXR1cm4gdGhpcy5zdGFnZ2VyVG8odGFyZ2V0cywgZHVyYXRpb24sIHRvVmFycywgc3RhZ2dlciwgcG9zaXRpb24sIG9uQ29tcGxldGVBbGwsIG9uQ29tcGxldGVBbGxQYXJhbXMpO1xuICB9O1xuXG4gIF9wcm90bzIucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG4gICAgdmFyIHByZXZUaW1lID0gdGhpcy5fdGltZSxcbiAgICAgICAgdER1ciA9IHRoaXMuX2RpcnR5ID8gdGhpcy50b3RhbER1cmF0aW9uKCkgOiB0aGlzLl90RHVyLFxuICAgICAgICBkdXIgPSB0aGlzLl9kdXIsXG4gICAgICAgIHRUaW1lID0gdG90YWxUaW1lIDw9IDAgPyAwIDogX3JvdW5kUHJlY2lzZSh0b3RhbFRpbWUpLFxuICAgICAgICAvLyBpZiBhIHBhdXNlZCB0aW1lbGluZSBpcyByZXN1bWVkIChvciBpdHMgX3N0YXJ0IGlzIHVwZGF0ZWQgZm9yIGFub3RoZXIgcmVhc29uLi4ud2hpY2ggcm91bmRzIGl0KSwgdGhhdCBjb3VsZCByZXN1bHQgaW4gdGhlIHBsYXloZWFkIHNoaWZ0aW5nIGEgKip0aW55KiogYW1vdW50IGFuZCBhIHplcm8tZHVyYXRpb24gY2hpbGQgYXQgdGhhdCBzcG90IG1heSBnZXQgcmVuZGVyZWQgYXQgYSBkaWZmZXJlbnQgcmF0aW8sIGxpa2UgaXRzIHRvdGFsVGltZSBpbiByZW5kZXIoKSBtYXkgYmUgMWUtMTcgaW5zdGVhZCBvZiAwLCBmb3IgZXhhbXBsZS5cbiAgICBjcm9zc2luZ1N0YXJ0ID0gdGhpcy5felRpbWUgPCAwICE9PSB0b3RhbFRpbWUgPCAwICYmICh0aGlzLl9pbml0dGVkIHx8ICFkdXIpLFxuICAgICAgICB0aW1lLFxuICAgICAgICBjaGlsZCxcbiAgICAgICAgbmV4dCxcbiAgICAgICAgaXRlcmF0aW9uLFxuICAgICAgICBjeWNsZUR1cmF0aW9uLFxuICAgICAgICBwcmV2UGF1c2VkLFxuICAgICAgICBwYXVzZVR3ZWVuLFxuICAgICAgICB0aW1lU2NhbGUsXG4gICAgICAgIHByZXZTdGFydCxcbiAgICAgICAgcHJldkl0ZXJhdGlvbixcbiAgICAgICAgeW95byxcbiAgICAgICAgaXNZb3lvO1xuICAgIHRoaXMgIT09IF9nbG9iYWxUaW1lbGluZSAmJiB0VGltZSA+IHREdXIgJiYgdG90YWxUaW1lID49IDAgJiYgKHRUaW1lID0gdER1cik7XG5cbiAgICBpZiAodFRpbWUgIT09IHRoaXMuX3RUaW1lIHx8IGZvcmNlIHx8IGNyb3NzaW5nU3RhcnQpIHtcbiAgICAgIGlmIChwcmV2VGltZSAhPT0gdGhpcy5fdGltZSAmJiBkdXIpIHtcbiAgICAgICAgLy9pZiB0b3RhbER1cmF0aW9uKCkgZmluZHMgYSBjaGlsZCB3aXRoIGEgbmVnYXRpdmUgc3RhcnRUaW1lIGFuZCBzbW9vdGhDaGlsZFRpbWluZyBpcyB0cnVlLCB0aGluZ3MgZ2V0IHNoaWZ0ZWQgYXJvdW5kIGludGVybmFsbHkgc28gd2UgbmVlZCB0byBhZGp1c3QgdGhlIHRpbWUgYWNjb3JkaW5nbHkuIEZvciBleGFtcGxlLCBpZiBhIHR3ZWVuIHN0YXJ0cyBhdCAtMzAgd2UgbXVzdCBzaGlmdCBFVkVSWVRISU5HIGZvcndhcmQgMzAgc2Vjb25kcyBhbmQgbW92ZSB0aGlzIHRpbWVsaW5lJ3Mgc3RhcnRUaW1lIGJhY2t3YXJkIGJ5IDMwIHNlY29uZHMgc28gdGhhdCB0aGluZ3MgYWxpZ24gd2l0aCB0aGUgcGxheWhlYWQgKG5vIGp1bXApLlxuICAgICAgICB0VGltZSArPSB0aGlzLl90aW1lIC0gcHJldlRpbWU7XG4gICAgICAgIHRvdGFsVGltZSArPSB0aGlzLl90aW1lIC0gcHJldlRpbWU7XG4gICAgICB9XG5cbiAgICAgIHRpbWUgPSB0VGltZTtcbiAgICAgIHByZXZTdGFydCA9IHRoaXMuX3N0YXJ0O1xuICAgICAgdGltZVNjYWxlID0gdGhpcy5fdHM7XG4gICAgICBwcmV2UGF1c2VkID0gIXRpbWVTY2FsZTtcblxuICAgICAgaWYgKGNyb3NzaW5nU3RhcnQpIHtcbiAgICAgICAgZHVyIHx8IChwcmV2VGltZSA9IHRoaXMuX3pUaW1lKTsgLy93aGVuIHRoZSBwbGF5aGVhZCBhcnJpdmVzIGF0IEVYQUNUTFkgdGltZSAwIChyaWdodCBvbiB0b3ApIG9mIGEgemVyby1kdXJhdGlvbiB0aW1lbGluZSwgd2UgbmVlZCB0byBkaXNjZXJuIGlmIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBzbyB0aGF0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIGFnYWluIChuZXh0IHRpbWUpLCBpdCdsbCB0cmlnZ2VyIHRoZSBjYWxsYmFjay4gSWYgZXZlbnRzIGFyZSBOT1Qgc3VwcHJlc3NlZCwgb2J2aW91c2x5IHRoZSBjYWxsYmFjayB3b3VsZCBiZSB0cmlnZ2VyZWQgaW4gdGhpcyByZW5kZXIuIEJhc2ljYWxseSwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlIGVpdGhlciB3aGVuIHRoZSBwbGF5aGVhZCBBUlJJVkVTIG9yIExFQVZFUyB0aGlzIGV4YWN0IHNwb3QsIG5vdCBib3RoLiBJbWFnaW5lIGRvaW5nIGEgdGltZWxpbmUuc2VlaygwKSBhbmQgdGhlcmUncyBhIGNhbGxiYWNrIHRoYXQgc2l0cyBhdCAwLiBTaW5jZSBldmVudHMgYXJlIHN1cHByZXNzZWQgb24gdGhhdCBzZWVrKCkgYnkgZGVmYXVsdCwgbm90aGluZyB3aWxsIGZpcmUsIGJ1dCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBvZmYgb2YgdGhhdCBwb3NpdGlvbiwgdGhlIGNhbGxiYWNrIHNob3VsZCBmaXJlLiBUaGlzIGJlaGF2aW9yIGlzIHdoYXQgcGVvcGxlIGludHVpdGl2ZWx5IGV4cGVjdC5cblxuICAgICAgICAodG90YWxUaW1lIHx8ICFzdXBwcmVzc0V2ZW50cykgJiYgKHRoaXMuX3pUaW1lID0gdG90YWxUaW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3JlcGVhdCkge1xuICAgICAgICAvL2FkanVzdCB0aGUgdGltZSBmb3IgcmVwZWF0cyBhbmQgeW95b3NcbiAgICAgICAgeW95byA9IHRoaXMuX3lveW87XG4gICAgICAgIGN5Y2xlRHVyYXRpb24gPSBkdXIgKyB0aGlzLl9yRGVsYXk7XG5cbiAgICAgICAgaWYgKHRoaXMuX3JlcGVhdCA8IC0xICYmIHRvdGFsVGltZSA8IDApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy50b3RhbFRpbWUoY3ljbGVEdXJhdGlvbiAqIDEwMCArIHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWUgPSBfcm91bmRQcmVjaXNlKHRUaW1lICUgY3ljbGVEdXJhdGlvbik7IC8vcm91bmQgdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgZXJyb3JzLiAoNCAlIDAuOCBzaG91bGQgYmUgMCBidXQgc29tZSBicm93c2VycyByZXBvcnQgaXQgYXMgMC43OTk5OTk5OSEpXG5cbiAgICAgICAgaWYgKHRUaW1lID09PSB0RHVyKSB7XG4gICAgICAgICAgLy8gdGhlIHREdXIgPT09IHRUaW1lIGlzIGZvciBlZGdlIGNhc2VzIHdoZXJlIHRoZXJlJ3MgYSBsZW5ndGh5IGRlY2ltYWwgb24gdGhlIGR1cmF0aW9uIGFuZCBpdCBtYXkgcmVhY2ggdGhlIHZlcnkgZW5kIGJ1dCB0aGUgdGltZSBpcyByZW5kZXJlZCBhcyBub3QtcXVpdGUtdGhlcmUgKHJlbWVtYmVyLCB0RHVyIGlzIHJvdW5kZWQgdG8gNCBkZWNpbWFscyB3aGVyZWFzIGR1ciBpc24ndClcbiAgICAgICAgICBpdGVyYXRpb24gPSB0aGlzLl9yZXBlYXQ7XG4gICAgICAgICAgdGltZSA9IGR1cjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVyYXRpb24gPSB+fih0VGltZSAvIGN5Y2xlRHVyYXRpb24pO1xuXG4gICAgICAgICAgaWYgKGl0ZXJhdGlvbiAmJiBpdGVyYXRpb24gPT09IHRUaW1lIC8gY3ljbGVEdXJhdGlvbikge1xuICAgICAgICAgICAgdGltZSA9IGR1cjtcbiAgICAgICAgICAgIGl0ZXJhdGlvbi0tO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRpbWUgPiBkdXIgJiYgKHRpbWUgPSBkdXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJldkl0ZXJhdGlvbiA9IF9hbmltYXRpb25DeWNsZSh0aGlzLl90VGltZSwgY3ljbGVEdXJhdGlvbik7XG4gICAgICAgICFwcmV2VGltZSAmJiB0aGlzLl90VGltZSAmJiBwcmV2SXRlcmF0aW9uICE9PSBpdGVyYXRpb24gJiYgKHByZXZJdGVyYXRpb24gPSBpdGVyYXRpb24pOyAvLyBlZGdlIGNhc2UgLSBpZiBzb21lb25lIGRvZXMgYWRkUGF1c2UoKSBhdCB0aGUgdmVyeSBiZWdpbm5pbmcgb2YgYSByZXBlYXRpbmcgdGltZWxpbmUsIHRoYXQgcGF1c2UgaXMgdGVjaG5pY2FsbHkgYXQgdGhlIHNhbWUgc3BvdCBhcyB0aGUgZW5kIHdoaWNoIGNhdXNlcyB0aGlzLl90aW1lIHRvIGdldCBzZXQgdG8gMCB3aGVuIHRoZSB0b3RhbFRpbWUgd291bGQgbm9ybWFsbHkgcGxhY2UgdGhlIHBsYXloZWFkIGF0IHRoZSBlbmQuIFNlZSBodHRwczovL2dyZWVuc29jay5jb20vZm9ydW1zL3RvcGljLzIzODIzLWNsb3NpbmctbmF2LWFuaW1hdGlvbi1ub3Qtd29ya2luZy1vbi1pZS1hbmQtaXBob25lLTYtbWF5YmUtb3RoZXItb2xkZXItYnJvd3Nlci8/dGFiPWNvbW1lbnRzI2NvbW1lbnQtMTEzMDA1XG5cbiAgICAgICAgaWYgKHlveW8gJiYgaXRlcmF0aW9uICYgMSkge1xuICAgICAgICAgIHRpbWUgPSBkdXIgLSB0aW1lO1xuICAgICAgICAgIGlzWW95byA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgLypcbiAgICAgICAgbWFrZSBzdXJlIGNoaWxkcmVuIGF0IHRoZSBlbmQvYmVnaW5uaW5nIG9mIHRoZSB0aW1lbGluZSBhcmUgcmVuZGVyZWQgcHJvcGVybHkuIElmLCBmb3IgZXhhbXBsZSxcbiAgICAgICAgYSAzLXNlY29uZCBsb25nIHRpbWVsaW5lIHJlbmRlcmVkIGF0IDIuOSBzZWNvbmRzIHByZXZpb3VzbHksIGFuZCBub3cgcmVuZGVycyBhdCAzLjIgc2Vjb25kcyAod2hpY2hcbiAgICAgICAgd291bGQgZ2V0IHRyYW5zbGF0ZWQgdG8gMi44IHNlY29uZHMgaWYgdGhlIHRpbWVsaW5lIHlveW9zIG9yIDAuMiBzZWNvbmRzIGlmIGl0IGp1c3QgcmVwZWF0cyksIHRoZXJlXG4gICAgICAgIGNvdWxkIGJlIGEgY2FsbGJhY2sgb3IgYSBzaG9ydCB0d2VlbiB0aGF0J3MgYXQgMi45NSBvciAzIHNlY29uZHMgaW4gd2hpY2ggd291bGRuJ3QgcmVuZGVyLiBTb1xuICAgICAgICB3ZSBuZWVkIHRvIHB1c2ggdGhlIHRpbWVsaW5lIHRvIHRoZSBlbmQgKGFuZC9vciBiZWdpbm5pbmcgZGVwZW5kaW5nIG9uIGl0cyB5b3lvIHZhbHVlKS4gQWxzbyB3ZSBtdXN0XG4gICAgICAgIGVuc3VyZSB0aGF0IHplcm8tZHVyYXRpb24gdHdlZW5zIGF0IHRoZSB2ZXJ5IGJlZ2lubmluZyBvciBlbmQgb2YgdGhlIFRpbWVsaW5lIHdvcmsuXG4gICAgICAgICovXG5cblxuICAgICAgICBpZiAoaXRlcmF0aW9uICE9PSBwcmV2SXRlcmF0aW9uICYmICF0aGlzLl9sb2NrKSB7XG4gICAgICAgICAgdmFyIHJld2luZGluZyA9IHlveW8gJiYgcHJldkl0ZXJhdGlvbiAmIDEsXG4gICAgICAgICAgICAgIGRvZXNXcmFwID0gcmV3aW5kaW5nID09PSAoeW95byAmJiBpdGVyYXRpb24gJiAxKTtcbiAgICAgICAgICBpdGVyYXRpb24gPCBwcmV2SXRlcmF0aW9uICYmIChyZXdpbmRpbmcgPSAhcmV3aW5kaW5nKTtcbiAgICAgICAgICBwcmV2VGltZSA9IHJld2luZGluZyA/IDAgOiBkdXI7XG4gICAgICAgICAgdGhpcy5fbG9jayA9IDE7XG4gICAgICAgICAgdGhpcy5yZW5kZXIocHJldlRpbWUgfHwgKGlzWW95byA/IDAgOiBfcm91bmRQcmVjaXNlKGl0ZXJhdGlvbiAqIGN5Y2xlRHVyYXRpb24pKSwgc3VwcHJlc3NFdmVudHMsICFkdXIpLl9sb2NrID0gMDtcbiAgICAgICAgICB0aGlzLl90VGltZSA9IHRUaW1lOyAvLyBpZiBhIHVzZXIgZ2V0cyB0aGUgaXRlcmF0aW9uKCkgaW5zaWRlIHRoZSBvblJlcGVhdCwgZm9yIGV4YW1wbGUsIGl0IHNob3VsZCBiZSBhY2N1cmF0ZS5cblxuICAgICAgICAgICFzdXBwcmVzc0V2ZW50cyAmJiB0aGlzLnBhcmVudCAmJiBfY2FsbGJhY2sodGhpcywgXCJvblJlcGVhdFwiKTtcbiAgICAgICAgICB0aGlzLnZhcnMucmVwZWF0UmVmcmVzaCAmJiAhaXNZb3lvICYmICh0aGlzLmludmFsaWRhdGUoKS5fbG9jayA9IDEpO1xuXG4gICAgICAgICAgaWYgKHByZXZUaW1lICYmIHByZXZUaW1lICE9PSB0aGlzLl90aW1lIHx8IHByZXZQYXVzZWQgIT09ICF0aGlzLl90cyB8fCB0aGlzLnZhcnMub25SZXBlYXQgJiYgIXRoaXMucGFyZW50ICYmICF0aGlzLl9hY3QpIHtcbiAgICAgICAgICAgIC8vIGlmIHByZXZUaW1lIGlzIDAgYW5kIHdlIHJlbmRlciBhdCB0aGUgdmVyeSBlbmQsIF90aW1lIHdpbGwgYmUgdGhlIGVuZCwgdGh1cyB3b24ndCBtYXRjaC4gU28gaW4gdGhpcyBlZGdlIGNhc2UsIHByZXZUaW1lIHdvbid0IG1hdGNoIF90aW1lIGJ1dCB0aGF0J3Mgb2theS4gSWYgaXQgZ2V0cyBraWxsZWQgaW4gdGhlIG9uUmVwZWF0LCBlamVjdCBhcyB3ZWxsLlxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZHVyID0gdGhpcy5fZHVyOyAvLyBpbiBjYXNlIHRoZSBkdXJhdGlvbiBjaGFuZ2VkIGluIHRoZSBvblJlcGVhdFxuXG4gICAgICAgICAgdER1ciA9IHRoaXMuX3REdXI7XG5cbiAgICAgICAgICBpZiAoZG9lc1dyYXApIHtcbiAgICAgICAgICAgIHRoaXMuX2xvY2sgPSAyO1xuICAgICAgICAgICAgcHJldlRpbWUgPSByZXdpbmRpbmcgPyBkdXIgOiAtMC4wMDAxO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIocHJldlRpbWUsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy52YXJzLnJlcGVhdFJlZnJlc2ggJiYgIWlzWW95byAmJiB0aGlzLmludmFsaWRhdGUoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9sb2NrID0gMDtcblxuICAgICAgICAgIGlmICghdGhpcy5fdHMgJiYgIXByZXZQYXVzZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgIH0gLy9pbiBvcmRlciBmb3IgeW95b0Vhc2UgdG8gd29yayBwcm9wZXJseSB3aGVuIHRoZXJlJ3MgYSBzdGFnZ2VyLCB3ZSBtdXN0IHN3YXAgb3V0IHRoZSBlYXNlIGluIGVhY2ggc3ViLXR3ZWVuLlxuXG5cbiAgICAgICAgICBfcHJvcGFnYXRlWW95b0Vhc2UodGhpcywgaXNZb3lvKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5faGFzUGF1c2UgJiYgIXRoaXMuX2ZvcmNpbmcgJiYgdGhpcy5fbG9jayA8IDIpIHtcbiAgICAgICAgcGF1c2VUd2VlbiA9IF9maW5kTmV4dFBhdXNlVHdlZW4odGhpcywgX3JvdW5kUHJlY2lzZShwcmV2VGltZSksIF9yb3VuZFByZWNpc2UodGltZSkpO1xuXG4gICAgICAgIGlmIChwYXVzZVR3ZWVuKSB7XG4gICAgICAgICAgdFRpbWUgLT0gdGltZSAtICh0aW1lID0gcGF1c2VUd2Vlbi5fc3RhcnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3RUaW1lID0gdFRpbWU7XG4gICAgICB0aGlzLl90aW1lID0gdGltZTtcbiAgICAgIHRoaXMuX2FjdCA9ICF0aW1lU2NhbGU7IC8vYXMgbG9uZyBhcyBpdCdzIG5vdCBwYXVzZWQsIGZvcmNlIGl0IHRvIGJlIGFjdGl2ZSBzbyB0aGF0IGlmIHRoZSB1c2VyIHJlbmRlcnMgaW5kZXBlbmRlbnQgb2YgdGhlIHBhcmVudCB0aW1lbGluZSwgaXQnbGwgYmUgZm9yY2VkIHRvIHJlLXJlbmRlciBvbiB0aGUgbmV4dCB0aWNrLlxuXG4gICAgICBpZiAoIXRoaXMuX2luaXR0ZWQpIHtcbiAgICAgICAgdGhpcy5fb25VcGRhdGUgPSB0aGlzLnZhcnMub25VcGRhdGU7XG4gICAgICAgIHRoaXMuX2luaXR0ZWQgPSAxO1xuICAgICAgICB0aGlzLl96VGltZSA9IHRvdGFsVGltZTtcbiAgICAgICAgcHJldlRpbWUgPSAwOyAvLyB1cG9uIGluaXQsIHRoZSBwbGF5aGVhZCBzaG91bGQgYWx3YXlzIGdvIGZvcndhcmQ7IHNvbWVvbmUgY291bGQgaW52YWxpZGF0ZSgpIGEgY29tcGxldGVkIHRpbWVsaW5lIGFuZCB0aGVuIGlmIHRoZXkgcmVzdGFydCgpLCB0aGF0IHdvdWxkIG1ha2UgY2hpbGQgdHdlZW5zIHJlbmRlciBpbiByZXZlcnNlIG9yZGVyIHdoaWNoIGNvdWxkIGxvY2sgaW4gdGhlIHdyb25nIHN0YXJ0aW5nIHZhbHVlcyBpZiB0aGV5IGJ1aWxkIG9uIGVhY2ggb3RoZXIsIGxpa2UgdGwudG8ob2JqLCB7eDogMTAwfSkudG8ob2JqLCB7eDogMH0pLlxuICAgICAgfVxuXG4gICAgICBpZiAoIXByZXZUaW1lICYmIHRpbWUgJiYgIXN1cHByZXNzRXZlbnRzKSB7XG4gICAgICAgIF9jYWxsYmFjayh0aGlzLCBcIm9uU3RhcnRcIik7XG5cbiAgICAgICAgaWYgKHRoaXMuX3RUaW1lICE9PSB0VGltZSkge1xuICAgICAgICAgIC8vIGluIGNhc2UgdGhlIG9uU3RhcnQgdHJpZ2dlcmVkIGEgcmVuZGVyIGF0IGEgZGlmZmVyZW50IHNwb3QsIGVqZWN0LiBMaWtlIGlmIHNvbWVvbmUgZGlkIGFuaW1hdGlvbi5wYXVzZSgwLjUpIG9yIHNvbWV0aGluZyBpbnNpZGUgdGhlIG9uU3RhcnQuXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRpbWUgPj0gcHJldlRpbWUgJiYgdG90YWxUaW1lID49IDApIHtcbiAgICAgICAgY2hpbGQgPSB0aGlzLl9maXJzdDtcblxuICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICBuZXh0ID0gY2hpbGQuX25leHQ7XG5cbiAgICAgICAgICBpZiAoKGNoaWxkLl9hY3QgfHwgdGltZSA+PSBjaGlsZC5fc3RhcnQpICYmIGNoaWxkLl90cyAmJiBwYXVzZVR3ZWVuICE9PSBjaGlsZCkge1xuICAgICAgICAgICAgaWYgKGNoaWxkLnBhcmVudCAhPT0gdGhpcykge1xuICAgICAgICAgICAgICAvLyBhbiBleHRyZW1lIGVkZ2UgY2FzZSAtIHRoZSBjaGlsZCdzIHJlbmRlciBjb3VsZCBkbyBzb21ldGhpbmcgbGlrZSBraWxsKCkgdGhlIFwibmV4dFwiIG9uZSBpbiB0aGUgbGlua2VkIGxpc3QsIG9yIHJlcGFyZW50IGl0LiBJbiB0aGF0IGNhc2Ugd2UgbXVzdCByZS1pbml0aWF0ZSB0aGUgd2hvbGUgcmVuZGVyIHRvIGJlIHNhZmUuXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNoaWxkLnJlbmRlcihjaGlsZC5fdHMgPiAwID8gKHRpbWUgLSBjaGlsZC5fc3RhcnQpICogY2hpbGQuX3RzIDogKGNoaWxkLl9kaXJ0eSA/IGNoaWxkLnRvdGFsRHVyYXRpb24oKSA6IGNoaWxkLl90RHVyKSArICh0aW1lIC0gY2hpbGQuX3N0YXJ0KSAqIGNoaWxkLl90cywgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcblxuICAgICAgICAgICAgaWYgKHRpbWUgIT09IHRoaXMuX3RpbWUgfHwgIXRoaXMuX3RzICYmICFwcmV2UGF1c2VkKSB7XG4gICAgICAgICAgICAgIC8vaW4gY2FzZSBhIHR3ZWVuIHBhdXNlcyBvciBzZWVrcyB0aGUgdGltZWxpbmUgd2hlbiByZW5kZXJpbmcsIGxpa2UgaW5zaWRlIG9mIGFuIG9uVXBkYXRlL29uQ29tcGxldGVcbiAgICAgICAgICAgICAgcGF1c2VUd2VlbiA9IDA7XG4gICAgICAgICAgICAgIG5leHQgJiYgKHRUaW1lICs9IHRoaXMuX3pUaW1lID0gLV90aW55TnVtKTsgLy8gaXQgZGlkbid0IGZpbmlzaCByZW5kZXJpbmcsIHNvIGZsYWcgelRpbWUgYXMgbmVnYXRpdmUgc28gdGhhdCBzbyB0aGF0IHRoZSBuZXh0IHRpbWUgcmVuZGVyKCkgaXMgY2FsbGVkIGl0J2xsIGJlIGZvcmNlZCAodG8gcmVuZGVyIGFueSByZW1haW5pbmcgY2hpbGRyZW4pXG5cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hpbGQgPSBuZXh0O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IHRoaXMuX2xhc3Q7XG4gICAgICAgIHZhciBhZGp1c3RlZFRpbWUgPSB0b3RhbFRpbWUgPCAwID8gdG90YWxUaW1lIDogdGltZTsgLy93aGVuIHRoZSBwbGF5aGVhZCBnb2VzIGJhY2t3YXJkIGJleW9uZCB0aGUgc3RhcnQgb2YgdGhpcyB0aW1lbGluZSwgd2UgbXVzdCBwYXNzIHRoYXQgaW5mb3JtYXRpb24gZG93biB0byB0aGUgY2hpbGQgYW5pbWF0aW9ucyBzbyB0aGF0IHplcm8tZHVyYXRpb24gdHdlZW5zIGtub3cgd2hldGhlciB0byByZW5kZXIgdGhlaXIgc3RhcnRpbmcgb3IgZW5kaW5nIHZhbHVlcy5cblxuICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICBuZXh0ID0gY2hpbGQuX3ByZXY7XG5cbiAgICAgICAgICBpZiAoKGNoaWxkLl9hY3QgfHwgYWRqdXN0ZWRUaW1lIDw9IGNoaWxkLl9lbmQpICYmIGNoaWxkLl90cyAmJiBwYXVzZVR3ZWVuICE9PSBjaGlsZCkge1xuICAgICAgICAgICAgaWYgKGNoaWxkLnBhcmVudCAhPT0gdGhpcykge1xuICAgICAgICAgICAgICAvLyBhbiBleHRyZW1lIGVkZ2UgY2FzZSAtIHRoZSBjaGlsZCdzIHJlbmRlciBjb3VsZCBkbyBzb21ldGhpbmcgbGlrZSBraWxsKCkgdGhlIFwibmV4dFwiIG9uZSBpbiB0aGUgbGlua2VkIGxpc3QsIG9yIHJlcGFyZW50IGl0LiBJbiB0aGF0IGNhc2Ugd2UgbXVzdCByZS1pbml0aWF0ZSB0aGUgd2hvbGUgcmVuZGVyIHRvIGJlIHNhZmUuXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNoaWxkLnJlbmRlcihjaGlsZC5fdHMgPiAwID8gKGFkanVzdGVkVGltZSAtIGNoaWxkLl9zdGFydCkgKiBjaGlsZC5fdHMgOiAoY2hpbGQuX2RpcnR5ID8gY2hpbGQudG90YWxEdXJhdGlvbigpIDogY2hpbGQuX3REdXIpICsgKGFkanVzdGVkVGltZSAtIGNoaWxkLl9zdGFydCkgKiBjaGlsZC5fdHMsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG5cbiAgICAgICAgICAgIGlmICh0aW1lICE9PSB0aGlzLl90aW1lIHx8ICF0aGlzLl90cyAmJiAhcHJldlBhdXNlZCkge1xuICAgICAgICAgICAgICAvL2luIGNhc2UgYSB0d2VlbiBwYXVzZXMgb3Igc2Vla3MgdGhlIHRpbWVsaW5lIHdoZW4gcmVuZGVyaW5nLCBsaWtlIGluc2lkZSBvZiBhbiBvblVwZGF0ZS9vbkNvbXBsZXRlXG4gICAgICAgICAgICAgIHBhdXNlVHdlZW4gPSAwO1xuICAgICAgICAgICAgICBuZXh0ICYmICh0VGltZSArPSB0aGlzLl96VGltZSA9IGFkanVzdGVkVGltZSA/IC1fdGlueU51bSA6IF90aW55TnVtKTsgLy8gaXQgZGlkbid0IGZpbmlzaCByZW5kZXJpbmcsIHNvIGFkanVzdCB6VGltZSBzbyB0aGF0IHNvIHRoYXQgdGhlIG5leHQgdGltZSByZW5kZXIoKSBpcyBjYWxsZWQgaXQnbGwgYmUgZm9yY2VkICh0byByZW5kZXIgYW55IHJlbWFpbmluZyBjaGlsZHJlbilcblxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaGlsZCA9IG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHBhdXNlVHdlZW4gJiYgIXN1cHByZXNzRXZlbnRzKSB7XG4gICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgcGF1c2VUd2Vlbi5yZW5kZXIodGltZSA+PSBwcmV2VGltZSA/IDAgOiAtX3RpbnlOdW0pLl96VGltZSA9IHRpbWUgPj0gcHJldlRpbWUgPyAxIDogLTE7XG5cbiAgICAgICAgaWYgKHRoaXMuX3RzKSB7XG4gICAgICAgICAgLy90aGUgY2FsbGJhY2sgcmVzdW1lZCBwbGF5YmFjayEgU28gc2luY2Ugd2UgbWF5IGhhdmUgaGVsZCBiYWNrIHRoZSBwbGF5aGVhZCBkdWUgdG8gd2hlcmUgdGhlIHBhdXNlIGlzIHBvc2l0aW9uZWQsIGdvIGFoZWFkIGFuZCBqdW1wIHRvIHdoZXJlIGl0J3MgU1VQUE9TRUQgdG8gYmUgKGlmIG5vIHBhdXNlIGhhcHBlbmVkKS5cbiAgICAgICAgICB0aGlzLl9zdGFydCA9IHByZXZTdGFydDsgLy9pZiB0aGUgcGF1c2Ugd2FzIGF0IGFuIGVhcmxpZXIgdGltZSBhbmQgdGhlIHVzZXIgcmVzdW1lZCBpbiB0aGUgY2FsbGJhY2ssIGl0IGNvdWxkIHJlcG9zaXRpb24gdGhlIHRpbWVsaW5lIChjaGFuZ2luZyBpdHMgc3RhcnRUaW1lKSwgdGhyb3dpbmcgdGhpbmdzIG9mZiBzbGlnaHRseSwgc28gd2UgbWFrZSBzdXJlIHRoZSBfc3RhcnQgZG9lc24ndCBzaGlmdC5cblxuICAgICAgICAgIF9zZXRFbmQodGhpcyk7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX29uVXBkYXRlICYmICFzdXBwcmVzc0V2ZW50cyAmJiBfY2FsbGJhY2sodGhpcywgXCJvblVwZGF0ZVwiLCB0cnVlKTtcbiAgICAgIGlmICh0VGltZSA9PT0gdER1ciAmJiB0RHVyID49IHRoaXMudG90YWxEdXJhdGlvbigpIHx8ICF0VGltZSAmJiBwcmV2VGltZSkgaWYgKHByZXZTdGFydCA9PT0gdGhpcy5fc3RhcnQgfHwgTWF0aC5hYnModGltZVNjYWxlKSAhPT0gTWF0aC5hYnModGhpcy5fdHMpKSBpZiAoIXRoaXMuX2xvY2spIHtcbiAgICAgICAgKHRvdGFsVGltZSB8fCAhZHVyKSAmJiAodFRpbWUgPT09IHREdXIgJiYgdGhpcy5fdHMgPiAwIHx8ICF0VGltZSAmJiB0aGlzLl90cyA8IDApICYmIF9yZW1vdmVGcm9tUGFyZW50KHRoaXMsIDEpOyAvLyBkb24ndCByZW1vdmUgaWYgdGhlIHRpbWVsaW5lIGlzIHJldmVyc2VkIGFuZCB0aGUgcGxheWhlYWQgaXNuJ3QgYXQgMCwgb3RoZXJ3aXNlIHRsLnByb2dyZXNzKDEpLnJldmVyc2UoKSB3b24ndCB3b3JrLiBPbmx5IHJlbW92ZSBpZiB0aGUgcGxheWhlYWQgaXMgYXQgdGhlIGVuZCBhbmQgdGltZVNjYWxlIGlzIHBvc2l0aXZlLCBvciBpZiB0aGUgcGxheWhlYWQgaXMgYXQgMCBhbmQgdGhlIHRpbWVTY2FsZSBpcyBuZWdhdGl2ZS5cblxuICAgICAgICBpZiAoIXN1cHByZXNzRXZlbnRzICYmICEodG90YWxUaW1lIDwgMCAmJiAhcHJldlRpbWUpICYmICh0VGltZSB8fCBwcmV2VGltZSB8fCAhdER1cikpIHtcbiAgICAgICAgICBfY2FsbGJhY2sodGhpcywgdFRpbWUgPT09IHREdXIgJiYgdG90YWxUaW1lID49IDAgPyBcIm9uQ29tcGxldGVcIiA6IFwib25SZXZlcnNlQ29tcGxldGVcIiwgdHJ1ZSk7XG5cbiAgICAgICAgICB0aGlzLl9wcm9tICYmICEodFRpbWUgPCB0RHVyICYmIHRoaXMudGltZVNjYWxlKCkgPiAwKSAmJiB0aGlzLl9wcm9tKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLmFkZCA9IGZ1bmN0aW9uIGFkZChjaGlsZCwgcG9zaXRpb24pIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIF9pc051bWJlcihwb3NpdGlvbikgfHwgKHBvc2l0aW9uID0gX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24sIGNoaWxkKSk7XG5cbiAgICBpZiAoIShjaGlsZCBpbnN0YW5jZW9mIEFuaW1hdGlvbikpIHtcbiAgICAgIGlmIChfaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgY2hpbGQuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5hZGQob2JqLCBwb3NpdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgaWYgKF9pc1N0cmluZyhjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkTGFiZWwoY2hpbGQsIHBvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF9pc0Z1bmN0aW9uKGNoaWxkKSkge1xuICAgICAgICBjaGlsZCA9IFR3ZWVuLmRlbGF5ZWRDYWxsKDAsIGNoaWxkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzICE9PSBjaGlsZCA/IF9hZGRUb1RpbWVsaW5lKHRoaXMsIGNoaWxkLCBwb3NpdGlvbikgOiB0aGlzOyAvL2Rvbid0IGFsbG93IGEgdGltZWxpbmUgdG8gYmUgYWRkZWQgdG8gaXRzZWxmIGFzIGEgY2hpbGQhXG4gIH07XG5cbiAgX3Byb3RvMi5nZXRDaGlsZHJlbiA9IGZ1bmN0aW9uIGdldENoaWxkcmVuKG5lc3RlZCwgdHdlZW5zLCB0aW1lbGluZXMsIGlnbm9yZUJlZm9yZVRpbWUpIHtcbiAgICBpZiAobmVzdGVkID09PSB2b2lkIDApIHtcbiAgICAgIG5lc3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHR3ZWVucyA9PT0gdm9pZCAwKSB7XG4gICAgICB0d2VlbnMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aW1lbGluZXMgPT09IHZvaWQgMCkge1xuICAgICAgdGltZWxpbmVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaWdub3JlQmVmb3JlVGltZSA9PT0gdm9pZCAwKSB7XG4gICAgICBpZ25vcmVCZWZvcmVUaW1lID0gLV9iaWdOdW07XG4gICAgfVxuXG4gICAgdmFyIGEgPSBbXSxcbiAgICAgICAgY2hpbGQgPSB0aGlzLl9maXJzdDtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgaWYgKGNoaWxkLl9zdGFydCA+PSBpZ25vcmVCZWZvcmVUaW1lKSB7XG4gICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFR3ZWVuKSB7XG4gICAgICAgICAgdHdlZW5zICYmIGEucHVzaChjaGlsZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGltZWxpbmVzICYmIGEucHVzaChjaGlsZCk7XG4gICAgICAgICAgbmVzdGVkICYmIGEucHVzaC5hcHBseShhLCBjaGlsZC5nZXRDaGlsZHJlbih0cnVlLCB0d2VlbnMsIHRpbWVsaW5lcykpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG4gIH07XG5cbiAgX3Byb3RvMi5nZXRCeUlkID0gZnVuY3Rpb24gZ2V0QnlJZChpZCkge1xuICAgIHZhciBhbmltYXRpb25zID0gdGhpcy5nZXRDaGlsZHJlbigxLCAxLCAxKSxcbiAgICAgICAgaSA9IGFuaW1hdGlvbnMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgaWYgKGFuaW1hdGlvbnNbaV0udmFycy5pZCA9PT0gaWQpIHtcbiAgICAgICAgcmV0dXJuIGFuaW1hdGlvbnNbaV07XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzIucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKGNoaWxkKSB7XG4gICAgaWYgKF9pc1N0cmluZyhjaGlsZCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbW92ZUxhYmVsKGNoaWxkKTtcbiAgICB9XG5cbiAgICBpZiAoX2lzRnVuY3Rpb24oY2hpbGQpKSB7XG4gICAgICByZXR1cm4gdGhpcy5raWxsVHdlZW5zT2YoY2hpbGQpO1xuICAgIH1cblxuICAgIF9yZW1vdmVMaW5rZWRMaXN0SXRlbSh0aGlzLCBjaGlsZCk7XG5cbiAgICBpZiAoY2hpbGQgPT09IHRoaXMuX3JlY2VudCkge1xuICAgICAgdGhpcy5fcmVjZW50ID0gdGhpcy5fbGFzdDtcbiAgICB9XG5cbiAgICByZXR1cm4gX3VuY2FjaGUodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvMi50b3RhbFRpbWUgPSBmdW5jdGlvbiB0b3RhbFRpbWUoX3RvdGFsVGltZTIsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdFRpbWU7XG4gICAgfVxuXG4gICAgdGhpcy5fZm9yY2luZyA9IDE7XG5cbiAgICBpZiAoIXRoaXMuX2RwICYmIHRoaXMuX3RzKSB7XG4gICAgICAvL3NwZWNpYWwgY2FzZSBmb3IgdGhlIGdsb2JhbCB0aW1lbGluZSAob3IgYW55IG90aGVyIHRoYXQgaGFzIG5vIHBhcmVudCBvciBkZXRhY2hlZCBwYXJlbnQpLlxuICAgICAgdGhpcy5fc3RhcnQgPSBfcm91bmRQcmVjaXNlKF90aWNrZXIudGltZSAtICh0aGlzLl90cyA+IDAgPyBfdG90YWxUaW1lMiAvIHRoaXMuX3RzIDogKHRoaXMudG90YWxEdXJhdGlvbigpIC0gX3RvdGFsVGltZTIpIC8gLXRoaXMuX3RzKSk7XG4gICAgfVxuXG4gICAgX0FuaW1hdGlvbi5wcm90b3R5cGUudG90YWxUaW1lLmNhbGwodGhpcywgX3RvdGFsVGltZTIsIHN1cHByZXNzRXZlbnRzKTtcblxuICAgIHRoaXMuX2ZvcmNpbmcgPSAwO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuYWRkTGFiZWwgPSBmdW5jdGlvbiBhZGRMYWJlbChsYWJlbCwgcG9zaXRpb24pIHtcbiAgICB0aGlzLmxhYmVsc1tsYWJlbF0gPSBfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5yZW1vdmVMYWJlbCA9IGZ1bmN0aW9uIHJlbW92ZUxhYmVsKGxhYmVsKSB7XG4gICAgZGVsZXRlIHRoaXMubGFiZWxzW2xhYmVsXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLmFkZFBhdXNlID0gZnVuY3Rpb24gYWRkUGF1c2UocG9zaXRpb24sIGNhbGxiYWNrLCBwYXJhbXMpIHtcbiAgICB2YXIgdCA9IFR3ZWVuLmRlbGF5ZWRDYWxsKDAsIGNhbGxiYWNrIHx8IF9lbXB0eUZ1bmMsIHBhcmFtcyk7XG4gICAgdC5kYXRhID0gXCJpc1BhdXNlXCI7XG4gICAgdGhpcy5faGFzUGF1c2UgPSAxO1xuICAgIHJldHVybiBfYWRkVG9UaW1lbGluZSh0aGlzLCB0LCBfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbikpO1xuICB9O1xuXG4gIF9wcm90bzIucmVtb3ZlUGF1c2UgPSBmdW5jdGlvbiByZW1vdmVQYXVzZShwb3NpdGlvbikge1xuICAgIHZhciBjaGlsZCA9IHRoaXMuX2ZpcnN0O1xuICAgIHBvc2l0aW9uID0gX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24pO1xuXG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBpZiAoY2hpbGQuX3N0YXJ0ID09PSBwb3NpdGlvbiAmJiBjaGlsZC5kYXRhID09PSBcImlzUGF1c2VcIikge1xuICAgICAgICBfcmVtb3ZlRnJvbVBhcmVudChjaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzIua2lsbFR3ZWVuc09mID0gZnVuY3Rpb24ga2lsbFR3ZWVuc09mKHRhcmdldHMsIHByb3BzLCBvbmx5QWN0aXZlKSB7XG4gICAgdmFyIHR3ZWVucyA9IHRoaXMuZ2V0VHdlZW5zT2YodGFyZ2V0cywgb25seUFjdGl2ZSksXG4gICAgICAgIGkgPSB0d2VlbnMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgX292ZXJ3cml0aW5nVHdlZW4gIT09IHR3ZWVuc1tpXSAmJiB0d2VlbnNbaV0ua2lsbCh0YXJnZXRzLCBwcm9wcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5nZXRUd2VlbnNPZiA9IGZ1bmN0aW9uIGdldFR3ZWVuc09mKHRhcmdldHMsIG9ubHlBY3RpdmUpIHtcbiAgICB2YXIgYSA9IFtdLFxuICAgICAgICBwYXJzZWRUYXJnZXRzID0gdG9BcnJheSh0YXJnZXRzKSxcbiAgICAgICAgY2hpbGQgPSB0aGlzLl9maXJzdCxcbiAgICAgICAgaXNHbG9iYWxUaW1lID0gX2lzTnVtYmVyKG9ubHlBY3RpdmUpLFxuICAgICAgICAvLyBhIG51bWJlciBpcyBpbnRlcnByZXRlZCBhcyBhIGdsb2JhbCB0aW1lLiBJZiB0aGUgYW5pbWF0aW9uIHNwYW5zXG4gICAgY2hpbGRyZW47XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFR3ZWVuKSB7XG4gICAgICAgIGlmIChfYXJyYXlDb250YWluc0FueShjaGlsZC5fdGFyZ2V0cywgcGFyc2VkVGFyZ2V0cykgJiYgKGlzR2xvYmFsVGltZSA/ICghX292ZXJ3cml0aW5nVHdlZW4gfHwgY2hpbGQuX2luaXR0ZWQgJiYgY2hpbGQuX3RzKSAmJiBjaGlsZC5nbG9iYWxUaW1lKDApIDw9IG9ubHlBY3RpdmUgJiYgY2hpbGQuZ2xvYmFsVGltZShjaGlsZC50b3RhbER1cmF0aW9uKCkpID4gb25seUFjdGl2ZSA6ICFvbmx5QWN0aXZlIHx8IGNoaWxkLmlzQWN0aXZlKCkpKSB7XG4gICAgICAgICAgLy8gbm90ZTogaWYgdGhpcyBpcyBmb3Igb3ZlcndyaXRpbmcsIGl0IHNob3VsZCBvbmx5IGJlIGZvciB0d2VlbnMgdGhhdCBhcmVuJ3QgcGF1c2VkIGFuZCBhcmUgaW5pdHRlZC5cbiAgICAgICAgICBhLnB1c2goY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKChjaGlsZHJlbiA9IGNoaWxkLmdldFR3ZWVuc09mKHBhcnNlZFRhcmdldHMsIG9ubHlBY3RpdmUpKS5sZW5ndGgpIHtcbiAgICAgICAgYS5wdXNoLmFwcGx5KGEsIGNoaWxkcmVuKTtcbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbiAgfSAvLyBwb3RlbnRpYWwgZnV0dXJlIGZlYXR1cmUgLSB0YXJnZXRzKCkgb24gdGltZWxpbmVzXG4gIC8vIHRhcmdldHMoKSB7XG4gIC8vIFx0bGV0IHJlc3VsdCA9IFtdO1xuICAvLyBcdHRoaXMuZ2V0Q2hpbGRyZW4odHJ1ZSwgdHJ1ZSwgZmFsc2UpLmZvckVhY2godCA9PiByZXN1bHQucHVzaCguLi50LnRhcmdldHMoKSkpO1xuICAvLyBcdHJldHVybiByZXN1bHQuZmlsdGVyKCh2LCBpKSA9PiByZXN1bHQuaW5kZXhPZih2KSA9PT0gaSk7XG4gIC8vIH1cbiAgO1xuXG4gIF9wcm90bzIudHdlZW5UbyA9IGZ1bmN0aW9uIHR3ZWVuVG8ocG9zaXRpb24sIHZhcnMpIHtcbiAgICB2YXJzID0gdmFycyB8fCB7fTtcblxuICAgIHZhciB0bCA9IHRoaXMsXG4gICAgICAgIGVuZFRpbWUgPSBfcGFyc2VQb3NpdGlvbih0bCwgcG9zaXRpb24pLFxuICAgICAgICBfdmFycyA9IHZhcnMsXG4gICAgICAgIHN0YXJ0QXQgPSBfdmFycy5zdGFydEF0LFxuICAgICAgICBfb25TdGFydCA9IF92YXJzLm9uU3RhcnQsXG4gICAgICAgIG9uU3RhcnRQYXJhbXMgPSBfdmFycy5vblN0YXJ0UGFyYW1zLFxuICAgICAgICBpbW1lZGlhdGVSZW5kZXIgPSBfdmFycy5pbW1lZGlhdGVSZW5kZXIsXG4gICAgICAgIGluaXR0ZWQsXG4gICAgICAgIHR3ZWVuID0gVHdlZW4udG8odGwsIF9zZXREZWZhdWx0cyh7XG4gICAgICBlYXNlOiB2YXJzLmVhc2UgfHwgXCJub25lXCIsXG4gICAgICBsYXp5OiBmYWxzZSxcbiAgICAgIGltbWVkaWF0ZVJlbmRlcjogZmFsc2UsXG4gICAgICB0aW1lOiBlbmRUaW1lLFxuICAgICAgb3ZlcndyaXRlOiBcImF1dG9cIixcbiAgICAgIGR1cmF0aW9uOiB2YXJzLmR1cmF0aW9uIHx8IE1hdGguYWJzKChlbmRUaW1lIC0gKHN0YXJ0QXQgJiYgXCJ0aW1lXCIgaW4gc3RhcnRBdCA/IHN0YXJ0QXQudGltZSA6IHRsLl90aW1lKSkgLyB0bC50aW1lU2NhbGUoKSkgfHwgX3RpbnlOdW0sXG4gICAgICBvblN0YXJ0OiBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgICAgICB0bC5wYXVzZSgpO1xuXG4gICAgICAgIGlmICghaW5pdHRlZCkge1xuICAgICAgICAgIHZhciBkdXJhdGlvbiA9IHZhcnMuZHVyYXRpb24gfHwgTWF0aC5hYnMoKGVuZFRpbWUgLSAoc3RhcnRBdCAmJiBcInRpbWVcIiBpbiBzdGFydEF0ID8gc3RhcnRBdC50aW1lIDogdGwuX3RpbWUpKSAvIHRsLnRpbWVTY2FsZSgpKTtcbiAgICAgICAgICB0d2Vlbi5fZHVyICE9PSBkdXJhdGlvbiAmJiBfc2V0RHVyYXRpb24odHdlZW4sIGR1cmF0aW9uLCAwLCAxKS5yZW5kZXIodHdlZW4uX3RpbWUsIHRydWUsIHRydWUpO1xuICAgICAgICAgIGluaXR0ZWQgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgX29uU3RhcnQgJiYgX29uU3RhcnQuYXBwbHkodHdlZW4sIG9uU3RhcnRQYXJhbXMgfHwgW10pOyAvL2luIGNhc2UgdGhlIHVzZXIgaGFkIGFuIG9uU3RhcnQgaW4gdGhlIHZhcnMgLSB3ZSBkb24ndCB3YW50IHRvIG92ZXJ3cml0ZSBpdC5cbiAgICAgIH1cbiAgICB9LCB2YXJzKSk7XG5cbiAgICByZXR1cm4gaW1tZWRpYXRlUmVuZGVyID8gdHdlZW4ucmVuZGVyKDApIDogdHdlZW47XG4gIH07XG5cbiAgX3Byb3RvMi50d2VlbkZyb21UbyA9IGZ1bmN0aW9uIHR3ZWVuRnJvbVRvKGZyb21Qb3NpdGlvbiwgdG9Qb3NpdGlvbiwgdmFycykge1xuICAgIHJldHVybiB0aGlzLnR3ZWVuVG8odG9Qb3NpdGlvbiwgX3NldERlZmF1bHRzKHtcbiAgICAgIHN0YXJ0QXQ6IHtcbiAgICAgICAgdGltZTogX3BhcnNlUG9zaXRpb24odGhpcywgZnJvbVBvc2l0aW9uKVxuICAgICAgfVxuICAgIH0sIHZhcnMpKTtcbiAgfTtcblxuICBfcHJvdG8yLnJlY2VudCA9IGZ1bmN0aW9uIHJlY2VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVjZW50O1xuICB9O1xuXG4gIF9wcm90bzIubmV4dExhYmVsID0gZnVuY3Rpb24gbmV4dExhYmVsKGFmdGVyVGltZSkge1xuICAgIGlmIChhZnRlclRpbWUgPT09IHZvaWQgMCkge1xuICAgICAgYWZ0ZXJUaW1lID0gdGhpcy5fdGltZTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2dldExhYmVsSW5EaXJlY3Rpb24odGhpcywgX3BhcnNlUG9zaXRpb24odGhpcywgYWZ0ZXJUaW1lKSk7XG4gIH07XG5cbiAgX3Byb3RvMi5wcmV2aW91c0xhYmVsID0gZnVuY3Rpb24gcHJldmlvdXNMYWJlbChiZWZvcmVUaW1lKSB7XG4gICAgaWYgKGJlZm9yZVRpbWUgPT09IHZvaWQgMCkge1xuICAgICAgYmVmb3JlVGltZSA9IHRoaXMuX3RpbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9nZXRMYWJlbEluRGlyZWN0aW9uKHRoaXMsIF9wYXJzZVBvc2l0aW9uKHRoaXMsIGJlZm9yZVRpbWUpLCAxKTtcbiAgfTtcblxuICBfcHJvdG8yLmN1cnJlbnRMYWJlbCA9IGZ1bmN0aW9uIGN1cnJlbnRMYWJlbCh2YWx1ZSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy5zZWVrKHZhbHVlLCB0cnVlKSA6IHRoaXMucHJldmlvdXNMYWJlbCh0aGlzLl90aW1lICsgX3RpbnlOdW0pO1xuICB9O1xuXG4gIF9wcm90bzIuc2hpZnRDaGlsZHJlbiA9IGZ1bmN0aW9uIHNoaWZ0Q2hpbGRyZW4oYW1vdW50LCBhZGp1c3RMYWJlbHMsIGlnbm9yZUJlZm9yZVRpbWUpIHtcbiAgICBpZiAoaWdub3JlQmVmb3JlVGltZSA9PT0gdm9pZCAwKSB7XG4gICAgICBpZ25vcmVCZWZvcmVUaW1lID0gMDtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGQgPSB0aGlzLl9maXJzdCxcbiAgICAgICAgbGFiZWxzID0gdGhpcy5sYWJlbHMsXG4gICAgICAgIHA7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIGlmIChjaGlsZC5fc3RhcnQgPj0gaWdub3JlQmVmb3JlVGltZSkge1xuICAgICAgICBjaGlsZC5fc3RhcnQgKz0gYW1vdW50O1xuICAgICAgICBjaGlsZC5fZW5kICs9IGFtb3VudDtcbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICB9XG5cbiAgICBpZiAoYWRqdXN0TGFiZWxzKSB7XG4gICAgICBmb3IgKHAgaW4gbGFiZWxzKSB7XG4gICAgICAgIGlmIChsYWJlbHNbcF0gPj0gaWdub3JlQmVmb3JlVGltZSkge1xuICAgICAgICAgIGxhYmVsc1twXSArPSBhbW91bnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX3VuY2FjaGUodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvMi5pbnZhbGlkYXRlID0gZnVuY3Rpb24gaW52YWxpZGF0ZSgpIHtcbiAgICB2YXIgY2hpbGQgPSB0aGlzLl9maXJzdDtcbiAgICB0aGlzLl9sb2NrID0gMDtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgY2hpbGQuaW52YWxpZGF0ZSgpO1xuICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gX0FuaW1hdGlvbi5wcm90b3R5cGUuaW52YWxpZGF0ZS5jYWxsKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90bzIuY2xlYXIgPSBmdW5jdGlvbiBjbGVhcihpbmNsdWRlTGFiZWxzKSB7XG4gICAgaWYgKGluY2x1ZGVMYWJlbHMgPT09IHZvaWQgMCkge1xuICAgICAgaW5jbHVkZUxhYmVscyA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkID0gdGhpcy5fZmlyc3QsXG4gICAgICAgIG5leHQ7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIG5leHQgPSBjaGlsZC5fbmV4dDtcbiAgICAgIHRoaXMucmVtb3ZlKGNoaWxkKTtcbiAgICAgIGNoaWxkID0gbmV4dDtcbiAgICB9XG5cbiAgICB0aGlzLl9kcCAmJiAodGhpcy5fdGltZSA9IHRoaXMuX3RUaW1lID0gdGhpcy5fcFRpbWUgPSAwKTtcbiAgICBpbmNsdWRlTGFiZWxzICYmICh0aGlzLmxhYmVscyA9IHt9KTtcbiAgICByZXR1cm4gX3VuY2FjaGUodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvMi50b3RhbER1cmF0aW9uID0gZnVuY3Rpb24gdG90YWxEdXJhdGlvbih2YWx1ZSkge1xuICAgIHZhciBtYXggPSAwLFxuICAgICAgICBzZWxmID0gdGhpcyxcbiAgICAgICAgY2hpbGQgPSBzZWxmLl9sYXN0LFxuICAgICAgICBwcmV2U3RhcnQgPSBfYmlnTnVtLFxuICAgICAgICBwcmV2LFxuICAgICAgICBzdGFydCxcbiAgICAgICAgcGFyZW50O1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBzZWxmLnRpbWVTY2FsZSgoc2VsZi5fcmVwZWF0IDwgMCA/IHNlbGYuZHVyYXRpb24oKSA6IHNlbGYudG90YWxEdXJhdGlvbigpKSAvIChzZWxmLnJldmVyc2VkKCkgPyAtdmFsdWUgOiB2YWx1ZSkpO1xuICAgIH1cblxuICAgIGlmIChzZWxmLl9kaXJ0eSkge1xuICAgICAgcGFyZW50ID0gc2VsZi5wYXJlbnQ7XG5cbiAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICBwcmV2ID0gY2hpbGQuX3ByZXY7IC8vcmVjb3JkIGl0IGhlcmUgaW4gY2FzZSB0aGUgdHdlZW4gY2hhbmdlcyBwb3NpdGlvbiBpbiB0aGUgc2VxdWVuY2UuLi5cblxuICAgICAgICBjaGlsZC5fZGlydHkgJiYgY2hpbGQudG90YWxEdXJhdGlvbigpOyAvL2NvdWxkIGNoYW5nZSB0aGUgdHdlZW4uX3N0YXJ0VGltZSwgc28gbWFrZSBzdXJlIHRoZSBhbmltYXRpb24ncyBjYWNoZSBpcyBjbGVhbiBiZWZvcmUgYW5hbHl6aW5nIGl0LlxuXG4gICAgICAgIHN0YXJ0ID0gY2hpbGQuX3N0YXJ0O1xuXG4gICAgICAgIGlmIChzdGFydCA+IHByZXZTdGFydCAmJiBzZWxmLl9zb3J0ICYmIGNoaWxkLl90cyAmJiAhc2VsZi5fbG9jaykge1xuICAgICAgICAgIC8vaW4gY2FzZSBvbmUgb2YgdGhlIHR3ZWVucyBzaGlmdGVkIG91dCBvZiBvcmRlciwgaXQgbmVlZHMgdG8gYmUgcmUtaW5zZXJ0ZWQgaW50byB0aGUgY29ycmVjdCBwb3NpdGlvbiBpbiB0aGUgc2VxdWVuY2VcbiAgICAgICAgICBzZWxmLl9sb2NrID0gMTsgLy9wcmV2ZW50IGVuZGxlc3MgcmVjdXJzaXZlIGNhbGxzIC0gdGhlcmUgYXJlIG1ldGhvZHMgdGhhdCBnZXQgdHJpZ2dlcmVkIHRoYXQgY2hlY2sgZHVyYXRpb24vdG90YWxEdXJhdGlvbiB3aGVuIHdlIGFkZCgpLlxuXG4gICAgICAgICAgX2FkZFRvVGltZWxpbmUoc2VsZiwgY2hpbGQsIHN0YXJ0IC0gY2hpbGQuX2RlbGF5LCAxKS5fbG9jayA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJldlN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhcnQgPCAwICYmIGNoaWxkLl90cykge1xuICAgICAgICAgIC8vY2hpbGRyZW4gYXJlbid0IGFsbG93ZWQgdG8gaGF2ZSBuZWdhdGl2ZSBzdGFydFRpbWVzIHVubGVzcyBzbW9vdGhDaGlsZFRpbWluZyBpcyB0cnVlLCBzbyBhZGp1c3QgaGVyZSBpZiBvbmUgaXMgZm91bmQuXG4gICAgICAgICAgbWF4IC09IHN0YXJ0O1xuXG4gICAgICAgICAgaWYgKCFwYXJlbnQgJiYgIXNlbGYuX2RwIHx8IHBhcmVudCAmJiBwYXJlbnQuc21vb3RoQ2hpbGRUaW1pbmcpIHtcbiAgICAgICAgICAgIHNlbGYuX3N0YXJ0ICs9IHN0YXJ0IC8gc2VsZi5fdHM7XG4gICAgICAgICAgICBzZWxmLl90aW1lIC09IHN0YXJ0O1xuICAgICAgICAgICAgc2VsZi5fdFRpbWUgLT0gc3RhcnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZi5zaGlmdENoaWxkcmVuKC1zdGFydCwgZmFsc2UsIC0xZTk5OSk7XG4gICAgICAgICAgcHJldlN0YXJ0ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkLl9lbmQgPiBtYXggJiYgY2hpbGQuX3RzICYmIChtYXggPSBjaGlsZC5fZW5kKTtcbiAgICAgICAgY2hpbGQgPSBwcmV2O1xuICAgICAgfVxuXG4gICAgICBfc2V0RHVyYXRpb24oc2VsZiwgc2VsZiA9PT0gX2dsb2JhbFRpbWVsaW5lICYmIHNlbGYuX3RpbWUgPiBtYXggPyBzZWxmLl90aW1lIDogbWF4LCAxLCAxKTtcblxuICAgICAgc2VsZi5fZGlydHkgPSAwO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxmLl90RHVyO1xuICB9O1xuXG4gIFRpbWVsaW5lLnVwZGF0ZVJvb3QgPSBmdW5jdGlvbiB1cGRhdGVSb290KHRpbWUpIHtcbiAgICBpZiAoX2dsb2JhbFRpbWVsaW5lLl90cykge1xuICAgICAgX2xhenlTYWZlUmVuZGVyKF9nbG9iYWxUaW1lbGluZSwgX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUodGltZSwgX2dsb2JhbFRpbWVsaW5lKSk7XG5cbiAgICAgIF9sYXN0UmVuZGVyZWRGcmFtZSA9IF90aWNrZXIuZnJhbWU7XG4gICAgfVxuXG4gICAgaWYgKF90aWNrZXIuZnJhbWUgPj0gX25leHRHQ0ZyYW1lKSB7XG4gICAgICBfbmV4dEdDRnJhbWUgKz0gX2NvbmZpZy5hdXRvU2xlZXAgfHwgMTIwO1xuICAgICAgdmFyIGNoaWxkID0gX2dsb2JhbFRpbWVsaW5lLl9maXJzdDtcbiAgICAgIGlmICghY2hpbGQgfHwgIWNoaWxkLl90cykgaWYgKF9jb25maWcuYXV0b1NsZWVwICYmIF90aWNrZXIuX2xpc3RlbmVycy5sZW5ndGggPCAyKSB7XG4gICAgICAgIHdoaWxlIChjaGlsZCAmJiAhY2hpbGQuX3RzKSB7XG4gICAgICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkIHx8IF90aWNrZXIuc2xlZXAoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFRpbWVsaW5lO1xufShBbmltYXRpb24pO1xuXG5fc2V0RGVmYXVsdHMoVGltZWxpbmUucHJvdG90eXBlLCB7XG4gIF9sb2NrOiAwLFxuICBfaGFzUGF1c2U6IDAsXG4gIF9mb3JjaW5nOiAwXG59KTtcblxudmFyIF9hZGRDb21wbGV4U3RyaW5nUHJvcFR3ZWVuID0gZnVuY3Rpb24gX2FkZENvbXBsZXhTdHJpbmdQcm9wVHdlZW4odGFyZ2V0LCBwcm9wLCBzdGFydCwgZW5kLCBzZXR0ZXIsIHN0cmluZ0ZpbHRlciwgZnVuY1BhcmFtKSB7XG4gIC8vbm90ZTogd2UgY2FsbCBfYWRkQ29tcGxleFN0cmluZ1Byb3BUd2Vlbi5jYWxsKHR3ZWVuSW5zdGFuY2UuLi4pIHRvIGVuc3VyZSB0aGF0IGl0J3Mgc2NvcGVkIHByb3Blcmx5LiBXZSBtYXkgY2FsbCBpdCBmcm9tIHdpdGhpbiBhIHBsdWdpbiB0b28sIHRodXMgXCJ0aGlzXCIgd291bGQgcmVmZXIgdG8gdGhlIHBsdWdpbi5cbiAgdmFyIHB0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgdGFyZ2V0LCBwcm9wLCAwLCAxLCBfcmVuZGVyQ29tcGxleFN0cmluZywgbnVsbCwgc2V0dGVyKSxcbiAgICAgIGluZGV4ID0gMCxcbiAgICAgIG1hdGNoSW5kZXggPSAwLFxuICAgICAgcmVzdWx0LFxuICAgICAgc3RhcnROdW1zLFxuICAgICAgY29sb3IsXG4gICAgICBlbmROdW0sXG4gICAgICBjaHVuayxcbiAgICAgIHN0YXJ0TnVtLFxuICAgICAgaGFzUmFuZG9tLFxuICAgICAgYTtcbiAgcHQuYiA9IHN0YXJ0O1xuICBwdC5lID0gZW5kO1xuICBzdGFydCArPSBcIlwiOyAvL2Vuc3VyZSB2YWx1ZXMgYXJlIHN0cmluZ3NcblxuICBlbmQgKz0gXCJcIjtcblxuICBpZiAoaGFzUmFuZG9tID0gfmVuZC5pbmRleE9mKFwicmFuZG9tKFwiKSkge1xuICAgIGVuZCA9IF9yZXBsYWNlUmFuZG9tKGVuZCk7XG4gIH1cblxuICBpZiAoc3RyaW5nRmlsdGVyKSB7XG4gICAgYSA9IFtzdGFydCwgZW5kXTtcbiAgICBzdHJpbmdGaWx0ZXIoYSwgdGFyZ2V0LCBwcm9wKTsgLy9wYXNzIGFuIGFycmF5IHdpdGggdGhlIHN0YXJ0aW5nIGFuZCBlbmRpbmcgdmFsdWVzIGFuZCBsZXQgdGhlIGZpbHRlciBkbyB3aGF0ZXZlciBpdCBuZWVkcyB0byB0aGUgdmFsdWVzLlxuXG4gICAgc3RhcnQgPSBhWzBdO1xuICAgIGVuZCA9IGFbMV07XG4gIH1cblxuICBzdGFydE51bXMgPSBzdGFydC5tYXRjaChfY29tcGxleFN0cmluZ051bUV4cCkgfHwgW107XG5cbiAgd2hpbGUgKHJlc3VsdCA9IF9jb21wbGV4U3RyaW5nTnVtRXhwLmV4ZWMoZW5kKSkge1xuICAgIGVuZE51bSA9IHJlc3VsdFswXTtcbiAgICBjaHVuayA9IGVuZC5zdWJzdHJpbmcoaW5kZXgsIHJlc3VsdC5pbmRleCk7XG5cbiAgICBpZiAoY29sb3IpIHtcbiAgICAgIGNvbG9yID0gKGNvbG9yICsgMSkgJSA1O1xuICAgIH0gZWxzZSBpZiAoY2h1bmsuc3Vic3RyKC01KSA9PT0gXCJyZ2JhKFwiKSB7XG4gICAgICBjb2xvciA9IDE7XG4gICAgfVxuXG4gICAgaWYgKGVuZE51bSAhPT0gc3RhcnROdW1zW21hdGNoSW5kZXgrK10pIHtcbiAgICAgIHN0YXJ0TnVtID0gcGFyc2VGbG9hdChzdGFydE51bXNbbWF0Y2hJbmRleCAtIDFdKSB8fCAwOyAvL3RoZXNlIG5lc3RlZCBQcm9wVHdlZW5zIGFyZSBoYW5kbGVkIGluIGEgc3BlY2lhbCB3YXkgLSB3ZSdsbCBuZXZlciBhY3R1YWxseSBjYWxsIGEgcmVuZGVyIG9yIHNldHRlciBtZXRob2Qgb24gdGhlbS4gV2UnbGwganVzdCBsb29wIHRocm91Z2ggdGhlbSBpbiB0aGUgcGFyZW50IGNvbXBsZXggc3RyaW5nIFByb3BUd2VlbidzIHJlbmRlciBtZXRob2QuXG5cbiAgICAgIHB0Ll9wdCA9IHtcbiAgICAgICAgX25leHQ6IHB0Ll9wdCxcbiAgICAgICAgcDogY2h1bmsgfHwgbWF0Y2hJbmRleCA9PT0gMSA/IGNodW5rIDogXCIsXCIsXG4gICAgICAgIC8vbm90ZTogU1ZHIHNwZWMgYWxsb3dzIG9taXNzaW9uIG9mIGNvbW1hL3NwYWNlIHdoZW4gYSBuZWdhdGl2ZSBzaWduIGlzIHdlZGdlZCBiZXR3ZWVuIHR3byBudW1iZXJzLCBsaWtlIDIuNS01LjMgaW5zdGVhZCBvZiAyLjUsLTUuMyBidXQgd2hlbiB0d2VlbmluZywgdGhlIG5lZ2F0aXZlIHZhbHVlIG1heSBzd2l0Y2ggdG8gcG9zaXRpdmUsIHNvIHdlIGluc2VydCB0aGUgY29tbWEganVzdCBpbiBjYXNlLlxuICAgICAgICBzOiBzdGFydE51bSxcbiAgICAgICAgYzogZW5kTnVtLmNoYXJBdCgxKSA9PT0gXCI9XCIgPyBwYXJzZUZsb2F0KGVuZE51bS5zdWJzdHIoMikpICogKGVuZE51bS5jaGFyQXQoMCkgPT09IFwiLVwiID8gLTEgOiAxKSA6IHBhcnNlRmxvYXQoZW5kTnVtKSAtIHN0YXJ0TnVtLFxuICAgICAgICBtOiBjb2xvciAmJiBjb2xvciA8IDQgPyBNYXRoLnJvdW5kIDogMFxuICAgICAgfTtcbiAgICAgIGluZGV4ID0gX2NvbXBsZXhTdHJpbmdOdW1FeHAubGFzdEluZGV4O1xuICAgIH1cbiAgfVxuXG4gIHB0LmMgPSBpbmRleCA8IGVuZC5sZW5ndGggPyBlbmQuc3Vic3RyaW5nKGluZGV4LCBlbmQubGVuZ3RoKSA6IFwiXCI7IC8vd2UgdXNlIHRoZSBcImNcIiBvZiB0aGUgUHJvcFR3ZWVuIHRvIHN0b3JlIHRoZSBmaW5hbCBwYXJ0IG9mIHRoZSBzdHJpbmcgKGFmdGVyIHRoZSBsYXN0IG51bWJlcilcblxuICBwdC5mcCA9IGZ1bmNQYXJhbTtcblxuICBpZiAoX3JlbEV4cC50ZXN0KGVuZCkgfHwgaGFzUmFuZG9tKSB7XG4gICAgcHQuZSA9IDA7IC8vaWYgdGhlIGVuZCBzdHJpbmcgY29udGFpbnMgcmVsYXRpdmUgdmFsdWVzIG9yIGR5bmFtaWMgcmFuZG9tKC4uLikgdmFsdWVzLCBkZWxldGUgdGhlIGVuZCBpdCBzbyB0aGF0IG9uIHRoZSBmaW5hbCByZW5kZXIgd2UgZG9uJ3QgYWN0dWFsbHkgc2V0IGl0IHRvIHRoZSBzdHJpbmcgd2l0aCArPSBvciAtPSBjaGFyYWN0ZXJzIChmb3JjZXMgaXQgdG8gdXNlIHRoZSBjYWxjdWxhdGVkIHZhbHVlKS5cbiAgfVxuXG4gIHRoaXMuX3B0ID0gcHQ7IC8vc3RhcnQgdGhlIGxpbmtlZCBsaXN0IHdpdGggdGhpcyBuZXcgUHJvcFR3ZWVuLiBSZW1lbWJlciwgd2UgY2FsbCBfYWRkQ29tcGxleFN0cmluZ1Byb3BUd2Vlbi5jYWxsKHR3ZWVuSW5zdGFuY2UuLi4pIHRvIGVuc3VyZSB0aGF0IGl0J3Mgc2NvcGVkIHByb3Blcmx5LiBXZSBtYXkgY2FsbCBpdCBmcm9tIHdpdGhpbiBhIHBsdWdpbiB0b28sIHRodXMgXCJ0aGlzXCIgd291bGQgcmVmZXIgdG8gdGhlIHBsdWdpbi5cblxuICByZXR1cm4gcHQ7XG59LFxuICAgIF9hZGRQcm9wVHdlZW4gPSBmdW5jdGlvbiBfYWRkUHJvcFR3ZWVuKHRhcmdldCwgcHJvcCwgc3RhcnQsIGVuZCwgaW5kZXgsIHRhcmdldHMsIG1vZGlmaWVyLCBzdHJpbmdGaWx0ZXIsIGZ1bmNQYXJhbSkge1xuICBfaXNGdW5jdGlvbihlbmQpICYmIChlbmQgPSBlbmQoaW5kZXggfHwgMCwgdGFyZ2V0LCB0YXJnZXRzKSk7XG4gIHZhciBjdXJyZW50VmFsdWUgPSB0YXJnZXRbcHJvcF0sXG4gICAgICBwYXJzZWRTdGFydCA9IHN0YXJ0ICE9PSBcImdldFwiID8gc3RhcnQgOiAhX2lzRnVuY3Rpb24oY3VycmVudFZhbHVlKSA/IGN1cnJlbnRWYWx1ZSA6IGZ1bmNQYXJhbSA/IHRhcmdldFtwcm9wLmluZGV4T2YoXCJzZXRcIikgfHwgIV9pc0Z1bmN0aW9uKHRhcmdldFtcImdldFwiICsgcHJvcC5zdWJzdHIoMyldKSA/IHByb3AgOiBcImdldFwiICsgcHJvcC5zdWJzdHIoMyldKGZ1bmNQYXJhbSkgOiB0YXJnZXRbcHJvcF0oKSxcbiAgICAgIHNldHRlciA9ICFfaXNGdW5jdGlvbihjdXJyZW50VmFsdWUpID8gX3NldHRlclBsYWluIDogZnVuY1BhcmFtID8gX3NldHRlckZ1bmNXaXRoUGFyYW0gOiBfc2V0dGVyRnVuYyxcbiAgICAgIHB0O1xuXG4gIGlmIChfaXNTdHJpbmcoZW5kKSkge1xuICAgIGlmICh+ZW5kLmluZGV4T2YoXCJyYW5kb20oXCIpKSB7XG4gICAgICBlbmQgPSBfcmVwbGFjZVJhbmRvbShlbmQpO1xuICAgIH1cblxuICAgIGlmIChlbmQuY2hhckF0KDEpID09PSBcIj1cIikge1xuICAgICAgcHQgPSBwYXJzZUZsb2F0KHBhcnNlZFN0YXJ0KSArIHBhcnNlRmxvYXQoZW5kLnN1YnN0cigyKSkgKiAoZW5kLmNoYXJBdCgwKSA9PT0gXCItXCIgPyAtMSA6IDEpICsgKGdldFVuaXQocGFyc2VkU3RhcnQpIHx8IDApO1xuXG4gICAgICBpZiAocHQgfHwgcHQgPT09IDApIHtcbiAgICAgICAgLy8gdG8gYXZvaWQgaXNOYU4sIGxpa2UgaWYgc29tZW9uZSBwYXNzZXMgaW4gYSB2YWx1ZSBsaWtlIFwiIT0gd2hhdGV2ZXJcIlxuICAgICAgICBlbmQgPSBwdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAocGFyc2VkU3RhcnQgIT09IGVuZCkge1xuICAgIGlmICghaXNOYU4ocGFyc2VkU3RhcnQgKiBlbmQpICYmIGVuZCAhPT0gXCJcIikge1xuICAgICAgLy8gZnVuIGZhY3Q6IGFueSBudW1iZXIgbXVsdGlwbGllZCBieSBcIlwiIGlzIGV2YWx1YXRlZCBhcyB0aGUgbnVtYmVyIDAhXG4gICAgICBwdCA9IG5ldyBQcm9wVHdlZW4odGhpcy5fcHQsIHRhcmdldCwgcHJvcCwgK3BhcnNlZFN0YXJ0IHx8IDAsIGVuZCAtIChwYXJzZWRTdGFydCB8fCAwKSwgdHlwZW9mIGN1cnJlbnRWYWx1ZSA9PT0gXCJib29sZWFuXCIgPyBfcmVuZGVyQm9vbGVhbiA6IF9yZW5kZXJQbGFpbiwgMCwgc2V0dGVyKTtcbiAgICAgIGZ1bmNQYXJhbSAmJiAocHQuZnAgPSBmdW5jUGFyYW0pO1xuICAgICAgbW9kaWZpZXIgJiYgcHQubW9kaWZpZXIobW9kaWZpZXIsIHRoaXMsIHRhcmdldCk7XG4gICAgICByZXR1cm4gdGhpcy5fcHQgPSBwdDtcbiAgICB9XG5cbiAgICAhY3VycmVudFZhbHVlICYmICEocHJvcCBpbiB0YXJnZXQpICYmIF9taXNzaW5nUGx1Z2luKHByb3AsIGVuZCk7XG4gICAgcmV0dXJuIF9hZGRDb21wbGV4U3RyaW5nUHJvcFR3ZWVuLmNhbGwodGhpcywgdGFyZ2V0LCBwcm9wLCBwYXJzZWRTdGFydCwgZW5kLCBzZXR0ZXIsIHN0cmluZ0ZpbHRlciB8fCBfY29uZmlnLnN0cmluZ0ZpbHRlciwgZnVuY1BhcmFtKTtcbiAgfVxufSxcbiAgICAvL2NyZWF0ZXMgYSBjb3B5IG9mIHRoZSB2YXJzIG9iamVjdCBhbmQgcHJvY2Vzc2VzIGFueSBmdW5jdGlvbi1iYXNlZCB2YWx1ZXMgKHB1dHRpbmcgdGhlIHJlc3VsdGluZyB2YWx1ZXMgZGlyZWN0bHkgaW50byB0aGUgY29weSkgYXMgd2VsbCBhcyBzdHJpbmdzIHdpdGggXCJyYW5kb20oKVwiIGluIHRoZW0uIEl0IGRvZXMgTk9UIHByb2Nlc3MgcmVsYXRpdmUgdmFsdWVzLlxuX3Byb2Nlc3NWYXJzID0gZnVuY3Rpb24gX3Byb2Nlc3NWYXJzKHZhcnMsIGluZGV4LCB0YXJnZXQsIHRhcmdldHMsIHR3ZWVuKSB7XG4gIF9pc0Z1bmN0aW9uKHZhcnMpICYmICh2YXJzID0gX3BhcnNlRnVuY09yU3RyaW5nKHZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzKSk7XG5cbiAgaWYgKCFfaXNPYmplY3QodmFycykgfHwgdmFycy5zdHlsZSAmJiB2YXJzLm5vZGVUeXBlIHx8IF9pc0FycmF5KHZhcnMpIHx8IF9pc1R5cGVkQXJyYXkodmFycykpIHtcbiAgICByZXR1cm4gX2lzU3RyaW5nKHZhcnMpID8gX3BhcnNlRnVuY09yU3RyaW5nKHZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzKSA6IHZhcnM7XG4gIH1cblxuICB2YXIgY29weSA9IHt9LFxuICAgICAgcDtcblxuICBmb3IgKHAgaW4gdmFycykge1xuICAgIGNvcHlbcF0gPSBfcGFyc2VGdW5jT3JTdHJpbmcodmFyc1twXSwgdHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpO1xuICB9XG5cbiAgcmV0dXJuIGNvcHk7XG59LFxuICAgIF9jaGVja1BsdWdpbiA9IGZ1bmN0aW9uIF9jaGVja1BsdWdpbihwcm9wZXJ0eSwgdmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpIHtcbiAgdmFyIHBsdWdpbiwgcHQsIHB0TG9va3VwLCBpO1xuXG4gIGlmIChfcGx1Z2luc1twcm9wZXJ0eV0gJiYgKHBsdWdpbiA9IG5ldyBfcGx1Z2luc1twcm9wZXJ0eV0oKSkuaW5pdCh0YXJnZXQsIHBsdWdpbi5yYXdWYXJzID8gdmFyc1twcm9wZXJ0eV0gOiBfcHJvY2Vzc1ZhcnModmFyc1twcm9wZXJ0eV0sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMsIHR3ZWVuKSwgdHdlZW4sIGluZGV4LCB0YXJnZXRzKSAhPT0gZmFsc2UpIHtcbiAgICB0d2Vlbi5fcHQgPSBwdCA9IG5ldyBQcm9wVHdlZW4odHdlZW4uX3B0LCB0YXJnZXQsIHByb3BlcnR5LCAwLCAxLCBwbHVnaW4ucmVuZGVyLCBwbHVnaW4sIDAsIHBsdWdpbi5wcmlvcml0eSk7XG5cbiAgICBpZiAodHdlZW4gIT09IF9xdWlja1R3ZWVuKSB7XG4gICAgICBwdExvb2t1cCA9IHR3ZWVuLl9wdExvb2t1cFt0d2Vlbi5fdGFyZ2V0cy5pbmRleE9mKHRhcmdldCldOyAvL25vdGU6IHdlIGNhbid0IHVzZSB0d2Vlbi5fcHRMb29rdXBbaW5kZXhdIGJlY2F1c2UgZm9yIHN0YWdnZXJlZCB0d2VlbnMsIHRoZSBpbmRleCBmcm9tIHRoZSBmdWxsVGFyZ2V0cyBhcnJheSB3b24ndCBtYXRjaCB3aGF0IGl0IGlzIGluIGVhY2ggaW5kaXZpZHVhbCB0d2VlbiB0aGF0IHNwYXducyBmcm9tIHRoZSBzdGFnZ2VyLlxuXG4gICAgICBpID0gcGx1Z2luLl9wcm9wcy5sZW5ndGg7XG5cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgcHRMb29rdXBbcGx1Z2luLl9wcm9wc1tpXV0gPSBwdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGx1Z2luO1xufSxcbiAgICBfb3ZlcndyaXRpbmdUd2VlbixcbiAgICAvL3N0b3JlIGEgcmVmZXJlbmNlIHRlbXBvcmFyaWx5IHNvIHdlIGNhbiBhdm9pZCBvdmVyd3JpdGluZyBpdHNlbGYuXG5faW5pdFR3ZWVuID0gZnVuY3Rpb24gX2luaXRUd2Vlbih0d2VlbiwgdGltZSkge1xuICB2YXIgdmFycyA9IHR3ZWVuLnZhcnMsXG4gICAgICBlYXNlID0gdmFycy5lYXNlLFxuICAgICAgc3RhcnRBdCA9IHZhcnMuc3RhcnRBdCxcbiAgICAgIGltbWVkaWF0ZVJlbmRlciA9IHZhcnMuaW1tZWRpYXRlUmVuZGVyLFxuICAgICAgbGF6eSA9IHZhcnMubGF6eSxcbiAgICAgIG9uVXBkYXRlID0gdmFycy5vblVwZGF0ZSxcbiAgICAgIG9uVXBkYXRlUGFyYW1zID0gdmFycy5vblVwZGF0ZVBhcmFtcyxcbiAgICAgIGNhbGxiYWNrU2NvcGUgPSB2YXJzLmNhbGxiYWNrU2NvcGUsXG4gICAgICBydW5CYWNrd2FyZHMgPSB2YXJzLnJ1bkJhY2t3YXJkcyxcbiAgICAgIHlveW9FYXNlID0gdmFycy55b3lvRWFzZSxcbiAgICAgIGtleWZyYW1lcyA9IHZhcnMua2V5ZnJhbWVzLFxuICAgICAgYXV0b1JldmVydCA9IHZhcnMuYXV0b1JldmVydCxcbiAgICAgIGR1ciA9IHR3ZWVuLl9kdXIsXG4gICAgICBwcmV2U3RhcnRBdCA9IHR3ZWVuLl9zdGFydEF0LFxuICAgICAgdGFyZ2V0cyA9IHR3ZWVuLl90YXJnZXRzLFxuICAgICAgcGFyZW50ID0gdHdlZW4ucGFyZW50LFxuICAgICAgZnVsbFRhcmdldHMgPSBwYXJlbnQgJiYgcGFyZW50LmRhdGEgPT09IFwibmVzdGVkXCIgPyBwYXJlbnQucGFyZW50Ll90YXJnZXRzIDogdGFyZ2V0cyxcbiAgICAgIGF1dG9PdmVyd3JpdGUgPSB0d2Vlbi5fb3ZlcndyaXRlID09PSBcImF1dG9cIiAmJiAhX3N1cHByZXNzT3ZlcndyaXRlcyxcbiAgICAgIHRsID0gdHdlZW4udGltZWxpbmUsXG4gICAgICBjbGVhblZhcnMsXG4gICAgICBpLFxuICAgICAgcCxcbiAgICAgIHB0LFxuICAgICAgdGFyZ2V0LFxuICAgICAgaGFzUHJpb3JpdHksXG4gICAgICBnc0RhdGEsXG4gICAgICBoYXJuZXNzLFxuICAgICAgcGx1Z2luLFxuICAgICAgcHRMb29rdXAsXG4gICAgICBpbmRleCxcbiAgICAgIGhhcm5lc3NWYXJzLFxuICAgICAgb3ZlcndyaXR0ZW47XG4gIHRsICYmICgha2V5ZnJhbWVzIHx8ICFlYXNlKSAmJiAoZWFzZSA9IFwibm9uZVwiKTtcbiAgdHdlZW4uX2Vhc2UgPSBfcGFyc2VFYXNlKGVhc2UsIF9kZWZhdWx0cy5lYXNlKTtcbiAgdHdlZW4uX3lFYXNlID0geW95b0Vhc2UgPyBfaW52ZXJ0RWFzZShfcGFyc2VFYXNlKHlveW9FYXNlID09PSB0cnVlID8gZWFzZSA6IHlveW9FYXNlLCBfZGVmYXVsdHMuZWFzZSkpIDogMDtcblxuICBpZiAoeW95b0Vhc2UgJiYgdHdlZW4uX3lveW8gJiYgIXR3ZWVuLl9yZXBlYXQpIHtcbiAgICAvL3RoZXJlIG11c3QgaGF2ZSBiZWVuIGEgcGFyZW50IHRpbWVsaW5lIHdpdGggeW95bzp0cnVlIHRoYXQgaXMgY3VycmVudGx5IGluIGl0cyB5b3lvIHBoYXNlLCBzbyBmbGlwIHRoZSBlYXNlcy5cbiAgICB5b3lvRWFzZSA9IHR3ZWVuLl95RWFzZTtcbiAgICB0d2Vlbi5feUVhc2UgPSB0d2Vlbi5fZWFzZTtcbiAgICB0d2Vlbi5fZWFzZSA9IHlveW9FYXNlO1xuICB9XG5cbiAgdHdlZW4uX2Zyb20gPSAhdGwgJiYgISF2YXJzLnJ1bkJhY2t3YXJkczsgLy9uZXN0ZWQgdGltZWxpbmVzIHNob3VsZCBuZXZlciBydW4gYmFja3dhcmRzIC0gdGhlIGJhY2t3YXJkcy1uZXNzIGlzIGluIHRoZSBjaGlsZCB0d2VlbnMuXG5cbiAgaWYgKCF0bCkge1xuICAgIC8vaWYgdGhlcmUncyBhbiBpbnRlcm5hbCB0aW1lbGluZSwgc2tpcCBhbGwgdGhlIHBhcnNpbmcgYmVjYXVzZSB3ZSBwYXNzZWQgdGhhdCB0YXNrIGRvd24gdGhlIGNoYWluLlxuICAgIGhhcm5lc3MgPSB0YXJnZXRzWzBdID8gX2dldENhY2hlKHRhcmdldHNbMF0pLmhhcm5lc3MgOiAwO1xuICAgIGhhcm5lc3NWYXJzID0gaGFybmVzcyAmJiB2YXJzW2hhcm5lc3MucHJvcF07IC8vc29tZW9uZSBtYXkgbmVlZCB0byBzcGVjaWZ5IENTUy1zcGVjaWZpYyB2YWx1ZXMgQU5EIG5vbi1DU1MgdmFsdWVzLCBsaWtlIGlmIHRoZSBlbGVtZW50IGhhcyBhbiBcInhcIiBwcm9wZXJ0eSBwbHVzIGl0J3MgYSBzdGFuZGFyZCBET00gZWxlbWVudC4gV2UgYWxsb3cgcGVvcGxlIHRvIGRpc3Rpbmd1aXNoIGJ5IHdyYXBwaW5nIHBsdWdpbi1zcGVjaWZpYyBzdHVmZiBpbiBhIGNzczp7fSBvYmplY3QgZm9yIGV4YW1wbGUuXG5cbiAgICBjbGVhblZhcnMgPSBfY29weUV4Y2x1ZGluZyh2YXJzLCBfcmVzZXJ2ZWRQcm9wcyk7XG4gICAgcHJldlN0YXJ0QXQgJiYgcHJldlN0YXJ0QXQucmVuZGVyKC0xLCB0cnVlKS5raWxsKCk7XG5cbiAgICBpZiAoc3RhcnRBdCkge1xuICAgICAgX3JlbW92ZUZyb21QYXJlbnQodHdlZW4uX3N0YXJ0QXQgPSBUd2Vlbi5zZXQodGFyZ2V0cywgX3NldERlZmF1bHRzKHtcbiAgICAgICAgZGF0YTogXCJpc1N0YXJ0XCIsXG4gICAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXG4gICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICBpbW1lZGlhdGVSZW5kZXI6IHRydWUsXG4gICAgICAgIGxhenk6IF9pc05vdEZhbHNlKGxhenkpLFxuICAgICAgICBzdGFydEF0OiBudWxsLFxuICAgICAgICBkZWxheTogMCxcbiAgICAgICAgb25VcGRhdGU6IG9uVXBkYXRlLFxuICAgICAgICBvblVwZGF0ZVBhcmFtczogb25VcGRhdGVQYXJhbXMsXG4gICAgICAgIGNhbGxiYWNrU2NvcGU6IGNhbGxiYWNrU2NvcGUsXG4gICAgICAgIHN0YWdnZXI6IDBcbiAgICAgIH0sIHN0YXJ0QXQpKSk7IC8vY29weSB0aGUgcHJvcGVydGllcy92YWx1ZXMgaW50byBhIG5ldyBvYmplY3QgdG8gYXZvaWQgY29sbGlzaW9ucywgbGlrZSB2YXIgdG8gPSB7eDowfSwgZnJvbSA9IHt4OjUwMH07IHRpbWVsaW5lLmZyb21UbyhlLCBmcm9tLCB0bykuZnJvbVRvKGUsIHRvLCBmcm9tKTtcblxuXG4gICAgICB0aW1lIDwgMCAmJiAhaW1tZWRpYXRlUmVuZGVyICYmICFhdXRvUmV2ZXJ0ICYmIHR3ZWVuLl9zdGFydEF0LnJlbmRlcigtMSwgdHJ1ZSk7IC8vIHJhcmUgZWRnZSBjYXNlLCBsaWtlIGlmIGEgcmVuZGVyIGlzIGZvcmNlZCBpbiB0aGUgbmVnYXRpdmUgZGlyZWN0aW9uIG9mIGEgbm9uLWluaXR0ZWQgdHdlZW4uXG5cbiAgICAgIGlmIChpbW1lZGlhdGVSZW5kZXIpIHtcbiAgICAgICAgdGltZSA+IDAgJiYgIWF1dG9SZXZlcnQgJiYgKHR3ZWVuLl9zdGFydEF0ID0gMCk7IC8vdHdlZW5zIHRoYXQgcmVuZGVyIGltbWVkaWF0ZWx5IChsaWtlIG1vc3QgZnJvbSgpIGFuZCBmcm9tVG8oKSB0d2VlbnMpIHNob3VsZG4ndCByZXZlcnQgd2hlbiB0aGVpciBwYXJlbnQgdGltZWxpbmUncyBwbGF5aGVhZCBnb2VzIGJhY2t3YXJkIHBhc3QgdGhlIHN0YXJ0VGltZSBiZWNhdXNlIHRoZSBpbml0aWFsIHJlbmRlciBjb3VsZCBoYXZlIGhhcHBlbmVkIGFueXRpbWUgYW5kIGl0IHNob3VsZG4ndCBiZSBkaXJlY3RseSBjb3JyZWxhdGVkIHRvIHRoaXMgdHdlZW4ncyBzdGFydFRpbWUuIEltYWdpbmUgc2V0dGluZyB1cCBhIGNvbXBsZXggYW5pbWF0aW9uIHdoZXJlIHRoZSBiZWdpbm5pbmcgc3RhdGVzIG9mIHZhcmlvdXMgb2JqZWN0cyBhcmUgcmVuZGVyZWQgaW1tZWRpYXRlbHkgYnV0IHRoZSB0d2VlbiBkb2Vzbid0IGhhcHBlbiBmb3IgcXVpdGUgc29tZSB0aW1lIC0gaWYgd2UgcmV2ZXJ0IHRvIHRoZSBzdGFydGluZyB2YWx1ZXMgYXMgc29vbiBhcyB0aGUgcGxheWhlYWQgZ29lcyBiYWNrd2FyZCBwYXN0IHRoZSB0d2VlbidzIHN0YXJ0VGltZSwgaXQgd2lsbCB0aHJvdyB0aGluZ3Mgb2ZmIHZpc3VhbGx5LiBSZXZlcnNpb24gc2hvdWxkIG9ubHkgaGFwcGVuIGluIFRpbWVsaW5lIGluc3RhbmNlcyB3aGVyZSBpbW1lZGlhdGVSZW5kZXIgd2FzIGZhbHNlIG9yIHdoZW4gYXV0b1JldmVydCBpcyBleHBsaWNpdGx5IHNldCB0byB0cnVlLlxuXG4gICAgICAgIGlmIChkdXIgJiYgdGltZSA8PSAwKSB7XG4gICAgICAgICAgdGltZSAmJiAodHdlZW4uX3pUaW1lID0gdGltZSk7XG4gICAgICAgICAgcmV0dXJuOyAvL3dlIHNraXAgaW5pdGlhbGl6YXRpb24gaGVyZSBzbyB0aGF0IG92ZXJ3cml0aW5nIGRvZXNuJ3Qgb2NjdXIgdW50aWwgdGhlIHR3ZWVuIGFjdHVhbGx5IGJlZ2lucy4gT3RoZXJ3aXNlLCBpZiB5b3UgY3JlYXRlIHNldmVyYWwgaW1tZWRpYXRlUmVuZGVyOnRydWUgdHdlZW5zIG9mIHRoZSBzYW1lIHRhcmdldC9wcm9wZXJ0aWVzIHRvIGRyb3AgaW50byBhIFRpbWVsaW5lLCB0aGUgbGFzdCBvbmUgY3JlYXRlZCB3b3VsZCBvdmVyd3JpdGUgdGhlIGZpcnN0IG9uZXMgYmVjYXVzZSB0aGV5IGRpZG4ndCBnZXQgcGxhY2VkIGludG8gdGhlIHRpbWVsaW5lIHlldCBiZWZvcmUgdGhlIGZpcnN0IHJlbmRlciBvY2N1cnMgYW5kIGtpY2tzIGluIG92ZXJ3cml0aW5nLlxuICAgICAgICB9IC8vIGlmICh0aW1lID4gMCkge1xuICAgICAgICAvLyBcdGF1dG9SZXZlcnQgfHwgKHR3ZWVuLl9zdGFydEF0ID0gMCk7IC8vdHdlZW5zIHRoYXQgcmVuZGVyIGltbWVkaWF0ZWx5IChsaWtlIG1vc3QgZnJvbSgpIGFuZCBmcm9tVG8oKSB0d2VlbnMpIHNob3VsZG4ndCByZXZlcnQgd2hlbiB0aGVpciBwYXJlbnQgdGltZWxpbmUncyBwbGF5aGVhZCBnb2VzIGJhY2t3YXJkIHBhc3QgdGhlIHN0YXJ0VGltZSBiZWNhdXNlIHRoZSBpbml0aWFsIHJlbmRlciBjb3VsZCBoYXZlIGhhcHBlbmVkIGFueXRpbWUgYW5kIGl0IHNob3VsZG4ndCBiZSBkaXJlY3RseSBjb3JyZWxhdGVkIHRvIHRoaXMgdHdlZW4ncyBzdGFydFRpbWUuIEltYWdpbmUgc2V0dGluZyB1cCBhIGNvbXBsZXggYW5pbWF0aW9uIHdoZXJlIHRoZSBiZWdpbm5pbmcgc3RhdGVzIG9mIHZhcmlvdXMgb2JqZWN0cyBhcmUgcmVuZGVyZWQgaW1tZWRpYXRlbHkgYnV0IHRoZSB0d2VlbiBkb2Vzbid0IGhhcHBlbiBmb3IgcXVpdGUgc29tZSB0aW1lIC0gaWYgd2UgcmV2ZXJ0IHRvIHRoZSBzdGFydGluZyB2YWx1ZXMgYXMgc29vbiBhcyB0aGUgcGxheWhlYWQgZ29lcyBiYWNrd2FyZCBwYXN0IHRoZSB0d2VlbidzIHN0YXJ0VGltZSwgaXQgd2lsbCB0aHJvdyB0aGluZ3Mgb2ZmIHZpc3VhbGx5LiBSZXZlcnNpb24gc2hvdWxkIG9ubHkgaGFwcGVuIGluIFRpbWVsaW5lIGluc3RhbmNlcyB3aGVyZSBpbW1lZGlhdGVSZW5kZXIgd2FzIGZhbHNlIG9yIHdoZW4gYXV0b1JldmVydCBpcyBleHBsaWNpdGx5IHNldCB0byB0cnVlLlxuICAgICAgICAvLyB9IGVsc2UgaWYgKGR1ciAmJiAhKHRpbWUgPCAwICYmIHByZXZTdGFydEF0KSkge1xuICAgICAgICAvLyBcdHRpbWUgJiYgKHR3ZWVuLl96VGltZSA9IHRpbWUpO1xuICAgICAgICAvLyBcdHJldHVybjsgLy93ZSBza2lwIGluaXRpYWxpemF0aW9uIGhlcmUgc28gdGhhdCBvdmVyd3JpdGluZyBkb2Vzbid0IG9jY3VyIHVudGlsIHRoZSB0d2VlbiBhY3R1YWxseSBiZWdpbnMuIE90aGVyd2lzZSwgaWYgeW91IGNyZWF0ZSBzZXZlcmFsIGltbWVkaWF0ZVJlbmRlcjp0cnVlIHR3ZWVucyBvZiB0aGUgc2FtZSB0YXJnZXQvcHJvcGVydGllcyB0byBkcm9wIGludG8gYSBUaW1lbGluZSwgdGhlIGxhc3Qgb25lIGNyZWF0ZWQgd291bGQgb3ZlcndyaXRlIHRoZSBmaXJzdCBvbmVzIGJlY2F1c2UgdGhleSBkaWRuJ3QgZ2V0IHBsYWNlZCBpbnRvIHRoZSB0aW1lbGluZSB5ZXQgYmVmb3JlIHRoZSBmaXJzdCByZW5kZXIgb2NjdXJzIGFuZCBraWNrcyBpbiBvdmVyd3JpdGluZy5cbiAgICAgICAgLy8gfVxuXG4gICAgICB9IGVsc2UgaWYgKGF1dG9SZXZlcnQgPT09IGZhbHNlKSB7XG4gICAgICAgIHR3ZWVuLl9zdGFydEF0ID0gMDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJ1bkJhY2t3YXJkcyAmJiBkdXIpIHtcbiAgICAgIC8vZnJvbSgpIHR3ZWVucyBtdXN0IGJlIGhhbmRsZWQgdW5pcXVlbHk6IHRoZWlyIGJlZ2lubmluZyB2YWx1ZXMgbXVzdCBiZSByZW5kZXJlZCBidXQgd2UgZG9uJ3Qgd2FudCBvdmVyd3JpdGluZyB0byBvY2N1ciB5ZXQgKHdoZW4gdGltZSBpcyBzdGlsbCAwKS4gV2FpdCB1bnRpbCB0aGUgdHdlZW4gYWN0dWFsbHkgYmVnaW5zIGJlZm9yZSBkb2luZyBhbGwgdGhlIHJvdXRpbmVzIGxpa2Ugb3ZlcndyaXRpbmcuIEF0IHRoYXQgdGltZSwgd2Ugc2hvdWxkIHJlbmRlciBhdCB0aGUgRU5EIG9mIHRoZSB0d2VlbiB0byBlbnN1cmUgdGhhdCB0aGluZ3MgaW5pdGlhbGl6ZSBjb3JyZWN0bHkgKHJlbWVtYmVyLCBmcm9tKCkgdHdlZW5zIGdvIGJhY2t3YXJkcylcbiAgICAgIGlmIChwcmV2U3RhcnRBdCkge1xuICAgICAgICAhYXV0b1JldmVydCAmJiAodHdlZW4uX3N0YXJ0QXQgPSAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpbWUgJiYgKGltbWVkaWF0ZVJlbmRlciA9IGZhbHNlKTsgLy9pbiByYXJlIGNhc2VzIChsaWtlIGlmIGEgZnJvbSgpIHR3ZWVuIHJ1bnMgYW5kIHRoZW4gaXMgaW52YWxpZGF0ZSgpLWVkKSwgaW1tZWRpYXRlUmVuZGVyIGNvdWxkIGJlIHRydWUgYnV0IHRoZSBpbml0aWFsIGZvcmNlZC1yZW5kZXIgZ2V0cyBza2lwcGVkLCBzbyB0aGVyZSdzIG5vIG5lZWQgdG8gZm9yY2UgdGhlIHJlbmRlciBpbiB0aGlzIGNvbnRleHQgd2hlbiB0aGUgX3RpbWUgaXMgZ3JlYXRlciB0aGFuIDBcblxuICAgICAgICBwID0gX3NldERlZmF1bHRzKHtcbiAgICAgICAgICBvdmVyd3JpdGU6IGZhbHNlLFxuICAgICAgICAgIGRhdGE6IFwiaXNGcm9tU3RhcnRcIixcbiAgICAgICAgICAvL3dlIHRhZyB0aGUgdHdlZW4gd2l0aCBhcyBcImlzRnJvbVN0YXJ0XCIgc28gdGhhdCBpZiBbaW5zaWRlIGEgcGx1Z2luXSB3ZSBuZWVkIHRvIG9ubHkgZG8gc29tZXRoaW5nIGF0IHRoZSB2ZXJ5IEVORCBvZiBhIHR3ZWVuLCB3ZSBoYXZlIGEgd2F5IG9mIGlkZW50aWZ5aW5nIHRoaXMgdHdlZW4gYXMgbWVyZWx5IHRoZSBvbmUgdGhhdCdzIHNldHRpbmcgdGhlIGJlZ2lubmluZyB2YWx1ZXMgZm9yIGEgXCJmcm9tKClcIiB0d2Vlbi4gRm9yIGV4YW1wbGUsIGNsZWFyUHJvcHMgaW4gQ1NTUGx1Z2luIHNob3VsZCBvbmx5IGdldCBhcHBsaWVkIGF0IHRoZSB2ZXJ5IEVORCBvZiBhIHR3ZWVuIGFuZCB3aXRob3V0IHRoaXMgdGFnLCBmcm9tKC4uLntoZWlnaHQ6MTAwLCBjbGVhclByb3BzOlwiaGVpZ2h0XCIsIGRlbGF5OjF9KSB3b3VsZCB3aXBlIHRoZSBoZWlnaHQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgdHdlZW4gYW5kIGFmdGVyIDEgc2Vjb25kLCBpdCdkIGtpY2sgYmFjayBpbi5cbiAgICAgICAgICBsYXp5OiBpbW1lZGlhdGVSZW5kZXIgJiYgX2lzTm90RmFsc2UobGF6eSksXG4gICAgICAgICAgaW1tZWRpYXRlUmVuZGVyOiBpbW1lZGlhdGVSZW5kZXIsXG4gICAgICAgICAgLy96ZXJvLWR1cmF0aW9uIHR3ZWVucyByZW5kZXIgaW1tZWRpYXRlbHkgYnkgZGVmYXVsdCwgYnV0IGlmIHdlJ3JlIG5vdCBzcGVjaWZpY2FsbHkgaW5zdHJ1Y3RlZCB0byByZW5kZXIgdGhpcyB0d2VlbiBpbW1lZGlhdGVseSwgd2Ugc2hvdWxkIHNraXAgdGhpcyBhbmQgbWVyZWx5IF9pbml0KCkgdG8gcmVjb3JkIHRoZSBzdGFydGluZyB2YWx1ZXMgKHJlbmRlcmluZyB0aGVtIGltbWVkaWF0ZWx5IHdvdWxkIHB1c2ggdGhlbSB0byBjb21wbGV0aW9uIHdoaWNoIGlzIHdhc3RlZnVsIGluIHRoYXQgY2FzZSAtIHdlJ2QgaGF2ZSB0byByZW5kZXIoLTEpIGltbWVkaWF0ZWx5IGFmdGVyKVxuICAgICAgICAgIHN0YWdnZXI6IDAsXG4gICAgICAgICAgcGFyZW50OiBwYXJlbnQgLy9lbnN1cmVzIHRoYXQgbmVzdGVkIHR3ZWVucyB0aGF0IGhhZCBhIHN0YWdnZXIgYXJlIGhhbmRsZWQgcHJvcGVybHksIGxpa2UgZ3NhcC5mcm9tKFwiLmNsYXNzXCIsIHt5OmdzYXAudXRpbHMud3JhcChbLTEwMCwxMDBdKX0pXG5cbiAgICAgICAgfSwgY2xlYW5WYXJzKTtcbiAgICAgICAgaGFybmVzc1ZhcnMgJiYgKHBbaGFybmVzcy5wcm9wXSA9IGhhcm5lc3NWYXJzKTsgLy8gaW4gY2FzZSBzb21lb25lIGRvZXMgc29tZXRoaW5nIGxpa2UgLmZyb20oLi4uLCB7Y3NzOnt9fSlcblxuICAgICAgICBfcmVtb3ZlRnJvbVBhcmVudCh0d2Vlbi5fc3RhcnRBdCA9IFR3ZWVuLnNldCh0YXJnZXRzLCBwKSk7XG5cbiAgICAgICAgdGltZSA8IDAgJiYgdHdlZW4uX3N0YXJ0QXQucmVuZGVyKC0xLCB0cnVlKTsgLy8gcmFyZSBlZGdlIGNhc2UsIGxpa2UgaWYgYSByZW5kZXIgaXMgZm9yY2VkIGluIHRoZSBuZWdhdGl2ZSBkaXJlY3Rpb24gb2YgYSBub24taW5pdHRlZCBmcm9tKCkgdHdlZW4uXG5cbiAgICAgICAgaWYgKCFpbW1lZGlhdGVSZW5kZXIpIHtcbiAgICAgICAgICBfaW5pdFR3ZWVuKHR3ZWVuLl9zdGFydEF0LCBfdGlueU51bSk7IC8vZW5zdXJlcyB0aGF0IHRoZSBpbml0aWFsIHZhbHVlcyBhcmUgcmVjb3JkZWRcblxuICAgICAgICB9IGVsc2UgaWYgKCF0aW1lKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdHdlZW4uX3B0ID0gMDtcbiAgICBsYXp5ID0gZHVyICYmIF9pc05vdEZhbHNlKGxhenkpIHx8IGxhenkgJiYgIWR1cjtcblxuICAgIGZvciAoaSA9IDA7IGkgPCB0YXJnZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0YXJnZXQgPSB0YXJnZXRzW2ldO1xuICAgICAgZ3NEYXRhID0gdGFyZ2V0Ll9nc2FwIHx8IF9oYXJuZXNzKHRhcmdldHMpW2ldLl9nc2FwO1xuICAgICAgdHdlZW4uX3B0TG9va3VwW2ldID0gcHRMb29rdXAgPSB7fTtcbiAgICAgIF9sYXp5TG9va3VwW2dzRGF0YS5pZF0gJiYgX2xhenlUd2VlbnMubGVuZ3RoICYmIF9sYXp5UmVuZGVyKCk7IC8vaWYgb3RoZXIgdHdlZW5zIG9mIHRoZSBzYW1lIHRhcmdldCBoYXZlIHJlY2VudGx5IGluaXR0ZWQgYnV0IGhhdmVuJ3QgcmVuZGVyZWQgeWV0LCB3ZSd2ZSBnb3QgdG8gZm9yY2UgdGhlIHJlbmRlciBzbyB0aGF0IHRoZSBzdGFydGluZyB2YWx1ZXMgYXJlIGNvcnJlY3QgKGltYWdpbmUgcG9wdWxhdGluZyBhIHRpbWVsaW5lIHdpdGggYSBidW5jaCBvZiBzZXF1ZW50aWFsIHR3ZWVucyBhbmQgdGhlbiBqdW1waW5nIHRvIHRoZSBlbmQpXG5cbiAgICAgIGluZGV4ID0gZnVsbFRhcmdldHMgPT09IHRhcmdldHMgPyBpIDogZnVsbFRhcmdldHMuaW5kZXhPZih0YXJnZXQpO1xuXG4gICAgICBpZiAoaGFybmVzcyAmJiAocGx1Z2luID0gbmV3IGhhcm5lc3MoKSkuaW5pdCh0YXJnZXQsIGhhcm5lc3NWYXJzIHx8IGNsZWFuVmFycywgdHdlZW4sIGluZGV4LCBmdWxsVGFyZ2V0cykgIT09IGZhbHNlKSB7XG4gICAgICAgIHR3ZWVuLl9wdCA9IHB0ID0gbmV3IFByb3BUd2Vlbih0d2Vlbi5fcHQsIHRhcmdldCwgcGx1Z2luLm5hbWUsIDAsIDEsIHBsdWdpbi5yZW5kZXIsIHBsdWdpbiwgMCwgcGx1Z2luLnByaW9yaXR5KTtcblxuICAgICAgICBwbHVnaW4uX3Byb3BzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICBwdExvb2t1cFtuYW1lXSA9IHB0O1xuICAgICAgICB9KTtcblxuICAgICAgICBwbHVnaW4ucHJpb3JpdHkgJiYgKGhhc1ByaW9yaXR5ID0gMSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaGFybmVzcyB8fCBoYXJuZXNzVmFycykge1xuICAgICAgICBmb3IgKHAgaW4gY2xlYW5WYXJzKSB7XG4gICAgICAgICAgaWYgKF9wbHVnaW5zW3BdICYmIChwbHVnaW4gPSBfY2hlY2tQbHVnaW4ocCwgY2xlYW5WYXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgZnVsbFRhcmdldHMpKSkge1xuICAgICAgICAgICAgcGx1Z2luLnByaW9yaXR5ICYmIChoYXNQcmlvcml0eSA9IDEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwdExvb2t1cFtwXSA9IHB0ID0gX2FkZFByb3BUd2Vlbi5jYWxsKHR3ZWVuLCB0YXJnZXQsIHAsIFwiZ2V0XCIsIGNsZWFuVmFyc1twXSwgaW5kZXgsIGZ1bGxUYXJnZXRzLCAwLCB2YXJzLnN0cmluZ0ZpbHRlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHR3ZWVuLl9vcCAmJiB0d2Vlbi5fb3BbaV0gJiYgdHdlZW4ua2lsbCh0YXJnZXQsIHR3ZWVuLl9vcFtpXSk7XG5cbiAgICAgIGlmIChhdXRvT3ZlcndyaXRlICYmIHR3ZWVuLl9wdCkge1xuICAgICAgICBfb3ZlcndyaXRpbmdUd2VlbiA9IHR3ZWVuO1xuXG4gICAgICAgIF9nbG9iYWxUaW1lbGluZS5raWxsVHdlZW5zT2YodGFyZ2V0LCBwdExvb2t1cCwgdHdlZW4uZ2xvYmFsVGltZSh0aW1lKSk7IC8vIG1ha2Ugc3VyZSB0aGUgb3ZlcndyaXRpbmcgZG9lc24ndCBvdmVyd3JpdGUgVEhJUyB0d2VlbiEhIVxuXG5cbiAgICAgICAgb3ZlcndyaXR0ZW4gPSAhdHdlZW4ucGFyZW50O1xuICAgICAgICBfb3ZlcndyaXRpbmdUd2VlbiA9IDA7XG4gICAgICB9XG5cbiAgICAgIHR3ZWVuLl9wdCAmJiBsYXp5ICYmIChfbGF6eUxvb2t1cFtnc0RhdGEuaWRdID0gMSk7XG4gICAgfVxuXG4gICAgaGFzUHJpb3JpdHkgJiYgX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eSh0d2Vlbik7XG4gICAgdHdlZW4uX29uSW5pdCAmJiB0d2Vlbi5fb25Jbml0KHR3ZWVuKTsgLy9wbHVnaW5zIGxpa2UgUm91bmRQcm9wcyBtdXN0IHdhaXQgdW50aWwgQUxMIG9mIHRoZSBQcm9wVHdlZW5zIGFyZSBpbnN0YW50aWF0ZWQuIEluIHRoZSBwbHVnaW4ncyBpbml0KCkgZnVuY3Rpb24sIGl0IHNldHMgdGhlIF9vbkluaXQgb24gdGhlIHR3ZWVuIGluc3RhbmNlLiBNYXkgbm90IGJlIHByZXR0eS9pbnR1aXRpdmUsIGJ1dCBpdCdzIGZhc3QgYW5kIGtlZXBzIGZpbGUgc2l6ZSBkb3duLlxuICB9XG5cbiAgdHdlZW4uX29uVXBkYXRlID0gb25VcGRhdGU7XG4gIHR3ZWVuLl9pbml0dGVkID0gKCF0d2Vlbi5fb3AgfHwgdHdlZW4uX3B0KSAmJiAhb3ZlcndyaXR0ZW47IC8vIGlmIG92ZXJ3cml0dGVuUHJvcHMgcmVzdWx0ZWQgaW4gdGhlIGVudGlyZSB0d2VlbiBiZWluZyBraWxsZWQsIGRvIE5PVCBmbGFnIGl0IGFzIGluaXR0ZWQgb3IgZWxzZSBpdCBtYXkgcmVuZGVyIGZvciBvbmUgdGljay5cbn0sXG4gICAgX2FkZEFsaWFzZXNUb1ZhcnMgPSBmdW5jdGlvbiBfYWRkQWxpYXNlc1RvVmFycyh0YXJnZXRzLCB2YXJzKSB7XG4gIHZhciBoYXJuZXNzID0gdGFyZ2V0c1swXSA/IF9nZXRDYWNoZSh0YXJnZXRzWzBdKS5oYXJuZXNzIDogMCxcbiAgICAgIHByb3BlcnR5QWxpYXNlcyA9IGhhcm5lc3MgJiYgaGFybmVzcy5hbGlhc2VzLFxuICAgICAgY29weSxcbiAgICAgIHAsXG4gICAgICBpLFxuICAgICAgYWxpYXNlcztcblxuICBpZiAoIXByb3BlcnR5QWxpYXNlcykge1xuICAgIHJldHVybiB2YXJzO1xuICB9XG5cbiAgY29weSA9IF9tZXJnZSh7fSwgdmFycyk7XG5cbiAgZm9yIChwIGluIHByb3BlcnR5QWxpYXNlcykge1xuICAgIGlmIChwIGluIGNvcHkpIHtcbiAgICAgIGFsaWFzZXMgPSBwcm9wZXJ0eUFsaWFzZXNbcF0uc3BsaXQoXCIsXCIpO1xuICAgICAgaSA9IGFsaWFzZXMubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGNvcHlbYWxpYXNlc1tpXV0gPSBjb3B5W3BdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb3B5O1xufSxcbiAgICBfcGFyc2VGdW5jT3JTdHJpbmcgPSBmdW5jdGlvbiBfcGFyc2VGdW5jT3JTdHJpbmcodmFsdWUsIHR3ZWVuLCBpLCB0YXJnZXQsIHRhcmdldHMpIHtcbiAgcmV0dXJuIF9pc0Z1bmN0aW9uKHZhbHVlKSA/IHZhbHVlLmNhbGwodHdlZW4sIGksIHRhcmdldCwgdGFyZ2V0cykgOiBfaXNTdHJpbmcodmFsdWUpICYmIH52YWx1ZS5pbmRleE9mKFwicmFuZG9tKFwiKSA/IF9yZXBsYWNlUmFuZG9tKHZhbHVlKSA6IHZhbHVlO1xufSxcbiAgICBfc3RhZ2dlclR3ZWVuUHJvcHMgPSBfY2FsbGJhY2tOYW1lcyArIFwicmVwZWF0LHJlcGVhdERlbGF5LHlveW8scmVwZWF0UmVmcmVzaCx5b3lvRWFzZVwiLFxuICAgIF9zdGFnZ2VyUHJvcHNUb1NraXAgPSAoX3N0YWdnZXJUd2VlblByb3BzICsgXCIsaWQsc3RhZ2dlcixkZWxheSxkdXJhdGlvbixwYXVzZWQsc2Nyb2xsVHJpZ2dlclwiKS5zcGxpdChcIixcIik7XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFRXRUVOXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cblxuZXhwb3J0IHZhciBUd2VlbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0FuaW1hdGlvbjIpIHtcbiAgX2luaGVyaXRzTG9vc2UoVHdlZW4sIF9BbmltYXRpb24yKTtcblxuICBmdW5jdGlvbiBUd2Vlbih0YXJnZXRzLCB2YXJzLCBwb3NpdGlvbiwgc2tpcEluaGVyaXQpIHtcbiAgICB2YXIgX3RoaXMzO1xuXG4gICAgaWYgKHR5cGVvZiB2YXJzID09PSBcIm51bWJlclwiKSB7XG4gICAgICBwb3NpdGlvbi5kdXJhdGlvbiA9IHZhcnM7XG4gICAgICB2YXJzID0gcG9zaXRpb247XG4gICAgICBwb3NpdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgX3RoaXMzID0gX0FuaW1hdGlvbjIuY2FsbCh0aGlzLCBza2lwSW5oZXJpdCA/IHZhcnMgOiBfaW5oZXJpdERlZmF1bHRzKHZhcnMpKSB8fCB0aGlzO1xuICAgIHZhciBfdGhpczMkdmFycyA9IF90aGlzMy52YXJzLFxuICAgICAgICBkdXJhdGlvbiA9IF90aGlzMyR2YXJzLmR1cmF0aW9uLFxuICAgICAgICBkZWxheSA9IF90aGlzMyR2YXJzLmRlbGF5LFxuICAgICAgICBpbW1lZGlhdGVSZW5kZXIgPSBfdGhpczMkdmFycy5pbW1lZGlhdGVSZW5kZXIsXG4gICAgICAgIHN0YWdnZXIgPSBfdGhpczMkdmFycy5zdGFnZ2VyLFxuICAgICAgICBvdmVyd3JpdGUgPSBfdGhpczMkdmFycy5vdmVyd3JpdGUsXG4gICAgICAgIGtleWZyYW1lcyA9IF90aGlzMyR2YXJzLmtleWZyYW1lcyxcbiAgICAgICAgZGVmYXVsdHMgPSBfdGhpczMkdmFycy5kZWZhdWx0cyxcbiAgICAgICAgc2Nyb2xsVHJpZ2dlciA9IF90aGlzMyR2YXJzLnNjcm9sbFRyaWdnZXIsXG4gICAgICAgIHlveW9FYXNlID0gX3RoaXMzJHZhcnMueW95b0Vhc2UsXG4gICAgICAgIHBhcmVudCA9IHZhcnMucGFyZW50IHx8IF9nbG9iYWxUaW1lbGluZSxcbiAgICAgICAgcGFyc2VkVGFyZ2V0cyA9IChfaXNBcnJheSh0YXJnZXRzKSB8fCBfaXNUeXBlZEFycmF5KHRhcmdldHMpID8gX2lzTnVtYmVyKHRhcmdldHNbMF0pIDogXCJsZW5ndGhcIiBpbiB2YXJzKSA/IFt0YXJnZXRzXSA6IHRvQXJyYXkodGFyZ2V0cyksXG4gICAgICAgIHRsLFxuICAgICAgICBpLFxuICAgICAgICBjb3B5LFxuICAgICAgICBsLFxuICAgICAgICBwLFxuICAgICAgICBjdXJUYXJnZXQsXG4gICAgICAgIHN0YWdnZXJGdW5jLFxuICAgICAgICBzdGFnZ2VyVmFyc1RvTWVyZ2U7XG4gICAgX3RoaXMzLl90YXJnZXRzID0gcGFyc2VkVGFyZ2V0cy5sZW5ndGggPyBfaGFybmVzcyhwYXJzZWRUYXJnZXRzKSA6IF93YXJuKFwiR1NBUCB0YXJnZXQgXCIgKyB0YXJnZXRzICsgXCIgbm90IGZvdW5kLiBodHRwczovL2dyZWVuc29jay5jb21cIiwgIV9jb25maWcubnVsbFRhcmdldFdhcm4pIHx8IFtdO1xuICAgIF90aGlzMy5fcHRMb29rdXAgPSBbXTsgLy9Qcm9wVHdlZW4gbG9va3VwLiBBbiBhcnJheSBjb250YWluaW5nIGFuIG9iamVjdCBmb3IgZWFjaCB0YXJnZXQsIGhhdmluZyBrZXlzIGZvciBlYWNoIHR3ZWVuaW5nIHByb3BlcnR5XG5cbiAgICBfdGhpczMuX292ZXJ3cml0ZSA9IG92ZXJ3cml0ZTtcblxuICAgIGlmIChrZXlmcmFtZXMgfHwgc3RhZ2dlciB8fCBfaXNGdW5jT3JTdHJpbmcoZHVyYXRpb24pIHx8IF9pc0Z1bmNPclN0cmluZyhkZWxheSkpIHtcbiAgICAgIHZhcnMgPSBfdGhpczMudmFycztcbiAgICAgIHRsID0gX3RoaXMzLnRpbWVsaW5lID0gbmV3IFRpbWVsaW5lKHtcbiAgICAgICAgZGF0YTogXCJuZXN0ZWRcIixcbiAgICAgICAgZGVmYXVsdHM6IGRlZmF1bHRzIHx8IHt9XG4gICAgICB9KTtcbiAgICAgIHRsLmtpbGwoKTtcbiAgICAgIHRsLnBhcmVudCA9IHRsLl9kcCA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKTtcbiAgICAgIHRsLl9zdGFydCA9IDA7XG5cbiAgICAgIGlmIChrZXlmcmFtZXMpIHtcbiAgICAgICAgX2luaGVyaXREZWZhdWx0cyhfc2V0RGVmYXVsdHModGwudmFycy5kZWZhdWx0cywge1xuICAgICAgICAgIGVhc2U6IFwibm9uZVwiXG4gICAgICAgIH0pKTtcblxuICAgICAgICBzdGFnZ2VyID8gcGFyc2VkVGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uICh0LCBpKSB7XG4gICAgICAgICAgcmV0dXJuIGtleWZyYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChmcmFtZSwgaikge1xuICAgICAgICAgICAgcmV0dXJuIHRsLnRvKHQsIGZyYW1lLCBqID8gXCI+XCIgOiBpICogc3RhZ2dlcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pIDoga2V5ZnJhbWVzLmZvckVhY2goZnVuY3Rpb24gKGZyYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHRsLnRvKHBhcnNlZFRhcmdldHMsIGZyYW1lLCBcIj5cIik7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbCA9IHBhcnNlZFRhcmdldHMubGVuZ3RoO1xuICAgICAgICBzdGFnZ2VyRnVuYyA9IHN0YWdnZXIgPyBkaXN0cmlidXRlKHN0YWdnZXIpIDogX2VtcHR5RnVuYztcblxuICAgICAgICBpZiAoX2lzT2JqZWN0KHN0YWdnZXIpKSB7XG4gICAgICAgICAgLy91c2VycyBjYW4gcGFzcyBpbiBjYWxsYmFja3MgbGlrZSBvblN0YXJ0L29uQ29tcGxldGUgaW4gdGhlIHN0YWdnZXIgb2JqZWN0LiBUaGVzZSBzaG91bGQgZmlyZSB3aXRoIGVhY2ggaW5kaXZpZHVhbCB0d2Vlbi5cbiAgICAgICAgICBmb3IgKHAgaW4gc3RhZ2dlcikge1xuICAgICAgICAgICAgaWYgKH5fc3RhZ2dlclR3ZWVuUHJvcHMuaW5kZXhPZihwKSkge1xuICAgICAgICAgICAgICBzdGFnZ2VyVmFyc1RvTWVyZ2UgfHwgKHN0YWdnZXJWYXJzVG9NZXJnZSA9IHt9KTtcbiAgICAgICAgICAgICAgc3RhZ2dlclZhcnNUb01lcmdlW3BdID0gc3RhZ2dlcltwXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgY29weSA9IHt9O1xuXG4gICAgICAgICAgZm9yIChwIGluIHZhcnMpIHtcbiAgICAgICAgICAgIGlmIChfc3RhZ2dlclByb3BzVG9Ta2lwLmluZGV4T2YocCkgPCAwKSB7XG4gICAgICAgICAgICAgIGNvcHlbcF0gPSB2YXJzW3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvcHkuc3RhZ2dlciA9IDA7XG4gICAgICAgICAgeW95b0Vhc2UgJiYgKGNvcHkueW95b0Vhc2UgPSB5b3lvRWFzZSk7XG4gICAgICAgICAgc3RhZ2dlclZhcnNUb01lcmdlICYmIF9tZXJnZShjb3B5LCBzdGFnZ2VyVmFyc1RvTWVyZ2UpO1xuICAgICAgICAgIGN1clRhcmdldCA9IHBhcnNlZFRhcmdldHNbaV07IC8vZG9uJ3QganVzdCBjb3B5IGR1cmF0aW9uIG9yIGRlbGF5IGJlY2F1c2UgaWYgdGhleSdyZSBhIHN0cmluZyBvciBmdW5jdGlvbiwgd2UnZCBlbmQgdXAgaW4gYW4gaW5maW5pdGUgbG9vcCBiZWNhdXNlIF9pc0Z1bmNPclN0cmluZygpIHdvdWxkIGV2YWx1YXRlIGFzIHRydWUgaW4gdGhlIGNoaWxkIHR3ZWVucywgZW50ZXJpbmcgdGhpcyBsb29wLCBldGMuIFNvIHdlIHBhcnNlIHRoZSB2YWx1ZSBzdHJhaWdodCBmcm9tIHZhcnMgYW5kIGRlZmF1bHQgdG8gMC5cblxuICAgICAgICAgIGNvcHkuZHVyYXRpb24gPSArX3BhcnNlRnVuY09yU3RyaW5nKGR1cmF0aW9uLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMyksIGksIGN1clRhcmdldCwgcGFyc2VkVGFyZ2V0cyk7XG4gICAgICAgICAgY29weS5kZWxheSA9ICgrX3BhcnNlRnVuY09yU3RyaW5nKGRlbGF5LCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMyksIGksIGN1clRhcmdldCwgcGFyc2VkVGFyZ2V0cykgfHwgMCkgLSBfdGhpczMuX2RlbGF5O1xuXG4gICAgICAgICAgaWYgKCFzdGFnZ2VyICYmIGwgPT09IDEgJiYgY29weS5kZWxheSkge1xuICAgICAgICAgICAgLy8gaWYgc29tZW9uZSBkb2VzIGRlbGF5OlwicmFuZG9tKDEsIDUpXCIsIHJlcGVhdDotMSwgZm9yIGV4YW1wbGUsIHRoZSBkZWxheSBzaG91bGRuJ3QgYmUgaW5zaWRlIHRoZSByZXBlYXQuXG4gICAgICAgICAgICBfdGhpczMuX2RlbGF5ID0gZGVsYXkgPSBjb3B5LmRlbGF5O1xuICAgICAgICAgICAgX3RoaXMzLl9zdGFydCArPSBkZWxheTtcbiAgICAgICAgICAgIGNvcHkuZGVsYXkgPSAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRsLnRvKGN1clRhcmdldCwgY29weSwgc3RhZ2dlckZ1bmMoaSwgY3VyVGFyZ2V0LCBwYXJzZWRUYXJnZXRzKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0bC5kdXJhdGlvbigpID8gZHVyYXRpb24gPSBkZWxheSA9IDAgOiBfdGhpczMudGltZWxpbmUgPSAwOyAvLyBpZiB0aGUgdGltZWxpbmUncyBkdXJhdGlvbiBpcyAwLCB3ZSBkb24ndCBuZWVkIGEgdGltZWxpbmUgaW50ZXJuYWxseSFcbiAgICAgIH1cblxuICAgICAgZHVyYXRpb24gfHwgX3RoaXMzLmR1cmF0aW9uKGR1cmF0aW9uID0gdGwuZHVyYXRpb24oKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF90aGlzMy50aW1lbGluZSA9IDA7IC8vc3BlZWQgb3B0aW1pemF0aW9uLCBmYXN0ZXIgbG9va3VwcyAobm8gZ29pbmcgdXAgdGhlIHByb3RvdHlwZSBjaGFpbilcbiAgICB9XG5cbiAgICBpZiAob3ZlcndyaXRlID09PSB0cnVlICYmICFfc3VwcHJlc3NPdmVyd3JpdGVzKSB7XG4gICAgICBfb3ZlcndyaXRpbmdUd2VlbiA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKTtcblxuICAgICAgX2dsb2JhbFRpbWVsaW5lLmtpbGxUd2VlbnNPZihwYXJzZWRUYXJnZXRzKTtcblxuICAgICAgX292ZXJ3cml0aW5nVHdlZW4gPSAwO1xuICAgIH1cblxuICAgIF9hZGRUb1RpbWVsaW5lKHBhcmVudCwgX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpLCBwb3NpdGlvbik7XG5cbiAgICB2YXJzLnJldmVyc2VkICYmIF90aGlzMy5yZXZlcnNlKCk7XG4gICAgdmFycy5wYXVzZWQgJiYgX3RoaXMzLnBhdXNlZCh0cnVlKTtcblxuICAgIGlmIChpbW1lZGlhdGVSZW5kZXIgfHwgIWR1cmF0aW9uICYmICFrZXlmcmFtZXMgJiYgX3RoaXMzLl9zdGFydCA9PT0gX3JvdW5kUHJlY2lzZShwYXJlbnQuX3RpbWUpICYmIF9pc05vdEZhbHNlKGltbWVkaWF0ZVJlbmRlcikgJiYgX2hhc05vUGF1c2VkQW5jZXN0b3JzKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKSkgJiYgcGFyZW50LmRhdGEgIT09IFwibmVzdGVkXCIpIHtcbiAgICAgIF90aGlzMy5fdFRpbWUgPSAtX3RpbnlOdW07IC8vZm9yY2VzIGEgcmVuZGVyIHdpdGhvdXQgaGF2aW5nIHRvIHNldCB0aGUgcmVuZGVyKCkgXCJmb3JjZVwiIHBhcmFtZXRlciB0byB0cnVlIGJlY2F1c2Ugd2Ugd2FudCB0byBhbGxvdyBsYXp5aW5nIGJ5IGRlZmF1bHQgKHVzaW5nIHRoZSBcImZvcmNlXCIgcGFyYW1ldGVyIGFsd2F5cyBmb3JjZXMgYW4gaW1tZWRpYXRlIGZ1bGwgcmVuZGVyKVxuXG4gICAgICBfdGhpczMucmVuZGVyKE1hdGgubWF4KDAsIC1kZWxheSkpOyAvL2luIGNhc2UgZGVsYXkgaXMgbmVnYXRpdmVcblxuICAgIH1cblxuICAgIHNjcm9sbFRyaWdnZXIgJiYgX3Njcm9sbFRyaWdnZXIoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpLCBzY3JvbGxUcmlnZ2VyKTtcbiAgICByZXR1cm4gX3RoaXMzO1xuICB9XG5cbiAgdmFyIF9wcm90bzMgPSBUd2Vlbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvMy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIodG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpIHtcbiAgICB2YXIgcHJldlRpbWUgPSB0aGlzLl90aW1lLFxuICAgICAgICB0RHVyID0gdGhpcy5fdER1cixcbiAgICAgICAgZHVyID0gdGhpcy5fZHVyLFxuICAgICAgICB0VGltZSA9IHRvdGFsVGltZSA+IHREdXIgLSBfdGlueU51bSAmJiB0b3RhbFRpbWUgPj0gMCA/IHREdXIgOiB0b3RhbFRpbWUgPCBfdGlueU51bSA/IDAgOiB0b3RhbFRpbWUsXG4gICAgICAgIHRpbWUsXG4gICAgICAgIHB0LFxuICAgICAgICBpdGVyYXRpb24sXG4gICAgICAgIGN5Y2xlRHVyYXRpb24sXG4gICAgICAgIHByZXZJdGVyYXRpb24sXG4gICAgICAgIGlzWW95byxcbiAgICAgICAgcmF0aW8sXG4gICAgICAgIHRpbWVsaW5lLFxuICAgICAgICB5b3lvRWFzZTtcblxuICAgIGlmICghZHVyKSB7XG4gICAgICBfcmVuZGVyWmVyb0R1cmF0aW9uVHdlZW4odGhpcywgdG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuICAgIH0gZWxzZSBpZiAodFRpbWUgIT09IHRoaXMuX3RUaW1lIHx8ICF0b3RhbFRpbWUgfHwgZm9yY2UgfHwgIXRoaXMuX2luaXR0ZWQgJiYgdGhpcy5fdFRpbWUgfHwgdGhpcy5fc3RhcnRBdCAmJiB0aGlzLl96VGltZSA8IDAgIT09IHRvdGFsVGltZSA8IDApIHtcbiAgICAgIC8vdGhpcyBzZW5zZXMgaWYgd2UncmUgY3Jvc3Npbmcgb3ZlciB0aGUgc3RhcnQgdGltZSwgaW4gd2hpY2ggY2FzZSB3ZSBtdXN0IHJlY29yZCBfelRpbWUgYW5kIGZvcmNlIHRoZSByZW5kZXIsIGJ1dCB3ZSBkbyBpdCBpbiB0aGlzIGxlbmd0aHkgY29uZGl0aW9uYWwgd2F5IGZvciBwZXJmb3JtYW5jZSByZWFzb25zICh1c3VhbGx5IHdlIGNhbiBza2lwIHRoZSBjYWxjdWxhdGlvbnMpOiB0aGlzLl9pbml0dGVkICYmICh0aGlzLl96VGltZSA8IDApICE9PSAodG90YWxUaW1lIDwgMClcbiAgICAgIHRpbWUgPSB0VGltZTtcbiAgICAgIHRpbWVsaW5lID0gdGhpcy50aW1lbGluZTtcblxuICAgICAgaWYgKHRoaXMuX3JlcGVhdCkge1xuICAgICAgICAvL2FkanVzdCB0aGUgdGltZSBmb3IgcmVwZWF0cyBhbmQgeW95b3NcbiAgICAgICAgY3ljbGVEdXJhdGlvbiA9IGR1ciArIHRoaXMuX3JEZWxheTtcblxuICAgICAgICBpZiAodGhpcy5fcmVwZWF0IDwgLTEgJiYgdG90YWxUaW1lIDwgMCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnRvdGFsVGltZShjeWNsZUR1cmF0aW9uICogMTAwICsgdG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGltZSA9IF9yb3VuZFByZWNpc2UodFRpbWUgJSBjeWNsZUR1cmF0aW9uKTsgLy9yb3VuZCB0byBhdm9pZCBmbG9hdGluZyBwb2ludCBlcnJvcnMuICg0ICUgMC44IHNob3VsZCBiZSAwIGJ1dCBzb21lIGJyb3dzZXJzIHJlcG9ydCBpdCBhcyAwLjc5OTk5OTk5ISlcblxuICAgICAgICBpZiAodFRpbWUgPT09IHREdXIpIHtcbiAgICAgICAgICAvLyB0aGUgdER1ciA9PT0gdFRpbWUgaXMgZm9yIGVkZ2UgY2FzZXMgd2hlcmUgdGhlcmUncyBhIGxlbmd0aHkgZGVjaW1hbCBvbiB0aGUgZHVyYXRpb24gYW5kIGl0IG1heSByZWFjaCB0aGUgdmVyeSBlbmQgYnV0IHRoZSB0aW1lIGlzIHJlbmRlcmVkIGFzIG5vdC1xdWl0ZS10aGVyZSAocmVtZW1iZXIsIHREdXIgaXMgcm91bmRlZCB0byA0IGRlY2ltYWxzIHdoZXJlYXMgZHVyIGlzbid0KVxuICAgICAgICAgIGl0ZXJhdGlvbiA9IHRoaXMuX3JlcGVhdDtcbiAgICAgICAgICB0aW1lID0gZHVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZXJhdGlvbiA9IH5+KHRUaW1lIC8gY3ljbGVEdXJhdGlvbik7XG5cbiAgICAgICAgICBpZiAoaXRlcmF0aW9uICYmIGl0ZXJhdGlvbiA9PT0gdFRpbWUgLyBjeWNsZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aW1lID0gZHVyO1xuICAgICAgICAgICAgaXRlcmF0aW9uLS07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGltZSA+IGR1ciAmJiAodGltZSA9IGR1cik7XG4gICAgICAgIH1cblxuICAgICAgICBpc1lveW8gPSB0aGlzLl95b3lvICYmIGl0ZXJhdGlvbiAmIDE7XG5cbiAgICAgICAgaWYgKGlzWW95bykge1xuICAgICAgICAgIHlveW9FYXNlID0gdGhpcy5feUVhc2U7XG4gICAgICAgICAgdGltZSA9IGR1ciAtIHRpbWU7XG4gICAgICAgIH1cblxuICAgICAgICBwcmV2SXRlcmF0aW9uID0gX2FuaW1hdGlvbkN5Y2xlKHRoaXMuX3RUaW1lLCBjeWNsZUR1cmF0aW9uKTtcblxuICAgICAgICBpZiAodGltZSA9PT0gcHJldlRpbWUgJiYgIWZvcmNlICYmIHRoaXMuX2luaXR0ZWQpIHtcbiAgICAgICAgICAvL2NvdWxkIGJlIGR1cmluZyB0aGUgcmVwZWF0RGVsYXkgcGFydC4gTm8gbmVlZCB0byByZW5kZXIgYW5kIGZpcmUgY2FsbGJhY2tzLlxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0ZXJhdGlvbiAhPT0gcHJldkl0ZXJhdGlvbikge1xuICAgICAgICAgIHRpbWVsaW5lICYmIHRoaXMuX3lFYXNlICYmIF9wcm9wYWdhdGVZb3lvRWFzZSh0aW1lbGluZSwgaXNZb3lvKTsgLy9yZXBlYXRSZWZyZXNoIGZ1bmN0aW9uYWxpdHlcblxuICAgICAgICAgIGlmICh0aGlzLnZhcnMucmVwZWF0UmVmcmVzaCAmJiAhaXNZb3lvICYmICF0aGlzLl9sb2NrKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2NrID0gZm9yY2UgPSAxOyAvL2ZvcmNlLCBvdGhlcndpc2UgaWYgbGF6eSBpcyB0cnVlLCB0aGUgX2F0dGVtcHRJbml0VHdlZW4oKSB3aWxsIHJldHVybiBhbmQgd2UnbGwganVtcCBvdXQgYW5kIGdldCBjYXVnaHQgYm91bmNpbmcgb24gZWFjaCB0aWNrLlxuXG4gICAgICAgICAgICB0aGlzLnJlbmRlcihfcm91bmRQcmVjaXNlKGN5Y2xlRHVyYXRpb24gKiBpdGVyYXRpb24pLCB0cnVlKS5pbnZhbGlkYXRlKCkuX2xvY2sgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuX2luaXR0ZWQpIHtcbiAgICAgICAgaWYgKF9hdHRlbXB0SW5pdFR3ZWVuKHRoaXMsIHRvdGFsVGltZSA8IDAgPyB0b3RhbFRpbWUgOiB0aW1lLCBmb3JjZSwgc3VwcHJlc3NFdmVudHMpKSB7XG4gICAgICAgICAgdGhpcy5fdFRpbWUgPSAwOyAvLyBpbiBjb25zdHJ1Y3RvciBpZiBpbW1lZGlhdGVSZW5kZXIgaXMgdHJ1ZSwgd2Ugc2V0IF90VGltZSB0byAtX3RpbnlOdW0gdG8gaGF2ZSB0aGUgcGxheWhlYWQgY3Jvc3MgdGhlIHN0YXJ0aW5nIHBvaW50IGJ1dCB3ZSBjYW4ndCBsZWF2ZSBfdFRpbWUgYXMgYSBuZWdhdGl2ZSBudW1iZXIuXG5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkdXIgIT09IHRoaXMuX2R1cikge1xuICAgICAgICAgIC8vIHdoaWxlIGluaXR0aW5nLCBhIHBsdWdpbiBsaWtlIEluZXJ0aWFQbHVnaW4gbWlnaHQgYWx0ZXIgdGhlIGR1cmF0aW9uLCBzbyByZXJ1biBmcm9tIHRoZSBzdGFydCB0byBlbnN1cmUgZXZlcnl0aGluZyByZW5kZXJzIGFzIGl0IHNob3VsZC5cbiAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3RUaW1lID0gdFRpbWU7XG4gICAgICB0aGlzLl90aW1lID0gdGltZTtcblxuICAgICAgaWYgKCF0aGlzLl9hY3QgJiYgdGhpcy5fdHMpIHtcbiAgICAgICAgdGhpcy5fYWN0ID0gMTsgLy9hcyBsb25nIGFzIGl0J3Mgbm90IHBhdXNlZCwgZm9yY2UgaXQgdG8gYmUgYWN0aXZlIHNvIHRoYXQgaWYgdGhlIHVzZXIgcmVuZGVycyBpbmRlcGVuZGVudCBvZiB0aGUgcGFyZW50IHRpbWVsaW5lLCBpdCdsbCBiZSBmb3JjZWQgdG8gcmUtcmVuZGVyIG9uIHRoZSBuZXh0IHRpY2suXG5cbiAgICAgICAgdGhpcy5fbGF6eSA9IDA7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmF0aW8gPSByYXRpbyA9ICh5b3lvRWFzZSB8fCB0aGlzLl9lYXNlKSh0aW1lIC8gZHVyKTtcblxuICAgICAgaWYgKHRoaXMuX2Zyb20pIHtcbiAgICAgICAgdGhpcy5yYXRpbyA9IHJhdGlvID0gMSAtIHJhdGlvO1xuICAgICAgfVxuXG4gICAgICBpZiAodGltZSAmJiAhcHJldlRpbWUgJiYgIXN1cHByZXNzRXZlbnRzKSB7XG4gICAgICAgIF9jYWxsYmFjayh0aGlzLCBcIm9uU3RhcnRcIik7XG5cbiAgICAgICAgaWYgKHRoaXMuX3RUaW1lICE9PSB0VGltZSkge1xuICAgICAgICAgIC8vIGluIGNhc2UgdGhlIG9uU3RhcnQgdHJpZ2dlcmVkIGEgcmVuZGVyIGF0IGEgZGlmZmVyZW50IHNwb3QsIGVqZWN0LiBMaWtlIGlmIHNvbWVvbmUgZGlkIGFuaW1hdGlvbi5wYXVzZSgwLjUpIG9yIHNvbWV0aGluZyBpbnNpZGUgdGhlIG9uU3RhcnQuXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHQgPSB0aGlzLl9wdDtcblxuICAgICAgd2hpbGUgKHB0KSB7XG4gICAgICAgIHB0LnIocmF0aW8sIHB0LmQpO1xuICAgICAgICBwdCA9IHB0Ll9uZXh0O1xuICAgICAgfVxuXG4gICAgICB0aW1lbGluZSAmJiB0aW1lbGluZS5yZW5kZXIodG90YWxUaW1lIDwgMCA/IHRvdGFsVGltZSA6ICF0aW1lICYmIGlzWW95byA/IC1fdGlueU51bSA6IHRpbWVsaW5lLl9kdXIgKiByYXRpbywgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB8fCB0aGlzLl9zdGFydEF0ICYmICh0aGlzLl96VGltZSA9IHRvdGFsVGltZSk7XG5cbiAgICAgIGlmICh0aGlzLl9vblVwZGF0ZSAmJiAhc3VwcHJlc3NFdmVudHMpIHtcbiAgICAgICAgdG90YWxUaW1lIDwgMCAmJiB0aGlzLl9zdGFydEF0ICYmIHRoaXMuX3N0YXJ0QXQucmVuZGVyKHRvdGFsVGltZSwgdHJ1ZSwgZm9yY2UpOyAvL25vdGU6IGZvciBwZXJmb3JtYW5jZSByZWFzb25zLCB3ZSB0dWNrIHRoaXMgY29uZGl0aW9uYWwgbG9naWMgaW5zaWRlIGxlc3MgdHJhdmVsZWQgYXJlYXMgKG1vc3QgdHdlZW5zIGRvbid0IGhhdmUgYW4gb25VcGRhdGUpLiBXZSdkIGp1c3QgaGF2ZSBpdCBhdCB0aGUgZW5kIGJlZm9yZSB0aGUgb25Db21wbGV0ZSwgYnV0IHRoZSB2YWx1ZXMgc2hvdWxkIGJlIHVwZGF0ZWQgYmVmb3JlIGFueSBvblVwZGF0ZSBpcyBjYWxsZWQsIHNvIHdlIEFMU08gcHV0IGl0IGhlcmUgYW5kIHRoZW4gaWYgaXQncyBub3QgY2FsbGVkLCB3ZSBkbyBzbyBsYXRlciBuZWFyIHRoZSBvbkNvbXBsZXRlLlxuXG4gICAgICAgIF9jYWxsYmFjayh0aGlzLCBcIm9uVXBkYXRlXCIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZXBlYXQgJiYgaXRlcmF0aW9uICE9PSBwcmV2SXRlcmF0aW9uICYmIHRoaXMudmFycy5vblJlcGVhdCAmJiAhc3VwcHJlc3NFdmVudHMgJiYgdGhpcy5wYXJlbnQgJiYgX2NhbGxiYWNrKHRoaXMsIFwib25SZXBlYXRcIik7XG5cbiAgICAgIGlmICgodFRpbWUgPT09IHRoaXMuX3REdXIgfHwgIXRUaW1lKSAmJiB0aGlzLl90VGltZSA9PT0gdFRpbWUpIHtcbiAgICAgICAgdG90YWxUaW1lIDwgMCAmJiB0aGlzLl9zdGFydEF0ICYmICF0aGlzLl9vblVwZGF0ZSAmJiB0aGlzLl9zdGFydEF0LnJlbmRlcih0b3RhbFRpbWUsIHRydWUsIHRydWUpO1xuICAgICAgICAodG90YWxUaW1lIHx8ICFkdXIpICYmICh0VGltZSA9PT0gdGhpcy5fdER1ciAmJiB0aGlzLl90cyA+IDAgfHwgIXRUaW1lICYmIHRoaXMuX3RzIDwgMCkgJiYgX3JlbW92ZUZyb21QYXJlbnQodGhpcywgMSk7IC8vIGRvbid0IHJlbW92ZSBpZiB3ZSdyZSByZW5kZXJpbmcgYXQgZXhhY3RseSBhIHRpbWUgb2YgMCwgYXMgdGhlcmUgY291bGQgYmUgYXV0b1JldmVydCB2YWx1ZXMgdGhhdCBzaG91bGQgZ2V0IHNldCBvbiB0aGUgbmV4dCB0aWNrIChpZiB0aGUgcGxheWhlYWQgZ29lcyBiYWNrd2FyZCBiZXlvbmQgdGhlIHN0YXJ0VGltZSwgbmVnYXRpdmUgdG90YWxUaW1lKS4gRG9uJ3QgcmVtb3ZlIGlmIHRoZSB0aW1lbGluZSBpcyByZXZlcnNlZCBhbmQgdGhlIHBsYXloZWFkIGlzbid0IGF0IDAsIG90aGVyd2lzZSB0bC5wcm9ncmVzcygxKS5yZXZlcnNlKCkgd29uJ3Qgd29yay4gT25seSByZW1vdmUgaWYgdGhlIHBsYXloZWFkIGlzIGF0IHRoZSBlbmQgYW5kIHRpbWVTY2FsZSBpcyBwb3NpdGl2ZSwgb3IgaWYgdGhlIHBsYXloZWFkIGlzIGF0IDAgYW5kIHRoZSB0aW1lU2NhbGUgaXMgbmVnYXRpdmUuXG5cbiAgICAgICAgaWYgKCFzdXBwcmVzc0V2ZW50cyAmJiAhKHRvdGFsVGltZSA8IDAgJiYgIXByZXZUaW1lKSAmJiAodFRpbWUgfHwgcHJldlRpbWUpKSB7XG4gICAgICAgICAgLy8gaWYgcHJldlRpbWUgYW5kIHRUaW1lIGFyZSB6ZXJvLCB3ZSBzaG91bGRuJ3QgZmlyZSB0aGUgb25SZXZlcnNlQ29tcGxldGUuIFRoaXMgY291bGQgaGFwcGVuIGlmIHlvdSBnc2FwLnRvKC4uLiB7cGF1c2VkOnRydWV9KS5wbGF5KCk7XG4gICAgICAgICAgX2NhbGxiYWNrKHRoaXMsIHRUaW1lID09PSB0RHVyID8gXCJvbkNvbXBsZXRlXCIgOiBcIm9uUmV2ZXJzZUNvbXBsZXRlXCIsIHRydWUpO1xuXG4gICAgICAgICAgdGhpcy5fcHJvbSAmJiAhKHRUaW1lIDwgdER1ciAmJiB0aGlzLnRpbWVTY2FsZSgpID4gMCkgJiYgdGhpcy5fcHJvbSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMy50YXJnZXRzID0gZnVuY3Rpb24gdGFyZ2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0cztcbiAgfTtcblxuICBfcHJvdG8zLmludmFsaWRhdGUgPSBmdW5jdGlvbiBpbnZhbGlkYXRlKCkge1xuICAgIHRoaXMuX3B0ID0gdGhpcy5fb3AgPSB0aGlzLl9zdGFydEF0ID0gdGhpcy5fb25VcGRhdGUgPSB0aGlzLl9sYXp5ID0gdGhpcy5yYXRpbyA9IDA7XG4gICAgdGhpcy5fcHRMb29rdXAgPSBbXTtcbiAgICB0aGlzLnRpbWVsaW5lICYmIHRoaXMudGltZWxpbmUuaW52YWxpZGF0ZSgpO1xuICAgIHJldHVybiBfQW5pbWF0aW9uMi5wcm90b3R5cGUuaW52YWxpZGF0ZS5jYWxsKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90bzMua2lsbCA9IGZ1bmN0aW9uIGtpbGwodGFyZ2V0cywgdmFycykge1xuICAgIGlmICh2YXJzID09PSB2b2lkIDApIHtcbiAgICAgIHZhcnMgPSBcImFsbFwiO1xuICAgIH1cblxuICAgIGlmICghdGFyZ2V0cyAmJiAoIXZhcnMgfHwgdmFycyA9PT0gXCJhbGxcIikpIHtcbiAgICAgIHRoaXMuX2xhenkgPSB0aGlzLl9wdCA9IDA7XG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyBfaW50ZXJydXB0KHRoaXMpIDogdGhpcztcbiAgICB9XG5cbiAgICBpZiAodGhpcy50aW1lbGluZSkge1xuICAgICAgdmFyIHREdXIgPSB0aGlzLnRpbWVsaW5lLnRvdGFsRHVyYXRpb24oKTtcbiAgICAgIHRoaXMudGltZWxpbmUua2lsbFR3ZWVuc09mKHRhcmdldHMsIHZhcnMsIF9vdmVyd3JpdGluZ1R3ZWVuICYmIF9vdmVyd3JpdGluZ1R3ZWVuLnZhcnMub3ZlcndyaXRlICE9PSB0cnVlKS5fZmlyc3QgfHwgX2ludGVycnVwdCh0aGlzKTsgLy8gaWYgbm90aGluZyBpcyBsZWZ0IHR3ZWVuaW5nLCBpbnRlcnJ1cHQuXG5cbiAgICAgIHRoaXMucGFyZW50ICYmIHREdXIgIT09IHRoaXMudGltZWxpbmUudG90YWxEdXJhdGlvbigpICYmIF9zZXREdXJhdGlvbih0aGlzLCB0aGlzLl9kdXIgKiB0aGlzLnRpbWVsaW5lLl90RHVyIC8gdER1ciwgMCwgMSk7IC8vIGlmIGEgbmVzdGVkIHR3ZWVuIGlzIGtpbGxlZCB0aGF0IGNoYW5nZXMgdGhlIGR1cmF0aW9uLCBpdCBzaG91bGQgYWZmZWN0IHRoaXMgdHdlZW4ncyBkdXJhdGlvbi4gV2UgbXVzdCB1c2UgdGhlIHJhdGlvLCB0aG91Z2gsIGJlY2F1c2Ugc29tZXRpbWVzIHRoZSBpbnRlcm5hbCB0aW1lbGluZSBpcyBzdHJldGNoZWQgbGlrZSBmb3Iga2V5ZnJhbWVzIHdoZXJlIHRoZXkgZG9uJ3QgYWxsIGFkZCB1cCB0byB3aGF0ZXZlciB0aGUgcGFyZW50IHR3ZWVuJ3MgZHVyYXRpb24gd2FzIHNldCB0by5cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIHBhcnNlZFRhcmdldHMgPSB0aGlzLl90YXJnZXRzLFxuICAgICAgICBraWxsaW5nVGFyZ2V0cyA9IHRhcmdldHMgPyB0b0FycmF5KHRhcmdldHMpIDogcGFyc2VkVGFyZ2V0cyxcbiAgICAgICAgcHJvcFR3ZWVuTG9va3VwID0gdGhpcy5fcHRMb29rdXAsXG4gICAgICAgIGZpcnN0UFQgPSB0aGlzLl9wdCxcbiAgICAgICAgb3ZlcndyaXR0ZW5Qcm9wcyxcbiAgICAgICAgY3VyTG9va3VwLFxuICAgICAgICBjdXJPdmVyd3JpdGVQcm9wcyxcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIHAsXG4gICAgICAgIHB0LFxuICAgICAgICBpO1xuXG4gICAgaWYgKCghdmFycyB8fCB2YXJzID09PSBcImFsbFwiKSAmJiBfYXJyYXlzTWF0Y2gocGFyc2VkVGFyZ2V0cywga2lsbGluZ1RhcmdldHMpKSB7XG4gICAgICB2YXJzID09PSBcImFsbFwiICYmICh0aGlzLl9wdCA9IDApO1xuICAgICAgcmV0dXJuIF9pbnRlcnJ1cHQodGhpcyk7XG4gICAgfVxuXG4gICAgb3ZlcndyaXR0ZW5Qcm9wcyA9IHRoaXMuX29wID0gdGhpcy5fb3AgfHwgW107XG5cbiAgICBpZiAodmFycyAhPT0gXCJhbGxcIikge1xuICAgICAgLy9zbyBwZW9wbGUgY2FuIHBhc3MgaW4gYSBjb21tYS1kZWxpbWl0ZWQgbGlzdCBvZiBwcm9wZXJ0eSBuYW1lc1xuICAgICAgaWYgKF9pc1N0cmluZyh2YXJzKSkge1xuICAgICAgICBwID0ge307XG5cbiAgICAgICAgX2ZvckVhY2hOYW1lKHZhcnMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHBbbmFtZV0gPSAxO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXJzID0gcDtcbiAgICAgIH1cblxuICAgICAgdmFycyA9IF9hZGRBbGlhc2VzVG9WYXJzKHBhcnNlZFRhcmdldHMsIHZhcnMpO1xuICAgIH1cblxuICAgIGkgPSBwYXJzZWRUYXJnZXRzLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGlmICh+a2lsbGluZ1RhcmdldHMuaW5kZXhPZihwYXJzZWRUYXJnZXRzW2ldKSkge1xuICAgICAgICBjdXJMb29rdXAgPSBwcm9wVHdlZW5Mb29rdXBbaV07XG5cbiAgICAgICAgaWYgKHZhcnMgPT09IFwiYWxsXCIpIHtcbiAgICAgICAgICBvdmVyd3JpdHRlblByb3BzW2ldID0gdmFycztcbiAgICAgICAgICBwcm9wcyA9IGN1ckxvb2t1cDtcbiAgICAgICAgICBjdXJPdmVyd3JpdGVQcm9wcyA9IHt9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN1ck92ZXJ3cml0ZVByb3BzID0gb3ZlcndyaXR0ZW5Qcm9wc1tpXSA9IG92ZXJ3cml0dGVuUHJvcHNbaV0gfHwge307XG4gICAgICAgICAgcHJvcHMgPSB2YXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChwIGluIHByb3BzKSB7XG4gICAgICAgICAgcHQgPSBjdXJMb29rdXAgJiYgY3VyTG9va3VwW3BdO1xuXG4gICAgICAgICAgaWYgKHB0KSB7XG4gICAgICAgICAgICBpZiAoIShcImtpbGxcIiBpbiBwdC5kKSB8fCBwdC5kLmtpbGwocCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgX3JlbW92ZUxpbmtlZExpc3RJdGVtKHRoaXMsIHB0LCBcIl9wdFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIGN1ckxvb2t1cFtwXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY3VyT3ZlcndyaXRlUHJvcHMgIT09IFwiYWxsXCIpIHtcbiAgICAgICAgICAgIGN1ck92ZXJ3cml0ZVByb3BzW3BdID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pbml0dGVkICYmICF0aGlzLl9wdCAmJiBmaXJzdFBUICYmIF9pbnRlcnJ1cHQodGhpcyk7IC8vaWYgYWxsIHR3ZWVuaW5nIHByb3BlcnRpZXMgYXJlIGtpbGxlZCwga2lsbCB0aGUgdHdlZW4uIFdpdGhvdXQgdGhpcyBsaW5lLCBpZiB0aGVyZSdzIGEgdHdlZW4gd2l0aCBtdWx0aXBsZSB0YXJnZXRzIGFuZCB0aGVuIHlvdSBraWxsVHdlZW5zT2YoKSBlYWNoIHRhcmdldCBpbmRpdmlkdWFsbHksIHRoZSB0d2VlbiB3b3VsZCB0ZWNobmljYWxseSBzdGlsbCByZW1haW4gYWN0aXZlIGFuZCBmaXJlIGl0cyBvbkNvbXBsZXRlIGV2ZW4gdGhvdWdoIHRoZXJlIGFyZW4ndCBhbnkgbW9yZSBwcm9wZXJ0aWVzIHR3ZWVuaW5nLlxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgVHdlZW4udG8gPSBmdW5jdGlvbiB0byh0YXJnZXRzLCB2YXJzKSB7XG4gICAgcmV0dXJuIG5ldyBUd2Vlbih0YXJnZXRzLCB2YXJzLCBhcmd1bWVudHNbMl0pO1xuICB9O1xuXG4gIFR3ZWVuLmZyb20gPSBmdW5jdGlvbiBmcm9tKHRhcmdldHMsIHZhcnMpIHtcbiAgICByZXR1cm4gX2NyZWF0ZVR3ZWVuVHlwZSgxLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIFR3ZWVuLmRlbGF5ZWRDYWxsID0gZnVuY3Rpb24gZGVsYXllZENhbGwoZGVsYXksIGNhbGxiYWNrLCBwYXJhbXMsIHNjb3BlKSB7XG4gICAgcmV0dXJuIG5ldyBUd2VlbihjYWxsYmFjaywgMCwge1xuICAgICAgaW1tZWRpYXRlUmVuZGVyOiBmYWxzZSxcbiAgICAgIGxhenk6IGZhbHNlLFxuICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcbiAgICAgIGRlbGF5OiBkZWxheSxcbiAgICAgIG9uQ29tcGxldGU6IGNhbGxiYWNrLFxuICAgICAgb25SZXZlcnNlQ29tcGxldGU6IGNhbGxiYWNrLFxuICAgICAgb25Db21wbGV0ZVBhcmFtczogcGFyYW1zLFxuICAgICAgb25SZXZlcnNlQ29tcGxldGVQYXJhbXM6IHBhcmFtcyxcbiAgICAgIGNhbGxiYWNrU2NvcGU6IHNjb3BlXG4gICAgfSk7XG4gIH07XG5cbiAgVHdlZW4uZnJvbVRvID0gZnVuY3Rpb24gZnJvbVRvKHRhcmdldHMsIGZyb21WYXJzLCB0b1ZhcnMpIHtcbiAgICByZXR1cm4gX2NyZWF0ZVR3ZWVuVHlwZSgyLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIFR3ZWVuLnNldCA9IGZ1bmN0aW9uIHNldCh0YXJnZXRzLCB2YXJzKSB7XG4gICAgdmFycy5kdXJhdGlvbiA9IDA7XG4gICAgdmFycy5yZXBlYXREZWxheSB8fCAodmFycy5yZXBlYXQgPSAwKTtcbiAgICByZXR1cm4gbmV3IFR3ZWVuKHRhcmdldHMsIHZhcnMpO1xuICB9O1xuXG4gIFR3ZWVuLmtpbGxUd2VlbnNPZiA9IGZ1bmN0aW9uIGtpbGxUd2VlbnNPZih0YXJnZXRzLCBwcm9wcywgb25seUFjdGl2ZSkge1xuICAgIHJldHVybiBfZ2xvYmFsVGltZWxpbmUua2lsbFR3ZWVuc09mKHRhcmdldHMsIHByb3BzLCBvbmx5QWN0aXZlKTtcbiAgfTtcblxuICByZXR1cm4gVHdlZW47XG59KEFuaW1hdGlvbik7XG5cbl9zZXREZWZhdWx0cyhUd2Vlbi5wcm90b3R5cGUsIHtcbiAgX3RhcmdldHM6IFtdLFxuICBfbGF6eTogMCxcbiAgX3N0YXJ0QXQ6IDAsXG4gIF9vcDogMCxcbiAgX29uSW5pdDogMFxufSk7IC8vYWRkIHRoZSBwZXJ0aW5lbnQgdGltZWxpbmUgbWV0aG9kcyB0byBUd2VlbiBpbnN0YW5jZXMgc28gdGhhdCB1c2VycyBjYW4gY2hhaW4gY29udmVuaWVudGx5IGFuZCBjcmVhdGUgYSB0aW1lbGluZSBhdXRvbWF0aWNhbGx5LiAocmVtb3ZlZCBkdWUgdG8gY29uY2VybnMgdGhhdCBpdCdkIHVsdGltYXRlbHkgYWRkIHRvIG1vcmUgY29uZnVzaW9uIGVzcGVjaWFsbHkgZm9yIGJlZ2lubmVycylcbi8vIF9mb3JFYWNoTmFtZShcInRvLGZyb20sZnJvbVRvLHNldCxjYWxsLGFkZCxhZGRMYWJlbCxhZGRQYXVzZVwiLCBuYW1lID0+IHtcbi8vIFx0VHdlZW4ucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4vLyBcdFx0bGV0IHRsID0gbmV3IFRpbWVsaW5lKCk7XG4vLyBcdFx0cmV0dXJuIF9hZGRUb1RpbWVsaW5lKHRsLCB0aGlzKVtuYW1lXS5hcHBseSh0bCwgdG9BcnJheShhcmd1bWVudHMpKTtcbi8vIFx0fVxuLy8gfSk7XG4vL2ZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LiBMZXZlcmFnZSB0aGUgdGltZWxpbmUgY2FsbHMuXG5cblxuX2ZvckVhY2hOYW1lKFwic3RhZ2dlclRvLHN0YWdnZXJGcm9tLHN0YWdnZXJGcm9tVG9cIiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgVHdlZW5bbmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lKCksXG4gICAgICAgIHBhcmFtcyA9IF9zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG5cbiAgICBwYXJhbXMuc3BsaWNlKG5hbWUgPT09IFwic3RhZ2dlckZyb21Ub1wiID8gNSA6IDQsIDAsIDApO1xuICAgIHJldHVybiB0bFtuYW1lXS5hcHBseSh0bCwgcGFyYW1zKTtcbiAgfTtcbn0pO1xuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQUk9QVFdFRU5cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuXG52YXIgX3NldHRlclBsYWluID0gZnVuY3Rpb24gX3NldHRlclBsYWluKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiB0YXJnZXRbcHJvcGVydHldID0gdmFsdWU7XG59LFxuICAgIF9zZXR0ZXJGdW5jID0gZnVuY3Rpb24gX3NldHRlckZ1bmModGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIHRhcmdldFtwcm9wZXJ0eV0odmFsdWUpO1xufSxcbiAgICBfc2V0dGVyRnVuY1dpdGhQYXJhbSA9IGZ1bmN0aW9uIF9zZXR0ZXJGdW5jV2l0aFBhcmFtKHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCBkYXRhKSB7XG4gIHJldHVybiB0YXJnZXRbcHJvcGVydHldKGRhdGEuZnAsIHZhbHVlKTtcbn0sXG4gICAgX3NldHRlckF0dHJpYnV0ZSA9IGZ1bmN0aW9uIF9zZXR0ZXJBdHRyaWJ1dGUodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIHRhcmdldC5zZXRBdHRyaWJ1dGUocHJvcGVydHksIHZhbHVlKTtcbn0sXG4gICAgX2dldFNldHRlciA9IGZ1bmN0aW9uIF9nZXRTZXR0ZXIodGFyZ2V0LCBwcm9wZXJ0eSkge1xuICByZXR1cm4gX2lzRnVuY3Rpb24odGFyZ2V0W3Byb3BlcnR5XSkgPyBfc2V0dGVyRnVuYyA6IF9pc1VuZGVmaW5lZCh0YXJnZXRbcHJvcGVydHldKSAmJiB0YXJnZXQuc2V0QXR0cmlidXRlID8gX3NldHRlckF0dHJpYnV0ZSA6IF9zZXR0ZXJQbGFpbjtcbn0sXG4gICAgX3JlbmRlclBsYWluID0gZnVuY3Rpb24gX3JlbmRlclBsYWluKHJhdGlvLCBkYXRhKSB7XG4gIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgTWF0aC5yb3VuZCgoZGF0YS5zICsgZGF0YS5jICogcmF0aW8pICogMTAwMDAwMCkgLyAxMDAwMDAwLCBkYXRhKTtcbn0sXG4gICAgX3JlbmRlckJvb2xlYW4gPSBmdW5jdGlvbiBfcmVuZGVyQm9vbGVhbihyYXRpbywgZGF0YSkge1xuICByZXR1cm4gZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsICEhKGRhdGEucyArIGRhdGEuYyAqIHJhdGlvKSwgZGF0YSk7XG59LFxuICAgIF9yZW5kZXJDb21wbGV4U3RyaW5nID0gZnVuY3Rpb24gX3JlbmRlckNvbXBsZXhTdHJpbmcocmF0aW8sIGRhdGEpIHtcbiAgdmFyIHB0ID0gZGF0YS5fcHQsXG4gICAgICBzID0gXCJcIjtcblxuICBpZiAoIXJhdGlvICYmIGRhdGEuYikge1xuICAgIC8vYiA9IGJlZ2lubmluZyBzdHJpbmdcbiAgICBzID0gZGF0YS5iO1xuICB9IGVsc2UgaWYgKHJhdGlvID09PSAxICYmIGRhdGEuZSkge1xuICAgIC8vZSA9IGVuZGluZyBzdHJpbmdcbiAgICBzID0gZGF0YS5lO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChwdCkge1xuICAgICAgcyA9IHB0LnAgKyAocHQubSA/IHB0Lm0ocHQucyArIHB0LmMgKiByYXRpbykgOiBNYXRoLnJvdW5kKChwdC5zICsgcHQuYyAqIHJhdGlvKSAqIDEwMDAwKSAvIDEwMDAwKSArIHM7IC8vd2UgdXNlIHRoZSBcInBcIiBwcm9wZXJ0eSBmb3IgdGhlIHRleHQgaW5iZXR3ZWVuIChsaWtlIGEgc3VmZml4KS4gQW5kIGluIHRoZSBjb250ZXh0IG9mIGEgY29tcGxleCBzdHJpbmcsIHRoZSBtb2RpZmllciAobSkgaXMgdHlwaWNhbGx5IGp1c3QgTWF0aC5yb3VuZCgpLCBsaWtlIGZvciBSR0IgY29sb3JzLlxuXG4gICAgICBwdCA9IHB0Ll9uZXh0O1xuICAgIH1cblxuICAgIHMgKz0gZGF0YS5jOyAvL3dlIHVzZSB0aGUgXCJjXCIgb2YgdGhlIFByb3BUd2VlbiB0byBzdG9yZSB0aGUgZmluYWwgY2h1bmsgb2Ygbm9uLW51bWVyaWMgdGV4dC5cbiAgfVxuXG4gIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCBzLCBkYXRhKTtcbn0sXG4gICAgX3JlbmRlclByb3BUd2VlbnMgPSBmdW5jdGlvbiBfcmVuZGVyUHJvcFR3ZWVucyhyYXRpbywgZGF0YSkge1xuICB2YXIgcHQgPSBkYXRhLl9wdDtcblxuICB3aGlsZSAocHQpIHtcbiAgICBwdC5yKHJhdGlvLCBwdC5kKTtcbiAgICBwdCA9IHB0Ll9uZXh0O1xuICB9XG59LFxuICAgIF9hZGRQbHVnaW5Nb2RpZmllciA9IGZ1bmN0aW9uIF9hZGRQbHVnaW5Nb2RpZmllcihtb2RpZmllciwgdHdlZW4sIHRhcmdldCwgcHJvcGVydHkpIHtcbiAgdmFyIHB0ID0gdGhpcy5fcHQsXG4gICAgICBuZXh0O1xuXG4gIHdoaWxlIChwdCkge1xuICAgIG5leHQgPSBwdC5fbmV4dDtcbiAgICBwdC5wID09PSBwcm9wZXJ0eSAmJiBwdC5tb2RpZmllcihtb2RpZmllciwgdHdlZW4sIHRhcmdldCk7XG4gICAgcHQgPSBuZXh0O1xuICB9XG59LFxuICAgIF9raWxsUHJvcFR3ZWVuc09mID0gZnVuY3Rpb24gX2tpbGxQcm9wVHdlZW5zT2YocHJvcGVydHkpIHtcbiAgdmFyIHB0ID0gdGhpcy5fcHQsXG4gICAgICBoYXNOb25EZXBlbmRlbnRSZW1haW5pbmcsXG4gICAgICBuZXh0O1xuXG4gIHdoaWxlIChwdCkge1xuICAgIG5leHQgPSBwdC5fbmV4dDtcblxuICAgIGlmIChwdC5wID09PSBwcm9wZXJ0eSAmJiAhcHQub3AgfHwgcHQub3AgPT09IHByb3BlcnR5KSB7XG4gICAgICBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0odGhpcywgcHQsIFwiX3B0XCIpO1xuICAgIH0gZWxzZSBpZiAoIXB0LmRlcCkge1xuICAgICAgaGFzTm9uRGVwZW5kZW50UmVtYWluaW5nID0gMTtcbiAgICB9XG5cbiAgICBwdCA9IG5leHQ7XG4gIH1cblxuICByZXR1cm4gIWhhc05vbkRlcGVuZGVudFJlbWFpbmluZztcbn0sXG4gICAgX3NldHRlcldpdGhNb2RpZmllciA9IGZ1bmN0aW9uIF9zZXR0ZXJXaXRoTW9kaWZpZXIodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIGRhdGEpIHtcbiAgZGF0YS5tU2V0KHRhcmdldCwgcHJvcGVydHksIGRhdGEubS5jYWxsKGRhdGEudHdlZW4sIHZhbHVlLCBkYXRhLm10KSwgZGF0YSk7XG59LFxuICAgIF9zb3J0UHJvcFR3ZWVuc0J5UHJpb3JpdHkgPSBmdW5jdGlvbiBfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5KHBhcmVudCkge1xuICB2YXIgcHQgPSBwYXJlbnQuX3B0LFxuICAgICAgbmV4dCxcbiAgICAgIHB0MixcbiAgICAgIGZpcnN0LFxuICAgICAgbGFzdDsgLy9zb3J0cyB0aGUgUHJvcFR3ZWVuIGxpbmtlZCBsaXN0IGluIG9yZGVyIG9mIHByaW9yaXR5IGJlY2F1c2Ugc29tZSBwbHVnaW5zIG5lZWQgdG8gZG8gdGhlaXIgd29yayBhZnRlciBBTEwgb2YgdGhlIFByb3BUd2VlbnMgd2VyZSBjcmVhdGVkIChsaWtlIFJvdW5kUHJvcHNQbHVnaW4gYW5kIE1vZGlmaWVyc1BsdWdpbilcblxuICB3aGlsZSAocHQpIHtcbiAgICBuZXh0ID0gcHQuX25leHQ7XG4gICAgcHQyID0gZmlyc3Q7XG5cbiAgICB3aGlsZSAocHQyICYmIHB0Mi5wciA+IHB0LnByKSB7XG4gICAgICBwdDIgPSBwdDIuX25leHQ7XG4gICAgfVxuXG4gICAgaWYgKHB0Ll9wcmV2ID0gcHQyID8gcHQyLl9wcmV2IDogbGFzdCkge1xuICAgICAgcHQuX3ByZXYuX25leHQgPSBwdDtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlyc3QgPSBwdDtcbiAgICB9XG5cbiAgICBpZiAocHQuX25leHQgPSBwdDIpIHtcbiAgICAgIHB0Mi5fcHJldiA9IHB0O1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0ID0gcHQ7XG4gICAgfVxuXG4gICAgcHQgPSBuZXh0O1xuICB9XG5cbiAgcGFyZW50Ll9wdCA9IGZpcnN0O1xufTsgLy9Qcm9wVHdlZW4ga2V5OiB0ID0gdGFyZ2V0LCBwID0gcHJvcCwgciA9IHJlbmRlcmVyLCBkID0gZGF0YSwgcyA9IHN0YXJ0LCBjID0gY2hhbmdlLCBvcCA9IG92ZXJ3cml0ZVByb3BlcnR5IChPTkxZIHBvcHVsYXRlZCB3aGVuIGl0J3MgZGlmZmVyZW50IHRoYW4gcCksIHByID0gcHJpb3JpdHksIF9uZXh0L19wcmV2IGZvciB0aGUgbGlua2VkIGxpc3Qgc2libGluZ3MsIHNldCA9IHNldHRlciwgbSA9IG1vZGlmaWVyLCBtU2V0ID0gbW9kaWZpZXJTZXR0ZXIgKHRoZSBvcmlnaW5hbCBzZXR0ZXIsIGJlZm9yZSBhIG1vZGlmaWVyIHdhcyBhZGRlZClcblxuXG5leHBvcnQgdmFyIFByb3BUd2VlbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFByb3BUd2VlbihuZXh0LCB0YXJnZXQsIHByb3AsIHN0YXJ0LCBjaGFuZ2UsIHJlbmRlcmVyLCBkYXRhLCBzZXR0ZXIsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50ID0gdGFyZ2V0O1xuICAgIHRoaXMucyA9IHN0YXJ0O1xuICAgIHRoaXMuYyA9IGNoYW5nZTtcbiAgICB0aGlzLnAgPSBwcm9wO1xuICAgIHRoaXMuciA9IHJlbmRlcmVyIHx8IF9yZW5kZXJQbGFpbjtcbiAgICB0aGlzLmQgPSBkYXRhIHx8IHRoaXM7XG4gICAgdGhpcy5zZXQgPSBzZXR0ZXIgfHwgX3NldHRlclBsYWluO1xuICAgIHRoaXMucHIgPSBwcmlvcml0eSB8fCAwO1xuICAgIHRoaXMuX25leHQgPSBuZXh0O1xuXG4gICAgaWYgKG5leHQpIHtcbiAgICAgIG5leHQuX3ByZXYgPSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIHZhciBfcHJvdG80ID0gUHJvcFR3ZWVuLnByb3RvdHlwZTtcblxuICBfcHJvdG80Lm1vZGlmaWVyID0gZnVuY3Rpb24gbW9kaWZpZXIoZnVuYywgdHdlZW4sIHRhcmdldCkge1xuICAgIHRoaXMubVNldCA9IHRoaXMubVNldCB8fCB0aGlzLnNldDsgLy9pbiBjYXNlIGl0IHdhcyBhbHJlYWR5IHNldCAoYSBQcm9wVHdlZW4gY2FuIG9ubHkgaGF2ZSBvbmUgbW9kaWZpZXIpXG5cbiAgICB0aGlzLnNldCA9IF9zZXR0ZXJXaXRoTW9kaWZpZXI7XG4gICAgdGhpcy5tID0gZnVuYztcbiAgICB0aGlzLm10ID0gdGFyZ2V0OyAvL21vZGlmaWVyIHRhcmdldFxuXG4gICAgdGhpcy50d2VlbiA9IHR3ZWVuO1xuICB9O1xuXG4gIHJldHVybiBQcm9wVHdlZW47XG59KCk7IC8vSW5pdGlhbGl6YXRpb24gdGFza3NcblxuX2ZvckVhY2hOYW1lKF9jYWxsYmFja05hbWVzICsgXCJwYXJlbnQsZHVyYXRpb24sZWFzZSxkZWxheSxvdmVyd3JpdGUscnVuQmFja3dhcmRzLHN0YXJ0QXQseW95byxpbW1lZGlhdGVSZW5kZXIscmVwZWF0LHJlcGVhdERlbGF5LGRhdGEscGF1c2VkLHJldmVyc2VkLGxhenksY2FsbGJhY2tTY29wZSxzdHJpbmdGaWx0ZXIsaWQseW95b0Vhc2Usc3RhZ2dlcixpbmhlcml0LHJlcGVhdFJlZnJlc2gsa2V5ZnJhbWVzLGF1dG9SZXZlcnQsc2Nyb2xsVHJpZ2dlclwiLCBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gX3Jlc2VydmVkUHJvcHNbbmFtZV0gPSAxO1xufSk7XG5cbl9nbG9iYWxzLlR3ZWVuTWF4ID0gX2dsb2JhbHMuVHdlZW5MaXRlID0gVHdlZW47XG5fZ2xvYmFscy5UaW1lbGluZUxpdGUgPSBfZ2xvYmFscy5UaW1lbGluZU1heCA9IFRpbWVsaW5lO1xuX2dsb2JhbFRpbWVsaW5lID0gbmV3IFRpbWVsaW5lKHtcbiAgc29ydENoaWxkcmVuOiBmYWxzZSxcbiAgZGVmYXVsdHM6IF9kZWZhdWx0cyxcbiAgYXV0b1JlbW92ZUNoaWxkcmVuOiB0cnVlLFxuICBpZDogXCJyb290XCIsXG4gIHNtb290aENoaWxkVGltaW5nOiB0cnVlXG59KTtcbl9jb25maWcuc3RyaW5nRmlsdGVyID0gX2NvbG9yU3RyaW5nRmlsdGVyO1xuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBHU0FQXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbnZhciBfZ3NhcCA9IHtcbiAgcmVnaXN0ZXJQbHVnaW46IGZ1bmN0aW9uIHJlZ2lzdGVyUGx1Z2luKCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIGFyZ3MuZm9yRWFjaChmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICByZXR1cm4gX2NyZWF0ZVBsdWdpbihjb25maWcpO1xuICAgIH0pO1xuICB9LFxuICB0aW1lbGluZTogZnVuY3Rpb24gdGltZWxpbmUodmFycykge1xuICAgIHJldHVybiBuZXcgVGltZWxpbmUodmFycyk7XG4gIH0sXG4gIGdldFR3ZWVuc09mOiBmdW5jdGlvbiBnZXRUd2VlbnNPZih0YXJnZXRzLCBvbmx5QWN0aXZlKSB7XG4gICAgcmV0dXJuIF9nbG9iYWxUaW1lbGluZS5nZXRUd2VlbnNPZih0YXJnZXRzLCBvbmx5QWN0aXZlKTtcbiAgfSxcbiAgZ2V0UHJvcGVydHk6IGZ1bmN0aW9uIGdldFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIHVuaXQsIHVuY2FjaGUpIHtcbiAgICBfaXNTdHJpbmcodGFyZ2V0KSAmJiAodGFyZ2V0ID0gdG9BcnJheSh0YXJnZXQpWzBdKTsgLy9pbiBjYXNlIHNlbGVjdG9yIHRleHQgb3IgYW4gYXJyYXkgaXMgcGFzc2VkIGluXG5cbiAgICB2YXIgZ2V0dGVyID0gX2dldENhY2hlKHRhcmdldCB8fCB7fSkuZ2V0LFxuICAgICAgICBmb3JtYXQgPSB1bml0ID8gX3Bhc3NUaHJvdWdoIDogX251bWVyaWNJZlBvc3NpYmxlO1xuXG4gICAgdW5pdCA9PT0gXCJuYXRpdmVcIiAmJiAodW5pdCA9IFwiXCIpO1xuICAgIHJldHVybiAhdGFyZ2V0ID8gdGFyZ2V0IDogIXByb3BlcnR5ID8gZnVuY3Rpb24gKHByb3BlcnR5LCB1bml0LCB1bmNhY2hlKSB7XG4gICAgICByZXR1cm4gZm9ybWF0KChfcGx1Z2luc1twcm9wZXJ0eV0gJiYgX3BsdWdpbnNbcHJvcGVydHldLmdldCB8fCBnZXR0ZXIpKHRhcmdldCwgcHJvcGVydHksIHVuaXQsIHVuY2FjaGUpKTtcbiAgICB9IDogZm9ybWF0KChfcGx1Z2luc1twcm9wZXJ0eV0gJiYgX3BsdWdpbnNbcHJvcGVydHldLmdldCB8fCBnZXR0ZXIpKHRhcmdldCwgcHJvcGVydHksIHVuaXQsIHVuY2FjaGUpKTtcbiAgfSxcbiAgcXVpY2tTZXR0ZXI6IGZ1bmN0aW9uIHF1aWNrU2V0dGVyKHRhcmdldCwgcHJvcGVydHksIHVuaXQpIHtcbiAgICB0YXJnZXQgPSB0b0FycmF5KHRhcmdldCk7XG5cbiAgICBpZiAodGFyZ2V0Lmxlbmd0aCA+IDEpIHtcbiAgICAgIHZhciBzZXR0ZXJzID0gdGFyZ2V0Lm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gZ3NhcC5xdWlja1NldHRlcih0LCBwcm9wZXJ0eSwgdW5pdCk7XG4gICAgICB9KSxcbiAgICAgICAgICBsID0gc2V0dGVycy5sZW5ndGg7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBpID0gbDtcblxuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgc2V0dGVyc1tpXSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGFyZ2V0ID0gdGFyZ2V0WzBdIHx8IHt9O1xuXG4gICAgdmFyIFBsdWdpbiA9IF9wbHVnaW5zW3Byb3BlcnR5XSxcbiAgICAgICAgY2FjaGUgPSBfZ2V0Q2FjaGUodGFyZ2V0KSxcbiAgICAgICAgcCA9IGNhY2hlLmhhcm5lc3MgJiYgKGNhY2hlLmhhcm5lc3MuYWxpYXNlcyB8fCB7fSlbcHJvcGVydHldIHx8IHByb3BlcnR5LFxuICAgICAgICAvLyBpbiBjYXNlIGl0J3MgYW4gYWxpYXMsIGxpa2UgXCJyb3RhdGVcIiBmb3IgXCJyb3RhdGlvblwiLlxuICAgIHNldHRlciA9IFBsdWdpbiA/IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdmFyIHAgPSBuZXcgUGx1Z2luKCk7XG4gICAgICBfcXVpY2tUd2Vlbi5fcHQgPSAwO1xuICAgICAgcC5pbml0KHRhcmdldCwgdW5pdCA/IHZhbHVlICsgdW5pdCA6IHZhbHVlLCBfcXVpY2tUd2VlbiwgMCwgW3RhcmdldF0pO1xuICAgICAgcC5yZW5kZXIoMSwgcCk7XG4gICAgICBfcXVpY2tUd2Vlbi5fcHQgJiYgX3JlbmRlclByb3BUd2VlbnMoMSwgX3F1aWNrVHdlZW4pO1xuICAgIH0gOiBjYWNoZS5zZXQodGFyZ2V0LCBwKTtcblxuICAgIHJldHVybiBQbHVnaW4gPyBzZXR0ZXIgOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBzZXR0ZXIodGFyZ2V0LCBwLCB1bml0ID8gdmFsdWUgKyB1bml0IDogdmFsdWUsIGNhY2hlLCAxKTtcbiAgICB9O1xuICB9LFxuICBpc1R3ZWVuaW5nOiBmdW5jdGlvbiBpc1R3ZWVuaW5nKHRhcmdldHMpIHtcbiAgICByZXR1cm4gX2dsb2JhbFRpbWVsaW5lLmdldFR3ZWVuc09mKHRhcmdldHMsIHRydWUpLmxlbmd0aCA+IDA7XG4gIH0sXG4gIGRlZmF1bHRzOiBmdW5jdGlvbiBkZWZhdWx0cyh2YWx1ZSkge1xuICAgIHZhbHVlICYmIHZhbHVlLmVhc2UgJiYgKHZhbHVlLmVhc2UgPSBfcGFyc2VFYXNlKHZhbHVlLmVhc2UsIF9kZWZhdWx0cy5lYXNlKSk7XG4gICAgcmV0dXJuIF9tZXJnZURlZXAoX2RlZmF1bHRzLCB2YWx1ZSB8fCB7fSk7XG4gIH0sXG4gIGNvbmZpZzogZnVuY3Rpb24gY29uZmlnKHZhbHVlKSB7XG4gICAgcmV0dXJuIF9tZXJnZURlZXAoX2NvbmZpZywgdmFsdWUgfHwge30pO1xuICB9LFxuICByZWdpc3RlckVmZmVjdDogZnVuY3Rpb24gcmVnaXN0ZXJFZmZlY3QoX3JlZjMpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYzLm5hbWUsXG4gICAgICAgIGVmZmVjdCA9IF9yZWYzLmVmZmVjdCxcbiAgICAgICAgcGx1Z2lucyA9IF9yZWYzLnBsdWdpbnMsXG4gICAgICAgIGRlZmF1bHRzID0gX3JlZjMuZGVmYXVsdHMsXG4gICAgICAgIGV4dGVuZFRpbWVsaW5lID0gX3JlZjMuZXh0ZW5kVGltZWxpbmU7XG4gICAgKHBsdWdpbnMgfHwgXCJcIikuc3BsaXQoXCIsXCIpLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbk5hbWUpIHtcbiAgICAgIHJldHVybiBwbHVnaW5OYW1lICYmICFfcGx1Z2luc1twbHVnaW5OYW1lXSAmJiAhX2dsb2JhbHNbcGx1Z2luTmFtZV0gJiYgX3dhcm4obmFtZSArIFwiIGVmZmVjdCByZXF1aXJlcyBcIiArIHBsdWdpbk5hbWUgKyBcIiBwbHVnaW4uXCIpO1xuICAgIH0pO1xuXG4gICAgX2VmZmVjdHNbbmFtZV0gPSBmdW5jdGlvbiAodGFyZ2V0cywgdmFycywgdGwpIHtcbiAgICAgIHJldHVybiBlZmZlY3QodG9BcnJheSh0YXJnZXRzKSwgX3NldERlZmF1bHRzKHZhcnMgfHwge30sIGRlZmF1bHRzKSwgdGwpO1xuICAgIH07XG5cbiAgICBpZiAoZXh0ZW5kVGltZWxpbmUpIHtcbiAgICAgIFRpbWVsaW5lLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uICh0YXJnZXRzLCB2YXJzLCBwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGQoX2VmZmVjdHNbbmFtZV0odGFyZ2V0cywgX2lzT2JqZWN0KHZhcnMpID8gdmFycyA6IChwb3NpdGlvbiA9IHZhcnMpICYmIHt9LCB0aGlzKSwgcG9zaXRpb24pO1xuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHJlZ2lzdGVyRWFzZTogZnVuY3Rpb24gcmVnaXN0ZXJFYXNlKG5hbWUsIGVhc2UpIHtcbiAgICBfZWFzZU1hcFtuYW1lXSA9IF9wYXJzZUVhc2UoZWFzZSk7XG4gIH0sXG4gIHBhcnNlRWFzZTogZnVuY3Rpb24gcGFyc2VFYXNlKGVhc2UsIGRlZmF1bHRFYXNlKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyBfcGFyc2VFYXNlKGVhc2UsIGRlZmF1bHRFYXNlKSA6IF9lYXNlTWFwO1xuICB9LFxuICBnZXRCeUlkOiBmdW5jdGlvbiBnZXRCeUlkKGlkKSB7XG4gICAgcmV0dXJuIF9nbG9iYWxUaW1lbGluZS5nZXRCeUlkKGlkKTtcbiAgfSxcbiAgZXhwb3J0Um9vdDogZnVuY3Rpb24gZXhwb3J0Um9vdCh2YXJzLCBpbmNsdWRlRGVsYXllZENhbGxzKSB7XG4gICAgaWYgKHZhcnMgPT09IHZvaWQgMCkge1xuICAgICAgdmFycyA9IHt9O1xuICAgIH1cblxuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZSh2YXJzKSxcbiAgICAgICAgY2hpbGQsXG4gICAgICAgIG5leHQ7XG4gICAgdGwuc21vb3RoQ2hpbGRUaW1pbmcgPSBfaXNOb3RGYWxzZSh2YXJzLnNtb290aENoaWxkVGltaW5nKTtcblxuICAgIF9nbG9iYWxUaW1lbGluZS5yZW1vdmUodGwpO1xuXG4gICAgdGwuX2RwID0gMDsgLy9vdGhlcndpc2UgaXQnbGwgZ2V0IHJlLWFjdGl2YXRlZCB3aGVuIGFkZGluZyBjaGlsZHJlbiBhbmQgYmUgcmUtaW50cm9kdWNlZCBpbnRvIF9nbG9iYWxUaW1lbGluZSdzIGxpbmtlZCBsaXN0ICh0aGVuIGFkZGVkIHRvIGl0c2VsZikuXG5cbiAgICB0bC5fdGltZSA9IHRsLl90VGltZSA9IF9nbG9iYWxUaW1lbGluZS5fdGltZTtcbiAgICBjaGlsZCA9IF9nbG9iYWxUaW1lbGluZS5fZmlyc3Q7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIG5leHQgPSBjaGlsZC5fbmV4dDtcblxuICAgICAgaWYgKGluY2x1ZGVEZWxheWVkQ2FsbHMgfHwgISghY2hpbGQuX2R1ciAmJiBjaGlsZCBpbnN0YW5jZW9mIFR3ZWVuICYmIGNoaWxkLnZhcnMub25Db21wbGV0ZSA9PT0gY2hpbGQuX3RhcmdldHNbMF0pKSB7XG4gICAgICAgIF9hZGRUb1RpbWVsaW5lKHRsLCBjaGlsZCwgY2hpbGQuX3N0YXJ0IC0gY2hpbGQuX2RlbGF5KTtcbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBuZXh0O1xuICAgIH1cblxuICAgIF9hZGRUb1RpbWVsaW5lKF9nbG9iYWxUaW1lbGluZSwgdGwsIDApO1xuXG4gICAgcmV0dXJuIHRsO1xuICB9LFxuICB1dGlsczoge1xuICAgIHdyYXA6IHdyYXAsXG4gICAgd3JhcFlveW86IHdyYXBZb3lvLFxuICAgIGRpc3RyaWJ1dGU6IGRpc3RyaWJ1dGUsXG4gICAgcmFuZG9tOiByYW5kb20sXG4gICAgc25hcDogc25hcCxcbiAgICBub3JtYWxpemU6IG5vcm1hbGl6ZSxcbiAgICBnZXRVbml0OiBnZXRVbml0LFxuICAgIGNsYW1wOiBjbGFtcCxcbiAgICBzcGxpdENvbG9yOiBzcGxpdENvbG9yLFxuICAgIHRvQXJyYXk6IHRvQXJyYXksXG4gICAgc2VsZWN0b3I6IHNlbGVjdG9yLFxuICAgIG1hcFJhbmdlOiBtYXBSYW5nZSxcbiAgICBwaXBlOiBwaXBlLFxuICAgIHVuaXRpemU6IHVuaXRpemUsXG4gICAgaW50ZXJwb2xhdGU6IGludGVycG9sYXRlLFxuICAgIHNodWZmbGU6IHNodWZmbGVcbiAgfSxcbiAgaW5zdGFsbDogX2luc3RhbGwsXG4gIGVmZmVjdHM6IF9lZmZlY3RzLFxuICB0aWNrZXI6IF90aWNrZXIsXG4gIHVwZGF0ZVJvb3Q6IFRpbWVsaW5lLnVwZGF0ZVJvb3QsXG4gIHBsdWdpbnM6IF9wbHVnaW5zLFxuICBnbG9iYWxUaW1lbGluZTogX2dsb2JhbFRpbWVsaW5lLFxuICBjb3JlOiB7XG4gICAgUHJvcFR3ZWVuOiBQcm9wVHdlZW4sXG4gICAgZ2xvYmFsczogX2FkZEdsb2JhbCxcbiAgICBUd2VlbjogVHdlZW4sXG4gICAgVGltZWxpbmU6IFRpbWVsaW5lLFxuICAgIEFuaW1hdGlvbjogQW5pbWF0aW9uLFxuICAgIGdldENhY2hlOiBfZ2V0Q2FjaGUsXG4gICAgX3JlbW92ZUxpbmtlZExpc3RJdGVtOiBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0sXG4gICAgc3VwcHJlc3NPdmVyd3JpdGVzOiBmdW5jdGlvbiBzdXBwcmVzc092ZXJ3cml0ZXModmFsdWUpIHtcbiAgICAgIHJldHVybiBfc3VwcHJlc3NPdmVyd3JpdGVzID0gdmFsdWU7XG4gICAgfVxuICB9XG59O1xuXG5fZm9yRWFjaE5hbWUoXCJ0byxmcm9tLGZyb21UbyxkZWxheWVkQ2FsbCxzZXQsa2lsbFR3ZWVuc09mXCIsIGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBfZ3NhcFtuYW1lXSA9IFR3ZWVuW25hbWVdO1xufSk7XG5cbl90aWNrZXIuYWRkKFRpbWVsaW5lLnVwZGF0ZVJvb3QpO1xuXG5fcXVpY2tUd2VlbiA9IF9nc2FwLnRvKHt9LCB7XG4gIGR1cmF0aW9uOiAwXG59KTsgLy8gLS0tLSBFWFRSQSBQTFVHSU5TIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBfZ2V0UGx1Z2luUHJvcFR3ZWVuID0gZnVuY3Rpb24gX2dldFBsdWdpblByb3BUd2VlbihwbHVnaW4sIHByb3ApIHtcbiAgdmFyIHB0ID0gcGx1Z2luLl9wdDtcblxuICB3aGlsZSAocHQgJiYgcHQucCAhPT0gcHJvcCAmJiBwdC5vcCAhPT0gcHJvcCAmJiBwdC5mcCAhPT0gcHJvcCkge1xuICAgIHB0ID0gcHQuX25leHQ7XG4gIH1cblxuICByZXR1cm4gcHQ7XG59LFxuICAgIF9hZGRNb2RpZmllcnMgPSBmdW5jdGlvbiBfYWRkTW9kaWZpZXJzKHR3ZWVuLCBtb2RpZmllcnMpIHtcbiAgdmFyIHRhcmdldHMgPSB0d2Vlbi5fdGFyZ2V0cyxcbiAgICAgIHAsXG4gICAgICBpLFxuICAgICAgcHQ7XG5cbiAgZm9yIChwIGluIG1vZGlmaWVycykge1xuICAgIGkgPSB0YXJnZXRzLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHB0ID0gdHdlZW4uX3B0TG9va3VwW2ldW3BdO1xuXG4gICAgICBpZiAocHQgJiYgKHB0ID0gcHQuZCkpIHtcbiAgICAgICAgaWYgKHB0Ll9wdCkge1xuICAgICAgICAgIC8vIGlzIGEgcGx1Z2luXG4gICAgICAgICAgcHQgPSBfZ2V0UGx1Z2luUHJvcFR3ZWVuKHB0LCBwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB0ICYmIHB0Lm1vZGlmaWVyICYmIHB0Lm1vZGlmaWVyKG1vZGlmaWVyc1twXSwgdHdlZW4sIHRhcmdldHNbaV0sIHApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSxcbiAgICBfYnVpbGRNb2RpZmllclBsdWdpbiA9IGZ1bmN0aW9uIF9idWlsZE1vZGlmaWVyUGx1Z2luKG5hbWUsIG1vZGlmaWVyKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICByYXdWYXJzOiAxLFxuICAgIC8vZG9uJ3QgcHJlLXByb2Nlc3MgZnVuY3Rpb24tYmFzZWQgdmFsdWVzIG9yIFwicmFuZG9tKClcIiBzdHJpbmdzLlxuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQodGFyZ2V0LCB2YXJzLCB0d2Vlbikge1xuICAgICAgdHdlZW4uX29uSW5pdCA9IGZ1bmN0aW9uICh0d2Vlbikge1xuICAgICAgICB2YXIgdGVtcCwgcDtcblxuICAgICAgICBpZiAoX2lzU3RyaW5nKHZhcnMpKSB7XG4gICAgICAgICAgdGVtcCA9IHt9O1xuXG4gICAgICAgICAgX2ZvckVhY2hOYW1lKHZhcnMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGVtcFtuYW1lXSA9IDE7XG4gICAgICAgICAgfSk7IC8vaWYgdGhlIHVzZXIgcGFzc2VzIGluIGEgY29tbWEtZGVsaW1pdGVkIGxpc3Qgb2YgcHJvcGVydHkgbmFtZXMgdG8gcm91bmRQcm9wcywgbGlrZSBcIngseVwiLCB3ZSByb3VuZCB0byB3aG9sZSBudW1iZXJzLlxuXG5cbiAgICAgICAgICB2YXJzID0gdGVtcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb2RpZmllcikge1xuICAgICAgICAgIHRlbXAgPSB7fTtcblxuICAgICAgICAgIGZvciAocCBpbiB2YXJzKSB7XG4gICAgICAgICAgICB0ZW1wW3BdID0gbW9kaWZpZXIodmFyc1twXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFycyA9IHRlbXA7XG4gICAgICAgIH1cblxuICAgICAgICBfYWRkTW9kaWZpZXJzKHR3ZWVuLCB2YXJzKTtcbiAgICAgIH07XG4gICAgfVxuICB9O1xufTsgLy9yZWdpc3RlciBjb3JlIHBsdWdpbnNcblxuXG5leHBvcnQgdmFyIGdzYXAgPSBfZ3NhcC5yZWdpc3RlclBsdWdpbih7XG4gIG5hbWU6IFwiYXR0clwiLFxuICBpbml0OiBmdW5jdGlvbiBpbml0KHRhcmdldCwgdmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXRzKSB7XG4gICAgdmFyIHAsIHB0O1xuXG4gICAgZm9yIChwIGluIHZhcnMpIHtcbiAgICAgIHB0ID0gdGhpcy5hZGQodGFyZ2V0LCBcInNldEF0dHJpYnV0ZVwiLCAodGFyZ2V0LmdldEF0dHJpYnV0ZShwKSB8fCAwKSArIFwiXCIsIHZhcnNbcF0sIGluZGV4LCB0YXJnZXRzLCAwLCAwLCBwKTtcbiAgICAgIHB0ICYmIChwdC5vcCA9IHApO1xuXG4gICAgICB0aGlzLl9wcm9wcy5wdXNoKHApO1xuICAgIH1cbiAgfVxufSwge1xuICBuYW1lOiBcImVuZEFycmF5XCIsXG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQodGFyZ2V0LCB2YWx1ZSkge1xuICAgIHZhciBpID0gdmFsdWUubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdGhpcy5hZGQodGFyZ2V0LCBpLCB0YXJnZXRbaV0gfHwgMCwgdmFsdWVbaV0pO1xuICAgIH1cbiAgfVxufSwgX2J1aWxkTW9kaWZpZXJQbHVnaW4oXCJyb3VuZFByb3BzXCIsIF9yb3VuZE1vZGlmaWVyKSwgX2J1aWxkTW9kaWZpZXJQbHVnaW4oXCJtb2RpZmllcnNcIiksIF9idWlsZE1vZGlmaWVyUGx1Z2luKFwic25hcFwiLCBzbmFwKSkgfHwgX2dzYXA7IC8vdG8gcHJldmVudCB0aGUgY29yZSBwbHVnaW5zIGZyb20gYmVpbmcgZHJvcHBlZCB2aWEgYWdncmVzc2l2ZSB0cmVlIHNoYWtpbmcsIHdlIG11c3QgaW5jbHVkZSB0aGVtIGluIHRoZSB2YXJpYWJsZSBkZWNsYXJhdGlvbiBpbiB0aGlzIHdheS5cblxuVHdlZW4udmVyc2lvbiA9IFRpbWVsaW5lLnZlcnNpb24gPSBnc2FwLnZlcnNpb24gPSBcIjMuOC4wXCI7XG5fY29yZVJlYWR5ID0gMTtcbl93aW5kb3dFeGlzdHMoKSAmJiBfd2FrZSgpO1xudmFyIFBvd2VyMCA9IF9lYXNlTWFwLlBvd2VyMCxcbiAgICBQb3dlcjEgPSBfZWFzZU1hcC5Qb3dlcjEsXG4gICAgUG93ZXIyID0gX2Vhc2VNYXAuUG93ZXIyLFxuICAgIFBvd2VyMyA9IF9lYXNlTWFwLlBvd2VyMyxcbiAgICBQb3dlcjQgPSBfZWFzZU1hcC5Qb3dlcjQsXG4gICAgTGluZWFyID0gX2Vhc2VNYXAuTGluZWFyLFxuICAgIFF1YWQgPSBfZWFzZU1hcC5RdWFkLFxuICAgIEN1YmljID0gX2Vhc2VNYXAuQ3ViaWMsXG4gICAgUXVhcnQgPSBfZWFzZU1hcC5RdWFydCxcbiAgICBRdWludCA9IF9lYXNlTWFwLlF1aW50LFxuICAgIFN0cm9uZyA9IF9lYXNlTWFwLlN0cm9uZyxcbiAgICBFbGFzdGljID0gX2Vhc2VNYXAuRWxhc3RpYyxcbiAgICBCYWNrID0gX2Vhc2VNYXAuQmFjayxcbiAgICBTdGVwcGVkRWFzZSA9IF9lYXNlTWFwLlN0ZXBwZWRFYXNlLFxuICAgIEJvdW5jZSA9IF9lYXNlTWFwLkJvdW5jZSxcbiAgICBTaW5lID0gX2Vhc2VNYXAuU2luZSxcbiAgICBFeHBvID0gX2Vhc2VNYXAuRXhwbyxcbiAgICBDaXJjID0gX2Vhc2VNYXAuQ2lyYztcbmV4cG9ydCB7IFBvd2VyMCwgUG93ZXIxLCBQb3dlcjIsIFBvd2VyMywgUG93ZXI0LCBMaW5lYXIsIFF1YWQsIEN1YmljLCBRdWFydCwgUXVpbnQsIFN0cm9uZywgRWxhc3RpYywgQmFjaywgU3RlcHBlZEVhc2UsIEJvdW5jZSwgU2luZSwgRXhwbywgQ2lyYyB9O1xuZXhwb3J0IHsgVHdlZW4gYXMgVHdlZW5NYXgsIFR3ZWVuIGFzIFR3ZWVuTGl0ZSwgVGltZWxpbmUgYXMgVGltZWxpbmVNYXgsIFRpbWVsaW5lIGFzIFRpbWVsaW5lTGl0ZSwgZ3NhcCBhcyBkZWZhdWx0LCB3cmFwLCB3cmFwWW95bywgZGlzdHJpYnV0ZSwgcmFuZG9tLCBzbmFwLCBub3JtYWxpemUsIGdldFVuaXQsIGNsYW1wLCBzcGxpdENvbG9yLCB0b0FycmF5LCBzZWxlY3RvciwgbWFwUmFuZ2UsIHBpcGUsIHVuaXRpemUsIGludGVycG9sYXRlLCBzaHVmZmxlIH07IC8vZXhwb3J0IHNvbWUgaW50ZXJuYWwgbWV0aG9kcy9vcm9qZWN0cyBmb3IgdXNlIGluIENTU1BsdWdpbiBzbyB0aGF0IHdlIGNhbiBleHRlcm5hbGl6ZSB0aGF0IGZpbGUgYW5kIGFsbG93IGN1c3RvbSBidWlsZHMgdGhhdCBleGNsdWRlIGl0LlxuXG5leHBvcnQgeyBfZ2V0UHJvcGVydHksIF9udW1FeHAsIF9udW1XaXRoVW5pdEV4cCwgX2lzU3RyaW5nLCBfaXNVbmRlZmluZWQsIF9yZW5kZXJDb21wbGV4U3RyaW5nLCBfcmVsRXhwLCBfc2V0RGVmYXVsdHMsIF9yZW1vdmVMaW5rZWRMaXN0SXRlbSwgX2ZvckVhY2hOYW1lLCBfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5LCBfY29sb3JTdHJpbmdGaWx0ZXIsIF9yZXBsYWNlUmFuZG9tLCBfY2hlY2tQbHVnaW4sIF9wbHVnaW5zLCBfdGlja2VyLCBfY29uZmlnLCBfcm91bmRNb2RpZmllciwgX3JvdW5kLCBfbWlzc2luZ1BsdWdpbiwgX2dldFNldHRlciwgX2dldENhY2hlLCBfY29sb3JFeHAgfTsiLCJpbXBvcnQgeyBnc2FwLCBQb3dlcjAsIFBvd2VyMSwgUG93ZXIyLCBQb3dlcjMsIFBvd2VyNCwgTGluZWFyLCBRdWFkLCBDdWJpYywgUXVhcnQsIFF1aW50LCBTdHJvbmcsIEVsYXN0aWMsIEJhY2ssIFN0ZXBwZWRFYXNlLCBCb3VuY2UsIFNpbmUsIEV4cG8sIENpcmMsIFR3ZWVuTGl0ZSwgVGltZWxpbmVMaXRlLCBUaW1lbGluZU1heCB9IGZyb20gXCIuL2dzYXAtY29yZS5qc1wiO1xuaW1wb3J0IHsgQ1NTUGx1Z2luIH0gZnJvbSBcIi4vQ1NTUGx1Z2luLmpzXCI7XG52YXIgZ3NhcFdpdGhDU1MgPSBnc2FwLnJlZ2lzdGVyUGx1Z2luKENTU1BsdWdpbikgfHwgZ3NhcCxcbiAgICAvLyB0byBwcm90ZWN0IGZyb20gdHJlZSBzaGFraW5nXG5Ud2Vlbk1heFdpdGhDU1MgPSBnc2FwV2l0aENTUy5jb3JlLlR3ZWVuO1xuZXhwb3J0IHsgZ3NhcFdpdGhDU1MgYXMgZ3NhcCwgZ3NhcFdpdGhDU1MgYXMgZGVmYXVsdCwgQ1NTUGx1Z2luLCBUd2Vlbk1heFdpdGhDU1MgYXMgVHdlZW5NYXgsIFR3ZWVuTGl0ZSwgVGltZWxpbmVNYXgsIFRpbWVsaW5lTGl0ZSwgUG93ZXIwLCBQb3dlcjEsIFBvd2VyMiwgUG93ZXIzLCBQb3dlcjQsIExpbmVhciwgUXVhZCwgQ3ViaWMsIFF1YXJ0LCBRdWludCwgU3Ryb25nLCBFbGFzdGljLCBCYWNrLCBTdGVwcGVkRWFzZSwgQm91bmNlLCBTaW5lLCBFeHBvLCBDaXJjIH07IiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpID09PSBmYWxzZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUVhY2g7XG4iLCJ2YXIgYmFzZVRpbWVzID0gcmVxdWlyZSgnLi9fYmFzZVRpbWVzJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TGlrZUtleXM7XG4iLCJ2YXIgYmFzZUZvck93biA9IHJlcXVpcmUoJy4vX2Jhc2VGb3JPd24nKSxcbiAgICBjcmVhdGVCYXNlRWFjaCA9IHJlcXVpcmUoJy4vX2NyZWF0ZUJhc2VFYWNoJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZm9yRWFjaGAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fE9iamVjdH0gUmV0dXJucyBgY29sbGVjdGlvbmAuXG4gKi9cbnZhciBiYXNlRWFjaCA9IGNyZWF0ZUJhc2VFYWNoKGJhc2VGb3JPd24pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VFYWNoO1xuIiwidmFyIGNyZWF0ZUJhc2VGb3IgPSByZXF1aXJlKCcuL19jcmVhdGVCYXNlRm9yJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGJhc2VGb3JPd25gIHdoaWNoIGl0ZXJhdGVzIG92ZXIgYG9iamVjdGBcbiAqIHByb3BlcnRpZXMgcmV0dXJuZWQgYnkgYGtleXNGdW5jYCBhbmQgaW52b2tlcyBgaXRlcmF0ZWVgIGZvciBlYWNoIHByb3BlcnR5LlxuICogSXRlcmF0ZWUgZnVuY3Rpb25zIG1heSBleGl0IGl0ZXJhdGlvbiBlYXJseSBieSBleHBsaWNpdGx5IHJldHVybmluZyBgZmFsc2VgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG52YXIgYmFzZUZvciA9IGNyZWF0ZUJhc2VGb3IoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRm9yO1xuIiwidmFyIGJhc2VGb3IgPSByZXF1aXJlKCcuL19iYXNlRm9yJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZvck93bmAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGb3JPd24ob2JqZWN0LCBpdGVyYXRlZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGJhc2VGb3Iob2JqZWN0LCBpdGVyYXRlZSwga2V5cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZvck93bjtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0FyZ3VtZW50cztcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNUeXBlZEFycmF5O1xuIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUaW1lcztcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG4iLCJ2YXIgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5Jyk7XG5cbi8qKlxuICogQ2FzdHMgYHZhbHVlYCB0byBgaWRlbnRpdHlgIGlmIGl0J3Mgbm90IGEgZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgY2FzdCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY2FzdEZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlIDogaWRlbnRpdHk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FzdEZ1bmN0aW9uO1xuIiwidmFyIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBgYmFzZUVhY2hgIG9yIGBiYXNlRWFjaFJpZ2h0YCBmdW5jdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZWFjaEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGl0ZXJhdGUgb3ZlciBhIGNvbGxlY3Rpb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGJhc2UgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VFYWNoKGVhY2hGdW5jLCBmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSB7XG4gICAgaWYgKGNvbGxlY3Rpb24gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gICAgfVxuICAgIGlmICghaXNBcnJheUxpa2UoY29sbGVjdGlvbikpIHtcbiAgICAgIHJldHVybiBlYWNoRnVuYyhjb2xsZWN0aW9uLCBpdGVyYXRlZSk7XG4gICAgfVxuICAgIHZhciBsZW5ndGggPSBjb2xsZWN0aW9uLmxlbmd0aCxcbiAgICAgICAgaW5kZXggPSBmcm9tUmlnaHQgPyBsZW5ndGggOiAtMSxcbiAgICAgICAgaXRlcmFibGUgPSBPYmplY3QoY29sbGVjdGlvbik7XG5cbiAgICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgICAgaWYgKGl0ZXJhdGVlKGl0ZXJhYmxlW2luZGV4XSwgaW5kZXgsIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUJhc2VFYWNoO1xuIiwiLyoqXG4gKiBDcmVhdGVzIGEgYmFzZSBmdW5jdGlvbiBmb3IgbWV0aG9kcyBsaWtlIGBfLmZvckluYCBhbmQgYF8uZm9yT3duYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRm9yKGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0LCBpdGVyYXRlZSwga2V5c0Z1bmMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgaXRlcmFibGUgPSBPYmplY3Qob2JqZWN0KSxcbiAgICAgICAgcHJvcHMgPSBrZXlzRnVuYyhvYmplY3QpLFxuICAgICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wc1tmcm9tUmlnaHQgPyBsZW5ndGggOiArK2luZGV4XTtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtrZXldLCBrZXksIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQmFzZUZvcjtcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcbiIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuXG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlID09ICdudW1iZXInIHx8XG4gICAgICAodHlwZSAhPSAnc3ltYm9sJyAmJiByZUlzVWludC50ZXN0KHZhbHVlKSkpICYmXG4gICAgICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvdG90eXBlO1xuIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgLy8gVXNlIGB1dGlsLnR5cGVzYCBmb3IgTm9kZS5qcyAxMCsuXG4gICAgdmFyIHR5cGVzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlKCd1dGlsJykudHlwZXM7XG5cbiAgICBpZiAodHlwZXMpIHtcbiAgICAgIHJldHVybiB0eXBlcztcbiAgICB9XG5cbiAgICAvLyBMZWdhY3kgYHByb2Nlc3MuYmluZGluZygndXRpbCcpYCBmb3IgTm9kZS5qcyA8IDEwLlxuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbm9kZVV0aWw7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcbiIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJBcmc7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZm9yRWFjaCcpO1xuIiwidmFyIGFycmF5RWFjaCA9IHJlcXVpcmUoJy4vX2FycmF5RWFjaCcpLFxuICAgIGJhc2VFYWNoID0gcmVxdWlyZSgnLi9fYmFzZUVhY2gnKSxcbiAgICBjYXN0RnVuY3Rpb24gPSByZXF1aXJlKCcuL19jYXN0RnVuY3Rpb24nKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKlxuICogSXRlcmF0ZXMgb3ZlciBlbGVtZW50cyBvZiBgY29sbGVjdGlvbmAgYW5kIGludm9rZXMgYGl0ZXJhdGVlYCBmb3IgZWFjaCBlbGVtZW50LlxuICogVGhlIGl0ZXJhdGVlIGlzIGludm9rZWQgd2l0aCB0aHJlZSBhcmd1bWVudHM6ICh2YWx1ZSwgaW5kZXh8a2V5LCBjb2xsZWN0aW9uKS5cbiAqIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseSByZXR1cm5pbmcgYGZhbHNlYC5cbiAqXG4gKiAqKk5vdGU6KiogQXMgd2l0aCBvdGhlciBcIkNvbGxlY3Rpb25zXCIgbWV0aG9kcywgb2JqZWN0cyB3aXRoIGEgXCJsZW5ndGhcIlxuICogcHJvcGVydHkgYXJlIGl0ZXJhdGVkIGxpa2UgYXJyYXlzLiBUbyBhdm9pZCB0aGlzIGJlaGF2aW9yIHVzZSBgXy5mb3JJbmBcbiAqIG9yIGBfLmZvck93bmAgZm9yIG9iamVjdCBpdGVyYXRpb24uXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGFsaWFzIGVhY2hcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheXxPYmplY3R9IFJldHVybnMgYGNvbGxlY3Rpb25gLlxuICogQHNlZSBfLmZvckVhY2hSaWdodFxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmZvckVhY2goWzEsIDJdLCBmdW5jdGlvbih2YWx1ZSkge1xuICogICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gKiB9KTtcbiAqIC8vID0+IExvZ3MgYDFgIHRoZW4gYDJgLlxuICpcbiAqIF8uZm9yRWFjaCh7ICdhJzogMSwgJ2InOiAyIH0sIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAqICAgY29uc29sZS5sb2coa2V5KTtcbiAqIH0pO1xuICogLy8gPT4gTG9ncyAnYScgdGhlbiAnYicgKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZCkuXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2goY29sbGVjdGlvbiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGZ1bmMgPSBpc0FycmF5KGNvbGxlY3Rpb24pID8gYXJyYXlFYWNoIDogYmFzZUVhY2g7XG4gIHJldHVybiBmdW5jKGNvbGxlY3Rpb24sIGNhc3RGdW5jdGlvbihpdGVyYXRlZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvckVhY2g7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuIiwidmFyIGJhc2VJc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vX2Jhc2VJc0FyZ3VtZW50cycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcbiIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290JyksXG4gICAgc3R1YkZhbHNlID0gcmVxdWlyZSgnLi9zdHViRmFsc2UnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQnVmZmVyO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcbiIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwidmFyIGJhc2VJc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19iYXNlSXNUeXBlZEFycmF5JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1R5cGVkQXJyYXk7XG4iLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkZhbHNlO1xuIiwiLy8gY2hlY2sgZG9jdW1lbnQgZmlyc3Qgc28gaXQgZG9lc24ndCBlcnJvciBpbiBub2RlLmpzXG52YXIgc3R5bGUgPSB0eXBlb2YgZG9jdW1lbnQgIT0gJ3VuZGVmaW5lZCdcbiAgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykuc3R5bGVcbiAgOiB7fVxuXG52YXIgcHJlZml4ZXMgPSBbJ08nLCAnbXMnLCAnTW96JywgJ1dlYmtpdCddXG52YXIgdXBwZXIgPSAvKFtBLVpdKS9nXG52YXIgbWVtbyA9IHt9XG5cbi8qKlxuICogcHJlZml4IGBrZXlgXG4gKlxuICogICBwcmVmaXgoJ3RyYW5zZm9ybScpIC8vID0+IFdlYmtpdFRyYW5zZm9ybVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIHByZWZpeChrZXkpe1xuICAvLyBDYW1lbCBjYXNlXG4gIGtleSA9IGtleS5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbihfLCBjaGFyKXtcbiAgICByZXR1cm4gY2hhci50b1VwcGVyQ2FzZSgpXG4gIH0pXG5cbiAgLy8gV2l0aG91dCBwcmVmaXhcbiAgaWYgKHN0eWxlW2tleV0gIT09IHVuZGVmaW5lZCkgcmV0dXJuIGtleVxuXG4gIC8vIFdpdGggcHJlZml4XG4gIHZhciBLZXkgPSBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSlcbiAgdmFyIGkgPSBwcmVmaXhlcy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIHZhciBuYW1lID0gcHJlZml4ZXNbaV0gKyBLZXlcbiAgICBpZiAoc3R5bGVbbmFtZV0gIT09IHVuZGVmaW5lZCkgcmV0dXJuIG5hbWVcbiAgfVxuXG4gIHJldHVybiBrZXlcbn1cblxuLyoqXG4gKiBNZW1vaXplZCB2ZXJzaW9uIG9mIGBwcmVmaXhgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gcHJlZml4TWVtb3ppZWQoa2V5KXtcbiAgcmV0dXJuIGtleSBpbiBtZW1vXG4gICAgPyBtZW1vW2tleV1cbiAgICA6IG1lbW9ba2V5XSA9IHByZWZpeChrZXkpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZGFzaGVkIHByZWZpeFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIHByZWZpeERhc2hlZChrZXkpe1xuICBrZXkgPSBwcmVmaXgoa2V5KVxuICBpZiAodXBwZXIudGVzdChrZXkpKSB7XG4gICAga2V5ID0gJy0nICsga2V5LnJlcGxhY2UodXBwZXIsICctJDEnKVxuICAgIHVwcGVyLmxhc3RJbmRleCA9IDBcbiAgfVxuICByZXR1cm4ga2V5LnRvTG93ZXJDYXNlKClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwcmVmaXhNZW1vemllZFxubW9kdWxlLmV4cG9ydHMuZGFzaCA9IHByZWZpeERhc2hlZFxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzNDY4NDg1NTE5NVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvaG9tZS9sdWNhc3NpbHZhL2JhY2t1cC9wcm9qZXRvcy9lbmR1cmFuY2Uvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkZGE5ZmM1Y2JkM2M1NTI0YTA3NlwiKSJdLCJuYW1lcyI6WyJHU0FQIiwiZWFjaCIsIlByZWZpeCIsIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImlkIiwiZWxlbWVudCIsImVsZW1lbnRzIiwic2VsZWN0b3IiLCJzZWxlY3RvckNoaWxkcmVuIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxhc3QiLCJ0cmFuc2Zvcm1QcmVmaXgiLCJhZGRFdmVudExpc3RlbmVycyIsIm9uTW91c2VXaGVlbCIsImJpbmQiLCJ1cGRhdGUiLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlbnRyeSIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ2h0Iiwic2hvdyIsImFuaW1hdGVJbiIsInRpbWVsaW5lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJmcm9tIiwiYXV0b0FscGhhIiwib25Db21wbGV0ZSIsImhpZGUiLCJhbmltYXRlT3V0IiwidG8iLCJ1dGlscyIsImludGVycG9sYXRlIiwiY29uc29sZSIsImxvZyIsIndyYXBwZXIiLCJqb3Jkb24iLCJldmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJnc2FwIiwiX2dldFByb3BlcnR5IiwiX251bUV4cCIsIl9udW1XaXRoVW5pdEV4cCIsImdldFVuaXQiLCJfaXNTdHJpbmciLCJfaXNVbmRlZmluZWQiLCJfcmVuZGVyQ29tcGxleFN0cmluZyIsIl9yZWxFeHAiLCJfZm9yRWFjaE5hbWUiLCJfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5IiwiX2NvbG9yU3RyaW5nRmlsdGVyIiwiX2NoZWNrUGx1Z2luIiwiX3JlcGxhY2VSYW5kb20iLCJfcGx1Z2lucyIsIkdTQ2FjaGUiLCJQcm9wVHdlZW4iLCJfY29uZmlnIiwiX3RpY2tlciIsIl9yb3VuZCIsIl9taXNzaW5nUGx1Z2luIiwiX2dldFNldHRlciIsIl9nZXRDYWNoZSIsIl9jb2xvckV4cCIsIl9zZXREZWZhdWx0cyIsIl9yZW1vdmVMaW5rZWRMaXN0SXRlbSIsIl93aW4iLCJfZG9jIiwiX2RvY0VsZW1lbnQiLCJfcGx1Z2luSW5pdHRlZCIsIl90ZW1wRGl2IiwiX3RlbXBEaXZTdHlsZXIiLCJfcmVjZW50U2V0dGVyUGx1Z2luIiwiX3dpbmRvd0V4aXN0cyIsIl90cmFuc2Zvcm1Qcm9wcyIsIl9SQUQyREVHIiwiTWF0aCIsIlBJIiwiX0RFRzJSQUQiLCJfYXRhbjIiLCJhdGFuMiIsIl9iaWdOdW0iLCJfY2Fwc0V4cCIsIl9ob3Jpem9udGFsRXhwIiwiX2NvbXBsZXhFeHAiLCJfcHJvcGVydHlBbGlhc2VzIiwic2NhbGUiLCJhbHBoYSIsIl9yZW5kZXJDU1NQcm9wIiwicmF0aW8iLCJkYXRhIiwic2V0IiwidCIsInAiLCJyb3VuZCIsInMiLCJjIiwidSIsIl9yZW5kZXJQcm9wV2l0aEVuZCIsImUiLCJfcmVuZGVyQ1NTUHJvcFdpdGhCZWdpbm5pbmciLCJiIiwiX3JlbmRlclJvdW5kZWRDU1NQcm9wIiwidmFsdWUiLCJfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZSIsIl9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlT25seUF0RW5kIiwiX3NldHRlckNTU1N0eWxlIiwicHJvcGVydHkiLCJzdHlsZSIsIl9zZXR0ZXJDU1NQcm9wIiwic2V0UHJvcGVydHkiLCJfc2V0dGVyVHJhbnNmb3JtIiwiX2dzYXAiLCJfc2V0dGVyU2NhbGUiLCJzY2FsZVgiLCJzY2FsZVkiLCJfc2V0dGVyU2NhbGVXaXRoUmVuZGVyIiwiY2FjaGUiLCJyZW5kZXJUcmFuc2Zvcm0iLCJfc2V0dGVyVHJhbnNmb3JtV2l0aFJlbmRlciIsIl90cmFuc2Zvcm1Qcm9wIiwiX3RyYW5zZm9ybU9yaWdpblByb3AiLCJfc3VwcG9ydHMzRCIsIl9jcmVhdGVFbGVtZW50IiwidHlwZSIsIm5zIiwiY3JlYXRlRWxlbWVudE5TIiwicmVwbGFjZSIsImNyZWF0ZUVsZW1lbnQiLCJfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSIsInNraXBQcmVmaXhGYWxsYmFjayIsImNzIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJ0b0xvd2VyQ2FzZSIsIl9jaGVja1Byb3BQcmVmaXgiLCJfcHJlZml4ZXMiLCJzcGxpdCIsInByZWZlclByZWZpeCIsImkiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0ciIsIl9pbml0Q29yZSIsImRvY3VtZW50RWxlbWVudCIsImNzc1RleHQiLCJfZ2V0QkJveEhhY2siLCJzd2FwSWZQb3NzaWJsZSIsInN2ZyIsIm93bmVyU1ZHRWxlbWVudCIsImdldEF0dHJpYnV0ZSIsIm9sZFBhcmVudCIsInBhcmVudE5vZGUiLCJvbGRTaWJsaW5nIiwibmV4dFNpYmxpbmciLCJvbGRDU1MiLCJiYm94IiwiYXBwZW5kQ2hpbGQiLCJkaXNwbGF5IiwiZ2V0QkJveCIsIl9nc2FwQkJveCIsImluc2VydEJlZm9yZSIsInJlbW92ZUNoaWxkIiwiX2dldEF0dHJpYnV0ZUZhbGxiYWNrcyIsImF0dHJpYnV0ZXNBcnJheSIsImxlbmd0aCIsImhhc0F0dHJpYnV0ZSIsIl9nZXRCQm94IiwiYm91bmRzIiwiZXJyb3IiLCJjYWxsIiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwieSIsIl9pc1NWRyIsImdldENUTSIsIl9yZW1vdmVQcm9wZXJ0eSIsInJlbW92ZVByb3BlcnR5IiwicmVtb3ZlQXR0cmlidXRlIiwiX2FkZE5vblR3ZWVuaW5nUFQiLCJwbHVnaW4iLCJiZWdpbm5pbmciLCJlbmQiLCJvbmx5U2V0QXRFbmQiLCJwdCIsIl9wdCIsIl9wcm9wcyIsInB1c2giLCJfbm9uQ29udmVydGlibGVVbml0cyIsImRlZyIsInJhZCIsInR1cm4iLCJfY29udmVydFRvVW5pdCIsInVuaXQiLCJjdXJWYWx1ZSIsInBhcnNlRmxvYXQiLCJjdXJVbml0IiwidHJpbSIsImhvcml6b250YWwiLCJ0ZXN0IiwiaXNSb290U1ZHIiwidGFnTmFtZSIsIm1lYXN1cmVQcm9wZXJ0eSIsImFtb3VudCIsInRvUGl4ZWxzIiwidG9QZXJjZW50IiwicHgiLCJwYXJlbnQiLCJpc1NWRyIsImluZGV4T2YiLCJib2R5IiwidGltZSIsInBvc2l0aW9uIiwiX2dldCIsInVuY2FjaGUiLCJfcGFyc2VUcmFuc2Zvcm0iLCJvcmlnaW4iLCJfZmlyc3RUd29Pbmx5Iiwiek9yaWdpbiIsIl9zcGVjaWFsUHJvcHMiLCJfdHdlZW5Db21wbGV4Q1NTU3RyaW5nIiwicHJvcCIsInN0YXJ0IiwiaW5kZXgiLCJtYXRjaEluZGV4IiwiYSIsInJlc3VsdCIsInN0YXJ0VmFsdWVzIiwic3RhcnROdW0iLCJjb2xvciIsInN0YXJ0VmFsdWUiLCJlbmRWYWx1ZSIsImVuZE51bSIsImNodW5rIiwiZW5kVW5pdCIsInN0YXJ0VW5pdCIsInJlbGF0aXZlIiwiZW5kVmFsdWVzIiwibWF0Y2giLCJleGVjIiwic3Vic3RyaW5nIiwibGFzdEluZGV4IiwidW5pdHMiLCJfbmV4dCIsIm0iLCJyIiwiX2tleXdvcmRUb1BlcmNlbnQiLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJjZW50ZXIiLCJfY29udmVydEtleXdvcmRzVG9QZXJjZW50YWdlcyIsImpvaW4iLCJfcmVuZGVyQ2xlYXJQcm9wcyIsInR3ZWVuIiwiX3RpbWUiLCJfZHVyIiwicHJvcHMiLCJjbGVhclRyYW5zZm9ybXMiLCJjbGVhclByb3BzIiwicHIiLCJfaWRlbnRpdHkyRE1hdHJpeCIsIl9yb3RhdGlvbmFsUHJvcGVydGllcyIsIl9pc051bGxUcmFuc2Zvcm0iLCJfZ2V0Q29tcHV0ZWRUcmFuc2Zvcm1NYXRyaXhBc0FycmF5IiwibWF0cml4U3RyaW5nIiwibWFwIiwiX2dldE1hdHJpeCIsImZvcmNlMkQiLCJtYXRyaXgiLCJ0ZW1wIiwiYWRkZWRUb0RPTSIsInRyYW5zZm9ybSIsImJhc2VWYWwiLCJjb25zb2xpZGF0ZSIsImQiLCJmIiwib2Zmc2V0UGFyZW50IiwiX2FwcGx5U1ZHT3JpZ2luIiwib3JpZ2luSXNBYnNvbHV0ZSIsInNtb290aCIsIm1hdHJpeEFycmF5IiwicGx1Z2luVG9BZGRQcm9wVHdlZW5zVG8iLCJ4T3JpZ2luT2xkIiwieE9yaWdpbiIsInlPcmlnaW5PbGQiLCJ5T3JpZ2luIiwieE9mZnNldE9sZCIsInhPZmZzZXQiLCJ5T2Zmc2V0T2xkIiwieU9mZnNldCIsInR4IiwidHkiLCJvcmlnaW5TcGxpdCIsImRldGVybWluYW50Iiwic2V0QXR0cmlidXRlIiwiaW52ZXJ0ZWRTY2FsZVgiLCJ6Iiwicm90YXRpb24iLCJyb3RhdGlvblgiLCJyb3RhdGlvblkiLCJza2V3WCIsInNrZXdZIiwicGVyc3BlY3RpdmUiLCJhbmdsZSIsImNvcyIsInNpbiIsImExMiIsImEyMiIsInQxIiwidDIiLCJ0MyIsImExMyIsImEyMyIsImEzMyIsImE0MiIsImE0MyIsImEzMiIsInNxcnQiLCJhYnMiLCJmb3JjZUNTUyIsInhQZXJjZW50Iiwib2Zmc2V0V2lkdGgiLCJ5UGVyY2VudCIsIm9mZnNldEhlaWdodCIsInRyYW5zZm9ybVBlcnNwZWN0aXZlIiwiZm9yY2UzRCIsIl9yZW5kZXJTVkdUcmFuc2Zvcm1zIiwiX3JlbmRlckNTU1RyYW5zZm9ybXMiLCJfcmVuZGVyTm9uM0RUcmFuc2Zvcm1zIiwiX2FkZFB4VHJhbnNsYXRlIiwiX3plcm9EZWciLCJfemVyb1B4IiwiX2VuZFBhcmVudGhlc2lzIiwiX3JlZiIsInRyYW5zZm9ybXMiLCJ1c2UzRCIsIl9yZWYyIiwiYTExIiwiYTIxIiwidGFuIiwiX2FkZFJvdGF0aW9uYWxQcm9wVHdlZW4iLCJjYXAiLCJpc1N0cmluZyIsImNoYW5nZSIsImZpbmFsVmFsdWUiLCJkaXJlY3Rpb24iLCJfYXNzaWduIiwic291cmNlIiwiX2FkZFJhd1RyYW5zZm9ybVBUcyIsInN0YXJ0Q2FjaGUiLCJleGNsdWRlIiwiZW5kQ2FjaGUiLCJuYW1lIiwibCIsInNpZGUiLCJ2YXJzIiwiYXJndW1lbnRzIiwiZm9yRWFjaCIsImluaXQiLCJDU1NQbHVnaW4iLCJyZWdpc3RlciIsInRhcmdldFRlc3QiLCJub2RlVHlwZSIsInRhcmdldHMiLCJzdGFydEF0Iiwic3BlY2lhbFByb3AiLCJpc1RyYW5zZm9ybVJlbGF0ZWQiLCJ0cmFuc2Zvcm1Qcm9wVHdlZW4iLCJoYXNQcmlvcml0eSIsImFkZCIsInBhcnNlVHJhbnNmb3JtIiwic21vb3RoT3JpZ2luIiwiZGVwIiwiYXV0b1JvdW5kIiwiZ2V0IiwiYWxpYXNlcyIsImdldFNldHRlciIsImNvcmUiLCJjaGVja1ByZWZpeCIsInBvc2l0aW9uQW5kU2NhbGUiLCJvdGhlcnMiLCJhbGwiLCJyZWdpc3RlclBsdWdpbiIsImRlZmF1bHQiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwic2VsZiIsIlJlZmVyZW5jZUVycm9yIiwiX2luaGVyaXRzTG9vc2UiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJwcm90b3R5cGUiLCJPYmplY3QiLCJfX3Byb3RvX18iLCJhdXRvU2xlZXAiLCJudWxsVGFyZ2V0V2FybiIsImxpbmVIZWlnaHQiLCJfZGVmYXVsdHMiLCJkdXJhdGlvbiIsIm92ZXJ3cml0ZSIsImRlbGF5IiwiX3N1cHByZXNzT3ZlcndyaXRlcyIsIl90aW55TnVtIiwiXzJQSSIsIl9IQUxGX1BJIiwiX2dzSUQiLCJfc3FydCIsIl9jb3MiLCJfc2luIiwiX2lzRnVuY3Rpb24iLCJfaXNOdW1iZXIiLCJfaXNPYmplY3QiLCJfaXNOb3RGYWxzZSIsIl9pc0Z1bmNPclN0cmluZyIsIl9pc1R5cGVkQXJyYXkiLCJBcnJheUJ1ZmZlciIsImlzVmlldyIsIl9pc0FycmF5IiwiX3N0cmljdE51bUV4cCIsIl9jb21wbGV4U3RyaW5nTnVtRXhwIiwiX2RlbGltaXRlZFZhbHVlRXhwIiwiX3VuaXRFeHAiLCJfZ2xvYmFsVGltZWxpbmUiLCJfY29yZUluaXR0ZWQiLCJfZ2xvYmFscyIsIl9pbnN0YWxsU2NvcGUiLCJfY29yZVJlYWR5IiwiX2luc3RhbGwiLCJzY29wZSIsIl9tZXJnZSIsIndhcm4iLCJfd2FybiIsIm1lc3NhZ2UiLCJzdXBwcmVzcyIsIl9hZGRHbG9iYWwiLCJvYmoiLCJfZW1wdHlGdW5jIiwiX3Jlc2VydmVkUHJvcHMiLCJfbGF6eVR3ZWVucyIsIl9sYXp5TG9va3VwIiwiX2xhc3RSZW5kZXJlZEZyYW1lIiwiX2VmZmVjdHMiLCJfbmV4dEdDRnJhbWUiLCJfaGFybmVzc1BsdWdpbnMiLCJfY2FsbGJhY2tOYW1lcyIsIl9oYXJuZXNzIiwiaGFybmVzc1BsdWdpbiIsImhhcm5lc3MiLCJzcGxpY2UiLCJ0b0FycmF5IiwidiIsIm5hbWVzIiwiZnVuYyIsIl9yb3VuZFByZWNpc2UiLCJfYXJyYXlDb250YWluc0FueSIsInRvU2VhcmNoIiwidG9GaW5kIiwiX2xhenlSZW5kZXIiLCJzbGljZSIsIl9sYXp5IiwicmVuZGVyIiwiX2xhenlTYWZlUmVuZGVyIiwiYW5pbWF0aW9uIiwic3VwcHJlc3NFdmVudHMiLCJmb3JjZSIsIl9udW1lcmljSWZQb3NzaWJsZSIsIm4iLCJfcGFzc1Rocm91Z2giLCJkZWZhdWx0cyIsIl9zZXRLZXlmcmFtZURlZmF1bHRzIiwiYmFzZSIsInRvTWVyZ2UiLCJfbWVyZ2VEZWVwIiwiX2NvcHlFeGNsdWRpbmciLCJleGNsdWRpbmciLCJjb3B5IiwiX2luaGVyaXREZWZhdWx0cyIsImtleWZyYW1lcyIsImluaGVyaXQiLCJfZHAiLCJfYXJyYXlzTWF0Y2giLCJhMSIsImEyIiwiX2FkZExpbmtlZExpc3RJdGVtIiwiY2hpbGQiLCJmaXJzdFByb3AiLCJsYXN0UHJvcCIsInNvcnRCeSIsInByZXYiLCJfcHJldiIsIm5leHQiLCJfcmVtb3ZlRnJvbVBhcmVudCIsIm9ubHlJZlBhcmVudEhhc0F1dG9SZW1vdmUiLCJhdXRvUmVtb3ZlQ2hpbGRyZW4iLCJyZW1vdmUiLCJfYWN0IiwiX3VuY2FjaGUiLCJfZW5kIiwiX3N0YXJ0IiwiX2RpcnR5IiwiX3JlY2FjaGVBbmNlc3RvcnMiLCJ0b3RhbER1cmF0aW9uIiwiX2hhc05vUGF1c2VkQW5jZXN0b3JzIiwiX3RzIiwiX2VsYXBzZWRDeWNsZUR1cmF0aW9uIiwiX3JlcGVhdCIsIl9hbmltYXRpb25DeWNsZSIsIl90VGltZSIsIl9yRGVsYXkiLCJ0VGltZSIsImN5Y2xlRHVyYXRpb24iLCJ3aG9sZSIsImZsb29yIiwiX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUiLCJwYXJlbnRUaW1lIiwiX3REdXIiLCJfc2V0RW5kIiwiX3J0cyIsIl9hbGlnblBsYXloZWFkIiwidG90YWxUaW1lIiwic21vb3RoQ2hpbGRUaW1pbmciLCJfcG9zdEFkZENoZWNrcyIsIl9pbml0dGVkIiwicmF3VGltZSIsIl9jbGFtcCIsIl96VGltZSIsIl9hZGRUb1RpbWVsaW5lIiwic2tpcENoZWNrcyIsIl9wYXJzZVBvc2l0aW9uIiwiX2RlbGF5IiwidGltZVNjYWxlIiwiX3NvcnQiLCJfaXNGcm9tT3JGcm9tU3RhcnQiLCJfcmVjZW50IiwiX3Njcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwiU2Nyb2xsVHJpZ2dlciIsIl9hdHRlbXB0SW5pdFR3ZWVuIiwiX2luaXRUd2VlbiIsImxhenkiLCJmcmFtZSIsIl9wYXJlbnRQbGF5aGVhZElzQmVmb3JlU3RhcnQiLCJfbG9jayIsIl9yZW5kZXJaZXJvRHVyYXRpb25Ud2VlbiIsInByZXZSYXRpbyIsInJlcGVhdERlbGF5IiwiaXRlcmF0aW9uIiwicHJldkl0ZXJhdGlvbiIsIl95b3lvIiwicmVwZWF0UmVmcmVzaCIsImludmFsaWRhdGUiLCJfZnJvbSIsIl9zdGFydEF0IiwiX29uVXBkYXRlIiwiX2NhbGxiYWNrIiwiX3Byb20iLCJfZmluZE5leHRQYXVzZVR3ZWVuIiwicHJldlRpbWUiLCJfZmlyc3QiLCJfbGFzdCIsIl9zZXREdXJhdGlvbiIsInNraXBVbmNhY2hlIiwibGVhdmVQbGF5aGVhZCIsInJlcGVhdCIsImR1ciIsInRvdGFsUHJvZ3Jlc3MiLCJfb25VcGRhdGVUb3RhbER1cmF0aW9uIiwiVGltZWxpbmUiLCJfemVyb1Bvc2l0aW9uIiwiZW5kVGltZSIsInBlcmNlbnRBbmltYXRpb24iLCJsYWJlbHMiLCJyZWNlbnQiLCJjbGlwcGVkRHVyYXRpb24iLCJvZmZzZXQiLCJpc1BlcmNlbnQiLCJpc05hTiIsIl9jcmVhdGVUd2VlblR5cGUiLCJwYXJhbXMiLCJpc0xlZ2FjeSIsInZhcnNJbmRleCIsImlyVmFycyIsImltbWVkaWF0ZVJlbmRlciIsInJ1bkJhY2t3YXJkcyIsIlR3ZWVuIiwiX2NvbmRpdGlvbmFsUmV0dXJuIiwibWluIiwibWF4IiwiY2xhbXAiLCJfc2xpY2UiLCJfaXNBcnJheUxpa2UiLCJub25FbXB0eSIsIl9mbGF0dGVuIiwiYXIiLCJsZWF2ZVN0cmluZ3MiLCJhY2N1bXVsYXRvciIsIl9hY2N1bXVsYXRvciIsImFwcGx5IiwiX3dha2UiLCJlbCIsIm5hdGl2ZUVsZW1lbnQiLCJzaHVmZmxlIiwic29ydCIsInJhbmRvbSIsImRpc3RyaWJ1dGUiLCJlYXNlIiwiX3BhcnNlRWFzZSIsImlzRGVjaW1hbCIsInJhdGlvcyIsImF4aXMiLCJyYXRpb1giLCJyYXRpb1kiLCJlZGdlcyIsImRpc3RhbmNlcyIsIm9yaWdpblgiLCJvcmlnaW5ZIiwiaiIsIndyYXBBdCIsImdyaWQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJfaW52ZXJ0RWFzZSIsIl9yb3VuZE1vZGlmaWVyIiwicG93IiwicmF3Iiwic25hcCIsInNuYXBUbyIsInJhZGl1cyIsImlzMkQiLCJ2YWx1ZXMiLCJpbmNyZW1lbnQiLCJjbG9zZXN0IiwiZHgiLCJkeSIsInJvdW5kaW5nSW5jcmVtZW50IiwicmV0dXJuRnVuY3Rpb24iLCJwaXBlIiwiX2xlbiIsImZ1bmN0aW9ucyIsIl9rZXkiLCJyZWR1Y2UiLCJ1bml0aXplIiwibm9ybWFsaXplIiwibWFwUmFuZ2UiLCJfd3JhcEFycmF5Iiwid3JhcCIsInJhbmdlIiwid3JhcFlveW8iLCJ0b3RhbCIsIm51bXMiLCJpbk1pbiIsImluTWF4Iiwib3V0TWluIiwib3V0TWF4IiwiaW5SYW5nZSIsIm91dFJhbmdlIiwicHJvZ3Jlc3MiLCJtdXRhdGUiLCJtYXN0ZXIiLCJpbnRlcnBvbGF0b3JzIiwiaWwiLCJfYWRkUHJvcFR3ZWVuIiwiX3JlbmRlclByb3BUd2VlbnMiLCJfZ2V0TGFiZWxJbkRpcmVjdGlvbiIsImZyb21UaW1lIiwiYmFja3dhcmQiLCJkaXN0YW5jZSIsImxhYmVsIiwiZXhlY3V0ZUxhenlGaXJzdCIsImNhbGxiYWNrIiwiY2FsbGJhY2tTY29wZSIsIl9pbnRlcnJ1cHQiLCJzY3JvbGxUcmlnZ2VyIiwia2lsbCIsIl9xdWlja1R3ZWVuIiwiX2NyZWF0ZVBsdWdpbiIsImNvbmZpZyIsImlzRnVuYyIsIlBsdWdpbiIsImluc3RhbmNlRGVmYXVsdHMiLCJfa2lsbFByb3BUd2VlbnNPZiIsIm1vZGlmaWVyIiwiX2FkZFBsdWdpbk1vZGlmaWVyIiwicmF3VmFycyIsInN0YXRpY3MiLCJfMjU1IiwiX2NvbG9yTG9va3VwIiwiYXF1YSIsImxpbWUiLCJzaWx2ZXIiLCJibGFjayIsIm1hcm9vbiIsInRlYWwiLCJibHVlIiwibmF2eSIsIndoaXRlIiwib2xpdmUiLCJ5ZWxsb3ciLCJvcmFuZ2UiLCJncmF5IiwicHVycGxlIiwiZ3JlZW4iLCJyZWQiLCJwaW5rIiwiY3lhbiIsInRyYW5zcGFyZW50IiwiX2h1ZSIsImgiLCJtMSIsIm0yIiwic3BsaXRDb2xvciIsInRvSFNMIiwiZm9yY2VBbHBoYSIsImciLCJ3YXNIU0wiLCJwYXJzZUludCIsIk51bWJlciIsIl9jb2xvck9yZGVyRGF0YSIsIl9mb3JtYXRDb2xvcnMiLCJvcmRlck1hdGNoRGF0YSIsImNvbG9ycyIsInNoZWxsIiwic2hpZnQiLCJSZWdFeHAiLCJfaHNsRXhwIiwiY29tYmluZWQiLCJfdGlja2VyQWN0aXZlIiwiX2dldFRpbWUiLCJEYXRlIiwibm93IiwiX2xhZ1RocmVzaG9sZCIsIl9hZGp1c3RlZExhZyIsIl9zdGFydFRpbWUiLCJfbGFzdFVwZGF0ZSIsIl9nYXAiLCJfbmV4dFRpbWUiLCJfbGlzdGVuZXJzIiwiX2lkIiwiX3JlcSIsIl9yYWYiLCJfc2VsZiIsIl9kZWx0YSIsIl9pIiwiX3RpY2siLCJlbGFwc2VkIiwibWFudWFsIiwib3ZlcmxhcCIsImRpc3BhdGNoIiwidGljayIsImRlbHRhUmF0aW8iLCJmcHMiLCJ3YWtlIiwiZ3NhcFZlcnNpb25zIiwidmVyc2lvbiIsIkdyZWVuU29ja0dsb2JhbHMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzbGVlcCIsInNldFRpbWVvdXQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNsZWFyVGltZW91dCIsImxhZ1Ntb290aGluZyIsInRocmVzaG9sZCIsImFkanVzdGVkTGFnIiwiX2ZwcyIsIl9lYXNlTWFwIiwiX2N1c3RvbUVhc2VFeHAiLCJfcXVvdGVzRXhwIiwiX3BhcnNlT2JqZWN0SW5TdHJpbmciLCJ2YWwiLCJwYXJzZWRWYWwiLCJsYXN0SW5kZXhPZiIsIl92YWx1ZUluUGFyZW50aGVzZXMiLCJvcGVuIiwiY2xvc2UiLCJuZXN0ZWQiLCJfY29uZmlnRWFzZUZyb21TdHJpbmciLCJfQ0UiLCJfcHJvcGFnYXRlWW95b0Vhc2UiLCJpc1lveW8iLCJ5b3lvRWFzZSIsIl9lYXNlIiwiX3lFYXNlIiwiZGVmYXVsdEVhc2UiLCJfaW5zZXJ0RWFzZSIsImVhc2VJbiIsImVhc2VPdXQiLCJlYXNlSW5PdXQiLCJsb3dlcmNhc2VOYW1lIiwiX2Vhc2VJbk91dEZyb21PdXQiLCJfY29uZmlnRWxhc3RpYyIsImFtcGxpdHVkZSIsInBlcmlvZCIsInAxIiwicDIiLCJwMyIsImFzaW4iLCJfY29uZmlnQmFjayIsIm92ZXJzaG9vdCIsInBvd2VyIiwiTGluZWFyIiwiZWFzZU5vbmUiLCJub25lIiwibjEiLCJuMiIsIm4zIiwiU3RlcHBlZEVhc2UiLCJzdGVwcyIsImltbWVkaWF0ZVN0YXJ0IiwiQW5pbWF0aW9uIiwiSW5maW5pdHkiLCJ5b3lvIiwiX3Byb3RvIiwic3RhcnRUaW1lIiwiX3RvdGFsVGltZSIsIl9wdExvb2t1cCIsIl9wVGltZSIsIl9wcyIsInBhdXNlZCIsImluY2x1ZGVSZXBlYXRzIiwid3JhcFJlcGVhdHMiLCJnbG9iYWxUaW1lIiwic2VlayIsInJlc3RhcnQiLCJpbmNsdWRlRGVsYXkiLCJwbGF5IiwicmV2ZXJzZWQiLCJyZXZlcnNlIiwicGF1c2UiLCJhdFRpbWUiLCJyZXN1bWUiLCJpc0FjdGl2ZSIsImV2ZW50Q2FsbGJhY2siLCJ0aGVuIiwib25GdWxmaWxsZWQiLCJfcmVzb2x2ZSIsIl90aGVuIiwiX0FuaW1hdGlvbiIsIl90aGlzIiwic29ydENoaWxkcmVuIiwiX3Byb3RvMiIsImZyb21UbyIsImZyb21WYXJzIiwidG9WYXJzIiwiZGVsYXllZENhbGwiLCJzdGFnZ2VyVG8iLCJzdGFnZ2VyIiwib25Db21wbGV0ZUFsbCIsIm9uQ29tcGxldGVBbGxQYXJhbXMiLCJvbkNvbXBsZXRlUGFyYW1zIiwic3RhZ2dlckZyb20iLCJzdGFnZ2VyRnJvbVRvIiwidER1ciIsImNyb3NzaW5nU3RhcnQiLCJwcmV2UGF1c2VkIiwicGF1c2VUd2VlbiIsInByZXZTdGFydCIsInJld2luZGluZyIsImRvZXNXcmFwIiwib25SZXBlYXQiLCJfaGFzUGF1c2UiLCJfZm9yY2luZyIsIm9uVXBkYXRlIiwiYWRqdXN0ZWRUaW1lIiwiX3RoaXMyIiwiYWRkTGFiZWwiLCJnZXRDaGlsZHJlbiIsInR3ZWVucyIsInRpbWVsaW5lcyIsImlnbm9yZUJlZm9yZVRpbWUiLCJnZXRCeUlkIiwiYW5pbWF0aW9ucyIsInJlbW92ZUxhYmVsIiwia2lsbFR3ZWVuc09mIiwiX3RvdGFsVGltZTIiLCJhZGRQYXVzZSIsInJlbW92ZVBhdXNlIiwib25seUFjdGl2ZSIsImdldFR3ZWVuc09mIiwiX292ZXJ3cml0aW5nVHdlZW4iLCJwYXJzZWRUYXJnZXRzIiwiaXNHbG9iYWxUaW1lIiwiY2hpbGRyZW4iLCJfdGFyZ2V0cyIsInR3ZWVuVG8iLCJ0bCIsIl92YXJzIiwiX29uU3RhcnQiLCJvblN0YXJ0Iiwib25TdGFydFBhcmFtcyIsImluaXR0ZWQiLCJ0d2VlbkZyb21UbyIsImZyb21Qb3NpdGlvbiIsInRvUG9zaXRpb24iLCJuZXh0TGFiZWwiLCJhZnRlclRpbWUiLCJwcmV2aW91c0xhYmVsIiwiYmVmb3JlVGltZSIsImN1cnJlbnRMYWJlbCIsInNoaWZ0Q2hpbGRyZW4iLCJhZGp1c3RMYWJlbHMiLCJjbGVhciIsImluY2x1ZGVMYWJlbHMiLCJ1cGRhdGVSb290IiwiX2FkZENvbXBsZXhTdHJpbmdQcm9wVHdlZW4iLCJzZXR0ZXIiLCJzdHJpbmdGaWx0ZXIiLCJmdW5jUGFyYW0iLCJzdGFydE51bXMiLCJoYXNSYW5kb20iLCJmcCIsImN1cnJlbnRWYWx1ZSIsInBhcnNlZFN0YXJ0IiwiX3NldHRlclBsYWluIiwiX3NldHRlckZ1bmNXaXRoUGFyYW0iLCJfc2V0dGVyRnVuYyIsIl9yZW5kZXJCb29sZWFuIiwiX3JlbmRlclBsYWluIiwiX3Byb2Nlc3NWYXJzIiwiX3BhcnNlRnVuY09yU3RyaW5nIiwicHRMb29rdXAiLCJwcmlvcml0eSIsIm9uVXBkYXRlUGFyYW1zIiwiYXV0b1JldmVydCIsInByZXZTdGFydEF0IiwiZnVsbFRhcmdldHMiLCJhdXRvT3ZlcndyaXRlIiwiX292ZXJ3cml0ZSIsImNsZWFuVmFycyIsImdzRGF0YSIsImhhcm5lc3NWYXJzIiwib3ZlcndyaXR0ZW4iLCJfb3AiLCJfb25Jbml0IiwiX2FkZEFsaWFzZXNUb1ZhcnMiLCJwcm9wZXJ0eUFsaWFzZXMiLCJfc3RhZ2dlclR3ZWVuUHJvcHMiLCJfc3RhZ2dlclByb3BzVG9Ta2lwIiwiX0FuaW1hdGlvbjIiLCJza2lwSW5oZXJpdCIsIl90aGlzMyIsIl90aGlzMyR2YXJzIiwiY3VyVGFyZ2V0Iiwic3RhZ2dlckZ1bmMiLCJzdGFnZ2VyVmFyc1RvTWVyZ2UiLCJfcHJvdG8zIiwia2lsbGluZ1RhcmdldHMiLCJwcm9wVHdlZW5Mb29rdXAiLCJmaXJzdFBUIiwib3ZlcndyaXR0ZW5Qcm9wcyIsImN1ckxvb2t1cCIsImN1ck92ZXJ3cml0ZVByb3BzIiwib25SZXZlcnNlQ29tcGxldGUiLCJvblJldmVyc2VDb21wbGV0ZVBhcmFtcyIsIl9zZXR0ZXJBdHRyaWJ1dGUiLCJoYXNOb25EZXBlbmRlbnRSZW1haW5pbmciLCJvcCIsIl9zZXR0ZXJXaXRoTW9kaWZpZXIiLCJtU2V0IiwibXQiLCJwdDIiLCJmaXJzdCIsInJlbmRlcmVyIiwiX3Byb3RvNCIsIlR3ZWVuTWF4IiwiVHdlZW5MaXRlIiwiVGltZWxpbmVMaXRlIiwiVGltZWxpbmVNYXgiLCJfbGVuMiIsImFyZ3MiLCJfa2V5MiIsImdldFByb3BlcnR5IiwiZ2V0dGVyIiwiZm9ybWF0IiwicXVpY2tTZXR0ZXIiLCJzZXR0ZXJzIiwiaXNUd2VlbmluZyIsInJlZ2lzdGVyRWZmZWN0IiwiX3JlZjMiLCJlZmZlY3QiLCJwbHVnaW5zIiwiZXh0ZW5kVGltZWxpbmUiLCJwbHVnaW5OYW1lIiwicmVnaXN0ZXJFYXNlIiwicGFyc2VFYXNlIiwiZXhwb3J0Um9vdCIsImluY2x1ZGVEZWxheWVkQ2FsbHMiLCJpbnN0YWxsIiwiZWZmZWN0cyIsInRpY2tlciIsImdsb2JhbFRpbWVsaW5lIiwiZ2xvYmFscyIsImdldENhY2hlIiwic3VwcHJlc3NPdmVyd3JpdGVzIiwiX2dldFBsdWdpblByb3BUd2VlbiIsIl9hZGRNb2RpZmllcnMiLCJtb2RpZmllcnMiLCJfYnVpbGRNb2RpZmllclBsdWdpbiIsIlBvd2VyMCIsIlBvd2VyMSIsIlBvd2VyMiIsIlBvd2VyMyIsIlBvd2VyNCIsIlF1YWQiLCJDdWJpYyIsIlF1YXJ0IiwiUXVpbnQiLCJTdHJvbmciLCJFbGFzdGljIiwiQmFjayIsIkJvdW5jZSIsIlNpbmUiLCJFeHBvIiwiQ2lyYyIsImdzYXBXaXRoQ1NTIiwiVHdlZW5NYXhXaXRoQ1NTIiwicm9vdCIsInJlcXVpcmUiLCJTeW1ib2wiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXlFYWNoIiwiYXJyYXkiLCJpdGVyYXRlZSIsImJhc2VUaW1lcyIsImlzQXJndW1lbnRzIiwiaXNCdWZmZXIiLCJpc0luZGV4IiwiaXNUeXBlZEFycmF5Iiwib2JqZWN0UHJvdG8iLCJoYXNPd25Qcm9wZXJ0eSIsImFycmF5TGlrZUtleXMiLCJpbmhlcml0ZWQiLCJpc0FyciIsImlzQXJnIiwiaXNCdWZmIiwiaXNUeXBlIiwic2tpcEluZGV4ZXMiLCJTdHJpbmciLCJiYXNlRm9yT3duIiwiY3JlYXRlQmFzZUVhY2giLCJiYXNlRWFjaCIsImNyZWF0ZUJhc2VGb3IiLCJiYXNlRm9yIiwia2V5cyIsIm9iamVjdCIsImdldFJhd1RhZyIsIm9iamVjdFRvU3RyaW5nIiwibnVsbFRhZyIsInVuZGVmaW5lZFRhZyIsInN5bVRvU3RyaW5nVGFnIiwidG9TdHJpbmdUYWciLCJ1bmRlZmluZWQiLCJiYXNlR2V0VGFnIiwiaXNPYmplY3RMaWtlIiwiYXJnc1RhZyIsImJhc2VJc0FyZ3VtZW50cyIsImlzTGVuZ3RoIiwiYXJyYXlUYWciLCJib29sVGFnIiwiZGF0ZVRhZyIsImVycm9yVGFnIiwiZnVuY1RhZyIsIm1hcFRhZyIsIm51bWJlclRhZyIsIm9iamVjdFRhZyIsInJlZ2V4cFRhZyIsInNldFRhZyIsInN0cmluZ1RhZyIsIndlYWtNYXBUYWciLCJhcnJheUJ1ZmZlclRhZyIsImRhdGFWaWV3VGFnIiwiZmxvYXQzMlRhZyIsImZsb2F0NjRUYWciLCJpbnQ4VGFnIiwiaW50MTZUYWciLCJpbnQzMlRhZyIsInVpbnQ4VGFnIiwidWludDhDbGFtcGVkVGFnIiwidWludDE2VGFnIiwidWludDMyVGFnIiwidHlwZWRBcnJheVRhZ3MiLCJiYXNlSXNUeXBlZEFycmF5IiwiaXNQcm90b3R5cGUiLCJuYXRpdmVLZXlzIiwiYmFzZUtleXMiLCJiYXNlVW5hcnkiLCJpZGVudGl0eSIsImNhc3RGdW5jdGlvbiIsImlzQXJyYXlMaWtlIiwiZWFjaEZ1bmMiLCJmcm9tUmlnaHQiLCJjb2xsZWN0aW9uIiwiaXRlcmFibGUiLCJrZXlzRnVuYyIsImZyZWVHbG9iYWwiLCJnbG9iYWwiLCJuYXRpdmVPYmplY3RUb1N0cmluZyIsInRvU3RyaW5nIiwiaXNPd24iLCJ0YWciLCJ1bm1hc2tlZCIsIk1BWF9TQUZFX0lOVEVHRVIiLCJyZUlzVWludCIsIkN0b3IiLCJwcm90byIsIm92ZXJBcmciLCJmcmVlRXhwb3J0cyIsImZyZWVNb2R1bGUiLCJtb2R1bGVFeHBvcnRzIiwiZnJlZVByb2Nlc3MiLCJwcm9jZXNzIiwibm9kZVV0aWwiLCJ0eXBlcyIsImJpbmRpbmciLCJhcmciLCJmcmVlU2VsZiIsIkZ1bmN0aW9uIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJpc0Z1bmN0aW9uIiwic3R1YkZhbHNlIiwiQnVmZmVyIiwibmF0aXZlSXNCdWZmZXIiLCJpc09iamVjdCIsImFzeW5jVGFnIiwiZ2VuVGFnIiwicHJveHlUYWciLCJub2RlSXNUeXBlZEFycmF5IiwicHJlZml4ZXMiLCJ1cHBlciIsIm1lbW8iLCJwcmVmaXgiLCJfIiwiY2hhciIsIktleSIsInByZWZpeE1lbW96aWVkIiwicHJlZml4RGFzaGVkIiwiZGFzaCJdLCJzb3VyY2VSb290IjoiIn0=