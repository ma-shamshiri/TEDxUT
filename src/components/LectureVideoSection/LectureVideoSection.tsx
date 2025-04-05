import React, { useState } from "react";
import { Box, AspectRatio, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface LectureVideoSectionProps {
  videoUrl: string;
  imageUrl: string;
}

const MotionBox = motion(Box);

const LectureVideoSection: React.FC<LectureVideoSectionProps> = ({
  videoUrl,
  imageUrl
}) => {

  const [videoPlayed, setVideoPlayed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCoverClick = () => {
    if (!videoPlayed) {
      setVideoPlayed(true);
    }
  };

  return (
    <Box
    position="relative"
      width="100%"
      borderRadius="7px"
      border="1px solid gray"
      overflow="hidden"
    >
      {/* 
        If your video is vertical (taller than it is wide),
        use a ratio like 9/16. For a horizontal video, 16/9.
      */}
      <AspectRatio ratio={9 / 16} width="100%">
        <iframe
          src={`https://player.vimeo.com/video/${videoUrl}`}
          title="Lecture Video"
          style={{ width: "100%", height: "100%", border: "none" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </AspectRatio>
 
      <MotionBox
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        initial={{ opacity: 1 }}
        animate={{ opacity: videoPlayed ? 0 : isHovered ? 0 : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        zIndex={2}
        onClick={handleCoverClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ pointerEvents: videoPlayed ? "none" : "auto" }}
      >
        <Image
          src={imageUrl}
          alt={""}
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </MotionBox>
    </Box>
  );
};

export default LectureVideoSection;
