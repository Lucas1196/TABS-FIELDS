class Tabs extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIndex : 1,
    };
  }
  handleOnClick(key) {
    this.setState({
      activeIndex : key,
    });
  }
  renderNavItem(key) {
    let tab = this.props.children[key];
    return (
      <div key={ key } onClick={ this.handleOnClick.bind(this, key) } className={ this.state.activeIndex == key ? 'tab active' : 'tab'}>
        {tab.props.content}
      </div>
    );
  }
  render() {
    let index = 0;
    let active = this.state.activeIndex;
    let tabs = React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, {
        active : child.props.active === true ? true : (active == index++)
      });
    });
    return (
      <div className = { this.props.className }>
          <div className="tabs-nav">
            { Object.keys(this.props.children).map(this.renderNavItem.bind(this)) }
          </div>
          <div className="tabs-content">
            { tabs }
          </div>
      </div>
    )
  }
}
class Tab extends React.Component {
  render() {
    return (
      <div className={ "tab-panel" + (this.props.active ? ' active' : '') }>
        { this.props.children }
      </div>
    )
  }
}
Tab.defaultProps = { 
  active : false
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex : 1,
      value: 'Adrian',
      inputsNumber: 2,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }
  contentTabs() {
    let contentTabs = [];
    for ( let k = 1; k < 2; k++ ) {
      contentTabs.push(
        <div className="tabContent row">
          <div className="col-12 col-sm-6 input-side text-left">
            <div className="addNewfield text-center">
              {this.buttonPlus()}
            </div>
            {this.containerInputFunction()}
          </div>
          <div className="col-12 col-sm-6 textarea-side text-right">
            <textarea name="textarea" className="textarea-tab" cols="30" rows="15" value={this.state.value}></textarea>
          </div>
        </div>
      )
    }
    return contentTabs;
  }
  //Function for container-input-buttons
  containerInputFunction() {
    let inputsContainer = [];
    for ( i = 0; i < this.state.inputsNumber; i++ ) {
      inputsContainer.push(
        <div className="subcontainer" key={i}>
          {this.buttonsFunction()}
          {this.inputFunction()}
        </div>
      )
    }
    return inputsContainer;
  }
  //Function which add inputs on content page
  inputFunction() {
    state = {};
    var inputsContent = [];
        inputsContent.push(
          <input type='text' value={this.state.value} onChange={this.handleChange} className="input" />
        );
    return inputsContent;
  }
  //Function which add buttons on content page
  buttonsFunction() {
    let buttonsContent = [];
        buttonsContent.push(<button onClick={this.removeSection} className="minusButton">-</button>)
    return buttonsContent;
  }
  //Function which add button plus on page
  buttonPlus() {
    let buttonsPlus = [];
        buttonsPlus.push(<button className="plusButton">Add new field</button>)
    return buttonsPlus;
  }
  //Function for removeInput SUBCONTAINER
  removeSection() {
    let buttons = document.getElementsByClassName("minusButton");
    for( let k = 0; k < 1; k++ ) {
      buttons[k].parentElement.remove();
    }
  }
  //Function for content Tabs
  tabsDraw() { 
  let tabsNo = 5;
  let tabNum = 1;
  let tabChar = 'a';
  let total = [];
  for( let i = 1; i < tabsNo; i++) {
    total.push({ id: i, name: tabChar.toUpperCase() + tabNum })
      if(i > 0) {
          var it = (parseInt(tabChar, 36) + 1 ) % 36;
        tabChar = (!it * 10 + it).toString(36);
    }
    tabNum += 3;
  }
  return total;
  }
  render() {
    let tabs = this.tabsDraw()
        tabs = tabs.map(function (el, i) {
        return <Tab id={el.id} key={i} content={el.name} title={el.name}> 
                  {this.contentTabs()}
                </Tab>
    }, this);
    return (    
      <Tabs className="tabs-wrapper">
        {tabs}
      </Tabs>       
    );
  }
}
ReactDOM.render( <App />, document.getElementById('root'));