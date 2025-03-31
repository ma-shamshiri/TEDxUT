import { hamidreza_pejman_NoBG, hojat_mirzaee_NoBG, maryam_jalali_NoBG, mojtaba_jabbari_NoBG, nader_keshtkar_NoBG, pirouz_hanachi_NoBG } from "../../assets";

export interface Slide {
    id?: number;
    imageSrc?: string;
    profileSrc?: string;
    fullName?: string;
    firstName?: string;
    lastName?: string;
    role?: string;
}

export const slides: Slide[] = [
    // ======================== mojtaba_jabbari_NoBG ========================
    {
        id: 1,
        imageSrc: mojtaba_jabbari_NoBG,
        profileSrc: "/samin-majidi",
        firstName: "samin",
        lastName: "majidi",
        fullName: "مجتبی جباری",
        role: "organizer"
    },

    // ======================== pirouz_hanachi_NoBG ========================
    {
        id: 2,
        imageSrc: pirouz_hanachi_NoBG,
        profileSrc: "/fatemeh-tavanaei",
        firstName: "fatemeh",
        lastName: "tavanaei",
        fullName: "پیروز حناچی",
        role: "coOrganizer"
    },

    // ======================== pirouz_hanachi_NoBG ========================
    {
        id: 3,
        imageSrc: maryam_jalali_NoBG,
        profileSrc: "/mohammaderfan-mohit",
        firstName: "erfan",
        lastName: "mohit",
        fullName: "مریم جلالی",
        role: "eventDirector"
    },

    // ======================== hojat_mirzaee_NoBG ========================
    {
        id: 4,
        imageSrc: hojat_mirzaee_NoBG,
        profileSrc: "/amin-shamshiri",
        firstName: "amin",
        lastName: "shamshiri",
        fullName: "حجت میرزایی",
        role: "webDeveloper"
    },

    // ======================== nader_keshtkar_NoBG ========================
    {
        id: 5,
        imageSrc: nader_keshtkar_NoBG,
        profileSrc: "/pegah-einakchi",
        firstName: "pegah",
        lastName: "einakchi",
        fullName: "نادر کشتکار",
        role: "logisticsCoordinator"
    },

    // ======================== hamidreza_pejman_NoBG ========================
    {
        id: 6,
        imageSrc: hamidreza_pejman_NoBG,
        profileSrc: "/mohammadhasan-azad",
        firstName: "mohammadHasan",
        lastName: "azad",
        fullName: "حمیدرضا پژمان",
        role: "operationalAssociate"
    },
];
