import React, { useMemo } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { styles } from './Statistics.style'

export default function StatisticsScreen() {
  const tasks = useSelector((state) => state.tasks.items)

  const totalTasks = useMemo(() => tasks.length, [tasks])
  const completedTasks = useMemo(() => tasks.filter(task => task.completed).length, [tasks])
  const remainingTasks = useMemo(() => totalTasks - completedTasks, [totalTasks, completedTasks])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Статистика</Text>
      <Text style={styles.statText}>Всего задач: {totalTasks}</Text>
      <Text style={styles.statText}>Выполненные: {completedTasks}</Text>
      <Text style={styles.statText}>Оставшиеся: {remainingTasks}</Text>
    </View>
  )
}
