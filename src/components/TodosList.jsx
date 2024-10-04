import { useTodo } from '../context/todosContext';
import TodoItem from './TodoItem';

const TodosList = () => {
  const { todos, setTodos } = useTodo();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} setTodos={setTodos} />
      ))}
    </ul>
  );
};

export default TodosList;
