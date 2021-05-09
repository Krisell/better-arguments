"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var BetterArguments = {
  build: function build(_ref) {
    var specs = _ref.specs,
        defaultOptions = _ref.defaultOptions,
        namedOptions = _ref.namedOptions;
    var options = Object.assign({}, defaultOptions || {});
    /**
     * Any object given will be treated as a options object.
     * Order-defined namedOptions only applies for intial primitive values.
     */

    specs.forEach(function (spec, index) {
      if (_typeof(spec) !== 'object' && typeof spec !== 'function') {
        if ((namedOptions || []).length >= index + 1) {
          options[namedOptions[index]] = spec;
        }
      }

      if (_typeof(spec) === 'object') {
        options = Object.assign(options, spec);
      }
    });
    return options;
  }
};
var _default = BetterArguments;
exports["default"] = _default;