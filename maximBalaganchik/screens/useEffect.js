import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from "react-native";

const FetchDataExample = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Функция для выполнения запроса к API
        const fetchData = async () => {
            try {
                setLoading(true); // Показываем индикатор загрузки
                const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // Замените URL на ваш API
                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status}`);
                }
                const result = await response.json();
                setData(result); // Сохраняем данные
            } catch (err) {
                setError(err.message); // Обрабатываем ошибку
            } finally {
                setLoading(false); // Скрываем индикатор загрузки
            }
        };

        fetchData();
    }, []); // Пустой массив зависимостей — эффект выполнится только при монтировании

    // Отображение индикатора загрузки
    if (loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Загрузка данных...</Text>
            </View>
        );
    }

    // Отображение сообщения об ошибке
    if (error) {
        return (
            <View style={styles.centered}>
                <Text style={styles.errorText}>Ошибка: {error}</Text>
            </View>
        );
    }

    // Отображение данных
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Список данных:</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.itemBody}>{item.body}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f5f5f5",
    },
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
    },
    item: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: "#ffffff",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    itemBody: {
        fontSize: 14,
        color: "#666",
    },
    errorText: {
        color: "red",
        fontSize: 16,
    },
});

export default FetchDataExample;