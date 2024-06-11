import "./App.css";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

function App() {
  const [inputValue, setInputValue] = useState({
    id: "",
    task: "",
  });

  const [inputArray, setInputArray] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const handleChange = (event) => {
    setInputValue({ id: Math.random(), task: event.target.value });
  };

  const handleClick = () => {
    if (isEditing) {
      setInputArray((prev) =>
        prev.map((item) =>
          item.id === currentId ? { ...item, task: inputValue.task } : item
        )
      );

      setIsEditing(false);
      setCurrentId(null);
    } else {
      setInputArray((prev) => [...prev, inputValue]);
    }

    setInputValue({ id: "", task: "" });
  };
  const handleClear = () => {
    setInputArray([]);
  };

  const handleDelete = (id) => {
    const newItem = inputArray.filter((element) => element.id !== id);
    setInputArray(newItem);

    // console.log(taskToDelete);
  };

  const handleEdit = (id) => {
    const itemToEdit = inputArray.find((item) => item.id === id);
    setInputValue({ id: itemToEdit.id, task: itemToEdit.task });
    setIsEditing(true);
    setCurrentId(id);
  };

  return (
    <>
      <h1>Daily Task Manager</h1>
      <input type="text" value={inputValue.task} onChange={handleChange} />

      <button onClick={handleClick}>{isEditing ? "Update" : "Submit"} </button>

      <button onClick={handleClear}>Clear</button>
      {inputArray.map((item) => (
        <div className="manage" key={item.id}>
          <h4>{item.task}</h4>
          <button onClick={() => handleEdit(item.id)}>
            {" "}
            Edit
            {/* <i class="fa-regular fa-pen-to-square"></i> */}
          </button>
          <button
            onClick={() => {
              handleDelete(item.id);
            }}
          >
            delete
            <FaTrash style={{ color: "red" }} />
          </button>
        </div>
      ))}
    </>
  );
}

export default App;
