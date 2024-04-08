import EditTodo from "./EditTodo";
import LineTodo from "./LineTodo";

const TodoList = ({ todos, handleCheck, handleDelete, handleEdit,sortedItems}) => {
  return (
    <ul>
      {todos.map((todo) => ( 
        todo.isEditing ? (
          <EditTodo handleEdit = {handleEdit} todo = {todo}/>
        ) : (
        <LineTodo 
            key={todo.id}
            todo = {todo}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
        />)
      ))}
    </ul>
  );
};

export default TodoList
