"use client";
import { useContext } from "react";
import { StoreContext } from "../store"
import { actions } from "../state"

export default function Home() {
  const [state, dispatch] = useContext(StoreContext);
  const { todos, todoInput } = state;

  return (
    <div>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
      />
      <button onClick={() => dispatch(actions.addTodoInput(todoInput))}>ADD</button>
      {todos.map((todo: any, index: number) => (
        <li key={index}>{todo}</li>
      ))}
    </div>
  );
}
