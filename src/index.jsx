var Tab = React.createClass({
    render: function() {
      return <div id={this.props.id}
        className={ this.props.isActive ? 'active': '' }
        onClick={ this.props.onActiveTab }
      >
        <p>{ this.props.content }</p>
      </div>
    }
});
  
var Tabs = React.createClass({
    getInitialState: function() {
      return { selectedTabId: 1 }
    },
    
    isActive: function (id) {
      return this.state.selectedTabId === id;
    },
    
    setActiveTab: function (selectedTabId) {
      this.setState({ selectedTabId });
    },
    tabsNo: function () {
        return this.state.tabsNo = 5;
    },
    tabsDraw: function () {
        let tabsNo = this.tabsNo();
        let tabNum = 1;
        let tabChar = 'a';
        let total = [];
        for( let i = 1; i < tabsNo; i++) {

            total.push({ id: i, name: tabChar.toUpperCase() + tabNum, text: 'text' })
            if(i > 0) {
                var it = (parseInt(tabChar, 36) + 1 ) % 36;
                tabChar = (!it * 10 + it).toString(36);
            }
            tabNum += 3;
        }
    //console.log(total);
        return total;
    },
    
    render: function() {
        // var total = this.props.data.points.total;
        var total = this.tabsDraw(),
        tabs = total.map(function (el, i) {
            return <Tab 
            id = {el.id}
            key={ i }
              content={ el.name } 
              isActive={ this.isActive(el.id) } 
              onActiveTab={ this.setActiveTab.bind(this, el.id) }
            />
        }, this);
                  
      return <div className="navigation">
       { tabs }
      </div>
    //   <div className="content-tabs">

    //   </div>
    }
});
  
const data = {
    points: {
      total: [
       
      ]
    }
}
ReactDOM.render(
  <Tabs data={ data } />, document.getElementById('root')
);

// ai inceput gresit si eu m am luat dupa tine, vad ca trebuie folosite tagurile lor, de react. m am plictisit
// la cum s a facut ar trebui pus contenturile care sa aiba acelasi id cu tab si sa se faca displau la el cand id-ul este egal cu id-ul activ. am iesit.  nb!
// https://react-bootstrap.github.io/components/tabs/
// // class TabDemo extends React.Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = { 
// //             tabsNumber: 4,
// //             inputs: 1,
// //         }
// //     }
// //     //Function for Tabs (A1,B4,C7,D10,E13,F16,G19 etc..)
// //     tabsDraw = () => {
// //         let tabsNo = this.state.tabsNumber;
// //         let tabsContainer = [];
// //         let tabNum = 1;
// //         let tabChar = 'a';
// //         for( let i = 0; i < tabsNo; i++) {
// //             if(i > 0) {
// //                 var it = (parseInt(tabChar, 36) + 1 ) % 36;
// //                 tabChar = (!it * 10 + it).toString(36);
// //             }
// //             tabsContainer.push(<div className="tab" onClick = {this.beActive} key={i}>{tabChar}{tabNum}</div>)
// //             tabNum += 3;
// //         }
// //         tabsContainer[0].className += " active";
// //         console.log(tabsContainer[0]);
// //         console.log(tabsContainer[0].props.className);
// //         return tabsContainer;
// //     }
// //     //Move class active on click
// //     beActive = (el) => {
// //         var active = document.querySelector(".active");
// //         if(active !== null){
// //             active.classList.remove("active");
// //         }
// //         el.target.className += " active";
// //     }
// //     //Function for container-input-buttons
// //     containerInputFunction = () => {
// //         let inputsNumber = this.state.inputs;
// //         let inputsContainer = [];
// //         for ( i = 0; i < inputsNumber; i++ ) {
// //             inputsContainer.push(
// //                 <div className="containerinputButton" key={i}>
// //                     <div className="subcontainer">
// //                         {this.buttonsFunction()}
// //                         {this.inputFunction()}
// //                     </div>
// //                     {this.buttonsPlus()}
// //                 </div>
// //             )
// //         }
// //         return inputsContainer;
// //     }
// //     //Function which add inputs on content page
// //     inputFunction = () => {
// //         let inputsContent = [];
// //         for ( j = 0; j < 1; j++ ) {
// //             inputsContent.push(<input type="text" className="input" defaultValue="Adrian" key={j}></input>)
// //         }
// //         return inputsContent;
// //     }
// //     //Remove buttons from page section (actually remove the wrapper "ContainerInput")
// //     removeSection = () => {
// //         var buttons = document.getElementsByClassName("minusButton");
// //         for( let k = 0; k < 1; k++ ) {
// //             // buttons[k].onclick = function() {
// //                 buttons[k].parentElement.remove();
// //             // }
// //             // buttons[k].parentElement.remove(this);
// //         }
// //     }
// //     //Function which add buttons on content page
// //     buttonsFunction = () => {
// //         let buttonsContent = [];
// //         for ( j = 0; j < 1; j++ ) {
// //             buttonsContent.push(<button onClick={this.removeSection} className="minusButton" key={j}>-</button>)
// //         }
// //         return buttonsContent;
// //     }
// //     buttonsPlus = () => {
// //         let buttonsPlus = [];
// //         for ( j = 0; j < 1; j++ ) {
// //             buttonsPlus.push(<button /*onClick={this.addSection}*/ className="plusButton" key={j}>+</button>)
// //         }
// //         return buttonsPlus;
// //     }
// //     //Function which add content on page
// //     contentTabs = () => {
// //         let content = this.state.tabsNumber;
// //         let contentTabs = [];
// //         for ( let k = 0; k < content; k++ ) {
// //             contentTabs.push(
// //                 <div className="tabsContent row" key={k}>
// //                     <div className="col-12 col-md-6 input-side text-left">
// //                         {this.containerInputFunction()}
// //                     </div>
// //                     <div className="col-12 col-md-6 textarea-side text-right">
// //                         <textarea name="textarea" className="textarea-tab" cols="30" rows="10"></textarea>
// //                     </div>
// //                 </div>
// //             )
// //         }
// //         return contentTabs;
// //     }   
// //     render() {
// //         return (
// //             <div className="inner-root row">
// //                 <div className="tabs col-12">
// //                     {this.tabsDraw()}
// //                 </div>
// //                 <div className="content-tabs col-12">
// //                     {this.contentTabs()}
// //                 </div>
// //             </div>
// //         )
// //     }
// // }
// // ReactDOM.render(<TabDemo />, document.getElementById('root'));