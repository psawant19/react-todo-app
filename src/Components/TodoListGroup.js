import React, { Component } from "react";
import TodoList from "./TodoList";
class TodoListGroup extends Component {
  state = {};
  render() {
    var groups = this.props.groups;

    return (
      <div className="row">
        {groups.map((group) => (
          <div className="col-4">
            <h1>{group.title}</h1>
            <TodoList key={group.id} items={group.data}></TodoList>
          </div>
        ))}
      </div>
    );
  }
}

export default TodoListGroup;
