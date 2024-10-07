import { useCalc } from './contexts/calcContext';

const App = () => {
  const { state, dispatch } = useCalc();

  return (
    <div className="p-4 text-2xl">
      {/* Input for first number */}
      <input
        type="number"
        className="p-2 m-2 border-2 border-black rounded-xl min-w-20"
        value={state.num1}
        onChange={(e) =>
          dispatch({ type: 'setNum1', payload: Number(e.target.value) })
        }
        placeholder="Enter first number"
      />

      {/* Input for second number */}
      <input
        type="number"
        className="p-2 m-2 border-2 border-black rounded-xl min-w-20"
        value={state.num2}
        onChange={(e) =>
          dispatch({ type: 'setNum2', payload: Number(e.target.value) })
        }
        placeholder="Enter second number"
      />

      {/* Operation buttons */}
      <div className="flex mt-4 space-x-2">
        <button
          className="p-2 m-2 border-2 border-black rounded-xl min-w-20"
          onClick={() => dispatch({ type: 'multiply' })}
        >
          Multiply
        </button>

        <button
          className="p-2 m-2 border-2 border-black rounded-xl min-w-20"
          onClick={() => dispatch({ type: 'add' })}
        >
          Add
        </button>

        <button
          className="p-2 m-2 border-2 border-black rounded-xl min-w-20"
          onClick={() => dispatch({ type: 'subtract' })}
        >
          Subtract
        </button>

        <button
          className="p-2 m-2 border-2 border-black rounded-xl min-w-20"
          onClick={() => dispatch({ type: 'divide' })}
        >
          Divide
        </button>
      </div>

      {/* Display the result with error handling for division */}
      <div className="p-2 m-2">
        {state.result === 'Cannot divide by zero' ? (
          <div className="text-red-500">Error: Cannot divide by zero</div>
        ) : (
          <div>Result: {state.result}</div>
        )}
      </div>
    </div>
  );
};

export default App;
