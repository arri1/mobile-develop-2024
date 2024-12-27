import React, { useEffect, useState, useMemo } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';

const Lab2 = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [city, setCity] = useState('London');

    const [apiKey, setApiKey] = useState('e8c3b87a59554acb99190346241912');

    useEffect(() => {
        const fetchWeatherData = async () => {
            if (!apiKey) return;

            setLoading(true);
            try {
                const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
                setWeatherData([response.data]);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchWeatherData();
    }, [city, apiKey]);


    const memoizedWeatherData = useMemo(() => {
        return weatherData.map(item => ({
            location: item.location.name,
            temperature: item.current.temp_c,
            condition: item.current.condition.text,
        }));
    }, [weatherData]);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Прогноз погоды</Text>
            <TextInput
                style={styles.input}
                placeholder="Введите город"
                value={city}
                onChangeText={setCity}
            />
            <TouchableOpacity style={styles.button} onPress={() => setCity(city)}>
                <Text style={styles.buttonText}>Узнать погоду</Text>
            </TouchableOpacity>
            <FlatList
                data={memoizedWeatherData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.weatherItem}>
                        <Text style={styles.location}>{item.location}</Text>
                        <Text style={styles.temperature}>{item.temperature} °C</Text>
                        <Text style={styles.condition}>{item.condition}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    weatherItem: {
        padding: 15,
    },
    location: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    temperature: {
        fontSize: 16,
    },
    condition: {
        fontSize: 14,
        color: 'gray',
    },
    button: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
});

export default Lab2;