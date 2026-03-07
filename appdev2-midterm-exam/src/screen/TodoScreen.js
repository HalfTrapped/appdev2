import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";
import { useState } from "react";

export default function TodoScreen() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if(task.trim() === "") return;

    setTasks([...tasks, { id: Date.now().toString(), text: task }]);
    setTask("");
  };

  return (
    <View style={styles.container}>

      {/* Top Section */}
      <View style={styles.topSection}>
        <Text style={styles.title}>My ToDo List</Text>
      </View>

      {/* Middle Section */}
      <View style={styles.middleSection}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task..."
          value={task}
          onChangeText={setTask}
        />

        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <View style={styles.taskItem}>
              <Text>{item.text}</Text>
            </View>
          )}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#7D7AFF",
    paddingTop: 60,
    paddingHorizontal: 25,
  },

  topSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },

  middleSection: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    backgroundColor: "white",
    width: "100%",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },

  addButton: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    fontWeight: "bold",
  },

  bottomSection: {
    flex: 3,
    marginTop: 10,
  },

  taskItem: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

});