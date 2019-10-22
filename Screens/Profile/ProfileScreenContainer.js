import React from "react";
import { Platform } from "react-native";
import styled from "styled-components";
import Avatar from "../components/Avatar";
import Colors from "../../Constants/Colors";
import ProfileLink from "../components/ProfileLink";
import { Switch,Text,View} from 'react-native'

const Container = styled.View`
  background-color: white;
  flex: 1;
`;

const ProfileHeader = styled.View`
  box-shadow: 0px 5px 5px rgba(60, 60, 60, 0.1);
  elevation: 4;
  background-color: white;
  padding: 30px 20px;
  padding-top: 65px;
  align-items: center;
  width: 100%;
`;

const AvatarContainer = styled.View`
  margin-bottom: 20px;
`;

const Name = styled.Text`
  font-weight: 600;
  color: ${Colors.blackColor};
  font-size: 24px;
  margin-bottom: 5px;
`;

const Bio = styled.Text`
  margin-bottom: 20px;
  color: ${Colors.greyColor};
`;

const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: rgba(151, 151, 151, 0.2);
  margin-bottom: 30px;
`;

const DataContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;

const DataPointContainer = styled.View`
  align-items: center;
  width: 33%;
  justify-content: center;
`;

const DataPointNumber = styled.Text`
  color: ${Colors.blackColor};
  margin-bottom: 3.5px;
  align-items: center;
`;

const DataPointName = styled.Text`
  color: ${Colors.greyColor};
  font-size: 12px;
`;

const LinksList = styled.ScrollView``;

import { firebaseApp } from '../../firebase'
import { NavigationActions } from 'react-navigation'
import { observer,inject } from 'mobx-react/native'
import _ from 'lodash'

@inject("appStore") @observer

export default class extends React.Component {
  constructor(){
   super();
     this.state = {switchValue:false,Modares:false,type:''}
 };
  static navigationOptions = { header: null };
  toggleSwitch = (value) => {
      //onValueChange of the switch this function will be called
      this.setState({Modares: value})
      //state changes according to switch
      //which will result in re-render the text
   }

   componentDidMount() {
     firebaseApp.auth().onAuthStateChanged(user => {
 if (user) {
   this.props.appStore.username = user.displayName
 this.props.appStore.uid =user.uid
 console.log("--------- loading " + this.props.appStore.uid + " ---------")
 firebaseApp.database().ref('users').child(user.uid).once('value')
        .then((snapshot) => {
          this.props.appStore.post_count = parseInt(snapshot.val().post_count)
          this.props.appStore.profileimg = snapshot.val().img

          this.props.appStore.order_count = parseInt(snapshot.val().order_count)
          this.props.appStore.chat_count = parseInt(snapshot.val().chat_count)
          this.props.appStore.type = snapshot.val().type
 if (snapshot.val().type==="Teacher"&&snapshot.val().Teacher) {
   this.setState({Modares:true})
 }else if (snapshot.val().type==="Teacher"&& !snapshot.val().Teacher) {
   this.props.navigation.navigate('ModaresSign')
 }
        })


 }
 console.log("--------- done of modares check "  + " ---------")


     })

   }



  render() {
    const type= this.props.appStore.type
    const imgp= this.props.appStore.profileimg

    return (
      <Container>
        <ProfileHeader>
          <AvatarContainer>
            <Avatar
              size="lg"
              source={{uri:imgp}}
            />
          </AvatarContainer>
          <Name>Alex Alexander {this.props.appStore.username}</Name>
          <Bio>{this.state.Modares?this.props.appStore.type:"university Student"} {this.props.appStore.uid} </Bio>
          <Divider />
          <DataContainer>
            <DataPointContainer>
              <DataPointNumber>{this.props.appStore.post_count}</DataPointNumber>
              <DataPointName>{this.state.Modares?"Offers":"Requests"}</DataPointName>
            </DataPointContainer>
            <DataPointContainer>
              <DataPointNumber>4.5</DataPointNumber>
              <DataPointName>Avg. Rating</DataPointName>
            </DataPointContainer>
            <DataPointContainer>
              <DataPointNumber>{this.props.appStore.chat_count}</DataPointNumber>
              <DataPointName>chat count</DataPointName>
            </DataPointContainer>
          </DataContainer>
        </ProfileHeader>
        <LinksList
          contentContainerStyle={{
            paddingTop: 10,
            paddingHorizontal: 20
          }}
        >
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
       <Text>{this.state.switchValue?'Switch to Learner Mode':'Switch to Tutor Mode'}</Text>
       <Switch

         onValueChange = {this.toggleSwitch}
         value = {this.state.Modares}/>
         </View>
         <ProfileLink
           name={this.state.Modares?"Post Offer":"Post Request"}
           description="Post Service you Offer"
           iconName={Platform.OS === "ios" ? "ios-create" : "md-create"}
           onPress={()=>{this.props.navigation.navigate('PostOffer',{type:this.state.Modares})}}
         />
          <ProfileLink
            name={this.state.Modares?"My Offer":"My Request"}
            description="Check your trading history"
            iconName={Platform.OS === "ios" ? "ios-book" : "md-book"}
               onPress={()=>{this.props.navigation.navigate('MyOffer',{type:this.state.Modares})}}
          />
          <ProfileLink
            name={this.state.Modares?"Promote My Offer":"Promote My Request"}
            description="Check your trading history"
            iconName={Platform.OS === "ios" ? "ios-book" : "md-book"}
          />
          <ProfileLink
            name="Help Center"
            description="Help regarding your recent trades"
            iconName={Platform.OS === "ios" ? "ios-help-circle-outline" : "md-help-circle-outline"}
          />

          <ProfileLink
            name="My Profile"
            description="Check your trading history"
            iconName={Platform.OS === "ios" ? "ios-contact" : "md-contact"}
          />
          <ProfileLink
            name="Settings"
            description="Profile and security information"
            iconName={Platform.OS === "ios" ? "ios-settings" : "md-settings"}
          />
          <ProfileLink
            name="Log out"
            description="log out of your account"
            onPress={this._logOut}
            iconName={Platform.OS === "ios" ? "ios-logout" : "md-logout"}
          />
        </LinksList>
      </Container>);
  }
  _logOut = () => {
     firebaseApp.auth().signOut()
     .then(() => {
       this.props.appStore.username = ""
       this.props.appStore.user = {}
       this.props.appStore.post_count = 0
       this.props.appStore.chat_count = 0
       this.props.appStore.order_count = 0
       this.props.navigation.navigate('signup')
     }, function(error) {
       console.log(error)
     });
   }
}
