import React, { useState, useMemo, useCallback } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  ActivityIndicator,
  Keyboard 
} from 'react-native';

const API_KEY = 'fb55c434b593d7e53d17f9a7911897f4';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cityInput, setCityInput] = useState('');
  const [lastSearchedCity, setLastSearchedCity] = useState('');
  const [log, setLog] = useState('');
  
  // Мемо
  const fetchWeatherWithMemo = useMemo(() => async () => {
    const start = performance.now();
    const result = heavyCalculation();
    const time = performance.now() - start;
    setLog(prev => `[Memo] Вычисления: ${time.toFixed(2)}ms\n${prev}`);
    await handleWeatherFetch();
  }, [cityInput]);

  // Обычная версия без мемо
  const fetchWeatherWithoutMemo = async () => {
    const start = performance.now();
    const result = heavyCalculation();
    const time = performance.now() - start;
    setLog(prev => `[Без оптимизации] Вычисления: ${time.toFixed(2)}ms\n${prev}`);
    await handleWeatherFetch();
  };

  const handleWeatherFetch = async () => {
    if (!cityInput.trim()) return;
    try {
      setLoading(true);
      setError(null);
      Keyboard.dismiss();

      const response = await fetch(
        `${API_URL}?q=${cityInput.trim()}&appid=${API_KEY}&units=metric&lang=ru`
      );
      
      if (!response.ok) {
        throw new Error('Город не найден');
      }
      
      const data = await response.json();
      processWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };
  const heavyCalculation = (data) => {
    let result = 0;
    for(let i = 0; i < 5000000; i++) {
      result += Math.sqrt(i) * Math.sin(i);
    }
    return {
      ...data,
      calc: result 
    };
  };
  
  const processWeatherData = (data) => {
    setWeatherData(data);
    setLastSearchedCity(cityInput.trim());
    //setCityInput('');
  };

  const weatherInfo = useMemo(() => {
    if (!weatherData) return null;
    
    return {
      temp: Math.round(weatherData.main.temp),
      feelsLike: Math.round(weatherData.main.feels_like),
      humidity: weatherData.main.humidity,
      wind: weatherData.wind.speed,
      description: weatherData.weather[0].description,
      icon: weatherData.weather[0].icon,
    };
  }, [weatherData]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Проверка погоды</Text>
        
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Введите город"
            value={cityInput}
            onChangeText={setCityInput}
          />
          
          <View style={styles.buttonsContainer}>
            <TouchableOpacity 
              style={[styles.button, styles.memoButton]}
              onPress={fetchWeatherWithMemo}
              disabled={loading || !cityInput.trim()}
            >
              <Text style={styles.buttonText}>С useMemo</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.button, styles.regularButton]}
              onPress={fetchWeatherWithoutMemo}
              disabled={loading || !cityInput.trim()}
            >
              <Text style={styles.buttonText}>Без useMemo</Text>
            </TouchableOpacity>
          </View>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#6200ee" style={styles.loader} />
        ) : error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : weatherInfo ? (
          <WeatherInfo 
            city={lastSearchedCity}
            info={weatherInfo}
          />
        ) : (
          <Text style={styles.placeholder}>Введите город и нажмите кнопку</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const WeatherInfo = ({ city, info }) => (
  <View style={styles.weatherContainer}>
    <Text style={styles.cityText}>{city}</Text>
    <Text style={styles.tempText}>{info.temp}°C</Text>
    <Text style={styles.descText}>
      {info.description.charAt(0).toUpperCase() + info.description.slice(1)}
    </Text>
    <View style={styles.details}>
      <Text style={styles.detailText}>Ощущается: {info.feelsLike}°C</Text>
      <Text style={styles.detailText}>Влажность: {info.humidity}%</Text>
      <Text style={styles.detailText}>Ветер: {info.wind} м/с</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  inputGroup: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  button: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  memoButton: {
    backgroundColor: '#6200ee',
  },
  regularButton: {
    backgroundColor: '#ff4444',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loader: {
    marginVertical: 40,
  },
  weatherContainer: {
    alignItems: 'center',
    marginTop: 20,
    padding: 25,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cityText: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  tempText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#6200ee',
  },
  descText: {
    fontSize: 18,
    marginBottom: 15,
    color: '#555',
    textAlign: 'center',
  },
  details: {
    width: '100%',
    marginTop: 10,
  },
  detailText: {
    fontSize: 16,
    marginVertical: 5,
    color: '#666',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
  },
  placeholder: {
    textAlign: 'center',
    marginVertical: 40,
    color: '#888',
    fontSize: 16,
  },
});

export default WeatherApp;