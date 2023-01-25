import React from "react";
import "./style.css";
import Todo from "./TodoList"

export default function App() {
  const [items, setItems] = React.useState("");
  const [list, setList] = React.useState([]);

  const todoItems = (e) => {
  
    setItems(e.target.value)

  }

  const total = () => {
    setList((prev) => {
      return [...prev,items]
    })

    setItems("")
  }
  const delItems = (idx) => {
    setList((prev) => {
      return prev.filter((elem,index) => {return idx !== index})
    })
  }
  return (
    <div>
      <h1>Todo List!</h1>
    <input type="text" value={items} onChange={(e) => todoItems(e)} /> <button onClick={total}>Add +</button>
    <div>{list.map((val,idx) => {
      return (
        <Todo
        key={idx}
        list={val}
        id={idx}
        onDelete={delItems}
        />
    )})}</div>
    </div>
  );
}
