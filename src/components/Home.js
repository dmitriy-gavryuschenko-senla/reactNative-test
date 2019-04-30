import React from 'react';
import { Alert, Text, Button, FlatList, ScrollView, Platform, StyleSheet, View, Image } from 'react-native';
import { NavigationEvents } from 'react-navigation';

import Header from './Header';
import Body from './Body';

class Home extends React.Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: 'orange' }
  }

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

  onSidebarClick = () => {
    this.props.navigation.toggleDrawer()
  }

  render() {
    const { name, showGreetings } = this.state

    return (
      <ScrollView>
        {/* <NavigationEvents
          onWillFocus={() => console.warn('Home will focus')}
          onDidFocus={() => console.warn('Home did focus')} /> */}
        <View style={styles.containerMain}>
          <Header  
            onSidebarClick={this.onSidebarClick} />
          <Body
            name={name}
            navigation={this.props.navigation}
            showGreetings={showGreetings}
            setName={this.setName}
            showGreet={this.showGreet}
            onBtnPress={this.onButtonPress} />
          <View style={styles.scrollBottom}>
            <Text style={{ fontSize: 66 }}>Scroll me plz</Text>
            <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
            <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
            <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
            <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
            <Text style={{ fontSize: 66 }}>If you like</Text>
            <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
            <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
            <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
            <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
            <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
            <Text style={{ fontSize: 66 }}>Scrolling</Text>
            <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
            <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
            <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
            <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
            <Text style={{ fontSize: 66 }}>It's cool</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#DB7093',
  },
  scrollBottom: {
    alignItems: 'center',
  }
});

export default Home;