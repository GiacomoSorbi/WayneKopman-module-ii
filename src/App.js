import React from "react";
//Browser router keeps UI in sync with URL
import { BrowserRouter as Router } from "react-router-dom";
import "./app.css";

//importing the structural components of the website in the main App
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

// DataProvider needs to be imported into the App.js
import { DataProvider } from "./components/Context";

// Notes
// The App function exports the main components that make up the website. This includes the Header, section or body Footer
// The main site components are wrapped in <DataProvider> giving all the elements access
// StrictMode does not render visible UI. It does additional checks and warnings for its descendants

function App(props) {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <DataProvider>
        <React.StrictMode>
          <Header />
          <div className="app">
            <Section />
          </div>
          <Footer />
        </React.StrictMode>
      </DataProvider>
    </Router>
  );
}

export default App;
