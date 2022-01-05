import React, { useState } from "react";
import TodoField from "../components/TodoField";
import TodoList from "../components/TodoList";
import TodoInput from "../components/TodoInput";
import TextHead from "../components/TextHead";
function ToDo() {
  const [newTask, setTask] = useState("");
  const [todos, updateTodos] = useState([]);
  const submitHandle = (e) => {
    e.preventDefault();
    updateTodos([...todos, newTask]);
  };
  const formHandle = (e) => {
    if (e.target.value.length !== 0) {
      setTask(e.target.value);
    }
  };
  const removeHandle = (todo) => {
    updateTodos((todos) => todos.filter((t, i) => i !== todo));
  };
  return (
    <div>
      <div
        className="container bg-dark shadow p-2 text-info"
        style={{ maxWidth: 450, minHeight: 600, paddingBottom: 30 }}
      >
        <TextHead title="ToDo App" color="text-light" />
        <TodoInput
          formHandle={(e) => formHandle(e)}
          submitHandle={(e) => submitHandle(e)}
          btnstyling="btn-outline-info btn-dark"
        />
        <div className="container m-1 p-1">
          {todos.length === 0 && (
            <TodoField
              todo="Have nothing ToDo?"
              colors=" bg-light text-dark text-center "
            />
          )}
          <TodoList
            todos={todos}
            colors=" bg-primary bg-info text-dark text-start"
            removeTodo={(todo) => removeHandle(todo)}
          />
        </div>
      </div>
    </div>
  );
}

export default ToDo;
