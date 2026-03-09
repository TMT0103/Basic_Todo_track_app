import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [deadline, setDeadline] = useState("");

  const handleAdd = () => {
    if (!text.trim() || !deadline ) return;

    addTodo(text, priority, deadline || null);
    setText("");
    setPriority("Medium");
    setDeadline("");
  };

  const handleKeyEnter = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <section className="mt-8 rounded-2xl border border-slate-200 bg-gradient-to-r from-blue-50 to-pink-50 p-4 shadow-md sm:p-5">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,2fr)_150px_180px_auto]">
        <input
          type="text"
          value={text}
          placeholder="Add todo..."
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyEnter}
          className="h-12 w-full rounded-xl border border-blue-200 bg-white px-4 text-black placeholder:text-slate-500 shadow-sm outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-300"
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          aria-label="Select priority"
          className="h-12 w-full rounded-xl border border-blue-200 bg-white px-3 text-black shadow-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-300"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
          className="h-12 w-full rounded-xl border border-blue-200 bg-white px-3 text-black shadow-sm outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-300"
        />

        <button
          type="button"
          onClick={handleAdd}
          disabled={!text.trim() || !deadline}
          className="h-12 w-full rounded-xl bg-gradient-to-r from-blue-500 to-pink-500 px-6 font-semibold text-white shadow-md transition hover:from-blue-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300 disabled:cursor-not-allowed disabled:opacity-50 lg:w-auto"
        >
          Add
        </button>
      </div>
    </section>
  );
};

export default TodoInput;
