import styled from "styled-components";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  height: 80px;
  padding: 0 30px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.05);
  background-color: #fff;
`;

export const FooterButton = styled(TouchableOpacity)`
  width: auto;
  height: 50%;

  align-items: center;
  justify-content: space-around;
`;

export const FooterTextUnactive = styled.Text`
  margin-top: 15px;

  font-size: 10px;
  font-weight: bold;
  color: #c2c1cf;
`;

export const FooterTextActive = styled.Text`
  margin-top: 15px;

  font-size: 10px;
  font-weight: bold;
  color: #3a3b3f;
`;
