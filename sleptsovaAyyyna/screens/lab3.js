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

export default function MovieSearchScreen() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [minYear, setMinYear] = useState("1800");
  const [maxYear, setMaxYear] = useState("3000");

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
  //позволяет избежать повторной фильтрации списка фильмов каждый раз, когда происходит ререндер компонента (например, из-за ввода текста или изменения состояния), если сами фильмы или диапазон годов не менялись.
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
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Введите название фильма"
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />
      <TextInput
        placeholder="Минимальный год"
        value={minYear}
        onChangeText={setMinYear}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Максимальный год"
        value={maxYear}
        onChangeText={setMaxYear}
        keyboardType="numeric"
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Поиск</Text>
      </TouchableOpacity>

      {loading ? (
        <Text>Загрузка...</Text>
      ) : (
        <FlatList
          style={styles.movieList}
          data={getFilteredMovies}
          keyExtractor={(item) => item["#IMDB_ID"]}
          renderItem={({ item }) => (
            <View style={styles.movieItem}>
              <Image
                source={{ uri: item["#IMG_POSTER"] }}
                style={styles.poster}
                resizeMode="cover"
              />
              <View style={styles.movieDetails}>
                <Text style={styles.title}>{item["#TITLE"]}</Text>
                <Text style={styles.detailText}>Год: {item["#YEAR"]}</Text>
                <Text style={styles.detailText}>Актеры: {item["#ACTORS"]}</Text>
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
    height: 45, // Высота поля
    width: 250,
    left: 80,
    marginTop:5,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    paddingHorizontal: 10, // Внутренний отступ текста
    marginBottom: 14, // Расстояние между инпутами
    alignSelf: "stretch", // Автоматическое растягивание по ширине
  },
  container: {
    flex: 1,
    paddingHorizontal: 20, // Отступы по краям
    paddingTop: 14, // Отступ от верхнего таба
  },
  movieList: {
    marginTop: 14, // Расстояние от кнопки
  },
  movieItem: {
    flexDirection: "row",
    borderWidth: 1,
    marginTop:5,
    borderColor: "black", // Цвет границы
    padding: 10,
    width:350,
    borderRadius:5,
    marginLeft: 25
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
    color: "black",
    fontFamily: "Roboto-Bold",
  },
  detailText: {
    fontSize: 14,
    color: "black",
    fontFamily: "Roboto-Medium",
  },

  button: {
    marginLeft:120,
    backgroundColor: "orange",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto-Bold", // Тот же стиль шрифта
    textAlign: "center", // Центровка текста
  },
});