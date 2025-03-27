import React, { useState } from "react";
import {
  Box,
  Image,
  Text,
  Link,
  useColorModeValue,
  IconButton,
  HStack,
  useBreakpointValue,
  VStack,
  Flex
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { BsLinkedin } from "react-icons/bs";
import { motion } from 'framer-motion';
import { TeamMember } from "./data";
import { useTranslation } from "react-i18next";

interface FlipCardProps extends Partial<TeamMember> { }

const FlipCard: React.FC<FlipCardProps> = ({
  id,
  name,
  title,
  image,
  profileHref,
  linkedinAddress,
  emailAddress,
  twitterAddress,
}) => {
  const { t, i18n } = useTranslation();

  const [isFlipped, setIsFlipped] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const iconSize = useBreakpointValue({ base: "2.5rem", lg: "2.5rem" });
  const iconBoxSize = useBreakpointValue({ base: "5rem", lg: "5rem" });

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleCardHover = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <Box
      position="relative"
      // borderWidth="1px"
      // borderColor={useColorModeValue("#000", "#fff")}
      borderRadius="10px"
      onMouseEnter={() => id !== undefined && setHoveredIndex(id)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <Box
        position="relative"
        width="100%"
        height="390px"
        style={{
          perspective: "600px",
        }}
        onMouseEnter={handleCardHover}
        onMouseLeave={handleCardHover}
      >
        <Box
          position="relative"
          width="100%"
          height="100%"
          transition="transform 1.3s"
          transform={isFlipped ? "rotateY(180deg)" : "rotateY(0)"}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <Box
            className="card__face card__face--front"
            position="absolute"
            width="100%"
            height="100%"
            textAlign="center"
            bg="radial-gradient(circle, 
              rgba(186, 192, 200, 1) 0%,   /* Soft Silver (#BAC0C8 - Your Base Color) */
              rgba(160, 166, 175, 1) 30%,  /* Cool Metallic Gray */
              rgba(130, 136, 145, 1) 65%,  /* Deep Steel Shade */
              rgba(100, 105, 115, 1) 100%  /* Dark Gunmetal Edge */
          );
          "
            borderRadius="10px"
            style={{
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
            }}
            boxShadow={useColorModeValue("0 0 30px 1px gray", "0 0 30px 1px black")}
          >
            <Image
              src={image}
              width="100%"
              height="100%"
              objectFit="cover"
              borderRadius="10px"
            />

            <Flex
              flexDirection="column"
              gap="0.8rem"
            >
              <Text
                fontSize={i18n.language === "fa" ? "2.2rem" : "2.8rem"}
                fontWeight={i18n.language === "fa" ? "" : "bold"}
                fontFamily={i18n.language === "fa" ? "'YekanBakh', sans-serif" : "Big Shoulders Display"}
                dir={i18n.language === "fa" ? "rtl" : "ltr"}
                letterSpacing="0.3px"
                paddingTop={{ base: "1.5rem", lg: "1.5rem" }}
              >
                {name}
              </Text>
              <Text
                fontSize={i18n.language === "fa" ? "1.8rem" : "1.8rem"}
                fontFamily={i18n.language === "fa" ? "'YekanBakh', sans-serif" : ""}
                dir={i18n.language === "fa" ? "rtl" : "ltr"}
                letterSpacing="0.3px"
                color="#02e65e"
              >
                {title}
              </Text>
            </Flex>
          </Box>
          <Box
            className="card__face card__face--back"
            position="absolute"
            width="100%"
            height="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-around"
            textAlign="center"
            bg="radial-gradient(circle, 
              rgba(255, 40, 40, 1) 0%,
              rgba(200, 0, 0, 1) 40%,
              rgba(150, 0, 0, 1) 80%,
              rgba(110, 0, 0, 1) 100% 
            );"
            color="#fff"
            transform="rotateY(180deg)"
            borderRadius="10px"
            style={{
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
            }}
          >
            <VStack>
              <Text
                fontSize={i18n.language === "fa" ? "2.5rem" : "2.8rem"}
                fontWeight={i18n.language === "fa" ? "" : "1000"}
                fontFamily={i18n.language === "fa" ? "'YekanBakh', sans-serif" : "Big Shoulders Display"}
                dir={i18n.language === "fa" ? "rtl" : "ltr"}
                letterSpacing="0.3px"
                paddingBottom={2}
              >
                {name}
              </Text>
              <Text
                fontSize="1.7rem"
                fontWeight="bold"
                fontFamily={i18n.language === "fa" ? "'YekanBakh', sans-serif" : ""}
                dir={i18n.language === "fa" ? "rtl" : "ltr"}
                paddingX="2.5rem"
              >
                {title}
              </Text>
            </VStack>

            <HStack
              spacing={{ base: "6", lg: "6" }}
              justifyContent={"center"}
            >
              <Box as="a" href={linkedinAddress} target="_blank" rel="noopener noreferrer">
                <IconButton
                  aria-label="linkedin"
                  variant="ghost"
                  size="xl"
                  icon={<BsLinkedin size={iconSize} />}
                  color={useColorModeValue("gray.200", "gray.200")}
                  _hover={{
                    bg: useColorModeValue("gray.200", "gray.200"),
                    color: useColorModeValue("gray.700", "gray.700"),
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
                  aria-label="instagram"
                  variant="ghost"
                  size="xl"
                  icon={<FaInstagram size={iconSize} />}
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

            {/* View Profile button */}
            {/* <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 5,
              }}
            >
              <Link
                as={RouterLink}
                to={profileHref}
                cursor="pointer"
                fontSize="1.6rem"
                fontFamily={i18n.language === "fa" ? "'YekanBakh', sans-serif" : ""}
                dir={i18n.language === "fa" ? "rtl" : "ltr"}
                fontWeight="bold"
                borderWidth="2px"
                borderColor="#fff"
                borderRadius="7px"
                padding="1.5rem"
                textDecoration="none"
                _hover={{
                  textDecoration: "none",
                  bg: "#fff",
                  color: "#CB0000"
                }}
              >
                {t("viewProfile")}
              </Link>
            </motion.div> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FlipCard;
