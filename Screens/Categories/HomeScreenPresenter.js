import React from "react";
import styled from "styled-components";
import { products } from "../../dummy";
import MasonryProducts from "./../components/MasonryProducts";
import Tutor from '../../Components/Tutor'
import {  Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import {   List } from 'native-base';
import ProductCard from '../../Components/scroll'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const Container = styled.View`
  background-color: white;
  flex: 1;
`;

const HomeScreenPresenter = () => (
  <Container>
  <ScrollView>
  <View style={styles.sectionContainer1} >
    <Text style={styles.sectionTitle}>Hot Offers</Text>
<TouchableOpacity  onPress={()=>{this.props.navigation.navigate('Offers')}}>
    <Text style={{fontSize:13,color:'#118DF0'}}>See all</Text>

  </TouchableOpacity>
  </View>
  <ScrollView horizontal={true} >
  <View style={styles.sectionContainer}>
  <ProductCard imgSrc="https://www.blackboard.com/images/223/Analytics-Illustrations_rv1_Analytics-for-Learn_tcm223-70032.jpg" name="Learn with me how to develop an app" price={50}/>

</View>
<View style={styles.sectionContainer}>
<ProductCard
imgSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///9YwKoAaZjB1eHL2+Y+P0La5u2yytkAa5pUv6hGu6NAQUQ9PkH2+vtLvKVOT1Hz8/NcXV/w+fdUVVc2gqju9Pe5ubq749rj4+MpfaXR4Olewq1KS02pqarExMXu7u6/v8CW1cfV1dZ1ybdlZmiRkpMAcJ3e8e17qMKWl5jS7OZ/f4FaW13D5t5yc3SCg4Sr3dLb29ukpKUAYJN+zLtMja+pxdVsn7uZus6i2c2KsMdfl7Z2pb9Iiq6N0sPj7fKSV9tKAAAKSklEQVR4nO2da3uiPBCGEaUVIqDFIlZAi6eqLbZuT7a77f//Vy+BoAhJPBRLeK/cH9Z6AHmcZDKZDFlB4HA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA7nJK7fL4q+hDNz8eey6Es4MxciV1h2uMLywxWWH66w/HCF5YcrLD9cYfnhCssPV1h+uMLy879SqF5jXvw/Kfz+8455lazw+5wXcx7+dTEvEhVeYH8QtrkUa9kXiQr/1nGNumhU+tv1z+xrJIXX4tvpX3Q2Xif0nx1nFpLCd/GGfCK1+3HUheVGdUKXeCFmuxZJYfeFfB61XS/KAdfqXarEdjvzEkHhpVglnqVAgXslvmabHkFhe0I8SaECA4kTmkS1nnEfeIU3mPYcn6NdJ5v3N6Bb8W2S9oJ4hW/EDl24wD1WvBFfU69gFX6Ld4QTMCBwjxW7aV+DXQP+EAkhGxMCA0NRrPguppbtv9+ygY46wYQG4RtsCAwkkq14XSe1vwSvuPBOgAIpY8jvQrHiW31/xJVpyhHMWBBC7ovVl72zoiq+PIMhC0IoDXUv1+84MzNlQQh96D8exiwI+YkVszBnQQht0DgWJgXmaUVGBeZnRWYF7rFi0/JMZzYbj8fL2Wxluk99wgcZdDJbCFZUPWepSwHAto0A3QbhM3/lNrMfZteCEIzEprmwJaAvVgPPaqrh0KeqgUFdZ2mAQKVj7XycaQtC0nNZdyFJxtgltMimNxtJ0shMDPmXf9gWmEpdmy1gj5/oB/RXBtCdrcYy5b7dFmiZh6Q6XR/Y5tkvJ3eaC2AcfNnuSBpZ+z/GFJ4urRJPp53br6/1fPP08fb59nGeMLAJQLnM6ADD2zyZf2maJgdocid83lPg0+DF4cPmQ9YIjH//Ok9mBvyNfTo9Ra7EaM+CsFY2TwPN680Hl2BZzNXiufugOL0ZWMR/zitaJYn23FF2X9A6mMMY4EWsv5EWU8ytMb525UCzBQZNiR5eoU/PwOz8V34wF3cTsY3NP3iSj/6aVuS0QEhvOtwVrcTdcSkNiN+HT1edlev3rth9zwSi6r2Bos25htNXqVwJnZRy5REdPALZSBWe8/WfiFtSPj+X/8T631RKdAyQF50rOAvKUGCm7cYSLVxXrL3Vg5+yqGDn5q1ef0mGkpaEnP40I2NjQcw7CvI3K8nb/YLvoKVM/lLWT8/P98ck+IU3Txd2FGarWHlyDy8wkDiNjtdbyZNXP0Xx32tRq9xbXtubJVwLoFDmGetkKsNIoDzMvhUdZ4KNEaEzm3wwcjvfxt+MG5GreCC0UbmnhQKFadoNabfRGXTUE6/bovjJ4FTKRkNhDy8QyRwKwm3Gxko0LM4Amk2+ZP00A7jADR87hIFiKzD7AfkrPPRJYjoEH9tRI6WZkCAwMGLkUXSWYrcMrSicIY0UCYEYR4Qi1LFdpII9NNGkcA2vX8Z6UyRQ62HeHYYHm4DhybAnRd0wHAuu0rFZQmAwwGPGCy30NRY5OC0eU4p+fthIr7BxaSAiEqhiuqoWJgGa9or6JYWyksKHqYKPPsOWGAm8onREg6mZ8C7IScwVYnAGQ+9gsoQVWJGjQX/k076jWBb34UOnohIFVsgC4xHRHxWpgY4fhc2dyIL4yBQKxL8TO9NFi/YdxeLH1xZaEDcgUAWWQCFqpcJj2ESvplkpMk2g/BwezXIrXerhwxw2UflKeMBomZIFxv2QZU8zQ6OFFk51cTMouUIJWeV1eHjrNwPT69p+ElNURwoDb1Uhz+VpxONhnPy+OODba7WfzbEu/4h7SdTdDVBM0+vRvCmRKJOxjWnuDvh28Yc73nxX95PIEsVx6foKOhu5l53mUpHDg7dx6cUB316t/moSri856C8ocCjgwmuKwMjRuOl0G1PYqAshgY+0qX6GKPAWHEAq02CBERrKHjW5Fw+Lh7ZUGWXbxnpx17+fzdWFFgx9DXaaiDUhynuPGB7w4QQRtbApEgiHRdhUD2mu6BxMLUDt4q1MB+XahFhgNMmQeyi8oZhTQWvgFnA8k808xlgCkq3HzlQYaqHA2JIwdSMPsTm2qI2u0XGubkuSxOKKtwNmzb7Z2jaxoda72lgSelXa8BFnvIOGbs88awwYzGToUbyc8PRf6lagEgkMLIltqMpGoGCFgd9CKn45JkUczuyQFggbKa6hKp3M6QDmdMXiShjvMB1qKYHBBPgrsybTm2aObG6iI2ZwG1j/9zBUw/ISWGYCBcLW+JyUKGu9B8xxzQZ7CnE2DOkomqwNYV1GXFmyVqJ8OKwaesbpY1QhMV5W5+tbuJw2fIzLSqZfFUXRes/rOcmf9NlbgXrKNxf/hHNcRRHND5sg12blMTOFuviYiFFLM3INQ0xit/5dLv9t19rzzZCtGvDfgguGb/7WkzVRSyPPky/CFZBut7hKk+vXtljfKZVAebacMMIW8doVJ7QiyDPyVs+UtOWaXmnGk8TaZ9APiqiI+vjMlApaeY5giXXgb2IR5K8j5Tg3H0iJmxhUWNpW0OYfO+TpTGf2bqeuvhRTfLlLnlUi2eUnFqaLeVaJ2Exmo3Is1/LAIK9T5Up+5Voric209zi3dLzBaFLYQ8P0j2ObAbN3CPlhfe9PluHHcMTp67mGuHnSNIDjObp9uk+1bcdyDcDK3DBL34e399onz4VdewQkyWBXYIDlWsLo5HqYpS48DVwWBnc6JthzZyyJZllu0Oufuj5mMpOcwaF2t9PhxYkR6ij2odUuey1VbSd28XJPSwVam3TdpdhmTWJqZzz7pPhttQ3dq3XGrLhjQSFxV8hR6IkJ5mWdKStm9ja0TkkP77btqsiQFTGbN/onxF3+rn+qsmNF3O6U7vETPCu9sF1lxd3gt9/Ujw6/x5kUQTXXvadOJu1kEC37yMG7b9sZ7xT0xeIlkjZQbR07iR0bWYUsWJG4Q2zLsI8a9fs2TmHxEslb4N4vR/fHnGlh48fQgiUS+iDkfuwdU03hNVYDfJRQqESKwMCGgn9EYNMygjkX/uO14twNdZdmYxl0rYPT/LMgnCEpLNCKd7T/yQHef+Yc2k49uJOCScyR1kTCJrVnh3YreXiH3eKwlFJfv1epK/c1NmKbXUKFqqEf0hVHYTQzYKQ24VCiygzLNvanh/2oSG+ALxtjFlR74oG9oc0C9day2VBHWTMXtOhW9GN3VFaFgUSD0hebo82SXGkVCp5NjlA9fVsoW16FgtUi5U9XwNjmjkusUBCWjRZmYPRajUVioCu1QsE1gJ/K9Hu+ZOy03nIrFNQVAL658aqW05LS6biSKww0Ovdws9aVY66WBtyWNX1E2RTiqk2fVr4NAuz01rohA0arEwiMSetkzX6fEAEMgF8eieTxgYYJjkvtFIgD9NPWnkaNUqyQNv2Gf2q9yUy6P3H5+Bdx7Z8U7QdhHIM3rSVRlz/c8lhdsL1nsmc0flxUOAD53rmRK8tGHt0o6MgjVseNRU6u0LxnMfXE4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4nML5DwaHx3jDQvnvAAAAAElFTkSuQmCC"
name="I will teach you how to be successful" price={30}/>

</View>
</ScrollView>
<View style={styles.sectionContainer}>
<Text style={styles.sectionTitle}>Tutors</Text>
</View>

  <List>
  <Tutor name="samer" price={30} location="30 Streets" subject="Physics" imgSrc="https://scontent.famm3-1.fna.fbcdn.net/v/t1.0-9/70303457_2439452049672778_9068360147381780480_n.jpg?_nc_cat=105&_nc_eui2=AeG1rv-Zedp4bptX7zeTn9Ar8aKHiFSRS0iT3jptwcBDdwojIWNu9Y4hItWVpZGQdJ4mJVZF7Tmo15seElIDdjjjBEJ5-xEI2bpXj6dKhUJJfA&_nc_oc=AQk_85btVGxkSigxHMLDCzcU4IF8YW2bT1vQGgA5ZWkjL_gFabO34SYpojS5F1TZ6rY&_nc_pt=1&_nc_ht=scontent.famm3-1.fna&oh=e7f9eb5b97eb87348a0509bf5c4175f8&oe=5E30FE75" />
  <Tutor name="samer" price={30} location="30 Streets" subject="Physics" imgSrc="https://scontent.famm3-1.fna.fbcdn.net/v/t1.0-9/70303457_2439452049672778_9068360147381780480_n.jpg?_nc_cat=105&_nc_eui2=AeG1rv-Zedp4bptX7zeTn9Ar8aKHiFSRS0iT3jptwcBDdwojIWNu9Y4hItWVpZGQdJ4mJVZF7Tmo15seElIDdjjjBEJ5-xEI2bpXj6dKhUJJfA&_nc_oc=AQk_85btVGxkSigxHMLDCzcU4IF8YW2bT1vQGgA5ZWkjL_gFabO34SYpojS5F1TZ6rY&_nc_pt=1&_nc_ht=scontent.famm3-1.fna&oh=e7f9eb5b97eb87348a0509bf5c4175f8&oe=5E30FE75" />
  <Tutor name="samer" price={30} location="30 Streets" subject="Physics" imgSrc="https://scontent.famm3-1.fna.fbcdn.net/v/t1.0-9/70303457_2439452049672778_9068360147381780480_n.jpg?_nc_cat=105&_nc_eui2=AeG1rv-Zedp4bptX7zeTn9Ar8aKHiFSRS0iT3jptwcBDdwojIWNu9Y4hItWVpZGQdJ4mJVZF7Tmo15seElIDdjjjBEJ5-xEI2bpXj6dKhUJJfA&_nc_oc=AQk_85btVGxkSigxHMLDCzcU4IF8YW2bT1vQGgA5ZWkjL_gFabO34SYpojS5F1TZ6rY&_nc_pt=1&_nc_ht=scontent.famm3-1.fna&oh=e7f9eb5b97eb87348a0509bf5c4175f8&oe=5E30FE75" />

  <Tutor name="samer" price={30} location="30 Streets" subject="Physics" imgSrc="https://scontent.famm3-1.fna.fbcdn.net/v/t1.0-9/70303457_2439452049672778_9068360147381780480_n.jpg?_nc_cat=105&_nc_eui2=AeG1rv-Zedp4bptX7zeTn9Ar8aKHiFSRS0iT3jptwcBDdwojIWNu9Y4hItWVpZGQdJ4mJVZF7Tmo15seElIDdjjjBEJ5-xEI2bpXj6dKhUJJfA&_nc_oc=AQk_85btVGxkSigxHMLDCzcU4IF8YW2bT1vQGgA5ZWkjL_gFabO34SYpojS5F1TZ6rY&_nc_pt=1&_nc_ht=scontent.famm3-1.fna&oh=e7f9eb5b97eb87348a0509bf5c4175f8&oe=5E30FE75" />
  </List>
  </ScrollView>
  </Container>
);
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 12,
    paddingHorizontal: 24,
  },
  sectionContainer1: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'black',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
export default HomeScreenPresenter;
