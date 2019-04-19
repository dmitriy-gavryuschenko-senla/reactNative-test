import React from 'react';
import { StyleSheet, Button, Text, View, Image } from 'react-native';

import NameInputBlock from './NameInputBlock';

class Body extends React.Component {
  render() {
    return (
      <View style={styles.containerBody}>
          <View style={styles.containerMiddle}>
            <NameInputBlock
              name={this.props.name} 
              setName={this.props.setName}
              showGreet={this.props.showGreet}
              showGreetings={this.props.showGreetings} />
            <Button
              style={styles.button}
              title="Press Me" 
              onPress={this.props.onBtnPress} />
          </View>
          <View style={styles.containerBottom}>
            <Text>Footer</Text>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  containerBody: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'stretch',
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
    flex: 1,
    width: 150,
    padding: 20
  }
})

export default Body;