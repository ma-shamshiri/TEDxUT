// AboutSection.tsx
import React from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    Flex,
    Icon,
    useBreakpointValue,
} from '@chakra-ui/react';
import { FaGlobe, FaLightbulb, FaUniversity } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface AboutCardProps {
    title: string;
    icon: React.ElementType;
    description: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ title, icon, description }) => {
    const { t, i18n } = useTranslation();

    return (
        <Box
            bgGradient="linear(to bottom right, #1a1a1a, #000)"
            borderRadius="10px"
            boxShadow="2xl"
            padding="2rem"
            transition="transform 0.3s ease, box-shadow 0.3s ease"
            _hover={{ transform: 'scale(1.03)', boxShadow: '3xl' }}
            height="100%"
        >
            <Flex marginBottom="1rem" dir={i18n.language === "fa" ? "rtl" : "ltr"}>
                <Icon as={icon} boxSize="2.5rem" color="red.400" marginRight="0.75rem" marginLeft="0.75rem" />
                <Text
                    fontSize={{ base: "1.4rem", lg: "1.7rem" }}
                    color="red.300"
                    fontFamily={i18n.language === "fa" ? "'YekanBakh', sans-serif" : ""}
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                >
                    {title}
                </Text>
            </Flex>
            <Text
                fontSize="1.4rem"
                color="gray.200"
                lineHeight="1.75"
                fontFamily={i18n.language === "fa" ? "'YekanBakh', sans-serif" : ""}
                dir={i18n.language === "fa" ? "rtl" : "ltr"}
            // textAlign="justify"
            >
                {description}
            </Text>
        </Box>
    );
};

const AboutSection: React.FC = () => {
    const headingSize = useBreakpointValue({ base: '2.5rem', md: '3rem', lg: '3.5rem' });
    const subHeadingSize = useBreakpointValue({ base: '1.25rem', md: '1.5rem' });

    const { t, i18n } = useTranslation();

    return (
        <Box
            as="section"
            position="relative"
            bgGradient="radial(circle at center, #2a2a2a 0%, #000 100%)"
            // bg={"gray.900"}
            color="#fff"
            paddingY={{ base: '2rem', md: '8rem' }}
            width="100%"
            overflow="hidden"
        >
            <SimpleGrid
                columns={{ base: 1, md: 1, lg: 3 }}
                maxW="1400px"
                spacing="2rem"
                padding="2rem"
                marginX="auto"
                width="100%"
            >
                <AboutCard
                    title={t("ted")}
                    icon={FaGlobe}
                    description={t("tedDescription")}
                />
                <AboutCard
                    title={t("tedx")}
                    icon={FaLightbulb}
                    description={t("tedxDescription")}
                />
                <AboutCard
                    title={t("tedxisfahanuniversityoftechnology")}
                    icon={FaUniversity}
                    description={t("tedxIsfahanUniversityOfTechnologyDescription")}
                />
            </SimpleGrid>
        </Box>
    );
};

export default AboutSection;
