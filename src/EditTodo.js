import React, { useState } from "react";

const EditTodo = ({ todo, setTodos, handleEdit }) => {
  const [value, setValue] = useState(todo.todo);

  const handleEditSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    // edit todo
    handleEdit(value, todo.id);
  };
  return (
    <form onSubmit={handleEditSubmit} className="addForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update task"
      />

      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};


export default EditTodo;
