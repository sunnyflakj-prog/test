import { useState } from 'react';
import './App.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handlePlus() {
    setCount(count + 1);
  }

  function handleMinus() {
    setCount(count - 1);
  }

  return (
    <div className="counter-section">
      <p className="counter-value">{count}</p>
      <button onClick={handleMinus}>-1</button>
      <button onClick={handlePlus}>+1</button>
    
    </div>
  );
}
