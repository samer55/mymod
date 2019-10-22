import React from "react";
import MessagesScreenPresenter from "./MessagesScreenPresenter";
import {
    View,
    StyleSheet,
    SafeAreaView,
    TextInput,
    StatusBar,
    ScrollView,
    Image,
    FlatList,
     TouchableOpacity,
    Dimensions,
    ActivityIndicator,
ListView,
LayoutAnimation,
Platform,
UIManager,

    Animated
} from "react-native";
import styled from "styled-components";
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import styles from './styles'

import { argonTheme, tabs } from "../../constants0/";
import { Button, Select, Input, Header, Switch } from "../../Components/";
import Item from './Item'

import Message from "../components/Message";
const Container = styled.View`
  background-color: white;
  flex: 1;
`;
import _ from 'lodash'
import moment from 'moment'
import { firebaseApp } from '../../firebase'
import Icon from 'react-native-vector-icons/Ionicons'
import { observer,inject } from 'mobx-react/native'
@inject("appStore") @observer

export default class extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    isLoading: true,
    isFinished: false,
    counter: 30,
      list: [],
    isEmpty: false,
    dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => true}),
  }
  this.data = []

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
       this.props.appStore.order_count = parseInt(snapshot.val().order_count)
       this.props.appStore.chat_count = parseInt(snapshot.val().chat_count)
       this.props.appStore.type = snapshot.val().type

     })


}
console.log("--------- done of modares check "  + " ---------")


  })
  const uid = this.props.appStore.uid
  // console.warn(['user', user])
  const userId = this.props.appStore.uid
  firebaseApp.fetch = (author, callback) => {
    return firebaseApp.database()
      .ref('chatuser')
      .child(author)
      .on(
        'value',
        (snapshot) => callback(snapshot.val()),
        (errObj) => {}
      )
  }
  firebaseApp.database()
    .ref('chatuser')
    .child(userId)
  .on('value', snap => {
    let comments = [];
    snap.forEach(child => {
      comments.push(
child.val()
      )
    })
    this.setState({ list: comments })
  })

}

componentDidUpdate() {
}
keyExtractor = (item, index) => `${index}`;

renderItem = ({ item }) => {
  const unread= item.new_messages>0 ? true :false
  return <Message  item={item} unread={unread} navigation={this.props.navigation}  userAvatar={require("../../assets/images/smAvatar.png")}
  />
}



_renderEmpty = () => {
  const { onHome } = this.props
  return (
    <View style={styles.body}>
      <Text style={styles.title}>{'Empty message'}</Text>
      <Text style={styles.desc}>
        {
          'There is no message on your Inbox Please go to Homepage do explore more!'
        }
      </Text>
      <TouchableOpacity onPress={onHome} style={styles.backBox}>
        <Text style={styles.backText}>{'Back to Home'}</Text>
      </TouchableOpacity>
    </View>
  )
}
static navigationOptions = {
header: null,
};
render() {
  if (this.state.list.length == 0) {
    return this._renderEmpty()
  }
  return (
    <View>
    <Block style={{ marginBottom: theme.SIZES.BASE }}>
      <Header  title="Chat" navigation={this.props.navigation} />
    </Block>
    <FlatList
      keyExtractor={this.keyExtractor}
      data={this.state.list}

      renderItem={this.renderItem}
    />
    </View>
  )
}
}
