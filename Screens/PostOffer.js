import React from "react";
import {
    View,
  Modal,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,TouchableOpacity,
    Image,
    Dimensions,
    Animated
} from "react-native";
import { Switch} from 'react-native'
import styled from "styled-components";
import Message from "./components/Message";
const { height} = Dimensions.get('window')
import {  Content, List, ListItem,  Left, Body, Right, Radio} from 'native-base';
import { Block, Text, Button as GaButton, theme } from "galio-framework";
import { Slider } from 'react-native-elements';
import { Textarea, Form ,Button as NButton} from "native-base";
import { Button as ElementButton } from 'react-native-elements';
import SwipeablePanel from 'rn-swipeable-panel';
import moment from 'moment';
import ImagePicker from 'react-native-image-picker'
import SelectableChips from 'react-native-chip/SelectableChips'

// Argon themed components
import { argonTheme, tabs } from "../constants0/";
import { Button, Select, Input, Header } from "../Components/";
import Tabs from '../Components/Tabs';
import LocationView from "react-native-location-view";

const { width } = Dimensions.get("screen");

const Container = styled.View`
  background-color: white;
  flex: 1;
`;
import Notification from "../Components/Notificationlist";
import DateTimePicker from "react-native-modal-datetime-picker";
import { firebaseApp } from '../firebase'
import firebase from 'firebase'
import { observer,inject } from 'mobx-react/native'

import RNFetchBlob from 'rn-fetch-blob'

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

const screenWidth = Dimensions.get('window').width

const uploadImage = (uri, imageName, mime = 'image/jpg') => {
  return new Promise((resolve, reject) => {
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
      let uploadBlob = null
      const imageRef = firebaseApp.storage().ref('posts').child(imageName)
      fs.readFile(uploadUri, 'base64')
      .then((data) => {
        return Blob.build(data, { type: `${mime};BASE64` })
      })
      .then((blob) => {
        uploadBlob = blob
        return imageRef.put(blob, { contentType: mime })
      })
      .then(() => {
        uploadBlob.close()
        return imageRef.getDownloadURL()
      })
      .then((url) => {
        resolve(url)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
import _ from 'lodash'

@inject("appStore") @observer

export default class extends React.Component {
  constructor(props) {
  super(props);

  this.offset = 0;

  this.state = {
    scrollOffset: new Animated.Value(0),
    titleWidth: 0,
    time:null,
      time1:null,
    postStatus: null,
   postText: '',
      location:null,
      Category:[],
   postTitle: '',
   available:[],
   postPrice: '',
   modares:this.props.navigation.state.params.type,
   imagePath: null,
   imageHeight: null,
   imageWidth: null,
      modalVisible: false,
   spinnervisible: false,
     swipeablePanelActive: false,
    value:1,
     isDateTimePickerVisible: false,
      isDateTimePickerVisible1: false
  };
}
openPanel = () => {
    this.setState({ swipeablePanelActive: true });
};
showDateTimePicker = () => {
   this.setState({ isDateTimePickerVisible: true });
 };

 hideDateTimePicker = () => {
   this.setState({ isDateTimePickerVisible: false });
 };
 showDateTimePicker1 = () => {
    this.setState({ isDateTimePickerVisible1: true });
  };

  hideDateTimePicker1 = () => {
    this.setState({ isDateTimePickerVisible1: false });
  };
closePanel = () => {
    this.setState({ swipeablePanelActive: false });
};
componentDidMount() {
  this.state.scrollOffset.addListener(({ value }) => (this.offset = value));
}
onclick = loc => {
  this.setState({location:loc})
this.setModalVisible(!this.state.modalVisible);
}
setModalVisible(visible) {
   this.setState({modalVisible: visible});
 }
onScroll = e => {
  const scrollSensitivity = 4 / 3;
  const offset = e.nativeEvent.contentOffset.y / scrollSensitivity;
  this.state.scrollOffset.setValue(offset);
};
static navigationOptions = {
header: null,
};
state = {switchValue:false}
toggleSwitch = (value) => {
    //onValueChange of the switch this function will be called
    this.setState({switchValue: value})
    //state changes according to switch
    //which will result in re-render the text
 }
 _maybeRenderImage = () => {
   let { imagePath } = this.state;
   if (imagePath) {
     return(
        <View
         style={{
           width: width,
           marginVertical:10,
           elevation: 2,
           borderWidth:0.2,
           alignSelf: 'center',
           justifyContent:'center',
           alignItems:'center'
         }}>
         <View
           style={{
             shadowColor: 'rgba(0,0,0,1)',
             shadowOpacity: 0.2,
             shadowOffset: { width: 4, height: 4 },
             shadowRadius: 5,
             overflow: 'hidden',
           }}>
           <TouchableOpacity onPress={this._pickImage}>
           <Image source={{ uri: this.state.imagePath}} style={{   borderColor: 'white',

           height: 210,
           marginBottom: 15,
           width: width,}} />
</TouchableOpacity>
         </View>


       </View>
    )
   }else {
     return(
        <View
         style={{
           width: width,
           marginVertical:10,
           elevation: 2,borderWidth:0.2,
           alignSelf: 'center',
           justifyContent:'center',
           alignItems:'center'
         }}>
         <View
           style={{

             shadowColor: 'rgba(0,0,0,1)',
             shadowOpacity: 0.2,
             shadowOffset: { width: 4, height: 4 },
             shadowRadius: 5,
             overflow: 'hidden',
           }}>
           <TouchableOpacity onPress={this._pickImage}>
           <Image source={{ uri: 'https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image-300x225.png'}} style={{   borderColor: 'grey',
           height: 210,
           marginBottom: 15,
           width: width,}} />
</TouchableOpacity>
         </View>


       </View>
      )
   }
 };
 _pickImage = () => {
   const cam_options = {
     mediaType: 'photo',
     maxWidth: 600,
     maxHeight: 600,
     quality: 1,
     noData: true,
   };
   ImagePicker.launchImageLibrary(cam_options, (response) => {
   console.log('Response = ', response);

   if (response.didCancel) {
     console.log('User cancelled image picker');
   } else if (response.error) {
     console.log('ImagePicker Error: ', response.error);
   } else if (response.customButton) {
     console.log('User tapped custom button: ', response.customButton);
   } else {
     const source = { uri: response.uri };
     this.setState({
       imagePath: response.uri,
       imageHeight: response.height,
       imageWidth: response.width,
     })
     // You can also display the image using data:
     // const source = { uri: 'data:image/jpeg;base64,' + response.data };

     this.setState({
       avatarSource: source,
     });
   }
 });

  }
 renderTabs = () => {
   const defaultTab = tabs[0] && tabs[0].id;


   return (

     <Tabs
       data={tabs.categories}
       initialIndex={tabs[0]}
       onChange={() => this.setState({ topics: true })} />

   )
 }
 handleDatePicked = date => {
   console.log("A date has been picked: ", date);
   this.setState({time: moment(date).format('hh:mm:A')})
   this.hideDateTimePicker();
 };
 handleDatePicked1 = date => {
   console.log("A date has been picked: ", date);
   this.setState({time1: moment(date).format('hh:mm:A')})
   this.hideDateTimePicker1();
 };
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

      firebaseApp.database().ref(this.state.modares?'Teacher':'Student').child(user.uid).once('value')
           .then((snapshot) => {
             this.props.appStore.profileimg = snapshot.val().image

           })
 }




 console.log("--------- done of modares check "  + " ---------")


   })
   this.state.scrollOffset.addListener(({ value }) => (this.offset = value));

 }
 _handleNewPost = () => {
  this.setState({
    postStatus: 'Posting...',
  })
  if (this.state.imagePath) {
    if (this.state.postTitle.length > 0) {
      if (this.state.postPrice >0) {
        const uid = this.props.appStore.uid
        const username = this.props.appStore.username
        const newPostKey = firebaseApp.database().ref('Offers').push().key
        const imageName = `${newPostKey}.jpg`
        uploadImage(this.state.imagePath, imageName)
        .then(url => {
const posts =this.state.modares?'/Offers/':'/Requests/'
          const postData = {
            username: username,
            uid: uid,
            createdAt: firebase.database.ServerValue.TIMESTAMP,
            updatedAt: firebase.database.ServerValue.TIMESTAMP,
            status: "available",
            clientId: "",
            clientName: "",
            userimg:this.props.appStore.profileimg,
            new_messages: 0,
            Description: this.state.postText,
            Category:this.state.Category,
            available:this.state.available,
            location:this.state.location,
            title: this.state.postTitle,
            price: this.state.postPrice,
            puid: newPostKey,
            priceper:this.state.priceper,
            image: url,
            imageHeight: this.state.imageHeight,
            imageWidth: this.state.imageWidth,
          }
          let updates = {}
          this.props.appStore.Requests_count = this.props.appStore.Requests_count + 1
          updates['/users/' + uid + '/post_count'] = this.props.appStore.post_count
          this.props.appStore.chat_count = this.props.appStore.chat_count + 1
          updates['/users/' + uid + '/chat_count'] = this.props.appStore.chat_count
          updates[posts + newPostKey] = postData
          updates['/user_posts/' + uid + posts+ newPostKey] = postData
          updates['/user_chats/' + uid +posts + newPostKey] = postData
          updates['/messages_notif/' + newPostKey + '/include_player_ids'] = [this.props.appStore.uid]
          firebaseApp.database().ref().update(updates)
          .then(() => {
            this.setState({
                            postStatus: 'Posted! Thank You.',
                            time:null,
                              time1:null,
                            postStatus: null,
                           postText: '',
                              location:null,
                              Category:[],
                              from:this.state.time,
                              to:this.state.time1,
                           postTitle: '',
                           available:[],
                           postPrice: '',
                           imagePath: null,
                           imageHeight: null,
                           imageWidth: null,
                          })
            setTimeout(() => {
              this.setState({ postStatus: null })
            }, 3000)

          })
          .catch(() => {
            this.setState({ postStatus: 'Something went wrong!!!' })
            this.setState({ spinnervisible: false })
          })
        })
        .catch(error => {
          console.log(error)
          this.setState({ spinnervisible: false })
        })

      } else {
        this.setState({ postStatus: 'Please enter a price' })
      }
    } else {
      this.setState({ postStatus: 'Please enter a title' })
    }
  } else {
    this.setState({ postStatus: 'Please take a photo' })
  }
}
  render() {
    const { scrollOffset } = this.state;
    const screenWidth = Dimensions.get('window').width;


    return (
      <Container>
      <Block style={{ marginBottom: theme.SIZES.BASE }}>
        <Header back route="UserScreen" title={this.state.modares?"Make Offer":'Post Request'} navigation={this.props.navigation} />
      </Block>
      <Text style={{fontSize:12,color:'red',alignSelf:'center',textAlign:'center'}}>{this.state.postStatus}</Text>
           <ScrollView style={{ flex: 1, width: '100%' }}
          contentContainerStyle={{ width: '100%' }}
          onScroll={this.onScroll}
          scrollEventThrottle={20}>
          <Block style={{ paddingHorizontal: theme.SIZES.BASE,marginTop:10 }}>

          <Text bold size={16} style={styles.title}>
          {this.state.modares?"Offer":'Request'} Image
          </Text>
          </Block>
          {this._maybeRenderImage()}
          <Block style={{ paddingHorizontal: theme.SIZES.BASE,marginTop:10 }}>
        <Text bold size={16} style={styles.title}>
          {this.state.modares?"Offer":'Request'} Title
        </Text>
        </Block>
          <Block >
            <Input  onChangeText={(text) => this.setState({ postTitle: text })} right placeholder={this.state.modares?"I will Teach you how to develop an app..":"I am looking for sat subject test physcis teacher.."}  iconContent={<Block />} />
          </Block>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE,marginTop:10 }}>
          <Text bold size={16} style={styles.title}>
            {this.state.modares?"Offer":'Request'} Description
          </Text>
          </Block>
          <Form>
                    <Textarea value={this.state.postText}  onChangeText={(text) => this.setState({ postText: text })} rowSpan={5} bordered placeholder={this.state.modares?"Write here what you offer..":"Write here what you Looking for.."} />
                  </Form>
                  <Block style={{ paddingHorizontal: theme.SIZES.BASE,marginTop:10 }}>

                  <Block
                    row
                    middle
                    space="between"
                    style={{ marginBottom: theme.SIZES.BASE }}
                  >
                  <Text bold size={16} style={styles.title}>
                    Select Category:
                  </Text>
                  <Block  >
                    <Select
                      defaultIndex={1}
                        onSelect={(data,value)=> this.setState({Category:value})}
                      options={["University", "Tawjihi", "School", "Business", "Other"]}
                    />
                  </Block>
                  </Block>
                  </Block>
                  <Block style={{ paddingHorizontal: theme.SIZES.BASE,marginTop:10 }}>
                <Text bold size={16} style={styles.title}>
                  Location:
                </Text>
                </Block>
                  <Block center style={{marginVertical:10}}>
                    <Button
                      color="success"
                      textStyle={{ color: "white", fontSize: 12, fontWeight: "800" }}
                      style={styles.button}
                      onPress={() => {
                            this.setModalVisible(true);
                          }}
                    >
                      Set Location on Map
                    </Button>
                  </Block>
                  <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                    <Input
                      right
                      placeholder="Location Details.."
                      onChangeText={(address) =>     this.setState(prevState => {
                          return {
                            location: {
                              ...prevState.location,
                            address:address
                            },
              locationdetails:address,
                          }
                        })}
                      style={{
                        borderColor: argonTheme.COLORS.INFO,
                        borderRadius: 4,
                        backgroundColor: "#fff"
                      }}
                      iconContent={<Block />}
                    />
                  </Block>
                  <Block style={{ paddingHorizontal: theme.SIZES.BASE,marginTop:10 }}>
                <Text bold size={16} style={styles.title}>
                  Days Available:
                </Text>
                </Block>
                  <View style={styles.sectionContainer}>
                  <ScrollView horizontal={true} style={{paddingHorizontal:24}}>
                  <SelectableChips initialChips={["Saturday", "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"]} onChangeChips={(chips) => this.setState({available:chips})} alertRequired={false}/>

            </ScrollView>

                  </View>
                  <Block style={{ paddingHorizontal: theme.SIZES.BASE,marginTop:10 }}>
                <Text bold size={16} style={styles.title}>
                  Time Available (from-to):
                </Text>

                <Block style={{paddingHorizontal: theme.SIZES.BASE, marginTop:10 }}>

                <List>
            <ListItem onPress={this.showDateTimePicker}>
            <Left>
             <Text>Start From</Text>
            </Left>
            <Right>
            <Text>{this.state.time}</Text>
            </Right>
            </ListItem>
            <ListItem onPress={this.showDateTimePicker1}>
            <Left>
             <Text>End at</Text>
            </Left>
            <Right>
            <Text>{this.state.time1}</Text>
            </Right>
            </ListItem>
            </List>
                </Block>
                </Block>
<Block style={{ paddingHorizontal: theme.SIZES.BASE,marginTop:10 }}>
<Text bold size={16} style={styles.title}>
{this.state.modares?"Price":'Budget'} Range
</Text>
<Slider
   value={this.state.postPrice}
   minimumValue={1}
   maximumValue={100}
   onValueChange={postPrice => this.setState({ postPrice })}
 />
 <Text>${parseInt(this.state.postPrice)}</Text>

    </Block>
    <Block style={{ paddingHorizontal: theme.SIZES.BASE,marginTop:10 }}>

    <Block
      row
      middle
      space="between"
      style={{ marginBottom: theme.SIZES.BASE }}
    >
    <Text bold size={16} style={styles.title}>
    {this.state.modares?"Price":'Budget'} Per
    </Text>
    <Block  >
      <Select
        defaultIndex={1}
        onSelect={(data,value)=> this.setState({priceper:value})}

        options={["Hour", "Lesson", "Subject", "Other"]}
      />
    </Block>
    </Block>
    </Block>

    <Block center>
      <Button color="default" style={styles.button} onPress={this._handleNewPost}>
        Make Offer
      </Button>
    </Block>
    <SwipeablePanel
                        fullWidth
                        isActive={this.state.swipeablePanelActive}
                        onClose={this.closePanel}
                        onPressCloseButton={this.closePanel}
                    >
                    <Block style={{ paddingHorizontal: theme.SIZES.BASE,marginTop:10 }}>
                  <Text bold size={16} style={styles.title}>
                    Time Available (from-to):
                  </Text>

                  <Block style={{ paddingHorizontal: theme.SIZES.BASE,marginTop:10 }}>

                  <List>
           <ListItem onPress={this.showDateTimePicker}>
             <Left>
               <Text>Start From</Text>
             </Left>
             <Right>
             <Text>{this.state.time}</Text>
             </Right>
           </ListItem>
           <ListItem onPress={this.showDateTimePicker1}>
             <Left>
               <Text>End at</Text>
             </Left>
             <Right>
             <Text>{this.state.time1}</Text>
             </Right>
           </ListItem>
         </List>
                  </Block>
                  </Block>

                     				</SwipeablePanel>
                            <DateTimePicker
        isVisible={this.state.isDateTimePickerVisible}
        is24Hour={false}
        mode="time"
        onConfirm={this.handleDatePicked}
        onCancel={this.hideDateTimePicker}
      />
      <DateTimePicker
isVisible={this.state.isDateTimePickerVisible1}
is24Hour={false}
mode="time"
onConfirm={this.handleDatePicked1}
onCancel={this.hideDateTimePicker1}
/>
        </ScrollView>
        <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                }}>
                <View style={{flex: 1}}>
                <LocationView
                        apiKey={"AIzaSyCKDG1Fe3bqh9MlZ-vLz5UkrShFpLWSDdk"}
                        initialLocation={{
                                    latitude:31.922824,
                                    longitude:  35.907989,
                                  }}
                                                onLocationSelect={this.onclick}
                      />

                </View>
              </Modal>

      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  header: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderColor: 'gainsboro',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 8,
  },
  listItem: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
