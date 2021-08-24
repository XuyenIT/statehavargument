import React, { Component } from 'react';

class Soot extends Component {
constructor(props){
    super(props);
    this.titeo = this.shoot.bind(this)
}
shoot(t,ev){
    alert(t)
}
da=(t,ev)=>{
    alert(t)
    console.log(ev.type)
}
    render() {
        return (
            <div>
                <button onClick = {()=>{this.shoot("Oanh")}}>CLick here</button>
                <button onClick = {(e)=>{this.da("Xuyen",e)}}>CLick me</button>
                <button onClick = {this.shoot.bind(this,"Bong")}>CLick me</button>
            </div>
        );
    }
}

export default Soot;
