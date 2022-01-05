import React from "react";
import Button from "./Button";
import Input from "./Input";

function TodoInput(props) {
  const { submitHandle, formHandle, btnstyling } = props;
  return (
    <form className="p-3" onSubmit={(e) => submitHandle(e)}>
      <Input
        title="New Task"
        name="task"
        type="text"
        inputHandle={(input) => formHandle(input)}
        must
      />
      <Button
        name="Add"
        type="submit"
        styling={" float-start btn-sm offset-1 p-1 " + btnstyling}
      />
    </form>
  );
}

export default TodoInput;
