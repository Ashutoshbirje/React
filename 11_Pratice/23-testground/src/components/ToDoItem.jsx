import React, { useState } from "react";

function ToDoItem(props) {
  // const [isDone, setIsDone] = useState(false);

  // function markDone() {
  //   setIsDone(prevValue => !prevValue);
  // }

  function markDone() {
    props.onChange(props.id);
  }

  return (
    <li
      onClick={markDone}
      // style={isDone ? { textDecoration: "line-through" } : null}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
