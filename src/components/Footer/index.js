import React from "react";
import { Text } from "react-native";
import {
  Container,
  FooterButton,
  FooterText,
  FooterTextActive,
  FooterTextUnactive,
} from "./styles";

import Icon from "react-native-vector-icons/AntDesign";

const Footer = () => {
  return (
    <Container>
      <FooterButton>
        <Icon name="appstore1" size={28} color="#3A3B3F"></Icon>
        <FooterTextActive>Visão Geral</FooterTextActive>
      </FooterButton>
      <FooterButton>
        <Icon name="linechart" size={28} color="#C2C1CF"></Icon>
        <FooterTextUnactive>Atividade</FooterTextUnactive>
      </FooterButton>
      <FooterButton>
        <Icon name="wallet" size={28} color="#C2C1CF"></Icon>
        <FooterTextUnactive>Carteiras</FooterTextUnactive>
      </FooterButton>
      <FooterButton>
        <Icon name="setting" size={28} color="#C2C1CF"></Icon>
        <FooterTextUnactive>Config</FooterTextUnactive>
      </FooterButton>
    </Container>
  );
};

export default Footer;
