import React, { useEffect } from "react";
import {
  Box,
  Grid,
  Image,
  Link,
  List,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles
import { speaker, sponsor, starsImage, teamMember, tickImage } from "../../assets";
import { useTranslation } from "react-i18next";

export const BlockJoinUs: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.onload = () => {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
      });
    };
  }, []);

  return (
    <Box
      className="block block--dark block--skewed-right aos-animate"
      bg={useColorModeValue(
        "linear-gradient(180deg, #6868f7, #6868f7, #a6a6ff, #a6a6ff)",
        "linear-gradient(180deg, #0e0e29, #0e0e29, #272763, #272763)"
      )}
      color="#7b858b"
      overflow={"hidden"}
    >
      <Box
        width="100%"
        height="100%"
        backgroundImage={starsImage}
        backgroundSize={{ base: "contain", lg: "cover" }}
        padding="6rem 2rem"
        paddingBottom={{ base: "13rem", lg: "17rem" }}
      >
        <Box
          className="block__header container"
          padding="0rem 2rem"
          textAlign="center"
          maxWidth="100rem"
          margin="0 auto"
        >
          <Box
            className="aos-animate"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <Text
              className="h2 block__heading"
              color={useColorModeValue("gray.900", "gray.100")}
              marginBottom="4rem"
              marginTop="0"
              fontSize={{ base: "2.8rem", lg: "4rem" }}
              fontWeight="bold"
              lineHeight="1.1"
            >
              {t("joinUsPageTitle")}
            </Text>
            <Text
              className="p"
              color={useColorModeValue("gray.800", "gray.300")}
              marginBottom="10rem"
              marginTop="0"
              fontSize={{ base: "1.5rem", lg: "2.1rem" }}
              lineHeight="1.5"
            >
              {t("joinUsPageSubTitle")}
            </Text>
          </Box>
          <Box className="grid grid--1x3">
            <Grid
              className="aos-animate"
              display="grid"
              templateColumns={["1fr", null, null, "repeat(3, 1fr)"]}
              gap="8rem 4rem"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <Box
                className="plan"
                _hover={{ transform: "scale(1.05)" }}
                transition="transform 0.2s ease-out"
              >
                <Box
                  className="card card--secondary aos-animate"
                  borderRadius="7px"
                  boxShadow="0 0 30px 1px black"
                  overflow="hidden"
                  justifyContent="center"
                  alignItems="center"
                  maxWidth="500px"
                  margin="0 auto"
                // data-aos="fade-right"
                // data-aos-duration="500"
                >
                  <Image
                    src={speaker}
                    width="100%"
                    // objectFit="cover"
                    opacity="0.99"
                    // p="0.1rem 0.5%"
                    // borderRadius="7px"
                    borderTopRadius="7px"
                  />
                  <Box
                    className="card__header"
                    bg="linear-gradient(to bottom, #6322BF, #F226AA)"
                    color="#fff"
                    p="2rem 7%"
                  >
                    <Text
                      className="plan__name"
                      color="#fff"
                      margin="0"
                      fontSize={{ base: "4rem", lg: "2.5rem" }}
                      fontWeight="bold"
                    >
                      {t("speaker")}
                    </Text>
                  </Box>
                  <Box className="card__body" p="2rem 7%" bg="#FFFFFF">
                    <List
                      className="list list--tick"
                      color="var(--color-headings)"
                      padding={0}
                      // paddingLeft={"3rem"}
                      style={{
                        listStyleImage: `url(${tickImage})`,
                      }}
                    >
                      <Text fontSize={{ base: "2rem", lg: "1.6rem" }}>
                        {t("joinUsSpeakerDescription")}
                      </Text>

                      <Link
                        className="btn btn--secondary btn--block"
                        // href="https://docs.google.com/forms/d/e/1FAIpQLSc54Ba2B975pYmKBXZVaXN0xdQ97e18fE8NmGb-WfT27KXJyw/viewform"
                        href="/joinus/speaker/"
                        // target="_blank"
                        border="2px solid var(--color-headings)"
                        borderRadius="40px"
                        cursor="pointer"
                        fontSize={{ base: "1.8rem", lg: "1.5rem" }}
                        fontWeight="600"
                        margin="1rem 0"
                        outline="0"
                        padding="2rem 0vw"
                        textAlign="center"
                        textTransform="uppercase"
                        whiteSpace="nowrap"
                        bg="#fff"
                        color="var(--color-headings)"
                        display="inline-block"
                        width="100%"
                        _hover={{
                          bg: "var(--color-headings)",
                          color: "#fff",
                        }}
                      >
                        {t("joinUs")}

                      </Link>
                    </List>
                  </Box>
                </Box>
              </Box>

              <Box
                className="plan plan--popular aos-animate"
                transform="scale(1.1)"
                _hover={{ transform: "scale(1.15)" }}
                transition="transform 0.2s ease-out"
              // data-aos="fade-up"
              // data-aos-duration="500"
              >
                <Box
                  className="card card--secondary aos-animate"
                  borderRadius="7px"
                  boxShadow="0 0 30px 1px black"
                  overflow="hidden"
                  justifyContent="center"
                  alignItems="center"
                  maxWidth="500px"
                  margin="0 auto"
                // data-aos="fade-right"
                // data-aos-duration="500"
                >
                  <Image
                    src={teamMember}
                    width="100%"
                    // height="100%"
                    // objectFit="fill"
                    opacity="0.99"
                    // p="0.1rem 0.5%"
                    // borderRadius="7px"
                    borderTopRadius="7px"
                  />
                  <Box
                    className="card__header"
                    bg="linear-gradient(to bottom, rgba(31,191,88, 1), rgba(1,186,234, 1))"
                    color="#fff"
                    p="2rem 7%"
                  >
                    <Text
                      className="plan__name"
                      color="#fff"
                      margin="0"
                      fontSize={{ base: "4rem", lg: "2.5rem" }}
                      fontWeight="bold"
                    >
                      {t("teamMember")}
                    </Text>
                  </Box>
                  <Box className="card__body" p="2rem 7%" bg="#FFFFFF">
                    <List
                      className="list list--tick"
                      color="var(--color-headings)"
                      padding={0}
                      // paddingLeft={"3rem"}
                      style={{
                        listStyleImage: `url(${tickImage})`,
                      }}
                    >
                      <Text fontSize={{ base: "r2em", lg: "1.6rem" }}>
                        {t("joinUsTeamMemberDescription")}
                      </Text>

                      <Link
                        className="btn btn--secondary btn--block"
                        // href="https://docs.google.com/forms/d/e/1FAIpQLSc0UPKkrAe914FpkjrmzyIRu0WEwJlS23JAEAx8KC8A3Vv4Tg/viewform"
                        href="/joinus/team/"
                        // target="_blank"
                        border="2px solid var(--color-headings)"
                        borderRadius="40px"
                        cursor="pointer"
                        fontSize={{ base: "1.8rem", lg: "1.5rem" }}
                        fontWeight="600"
                        margin="1rem 0"
                        outline="0"
                        padding="2rem 0vw"
                        textAlign="center"
                        textTransform="uppercase"
                        whiteSpace="nowrap"
                        bg="#fff"
                        color="var(--color-headings)"
                        display="inline-block"
                        width="100%"
                        _hover={{
                          bg: "var(--color-headings)",
                          color: "#fff",
                        }}
                      >
                        {t("joinUs")}
                      </Link>
                    </List>
                  </Box>
                </Box>
              </Box>

              <Box
                className="plan aos-animate"
                _hover={{ transform: "scale(1.05)" }}
                transition="transform 0.2s ease-out"
                // data-aos="fade-up"
                // data-aos-duration="500"
                bg={useColorModeValue("#FFFFFF", "gray.900")}
              >
                <Box
                  className="card card--secondary aos-animate"
                  borderRadius="7px"
                  boxShadow="0 0 30px 1px black"
                  overflow="hidden"
                  justifyContent="center"
                  alignItems="center"
                  maxWidth="500px"
                  margin="0 auto"
                // data-aos="fade-right"
                // data-aos-duration="500"
                >
                  <Image
                    src={sponsor}
                    width="100%"
                    // objectFit="cover"
                    opacity="0.99"
                    // p="0.1rem 0.5%"
                    // borderRadius="7px"
                    borderTopRadius="7px"
                  />
                  <Box
                    className="card__header"
                    bg={
                      "linear-gradient(to bottom, rgba(214, 20, 91, 1.0), rgba(251, 176, 59, 0.99))"
                    }
                    color="#fff"
                    p="2rem 7%"
                  >
                    <Text
                      className="plan__name"
                      color="#fff"
                      margin="0"
                      fontSize={{ base: "4rem", lg: "2.5rem" }}
                      fontWeight="bold"
                    >
                      {t("sponsor")}
                    </Text>
                  </Box>
                  <Box className="card__body" p="2rem 7%" bg="#FFFFFF">
                    <List
                      className="list list--tick"
                      color="var(--color-headings)"
                      padding={0}
                      // paddingLeft={"3rem"}
                      style={{
                        listStyleImage: `url(${tickImage})`,
                      }}
                    >
                      <Text fontSize={{ base: "2rem", lg: "1.6rem" }}>
                        {t("joinUsSponsorDescription")}
                      </Text>

                      <Link
                        className="btn btn--secondary btn--block"
                        // href="https://docs.google.com/forms/d/e/1FAIpQLSfkWbg1-z8OWOk6cJEPULsA8dPKrqdZVDUO6k36biPD1ydkQQ/viewform"
                        href="/joinus/sponsor/"
                        // target="_blank"
                        border="2px solid var(--color-headings)"
                        borderRadius="40px"
                        cursor="pointer"
                        fontSize={{ base: "1.8rem", lg: "1.5rem" }}
                        fontWeight="600"
                        margin="1rem 0"
                        outline="0"
                        padding="2rem 0vw"
                        textAlign="center"
                        textTransform="uppercase"
                        whiteSpace="nowrap"
                        bg="#fff"
                        color="var(--color-headings)"
                        display="inline-block"
                        width="100%"
                        _hover={{
                          bg: "var(--color-headings)",
                          color: "#fff",
                        }}
                      >
                        {t("joinUs")}
                      </Link>
                    </List>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

// export default BlockPlans;
