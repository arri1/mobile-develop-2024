import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'MainMenu'>;

const MainMenu = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Главное меню</Text>
      <Button title="Открыть счётчик (useState)" onPress={() => navigation.navigate('UseStateCounter')} />
      <Button title="Открыть useEffect" onPress={() => navigation.navigate('UseEffectScreen')} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff',
  },
  title: {
    fontSize: 24, fontWeight: 'bold', marginBottom: 20,
  },
});

export default MainMenu;