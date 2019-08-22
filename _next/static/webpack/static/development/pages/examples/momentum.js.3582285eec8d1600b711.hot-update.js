webpackHotUpdate("static\\development\\pages\\examples\\momentum.js",{

/***/ "./pages/examples/momentum.js":
/*!************************************!*\
  !*** ./pages/examples/momentum.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\lansy\\Desktop\\Work\\hycoding\\teamhycoding.github.io\\pages\\examples\\momentum.js";




var Page = function Page() {
  var UNSPLASH_API_KEY = "66a4f8ef5dece777eadefe5ebaadeaa6602162c95da2f396e42ff77e1a074920";
  var UNSPLASH_URL = "https://api.unsplash.com/photos/random/?client_id=".concat(UNSPLASH_API_KEY, "&query=landscape&orientation=landscape");

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      background = _useState2[0],
      setBackground = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      city = _useState6[0],
      setCity = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      country = _useState8[0],
      setCountry = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      hours = _useState10[0],
      setHours = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      minutes = _useState12[0],
      setMinutes = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      _useState14 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),
      username = _useState14[0],
      setUsername = _useState14[1];

  var loadBackground = function loadBackground() {
    var savedImage = localStorage.getItem("bg");

    if (savedImage === null) {
      getBackground();
    } else {
      var parsedImage = JSON.parse(savedImage);
      var today = new Date();

      if (today > parsedImage.expiresOn) {
        getBackground();
      } else {
        setBackground(parsedImage.url);
        setName(parsedImage.name);
        setCity(parsedImage.city);
        setCountry(parsedImage.country);
      }
    }
  };

  var saveBackground = function saveBackground(imageUrl, city, country, name) {
    var savedImage = localStorage.getItem("bg");

    if (savedImage !== null) {
      localStorage.removeItem("bg");
    }

    var expDate = new Date();
    expDate.setDate(expDate.getDate() + 1);
    var imgObject = {
      url: imageUrl,
      expiresOn: expDate,
      city: city,
      country: country,
      name: name
    };
    localStorage.setItem("bg", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(imgObject));
    loadBackground();
    return;
  };

  var getBackground = function getBackground() {
    fetch(UNSPLASH_URL).then(function (response) {
      return response.json();
    }).then(function (json) {
      var image = json;

      if (image.urls && image.urls.full && image.location) {
        var fullUrl = image.urls.full;
        var location = image.location;
        var _city = location.city;
        var _country = location.country;
        var _name = location.name;
        saveBackground(fullUrl, _city, _country, _name);
      } else {
        getBackground();
      }
    });
    return;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    loadBackground();
    setInterval(function () {
      var now = new Date();
      setHours(now.getHours());
      setMinutes(now.getMinutes());
    }, 1000);
    console.log(localStorage.getItem("username"));
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Momentum Examples"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("link", {
    href: "/static/css/momentum/style.css",
    rel: "stylesheet",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]) + " " + "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]) + " " + "js-clock clock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]) + " " + "clock__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, hours, ":", minutes)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]) + " " + "js-name name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]) + " " + "js-to-do to-do",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    placeholder: "Write a To Do here",
    type: "text",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]) + " " + "js-add-to-do to-do__add-to-do",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]) + " " + "js-list list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]) + " " + "js-location location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]) + " " + "location__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, name, ", ", city, ", ", country)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]) + " " + "js-weather weather",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]) + " " + "weather__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1824684195",
    dynamic: [background],
    __self: this
  }, "body{background-image:linear-gradient( rgba(0,0,0,0.4), rgba(0,0,0,0.4) ), url(".concat(background, ");}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGFuc3lcXERlc2t0b3BcXFdvcmtcXGh5Y29kaW5nXFx0ZWFtaHljb2RpbmcuZ2l0aHViLmlvXFxwYWdlc1xcZXhhbXBsZXNcXG1vbWVudHVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBIeUIsQUFPOEMsd0dBQ3JDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbGFuc3lcXERlc2t0b3BcXFdvcmtcXGh5Y29kaW5nXFx0ZWFtaHljb2RpbmcuZ2l0aHViLmlvXFxwYWdlc1xcZXhhbXBsZXNcXG1vbWVudHVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgVU5TUExBU0hfQVBJX0tFWSA9XG4gICAgXCI2NmE0ZjhlZjVkZWNlNzc3ZWFkZWZlNWViYWFkZWFhNjYwMjE2MmM5NWRhMmYzOTZlNDJmZjc3ZTFhMDc0OTIwXCI7XG4gIGNvbnN0IFVOU1BMQVNIX1VSTCA9IGBodHRwczovL2FwaS51bnNwbGFzaC5jb20vcGhvdG9zL3JhbmRvbS8/Y2xpZW50X2lkPSR7VU5TUExBU0hfQVBJX0tFWX0mcXVlcnk9bGFuZHNjYXBlJm9yaWVudGF0aW9uPWxhbmRzY2FwZWA7XG4gIGNvbnN0IFtiYWNrZ3JvdW5kLCBzZXRCYWNrZ3JvdW5kXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtjaXR5LCBzZXRDaXR5XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtjb3VudHJ5LCBzZXRDb3VudHJ5XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtob3Vycywgc2V0SG91cnNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFttaW51dGVzLCBzZXRNaW51dGVzXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGxvYWRCYWNrZ3JvdW5kID0gKCkgPT4ge1xuICAgIGNvbnN0IHNhdmVkSW1hZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJnXCIpO1xuXG4gICAgaWYgKHNhdmVkSW1hZ2UgPT09IG51bGwpIHtcbiAgICAgIGdldEJhY2tncm91bmQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcGFyc2VkSW1hZ2UgPSBKU09OLnBhcnNlKHNhdmVkSW1hZ2UpO1xuICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICBpZiAodG9kYXkgPiBwYXJzZWRJbWFnZS5leHBpcmVzT24pIHtcbiAgICAgICAgZ2V0QmFja2dyb3VuZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0QmFja2dyb3VuZChwYXJzZWRJbWFnZS51cmwpO1xuICAgICAgICBzZXROYW1lKHBhcnNlZEltYWdlLm5hbWUpO1xuICAgICAgICBzZXRDaXR5KHBhcnNlZEltYWdlLmNpdHkpO1xuICAgICAgICBzZXRDb3VudHJ5KHBhcnNlZEltYWdlLmNvdW50cnkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3Qgc2F2ZUJhY2tncm91bmQgPSAoaW1hZ2VVcmwsIGNpdHksIGNvdW50cnksIG5hbWUpID0+IHtcbiAgICBjb25zdCBzYXZlZEltYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJiZ1wiKTtcblxuICAgIGlmIChzYXZlZEltYWdlICE9PSBudWxsKSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImJnXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGV4cERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGV4cERhdGUuc2V0RGF0ZShleHBEYXRlLmdldERhdGUoKSArIDEpO1xuXG4gICAgY29uc3QgaW1nT2JqZWN0ID0ge1xuICAgICAgdXJsOiBpbWFnZVVybCxcbiAgICAgIGV4cGlyZXNPbjogZXhwRGF0ZSxcbiAgICAgIGNpdHksXG4gICAgICBjb3VudHJ5LFxuICAgICAgbmFtZVxuICAgIH07XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJnXCIsIEpTT04uc3RyaW5naWZ5KGltZ09iamVjdCkpO1xuICAgIGxvYWRCYWNrZ3JvdW5kKCk7XG4gICAgcmV0dXJuO1xuICB9O1xuICBjb25zdCBnZXRCYWNrZ3JvdW5kID0gKCkgPT4ge1xuICAgIGZldGNoKFVOU1BMQVNIX1VSTClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBjb25zdCBpbWFnZSA9IGpzb247XG5cbiAgICAgICAgaWYgKGltYWdlLnVybHMgJiYgaW1hZ2UudXJscy5mdWxsICYmIGltYWdlLmxvY2F0aW9uKSB7XG4gICAgICAgICAgY29uc3QgZnVsbFVybCA9IGltYWdlLnVybHMuZnVsbDtcbiAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGltYWdlLmxvY2F0aW9uO1xuICAgICAgICAgIGNvbnN0IGNpdHkgPSBsb2NhdGlvbi5jaXR5O1xuICAgICAgICAgIGNvbnN0IGNvdW50cnkgPSBsb2NhdGlvbi5jb3VudHJ5O1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBsb2NhdGlvbi5uYW1lO1xuXG4gICAgICAgICAgc2F2ZUJhY2tncm91bmQoZnVsbFVybCwgY2l0eSwgY291bnRyeSwgbmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2V0QmFja2dyb3VuZCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIHJldHVybjtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvYWRCYWNrZ3JvdW5kKCk7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblxuICAgICAgc2V0SG91cnMobm93LmdldEhvdXJzKCkpO1xuICAgICAgc2V0TWludXRlcyhub3cuZ2V0TWludXRlcygpKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIikpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Nb21lbnR1bSBFeGFtcGxlczwvdGl0bGU+XG4gICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2Nzcy9tb21lbnR1bS9zdHlsZS5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpzLWNsb2NrIGNsb2NrXCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNsb2NrX190ZXh0XCI+XG4gICAgICAgICAgICB7aG91cnN9OnttaW51dGVzfVxuICAgICAgICAgIDwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpzLW5hbWUgbmFtZVwiIC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwianMtdG8tZG8gdG8tZG9cIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJqcy1hZGQtdG8tZG8gdG8tZG9fX2FkZC10by1kb1wiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV3JpdGUgYSBUbyBEbyBoZXJlXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImpzLWxpc3QgbGlzdFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJqcy1sb2NhdGlvbiBsb2NhdGlvblwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2NhdGlvbl9fdGV4dFwiPlxuICAgICAgICAgIHtuYW1lfSwge2NpdHl9LCB7Y291bnRyeX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImpzLXdlYXRoZXIgd2VhdGhlclwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3ZWF0aGVyX190ZXh0XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuNCksXG4gICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC40KVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHVybCgke2JhY2tncm91bmR9KTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\lansy\\Desktop\\Work\\hycoding\\teamhycoding.github.io\\pages\\examples\\momentum.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=momentum.js.3582285eec8d1600b711.hot-update.js.map