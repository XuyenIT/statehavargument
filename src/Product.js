import React, { Component } from 'react';
import './product.css';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:123,
            image:345,
            price:2000,
            isOn:this.props.status,
        }
    }
    componentDidMount(){
        fetch('https://fakestoreapi.com/products/'+this.props.id)
        .then(res=>res.json())
        .then(data=>this.setState({
            title:data.title,
            image:data.image,
            price:data.price,
        }));
    }
  changeToggle = ()=>{
      this.setState({
          isOn:!this.state.isOn,
      })
  }
    render() {
        return (
            <div className = "product">
                <h2 className = "product-title">{this.state.title}</h2>
                <img  className = "product-image" src={this.state.image} alt={this.state.title} />
                <h3 className = "product-price">{this.state.price} $</h3>
                <span className = "product-like-heart" onClick = {this.changeToggle}>{this.state.isOn? <span> &#128154;</span>:<span> &#128169;</span>}</span>
                <button className = "btn-buy">Buy</button>
            </div>
        );
    }
}

export default Product;
