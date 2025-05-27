import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const TextScreen = () => {
  const [text, setText] = useState('');
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div className="text-section">
      <h2>Текущий счетчик: {count}</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите текст"
      />
      <p>Вы ввели: {text || 'ничего'}</p>
    </div>
  );
};

export default TextScreen;