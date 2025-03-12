import React from 'react'
import {Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'

export default function Tasks() {
  const [task, setTask] = React.useState('')
  const [tasks, setTasks] = React.useState([])

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task.trim()])
      setTask('')
    }
  }

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <TextInput
        style={styles.input}
        placeholder="Добавить задачу..."
        value={task}
        onChangeText={setTask}
      />
      <Button title="Добавить" onPress={addTask}/>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item}</Text>
            <TouchableOpacity onPress={() => removeTask(index)} style={styles.deleteButton}>
              <Text style={styles.deleteText}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  taskText: {
    fontSize: 18
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold'
  }
})