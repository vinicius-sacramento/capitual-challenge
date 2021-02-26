import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Container, TextButton } from "./styles";

import Icon from "react-native-vector-icons/AntDesign";

Icon.loadFont();

const FunctionButton = ({ icon, text }) => {
  return (
    <Container>
      <Icon name={icon} size={24} color="#3C88BA" />
      <TextButton>{text}</TextButton>
    </Container>
  );
};

export default FunctionButton;
