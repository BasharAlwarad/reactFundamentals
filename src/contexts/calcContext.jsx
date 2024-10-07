import { useReducer, useContext, createContext } from 'react';

const CalcContext = createContext();

export const CalcProvider = ({ children }) => {
  const initialState = {
    num1: 0,
    num2: 0,
    result: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'setNum1':
        return { ...state, num1: action.payload };
      case 'setNum2':
        return { ...state, num2: action.payload };
      case 'multiply':
        return { ...state, result: state.num1 * state.num2 };
      case 'add':
        return { ...state, result: state.num1 + state.num2 };
      case 'subtract':
        return { ...state, result: state.num1 - state.num2 };
      case 'divide':
        return {
          ...state,
          result:
            state.num2 !== 0
              ? state.num1 / state.num2
              : 'Cannot divide by zero',
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CalcContext.Provider value={{ state, dispatch }}>
      {children}
    </CalcContext.Provider>
  );
};

export const useCalc = () => {
  return useContext(CalcContext);
};
