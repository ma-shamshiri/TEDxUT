import React, { useState, useRef } from "react";
import {
    Box,
    Flex,
    Image,
    Heading,
    IconButton,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import Slider from "react-slick";
import {
    FaChevronLeft,
    FaChevronRight,
    FaArrowLeft,
    FaArrowRight,
} from "react-icons/fa";
import { galleryImages } from "./data";

// Import slick-carousel css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EventGallery: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [modalIndex, setModalIndex] = useState<number>(0);
    const sliderRef = useRef<Slider>(null);

    // Open modal at specific index
    const handleImageClick = (index: number) => {
        setModalIndex(index);
        onOpen();
    };

    // Modal next/prev navigation
    const handleModalNext = () => {
        setModalIndex((prev) => (prev + 1) % galleryImages.length);
    };
    const handleModalPrev = () => {
        setModalIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    // react-slick settings (no built-in arrows, we use custom ones below)
    const settings = {
        dots: false,
        infinite: true,
        speed: 1300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Box as="section" position="relative" bg="#fff" pt={{ base: "3rem", lg: "5rem" }}>
            <Heading
                as="h2"
                mb="3rem"
                fontSize={{ base: "3xl", md: "5xl" }}
                fontWeight="bold"
                fontFamily="'Rubik', sans-serif"
                dir="rtl"
                textAlign="center"
                color="#CB0000"
            >
                تصاویری از مسیر ما تا امروز
            </Heading>

            <Box position="relative" px={{ base: "1rem", md: "2rem", lg: "4rem" }}>
                <Slider ref={sliderRef} {...settings}>
                    {galleryImages.map((img, index) => (
                        <Box
                            key={img.id}
                            p="0.5rem"
                            cursor="pointer"
                            onClick={() => handleImageClick(index)}
                            _hover={{
                                transform: "scale(1.03)",
                                boxShadow: "0 0.6rem 1.2rem rgba(0,0,0,0.2)",
                                filter: "brightness(1.1)",
                            }}
                            transition="transform 0.3s ease-out, box-shadow 0.3s ease-out, filter 0.3s ease-out"
                            borderRadius="16px"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                width="100%"
                                height={{ base: "20rem", lg: "30rem" }}
                                objectFit="cover"
                                borderRadius="16px"
                                boxShadow="0 0 1rem rgba(0,0,0,0.1)"
                                bg="#f7f7f7"
                            />
                        </Box>
                    ))}
                </Slider>

                {/* Custom arrow buttons placed below the slider */}
                <Flex justify="center" align="center" mt="1rem" paddingBottom="3rem" gap="2rem">
                    <IconButton
                        aria-label="Previous"
                        icon={<FaChevronLeft />}
                        onClick={() => sliderRef.current?.slickPrev()}
                        bg="rgba(203,0,0,0.8)"
                        _hover={{ bg: "rgba(203,0,0,1)" }}
                        borderRadius="full"
                    />
                    <IconButton
                        aria-label="Next"
                        icon={<FaChevronRight />}
                        onClick={() => sliderRef.current?.slickNext()}
                        bg="rgba(203,0,0,0.8)"
                        _hover={{ bg: "rgba(203,0,0,1)" }}
                        borderRadius="full"
                    />
                </Flex>
            </Box>

            {/* Modal Lightbox */}
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                isCentered
                motionPreset="none"
                closeOnOverlayClick
            >
                <ModalOverlay
                    bg="rgba(0,0,0,0.8)"
                    backdropFilter="blur(4px)"
                    onClick={onClose} // Clicking overlay closes modal
                />
                <ModalContent
                    bg="transparent"
                    boxShadow="none"
                    borderRadius="0"
                    overflow="hidden"
                    // Clicking on empty space inside content also closes the modal
                    onClick={onClose}
                    maxWidth={{ base: "30rem", lg: "100rem" }}
                    height="auto"
                >
                    {/* Close Button */}
                    <ModalCloseButton
                        color="white"
                        size="lg"
                        zIndex="2"
                        top="1rem"
                        right="1rem"
                        onClick={(e) => {
                            e.stopPropagation(); // So it doesn't trigger parent onClick
                            onClose();
                        }}
                        _hover={{ bg: "rgba(255,255,255,0.1)" }}
                    />

                    <ModalBody
                        p="0"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        position="relative"
                        width="100%"
                    >
                        {/* Box that stops clicks from closing the modal */}
                        <Box
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                            textAlign="center"
                            width="100%"
                        >
                            <Image
                                src={galleryImages[modalIndex].src}
                                alt={galleryImages[modalIndex].alt}
                                // width="100%"
                                // height="100%"
                                // maxWidth="80vw"
                                maxHeight="80vh"
                                objectFit="contain"
                                borderRadius="1rem"
                                boxShadow="0 0.6rem 1.2rem rgba(0,0,0,0.3)"
                            />

                            {galleryImages[modalIndex].description && (
                                <Text
                                    mt="1rem"
                                    fontSize="1.3rem"
                                    px="1rem"
                                    fontFamily="'Rubik', sans-serif"
                                    dir="rtl"
                                    color="#FFF"
                                >
                                    {galleryImages[modalIndex].description}
                                </Text>
                            )}

                            {/* Navigation arrows below the image */}
                            <Flex
                                mt="1.5rem"
                                // bg="#FFF"
                                borderRadius="2rem"
                                boxShadow="0 0.2rem 0.8rem rgba(0,0,0,0.4)"
                                alignItems="center"
                                justifyContent="center"
                                gap="1rem"
                                px="1rem"
                                py="0.5rem"
                            >
                                <IconButton
                                    aria-label="Previous image"
                                    icon={<FaArrowLeft />}
                                    variant="ghost"
                                    onClick={handleModalPrev}
                                    fontSize="1.4rem"
                                    color="#fff"
                                    bg="#CB0000"
                                    _hover={{ bg: "#CB0000", color: "#fff" }}
                                    borderRadius="2rem"
                                />
                                <IconButton
                                    aria-label="Next image"
                                    icon={<FaArrowRight />}
                                    variant="ghost"
                                    onClick={handleModalNext}
                                    fontSize="1.4rem"
                                    color="#fff"
                                    bg="#CB0000"
                                    _hover={{ bg: "#CB0000", color: "#fff" }}
                                    borderRadius="2rem"
                                />
                            </Flex>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default EventGallery;
