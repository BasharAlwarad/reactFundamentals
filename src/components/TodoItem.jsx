import { FaEdit, FaTrash, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { useTodo } from '../context/todosContext';

const TodoItem = ({ todo }) => {
  const { setTodos } = useTodo();

  const updateTodo = (todo) => {
    const newText = prompt('Update todo text:', todo.text);
    if (newText !== null && newText.trim() !== '') {
      setTodos((prev) =>
        prev.map((t) => (t.id === todo.id ? { ...t, text: newText } : t))
      );
    }
  };

  const toggleTodoCompletion = (todo) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (todo) => {
    setTodos((prev) => prev.filter((e) => e.id !== todo.id));
  };

  return (
    <li
      key={todo.id}
      className="flex flex-row border-2 border-black p-2 m-2 rounded-md justify-between align-middle"
    >
      <div className="flex items-center">
        <p className="mr-2">{todo.text}</p>
      </div>
      <div className="flex items-center">
        {todo.completed ? (
          <FaCheckCircle
            onClick={() => toggleTodoCompletion(todo)}
            className="text-green-500 cursor-pointer mx-2"
            title="Mark as Incomplete"
            size={20}
          />
        ) : (
          <FaTimesCircle
            onClick={() => toggleTodoCompletion(todo)}
            className="text-red-500 cursor-pointer mx-2"
            title="Mark as Complete"
            size={20}
          />
        )}
        <FaEdit
          onClick={() => updateTodo(todo)}
          className="text-blue-500 cursor-pointer mx-2"
          title="Edit"
          size={20}
        />
        <FaTrash
          onClick={() => deleteTodo(todo)}
          className="text-red-500 cursor-pointer"
          title="Delete"
          size={20}
        />
      </div>
    </li>
  );
};

export default TodoItem;
