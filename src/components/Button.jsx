const Button = ({ title, setName }) => {
  const changeName = () => {
    setName('John');
  };

  return <button onClick={changeName}>{title} </button>;
};

export default Button;
