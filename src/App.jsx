import DeButton from './component/DeButton';
import InButton from './component/InButton';
import OutCome from './component/OutCome';
import User from './component/User';

import { UserProvider } from './context/userContext';

function App() {
  return (
    <div>
      <UserProvider>
        <OutCome />
        <InButton />
        <DeButton />
        <User />
      </UserProvider>
    </div>
  );
}

export default App;
