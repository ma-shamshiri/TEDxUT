
import React, { useState } from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const AnimatingNumber = ({
  value,
  start = 0,
  duration = 3,
  delay = 0.2,
  fontSize,
  color = "white",
  hasPlusSign = false,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [counterOn, setCounterOn] = useState(true);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <Box ref={ref}>
        {counterOn && (
          <>
            <HStack>
              {hasPlusSign && (
                <Text
                  fontSize={{
                    base: fontSize.base,
                    md: fontSize.md,
                    lg: fontSize.lg,
                    xl: fontSize.xl,
                  }}
                  fontWeight="bold"
                  color={color}
                >
                  +
                </Text>
              )}
              <Text
                fontSize={fontSize}
                fontWeight="bold"
                color={color}
              >
                <CountUp
                  start={start}
                  end={inView ? value : 0}
                  duration={duration}
                  delay={delay}
                />
              </Text>
            </HStack>
          </>
        )}
      </Box>
    </ScrollTrigger>
  );
};

export default AnimatingNumber;
