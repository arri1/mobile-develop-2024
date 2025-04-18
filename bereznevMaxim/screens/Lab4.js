import React, { useState, useCallback } from "react";
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, editTask, toggleTask } from "../store/store";

export default function Lab4() {
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (title.trim()) {
      dispatch(addTask(title));
      setTitle("");
    }
  };

  const handleEditTask = () => {
    if (newTitle.trim() && editId !== null) {
      dispatch(editTask({ id: editId, name: newTitle }));
      setEditId(null);
      setNewTitle("");
    }
  };

  const renderHeader = useCallback(() => {
    return (
      <View style={styles.headerContent}>
        <TextInput
          style={styles.input}
          placeholder="Введите название задачи"
          value={title}
          onChangeText={setTitle}
          onSubmitEditing={handleAddTask}
          returnKeyType="done"
          autoFocus
        />
        <View style={styles.addButtonWrapper}>
          <Button title="Добавить задачу" onPress={handleAddTask} />
        </View>

        {editId !== null && (
          <View style={styles.editContainer}>
            <TextInput
              style={styles.input}
              placeholder="Новое название задачи"
              value={newTitle}
              onChangeText={setNewTitle}
              onSubmitEditing={handleEditTask}
              returnKeyType="done"
              autoFocus
            />
            <Button title="Сохранить изменения" onPress={handleEditTask} />
            <View style={{ marginTop: 10 }}>
              <Button
                title="Отмена"
                onPress={() => {
                  setEditId(null);
                  setNewTitle("");
                }}
                color="#8E8E93"
              />
            </View>
          </View>
        )}
      </View>
    );
  }, [title, editId, newTitle, handleAddTask, handleEditTask]);

  const renderTaskItem = useCallback(
    ({ item }) => (
      <View style={styles.taskContainer}>
        <View style={styles.taskTextContainer}>
          <Text style={styles.taskTitle}>{item.name}</Text>
          <Text style={styles.taskStatus}>
            Статус: {item.completed ? "Завершено" : "В процессе"}
          </Text>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: "#FF3B30" }]}
            onPress={() => dispatch(deleteTask(item.id))}
          >
            <Text style={styles.buttonText}>Удалить</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: "#FF9500" }]}
            onPress={() => {
              setEditId(item.id);
              setNewTitle(item.name);
            }}
          >
            <Text style={styles.buttonText}>Редактировать</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: "#4CD964" }]}
            onPress={() => dispatch(toggleTask(item.id))}
          >
            <Text style={styles.buttonText}>
              {item.completed ? "Возобновить" : "Завершить"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    ),
    []
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Лабораторная 4</Text>
      </View>

      <FlatList
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContent}
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTaskItem}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    backgroundColor: "#007AFF",
    height: 90,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 15,
  },
  headerText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  listContent: {
    padding: 20,
    paddingBottom: 40,
  },
  headerContent: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    borderColor: "#ccc",
    backgroundColor: "#f0f0f0",
    marginBottom: 15,
    fontSize: 16,
  },
  addButtonWrapper: {
    marginBottom: 20,
  },
  taskContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ddd",
    padding: 15,
    marginBottom: 15,
    backgroundColor: "#fafafa",
  },
  taskTextContainer: {
    marginBottom: 10,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  taskStatus: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  editContainer: {
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
});