// Event.tsx

import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  useColorModeValue,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { salon5 } from "../../assets";
import { useTranslation } from "react-i18next";
import Typed from "react-typed";
import CountdownTimer from "../CountdownTimer";


const BlockEvent: React.FC = () => {
  const { t } = useTranslation();

  const eventStartTime = new Date("2025-03-30T09:00:00-08:00");

  const tickets = [
    {
      title: "studentPass",
      price: "$7.99",
      description: "onlyForStudents",
      link: "https://www.zeffy.com/en-CA/ticketing/tedx-concordia-university",
    },
    {
      title: "generalAdmission",
      price: "$14.99",
      description:
        "fullAccessToAllTalks",
      link: "https://www.zeffy.com/en-CA/ticketing/tedx-concordia-university",
    },
    {
      title: "frontRowSeats",
      price: "$19.99",
      description: "premiumSeating",
      link: "https://www.zeffy.com/en-CA/ticketing/tedx-concordia-university",
    },
  ];

  const overlayBg = useColorModeValue(
    "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))",
    "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))"
  );
  const glassBg = useColorModeValue("rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0.5)");
  const waveFill = useColorModeValue("#912338", "#232323");

  return (
    <Box
      position="relative"
      width="100%"
      minHeight="93vh"
      paddingBottom="4rem"
      bgColor={useColorModeValue("gray.50", "gray.800")}
      backgroundImage={salon5}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bgGradient: overlayBg,
        zIndex: 0,
      }}
      overflow="hidden"
    >
      {/* Decorative wave at the bottom */}
      <Box
        as="svg"
        viewBox="0 0 1440 320"
        position="absolute"
        bottom="0"
        left="0"
        width="100%"
        height="auto"
        zIndex={1}
      >
        <path
          fill={waveFill}
          fillOpacity="1"
          d="M0,192L48,192C96,192,192,192,288,208C384,224,480,256,576,266.7C672,277,768,267,864,256C960,245,1056,235,1152,197.3C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </Box>

      {/* Main content container */}
      <Flex
        position="relative"
        zIndex={2}
        direction="column"
        align="center"
        justify="center"
        w="100%"
        h="100%"
        px={4}
        textAlign="center"
      >
        <CountdownTimer eventStartTime={eventStartTime} />
        <Box
          marginTop={{ base: "13rem", md: "25rem", lg: "20rem" }}
          bg={glassBg}
          backdropFilter="blur(4px)"
          borderRadius="10px"
          p={{ base: 10, md: 10 }}
          maxW="1000px"
          mx="auto"
          boxShadow="lg"
        >
          <Box
            fontSize={{ base: "3rem", md: "5rem" }}
            fontWeight="bold"
            fontFamily="Big Shoulders Display"
            letterSpacing="0.7px"
            color="#fff"
          >
            <Typed
              strings={[t("eventDate")]}
              typeSpeed={50}
              backSpeed={20}
              loop
              backDelay={3000}
            />
          </Box>

          <Text
            fontSize={{ base: "2rem", md: "3rem" }}
            fontWeight="bold"
            fontFamily="Big Shoulders Display"
            letterSpacing="0.7px"
            color="#09e859"
            marginBottom="3rem"
          >
            10:00 AM - 2:00 PM
          </Text>

          <VStack>
            <Text
              fontSize={{ base: "1.7rem", md: "2rem" }}
              color="#fff"
            >
              1455 Blvd. De Maisonneuve Ouest
            </Text>
            <Text
              fontSize={{ base: "1.7rem", md: "2rem" }}
              color="#fff"
              mb={10}
            >
              Montreal, QC H3G 1M8, Canada
            </Text>
          </VStack>

          {/* Ticket Cards Grid */}
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={"3rem"}>
            {tickets.map((ticket, index) => (
              <Box
                key={index}
                bg="rgba(255,255,255,0.15)"
                border="1px solid rgba(255,255,255,0.2)"
                backdropFilter="blur(6px)"
                borderRadius="8px"
                padding="2rem"
                transition="transform 0.3s ease, box-shadow 0.3s ease"
                _hover={{
                  transform: "translateY(-10px)",
                  boxShadow: "0 0 15px rgba(0,0,0,0.3)",
                }}
              >
                <Text
                  fontSize="2rem"
                  fontWeight="bold"
                  color="#fff"
                  marginBottom="1.5rem"
                >
                  {t(ticket.title)}
                </Text>

                <Text
                  fontSize="2rem"
                  fontWeight="bold"
                  color="gold"
                  marginBottom="1.5rem"
                >
                  {ticket.price}
                </Text>

                <Text
                  fontSize="1.8rem"
                  color="#fff"
                  marginBottom="1.5rem"
                >
                  {t(ticket.description)}
                </Text>

                <Button
                  fontSize="1.7rem"
                  color="#fff"
                  bg="#CB0000"
                  padding="2rem"
                  borderWidth="1px"
                  borderColor="#CB0000"
                  borderRadius="8px"
                  _hover={{
                    bg: "#fff",
                    color: "#CB0000",

                  }}
                  onClick={() => window.open(ticket.link, "_blank")}
                >
                  {t("buyTicket")}
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
};

export default BlockEvent;
