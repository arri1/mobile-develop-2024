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
  postContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 10,
    gap: 10,
    padding: 12,
    borderRadius: 8,
    backgroundColor: isDark ? '#3A3A3A' : '#FFF',
    shadowColor: isDark ? '#AAA' : '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: isDark ? 0.2 : 0.1,
    shadowRadius: 4,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: isDark ? '#FAFAFA' : '#000',
  },
  postBody: {
    fontSize: 16,
    color: isDark ? '#FAFAFA' : '#000',
  }
})
