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
import {  Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import { Slider,Button } from 'react-native-elements';
import CalendarPicker from 'react-native-calendar-picker';
import { Picker, Form } from "native-base";

class Book extends React.Component {
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
  const { selectedStartDate } = this.state;
const startDate = selectedStartDate ? selectedStartDate.toString() : '';

  return (
    <View style={{flex:1,marginTop:10}}>

        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

          <View style={styles.body}>

                <View style={styles.sectionContainer1} onPress={()=>{this.props.navigation.navigate('Offers')}}>
                  <Text style={styles.sectionTitle}>Review Booking</Text>
                </View>
                <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle1}>Date & Time:</Text>
                <Text style={styles.school}>Monday,October 24</Text>
                <Text style={styles.time}>10:00 AM</Text>

                </View>

                <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle1}>Teacher:</Text>
                <Text style={styles.school}>Alice Daniela</Text>
                <Text style={styles.time}>English Language</Text>

                </View>
                <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle1}>Location of Lesson:</Text>
                <Text style={styles.school}>Irbid,30 Streets,Zamzam Building 3rd floor.</Text>



                </View>
                <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle1}>Payment method:</Text>
                <Text style={styles.school}>Cash.</Text>



                </View>
                <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle1}>Price:</Text>
                <Text style={styles.school}>$30/ hour.</Text>



                </View>
                <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle1}>Total:</Text>
                <Text style={styles.school}>$30.</Text>



                </View>
          </View>
        </ScrollView>
        <Button
  title="Confirm"
  style={{marginHorizontal:10}}
  buttonStyle={{borderRadius:12,width:'100%'}}
onPress={()=>{this.props.navigation.navigate('Success')}}
  />
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
    paddingHorizontal: 24,
  },
  sectionContainer1: {
    marginTop: 10,
    paddingHorizontal: 24,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  sectionTitle1: {
    fontSize: 17,
    fontWeight: '500',
    color: '#A9A9B0',
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

export default Book;
