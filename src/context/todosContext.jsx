import { useState, useContext, createContext, useEffect } from 'react';

const todoContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <todoContext.Provider value={{ todos, setTodos }}>
      {children}
    </todoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(todoContext);

  if (!context) {
    throw new Error('useTodo must be used within a TodosProvider');
  }

  return context;
};
