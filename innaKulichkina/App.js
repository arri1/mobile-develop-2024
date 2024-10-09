import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Animated } from 'react-native';

export default function App() {
  // Хуки состояния для цвета и позиции
  const [color, setColor] = useState('blue');
  const [position, setPosition] = useState(new Animated.Value(0));

  // Функция для изменения цвета и перемещения
  const handlePress = () => {
    // Изменение цвета
    const newColor = color === 'blue' ? 'green' : 'blue';
    setColor(newColor);

    // Анимация перемещения
    Animated.timing(position, {
      toValue: position._value === 0 ? 100 : 0, // перемещение на 100 пикселей вниз
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.rectangle,
          { backgroundColor: color, transform: [{ translateY: position }] },
        ]}
      />
      <Button title="Change Color and Move" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});
