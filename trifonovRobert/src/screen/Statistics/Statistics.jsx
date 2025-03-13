import React, { useMemo } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { getStyles } from './Statistics.style'

export default function StatisticsScreen() {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme)
  const styles = getStyles(isDarkTheme)

  const tasks = useSelector((state) => state.tasks.items)

  const totalTasks = useMemo(() => tasks.length, [tasks])
  const completedTasks = useMemo(() => tasks.filter(task => task.completed).length, [tasks])
  const remainingTasks = useMemo(() => totalTasks - completedTasks, [totalTasks, completedTasks])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 Статистика</Text>

      <View style={styles.statBox}>
        <Text style={styles.statTitle}>Всего задач</Text>
        <Text style={styles.statNumber}>{totalTasks}</Text>
      </View>

      <View style={styles.statBox}>
        <Text style={[styles.statTitle, styles.completedStat]}>Выполненные</Text>
        <Text style={[styles.statNumber, styles.completedStat]}>{completedTasks}</Text>
      </View>

      <View style={styles.statBox}>
        <Text style={[styles.statTitle, styles.remainingStat]}>Оставшиеся</Text>
        <Text style={[styles.statNumber, styles.remainingStat]}>{remainingTasks}</Text>
      </View>
    </View>
  )
}
