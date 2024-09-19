import { useEffect, useState } from 'react';

const Candle = () => {
  const [candleHeight, setCandleHeight] = useState(100);

  useEffect(() => {
    const timer = setInterval(
      () =>
        setCandleHeight((prev) => {
          if (prev === 10) return 90;
          return prev - 10;
        }),
      2000
    );
    return () => clearInterval(timer);
  });

  return (
    <div className="exercise">
      {/* <div>
        <button>Make candle smaller</button>
      </div> */}
      <div className="candleContainer" style={{ height: `${candleHeight}%` }}>
        {/* <div className="candleContainer" style={{ height: `${candleHeight}%` }}> */}
        <div className="candle">
          <div className="flame">
            <div className="shadows" />
            <div className="top" />
            <div className="middle" />
            <div className="bottom" />
          </div>
          <div className="wick" />
          <div className="wax" />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return <Candle />;
};

export default App;
