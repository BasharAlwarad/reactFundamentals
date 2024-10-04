import { TodosProvider } from './context/todosContext';
import { AddTodo, TodosList } from '@/components';

const App = () => {
  return (
    <TodosProvider>
      <div className="max-w-lg mx-auto p-4">
        <div className="card bg-base-10 shadow-xl p-6">
          <h1 className="text-3xl font-bold mb-4 text-center">Todo List</h1>
          <AddTodo />
          <TodosList />
        </div>
      </div>
    </TodosProvider>
  );
};

export default App;
