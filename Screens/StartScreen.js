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
  StatusBar,
} from 'react-native';
import { Header } from 'react-native-elements'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Button } from 'react-native-elements';

import ProductCard from '../Components/scroll'
import {  Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'

class StartScreen extends React.Component {
render(){
  return (
    <View stylr={{flex:1}}>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView>
<View style={styles.sectionContainer}>
  <Text style={styles.sectionTitle}>What Are You Looking For</Text>
</View>
<View style={styles.sectionContainer}>
<Button
onPress={()=>{this.props.navigation.navigate('Find')}}
  title="Find Tutor"
  type="outline"
/>
</View>
<View style={styles.sectionContainer}>
<Button
  title="Post Services you Looking For."
/>
</View>
      </SafeAreaView>
    </View>
  );
}

};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
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

export default StartScreen;
