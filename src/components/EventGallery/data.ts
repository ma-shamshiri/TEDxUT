import { homeSlider1, homeSlider2, homeSlider3, homeSlider4, homeSlider5, homeSlider6, speakerSlider1, speakerSlider2, speakerSlider3, speakerSlider4, speakerSlider5, speakerSlider6, speakerSlider7, speakerSlider8 } from "../../assets";

export interface GalleryImage {
    id: string;
    src: string;
    alt: string;
    title?: string;      // optional
    description?: string; // optional
}

export const galleryImages: GalleryImage[] = [
    {
        id: "1",
        src: homeSlider1,
        alt: "TEDx Event Image 1",
        title: "رویداد شماره یک",
        description: "رویداد تداِکس دانشگاه تهران",
    },
    {
        id: "2",
        src: speakerSlider1,
        alt: "TEDx Event Image 1",
        title: "رویداد شماره یک",
        description: "رویداد تداِکس دانشگاه تهران",
    },
    {
        id: "3",
        src: homeSlider2,
        alt: "TEDx Event Image 2",
        title: "رویداد شماره دو",
        description: "رویداد تداِکس دانشگاه تهران",
    },
    {
        id: "4",
        src: speakerSlider2,
        alt: "TEDx Event Image 1",
        title: "رویداد شماره یک",
        description: "رویداد تداِکس دانشگاه تهران",
    },
    {
        id: "5",
        src: homeSlider3,
        alt: "TEDx Event Image 3",
        title: "رویداد شماره سه",
        description: "رویداد تداِکس دانشگاه تهران",
    },
    {
        id: "6",
        src: speakerSlider3,
        alt: "TEDx Event Image 1",
        title: "رویداد شماره یک",
        description: "رویداد تداِکس دانشگاه تهران",
    },
    {
        id: "7",
        src: homeSlider4,
        alt: "TEDx Event Image 4",
        title: "رویداد شماره چهار",
        description: "رویداد تداِکس دانشگاه تهران",
    },
    {
        id: "8",
        src: speakerSlider4,
        alt: "TEDx Event Image 1",
        title: "رویداد شماره یک",
        description: "رویداد تداِکس دانشگاه تهران",
    },
    {
        id: "9",
        src: homeSlider5,
        alt: "TEDx Event Image 5",
        title: "رویداد شماره پنج",
        description: "رویداد تداِکس دانشگاه تهران",
    },
    {
        id: "10",
        src: speakerSlider5,
        alt: "TEDx Event Image 1",
        title: "رویداد شماره یک",
        description: "رویداد تداِکس دانشگاه تهران",
    },
    {
        id: "11",
        src: homeSlider6,
        alt: "TEDx Event Image 6",
        title: "رویداد شماره شش",
        description: "رویداد تداِکس دانشگاه تهران",
    },
    {
        id: "12",
        src: speakerSlider6,
        alt: "TEDx Event Image 1",
        title: "رویداد شماره یک",
        description: "رویداد تداِکس دانشگاه تهران",
    },
    {
        id: "13",
        src: speakerSlider8,
        alt: "TEDx Event Image 1",
        title: "رویداد شماره یک",
        description: "رویداد تداِکس دانشگاه تهران",
    },
    {
        id: "14",
        src: speakerSlider7,
        alt: "TEDx Event Image 1",
        title: "رویداد شماره یک",
        description: "رویداد تداِکس دانشگاه تهران",
    },
];
