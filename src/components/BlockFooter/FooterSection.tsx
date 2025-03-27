import React from "react";
import {
    Box,
    Text,
    List,
    ListItem,
    Link,
    Icon,
    useColorMode,
    useColorModeValue,
    HStack,
} from "@chakra-ui/react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useTranslation } from "react-i18next";

interface FooterSectionProps {
    title: string;
    links: { label: string; href: string; target?: string; rel?: string }[];
    isCollapsible?: boolean;
    isExpanded?: boolean;
    toggleExpand?: () => void;
}

const FooterSection: React.FC<FooterSectionProps> = ({
    title,
    links,
    isCollapsible = false,
    isExpanded = false,
    toggleExpand,
}) => {
    const { t, i18n } = useTranslation();

    const linkColor = useColorModeValue("gray.300", "#777");
    const hoverColor = useColorModeValue("#fff", "#fff");
    const chevronColor = useColorModeValue("#debdc4", "#393939");

    return (
        <Box
        display={"none"}
            className={`footer__section ${isCollapsible ? (isExpanded ? "collapsible--expanded" : "") : ""}`}
            padding="2rem"
            paddingY={{ lg: "0" }}
            borderBottom={{ base: `1px solid ${useColorModeValue("#debdc4", "#393939")}`, lg: "0" }}
            onClick={isCollapsible ? toggleExpand : undefined}
        >
            <Box display="flex" justifyContent="space-between" cursor={isCollapsible ? "pointer" : "default"}>
                <Text
                    fontSize="1.5rem"
                    fontWeight="bold"
                    color={useColorModeValue("gray.50", "#ddd")}
                    textTransform="uppercase"
                    paddingBottom="0.4rem"
                >
                    {t(title)}
                </Text>
                {isCollapsible && (
                    <Icon
                        as={IoIosArrowDropdownCircle}
                        width="40px"
                        height="40px"
                        color={chevronColor}
                        style={{
                            transform: isExpanded ? "rotate(0)" : "rotate(-90deg)",
                            transition: "transform 0.3s",
                        }}
                    />
                )}
            </Box>
            <Box
                style={
                    isCollapsible
                        ? {
                            maxHeight: isExpanded ? "1000px" : "0",
                            opacity: isExpanded ? 1 : 0,
                            overflow: "hidden",
                            transition: "max-height 0.3s, opacity 0.3s",
                        }
                        : {}
                }
            >
                <HStack>
                    <List paddingLeft="0">
                        {links.map((link, idx) => (
                            <ListItem key={idx} paddingBottom="1rem">
                                <Link
                                    href={link.href}
                                    target={link.target || "_self"}
                                    rel={link.rel || "noopener noreferrer"}
                                    fontSize="1.5rem"
                                    color={linkColor}
                                    _hover={{ color: hoverColor }}
                                >
                                    {t(link.label)}
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </HStack>
            </Box>
        </Box>
    );
};

export default FooterSection;
