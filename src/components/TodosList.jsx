import { useTodo } from '../context/todosContext';
import TodoItem from './TodoItem';

const TodosList = () => {
  const { todos } = useTodo();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodosList;
