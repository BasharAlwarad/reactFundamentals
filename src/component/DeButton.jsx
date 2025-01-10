import { useUser } from '../context/userContext';

const DeButton = () => {
  const { setCount } = useUser();
  return <button onClick={() => setCount((pre) => pre - 1)}>subtract</button>;
};

export default DeButton;
