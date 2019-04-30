import React from 'react';
import { Text, TextInput, StyleSheet, View, Image } from 'react-native';

const NameInputBlock = props => {  
  return (
    <View style={{width: 100 + '%', alignItems: 'center'}}>
      <TextInput
        style={styles.input}
        placeholder="Type your name here"
        onChangeText={props.setName}
        onSubmitEditing={props.showGreet} />
      {
        props.showGreetings
          ? <Text style={styles.greetBlock}>Hi there {props.name}!</Text>
          : null
      }
    </View>      
  )  
}

const styles = StyleSheet.create({
  input: {
    width: 75 + '%',
    height: 45,
    padding: 8,
    paddingHorizontal: 12,
    borderWidth: 2,
    borderColor: '#483D8B',
    marginBottom: 30,
    backgroundColor: '#F5F5DC',
    borderRadius: 10,
  },
  greetBlock: {
    padding: 10,
    fontSize: 25,
    marginBottom: 30,
    textAlign: 'center',
    color: '#8B008B',
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
});

export default NameInputBlock;