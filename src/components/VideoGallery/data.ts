import { hamidreza_pejman_cover, hojjat_mirzaee_cover, hosna_esmailbeigi_cover, maryam_jalali_cover, mojtaba_jabbari_cover, nader_keshtkar_cover, pirouz_hanachi_cover } from "../../assets";

export interface LectureVideo {
    id: number;
    videoUrl: string;
    imageUrl: string;
}

export const lectureVideos: LectureVideo[] = [
    {
        id: 1,
        videoUrl: "1072577550",
        imageUrl: pirouz_hanachi_cover
    },
    {
        id: 2,
        videoUrl: "1072577258",
        imageUrl: nader_keshtkar_cover
    },
    {
        id: 3,
        videoUrl: "1072576977",
        imageUrl: maryam_jalali_cover
    },
    {
        id: 4,
        videoUrl: "1072576498",
        imageUrl: hojjat_mirzaee_cover
    },
    {
        id: 5,
        videoUrl: "1072576065",
        imageUrl: hamidreza_pejman_cover
    },
    {
        id: 6,
        videoUrl: "1072576679",
        imageUrl: hosna_esmailbeigi_cover
    },
    {
        id: 7,
        videoUrl: "1072577078",
        imageUrl: mojtaba_jabbari_cover
    },
];
