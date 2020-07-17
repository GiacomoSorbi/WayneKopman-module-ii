import React from "react";
import Products from "./section/Products";
import Details from "./section/Details";
import { Route, Switch } from "react-router-dom";
import Cart from "./section/Cart";
import Payment from "./section/Payment";
import Homepage from "./section/Homepage";
import About from "./section/About";

function Section(props) {
  return (
    <Switch>
      <section>
        <Route path="/" component={Homepage} exact />
        <Route path="/product" component={Products} exact />
        <Route path="/product/:id" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/payment" component={Payment} />
        <Route path="/about" component={About} />
      </section>
    </Switch>
  );
}

export default Section;
