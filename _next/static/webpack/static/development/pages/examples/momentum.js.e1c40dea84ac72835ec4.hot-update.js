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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\lansy\\Desktop\\Work\\hycoding\\teamhycoding.github.io\\pages\\examples\\momentum.js";



var Page = function Page() {
  var UNSPLASH_API_KEY = "b491e86a6957b396f44f1e15e41d3d242e17aa982607f161b95defd195c7f4dd";
  var UNSPLASH_URL = "https://api.unsplash.com/photos/random/?client=".concat(UNSPLASH_API_KEY, "&query=landscape&orientation=landscape");

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      background = _useState2[0],
      setBackground = _useState2[1];

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
        var city = location.city;
        var country = location.country;
        var name = location.name;
        saveBackground(fullUrl, city, country, name);
      } else {
        getBackground();
      }
    });
    return;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    loadBackground();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Momentum Examples"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("link", {
    href: "/static/css/momentum/style.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    className: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "js-clock clock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    className: "clock__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "00:00")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "js-name name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
    className: "js-to-do to-do",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    className: "js-add-to-do to-do__add-to-do",
    placeholder: "Write a To Do here",
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    className: "js-list list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "js-location location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "location__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "js-weather weather",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "weather__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=momentum.js.e1c40dea84ac72835ec4.hot-update.js.map