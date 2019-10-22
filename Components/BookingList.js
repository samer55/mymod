import React, {Fragment} from 'react';

import { TouchableWithoutFeedback,View } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import { withNavigation } from "react-navigation";
import PropTypes from "prop-types";
import styled from "styled-components";
import Layout from "../Constants/Layout";
import Colors from "../Constants/Colors";
import {  Header, Thumbnail, Text } from 'native-base';
import {  Content, List, ListItem,  Left, Body, Right, Button } from 'native-base';
import { Rating, AirbnbRating } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'
import Star from 'react-native-star-view';

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
type Props = {};

const Service = ({ imgSrc, name, day,date,price,time ,status,navigation}) => {

  return(
<List>
              <ListItem thumbnail button onPress={()=>{navigation.navigate('BookingDetails')}}>
                <Left>
                  <Thumbnail  large borderRadius={13} source={{ uri: imgSrc }} />
                </Left>
                <Body>
                  <Text numberOfLines={1} style={{fontWeight:'500'}}>{name}</Text>
                  <Text style={{fontSize:12}} numberOfLines={1}>{day} <Text style={{fontSize:12}} >{date}</Text></Text>

                  <Text note numberOfLines={1}>{time}
  </Text>

                </Body>
                <Right>
                <Text note numberOfLines={1} style={{alignSelf:'center'}}>30 min before
  </Text>
{status==='Completed' ? <Button success rounded >
<Text style={{color:'white'}}>{status}</Text>
</Button>
:
<Button danger rounded >
<Text style={{color:'white'}}>{status}</Text>
</Button>
}

                </Right>
              </ListItem>
              </List>

  )
};

Service.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};
export default withNavigation(Service);
