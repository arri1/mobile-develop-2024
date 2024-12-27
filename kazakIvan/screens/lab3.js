import React, { useState, useEffect, useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import BackArrow from "../components/BackArrow";
import { useTheme } from "../components/ThemeContext";

const PokemonItem = React.memo(({ name, themeStyles }) => {
  // Искусственная задержка
  const delay = Date.now() + 100; // 100 мс на каждый рендер
  while (Date.now() < delay) {}

  return (
    <View style={[styles.pokemonContainer, themeStyles.pokemonContainer]}>
      <Text style={[styles.pokemonText, themeStyles.text]}>{name}</Text>
    </View>
  );
});

export default function Lab2_3({ navigation }) {
  const [inputValue, setInputValue] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cache, setCache] = useState({}); // Кэш для запрошенных чисел

  const { darkTheme } = useTheme(); // Получаем текущую тему

  const fetchPokemons = async (count) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${count}`
      );
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Failed to fetch pokemons:", error);
      return [];
    }
  };

  const handleSearch = async () => {
    const count = Number(inputValue);

    if (!count || count <= 0) {
      setPokemons([]);
      return;
    }

    if (cache[count]) {
      // Если запрос уже есть в кэше, используем его
      setPokemons(cache[count]);
    } else {
      // Если числа нет в кэше, делаем запрос
      setLoading(true);
      const results = await fetchPokemons(count);
      setCache((prevCache) => ({ ...prevCache, [count]: results })); // Сохраняем результат в кэш
      setPokemons(results);
      setLoading(false);
    }
  };

  const themeStyles = darkTheme ? styles.darkTheme : styles.lightTheme;

  return (
    <View style={[styles.container, themeStyles.container]}>
      <BackArrow navigation={navigation} />
      <View style={styles.p1}>
        <TextInput
          style={[styles.input, themeStyles.input]}
          placeholder="Write the number of Pokemons"
          placeholderTextColor={darkTheme ? "#E1E1E1" : "#333333"}
          value={inputValue}
          onChangeText={setInputValue}
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={[styles.searchButton, themeStyles.searchButton]}
          onPress={handleSearch}
        >
          <Text style={[styles.searchButtonText, themeStyles.text]}>Search</Text>
        </TouchableOpacity>
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#BB86FC" />
            <Text style={[styles.loadingText, themeStyles.text]}>
              Fetching Pokémon, please wait...
            </Text>
          </View>
        ) : (
          <FlatList
            data={pokemons}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <PokemonItem name={item.name} themeStyles={themeStyles} />
            )}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  p1: {
    padding: 20,
  },
  input: {
    height: 36,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 45,
    marginBottom: 14,
    borderRadius: 20,
    fontSize: 16,
    borderColor: "#fff",
  },
  searchButton: {
    width: 165,
    height: 36,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 36,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  pokemonContainer: {
    height: 45,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  pokemonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  loadingText: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 10,
  },
  // Стили для светлой темы
  lightTheme: {
    container: {
      backgroundColor: "#F2E8D5",
    },
    input: {
      backgroundColor: "#FFFFFF",
      color: "#333333",
    },
    searchButton: {
      backgroundColor: "#B28451",
    },
    pokemonContainer: {
      backgroundColor: "#DAAD86",
    },
    text: {
      color: "#fff",
    },
  },
  // Стили для темной темы
  darkTheme: {
    container: {
      backgroundColor: "#1E1E1E",
    },
    input: {
      backgroundColor: "#424242",
      color: "#E1E1E1",
    },
    searchButton: {
      backgroundColor: "#BB86FC",
    },
    pokemonContainer: {
      backgroundColor: "#424242",
    },
    text: {
      color: "#FFFFFF",
    },
  },
});