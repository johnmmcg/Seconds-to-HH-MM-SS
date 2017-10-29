"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Converter = function (_React$Component) {
  _inherits(Converter, _React$Component);

  function Converter(props) {
    _classCallCheck(this, Converter);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      input: null,
      output: "00:00:00"
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleFormSubmit = _this.handleFormSubmit.bind(_this);
    return _this;
  }

  Converter.prototype.humanReadable = function humanReadable(seconds) {
    var HH = "00",
        MM = "00",
        SS = "00";

    if (seconds >= 359999) {
      return "99:59:59";
    } else {
      var hours = Math.floor(seconds / 3600);

      if (hours < 10) {
        HH = "0" + hours;
      } else {
        HH = hours;
      }

      var remainingMinutes = Math.floor(seconds / 60) - hours * 60;
      if (remainingMinutes < 10) {
        MM = "0" + remainingMinutes;
      } else {
        MM = remainingMinutes;
      }

      var remainingSeconds = seconds - hours * 3600 - remainingMinutes * 60;
      if (remainingSeconds < 10) {
        SS = "0" + remainingSeconds;
      } else {
        SS = remainingSeconds;
      }

      return HH + ":" + MM + ":" + SS;
    }
  };

  Converter.prototype.handleChange = function handleChange(e) {
    this.setState({ input: e.target.value });
    console.log(this.state.input);
  };

  Converter.prototype.handleFormSubmit = function handleFormSubmit(e) {
    e.preventDefault();
    var newOutput = this.humanReadable(this.state.input);
    this.setState({ output: newOutput });
  };

  Converter.prototype.render = function render() {
    return React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "h1",
        null,
        "SECONDS to HH:MM:SS"
      ),
      React.createElement(
        "form",
        { onSubmit: this.handleFormSubmit },
        React.createElement("input", { onChange: this.handleChange, type: "text", placeholder: "ENTER SECONDS" }),
        React.createElement("br", null),
        React.createElement(
          "button",
          { type: "submit" },
          "SUBMIT"
        )
      ),
      React.createElement(
        "h1",
        null,
        this.state.output
      )
    );
  };

  return Converter;
}(React.Component);

ReactDOM.render(React.createElement(Converter, null), document.getElementById('myinput'));