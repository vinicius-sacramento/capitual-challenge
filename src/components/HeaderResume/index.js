import React, { useState } from "react";

import IconAnt from "react-native-vector-icons/AntDesign";
import IconFeather from "react-native-vector-icons/Feather";
import IconFoundation from "react-native-vector-icons/Foundation";
IconAnt.loadFont();
IconFeather.loadFont();
IconFoundation.loadFont();

import {
  Container,
  HeaderButton,
  ContainerButtons,
  PictureButton,
  Infos,
  BalanceInfo,
  BalanceValue,
  BalanceYield,
  ProfilePicture,
  EyeButton,
  BalanceDetailsContainer,
  BalanceCurrency,
  BalanceBlur,
  PictureContainer,
} from "../HeaderResume/styles";

const HeaderResume = () => {
  const [isShowing, setIsShowing] = useState(true);

  return (
    <Container>
      <ContainerButtons>
        <HeaderButton>
          <IconAnt name="appstore-o" size={24} color="#35343A" />
        </HeaderButton>
        <PictureContainer>
          <IconFoundation name="crown" color="#F9B237" size={18} />
          <PictureButton>
            <ProfilePicture source={require("../../assets/profilepic.png")} />
          </PictureButton>
        </PictureContainer>
        <HeaderButton>
          <IconFeather name="bell" size={24} color="#35343A" />
        </HeaderButton>
      </ContainerButtons>
      <Infos>
        <BalanceInfo>Saldo Total</BalanceInfo>
        <BalanceDetailsContainer>
          {isShowing ? (
            <>
              <EyeButton onPress={() => setIsShowing(!isShowing)}>
                <IconFeather name="eye-off" size={20} color="#77787D" />
              </EyeButton>
              <BalanceValue>2,584.54</BalanceValue>
              <BalanceCurrency>BRL</BalanceCurrency>
            </>
          ) : (
            <>
              <EyeButton onPress={() => setIsShowing(!isShowing)}>
                <IconFeather name="eye" size={20} color="#77787D" />
              </EyeButton>
              <BalanceBlur />
            </>
          )}
        </BalanceDetailsContainer>
        <BalanceYield>+3,42%</BalanceYield>
      </Infos>
    </Container>
  );
};

export default HeaderResume;
