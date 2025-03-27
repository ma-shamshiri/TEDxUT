import React, { useRef } from "react";
import {
    Box,
    Text,
    SimpleGrid,
    Flex,
    useColorModeValue,
} from "@chakra-ui/react";
import { teamMembersData } from "./data";
import FlipCard from "./FlipCard";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const initialVariants: { [key: string]: any } = {
    initial: {
        y: 75,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: "easeInOut",
            staggerChildren: 0.2,
        },
    },
};

const BlockTeamMembers: React.FC = () => {
    const { t, i18n } = useTranslation();

    const ref = useRef<HTMLDivElement>(null);

    return (
        <Box
            position="relative"
            minH="100vh"
            bg={useColorModeValue("gray.50", "#000")}
            padding="4rem 1rem 6rem 1rem"
            overflow="hidden"
        >
            <Flex
                direction="column"
                align="center"
                justify="flex-start"
                pt={{ base: 10, md: 20 }}
                px={4}
                textAlign="center"
                zIndex={2}
                position="relative"
            >
                <Box
                    className="block__header"
                    textAlign="center"
                    margin="0 auto"
                    marginBottom={{ base: "4rem", lg: "6rem" }}
                >
                    <Text
                        color={useColorModeValue('gray.800', "red.400")}
                        marginBottom="2rem"
                        marginTop="0"
                        fontSize={{ base: '2.8rem', lg: '4rem' }}
                        fontWeight={i18n.language === "fa" ? "bold" : "1000"}
                        fontFamily={i18n.language === "fa" ? "'YekanBakh', sans-serif" : "Big Shoulders Display"}
                        dir={i18n.language === "fa" ? "rtl" : "ltr"}
                        letterSpacing="0.5px"
                        lineHeight="1.1"
                    >
                        {t("teamPageTitle")}
                    </Text>
                    <Text
                        color={useColorModeValue('gray.700', 'white')}
                        marginBottom="4rem"
                        marginTop="0"
                        fontSize={{ base: '1.5rem', lg: '2.3rem' }}
                        fontFamily={i18n.language === "fa" ? "'YekanBakh', sans-serif" : "Big Shoulders Display"}
                        dir={i18n.language === "fa" ? "rtl" : "ltr"}
                        lineHeight="1.5"
                    >
                        {t("teamPageSubTitle")}
                    </Text>
                </Box>

                {/* Staggered Grid Layout */}
                <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 4, xl: 4 }}
                    spacingX={{ base: "initial", md: "5rem", lg: "2rem", xl: "2.5rem" }}
                    spacingY={{ base: "12rem", lg: "20rem", xl: "20rem" }}
                    maxW={{ base: "100%", lg: "90%" }}
                    width="100%"
                    height='fit-content'
                    position={"relative"}
                    paddingX={{ base: "1rem", lg: "initial" }}
                    paddingTop={{ base: "2rem", lg: "2rem" }}
                    paddingBottom={{ base: "15rem", lg: "15rem" }}
                >
                    {teamMembersData.map((teamMember, index) => {
                        const offset = index % 2 === 0 ? "0px" : "55px";

                        return (
                            <motion.div
                                ref={ref}
                                variants={initialVariants}
                                initial="initial"
                                whileInView="animate"
                            >
                                <Box
                                    key={teamMember.id}
                                    marginTop={{ base: "initial", lg: offset }}
                                    borderRadius="10px"
                                >
                                    <FlipCard
                                        id={index}
                                        name={teamMember.name && t(teamMember.name)}
                                        title={teamMember.title && t(teamMember.title)}
                                        image={teamMember.image && teamMember.image}
                                        profileHref={teamMember.profileHref && teamMember.profileHref}
                                        linkedinAddress={teamMember.linkedinAddress && teamMember.linkedinAddress}
                                        emailAddress={teamMember.emailAddress && teamMember.emailAddress}
                                        twitterAddress={teamMember.twitterAddress && teamMember.twitterAddress}
                                    />
                                </Box>
                            </motion.div>
                        );
                    })}
                </SimpleGrid>
            </Flex>
        </Box>
    );
};

export default BlockTeamMembers;
