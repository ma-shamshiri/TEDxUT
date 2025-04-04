import React, { useState } from "react";
import {
    Box,
    Flex,
    Image,
    Text,
    Heading,
    IconButton,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useBreakpointValue,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages } from "./data";
import {
    FaChevronLeft,
    FaChevronRight,
    FaArrowLeft,
    FaArrowRight,
} from "react-icons/fa";

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);

const GAP_REM = 3; // gap between items (in rem)

/** Variants for crossfade animation in the modal */
const fadeVariants = {
    initial: { opacity: 0, x: 0 },
    animate: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
        opacity: 0,
        x: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
    },
};

const EventGallery: React.FC = () => {
    // Define ITEM_WIDTH_REM with a fallback value
    const ITEM_WIDTH_REM = useBreakpointValue({ base: 35.4, lg: 40 }) ?? 30;

    // Horizontal slider state: leftIndex indicates how many shifts have been applied
    const [leftIndex, setLeftIndex] = useState<number>(0);

    // Modal (lightbox) state
    const [modalIndex, setModalIndex] = useState<number>(0);
    const { isOpen, onOpen, onClose } = useDisclosure();

    // Breakpoint-based items per view
    const itemsPerView = useBreakpointValue({ base: 1, md: 3, lg: 4 }) || 4;
    const totalImages = galleryImages.length;

    // Calculate the total slider width in rem:
    // sliderWidth = (number of items * ITEM_WIDTH_REM) + (number of gaps * GAP_REM)
    const sliderWidth = totalImages * ITEM_WIDTH_REM + (totalImages - 1) * GAP_REM;

    // Visible width in rem:
    const visibleWidth = itemsPerView * ITEM_WIDTH_REM + (itemsPerView - 1) * GAP_REM;

    // Maximum offset is the extra width that needs to be scrolled:
    const maxOffset = sliderWidth - visibleWidth;

    // Each shift moves by (ITEM_WIDTH_REM + GAP_REM) rem.
    // We add +1 so that we can scroll a little further,
    // ensuring the last image is fully visible.
    const extraShift = useBreakpointValue({ base: 0, md: 2, lg: 2 }) || 0;
    const maxLeftIndex = Math.ceil(maxOffset / (ITEM_WIDTH_REM + GAP_REM)) + extraShift;

    // When a thumbnail is clicked, open modal at that index
    const handleImageClick = (index: number) => {
        setModalIndex(index);
        onOpen();
    };

    // Next/Prev in the modal (lightbox)
    const handleModalNext = () => {
        setModalIndex((prev) => (prev + 1) % totalImages);
    };
    const handleModalPrev = () => {
        setModalIndex((prev) => (prev - 1 + totalImages) % totalImages);
    };

    // Shift the slider one item right
    const handleNext = () => {
        if (leftIndex < maxLeftIndex) {
            setLeftIndex(leftIndex + 1);
        }
    };

    // Shift the slider one item left
    const handlePrev = () => {
        if (leftIndex > 0) {
            setLeftIndex(leftIndex - 1);
        }
    };

    // Calculate x offset (in rem) for the slider
    const xOffsetRem = -(leftIndex * (ITEM_WIDTH_REM + GAP_REM));

    // Arrow container alignment: center on mobile, flex-end on larger screens
    const arrowPosition = useBreakpointValue({ base: "center", md: "flex-end" });

    return (
        <Box
            as="section"
            position="relative"
            bg="#fff"
            paddingTop={{ base: "3rem", lg: "5rem" }}
        >
            <Heading
                as="h2"
                mb="3rem"
                fontSize={{ base: '3xl', md: '5xl' }}
                fontWeight="bold"
                fontFamily={"'Rubik', sans-serif"}
                dir={"rtl"}
                textAlign="center"
                color="#CB0000"
            >
                تصاویری از مسیر ما تا امروز
            </Heading>

            <Box
                position="relative"
                px={{ base: "1rem", md: "2rem", lg: "4rem" }}
                overflow="hidden"
            >
                {/* Horizontal Slider */}
                <MotionFlex
                    whiteSpace="nowrap"
                    gap={`${GAP_REM}rem`}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    animate={{ x: `${xOffsetRem}rem` }}
                    width="max-content"
                    paddingBottom={{ base: "6rem", lg: "6rem" }}
                >
                    {galleryImages.map((img, index) => (
                        <Box
                            key={img.id}
                            minW={`${ITEM_WIDTH_REM}rem`}
                            height="auto"
                            flex="0 0 auto"
                            borderRadius="16px"
                            overflow="hidden"
                            boxShadow="0 0 1rem rgba(0,0,0,0.1)"
                            bg="#f7f7f7"
                            cursor="pointer"
                            _hover={{
                                transform: "scale(1.03)",
                                boxShadow: "0 0.6rem 1.2rem rgba(0,0,0,0.2)",
                                filter: "brightness(1.1)",
                            }}
                            transition="transform 0.3s ease-out, box-shadow 0.3s ease-out, filter 0.3s ease-out"
                            onClick={() => handleImageClick(index)}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                width="100%"
                                height={{ base: "20rem", lg: "30rem" }}
                                objectFit="cover"
                            />
                            {/* <Box p="0.8rem">
                                <Text
                                    fontSize={{ base: "1.5rem", lg: "1.5rem" }}
                                    // fontWeight="bold"
                                    color="#000"
                                    fontFamily={"'Rubik', sans-serif"}
                                    dir={"rtl"}
                                >
                                    {img.title ?? "رویداد TEDx"}
                                </Text>
                            </Box> */}
                        </Box>
                    ))}
                </MotionFlex>

                {/* Arrow container (bottom-right or center on mobile) */}
                <Flex
                    position="absolute"
                    bottom={{ base: "1.5rem", lg: "1.5rem" }}
                    left={{ base: "50%", md: "1rem" }}
                    transform={{ base: "translateX(-50%)", md: "none" }}
                    justifyContent={arrowPosition}
                    width={{ base: "auto", md: "100%" }}
                    px={{ md: "4rem" }}
                >
                    <Flex
                        bg="#CB0000"
                        borderRadius="2rem"
                        boxShadow="0 0.2rem 0.8rem rgba(0,0,0,0.2)"
                        alignItems="center"
                        justifyContent="center"
                        gap="1px"
                        padding="0.5rem 0.8rem"
                    >
                        <IconButton
                            aria-label="Previous"
                            icon={<FaChevronLeft />}
                            variant="ghost"
                            onClick={handlePrev}
                            isDisabled={leftIndex <= 0}
                            fontSize="1.3rem"
                            _hover={{ bg: "rgba(0,0,0,0.05)" }}
                            borderRadius="2rem"
                        />
                        <IconButton
                            aria-label="Next"
                            icon={<FaChevronRight />}
                            variant="ghost"
                            onClick={handleNext}
                            isDisabled={leftIndex >= maxLeftIndex}
                            fontSize="1.3rem"
                            _hover={{ bg: "rgba(0,0,0,0.05)" }}
                            borderRadius="2rem"
                        />
                    </Flex>
                </Flex>
            </Box>

            {/* Fullscreen Lightbox Modal */}
            <AnimatePresence>
                {isOpen && (
                    <Modal
                        isOpen={isOpen}
                        onClose={onClose}
                        size="full"
                        isCentered
                        motionPreset="none" // We'll manage animations manually
                    >
                        <ModalOverlay bg="rgba(0,0,0,0.8)" backdropFilter="blur(4px)" />
                        <ModalContent
                            bg="transparent"
                            boxShadow="none"
                            borderRadius="0"
                            overflow="hidden"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <ModalCloseButton
                                color="#FFF"
                                size="lg"
                                top="1rem"
                                right="1rem"
                                _hover={{ bg: "rgba(255,255,255,0.1)" }}
                            />

                            <ModalBody
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                position="relative"
                                p="0"
                            >
                                <Flex direction="column" alignItems="center" justifyContent="center">
                                    <AnimatePresence mode="wait">
                                        <MotionBox
                                            key={galleryImages[modalIndex].id}
                                            variants={fadeVariants}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            display="flex"
                                            flexDirection="column"
                                            alignItems="center"
                                            justifyContent="center"
                                            position="relative"
                                        >
                                            <Image
                                                src={galleryImages[modalIndex].src}
                                                alt={galleryImages[modalIndex].alt}
                                                maxH="80vh"
                                                maxW="90vw"
                                                objectFit="contain"
                                                borderRadius="1rem"
                                                boxShadow="0 0.6rem 1.2rem rgba(0,0,0,0.3)"
                                            />
                                            <Box mt="1rem" color="#FFF" textAlign="center">
                                                {/* <Text fontSize="1.4rem" fontWeight="bold" mb="0.5rem">
                                                    {galleryImages[modalIndex].title ?? "رویداد TEDx"}
                                                </Text> */}
                                                {galleryImages[modalIndex].description && (
                                                    <Text
                                                        fontSize="1.3rem"
                                                        px="1rem"
                                                        fontFamily="'Rubik', sans-serif"
                                                        dir="rtl"
                                                    >
                                                        {galleryImages[modalIndex].description}
                                                    </Text>
                                                )}
                                            </Box>
                                        </MotionBox>
                                    </AnimatePresence>

                                    {/* Arrow icons below the image */}
                                    <Flex
                                        mt="1.5rem"
                                        bg="#FFF"
                                        borderRadius="2rem"
                                        boxShadow="0 0.2rem 0.8rem rgba(0,0,0,0.4)"
                                        alignItems="center"
                                        justifyContent="center"
                                        gap="1px"
                                        px="0.8rem"
                                        py="0.3rem"
                                    >
                                        <IconButton
                                            aria-label="Previous image"
                                            icon={<FaArrowLeft />}
                                            variant="ghost"
                                            onClick={handleModalPrev}
                                            fontSize="1.4rem"
                                            color="#000"
                                            _hover={{
                                                bg: "#CB0000",
                                                color: "#fff",
                                            }}
                                            borderRadius="2rem"
                                        />
                                        <IconButton
                                            aria-label="Next image"
                                            icon={<FaArrowRight />}
                                            variant="ghost"
                                            onClick={handleModalNext}
                                            fontSize="1.4rem"
                                            color="#000"
                                            _hover={{
                                                bg: "#CB0000",
                                                color: "#fff",
                                            }}
                                            borderRadius="2rem"
                                        />
                                    </Flex>
                                </Flex>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                )}
            </AnimatePresence>
        </Box>
    );
};

export default EventGallery;
