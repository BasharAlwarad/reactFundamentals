import { useUser } from '../context/userContext';

const UserEmail = () => {
  const { user } = useUser();

  return <p>{user?.email}</p>;
};

export default UserEmail;
