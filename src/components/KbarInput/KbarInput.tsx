import React from "react";
import { useKBar } from "kbar";
import { Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";

export const KbarInput = () => {
    const { query } = useKBar();

    const onClick = () => {
        query.toggle();
    };

    return (
        <Button
            onClick={onClick}
            width={{ lg: "12rem", xl: "15rem" }}
            height="3.4rem"
            borderWidth="2px"
            borderColor={useColorModeValue("black", "#38B4C1")}
            bg={useColorModeValue("tranparent", "gray.800")}
            // opacity="0.2"
            rounded="lg"
            fontWeight="medium"
            // color={{ base: "slate.500", hover: "slate.700", dark: "slate.300", darkHover: "slate.300" }}
            _hover={{
                color: useColorModeValue("white", "black"),
                bg: useColorModeValue("black", "white"),
                borderColor: useColorModeValue("black", "white")
            }}
        >
            <Flex
                alignItems="center"
                justifyContent="space-between"
                display={{ base: "none", lg: "flex" }}
                px="3"
            >
                <Text fontSize="1.5rem">Search...</Text>
                {/* <Text>⌘K</Text> */}
            </Flex>
        </Button>
    );
};
