import React from "react";
import {
    Box,
    Flex,
    Text,
    Image,
    useColorModeValue,
    SystemStyleObject,
    VStack,
    HStack,
    IconButton,
    useBreakpointValue,
} from "@chakra-ui/react";
import { BsLinkedin } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";

interface BlockTeamProfilesProps {
    name: string;
    title: string;
    biography: string;
    image: string;
    linkedinAddress: string;
    emailAddress: string;
    twitterAddress: string;
}

const BlockTeamProfiles: React.FC<BlockTeamProfilesProps> = ({
    name,
    title,
    biography,
    image,
    linkedinAddress,
    emailAddress,
    twitterAddress
}) => {

    const iconSize = useBreakpointValue({ base: "2.5rem", lg: "2.5rem" });
    const iconBoxSize = useBreakpointValue({ base: "5rem", lg: "5rem" });

    const waveFill = useColorModeValue("#f0f4f8", "#2D3748");
    const radialGradient = useColorModeValue(
        "radial-gradient(circle at top, teal.50, teal.100, teal.200)",
        "radial-gradient(circle at top, gray.700, gray.800, gray.900)"
    );
    const cardBg = useColorModeValue("whiteAlpha.900", "blackAlpha.700");
    const textColor = useColorModeValue("gray.800", "gray.200");
    const headingGradient = useColorModeValue(
        "linear(to-r, teal.400, blue.400)",
        "linear(to-r, teal.200, blue.300)"
    );

    const customScrollBar: SystemStyleObject = {
        "&::-webkit-scrollbar": {
            width: "6px",
        },
        "&::-webkit-scrollbar-track": {
            background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
            background: useColorModeValue("#CBD5E0", "#4A5568"),
            borderRadius: "3px",
        },
    };

    return (
        <Box
            position="relative"
            width="100%"
            minH="100vh"
            bg={radialGradient}
            overflow="hidden"
        >
            {/* --- Top Wave --- */}
            <Box
                as="svg"
                viewBox="0 0 1440 320"
                position="absolute"
                top={0}
                left={0}
                w="100%"
                h="auto"
                zIndex={1}
            >
                <path
                    fill={waveFill}
                    fillOpacity="1"
                    d="M0,96L48,128C96,160,192,224,288,224C384,224,480,160,576,149.3C672,139,768,181,864,202.7C960,224,1056,224,1152,192C1248,160,1344,96,1392,64L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                />
            </Box>

            {/* --- Bottom Wave --- */}
            <Box
                as="svg"
                viewBox="0 0 1440 320"
                position="absolute"
                bottom={0}
                left={0}
                w="100%"
                h="auto"
                zIndex={1}
            >
                <path
                    fill={waveFill}
                    fillOpacity="1"
                    d="M0,256L80,229.3C160,203,320,149,480,149.3C640,149,800,203,960,197.3C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                />
            </Box>

            {/* Main Content Container */}
            <Flex
                direction="column"
                align="center"
                justify="center"
                position="relative"
                zIndex={5}
                width="100%"
                minH="100vh"
                paddingX="2rem"
                paddingY={{ base: "5rem", lg: "5rem" }}
            >
                <Box
                    position="relative"
                    bg={cardBg}
                    borderRadius="10px"
                    boxShadow="2xl"
                    padding={{ base: 6, md: 10 }}
                    maxW="900px"
                    width="100%"
                    marginTop={{ base: 16, md: 0 }}
                    textAlign="center"
                >
                    {/* Profile Image */}
                    <Image
                        src={image}
                        alt={name}
                        boxSize={{ base: "250px", lg: "300px" }}
                        objectFit="cover"
                        borderRadius="full"
                        marginX="auto"
                        marginBottom="2rem"
                        border="4px solid"
                        borderColor={useColorModeValue("white", "gray.900")}
                    />

                    {/* Name & Title */}
                    <VStack
                        position={"relative"}
                        alignItems="center"
                        width={"100%"}
                        justifyContent={"center"}
                        paddingX="1.5rem"
                        marginBottom="0.5rem"
                    >
                        <Text
                            fontSize={{ base: "2.8rem", md: "3rem" }}
                            fontWeight="1000"
                            fontFamily="Big Shoulders Display"
                            letterSpacing="0.5px"
                            marginBottom="1rem"
                            bgGradient={headingGradient}
                            bgClip="text"
                        >
                            {name}
                        </Text>
                        <Text

                            fontSize={{ base: "1.7rem", md: "1.8rem" }}
                            fontWeight="semibold"
                            color={textColor}
                            mb={6}
                        >
                            {title}
                        </Text>
                    </VStack>

                    <HStack
                        spacing={{ base: "6", lg: "6" }}
                        justifyContent={"center"}
                        marginBottom="2rem"
                    >
                        <Box as="a" href={linkedinAddress} target="_blank" rel="noopener noreferrer">
                            <IconButton
                                aria-label="linkedin"
                                variant="ghost"
                                size="xl"
                                icon={<BsLinkedin size={iconSize} />}
                                color={useColorModeValue("gray.800", "gray.200")}
                                _hover={{
                                    bg: useColorModeValue("gray.800", "gray.200"),
                                    color: useColorModeValue("gray.100", "gray.700"),
                                }}
                                isRound
                                boxSize={iconBoxSize}
                            />
                        </Box>
                        <Box as="a" href={emailAddress} target="_blank" rel="noopener noreferrer">
                            <IconButton
                                aria-label="email"
                                variant="ghost"
                                size="xl"
                                icon={<TfiEmail size={iconSize} />}
                                color={useColorModeValue("gray.800", "gray.200")}
                                _hover={{
                                    bg: useColorModeValue("gray.800", "gray.200"),
                                    color: useColorModeValue("gray.100", "gray.700"),
                                }}
                                isRound
                                boxSize={iconBoxSize}
                            />
                        </Box>
                        <Box as="a" href={twitterAddress} target="_blank" rel="noopener noreferrer">
                            <IconButton
                                aria-label="twitter"
                                variant="ghost"
                                size="xl"
                                icon={<FaXTwitter size={iconSize} />}
                                color={useColorModeValue("#gray.800", "gray.200")}
                                _hover={{
                                    bg: useColorModeValue("gray.800", "gray.200"),
                                    color: useColorModeValue("gray.100", "gray.700"),
                                }}
                                isRound
                                boxSize={iconBoxSize}
                            />
                        </Box>
                    </HStack>

                    <Box
                        maxH="500px"
                        overflowY="auto"
                        sx={customScrollBar}
                        color={textColor}
                        textAlign="left"
                        marginX="auto"
                    >
                        <Text
                            fontSize={{ base: "1.5rem", lg: "1.8rem" }}
                        >
                            {biography}
                        </Text>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default BlockTeamProfiles;
