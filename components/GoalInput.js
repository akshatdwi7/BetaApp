import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React from "react";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputcontainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course Goals!"
        onChangeText={goalInputHandler} // this is the react native way to handle text input
        value={enteredGoalText} // this is the react native way to handle text input
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
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
    backgroundColor: "#ffffff",
    padding: 10,
    marginRight: 8,
  },
});
