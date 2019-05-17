import React from "react";

class TodoList extends React.Component {

  render() {
    return (
        <form onSubmit={this.props.addItem}>
            <input placeholder="Task..." 
                    ref={this.props.inputElement}
                    value={this.props.currentItem.text}
                    onChange={this.props.handleInput} 
                    />
            <button type="submit">Add Task</button>            
        </form>
    )
  }
}

export default TodoList;

//continue tutorial... https://medium.com/front-end-weekly/create-a-simple-todo-app-in-react-72d9341a7e6c
