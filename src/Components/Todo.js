import React, { Component } from "react";

class Todo extends Component {
  state = {};
  render() {
    return <p>{this.props.value}</p>;
  }
}

export default Todo;
