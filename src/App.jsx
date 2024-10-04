import { TodosProvider } from './context/todosContext';
import { AddTodo, TodosList } from '@/components';

const App = () => {
  return (
    <TodosProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        <AddTodo />
        <TodosList />
      </div>
    </TodosProvider>
  );
};

export default App;
