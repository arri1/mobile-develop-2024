import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [weatherError, setWeatherError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let isActive = true;

    async function loadWeather() {
      try {
        setWeatherLoading(true);
        setWeatherError(null);
        const url =
          'https://api.open-meteo.com/v1/forecast' +
          '?latitude=62.0281&longitude=129.7326&current_weather=true';
        const res = await fetch(url);
        if (!res.ok) throw new Error('Weather request failed');
        const json = await res.json();
        if (!isActive) return;
        setWeather(json.current_weather || null);
      } catch (e) {
        if (!isActive) return;
        setWeatherError('Не удалось загрузить погоду');
      } finally {
        if (isActive) setWeatherLoading(false);
      }
    }

    loadWeather();
    return () => {
      isActive = false;
    };
  }, [reloadKey]);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Погода (Якутск)</Text>
        <View style={styles.refreshWrap}>
          <TouchableOpacity
            style={styles.btnLg}
            onPress={() => setReloadKey((x) => x + 1)}
            disabled={weatherLoading}
          >
            <Text style={styles.btnLgText}>
              {weatherLoading ? 'Загрузка…' : 'Обновить'}
            </Text>
          </TouchableOpacity>
        </View>

        {weatherLoading ? (
          <Text>Загрузка...</Text>
        ) : weatherError ? (
          <Text>{weatherError}</Text>
        ) : weather ? (
          <View style={styles.card}>
            <Text style={styles.line}>
              Температура: {weather.temperature}°C
            </Text>
            <Text style={styles.line}>
              Ветер: {weather.windspeed} км/ч
            </Text>
            <Text style={styles.meta}>
              Обновлено: {weather.time}
            </Text>
          </View>
        ) : (
          <Text>Нет данных о погоде</Text>
        )}
      </View>
    </View>
  );
}

