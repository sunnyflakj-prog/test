import { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const [lightOn, setLightOn] = useState(false);
    const [text, setText] = useState('Привет!');
    const toggleText = () => {
    setText(text === 'Привет!' ? 'Пока!' : 'Привет!');
    };
  return (
        <>

    <div className="counter-section">
     <h2>Счетчик просто 1</h2>
      <p className="counter-value">{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>

    <div>

      <h2>Изменение текста</h2>
      <p>{text}</p>
      <button onClick={toggleText}>
        Изменить текст
      </button>    

    </div>

     <div>
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
