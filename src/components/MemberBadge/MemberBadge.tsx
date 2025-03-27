import { Box, Text } from "@chakra-ui/react";

interface MemberBadgeProps {
  badgeText: string;
  badgeColor: string;
  badgeTextSize: string;
  badgePaddingRight: string | number; // Accepts both string and number
}

export const MemberBadge: React.FC<MemberBadgeProps> = ({
  badgeText,
  badgeColor,
  badgeTextSize,
  badgePaddingRight,
}) => {
  return (
    <>
      {/* ======= Rectangle ======= */}
      <Box
        top={{ base: "85", xl: "25" }}
        position="absolute"
        right={{ base: "auto", xl: "0" }}
        left={{ base: "-65px", xl: "auto" }}
        // top={{ base: "430", md: "430", lg: "430", xl: "25" }}
        width="160px"
        height="30px"
        bg={badgeColor}
        textAlign="right"
        justifyContent="center"
        alignItems="center"
        transform={{ base: "rotate(90deg)", xl: "rotate(0deg)" }}
      >
        <Text
          paddingTop={{ base: "0", xl: "1" }}
          paddingBottom={{ base: "1", xl: "auto" }}
          paddingRight={badgePaddingRight}
          fontSize={badgeTextSize}
          fontWeight="bold"
          textColor="white"
          transform={{ base: "rotate(180deg)", xl: "rotate(0deg)" }}
        >
          {badgeText}
        </Text>
      </Box>

      {/* ======= Triangle ======= */}
      <Box
        position="absolute"
        top={{ base: "152", xl: "25" }}
        right={{ base: "auto", xl: "132" }}
        left={{ base: "0", xl: "auto" }}
        width="0"
        height="0"
        backgroundColor="transparent"
        borderStyle="solid"
        borderLeftWidth="15px"
        borderRightWidth="15px"
        borderBottomWidth="30px"
        borderLeftColor="transparent"
        borderRightColor="transparent"
        borderBottomColor="gray.800"
        transform={{ base: "rotate(0deg)", xl: "rotate(90deg)" }}
      ></Box>
    </>
  );
};

// export default MemberBadge;
