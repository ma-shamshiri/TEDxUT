import { KBarResults, useMatches } from "kbar";
import { ResultItem } from "./result-item";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";

export const RenderResults = () => {
  const { results, rootActionId } = useMatches();

  // Use hooks outside of the onRender callback
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("black", "white");

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <Box
            paddingY="0.5rem"
            paddingX="1rem"
            bg={bgColor}
            height="3rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text 
              fontSize="1.1rem" 
              color={textColor}
              // textTransform="uppercase"
            >
              {item}
            </Text>
          </Box>
        ) : (
          <ResultItem
            action={item}
            active={active}
            currentRootActionId={rootActionId as string}
          />
        )
      }
    />
  );
};

