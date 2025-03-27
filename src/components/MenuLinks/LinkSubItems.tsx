import { Box, List, ListItem, Text, useColorModeValue, Link } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { SubLinksBoxProps } from "./interfaces";
import { useTranslation } from "react-i18next";

export const SubLinksBox = (props: SubLinksBoxProps) => {
  const { subLinks, extraLinks } = props;

  const { t } = useTranslation();

  const navigate = useNavigate();

    const handleNavigation = (link: string) => {
        if (window.location.hash === link) {
            // Temporarily remove the hash using history.replaceState
            history.replaceState(null, '', ' ');
            // Navigate after a brief delay to ensure the hash is processed
            setTimeout(() => {
                navigate(link);
            }, 0);
        } else {
            navigate(link);
        }
    };

  return (
    <Box
      position="absolute"
      top="2.4rem"
      width="fit-content"
      boxShadow="0 0 30px 1px black"
      display={{ base: 'none', groupHover: 'flex' }}
      borderRadius="7px"
    >
      <List
        padding="1.3rem"
        width="35rem"
        height="fit-content"
        flexDirection="column"
        // bg={useColorModeValue("gray.200", "gray.800")}

        bg={useColorModeValue(
          // "#F0E2B6",
          "linear-gradient(to right bottom, #ebebeb, #f7f7f7, #fcfcfc)",
          "#232323"
          // "linear-gradient(to right top, #FF00CC, #333399)",
        )}
        borderRadius="7px"
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
            _hover={{ backgroundColor: useColorModeValue("gray.200", "gray.700") }}
            cursor="pointer"
            paddingY="3rem"
          >
            <Link
              className="flex items-center"
              as={RouterLink}
              to={subLink.link}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(subLink.link);
              }}
              cursor="pointer"
              // href={subLink.link}
              _hover={{ textDecoration: 'none' }}
            >
              <Box
                className="ml-5"
                height="3.9rem"
                width="3.9rem"
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
                  {t(subLink.name)}
                </Text>
                <Text
                  fontSize="1.3rem"
                  color={useColorModeValue("gray.500", "gray.500")}
                >
                  {t(subLink.description)}
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
              <Link
                className="flex items-center w-full"
                as={RouterLink}
                to={extraLink.link}
                cursor="pointer"
                // href={extraLink.link}
                _hover={{ textDecoration: 'none' }}
              >
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
  );
};
