import { StyleSheet, Dimensions } from 'react-native'

const screenHeight = Dimensions.get('window').height

export const getStyles = (isDark) => StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: isDark ? '#2E2E2E' : '#F9F9F9',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: isDark ? '#FAFAFA' : '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: isDark ? '#555' : '#DDD',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: isDark ? '#3A3A3A' : '#FFF',
    fontSize: 16,
    color: isDark ? '#EAEAEA' : '#000',
  },
  addButton: {
    backgroundColor: isDark ? '#66BB6A' : '#4CAF50',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskSections: {
    flex: 1,
  },
  taskListContainer: {
    flex: 1,
    height: screenHeight / 2,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: isDark ? '#FAFAFA' : '#333',
    marginBottom: 5,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    backgroundColor: isDark ? '#3A3A3A' : '#FFF',
    marginBottom: 10,
    shadowColor: isDark ? '#AAA' : '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: isDark ? 0.2 : 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  taskText: {
    fontSize: 18,
    flex: 1,
    color: isDark ? '#FAFAFA' : '#000',
  },
  completedTaskText: {
    textDecorationLine: 'line-through',
    color: isDark ? '#AAA' : 'gray',
  },
  control: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
})
