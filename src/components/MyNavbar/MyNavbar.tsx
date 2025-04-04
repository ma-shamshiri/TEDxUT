import React, { useEffect, useState } from "react";
import {
    Box,
    Flex,
    IconButton,
    Image,
    Link,
    useBreakpointValue,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { tedxBlack, tedxWhite } from "../../assets";
import { useTranslation } from "react-i18next";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { IoVolumeMuteOutline } from "react-icons/io5";
import { VscUnmute } from "react-icons/vsc";

interface MyNavbarProps {
    onToggleMute: () => void;
    isMuted: boolean;
}

const MotionIcon = motion.div;

const MyNavbar: React.FC<MyNavbarProps> = ({ onToggleMute, isMuted }) => {
    const { t } = useTranslation();

    const { colorMode } = useColorMode();

    const tedxImg = colorMode === "dark" ? tedxWhite : tedxBlack;

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
                    <Flex justifyContent="space-between" alignItems="center" paddingX="1rem">
                        <Image src={tedxImg} width={{ base: "70%", md: "60%" }} />
                        <IconButton
                            aria-label="Toggle sound"
                            onClick={onToggleMute}
                            bg="rgba(0, 0, 0, 0.6)"
                            color="#fff"
                            fontSize="2.3rem"
                            zIndex={10}
                            _hover={{ bg: "transparent" }}
                            icon={
                                <AnimatePresence mode="wait">
                                    <MotionIcon
                                        key={isMuted ? "muted" : "unmuted"}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.3 }}
                                        whileHover={{ color: "red" }}
                                    >
                                        {isMuted ? <IoVolumeMuteOutline /> : <VscUnmute />}
                                    </MotionIcon>
                                </AnimatePresence>
                            }
                        />
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
                    display={{ base: "none", lg: "none" }}
                    bg={useColorModeValue("#f1f1f1", "gray.900")}
                    width="100%"
                    height="7rem"
                    paddingX="0.6rem"
                    justify="space-between"
                    position="relative"
                >
                    <Flex
                        width="100%"
                        height="100%"
                        justifyContent="space-between"
                        alignItems="center"
                        paddingX="1rem"
                    >
                        {/* <Box
                            as={IconButton}
                            // onClick={() => setActiveModal("instagram")}
                            onClick={() => window.open("https://www.instagram.com/tedx.iut?igsh=MW1yeDJhMDMxZ3V5Zg==", "_blank")}
                            rel="noopener noreferrer"
                            icon={<FaInstagram size={instagramIconSize} />}
                            bg={"linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"}
                            color="white"
                            _hover={{ bg: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)" }}
                            borderRadius="10px"
                            boxSize={instagramIconBoxSize}
                        /> */}
                        {/* <Flex position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" >
                            <LanguageSwitcher2 />
                        </Flex> */}
                        {/* <Box
                            as={IconButton}
                            // onClick={() => setActiveModal("linkedin")}
                            onClick={() => window.open("https://www.linkedin.com/", "_blank")}
                            rel="noopener noreferrer"
                            icon={<FaLinkedin size={linkedinIconSize} />}
                            bg="#0077B5"
                            color="white"
                            _hover={{ bg: "#0077B5" }}
                            borderRadius="10px"
                            boxSize={linkedinIconBoxSize}
                        /> */}
                    </Flex>
                </Flex>

                {/* Desktop Navbar */}
                <Flex
                    as="nav"
                    display={{ base: "none", lg: "block" }}
                    bg={useColorModeValue("#f1f1f1", "#000")}
                    width="100%"
                    height="8rem"
                    paddingX="1rem"
                    position="relative"
                >
                    <Flex
                        width="100%"
                        height="100%"
                        justifyContent="space-between"
                        alignItems="center"
                        paddingX="2rem"
                    >
                        {/* <Flex position="absolute" top="50%" left="13%" transform="translate(-50%, -50%)" >
                            <Link as={RouterLink} to="/" cursor="pointer">
                                <Image src={tedxImg} width={450} />
                            </Link>
                        </Flex> */}
                        <Flex>
                            <Link as={RouterLink} to="/" cursor="pointer">
                                <Image src={tedxImg} width={380} />
                            </Link>
                        </Flex>

                        {/* Sound Toggle Button (placed in navbar) */}
                        <IconButton
                            aria-label="Toggle sound"
                            onClick={onToggleMute}
                            bg="rgba(0, 0, 0, 0.6)"
                            color="#fff"
                            fontSize="2.5rem"
                            zIndex={10}
                            _hover={{ bg: "transparent" }}
                            icon={
                                <AnimatePresence mode="wait">
                                    <MotionIcon
                                        key={isMuted ? "muted" : "unmuted"}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.3 }}
                                        whileHover={{ color: "red" }}
                                    >
                                        {isMuted ? <IoVolumeMuteOutline /> : <VscUnmute />}
                                    </MotionIcon>
                                </AnimatePresence>
                            }
                        />
                    </Flex>
                </Flex>
            </Box>
        </>
    );
};

export default MyNavbar;
