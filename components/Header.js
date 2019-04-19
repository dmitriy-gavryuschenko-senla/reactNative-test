import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Header extends React.Component {
  render() {
    return (
      <View style={styles.containerHeader}>
        <Text style={styles.welcome}>Welcome to My Fucking App!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    padding: 8,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#8B008B',
    backgroundColor: '#FFF',
    borderRadius: 10,
    // shadowOffset:{ width: 80, height: 130 },
    // shadowColor: 'black',
    // shadowOpacity: 1.0,
  },
}) 

export default Header;