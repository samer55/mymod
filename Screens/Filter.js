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
        <Header back title="Filter" navigation={this.props.navigation} />
      </Block>
           <ScrollView style={{ flex: 1, width: '100%' }}
          contentContainerStyle={{ width: '100%' }}
          onScroll={this.onScroll}
          scrollEventThrottle={20}>

          <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Text bold size={16} style={styles.title}>
            Location
          </Text>
          <Block center style={{marginVertical:10}}>
            <Button
              color="success"
              textStyle={{ color: "white", fontSize: 12, fontWeight: "800" }}
              style={styles.button}
            >
              Set Location on Map
            </Button>
          </Block>
          <Text bold size={16} style={styles.title}>
            Availability
          </Text>
            <Block
              row
              middle
              space="between"
              style={{ marginBottom: theme.SIZES.BASE }}
            >
              <Text size={14}>Available Today</Text>
              <Switch

                onValueChange = {this.toggleSwitch}
                value = {this.state.switchValue}/>

            </Block>
            <Text bold size={16} style={styles.title}>
              Sort Options
            </Text>
            </Block>

            <ListItem selected={false} >
           <Left>
             <Text>Popularity</Text>
           </Left>
           <Right>
             <Radio
               color={"#f0ad4e"}
               selectedColor={"#5cb85c"}
               selected={false}
             />
           </Right>
         </ListItem>
         <ListItem selected={false} >
        <Left>
          <Text>Star Rating (Highest first)</Text>
        </Left>
        <Right>
          <Radio
            color={"#f0ad4e"}
            selectedColor={"#5cb85c"}
            selected={false}
          />
        </Right>
      </ListItem>
      <ListItem selected={false} >
     <Left>
       <Text>Star Rating (Lowest first)</Text>
     </Left>
     <Right>
       <Radio
         color={"#f0ad4e"}
         selectedColor={"#5cb85c"}
         selected={false}
       />
     </Right>
   </ListItem>
   <ListItem selected={false} >
  <Left>
    <Text>Price (Highest first)</Text>
  </Left>
  <Right>
    <Radio
      color={"#f0ad4e"}
      selectedColor={"#5cb85c"}
      selected={false}
    />
  </Right>
</ListItem>
<ListItem selected={true} >
<Left>
 <Text>Price (Lowest first)</Text>
</Left>
<Right>
 <Radio
   color={"#f0ad4e"}
   selectedColor={"#5cb85c"}
   selected={true}
 />
</Right>
</ListItem>
<Block style={{ paddingHorizontal: theme.SIZES.BASE,marginTop:20 }}>
<Text bold size={16} style={styles.title}>
  Gender
</Text>
</Block>
<ListItem selected={false} >
<Left>
 <Text>Male</Text>
</Left>
<Right>
 <Radio
   color={"#f0ad4e"}
   selectedColor={"#5cb85c"}
   selected={false}
 />
</Right>
</ListItem>
<ListItem selected={true} >
<Left>
<Text>Female</Text>
</Left>
<Right>
<Radio
color={"#f0ad4e"}
selectedColor={"#5cb85c"}
selected={true}
/>
</Right>
</ListItem>
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
  />
</Block>
</Block>
</Block>
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
 <Text>From $0-${parseInt(this.state.value)}</Text>

    </Block>
    <Block center>
      <Button color="default" style={styles.button}>
        Apply Filter
      </Button>
    </Block>
    <Block center>
      <Button
        color="secondary"
        textStyle={{ color: "black", fontSize: 12, fontWeight: "700" }}
        style={styles.button}
      >
        Reset
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
