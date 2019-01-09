'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var OptionsHandler = {
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
      if ((typeof spec === 'undefined' ? 'undefined' : _typeof(spec)) !== 'object' && typeof spec !== 'function') {
        if ((namedOptions || []).length >= index + 1) {
          options[namedOptions[index]] = spec;
        }
      }

      if ((typeof spec === 'undefined' ? 'undefined' : _typeof(spec)) === 'object') {
        options = Object.assign(options, spec);
      }
    });

    return options;
  }
};

exports.default = OptionsHandler;