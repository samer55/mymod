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
  ScrollView,Dimensions,
  View,   ActivityIndicator,
  ListView,
  LayoutAnimation,
  Platform,
  UIManager,

  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { products } from "../dummy";
import MasonryProducts from "./components/MasonryProducts";
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants0/";
import { Button, Select, Input, Header, Switch } from "../Components/";

const { width } = Dimensions.get("screen");

import {   Item } from 'native-base';
import { SearchBar } from 'react-native-elements';

import ProductCard from '../Components/scroll'
import Categories from '../Components/Categories'
import Tutor from '../Components/Tutor'
import {  Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import {   List } from 'native-base';
//argon
import { articles, Images } from "../constants0/";
import { Card } from "../Components/";


const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;
const categories = [
  {
    title: "Music Album",
    description:
      "Rock music is a genre of popular music. It developed during and after the 1960s in the United Kingdom.",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?fit=crop&w=840&q=80",
    price: "$125"
  },
  {
    title: "Events",
    description:
      "Rock music is a genre of popular music. It developed during and after the 1960s in the United Kingdom.",
    image:
      "https://images.unsplash.com/photo-1543747579-795b9c2c3ada?fit=crop&w=840&q=80",
    price: "$35"
  }
];
import { firebaseApp } from '../firebase'
import { NavigationActions } from 'react-navigation'
import { observer,inject } from 'mobx-react/native'
import _ from 'lodash'

@inject("appStore") @observer

class TutorsScreen extends React.Component {
  static navigationOptions = {
header: null,
};


  constructor(props) {
  super(props)
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }
  this.state = {
    counter: 1,
    isLoading: true,
    isEmpty: false,
    isFinished: false,
    dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
  }
}

componentDidMount() {
  console.log("--------- TIMELINE --------- " + this.state.counter)
  firebaseApp.database().ref('Teacher').orderByChild('createdAt').on('value',
  (snapshot) => {
    if (snapshot.val()) {
      this.setState({ isEmpty: false })
      console.log("--------- render --------- " )

      this.setState({ dataSource: this.state.dataSource.cloneWithRows(_.reverse(_.toArray(snapshot.val()))) })
    }
    else {
      this.setState({ isEmpty: true })
    }
    this.setState({ isLoading: false })
  })
}



render(){
  const { search } = this.state;
  return (
    <View style={{flex:1}}>
    <Block style={{ marginBottom: theme.SIZES.BASE }}>
      <Header back tabs={tabs.categories} search title="Tutors" navigation={this.props.navigation} />
    </Block>

        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
          <List>
          <ListView
          automaticallyAdjustContentInsets={false}
         initialListSize={1}
         dataSource={this.state.dataSource}
         renderRow={this._renderRow}
         renderFooter={this._renderFooter}
         onEndReached={this._onEndReached}
         onEndReachedThreshold={1}
          />
          </List>
          </View>
        </ScrollView>
    </View>
  );
}
_renderRow = (data) => {
  const price =parseInt(data.price)
  console.log("--------- row --------- " )

  return (

    <List>
    <Tutor name={data.first+" "+data.last} uid={data.uid} navigation={this.props.navigation} price={price} location={data.location.address} subject={data.subject} imgSrc={data.image} />

        </List>

  )
}
_onEndReached = () => {
   //console.log("TIMELINE ----> _onEndReached :+++:");
   if (!this.state.isEmpty && !this.state.isFinished && !this.state.isLoading) {
     this.setState({ counter: this.state.counter + 1 })
     this.setState({ isLoading: true })
     firebaseApp.database().ref('Teacher').off()
     firebaseApp.database().ref('Teacher').orderByChild('createdAt').limitToLast(this.state.counter+1).on('value',
     (snapshot) => {
       this.setState({ isFinished: false })
       console.log("---- TIMELINE POST ON END RETRIEVED ---- "+ this.state.counter +" - "+ _.toArray(snapshot.val()).length)
       if (_.toArray(snapshot.val()).length < this.state.counter) {
         console.log("---- TIMELINE POST FINISHED ----");
         this.setState({ isFinished: true })
       }
       if (snapshot.val()) {
         this.setState({ isEmpty: false })
         this.setState({
           dataSource: this.state.dataSource.cloneWithRows(_.reverse(_.toArray(snapshot.val()))),
         })
       }
       this.setState({ isLoading: false })
     })
   }
 }

 _renderFooter = () => {
   if (this.state.isLoading) {
     return (
       <View style={styles.waitView}>
         <ActivityIndicator size='large'/>
       </View>
     )
   }
   if (this.state.isEmpty) {
     return (
       <View style={styles.waitView}>
         <Text>Nothing there yet.</Text>
       </View>
     )
   }
 }

 componentWillUnmount() {
   console.log("---- TIMELINE UNMOUNT ---")
   firebaseApp.database().ref('Teacher').off()
 }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
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
  sectionContainer1: {
    marginTop: 32,
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

export default TutorsScreen;
