var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs() {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this));

    _this.state = {
      activeIndex: 1
    };
    return _this;
  }

  _createClass(Tabs, [{
    key: 'handleOnClick',
    value: function handleOnClick(key) {
      this.setState({
        activeIndex: key
      });
    }
  }, {
    key: 'renderNavItem',
    value: function renderNavItem(key) {
      var tab = this.props.children[key];
      return React.createElement(
        'div',
        { key: key, onClick: this.handleOnClick.bind(this, key), className: this.state.activeIndex == key ? 'tab active' : 'tab' },
        tab.props.content
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var index = 0;
      var active = this.state.activeIndex;
      var tabs = React.Children.map(this.props.children, function (child) {
        return React.cloneElement(child, {
          active: child.props.active === true ? true : active == index++
        });
      });
      return React.createElement(
        'div',
        { className: this.props.className },
        React.createElement(
          'div',
          { className: 'tabs-nav' },
          Object.keys(this.props.children).map(this.renderNavItem.bind(this))
        ),
        React.createElement(
          'div',
          { className: 'tabs-content' },
          tabs
        )
      );
    }
  }]);

  return Tabs;
}(React.Component);

var Tab = function (_React$Component2) {
  _inherits(Tab, _React$Component2);

  function Tab(props) {
    _classCallCheck(this, Tab);

    var _this2 = _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).call(this, props));

    _this2.state = {
      activeIndex: 1,
      inputsNumber: 1,
      inputs: [" Input1", " Input2 "]
    };
    return _this2;
  }
  //Function for add new input when you push press


  _createClass(Tab, [{
    key: 'handleAdd',
    value: function handleAdd() {
      this.setState({
        inputs: [].concat(_toConsumableArray(this.state.inputs), [" New input "])
      });
    }
    //Function for change input value

  }, {
    key: 'handleChange',
    value: function handleChange(e, index) {
      this.state.inputs[index] = e.target.value;
      this.setState({
        inputs: this.state.inputs
      });
    }
    //Function for Remove input 

  }, {
    key: 'handleRemove',
    value: function handleRemove(index) {
      this.state.inputs.splice(index, 1);
      this.setState({
        inputs: this.state.inputs
      });
    }
  }, {
    key: 'contentTabs',
    value: function contentTabs() {
      var _this3 = this;

      var contentTabs = [];
      for (var k = 1; k < 2; k++) {
        contentTabs.push(React.createElement(
          'div',
          { className: 'tabContent row' },
          React.createElement(
            'div',
            { className: 'col-12 col-sm-12 col-md-6 input-side text-left' },
            React.createElement(
              'div',
              { className: 'addNewfield text-center' },
              React.createElement(
                'button',
                { onClick: function onClick(e) {
                    return _this3.handleAdd(e);
                  }, className: 'plusButton' },
                'Add new input'
              )
            ),
            this.state.inputs.map(function (input, index) {
              return React.createElement(
                'div',
                { className: 'subcontainer', key: index },
                React.createElement(
                  'button',
                  { onClick: function onClick() {
                      return _this3.handleRemove(index);
                    }, className: 'minusButton' },
                  '\u2501'
                ),
                React.createElement('input', { onChange: function onChange(e) {
                    return _this3.handleChange(e, index);
                  }, value: input, className: 'input' })
              );
            })
          ),
          React.createElement(
            'div',
            { className: 'col-12 col-sm-12 col-md-6 textarea-side text-right' },
            React.createElement('textarea', { name: 'textarea', className: 'textarea-tab', cols: '30', rows: '15', value: this.state.inputs })
          )
        ));
      }
      return contentTabs;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: "tab-panel" + (this.props.active ? ' active' : '') },
        this.contentTabs()
      );
    }
  }]);

  return Tab;
}(React.Component);

Tab.defaultProps = {
  active: false
};

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App(props) {
    _classCallCheck(this, App);

    var _this4 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this4.state = {
      activeIndex: 1
    };
    return _this4;
  }
  //Function for TABS NAME


  _createClass(App, [{
    key: 'tabsDraw',
    value: function tabsDraw() {
      var tabsNo = 5;
      var tabNum = 1;
      var tabChar = 'a';
      var total = [];
      for (var i = 1; i < tabsNo; i++) {
        total.push({ id: i, name: tabChar.toUpperCase() + tabNum });
        if (i > 0) {
          var it = (parseInt(tabChar, 36) + 1) % 36;
          tabChar = (!it * 10 + it).toString(36);
        }
        tabNum += 3;
      }
      return total;
    }
  }, {
    key: 'render',
    value: function render() {
      var tabs = this.tabsDraw();
      tabs = tabs.map(function (el, i) {
        return React.createElement(Tab, { id: el.id, key: i, content: el.name, title: el.name });
      }, this);
      return React.createElement(
        Tabs,
        { className: 'tabs-wrapper' },
        tabs
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));