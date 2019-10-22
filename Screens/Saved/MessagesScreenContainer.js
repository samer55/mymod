import React from "react";
import MessagesScreenPresenter from "./MessagesScreenPresenter";
import {
    View,

    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    Animated
} from "react-native";
import styled from "styled-components";
import Message from "../components/Message";
const { height} = Dimensions.get('window')
import {  Content, List, ListItem,  Left, Body, Right} from 'native-base';
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../../constants0/";
import { Button, Select, Input, Header, Switch } from "../../Components/";
import Tutor from '../../Components/Tutor'
import Request from '../../Components/request'

const { width } = Dimensions.get("screen");

const Container = styled.View`
  background-color: white;
  flex: 1;
`;
import Service from "../../Components/Notificationlist";

export default class extends React.Component {
  constructor(props) {
  super(props);

  this.offset = 0;

  this.state = {
    scrollOffset: new Animated.Value(0),
    titleWidth: 0,
    modares:false
  };
}

componentDidMount() {
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

  render() {
    const { scrollOffset } = this.state;
    const screenWidth = Dimensions.get('window').width;

    return (
      <Container>
      <Block style={{ marginBottom: theme.SIZES.BASE }}>
        <Header  title="Saved" navigation={this.props.navigation} />
      </Block>
           <ScrollView style={{ flex: 1, width: '100%' }}
          contentContainerStyle={{ width: '100%' }}
          onScroll={this.onScroll}
          scrollEventThrottle={20}>

      { !this.state.modares? <View><Tutor name="samer" navigation={this.props.navigation} price={30} location="30 Streets" subject="Physics" imgSrc="https://scontent.famm3-1.fna.fbcdn.net/v/t1.0-9/70303457_2439452049672778_9068360147381780480_n.jpg?_nc_cat=105&_nc_eui2=AeG1rv-Zedp4bptX7zeTn9Ar8aKHiFSRS0iT3jptwcBDdwojIWNu9Y4hItWVpZGQdJ4mJVZF7Tmo15seElIDdjjjBEJ5-xEI2bpXj6dKhUJJfA&_nc_oc=AQk_85btVGxkSigxHMLDCzcU4IF8YW2bT1vQGgA5ZWkjL_gFabO34SYpojS5F1TZ6rY&_nc_pt=1&_nc_ht=scontent.famm3-1.fna&oh=e7f9eb5b97eb87348a0509bf5c4175f8&oe=5E30FE75" />
          <Tutor name="samer" navigation={this.props.navigation} price={30} location="30 Streets" subject="Physics" imgSrc="https://scontent.famm3-1.fna.fbcdn.net/v/t1.0-9/70303457_2439452049672778_9068360147381780480_n.jpg?_nc_cat=105&_nc_eui2=AeG1rv-Zedp4bptX7zeTn9Ar8aKHiFSRS0iT3jptwcBDdwojIWNu9Y4hItWVpZGQdJ4mJVZF7Tmo15seElIDdjjjBEJ5-xEI2bpXj6dKhUJJfA&_nc_oc=AQk_85btVGxkSigxHMLDCzcU4IF8YW2bT1vQGgA5ZWkjL_gFabO34SYpojS5F1TZ6rY&_nc_pt=1&_nc_ht=scontent.famm3-1.fna&oh=e7f9eb5b97eb87348a0509bf5c4175f8&oe=5E30FE75" />

          <Tutor name="samer" navigation={this.props.navigation} price={30} location="30 Streets" subject="Physics" imgSrc="https://scontent.famm3-1.fna.fbcdn.net/v/t1.0-9/70303457_2439452049672778_9068360147381780480_n.jpg?_nc_cat=105&_nc_eui2=AeG1rv-Zedp4bptX7zeTn9Ar8aKHiFSRS0iT3jptwcBDdwojIWNu9Y4hItWVpZGQdJ4mJVZF7Tmo15seElIDdjjjBEJ5-xEI2bpXj6dKhUJJfA&_nc_oc=AQk_85btVGxkSigxHMLDCzcU4IF8YW2bT1vQGgA5ZWkjL_gFabO34SYpojS5F1TZ6rY&_nc_pt=1&_nc_ht=scontent.famm3-1.fna&oh=e7f9eb5b97eb87348a0509bf5c4175f8&oe=5E30FE75" />

          <Tutor name="samer" navigation={this.props.navigation} price={30} location="30 Streets" subject="Physics" imgSrc="https://scontent.famm3-1.fna.fbcdn.net/v/t1.0-9/70303457_2439452049672778_9068360147381780480_n.jpg?_nc_cat=105&_nc_eui2=AeG1rv-Zedp4bptX7zeTn9Ar8aKHiFSRS0iT3jptwcBDdwojIWNu9Y4hItWVpZGQdJ4mJVZF7Tmo15seElIDdjjjBEJ5-xEI2bpXj6dKhUJJfA&_nc_oc=AQk_85btVGxkSigxHMLDCzcU4IF8YW2bT1vQGgA5ZWkjL_gFabO34SYpojS5F1TZ6rY&_nc_pt=1&_nc_ht=scontent.famm3-1.fna&oh=e7f9eb5b97eb87348a0509bf5c4175f8&oe=5E30FE75" />

          <Tutor name="samer" navigation={this.props.navigation} price={30} location="30 Streets" subject="Physics" imgSrc="https://scontent.famm3-1.fna.fbcdn.net/v/t1.0-9/70303457_2439452049672778_9068360147381780480_n.jpg?_nc_cat=105&_nc_eui2=AeG1rv-Zedp4bptX7zeTn9Ar8aKHiFSRS0iT3jptwcBDdwojIWNu9Y4hItWVpZGQdJ4mJVZF7Tmo15seElIDdjjjBEJ5-xEI2bpXj6dKhUJJfA&_nc_oc=AQk_85btVGxkSigxHMLDCzcU4IF8YW2bT1vQGgA5ZWkjL_gFabO34SYpojS5F1TZ6rY&_nc_pt=1&_nc_ht=scontent.famm3-1.fna&oh=e7f9eb5b97eb87348a0509bf5c4175f8&oe=5E30FE75" />

          <Tutor name="samer" navigation={this.props.navigation} price={30} location="30 Streets" subject="Physics" imgSrc="https://scontent.famm3-1.fna.fbcdn.net/v/t1.0-9/70303457_2439452049672778_9068360147381780480_n.jpg?_nc_cat=105&_nc_eui2=AeG1rv-Zedp4bptX7zeTn9Ar8aKHiFSRS0iT3jptwcBDdwojIWNu9Y4hItWVpZGQdJ4mJVZF7Tmo15seElIDdjjjBEJ5-xEI2bpXj6dKhUJJfA&_nc_oc=AQk_85btVGxkSigxHMLDCzcU4IF8YW2bT1vQGgA5ZWkjL_gFabO34SYpojS5F1TZ6rY&_nc_pt=1&_nc_ht=scontent.famm3-1.fna&oh=e7f9eb5b97eb87348a0509bf5c4175f8&oe=5E30FE75" />

          <Tutor name="samer" navigation={this.props.navigation} price={30} location="30 Streets" subject="Physics" imgSrc="https://scontent.famm3-1.fna.fbcdn.net/v/t1.0-9/70303457_2439452049672778_9068360147381780480_n.jpg?_nc_cat=105&_nc_eui2=AeG1rv-Zedp4bptX7zeTn9Ar8aKHiFSRS0iT3jptwcBDdwojIWNu9Y4hItWVpZGQdJ4mJVZF7Tmo15seElIDdjjjBEJ5-xEI2bpXj6dKhUJJfA&_nc_oc=AQk_85btVGxkSigxHMLDCzcU4IF8YW2bT1vQGgA5ZWkjL_gFabO34SYpojS5F1TZ6rY&_nc_pt=1&_nc_ht=scontent.famm3-1.fna&oh=e7f9eb5b97eb87348a0509bf5c4175f8&oe=5E30FE75" />

          <Tutor name="samer" navigation={this.props.navigation} price={30} location="30 Streets" subject="Physics" imgSrc="https://scontent.famm3-1.fna.fbcdn.net/v/t1.0-9/70303457_2439452049672778_9068360147381780480_n.jpg?_nc_cat=105&_nc_eui2=AeG1rv-Zedp4bptX7zeTn9Ar8aKHiFSRS0iT3jptwcBDdwojIWNu9Y4hItWVpZGQdJ4mJVZF7Tmo15seElIDdjjjBEJ5-xEI2bpXj6dKhUJJfA&_nc_oc=AQk_85btVGxkSigxHMLDCzcU4IF8YW2bT1vQGgA5ZWkjL_gFabO34SYpojS5F1TZ6rY&_nc_pt=1&_nc_ht=scontent.famm3-1.fna&oh=e7f9eb5b97eb87348a0509bf5c4175f8&oe=5E30FE75" />

          <Tutor name="samer" navigation={this.props.navigation} price={30} location="30 Streets" subject="Physics" imgSrc="https://scontent.famm3-1.fna.fbcdn.net/v/t1.0-9/70303457_2439452049672778_9068360147381780480_n.jpg?_nc_cat=105&_nc_eui2=AeG1rv-Zedp4bptX7zeTn9Ar8aKHiFSRS0iT3jptwcBDdwojIWNu9Y4hItWVpZGQdJ4mJVZF7Tmo15seElIDdjjjBEJ5-xEI2bpXj6dKhUJJfA&_nc_oc=AQk_85btVGxkSigxHMLDCzcU4IF8YW2bT1vQGgA5ZWkjL_gFabO34SYpojS5F1TZ6rY&_nc_pt=1&_nc_ht=scontent.famm3-1.fna&oh=e7f9eb5b97eb87348a0509bf5c4175f8&oe=5E30FE75" />

          <Tutor name="samer" navigation={this.props.navigation} price={30} location="30 Streets" subject="Physics" imgSrc="https://scontent.famm3-1.fna.fbcdn.net/v/t1.0-9/70303457_2439452049672778_9068360147381780480_n.jpg?_nc_cat=105&_nc_eui2=AeG1rv-Zedp4bptX7zeTn9Ar8aKHiFSRS0iT3jptwcBDdwojIWNu9Y4hItWVpZGQdJ4mJVZF7Tmo15seElIDdjjjBEJ5-xEI2bpXj6dKhUJJfA&_nc_oc=AQk_85btVGxkSigxHMLDCzcU4IF8YW2bT1vQGgA5ZWkjL_gFabO34SYpojS5F1TZ6rY&_nc_pt=1&_nc_ht=scontent.famm3-1.fna&oh=e7f9eb5b97eb87348a0509bf5c4175f8&oe=5E30FE75" />
          </View>
        :
        <View>
        <Request saved={true} name="Alice daniel" img="https://www.musicnotes.com/images2/promos/store/900x520_piano-min.jpg" request="looking for music teacher who teach me piano" imgSrc="https://www.refinery29.com/images/8379727.jpg" location="Amman,Abdoun" price="JD30/ hr" />

<Request saved={true} name="Samer Alsukhni" img="https://online-learning.harvard.edu/sites/default/files/styles/header/public/course/asset-v1_HarvardX%2BCalcAPL1x%2B2T2017%2Btype%40asset%2Bblock%40TITLE-Calculus-Applied-2120x1192-NO-SPOTLIGHT%202.png?itok=crWwjmVi" request="looking for calculus 1 teacher in yarmouk university" imgSrc="https://scontent.famm3-1.fna.fbcdn.net/v/t1.0-9/70303457_2439452049672778_9068360147381780480_n.jpg?_nc_cat=105&_nc_eui2=AeG1rv-Zedp4bptX7zeTn9Ar8aKHiFSRS0iT3jptwcBDdwojIWNu9Y4hItWVpZGQdJ4mJVZF7Tmo15seElIDdjjjBEJ5-xEI2bpXj6dKhUJJfA&_nc_oc=AQk_85btVGxkSigxHMLDCzcU4IF8YW2bT1vQGgA5ZWkjL_gFabO34SYpojS5F1TZ6rY&_nc_pt=1&_nc_ht=scontent.famm3-1.fna&oh=e7f9eb5b97eb87348a0509bf5c4175f8&oe=5E30FE75" location="Irbid,30 Streets" price="$12/ hr" />
</View>
      }

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
