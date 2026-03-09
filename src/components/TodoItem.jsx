import { TrashIcon } from "@heroicons/react/24/outline";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  const priority = todo.priority || "Medium";

  const priorityClass =
    priority === "High"
      ? "bg-red-100 text-red-700"
      : priority === "Low"
        ? "bg-emerald-100 text-emerald-700"
        : "bg-amber-100 text-amber-700";

  return (
    <article className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
      <div className="min-w-0 flex-1">
        <button
          type="button"
          onClick={() => toggleTodo(todo.id)}
          className={`block truncate text-left text-base ${
            todo.completed ? "text-slate-400 line-through" : "text-slate-800"
          }`}
        >
          {todo.text}
        </button>

        <div className="mt-1 flex items-center gap-2">
          <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${priorityClass}`}>
            {priority}
          </span>
          {todo.deadline && (
            <span className="text-xs text-slate-500">Due: {todo.deadline}</span>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={() => deleteTodo(todo.id)}
        className="rounded-lg p-1 text-rose-500 transition hover:bg-rose-50 hover:text-rose-600"
        aria-label="Delete todo"
      >
        <TrashIcon className="h-5 w-5" />
      </button>
    </article>
  );
};

export default TodoItem;
