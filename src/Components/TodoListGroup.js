import React, { Component } from "react";
import TodoList from "./TodoList";
import Card from "react-bootstrap/Card";

class TodoListGroup extends Component {
  render() {
    var groups = this.props.groups;

    return groups.map((group) => (
      <div className="col-4">
        <Card>
          <Card.Body>
            <Card.Title>{group.title}</Card.Title>
          </Card.Body>
          <TodoList key={group.id} items={group.data}></TodoList>
        </Card>
      </div>
    ));
  }
}

export default TodoListGroup;
