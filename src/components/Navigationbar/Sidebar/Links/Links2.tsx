import { motion } from "framer-motion";
import {
  Link as ChakraLink,
  Box,
  useColorModeValue,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { BiSolidRightArrow, BiRightArrow } from "react-icons/bi";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import NAV_ITEMS from "./NavItems";

interface NavLinkProps {
  label: string;
  href?: string;
  index: string;
  isChild?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ label, href, index, isChild }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ChakraLink
      className={`link ${isChild ? "sublink" : ""}`}
      href={href}
      fontSize={{ base: "18px", lg: "25px" }}
      fontWeight="bold"
      textAlign="center"
      cursor="pointer"
      margin={{ base: "0.9rem 0", lg: "0.8rem 0" }}
      outline="0"
      whiteSpace="nowrap"
      bg={useColorModeValue("black", "white")}
      display="inline-block"
      width="100%"
      color={useColorModeValue("gray.100", "gray.700")}
      _hover={{
        textDecoration: "none",
        color: `${useColorModeValue("#16F8B6", "#06bf8a")}`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        className={`item_container${isChild ? " subitem_container" : ""}`}
        width="90%"
        margin="auto"
        position="relative"
      >
        <HStack justifyContent="center" alignItems="center">
          <Box
            className="icon_container"
            marginTop={isChild ? "5px" : "10px"}
            opacity={isHovered ? 1 : 0}
            transition="opacity 0.3s ease"
          >
            <Icon
              className="title_icon"
              as={isChild ? BiRightArrow : BiSolidRightArrow}
              color={useColorModeValue("white", "black")}
            />
          </Box>
          <motion.div
            style={{
              transform: `translateX(${isHovered ? "1.5rem" : "0"})`,
              transition: "transform 0.3s ease",
            }}
          >
            {label}
          </motion.div>
        </HStack>
      </Box>
    </ChakraLink>
  );
};

interface NavChildrenProps {
  children: Array<NavItem>;
  parentIndex: string;
}

const NavChildren: React.FC<NavChildrenProps> = ({ children, parentIndex }) => {
  return (
    <Box
      className="children_container"
      display="flex"
      flexDirection="column"
      marginBottom="1rem"
    >
      {children.map((child, childIndex) => (
        <NavLink
          key={child.label}
          label={child.label}
          href={child.href}
          index={`${parentIndex}-${childIndex}`}
          isChild
        />
      ))}
    </Box>
  );
};

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

const Links2: React.FC = () => {
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
      >
        {NAV_ITEMS.map((item: NavItem, parentIndex) => (
          <Box width="100%">
            <motion.div key={item.label} variants={itemVariants}>
              <NavLink
                label={t(item.label)}
                href={item.href}
                index={`${parentIndex}`}
                isChild={false}
              />
              {item.children && (
                <NavChildren
                  children={item.children}
                  parentIndex={`${parentIndex}`}
                />
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

export default Links2;
