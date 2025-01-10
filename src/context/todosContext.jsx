import { useState, useEffect, useContext, createContext } from 'react';

const todoContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todo, setTodo] = useState({ todo: 'something to do', id: 1 });

  const getTodo = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/1`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setTodo(json);
      })
      .catch((error) => console.error('Error fetching todo:', error));
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <todoContext.Provider value={{ todo, setTodo }}>
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
