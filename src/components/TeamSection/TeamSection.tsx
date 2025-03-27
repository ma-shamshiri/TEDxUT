// TeamSection.tsx
import React, { useState } from 'react';
import { Box, Heading, Container, useBreakpointValue, Link, Text } from '@chakra-ui/react';
import TeamMemberCarousel from '../TeamMemberCarousel'; // or your import path
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const TeamSection: React.FC = () => {
    const { t, i18n } = useTranslation();

    const headingSize = useBreakpointValue({ base: '2.5rem', md: '3rem', lg: '3.5rem' });

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
            
            color="white"
            bg="black"
            paddingY={{ base: '6rem', md: '8rem' }}
            width="100%"
            overflow="hidden"
            // bgGradient="linear(to bottom, #1c1c1c 0%, #000 100%)"
        >
            <Container maxW="1400px" textAlign="center">
                <Heading
                    as="h2"
                    fontSize={headingSize}
                    fontWeight="bold"
                    lineHeight="1.2"
                    fontFamily={i18n.language === "fa" ? "'YekanBakh', sans-serif" : ""}
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                    mb="2rem"
                    color="red.400"
                >
                    {t("teamPageTitle")}
                </Heading>
                <TeamMemberCarousel />

                <Link
                    position="relative"
                    className="btn btn--secondary btn--block"
                    as={RouterLink}
                    to={"/team/"}
                    border="2px solid #CB0000"
                    borderRadius="7px"
                    cursor="pointer"
                    fontSize={{ base: "1.8rem", lg: "2rem" }}
                    fontFamily={i18n.language === "fa" ? "'YekanBakh', sans-serif" : ""}
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                    marginTop="5rem"
                    padding="1.5rem"
                    paddingX="3rem"
                    textAlign="center"
                    whiteSpace="nowrap"
                    bg="#CB0000"
                    color="#fff"
                    boxShadow="0px 6px 10px rgba(0, 0, 0, 0.2), 0px -6px 10px rgba(0, 0, 0, 0.2)"
                    display="inline-block"
                    width={{ base: "fit-content", lg: "fit-content" }}
                    _hover={{
                        border: "0.2rem solid #CB0000",
                        bg: "transparent",
                        color: "#CB0000",
                        boxShadow:
                            "0px 8px 14px rgba(0, 0, 0, 0.3), 0px -8px 14px rgba(0, 0, 0, 0.3)",
                    }}
                    transition="background-color 0.25s ease-out, border 0.25s ease-out, box-shadow 0.25s ease"
                    onMouseEnter={handleHoverButton}
                    onMouseLeave={handleUnHoverButton}
                >
                    <Text>{t("scrollingTeamButtonLabel")}</Text>
                </Link>

            </Container>
        </Box>
    );
};

export default TeamSection;
