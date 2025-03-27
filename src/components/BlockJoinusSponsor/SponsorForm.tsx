import {
  Box,
  Stack,
  Button,
  Text,
  useColorModeValue,
  VStack,
  FormControl,
  FormLabel,
  Input as ChakraInput,
  Flex,
  Textarea,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import z from "zod";

const schema = z.object({
  companyName: z
    .string()
    .min(1, { message: "Company Name must be at least 1 characters." }),
  companyDescription: z
    .string()
    .min(1, { message: "Your answer must be at least 1 characters." })
    .max(300, {
      message: "It must be less than 300 characters.",
    }),
  contactInfo: z
    .string()
    .min(1, { message: "Your answer must be at least 1 characters." })
    .max(300, {
      message: "It must be less than 300 characters.",
    }),
});

type FormData = z.infer<typeof schema>;

const SponsorForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FieldValues) => {
    // Map the field names to more readable labels
    const formattedData = {
      "Company Name": data.companyName,
      "Company Description": data.companyDescription,
      "Contact Info": data.contactInfo,
    };

    try {
      const response = await fetch("https://formspree.io/f/myzgqdej", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        toast.success("Form submitted successfully!");
        // Reset the form after a successful submission
        reset();
        window.scrollTo(0, 0);
      } else {
        toast.error("Error submitting form");
        window.scrollTo(0, 0);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form");
      window.scrollTo(0, 0);
    }
  };

  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        className="outer_form_container"
        bg={useColorModeValue("gray.200", "gray.700")}
        borderRadius="xl"
        // padding={{ base: 4, sm: 6, md: 8 }}
        // marginLeft={20}
        // spacing={{ base: 8 }}
        paddingY="4rem"
        maxWidth={{ lg: "100rem" }}
        width={{ base: "100%", lg: "100%" }}
        boxShadow="0 0 30px 1px black"
      >
        <VStack className="form_header" align="center">
          <Text
            className="form_title"
            fontSize={{ base: "2.8rem", lg: "5rem" }}
            textAlign="center"
            color={useColorModeValue("gray.700", "gray.50")}
          >
            {t("sponsorFormTitle")}
          </Text>
          <Text
            className="form_subtitle"
            fontSize={{ base: "1.7rem", lg: "2.2rem" }}
            color={useColorModeValue("gray.700", "gray.200")}
            marginTop={{ lg: "1rem" }}
            padding="1rem 2rem"
            textAlign="center"
          >
            {t("sponsorFormSubTitle")}
          </Text>
        </VStack>
        <Box
          className="inner_form_container"
          bg={useColorModeValue("gray.300", "#29303c")}
          padding="2.5rem"
          marginTop="1rem"
          marginX="auto"
          borderRadius="lg"
          boxShadow="lg"
          width="85%"
        >
          {/* --------------------- Company Name field --------------------- */}
          <Box className="company_name_field" width="100%" paddingBottom="2rem">
            <FormControl id="companyName" isRequired>
              <FormLabel
                className="form_label"
                htmlFor="companyName"
                fontSize={{ base: "1.8rem", lg: "1.7rem" }}
              >
                {t("companyName")}
              </FormLabel>
              <Box
                padding="1rem"
                bg={useColorModeValue("gray.200", "gray.600")}
                borderRadius="lg"
              >
                <ChakraInput
                  className="form_control"
                  id="companyName"
                  type="text"
                  placeholder={t("companyNamePlaceholder")}
                  fontSize="1.5rem"
                  //   name="name"
                  //   width="100%"
                  //   height="4rem"
                  {...register("companyName")}
                />
              </Box>
              {/* {errors.firstName && (
                    <Text fontSize={{ lg: "1.7rem" }} color="#D22B30">
                      {errors.firstName.message}
                    </Text>
                  )} */}
            </FormControl>
          </Box>

          {/* --------------------- Company Description ---------------------  */}
          <Box
            className="reason_to_join_field"
            width="100%"
            paddingBottom="2rem"
          >
            <FormControl id="companyDescription" isRequired>
              <FormLabel
                className="form_label"
                htmlFor="companyDescription"
                fontSize={{ base: "1.8rem", lg: "1.7rem" }}
              >
                {t("companyDescription")}
              </FormLabel>
              <Box
                padding="1rem"
                bg={useColorModeValue("gray.200", "gray.600")}
                borderRadius="lg"
              >
                <Textarea
                  {...register("companyDescription")}
                  placeholder={t("companyDescriptionPlaceholder")}
                  fontSize="1.5rem"
                  width="100%"
                  height="15rem"
                />
              </Box>
              {/* {errors.reasonToJoin && (
                  <Text fontSize={{ lg: "1.7rem" }} color="#D22B30">
                    {errors.reasonToJoin.message}
                  </Text>
                )} */}
            </FormControl>
          </Box>

          {/* --------------------- Hear About As field --------------------- */}
          {/* <Box
              className="hear_about_us_field"
              width="100%"
              paddingBottom="2rem"
            >
              <FormControl id="hearAboutUs" isRequired>
                <FormLabel
                  className="form_label"
                  htmlFor="hearAboutUs"
                  fontSize={{ lg: "1.7rem" }}
                >
                  How did you hear about us?
                </FormLabel>
                <CheckboxGroup>
                  <VStack align="start">
                    <Checkbox
                      value="university"
                      fontSize="lg"
                      size="lg"
                      iconSize="1.2em"
                      marginBottom="0.5rem"
                      {...register("hearAboutUs", {
                        required: "Please select at least one option.",
                      })}
                    >
                      University
                    </Checkbox>
  
                    <Checkbox
                      value="friends"
                      fontSize="lg"
                      size="lg"
                      iconSize="1.2em"
                      marginBottom="0.5rem"
                      {...register("hearAboutUs", {
                        required: "Please select at least one option.",
                      })}
                    >
                      Friends
                    </Checkbox>
  
                    <Checkbox
                      value="instagram"
                      fontSize="lg"
                      size="lg"
                      iconSize="1.2em"
                      marginBottom="0.5rem"
                      {...register("hearAboutUs", {
                        required: "Please select at least one option.",
                      })}
                    >
                      Instagram
                    </Checkbox>
  
                    <Checkbox
                      value="facebook"
                      fontSize="lg"
                      size="lg"
                      iconSize="1.2em"
                      marginBottom="0.5rem"
                      {...register("hearAboutUs", {
                        required: "Please select at least one option.",
                      })}
                    >
                      Facebook
                    </Checkbox>
                    <Checkbox
                      value="twitter"
                      fontSize="lg"
                      size="lg"
                      iconSize="1.2em"
                      marginBottom="0.5rem"
                      {...register("hearAboutUs", {
                        required: "Please select at least one option.",
                      })}
                    >
                      Twitter
                    </Checkbox>
                    <Checkbox
                      value="other"
                      fontSize="lg"
                      size="lg"
                      iconSize="1.2em"
                      marginBottom="0.5rem"
                      {...register("hearAboutUs", {
                        required: "Please select at least one option.",
                      })}
                    >
                      Other
                    </Checkbox>
                  </VStack>
                </CheckboxGroup>
                {errors.hearAboutUs && (
                  <Text fontSize={{ lg: "1.7rem" }} color="#D22B30">
                    Please select at least one option.
                  </Text>
                )}
              </FormControl>
            </Box> */}

          {/* --------------------- Contact Info ---------------------  */}
          <Box className="contact_info_field" width="100%" paddingBottom="2rem">
            <FormControl id="contactInfo" isRequired>
              <FormLabel
                className="form_label"
                htmlFor="contactInfo"
                fontSize={{ base: "1.8rem", lg: "1.7rem" }}
              >
                {t("contactInfoTitle")}
              </FormLabel>
              <Box
                padding="1rem"
                bg={useColorModeValue("gray.200", "gray.600")}
                borderRadius="lg"
              >
                <Textarea
                  {...register("contactInfo")}
                  placeholder={t("contactInfoPlaceholder")}
                  fontSize="1.5rem"
                  width="100%"
                  height="10rem"
                />
              </Box>
              {/* {errors.contactInfo && (
                  <Text fontSize={{ lg: "1.7rem" }} color="#D22B30">
                    {errors.contactInfo.message}
                  </Text>
                )} */}
            </FormControl>
          </Box>

          <Flex
            className="button_container"
            justifyContent="center"
            marginTop="1.5rem"
          >
            <Button
              className="submit_button"
              isDisabled={!isValid}
              width="100%"
              height="5rem"
              type="submit"
              fontSize={{ lg: "2rem" }}
            >
              {t("submit")}
            </Button>
          </Flex>
        </Box>
      </Stack>
      <ToastContainer />
    </form>
  );
};

export default SponsorForm;
