import React, { useState } from "react";
import { Box, Flex, IconButton, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { useTranslation } from "react-i18next";

interface MenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ isOpen, onClick }) => {
  const { t, i18n } = useTranslation();

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnHover = () => {
    setIsHovered(false);
  };

  return (
    <Flex
      as={motion.div}
      position="relative"
      width={{ base: isOpen ? "50px" : "95px", lg: isOpen ? "60px" : "140px" }}
      height={{ base: "50px", lg: "60px" }}
      bg={useColorModeValue("#f1f1f1", "#0f0f0f")}
      borderWidth="2px"
      borderColor={useColorModeValue("#000", "#DEB887")}
      borderRadius="50em"
      cursor="pointer"
      overflow="hidden"
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleUnHover}
      transition="width 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)"
      _hover={{
        "& .dot": {
          width: { base: "35px", lg: "40px" },
          height: { base: "35px", lg: "40px" },
        },
      }}
    >
      {/* Menu Text */}
      <Box
        position="absolute"
        top="50%"
        left={{
          base: isOpen ? "-50px" : isHovered ? "15px" : "25px",
          lg: isOpen ? "-50px" : isHovered ? "20px" : "40px"
        }}
        transform="translateY(-50%)"
        transition="left 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)"
      >
        <Text
          color={useColorModeValue("#000", "#fff")}
          fontSize={{ base: "11px", lg: "14px" }}
          fontWeight="bold"
          textTransform="uppercase"
          opacity={isOpen ? 0 : 1}
          transition="opacity 0.5s"
        >
          {t("menu")}
        </Text>
      </Box>

      {/* Toggle Icon */}
      <Flex
        as={motion.div}
        className="dot"
        width={{ base: isOpen ? "50px" : "10px", lg: isOpen ? "60px" : "10px" }}
        height={{ base: isOpen ? "50px" : "10px", lg: isOpen ? "60px" : "10px" }}
        bg="burlywood"
        borderRadius="50%"
        align="center"
        justify="center"
        position="absolute"
        top="50%"
        left={{
          base: isOpen ? "50%" : "73%",
          lg: isOpen ? "50%" : "68%"
        }}
        transform="translate(-50%, -50%)"
        transition="all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)"
      >
        {/* Hamburger Icon */}
        <IconButton
          as={motion.div}
          aria-label="hamburger"
          icon={<RxHamburgerMenu size="25px" />}
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          variant="unstyled"
          color="#000"
          display={isOpen ? "none" : isHovered ? "block" : "none"}
          opacity={isOpen ? "0" : isHovered ? "1" : "0"}
          transition="opacity 0.5s"
        />

        {/* X Icon */}
        <Flex
          flexDirection="column"
          justify="center"
          align="center"
          position="relative"
          width="30px"
          height="30px"
          style={{
            transform: isOpen ? "scale(1)" : "scale(0)",
            opacity: isOpen ? 1 : 0,
            transition: "transform 0.5s, opacity 0.5s",
          }}
        >
          {/* Top Line */}
          <Box
            position="absolute"
            width="15px"
            height="1.5px"
            bg="#000"
            transform={
              isOpen
                ? "translateY(0) rotate(45deg)"
                : "translateY(-3px) rotate(0)"
            }
            transition="transform 0.25s ease-out"
          />
          {/* Bottom Line */}
          <Box
            position="absolute"
            width="15px"
            height="1.5px"
            bg="#000"
            transform={
              isOpen
                ? "translateY(0) rotate(-45deg)"
                : "translateY(3px) rotate(0)"
            }
            transition="transform 0.25s ease-out"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MenuToggle;
