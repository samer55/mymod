/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import {
  Platform,

} from 'react-native';
import { Provider } from 'mobx-react/native';
import appStore from './store/AppStore'

import ProductCard from './Components/scroll'
import Categories from './Components/Categories'
import Tutor from './Components/Tutor'
import AppNavigator from './navigation/AppNavigator';
import TabBar from "react-native-nav-tabbar";

const App = () => {
console.disableYellowBox = true;
  return (
    <Provider appStore={appStore}>
    <AppNavigator />
      </Provider>


  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  }, container: {
      flex: 1,
      flexDirection:"row",
      justifyContent:"flex-end",
      alignItems: 'center',
      backgroundColor: 'white',
  },
  textContent: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'black',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
