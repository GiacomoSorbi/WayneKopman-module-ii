import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./app.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import { DataProvider } from "./components/Context";

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
