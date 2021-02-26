import React from "react";
import { ContainerFunctionButtons } from "./styles";
import { ScrollView } from "react-native-gesture-handler";

import Header from "../../components/HeaderResume";
import FunctionButton from "../../components/FunctionButton";
import SendPayment from "../../components/SendPayment";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <ContainerFunctionButtons>
          <FunctionButton icon="back" text="Transferir" />
          <FunctionButton icon="barcode" text="Pagar Conta" />
          <FunctionButton icon="arrowdown" text="Adicionar Fundos" />
          <FunctionButton icon="retweet" text="Converter" />
          <FunctionButton icon="antdesign" text="Pix" />
          <FunctionButton icon="message1" text="Cobrar" />
          <FunctionButton icon="upload" text="Saque em ATM" />
        </ContainerFunctionButtons>
        <SendPayment />
      </ScrollView>
      <Footer />
    </>
  );
};

export default Home;
