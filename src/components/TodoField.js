import React from "react";
import ClearIcon from "@mui/icons-material/Clear";

function TodoField(props) {
  const { id, todo, colors, remove, removeTodo } = props;
  const deleteTodo = (e) => {
    removeTodo(id);
  };
  const toggler = (e) => {
    let line = e.target.style.textDecoration;
    if (line !== "line-throught ") {
      e.target.style.textDecoration = "line-through black";
    }
  };
  return (
    <div
      className={
        "d-flex m-3 shadow rounded-pill justify-content-around align-items-center " +
        colors
      }
    >
      <p
        className={"text-start bg-transparent fs-4 m-1"}
        onClick={(e) => toggler(e)}
      >
        {todo}
      </p>
      {remove && <ClearIcon onClick={(e) => deleteTodo(e)} />}
    </div>
  );
}

export default TodoField;
