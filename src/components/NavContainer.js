import React from 'react';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import { connect } from 'react-redux';
import { updateSidebarData } from '../actions/sidebarActions';

import Home from './Home';
import Profile from './Profile';
import News from './News';
import Sidebar from './SIdebar';

const DrowerNavigator = createDrawerNavigator({
  Home: {
    screen: Home
  }
},
  {
    contentComponent: Sidebar
  }
)

const StackNavigator = createStackNavigator({
  Home: {
    screen: DrowerNavigator
  },
  Profile: {
    screen: Profile
  },
  News: {
    screen: News
  } 
},
  {
    defaultNavigationOptions: {
      header: null
    }
  }
)

const AppContainer = createAppContainer(StackNavigator)

const NavContainer = (props) => {
  const handleStateChange = (prevState, newState) => {
    if (newState.routes[0].isDrawerOpen) {
      props.updateSidebarData({ key: String(Math.random() * 5), name: 'Fuck you!' })
    }
  }

  return (
    <AppContainer
      onNavigationStateChange={handleStateChange} />
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSidebarData: (newData) => dispatch(updateSidebarData(newData))
  }
}

export default connect(null, mapDispatchToProps)(NavContainer);

