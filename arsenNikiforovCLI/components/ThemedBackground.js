// components/ThemedBackground.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import useTheme from '../hooks/useTheme';

const ThemedBackground = ({ children }) => {
  const colors = useTheme();

  return <View style={[styles.container, { backgroundColor: colors.background }]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ThemedBackground;