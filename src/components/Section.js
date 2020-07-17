import React from "react";
import { Route, Switch } from "react-router-dom";

//imports the various sections or pages to the section
import Products from "./section/Products";
import Details from "./section/Details";
import Cart from "./section/Cart";
import Payment from "./section/Payment";
import Homepage from "./section/Homepage";
import About from "./section/About";

function Section(props) {
  return (
    // Declares the page routes
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
