import React from 'react'
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { TouchableOpacity, View, Platform ,StyleSheet} from "react-native";

import { argonTheme, tabs } from "../constants0/";
import { Button, Select, Input, Header, Switch } from "../Components/";
import {

  TextInput,
  StatusBar,
  Dimensions,
  Image,
  ScrollView,
  Alert,
} from 'react-native'
import { firebaseApp } from '../firebase'
import firebase from 'firebase'
import Icon from 'react-native-vector-icons/Ionicons'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import { observer,inject } from 'mobx-react/native'
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
const screenWidth = Dimensions.get('window').width
import {Card, CardItem, Body ,Left,Right} from "native-base";

@inject("appStore") @observer

export default class ChatScreen extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      messages: [],
      uid:this.props.navigation.state.params.uid,
      username:this.props.navigation.state.params.username,
      img:this.props.navigation.state.params.img,
      new_messages:this.props.navigation.state.params.new_messages,

status:'available',
tutor:this.props.navigation.state.params.tutor,

      height: 0,
    }

    this.currentUserId = this.props.appStore.uid
    console.log("--------- current " + this.currentUserId + " ---------")

      this.chatRef = firebaseApp.database().ref(`chat/ +${this.generateChatId(this.currentUserId)}`)

      console.log("--------- check id  appStore.uid"+ this.currentUserId + " --------- userid "+this.state.uid+"----"+this.generateChatId(this.currentUserId))

      this.chatRefData = this.chatRef.orderByChild('order')

  }
  static navigationOptions = {
  header: null,
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
         this.props.appStore.chat_count = parseInt(snapshot.val().chat_count)
         this.props.appStore.type = snapshot.val().type

       })


  }
  console.log("--------- done of modares check "  + " ---------")


    })
    firebaseApp.database().ref('booking').child(this.currentUserId).child(this.state.uid).once('value')
           .then((snapshot) => {
    console.log(snapshot.val().tutor);
    this.setState({tutor:snapshot.val().tutor})
           })
           firebaseApp.database()
             .ref()
             .child('chatuser')
             .child(this.currentUserId)
             .child(this.state.uid).update( { new_messages:0 } )
    this.chatRef && this.listenForItems(this.chatRefData)
  }
  componentWillUnmount() {
  }

  listenForItems = (chatRef) => {
    //--- case different
    chatRef.on('value', (snap) => {
      // get children as an array
      const items = []
      snap.forEach((child) => {
        items.push({
          _id: child.val().createdAt,
          text: child.val().text,
          createdAt: new Date(child.val().createdAt),
          user: {
            _id: child.val().uid,
              avatar:child.val().img
          },
        })
      })

      this.setState({
        messages: items,
      })
    })
  }

  generateChatId = (userId) => {
    if (userId > this.state.uid) return `${userId}-${this.state.uid}`
    return `${this.state.uid}-${userId}`
  }
  _onBuyConfirm = () => {
    Alert.alert(
      'Order Confirmation',
      'Are you sure you want to purchase this item?',
      [
        { text: 'No', onPress: () => {}, style: 'cancel' },
        { text: 'Yes', onPress: () => { this._onBuy() } },
      ]
    )
  }
  renderFooter = (props) => {
        const Footer = (this.state.status === 'sold') ?
          <View style={{ marginTop: 5, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontWeight:'bold', color: '#3367d6', marginBottom: 7, }}>
              - Sold to { this.state.clientName } -
            </Text>
          </View>
        :
          null
        return Footer
    }
    offer = (props) => {
     const Accessory = (this.state.tutor) ?
       <View style={ styles.chatControl }>
         <TouchableOpacity onPress={ this._onBuyConfirm }>
           <View style={ styles.btnContainer }>
             <Text style={ styles.btnText }>{ 'Book Tutor'.toUpperCase() }</Text>
           </View>
         </TouchableOpacity>
       </View>
     :
     <View style={ styles.chatControl }>
       <TouchableOpacity onPress={ this._onBuyConfirm }>
         <View style={ styles.btnContainer }>
           <Text style={ styles.btnText }>{ 'Make offer for student'.toUpperCase() }</Text>
         </View>
       </TouchableOpacity>
     </View>
     return Accessory
 }
    renderAccessory = (props) => {
     const Accessory = (this.state.tutor) ?
       <View style={ styles.chatControl }>
         <TouchableOpacity onPress={ this._onBuyConfirm }>
           <View style={ styles.btnContainer }>
             <Text style={ styles.btnText }>{ 'Book Tutor'.toUpperCase() }</Text>
           </View>
         </TouchableOpacity>
       </View>
     :
     <View style={ styles.chatControl }>
       <TouchableOpacity onPress={ this._onBuyConfirm }>
         <View style={ styles.btnContainer }>
           <Text style={ styles.btnText }>{ 'Make offer for student'.toUpperCase() }</Text>
         </View>
       </TouchableOpacity>
     </View>
     return Accessory
 }
  _onBuy = () => {
    if (this.state.status === 'available') {
      console.log("AVAILABLE")
      this.setState({
                      status: 'sold',
                      clientName: this.props.appStore.username,
                    })
      firebaseApp.database().ref('posts').child(this.props.puid).update(
        {
          updatedAt: firebase.database.ServerValue.TIMESTAMP,
          status: 'sold',
          clientId: this.props.appStore.user.uid,
          clientName: this.props.appStore.username,
        }
      )
      firebaseApp.database().ref('user_posts/'+this.state.postProps.uid+'/posts').child(this.props.puid).update(
        {
          updatedAt: firebase.database.ServerValue.TIMESTAMP,
          status: 'sold',
          clientId: this.props.appStore.user.uid,
          clientName: this.props.appStore.username,
        }
      )
      this.props.appStore.order_count = this.props.appStore.order_count + 1
      firebaseApp.database().ref('users').child(this.props.appStore.user.uid).update({ order_count: this.props.appStore.order_count })
      firebaseApp.database().ref('user_orders/'+this.props.appStore.user.uid+'/posts').child(this.state.postProps.puid).set(this.state.postProps)
      firebaseApp.database().ref('messages_notif').child(this.props.puid).once('value')
      .then((snapshot) => {
        console.log("player_ids: ");
        console.log(snapshot.val());
        if (snapshot.val()) {
          snapshot.val().include_player_ids.map((playerId) => {
            console.log("+-------> " + playerId)
            firebaseApp.database().ref('user_chats/'+this.props.appStore.user.uid+'/posts').child(this.props.puid).update(
              {
                updatedAt: firebase.database.ServerValue.TIMESTAMP,
                status: 'sold',
                clientId: this.props.appStore.user.uid,
                clientName: this.props.appStore.username,
              }
            )
            if (playerId != this.props.appStore.user.uid) {
              firebaseApp.database().ref('user_chats/'+playerId+'/posts').child(this.props.puid).transaction(
                (post) => {
                  if (post) {
                    post.status = 'sold'
                    post.clientId = this.props.appStore.user.uid
                    post.clientName = this.props.appStore.username
                    post.updatedAt = firebase.database.ServerValue.TIMESTAMP
                    post.new_messages++
                  }
                  return post
                }
              )
              console.log("PUSHING NOTIFICATION !!! " + this.props.title);
              fetch('https://onesignal.com/api/v1/notifications',
              {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': this.props.appStore.onesignal_api_key,
                },
                body: JSON.stringify(
                {
                  app_id: this.props.appStore.onesignal_app_id,
                  included_segments: ["All"],
                  android_sound: "fishing",
                  ios_sound: "fishing.caf",
                  data: {"puid":this.props.puid, "new_message":true},
                  headings: {"en": "Sold"},
                  contents: {"en": this.props.appStore.user.displayName + " just bought " +  this.state.postProps.title},
                  filters: [{"field":"tag","key":"uid","relation":"=","value":playerId}],
                })
              })
              .then((responseData) => {
                //console.log("Push POST:" + JSON.stringify(responseData))
              })
              .catch((errorData) => {
                console.log("Push ERROR:" + JSON.stringify(errorData))
              })
              .done()
            }
          })
          if (snapshot.val().include_player_ids.indexOf(this.props.appStore.user.uid) === -1) {
            const playerIds = snapshot.val().include_player_ids
            playerIds.push(this.props.appStore.user.uid)
            console.log("ADDDDDING NEW PLAYER to " + this.props.puid);
            console.log(playerIds)
            firebaseApp.database().ref('messages_notif').child(this.props.puid).set({include_player_ids: playerIds})
            firebaseApp.database().ref('user_chats/'+this.props.appStore.user.uid+'/posts').child(this.props.puid).set(this.state.postProps)
            this.props.appStore.chat_count = this.props.appStore.chat_count + 1
            firebaseApp.database().ref('users').child(this.props.appStore.user.uid).update( {chat_count: this.props.appStore.chat_count} )
          }
        }
        else {
          firebaseApp.database().ref('messages_notif').child(this.props.puid).set({include_player_ids: [this.props.appStore.user.uid]})
        }
      })
    }
  }
  onSend = (messages = []) => {
    messages.forEach(message => {
            var now = new Date().getTime()
            this.chatRef.push({
                _id: now,
                text: message.text,
                createdAt: now,
                  name: this.props.appStore.username,
                uid: this.props.appStore.uid,
                img:this.props.appStore.profileimg,
                order: -1 * now
            })
        })
            messages.forEach(message => {
        firebaseApp.database()
          .ref()
          .child('chatuser')
          .child(this.currentUserId)
          .child(this.state.uid)
          .set({
            id: this.state.uid,
            name: this.state.username ,
            img: this.state.img ,
new_messages:0,
            msg:message.text,
          })
  })
        // from author to userLogin
            messages.forEach(message => {
        firebaseApp.database()
          .ref()
          .child('chatuser')
          .child(this.state.uid)
          .child(this.currentUserId)
          .set({
            id: this.currentUserId,
            name: this.props.appStore.username,
msg:message.text,
img:this.props.appStore.profileimg,
new_messages:this.state.new_messages,

          })
            })
            firebaseApp.database()
              .ref()
              .child('chatuser')
              .child(this.state.uid)
              .child(this.currentUserId).transaction(
              (post) => {
                if (post) {
                  post.new_messages++
                }
                return post
              }
            )
if (this.state.tutor) {
  firebaseApp.database()
    .ref()
    .child('booking')
    .child(this.currentUserId)
    .child(this.state.uid)
    .set({
      id: this.state.uid,
      name: this.state.username ,
      tutor:this.state.tutor,

    })
}


  }
  renderCustomView = (props) => {
    if (true) {
      return (
        <Card>
                  <CardItem header bordered>
                  <Left>
                    <Text style={{fontWeight:'500'}}>Physics</Text>
                    </Left>
                    <Right>
                      <Text>$10.61</Text>
                      </Right>
                  </CardItem>
                  <CardItem bordered>
                  <Left>
                    <Text >Mon Oct 21</Text>
                    </Left>
                    <Right>
                      <Text>Irbid,30 streets</Text>
                      </Right>
                  </CardItem>
                  <CardItem bordered>
                  <Text note>5:32 PM-6:02 AM</Text>
                  <Text style={{color:'#118DF0',marginLeft:5}}>Pending</Text>
  </CardItem>
                  <CardItem footer bordered style={{justifyContent:'center'}}>

                    {this.state.tutor?<Text style={{color:'black',alignSelf:'center',textAlign:'center',fontWeight:'700'}}>Cancel</Text>:<Text style={{color:'black',fontWeight:'700',alignSelf:'center',textAlign:'center'}}>Accept Request</Text>}
                  </CardItem>
                </Card>
      );
    }
    return null
  }

   render() {
       return (<View style={{flex:1}}>
         <Block style={{ marginBottom: theme.SIZES.BASE }}>
           <Header back title={this.state.username} navigation={this.props.navigation} />
         </Block>
         <GiftedChat
           messages={this.state.messages}
           onSend={this.onSend}
           user={{
             _id: this.currentUserId,
             name: this.props.appStore.username,
           }}
           renderMessageImage={this.renderMessageImage}
           //renderFooter={this.renderCustomView}
           renderAccessory={this.renderAccessory}
            listViewProps={{ backgroundColor: "#FFF" }}
         />
         </View>
       );
   }
}
const styles = StyleSheet.create({
  chatControl: {
    flex: 1,
  },
  btnContainer: {
    height: 40,
    backgroundColor: '#ddd',
    borderRadius: 5,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  btnText: {
    fontWeight: '800',
    fontSize: 20,
    color: '#118DF0'
  }
})
