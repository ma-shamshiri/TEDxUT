import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLocation, Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage";
// import TeamPage from "./TeamPage";
// import AdityaThakkar from '../components/TeamMembers/AdityaThakkar';
// import AminShamshiri from '../components/TeamMembers/AminShamshiri';
// import AnthonyAndreoli from '../components/Speakers/AnthonyAndreoli';
// import AntoniaMacris from '../components/Speakers/AntoniaMacris';
// import DivyanshuJaggi from '../components/TeamMembers/DivyanshuJaggi';
// import DoneyliDeJesus from '../components/Speakers/DoneyliDeJesus';
// import EventPage from "./EventPage";
// import GeoffreyReid from '../components/Speakers/GeoffreyReid';
// import MahimurRahmanKhan from '../components/TeamMembers/MahimurRahmanKhan';
// import MediaPage from "./MediaPage";
// import MokshSood from '../components/TeamMembers/MokshSood';
// import ParamPatel from '../components/TeamMembers/ParamPatel';
// import RashidaGeddes from '../components/Speakers/RashidaGeddes';
// import SpeakersPage from "./SpeakersPage";
// import VedantGadhavi from '../components/TeamMembers/VedantGadhavi';
// import YsimerGonzalez from '../components/Speakers/YsimerGonzalez';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/photos/" element={<MediaPage />} /> */}
        {/* <Route path="/event/" element={<EventPage />} /> */}

        {/* <Route path="/team/" element={<TeamPage />} /> */}
        {/* <Route path="/team/amin-shamshiri" element={<AminShamshiri />} /> */}
        {/* <Route path="/team/aditya-thakkar" element={<AdityaThakkar />} /> */}
        {/* <Route path="/team/divyanshu-jaggi" element={<DivyanshuJaggi />} /> */}
        {/* <Route path="/team/mahimur-rahman-khan" element={<MahimurRahmanKhan />} /> */}
        {/* <Route path="/team/moksh-sood" element={<MokshSood />} /> */}
        {/* <Route path="/team/param-patel" element={<ParamPatel />} /> */}
        {/* <Route path="/team/vedant-gadhavi" element={<VedantGadhavi />} */}

        {/* <Route path="/speakers/" element={<SpeakersPage />} />
        <Route path="/speakers/doneyli-de-jesus/" element={<DoneyliDeJesus />} />
        <Route path="/speakers/ysimer-gonzalez/" element={<YsimerGonzalez />} />
        <Route path="/speakers/anthony-andreoli/" element={<AnthonyAndreoli />} />
        <Route path="/speakers/rashida-geddes/" element={<RashidaGeddes />} />
        <Route path="/speakers/antonia-macris/" element={<AntoniaMacris />} />
        <Route path="/speakers/geoffrey-reid/" element={<GeoffreyReid />} /> */}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
