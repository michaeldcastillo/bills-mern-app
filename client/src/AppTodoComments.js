import React from 'react';
import './App.css';
//import ClassComponent from './components/ClassComponent/index';
import TodoList from './components/ClassComponents/TodoList.js';
import TodoItems from './components/ClassComponents/TodoItems.js';

/* default <App /> is a functional component...
function App() {
  return (
    <div className="App">
        <ClassComponent />
    </div>
  )
}*/

class AppTodoComments extends React.Component {

  //We still need the state to hold the array of items. The state makes it easy to render and elements on the page. All components using data will change automatically when the data in state changes.
  
  //We also need another state called currentItem to hold the current value in the memory. It is an object and it also has key along with the text. React uses this key internally to only render the components when there are multiple similar components. The to-do list cannot be rendered without a key as there will be all lis.
  state = {
    items: [],
    currentItem: { key:"", text:"" }
  }

  //manages adding to the list
  addItem = (event) => {
    event.preventDefault();
    console.log("addItem() was called");
    console.log("this.state.currentItem = ", this.state.currentItem);
    const newItem = this.state.currentItem; //grab existing item first

    //we don't want to add empty values to the items array
    //if currentItem text value is NOT empty...
      if(newItem.text !== "") { 
        console.log("newItem = ", newItem);
        const items = [...this.state.items, newItem];//items array is destructured and newItem is added
        console.log("items.length = ", items.length); //1 object in the array
        
        for(let i = 0; i < items.length; i++) {
          console.log("items["+i+"] = ", items[i]);
        }

        this.setState({
          items: items,
          currentItem: { key:"", text:"" } //clear the input box
        });
          
      }

  }

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter((item) => {
      return item.key !== key;
    });
    this.setState({ items: filteredItems });
  }

  //manages the change in the input field
  handleInput = (event) => {
      console.log("handleInput() was called");
      console.log("event = ", event);
      console.log("event.target = ", event.target);
      console.log("event.target.value = ", event.target.value); //gets value of input field
    const currentItem = { key: Date.now(), text: event.target.value };
      console.log("currentItem = ", currentItem);
    this.setState({ currentItem: currentItem }); //sets the currentItem
  }

  render() {
    return (
      <div className="App" style={{border:"2px solid orange", textAlign:"left", padding:"10px"}}>
        <p style={{color:"orange"}}>Hello From AppTodoComments.js</p>
        <TodoList addItem={this.addItem} 
                  handleInput={this.handleInput}
                  inputElement={this.inputElement} 
                  currentItem={this.state.currentItem} 
                  />
                  <br />
        <TodoItems entries={this.state.items} 
                    deleteItem={this.deleteItem} 
                  />
      </div>
    )
  }
}

export default AppTodoComments;
