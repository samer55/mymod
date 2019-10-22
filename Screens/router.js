import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from './HomeScreen';


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
  }
);

export default  AppContainer = createAppContainer(RootStack);

 class Router extends React.Component {
  render() {
    return <AppContainer />;
  }
}
