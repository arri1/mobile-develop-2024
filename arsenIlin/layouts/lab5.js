import React, { useState, useMemo } from "react";
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import { useTheme } from "../ThemeContext.js"; // Импортируем контекст темы

export default function MovieSearchScreen() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [minYear, setMinYear] = useState("1800");
  const [maxYear, setMaxYear] = useState("3000");

  const { isDarkTheme } = useTheme(); // Получаем текущую тему

  const fetchMovies = async (searchQuery) => {
    if (!searchQuery) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://imdb.iamidiotareyoutoo.com/search?q=${encodeURIComponent(
          searchQuery
        )}`
      );
      const data = await response.json();
      if (data.ok && data.description) {
        setMovies(data.description);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Ошибка при получении данных о фильмах:", error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };
  
  const getFilteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const year = parseInt(movie["#YEAR"]);
      return year >= parseInt(minYear) && year <= parseInt(maxYear);
    });
  }, [movies, minYear, maxYear]);

  const handleSearch = () => {
    fetchMovies(query);
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDarkTheme ? "#333" : "#FFF" },
      ]}
    >
      <TextInput
        placeholder="Введите название фильма"
        placeholderTextColor={isDarkTheme ? "#CCC" : "#666"}
        value={query}
        onChangeText={setQuery}
        style={[styles.input, { backgroundColor: isDarkTheme ? "#444" : "#EEE", color: isDarkTheme ? "#FFF" : "#000" }]}
      />
      <TextInput
        placeholder="Минимальный год"
        placeholderTextColor={isDarkTheme ? "#CCC" : "#666"}
        value={minYear}
        onChangeText={setMinYear}
        keyboardType="numeric"
        style={[styles.input, { backgroundColor: isDarkTheme ? "#444" : "#EEE", color: isDarkTheme ? "#FFF" : "#000" }]}
      />
      <TextInput
        placeholder="Максимальный год"
        placeholderTextColor={isDarkTheme ? "#CCC" : "#666"}
        value={maxYear}
        onChangeText={setMaxYear}
        keyboardType="numeric"
        style={[styles.input, { backgroundColor: isDarkTheme ? "#444" : "#EEE", color: isDarkTheme ? "#FFF" : "#000" }]}
      />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: isDarkTheme ? "#555" : "#CFE2F9" }]}
        onPress={handleSearch}
      >
        <Text style={[styles.buttonText, { color: isDarkTheme ? "#FFF" : "#2673D0" }]}>Поиск</Text>
      </TouchableOpacity>

      {loading ? (
        <Text style={{ color: isDarkTheme ? "#FFF" : "#000" }}>Загрузка...</Text>
      ) : (
        <FlatList
          style={styles.movieList}
          data={getFilteredMovies}
          keyExtractor={(item) => item["#IMDB_ID"]}
          renderItem={({ item }) => (
            <View
              style={[
                styles.movieItem,
                { borderColor: isDarkTheme ? "#666" : "#000", backgroundColor: isDarkTheme ? "#444" : "#FFF" },
              ]}
            >
              <Image
                source={{ uri: item["#IMG_POSTER"] }}
                style={styles.poster}
                resizeMode="cover"
              />
              <View style={styles.movieDetails}>
                <Text style={[styles.title, { color: isDarkTheme ? "#FFF" : "#2673D0" }]}>{item["#TITLE"]}</Text>
                <Text style={[styles.detailText, { color: isDarkTheme ? "#CCC" : "#2673D0" }]}>Год: {item["#YEAR"]}</Text>
                <Text style={[styles.detailText, { color: isDarkTheme ? "#CCC" : "#2673D0" }]}>Актеры: {item["#ACTORS"]}</Text>
              </View>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 54,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 14,
    alignSelf: "stretch",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 14,
  },
  movieList: {
    flex: 1,
    marginTop: 14,
  },
  movieItem: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 10,
  },
  poster: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
  movieDetails: {
    flex: 1,
    justifyContent: "top",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  detailText: {
    fontSize: 14,
  },
  button: {
    alignSelf: "flex-end",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
