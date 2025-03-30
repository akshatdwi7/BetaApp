import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "red", margin: 10 }}>Tab one is here !... </Text>
      <Text>Tab one is here !... </Text>
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
