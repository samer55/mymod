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

const { width } = Dimensions.get("screen");

const Container = styled.View`
  background-color: white;
  flex: 1;
`;
import Notification from "../../Components/Notificationlist";

export default class extends React.Component {
  constructor(props) {
  super(props);

  this.offset = 0;

  this.state = {
    scrollOffset: new Animated.Value(0),
    titleWidth: 0,
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
        <Header back title="Notification" navigation={this.props.navigation} />
      </Block>
           <ScrollView style={{ flex: 1, width: '100%' }}
          contentContainerStyle={{ width: '100%' }}
          onScroll={this.onScroll}
          scrollEventThrottle={20}>
          <Notification name="Alex Dexter" notification="Just Confirmed your Offer " imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5Nf3RIvS5lwwnTSY0LF_V8lxIajSpbedtHatytB6w_2vnfkt"/>
          <Notification name="Alex Dexter" notification="Just Confirmed your Offer " imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5Nf3RIvS5lwwnTSY0LF_V8lxIajSpbedtHatytB6w_2vnfkt"/>
          <Notification name="Alex Dexter" notification="Just Confirmed your Offer " imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5Nf3RIvS5lwwnTSY0LF_V8lxIajSpbedtHatytB6w_2vnfkt"/>
          <Notification name="Alex Dexter" notification="Just Confirmed your Offer " imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5Nf3RIvS5lwwnTSY0LF_V8lxIajSpbedtHatytB6w_2vnfkt"/>
          <Notification name="Alex Dexter" notification="Just Confirmed your Offer " imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5Nf3RIvS5lwwnTSY0LF_V8lxIajSpbedtHatytB6w_2vnfkt"/>
          <Notification name="Alex Dexter" notification="Just Confirmed your Offer " imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5Nf3RIvS5lwwnTSY0LF_V8lxIajSpbedtHatytB6w_2vnfkt"/>
          <Notification name="Alex Dexter" notification="Just Confirmed your Offer " imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5Nf3RIvS5lwwnTSY0LF_V8lxIajSpbedtHatytB6w_2vnfkt"/>
          <Notification name="Alex Dexter" notification="Just Confirmed your Offer " imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5Nf3RIvS5lwwnTSY0LF_V8lxIajSpbedtHatytB6w_2vnfkt"/>
          <Notification name="Alex Dexter" notification="Just Confirmed your Offer " imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5Nf3RIvS5lwwnTSY0LF_V8lxIajSpbedtHatytB6w_2vnfkt"/>
          <Notification name="Alex Dexter" notification="Just Confirmed your Offer " imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5Nf3RIvS5lwwnTSY0LF_V8lxIajSpbedtHatytB6w_2vnfkt"/>
          <Notification name="Alex Dexter" notification="Just Confirmed your Offer " imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5Nf3RIvS5lwwnTSY0LF_V8lxIajSpbedtHatytB6w_2vnfkt"/>
          <Notification name="Alex Dexter" notification="Just Confirmed your Offer " imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5Nf3RIvS5lwwnTSY0LF_V8lxIajSpbedtHatytB6w_2vnfkt"/>

<Notification name="Alex Dexter" notification="Just Confirmed your Offer " imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5Nf3RIvS5lwwnTSY0LF_V8lxIajSpbedtHatytB6w_2vnfkt"/>
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
