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
  constructor(props) {
    super(props);
    this.state = {
      activeIndex : 1,
      inputsNumber: 1,
      inputs: [" Input1", " Input2 " ],
    };
  }
  //Function for add new input when you push press
  handleAdd() {
    this.setState({
      inputs: [...this.state.inputs, " New input "]
    })
  }
  //Function for change input value
  handleChange(e, index) {
    this.state.inputs[index] = e.target.value
    this.setState({
      inputs: this.state.inputs
    })
  }
  //Function for Remove input 
  handleRemove(index) {
    this.state.inputs.splice(index, 1)
    this.setState({
      inputs: this.state.inputs
    })
  }
  contentTabs() {
    let contentTabs = [];
    for ( let k = 1; k < 2; k++ ) {
      contentTabs.push(
        <div className="tabContent row">
          <div className="col-12 col-sm-12 col-md-6 input-side text-left">
            <div className="addNewfield text-center">
              <button onClick={(e)=>this.handleAdd(e)} className="plusButton">
                Add new input
              </button>
            </div>
            {
              this.state.inputs.map((input, index) => {
                return (
                  <div className="subcontainer" key={index}>
                    <button onClick={()=>this.handleRemove(index)} className="minusButton">
                      &#9473;
                    </button>
                    <input onChange={(e)=>this.handleChange(e, index)} value={input} className="input"/>
                  </div>
                )
              })
            }
          </div>
          <div className="col-12 col-sm-12 col-md-6 textarea-side text-right">
            <textarea name="textarea" className="textarea-tab" cols="30" rows="15" value={this.state.inputs}></textarea>
          </div>
        </div>
      )
    }
    return contentTabs;
  }
  render() {
    return (
      <div className={ "tab-panel" + (this.props.active ? ' active' : '') }>
        {this.contentTabs()}
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
    };
  }
  //Function for TABS NAME
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
        return  <Tab id={el.id} key={i} content={el.name} title={el.name}></Tab>
    }, this);
    return (    
      <Tabs className="tabs-wrapper">
        {tabs}
      </Tabs>
    );
  }
}
ReactDOM.render( <App />, document.getElementById('root'));