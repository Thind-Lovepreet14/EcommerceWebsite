import React from "react";
import "./App.css";
import "./icon/flaticon.css"
import { BrowserRouter as Router, Route } from "react-router-dom";

// import components
import Navbar from "./components/utils/Navbar";
import Footer from "./components/utils/Footer";
import ProductsPage from "./sitePages/ProductsPage";
import ContactsPage from "./sitePages/ContactsPage";
import HomePage from "./sitePages/HomePage";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product" component={ProductsPage} />
          <div className="black">
            <Route exact path="/contact" component={ContactsPage} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
