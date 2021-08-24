import React, { Component } from "react";
import "./main.css";

class ProductArr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            products: [
                { id: 1, productName: "BMS", price: 900, quantity: 0 },
                { id: 2, productName: "Samsung", price: 800, quantity: 0 },
                { id: 3, productName: "Yamaha", price: 700, quantity: 0 },
                { id: 4, productName: "TOYOTA", price: 600, quantity: 0 },
                { id: 5, productName: "Cup50", price: 500, quantity: 0 },
            ],
        };
    }
    increaseQty=(index)=>{
        this.setState((element) => {
            var newQty = element.products[index].quantity + 1;
            this.state.products[index].quantity = newQty;
            this.state.amount = newQty * element.products[index].price;
            return {
                amount: this.state.amount,
                products: this.state.products,
            }
        });

    };

    decreaseQty=(index)=>{
        this.setState((element) => {
            if (this.state.products[index].quantity > 0) {
                var newQty = element.products[index].quantity - 1;
                this.state.products[index].quantity = newQty;
                this.state.amount = newQty * element.products[index].price;
                return {
                    amount: this.state.amount,
                    products: this.state.products

                }

            }
        }
        )
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.products.map((product,index) => (
                        <div className="order-detail" key={product.id}>
                            <h4>Product Name:{product.productName}</h4>
                            <p>Price : {product.price} USD</p>
                            <p>Quantity :{product.quantity}</p>
                            <button className="btn btn-primary" onClick={()=>this.decreaseQty(index)}>-</button>
                            <button className="btn btn-danger" onClick={()=>this.increaseQty(index)} >+</button>
                           
                        </div>
                    ))}
                    <div className="order">
                        <div className="clear" />
                        <p className="total">
                            Total: <b>{this.state.amount} USD</b>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductArr;
