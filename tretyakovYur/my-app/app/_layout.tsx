import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store'; // Подключаем store
import TabLayout from './(tabs)/_layout';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <TabLayout />
    </Provider>
  );
}
