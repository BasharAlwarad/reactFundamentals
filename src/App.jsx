import { useState } from 'react';
import DeButton from './component/DeButton';
import InButton from './component/InButton';
import OutCome from './component/OutCome';
import User from './component/User';

import { UserProvider } from './context/userContext';
import { TodosProvider } from './context/todosContext';
// import { UserProvider, useUser } from './context/userContext';

function App() {
  // const { count, setCount } = useUser();
  const [count, setCount] = useState(1);

  const add = () => setCount(count + 1);
  const sub = () => setCount(count - 1);

  return (
    <div>
      <UserProvider>
        <TodosProvider>
          <OutCome count={count} />
          <InButton onClick={add} />
          <DeButton onClick={sub} />
          <User />
        </TodosProvider>
      </UserProvider>
    </div>
  );
}

export default App;
