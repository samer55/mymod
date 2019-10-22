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
  View,
  ListView,
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
import Request from '../Components/request'

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

class HomeScreen extends React.Component {
  static navigationOptions = {
header: null,
};
state = {
    search: '',
    commentsRef:'',
    dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
    dataSources: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),

offer:'',
    modares:false
  };

  updateSearch = search => {
    this.setState({ search });
  };
  componentDidMount() {
    firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
  this.props.appStore.username = user.displayName
  this.props.appStore.uid =user.uid
  this.currentUserId =user.uid
  console.log("--------- loading " + this.props.appStore.uid + " ---------")
  firebaseApp.database().ref('users').child(user.uid).once('value')
       .then((snapshot) => {
         this.props.appStore.post_count = parseInt(snapshot.val().post_count)
         this.props.appStore.order_count = parseInt(snapshot.val().order_count)
         this.props.appStore.profileimg = snapshot.val().img

         this.props.appStore.chat_count = parseInt(snapshot.val().chat_count)
         this.props.appStore.type = snapshot.val().type

       })


  }
  console.log("--------- done of modares check "  + " ---------")


    })

    const offers = firebaseApp.database().ref(!this.state.modares?'Offers':'Requests').limitToLast(5);
    this.setState({offers})
    this.OfferItems(offers);

    const commentsRef = firebaseApp.database().ref('Teacher').limitToLast(5);
    this.setState({commentsRef})
    this.listenForItems(commentsRef);
  }

  listenForItems(ref) {
    ref.on('value', snap => {
      let comments = [];
      snap.forEach(child => {
        comments.push({

          uid: child.val().uid,
first:child.val().first,
last:child.val().last,
location:child.val().location,
price:child.val().price,
subject:child.val().subject,
img:child.val().image,


        })
      })
      this.setState({dataSource: this.state.dataSource.cloneWithRows(comments)});
    })
  }
  OfferItems(ref) {
    ref.on('value', snap => {
      let comments = [];
      snap.forEach(child => {
        comments.push({

          uid: child.val().uid,
title:child.val().title,
price:child.val().price,
priceper:child.val().priceper,
rating:child.val().rating||0,
puid:child.val().puid,
image:child.val().image,
Category:child.val().Category,
Description:child.val().Description,
location:child.val().location,
address:child.val().location.address,
username:child.val().username,
available:child.val().available,
createdAt:child.val().createdAt,
userimg:child.val().userimg,
puid:child.val().puid,
new_messages:child.val().new_messages,

        })
      })
      this.setState({dataSources: this.state.dataSource.cloneWithRows(comments)});
    })
  }

render(){
  const { search } = this.state;
  return (
    <View style={{flex:1}}>
    <Block style={{ marginBottom: theme.SIZES.BASE }}>
      <Header tabs={tabs.categories} search title={!this.state.modares ?"Modares App":"Requests"} navigation={this.props.navigation} />
    </Block>

        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
      { !this.state.modares ?   <View style={styles.body}>

            <View style={styles.sectionContainer1} onPress={()=>{this.props.navigation.navigate('Offers')}}>
              <Text style={styles.sectionTitle}>Top Offer</Text>
  <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('Offers')}}>
              <Text style={{fontSize:13,color:'#118DF0'}}>See all</Text>

            </TouchableOpacity>
            </View>
  <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
  <ScrollView horizontal={true}>
              <Block flex row>
              <ListView
                automaticallyAdjustContentInsets={false}
                initialListSize={1}
                dataSource={this.state.dataSources}
                renderRow={this._renderoffer}
                horizontal={true}
                onEndReachedThreshold={1}
              />


            </Block>
            </ScrollView>
</Block>


<View style={styles.sectionContainer1} >
  <Text style={styles.sectionTitle}>Top Tutor</Text>
  <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('TutorsScreen')}}>
              <Text style={{fontSize:13,color:'#118DF0'}}>See all</Text>

            </TouchableOpacity>
</View>
<ListView
  automaticallyAdjustContentInsets={false}
  initialListSize={1}
  dataSource={this.state.dataSource}
  renderRow={this._renderRow}
  onEndReachedThreshold={1}
/>

          </View>
          :
          <View style={styles.container} >
          <ListView
            automaticallyAdjustContentInsets={false}
            initialListSize={1}
            dataSource={this.state.dataSources}
            renderRow={this._renderrequest}
            onEndReachedThreshold={1}
          />
        </View>}
        </ScrollView>
    </View>
  );
}
_renderRow = (data) => {
  const price =parseInt(data.price)
  return (

    <List>
    <Tutor name={data.first+" "+data.last} uid={data.uid} navigation={this.props.navigation} price={price} location={data.location.address} subject={data.subject} imgSrc={data.img} />

        </List>

  )
}
_renderrequest = (data) => {
  const price =parseInt(data.price)
  return (
    <Request name={data.username} img={data.image} data={data} request={data.title} imgSrc={data.userimg} location={data.address} price={data.price} priceper={data.priceper}/>


  )
}
_renderoffer = (data) => {
  const price =parseInt(data.price)
  return (

    <Card
      item={data}
      style={{ marginRight: theme.SIZES.BASE }}
    />

  )
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

export default HomeScreen;
