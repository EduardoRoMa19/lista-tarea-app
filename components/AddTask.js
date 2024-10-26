import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
export const  AddTask = () => {
  return (
    <View style={styles.container}>
      <Text>Tarea </Text>
      <TextInput style={styles.input}></TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"row",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: -800,
      },
      input:{
        borderWidth:2,
        borderColor: "#212121",
        width: 100,
        margin:20,
        
      }
      , button:{
        backgroundColor:"blue",
        padding:10,
        borderRadius: 5


      }
      ,text:{

        color:"white",
        fontWeight:"bold",
        fontSize:16
      }
      
  });