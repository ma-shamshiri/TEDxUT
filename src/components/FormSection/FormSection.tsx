import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Progress,
  Button,
  Grid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormHelperText,
  useToast,
  Text,
  VStack,
} from '@chakra-ui/react';

/* Imports for background image and animation */
import { info2 } from '../../assets';
import LoginSuccessAnimation from '../Animations/LoginSuccessAnimation';

/** Define all required fields for each step */
interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  birthDate: string;
  majorOrWork: string;
  address: string;
  aboutYou: string;
  socialLink: string;
  photo: File | null;
  resumePdf: File | null;
}

/** Helper: checks if required fields are filled for a given step */
const validateStep = (step: number, data: FormData) => {
  const errors: string[] = [];

  if (step === 1) {
    if (!data.firstName.trim()) {
      errors.push('نام باید پر شود.');
    }
    if (!data.lastName.trim()) {
      errors.push('نام خانوادگی باید پر شود.');
    }
    if (!data.phone.trim()) {
      errors.push('شماره تماس باید پر شود.');
    }
    if (!data.email.trim()) {
      errors.push('ایمیل باید پر شود.');
    }
  } else if (step === 2) {
    if (!data.birthDate.trim()) {
      errors.push('تاریخ تولد باید پر شود.');
    }
    if (!data.majorOrWork.trim()) {
      errors.push('رشته تحصیلی / محل کار باید پر شود.');
    }
    if (!data.address.trim()) {
      errors.push('آدرس باید پر شود.');
    }
    if (!data.aboutYou.trim()) {
      errors.push('توضیح مختصر از خودتان باید پر شود.');
    }
  } else if (step === 3) {
    if (!data.photo) {
      errors.push('لطفا عکس خود را بارگذاری کنید.');
    }
    if (!data.resumePdf) {
      errors.push('لطفا فایل PDF رزومه را بارگذاری کنید.');
    }
  }

  return errors;
};

const FormSection: React.FC = () => {
  const toast = useToast();

  /** Step management (1, 2, 3) */
  const [step, setStep] = useState<number>(1);
  const totalSteps = 3;

  /** Manage form data */
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    birthDate: '',
    majorOrWork: '',
    address: '',
    aboutYou: '',
    socialLink: '',
    photo: null,
    resumePdf: null,
  });

  /** Manage error messages (array of strings) */
  const [errors, setErrors] = useState<string[]>([]);

  /** Animation state */
  const [showAnimation, setShowAnimation] = useState(false);

  /** Step navigation */
  const handleNext = () => {
    const stepErrors = validateStep(step, formData);
    if (stepErrors.length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors([]);
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setErrors([]);
    setStep((prev) => prev - 1);
  };

  /** Final submit on Step 3 */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const stepErrors = validateStep(step, formData);
    if (stepErrors.length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors([]);

    // Show success toast
    toast({
      title: 'اطلاعات شما با موفقیت ثبت شد.',
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'top',
    });

    // Trigger the animation for 1 second
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 1000);

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      birthDate: '',
      majorOrWork: '',
      address: '',
      aboutYou: '',
      socialLink: '',
      photo: null,
      resumePdf: null,
    });
    setStep(1);
  };

  return (
    <Box
      as="section"
      position="relative"
      width="100%"
      minH="100vh"
      color="#FFF"
      fontFamily="'Rubik', sans-serif"
      dir="rtl"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {/* Background Image with blur filter */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bgImage={`url(${info2})`}
        bgPos="center"
        bgSize="cover"
        filter="blur(9px)"
        zIndex={-1}
      />

      {/* Center the form container both horizontally and vertically */}
      <Flex
        justify="center"
        align="center"
        width="100%"
        height="100%"
        position="relative"
        zIndex={1}
      >
        {/* If animation is triggered, show it here */}
        {showAnimation && (
          <Box position="absolute" top="2rem" zIndex={2}>
            <LoginSuccessAnimation />
          </Box>
        )}

        <Box
          width="50rem"
          maxW="90%"
          bg="rgba(0, 0, 0, 0.8)"
          borderRadius="1rem"
          boxShadow="0 0 1rem rgba(0,0,0,0.5)"
          p="3rem"
        >
          {/* Title */}
          <Heading
            as="h2"
            fontSize={{ base: "2rem", lg: "3rem" }}
            fontWeight="extrabold"
            fontFamily={"'Rubik', sans-serif"}
            dir={"rtl"}
            lineHeight="1.5"
            color="#EB0028"
            textAlign="center"
            mb="2rem"
          >
            ثبت نام داوطلب به همکاری در تداِکس ۲۰۲۵ دانشگاه تهران
          </Heading>

          {/* Progress Bar */}
          <Progress
            value={(step / totalSteps) * 100}
            colorScheme="red"
            size="sm"
            mb="2rem"
            borderRadius="0.2rem"
          />

          {/* Error Messages */}
          {errors.length > 0 && (
            <Box
              bg="#330000"
              borderRadius="0.5rem"
              p="1rem"
              mb="2rem"
              border="1px solid #EB0028"
            >
              <Text
                fontWeight="bold"
                fontFamily={"'Rubik', sans-serif"}
                dir={"rtl"}
                mb="1rem"
                color="#EB0028"
                fontSize="1.6rem"

              >
                مشکلی در ثبت نام شما رخ داده است. لطفا فیلدهای زیر را مرور کنید.
              </Text>
              <VStack align="start" spacing={1}>
                {errors.map((err, idx) => (
                  <Text
                    key={idx}
                    fontSize="1.4rem"
                    fontFamily={"'Rubik', sans-serif"}
                    dir={"rtl"}
                    color="#FFF"
                  >
                    • {err}
                  </Text>
                ))}
              </VStack>
            </Box>
          )}

          <form onSubmit={handleSubmit}>
            {/* STEP 1 */}
            {step === 1 && (
              <>
                <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap="1.6rem" mb="1.6rem">
                  <FormControl>
                    <FormLabel
                      fontSize="1.6rem"
                      fontWeight="bold"
                      color="#FFF"
                      fontFamily={"'Rubik', sans-serif"}
                      dir={"rtl"}
                    >
                      نام
                    </FormLabel>
                    <Input
                      type="text"
                      placeholder="نام خود را وارد کنید"
                      fontSize="1.4rem"
                      bg="#2c2c2c"
                      border="1px solid #444"
                      _placeholder={{ color: 'gray.400' }}
                      focusBorderColor="#EB0028"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      fontFamily={"'Rubik', sans-serif"}
                      dir={"rtl"}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel
                      fontSize="1.6rem"
                      fontWeight="bold"
                      color="#FFF"
                      fontFamily={"'Rubik', sans-serif"}
                      dir={"rtl"}
                    >
                      نام خانوادگی
                    </FormLabel>
                    <Input
                      type="text"
                      placeholder="نام خانوادگی خود را وارد کنید"
                      fontSize="1.4rem"
                      bg="#2c2c2c"
                      border="1px solid #444"
                      _placeholder={{ color: 'gray.400' }}
                      focusBorderColor="#EB0028"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      fontFamily={"'Rubik', sans-serif"}
                      dir={"rtl"}
                    />
                  </FormControl>
                </Grid>

                <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap="1.6rem">
                  <FormControl>
                    <FormLabel
                      fontSize="1.6rem"
                      fontWeight="bold"
                      color="#FFF"
                      fontFamily={"'Rubik', sans-serif"}
                      dir={"rtl"}
                    >
                      شماره تماس
                    </FormLabel>
                    <Input
                      type="tel"
                      placeholder="مثال: 09123456789"
                      fontSize="1.4rem"
                      bg="#2c2c2c"
                      border="1px solid #444"
                      _placeholder={{ color: 'gray.400' }}
                      focusBorderColor="#EB0028"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      fontFamily={"'Rubik', sans-serif"}
                      dir={"rtl"}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel
                      fontSize="1.6rem"
                      fontWeight="bold"
                      color="#FFF"
                      fontFamily={"'Rubik', sans-serif"}
                      dir={"rtl"}
                    >
                      ایمیل
                    </FormLabel>
                    <Input
                      type="email"
                      placeholder="example@email.com"
                      fontSize="1.4rem"
                      bg="#2c2c2c"
                      border="1px solid #444"
                      _placeholder={{ color: 'gray.400' }}
                      focusBorderColor="#EB0028"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      fontFamily={"'Rubik', sans-serif"}
                      dir={"rtl"}
                    />
                  </FormControl>
                </Grid>
              </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <>
                <FormControl mb="1.6rem">
                  <FormLabel
                    fontSize="1.6rem"
                    fontWeight="bold"
                    color="#FFF"
                    fontFamily={"'Rubik', sans-serif"}
                    dir={"rtl"}
                  >
                    تاریخ تولد
                  </FormLabel>
                  <Input
                    type="date"
                    fontSize="1.4rem"
                    bg="#2c2c2c"
                    border="1px solid #444"
                    focusBorderColor="#EB0028"
                    value={formData.birthDate}
                    onChange={(e) =>
                      setFormData({ ...formData, birthDate: e.target.value })
                    }
                    fontFamily={"'Rubik', sans-serif"}
                    dir={"rtl"}
                  />
                </FormControl>

                <FormControl mb="1.6rem">
                  <FormLabel
                    fontSize="1.6rem"
                    fontWeight="bold"
                    color="#FFF"
                    fontFamily={"'Rubik', sans-serif"}
                    dir={"rtl"}
                  >
                    رشته تحصیلی / محل کار
                  </FormLabel>
                  <Input
                    type="text"
                    placeholder="مثال: دانشجوی مهندسی کامپیوتر / شرکت فناوری"
                    fontSize="1.4rem"
                    bg="#2c2c2c"
                    border="1px solid #444"
                    _placeholder={{ color: 'gray.400' }}
                    focusBorderColor="#EB0028"
                    value={formData.majorOrWork}
                    onChange={(e) =>
                      setFormData({ ...formData, majorOrWork: e.target.value })
                    }
                    fontFamily={"'Rubik', sans-serif"}
                    dir={"rtl"}
                  />
                </FormControl>

                <FormControl mb="1.6rem">
                  <FormLabel
                    fontSize="1.6rem"
                    fontWeight="bold"
                    color="#FFF"
                    fontFamily={"'Rubik', sans-serif"}
                    dir={"rtl"}
                  >
                    آدرس
                  </FormLabel>
                  <Input
                    type="text"
                    placeholder="محل سکونت خود را وارد کنید"
                    fontSize="1.4rem"
                    bg="#2c2c2c"
                    border="1px solid #444"
                    _placeholder={{ color: 'gray.400' }}
                    focusBorderColor="#EB0028"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    fontFamily={"'Rubik', sans-serif"}
                    dir={"rtl"}
                  />
                </FormControl>

                <FormControl mb="1.6rem">
                  <FormLabel
                    fontSize="1.5rem"
                    fontWeight="bold"
                    color="#FFF"
                    fontFamily={"'Rubik', sans-serif"}
                    dir={"rtl"}
                  >
                    توضیح مختصر از خودتان (در حد چند خط)
                  </FormLabel>
                  <Textarea
                    placeholder="کمی در مورد خودتان توضیح دهید..."
                    fontSize="1.4rem"
                    bg="#2c2c2c"
                    border="1px solid #444"
                    _placeholder={{ color: 'gray.400' }}
                    focusBorderColor="#EB0028"
                    rows={4}
                    value={formData.aboutYou}
                    onChange={(e) =>
                      setFormData({ ...formData, aboutYou: e.target.value })
                    }
                    fontFamily={"'Rubik', sans-serif"}
                    dir={"rtl"}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel
                    fontSize="1.6rem"
                    fontWeight="bold"
                    color="#FFF"
                    fontFamily={"'Rubik', sans-serif"}
                    dir={"rtl"}
                  >
                    لینک یا آیدی شبکه اجتماعی
                  </FormLabel>
                  <Input
                    type="text"
                    placeholder="مثال: @yourInstagram"
                    fontSize="1.4rem"
                    bg="#2c2c2c"
                    border="1px solid #444"
                    _placeholder={{ color: 'gray.400' }}
                    focusBorderColor="#EB0028"
                    value={formData.socialLink}
                    onChange={(e) =>
                      setFormData({ ...formData, socialLink: e.target.value })
                    }
                    fontFamily={"'Rubik', sans-serif"}
                    dir={"rtl"}
                  />
                  <FormHelperText
                    color="gray.400"
                    fontSize="1.2rem"
                    fontFamily={"'Rubik', sans-serif"}
                    dir={"rtl"}
                  >
                    اگر تمایل دارید، آیدی یا لینک صفحه‌ی خود را وارد کنید.
                  </FormHelperText>
                </FormControl>
              </>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <>
                <FormControl mb="1.6rem">
                  <FormLabel fontSize="1.6rem" fontWeight="bold" color="#FFF">
                    عکس شما
                  </FormLabel>
                  <Input
                    type="file"
                    accept="image/*"
                    fontSize="1.4rem"
                    bg="#2c2c2c"
                    border="1px solid #444"
                    focusBorderColor="#EB0028"
                    onChange={(e) =>
                      setFormData({ ...formData, photo: e.target.files?.[0] || null })
                    }
                  />
                  <FormHelperText color="gray.400" fontSize="1.2rem">
                    فرمت مجاز: jpg یا png — حداکثر 1MB
                  </FormHelperText>
                </FormControl>

                <FormControl mb="2rem">
                  <FormLabel fontSize="1.6rem" fontWeight="bold" color="#FFF">
                    فایل PDF رزومه
                  </FormLabel>
                  <Input
                    type="file"
                    accept="application/pdf"
                    fontSize="1.4rem"
                    bg="#2c2c2c"
                    border="1px solid #444"
                    focusBorderColor="#EB0028"
                    onChange={(e) =>
                      setFormData({ ...formData, resumePdf: e.target.files?.[0] || null })
                    }
                  />
                  <FormHelperText color="gray.400" fontSize="1.2rem">
                    حداکثر 1MB
                  </FormHelperText>
                </FormControl>
              </>
            )}

            {/* Navigation Buttons */}
            <Flex
              justify="space-between"
              align="center"
              mt="2rem"
              dir="ltr" /* Keep "قبلی" on left, "بعدی/ثبت" on right */
            >
              {step > 1 ? (
                <Button
                  variant="outline"
                  color="#EB0028"
                  borderColor="#EB0028"
                  _hover={{ bg: '#EB0028', color: '#FFF' }}
                  onClick={handlePrev}
                  fontSize="1.4rem"
                  px="2rem"
                  py="1rem"
                >
                  قبلی
                </Button>
              ) : (
                <Box />
              )}

              {step < totalSteps ? (
                <Button
                  bg="#EB0028"
                  color="#FFF"
                  _hover={{ bg: '#FFF', color: '#EB0028', border: '1px solid #EB0028' }}
                  onClick={handleNext}
                  fontSize="1.4rem"
                  px="2rem"
                  py="1rem"
                >
                  بعدی
                </Button>
              ) : (
                <Button
                  type="submit"
                  bg="#EB0028"
                  color="#FFF"
                  _hover={{ bg: '#FFF', color: '#EB0028', border: '1px solid #EB0028' }}
                  fontSize="1.4rem"
                  px="2rem"
                  py="1rem"
                >
                  ثبت
                </Button>
              )}
            </Flex>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default FormSection;
