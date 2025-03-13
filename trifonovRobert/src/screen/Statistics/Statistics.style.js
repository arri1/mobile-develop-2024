import { StyleSheet } from 'react-native'

export const getStyles = (isDark) => StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: isDark ? '#2E2E2E' : '#F9F9F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: isDark ? '#FAFAFA' : '#333',
  },
  statBox: {
    width: '90%',
    backgroundColor: isDark ? '#3A3A3A' : '#FFF',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: isDark ? 0.2 : 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: isDark ? '#EAEAEA' : '#555',
    marginBottom: 5,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: isDark ? '#81C784' : '#4CAF50',
  },
  completedStat: {
    color: isDark ? '#6FA8DC' : '#007BFF',
  },
  remainingStat: {
    color: isDark ? '#FFB74D' : '#FF9800',
  },
})
