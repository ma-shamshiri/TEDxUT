import {
    amin,
    aminBG,
    black_card,
    event2024,
    homeSlider3,
    info1,
    info2,
    info3,
} from "../../assets";

export interface Item {
    id?: number;
    imageSrc?: string;
    profileSrc?: string;
    fullName?: string;
    firstName?: string;
    lastName?: string;
    role?: string;
}

export const items: Item[] = [
    // ======================== Samin Majidi ========================
    {
        id: 1,
        imageSrc: info2,
        profileSrc: "samin-majidi",
        firstName: "samin",
        lastName: "majidi",
        fullName: "saminMajidi",
        role: "organizer"
    },

    // ======================== Fatemeh Tavanaei ========================
    {
        id: 2,
        imageSrc: info1,
        profileSrc: "fatemeh-tavanaei",
        firstName: "fatemeh",
        lastName: "tavanaei",
        fullName: "fatemehTavanaei",
        role: "coOrganizer"
    },

    // ======================== Mohammaderfan Mohit ========================
    {
        id: 3,
        imageSrc: homeSlider3,
        profileSrc: "mohammaderfan-mohit",
        firstName: "erfan",
        lastName: "mohit",
        fullName: "mohammadErfanMohit",
        role: "eventDirector"
    },
];
