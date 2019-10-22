import React from "react";
import {
    View,

    StyleSheet,
    SafeAreaView,
    TextInput,
    TouchableHighlight,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Modal,
    TouchableOpacity,
    Dimensions,
    Animated
} from "react-native";
import { Switch} from 'react-native'
import styled from "styled-components";
import Message from "./components/Message";
const { height} = Dimensions.get('window')
import {  Content, List, ListItem,  Left, Body, Right, Radio,Thumbnail} from 'native-base';
import { Block, Text, Button as GaButton, theme } from "galio-framework";
import { Slider,ButtonGroup,Button as EButton } from 'react-native-elements';
import SelectableChips from 'react-native-chip/SelectableChips'
import Icon from 'react-native-vector-icons/Feather'
import Tabs from '../Components/Tabs';
import LocationView from "react-native-location-view";
import ImagePicker from 'react-native-image-picker'
import RNFetchBlob from 'rn-fetch-blob'
const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob
import * as firebase from 'firebase';

const screenWidth = Dimensions.get('window').width

const uploadImage = (uri, imageName, mime = 'image/jpg') => {
  return new Promise((resolve, reject) => {
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
      let uploadBlob = null
      const imageRef = firebaseApp.storage().ref('Teachers').child(imageName)
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

// Argon themed components
import { argonTheme, tabs } from "../constants0/";
import { Button, Select, Input, Header } from "../Components/";
import RadioButton from '../Components/Radio'

const { width } = Dimensions.get("screen");

const Container = styled.View`
  background-color: white;
  flex: 1;

`;
import Notification from "../Components/Notificationlist";
const options = [
	{
		key: 'Male',
		text: 'Male',
	},
	{
		key: 'Female',
		text: 'Female',
	},

];
import StepIndicator from 'react-native-step-indicator'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import RemovableChips from 'react-native-chip/RemovableChips'
import { Textarea, Form } from "native-base";
import SwipeablePanel from 'rn-swipeable-panel';

const PAGES = ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Page 5']

const firstIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  separatorFinishedColor: '#4aae4f',
  separatorUnFinishedColor: '#a4d4a5',
  stepIndicatorFinishedColor: '#4aae4f',
  stepIndicatorUnFinishedColor: '#a4d4a5',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 12,
  currentStepLabelColor: '#4aae4f'
}

const secondIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  separatorStrokeFinishedWidth: 4,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
}

const thirdIndicatorStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#7eaec4',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#7eaec4',
  stepStrokeUnFinishedColor: '#dedede',
  separatorFinishedColor: '#7eaec4',
  separatorUnFinishedColor: '#dedede',
  stepIndicatorFinishedColor: '#7eaec4',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#7eaec4'
}

const getStepIndicatorIconConfig = ({ position, stepStatus }) => {
  const iconConfig = {
    name: 'feed',
    color: stepStatus === 'finished' ? '#ffffff' : '#fe7013',
    size: 15
  }
  switch (position) {
    case 0: {
      iconConfig.name = 'shopping-cart'
      break
    }
    case 1: {
      iconConfig.name = 'location-on'
      break
    }
    case 2: {
      iconConfig.name = 'assessment'
      break
    }
    case 3: {
      iconConfig.name = 'payment'
      break
    }
    case 4: {
      iconConfig.name = 'track-changes'
      break
    }
    default: {
      break
    }
  }
  return iconConfig
}
import { firebaseApp } from '../firebase'
import { NavigationActions } from 'react-navigation'
import { observer,inject } from 'mobx-react/native'
import _ from 'lodash'

@inject("appStore") @observer

export default class extends React.Component {
  constructor(props) {
  super(props);

  this.offset = 0;

  this.state = {
    scrollOffset: new Animated.Value(0),
     postStatus: null,
      postText: '',
      postTitle: '',
       swipeablePanelActive: false,
      postPrice: '',
      locationdetails:'',
      imagePath: '',
      imageHeight: null,
      imageWidth: null,
      spinnervisible: false,
      selectedIndex: 1,
    titleWidth: 0,

    value:1,
        currentPage: 0,

      first:'',
      last:'',
      gender:'',
      age:0,
      subject:[],
      topics:[],
      education:'',
      major:'',
      certification:'',
      bio:'',
      price:0,
       modalVisible: false,
      priceper:'',
      exp:'',
       available:[],
       location:null,
  };
   this.updateIndex = this.updateIndex.bind(this)
}
updateIndex (gender) {
  const sel = gender ==0?'male':'female'
  this.setState({gender:sel,gend:gender})
}
openPanel = () => {
    this.setState({ swipeablePanelActive: true });
};
setModalVisible(visible) {
   this.setState({modalVisible: visible});
 }
closePanel = () => {
    this.setState({ swipeablePanelActive: false });
};
  componentWillReceiveProps (nextProps, nextState) {
    if (nextState.currentPage != this.state.currentPage) {
      if (this.viewPager) {
        this.viewPager.setPage(nextState.currentPage)
      }
    }
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
  this.state.scrollOffset.addListener(({ value }) => (this.offset = value));

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
 onStepPress = position => {
   this.setState({ currentPage: position })
 }
 _takePicture = () => {
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
 renderViewPagerPage = data => {
   return (
     <View style={styles.page}>
       <Text>{data}</Text>
     </View>
   )
 }
 renderTabs = () => {
   const defaultTab = tabs[0] && tabs[0].id;


   return (

     <Tabs
       data={tabs.categories}
       initialIndex={tabs[0]}
       onChange={(tabs) => this.setState({ subject: tabs })} />

   )
 }
 renderStepIndicator = params => (
   <MaterialIcon {...getStepIndicatorIconConfig(params)} />
 )
 onclick = loc => {
   this.setState({location:loc})
 this.setModalVisible(!this.state.modalVisible);
 }
 renderLabel = ({ position, stepStatus, label, currentPosition }) => {
   return (
     <Text
       style={
         position === currentPosition
           ? styles.stepLabelSelected
           : styles.stepLabel
       }
     >
       {label}
     </Text>
   )
 }
 Pages(){
   const height = ((screenWidth-40)*this.state.imageHeight/this.state.imageWidth)
   const photo = this.state.imagePath ?
<TouchableOpacity onPress={this._takePicture}>
       <Thumbnail  large source={{uri: this.state.imagePath}} />
</TouchableOpacity>

    :
    <TouchableOpacity onPress={this._takePicture}>
    <Thumbnail  large source={{uri: "https://cdn1.iconfinder.com/data/icons/flat-character-color-1/60/flat-design-character_6-512.png"}} />
</TouchableOpacity>
     const buttons = ['Male', 'Female']
    if(this.state.currentPage == 0)
       return    <Block flex style={styles.group}>
         <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>

           <Text
             h2
             style={{ marginBottom: theme.SIZES.BASE / 2 }}
             color={argonTheme.COLORS.DEFAULT}
           >
             Welcome user
           </Text>
           <View style={{justifyContent:'center',alignItems:'flex-end'}}>
{photo}
           <Block middle style={styles.notify} >
           <Icon
             family="ArgonExtra"
             size={16}
             name="plus"
             color="white"
           />
           </Block>
 </View>
 <Text muted size={16} >
   Please Complete your Profile
 </Text>
 <Text
   p
   style={{ marginBottom: theme.SIZES.BASE / 2 }}
   color={argonTheme.COLORS.DEFAULT}
 >
   First name:
 </Text>
 <Block >
   <Input value={this.state.first} right placeholder="ex: samer" iconContent={<Block />}   onChangeText={(text) => this.setState({ first: text })}/>
 </Block>
 <Text
   p
   style={{ marginBottom: theme.SIZES.BASE / 2 }}
   color={argonTheme.COLORS.DEFAULT}
 >
   Last name:
 </Text>
 <Block >
   <Input right placeholder="ex: alsukhni" iconContent={<Block />}  onChangeText={(text) => this.setState({ last: text })}/>
 </Block>
 <Text
   p
   style={{ marginBottom: theme.SIZES.BASE / 2 }}
   color={argonTheme.COLORS.DEFAULT}
 >
   Gender:{this.state.gender}
 </Text>
 <ButtonGroup
    onPress={this.updateIndex}
    selectedIndex={this.state.gend}
    buttons={buttons}
    containerStyle={{height: 50}}
  />
  <Text
    p
    style={{ marginBottom: theme.SIZES.BASE / 2 }}
    color={argonTheme.COLORS.DEFAULT}
  >
    Age:
  </Text>
  <Block >
    <Input num={true} right placeholder="ex:18" iconContent={<Block />}  onChangeText={(text) => this.setState({ age: text })}/>
  </Block>
  <Block center>
    <Button color="default" style={styles.button} onPress={()=>this.setState({currentPage:this.state.currentPage+1})}>
      Next
    </Button>
  </Block>
         </Block>
         </Block> ;
  else if(this.state.currentPage == 1){
    return <Block flex style={styles.group}>
      <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
      <View style={{justifyContent:'center',alignItems:'flex-start'}}>
      <Thumbnail  large source={{uri: "https://cdn1.iconfinder.com/data/icons/flat-character-color-1/60/flat-design-character_6-512.png"}} />

    </View>
        <Text
          h2
          style={{ marginBottom: theme.SIZES.BASE / 2 }}
          color={argonTheme.COLORS.DEFAULT}
        >
          Hello Samer
        </Text>

<Text muted size={16} >
Please Add Category you teach.
</Text>
  { this.renderTabs() }
{this.state.topics ? <View><Text
  p
  style={{ marginBottom: theme.SIZES.BASE / 2 }}
  color={argonTheme.COLORS.DEFAULT}
>
  Select Topics:
</Text>
<SelectableChips initialChips={["Calculus 1", "Calculus 2","Physics","Chemistry"]} onChangeChips={(chips) => this.setState({topics:chips})} alertRequired={false}/>

</View>:null}
<Block center>
 <Button color="default" style={styles.button} onPress={()=>this.setState({currentPage:this.state.currentPage+1})}>
   Next
 </Button>
</Block>
      </Block>
      </Block>
  }
    else if(this.state.currentPage == 2){
    return  <Block flex style={styles.group}>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>

          <Text
            h2
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.DEFAULT}
          >
            Education
          </Text>

  <Text muted size={16} >
  Please Add University or School ,Major & Certification.
  </Text>
  <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
    <Input
      right
      placeholder="Education Place ex:Yarmouk University.."
      onChangeText={(text) => this.setState({ education: text })}
      style={{
        borderColor: argonTheme.COLORS.INFO,
        borderRadius: 4,
        backgroundColor: "#fff"
      }}
      iconContent={<Block />}
    />
  </Block>
  <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
    <Input
      right
      placeholder="Major ex:Computer Engineer(optional)"
      onChangeText={(text) => this.setState({ major: text })}
      style={{
        borderColor: argonTheme.COLORS.INFO,
        borderRadius: 4,
        backgroundColor: "#fff"
      }}
      iconContent={<Block />}
    />
  </Block>
  <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
    <Input
      right
      placeholder="Certification..(optional)"
      onChangeText={(text) => this.setState({ certification: text })}
      style={{
        borderColor: argonTheme.COLORS.INFO,
        borderRadius: 4,
        backgroundColor: "#fff"
      }}
      iconContent={<Block />}
    />
  </Block>
  <Block center>
   <Button color="default" style={styles.button} onPress={()=>this.setState({currentPage:this.state.currentPage+1})}>
     Next
   </Button>
  </Block>
        </Block>
        </Block>
    }
    else if(this.state.currentPage == 3){
    return  <Block flex style={styles.group}>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>

          <Text
            h2
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.DEFAULT}
          >
            More About you.
          </Text>

  <Text muted size={16} >
  Add Bio and Price Range.
  </Text>
  <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
  <Form>
            <Textarea rowSpan={5} bordered placeholder="Write here what you offer.."
            onChangeText={(text) => this.setState({ bio: text })}/>
          </Form>
  </Block>
  <Block style={{ paddingHorizontal: theme.SIZES.BASE,marginTop:10 }}>
  <Text bold size={16} style={styles.title}>
    Price Range
  </Text>
  <Slider
     value={this.state.price}
     minimumValue={1}
     maximumValue={100}
     onValueChange={value => this.setState({ price:value })}
   />
   <Text>${parseInt(this.state.price)}</Text>

      </Block>
      <Block style={{ paddingHorizontal: theme.SIZES.BASE,marginTop:10 }}>

      <Block
        row
        middle
        space="between"
        style={{ marginBottom: theme.SIZES.BASE }}
      >
      <Text bold size={16} style={styles.title}>
        Price Per
      </Text>
      <Block  >
        <Select
          defaultIndex={1}
          options={["Lesson", "Hour", "Course", "Day", "Other"]}
          onSelect={(data,value)=> this.setState({priceper:value})}
        />
      </Block>
      </Block>
      </Block>
      <Block style={{ paddingHorizontal: theme.SIZES.BASE,marginTop:10 }}>

      <Block
        row
        middle
        space="between"
        style={{ marginBottom: theme.SIZES.BASE }}
      >
      <Text bold size={16} style={styles.title}>
        Work Experience (Years)
      </Text>
      <Block  >
        <Select
          defaultIndex={1}
          options={["<1", "1-3", "3-5", "5-7", "7+"]}
          onSelect={(data,value)=> this.setState({exp:value})}
        />
      </Block>
      </Block>
      </Block>
      <Block style={{ paddingHorizontal: theme.SIZES.BASE,marginTop:10 }}>

      <SelectableChips initialChips={["Saturday", "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"]} onChangeChips={(chips) => this.setState({available:chips})} alertRequired={false}/>

      </Block>

  <Block center>
   <Button color="default" style={styles.button} onPress={()=>this.setState({currentPage:this.state.currentPage+1})}>
     Next
   </Button>
  </Block>
        </Block>
        </Block>
    }
  else {
    return  <Block flex style={styles.group}>
    <Block center style={{marginVertical:10}}>
<Text style={{fontSize:12}}>{this.state.locationdetails}{this.state.location?this.state.location.address:null}{this.state.location?this.state.location.longitude:null}</Text>
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
  <Block center>
   <Button color="default" style={styles.button} onPress={this._handleNewPost}>
     Next
   </Button>
  </Block>
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
        </Block>
  }

 }
 _handleNewPost = () => {
   this.setState({
     postStatus: 'Posting...',
   })

     if (this.state.first.length > 0) {
       if (this.state.last.length > 0) {
         if (this.state.locationdetails.length > 0) {

            if (this.state.gender) {
                 if (this.state.age) {
                      if (this.state.subject) {
                           if (this.state.topics) {
                                if (this.state.education.length > 0) {
                                     if (this.state.major.length > 0) {
                                          if (this.state.bio.length > 0) {
                                               if (this.state.price) {
                                                 if (this.state.priceper.length > 0) {
                                                   if (this.state.exp.length > 0) {
                                                     if (this.state.available) {
                                                          if (this.state.location) {


         const uid = this.props.appStore.uid
         const username = this.props.appStore.username
         const newPostKey = firebaseApp.database().ref('posts').push().key
         const imageName = `${newPostKey}.jpg`
         uploadImage(this.state.imagePath, imageName)
         .then(url => {
           const postData = {
             username: username,
             uid: uid,
             createdAt: firebase.database.ServerValue.TIMESTAMP,
             updatedAt: firebase.database.ServerValue.TIMESTAMP,
             status: "available",
             first:this.state.first,
             last:this.state.last,
             gender:this.state.gender,
             age:this.state.age,
             subject:this.state.subject,

             topics:this.state.topics,
             education:this.state.education,
             major:this.state.major,
             certification:this.state.certification,
             bio:this.state.bio,
             price:this.state.price,
             priceper:this.state.priceper,
             exp:this.state.exp,
              available:this.state.available,
              location:this.state.location,
             clientId: "",
             clientName: "",
             new_messages: 0,
             puid: newPostKey,
             image: this.state.imagePath?url:"https://cdn1.iconfinder.com/data/icons/flat-character-color-1/60/flat-design-character_6-512.png",
           }
           let updates = {}
           console.log(postData)
           updates['Teacher/' + uid] = postData
            updates['/users/' + uid + '/Teacher'] = true
            updates['/users/' + uid + '/img'] = url

           firebaseApp.database().ref().update(updates)
           .then(() => {
             this.setState({
                             postStatus: 'Finished! Thank You.',
                             postTitle: '',
                             postPrice: '',
                             postText: '',
                             imagePath: null,
                             imageHeight: null,
                             imageWidth: null,
                             spinnervisible: false,
                           })
                           this.props.navigation.navigate('UserScreen')
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
           this.setState({ spinnervisible: false,postStatus:error.message })
         })

       } else {
         this.setState({ postStatus: 'Please select location' })
       }
     } else {
       this.setState({ postStatus: 'Please select day available' })
     }
   } else {
     this.setState({ postStatus: 'Please add years of Experience' })
   }
 } else {
   this.setState({ postStatus: 'Please select price per(hour,lesson..etc) ex:$15/hour' })
 }
 } else {
   this.setState({ postStatus: 'Please enter a price' })
 }
     } else {
       this.setState({ postStatus: 'Please enter your bio' })
     }
   } else {
     this.setState({ postStatus: 'Please enter your major' })
   }
 } else {
   this.setState({ postStatus: 'Please enter education place' })
 }
} else {
  this.setState({ postStatus: 'Please select topics' })
}
} else {
  this.setState({ postStatus: 'Please select subject and topics' })
}
} else {
  this.setState({ postStatus: 'Please enter your age' })
}
} else {
  this.setState({ postStatus: 'Please select gender(male or female)' })
}
} else {
  this.setState({ postStatus: 'Please write location Details' })
}
} else {
  this.setState({ postStatus: 'Please add last name' })
}
}  else {
       this.setState({ postStatus: 'Please add first name' })
     }
   }

  render() {
    const { scrollOffset } = this.state;
    const screenWidth = Dimensions.get('window').width;
    const buttons = ['Male', 'Female']
    const { selectedIndex } = this.state


    return (
      <Container>
      <Block style={{ marginBottom: theme.SIZES.BASE }}>
        <Header   navigation={this.props.navigation} />
      </Block>

      <View style={styles.stepIndicator}>
          <StepIndicator
            renderStepIndicator={this.renderStepIndicator}
            customStyles={secondIndicatorStyles}
            currentPosition={this.state.currentPage}
            onPress={this.onStepPress}
            labels={[
              'Complete Profile',
              'Subjects',
              'Education',
              'Bio',
              'Location'
            ]}
          />
          </View>
          <Text style={{fontSize:12,color:'red'}}>{this.state.postStatus}</Text>
            <ScrollView>
    {this.Pages()}


          </ScrollView>
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
  group: {
    paddingTop: theme.SIZES.BASE * 2
  },
  button: {
    marginBottom: theme.SIZES.BASE,
    width: width - theme.SIZES.BASE * 2
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
  notify: {
    backgroundColor: argonTheme.COLORS.INFO,
    borderRadius: 20,
    height: 20 ,
    width: 20 ,
    position: 'absolute',
    bottom:10
  },
  listItem: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
