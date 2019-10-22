import React from "react";
import { TouchableOpacity, View, Platform ,StyleSheet} from "react-native";
import ProductScreenPresenter from "./ProductScreenPresenter";
import Icon from 'react-native-vector-icons/Ionicons'
import styled from "styled-components";
import Swiper from "react-native-swiper";
import Layout from "../../Constants/Layout";
import Colors from "../../Constants/Colors";
import UserPartials from "../components/UserPartials";
import { StatusBar } from "react-native";
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../../constants0/";
import { Button, Select, Input, Header, Switch } from "../../Components/";
import { Button as NButton } from 'react-native-elements';
import moment from 'moment';

const getHeight = () =>
  Layout.window.height <= 667
    ? Layout.window.height / 2.8
    : Layout.window.height / 2.3;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const ScrollView = styled.ScrollView``;

const Image = styled.Image`
  width: ${Layout.window.width};
  height: ${getHeight()};
  position: relative;
`;

const DataContainer = styled.View`
  padding-horizontal: 20px;
`;

const TimeLocation = styled.Text`
  color: ${Colors.greyColor};
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const NamePrice = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const NamePriceText = styled.Text`
  font-size: 24px;
  color: ${Colors.blackColor};
  font-weight: 600;
`;

const Divider = styled.View`
  width: 100%;
  height: 2px;
  background-color: rgba(151, 151, 151, 0.1);
  margin-bottom: 25px;
`;

const Description = styled.Text`
  margin-bottom: 25px;
  color: ${Colors.greyColor};
`;

const ReadMore = styled.Text`
  color: ${Colors.blackColor};
  margin-bottom: 40px;
`;

export default class extends React.Component {
  static navigationOptions = {
      //To hide the ActionBar/NavigationBar
      header: null,
  };
  state = {
    counter: 1,
       isLoading: true,puid:'',
       isEmpty: false,
       editdate:'',
       isFinished: false,
    edit:"",

     modalVisible: false,
      modalVisible1: false,  isDateTimePickerVisible: false,goals:'',
      product:this.props.navigation.state.params.product,
       selected2: undefined
  }
  constructor (props) {
      super(props);
      this.state = {
      };
      this.product =this.props.navigation.state.params.product
  }
  static navigationOptions = {
  header:null
  };

  render() {
    const timeString = moment(this.product.createdAt).fromNow()
    return <Container>

      <StatusBar barStyle="light-content" />
      <Block >
        <Header back title="Offer Screen" navigation={this.props.navigation} />
      </Block>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }} bounces={false}>
        <Swiper
          style={{ height: getHeight(), marginBottom: 20 }}
          activeDotColor="white"
          dotColor="rgba(255, 255, 255, 0.3)"
        >
          <Image
            source={{
              uri:
                this.product.image
            }}
          />

        </Swiper>
        <DataContainer>

              <NamePrice>
              <TimeLocation>{this.product.address} • {timeString}</TimeLocation>
          <NamePriceText>${parseInt(this.product.price)} /{this.product.priceper}</NamePriceText>
  </NamePrice>
          <NamePrice>
            <NamePriceText>{this.product.title}</NamePriceText>
          </NamePrice>
          <Divider />
          <Description>
{this.product.Description}
          </Description>
<View style={styles.schedule}>
<Text style={styles.title}>Schedule</Text>
<ScrollView horizontal={true} style={{paddingHorizontal:24}}>

{this.product.available.map((obj, index) => {
    console.log(obj);
return<View key={index}><NButton
title={obj}
style={{marginHorizontal:10}}
/>
</View>


 })}
 </ScrollView>
 </View>
          <UserPartials
            name={this.product.username}
            rating={5.0}
            onPress={()=>{this.props.navigation.navigate('tutor')}}
            avatarUrl={{uri:this.product.userimg}}
            onClick={()=>{this.props.navigation.navigate('ChatScreen',{title:this.product.title, puid:this.product.puid,uid:this.product.uid, tutor:true,username:this.product.username,img:this.product.userimg,new_messages:this.product.new_messages})}}
          />
        </DataContainer>
      </ScrollView>
    </Container>;
  }
}
const styles = StyleSheet.create({
  schedule: {
    backgroundColor: 'white',
    flex:1,flexDirection:'column',
    paddingVertical:10,
marginVertical:10
  },
  row: {
    backgroundColor: 'white',
    flex:1,flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'

  },
  date: {
    fontSize: 17,
  fontWeight:'500',
  marginVertical:10


  },
  title: {
    fontSize: 24,
  fontWeight:'600',
  marginVertical:10


  },
});
