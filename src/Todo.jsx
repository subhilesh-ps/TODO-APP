import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
  });
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(event) =>
          setTodo({ id: Math.random(), task: event.target.value })
        }
      />
      <button onClick={() => setTodos((prev) => [...prev, todo])}>
        Add Todo
      </button>

      <div>
        {todos.map((todo) => (
          <p key={todo.id}>{todo.task}</p>
        ))}
      </div>
    </div>
  );
};

export default Todo;

// setTodos({ id: "", task: ""})
