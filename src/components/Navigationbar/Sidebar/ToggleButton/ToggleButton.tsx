import { Button, Box, useColorModeValue, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

interface ToggleButtonProps {
  onToggle: () => void;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({ onToggle }) => {

  const iconSize = useBreakpointValue({ base: "2rem", lg: "1.7rem" });

  return (
    <Button
      onClick={onToggle}
      style={{
        backgroundColor: "transparent",
        border: "none",
        zIndex: 999,
        position: "absolute",
        top: "10px",
        left: "10px",
        // position: "fixed",
        // width: "90px",
        // height: "90px",
        borderRadius: "50%",
        // top: "25px",
        // left: "25px",
        cursor: "pointer",
      }}
    >
      <motion.div
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      >
        <Box as="span" position="absolute" left="28px" top="28px">
          <RxHamburgerMenu
            fontSize="25px"
            color={useColorModeValue("white", "black")}
          />
        </Box>
      </motion.div>
      <motion.div
        variants={{
          closed: { opacity: 0 },
          open: { opacity: 1 },
        }}
        transition={{ duration: 0.1 }}
      >
        <Box as="span" position="absolute" left="28px" top="28px">
          <IoMdClose
            fontSize="25px"
            color={useColorModeValue("white", "black")}
          />
        </Box>
      </motion.div>
    </Button>
  );
};

// export default ToggleButton;
