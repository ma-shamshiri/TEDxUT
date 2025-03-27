import {
    KBarProvider,
    KBarPortal,
    KBarPositioner,
    KBarAnimator,
    KBarSearch,
} from "kbar";
import { initialActions } from "../actions";
import { RenderResults } from "../results";
import { KBarWrapperProps } from "./wrapper.interface";
import { Box, useColorModeValue, Input } from "@chakra-ui/react";

export const KBarWrapper = (props: KBarWrapperProps) => {
    const { children } = props;

    const textColor = useColorModeValue("gray.800", "gray.100");
    const backgroundColor = useColorModeValue("gray.50", "gray.900");
    const borderColor = useColorModeValue("gray.900", "gray.50");
    const shadowColor = useColorModeValue(
        "rgba(0, 0, 0, 0.24) 0px 0px 40px",
        "rgba(0, 0, 0, 0.24) 0px 0px 40px"
    );
    const shadowBg = useColorModeValue("slate.300", "slate.700");

    return (
        <KBarProvider actions={initialActions}>
            <KBarPortal>
                <KBarPositioner style={{ backdropFilter: "blur(4px)", zIndex: 9999 }}>
                    <Box
                        as={KBarAnimator}
                        position="absolute"
                        top="9rem"
                        width="full"
                        maxW="600px"
                        maxH="500px"
                        bg={backgroundColor}
                        rounded="xl"
                        borderWidth="1px"
                        borderColor={borderColor}
                        color={textColor}
                        shadow={"shadowColor"}
                        boxShadow={`0 0 40px ${shadowBg}`}
                        overflow="hidden"
                    >
                        <Input
                            as={KBarSearch}
                            paddingY="3rem"
                            paddingX="2rem"
                            fontSize="1.5rem"
                            w="full"
                            boxSizing="border-box"
                            outline="none"
                            border="1px solid blue"
                            bg={backgroundColor}
                            color={textColor}
                            focusBorderColor="transparent"
                            errorBorderColor="transparent"
                        />
                        <RenderResults />
                    </Box>
                </KBarPositioner>
            </KBarPortal>
            {children}
        </KBarProvider>
    );
};
