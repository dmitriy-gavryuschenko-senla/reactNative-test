import React from 'react';
import { Text, TextInput, StyleSheet, View, Image } from 'react-native';

class NameInputBlock extends React.Component {
  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Type your name here"
          onChangeText={this.props.setName}
          onSubmitEditing={this.props.showGreet} />
        {
          this.props.showGreetings
            ? <Text style={styles.greetBlock}>Hi there {this.props.name}!</Text>
            : null
        }
      </View>      
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 240,
    height: 45,
    padding: 8,
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