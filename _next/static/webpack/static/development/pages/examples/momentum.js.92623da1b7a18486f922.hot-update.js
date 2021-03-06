webpackHotUpdate("static\\development\\pages\\examples\\momentum.js",{

/***/ "./pages/examples/momentum.js":
/*!************************************!*\
  !*** ./pages/examples/momentum.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "C:\\Users\\lansy\\Desktop\\Work\\hycoding\\teamhycoding.github.io\\pages\\examples\\momentum.js";




var Page = function Page() {
  var UNSPLASH_API_KEY = "66a4f8ef5dece777eadefe5ebaadeaa6602162c95da2f396e42ff77e1a074920";
  var UNSPLASH_URL = "https://api.unsplash.com/photos/random/?client_id=".concat(UNSPLASH_API_KEY, "&query=landscape&orientation=landscape");

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      background = _useState2[0],
      setBackground = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      city = _useState6[0],
      setCity = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      country = _useState8[0],
      setCountry = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState9, 2),
      hours = _useState10[0],
      setHours = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      _useState12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState11, 2),
      minutes = _useState12[0],
      setMinutes = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      _useState14 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState13, 2),
      username = _useState14[0],
      setUsername = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      _useState16 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState15, 2),
      usernameInput = _useState16[0],
      setUsernameInput = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      _useState18 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState17, 2),
      todoInput = _useState18[0],
      setTodoInput = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      _useState20 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState19, 2),
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
    localStorage.setItem("bg", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(imgObject));
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

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    loadBackground();
    setInterval(function () {
      var now = new Date();
      setHours(now.getHours());
      setMinutes(now.getMinutes());
    }, 1000);
    setUsername(localStorage.getItem("username"));

    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    localStorage.setItem("todos", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(todos));
  }, [todos]);
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1824684195", [background]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1824684195", [background]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Momentum Examples"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("link", {
    href: "/static/css/momentum/style.css",
    rel: "stylesheet",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1824684195", [background]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1824684195", [background]]]) + " " + "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1824684195", [background]]]) + " " + "js-clock clock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1824684195", [background]]]) + " " + "clock__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, hours, ":", minutes)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1824684195", [background]]]) + " " + "js-name name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, username === null ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      setUsername(usernameInput);
      localStorage.setItem("username", usernameInput);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1824684195", [background]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    type: "text",
    placeholder: "Type your name here",
    onChange: function onChange(event) {
      setUsernameInput(event.target.value);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1824684195", [background]]]) + " " + "name__input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1824684195", [background]]]) + " " + "name__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Hello, ", username)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1824684195", [background]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      setTodos([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(todos), [{
        id: new Date().getTime(),
        value: todoInput
      }]));
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1824684195", [background]]]) + " " + "js-to-do to-do",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
    placeholder: "Write a To Do here",
    type: "text",
    onChange: function onChange(event) {
      setTodoInput(event.target.value);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1824684195", [background]]]) + " " + "js-add-to-do to-do__add-to-do",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1824684195", [background]]]) + " " + "js-list list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, todos.map(function (todo) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
      key: todo.id,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1824684195", [background]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
      onClick: function onClick() {
        console.log(todos.filter(function (item) {
          return item.id !== todo.id;
        }));
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1824684195", [background]]]) + " " + "toDo__button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, "\u274C"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1824684195", [background]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, todo.value));
  })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1824684195", [background]]]) + " " + "js-location location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1824684195", [background]]]) + " " + "location__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, name, ", ", city, ", ", country)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1824684195", [background]]]) + " " + "js-weather weather",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1824684195", [background]]]) + " " + "weather__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1824684195",
    dynamic: [background],
    __self: this
  }, "body{background-image:linear-gradient( rgba(0,0,0,0.4), rgba(0,0,0,0.4) ), url(".concat(background, ");}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGFuc3lcXERlc2t0b3BcXFdvcmtcXGh5Y29kaW5nXFx0ZWFtaHljb2RpbmcuZ2l0aHViLmlvXFxwYWdlc1xcZXhhbXBsZXNcXG1vbWVudHVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9MeUIsQUFPOEMsd0dBQ3JDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbGFuc3lcXERlc2t0b3BcXFdvcmtcXGh5Y29kaW5nXFx0ZWFtaHljb2RpbmcuZ2l0aHViLmlvXFxwYWdlc1xcZXhhbXBsZXNcXG1vbWVudHVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgVU5TUExBU0hfQVBJX0tFWSA9XG4gICAgXCI2NmE0ZjhlZjVkZWNlNzc3ZWFkZWZlNWViYWFkZWFhNjYwMjE2MmM5NWRhMmYzOTZlNDJmZjc3ZTFhMDc0OTIwXCI7XG4gIGNvbnN0IFVOU1BMQVNIX1VSTCA9IGBodHRwczovL2FwaS51bnNwbGFzaC5jb20vcGhvdG9zL3JhbmRvbS8/Y2xpZW50X2lkPSR7VU5TUExBU0hfQVBJX0tFWX0mcXVlcnk9bGFuZHNjYXBlJm9yaWVudGF0aW9uPWxhbmRzY2FwZWA7XG4gIGNvbnN0IFtiYWNrZ3JvdW5kLCBzZXRCYWNrZ3JvdW5kXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtjaXR5LCBzZXRDaXR5XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtjb3VudHJ5LCBzZXRDb3VudHJ5XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtob3Vycywgc2V0SG91cnNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFttaW51dGVzLCBzZXRNaW51dGVzXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdXNlcm5hbWVJbnB1dCwgc2V0VXNlcm5hbWVJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RvZG9JbnB1dCwgc2V0VG9kb0lucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBsb2FkQmFja2dyb3VuZCA9ICgpID0+IHtcbiAgICBjb25zdCBzYXZlZEltYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJiZ1wiKTtcblxuICAgIGlmIChzYXZlZEltYWdlID09PSBudWxsKSB7XG4gICAgICBnZXRCYWNrZ3JvdW5kKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBhcnNlZEltYWdlID0gSlNPTi5wYXJzZShzYXZlZEltYWdlKTtcbiAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcblxuICAgICAgaWYgKHRvZGF5ID4gcGFyc2VkSW1hZ2UuZXhwaXJlc09uKSB7XG4gICAgICAgIGdldEJhY2tncm91bmQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEJhY2tncm91bmQocGFyc2VkSW1hZ2UudXJsKTtcbiAgICAgICAgc2V0TmFtZShwYXJzZWRJbWFnZS5uYW1lKTtcbiAgICAgICAgc2V0Q2l0eShwYXJzZWRJbWFnZS5jaXR5KTtcbiAgICAgICAgc2V0Q291bnRyeShwYXJzZWRJbWFnZS5jb3VudHJ5KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IHNhdmVCYWNrZ3JvdW5kID0gKGltYWdlVXJsLCBjaXR5LCBjb3VudHJ5LCBuYW1lKSA9PiB7XG4gICAgY29uc3Qgc2F2ZWRJbWFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmdcIik7XG5cbiAgICBpZiAoc2F2ZWRJbWFnZSAhPT0gbnVsbCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJiZ1wiKTtcbiAgICB9XG5cbiAgICBjb25zdCBleHBEYXRlID0gbmV3IERhdGUoKTtcbiAgICBleHBEYXRlLnNldERhdGUoZXhwRGF0ZS5nZXREYXRlKCkgKyAxKTtcblxuICAgIGNvbnN0IGltZ09iamVjdCA9IHtcbiAgICAgIHVybDogaW1hZ2VVcmwsXG4gICAgICBleHBpcmVzT246IGV4cERhdGUsXG4gICAgICBjaXR5LFxuICAgICAgY291bnRyeSxcbiAgICAgIG5hbWVcbiAgICB9O1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiZ1wiLCBKU09OLnN0cmluZ2lmeShpbWdPYmplY3QpKTtcbiAgICBsb2FkQmFja2dyb3VuZCgpO1xuICAgIHJldHVybjtcbiAgfTtcbiAgY29uc3QgZ2V0QmFja2dyb3VuZCA9ICgpID0+IHtcbiAgICBmZXRjaChVTlNQTEFTSF9VUkwpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBqc29uO1xuXG4gICAgICAgIGlmIChpbWFnZS51cmxzICYmIGltYWdlLnVybHMuZnVsbCAmJiBpbWFnZS5sb2NhdGlvbikge1xuICAgICAgICAgIGNvbnN0IGZ1bGxVcmwgPSBpbWFnZS51cmxzLmZ1bGw7XG4gICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBpbWFnZS5sb2NhdGlvbjtcbiAgICAgICAgICBjb25zdCBjaXR5ID0gbG9jYXRpb24uY2l0eTtcbiAgICAgICAgICBjb25zdCBjb3VudHJ5ID0gbG9jYXRpb24uY291bnRyeTtcbiAgICAgICAgICBjb25zdCBuYW1lID0gbG9jYXRpb24ubmFtZTtcblxuICAgICAgICAgIHNhdmVCYWNrZ3JvdW5kKGZ1bGxVcmwsIGNpdHksIGNvdW50cnksIG5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdldEJhY2tncm91bmQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICByZXR1cm47XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkQmFja2dyb3VuZCgpO1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgICAgIHNldEhvdXJzKG5vdy5nZXRIb3VycygpKTtcbiAgICAgIHNldE1pbnV0ZXMobm93LmdldE1pbnV0ZXMoKSk7XG4gICAgfSwgMTAwMCk7XG5cbiAgICBzZXRVc2VybmFtZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJuYW1lXCIpKTtcblxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKSB7XG4gICAgICBzZXRUb2RvcyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgfSwgW3RvZG9zXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Nb21lbnR1bSBFeGFtcGxlczwvdGl0bGU+XG4gICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2Nzcy9tb21lbnR1bS9zdHlsZS5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpzLWNsb2NrIGNsb2NrXCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNsb2NrX190ZXh0XCI+XG4gICAgICAgICAgICB7aG91cnN9OnttaW51dGVzfVxuICAgICAgICAgIDwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpzLW5hbWUgbmFtZVwiPlxuICAgICAgICAgIHt1c2VybmFtZSA9PT0gbnVsbCA/IChcbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgIG9uU3VibWl0PXtldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZSh1c2VybmFtZUlucHV0KTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJuYW1lXCIsIHVzZXJuYW1lSW5wdXQpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbmFtZSBoZXJlXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYW1lX19pbnB1dFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lSW5wdXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lX190ZXh0XCI+SGVsbG8sIHt1c2VybmFtZX08L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImpzLXRvLWRvIHRvLWRvXCJcbiAgICAgICAgICAgIG9uU3VibWl0PXtldmVudCA9PiB7XG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIHNldFRvZG9zKFtcbiAgICAgICAgICAgICAgICAuLi50b2RvcyxcbiAgICAgICAgICAgICAgICB7IGlkOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSwgdmFsdWU6IHRvZG9JbnB1dCB9XG4gICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwianMtYWRkLXRvLWRvIHRvLWRvX19hZGQtdG8tZG9cIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIGEgVG8gRG8gaGVyZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUb2RvSW5wdXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJqcy1saXN0IGxpc3RcIj5cbiAgICAgICAgICAgIHt0b2Rvcy5tYXAodG9kbyA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3RvZG8uaWR9PlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b0RvX19idXR0b25cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0b2Rvcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSB0b2RvLmlkKSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIOKdjFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+e3RvZG8udmFsdWV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJqcy1sb2NhdGlvbiBsb2NhdGlvblwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2NhdGlvbl9fdGV4dFwiPlxuICAgICAgICAgIHtuYW1lfSwge2NpdHl9LCB7Y291bnRyeX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImpzLXdlYXRoZXIgd2VhdGhlclwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3ZWF0aGVyX190ZXh0XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuNCksXG4gICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC40KVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHVybCgke2JhY2tncm91bmR9KTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\lansy\\Desktop\\Work\\hycoding\\teamhycoding.github.io\\pages\\examples\\momentum.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=momentum.js.92623da1b7a18486f922.hot-update.js.map