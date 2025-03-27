import React, { useState } from "react";
import { Box, Grid, Image, Stack, IconButton, useBreakpointValue, Flex, VStack } from "@chakra-ui/react";
import FooterSection from "./FooterSection"; // Import FooterSection
import { BsInstagram, BsLinkedin, BsTwitter, BsFacebook } from "react-icons/bs";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { tedxWhite, tedxBlack } from "../../assets";
import { FaXTwitter } from "react-icons/fa6";

export const BlockFooter: React.FC = () => {
  const { colorMode } = useColorMode();
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  const tedxImg = colorMode === "dark" ? tedxWhite : tedxWhite;

  const iconColor = useColorModeValue("#fff", "#fff");
  const iconHoverColor = useColorModeValue("#912338", "#912338");
  const iconBackgroundColor = useColorModeValue("gray.100", "gray.200");

  const [expandedSections, setExpandedSections] = useState<{ [key: number]: boolean }>({});

  const toggleSection = (index: number) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const sections = [
    {
      title: "programs",
      links: [
        { label: "TED", href: "/" },
        { label: "TEDx", href: "/" },
        // { label: "tedxisfahanuniversityoftechnology", href: "/" },
      ],
    },
    // {
    //   title: "event",
    //   links: [
    //     { label: "ticket", href: "/event" },
    //     { label: "dateAndTime", href: "/event" },
    //     // { label: "Photos", href: "/photos" },
    //     // { label: "Talks", href: "/photos" },
    //   ],
    // },
    // {
    //   title: "community",
    //   links: [
    //     { label: "team", href: "/team" },
    //     { label: "speakers", href: "/speakers" },
    //     // { label: "Generous Sponsors", href: "/sponsors" },
    //   ],
    // },
    // {
    //   title: "Join Us",
    //   links: [
    //     { label: "Organizer", href: "/joinus/team" },
    //     { label: "Speaker", href: "/joinus/speaker" },
    //     { label: "Sponsor", href: "/joinus/sponsor" },
    //   ],
    // },
    // {
    //   title: "followUs",
    //   links: [
    //     { label: "LinkedIn", href: "https://www.linkedin.com/", target: "_blank" },
    //     { label: "Instagram", href: "https://www.instagram.com/tedx.iut?igsh=MW1yeDJhMDMxZ3V5Zg==", target: "_blank" },
    //     // { label: "Twitter", href: "https://twitter.com", target: "_blank" },
    //     // { label: "Facebook", href: "https://facebook.com", target: "_blank" },
    //   ],
    // },
  ];

  return (
    <Box
      padding="6rem 2rem"
      bg={useColorModeValue("#912338", "#232323")}
    >
      <Flex flexDirection={{ base: "column", lg: "row" }}>
        <VStack
          display={{ base: "none", lg: "flex" }}
          flex={1}
          justifyContent="start"
          alignItems="center"
          textAlign="center"
          gap={4}
        >
          <Image src={tedxImg} width="70%" height="fit-content" />
          <Box fontSize="1.4rem" color={useColorModeValue("gray.300", "gray")}>
            © 2025 TEDxIsfahan University of Technology
          </Box>
        </VStack>
        <Grid  flex={3} templateColumns={isLargeScreen ? "repeat(3, 1fr)" : "1fr"}>
          {sections.map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              links={section.links}
              isCollapsible={!isLargeScreen}
              isExpanded={isLargeScreen || expandedSections[index]}
              toggleExpand={() => toggleSection(index)}
            />
          ))}
        </Grid>
        <VStack
          display={{ base: "flex", lg: "none" }}
          flex={1}
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          marginY="4rem"
          gap={3}
        >
          <Image src={tedxImg} width={{ base: "80%", lg: "60%" }} height="fit-content" />
          <Box fontSize="1.5rem" color={useColorModeValue("gray.300", "gray")}>
            © 2025 TEDxIsfahan University of Technology
          </Box>
        </VStack>
      </Flex>
      <Stack direction="row" justifyContent="center" spacing={10} paddingTop="3rem">
        {[BsInstagram, BsLinkedin].map((Icon, idx) => (
          <IconButton
            key={idx}
            aria-label={`social-${idx}`}
            icon={<Icon size="20px" />}
            boxSize="4rem"
            borderRadius="full"
            color={iconColor}
            variant="ghost"
            _hover={{
              bg: iconBackgroundColor,
              color: iconHoverColor,
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default BlockFooter;
