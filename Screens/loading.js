import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { firebaseApp } from '../firebase'
import { NavigationActions } from 'react-navigation'
import { observer,inject } from 'mobx-react/native'
import firebase from 'firebase'
@inject("appStore") @observer

export default class Loading extends React.Component {
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
   this.props.navigation.navigate(user ? 'UserScreen': 'signup')
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
