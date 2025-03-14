import React, {useEffect, useState} from 'react'
import {View, Text, Switch, TouchableOpacity, FlatList} from 'react-native'
import { useSelector } from 'react-redux'
import { getStyles } from './Api.style'
import {removeTask, toggleTask} from '../../store/slices/tasksSlice'
import Icon from 'react-native-vector-icons/Ionicons'

export default function ApiScreen() {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme)
  const styles = getStyles(isDarkTheme)
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
  }, [])

  if (!posts || !posts.length) return (
    <View style={styles.container}>
      <Text style={styles.title}>Загрузка</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <View>
              <Text style={styles.postBody}>{item.body}</Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}
