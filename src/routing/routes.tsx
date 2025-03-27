// import { createBrowserRouter } from "react-router-dom";
// import HomePage from "./HomePage";
// import JoinUsTeamPage from "./JoinUsTeamPage";
// import JoinUsSponsorPage from "./JoinUsSponsorPage";
// import JoinUsPage from "./JoinUsPage";
// import JoinUsSpeakerPage from "./JoinUsSpeakerPage";
// import MediaPage from "./MediaPage";
// import MyraVirgil from "../components/Speakers/MyraVirgil";
// import KiraDolhan from "../components/Speakers/KiraDolhan";
// import FloreDeshayes from "../components/Speakers/FloreDeshayes";
// import LeilaKosseim from "../components/Speakers/LeilaKosseim";
// import JanetPerlman from "../components/Speakers/JanetPerlman";
// import PeggyBell from "../components/Speakers/PeggyBell";
// import SpeakersPage from "./SpeakersPage";
// import TeamPage from "./TeamPage";
// import EventPage from "./EventPage";

// const router = createBrowserRouter([
//   { path: "/", element: <HomePage /> },
//   { path: "/photos/", element: <MediaPage /> },
//   { path: "/event/", element: <EventPage /> },

//   { path: "/joinus/", element: <JoinUsPage /> },
//   { path: "/joinus/team/", element: <JoinUsTeamPage /> },
//   { path: "/joinus/speaker/", element: <JoinUsSpeakerPage /> },
//   { path: "/joinus/sponsor/", element: <JoinUsSponsorPage /> },

//   { path: "/speakers/", element: <SpeakersPage /> },
//   { path: "/speakers/myra-virgil/", element: <MyraVirgil /> },
//   { path: "/speakers/kira-dolhan/", element: <KiraDolhan /> },
//   { path: "/speakers/flore-deshayes/", element: <FloreDeshayes /> },
//   { path: "/speakers/leila-kosseim/", element: <LeilaKosseim /> },
//   { path: "/speakers/janet-perlman/", element: <JanetPerlman /> },
//   { path: "/speakers/peggy-bell/", element: <PeggyBell /> },

//   { path: "/team/", element: <TeamPage /> },
//   { path: "/team/samin-majidi/", element: <SaminMajidi /> },
//   { path: "/team/fatemeh-tavanaei/", element: <FatemehTavanaei /> },
//   { path: "/team/reihaneh-ghoroghchian/", element: <ReihanehGhoroghchian /> },
//   { path: "/team/mohammaderfan-mohit/", element: <MohammaderfanMohit /> },
//   { path: "/team/zahra-ahmadi/", element: <ZahraAhmadi /> },
//   {
//     path: "/team/fathima-nihatha-lathiff/",
//     element: <FathimaNihathaLathiff />,
//   },
//   { path: "/team/hamidreza-ermagan/", element: <HamidrezaErmagan /> },
//   { path: "/team/baharan-nouriinanloo/", element: <BaharanNouriinanloo /> },
//   { path: "/team/melika-seyedi/", element: <MelikaSeyedi /> },
//   { path: "/team/mohammad-zaid/", element: <MohammadZaid /> },
//   { path: "/team/mina-taraghi/", element: <MinaTaraghi /> },
//   { path: "/team/motahareh-pourrahimi/", element: <MotaharehPourrahimi /> },
//   { path: "/team/aryana-haghjoo/", element: <AryanaHaghjoo /> },
//   { path: "/team/pegah-einakchi/", element: <PegahEinakchi /> },
//   { path: "/team/royan-jafari/", element: <RoyanJafari /> },
//   { path: "/team/edwin-meriaux/", element: <EdwinMeriaux /> },
//   { path: "/team/gezal-najafi/", element: <GezalNajafi /> },
//   { path: "/team/amin-shamshiri/", element: <AminShamshiri /> },
// ]);

// export default router;

import { createBrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';

const router = createBrowserRouter([
  {
    path: '*',
    element: <AnimatedRoutes />,
  },
]);

export default router;
