import React from "react";
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
import { Switch} from 'react-native'
import styled from "styled-components";
import Message from "./components/Message";
const { height} = Dimensions.get('window')
import {  Content, List, ListItem,  Left, Body, Right, Radio} from 'native-base';
import { Block, Text, Button as GaButton, theme } from "galio-framework";
import { Slider } from 'react-native-elements';
import { Textarea, Form } from "native-base";

// Argon themed components
import { argonTheme, tabs } from "../constants0/";
import { Button, Select, Input, Header } from "../Components/";

const { width } = Dimensions.get("screen");

const Container = styled.View`
  background-color: white;
  flex: 1;
`;
import Notification from "../Components/Notificationlist";

export default class extends React.Component {
  constructor(props) {
  super(props);

  this.offset = 0;

  this.state = {
    scrollOffset: new Animated.Value(0),
    titleWidth: 0,
    value:1
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
state = {switchValue:false}
toggleSwitch = (value) => {
    //onValueChange of the switch this function will be called
    this.setState({switchValue: value})
    //state changes according to switch
    //which will result in re-render the text
 }
  render() {
    const { scrollOffset } = this.state;
    const screenWidth = Dimensions.get('window').width;


    return (
      <Container>
      <Block style={{ marginBottom: theme.SIZES.BASE }}>
        <Header back title="Make Offer" navigation={this.props.navigation} />
      </Block>
           <ScrollView style={{ flex: 1, width: '100%' }}
          contentContainerStyle={{ width: '100%' }}
          onScroll={this.onScroll}
          scrollEventThrottle={20}>
          <Text bold size={16} style={styles.title}>
            Offer Description
          </Text>
          <Form>
                    <Textarea rowSpan={5} bordered placeholder="Write here what you offer.." />
                  </Form>

<Block style={{ paddingHorizontal: theme.SIZES.BASE,marginTop:10 }}>
<Text bold size={16} style={styles.title}>
  Price Range
</Text>
<Slider
   value={this.state.value}
   minimumValue={1}
   maximumValue={100}
   onValueChange={value => this.setState({ value })}
 />
 <Text>${parseInt(this.state.value)}</Text>

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
        options={["Hour", "Lesson", "Subject", "Other"]}
      />
    </Block>
    </Block>
    </Block>

    <Block center>
      <Button color="default" style={styles.button} onPress={()=>{this.props.navigation.navigate('ChatScreen')}}>
        Make Offer
      </Button>
    </Block>

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
