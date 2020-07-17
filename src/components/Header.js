import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";
import { DataContext } from "./Context";

//imports images used in the nan
import Menu from "./svg/bars-solid.svg";
import Cart from "./svg/shopping-cart-solid.svg";
import Close from "./svg/times-solid.svg";
import Logo from "./svg/SocietyCoffee-Logo-Web.svg";

export class Header extends Component {
  static contextType = DataContext;
  //sets the responsive menu state to false
  state = {
    toggle: false,
  };
  //toggles the responsive menu
  menuToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    const { toggle } = this.state;
    const { cart } = this.context;
    //returns the Top Nav
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
