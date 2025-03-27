// TeamMemberCarouselCard.tsx
import React from 'react';
import {
    Box,
    Flex,
    Image,
    Link,
    Text,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react';
import { FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { TeamMember } from './data';
import { useTranslation } from 'react-i18next';

interface TeamMemberCarouselCardProps {
    member: TeamMember;
}

const TeamMemberCarouselCard: React.FC<TeamMemberCarouselCardProps> = ({ member }) => {
    const { t, i18n } = useTranslation();

    const cardBg = useColorModeValue('white', 'gray.700');
    const overlayBg = 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)';

    return (
        <Box
            position="relative"
            width="220px"
            height="280px"
            borderRadius="lg"
            overflow="hidden"
            bg={cardBg}
            boxShadow="lg"
            _hover={{ transform: 'scale(1.03)' }}
            transition="transform 0.4s ease"
            role="group"
        >
            {member.image && (
                <Image
                    src={member.image}
                    alt={member.name}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                />
            )}

            {/* Hover Overlay */}
            <Flex
                direction="column"
                justify="flex-end"
                align="center"
                position="absolute"
                bottom="0"
                left="0"
                width="100%"
                height="100%"
                opacity="0"
                bgGradient={overlayBg}
                transition="opacity 0.4s ease"
                _groupHover={{ opacity: 1 }}
                p={4}
            >
                <Text
                    fontSize={{ base: "1.4rem", lg: "1.4rem" }}
                    fontWeight="bold"
                    color="white"
                    mb={1}
                    fontFamily={i18n.language === "fa" ? "'YekanBakh', sans-serif" : ""}
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                >
                    {member.name && t(member.name)}
                </Text>
                <Text
                    fontSize={{ base: "1.2rem", lg: "1.2rem" }}
                    color="gray.200"
                    mb={2}
                    fontFamily={i18n.language === "fa" ? "'YekanBakh', sans-serif" : ""}
                    dir={i18n.language === "fa" ? "rtl" : "ltr"}
                >
                    {member.title && t(member.title)}
                </Text>

                <Flex gap={2}>
                    {member.linkedinAddress && (
                        <Link href={member.linkedinAddress} isExternal>
                            <IconButton
                                aria-label="LinkedIn"
                                icon={<FiLinkedin />}
                                variant="ghost"
                                color="white"
                                _hover={{ color: 'teal.300' }}
                            />
                        </Link>
                    )}
                    {member.twitterAddress && (
                        <Link href={member.twitterAddress} isExternal>
                            <IconButton
                                aria-label="Twitter"
                                icon={<FiTwitter />}
                                variant="ghost"
                                color="white"
                                _hover={{ color: 'teal.300' }}
                            />
                        </Link>
                    )}
                    {member.emailAddress && (
                        <Link href={`mailto:${member.emailAddress}`} isExternal>
                            <IconButton
                                aria-label="Email"
                                icon={<FiMail />}
                                variant="ghost"
                                color="white"
                                _hover={{ color: 'teal.300' }}
                            />
                        </Link>
                    )}
                </Flex>
            </Flex>
        </Box>
    );
};

export default TeamMemberCarouselCard;
