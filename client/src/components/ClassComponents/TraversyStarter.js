import React from "react";
import "./TraversyStarter.css";

class TraversyStarter extends React.Component {

  state = { 
    frontendData: [] 
  }

  // lifecycle component will run fetch when component is finished rendering on the page
  // fetch uses proxy setting in package.json so http://localhost:PORT is not required
  // fetch will return a promise, take the result and map to res.json
  // add another .then(), which gives us our data from the backend
  // setState can have a callback function, so we use an anonymous arrow function to execute console.log();

  componentDidMount() {
    //fetch().then().then();
    fetch('/api/data').then(res => res.json()).then(backendData => this.setState({ frontendData: backendData }, () => { console.log("backendData = ", backendData)
    console.log("-----------------------------------------");
    console.log("this.state = ", this.state);
    console.log("-----------------------------------------");
    console.log("this.state.frontendData[0].id", this.state.frontendData[0].id);
    console.log("this.state.frontendData[1].id", this.state.frontendData[1].id);
    console.log("this.state.frontendData[2].id", this.state.frontendData[2].id);
    console.log("this.state.frontendData[0].firstName", this.state.frontendData[0].firstName);
    console.log("this.state.frontendData[1].firstName", this.state.frontendData[1].firstName);
    console.log("this.state.frontendData[2].firstName", this.state.frontendData[2].firstName);
    console.log("this.state.frontendData[0].lastName", this.state.frontendData[0].lastName);
    console.log("this.state.frontendData[1].lastName", this.state.frontendData[1].lastName);
    console.log("this.state.frontendData[2].lastName", this.state.frontendData[2].lastName);
      //backendData is an array of 3 objects...
      for(var i = 0; i < backendData.length; i++) {
        console.log("-----------------------------------------");
        console.log("backendData["+i+"] = ", backendData[i]);
        console.log("-----------------------------------------");
        console.log("backendData["+i+"].id = ", backendData[i].id);
        console.log("backendData["+i+"].firstName = ", backendData[i].firstName);
        console.log("backendData["+i+"].lastName = ", backendData[i].lastName);
      }
      //this.state is an object, but frontendData is an array of 3 objects
      for (i = 0; i < this.state.frontendData.length; i++) {
        console.log("-----------------------------------------");
        console.log("this.state.frontendData["+i+"] = ", this.state.frontendData[i]);
        console.log("-----------------------------------------");
        console.log("this.state.frontendData["+i+"].id = ", this.state.frontendData[i].id);
        console.log("this.state.frontendData["+i+"].firstName = ", this.state.frontendData[i].firstName);
        console.log("this.state.frontendData["+i+"].lastName = ", this.state.frontendData[i].lastName);
      }

    }));
  } 



  render() {
    return (
       <div style={{border:"2px solid green", padding:"10px"}}>
         <p style={{color:"green"}}>Hello From TraversyStarter.js</p>
         <ul>
          {this.state.frontendData.map((val, index, arr) => console.log(`
          val.firstName = ${val.firstName}, 
          index = ${index}, 
          arr = ${arr}
          `))}
         {this.state.frontendData.map((val, index, arr) => <li key={val.id}>{val.firstName} {val.lastName}</li>)}
        </ul>
       </div>
      );
  }
}

export default TraversyStarter;

//Traversy Media - React & Express Starter Pack For Full Stack Development
//https://www.youtube.com/watch?v=v0t42xBIYIs