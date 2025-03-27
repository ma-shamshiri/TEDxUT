import { useState } from "react";
import { motion } from "framer-motion";
import { Links } from "./Links";
import { ToggleButton } from "./ToggleButton";
import { Box, useColorModeValue } from "@chakra-ui/react";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    // clipPath: {
    //   base: "circle(1200px at 50px 50px)",
    //   lg: "circle(1200px at 50px 50px)",
    // },

    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    // clipPath: {
    //   base: "circle(20px at 50px 50px)",
    //   lg: "circle(30px at 50px 50px)",
    // },

    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box position="relative">
      <motion.div animate={open ? "open" : "closed"}>
        <motion.div variants={variants}>
          <Box
            // marginTop="15rem"
            width={{ base: "100%", lg: "500px" }}
            style={{
              zIndex: 999,
              // position: "relative",
              position: "fixed",
              top: "0",
              left: "0",
              bottom: "0",
              background: useColorModeValue("black", "white"),
            }}
          >
            <Links />
          </Box>
        </motion.div>
        <ToggleButton onToggle={toggleSidebar} />
      </motion.div>
    </Box>
  );
};

// export default Sidebar;
