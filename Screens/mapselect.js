import React from 'react';
import LocationView from "react-native-location-view";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { firebaseApp } from '../firebase'
import { NavigationActions } from 'react-navigation'
import { observer,inject } from 'mobx-react/native'
import _ from 'lodash'

@inject("appStore") @observer

export default class SelectLocationScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        location: null
      }
    }

    onclick = loc => {
      this.props.appStore.map = loc
    this.props.navigation.navigate('ModaresSign')
    }
  render() {
    return(
      <View style={{flex: 1}}>
      <LocationView
              apiKey={"AIzaSyCKDG1Fe3bqh9MlZ-vLz5UkrShFpLWSDdk"}
              initialLocation={{
                          latitude:31.922824,
                          longitude:  35.907989,
                        }}
                                      onLocationSelect={this.onclick}
            />

      </View>
    );
  }
}
