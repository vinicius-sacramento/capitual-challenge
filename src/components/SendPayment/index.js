import React from "react";

import Icon from "react-native-vector-icons/AntDesign";
Icon.loadFont();

import {
  SendPaymentText,
  PictureButton,
  ProfilePicture,
  Container,
  ContainerButtons,
  ReceiversName,
  Everyone,
} from "./styles";

const SendPayment = () => {
  return (
    <Container>
      <SendPaymentText>Enviar Pagamento para</SendPaymentText>
      <ContainerButtons>
        <PictureButton>
          <ProfilePicture source={require("../../assets/profilepic.png")} />
          <ReceiversName>Vinícius</ReceiversName>
        </PictureButton>
        <PictureButton>
          <ProfilePicture source={require("../../assets/profilepic.png")} />
          <ReceiversName>Guilherme</ReceiversName>
        </PictureButton>
        <PictureButton>
          <ProfilePicture source={require("../../assets/profilepic.png")} />
          <ReceiversName>Vanessa</ReceiversName>
        </PictureButton>
        <PictureButton>
          <ProfilePicture source={require("../../assets/profilepic.png")} />
          <ReceiversName>Mariana</ReceiversName>
        </PictureButton>
        <PictureButton>
          <Everyone>
            <Icon name="plus" size={22} color="#666672" />
          </Everyone>
          <ReceiversName>Todos</ReceiversName>
        </PictureButton>
      </ContainerButtons>
    </Container>
  );
};

export default SendPayment;
