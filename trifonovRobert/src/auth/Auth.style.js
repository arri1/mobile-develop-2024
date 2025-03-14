import { StyleSheet, Dimensions } from 'react-native'

const screenHeight = Dimensions.get('window').height

export const getAuthStyles = (isDark) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: isDark ? '#2E2E2E' : '#F9F9F9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: isDark ? '#FAFAFA' : '#333',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: isDark ? '#555' : '#DDD',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: isDark ? '#3A3A3A' : '#FFF',
    fontSize: 16,
    color: isDark ? '#EAEAEA' : '#000',
  },
  button: {
    backgroundColor: isDark ? '#66BB6A' : '#4CAF50',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    color: isDark ? '#66BB6A' : '#007BFF',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
  },
})
