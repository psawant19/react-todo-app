import React, { Component } from "react";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
import TodoListGroup from "../Components/TodoListGroup";

class Home extends Component {
  render() {
    var groups = [
      {
        id: 1,
        title: "Group1",
        data: ["Grp1 Item1", "Grp1 Item2", "Grp1 Item3", "Grp1 Item4"],
      },
      {
        id: 2,
        title: "Group2",
        data: ["Grp2 Item1", "Grp2 Item2", "Grp2 Item3", "Grp2 Item4"],
      },
    ];
    return (
      <>
        <Navbar className="bg-body-tertiary navbar-bottom-space">
          <Container>
            <Navbar.Brand>Todo List</Navbar.Brand>
            <Button>Add Note</Button>
          </Container>
        </Navbar>
        <Container fluid className="container">
          <Row>
            <TodoListGroup groups={groups}></TodoListGroup>
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
