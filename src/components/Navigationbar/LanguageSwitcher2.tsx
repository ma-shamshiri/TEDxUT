import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
    Box,
    Button,
    Flex,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spinner,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { GrLanguage } from 'react-icons/gr';
// import { iranFlag, usaFlag, franceFlag } from "../../assets"

const LanguageSwitcher2: React.FC = () => {
    const { i18n } = useTranslation();
    const [loading, setLoading] = useState(false);
    const [selectedLanguageLabel, setSelectedLanguageLabel] = useState("Language");

    const changeLanguage = async (lng: string, label: string) => {
        setLoading(true);
        await i18n.changeLanguage(lng);
        localStorage.setItem("selectedLanguage", lng);
        setSelectedLanguageLabel(label);

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    useEffect(() => {
        const storedLanguage = localStorage.getItem("selectedLanguage") || "fa";
        const defaultLabel = languageOptions.find(lang => lang.value === storedLanguage)?.label || "Language";
        i18n.changeLanguage(storedLanguage);
        setSelectedLanguageLabel(defaultLabel);
    }, [i18n]);

    // const flagIcons = {
    //     english: <Image src={usaFlag} alt="USA Flag" boxSize="23px" borderRadius="full" />,
    //     french: <Image src={franceFlag} alt="France Flag" boxSize="23px" borderRadius="full" />,
    //     persian: <Image src={iranFlag} alt="Iran Flag" boxSize="23px" borderRadius="full" />,
    // };

    // const languageOptions = [
    //     { label: "English", value: "en", flag: flagIcons.english },
    //     { label: "French", value: "fr", flag: flagIcons.french },
    //     { label: "فارسی", value: "fa", flag: flagIcons.persian },
    // ];

    const languageOptions = [
        { label: "فارسی", value: "fa" },
        { label: "English", value: "en" },
    ];

    return (
        <Flex align="center" justify="center">
            {loading && (
                <Box
                    position="fixed"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    backgroundColor="rgba(255, 255, 255, 0.8)"
                    zIndex="999"
                >
                    <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="teal.400"
                        size="xl"
                    />
                </Box>
            )}

            <Menu>
                <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    width="12rem"
                    height="3.5rem"
                    borderRadius="20px"
                    fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                    leftIcon={<GrLanguage size="18px" color={useColorModeValue("black", "#38B4C1")} />}
                    transition="all 0.3s"
                    bg={useColorModeValue("gray.300", "gray.600")}
                    fontSize={{ base: "0.8rem", md: "1rem" }}
                    _hover={{
                        bg: useColorModeValue("gray.600", "gray.300"),
                        color: useColorModeValue("gray.200", "gray.800")
                    }}
                >
                    <Text fontSize="1.2rem" >
                        {selectedLanguageLabel}
                    </Text>
                </MenuButton>
                <MenuList>
                    {languageOptions.map((lang) => (
                        <MenuItem
                            key={lang.value}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            width="100%"
                            // icon={lang.flag}
                            paddingY="0.8rem"
                            fontSize={{ base: "2rem", lg: "1.4rem" }}
                            fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : ""}
                            _hover={{
                                bg: useColorModeValue("gray.600", "gray.300"),
                                color: useColorModeValue("gray.200", "gray.800")
                            }}
                            transition="all 0.2s"
                            onClick={() => changeLanguage(lang.value, lang.label)}
                        >
                            <Flex
                                align="center"
                                justifyContent="center"
                                gap={5}
                            >
                                {/* {lang.flag} */}
                                <Text fontSize={{ base: "1.4rem", lg: "1.4rem" }}>
                                    {lang.label}
                                </Text>
                            </Flex>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Flex>
    );
};

export default LanguageSwitcher2;