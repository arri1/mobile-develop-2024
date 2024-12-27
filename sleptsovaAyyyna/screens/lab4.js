import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
  StyleSheet,
} from "react-native";
import { useTasksStore } from "../store/zustand";

export default function Lab4() {
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const tasks = useTasksStore((state) => state.tasks);
  const addTask = useTasksStore((state) => state.addTask);
  const deleteTask = useTasksStore((state) => state.deleteTask);
  const editTask = useTasksStore((state) => state.editTask);

  const handleAddTask = () => {
    if (title) {
      addTask(title);
      setTitle("");
    }
  };

  const handleEditTask = () => {
    if (newTitle && editId !== null) {
      editTask(editId, newTitle);
      setEditId(null);
      setNewTitle("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Введите название задачи"
        value={title}
        onChangeText={setTitle}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Text style={styles.buttonText}>Добавить</Text>
      </TouchableOpacity>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <View style={{ flex: 1 }}>
              <Text style={styles.taskTitle}>{item.name}</Text>
              <Text style={styles.taskStatus}>
                Статус: {item.completed ? "Завершено" : "В процессе"}
              </Text>
            </View>
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={[styles.taskButtonDelete]}
                onPress={() => deleteTask(item.id)}
              >
                <Text style={styles.buttonText}>Удалить</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.taskButtonEdit}
                onPress={() => {
                  setEditId(item.id);
                  setNewTitle(item.name);
                }}
              >
                <Text style={styles.buttonEdit}>Редактировать</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {editId && (
        <View style={styles.editContainer}>
          <TextInput
            style={styles.input}
            placeholder="Новое название задачи"
            value={newTitle}
            onChangeText={setNewTitle}
          />
          <TouchableOpacity style={styles.button} onPress={handleEditTask}>
            <Text style={styles.buttonText}>Сохранить изменения</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: {
    height: 54,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    alignSelf: "stretch",
  },
  button: {
    alignSelf: "flex-end", // Выравнивание кнопки справа
    backgroundColor: "orange",
    height: 50,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 15

  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonEdit: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    height: 50, // Фиксированная высота для контейнера задачи
    borderRadius: 5
  },
  taskTitle: {
    fontSize: 18,
    color: "black",
  },
  taskStatus: {
    fontSize: 18,
    color: "black",
  },
  buttonGroup: {
    flexDirection: "row",
    width: "50%",
    height: "90%", // Кнопки занимают всю высоту контейнера
    gap:5
  },
  taskButtonDelete: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    borderColor: "black",
    height: "100%", // Высота кнопки равна высоте контейнера
    width: 93,
    backgroundColor: "orange",
    borderRadius:15,
    borderWidth: 0
  },
  taskButtonEdit: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%", // Высота кнопки равна высоте контейнера
    width: 93,
    backgroundColor: "orange",
    borderRadius:15,
    borderWidth: 0
  },
  editContainer: { marginTop: 20 },
});