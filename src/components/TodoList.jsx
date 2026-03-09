import { useState, useMemo } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  const [sortOrder, setSortOrder] = useState(null); 
  // null = không sort
  // asc = gần nhất
  // desc = xa nhất

  const visibleTodos = useMemo(() => {
    if (!sortOrder) return todos;

    const sorted = [...todos].sort(
      (a, b) => new Date(a.deadline) - new Date(b.deadline)
    );

    return sortOrder === "asc" ? sorted : sorted.reverse();
  }, [todos, sortOrder]);

  const handleSort = () => {
    if (sortOrder === null) setSortOrder("asc");
    else if (sortOrder === "asc") setSortOrder("desc");
    else setSortOrder("asc");
  };

  return (
    <section className="mt-6 rounded-2xl border border-slate-200 bg-gradient-to-r from-blue-50 to-pink-50 p-4 shadow-md sm:p-5">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold text-blue-700">Todo List</h2>

        <button
          onClick={handleSort}
          className="h-10 rounded-lg border border-blue-200 bg-white px-3 text-black shadow-sm hover:bg-blue-100"
        >
          {sortOrder === "asc"
            ? "⬇ Sort: Xa nhất"
            : "⬆ Sort: Gần nhất"}
        </button>
      </div>

      {visibleTodos.length === 0 ? (
        <p className="py-4 text-center text-xl italic text-slate-500">
          No todo yet
        </p>
      ) : (
        <div className="space-y-3">
          {visibleTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default TodoList;