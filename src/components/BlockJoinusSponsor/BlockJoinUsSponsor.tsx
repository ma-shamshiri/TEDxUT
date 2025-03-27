import React from "react";
import {
  Box,
  Text,
  useColorModeValue,
  useColorMode,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import SponsorForm from "./SponsorForm";
import { sponsorBackgroundImage } from "../../assets";

export const BlockJoinusSponsor: React.FC = () => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();

  return (
    <>
      <Box position={"relative"}>
        <Box
          className="block block--dark block--skewed-right block-showcase aos-animate"
          bg={useColorModeValue("gray.100", "#1A202C")}
          overflow={"hidden"}
        >
          <Box
            className="block block--dark"
            padding="6rem 2rem 6rem 2rem"
            // bg={useColorModeValue(
            //   "linear-gradient(45deg, #685ACD, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
            //   "linear-gradient(80deg, #000C14, #F8002F)"
            // )}
            bg={useColorModeValue(
              "linear-gradient(180deg, #F1F1F1, #FFFFFF)",
              "linear-gradient(180deg, #000000, #171923)"
            )}
          >
            <Box
              className="block__header container"
              textAlign={{ base: "center", lg: "center" }}
              maxWidth="1140px"
              margin="0 auto"
            >
              <Text
                className="h2 block__heading"
                color={useColorModeValue("gray.800", "#fff")}
                fontSize={{ base: "2.8rem", lg: "4rem" }}
                fontWeight="bold"
                lineHeight="1.1"
              >
                {t("joinUsSponsorPageTitle")}
              </Text>
              <Text
                className="p"
                marginTop={10}
                color={useColorModeValue("gray.600", "#fff")}
                fontSize={{ base: "1.5rem", lg: "2.1rem" }}
              >
                {t("joinUsSponsorPageSubTitle")}
              </Text>
            </Box>
          </Box>
          <Stack
            direction={{ base: "column", md: "column", xl: "row" }}
            width="100%"
            height="100%"
            spacing={0}
          >
            {/* Left Box */}
            <Box
              flex={{ base: "1", lg: "1.5" }}
                // backgroundColor={useColorModeValue("black", "gray.800")}
                backgroundColor={useColorModeValue("white", "gray.900")}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                display="flex"
                justifyContent="center"
                // width="100%"
                // height="100%"
              >
                <Image
                  src={sponsorBackgroundImage}
                  width="80%"
                  // height="50%"
                  objectFit="fill"
                  opacity={colorMode === "dark" ? 0.8 : 1}
                    // style={{ filter: "blur(1px)" }}
                  borderRadius="6rem"
                  boxShadow="0 0 30px 1px black"
                />
              </Box>
            </Box>

            {/* Right Box */}
            <Box
              flex="1"
              //   backgroundColor={useColorModeValue("#747679", "#747679")}
              backgroundColor={useColorModeValue("white", "gray.900")}
              display="flex"
              justifyContent="center"
              //   alignItems="center"
            >
              <Box display="flex" justifyContent="center" padding={50}>
                <SponsorForm />
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

// export default BlockJoinusSponsor;
