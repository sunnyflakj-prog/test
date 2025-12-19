import { useState } from 'react';
import './App.css';

function App() {
    const [text, setText] = useState('Привет!');
    const toggleText = () => {
    setText(text === 'Привет!' ? 'Пока!' : 'Привет!');
    };
  return (
        <>
    <div>
      <h2>Изменение текста</h2>
      <p>{text}</p>
      <button onClick={toggleText}>
        Изменить текст
      </button>    </div>
       </>
  );
}

export default App;
