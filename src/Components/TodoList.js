import React, { Component } from "react";
import Todo from "./Todo";
import ListGroup from "react-bootstrap/ListGroup";

class TodoList extends Component {
  render() {
    var todoItems = this.props.items;
    return (
      <ListGroup className="list-group-flush">
        {todoItems.map((item, index) => (
          <Todo key={index} value={item}></Todo>
        ))}
      </ListGroup>
    );
  }
}

export default TodoList;
