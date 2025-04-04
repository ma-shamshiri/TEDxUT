import React, { useRef, useState } from 'react';
import {
  Box,
  Heading,
  IconButton,
  Icon,
  HStack,
  Link,
  keyframes,
  usePrefersReducedMotion,
  Text,
  useBreakpointValue,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import {
  FaArrowDown,
  FaVolumeMute,
  FaVolumeUp,
  FaInstagram,
  FaTelegramPlane,
} from 'react-icons/fa';
import { welcome } from '../../assets'; // Your MP4 file import
import Typed from "react-typed";
import { BsLinkedin } from 'react-icons/bs';
// import { FaXTwitter } from 'react-icons/fa6';
import { Link as ScrollLink } from 'react-scroll';

/**
 * Keyframes for text fade/slide and arrow bounce
 */
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

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Honor user preference for reduced motion
  const prefersReducedMotion = usePrefersReducedMotion();
  const fadeInUpAnimation = prefersReducedMotion ? undefined : `${fadeInUp} 1s ease-in-out forwards`;
  const bounceAnimation = prefersReducedMotion ? undefined : `${bounce} 2s infinite`;

  const iconSize = useBreakpointValue({ base: "2rem", lg: "2.5rem" });
  const iconBoxSize = useBreakpointValue({ base: "4rem", lg: "5rem" });

  // Toggle mute/unmute
  const handleToggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  const buttonHoverTextColor = useColorModeValue("#FF0000", "#FF0000");
  const buttonHoverBorderColor = useColorModeValue("#FF0000", "#FF0000");

  const [isHoveredButton, setIsHoveredButton] = useState(false);

  const handleHoverButton = () => {
    setIsHoveredButton(true);
  };

  const handleUnHoverButton = () => {
    setIsHoveredButton(false);
  };

  return (
    <Box
      as="section"
      position="relative"
      w="100%"
      // On mobile, auto height with aspect ratio; on md+ fill viewport
      h={{ base: 'auto', md: '100vh' }}
      overflow="hidden"
    >
      {/* Background Video */}
      <Box
        as="video"
        ref={videoRef}
        src={welcome}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        // Full width, responsive height
        w="full"
        h={{ base: 'auto', md: '100%' }}
        // Preserve aspect ratio on mobile, cover on larger screens
        objectFit={{ base: 'contain', md: 'cover' }}
        position="absolute"
        top={0}
        left={0}
        zIndex={-3}
      />

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

      {/* Sound Toggle Button (top-right) */}
      <IconButton
        aria-label="Toggle sound"
        onClick={handleToggleMute}
        icon={isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        position="absolute"
        top="1rem"
        right="1rem"
        zIndex={10}
        bg="rgba(0, 0, 0, 0.6)"
        color="red"
        _hover={{ bg: 'rgba(0, 0, 0, 0.8)' }}
        fontSize="4rem"
      />

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

        <Box
          position="absolute"
          display={{ base: "none", lg: "block" }}
          transform="translate(-50%, -50%)"
          bottom={20}
          left={"50%"}
        >
          <ScrollLink to="form-section" smooth={true} duration={500}>
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
                borderColor: buttonHoverBorderColor,
                bg: "transparent",
                color: buttonHoverTextColor,
                boxShadow:
                  "0px 8px 14px rgba(0, 0, 0, 0.3), 0px -8px 14px rgba(0, 0, 0, 0.3)",
              }}
              transition="background-color 0.25s ease-out, border 0.25s ease-out, box-shadow 0.25s ease"
              onMouseEnter={handleHoverButton}
              onMouseLeave={handleUnHoverButton}
            >
              ثبت نام داوطلب
            </Button>
          </ScrollLink>
        </Box>


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
        <HStack spacing={6} mb={8}>
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
