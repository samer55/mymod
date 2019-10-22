import React, {Fragment} from 'react';

import { TouchableWithoutFeedback,View,Image ,Dimensions} from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import { withNavigation } from "react-navigation";
import PropTypes from "prop-types";
import styled from "styled-components";
import Layout from "../Constants/Layout";
import Colors from "../Constants/Colors";
import {  Header, Thumbnail} from 'native-base';
import {  Content, List, ListItem,  Left, Body, Right, Button ,Card, CardItem, } from 'native-base';
import { Rating, AirbnbRating } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'
import { Block, Text, theme } from 'galio-framework';
import Star from 'react-native-star-view';
const { width } = Dimensions.get("screen");

import { argonTheme } from '../constants0';

const Container = styled.View`
  padding-horizontal:20px;
`;

const ImageContainer = styled.View`
  box-shadow: 0px 10px 15px rgba(60, 60, 60, 0.4);
  width: ${Layout.window.width / 1.5 };
  border-radius: 15px;
  elevation: 4;
  margin-bottom: 1px;
  height:${Layout.window.width / 2 -20};
`;

const Name = styled.Text`
  color: ${Colors.greyColor};
  margin-left: 10px;
  margin-bottom: 10px;
`;

const Price = styled.Text`
  font-weight: 600;
  margin-left: 10px;
    margin-vertical: 10px;
  color: ${Colors.blackColor};
`;

const Request = ({ imgSrc, name, location,data, navigation,subject,price ,img,request,saved,priceper,my}) => (

  <Card style={{flex: 0}}>
  <CardItem >
    <Left>
      <Thumbnail source={{uri: imgSrc}} />
      <Body>
        <Text>{name}</Text>
        <Text note>{location}</Text>
      </Body>
    </Left>
  </CardItem>
  <CardItem>
    <Body>
      <Image source={{uri: img}} style={{height: 200, width: '100%', flex: 1}}/>
      <Text style={{fontSize:17}}>
      {request}
      </Text>
    </Body>
  </CardItem>
  <CardItem>
    <Left>
      <Text style={{fontSize:17}}>
      <Text style={{fontSize:17,fontWeight:'700'}}>Budget: </Text>${parseInt(price)}/ {priceper}
      </Text>
    </Left>
  </CardItem>
  {!my?<CardItem>
    <Left>
      <Button bordered textStyle={{color: '#87838B'}} style={{padding:10}}  onPress={() => {navigation.navigate('MakeOffer')}}>

        <Text>Make offer</Text>
      </Button>
      <Button block  textStyle={{color: '#ffffff'}} style={{padding:10,marginLeft:5}}  onPress={()=>{navigation.navigate('Offerscreen',{product:data})}}>

        <Text style={{color:'white'}}>Read More</Text>
      </Button>
    </Left>
    <Right>
      <Button transparent >
        <Icon name={saved ?"ios-heart" :"ios-heart-empty"} color="red" size={25}/>

      </Button>
    </Right>
  </CardItem>:null}
</Card>

);

Request.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};
export default withNavigation(Request);
