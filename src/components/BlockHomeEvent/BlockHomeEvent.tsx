import React from "react";
import {
    Box,
    Flex,
    Text,
    Button,
    useColorModeValue,
    VStack,
    useDisclosure,
} from "@chakra-ui/react";
import { starsImage } from "../../assets";
import { useTranslation } from "react-i18next";
import Typed from "react-typed";
import CountdownTimer from "../CountdownTimer";
import QuizModal from "../QuizModal";
import { motion } from "framer-motion";
import TeamMemberCarousel from "../TeamMemberCarousel";


const BlockHomeEvent: React.FC = () => {
    const { t, i18n } = useTranslation();

    const eventStartTime = new Date("2025-04-10T10:00:00-08:00");

    const { isOpen, onOpen, onClose } = useDisclosure();

    const overlayBg = useColorModeValue(
        "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))",
        "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))"
    );
    const glassBg = useColorModeValue("rgba(0, 0, 0, 0.5)", "rgba(23, 25, 35, 0.6)");

    return (
        <Box
            position="relative"
            width="100%"
            minHeight="93vh"
            height="100vh"
            // paddingBottom="4rem"
            bg="#000"
            // bg={useColorModeValue(
            //     "linear-gradient(180deg, #6868f7, #6868f7, #a6a6ff, #a6a6ff)",
            //     "linear-gradient(180deg, #000000 25%,   #0e0e29 50%,   #1a1a4d 75%)"
            // )}
            // backgroundImage={hoemHero2}
            // backgroundPosition="center"
            // backgroundRepeat="no-repeat"
            overflow="hidden"
        >
                                <TeamMemberCarousel />

            <Box
                width="100%"
                height="100%"
                backgroundImage={starsImage}
                backgroundSize={{ base: "contain", lg: "cover" }}
            >
                {/* Main content container */}
                <Flex
                    position="relative"
                    zIndex={2}
                    direction="column"
                    align="center"
                    justify="center"
                    width="100%"
                    height="100%"
                    paddingX={4}
                    textAlign="center"
                >
                    <CountdownTimer eventStartTime={eventStartTime} />
                    <Box
                        position="absolute"
                        top={{ base: "45%", md: "45%", lg: "45%", xl: "40%" }}
                        left="50%"
                        transform="translate(-50%, -50%)"
                        bg={glassBg}
                        backdropFilter="blur(1px)"
                        width={{ base: "33rem", lg: "40rem" }}
                        height={{ base: "33rem", lg: "40rem" }}
                        paddingX={{ base: 10, md: "5rem" }}
                        paddingY={{ base: 5, md: "2rem" }}
                        marginX="auto"
                        borderRadius="100%"
                        boxShadow="lg"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        border={"1px solid black"}
                    >
                        <Box
                            fontSize={{
                                base: i18n.language === "fa" ? "2.3rem" : "2.8rem",
                                md: i18n.language === "fa" ? "2rem" : "2.8rem",
                                lg: i18n.language === "fa" ? "2.5rem" : "3.5rem",
                                xl: i18n.language === "fa" ? "2.5rem" : "3.5rem"
                            }}
                            fontWeight="bold"
                            fontFamily={i18n.language === "fa" ? "'YekanBakh', sans-serif" : "Big Shoulders Display"}
                            dir={i18n.language === "fa" ? "rtl" : "ltr"}
                            letterSpacing="0.7px"
                            color="#fff"
                            marginBottom={{ base: "1rem" }}
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
                            fontSize={{
                                base: i18n.language === "fa" ? "1.8rem" : "2.2rem",
                                md: i18n.language === "fa" ? "2rem" : "2.3rem",
                                lg: i18n.language === "fa" ? "2rem" : "2.7rem",
                                xl: i18n.language === "fa" ? "2rem" : "2.5rem"
                            }}

                            fontWeight="bold"
                            fontFamily={i18n.language === "fa" ? "'YekanBakh', sans-serif" : "Big Shoulders Display"}
                            dir={i18n.language === "fa" ? "rtl" : "ltr"}
                            letterSpacing="0.7px"
                            color="silver"
                            marginBottom="3rem"
                        >
                            {t("eventTime")}
                        </Text>

                        <VStack
                            fontFamily={i18n.language === "fa" ? "'YekanBakh', sans-serif" : ""}
                            dir={i18n.language === "fa" ? "rtl" : "ltr"}
                            fontSize={{
                                base: i18n.language === "fa" ? "1.5rem" : "1.7rem",
                                md: i18n.language === "fa" ? "1.5rem" : "1.7rem",
                                lg: i18n.language === "fa" ? "1.8rem" : "1.9rem",
                                xl: i18n.language === "fa" ? "1.8rem" : "1.8rem"
                            }}
                            color="#fff"
                        >
                            <Text fontWeight="bold" color="#09e859">
                                {t("eventAddressLine1")}
                            </Text>
                            <Text mb={10}>
                                {t("eventAddressLine2")}
                            </Text>
                        </VStack>
                    </Box>
                </Flex>
            </Box>
            <Flex
                position="absolute"
                bottom={{ base: "-5%", md: "0%", lg: "-6%", xl: "-4%" }}
                left="50%"
                transform="translate(-50%, -50%)"
                flexDirection="column"
                width="100%"
                gap="1rem"
                fontFamily={i18n.language === "fa" ? "'YekanBakh', sans-serif" : ""}
                // dir={i18n.language === "fa" ? "rtl" : "ltr"}
                fontWeight="bold"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                zIndex={2}
                paddingX={{ base: "3.5rem" }}
            >
                <Text
                    fontSize={{ base: "2.1rem", md: "2.6rem", lg: "2.8rem", xl: "3.1rem" }}
                    color="gold"
                >
                    {t("quizModalButtonTitle")}
                </Text>
                <Text
                    fontSize={{ base: "1.7rem", md: "2rem", lg: "2.2rem", xl: "2.2rem" }}
                    color="#fff"
                >
                    {t("quizModalButtonSubTitle")}
                </Text>
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 7 }}
                    whileTap={{ scale: 1, rotate: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 5,
                    }}
                >
                    <Button
                        bg="#CB0000"
                        fontSize={{ base: "2rem", md: "2.2rem", lg: "2.5rem", xl: "2.5rem" }}
                        padding={{ base: "2.8rem", md: "2.8rem", lg: "3.7rem", xl: "3.8rem" }}
                        marginTop="2rem"
                        borderRadius="10px"
                        onClick={onOpen}
                        _hover={{
                            bg: "gold",
                            color: "#000"
                        }}
                    >
                        {t("startTheTest")}
                    </Button>
                </motion.div>
                <QuizModal isOpen={isOpen} onClose={onClose} />
                {/* Other homepage content */}
            </Flex>
        </Box>
    );
};

export default BlockHomeEvent;
