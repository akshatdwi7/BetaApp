import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "red", margin: 10 }}>Tab one is here !... </Text>
      <Text>Tab1 one is here !.. </Text>
      <Text>Tab2 one is here !... </Text>
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
});
