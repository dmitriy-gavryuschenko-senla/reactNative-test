import React from 'react';
import { Text, FlatList, Button, StyleSheet, View, } from 'react-native';

import Fonts from '../fonts';

const News = (props) => {
  const navigation = props.navigation

  return (
    <View style={styles.container}>
      <Text style={styles.profile}>Welcome to News component!</Text>
      <View style={styles.btnContainer}>
        <Button
          color="purple"
          title="Go home"
          onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  )
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

export default News;