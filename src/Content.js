import React from "react";
import TodoList from "./TodoList";

const Content = ({ todos, handleCheck, handleDelete,handleEdit,sortedItems }) => {

  return (
    <main>
        { todos.length ? (
            <TodoList 
                todos = {todos}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                sortedItems = {sortedItems}
            />
        ) : 
        ( <p style = {{marginTop: '2rem'}}>Your List is empty.</p>
       )
      }
    </main>
  );
};

export default Content;
