import React from 'react'

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.todo.completed} onChange={()=>console.log("I've been checked!") />
      <p>{props.todo.text}</p>
    </div>
  )
}

export default TodoItem