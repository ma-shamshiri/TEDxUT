import React from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    Icon,
    HStack,
} from '@chakra-ui/react';
import { infoItems } from './data';

const InfoSection: React.FC = () => {
    return (
        <Box
            as="section"
            position="relative"
            bg="#000"
            color="#FFF"
            py={{ base: 16, md: 24 }}
            dir="rtl"
            overflow="hidden"
        >
            <Container maxW="1400px" textAlign="center">
                <Heading
                    as="h2"
                    fontSize={{ base: '3xl', md: '5xl' }}
                    fontFamily={"'Rubik', sans-serif"}
                    dir={"rtl"}
                    fontWeight="extrabold"
                    color="#EB0028"
                    mb={{ base: 8, md: 12 }}
                >
                    <span style={{ color: "#fff" }}>درباره</span> تد، تداِکس و تداِکس <span style={{ color: "#fff" }}>دانشگاه تهران</span>
                </Heading>

                <SimpleGrid
                    columns={{ base: 1, md: 3 }}
                    spacing={{ base: 8, md: 10 }}
                    px={{ base: 4, md: 0 }}
                >
                    {infoItems.map((item) => (
                        <Box
                            key={item.id}
                            position="relative"
                            bg="#000"
                            border="none"
                            borderRadius="md"
                            p={{ base: 8, md: 10 }}
                            textAlign="right"
                            overflow="hidden"
                            // clipPath="polygon(0 0, 100% 0, 100% 85%, 0 100%)"
                            transition="all 0.1s ease-in-out"
                            // _hover={{
                            //     boxShadow: '0 8px 20px rgba(235, 0, 40, 0.2)',
                            //     background:
                            //         'linear-gradient(135deg, rgba(235, 0, 40, 0.3) 0%, rgba(0, 0, 0, 0.8) 100%)',
                            // }}
                        >
                            {/* Soft glow behind the icon */}
                            <Box
                                position="absolute"
                                top="1.5rem"
                                right="1.5rem"
                                w="80px"
                                h="80px"
                                bg="#EB0028"
                                borderRadius="full"
                                filter="blur(40px)"
                                zIndex={0}
                                opacity={0.3}
                            />
                            {/* Main Icon */}
                            <HStack gap={5}>
                                <Icon
                                    as={item.icon}
                                    boxSize={12}
                                    color="#EB0028"
                                    mb={4}
                                    position="relative"
                                    zIndex={1}
                                />
                                {/* Card Title */}
                                <Heading
                                    as="h3"
                                    fontSize={{ base: '2xl', md: '3xl' }}
                                    fontFamily={"'Rubik', sans-serif"}
                                    dir={"rtl"}
                                    fontWeight="bold"
                                    color="#EB0028"
                                    mb={4}
                                    position="relative"
                                    zIndex={1}
                                >
                                    {item.title}
                                </Heading>
                            </HStack>
                            {/* Card Description */}
                            <Text
                                fontSize={{ base: '1.4rem', md: '1.7rem' }}
                                fontFamily={"'Rubik', sans-serif"}
                                dir={"rtl"}
                                lineHeight="1.9"
                                position="relative"
                                zIndex={1}
                            >
                                {item.description}
                            </Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default InfoSection;
