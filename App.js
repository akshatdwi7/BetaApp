import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  // this is the react native way to handle text input
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }

  return (
    <View style={styles.appcontainer}>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your  course Goals! "
          onChangeText={goalInputHandler} // this is the react native way to handle text input
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => (
          <View key={goal} style={styles.goalItems}>
            <Text style={{ color: "white" }}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputcontainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    borderRadius: 6,
    padding: 10,
    marginRight: 8,
  },
  goalsContainer: {
    flex: 4,
  },
  goalItems: {
    padding: 8,
    margin: 8,
    borderColor: "#5e0acc",
    borderWidth: 1,
    borderRadius: 101,
    backgroundColor: "#5e0acc",
    fontSize: 20,
  },
});
