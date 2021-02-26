import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 200px;
  padding: 0 15px;

  justify-content: flex-start;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.05);
  background-color: #fff;
`;

export const ContainerButtons = styled.View`
  margin-bottom: 5px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderButton = styled(TouchableOpacity)`
  width: 60px;
  height: 60px;
  margin-top: 20px;

  justify-content: center;
  align-items: center;

  border-radius: 15px;
  background-color: #f9f9fd;
`;

export const PictureContainer = styled.View`
  align-items: center;
`;

export const PictureButton = styled(TouchableOpacity)`
  width: 65px;
  height: 65px;

  justify-content: center;
  align-items: center;

  border-radius: 15px;
  background-color: #f9f9fd;
`;

export const ProfilePicture = styled.Image`
  width: 65px;
  height: 65px;

  border-radius: 15px;
`;

export const Infos = styled.View`
  margin-top: 5px;

  align-self: center;
  justify-content: flex-start;
  align-items: center;
`;

export const BalanceInfo = styled.Text`
  margin-bottom: 5px;

  font-size: 12px;
  color: #828388;
`;

export const BalanceDetailsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const EyeButton = styled(TouchableOpacity)`
  margin-top: 6px;
  margin-right: 10px;
`;

export const BalanceValue = styled.Text`
  margin-bottom: 10px;

  font-size: 26px;
  font-weight: bold;
  color: #171721;
`;

export const BalanceBlur = styled.View`
  width: 154px;
  height: 31.5px;
  margin-bottom: 10px;

  border-radius: 5px;
  background-color: #f9f9fd;
`;

export const BalanceCurrency = styled.Text`
  margin-top: 5px;
  margin-left: 2px;

  font-size: 22px;
  font-weight: 300;
`;

export const BalanceYield = styled.Text`
  padding: 3px 6px;

  font-size: 12px;
  color: #59af96;
  background-color: #ecfaf5;
`;
