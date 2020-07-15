import React from "react";
//Browser router keeps UI in sync with URL
import { BrowserRouter as Router } from "react-router-dom";
import "./app.css";

//importing the structural components of the website in the main App
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import { DataProvider } from "./components/Context";

//Test

//This function exports the various components that make up the website. This includes the Header, section or body and the Footer

function App(props) {
  return (
    <DataProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <div className="app">
          <Section />
        </div>
        <Footer />
      </Router>
    </DataProvider>
  );
}

export default App;
