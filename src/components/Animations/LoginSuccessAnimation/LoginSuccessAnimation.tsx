
import React from "react";
import Player from "lottie-react";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import loginSuccessAnimation from "../../../assets/animations/login_successful.json";
import { useTranslation } from "react-i18next";

const LoginSuccessAnimation = () => {
  const { t } = useTranslation();

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      position="fixed" // Make the animation fill the entire screen
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      bg={useColorModeValue("gray.200", "gray.800")}
      overflow="hidden"
      zIndex="1000"
      opacity="0.8"
    >
      <Player
        autoplay
        loop={false}
        animationData={loginSuccessAnimation}
        style={{ width: "300px", height: "300px" }}
      />
    </Flex>
  );
};

export default LoginSuccessAnimation;
