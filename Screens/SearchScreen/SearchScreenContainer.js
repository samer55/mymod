import React from "react";
import { Alert ,Dimensions,ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../../constants0/";
import { Button, Select, Input, Header, Switch } from "../../Components/";

const { width } = Dimensions.get("screen");
import Categories from '../../Components/Categories'

const Container = styled.View`
  background-color: white;
  flex: 1;
`;

const SearchResults = styled.Text`
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 16px;
`;
export default class extends React.Component {
  static navigationOptions = {
header: null,
};
  constructor(props) {
    super(props);
    props.navigation.setParams({
      onSubmit: this.onSubmit
    });
  }

  onSubmit = text => {
    setTimeout(() => {
      Alert.alert(`Searching by: ${text}`);
    }, 500);
  };

  render() {
    return   <Container>
    <Block style={{ marginBottom: theme.SIZES.BASE }}>
      <Header back search title="Modares App" navigation={this.props.navigation} />
    </Block>
    <ScrollView>
    <Categories name="Tawjihi"/>
    <Categories name="University"/>
    <Categories name="Schools"/>
    <Categories name="Programming"/>
    <Categories name="Beauty"/>
    <Categories name="Draw"/>
    <Categories name="Music"/>
</ScrollView>
      </Container>;
  }
}
