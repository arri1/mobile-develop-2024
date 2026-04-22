import React, { useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { styles } from './styles';

function countPrimesUpTo(limit) {
  const n = Math.max(2, Math.floor(limit));
  const isPrime = new Uint8Array(n + 1);
  isPrime.fill(1);
  isPrime[0] = 0;
  isPrime[1] = 0;

  for (let p = 2; p * p <= n; p++) {
    if (!isPrime[p]) continue;
    for (let m = p * p; m <= n; m += p) isPrime[m] = 0;
  }

  let count = 0;
  for (let i = 2; i <= n; i++) if (isPrime[i]) count++;
  return count;
}

const LIMIT_OPTIONS = [
  { label: '10 000', value: 10000 },
  { label: '25 000', value: 25000 },
  { label: '50 000', value: 50000 },
  { label: '100 000', value: 100000 },
  { label: '1 000 000', value: 1000000 },
  { label: '10 000 000', value: 10000000 },
  { label: '100 000 000', value: 100000000 },
];

export default function PrimeCount() {
  const [limit, setLimit] = useState(25000);
  const [bump, setBump] = useState(0);

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(LIMIT_OPTIONS);

  const primeCount = useMemo(() => countPrimesUpTo(limit), [limit]);

  return (
    <View style={styles.container}>
      <View style={styles.pickerWrap}>
        <Text style={styles.pickerLabel}>Лимит:</Text>
        <DropDownPicker
          open={open}
          value={limit}
          items={items}
          setOpen={setOpen}
          setValue={setLimit}
          setItems={setItems}
          containerStyle={styles.pickerContainer}
          zIndex={1000}
        />
      </View>

      <View style={styles.list}>
        <View style={styles.cardFull}>
          <View style={styles.card}>
            <Text style={styles.title}>useMemo</Text>
            <Text style={styles.text}>
              Количество простых чисел от 2 до {limit}:{' '}
              <Text style={styles.bold}>{primeCount}</Text>
            </Text>
          </View>
        </View>

        <View style={styles.cardFullSpaced}>
          <View style={styles.card}>
            <Text style={styles.text}>{bump}</Text>
            <View style={styles.buttonWrap}>
              <Text
                onPress={() => setBump((x) => x + 1)}
                style={styles.button}
              >
                Увеличить
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

