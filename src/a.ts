import React from "react";

interface TodoType {
  title: string;
  description: string;
  done: boolean;
}

interface TodoInput {
  todo: TodoType;
}

function Todo({ todo }: TodoInput): JSX.Element {
  return (
    <div>
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
      <p>Status: {todo.done ? "Completed ✅" : "Pending ⏳"}</p>
    </div>
  );
}

export default Todo;
