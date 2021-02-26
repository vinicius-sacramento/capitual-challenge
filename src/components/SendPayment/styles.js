import styled from "styled-components";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  padding: 20px 15px 30px;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const SendPaymentText = styled.Text`
  margin-bottom: 30px;

  font-size: 20px;
  font-weight: bold;
  color: #7b7c8e;
`;

export const PictureButton = styled(TouchableOpacity)`
  width: 60px;
  height: 60px;

  align-items: center;
  justify-content: center;

  border-radius: 15px;
  background-color: #f9f9fd;
`;

export const ProfilePicture = styled.Image`
  width: 60px;
  height: 60px;

  border-radius: 15px;
`;

export const ReceiversName = styled.Text`
  margin-top: 10px;

  flex-direction: row;

  font-size: 11px;
  font-weight: bold;
  color: #030406;
`;

export const Everyone = styled.View`
  width: 60px;
  height: 60px;

  justify-content: center;
  align-items: center;

  border-radius: 15px;
  background-color: #f3f4f9;
`;
