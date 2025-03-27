import React from "react";
import {
    Box,
    Text,
    SimpleGrid,
    Flex,
    useColorModeValue,
} from "@chakra-ui/react";
import { speakersData } from "./data";
import FlipCard from "./FlipCard";
import { useTranslation } from "react-i18next";

// Wave background at the bottom
const WaveBackground: React.FC = () => {
    const waveFill = useColorModeValue("#CB0000", "#CB0000");

    return (
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
                d="M0,256L30,256C60,256,120,256,180,224C240,192,300,128,360,122.7C420,117,480,171,540,181.3C600,192,660,160,720,128C780,96,840,64,900,80C960,96,1020,160,1080,165.3C1140,171,1200,117,1260,90.7C1320,64,1380,64,1410,64L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            />
        </Box>
    );
};

const BlockSpeakers: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Box
            position="relative"
            minH="100vh"
            bg={useColorModeValue("gray.50", "gray.900")}
            padding="4rem 1rem 6rem 1rem"
            overflow="hidden"
        >
            {/* Wave background at the bottom */}
            <WaveBackground />

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
                        color={useColorModeValue('gray.800', '#16F8B6')}
                        marginBottom="2rem"
                        marginTop="0"
                        fontSize={{ base: '2.8rem', lg: '4rem' }}
                        fontWeight="1000"
                        fontFamily="Big Shoulders Display"
                        letterSpacing="0.5px"
                        lineHeight="1.1"
                    >
                        {t("speakersPageTitle")}
                    </Text>
                    <Text
                        color={useColorModeValue('gray.700', 'white')}
                        marginTop="0"
                        fontSize={{ base: '1.5rem', lg: '2.3rem' }}
                        lineHeight="1.5"
                    >
                        {t("speakersPageSubTitle")}
                    </Text>
                </Box>

                {/* Staggered Grid Layout */}
                <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacingX="5rem"
                    spacingY={{ base: "12rem", lg: "10rem" }}
                    maxW="1200px"
                    width="100%"
                    height='fit-content'
                    position={"relative"}
                    paddingX={{ base: "1rem", lg: "initial" }}
                    paddingTop={{ base: "2rem", lg: "2rem" }}
                    paddingBottom={{ base: "15rem", lg: "40rem" }}
                >
                    {speakersData.map((speaker, index) => {
                        const offset = index % 2 === 0 ? "0px" : "80px";

                        return (
                            <Box
                                key={speaker.id}
                                marginTop={{ base: "initial", lg: offset }}
                                borderRadius="10px"
                            >
                                <FlipCard
                                    id={index}
                                    name={speaker.name}
                                    title={speaker.title}
                                    image={speaker.image}
                                    profileHref={speaker.profileHref}
                                    linkedinAddress={speaker.linkedinAddress}
                                    emailAddress={speaker.emailAddress}
                                    twitterAddress={speaker.twitterAddress}
                                />
                            </Box>
                        );
                    })}
                </SimpleGrid>
            </Flex>
        </Box>
    );
};

export default BlockSpeakers;
