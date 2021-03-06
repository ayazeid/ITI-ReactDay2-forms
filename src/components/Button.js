import React, { useState } from "react";

function Button(props) {
  const { name, onpress, type, styling } = props;
  return (
    <div>
      <button className={"btn btn-primary " + styling} type={type}>
        {name}
      </button>
    </div>
  );
}

export default Button;
