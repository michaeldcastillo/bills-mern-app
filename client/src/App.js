import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateOne from "./components/CreateOne.component.js";
import ReadAll from "./components/ReadAll.component.js";
import UpdateOne from "./components/UpdateOne.component.js";
//import TableExample from "./components/react-super-responsive-table.js";
//import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";
//import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>

        <div>
         {/* <img src={logo} width="" height="30px" alt="" /> */}
          <h2 style={{display:"inline-block"}}>$ Bill Payment Tracker</h2>
          <br />
          <Link to="/">ReadAll</Link> <span className="divider">|</span> <Link to="/create">CreateOne</Link>
        </div>

        <br />
        
        <Route path="/create" component={CreateOne} />
        <Route exact path="/" component={ReadAll} /> 
        <Route path="/update/:id" component={UpdateOne} />
        {/* <Route path="/delete/:id" component={DeleteOne} /> */}
        {/* <Route path="/read/:id" component={ReadOne} /> */}

        {/* <TableExample /> */}

      </Router>
    );
  }
}

export default App;