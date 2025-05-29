import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { RootStackParamList } from './navigation';

type UseStateScreenNavigationProp = StackNavigationProp<RootStackParamList, 'UseState'>;

type Props = {
    navigation: UseStateScreenNavigationProp;
};

const UseStateScreen: React.FC<Props> = ({ navigation }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You clicked {count} times</Text>
      <Button
        title="Click me"
        onPress={() => setCount(count + 1)} // Обновляем состояние при нажатии на кнопку
      />
        <Button title="Перейти к useEffect" onPress={() => navigation.navigate('UseEffect')} />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default UseStateScreen;