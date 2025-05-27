import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { increment, decrement, reset } from '../store/counterSlice';

const CounterScreen = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-section">
      <h2>Счетчик: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Сбросить</button>
    </div>
  );
};

export default CounterScreen; 