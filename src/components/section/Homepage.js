import React from "react";
import "../css/Homepage.css";
import { Link } from "react-router-dom";
import Colombia from "./../product-images/Coffee-Bags-Flags-Colombia.png";

import Directory from "./../Directory";

const Homepage = (props) => {
  return (
    <section className="homepage">
      <Directory />
      <div className="about">
        <section class="container content-section">
          <h2 class="section-header">Coffee of the month</h2>
          <div class="about-us-page">
            <div class="about-us-main">
              <img class="about-us-image" src={Colombia} alt="about-us" />
              <p class="about-us-text">
                We're on a mission to provide coffee drinkers with the best,
                expertly grown coffee beans from around the world while
                spreading education too. With over 50+ countries producing
                coffee, we travel the world exploring the best the world has to
                offer. This is Coffee you can't find on the shelves of your
                local store. We designed subscription packages to send you on a
                flavor discovery. Buy a bag of your choice once off, or choose a
                subscription where you will receive a surprise monthly blend .
                Start your world tour of today
              </p>
              <a href="shop.html">
                <Link to="/product">
                  <button class="btn btn-primary btn-purchase">Shop Now</button>
                </Link>
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Homepage;
