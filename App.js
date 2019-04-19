import React from 'react';
import { Alert, Platform, StyleSheet, View, Image } from 'react-native';

import Header from './components/Header';
import Body from './components/Body';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends React.Component { 
  state = {
    name: '',
    showGreetings: false
  }

  setName = (text) => {
    this.setState({ name: text })
  }

  showGreet = () => {
    if (this.state.name) {
      this.setState({ showGreetings: true })
    } else {
      this.setState({ showGreetings: false })
    }    
  }

  onButtonPress = () => {
    Alert.alert('You tapped the button!')
  }

  render() {
    const {name, showGreetings} = this.state
    return (
      <View style={styles.containerMain}>
        <Header />
        <Body 
          name={name} 
          showGreetings={showGreetings}
          setName={this.setName} 
          showGreet={this.showGreet}
          onBtnPress={this.onButtonPress} />             
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#DB7093',
  }
});
