import { useState, useEffect, useContext, createContext } from 'react';

const todosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todo, setTodo] = useState({ todo: 'something to do', id: 1 });

  const getUser = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/1`)
      .then((response) => response.json())
      .then((json) => setTodo(json));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <todosContext.Provider value={{ todo, setTodo }}>
      {children}
    </todosContext.Provider>
  );
};

export const useTodo = () => {
  const { todo, setTodo } = useContext(todosContext);
  return { todo, setTodo };
};
