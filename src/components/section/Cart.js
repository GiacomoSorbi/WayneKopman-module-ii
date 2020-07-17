import React, { Component } from "react";
import { DataContext } from "../Context";
import { Link } from "react-router-dom";
import BasketEmpty from "./../BasketEmpty/index";

import "../css/Cart.css";

export class Cart extends Component {
  static contextType = DataContext;
  //Gets the cart total from context
  componentDidMount() {
    this.context.getTotal();
  }
  //This renders if the cart is empty
  render() {
    const { cart, increase, reduction, removeProduct, total } = this.context;
    if (cart.length === 0) {
      return (
        <div className="basket">
          <h2 style={{ textAlign: "center" }}>Your Basket is Empty</h2>
          <BasketEmpty />
        </div>
      );
    } else {
      return (
        //This renders if there is and item/s in the cart
        <>
          <div className="breadcrumb">
            <Link to="/product">◄ Back to shop</Link>
          </div>
          {cart.map((item) => (
            <div className="details" key={item._id}>
              <img className="cart-img" src={item.src} alt="Coffee-Bag" />
              <div className="box">
                <div className="row">
                  <h4>{item.title}</h4>
                  <span>
                    £{Math.round(item.price * item.count * 100) / 100}
                  </span>

                  <div className="amount">
                    <button
                      className="count"
                      onClick={() => reduction(item._id)}
                    >
                      {" "}
                      -{" "}
                    </button>
                    <span>{item.count}</span>
                    <button
                      className="count"
                      onClick={() => increase(item._id)}
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                  <div
                    className="delete"
                    onClick={() => removeProduct(item._id)}
                  >
                    Remove item
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="total">
            <Link to="/payment">Check out</Link>
            <h3>Total: £{Math.round(total * 100) / 100}</h3>
          </div>
        </>
        //The Math.round rounds the total to 2 decimal places
      );
    }
  }
}

export default Cart;
