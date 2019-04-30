import React from 'react';
import { Text, FlatList, Button, StyleSheet, View, } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';

import Fonts from '../fonts';

class Sidebar extends React.Component {
  // componentDidMount() {
  //   console.warn('Sidebar mounted!');
  // }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        {/* <NavigationEvents
          onWillFocus={() => console.warn('Sidebar will focus')}
          onDidFocus={() => console.warn('Sidebar did focus')} /> */}
        <Text style={styles.profile}>I am a Sidebar</Text>
        <View style={styles.list}>
          <FlatList
            data={this.props.sidebarData}
            renderItem={({item}) => <Text>{item.name}</Text>} />
        </View>        
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
  list: {
    height: 160,
  },
  profile: {
    fontSize: 26,
    fontFamily: Fonts.OpenSansItalic,
    color: 'purple'
  }
})

const mapStateToProps = (state) => {
  return {
    sidebarData: state.sidebar.sidebarData
  }
}

export default connect(mapStateToProps)(Sidebar);
