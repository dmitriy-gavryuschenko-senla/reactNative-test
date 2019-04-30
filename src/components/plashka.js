class DrawerContentComponents extends Component {
  render() {
    const currentRoute = this.props.navigation.state.routes[this.props.navigation.state.index]
      .routeName;
    return (
      <View style={drawer.container}>
        <View style={drawer.headerContainer}>
          <ImageBackground
            source={images.loginLogo}
            style={{ flex: 1, width: 280, justifyContent: 'center' }}
          />
        </View>
        <View style={drawer.screenContainer}>
          <View style={drawer.screenStyle}>
            <Text
              onPress={Actions.home}
              style={
                currentRoute === 'home' ? drawer.screenTextStyleActive : drawer.screenTextStyle
              }
            >
              Home
            </Text>
          </View>
          <View style={drawer.screenStyle}>
            <Text
              style={
                currentRoute === 'details' ? drawer.screenTextStyleActive : drawer.screenTextStyle
              }
              onPress={Actions.details}
            >
              Details
            </Text>
          </View>
          <View style={drawer.screenStyle}>
            <Text
              style={
                currentRoute === 'cards' ? drawer.screenTextStyleActive : drawer.screenTextStyle
              }
              onPress={Actions.cards}
            >
              Cards
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

DrawerContentComponents.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      routes: PropTypes.array,
      index: PropTypes.number,
    }),
  }),
};

export default DrawerContentComponents;

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Tabs,
      navigationOptions: ({ navigation }) => ({
        title: 'Вкладки',
      }),
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Детализация',
      }),
    },
  },
  {
    contentComponent: ({ navigation }) => <DrawerContentComponents navigation={navigation} />,
    initialRouteName: 'Home',
  },
);