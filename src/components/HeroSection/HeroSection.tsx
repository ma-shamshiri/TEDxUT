import React, { useRef, useState, useEffect } from 'react';
import {
  Box,
  Heading,
  HStack,
  Link,
  keyframes,
  usePrefersReducedMotion,
  Text,
  useBreakpointValue,
  useColorModeValue,
  Button,
  IconButton,
} from '@chakra-ui/react';
import {
  FaInstagram,
  FaTelegramPlane,
} from 'react-icons/fa';
import { welcome } from '../../assets'; // Your MP4 file import
import Typed from "react-typed";
import { BsLinkedin } from 'react-icons/bs';
import { Link as ScrollLink } from 'react-scroll';
import Player from '@vimeo/player';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  } 
  40% {
    transform: translateY(-10px);
  } 
  60% {
    transform: translateY(-5px);
  }
`;

interface HeroSectionProps {
  onPlayerReady: (player: Player) => void;
  isMuted: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onPlayerReady, isMuted }) => {
  const videoRef = useRef<HTMLIFrameElement>(null);

  // Track whether the Vimeo iframe is fully loaded
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Honor user preference for reduced motion
  const prefersReducedMotion = usePrefersReducedMotion();
  const fadeInUpAnimation = prefersReducedMotion ? undefined : `${fadeInUp} 1s ease-in-out forwards`;
  const bounceAnimation = prefersReducedMotion ? undefined : `${bounce} 2s infinite`;

  const iconSize = useBreakpointValue({ base: "2rem", lg: "2.5rem" });
  const iconBoxSize = useBreakpointValue({ base: "4rem", lg: "5rem" });

  useEffect(() => {
    if (videoRef.current) {
      const vimeoPlayer = new Player(videoRef.current);
      vimeoPlayer.setMuted(isMuted);

      // Once the video is fully loaded, remove the overlay & show the iframe
      vimeoPlayer.on('loaded', () => {
        setIframeLoaded(true);
      });

      onPlayerReady(vimeoPlayer);
    }
  }, [videoRef, onPlayerReady, isMuted]);

  return (
    <Box
      as="section"
      position="relative"
      w="100%"
      // On mobile, auto height with aspect ratio; on md+ fill viewport
      h={{ base: 'auto', md: '100vh' }}
      overflow="hidden"
    >
      {/* BLACK OVERLAY TO HIDE ANY FLASH BEFORE VIDEO LOADS */}
      {!iframeLoaded && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="#000"
          zIndex={9999}
        />
      )}

      {/* Background Video */}
      <Box
        position="fixed"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex={-3}
        overflow="hidden"
      >
        <Box
          as="iframe"
          ref={videoRef}
          // Add color=000000&transparent=0 to try forcing black background
          src="https://player.vimeo.com/video/1072637809?autoplay=1&muted=1&background=1&loop=1&color=000000&transparent=0"
          title="Vimeo Background"
          allow="autoplay; fullscreen"
          allowFullScreen
          border="0"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '177.77vh', // 100 * (16/9)
            height: '100vh',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none', // So content over it is clickable
            display: iframeLoaded ? 'block' : 'none', // Hide until loaded
            backgroundColor: '#000', // Extra measure for black
          }}
        />
      </Box>

      {/* Fallback Background Image (if video fails to load) */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="full"
        h="full"
        // bgImage="url('https://source.unsplash.com/1600x900/?audience,conference')"
        bg="#000"
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        zIndex={-4}
      />

      {/* HORIZONTAL FADE (black edges on L & R, transparent center) */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="full"
        height="full"
        pointerEvents="none"
        bgGradient="linear(to-r, black 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, black 100%)"
        zIndex={-1}
      />

      {/* WHITE WAVE CURVE AT BOTTOM */}
      {/* <Box
        position="absolute"
        bottom="0"
        left="0"
        w="100%"
        lineHeight="0"
        zIndex={-1}
      >
        <svg
          viewBox={"0 0 1440 210"}
          preserveAspectRatio="none"
        >
          <path
            fill="#fff"
            d="M0,160 C360,0 1080,0 1440,160 L1440,320 L0,320 Z"
          />
        </svg>
      </Box> */}

      {/* Sound Toggle Button is removed from HeroSection */}

      {/* Hero Content */}
      <Box
        position="relative"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        px={{ base: 6, md: 8 }}
        py={{ base: 10, md: 0 }}
        h={{ base: 'auto', md: '100%' }}
        maxW="8xl"
        mx="auto"
        animation={fadeInUpAnimation}
        color="#FFF"
      >

        {/* Main Heading */}
        <Heading
          as="h1"
          fontSize={{ base: '4xl', md: '6xl', lg: '5rem' }}
          fontWeight="1000"
          mb={8}
          lineHeight={1.2}
          color="#FFF"
        >
          We&apos;re not just a{' '}
          <Box position="relative" display="inline-block" color="#EB0028">
            {/* Invisible placeholder to reserve width */}
            <Box visibility="hidden" position="absolute" whiteSpace="nowrap">
              University
            </Box>
            {/* Actual content */}
            <Text as="span">U</Text>
            <Typed
              strings={["niversity", "nique", "nity"]}
              typeSpeed={100}
              backSpeed={40}
              backDelay={3000}
              loop
              showCursor={false}
            />
          </Box>
          , we&apos;re a collection of{' '}
          <Box position="relative" display="inline-block" color="#EB0028">
            {/* Invisible placeholder to reserve width */}
            <Box visibility="hidden" position="absolute" whiteSpace="nowrap">
              Minds
            </Box>
            {/* Actual content */}
            <Text as="span">M</Text>
            <Typed
              strings={["inds", "agic", "achines"]}
              typeSpeed={100}
              backSpeed={40}
              backDelay={3000}
              loop
            />
          </Box>
          .
        </Heading>

        {/* Social Icons (larger & more eye-catching) */}
        <HStack
          spacing={6}
          marginBottom="8rem"
        >
          <Box
            as="a"
            href="https://www.instagram.com/tedx.universityoftehran?igsh=MTFhNGJsaW52bnZiZQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              aria-label="instagram"
              variant="ghost"
              size="xl"
              icon={<FaInstagram size={iconSize} />}
              color="#FFF"
              bg="rgba(255, 255, 255, 0.2)"
              _hover={{
                bg: '#FFF',
                color: '#EB0028',
                transform: 'scale(1.2)',
                transition: '0.2s',
                boxShadow: '0 0 10px rgba(0,0,0,0.5)',
              }}
              isRound
              boxSize={iconBoxSize}
            />
          </Box>

          <Box
            as="a"
            href="https://www.linkedin.com/company/tedxut2024/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              aria-label="linkedin"
              variant="ghost"
              size="xl"
              icon={<BsLinkedin size={iconSize} />}
              color="#FFF"
              bg="rgba(255, 255, 255, 0.2)"
              _hover={{
                bg: '#FFF',
                color: '#EB0028',
                transform: 'scale(1.2)',
                transition: '0.2s',
                boxShadow: '0 0 10px rgba(0,0,0,0.5)',
              }}
              isRound
              boxSize={iconBoxSize}
            />
          </Box>

          <Box
            as="a"
            href="https://t.me/TEDx_UniversityOfTehran"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              aria-label="telegram"
              variant="ghost"
              size="xl"
              icon={<FaTelegramPlane size={iconSize} />}
              color="#FFF"
              bg="rgba(255, 255, 255, 0.2)"
              _hover={{
                bg: '#FFF',
                color: '#EB0028',
                transform: 'scale(1.2)',
                transition: '0.2s',
                boxShadow: '0 0 10px rgba(0,0,0,0.5)',
              }}
              isRound
              boxSize={iconBoxSize}
            />
          </Box>
        </HStack>

        <Box
          display={{ base: "none", lg: "flex" }}
        >
          <ScrollLink
            to="form-section"
            smooth={true}
            duration={500}
          >
            <Button
              border="2px solid #CB0000"
              borderRadius="10px"
              cursor="pointer"
              fontSize={{ base: "1.4rem", lg: "2rem" }}
              fontFamily={"'Rubik', sans-serif"}
              dir={"rtl"}
              padding={{ base: "1.5rem", lg: "2rem" }}
              textAlign="center"
              whiteSpace="nowrap"
              bg="#CB0000"
              color="#fff"
              boxShadow="0px 6px 10px rgba(0, 0, 0, 0.2), 0px -6px 10px rgba(0, 0, 0, 0.2)"
              display="inline-block"
              width={{ base: "14rem", lg: "23rem" }}
              height={{ base: "6rem", lg: "8rem" }}
              _hover={{
                border: "0.2rem solid",
                borderColor: "#FF0000",
                bg: "transparent",
                color: "#FF0000",
                boxShadow:
                  "0px 8px 14px rgba(0, 0, 0, 0.3), 0px -8px 14px rgba(0, 0, 0, 0.3)",
              }}
              transition="background-color 0.25s ease-out, border 0.25s ease-out, box-shadow 0.25s ease"
            >
              ثبت نام داوطلب
            </Button>
          </ScrollLink>
        </Box>

        {/* Optional Scroll Down Indicator
        <Box
          animation={bounceAnimation}
          cursor="pointer"
          display={{ base: 'none', md: 'block' }}
        >
          <Icon as={FaArrowDown} boxSize={10} color="#FFF" />
        </Box>
        */}
      </Box>
    </Box>
  );
};

export default HeroSection;
