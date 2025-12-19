import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [lightOn, setLightOn] = useState(false);

  return (
        <>
    <h2>Счетчик</h2>   
    <div className="counter-section">
      <p className="counter-value">{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
     
      <div className="app-container">
        <h2>Переключатель</h2>
        <p>{lightOn ? 'Свет включен' : 'Свет выключен'}</p>
        <button onClick={() => setLightOn(!lightOn)}>
          {lightOn ? 'Выкл' : 'Вкл'}
        </button>
      </div>
       </>
  );
}

export default App;
