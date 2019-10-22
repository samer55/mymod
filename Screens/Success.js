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
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Header } from 'react-native-elements'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import ProductCard from '../Components/scroll'
import Categories from '../Components/Categories'
import Tutor from '../Components/Tutor'
import Icon from 'react-native-vector-icons/Ionicons'
import { Slider,Button } from 'react-native-elements';
import CalendarPicker from 'react-native-calendar-picker';
import { Picker, Form } from "native-base";
import {  Thumbnail } from 'native-base';

class Success extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       selectedStartDate: null,
       selected: "key2"

     };
     this.onDateChange = this.onDateChange.bind(this);
   }
   onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  onValueChange(value: string) {
  this.setState({
    selected: value
  });
}
render(){
  const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

  const { selectedStartDate } = this.state;
const startDate = selectedStartDate ? selectedStartDate.toString() : '';

  return (
    <View style={{flex:1,marginTop:10}}>

        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

          <View style={styles.body}>

                <Icon name="ios-checkmark-circle" size={40} color='lightgreen' />
                <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Success!</Text>

                <Text style={styles.sectionTitle1}>Thank you for choosing our services and trust our teacher to help and teach you</Text>


                </View>

          <View style={{backgroundColor:'white',justifyContent:'space-around',marginTop:20,width:'100%'}}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
          <Thumbnail large source={{uri: uri}} />

          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.school}>Alice Daniela</Text>
            <Text style={styles.sectionTitle1}>English Language</Text>

          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle1}>Date & Time</Text>
            <Text style={styles.school}>Yarmouk University</Text>
            <Text style={styles.time}>10:00 AM</Text>

          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle1}>Address</Text>
            <Text style={styles.school}>Irbid,30 Street</Text>
            <Text style={styles.time}>Zamzam Building 3rd Floor</Text>

          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle1}>Total Price</Text>
            <Text style={styles.school}>$30</Text>
            <Text style={styles.time}>$30/hour</Text>

          </View>
          </View>
          </View>
        </ScrollView>
        <Button
  title="Done"
  style={{marginHorizontal:10}}
  buttonStyle={{borderRadius:12,width:'100%'}}
onPress={()=>{this.props.navigation.navigate('Home')}}
  />
    </View>
  );
}

};

const styles = StyleSheet.create({
  scrollView: {

  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems:'center'
  },
  school: {
    fontSize: 17,
    fontWeight: '500',
    color: 'black',
    marginBottom:5,
  },
  time: {
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
    marginBottom:5,
  },
  sectionContainer: {
    marginTop: 15,
    justifyContent:'center',
    paddingHorizontal: 24,
    alignItems:'center'
  },
  sectionContainer1: {
    marginTop: 10,
    paddingHorizontal: 24,
    flexDirection:'row',
    justifyContent:'center',

    alignItems:'center',
  },
  sectionTitle1: {
    fontSize: 17,
    fontWeight: '500',
    color: '#A9A9B0',
    alignSelf:'center',
    textAlign:'center'
  },
  sectionTitle: {
    fontSize: 40,
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

export default Success;
