import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  state = {};
  render() {
    var todoItems = this.props.items;

    return (
      <div>
        {todoItems.map((item, index) => (
          <Todo key={index} value={item}></Todo>
        ))}
      </div>
    );
  }
}

export default TodoList;
