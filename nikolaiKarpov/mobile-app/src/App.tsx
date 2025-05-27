import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { store } from './store/store';
import CounterScreen from './screens/CounterScreen';
import TextScreen from './screens/TextScreen';
import SumScreen from './screens/SumScreen';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <nav>
          <Link to="/">Счетчик</Link> | 
          <Link to="/text">Текст</Link> | 
          <Link to="/sum">Сумма</Link>
        </nav>
        <Routes>
          <Route path="/" element={<CounterScreen />} />
          <Route path="/text" element={<TextScreen />} />
          <Route path="/sum" element={<SumScreen />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;