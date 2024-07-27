import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);

  const filters = useSelector((state) => state.filters);

  return (
    <div>
      {todos.length === 0 && <h1>No todo found</h1>}
      {todos
        .filter((todo) => {
          const { status } = filters;
          switch (status) {
            case "Complete":
              return todo.completed;

            case "Incomplete":
              return !todo.completed;

            default:
              return true;
          }
        })
        .filter((todo) => {
          const { colors } = filters;
          if (colors.length > 0) {
            return colors.includes(todo?.color);
          }
          return true;
        })
        .map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
    </div>
  );
}
