import { useUser } from '../context/userContext';
const OutCome = () => {
  const { count } = useUser();
  return <h1>{count}</h1>;
};

export default OutCome;
