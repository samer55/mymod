import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Avatar from "./Avatar";
import Colors from "../../Constants/Colors";
import SmallButton from "./SmallButton";

import { Platform ,View} from "react-native";


const Column = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const DataContainer = styled.View`
  margin-left: 10px;
`;

const Name = styled.Text`
  font-weight: 500;
  font-size: 16px;
`;

const Rating = styled.Text`
  color: ${Colors.greyColor};
`;

const FirstButtonContainer = styled.View`
  margin-right: 2.5%;
`;

const Tutors = ({ avatarUrl, rating, name,onPress }) => (
  <View style={{justifyContent:'space-around',alignItems:'center',flexDirection:'row',borderTopWidth:0.2,width:'100%',padding:10}}>
      <DataContainer>
        <Name>{name}</Name>
      </DataContainer>
    <Column>
      <SmallButton onPress={onPress} text="Book Now" accent  />
    </Column>
  </View>
);

Tutors.propTypes = {
  avatarUrl: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default Tutors;
