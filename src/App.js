/**
 *
 * Welcome to the Student frontend developer challenge!
 *
 * Your task is to complete a simple Todo app in React. I've left in some partial code
 * for you to get started on.
 *
 * Once finished, users should be able to do the following:
 *
 * 1. "Add a todo". Todo is added, when the user types in a text for the todo in the form
 * and presses the "Add" button. Users should not be able to add empty todos. Text field
 * should be cleared once a todo is added. Te added todo should show up at the top of the Todo list.
 *
 * 2. "Show todos". The user should be able to see all added todos.
 *
 * 3. "Complete a todo". When user clicks a checkbox next to the todo, the "complete" state
 * of that Todo should toggle to the opposite value and that state should be reflected in the checkbox
 * i.e. if "complete" is true, checkbox is "checked", else it is "unchecked".
 *
 * 4. "Remove a todo". Once "Remove" button is clicked, the given todo should be removed
 * from the state and also disappear from the todo list.
 *
 * 5. The app should be styled, preferably using https://emotion.sh/, however, any styling
 * approach is acceptable.
 *
 * Note: As much as possible, please try to keep the given boiler plate code so that you can
 * showcase your ability to work with given parameters.
 *
 */

import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { MainStyle } from "./styles";

// Main Function
function Todos() {
  const [tasksRemaining, setTasksRemaining] = useState(0);
  const [todos, setTodos] = React.useState([
    {
      id: uuidv4(),
      text: "Finish task",
      completed: false,
    },
    {
      id: uuidv4(),
      text: "Smile",
      completed: false,
    },
    {
      id: uuidv4(),
      text: "Be happy",
      completed: false,
    },
    {
      id: uuidv4(),
      text: "Look for other asignments",
      completed: false,
    },
    {
      id: uuidv4(),
      text: "See what else I can work on",
      completed: false,
    },
  ]);

  useEffect(() => {
    setTasksRemaining(todos.filter((todo) => !todo.isCompleted).length);
  }, [todos]);

  const onCreate = (text) => {
    const newTodos = [...todos, { text, completed: false }];
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos[id].isCompleted =  !newTodos[id].isCompleted;
    setTodos(newTodos);
  };

  console.log(todos);

  const removeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodos(newTodos);
  };

  return (
    <MainStyle>
      <div className="todoApp">
        <div className="todo-list">
          <h2> To Do list ({tasksRemaining})</h2>
          {todos.map((todo, id) => (
            <Todo
              key={id}
              id={id}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
          <CreateTodo onCreate={onCreate} />
        </div>
      </div>
    </MainStyle>
  );
}

// Each task is added into a separate line with buttons to complete it or remove it.
function Todo({ todo, id, completeTodo, removeTodo }) {

  return (
    <div className="todo">
      <div className="separate">
        <span
          style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
          {todo.text}
        </span>
      </div>

      <div>
        <input  
          className="check"
          type="checkbox"
          onClick={() => completeTodo(id)}
        ></input>
        {""}
        <button className="boxButton" onClick={() => completeTodo(id)}>✓</button>{' '}
        <button variant="outline-danger" onClick={() => removeTodo(id)}> ✕ </button>
      </div>
    </div>
  );
}

// Create Form/Input so the task will be created
function CreateTodo({ onCreate }) {
  const [value, setValue] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || value.trim().length === 0) return;
    onCreate(value);
    setValue("");
  };

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter task"
      />
      <button className="addButton" type="submit">
        Submit
      </button>
    </form>
  );
}

export default function App() {
  return (
    <div className="App">
      <Todos />
    </div>
  );
}
