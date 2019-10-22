import React from "react";
import { Platform ,ScrollView} from "react-native";
import styled from "styled-components";
import Avatar from "../components/Avatar";
import Colors from "../../Constants/Colors";
import ProfileLink from "../components/ProfileLink";
import Tutors from "../components/Tutors";
import Message from "../components/Message";

const Container = styled.View`
  background-color: white;
  flex: 1;
`;

const ProfileHeader = styled.View`
  box-shadow: 0px 5px 5px rgba(60, 60, 60, 0.1);
  elevation: 4;
  background-color: white;
  padding: 30px 20px;
  padding-top: 65px;
  align-items: center;
  width: 100%;
`;
const Des = styled.View`
  box-shadow: 0px 5px 5px rgba(60, 60, 60, 0.1);
  elevation: 4;
  background-color: white;
  padding: 30px 20px;
  padding-top: 20px;
  align-items: center;
  width: 100%;
`;
const NamePrice = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const NamePriceText = styled.Text`
  font-size: 24px;
  color: ${Colors.blackColor};
  font-weight: 600;
`;
const AvatarContainer = styled.View`
  margin-bottom: 20px;
`;

const Name = styled.Text`
  font-weight: 600;
  color: ${Colors.blackColor};
  font-size: 24px;
  margin-bottom: 5px;
`;

const Bio = styled.Text`
  margin-bottom: 20px;
  color: ${Colors.greyColor};
`;
const Description = styled.Text`
  margin-bottom: 25px;
  color: ${Colors.greyColor};
`;
const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: rgba(151, 151, 151, 0.2);
  margin-bottom: 30px;
`;

const DataContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;

const DataPointContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-horizontal:20;
`;

const DataPointNumber = styled.Text`
  color: ${Colors.blackColor};
  margin-bottom: 3.5px;
  align-items: center;
`;

const DataPointName = styled.Text`
  color: ${Colors.greyColor};
  font-size: 12px;
`;

const LinksList = styled.ScrollView``;

const ProfileScreenPresenter = () => (
  <Container>
  <ScrollView>
    <ProfileHeader>
      <AvatarContainer>
        <Avatar
          size="lg"
          source={{uri:'https://www.best4geeks.com/wp-content/uploads/2018/07/30-cute-girl-facebook-profile-picture-1.jpg'}}
        />
      </AvatarContainer>
      <Name>Sami Hamdan</Name>
      <Bio>C++ Tutor</Bio>
      <Divider />
      <DataContainer>
        <DataPointContainer>
          <DataPointNumber>425</DataPointNumber>
          <DataPointName>Lessons</DataPointName>
        </DataPointContainer>
        <DataPointContainer>
          <DataPointNumber>4.5</DataPointNumber>
          <DataPointName>Avg. Rating</DataPointName>
        </DataPointContainer>
        <DataPointContainer>
          <DataPointNumber>20m</DataPointNumber>
          <DataPointName>Resp. Time</DataPointName>
        </DataPointContainer>
      </DataContainer>

    </ProfileHeader>
    <Des>
<NamePrice>
  <NamePriceText>Description</NamePriceText>
</NamePrice>
<Description>
  Selling my 2017 DJI Spark. Barely used, pretty new in condition and
  its the “Fly More Combo". No Negotiations please.
</Description>

</Des>
    <Des>
    <NamePrice>
      <NamePriceText>Availability</NamePriceText>
    </NamePrice>
    <DataContainer>
<ScrollView horizontal={true}>
      <DataPointContainer>
        <DataPointNumber>9 Am-10 Pm</DataPointNumber>
        <DataPointName>Saturday</DataPointName>
      </DataPointContainer>
      <DataPointContainer>
        <DataPointNumber>9 Am-10 Pm</DataPointNumber>
        <DataPointName>Sunday</DataPointName>
      </DataPointContainer>
      <DataPointContainer>
        <DataPointNumber>9 Am-10 Pm</DataPointNumber>
        <DataPointName>Monday</DataPointName>
      </DataPointContainer>
      <DataPointContainer>
        <DataPointNumber>9 Am-10 Pm</DataPointNumber>
        <DataPointName>Tuesday</DataPointName>
      </DataPointContainer>
      <DataPointContainer>
        <DataPointNumber>9 Am-10 Pm</DataPointNumber>
        <DataPointName>Wednesday</DataPointName>
      </DataPointContainer>
      <DataPointContainer>
        <DataPointNumber>9 Am-10 Pm</DataPointNumber>
        <DataPointName>Thursday</DataPointName>
      </DataPointContainer>
      <DataPointContainer>
        <DataPointNumber>9 Am-10 Pm</DataPointNumber>
        <DataPointName>Friday</DataPointName>
      </DataPointContainer>
      </ScrollView>
    </DataContainer>

    </Des>
    <Des>
    <NamePrice>
      <NamePriceText>Reviews</NamePriceText>
    </NamePrice>
    <Message
      userAvatar={{uri:'https://www.blackboard.com/images/223/Analytics-Illustrations_rv1_Analytics-for-Learn_tcm223-70032.jpg'}}
      name="Keith Mills"
      timeAgo="24m ago"
      preview="Hey, would you be interested in ..."
    />
    <Message
      userAvatar={{uri:'https://www.blackboard.com/images/223/Analytics-Illustrations_rv1_Analytics-for-Learn_tcm223-70032.jpg'}}
      name="Keith Mills"
      timeAgo="24m ago"
      preview="Hey, would you be interested in ..."


    />
    </Des>
</ScrollView>
<Des>
<Tutors
  name="30$/hr"
/>
</Des>

  </Container>
);

export default ProfileScreenPresenter;
