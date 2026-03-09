import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <section className="mt-6 rounded-2xl border border-slate-200 bg-gradient-to-r from-blue-50 to-pink-50 p-4 shadow-md sm:p-5">
      <h2 className="mb-4 text-2xl font-bold text-blue-700">Todo List</h2>

      {todos.length === 0 ? (
        <p className="py-4 text-center text-xl italic text-slate-500">No todo yet</p>
      ) : (
        <div className="space-y-3">
          {todos.map((todo) => (
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
