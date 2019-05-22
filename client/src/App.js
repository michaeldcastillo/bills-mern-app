import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateOne from "./components/CreateOne.component.js";
import ReadAll from "./components/ReadAll.component.js";
import UpdateOne from "./components/UpdateOne.component.js";
//import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>App Component</h2>
        </div>
        <br />
        <Route path="/create" component={CreateOne} />
        <Route exact path="/" component={ReadAll} /> 
        <Route path="/update/:id" component={UpdateOne} />
      </Router>
    );
  }
}

export default App;