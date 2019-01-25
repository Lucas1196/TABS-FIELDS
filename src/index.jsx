class TabDemo extends React.Component {
    constructor() {
        super();
        this.state = { 
            tabsNumber: 4,
            inputs: 5,
        }
    }
    tabsFunction = () => {
        let tabs = this.state.tabsNumber;
        let tabsContainer = [];
        for( let i = 0; i < tabs; i++) {
            tabsContainer.push(<div className="tab" key={i}></div>)
            window.onload = function () {
                let tabsVariable = document.getElementsByClassName("tab");
                    tabsVariable[0].className += " active";
                let startingNum = 1;
                for( let k = 0; k < tabsVariable.length; k++) {
                    tabsVariable[k].addEventListener("click", function() {
                        let current = document.getElementsByClassName("active");
                            current[0].className = current[0].className.replace(" active", "");
                        this.className += " active";
                    });
                    for (j = 0; j < 26; j++) {
                        tabsVariable[j].innerHTML = (j+10).toString(36) + startingNum;
                        startingNum += 3;
                    }
                }
            }
        }
        return tabsContainer;
    }
    //Function for container-input-buttons
    containerInputFunction = () => {
        let inputsNumber = this.state.inputs;
        let inputsContainer = [];
        for ( i = 0; i < inputsNumber; i++ ) {
            inputsContainer.push(
                <div className="container-inputButton" key={i}>
                    {this.buttonsFunction()}
                    {this.inputFunction()}
                </div>
            )
        }
        return inputsContainer;
    }
    //Function which add inputs on content page
    inputFunction = () => {
        let inputsContent = [];
        for ( j = 0; j < 1; j++ ) {
            inputsContent.push(<input type="text" className="input" key={j}></input>)
        }
        return inputsContent;
    }
    //Remove section ContainerInput
    removeSection = () => {
        var buttons = document.getElementsByClassName("toggleInput");
        for( let k = 0; k < buttons.length; k++) {
            buttons[k].addEventListener("click", function() {
                this.parentElement.remove();
            });
        }
    }
    //Function which add buttons on content page
    buttonsFunction = () => {
        let buttonsContent = [];
        for ( j = 0; j < 1; j++ ) {
            buttonsContent.push(<button onClick={this.removeSection} className="toggleInput" key={j}>-</button>)
        }
        return buttonsContent;
    }
    //Function which add content on page
    contentTabs = () => {
        let content = this.state.tabsNumber;
        let contentTabs = [];
        for ( let k = 0; k < content; k++ ) {
            contentTabs.push(
                <div className="tabsContent row" key={k}>
                    <div className="col-12 col-md-6 input-side">
                        {this.containerInputFunction()}
                    </div>
                    <div className="col-12 col-md-6 textarea-side">
                        <textarea name="textarea" className="textarea-tab" cols="30" rows="10"></textarea>
                    </div>
                </div>
            )
        }
        return contentTabs;
    }   
    render() {
        return (
            <div className="inner-root row">
                <div className="tabs col-12">
                    {this.tabsFunction()}
                </div>
                <div className="content-tabs col-12">
                    {this.contentTabs()}
                </div>
            </div>
        )
    }
}
ReactDOM.render(<TabDemo />, document.getElementById('root'));