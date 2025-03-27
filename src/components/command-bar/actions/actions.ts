import React from "react";

export const initialActions = [
    // ------------------- About Us ---------------------
    {
        id: "tedAction",
        name: "TED",
        shortcut: ["h"],
        keywords: "ted tedx tedxplateaumontroyal",
        section: "ABOUT US",
        perform: () => (window.location.href = "/#more-info-section"),
        // icon: // ClockIcon,
        subtitle: "An introduction to the Ted",
    },
    {
        id: "tedxAction",
        name: "TEDx",
        shortcut: ["h"],
        keywords: "ted tedx tedxplateaumontroyal",
        section: "ABOUT US",
        perform: () => (window.location.href = "/#more-info-section"),
        //icon: // ClockIcon,
        subtitle: "An introduction to the TEDx",
    },
    {
        id: "tedxPlateauMontRoyalAction",
        name: "TEDxPlateauMontRoyal",
        shortcut: ["h"],
        keywords: "ted tedx tedxplateaumontroyal",
        section: "ABOUT US",
        perform: () => (window.location.href = "/#more-info-section"),
        //icon: // ClockIcon,
        subtitle: "An introduction to the TEDxPlateauMontRoyal",
    },

    // ------------------- Event -------------------
    {
        id: "dateAndTimeAction",
        name: "Date & Time",
        shortcut: ["a", "w"],
        keywords: "date time",
        section: "EVENT",
        subtitle: "The exact date and time of the event",
        perform: () => (window.location.href = "/event"),
    },
    {
        id: "ticketAction",
        name: "Ticket",
        shortcut: ["a", "v"],
        keywords: "ticket",
        section: "EVENT",
        subtitle: "The venue address and directions to the location",
        perform: () => (window.location.href = "/event"),
    },

    // ------------------- Team -------------------
    {
        id: "teamAction",
        name: "Team",
        shortcut: ["a", "i"],
        keywords: "team Samin Majidi Fatemeh Tavanaei Reihaneh Ghoroghchian MohammadErfan Mohit Royan Jafari Zahra Ahmadi Fathima Nihatha Lathiff Hamidreza Ermagan Baharan Nouriinanloo Melika Seyedi Content Creator Mina Taraghi Motahareh Pourrahimi Aryana Haghjoo Pegah Einakchi Edwin Meriaux Gezal Najafi Mohammad Amin Shamshiri",
        section: "TEAM",
        subtitle: "Details about the members of the organizing team",
        perform: () => (window.location.href = "/team"),
    },

    // ------------------- TEDxAveLorne -------------------
    {
        id: "tedxAvelorne2023Action",
        name: "TEDxAveLorne 2023",
        shortcut: ["a", "i"],
        keywords: "event 2023 tedxavelorne",
        section: "TEDxAveLorne",
        subtitle: "Highlights and key moments from the TEDxAveLorne 2023 event",
        perform: () => (window.location.href = "/tedx-2023"),
    },
    {
        id: "tedxPlateauMontRoyal2024Action",
        name: "TEDxPlateauMontRoyal 2024",
        shortcut: ["a", "i"],
        keywords: "event 2024 tedxplateaumontroyal",
        section: "TEDxPlateauMontRoyal",
        subtitle: "Preliminary details about the TEDxPlateauMontRoyal 2024 event",
        perform: () => (window.location.href = "/tedx-2024"),
    },

    // ------------------- Speakers -------------------
    {
        id: "speakersAction",
        name: "Speakers",
        shortcut: ["a", "i"],
        keywords: "speakers Peggy Bell Andrew Churchil Leila Kosseim Flore Deshayes Kira Dolhan Myra Virgil Janet Perlman Alina Gutierrez Mejia",
        section: "SPEAKERS",
        subtitle: "A comprehensive list of speakers",
        perform: () => (window.location.href = "/speakers"),
    },

    // ------------------- Media -------------------
    // {
    //     id: "mediaVideos",
    //     name: "Videos",
    //     shortcut: ["a", "i"],
    //     keywords: "media picture image photo video",
    //     section: "MEDIA",
    //     subtitle: "Watch the Talks.",
    //     perform: () => (window.location.href = "/videos"),
    // },
    {
        id: "mediaPhotos",
        name: "Photos",
        shortcut: ["a", "i"],
        keywords: "media picture image photo video",
        section: "MEDIA",
        subtitle: "Captured Moments.",
        perform: () => (window.location.href = "/photos"),
    },

    // ------------------- Join Us -------------------
    {
        id: "joinUsAction",
        name: "Join US",
        shortcut: ["a", "i"],
        keywords: "joinus",
        section: "JOIN US",
        subtitle: "General information on how to get involved with TEDxPlateauMontRoyal",
        perform: () => (window.location.href = "/joinus"),
    },
    {
        id: "joinUsMembersAction",
        name: "Join Us as a Member",
        shortcut: ["a", "i"],
        keywords: "joinus",
        section: "JOIN US",
        subtitle: "Information on how to become a member of the TEDxPlateauMontRoyal community",
        perform: () => (window.location.href = "/joinus/team"),
    },
    {
        id: "joinUsSpeakersAction",
        name: "Join Us as a Speaker",
        shortcut: ["a", "i"],
        keywords: "joinus",
        section: "JOIN US",
        subtitle: "Guidelines and criteria for becoming a speaker at TEDxPlateauMontRoyal",
        perform: () => (window.location.href = "/joinus/speaker"),
    },
    {
        id: "joinUsSponsorsAction",
        name: "Join Us as a Sponsor",
        shortcut: ["a", "i"],
        keywords: "joinus",
        section: "JOIN US",
        subtitle: "Opportunities for sponsorship and partnership with TEDxPlateauMontRoyal",
        perform: () => (window.location.href = "/joinus/sponsor"),
    }
];
