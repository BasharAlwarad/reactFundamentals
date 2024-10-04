import { useState, useContext, createContext, useEffect } from 'react';

const todoContext = createContext();

export const TodosProvider = ({ children }) => {
  const getInitialTodos = () => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos
      ? JSON.parse(storedTodos)
      : [
          { id: 1, text: 'Learn React', completed: true },
          { id: 2, text: 'Go shopping', completed: false },
          { id: 3, text: 'Write code', completed: false },
          { id: 4, text: 'Read a book', completed: true },
        ];
  };

  const [todos, setTodos] = useState(getInitialTodos);

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
