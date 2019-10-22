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
import { withNavigation } from "react-navigation";

class Date extends React.Component {
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
          <CalendarPicker
                  onDateChange={this.onDateChange}
                />
                <View style={styles.sectionContainer1} onPress={()=>{this.props.navigation.navigate('Offers')}}>
                  <Text style={styles.sectionTitle}>Available Time</Text>
                </View>
                <View style={styles.sectionContainer}>
                <ScrollView horizontal={true} >
                <Button
          title="7:00 AM"
          style={{marginHorizontal:10}}
          buttonStyle={{borderRadius:12}}

          />
          <Button
          title="8:00 AM"
          disabled
          type="outline"

          style={{marginHorizontal:10}}
          />
          <Button
          title="9:00 AM"
          type="outline"

          buttonStyle={{borderRadius:12}}

          style={{marginHorizontal:10}}
          />
          <Button
          title="10:00 AM"
          buttonStyle={{borderRadius:12}}
          type="outline"

          style={{marginHorizontal:10}}
          />
          <Button
          title="11:00 AM"
          buttonStyle={{borderRadius:12}}
          type="outline"

          style={{marginHorizontal:10}}
          />
          <Button
          title="12:00 AM"
          buttonStyle={{borderRadius:12}}
          type="outline"

          style={{marginHorizontal:10}}
          />
          </ScrollView>

                </View>
                <View style={styles.sectionContainer1} onPress={()=>{this.props.navigation.navigate('Offers')}}>
                    <Text style={styles.sectionTitle}>Reminder</Text>
                  </View>
                  <Form>
                      <Picker
                        mode="dropdown"
                        placeholder="Select Alert"
                        iosIcon={<Icon name="ios-arrow-down" />}
                        placeholder="Select your SIM"
                        textStyle={{ color: "black" }}
                        itemStyle={{
                          backgroundColor: "white",
                          marginLeft: 0,
                          paddingLeft: 10
                        }}
                        itemTextStyle={{ color: 'black' }}
                        style={{ width: undefined }}
                        selectedValue={this.state.selected}
                        onValueChange={this.onValueChange.bind(this)}
                      >
                        <Picker.Item label="30 minutes before" value="key0" />
                        <Picker.Item label="ATM Card" value="key1" />
                        <Picker.Item label="30 minutes before" value="key2" />
                        <Picker.Item label="Credit Card" value="key3" />
                        <Picker.Item label="Net Banking" value="key4" />
                      </Picker>
                    </Form>

          </View>
        </ScrollView>
        <Button
  title="Next"
  style={{marginHorizontal:10}}
  onPress={()=>{this.props.navigation.navigate('Book')}}
  buttonStyle={{borderRadius:12,width:'100%'}}

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
  sectionContainer: {
    marginTop: 1,
    paddingHorizontal: 24,
  },
  sectionContainer1: {
    marginTop: 10,
    paddingHorizontal: 24,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
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

export default withNavigation(Date);
