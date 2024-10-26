import { Text, View, StyleSheet } from "react-native";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Tareas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingTop: 100,
    },
    header: {
      fontSize: 30,
      fontWeight: "bold",
      color: "#212121",
    }
  });
  
