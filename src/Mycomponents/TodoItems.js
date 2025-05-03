import React from 'react'

export const TodoItems = ({todo,onDelete}) => {
  return (
    <div>
    <h4>{todo.title}</h4>
    <button className="btn btn-danger" onClick={()=>{onDelete(todo)} }>Delete</button>
    </div>
  )
}
