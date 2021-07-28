import React, { useState, useEffect } from "react";
import Checkbox from "./Checkbox";
import Input from "./Input";

const ToDoList = () => {
  const [toDo, setTodo] = useState(null);
  const [range, setRange] = useState(null);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const responseBody = await response.json();
    setTodo(responseBody);
  };

  const getRange = (event) => {
    setRange(event.target.value);
  };

  const submitRange = () => {
    console.log(range);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>Lists</h2>
      <Input onChange={getRange} />
      <button onClick={submitRange}>Submit</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Complete</th>
          </tr>
        </thead>
        <tbody>
          {toDo &&
            toDo.map((todo, index) => (
              <tr key={index}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>
                  <Checkbox checkedState={todo.completed} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ToDoList;
