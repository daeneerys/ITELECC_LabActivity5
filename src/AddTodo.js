import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddTodo = ({newTodo, setNewTodo, handleSubmit}) => {
  return (

        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor = 'addItem'>Add Todo</label>
            <input
                autoFocus
                id = 'addTodo'
                type = 'text'
                placeholder="Add Todo"
                required
                value = {newTodo}
                onChange = {(e) => setNewTodo(e.target.value)}
            />
            <button
                type = 'submit'
                aria-label = 'Add Todo'
            ><FaPlus /></button>
        </form>
    )
}


export default AddTodo