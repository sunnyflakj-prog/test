import { useState } from 'react';

function ColorCycle() {
  const [color, setColor] = useState('red');
  const [mood, setMood] = useState('😀');

  // Функция 1: смена цвета
  const changeColor = () => {
    const colors = ['red', 'green', 'blue', 'yellow'];
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  // Функция 2: смена настроения — ВНЕ функции changeColor!
  const changeMood = () => {
    const moods = ['😀', '😐', '😢'];
    const currentIndex = moods.indexOf(mood);
    const nextIndex = (currentIndex + 1) % moods.length;
    setMood(moods[nextIndex]);
  };

  return (
    <div>
      <h2>Переключение цвета (цикл)</h2>
      <div style={{ width: '100px', height: '100px', background: color, border: '1px solid #000' }}></div>
      <button onClick={changeColor}>Сменить цвет</button>

      <h2>Переключатель эмодзи</h2>
      <p style={{ fontSize: '3rem' }}>{mood}</p>
      <button onClick={changeMood}>Сменить настроение</button>
    </div>
  );
}

export default ColorCycle;
