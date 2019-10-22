import React from "react";
import HomeScreenPresenter from "./HomeScreenPresenter";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from "styled-components";
import { products } from "../../dummy";
import Service from "../../Components/servicelist";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,Dimensions,
  View,
  ListView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
const Container = styled.View`
  background-color: white;
  flex: 1;
`;
import { firebaseApp } from '../../firebase'
import { NavigationActions } from 'react-navigation'
import { observer,inject } from 'mobx-react/native'
import _ from 'lodash'

@inject("appStore") @observer

export default class extends React.Component {
  state = {
      search: '',
      commentsRef:'',
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      dataSources: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),

  offer:'',
      modares:false
    };
  static navigationOptions = {
    title: "Offers",
    headerRight: (
      <Button
   icon={
     <Icon
       name="ios-funnel"
       size={30}
       color="black"
     />
   }
  onPress={() => this.props.navigation.navigate("Filter")}
   type="clear"
 />

   ),
  };
  componentDidMount() {
    const offers = firebaseApp.database().ref('Offers');
    this.setState({offers})
    this.OfferItems(offers);

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

        })
      })
      this.setState({dataSources: this.state.dataSource.cloneWithRows(comments)});
    })
  }
  render() {
    return (
      <Container>
      <ListView
        automaticallyAdjustContentInsets={false}
        initialListSize={1}
        dataSource={this.state.dataSources}
        renderRow={this._renderoffer}

        onEndReachedThreshold={1}
      />
      </Container>

    );
  }
  _renderoffer = (data) => {
    const price =parseInt(data.price)

    return (

      <Service data={data} imgSrc={data.image} location={data.address} subject={data.Category} price={price} name={data.title} tutor={data.username} priceper={data.priceper}/>


    )
  }
}
