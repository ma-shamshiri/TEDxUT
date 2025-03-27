import { Box, List, ListItem, Text, useColorModeValue } from "@chakra-ui/react";
import { SubLinksBoxProps } from "./interfaces";
import { Link } from "react-router-dom";
import { useState } from "react";

export const SubLinksBox = (props: SubLinksBoxProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const { subLinks, extraLinks } = props;
  return (
    <Box
      position="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box
        position="absolute"
        top="10"
        bg={useColorModeValue('gray.50', 'gray.900')}
        boxShadow="0px 0px 40px rgba(0, 0, 0, 0.24)"
        shadow={useColorModeValue('gray.400', 'gray.700')}
        rounded="xl"
        display={isHovered ? 'flex' : 'none'}
        zIndex="10"
      >
        <List
          padding="2rem"
          width="35rem"
          height="fit-content"
          flexDirection="column"
        >
          {subLinks.map((subLink) => (
            <ListItem
              key={subLink.name}
              height="16"
              borderRadius="xl"
              display="flex"
              alignItems="center"
              justifyContent="start"
              fontWeight="bold"
              _hover={{ backgroundColor: useColorModeValue("gray.800", "gray.200") }}
              cursor="pointer"
            >
              <Link to={subLink.link} className="flex items-center">
                <Box
                  className="ml-5"
                  height="3.5rem"
                  width="3.5rem"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="lg"
                  backgroundColor={subLink.color}
                >
                  <Box
                    className="h-3/5 w-3/5"
                    color={useColorModeValue("gray.800", "gray.200")}
                    textAlign="center"
                  >
                    {subLink.icon}
                  </Box>
                </Box>
                <Box display="flex" flexDirection="column" marginLeft="5">
                  <Text
                    fontSize="1.5rem"
                    color={useColorModeValue("gray.600", "gray.200")}
                    marginBottom="1"
                  >
                    {subLink.name}
                  </Text>
                  <Text
                    fontSize="1rem"
                    color={useColorModeValue("gray.500", "gray.500")}
                  >
                    {subLink.description}
                  </Text>
                </Box>
              </Link>
            </ListItem>
          ))}
        </List>
        {extraLinks && (
          <div className="flex">
            <div className="h-[calc(100%-3em)] my-auto w-[1px] bg-gray-300 dark:bg-gray-700" />
            <ul className="w-56 p-2">
              {extraLinks?.map((extraLink) => (
                <Link to={extraLink.link} className="flex items-center w-full">
                  <li
                    key={extraLink.name}
                    className="p-2 h-10 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg flex items-center justify-start cursor-pointer text-sm font-semibold text-gray-600 dark:text-gray-200"
                  >
                    {extraLink.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </Box>
    </Box>
  );
};
