var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabDemo = function (_React$Component) {
    _inherits(TabDemo, _React$Component);

    function TabDemo() {
        _classCallCheck(this, TabDemo);

        var _this = _possibleConstructorReturn(this, (TabDemo.__proto__ || Object.getPrototypeOf(TabDemo)).call(this));

        _this.tabsFunction = function () {
            var tabs = _this.state.tabsNumber;
            var tabsContainer = [];
            for (var _i = 0; _i < tabs; _i++) {
                tabsContainer.push(React.createElement("div", { className: "tab", key: _i }));
                window.onload = function () {
                    var tabsVariable = document.getElementsByClassName("tab");
                    tabsVariable[0].className += " active";
                    var startingNum = 1;
                    for (var k = 0; k < tabsVariable.length; k++) {
                        tabsVariable[k].addEventListener("click", function () {
                            var current = document.getElementsByClassName("active");
                            current[0].className = current[0].className.replace(" active", "");
                            this.className += " active";
                        });
                        for (j = 0; j < 26; j++) {
                            tabsVariable[j].innerHTML = (j + 10).toString(36) + startingNum;
                            startingNum += 3;
                        }
                    }
                };
            }
            return tabsContainer;
        };

        _this.containerInputFunction = function () {
            var inputsNumber = _this.state.inputs;
            var inputsContainer = [];
            for (i = 0; i < inputsNumber; i++) {
                inputsContainer.push(React.createElement(
                    "div",
                    { className: "container-inputButton", key: i },
                    _this.buttonsFunction(),
                    _this.inputFunction()
                ));
            }
            return inputsContainer;
        };

        _this.inputFunction = function () {
            var inputsContent = [];
            for (j = 0; j < 1; j++) {
                inputsContent.push(React.createElement("input", { type: "text", className: "input", key: j }));
            }
            return inputsContent;
        };

        _this.removeSection = function () {
            var buttons = document.getElementsByClassName("toggleInput");
            for (var k = 0; k < buttons.length; k++) {
                buttons[k].addEventListener("click", function () {
                    this.parentElement.remove();
                });
            }
        };

        _this.buttonsFunction = function () {
            var buttonsContent = [];
            for (j = 0; j < 1; j++) {
                buttonsContent.push(React.createElement(
                    "button",
                    { onClick: _this.removeSection, className: "toggleInput", key: j },
                    "-"
                ));
            }
            return buttonsContent;
        };

        _this.contentTabs = function () {
            var content = _this.state.tabsNumber;
            var contentTabs = [];
            for (var k = 0; k < content; k++) {
                contentTabs.push(React.createElement(
                    "div",
                    { className: "tabsContent row", key: k },
                    React.createElement(
                        "div",
                        { className: "col-12 col-md-6 input-side" },
                        _this.containerInputFunction()
                    ),
                    React.createElement(
                        "div",
                        { className: "col-12 col-md-6 textarea-side" },
                        React.createElement("textarea", { name: "textarea", className: "textarea-tab", cols: "30", rows: "10" })
                    )
                ));
            }
            return contentTabs;
        };

        _this.state = {
            tabsNumber: 4,
            inputs: 5
        };
        return _this;
    }
    //Function for container-input-buttons

    //Function which add inputs on content page

    //Remove section ContainerInput

    //Function which add buttons on content page

    //Function which add content on page


    _createClass(TabDemo, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "inner-root row" },
                React.createElement(
                    "div",
                    { className: "tabs col-12" },
                    this.tabsFunction()
                ),
                React.createElement(
                    "div",
                    { className: "content-tabs col-12" },
                    this.contentTabs()
                )
            );
        }
    }]);

    return TabDemo;
}(React.Component);

ReactDOM.render(React.createElement(TabDemo, null), document.getElementById('root'));