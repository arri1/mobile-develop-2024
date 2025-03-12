import React, {useEffect, useMemo} from 'react'
import { Button, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { styles } from './Tasks.style'

export default function TasksScreen() {
  const [task, setTask] = React.useState('')
  const [tasks, setTasks] = React.useState([])

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = JSON.parse(await AsyncStorage.getItem('Tasks'))
        if (storedTasks) setTasks(storedTasks)
      } catch (e) {
        console.error('Failed to load Tasks:', e)
      }
    }

    loadTasks()
  }, [])

  useEffect(() => {
    if (!tasks) return

    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem('Tasks', JSON.stringify(tasks))
      } catch (e) {
        console.error('Failed to save Tasks:', e)
      }
    }

    saveTasks()
  }, [tasks])

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task.trim()])
      setTask('')
    }
  }

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  const completedTasksCount = useMemo(() => tasks.length, [tasks])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <Text style={styles.subtitle}>Количество задач: {completedTasksCount}</Text>
      <TextInput
        style={styles.input}
        placeholder="Добавить задачу..."
        value={task}
        onChangeText={setTask}
      />
      <Button style={styles.addButton} title="Добавить" onPress={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
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