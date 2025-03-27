import React from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import SpeakerForm from "./SpeakerForm";
import { speakerBackgroundImage } from "../../assets";

export const BlockJoinUsSpeaker: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box position="relative">
      <Box
        className="block block--dark"
        padding="6rem 2rem 6rem 2rem"
        // bg={useColorModeValue(
        //   "linear-gradient(45deg, #685ACD, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
        //   "linear-gradient(80deg, #000C14, #F8002F)"
        // )}
        position="absolute"
        top={0}
        width="100%"
      >
        <Box
          className="block__header container"
          textAlign={{ base: "center", lg: "center" }}
          maxWidth="1140px"
          margin="0 auto"
        >
          <Text
            className="h2 block__heading"
            color={useColorModeValue("#F1F1F1", "#fff")}
            fontSize={{ base: "2.8rem", lg: "4rem" }}
            fontWeight="bold"
            lineHeight="1.2"
          >
            {t("joinUsSpeakerPageTitle")}
          </Text>
          <Text
            className="p"
            marginTop={10}
            color={useColorModeValue("gray.100", "gray.100")}
            fontSize={{ base: "1.5rem", lg: "2.1rem" }}
          >
            {t("joinUsSpeakerPageSubTitle")}
          </Text>
        </Box>
      </Box>

      <Box
        className="block block--dark block--skewed-right block-showcase aos-animate"
        position="relative"
        overflow="hidden"
        // height="190vh"
        style={{
          position: "relative",
        }}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          style={{
            backgroundImage: `url(${speakerBackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            // filter: "blur(5px)",
            zIndex: -1,
          }}
        ></Box>

        <Box
          justifyContent={{ base: "center", lg: "left" }}
          display="flex"
          height="100%"
          padding="3rem"
          paddingTop={{ base: "35rem" }}
          paddingLeft={{ lg: "15rem" }}
        >
          <SpeakerForm />
        </Box>
      </Box>
    </Box>
  );
};

// export default BlockJoinusSpeaker;
