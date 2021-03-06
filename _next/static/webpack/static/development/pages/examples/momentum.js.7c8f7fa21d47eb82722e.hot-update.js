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

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      _useState16 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState15, 2),
      usernameInput = _useState16[0],
      setUsernameInput = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      _useState18 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState17, 2),
      todoInput = _useState18[0],
      setTodoInput = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState20 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState19, 2),
      todos = _useState20[0],
      setTodos = _useState20[1];

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

  var addTodo = function addTodo(todo) {
    console.log(todo);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    loadBackground();
    setInterval(function () {
      var now = new Date();
      setHours(now.getHours());
      setMinutes(now.getMinutes());
    }, 1000);
    setUsername(localStorage.getItem("username"));

    if (localStorage.getItem("todos")) {
      setTodos(localStorage.getItem("todos"));
    }
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Momentum Examples"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("link", {
    href: "/static/css/momentum/style.css",
    rel: "stylesheet",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]) + " " + "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]) + " " + "js-clock clock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]) + " " + "clock__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, hours, ":", minutes)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]) + " " + "js-name name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, username === null ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      setUsername(usernameInput);
      localStorage.setItem("username", usernameInput);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "text",
    placeholder: "Type your name here",
    onChange: function onChange(event) {
      setUsernameInput(event.target.value);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]) + " " + "name__input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]) + " " + "name__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "Hello, ", username)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      todos.push(todoInput);
      localStorage.setItem(todos);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]) + " " + "js-to-do to-do",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    placeholder: "Write a To Do here",
    type: "text",
    onChange: function onChange(event) {
      setTodoInput(event.target.value);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]) + " " + "js-add-to-do to-do__add-to-do",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]) + " " + "js-list list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]) + " " + "js-location location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]) + " " + "location__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, name, ", ", city, ", ", country)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]) + " " + "js-weather weather",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1824684195", [background]]]) + " " + "weather__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1824684195",
    dynamic: [background],
    __self: this
  }, "body{background-image:linear-gradient( rgba(0,0,0,0.4), rgba(0,0,0,0.4) ), url(".concat(background, ");}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGFuc3lcXERlc2t0b3BcXFdvcmtcXGh5Y29kaW5nXFx0ZWFtaHljb2RpbmcuZ2l0aHViLmlvXFxwYWdlc1xcZXhhbXBsZXNcXG1vbWVudHVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1LeUIsQUFPOEMsd0dBQ3JDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbGFuc3lcXERlc2t0b3BcXFdvcmtcXGh5Y29kaW5nXFx0ZWFtaHljb2RpbmcuZ2l0aHViLmlvXFxwYWdlc1xcZXhhbXBsZXNcXG1vbWVudHVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgVU5TUExBU0hfQVBJX0tFWSA9XG4gICAgXCI2NmE0ZjhlZjVkZWNlNzc3ZWFkZWZlNWViYWFkZWFhNjYwMjE2MmM5NWRhMmYzOTZlNDJmZjc3ZTFhMDc0OTIwXCI7XG4gIGNvbnN0IFVOU1BMQVNIX1VSTCA9IGBodHRwczovL2FwaS51bnNwbGFzaC5jb20vcGhvdG9zL3JhbmRvbS8/Y2xpZW50X2lkPSR7VU5TUExBU0hfQVBJX0tFWX0mcXVlcnk9bGFuZHNjYXBlJm9yaWVudGF0aW9uPWxhbmRzY2FwZWA7XG4gIGNvbnN0IFtiYWNrZ3JvdW5kLCBzZXRCYWNrZ3JvdW5kXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtjaXR5LCBzZXRDaXR5XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtjb3VudHJ5LCBzZXRDb3VudHJ5XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtob3Vycywgc2V0SG91cnNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFttaW51dGVzLCBzZXRNaW51dGVzXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdXNlcm5hbWVJbnB1dCwgc2V0VXNlcm5hbWVJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RvZG9JbnB1dCwgc2V0VG9kb0lucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBsb2FkQmFja2dyb3VuZCA9ICgpID0+IHtcbiAgICBjb25zdCBzYXZlZEltYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJiZ1wiKTtcblxuICAgIGlmIChzYXZlZEltYWdlID09PSBudWxsKSB7XG4gICAgICBnZXRCYWNrZ3JvdW5kKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBhcnNlZEltYWdlID0gSlNPTi5wYXJzZShzYXZlZEltYWdlKTtcbiAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcblxuICAgICAgaWYgKHRvZGF5ID4gcGFyc2VkSW1hZ2UuZXhwaXJlc09uKSB7XG4gICAgICAgIGdldEJhY2tncm91bmQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEJhY2tncm91bmQocGFyc2VkSW1hZ2UudXJsKTtcbiAgICAgICAgc2V0TmFtZShwYXJzZWRJbWFnZS5uYW1lKTtcbiAgICAgICAgc2V0Q2l0eShwYXJzZWRJbWFnZS5jaXR5KTtcbiAgICAgICAgc2V0Q291bnRyeShwYXJzZWRJbWFnZS5jb3VudHJ5KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IHNhdmVCYWNrZ3JvdW5kID0gKGltYWdlVXJsLCBjaXR5LCBjb3VudHJ5LCBuYW1lKSA9PiB7XG4gICAgY29uc3Qgc2F2ZWRJbWFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmdcIik7XG5cbiAgICBpZiAoc2F2ZWRJbWFnZSAhPT0gbnVsbCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJiZ1wiKTtcbiAgICB9XG5cbiAgICBjb25zdCBleHBEYXRlID0gbmV3IERhdGUoKTtcbiAgICBleHBEYXRlLnNldERhdGUoZXhwRGF0ZS5nZXREYXRlKCkgKyAxKTtcblxuICAgIGNvbnN0IGltZ09iamVjdCA9IHtcbiAgICAgIHVybDogaW1hZ2VVcmwsXG4gICAgICBleHBpcmVzT246IGV4cERhdGUsXG4gICAgICBjaXR5LFxuICAgICAgY291bnRyeSxcbiAgICAgIG5hbWVcbiAgICB9O1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiZ1wiLCBKU09OLnN0cmluZ2lmeShpbWdPYmplY3QpKTtcbiAgICBsb2FkQmFja2dyb3VuZCgpO1xuICAgIHJldHVybjtcbiAgfTtcbiAgY29uc3QgZ2V0QmFja2dyb3VuZCA9ICgpID0+IHtcbiAgICBmZXRjaChVTlNQTEFTSF9VUkwpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBqc29uO1xuXG4gICAgICAgIGlmIChpbWFnZS51cmxzICYmIGltYWdlLnVybHMuZnVsbCAmJiBpbWFnZS5sb2NhdGlvbikge1xuICAgICAgICAgIGNvbnN0IGZ1bGxVcmwgPSBpbWFnZS51cmxzLmZ1bGw7XG4gICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBpbWFnZS5sb2NhdGlvbjtcbiAgICAgICAgICBjb25zdCBjaXR5ID0gbG9jYXRpb24uY2l0eTtcbiAgICAgICAgICBjb25zdCBjb3VudHJ5ID0gbG9jYXRpb24uY291bnRyeTtcbiAgICAgICAgICBjb25zdCBuYW1lID0gbG9jYXRpb24ubmFtZTtcblxuICAgICAgICAgIHNhdmVCYWNrZ3JvdW5kKGZ1bGxVcmwsIGNpdHksIGNvdW50cnksIG5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdldEJhY2tncm91bmQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICByZXR1cm47XG4gIH07XG4gIGNvbnN0IGFkZFRvZG8gPSB0b2RvID0+IHtcbiAgICBjb25zb2xlLmxvZyh0b2RvKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvYWRCYWNrZ3JvdW5kKCk7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblxuICAgICAgc2V0SG91cnMobm93LmdldEhvdXJzKCkpO1xuICAgICAgc2V0TWludXRlcyhub3cuZ2V0TWludXRlcygpKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIHNldFVzZXJuYW1lKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIikpO1xuXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpIHtcbiAgICAgIHNldFRvZG9zKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TW9tZW50dW0gRXhhbXBsZXM8L3RpdGxlPlxuICAgICAgICA8bGluayBocmVmPVwiL3N0YXRpYy9jc3MvbW9tZW50dW0vc3R5bGUuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqcy1jbG9jayBjbG9ja1wiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjbG9ja19fdGV4dFwiPlxuICAgICAgICAgICAge2hvdXJzfTp7bWludXRlc31cbiAgICAgICAgICA8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqcy1uYW1lIG5hbWVcIj5cbiAgICAgICAgICB7dXNlcm5hbWUgPT09IG51bGwgPyAoXG4gICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICBvblN1Ym1pdD17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc2V0VXNlcm5hbWUodXNlcm5hbWVJbnB1dCk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VybmFtZVwiLCB1c2VybmFtZUlucHV0KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG5hbWUgaGVyZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmFtZV9faW5wdXRcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUlucHV0KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZV9fdGV4dFwiPkhlbGxvLCB7dXNlcm5hbWV9PC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJqcy10by1kbyB0by1kb1wiXG4gICAgICAgICAgICBvblN1Ym1pdD17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICB0b2Rvcy5wdXNoKHRvZG9JbnB1dCk7XG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRvZG9zKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImpzLWFkZC10by1kbyB0by1kb19fYWRkLXRvLWRvXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSBhIFRvIERvIGhlcmVcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VG9kb0lucHV0KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwianMtbGlzdCBsaXN0XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImpzLWxvY2F0aW9uIGxvY2F0aW9uXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvY2F0aW9uX190ZXh0XCI+XG4gICAgICAgICAge25hbWV9LCB7Y2l0eX0sIHtjb3VudHJ5fVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwianMtd2VhdGhlciB3ZWF0aGVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndlYXRoZXJfX3RleHRcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC40KSxcbiAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjQpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgdXJsKCR7YmFja2dyb3VuZH0pO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl19 */\n/*@ sourceURL=C:\\Users\\lansy\\Desktop\\Work\\hycoding\\teamhycoding.github.io\\pages\\examples\\momentum.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=momentum.js.7c8f7fa21d47eb82722e.hot-update.js.map