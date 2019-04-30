import React from 'react';
import { Text, FlatList, Button, StyleSheet, View, } from 'react-native';

import Fonts from '../fonts';

class Profile extends React.Component {
  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <Text style={styles.profile}>Hello I am a Profile</Text>
        <View style={styles.btnContainer}>
          <Button
            color="purple"
            title="Go to news"
            onPress={() => navigate('News')} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnContainer: {
    width: 150,
    marginTop: 15
  },
  profile: {
    fontSize: 26,
    fontFamily: Fonts.OpenSansItalic,
    color: 'purple'
  }
})

export default Profile;
