import React from 'react';
import './App.css';
import TodoList from './components/ClassComponents/TodoList.js';
import TodoItems from './components/ClassComponents/TodoItems.js';

class AppTodo extends React.Component {

  state = {
    items: [],
    currentItem: { key:"", text:"" }
  }

  addItem = (event) => {
    event.preventDefault();
    const newItem = this.state.currentItem; //grab existing item first

      if(newItem.text !== "") { 
        const items = [...this.state.items, newItem];//items array is destructured and newItem is added

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

  handleInput = (event) => {
    const currentItem = { key: Date.now(), text: event.target.value };
    this.setState({ currentItem: currentItem }); //sets the currentItem
  }

  render() {
    return (
      <div className="App" style={{border:"2px solid purple", textAlign:"left", padding:"10px"}}>
        <p style={{color:"purple"}}>Hello from AppTodo.js</p>
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

export default AppTodo;
