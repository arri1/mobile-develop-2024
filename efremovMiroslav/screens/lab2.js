import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const QuoteGenerator = () => {
  const [currentQuote, setCurrentQuote] = useState('Нажмите кнопку, чтобы получить цитату');
  const [quoteCount, setQuoteCount] = useState(0);

  const quotes = [
    "Жизнь — это то, что происходит, пока ты строишь другие планы.",
    "Единственный способ сделать что-то очень хорошо — любить то, что ты делаешь.",
    "Успех — это способность идти от неудачи к неудаче, не теряя энтузиазма.",
    "Будьте тем изменением, которое вы хотите видеть в мире.",
    "Лучший способ предсказать будущее — изобрести его.",
    "Не откладывай на завтра то, что можно сделать послезавтра.",
    "Всегда имейте план Б, потому что план А почти никогда не срабатывает."
  ];


  const generateNewQuote = () => {
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    
    setCurrentQuote(quotes[randomQuoteIndex]);
    setQuoteCount(prevCount => prevCount + 1);
  };

  const resetCounter = () => {
    setQuoteCount(0);
    setCurrentQuote('Счётчик сброшен. Нажмите кнопку для новой цитаты');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={[styles.quoteText]}>
          "{currentQuote}"
        </Text>
        
        <Text style={styles.counterText}>
          Показано цитат: {quoteCount}
        </Text>
        
        <View style={styles.buttonsContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.generateButton]} 
            onPress={generateNewQuote}
          >
            <Text style={styles.buttonText}>Новая цитата</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.resetButton]} 
            onPress={resetCounter}
          >
            <Text style={styles.buttonText}>Сбросить счётчик</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  quoteText: {
    color: '#000000',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 30,
    fontStyle: 'italic',
    paddingHorizontal: 20,
    lineHeight: 32,
  },
  counterText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    elevation: 3,
    minWidth: '45%',
    alignItems: 'center',
  },
  generateButton: {
    backgroundColor: '#6200ee',
  },
  resetButton: {
    backgroundColor: '#ff4444',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default QuoteGenerator;