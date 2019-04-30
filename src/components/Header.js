import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';

import Fonts from '../fonts';

class Header extends React.Component {
  // componentDidMount() {
  //   console.warn('width', Dimensions.get('window').width);
  // }

  render() {
    return (
      <View style={styles.containerHeader}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => this.props.onSidebarClick()} >
            <Image 
              source={require('../assets/icons/menu.png')}
              tintColor={styles.sidebar.color} />
          </TouchableOpacity>
          <Text style={styles.welcome}>My Awesome App!</Text>
        </View>        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerHeader: {
    flex: 1,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '96%',
    height: '62%',
    padding: 8,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#8B008B',
    // backgroundColor: '#FFF',
    // borderRadius: 10,
  },
  sidebar: {
    color: '#FFF',    
  },
  welcome: {    
    fontSize: 24,
    textAlign: 'center',    
    fontFamily: Fonts.OpenSans,
    color: '#FFF',
    fontWeight: '400'
    // shadowOffset:{ width: 80, height: 130 },
    // shadowColor: 'black',
    // shadowOpacity: 1.0,
  },
}) 

export default Header;