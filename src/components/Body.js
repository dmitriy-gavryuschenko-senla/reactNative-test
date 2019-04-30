import React from 'react';
import { StyleSheet, Button, Text, View, Image } from 'react-native';

import NameInputBlock from './NameInputBlock';

const Body = props => {
  const { navigate } = props.navigation

  return (
    <View style={styles.containerBody}>
      <View style={styles.containerMiddle}>
        <NameInputBlock
          name={props.name} 
          setName={props.setName}
          showGreet={props.showGreet}
          showGreetings={props.showGreetings} />
        <View style={styles.button}>
          <Button          
            title="Press Me" 
            onPress={props.onBtnPress} />
        </View>
        <View style={styles.navButton}>
          <Button          
            title="Go to profile" 
            color="purple"
            onPress={() => {navigate('Profile')}} />
        </View>
      </View>
      <View style={styles.containerBottom}>
        <Text>Block</Text>
      </View>
    </View>
  )  
}

const styles = StyleSheet.create({
  containerBody: {
    flex: 1,
    height: 590,
    // justifyContent: 'center',
    // alignItems: 'stretch',
  },
  containerMiddle: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFF" 
  },
  containerBottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#B5BC"
  },
  button: {
    width: 150,
  },
  navButton: {
    width: 180,
    margin: 15
  }
})

export default Body;