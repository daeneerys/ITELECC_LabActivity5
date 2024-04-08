

const Footer = ({ length, todos }) => {
  let itemCheckedCount = todos.filter((todo) => todo.checked).length;
  
  return (
    <footer>
      <p>
        {length} List {length === 1 ? "todo" : "todos"} and you already completed {itemCheckedCount}  {itemCheckedCount === 1 ? "todo" : "todos."}
      </p>
    </footer>
  );
};

export default Footer;
