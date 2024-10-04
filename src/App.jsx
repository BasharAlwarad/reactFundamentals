import DeButton from './component/DeButton';
import InButton from './component/InButton';
import OutCome from './component/OutCome';
import User from './component/User';

import { UserProvider } from './context/userContext';
import { TodosProvider } from './context/todosContext';

function App() {
  return (
    <div>
      <UserProvider>
        <TodosProvider>
          <OutCome />
          <InButton />
          <DeButton />
          <User />
        </TodosProvider>
      </UserProvider>
    </div>
  );
}

export default App;
