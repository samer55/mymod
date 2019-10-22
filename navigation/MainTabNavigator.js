import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator,createSwitchNavigator } from 'react-navigation';
import HomeScreen from '../Screens/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import StartScreen from '../Screens/StartScreen';
import FindTutor from '../Screens/Find';
import ProductScreen from "../Screens/ProductScreen";
import HomeScreenContainer from "../Screens/Categories";
import ProfileScreen from "../Screens/ProfileScreen";
import Offers from "../Screens/Offers";
import MyOffer from "../Screens/MyOffer";

import Filter from "../Screens/Filter";
import Date from "../Screens/date";
import Bookings from "../Screens/Bookings";
import SelectLocationScreen from "../Screens/mapselect";
import Loading from "../Screens/loading";

import Book from "../Screens/Book";
import Success from "../Screens/Success";
import MessagesScreen from "../Screens/MessagesScreen";
import Notification from "../Screens/Notification";
import Saved from "../Screens/Saved";
import MakeOffer from "../Screens/MakeOffer";
import ModaresSign from "../Screens/ModaresSign";
import StudentSign from "../Screens/StudentSign";

import TutorsScreen from "../Screens/TutorsScreen";

import Profile from "../Screens/Profile";
import Elements from "../Screens/Elements";
import SearchScreen from "../Screens/SearchScreen";
import ChatScreen from "../Screens/ChatScreen";
import BookingDetails from "../Screens/BookingDetails";

import CategoryScreen from "../Screens/CategoryScreen";
import SignUp from "../Screens/SignUp";
import PostOffer from "../Screens/PostOffer";

const SearchStack = createStackNavigator({


    Home: HomeScreen,
    Categories:HomeScreenContainer,
    Book:Book,
Success:Success,
ChatScreen:ChatScreen,
Offerscreen:ProductScreen,
tutor:ProfileScreen,
TutorsScreen:TutorsScreen,
Date:Date,
  Find:FindTutor,
  MakeOffer:MakeOffer,
  CategoryScreen:CategoryScreen,
  Filter:Filter,
  BookingDetails:BookingDetails,
  Offers:Offers,
  SearchScreen:SearchScreen,
  Start:StartScreen,
  Notification:Notification,

});



SearchStack.navigationOptions = {
  backBehavior: 'none',
tabBarOptions: {
    showLabel: false
},
tabBarIcon: ({ tintColor }) => (
  <MaterialCommunityIcons name="teach" size={25} color={tintColor} />
)
};
const OrderStack = createStackNavigator({
  Booking:Bookings,
  Home: HomeScreen,
  BookingDetails:BookingDetails

});



OrderStack.navigationOptions = {
  backBehavior: 'none',
tabBarOptions: {
    showLabel: false
},
tabBarIcon: ({ tintColor }) => (
  <Icon name="ios-bookmarks" size={25} color={tintColor} />
)
};
const ChatStack = createStackNavigator({
  MessagesScreen:MessagesScreen,
  Home: HomeScreen,
  ChatScreen:ChatScreen,


});

class ProfileStackClass extends React.Component {
  // use in Stack navigator only
  static navigationOptions = { header: null };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Screen One</Text>
        <Button title="Go to two"
          onPress={() => this.props.navigation.navigate('routeTwo')}
        />
      </View>
    );
  }
}


ChatStack.navigationOptions = {
  backBehavior: 'none',
tabBarOptions: {
    showLabel: false
},
tabBarIcon: ({ tintColor }) => (
  <Icon name="ios-chatbubbles" size={25} color={tintColor} />
)
};
const SavedStack = createStackNavigator({
  Saved:Saved,
  Home: HomeScreen,

});



SavedStack.navigationOptions = {
  backBehavior: 'none',
tabBarOptions: {
    showLabel: false
},
tabBarIcon: ({ tintColor }) => (
  <Icon name="ios-heart" size={25} color={tintColor} />
)
};

const ProfileStack = createSwitchNavigator(
  {


    Loading:Loading,
    signup:SignUp,
    ModaresSign:ModaresSign,
    map:SelectLocationScreen,
MyOffer:MyOffer,
  UserScreen:Profile,
  PostOffer:PostOffer,
  map:SelectLocationScreen,
StudentSign:StudentSign,

  },
  {

    headerMode: "none",
    ...Platform.select({
      ios: {
        transitionConfig: () => ({
          screenInterpolator: props => fade(props)
        })
      }
    })
  }
);


ProfileStack.navigationOptions = {
  backBehavior: 'none',
tabBarOptions: {
    showLabel: false
},
tabBarIcon: ({ tintColor }) => (
  <Icon name="md-contact" size={25} color={tintColor} />
)
};
export default createBottomTabNavigator({
  Search:SearchStack,
  Order:OrderStack,
  Chat:ChatStack,
  Saved:SavedStack,
  Profile:ProfileStack
},
);
