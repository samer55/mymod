import React, {Fragment} from 'react';

import { TouchableWithoutFeedback,View ,Text,ImageBackground,StyleSheet,Dimensions,TouchableOpacity} from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import { withNavigation } from "react-navigation";
import PropTypes from "prop-types";
import styled from "styled-components";
import Layout from "../Constants/Layout";
import Colors from "../Constants/Colors";
import Icon from 'react-native-vector-icons/Ionicons'
const screenWidth = Dimensions.get('window').width

const Container = styled.View`
  margin-bottom: 20px;
`;

const ImageContainer = styled.View`
  box-shadow: 0px 10px 15px rgba(60, 60, 60, 0.4);
  width: ${70};
  border-radius: 15px;
  elevation: 4;
  margin-bottom: 1px;
  min-height:100px;
`;


const Price = styled.Text`
  font-weight: 600;
  margin-left: 10px;
  color: ${Colors.blackColor};
`;

const Categories = ({ imgSrc, name, price, navigation,icon }) => (
  <TouchableOpacity onPress={() => navigation.navigate("CategoryScreen")}>
  <ImageBackground
  borderRadius={12}
    source={{uri:'https://image.freepik.com/free-photo/image-engineering-objects-workplace-top-view-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus_1418-470.jpg'}}
    style=  {styles.imagee}               >
    <View
      style={{width:'100%',height:100,alignItems:'center',justifyContent:'center',backgroundColor:'rgba(0, 0, 0, 0.2)'}} ><Text style={styles.paragraph}>{name}</Text></View>
  </ImageBackground>
  </TouchableOpacity>
);

Categories.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  waitView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  card: {
    flex: 1,
  },
  imag: {
    flexGrow:1,
    width:screenWidth,
  },
  ima:{  flexGrow:1,
    width:screenWidth,


    // Set border Radius.
},
gridView: {
  paddingTop: 5,
  flex: 1,
  borderRadius:19
},
itemContainer: {
  justifyContent: 'flex-end',
  borderRadius: 20,
  padding: 10,
  height: 160,

},
itemName: {
  fontSize: 16,
  color: '#fff',
  fontWeight: '600',
},
itemCode: {
  fontWeight: '600',
  fontSize: 12,
  color: '#fff',
},
  image:{  flexGrow:1,
    height:150,
    width:150,
    shadowOffset:{  width: 2,  height: 2,  },
    shadowColor: 'black',
    borderRadius:20,
    borderWidth:1,
    borderColor:'grey'
    // Set border Radius.
},
  imagee: {
    flexGrow:1,
    height:100,
    width:screenWidth-20,
    alignSelf:'center',
borderRadius:12,
marginTop:5,marginBottom:5,
    // Set border Radius.

  },
  imageee: {
    flexGrow:1,
    height:100,
    width:Dimensions.get('window').width,


    // Set border Hex Color Code Here.

  },
  paragraph: {
    textAlign: 'center',
    fontSize:24,
    color:'white',
    marginTop:5,
    fontWeight:'700',
    shadowColor: 'white',


  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    padding: 5,
    color: '#444',
  },
  postImage: {
    backgroundColor: '#eee',
  },
  postInfo: {
    padding: 3,
    alignItems: 'center',
  },
  wrapper: {
    width:100
},

slide: {
width:350,
  justifyContent: 'center',
  backgroundColor: 'transparent'
},

slide1: {
  flex: 1,

  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent'
},

slide2: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent'
},

slide3: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent'
},

  postButtons: {
    padding: 5,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  row: {
    justifyContent:'space-around',
    flexDirection: 'row',
    flex: 1,
  },
  button: {
    flex: 3,
    padding: 5,
    margin: 6,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#999',
    alignItems: 'center',
    backgroundColor: '#4285f4',
  },
  info: {
    fontSize: 15,
  },
  bold: {
    fontWeight: 'bold',
  },
})

export default withNavigation(Categories);
