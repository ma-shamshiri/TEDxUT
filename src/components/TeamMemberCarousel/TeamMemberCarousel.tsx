// TeamMemberCarousel.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import TeamMemberCarouselCard from './TeamMemberCarouselCard';
import { teamMembersData } from './data';

const ITEMS_TO_SHOW = 5; // how many items are visible at once

const TeamMemberCarousel: React.FC = () => {
  const totalItems = teamMembersData.length;
  const [centerIndex, setCenterIndex] = useState(0);

  // For auto-play
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startAutoPlay = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, 3000); // change duration as needed
    }
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handlePrev = () => {
    setCenterIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setCenterIndex((prev) => (prev + 1) % totalItems);
  };

  /**
   * Determine which team members to show.
   * We take the centerIndex as the middle item (offset = 0).
   * For 5 items, offsets are -2, -1, 0, +1, +2.
   */
  const visibleIndices = Array.from({ length: ITEMS_TO_SHOW }, (_, i) => {
    // For i in [0..4], offset = i - 2 => [-2, -1, 0, 1, 2]
    const offset = i - Math.floor(ITEMS_TO_SHOW / 2);
    // Use modulo to wrap around the array
    return (centerIndex + offset + totalItems) % totalItems;
  });

  return (
    <Box
      position="relative"
      width="100%"
      height="400px" // adjust as needed
      overflow="hidden"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      {/* Left Arrow (Previous) */}
      <IconButton
        icon={<AiOutlineArrowLeft />}
        aria-label="Previous"
        position="absolute"
        top="50%"
        left="40px"
        transform="translateY(-50%)"
        zIndex={20}
        bg="red.500"
        color="white"
        _hover={{ bg: 'red.600', transform: 'translateY(-50%) scale(1.1)' }}
        onClick={handlePrev}
      />

      {/* Right Arrow (Next) */}
      <IconButton
        icon={<AiOutlineArrowRight />}
        aria-label="Next"
        position="absolute"
        top="50%"
        right="40px"
        transform="translateY(-50%)"
        zIndex={20}
        bg="red.500"
        color="white"
        _hover={{ bg: 'red.600', transform: 'translateY(-50%) scale(1.1)' }}
        onClick={handleNext}
      />

      {/* Display the 5 visible items with a "coverflow-like" effect */}
      {visibleIndices.map((itemIndex, idx) => {
        // offset in [-2..2] for 5 items
        const offset = idx - Math.floor(ITEMS_TO_SHOW / 2);

        // Determine styling based on offset
        let opacity = 1;
        let scale = 1;
        let zIndex = 5 - Math.abs(offset); // center item on top

        // Far edges: offset = -2 or 2 => dim & smaller
        if (Math.abs(offset) === 2) {
          opacity = 0.4;
          scale = 0.8;
        }
        // Next to center: offset = -1 or 1 => slightly dim
        else if (Math.abs(offset) === 1) {
          opacity = 0.7;
          scale = 0.9;
        }

        // Horizontal shift between each item
        const xOffset = offset * 250; // adjust spacing to your liking

        return (
          <Box
            key={teamMembersData[itemIndex].id}
            position="absolute"
            top="50%"
            left="50%"
            transform={`translate(-50%, -50%) translateX(${xOffset}px) scale(${scale})`}
            transition="all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            style={{ opacity, zIndex }}
          >
            <TeamMemberCarouselCard member={teamMembersData[itemIndex]} />
          </Box>
        );
      })}
    </Box>
  );
};

export default TeamMemberCarousel;
