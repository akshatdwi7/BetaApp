import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  Modal,
  Image,
} from "react-native";
import React from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

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
    <>
      <StatusBar style="light" />
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputcontainer}>
          <Image
            style={styles.imageicon}
            source={require("../assets/icons8-goal-100.png")}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Your course Goals!"
            onChangeText={goalInputHandler} // this is the react native way to handle text input
            value={enteredGoalText} // this is the react native way to handle text input
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Add Goal" color="pink" onPress={addGoalHandler} />
            </View>
            <View style={styles.button}>
              <Button title="Cancel" color="skyblue" onPress={props.oncancel} />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputcontainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
    color: "#120438",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  imageicon: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
