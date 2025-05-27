import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  // Состояние для счётчика
  const [count, setCount] = useState<number>(0);
  
  // Состояние для текста
  const [text, setText] = useState<string>('');

  return (
    <div className="app">
      <h1>Мобильное приложение</h1>
      
      <div className="counter-section">
        <h2>Счётчик: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Увеличить</button>
        <button onClick={() => setCount(count - 1)}>Уменьшить</button>
        <button onClick={() => setCount(0)}>Сбросить</button>
      </div>

      <div className="text-section">
        <h2>Работа с текстом</h2>
        <input 
          type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Введите текст"
        />
        <p>Вы ввели: {text || 'ничего'}</p>
      </div>
    </div>
  );
}

export default App;