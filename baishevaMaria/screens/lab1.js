import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setMessage, setBgColor } from '../store/store';

export default function Lab1() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.global.message);
  const bgColor = useSelector((state) => state.global.bgColor);
  const theme = useSelector((state) => state.global.theme);

  const changeBackgroundColor = () => {
    dispatch(setMessage('Нажми на кнопку!'));
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FFFF33', '#FF33FF'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    dispatch(setBgColor(randomColor));
  };

  const appStyles = theme === 'light' ? styles.lightTheme : styles.darkTheme;

  return (
    <View style={[styles.container, appStyles]}>
      <View style={[styles.square, { backgroundColor: bgColor }]} />
      <Text style={[styles.text, appStyles]}>{message || 'Нажмите на кнопку!'}</Text>
      <Button title="START" onPress={changeBackgroundColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 18, // Прежний размер текста
    marginBottom: 20,
  },
  lightTheme: {
    backgroundColor: '#ffffff',
    color: '#000000',
  },
  darkTheme: {
    backgroundColor: '#333333',
    color: '#ffffff',
  },
});