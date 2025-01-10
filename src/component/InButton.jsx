import { useUser } from '../context/userContext';

const InButton = () => {
  const { setCount } = useUser();
  return <button onClick={() => setCount((pre) => pre + 1)}>Add</button>;
};

export default InButton;
// const InButton = ({ onClick }) => {
//   return <button onClick={onClick}>Add</button>;
// };

// export default InButton;
