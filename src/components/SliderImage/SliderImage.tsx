import React, { useState } from "react";
import { Box, Image, Text, useBreakpointValue, useColorModeValue, VStack, Link } from "@chakra-ui/react";
import { slides as originalSlides } from "./data";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

const SliderImage: React.FC = () => {
    const { t, i18n } = useTranslation();

    const slides = originalSlides.map(item => ({
        ...item,
        firstName: t(item.firstName ?? "First Name"),
        lastName: t(item.lastName ?? "Last Name"),
        fullName: t(item.fullName ?? "Full Name"),
        role: t(item.role ?? "Role"),
    }));

    const isLargeScreen = useBreakpointValue({ base: false, lg: true });

    const titleLightColor = useColorModeValue("white", "white");
    const subTitleLightColor = useColorModeValue("#16F8B6", "#16F8B6");
    const darkColor = useColorModeValue("red", "red");
    const strokeColor = useColorModeValue("gray", "gray");

    const sxTitle = {
        WebkitTextStroke: `1px ${strokeColor}`,
        textStroke: `1px ${darkColor}`,
        color: titleLightColor,
    };

    const sxSubTitle = {
        WebkitTextStroke: `1px ${strokeColor}`,
        textStroke: `1px ${darkColor}`,
        color: subTitleLightColor,
    };

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
    const [isHoveredButton, setIsHoveredButton] = useState(false);

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleHoverButton = () => {
        setIsHoveredButton(true);
    };

    const handleUnHoverButton = () => {
        setIsHoveredButton(false);
    };

    return (
        <Box
            position="relative"
            width="100%"
            // height={isLargeScreen ? "80vh" : "auto"}
            bg={useColorModeValue("#000", "#000")}
            display="flex"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            padding={isLargeScreen ? "0" : "20px 20px"}
            paddingY={{ base: "8rem", lg: "8rem" }}
        >
            {isLargeScreen ? (
                <>
                    <Box
                        width={{ base: "90%", md: "90%", lg: "90%", xl: "75%" }}
                        maxWidth="900px"
                        display="flex"
                        justifyContent="center"
                    >
                        <VStack
                            position="relative"
                            width="100%"
                            height="100%"
                        >
                            <Box
                                display="flex"
                                justifyContent="space-around"
                                width="100%"
                                overflow="hidden"
                            >
                                {slides.map((slide, index) => (
                                    <Box
                                        key={slide.lastName}
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        flex={hoveredIndex === index ? "1 1 600px" : "0 1 60px"}
                                        height="500px"
                                        margin="0 5px"
                                        bg="#000"
                                        transition="flex 1.6s cubic-bezier(0.3, 1, 0.32, 1)"
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        // onMouseLeave={handleMouseLeave}
                                        overflow="hidden"
                                    >
                                        <Image
                                            src={slide.imageSrc}
                                            alt={slide.fullName}
                                            width="100%"
                                            height="100%"
                                            objectFit="cover"
                                        />
                                        <VStack
                                            position="absolute"
                                            bottom="10%"
                                            gap={4}
                                        >
                                            <Text
                                                fontSize="2.4rem"
                                                fontWeight="bold"
                                                fontFamily="'Rubik', sans-serif"
                                                dir="rtl"
                                                opacity={hoveredIndex === index ? 1 : 0}
                                                transition={`opacity ${hoveredIndex === index ? '1s' : '0.2s'} ease-in-out`}
                                                pointerEvents="none"
                                                maxWidth="25rem"
                                                align="center"
                                            // sx={sxTitle}
                                            >
                                                {slide.fullName}
                                            </Text>
                                        </VStack>
                                    </Box>
                                ))}
                            </Box>
                        </VStack>
                    </Box>
                </>
            ) : (
                <>
                    <Box
                        position="relative"
                        width="100%"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        minHeight="100vh"
                    >
                        <Box
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                            width="100%"
                            overflow="hidden"
                        >
                            {slides.map((slide, index) => (
                                <Box
                                    key={slide.lastName}
                                    position="relative"
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    height={hoveredIndex === index ? "340px" : "50px"}
                                    width="100%"
                                    margin="5px 0"
                                    bg="#000"
                                    transition="height 1.6s cubic-bezier(0.3, 1, 0.32, 1)"
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    // onMouseLeave={handleMouseLeave}
                                    overflow="hidden"
                                >
                                    <Image
                                        src={slide.imageSrc}
                                        alt={slide.fullName}
                                        width="100%"
                                        height="100%"
                                        objectFit="cover"
                                    />
                                    <VStack
                                        position="absolute"
                                        bottom="10%"
                                        gap={4}
                                        maxWidth="80%"
                                    >
                                        {/* <Link
                                            as={RouterLink}
                                            to={slide.profileSrc}
                                            _hover={{ textDecoration: 'none' }}
                                        > */}
                                        <Text
                                            color="white"
                                            fontSize="2rem"
                                            fontWeight="bold"
                                            fontFamily="'Rubik', sans-serif"
                                            dir="rtl"
                                            opacity={hoveredIndex === index ? 1 : 0}
                                            transition={`opacity ${hoveredIndex === index ? '1s' : '0.3s'} ease-in-out`}
                                            pointerEvents="none"
                                            align="center"
                                        // sx={sxTitle}
                                        >
                                            {slide.fullName}
                                        </Text>
                                        {/* </Link> */}
                                    </VStack>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default SliderImage;


