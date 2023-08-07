import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [habit, setHabit] = useState();
  const [count, setCount] = useState();
  const [habitItems, setHabitItems] = useState([]);

  const handleAddHabit = () => {
    Keyboard.dismiss();

    setHabitItems([...habitItems, habit]);
    setHabit(null);
  };

  const removeHabit = (index) => {
    let itemsCopy = [...habitItems];
    itemsCopy.splice(index, 1);
    setHabitItems(itemsCopy);
  };

  const increaseHabitCount = () => {
    count++;
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's habits</Text>

        <View style={styles.items}>
          {habitItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => removeHabit(index)}>
                <Task key={index} text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="Write a habit"
          value={habit}
          onChangeText={(text) => setHabit(text)}
        />
        <TouchableOpacity onPress={() => handleAddHabit()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});
