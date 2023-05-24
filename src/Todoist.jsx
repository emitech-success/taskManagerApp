import "./TodoistContext.css";

import React, { useContext, useState } from "react";

// import { Link } from "react-router-dom";
import TodoContext from "./helper/Context/Todo-context/TodoContext";
import { v4 as uuidv4 } from "uuid";

export const Todoist = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [isEditMode, setIsEditMode] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState({});

  const { addTodo, todos, toggleTodoComplete, deleteTodo, updateTodo } =
    useContext(TodoContext);
    const handleSubmit = (e) =>{
      e.preventDefault();
      if (title.trim() !== "") {
        // const handleAddTodo = () => {
          const newTodo = {
            id: uuidv4(),
            title: title,
            description: description,
            isCompleted: false,
          };
          // handleAddTodo()
          addTodo(newTodo);
          setTitle("");
          setDescription("");
        // };
      }
    }

   

  

  const handleEditMode = (todoObject) => {
    setIsEditMode(true);
    setTodoToEdit(todoObject);
    setTitle(todoObject.title);
    setDescription(todoObject.description);
  };

  const handleUpdateTodo = () => {
    const newTodoObject = { id: todoToEdit.id, title, description };
    updateTodo(newTodoObject);
    setIsEditMode(false);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="task_app_wrapper">
      <h2>
        PERSONAL <br /> TASK MANAGER
      </h2>
      {isEditMode ? (
        
        <section className="modal_form">
          <input
            type="text"
            placeholder="Update task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Update task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="edit-btn" 
          onClick={handleUpdateTodo}
          >
            {" "}
            Update Task
          </button>
        </section>
        
      ) : (
        <form onSubmit={handleSubmit}>
          <section className="modal_form">
            <input
              type="text"
              placeholder="Enter todo title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Task Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className="add-btn" 
            // onClick={handleAddTodo}
            >
              {" "}
              Add Todo
            </button>
          </section>
        </form>
      )}

      <section>
        <div className="task_container">
          {todos.map((todo) => {
            const { isCompleted, id, title, description } = todo;

            return (
              <div
                className={isCompleted ? "completed" : null}
                key={id}
                id="task_item"
              >
                <div>
                  <p>
                    {" "}
                    <span className="task_title task_text">{title}</span>
                  </p>
                  <p>
                    <span className="task_text">{description}</span>
                  </p>
                </div>
                <div className="todo-action-buttons">
                  <button
                    className="action-btn item_check"
                    onClick={() => toggleTodoComplete(id)}
                  >
                    {isCompleted ? "—" : "✔"}
                  </button>
                  {/* edit button */}
                  <button
                    className="action-btn item_edit"
                    onClick={() => handleEditMode(todo)}
                  >
                    ✍
                  </button>
                  {/* delete button */}
                  <button
                    className="action-btn item_delete"
                    onClick={() => deleteTodo(id)}
                  >
                    ❌
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Todoist;
