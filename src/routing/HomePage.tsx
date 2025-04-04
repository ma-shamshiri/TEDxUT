import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Flex, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import AboutSection from "../components/AboutSection";
import BlockHomeEvent from "../components/BlockHomeEvent";
import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import MyNavbar from "../components/MyNavbar";
import TeamSection from "../components/TeamSection";
import InfoSection from "../components/InfoSection";
import FormSection from "../components/FormSection";
import EventGallery from "../components/EventGallery";
import FeatureCardGrid from "../components/FeatureCardGrid";
import SliderImage from "../components/SliderImage";
import { amin, welcome } from "../assets";
import LectureVideoSection from "../components/LectureVideoSection";
import VideoGallery from "../components/VideoGallery";
import ScrollingLink from "../components/ScrollingLink/ScrollingLink";

const HomePage: React.FC = () => {
  const [boxLoaded, setBoxLoaded] = useState(false);

  const headingSize = useBreakpointValue({ base: '2.5rem', md: '3.5rem' });


  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={handleBoxLoad}
      >
        <MyNavbar />
        <HeroSection />
        <ScrollingLink />
        <FeatureCardGrid />
        <InfoSection />
        <EventGallery />
        <VideoGallery />
        {/* <SliderImage /> */}
        <FormSection />
        <FooterSection />
      </motion.div>
    </>
  );
};

export default HomePage;