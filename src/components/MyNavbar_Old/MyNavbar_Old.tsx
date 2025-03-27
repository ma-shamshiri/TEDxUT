import React, { useEffect, useState } from "react";
import {
    Box,
    Flex,
    Image,
    Link,
    useBreakpointValue,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { tedxBlack, tedxWhite } from "../../assets";
import { useTranslation } from "react-i18next";
import ColorModeSwitch from "../Navigationbar/ColorModeSwitch";
import LanguageSwitcher from "../Navigationbar/LanguageSwitcher";
import MenuToggle from "../MenuToggle/MenuToggle";
import SliderText from "../SliderText";

const MotionBox = motion(Box);

const MyNavbar_Old: React.FC = () => {
    const { t } = useTranslation();

    const { colorMode } = useColorMode();

    const isLargeScreen = useBreakpointValue({ base: false, md: true });

    const tedxImg = colorMode === "dark" ? tedxWhite : tedxBlack;

    const menuHeightValue = useBreakpointValue({ base: "225px", lg: "80px" });

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [isNavVisible, setIsNavVisible] = useState(true);

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const currentPosition = window.pageYOffset;
        setIsNavVisible(currentPosition < scrollPosition);
        setScrollPosition(currentPosition);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition]);

    return (
        <>
            <Box
                display={{ base: "block", lg: "none" }}
                width="100%"
                py="1.5rem"
                px="1rem"
                bg={useColorModeValue("#f1f1f1", "black")}
                zIndex="999"
            >
                <Link as={RouterLink} to="/" cursor="pointer">
                    <Flex justifyContent="center" alignItems="center">
                        <Image src={tedxImg} width={{ base: "90%", md: "60%" }} />
                    </Flex>
                </Link>
            </Box>

            <Box
                position="sticky"
                // top={isNavVisible ? "0" : "-100px"}
                top={0}
                transition="top 0.3s"
                zIndex="999"
            >
                {/* Mobile Navbar */}
                <Flex
                    as="nav"
                    display={{ base: "block", lg: "none" }}
                    bg={useColorModeValue("#f1f1f1", "#000000")}
                    width="100%"
                    height="7rem"
                    paddingX="0.6rem"
                    justify="space-between"
                    position="relative"
                >
                    <Flex width="100%" height="100%" justifyContent="space-between" alignItems="center">
                        <ColorModeSwitch />
                        <Flex position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" >
                            <LanguageSwitcher />
                        </Flex>
                        <MenuToggle isOpen={isOpen} onClick={toggleMenu} />
                    </Flex>
                </Flex>

                {/* Desktop Navbar */}
                <Flex
                    as="nav"
                    display={{ base: "none", lg: "block" }}
                    bg={useColorModeValue("#f1f1f1", "#000000")}
                    width="100%"
                    height="8rem"
                    paddingX="1rem"
                    position="relative"
                >
                    <Flex width="100%" height="100%" justifyContent="space-between" alignItems="center">

                        <Flex gap="2rem">
                            <ColorModeSwitch />
                            <LanguageSwitcher />
                        </Flex>
                        <Flex position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" >
                            <Link as={RouterLink} to="/" cursor="pointer">
                                <Image src={tedxImg} width={430} />
                            </Link>
                        </Flex>
                        <MenuToggle isOpen={isOpen} onClick={toggleMenu} />
                    </Flex>
                </Flex>

                {/* Dropdown Panel */}
                <MotionBox
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: isOpen ? menuHeightValue : "0px",
                        opacity: 1,
                    }}
                    bg={useColorModeValue("#f1f1f1", "#000000")}
                    transition="all 0.3s ease-in-out"
                    overflow="hidden"
                >
                    <Flex
                        flexDirection={{ base: "column", lg: "row" }}
                        justifyContent="center"
                        alignItems={{ base: "center", lg: "initial" }}
                        paddingY="2.5rem"
                        gap={{ base: "1rem", lg: "5rem" }}
                        color={useColorModeValue("#000", "#fff")}
                        fontSize={{base:"2.5rem", lg:"2.8rem"}}
                        fontWeight="semibold"
                        fontFamily="Big Shoulders Display"
                    >
                        <Link as={RouterLink} to={"/"} cursor="pointer">
                            <SliderText text={t("home")} />
                        </Link>

                        <Link as={RouterLink} to={"/event"} cursor="pointer">
                            <SliderText text={t("event")} />
                        </Link>

                        <Link as={RouterLink} to={"/speakers"} cursor="pointer">
                            <SliderText text={t("speakers")} />
                        </Link>

                        <Link as={RouterLink} to={"/team"} cursor="pointer">
                            <SliderText text={t("team")} />
                        </Link>
                    </Flex>
                </MotionBox>
            </Box>
        </>
    );
};

export default MyNavbar_Old;
