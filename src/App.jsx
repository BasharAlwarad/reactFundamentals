import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(1);
  const [num2, setNum2] = useState(0);

  const add = () => setNum(num + 1);
  const sub = () => setNum(num - 1);
  const add2 = () => setNum2(num2 + 1);
  const sub2 = () => setNum2(num2 - 1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
      .then((response) => response.json())
      .then((json) => setData(json));
    console.log('I am from useEffect!');
  }, [num]);

  useEffect(() => {
    const x = setInterval(() => {
      console.log('Hello john');
    }, 1000);

    return () => {
      clearInterval(x);
    };
  }, []);

  useEffect(() => {
    const x = setTimeout(() => {
      console.log('Hello im a setTimeout how are you today adfasdfasdf');
    }, 1000);
    return () => {
      clearTimeout(x);
    };
  }, []);

  return (
    <div>
      <button onClick={add}>Add</button>
      <button onClick={sub}>Sub</button>
      <p>{num} </p>
      <br />
      <button onClick={add2}>Add</button>
      <button onClick={sub2}>Sub</button>
      <p>{num2} </p>
      <br />
      <p>{data.title}</p>
    </div>
  );
}

export default App;
