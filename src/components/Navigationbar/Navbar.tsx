// import { useState } from "react";

// import { AiOutlineMenu } from "react-icons/ai";
// import logo1 from "../assets/images/logo.svg";
// import logo from "../assets/images/logo.png";

// const Navbar = () => {
//   const [expanded, setExpanded] = useState(false);

//   const handleToggle = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <nav
//       className={`nav collapsible ${expanded ? "collapsible--expanded" : ""}`}
//     >
//       <a className="nav__brand" href="/">
//         <img src={logo} alt="" />
//       </a>
//       <AiOutlineMenu
//         className="icon icon--white nav__toggler"
//         onClick={handleToggle}
//       />
//       <ul className="list nav__list collapsible__content">
//         <li className="nav__item">
//           <a href="#">About Us</a>
//         </li>
//         <li className="nav__item">
//           <a href="#">Event</a>
//         </li>
//         <li className="nav__item">
//           <a href="#">Team</a>
//         </li>
//         <li className="nav__item">
//           <a href="#">Speakers</a>
//         </li>
//         <li className="nav__item">
//           <a href="#">Join Us</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Flex, Link, Image, useMediaQuery, HStack } from "@chakra-ui/react";
import { youChooseLogo, tedxWhite } from "../../assets";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [isLessThan768] = useMediaQuery("(max-width: 768px)");

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Flex
      className="nav"
      bg="#000"
      justifyContent="space-between"
      flexWrap="wrap"
      padding="0.5rem 1rem"
      alignItems="center"
      // width="200vw"
    >
      <Link>
        <HStack spacing={{ base: 16, lg: 7 }}>
          <Image src={youChooseLogo} width="6.5rem" alt="logo" />
          <Image src={tedxWhite} width="27rem" alt="tedxavelorne" />
        </HStack>
      </Link>
      {/* <Icon
        className="icon icon--white nav__toggler"
        as={AiOutlineMenu}
        width="30px"
        height="30px"
        color="var(--color-white)"
        opacity={expanded ? "1" : "0.5"}
        boxShadow={expanded ? "0 0 0 3px #333" : ""}
        borderRadius="5"
        transition="opacity 0.3s, boxShadow 0.15s"
        cursor="pointer"
        display={{ lg: "none" }}
        onClick={handleToggle}
      /> */}
      {/* <List
        className="list nav__list collapsible__content"
        width={{ base: "100%", lg: "auto" }}
        display={{ lg: "flex" }}
        margin="0"
        color="var(--color-headings)"
        padding="0"
        fontSize={{ lg: "1.6rem" }}
        style={{
          maxHeight: expanded && isLessThan768 ? "1000px" : "0",
          opacity: expanded && isLessThan768 ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.3s, opacity 0.3s",
        }}
      >
        <ListItem
          className="nav__item"
          padding="0.5rem 2rem"
          color="#d2d0db"
          borderBottom="1px solid #222"
          border={{ lg: "0" }}
          _hover={{
            color: "#fff",
          }}
        >
          Item 1
        </ListItem>
        <ListItem
          className="nav__item"
          padding="0.5rem 2rem"
          color="#d2d0db"
          borderBottom="1px solid #222"
          border={{ lg: "0" }}
          _hover={{
            color: "#fff",
          }}
          transition="color 0.3s"
        >
          Item 2
        </ListItem>
        <ListItem
          className="nav__item"
          padding="0.5rem 2rem"
          color="#d2d0db"
          borderBottom="1px solid #222"
          border={{ lg: "0" }}
          _hover={{
            color: "#fff",
          }}
          transition="color 0.3s"
        >
          Item 3
        </ListItem>
      </List> */}
    </Flex>
    // <Flex
    //   className={`nav collapsible ${expanded ? "collapsible--expanded" : ""}`}
    //   bg="#000"
    //   justifyContent="space-between"
    //   flexWrap="wrap"
    //   padding="1rem"
    //   alignItems="center"
    // >
    //   <Link as="a" className="nav__brand" href="/">
    //     <Box
    //       transform="translateY(5px)"
    //       width="62px"
    //       marginLeft="10px"
    //       as="img"
    //       src={youChooseLogo}
    //       alt=""
    //     />
    //   </Link>
    //   <IconButton
    //     className="icon icon--white nav__toggler"
    //     width="40px"
    //     height="40px"
    //     fill="#fff"
    //     onClick={handleToggle}
    //     as={AiOutlineMenu}
    //     aria-label="Toggle Navigation"
    //   />
    //   <Collapse in={expanded}>
    //     <List
    //       className="list nav__list collapsible__content"
    //       width="100%"
    //       margin="0"
    //       paddingLeft="0"
    //       maxHeight="0"
    //       overflow={"hidden"}
    //       opacity={0}
    //       transition="max-height 0.3s, opacity 0.3s"
    //     >
    //       <ListItem
    //         className="nav__item"
    //         padding="0.5rem 2rem"
    //         borderBottom="1px solid #222"
    //       >
    //         <Link
    //           color="#d2d0db"
    //           transition="color 0.3s"
    //           _hover={{ color: "#fff" }}
    //         >
    //           About Us
    //         </Link>
    //       </ListItem>
    //       <ListItem
    //         className="nav__item"
    //         padding="0.5rem 2rem"
    //         borderBottom="1px solid #222"
    //       >
    //         <Link
    //           color="#d2d0db"
    //           transition="color 0.3s"
    //           _hover={{ color: "#fff" }}
    //         >
    //           Event
    //         </Link>
    //       </ListItem>
    //       <ListItem
    //         className="nav__item"
    //         padding="0.5rem 2rem"
    //         borderBottom="1px solid #222"
    //       >
    //         <Link
    //           color="#d2d0db"
    //           transition="color 0.3s"
    //           _hover={{ color: "#fff" }}
    //         >
    //           Team
    //         </Link>
    //       </ListItem>
    //       <ListItem
    //         className="nav__item"
    //         padding="0.5rem 2rem"
    //         borderBottom="1px solid #222"
    //       >
    //         <Link
    //           color="#d2d0db"
    //           transition="color 0.3s"
    //           _hover={{ color: "#fff" }}
    //         >
    //           Speakers
    //         </Link>
    //       </ListItem>
    //       <ListItem
    //         className="nav__item"
    //         padding="0.5rem 2rem"
    //         borderBottom="1px solid #222"
    //       >
    //         <Link
    //           color="#d2d0db"
    //           transition="color 0.3s"
    //           _hover={{ color: "red" }}
    //         >
    //           Join Us
    //         </Link>
    //       </ListItem>
    //     </List>
    //   </Collapse>
    // </Flex>
  );
};

export default Navbar;
