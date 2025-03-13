import React, { useEffect, useMemo, useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View, Switch } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, removeTask, toggleTask, loadTasks } from '../../store/slices/tasksSlice'
import { getStyles } from './Tasks.style'
import Icon from 'react-native-vector-icons/Ionicons'

export default function TasksScreen() {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme)
  const styles = getStyles(isDarkTheme)

  const [task, setTask] = useState('')
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasks.items).filter(task => task !== undefined)

  useEffect(() => {
    dispatch(loadTasks())
  }, [dispatch])

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task.trim()))
      setTask('')
    }
  }

  const activeTasks = useMemo(() => tasks.filter(task => !task.completed), [tasks])
  const completedTasks = useMemo(() => tasks.filter(task => task.completed), [tasks])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <TextInput
        style={styles.input}
        placeholder="Добавить задачу..."
        placeholderTextColor={isDarkTheme ? '#AAA' : '#666'}
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.addButtonText}>Добавить</Text>
      </TouchableOpacity>

      <View style={styles.taskSections}>
        <View style={styles.taskListContainer}>
          <Text style={styles.sectionTitle}>Активные задачи</Text>
          <FlatList
            data={activeTasks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.taskContainer}>
                <Text style={styles.taskText}>{item.text}</Text>
                <View style={styles.control}>
                  <Switch value={item.completed} onValueChange={() => dispatch(toggleTask(item.id))} />
                  <TouchableOpacity onPress={() => dispatch(removeTask(item.id))}>
                    <Icon name="close" size={30} color="#f44" />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>

        <View style={styles.taskListContainer}>
          <Text style={styles.sectionTitle}>Выполненные задачи</Text>
          <FlatList
            data={completedTasks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.taskContainer}>
                <Text style={[styles.taskText, styles.completedTaskText]}>
                  {item.text}
                </Text>
                <View style={styles.control}>
                  <Switch value={item.completed} onValueChange={() => dispatch(toggleTask(item.id))} />
                  <TouchableOpacity onPress={() => dispatch(removeTask(item.id))}>
                    <Icon name="close" size={30} color="#f44" />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  )
}
