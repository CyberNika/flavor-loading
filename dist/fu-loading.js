'use strict';

//  ==================================================
//  Component: Loading
//
//  Props: theme: string, transparent: boolen
//
//  Include: LoadingItem
//
//  Theme: Circle(&, &Bounce, &Zoomfade) Rect(&Series) Square
//
//  Description: Jsx for Loading
//
//  TODO:
//  ==================================================

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadingItem = {};

/* LoadingItem.Circle */
LoadingItem.Circle = (function (_React$Component) {
  _inherits(ItemClass, _React$Component);

  function ItemClass() {
    _classCallCheck(this, ItemClass);

    _get(Object.getPrototypeOf(ItemClass.prototype), "constructor", this).call(this);
  }

  _createClass(ItemClass, [{
    key: "render",
    value: function render() {
      return React.createElement("div", { className: "spinner circle" });
    }
  }]);

  return ItemClass;
})(React.Component);

/* LoadingItem.CircleFadeout */
LoadingItem.CircleFadeout = (function (_React$Component2) {
  _inherits(ItemClass, _React$Component2);

  function ItemClass() {
    _classCallCheck(this, ItemClass);

    _get(Object.getPrototypeOf(ItemClass.prototype), "constructor", this).call(this);
  }

  _createClass(ItemClass, [{
    key: "render",
    value: function render() {
      return React.createElement("div", { className: "spinner circle-fadeout" });
    }
  }]);

  return ItemClass;
})(React.Component);

/* LoadingItem.CircleZoomfade */
LoadingItem.CircleZoomfade = (function (_React$Component3) {
  _inherits(ItemClass, _React$Component3);

  function ItemClass() {
    _classCallCheck(this, ItemClass);

    _get(Object.getPrototypeOf(ItemClass.prototype), "constructor", this).call(this);
  }

  _createClass(ItemClass, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "spinner circle-zoomfade" },
        React.createElement("span", { className: "item-0" }),
        React.createElement("span", { className: "item-1" })
      );
    }
  }]);

  return ItemClass;
})(React.Component);

/* LoadingItem.BallBounce */
LoadingItem.BallBounce = (function (_React$Component4) {
  _inherits(ItemClass, _React$Component4);

  function ItemClass() {
    _classCallCheck(this, ItemClass);

    _get(Object.getPrototypeOf(ItemClass.prototype), "constructor", this).call(this);
  }

  _createClass(ItemClass, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "spinner ball-bounce" },
        React.createElement("span", { className: "item-0" }),
        React.createElement("span", { className: "item-1" }),
        React.createElement("span", { className: "item-2" })
      );
    }
  }]);

  return ItemClass;
})(React.Component);

/* LoadingItem.Rect */
LoadingItem.Rect = (function (_React$Component5) {
  _inherits(ItemClass, _React$Component5);

  function ItemClass() {
    _classCallCheck(this, ItemClass);

    _get(Object.getPrototypeOf(ItemClass.prototype), "constructor", this).call(this);
  }

  _createClass(ItemClass, [{
    key: "render",
    value: function render() {
      return React.createElement("div", { className: "spinner rect" });
    }
  }]);

  return ItemClass;
})(React.Component);

/* LoadingItem.RectSeries */
LoadingItem.RectSeries = (function (_React$Component6) {
  _inherits(ItemClass, _React$Component6);

  function ItemClass() {
    _classCallCheck(this, ItemClass);

    _get(Object.getPrototypeOf(ItemClass.prototype), "constructor", this).call(this);
  }

  _createClass(ItemClass, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "spinner rect-series" },
        React.createElement("span", { className: "item-0" }),
        React.createElement("span", { className: "item-1" }),
        React.createElement("span", { className: "item-2" }),
        React.createElement("span", { className: "item-3" }),
        React.createElement("span", { className: "item-4" })
      );
    }
  }]);

  return ItemClass;
})(React.Component);

/* LoadingItem.Square */
LoadingItem.Square = (function (_React$Component7) {
  _inherits(ItemClass, _React$Component7);

  function ItemClass() {
    _classCallCheck(this, ItemClass);

    _get(Object.getPrototypeOf(ItemClass.prototype), "constructor", this).call(this);
  }

  _createClass(ItemClass, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "square" },
        React.createElement(
          "div",
          null,
          "square"
        ),
        React.createElement(
          "div",
          null,
          this.props.text
        )
      );
    }
  }]);

  return ItemClass;
})(React.Component);

/* Loading */

var Loading = (function (_React$Component8) {
  _inherits(Loading, _React$Component8);

  function Loading() {
    _classCallCheck(this, Loading);

    _get(Object.getPrototypeOf(Loading.prototype), "constructor", this).call(this);
    this.state = {};
  }

  _createClass(Loading, [{
    key: "render",
    value: function render() {
      var loadingItem;
      var theme = this.props.theme;
      var loadingClass = this.props.transparent || this.props.transparent === undefined ? "loading trans" : "loading";

      switch (theme) {
        case 'circle':
          loadingItem = React.createElement(LoadingItem.Circle, null);
          break;
        case 'circle-fadeout':
          loadingItem = React.createElement(LoadingItem.CircleFadeout, null);
          break;
        case 'circle-zoomfade':
          loadingItem = React.createElement(LoadingItem.CircleZoomfade, null);
          break;
        case 'ball-bounce':
          loadingItem = React.createElement(LoadingItem.BallBounce, null);
          break;
        case 'rect':
          loadingItem = React.createElement(LoadingItem.Rect, null);
          break;
        case 'rect-series':
          loadingItem = React.createElement(LoadingItem.RectSeries, null);
          break;
        default:
          loadingItem = React.createElement(LoadingItem.Circle, null);
      }

      return React.createElement(
        "div",
        { className: loadingClass },
        loadingItem
      );
    }
  }]);

  return Loading;
})(React.Component);