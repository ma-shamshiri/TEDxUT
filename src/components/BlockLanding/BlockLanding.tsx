import React, { useEffect } from "react";
import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { concordiaHero13 } from "../../assets";
import { motion, useAnimation } from "framer-motion";
import CountdownTimer from "./CountdownTimer";
import Typed from "react-typed";
import { useTranslation } from "react-i18next";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const BlockLanding: React.FC = () => {
    const { t } = useTranslation();

    const eventStartTime = new Date("2025-03-28T09:00:00-08:00");

    const titleLightColor = useColorModeValue("#fff", "#fff");
    const darkColor = useColorModeValue("red", "red");
    const strokeColor = useColorModeValue("#000", "#000");

    const sxTitle = {
        WebkitTextStroke: `1px ${strokeColor}`,
        textStroke: `1px ${darkColor}`,
        color: titleLightColor,
    };


    // Animation controls for the letters
    const controlsT = useAnimation();
    const controlsE = useAnimation();
    const controlsD = useAnimation();
    const controlsX = useAnimation();

    // Variants for the blocks
    const blockVariants = {
        initial: { x: "0%" },
        animateLeft: {
            x: "-100%",
            transition: { ease: "easeInOut", duration: 2, delay: 3 },
        },
        animateRight: {
            x: "100%",
            transition: { ease: "easeInOut", duration: 2, delay: 3 },
        },
    };

    // Variants for the letters with spring effect
    const letterVariants = {
        fadeIn: { opacity: 1, scale: 1, transition: { duration: 1, delay: 1 } },
        moveVertical: (direction: "up" | "down") => ({
            y: direction === "up" ? "-35vh" : "35vh",
            transition: {
                type: "spring",
                stiffness: 32,
                damping: 20, // Smooth spring effect
                duration: 2,
            },
        }),
        moveHorizontal: (direction: "left" | "right") => ({
            x: direction === "left" ? "-50vw" : "50vw",
            transition: {
                type: "spring",
                stiffness: 30,
                damping: 30, // Smooth spring effect
                duration: 2,
            },
        }),
    };

    // Trigger animations sequentially
    useEffect(() => {
        async function animateLetters() {
            // Fade in the letters
            await Promise.all([
                controlsT.start("fadeIn"),
                controlsE.start("fadeIn"),
                controlsD.start("fadeIn"),
                controlsX.start("fadeIn"),
            ]);

            // Move vertically
            await Promise.all([
                controlsT.start(letterVariants.moveVertical("up")),
                controlsE.start(letterVariants.moveVertical("up")),
                controlsD.start(letterVariants.moveVertical("down")),
                controlsX.start(letterVariants.moveVertical("down")),
            ]);

            // Move horizontally
            await Promise.all([
                controlsT.start(letterVariants.moveHorizontal("left")),
                controlsE.start(letterVariants.moveHorizontal("right")),
                controlsD.start(letterVariants.moveHorizontal("left")),
                controlsX.start(letterVariants.moveHorizontal("right")),
            ]);
        }

        animateLetters();
    }, [controlsT, controlsE, controlsD, controlsX]);

    return (
        <Box
            position="relative"
            width="100%"
            height={{ base: "93.5vh", lg: "93.5vh" }}
            overflow="hidden"
        >
            {/* Background Video */}
            {/* <Box
                as="video"
                autoPlay
                muted
                loop
                playsInline
                sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: -1,
                }}
            >
                <source src={videoObject} type="video/mp4" />
            </Box> */}


            <CountdownTimer eventStartTime={eventStartTime} />

            <Box
                textAlign="center"
                width="100%"
                position="absolute"
                top="45%"
                left="50%"
                transform="translate(-50%, -50%)"
                margin="0 auto"
            >
                <Box
                    color={useColorModeValue("gray.800", "#fff")}
                    marginBottom="1rem"
                    fontSize={{ base: "2.8rem", lg: "6rem" }}
                    fontWeight="1000"
                    lineHeight="1.1"
                    paddingY="1rem"
                    height={{ base: "8rem", md: "initial", lg: "initial" }}
                    sx={sxTitle}
                >
                    <Typed
                        strings={[t("landingPageTitle")]}
                        typeSpeed={50}
                        backSpeed={20}
                        loop
                        backDelay={3000}
                    />
                </Box>
            </Box>

            <Image
                src={concordiaHero13}
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                objectFit="cover"
                zIndex={-1}
                filter={"blur(5px)"}
            />

            {/* Background Blocks */}
            <MotionBox
                bg="black"
                w="50%"
                h="100%"
                position="absolute"
                top={0}
                left={0}
                zIndex={1}
                variants={blockVariants}
                initial="initial"
                animate="animateLeft"
            />
            <MotionBox
                bg="#000"
                w="50%"
                h="100%"
                position="absolute"
                top={0}
                right={0}
                zIndex={1}
                variants={blockVariants}
                initial="initial"
                animate="animateRight"
            />

            {/* Letters */}
            <Flex
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                zIndex={2}
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center"
                w="250px"
                h="250px"
            >
                <MotionText
                    fontSize="6em"
                    fontWeight="bold"
                    color="#fff"
                    variants={letterVariants}
                    initial="initial"
                    animate={controlsT}
                    position="absolute"
                    top="0"
                    left="0"
                >
                    T
                </MotionText>
                <MotionText
                    fontSize="6em"
                    fontWeight="bold"
                    color="#fff"
                    variants={letterVariants}
                    initial="initial"
                    animate={controlsE}
                    position="absolute"
                    top="0"
                    right="0"
                >
                    E
                </MotionText>
                <MotionText
                    fontSize="6em"
                    fontWeight="bold"
                    color="#fff"
                    variants={letterVariants}
                    initial="initial"
                    animate={controlsD}
                    position="absolute"
                    bottom="0"
                    left="0"
                >
                    D
                </MotionText>
                <MotionText
                    fontSize="6em"
                    fontWeight="bold"
                    color="red"
                    variants={letterVariants}
                    initial="initial"
                    animate={controlsX}
                    position="absolute"
                    bottom="0"
                    right="0"
                >
                    X
                </MotionText>
            </Flex>
        </Box>
    );
};

export default BlockLanding;
