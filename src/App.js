import { Button } from "react-bootstrap";
import "./App.css";
import TodoListGroup from "./Components/TodoListGroup";

function App() {
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
    <div className="App">
      <header>
        <Button onClick={() => alert("You clicked")}>ADD NOTE</Button>
        <TodoListGroup groups={groups}></TodoListGroup>
      </header>
      <body></body>
    </div>
  );
}

export default App;
