import { useEffect, useState } from "react";
import { StyleSheet, Button, Text, View } from "react-native";

const Task2 = () => {
  const [fact, setFact] = useState();
  const [loadT, setLoadT] = useState(false);

  const getCatFact = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      setFact("ошибка: " + error.message);
    }
  };

  const getTranslate = async () => {
    setLoadT(true);
    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          fact
        )}&langpair=en|ru`
      );
      const data = await response.json();
      freetrans = data.responseData.translatedText.includes(
        "YOU USED ALL AVAILABLE FREE TRANSLATIONS"
      );
      if (freetrans) {
        return;
      }
      setFact(data.responseData.translatedText);
    } catch (error) {
      setFact("ошибка: " + error.message);
    } finally {
      setLoadT(false);
    }
  };

  const getCatFactAndTransIt = async () => {
    await getCatFact();
    await getTranslate();
  };

  useEffect(() => {
    getCatFactAndTransIt();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{loadT ? "Думаю..." : "Забавный факт"}</Text>
        <Text style={styles.subtitle}>{loadT ? "" : fact}</Text>
        <View>
          <Button title="Get it" onPress={getCatFactAndTransIt} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87CEEB", // Нежно-голубой фон
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFFFFF", // Белый фон для блока текста
    borderRadius: 10, // Скругленные углы
    shadowColor: "#000", // Тень для блока
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Для Android
  },
  title: {
    fontSize: 24,
    color: "#333", // Тёмно-серый цвет текста
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default Task2;
