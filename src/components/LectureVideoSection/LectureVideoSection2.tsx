import React from "react";
import {
    Box,
    Flex,
    Image,
    useBreakpointValue,
} from "@chakra-ui/react";

/**
 * LectureVideoSection places a square image on the left
 * and a 16:9 YouTube iframe on the right, each with matching heights
 * across breakpoints, but smaller on base screens to avoid overflow.
 */

interface LectureVideoSection2Props {
    /** URL for the square thumbnail image (left) */
    leftImageUrl: string;
    /** URL for the YouTube embed (right) */
    youtubeEmbedUrl: string;
}

const LectureVideoSection2: React.FC<LectureVideoSection2Props> = ({
    leftImageUrl,
    youtubeEmbedUrl,
}) => {
    // Decide a smaller dimension on base screens to prevent cutoff
    // and bigger dimension on larger screens
    const dimension = useBreakpointValue({
        base: 120,  // On small screens (phone), 120px tall
        md: 190,    // On medium screens (tablet), 150px tall
        lg: 140,    // On large screens, 200px tall
        xl: 210,    // On extra large screens, 200px tall
    }) ?? 150;

    // The right side must be 16:9 ratio with the same height => compute width
    const videoWidth = (360 / 640) * dimension;

    return (
        <Flex
            position="relative"
            direction="row"
            align="center"
            justify="center"
            gap={{ base: 2, md: 2 }}
            borderRadius="7px"
            boxShadow="0 4px 16px rgba(0,0,0,0.1)"
            p={{ base: 2, md: 2 }}
            bg="#fff"
            /* Remove width="fit-content" so it can shrink within the grid */
            overflow="hidden"
            height="720px"
            width="1028px"
            
        >
            {/* Left: Square Image */}
            <Box
                w={`${dimension}px`}
                h={`${dimension}px`}
                borderRadius="7px"
                overflow="hidden"
                flex="none"
                bg="#000"
                boxShadow="sm"
                _hover={{ transform: "scale(1.02)" }}
                transition="transform 0.3s ease-out"
            >
                <Image
                    src={leftImageUrl}
                    alt="Square Thumbnail"
                    w="100%"
                    h="100%"
                    objectFit="cover"
                />
            </Box>

            {/* Right: 16:9 YouTube Video */}
            <Box
                // w={`${videoWidth}px`}
                // h={`${dimension}px`}
                width="100%"
                height="100%"
                borderRadius="7px"
                overflow="hidden"
                flex="none"
                bg="#000"
                boxShadow="sm"
                _hover={{ transform: "scale(1.02)" }}
                transition="transform 0.3s ease-out"
                position="relative"
            >
                <iframe
                    src={`https://player.vimeo.com/video/${youtubeEmbedUrl}`}
                    // allowfullscreen
                    title="Lecture Video"
                    style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                        borderRadius: "0.5rem",
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </Box>
        </Flex>
    );
};

export default LectureVideoSection2;
