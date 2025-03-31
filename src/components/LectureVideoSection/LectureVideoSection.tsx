import React from "react";
import { Box, AspectRatio } from "@chakra-ui/react";

interface LectureVideoSectionProps {
    videoEmbedUrl: string;
}

const LectureVideoSection: React.FC<LectureVideoSectionProps> = ({
    videoEmbedUrl,
}) => {
  return (
    <Box
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
          src={`https://player.vimeo.com/video/${videoEmbedUrl}`}
          title="Lecture Video"
          style={{ width: "100%", height: "100%", border: "none" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </AspectRatio>
    </Box>
  );
};

export default LectureVideoSection;
