import React from "react";
import "./style.css";

export default function TodoList(props) {

  return (
    <div key={props.key}>
     <li>{props.list}</li>
     <button onClick={() => props.onDelete(props.id)}>Delete -</button>
    </div>
  );
}
