import React from "react";

class TodoItems extends React.Component {

  createTasks = (item) => {
    return (
        <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>{item.text}</li>
      )
  }

  render() {

    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);

    return (
        <ul>{listItems}</ul>
    )
  }
}

export default TodoItems;

//continue tutorial... https://medium.com/front-end-weekly/create-a-simple-todo-app-in-react-72d9341a7e6c
