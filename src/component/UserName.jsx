import { useUser } from '../context/userContext';
import { useTodo } from '../context/todosContext';

// const UserName = ({ user }) => {
const UserName = () => {
  const { user } = useUser();
  const { todo } = useTodo();

  return (
    <p>
      {user?.name}
      <br />
      {todo?.title}
    </p>
  );
};

export default UserName;
