import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Tab2 one is here ! </Text>
      </View>
      <Text style={styles.dummyText}>This is a dummy text</Text>
      <Button title="tap me" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
});
