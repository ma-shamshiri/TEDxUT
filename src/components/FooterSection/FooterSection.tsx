// FooterSection.tsx
import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  IconButton,
  useBreakpointValue,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { FaInstagram } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import { Link as RouterLink } from "react-router-dom";

const FooterSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  const linkFontSize = useBreakpointValue({ base: '1.3rem', lg: '1.6rem' });
  const iconSize = useBreakpointValue({ base: "2.3rem", lg: "2.3rem" });
  const iconBoxSize = useBreakpointValue({ base: "4.5rem", lg: "4.5rem" });

  const instaIconSize = useBreakpointValue({ base: "2.7rem", lg: "2.7rem" });
  const instaIconBoxSize = useBreakpointValue({ base: "4.6rem", lg: "4.6rem" });


  return (
    <Box
      as="footer"
      position="relative"
      bg="#e62b1e"
      color="white"
      paddingY={{ base: '4rem', lg: "8rem" }}
      overflow="hidden"
    >
      <Container maxW="1300px" position="relative">
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justify="center"
          align="center"
          spacing={{ base: '1.5rem', md: '2rem' }}
        >
          {/* Center: Navigation Links */}
          <Flex gap={{ base: '1rem', md: '2rem' }}>
            <Stack direction="row" spacing="1rem">
              <Box
                as="a"
                href={"https://www.instagram.com/tedx.universityoftehran?igsh=MTFhNGJsaW52bnZiZQ=="}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  aria-label="instagram"
                  variant="ghost"
                  size="xl"
                  icon={<FaInstagram size={instaIconSize} />}
                  color={useColorModeValue("gray.200", "gray.200")}
                  _hover={{
                    bg: useColorModeValue("gray.200", "gray.200"),
                    color: useColorModeValue("gray.700", "gray.700"),
                  }}
                  isRound
                  boxSize={instaIconBoxSize}
                />
              </Box>
              <Box
                as="a"
                href={"https://www.linkedin.com/company/tedxut2024/"}
                target="_blank"
                rel="noopener noreferrer"
              >
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

              <Box
                as="a"
                // href={"https://www.instagram.com/tedx.iut?igsh=MW1yeDJhMDMxZ3V5Zg=="}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  aria-label="instagram"
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
            </Stack>
          </Flex>
        </Stack>

        {/* Divider & Disclaimer */}
        <Box
          borderTop="1px solid"
          borderColor="rgba(255,255,255,0.3)"
          marginTop="2rem"
          paddingTop="2rem"
          paddingX="3rem"
        >
          <Text
            textAlign="center"
            fontSize={linkFontSize} mb="0.5rem"
            fontWeight="bold"
            fontFamily={"'YekanBakh', sans-serif"}
            dir={"rtl"}
          >
            تداِکس دانشگاه تهران - تمامی حقوق محفوظ است {new Date().getFullYear()} ©
          </Text>
          {/* <Text
            textAlign="center"
            fontSize="1.3rem"
            color="gray.100"
            fontFamily={i18n.language === "fa" ? "'YekanBakh', sans-serif" : "Big Shoulders Display"}
            dir={i18n.language === "fa" ? "rtl" : "ltr"}
          >
            {t("copyrightLineTwo")}
          </Text> */}
        </Box>
      </Container>
    </Box>
  );
};

export default FooterSection;
