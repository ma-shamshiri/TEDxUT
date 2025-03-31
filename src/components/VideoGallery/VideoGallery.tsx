import React from "react";
import { Flex, SimpleGrid, Box, Heading } from "@chakra-ui/react";
import LectureVideoSection from "../LectureVideoSection";
import { lectureVideos } from "./data";

const VideoGallery: React.FC = () => {

    return (
        <Flex
            flexDirection="column"
            width="100%"
            overflow="hidden"
            paddingY={{ base: "2rem", lg: "10rem" }}
            justifyContent="center"
            alignItems="center"
            bg="#000"
        >
            <Heading
                as="h2"
                mb={{base:"3rem", lg:"8rem"}}
                fontSize={{ base: "3xl", md: "5xl" }}
                fontWeight="bold"
                fontFamily={"'Rubik', sans-serif"}
                dir="rtl"
                textAlign="center"
                color="#fff"
            >
                مروری بر رویداد سال گذشته
            </Heading>

            <SimpleGrid
                columns={{ base: 1, md: 2, lg: 4 }}
                /* Reduce or remove spacing to minimize gaps. */
                spacingX="2rem"
                spacingY={{ base: "2rem", lg: "4rem" }}
                padding="2rem"
                /* Key: ensure items stretch to full column width */
                justifyItems="stretch"
                alignItems="stretch"
                /* On large screens, span the entire width. */
                width={{ base: "95%", lg: "100%" }}
            >
                {lectureVideos.map((video, index) => {
                    const isOffset = index % 2 === 1;
                    return (
                        <Box
                            key={video.id}
                            width="100%"
                            transform={{
                                base: "",
                                lg: isOffset ? "translateY(80px)" : "none",
                            }}
                            transition="transform 0.3s ease"
                            _hover={{
                                transform: isOffset
                                    ? "translateY(80px) scale(1.03)"
                                    : "scale(1.03)",
                            }}
                        >
                            <LectureVideoSection videoEmbedUrl={video.videoEmbedUrl} />
                        </Box>
                    );
                })}
            </SimpleGrid>
        </Flex>
    );
};

export default VideoGallery;
