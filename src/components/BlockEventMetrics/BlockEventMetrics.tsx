import React, { useEffect } from "react";
import {
  Box,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MetricCard } from "./MetricCard";

export const BlockEventMetrics: React.FC = () => {
  const { t, i18n } = useTranslation();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      padding={{ base: "4.5rem 1.5rem", lg: "6rem 2rem" }}
      bg={useColorModeValue("#F0F0F0", "gray.800")}
      overflow="hidden"
    >
      <Box
        className="header_container"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        maxWidth="100rem"
        width="100%"
        marginBottom="2rem"
      >
        <Text
          className="h2"
          color={useColorModeValue("gray.800", "#16F8B6")}
          marginBottom="2rem"
          fontSize={{ base: "2.8rem", lg: "4rem" }}
          fontWeight="bold"
          lineHeight="1.1"
        >
          {t("statisticsTitle")}
        </Text>

        <Text
          className="p"
          color={useColorModeValue("gray.700", "white")}
          marginTop="0"
          fontSize={{ base: "1.5rem", lg: "2.1rem" }}
          lineHeight="1.1"
          paddingBottom={{ lg: "2rem" }}
        >
          {t("statisticsSubTitle")}
        </Text>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        maxWidth={{ md: "550px", lg: "110rem" }}
      >
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 3, lg: 3 }}
          spacing={{ base: "3rem", md: "4rem", lg: "3rem" }}
          padding="3rem 0"
          alignItems="center"
          width="100%"
        >
          {[
            {
              endNumber: 6,
              text: t("speakers"),
              numberColor: "#4CCFAF",
              borderColor: "#409F8F",
              hasPlusSign: false,
            },
            {
              endNumber: 100,
              text: t("attendees"),
              numberColor: "#A679FF",
              borderColor: "#A679FF",
              hasPlusSign: true,
            },
            {
              endNumber: 6,
              text: t("coreTeam"),
              numberColor: "#FF5FCC",
              borderColor: "#EF40BA",
              hasPlusSign: false,
            },
            // {
            //   endNumber: 3,
            //   text: t("Sponsors"),
            //   numberColor: "#FF9F24",
            //   borderColor: "#FF9F24",
            //   hasPlusSign: false,
            // },
          ].map(({ endNumber, text, numberColor, borderColor, hasPlusSign }, index) => (
            <MetricCard
              key={index}
              width={{ base: "13rem", md: "18rem", lg: "15rem", xl: "18rem" }}
              height={{ base: "13rem", md: "18rem", lg: "15rem", xl: "18rem" }}
              endNumber={endNumber}
              text={text}
              hasPlusSign={hasPlusSign}
              textSize={{ base: "1.8rem", md: "1.8rem", lg: "1.8rem", xl: "1.8rem" }}
              textColor={{ light: "white", dark: "white" }}
              numberFontSize={{ base: "2.8rem", md: "3.5rem", lg: "3.2rem", xl: "3.5rem" }}
              borderColor={{
                light: `linear-gradient(to left, transparent, ${borderColor}, transparent)`,
                dark: `linear-gradient(to left, transparent, ${borderColor}, transparent)`,
              }}
              numberColor={numberColor}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
