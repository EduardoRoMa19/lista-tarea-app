import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { AddTask } from "./components/AddTask";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <AddTask />
      <Tasks />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
