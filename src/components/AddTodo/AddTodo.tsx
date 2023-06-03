import React from "react";
import { FormEvent, FunctionComponent, useState } from "react";
import { en } from "../../locale";

export interface Props {
  onAdd: (description: string) => void;
}

export const AddTodo: FunctionComponent<Props> = ({ onAdd }) => {
  const [todoText, setTodoText] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    onAdd(todoText);
  }

  const todoInputId = "todoInput";

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "grid",
        gridTemplateColumns: "max-content auto max-content",
        gap: "1rem"
      }}
    >
      <label htmlFor={todoInputId} style={{ marginRight: "0.5rem" }}>
        {en.addTodo}
      </label>
      <input
        type="text"
        id={todoInputId}
        onChange={(event) => setTodoText(event.target.value)}
        value={todoText}
        style={{ width: "100%" }}
      />
    </form>
  );
};
