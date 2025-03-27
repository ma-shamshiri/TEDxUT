import React from "react";
import { Box, Flex, Text, Kbd, useColorModeValue } from "@chakra-ui/react";
import { ActionId, ActionImpl } from "kbar";

export const ResultItem = React.forwardRef(
  (
    {
      action,
      active,
      currentRootActionId,
    }: {
      action: ActionImpl;
      active: boolean;
      currentRootActionId: ActionId;
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    const ancestors = React.useMemo(() => {
      if (!currentRootActionId) return action.ancestors;
      const index = action.ancestors.findIndex(
        (ancestor) => ancestor.id === currentRootActionId
      );
      return action.ancestors.slice(index + 1);
    }, [action.ancestors, currentRootActionId]);

    const bgColor = useColorModeValue("gray.50", "gray.800");
    const activeBgColor = useColorModeValue("gray.200", "gray.700");
    const borderColor = useColorModeValue("gray.50", "gray.900");
    const activeBorderColor = useColorModeValue("gray.900", "gray.50");
    const textColor = useColorModeValue("gray.700", "gray.200");
    const subtitleColor = useColorModeValue("gray.600", "gray.300");
    const kbdBgColor = useColorModeValue("gray.200", "gray.800");
    const activeKbdBgColor = useColorModeValue("gray.100", "gray.900");
    const kbdTextColor = useColorModeValue("gray.600", "gray.300");

    return (
      <Box
        ref={ref}
        paddingY="1rem"
        paddingX="2rem"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        cursor="pointer"
        borderLeftWidth="2px"
        borderStyle="solid"
        bg={active ? activeBgColor : bgColor}
        borderColor={active ? activeBorderColor : borderColor}
      >
        <Flex gap={2} alignItems="center" fontSize="1.5rem" >
          {action.icon}
          <Flex direction="column">
            <Box>
              {ancestors.length > 0 &&
                ancestors.map((ancestor) => (
                  <React.Fragment key={ancestor.id}>
                    <Text as="span" opacity={0.5} mr={2} color={"textColor"}>
                      {ancestor.name}
                    </Text>
                    <Text as="span" mr={2}>
                      &rsaquo;
                    </Text>
                  </React.Fragment>
                ))}
              <Text as="span" color={textColor} fontWeight="semibold">
                {action.name}
              </Text>
            </Box>
            {action.subtitle && (
              <Text as="span" fontSize="1.15rem" color={subtitleColor}>
                {action.subtitle}
              </Text>
            )}
          </Flex>
        </Flex>
        {/* {action.shortcut?.length ? (
          <Flex gridGap={4}>
            {action.shortcut.map((sc) => (
              <Kbd
                key={sc}
                py={1}
                px={1.5}
                bg={active ? activeKbdBgColor : kbdBgColor}
                color={kbdTextColor}
                rounded="md"
                fontSize="sm"
              >
                {sc}
              </Kbd>
            ))}
          </Flex>
        ) : null} */}
      </Box>
    );
  }
);