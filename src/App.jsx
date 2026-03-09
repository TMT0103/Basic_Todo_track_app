import "./index.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useTodo } from "./hooks/useTodo";

function App() {
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodo();

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <main className="mx-auto w-full max-w-4xl rounded-3xl bg-white p-6 shadow-xl sm:p-8">
        <h1 className="text-center text-4xl font-extrabold text-slate-900">
          Track App
        </h1>

        <TodoInput addTodo={addTodo} />

        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </main>
    </div>
  );
}

export default App;
