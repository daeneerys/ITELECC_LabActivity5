import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'

const LineTodo = ({todo,handleCheck,handleDelete,handleEdit}) => {
  return (
    <li className="todo" key={todo.id}>
    <input
      type="checkbox"
      onChange={() => handleCheck(todo.id)}
      checked={todo.checked}
      className='checkmark'
    />
    <label>{todo.id}. {todo.todo}</label>
    <FaEdit
      onClick={() => handleEdit(todo.id)}
      role= "button"
      tabIndex="0"
    />
    <FaTrashAlt 
      onClick={() => handleDelete(todo.id)}
      role = "button"
      tabIndex = "0"
      aria-label={`Delete ${todo.todo}`} 
    />
  </li>
  )
}

export default LineTodo