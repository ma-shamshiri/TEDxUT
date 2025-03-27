import { useColorMode, Button, useBreakpointValue } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";
import { LuMoonStar } from "react-icons/lu";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  const isLightMode = colorMode === "light";

  const iconSize = useBreakpointValue({ base: "1.8rem", lg: "1.8rem" });
  const iconContainerSize = useBreakpointValue({ base: "5.2rem", lg: "5.2rem" });

  return (
    <Button
      onClick={toggleColorMode}
      borderRadius="full"
      p={1}
      transition="background 0.4s, color 0.3s"
      _hover={{
        bg: isLightMode ? "#2220ba" : "gold",
        color: isLightMode ? "white" : "black",
      }}
      bg={isLightMode ? "gray.300" : "gray.600"}
      color={isLightMode ? "black" : "white"}
      boxSize={iconContainerSize}
    >
      {isLightMode ? (
        <LuMoonStar size={iconSize} />
      ) : (
        <SunIcon boxSize={iconSize} />
      )}
    </Button>
  );
};

export default ColorModeSwitch;
