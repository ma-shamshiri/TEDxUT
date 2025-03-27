// data.ts

import {
    anthony_andreoli_NoBG,
    antonia_macris_NoBG,
    doneyli_de_jesus_NoBG,
    geoffrey_reid2_NoBG,
    rashida_geddes_NoBG,
    ysimer_gonzalez_NoBG
} from "../../assets";

export interface Speaker {
    id: number;
    name: string;
    title: string;
    image: string;
    profileHref: string;
    linkedinAddress: string;
    emailAddress: string;
    twitterAddress: string;
}

export const speakersData: Speaker[] = [
    {
        id: 1,
        name: "Doneyli De Jesus",
        title: "Principal AI Architect",
        image: doneyli_de_jesus_NoBG,
        profileHref: "doneyli-de-jesus",
        linkedinAddress: "https://www.linkedin.com/in/doneyli/",
        emailAddress: "",
        twitterAddress: "",
    },
    {
        id: 2,
        name: "Ysimer Gonzalez",
        title: "Supply Chain Manager",
        image: ysimer_gonzalez_NoBG,
        profileHref: "ysimer-gonzalez",
        linkedinAddress: "https://www.linkedin.com/in/ysimergonzalez",
        emailAddress: "",
        twitterAddress: "",
    },
    {
        id: 3,
        name: "Rashida Geddes",
        title: "Leadership & Career Coach and Senior Talent Leader",
        image: rashida_geddes_NoBG,
        profileHref: "rashida-geddes",
        linkedinAddress: "https://www.linkedin.com/in/rashidageddes",
        emailAddress: "",
        twitterAddress: "",
    },
    {
        id: 4,
        name: "Anthony Andreoli",
        title: "PhD Researcher in Cybersecurity",
        image: anthony_andreoli_NoBG,
        profileHref: "anthony-andreoli",
        linkedinAddress: "https://www.linkedin.com/in/anthony-andreoli/",
        emailAddress: "",
        twitterAddress: "",
    },
    {
        id: 5,
        name: "Geoffrey M. Reid",
        title: "CEO | Consultant | Professor | Author | Speaker",
        image: geoffrey_reid2_NoBG,
        profileHref: "geoffrey-reid",
        linkedinAddress: "https://www.linkedin.com/in/geoffrey-reid-b073111",
        emailAddress: "",
        twitterAddress: "",
    },
    {
        id: 6,
        name: "Antonia Macris",
        title: "Manager of Corporate Learning, Environment and Climate Change Canada",
        image: antonia_macris_NoBG,
        profileHref: "antonia-macris",
        linkedinAddress: "https://www.linkedin.com/in/antoniamacris/",
        emailAddress: "",
        twitterAddress: "",
    },
    // Add more speakers as needed
];
