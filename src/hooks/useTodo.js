import { useEffect, useState } from "react";

export const useTodo = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text, priority, deadline) => {
    const newTodo = {
      id: Date.now(),
      text,
      priority,
      deadline,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return { todos, addTodo, deleteTodo, toggleTodo };
};
