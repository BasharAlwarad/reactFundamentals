import { useState } from 'react';
import Button from './components/Button';
import Name from './components/Name';

function App() {
  //      var   reset value         default value
  const [name, setName] = useState('bashar');

  const [number, setNumber] = useState(1);

  const add = () => {
    setNumber((x) => x + 1);
  };

  return (
    <div>
      <Button title={'change name'} setName={setName} />
      <br />
      <Name name={name} />
      <br />
      <button onClick={add}>add</button>
      <button onClick={() => setNumber((x) => x - 1)}>sub</button>
      <br />
      {number}
      <br />
      <br />
    </div>
  );
}

export default App;
