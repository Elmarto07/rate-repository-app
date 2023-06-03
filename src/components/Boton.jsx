import React from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const styles = StyleSheet.create({
  
  button: {
    backgroundColor: 'blue',
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    padding: 15,
  },
  
});

const Boton = (props) => {

   
  
    const handlePress = () => {
      if (props.mail && props.nom) {
        // Realizar la lógica adicional o acción aquí
        showAlert();
      } else {
        Alert.alert('Error', 'Por favor, completa todos los campos.');
        console.log(props.mail);
      }
    };
  
    const showAlert = () => {
      Alert.alert('Éxito', '¡Formulario enviado exitosamente!');
    };

  return (
      <Button title="Enviar"  style={styles.button} onPress={handlePress} />
  );
};

export default Boton;