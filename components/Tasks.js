import { View, Text, StyleSheet } from "react-native";

export const Tasks =()=>{
    return(
        <View style={StyleSheet.container}>
            <Text style= {StyleSheet.header}>Tarea 1</Text>
            <Text style= {StyleSheet.header}>Tarea 2</Text>
            <Text style= {StyleSheet.header}>Tarea 3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 100,

    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
    },
});