import { TouchableOpacity } from "react-native";
import styled from "styled-components";

export const Container = styled(TouchableOpacity)`
  width: 45%;
  height: 120px;
  padding: 20px;
  margin: 20px 10px 0;

  align-items: flex-start;
  justify-content: space-around;

  border-radius: 15px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.05);
  background-color: #fff;
`;

export const TextButton = styled.Text`
  padding: 20px 0 0px;

  font-size: 16px;
  font-weight: bold;
  color: #040404;
`;
