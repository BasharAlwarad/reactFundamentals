import { useState } from 'react';
import { useTodo } from '../context/todosContext';

const AddTodo = () => {
  const { setTodos } = useTodo();
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (todoText.trim() === '') {
      alert('Please enter a todo item!');
      return;
    }

    const newId = Date.now();
    const newTodo = { id: newId, text: todoText, completed: false };

    setTodos((prev) => [...prev, newTodo]);
    setTodoText('');
  };

  return (
    <form onSubmit={handleAddTodo} className="flex items-center mb-4">
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Add a new todo..."
        className="border-2 border-black rounded-md p-2 mr-2 flex-grow"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-md px-4 py-2"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
