import React, { useState, useMemo } from 'react';
import './App.css';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>('');

  const calculateSum = (n: number): number => {
    console.log('Calculating sum...');
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  };

  const memoizedSum = useMemo(() => calculateSum(count), [count]);

  return (
    <div className="app">
      <h1>Мобильное приложение</h1>
      
      <div className="counter-section">
        <h2>Счётчик: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Увеличить</button>
        <button onClick={() => setCount(count - 1)}>Уменьшить</button>
        <button onClick={() => setCount(0)}>Сбросить</button>
        <p>Сумма от 1 до {count}: {memoizedSum}</p>
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