"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateQuestions = function (_Component) {
  _inherits(CreateQuestions, _Component);

  function CreateQuestions() {
    _classCallCheck(this, CreateQuestions);

    return _possibleConstructorReturn(this, (CreateQuestions.__proto__ || Object.getPrototypeOf(CreateQuestions)).apply(this, arguments));
  }

  _createClass(CreateQuestions, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "App" },
        _react2.default.createElement(
          "div",
          { className: "form-horizontal" },
          _react2.default.createElement(
            "div",
            { className: "form-group" },
            _react2.default.createElement(
              "div",
              { className: "row" },
              _react2.default.createElement(
                "div",
                { className: "col-md-2" },
                _react2.default.createElement(
                  "label",
                  { htmlFor: "test", className: "col-xs-offset-1" },
                  "Learner ID:"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col-md-4" },
                _react2.default.createElement("input", { type: "text", className: "form-control" })
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "form-group" },
            _react2.default.createElement(
              "div",
              { className: "btn-adn" },
              _react2.default.createElement(
                "button",
                { "data-ng-disabled": "registrationInProcess", type: "submit", className: "btn btn-primary btn-sm loading-demo mr5", style: { marginLeft: '200px', fontSize: '14px' } },
                _react2.default.createElement("span", { className: "glyphicon glyphicon-ok" }),
                " Register"
              )
            )
          )
        )
      );
    }
  }]);

  return CreateQuestions;
}(_react.Component);

exports.default = CreateQuestions;