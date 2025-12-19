import { useState } from 'react';
function ClickHistory() {
  const [history, setHistory] = useState([]);

  const addPlus = () => {
    setHistory([...history, '+1']);
  };

  const addMinus = () => {
    setHistory([...history, '-1']);
  };

  return (
    <div>
      <h2>История кликов</h2>
      <button onClick={addPlus}>+1</button>
      <button onClick={addMinus} style={{ marginLeft: '10px' }}>-1</button>
      <div style={{ marginTop: '10px' }}>
        <h3>История:</h3>
        <pre style={{ background: '#d70303ff', padding: '10px', borderRadius: '4px' }}>
          {JSON.stringify(history, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default ClickHistory;