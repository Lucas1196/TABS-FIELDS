var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabDemo = function (_React$Component) {
    _inherits(TabDemo, _React$Component);

    function TabDemo(props) {
        _classCallCheck(this, TabDemo);

        var _this = _possibleConstructorReturn(this, (TabDemo.__proto__ || Object.getPrototypeOf(TabDemo)).call(this, props));

        _this.tabsDraw = function () {
            var tabsNo = _this.state.tabsNumber;
            var tabsContainer = [];
            var tabNum = 1;
            var tabChar = 'a';
            for (var _i = 0; _i < tabsNo; _i++) {
                if (_i > 0) {
                    var it = (parseInt(tabChar, 36) + 1) % 36;
                    tabChar = (!it * 10 + it).toString(36);
                }
                tabsContainer.push(React.createElement(
                    "div",
                    { className: "tab", onClick: _this.beActive, key: _i },
                    tabChar,
                    tabNum
                ));
                tabNum += 3;
            }
            tabsContainer[0].props.className += " active";
            return tabsContainer;
        };

        _this.activeTab = function (el) {
            var tabs = document.getElementsByClassName("tab");
            tabs[0].className += " active";
        };

        _this.beActive = function (el) {
            var active = document.querySelector(".active");
            if (active !== null) {
                active.classList.remove("active");
            }
            el.target.className += " active";
        };

        _this.containerInputFunction = function () {
            var inputsNumber = _this.state.inputs;
            var inputsContainer = [];
            for (i = 0; i < inputsNumber; i++) {
                inputsContainer.push(React.createElement(
                    "div",
                    { className: "containerinputButton", key: i },
                    React.createElement(
                        "div",
                        { className: "subcontainer" },
                        _this.buttonsFunction(),
                        _this.inputFunction()
                    ),
                    _this.buttonsPlus()
                ));
            }
            return inputsContainer;
        };

        _this.inputFunction = function () {
            var inputsContent = [];
            for (j = 0; j < 1; j++) {
                inputsContent.push(React.createElement("input", { type: "text", className: "input", defaultValue: "Adrian", key: j }));
            }
            return inputsContent;
        };

        _this.removeSection = function () {
            var buttons = document.getElementsByClassName("minusButton");
            for (var k = 0; k < 1; k++) {
                // buttons[k].onclick = function() {
                buttons[k].parentElement.remove();
                // }
                // buttons[k].parentElement.remove(this);
            }
        };

        _this.buttonsFunction = function () {
            var buttonsContent = [];
            for (j = 0; j < 1; j++) {
                buttonsContent.push(React.createElement(
                    "button",
                    { onClick: _this.removeSection, className: "minusButton", key: j },
                    "-"
                ));
            }
            return buttonsContent;
        };

        _this.buttonsPlus = function () {
            var buttonsPlus = [];
            for (j = 0; j < 1; j++) {
                buttonsPlus.push(React.createElement(
                    "button",
                    { /*onClick={this.addSection}*/className: "plusButton", key: j },
                    "+"
                ));
            }
            return buttonsPlus;
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
                        { className: "col-12 col-md-6 input-side text-left" },
                        _this.containerInputFunction()
                    ),
                    React.createElement(
                        "div",
                        { className: "col-12 col-md-6 textarea-side text-right" },
                        React.createElement("textarea", { name: "textarea", className: "textarea-tab", cols: "30", rows: "10" })
                    )
                ));
            }
            return contentTabs;
        };

        _this.state = {
            tabsNumber: 4,
            inputs: 1
        };
        return _this;
    }
    //Function for Tabs (A1,B4,C7,D10,E13,F16,G19 etc..)

    //Move class active on click

    //Function for container-input-buttons

    //Function which add inputs on content page

    //Remove buttons from page section (actually remove the wrapper "ContainerInput")

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
                    this.tabsDraw()
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