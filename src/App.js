import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import AddTodo from "./AddTodo";

function App() {
  const [todos, setTodo] = useState([
    {
      id: 1,
      checked: false,
      todo: "Watch",
      isEditing: false,
    },
    {
      id: 2,
      checked: false,
      todo: "Eat",
      isEditing: false,
    },
    {
      id: 3,
      checked: false,
      todo: "Walk",
      isEditing: false,
    },
    {
      id: 4,
      checked: false,
      todo: "Explain",
      isEditing: false,
    },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleCheck = (id) => {
    const listTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodo(listTodo);
  };
  let sortedItems;

  //Delete
  const handleDelete = (id) => {
    const listTodo = todos.filter((todo) => todo.id !== id);
    setTodo(listTodo);
  };
  //Add
  const addTodo = (todo) => {
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
    const myNewTodo = { id, checked: false, todo, isEditing: false };
    const listTodo = [...todos, myNewTodo];
    setTodo(listTodo);
  };
  //Edit
  const handleEdit = (id) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo) return;
    addTodo(newTodo);
    setNewTodo("");
  };


  if (sortBy === "input") {
    sortedItems = todos;
  }
  if (sortBy === "name") {
    sortedItems = todos.slice().sort((a, b) => a.todo.localeCompare(b.todo));
  }
  return (
    <div className="App">
      <Header title="To-Do List" />
      <AddTodo
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleSubmit={handleSubmit}
      />
      <Content
        todos={todos}
        handleCheck={handleCheck}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        sortedItems={sortedItems}
      />

      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Sort by input</option>
        <option value="name">Sort by name</option>
        <option value="is Checked">Sort by checked</option>
      </select>
      <Footer length={todos.length} todos={todos} />
    </div>
  );
}

export default App;
