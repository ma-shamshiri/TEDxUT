import React, { useState } from 'react';
import { Box, Button, useColorModeValue } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

const ScrollingLink: React.FC = () => {
    const buttonHoverTextColor = useColorModeValue("#FF0000", "#FF0000");
    const buttonHoverBorderColor = useColorModeValue("#FF0000", "#FF0000");

    const [isHoveredButton, setIsHoveredButton] = useState(false);

    const handleHoverButton = () => {
        setIsHoveredButton(true);
    };

    const handleUnHoverButton = () => {
        setIsHoveredButton(false);
    };

    return (
        <Box
            as="section"
            position="relative"
            display={{ base: "flex", lg: "none" }}
            justifyContent="center"
            alignItems="center"
            bg="#000"
            color="#FFF"
            py={{ base: 16, md: 24 }}
            overflow="hidden"
        >
            <ScrollLink to="form-section" smooth={true} duration={500}>
                <Button
                    border="2px solid #FF0000"
                    borderRadius="10px"
                    cursor="pointer"
                    fontSize={{ base: "1.4rem", lg: "2rem" }}
                    fontFamily={"'Rubik', sans-serif"}
                    dir={"rtl"}
                    padding={{ base: "1.5rem", lg: "2rem" }}
                    textAlign="center"
                    whiteSpace="nowrap"
                    bg="#FF0000"
                    color="#fff"
                    boxShadow="0px 6px 10px rgba(0, 0, 0, 0.2), 0px -6px 10px rgba(0, 0, 0, 0.2)"
                    display="inline-block"
                    width={{ base: "14rem", lg: "23rem" }}
                    height={{ base: "6rem", lg: "8rem" }}
                    _hover={{
                        border: "0.2rem solid",
                        borderColor: buttonHoverBorderColor,
                        bg: "transparent",
                        color: buttonHoverTextColor,
                        boxShadow:
                            "0px 8px 14px rgba(0, 0, 0, 0.3), 0px -8px 14px rgba(0, 0, 0, 0.3)",
                    }}
                    transition="background-color 0.25s ease-out, border 0.25s ease-out, box-shadow 0.25s ease"
                    onMouseEnter={handleHoverButton}
                    onMouseLeave={handleUnHoverButton}
                >
                    ثبت نام داوطلب
                </Button>
            </ScrollLink>
        </Box>
    );
};

export default ScrollingLink;
