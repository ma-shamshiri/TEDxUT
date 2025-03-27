import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { MenuLinksProps } from "./interfaces";
import { SubLinksBox } from "./LinkSubItems";
import { useTranslation } from "react-i18next";

export const MenuLinks = ({ menuLinks }: MenuLinksProps) => {
  const { t } = useTranslation();

  return (
    <ul className="flex px-1 lg:px-4">
      {menuLinks.map((link) => (
        <div className="relative group" key={link.name}>
          <Box
            as="li"
            paddingX={{ lg:"1rem", xl:"2.2rem" }}
            borderRadius="lg"
            cursor="pointer"
          >
            <Text
              color={useColorModeValue("gray.800", "gray.200")}
              fontSize={{ md: "1rem", lg:"1.4rem", xl: "1.6rem" }}
              // fontFamily="'Acme', sans-serif"
              // fontFamily="'Englebert', cursive"
              // fontWeight="semibold"
            >
              {t(link.name)}
            </Text>
          </Box>

          <div className="hidden group-hover:block">
            <SubLinksBox
              subLinks={link.subLinks ?? []}
              extraLinks={link.extraLinks}
            />
          </div>
        </div>
      ))}
    </ul>
  );
};
