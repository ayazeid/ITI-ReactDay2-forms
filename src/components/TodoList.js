import React from "react";
import TodoField from "./TodoField";
function TodoList(props) {
  const { todos, colors, removeTodo } = props;
  return (
    <div className="container">
      {todos.map((t, i) => (
        <TodoField
          key={i}
          id={i}
          todo={t}
          colors={colors}
          remove
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
