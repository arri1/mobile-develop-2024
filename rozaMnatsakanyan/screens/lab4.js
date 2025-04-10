// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { setNumber } from '../store/numberSlice';

// const Lab4 = () => {
//   const [inputValue, setInputValue] = useState('');
//   const dispatch = useDispatch();
//   const { value, lastUpdated } = useSelector((state) => state.number);

//   const handleUpdateNumber = () => {
//     const numberValue = parseInt(inputValue) || 0;
//     dispatch(setNumber(numberValue));
//     setInputValue('');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Redux Demo</Text>
      
//       <View style={styles.card}>
//         <Text style={styles.subtitle}>Текущее значение в Redux:</Text>
//         <Text style={styles.numberDisplay}>{value}</Text>
//         {lastUpdated && (
//           <Text style={styles.timestamp}>Обновлено: {lastUpdated}</Text>
//         )}
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Введите новое значение:</Text>
//         <TextInput
//           style={styles.input}
//           value={inputValue}
//           onChangeText={setInputValue}
//           keyboardType="numeric"
//           placeholder="Введите число"
//         />
//         <Button
//           title="Обновить значение"
//           onPress={handleUpdateNumber}
//         />
//       </View>

//       <View style={styles.infoCard}>
//         <Text style={styles.infoTitle}>Как это работает?</Text>
//         <Text style={styles.infoText}>
//           1. Это значение сохраняется в Redux store
//         </Text>
//         <Text style={styles.infoText}>
//           2. Оно доступно на всех экранах приложения
//         </Text>
//         <Text style={styles.infoText}>
//           3. При изменении числа здесь, оно обновится везде
//         </Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//     color: '#2c3e50',
//   },
//   card: {
//     backgroundColor: '#f8f9fa',
//     padding: 20,
//     borderRadius: 10,
//     marginBottom: 20,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#34495e',
//     marginBottom: 10,
//   },
//   numberDisplay: {
//     fontSize: 48,
//     fontWeight: 'bold',
//     color: '#2980b9',
//     textAlign: 'center',
//   },
//   timestamp: {
//     fontSize: 12,
//     color: '#7f8c8d',
//     textAlign: 'center',
//     marginTop: 5,
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 8,
//     color: '#34495e',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#bdc3c7',
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 16,
//     fontSize: 16,
//   },
//   infoCard: {
//     backgroundColor: '#e8f4f8',
//     padding: 20,
//     borderRadius: 10,
//   },
//   infoTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 12,
//     color: '#2c3e50',
//   },
//   infoText: {
//     fontSize: 14,
//     color: '#34495e',
//     marginBottom: 8,
//     lineHeight: 20,
//   },
// });

// export default Lab4;
