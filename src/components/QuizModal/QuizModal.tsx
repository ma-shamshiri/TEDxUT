// QuizModal.tsx

import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Box,
  Text,
  Input,
  useToast,
  SimpleGrid,
  Flex,
  ModalCloseButton,
} from '@chakra-ui/react';
import { questions, personalityElements, PersonalityElement } from './data';
import { useTranslation } from 'react-i18next';
import { BsStars } from 'react-icons/bs';
import CLBScoreAnimation from '../Animations/CLBScoreAnimation';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation();
  const toast = useToast();

  const [showAnimation, setShowAnimation] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));
  const [hasError, setHasError] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showResetSlide, setShowResetSlide] = useState(false);
  const [email, setEmail] = useState('');
  const [resultElement, setResultElement] = useState<PersonalityElement | null>(null);

  // Reset the quiz state to start over.
  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers(Array(questions.length).fill(null));
    setShowResult(false);
    setShowResetSlide(false);
    setEmail('');
    setResultElement(null);
  };

  // Reset quiz whenever the modal is opened.
  useEffect(() => {
    if (isOpen) {
      handleReset();
    }
  }, [isOpen]);

  // Called when an option is selected.
  const handleOptionSelect = (option: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = option;
    setAnswers(updatedAnswers);
    setHasError(false);
  };

  // Proceed to the next question or show the result on the final question.
  const handleNext = () => {
    if (!answers[currentQuestion]) {
      setHasError(true);
      toast({
        title: t('لطفاً یک گزینه را انتخاب کنید'),
        status: 'error',
        duration: 2500,
        containerStyle: {
          padding: '1rem',
          fontSize: '1.5rem',
          fontFamily: i18n.language === 'fa' ? "'YekanBakh', sans-serif" : '',
          direction: i18n.language === 'fa' ? 'rtl' : 'ltr',
        } as any,
      });
      return;
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // All questions answered; assign a personality element randomly for now.
      const randomIndex = Math.floor(Math.random() * personalityElements.length);
      setResultElement(personalityElements[randomIndex]);
      setShowResult(true);

      setShowAnimation(true);

      // Simulate processing time with a timeout
      setTimeout(() => {
        setShowAnimation(false);
      }, 1000);
    }
  };

  // Go back to the previous question.
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Handle email submission: show a success toast and display the reset slide.
  const handleSendEmail = () => {
    // Insert your email sending logic here (e.g., EmailJS integration)
    toast({
      title: t('ایمیل ارسال شد!'),
      status: 'success',
      duration: 3000,
      isClosable: true,
      containerStyle: { fontSize: '1.5rem' },
    });
    setShowResetSlide(true);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="6xl">
      <ModalOverlay />
      <ModalContent
        bg="gray.800"
        borderRadius="10px"
        padding={{ base: '0.5rem', lg: '2rem' }}
        width={{ base: '90%', lg: '' }}
      >
        <ModalCloseButton size="lg" p="1rem" fontSize="1.5rem" />
        <ModalHeader
          fontSize={{ lg: '2.3rem' }}
          color="#fff"
          fontFamily={i18n.language === 'fa' ? "'YekanBakh', sans-serif" : ''}
          dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
          marginTop="3rem"
        >
          <Flex align="center" gap="1rem">
            <BsStars color="#fff" />
            {t('quizModalButtonTitle')}
          </Flex>
        </ModalHeader>
        <ModalBody>
          {/* Quiz Question Slide */}
          {!showResult && !showResetSlide && (
            <Box>
              <Box
                p={6}
                borderWidth={hasError ? '2px' : '1px'}
                borderColor={hasError ? 'red.500' : 'gray.200'}
                borderRadius="md"
              >
                <Text
                  mb={6}
                  color="gold"
                  fontSize={{ base: '1.5rem', lg: '1.7rem' }}
                  fontFamily={i18n.language === 'fa' ? "'YekanBakh', sans-serif" : ''}
                  dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
                >
                  {t(questions[currentQuestion].text)}
                </Text>
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
                  {questions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      onClick={() => handleOptionSelect(option)}
                      bg={answers[currentQuestion] === option ? 'dodgerblue' : 'gray.100'}
                      color={answers[currentQuestion] === option ? 'white' : 'black'}
                      variant={answers[currentQuestion] === option ? 'solid' : 'outline'}
                      padding="2rem"
                      fontSize={{ base: '1.2rem', lg: '1.35rem' }}
                      fontFamily={i18n.language === 'fa' ? "'YekanBakh', sans-serif" : ''}
                      dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
                      whiteSpace="normal"        // Allow wrapping
                      wordBreak="break-word"     // Break long words
                      textAlign="center"         // Optional, center text
                      _hover={{ transform: 'scale(1.03)' }}
                      transition="color 0.2s ease, background-color 0.2s ease, transform 0.1s ease"
                    >
                      {t(option)}
                    </Button>
                  ))}
                </SimpleGrid>
              </Box>
            </Box>
          )}

          {/* Result Slide with Email Input */}
          {showResult && !showResetSlide && (
            <Box textAlign="center" p={6}>
              <Text
                color="gold"
                mb={4}
                fontSize={{
                  base: i18n.language === "fa" ? "1.5rem" : "1.7rem",
                  md: i18n.language === "fa" ? "1.5rem" : "2rem",
                  lg: i18n.language === "fa" ? "1.8rem" : "1.9rem",
                  xl: i18n.language === "fa" ? "1.8rem" : "2.2rem"
                }}
                fontWeight="bold"
                fontFamily={i18n.language === 'fa' ? "'YekanBakh', sans-serif" : ''}
                dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
              >
                {t('yourResult')} : {t(resultElement?.name || '')}
              </Text>
              <Text
                fontSize={{
                  base: i18n.language === "fa" ? "1.2rem" : "1.4rem",
                  md: i18n.language === "fa" ? "1.2rem" : "1.7rem",
                  lg: i18n.language === "fa" ? "1.5rem" : "1.6rem",
                  xl: i18n.language === "fa" ? "1.5rem" : "1.5rem"
                }}
                mb={6}
                fontFamily={i18n.language === 'fa' ? "'YekanBakh', sans-serif" : ''}
                dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
              >
                {t(resultElement?.description || '')}
              </Text>
              {/* <Input
                placeholder={t('ایمیل خود را وارد کنید')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                mb={4}
                fontSize="lg"
                fontFamily={i18n.language === 'fa' ? "'YekanBakh', sans-serif" : ''}
                // Email field always LTR
                dir="ltr"
              /> */}
              {/* <Button
                onClick={handleSendEmail}
                fontSize="lg"
                px={8}
                fontFamily={i18n.language === 'fa' ? "'YekanBakh', sans-serif" : ''}
                dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
              >
                {t('ارسال')}
              </Button> */}

              {/* Animation */}
              {showAnimation && <CLBScoreAnimation />}
            </Box>
          )}

          {/* Reset Slide */}
          {showResetSlide && (
            <Box textAlign="center" p={6}>
              <Text
                fontSize="2xl"
                mb={6}
                fontFamily={i18n.language === 'fa' ? "'YekanBakh', sans-serif" : ''}
                dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
              >
                {t('theTestIsCompleted')}
              </Text>
              <Button
                onClick={handleReset}
                fontSize="xl"
                px={10}
                py={6}
                fontFamily={i18n.language === 'fa' ? "'YekanBakh', sans-serif" : ''}
                dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
              >
                {t('tryAgain')}
              </Button>
            </Box>
          )}
        </ModalBody>
        <ModalFooter flexDirection="column" alignItems="center" pt="1rem">
          {/* Navigation buttons (only during quiz) */}
          {!showResult && !showResetSlide && (
            <Flex w="100%" justifyContent="space-between" mb={4}>
              <Button
                onClick={handlePrevious}
                isDisabled={currentQuestion === 0}
                fontSize={{
                  base: i18n.language === "fa" ? "1.5rem" : "1.7rem",
                  md: i18n.language === "fa" ? "1.5rem" : "1.8rem",
                  lg: i18n.language === "fa" ? "1.5rem" : "1.5rem",
                  xl: i18n.language === "fa" ? "1.8rem" : "1.8rem"
                }}
                fontFamily={i18n.language === 'fa' ? "'YekanBakh', sans-serif" : ''}
                dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
                paddingX={{ base: "2rem", md: "2rem", lg: "3rem" }}
                paddingY={{ base: "2rem", md: "2rem", lg: "2rem" }}
                _hover={{
                  bg: "#cb0000",
                }}
              >
                {t('previous')}
              </Button>
              <Button
                onClick={handleNext}
                fontSize={{
                  base: i18n.language === "fa" ? "1.5rem" : "1.7rem",
                  md: i18n.language === "fa" ? "1.5rem" : "1.8rem",
                  lg: i18n.language === "fa" ? "1.5rem" : "1.5rem",
                  xl: i18n.language === "fa" ? "1.8rem" : "1.8rem"
                }}
                minWidth="10rem"
                fontFamily={i18n.language === 'fa' ? "'YekanBakh', sans-serif" : ''}
                dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}
                paddingX={{ base: "2rem", md: "2rem", lg: "3rem" }}
                paddingY={{ base: "2rem", md: "2rem", lg: "2rem" }}
                _hover={{
                  bg: "#07ad60",
                }}
              >
                {currentQuestion === questions.length - 1 ? t('showResult') : t('next')}
              </Button>
            </Flex>
          )}
          {/* Slide number centered */}
          {!showResult && !showResetSlide && (
            <Text fontSize="1.5rem">
              {t(`سؤال ${currentQuestion + 1} از ${questions.length}`)}
            </Text>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default QuizModal;
