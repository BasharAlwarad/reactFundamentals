import { useState, useContext, createContext } from 'react';

const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'John', email: 'j@gmail.com' });
  const [count, setCount] = useState(1);

  return (
    <userContext.Provider value={{ user, setUser, count, setCount }}>
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => {
  const { user, setUser, count, setCount } = useContext(userContext);
  return { user, setUser, count, setCount };
};
