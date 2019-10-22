import React from "react";
import HomeScreenPresenter from "./HomeScreenPresenter";
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
import Icon from 'react-native-vector-icons/Ionicons';
import styled from "styled-components";
import { products } from "../../dummy";
import Service from "../../Components/BookingList";
const { height, width } = Dimensions.get('window')
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../../constants0/";
import { Button, Select, Input, Header, Switch } from "../../Components/";


const Container = styled.View`
  background-color: white;
  flex: 1;
`;

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.offset = 0;

    this.state = {
      scrollOffset: new Animated.Value(0),
      titleWidth: 0,
    };
  }
  static navigationOptions = {
header: null,
};

componentDidMount() {
  this.state.scrollOffset.addListener(({ value }) => (this.offset = value));
}

onScroll = e => {
  const scrollSensitivity = 4 / 3;
  const offset = e.nativeEvent.contentOffset.y / scrollSensitivity;
  this.state.scrollOffset.setValue(offset);
};
  render() {
    const { scrollOffset } = this.state;
const screenWidth = Dimensions.get('window').width;

    return (
      <Container>
      <Block style={{ marginBottom: theme.SIZES.BASE }}>
        <Header  title="Bookings" navigation={this.props.navigation} />
      </Block>
           <ScrollView style={{ flex: 1, width: '100%' }}
          contentContainerStyle={{ width: '100%' }}
          onScroll={this.onScroll}
          scrollEventThrottle={20}>
      <Service imgSrc='https://www.mantelligence.com/wp-content/uploads/2017/09/Questions-To-Ask-A-Girl-Would-you-rather-trade-some-intelligence-for-looks-or-looks-for-intelligence.jpg' status="Completed" name='Alice Daniela' day="Monday" date="October 30" time="8:00 AM"  />
      <Service imgSrc='https://www.gdst.net/wp-content/uploads/2019/08/Home-Page-Hero-1280x1280.jpg' name='Alice Daniela' day="Monday" date="October 30" time="8:00 AM" status="Completed" />
      <Service imgSrc='https://image.freepik.com/free-photo/hair-style-street-fashion-beautiful-girl_1139-844.jpg' name='Alice Daniela' day="Monday" date="October 30" time="8:00 AM" status="Canceled" />
      <Service imgSrc='http://freeonlinetutoring.edublogs.org/files/2014/01/Math-tutor-online-okbu4r.jpg' name='Alice Daniela' day="Monday" date="October 30" time="8:00 AM"  status="Pending"/>
      <Service imgSrc='http://freeonlinetutoring.edublogs.org/files/2014/01/Math-tutor-online-okbu4r.jpg' name='Alice Daniela' day="Monday" date="October 30" time="8:00 AM"  status="Completed"/>
      <Service imgSrc='http://freeonlinetutoring.edublogs.org/files/2014/01/Math-tutor-online-okbu4r.jpg' name='Alice Daniela' day="Monday" date="October 30" time="8:00 AM"  status="Pending"/>
      <Service imgSrc='http://freeonlinetutoring.edublogs.org/files/2014/01/Math-tutor-online-okbu4r.jpg' name='Alice Daniela' day="Monday" date="October 30" time="8:00 AM"  status="Pending"/>
      <Service imgSrc='http://freeonlinetutoring.edublogs.org/files/2014/01/Math-tutor-online-okbu4r.jpg' name='Alice Daniela' day="Monday" date="October 30" time="8:00 AM"  status="Pending"/>
      <Service imgSrc='http://freeonlinetutoring.edublogs.org/files/2014/01/Math-tutor-online-okbu4r.jpg' name='Alice Daniela' day="Monday" date="October 30" time="8:00 AM"  status="Pending"/>
      <Service imgSrc='http://freeonlinetutoring.edublogs.org/files/2014/01/Math-tutor-online-okbu4r.jpg' name='Alice Daniela' day="Monday" date="October 30" time="8:00 AM"  status="Pending"/>
      <Service imgSrc='http://freeonlinetutoring.edublogs.org/files/2014/01/Math-tutor-online-okbu4r.jpg' name='Alice Daniela' day="Monday" date="October 30" time="8:00 AM"  status="Pending"/>
      <Service imgSrc='http://freeonlinetutoring.edublogs.org/files/2014/01/Math-tutor-online-okbu4r.jpg' name='Alice Daniela' day="Monday" date="October 30" time="8:00 AM"  status="Pending"/>

      <Service imgSrc='http://freeonlinetutoring.edublogs.org/files/2014/01/Math-tutor-online-okbu4r.jpg' name='Alice Daniela' day="Monday" date="October 30" time="8:00 AM"  status="Pending"/>
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
