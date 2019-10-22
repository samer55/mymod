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

@inject("appStore") @observer

export default class ChatScreen extends React.Component {
  constructor(props) {
   super(props)
   this.state = {
     messages: [],
     postProps: {},
     puid:this.props.navigation.state.params.puid,
     title:this.props.navigation.state.params.title,
     uid:this.props.navigation.state.params.uid,

wantToBuy:this.props.navigation.state.params.wantToBuy,
     status: " ",
     clientName: "",
     spinnervisible: true,
   }
   this.props.appStore.current_page = 'chat'
   this.props.appStore.current_puid = this.state.puid
   this.props.appStore.uid = this.state.uid

 }
  static navigationOptions = {
  header:null
  };

  componentWillMount() {

    console.log("-----chack stae-------"+this.state.puid+"-------uid---  "+this.props.appStore.uid)
    firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
  this.props.appStore.username = user.displayName
  this.props.appStore.uid =user.uid
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
    firebaseApp.database().ref('Offers').child(this.state.puid).once('value',
    (snapshot) => {
      console.log("-----chack-------"+snapshot.val().username+'--------')
      this.setState({
        status:snapshot.val().status,
     clientName:snapshot.val().clientName,
                      postProps: snapshot.val(),
                    })
      if (snapshot.val().image) {
        this.setState((previousState) => {
          return {
            messages: GiftedChat.append(previousState.messages, {
              _id: 1,
              text: snapshot.val().title,
              createdAt: new Date(snapshot.val().createdAt),
              user: {
                _id: snapshot.val().uid,
                name: snapshot.val().username,
              },
              image: snapshot.val().image,
            }),
          }
        })
      }
      if (snapshot.val().price) {
        this.setState((previousState) => {
          return {
            messages: GiftedChat.append(previousState.messages, {
              _id: 2,
              text: snapshot.val().price,
              createdAt: new Date(snapshot.val().createdAt),
              user: {
                _id: snapshot.val().uid,
                name: snapshot.val().username,
              },
            }),
          }
        })
      }
      if (snapshot.val().Description) {
        this.setState((previousState) => {
          return {
            messages: GiftedChat.append(previousState.messages, {
              _id: 3,
              text: snapshot.val().Description,
              createdAt: new Date(snapshot.val().createdAt),
              user: {
                _id: snapshot.val().uid,
                name: snapshot.val().username,
              },
            }),
          }
        })
      }
    })
    if (this.state.wantToBuy) {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, {
            _id: 4,
            text: "Use this chat to communicate with the owner of the item and click on the BUY button when you are ready to make the purchase. Once you click on this button, this item will be reserved to you. First-click, first served.",
            createdAt: new Date(),
            user: {
              _id: 0,
              name: "MyApp",
              avatar: 'https://raw.githubusercontent.com/jsappme/react-native-firebase-starter/wip/graphics/myapp-48.png',
            },
          }),
        }
      })
    }
    this._loadMessages((message) => {
      this.setState((previousState) => {
        //console.log(previousState.messages)
        return {
          messages: GiftedChat.append(previousState.messages, message),
        }
      })
    })
    setTimeout(() => {
      this.setState({ spinnervisible: false })
    }, 1200)
  }

  _loadMessages(callback) {
    console.log("---------- LOAD MESSAGES ---------- " + this.state.puid)
    const onReceive = (data) => {
      const message = data.val()
      console.log(":::::::: onReceive :: " + message.text)
      setTimeout(() => {
        console.log("-------------- RESETTING NEW MESSAGES -------------- " + this.state.puid);
        this.props.appStore.new_messages = 0
        firebaseApp.database().ref('user_chats/'+this.props.appStore.uid+'/Offers').child(this.state.puid).update( { new_messages:0 } )
      }, 2000)
      callback({
        _id: data.key,
        text: message.text,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          name: message.user.name,
          avatar:message.user.avatar
        },
      })
    }
    firebaseApp.database().ref('messages').child(this.state.puid).limitToLast(20).on('child_added', onReceive)
    this.props.appStore.new_messages = 0
    firebaseApp.database().ref('user_chats/'+this.props.appStore.uid+'/Offers').child(this.state.puid).update( { new_messages:0 } )
  }

  componentDidMount() {

  }

  componentDidUpdate() {
    //console.log("---------------------------------- componentDidUpdate ---------------------------------")
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

  _onBuy = () => {
    if (this.state.status === 'available') {
      console.log("AVAILABLE")
      this.setState({
                      status: 'sold',
                      clientName: this.props.appStore.username,
                    })
      firebaseApp.database().ref('Offers').child(this.state.puid).update(
        {
          updatedAt: firebase.database.ServerValue.TIMESTAMP,
          status: 'sold',
          clientId: this.props.appStore.uid,
          clientName: this.props.appStore.username,
        }
      )
      firebaseApp.database().ref('user_posts/'+this.state.postProps.uid+'/Offers').child(this.state.puid).update(
        {
          updatedAt: firebase.database.ServerValue.TIMESTAMP,
          status: 'sold',
          clientId: this.props.appStore.uid,
          clientName: this.props.appStore.username,
        }
      )
      this.props.appStore.order_count = this.props.appStore.order_count + 1
      firebaseApp.database().ref('users').child(this.props.appStore.uid).update({ order_count: this.props.appStore.order_count })
      firebaseApp.database().ref('user_orders/'+this.props.appStore.uid+'/Offers').child(this.state.postProps.puid).set(this.state.postProps)
      firebaseApp.database().ref('messages_notif').child(this.state.puid).once('value')
      .then((snapshot) => {
        console.log("player_ids: ");
        console.log(snapshot.val());
        if (snapshot.val()) {
          snapshot.val().include_player_ids.map((playerId) => {
            console.log("+-------> " + playerId)
            firebaseApp.database().ref('user_chats/'+this.props.appStore.uid+'/Offers').child(this.state.puid).update(
              {
                updatedAt: firebase.database.ServerValue.TIMESTAMP,
                status: 'sold',
                clientId: this.props.appStore.uid,
                clientName: this.props.appStore.username,
              }
            )
            if (playerId != this.props.appStore.uid) {
              firebaseApp.database().ref('user_chats/'+playerId+'/Offers').child(this.state.puid).transaction(
                (post) => {
                  if (post) {
                    post.status = 'sold'
                    post.clientId = this.props.appStore.uid
                    post.clientName = this.props.appStore.username
                    post.updatedAt = firebase.database.ServerValue.TIMESTAMP
                    post.new_messages++
                  }
                  return post
                }
              )



            }
          })
          if (snapshot.val().include_player_ids.indexOf(this.props.appStore.uid) === -1) {
            const playerIds = snapshot.val().include_player_ids
            playerIds.push(this.props.appStore.uid)
            console.log("ADDDDDING NEW PLAYER to " + this.state.puid);
            console.log(playerIds)
            firebaseApp.database().ref('messages_notif').child(this.state.puid).set({include_player_ids: playerIds})
            firebaseApp.database().ref('user_chats/'+this.props.appStore.uid+'/posts').child(this.state.puid).set(this.state.postProps)
            this.props.appStore.chat_count = this.props.appStore.chat_count + 1
            firebaseApp.database().ref('users').child(this.props.appStore.uid).update( {chat_count: this.props.appStore.chat_count} )
          }
        }
        else {
          firebaseApp.database().ref('messages_notif').child(this.state.puid).set({include_player_ids: [this.props.appStore.uid]})
        }
      })
    }
  }

  _onSend = (messages = []) => {
    for (let i = 0; i < messages.length; i++) {
      firebaseApp.database().ref('posts').child(this.state.puid).update( {updatedAt: firebase.database.ServerValue.TIMESTAMP} )
      firebaseApp.database().ref('messages').child(this.state.puid).push({
        text: messages[i].text,
        user: messages[i].user,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
      })
      firebaseApp.database().ref('messages_notif').child(this.state.puid).once('value')
      .then((snapshot) => {
        console.log("player_ids: ");
        console.log(snapshot.val());
        if (snapshot.val()) {
          snapshot.val().include_player_ids.map((playerId) => {
            console.log("+-------> " + playerId)
            firebaseApp.database().ref('user_chats/'+this.props.appStore.uid+'/Offers').child(this.state.puid).update({ updatedAt: firebase.database.ServerValue.TIMESTAMP })
            if (playerId != this.props.appStore.uid) {
              firebaseApp.database().ref('user_chats/'+playerId+'/Offers').child(this.state.puid).transaction(
                (post) => {
                  if (post) {
                    post.new_messages++
                    post.updatedAt = firebase.database.ServerValue.TIMESTAMP
                  }
                  return post
                }
              )


            }
          })
          console.log(snapshot.val().include_player_ids)
          if (snapshot.val().include_player_ids.indexOf(this.props.appStore.uid) === -1) {
            const playerIds = snapshot.val().include_player_ids
            playerIds.push(this.props.appStore.uid)
            console.log("ADDDDDING NEW PLAYER to " + this.state.puid);
            console.log(playerIds)
            firebaseApp.database().ref('messages_notif').child(this.state.puid).set({include_player_ids: playerIds})
            firebaseApp.database().ref('user_chats/'+this.props.appStore.uid+'/posts').child(this.state.puid).set(this.state.postProps)
            this.props.appStore.chat_count = this.props.appStore.chat_count + 1
            firebaseApp.database().ref('users').child(this.props.appStore.uid).update( {chat_count: this.props.appStore.chat_count} )
          }
        }
        else {
          firebaseApp.database().ref('messages_notif').child(this.state.puid).set({include_player_ids: [this.props.appStore.uid]})
        }
      })
    }
  }

  componentWillUnmount() {
    console.log("---- CHAT UNMOUNT ---")
    this.props.appStore.current_page = ''
    this.props.appStore.current_puid = ''
    firebaseApp.database().ref('messages').child(this.state.puid).off()
    //firebaseApp.database().ref('posts').child(this.props.puid).off()
  }

  renderFooter = (props) => {
      const Footer = (this.state.status === 'sold') ?
        <View style={{ marginTop: 5, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{fontWeight:'bold', color: '#3367d6', marginBottom: 7, }}>
            - offer made to { this.state.clientName } -
          </Text>
        </View>
      :
        null
      return Footer
  }

  renderAccessory = (props) => {
      const Accessory = (this.state.status === 'available') ?
        <View style={ styles.chatControl }>
          <TouchableOpacity onPress={ this._onBuyConfirm }>
            <View style={ styles.btnContainer }>
              <Text style={ styles.btnText }>{ 'Buy this item'.toUpperCase() }</Text>
            </View>
          </TouchableOpacity>
        </View>
      :
      <View style={ styles.chatControl }>
        <View style={ styles.btnContainer }>
          <Text style={ styles.btnText }>Offer Made</Text>
        </View>
      </View>
      return Accessory
  }

  renderLightboxContent = (props) => {
    return (
            <Image
              source={{ uri:this.state.postProps.image }}
              resizeMode='contain'
              style={{
                marginTop:60,
                width: screenWidth,
                height: this.state.postProps.imageHeight,
              }}
            />
          )
  }

  renderMessageImage = (props) => {
    return (
             <View>
                <Image
                  source={{ uri:props.currentMessage.image }}
                  style={{
                          width: 250,
                          height: 150,
                          borderRadius: 13,
                          margin: 3,
                          resizeMode: 'cover',
                        }}
                />
            </View>
          )
  }

  render() {
    const Chat = (this.state.status === 'available') && (this.props.appStore.uid != this.state.uid) ?
                  <GiftedChat
                    messages={this.state.messages}
                    onSend={this._onSend}
                    user={{
                      _id: this.props.appStore.uid,
                      name: this.props.appStore.username,
                    }}
                    renderMessageImage={this.renderMessageImage}
                    renderFooter={this.renderFooter}
                    renderAccessory={this.renderAccessory}
                  />
                :
                  <GiftedChat
                    messages={this.state.messages}
                    onSend={this._onSend}
                    user={{
                      _id: this.props.appStore.uid,
                      name: this.props.appStore.username,
                    }}
                    renderMessageImage={this.renderMessageImage}
                    renderFooter={this.renderFooter}
                  />
    return (
            <View style={{marginTop:56,flex:1,}}>

            <GiftedChat
              messages={this.state.messages}
              onSend={this._onSend}
              user={{
                _id: this.props.appStore.uid,
                name: this.props.appStore.username,
              }}
              renderMessageImage={this.renderMessageImage}
              renderFooter={this.renderFooter}
              renderAccessory={this.renderAccessory}
            />
            </View>
          )
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
    color: 'steelblue'
  }
})
