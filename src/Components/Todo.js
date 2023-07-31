import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

class Todo extends Component {
  render() {
    return <ListGroup.Item>{this.props.value}</ListGroup.Item>;
  }
}

export default Todo;
