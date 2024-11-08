import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Header } from './Componentes/Header';
import { AddTask } from './Componentes/AddTask';
import { Tasks } from './Componentes/Tasks';

export default function App() {
  const [tarea, setTarea] = useState("Tarea 1");
  const [botonActivo, setBotonActivo] = useState(false);

  function botonPresionado() {
    setBotonActivo(true);
  }

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>El nombre de la tarea es: {tarea}</Text>
      <TextInput 
        style={styles.input}
        onChangeText={setTarea}
        value={tarea}
      />
      <TouchableOpacity style={styles.button} onPress={botonPresionado}>
        <Text style={styles.texto}>Agregar</Text>
      </TouchableOpacity>
      <AddTask />
      <Tasks />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
