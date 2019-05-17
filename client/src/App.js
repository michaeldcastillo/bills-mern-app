import React from "react";
import "./App.css";
import Bill from "./components/ClassComponents/Bill.js";
import AppTodo from "./AppTodo.js";
import AppTodoComments from "./AppTodoComments.js";
import TraversyStarter from "./components/ClassComponents/TraversyStarter.js";

function App() {
  return(
      <div id="app" style={{border:"2px solid red",padding:"10px"}}>
        <p style={{color:"red"}}>Hello From App.js</p>
        <Bill />
        <AppTodo />
        <AppTodoComments />
        <TraversyStarter /> {/* requires that the server be running on localhost:5000*/}
      </div>
  );
}

export default App;