import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
export const colors = {
  black: '#000000',
  lightBlack: '#484848',
  white: '#ffffff',
  green01: '#008388',
  green02: '#02656b',
  darkOrange: '#d93900',
  lightGray: '#d8d8d8',
  pink: '#fc4c54',
  gray01: '#f3f3f3',
  gray02: '#919191',
  gray03: '#b3b3b3',
  gray04: '#484848',
  gray05: '#dadada',
  gray06: '#ebebeb',
  gray07: '#f2f2f2',
  brown01: '#ad8763',
  brown02: '#7d4918',
  blue: '#4995cd',
}
export default class SearchBar extends Component {
  render() {
  	return (
    <View style={styles.wrapper}>
      <View style={styles.searchContainer}>
        <Icon
          name="ios-search"
          size={20}
          color='#919191'
          style={styles.searchIcon}
        />
        <Text style={styles.textInput}>
Try "Physics Tutor"
        </Text>
      </View>
    </View>
  	);
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255,255,255,0.9)',
    width: '100%',
    height: 80,
    zIndex: 99,
    marginBottom:10
  },
  searchContainer: {
  	display: 'flex',
  	borderWidth: 1,
  	borderColor: colors.gray03,
  	backgroundColor: colors.white,
  	shadowColor: 'rgba(0,0,0,0.1)',
  	shadowOffset: { width: 0, height: 5 },
  	shadowOpacity: 0.7,
  	shadowRadius: 10,
  	borderRadius: 3,
  	height: 40,
  	marginTop: 28,
  	marginLeft: 21,
  	marginRight: 21,
  },
  searchIcon: {
  	position: 'absolute',
  	left: 18,
  	top: 9,
  },
  textInput: {
    display: 'flex',
    marginTop: 11,
    marginLeft: 44,
    color: colors.gray02,
  },
});
