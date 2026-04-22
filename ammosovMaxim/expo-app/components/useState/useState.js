import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function Counter() {
  const [age, setAge] = useState(18);
  const [name, setName] = useState('');

  const increment = () => setAge((a) => a + 1);
  const decrement = () => setAge((a) => Math.max(0, a - 1));

  return (
    <View>
      <View style={styles.table}>
        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.cell, styles.headerText]}>useState</Text>
        </View>

        <View style={styles.row}>
          <Text style={[styles.cell, styles.nameCell, styles.labelText]}>
            Возраст: <Text style={styles.valueText}>{age}</Text>
          </Text>
          <View style={[styles.cell, styles.qtyCell, styles.qtyControls]}>
            <TouchableOpacity style={styles.btn} onPress={decrement}>
              <Text style={styles.btnText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qtyText}>{age}</Text>
            <TouchableOpacity style={styles.btn} onPress={increment}>
              <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={[styles.cell, styles.nameCell, styles.labelText]}>
            Привет, <Text style={styles.valueText}>{name}</Text>
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Имя"
            value={name}
            onChangeText={setName}
          />
        </View>
      </View>
    </View>
  );
}

