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
import Icon from 'react-native-vector-icons/Ionicons';

import ProductCard from '../Components/scroll'
import {  Thumbnail } from 'native-base';

class FindTutor extends React.Component {
render(){
  return (
    <View stylr={{flex:1}}>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView>
<View style={styles.sectionContainer}>
  <Text style={styles.sectionTitle}>Find The Ideal Tutor Today.</Text>
</View>
<View style={styles.sectionContainer}>
<Text style={styles.sectionTitle1}>Location</Text>

<Button
style={{justifyContent:'space-around',}}
  icon={
    <Icon
      name="ios-arrow-forward"
      size={15}
style={{marginLeft:10,alignSelf:'center'}}
      color="steelblue"
    />
  }
  iconRight
  title="Input Adress"
  type="outline"
/>
</View>
<View style={styles.sectionContainer}>
<Text style={styles.sectionTitle1}>Education Level</Text>

<Button
style={{justifyContent:'space-around',}}
  icon={
    <Icon
      name="ios-arrow-forward"
      size={15}
style={{marginLeft:10,alignSelf:'center'}}
      color="steelblue"
    />
  }
  iconRight
  title="Select Level"
  type="outline"
/></View>
<View style={styles.sectionContainer}>
<Text style={styles.sectionTitle1}>Subject</Text>

<Button
style={{justifyContent:'space-around',}}
  icon={
    <Icon
      name="ios-arrow-forward"
      size={15}
style={{marginLeft:10,alignSelf:'center'}}
      color="steelblue"
    />
  }
  iconRight
  title="Select Subject"
  type="outline"
/></View>
<View style={styles.sectionContainer}>

<Button
style={{justifyContent:'space-around',}}

  disabled={false}
  title="Find"
  type="outline"
  onPress={()=>{this.props.navigation.navigate('Home')}}
/></View>

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
    marginBottom:5,
    fontWeight: '600',
    color: 'black',
  },
  sectionTitle1: {
    fontSize: 17,
    marginBottom:5,
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

export default FindTutor;
