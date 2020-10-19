import React from "react";

interface TodoProps {
  todo: { text: string; isCompleted: boolean; isDeleted: boolean };
  index: number;
  lastModified: number;
  toggleTodoCompletion: (index: number) => void;
  toggleTodoDeletion: (index: number) => void;
  editTodo: (index: number, text: string) => void;
  deleteTodo: (index: number) => void;
}

function Todo({
  todo,
  index,
  toggleTodoCompletion,
  editTodo,
  toggleTodoDeletion,
  deleteTodo,
}: TodoProps) {
  return (
    <div className={`todo ${todo.isCompleted ? "todo-completed" : ""}`}>
      <div className="" style={{ width: "22px" }}>
        <input
          type="checkbox"
          disabled={todo.isDeleted}
          checked={todo.isCompleted}
          onChange={() => toggleTodoCompletion(index)}
        />
      </div>
      <div className="todo-item-text">
        <input
          value={todo.text}
          style={{
            border: "0px",
            width: "97%",
            textDecoration:
              todo.isCompleted || todo.isDeleted ? "line-through" : "",
            color: todo.isDeleted ? "#d32f2f" : "",
          }}
          onChange={(e) => editTodo(index, e.target.value)}
        />
      </div>
      <div className="" style={{ maxWidth: "100px" }}>
        {todo.isDeleted === false ? (
          <button onClick={() => toggleTodoDeletion(index)}>x</button>
        ) : (
          <>
            <button onClick={() => toggleTodoDeletion(index)}>+</button>
            <button style={{ color: "red" }} onClick={() => deleteTodo(index)}>
              x
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default React.memo(Todo);
