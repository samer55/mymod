/** @format */
// @flow
import React from 'react'
import { TouchableOpacity, View, Image, Text } from 'react-native'
const { width, height, scale } = Dimensions.get('window'),
  vw = width / 100,
  vh = height / 100,
  vmin = Math.min(vw, vh),
  vmax = Math.max(vw, vh)
  import {
    Platform,
    StyleSheet,
    Dimensions,
    PixelRatio,
  } from 'react-native'
export default class Item extends React.Component {
  render() {
    const { navigation, item } = this.props
    return (
      <TouchableOpacity
        onPress={()=>{this.props.navigation.navigate('ChatScreen',{uid:item.id,username:item.name})}}
        style={styles.item}
        key={item.name}>
        <View style={styles.left}>

          <View style={{}}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.name}>{item.msg}</Text>

          </View>
        </View>
        <View style={styles.right}>

        </View>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 7,
  },
  left: {
    flex: 3 / 5,
    flexDirection: 'row',
  },
  img: {
    marginRight: 10,
    marginLeft: 5,
    width: 45,
    height: 45,
    borderRadius: 50,
    borderWidth: 0,
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'cover',
    width: 45,
    height: 45,
  },
  name: {
    fontSize: 16,
  },
  time: {
    fontSize: 9,
    color: '#000',
  },
  right: {
    flex: 2 / 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  vcall: {
    resizeMode: 'contain',
    height: 24,
    marginRight: 25,
  },
  call: {
    resizeMode: 'contain',
    height: 24,
    marginRight: 5,
  },

  // empty
  body: {
    flex: 1,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgEmpty: {
    resizeMode: 'contain',
  },
  title: {
    color: '#242134',
    fontSize: 24,
    marginBottom: 30,
    marginTop: 30,
  },
  desc: {
    color: '#6D6D6D',
    fontSize: 14,
    textAlign: 'center',
  },

  backBox: {
    backgroundColor: '#00C8FE',
    borderRadius: 5,
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  backText: {
    color: '#FFF',
    fontSize: 16,
  },
});
