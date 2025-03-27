import { motion } from "framer-motion";
import { Link, Box, useColorModeValue, Icon, HStack } from "@chakra-ui/react";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";

import NAV_ITEMS from "./NavItems";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const MotionBox = motion(Box);

export const Links: React.FC = () => {
  const { t } = useTranslation();

  const [hoveredItemIndex, setHoveredItemIndex] = useState<string | null>(null);

  return (
    <motion.div variants={variants}>
      <Box
        className="outer_box_container"
        position="absolute"
        width="100%"
        height="100%"
        margin={{ base: "20px 0" }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="0.5rem"
        // style={{ fontFamily: "DM Sans" }}
      >
        {NAV_ITEMS.map((item: NavItem, parentIndex) => (
          <Box key={parentIndex} width="100%">
            <motion.div key={item.label} variants={itemVariants}>
              <Link
                className="link"
                href={item.href}
                fontSize={{ base: "18px", lg: "25px" }}
                fontWeight="bold"
                textAlign="center"
                // borderRadius="40px"
                cursor="pointer"
                margin={{ base: "0.9rem 0", lg: "0.8rem 0" }}
                outline="0"
                // textTransform="uppercase"
                whiteSpace="nowrap"
                bg={useColorModeValue("black", "white")}
                display="inline-block"
                width="100%"
                color={useColorModeValue("gray.100", "gray.700")}
                _hover={{
                  textDecoration: "none",
                  color: `${useColorModeValue("#16F8B6", "#06bf8a")}`,
                }}
              >
                <Box
                  className="item_container"
                  width="90%"
                  margin="auto"
                  position="relative"
                  onMouseEnter={() => setHoveredItemIndex(`${parentIndex}`)}
                  onMouseLeave={() => setHoveredItemIndex(null)}
                >
                  <HStack justifyContent="center" alignItems="center">
                    <Box
                      className="icon_container"
                      marginTop="10px"
                      opacity={hoveredItemIndex === `${parentIndex}` ? 1 : 0}
                      transition="opacity 0.3s ease"
                    >
                      <Icon
                        className="title_icon"
                        as={BiSolidRightArrow}
                        // boxSize={titleIconSize}
                        color={useColorModeValue("white", "black")}
                      />
                    </Box>
                    <MotionBox
                      // whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      position="relative"
                      zIndex="1"
                      margin="1"
                      style={{
                        transform: `translateX(${
                          hoveredItemIndex === `${parentIndex}` ? "1.5rem" : "0"
                        })`,
                        transition: "transform 0.3s ease",
                      }}
                    >
                      {t(item.label)}
                    </MotionBox>
                  </HStack>
                </Box>
              </Link>

              {item.children && (
                <Box
                  className="children_container"
                  display="flex"
                  flexDirection="column"
                  marginBottom="1rem"
                >
                  {item.children.map((child, childIndex) => (
                    <Link
                      className="sublink"
                      key={child.label}
                      href={child.href}
                      fontSize={{ base: "14px", lg: "18px" }}
                      fontWeight="bold"
                      textAlign="center"
                      // borderRadius="40px"
                      cursor="pointer"
                      // margin="0.5rem 0"
                      outline="0"
                      // textTransform="uppercase"
                      whiteSpace="nowrap"
                      bg={useColorModeValue("black", "white")}
                      display="inline-block"
                      width="100%"
                      color={useColorModeValue("gray.100", "gray.600")}
                      _hover={{
                        textDecoration: "none",
                        // bg: `${useColorModeValue("gray.100", "gray.600")}`,
                        color: `${useColorModeValue("#F926AE", "#F926AE")}`,
                      }}
                    >
                      <Box
                        className="subitem_container"
                        width="90%"
                        margin="auto"
                        position="relative"
                        onMouseEnter={() =>
                          setHoveredItemIndex(`${parentIndex}-${childIndex}`)
                        }
                        onMouseLeave={() => setHoveredItemIndex(null)}
                      >
                        <HStack justifyContent="center" alignItems="center">
                          <Box
                            className="icon_container"
                            marginTop="5px"
                            opacity={
                              hoveredItemIndex ===
                              `${parentIndex}-${childIndex}`
                                ? 1
                                : 0
                            }
                            transition="opacity 0.3s ease"
                          >
                            <Icon
                              className="title_icon"
                              as={BiRightArrow}
                              // boxSize={titleIconSize}
                              color={useColorModeValue("white", "black")}
                            />
                          </Box>
                          <MotionBox
                            // whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            padding="1"
                            style={{
                              transform: `translateX(${
                                hoveredItemIndex ===
                                `${parentIndex}-${childIndex}`
                                  ? "1.5rem"
                                  : "0"
                              })`,
                              transition: "transform 0.3s ease",
                            }}
                          >
                            {t(child.label)}
                          </MotionBox>
                        </HStack>
                      </Box>
                    </Link>
                  ))}
                </Box>
              )}
            </motion.div>
            {parentIndex !== NAV_ITEMS.length - 1 && (
              <Box
                className="separator"
                width="100%"
                height="1px"
                bg="gray"
                opacity="0.3"
              ></Box>
            )}
          </Box>
        ))}
      </Box>
    </motion.div>
  );
};

// export default Links;
