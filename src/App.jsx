/* eslint-disable react/no-unescaped-entities */
import Button from "react-bootstrap/Button";

import "./App.css";
import logo from "./assets/images/Todo.png";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";

import { IoIosTrash } from "react-icons/io";

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
    if (inputValue.task === "") {
      alert("no task, add a task");
      return;
    }
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
    <Container className="main">
      <div className="header">
        <img src={logo} alt="" style={{ width: "10rem" }} />
        <h1
          style={{
            color: "gray",
            fontFamily: "fantasy",
            fontWeight: "bolder",
          }}
        >
          TO Do{" "}
        </h1>
        <p style={{ color: " gray" }}>Remind Me Every Thing's</p>
      </div>
      <input
        className="input"
        placeholder="  Enter your Activity"
        type="text"
        value={inputValue.task}
        onChange={handleChange}
      />
      <Button variant="outline-success" onClick={handleClick} className="btn">
        {isEditing ? "Update" : "Submit"}
      </Button>

      <Button variant="outline-danger" onClick={handleClear} className="btn">
        Clear
      </Button>
      <h4 style={{ color: "gray", marginBottom: "15px" }}>Todo List </h4>
      <div className="footer-box">
        {inputArray.map((item) => (
          <div className="footer" key={item.id}>
            <h5 style={{ paddingRight: "100px", color: "white" }}>
              {item.task}
            </h5>
            <div className="d-flex gap-3">
              <FaEdit
                onClick={() => handleEdit(item.id)}
                style={{ fontSize: "25px", color: "#19824c" }}
              />

              <IoIosTrash
                style={{
                  fontSize: "30px",
                  color: "#bd2930",
                }}
                onClick={() => {
                  handleDelete(item.id);
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default App;
