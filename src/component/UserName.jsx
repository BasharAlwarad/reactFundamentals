import { useUser } from '../context/userContext';
import { useTodo } from '../context/todosContext';

const UserName = () => {
  const { user, count } = useUser();
  const { todo } = useTodo();

  return (
    <p>
      {user?.name} <br />
      {count}
      {todo?.title}
    </p>
  );
};

export default UserName;
