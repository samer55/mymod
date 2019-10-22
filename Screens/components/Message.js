import React from "react";
import styled from "styled-components";
import { withNavigation } from "react-navigation";
import PropTypes from "prop-types";
import { Platform, TouchableWithoutFeedback,Text,StyleSheet ,View} from "react-native";
import Avatar from "./Avatar";
import Colors from "../../Constants/Colors";

const Container = styled.View`
  padding: 15px 10px;
  border-radius: 15px;
  border: ${props => (props.unread ? "1px solid #EBEBEB" : "0")};
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  width:100%;
`;

const AvatarColumn = styled.View`
  margin-right: 20px;
`;

const Column = styled.View``;

const UnreadNumber = styled.View`
  background-color: ${Colors.tintColor};
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  padding: 2px;
  margin-left: 10px;
`;

const UnreadNumberText = styled.Text`
  color: white;
  font-size: 12px;
`;

const NameTime = styled.Text`
  color: ${Colors.greyColor};
`;

const PreviewContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  height: 26px;
  width:100%;
`;

const PreviewText = styled.Text`
  font-weight: ${props => (props.unread ? "600" : "400")};
  margin-right: ${props => (props.unread ? "0px" : "10px")};
`;

const IconContainer = styled.View`
  height: 26px;
`;

const Message = ({
  userAvatar,
  delivered = false,
  readReceipt = false,
  unread = false,
  pendingRead = 0,
  name,
  timeAgo,
  item,
  preview,
  img,
  navigation
}) => (
  <TouchableWithoutFeedback   key={item.name} onPress={()=>{navigation.navigate('ChatScreen',{uid:item.id,username:item.name,img:item.img,new_messages:item.new_messages})}}>
  {/*  <Container unread={true}>
      <AvatarColumn>
        <Avatar source={{uri:item.img}} />
      </AvatarColumn>
      <Column>
        <NameTime>{item.name}</NameTime>
        <PreviewContainer>
        <PreviewText unread={unread}>{preview}</PreviewText>

          <Text unread={unread} numberOfLines={1}>{item.msg}</Text>

        </PreviewContainer>
      </Column>
      { item.new_messages > 0 && (
        <UnreadNumber>
          <UnreadNumberText>{item.new_messages}</UnreadNumberText>
        </UnreadNumber>
      )}
    </Container>*/}
    <View style={styles.card}>

      <View style={styles.RawContainer1}>
      <View style={{width:'20%'}}>
        <Avatar source={{uri:item.img}} />
      </View>
    <  View style={{width:'80%'}}>
    <View style={styles.RawContainer}>

      <View style={styles.LeftContainer}><Text style={styles.title}>{ item.name }</Text></View>
    </View>
    <View style={styles.RawContainer}>
      <View style={styles.LeftContainer}><Text style={styles.info} numberOfLines={1}>{ item.msg }</Text></View>
      {item.new_messages >0?<View style={styles.CounterContainer}></View>:null}
    </View>
    <View style={styles.RawContainer}>
    </View>
  </View>
  </View>
  </View>
  </TouchableWithoutFeedback>
);

Message.propTypes = {
  userAvatar: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  delivered: PropTypes.bool,
  readReceipt: PropTypes.bool,
  unread: PropTypes.bool,
  pendingRead: PropTypes.number,
  name: PropTypes.string.isRequired,
  timeAgo: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired
};

export default withNavigation(Message);
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  RawContainer: {
    flexDirection: 'row',
    flex: 1,
    //borderWidth: 1,
  },

  RawContainer1: {
    flexDirection: 'row',
    flex: 1,
    marginVertical:5
    //borderWidth: 1,
  },
  LeftContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    //borderWidth: 1,
  },
  RightContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    //borderWidth: 1,
  },
  CounterContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    //borderWidth: 1,
    height: 15,
    width: 15,
    borderRadius: 90,
    marginRight: 25,
    backgroundColor: '#118DF0',
  },
  counter: {
    fontSize: 16,
    fontWeight: '200',
    color: '#FFF',
  },
  waitView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  card: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#999',
    margin: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5,
    color: 'black',
  },
  author: {
    fontSize: 16,
    padding: 5,
  },
  info: {
    padding: 3,
    fontSize: 13,
  },

})
