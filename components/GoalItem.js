import { StyleSheet, Text, View, Pressable, Vibration } from "react-native";
import React from "react";

function GoalItem(props) {
  return (
    <Pressable
      onPress={props.onDeleteItem.bind(this, props.id)}
      onLongPress={() => {
        Vibration.vibrate(100);
      }}
    >
      <View style={styles.goalItems}>
        <Text style={{ color: "white" }}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItems: {
    padding: 8,
    margin: 8,
    borderColor: "#5e0acc",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#5e0acc",
    fontSize: 20,
    alignItems: "center",
    fontWeight: "bold",
  },
});
