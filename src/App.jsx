import { useRef, useState } from "react";
import "./App.css";
import Heading from "./Components/Heading";
import Input from "./Components/Input";
import Task from "./Components/Task";
import { use } from "react";
function App() {
  const tasks = [
    {
      taskName: "Buy Book",
      taskDate: "4/10/2024",
    },
    {
      taskName: "Buy Car",
      taskDate: "5/10/2024",
    },
  ];

  const [tasks1, setTasks] = useState([]);

  function deleteItem(tName) {
    let temp = [...tasks1];

    temp = temp.filter((item) => {
      return item.taskName != tName;
    });

    setTasks(temp);
  }

  function addItem(tName, tDate) {
    if (tName.length == 0 || tDate.length == 0) {
      return;
    }

    let temp = [...tasks1];
    temp.push({ taskName: tName, taskDate: tDate });
    setTasks(temp);
  }

  return (
    <>
      <Heading />
      <Input addItem={addItem} />

      {tasks1.map((item) => (
        <Task key={item.taskName} task={item} deleteItem={deleteItem}></Task>
      ))}
    </>
  );
}

export default App;
