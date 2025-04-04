import React, { useState, useMemo } from 'react';
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

  // Оптимизированная функция для загрузки данных
  const fetchWeather = useMemo(() => async () => {
    if (!cityInput.trim()) return;
    
    try {
      setLoading(true);
      setError(null);
      Keyboard.dismiss(); // Скрываем клавиатуру
      
      const response = await fetch(
        `${API_URL}?q=${cityInput.trim()}&appid=${API_KEY}&units=metric&lang=ru`
      );
      
      if (!response.ok) {
        throw new Error('Город не найден');
      }
      
      const data = await response.json();
      setWeatherData(data);
      setLastSearchedCity(cityInput.trim());
      setCityInput('');
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  }, [cityInput]);

  // Мемоизированное преобразование данных о погоде
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
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Введите город"
            value={cityInput}
            onChangeText={setCityInput}
            onSubmitEditing={fetchWeather}
          />
          <TouchableOpacity 
            style={styles.searchButton} 
            onPress={fetchWeather}
            disabled={loading || !cityInput.trim()}
          >
            <Text style={styles.searchButtonText}>Поиск</Text>
          </TouchableOpacity>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#6200ee" style={styles.loader} />
        ) : error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : weatherInfo ? (
          <View style={styles.weatherContainer}>
            <Text style={styles.cityText}>{lastSearchedCity}</Text>
            <Text style={styles.tempText}>{weatherInfo.temp}°C</Text>
            <Text style={styles.descText}>
              {weatherInfo.description.charAt(0).toUpperCase() + weatherInfo.description.slice(1)}
            </Text>
            <View style={styles.details}>
              <Text style={styles.detailText}>Ощущается: {weatherInfo.feelsLike}°C</Text>
              <Text style={styles.detailText}>Влажность: {weatherInfo.humidity}%</Text>
              <Text style={styles.detailText}>Ветер: {weatherInfo.wind} м/с</Text>
            </View>
          </View>
        ) : (
          <Text style={styles.placeholder}>Введите город и нажмите "Поиск"</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

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
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: '#6200ee',
    borderRadius: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
  },
  searchButtonDisabled: {
    opacity: 0.5,
  },
  searchButtonText: {
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