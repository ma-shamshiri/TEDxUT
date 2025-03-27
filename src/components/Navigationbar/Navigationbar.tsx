import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  Image,
  Link,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import { KbarInput } from "../KbarInput";
import { MenuLinks } from "../MenuLinks";
import { navigationLinks } from "../layout/navigation-links";
import { Sidebar } from "./Sidebar";
import { tedxWhite, tedxBlack, youChooseLogo } from "../../assets";
import ColorModeSwitch from "./ColorModeSwitch";
import LanguageSwitcher from "./LanguageSwitcher";
import LanguageSwitcher2 from "./LanguageSwitcher2";
// import { HamburgerButton } from "../HamburgerButton";
// import { MobileMenu } from "../MobileMenu";


export const Navigationbar: React.FC = () => {
  const location = useLocation();

  const { colorMode } = useColorMode();

  const tedxImg = colorMode === "dark" ? tedxWhite : tedxBlack;

  const isLargeScreen = useBreakpointValue({ base: false, md: true });

  const [isNavVisible, setIsNavVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    setIsNavVisible(currentPosition < scrollPosition);
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  // useEffect(() => {
  //   setIsMobileMenuOpen(false);
  // }, [location]);

  return (
    <>
      <Box
        width="100%"
        py={{ base: "1rem" }}
        px={{ base: "1rem" }}
        bg={useColorModeValue("rgb(241,241,241)", "black")}
        display={{ base: "block", md: "none" }}
        zIndex="999"
      >
        <Link as={RouterLink} to={"/"} cursor="pointer">
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Image src={tedxImg} width={{ base: "90%", lg: 300 }} />
          </Flex>
        </Link>
      </Box>
      <Box
        bg={useColorModeValue("rgb(241,241,241)", "black")}
        py={{ base: "1.5rem" }}
        px={{ base: "1.5rem" }}
        position="sticky"
        zIndex="999"
        top={isNavVisible ? "0" : "-100px"}
        transition="top 0.3s"
      >
        <Flex
          justify={{ base: "space-between", lg: "space-between" }}
          align="center"
        >
          <Flex align="center">
            {/* <div className="md:hidden">
              <HamburgerButton
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div> */}
            <Box
              zIndex="1000"
              marginTop="-10rem"
              marginLeft="-1.8rem"
              marginRight={{ base: "9rem", lg: "10rem" }}
              display={{ base: "block", lg: "none" }}
            >
              <Sidebar />
            </Box>
            <Link
              display={{ base: "none", md: "block" }}
              as={RouterLink}
              to={"/"}
              cursor="pointer"
            >
              <Flex justifyContent={"center"} alignItems={"center"}>
                <HStack>
                  <Image
                    src={youChooseLogo}
                    boxSize={{ base: "35px", md: "45px", lg: "45px", xl: "50px" }}
                  />
                  <Image
                    src={tedxImg}
                    width={{ base: 160, md: 230, lg: 190, xl: 330 }}
                  />
                </HStack>
              </Flex>
            </Link>
            <Box
              position="relative"
              display={{ base: "none", lg: "block" }}
            >
              <MenuLinks menuLinks={navigationLinks} />
            </Box>
          </Flex>
          {isLargeScreen ? (
            <HStack spacing={5} zIndex={999}>
              <Flex display={{ md: "none", lg: "block" }} paddingRight="1.5rem" >
                {/* <KbarInput /> */}
              </Flex>
              {/* <LanguageSwitcher /> */}
              {/* <QuickIcons /> */}
              <LanguageSwitcher2 />
              <ColorModeSwitch />
            </HStack>
          ) : (
            <>
              {/* <Image src={tedxImg} width={{ base: "50%", lg: 300 }} /> */}
              <LanguageSwitcher2 />
              <ColorModeSwitch />
            </>
          )}
        </Flex>
        {/* <div className="md:hidden">
          {isMobileMenuOpen && <MobileMenu menuLinks={navigationLinks} />}
        </div> */}
      </Box>
      <Outlet />
    </>
  );
};

// export default Navigationbar;
