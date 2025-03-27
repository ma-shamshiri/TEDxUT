import React, { useEffect } from "react";
import {
  Box,
  Link as ChakraLink,
  Grid,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { GiTalk } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles
import { ted, tedx, tedxavelorne } from "../../assets";

const featuresData = [
  {
    icon: GiTalk,
    iconColor: "var(--color-primary)",
    title: "TED",
    description: "tedDescription",
    linkText: "exploreMore",
    linkUrl: "https://www.ted.com/about/our-organization",
    image: {
      src: ted,
      alt: "easy",
    },
    size: "40px",
  },
  {
    icon: GiTalk,
    iconColor: "var(--color-primary)",
    title: "TEDx",
    description: `tedxDescription`,
    linkText: "exploreMore",
    linkUrl:
      "https://www.ted.com/participate/organize-a-local-tedx-event/before-you-start/what-is-a-tedx-event",
    image: {
      src: tedx,
      alt: "easy",
      // srcSetWebp: `${fastWebp} 1x, ${fastWebp2x} 2x`,
      // srcSetPng: `${fastJpg} 1x, ${fastJpg2x} 2x`,
    },
    size: "40px",
  },

  {
    icon: GiTalk,
    iconColor: "var(--color-primary)",
    title: "TEDxConcordiaUniversity",
    description: `tedxConcordiaUniversityDescription`,
    linkText: "exploreMore",
    linkUrl: "https://www.ted.com/tedx/events/57678",
    image: {
      src: tedxavelorne,
      alt: "easy",
      // srcSetWebp: `${wordpressWebp} 1x, ${wordpressWebp2x} 2x`,
      // srcSetPng: `${wordpressJpg} 1x, ${wordpressJpg2x} 2x`,
    },
    size: "40px",
  },
  // Add more feature objects as needed
];

interface FeatureProps {
  // icon: React.ElementType;
  // iconColor: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  image: {
    src: string;
    alt: string;
    // srcSetWebp: string;
    // srcSetPng: string;
  };
  size: string;
}

const Feature: React.FC<FeatureProps> = ({
  // icon: IconComponent,
  // iconColor,
  title,
  description,
  linkText,
  linkUrl,
  image,
  size,
}) => {
  const { t } = useTranslation();

  return (
    <Box
      className="feature__content"
    >
      <Text
        className="h3 feature__heading"
        // color="var(--color-white)"
        color={useColorModeValue("#000", "#fff")}
        fontSize={{ base: "2rem", lg: "2.2rem" }}
        fontWeight="bold"
        lineHeight="1.3"
        margin="1rem 0"
      >
        {title}
      </Text>
      <Text
        className="p"
        fontSize={{ base: "1.6rem", lg: "1.5rem" }}
        marginTop="0"
        marginBottom="1rem"
        color={useColorModeValue("gray.800", "gray.100")}
      // textAlign={"justify"}
      >
        {t(description)}
      </Text>
      <ChakraLink
        className="link-arrow"
        href={linkUrl}
        fontSize={{ base: "1.4rem", lg: "1.4rem" }}
        fontWeight="bold"
        color={useColorModeValue("#000", "#000")}
        textTransform="uppercase"
        target="_blank"
        rel="noopener noreferrer"
        _hover={{
          "::after": {
            marginLeft: "10px",
          },
        }}
        sx={{
          "::after": {
            content: '">"',
            marginLeft: "5px",
            transition: "margin 0.15s",
          },
        }}
      >
        {t(linkText)}
      </ChakraLink>
    </Box>
  );
};

interface FeatureImageProps {
  image: {
    src: string;
    alt: string;
    // srcSetWebp: string;
    // srcSetPng: string;
  };
}

const FeatureImage: React.FC<FeatureImageProps> = ({ image }) => (
  <Box as="picture">
    {/* <source type="image/webp" srcSet={image.srcSetWebp} />
    <source type="image/png" srcSet={image.srcSetPng} /> */}
    <Image
      className="feature__image"
      src={image.src}
      alt={image.alt}
      width="100%"
      borderRadius={"5%"}
      boxShadow="0 0 30px 1px black"
    />
  </Box>
);

const BlockFeatures: React.FC = () => {
  useEffect(() => {
    window.onload = () => {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
      });
    };
  }, []);

  const { t } = useTranslation();

  return (
    <Box
      id="more-info-section"
      className="block block--dark aos-animate"
      // bg={useColorModeValue("#F5DEB3	", "gray.800")}
      bg={useColorModeValue("#F0F0F0", "#900000")}
      width="100%"
      overflow="hidden"
    // clipPath="polygon(0% 0%, 100% 0%, 100% 95%, 0% 100%)"
    >
      <Box
        className="block container"
        padding="6rem 2rem"
        maxWidth={{ md: "70rem", lg: "100rem", xl: "105rem" }}
        margin="0 auto"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          className="block__header aos-animate"
          textAlign="center"
          // marginBottom="-4rem"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <Text
            className="h2 block__heading"
            color={useColorModeValue("#000", "#fff")}
            marginBottom="1rem"
            marginTop="0"
            fontSize={{ base: "2.8rem", lg: "4rem" }}
            fontWeight="bold"
            lineHeight="1.1"
          >
            {t("featureTitle")}
          </Text>
          <Text
            className="p"
            color={useColorModeValue("gray.800", "gray.100")}
            fontSize={{ base: "1.5rem", lg: "2.1rem" }}
            // fontWeight="bold"
            marginBottom={{ base: "3rem", lg: "6rem" }}
          >
            {t("featureSubTitle")}
          </Text>
        </Box>
        {featuresData.map((feature, index) => (
          <Box
            key={index}
            className={`grid grid--1x2 feature feature-${index % 2 === 0 ? "even" : "odd"
              }`}

          >
            <Grid
              display="grid"
              templateColumns={["1fr", null, null, "repeat(2, 1fr)"]}
              gap="4rem 2rem"
              margin="4rem 0"
              sx={{
                order: index % 2 === 0 ? 1 : 2,
                // textAlign: index % 2 === 0 ? "right" : "left",
              }}
            >
              {index % 2 === 0 ? (
                <>
                  <Box
                    className="aos-animate"
                    data-aos="fade-right"
                    data-aos-duration="500"
                  >
                    <Feature {...feature} size={feature.size} />
                  </Box>
                  <Box
                    className="aos-animate"
                    data-aos="fade-left"
                    data-aos-duration="500"
                  >
                    <FeatureImage image={feature.image} />
                  </Box>
                </>
              ) : (
                <>
                  <Box
                    className="aos-animate"
                    data-aos="fade-right"
                    data-aos-duration="500"
                  >
                    <FeatureImage
                      image={feature.image}
                      data-aos-duration="500"
                    />
                  </Box>
                  <Box
                    className="aos-animate"
                    data-aos="fade-left"
                    data-aos-duration="500"
                  >
                    <Feature {...feature} size={feature.size} />
                  </Box>
                </>
              )}
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BlockFeatures;
