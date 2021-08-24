import React, { Component } from 'react';

class Toggle extends Component {
    constructor(props) {
        console.log("COn")
        super(props);
        // this.state = {
        //     isOn: this.props.status
        // }
        this.state = {
            value:0,
        }
    }
    // changeToggle = () => {
    //     this.setState({
    //         isOn: !this.state.isOn
    //     });
    // }
    updateValue = (v)=>{
        this.setState({
            value:Math.max(1,this.state.value+v),
        });
    }
    componentDidMount() {
        console.log("Change did mount");

    }
    componentDidUpdate(){
        console.log("Did update");
    }


    render() {
        console.log("Render");
        return (
            <div>
                {/* <button onClick={this.changeToggle}>{this.state.isOn?<span>&#128154;</span>:<span>&#128148;</span>}</button> */}
            <button onClick = {()=>{this.updateValue(-1)}}>Giam</button>
            <input type="number" value = {this.state.value}/>
            <button onClick = {()=>{this.updateValue(1)}}>Tang</button>
            </div>
        );
    }
}

export default Toggle;
