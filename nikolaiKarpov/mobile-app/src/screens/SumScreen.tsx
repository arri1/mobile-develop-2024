import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setLastCalculated } from '../store/sumSlice';
import { Link } from 'react-router-dom';

const SumScreen = () => {
  const [n, setN] = useState(1);
  const lastCalculated = useSelector((state: RootState) => state.sum.lastCalculated);
  const dispatch = useDispatch();

  const calculateSum = () => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    dispatch(setLastCalculated(sum));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Вычисление суммы чисел от 1 до N</h2>
      <input
        type="number"
        value={n}
        onChange={(e) => setN(Number(e.target.value))}
        min="1"
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <button 
        onClick={calculateSum}
        style={{ padding: '8px 15px', background: '#4CAF50', color: 'white', border: 'none' }}
      >
        Вычислить
      </button>
      <p>Сумма от 1 до {n}: {lastCalculated}</p>
      <Link to="/">← Назад к счетчику</Link>
    </div>
  );
};

export default SumScreen;