import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useBreakpointValue } from "@chakra-ui/react";
import AboutSection from "../components/AboutSection";
import BlockHomeEvent from "../components/BlockHomeEvent";
import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import MyNavbar from "../components/MyNavbar";
import InfoSection from "../components/InfoSection";
import FormSection from "../components/FormSection";
import EventGallery from "../components/EventGallery";
import FeatureCardGrid from "../components/FeatureCardGrid";
import LectureVideoSection from "../components/LectureVideoSection";
import VideoGallery from "../components/VideoGallery";
import ScrollingLink from "../components/ScrollingLink/ScrollingLink";
import Player from '@vimeo/player';
import SliderImage from "../components/SliderImage";

const HomePage: React.FC = () => {
  const [boxLoaded, setBoxLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [vimeoPlayer, setVimeoPlayer] = useState<Player | null>(null);

  const headingSize = useBreakpointValue({ base: '2.5rem', md: '3.5rem' });

  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // This callback is passed to HeroSection so that HomePage can hold the player instance
  const handlePlayerReady = (player: Player) => {
    setVimeoPlayer(player);
    player.setMuted(isMuted);
  };

  // Toggle mute/unmute via the Vimeo Player API
  const handleToggleMute = () => {
    if (vimeoPlayer) {
      if (isMuted) {
        vimeoPlayer.setMuted(false);
        setIsMuted(false);
      } else {
        vimeoPlayer.setMuted(true);
        setIsMuted(true);
      }
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={handleBoxLoad}
      >
        <MyNavbar onToggleMute={handleToggleMute} isMuted={isMuted} />
        <HeroSection onPlayerReady={handlePlayerReady} isMuted={isMuted} />
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
