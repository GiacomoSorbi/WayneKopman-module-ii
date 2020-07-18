import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";

// Imports DataContext to the header
import { DataContext } from "./Context";

// imports all required images and icons for the header
import Menu from "./svg/bars-solid.svg";
import Cart from "./svg/shopping-cart-solid.svg";
import Close from "./svg/times-solid.svg";
import Logo from "./svg/SocietyCoffee-Logo-Web.svg";

// Notes
// Header function returns the Top Nav
// The responsive menu toggle state is set to false by default
// menuToggle toggles the responsive menu
// {cart.length} checks how many items are in the cart and displays on the cart icon

export class Header extends Component {
  static contextType = DataContext;

  state = {
    toggle: false,
  };

  menuToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    const { toggle } = this.state;
    const { cart } = this.context;

    return (
      <header>
        <div className="menu" onClick={this.menuToggle}>
          <img src={Menu} alt="" width="20" />
        </div>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" width="150" />
          </Link>
        </div>
        <nav>
          <ul className={toggle ? "toggle" : ""} onClick={this.menuToggle}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Shop</Link>
            </li>

            <li>
              <Link to="/about">About us</Link>
            </li>
            <li className="close">
              <img src={Close} alt="" width="20" />
            </li>
          </ul>
          <div className="nav-cart">
            <span>{cart.length}</span>
            <Link to="/cart">
              <img src={Cart} alt="" width="20" />
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
