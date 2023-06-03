/*import React from "react";
import {Text, View} from 'react-native'
import TerminosCondiciones from "./TerminosCondiciones";

const Main = () => {
    return (
        <TerminosCondiciones />
    )
}

export default Main;*/

import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Button, ScrollView  } from 'react-native';
import TerminosCondiciones from "./TerminosCondiciones";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  
});

const Formulario = () => {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [switchValue, setSwitchValue] = useState(false);
    const [buttonColor, setButtonColor] = useState('grey');

    const handleSwitchToggle = () => {
      const newSwitchValue = !switchValue;
      setSwitchValue(newSwitchValue);

      const newButtonColor = newSwitchValue ? 'blue' : 'grey';
      setButtonColor(newButtonColor);
    };

    const showAlert = () =>
      Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
          {
            text: 'Cancel',
            onPress: () => Alert.alert('Cancel Pressed'),
            style: 'cancel',
          },
        ],
        {
          cancelable: true,
          onDismiss: () =>
            Alert.alert(
              'This alert was dismissed by tapping outside of the alert dialog.',
            ),
        },
    );

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre} />

      <TextInput 
        style={styles.input} 
        placeholder="Correo electrónico" 
        value={correo}
        onChangeText={setCorreo}/>

      <TerminosCondiciones onSwitchToggle={handleSwitchToggle}/>

      <Button 
        title="Press me"
        //style={styles.buttonStyle} 
        color={buttonColor}
        onPress={() => console.log('Simple Button pressed')}
      />

      <Button title="Show alert" onPress={showAlert} />

    </View>
  );
};



export default Formulario;