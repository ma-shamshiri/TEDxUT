// data.ts

export interface Question {
    id: number;
    text: string;
    options: string[];
}

export const questions: Question[] = [
    {
        id: 1,
        text: "questionOne",
        options: [
            "questionOneAnswerOne",
            "questionOneAnswerTwo",
            "questionOneAnswerThree",
            "questionOneAnswerFour",
            "questionOneAnswerFive",
            "questionOneAnswerSix",
            "questionOneAnswerSeven",
            "questionOneAnswerEight",
        ],
    },
    {
        id: 2,
        text: "questionTwo",
        options: [
            "questionTwoAnswerOne",
            "questionTwoAnswerTwo",
            "questionTwoAnswerThree",
            "questionTwoAnswerFour",
            "questionTwoAnswerFive",
            "questionTwoAnswerSix",
            "questionTwoAnswerSeven",
            "questionTwoAnswerEight",
        ],
    },
    {
        id: 3,
        text: "questionThree",
        options: [
            "questionThreeAnswerOne",
            "questionThreeAnswerTwo",
            "questionThreeAnswerThree",
            "questionThreeAnswerFour",
            "questionThreeAnswerFive",
            "questionThreeAnswerSix",
            "questionThreeAnswerSeven",
            "questionThreeAnswerEight",
        ],
    },
    {
        id: 4,
        text: "questionFour",
        options: [
            "questionFourAnswerOne",
            "questionFourAnswerTwo",
            "questionFourAnswerThree",
            "questionFourAnswerFour",
            "questionFourAnswerFive",
            "questionFourAnswerSix",
            "questionFourAnswerSeven",
            "questionFourAnswerEight",
        ],
    },
    {
        id: 5,
        text: "questionFive",
        options: [
            "questionFiveAnswerOne",
            "questionFiveAnswerTwo",
            "questionFiveAnswerThree",
            "questionFiveAnswerFour",
            "questionFiveAnswerFive",
            "questionFiveAnswerSix",
            "questionFiveAnswerSeven",
            "questionFiveAnswerEight",
        ],
    },
    {
        id: 6,
        text: "questionSix",
        options: [
            "questionSixAnswerOne",
            "questionSixAnswerTwo",
            "questionSixAnswerThree",
            "questionSixAnswerFour",
            "questionSixAnswerFive",
            "questionSixAnswerSix",
            "questionSixAnswerSeven",
            "questionSixAnswerEight",
        ],
    },
    {
        id: 7,
        text: "questionSeven",
        options: [
            "questionSevenAnswerOne",
            "questionSevenAnswerTwo",
            "questionSevenAnswerThree",
            "questionSevenAnswerFour",
            "questionSevenAnswerFive",
            "questionSevenAnswerSix",
            "questionSevenAnswerSeven",
            "questionSevenAnswerEight",
        ],
    },
];

export interface PersonalityElement {
    id: number;
    name: string;
    description: string;
}

export const personalityElements: PersonalityElement[] = [
    {
        id: 1,
        name: "resultOneName",
        description: "resultOneDescription",
    },
    {
        id: 2,
        name: "resultTwoName",
        description: "resultTwoDescription",
    },
    {
        id: 3,
        name: "resultThreeName",
        description: "resultThreeDescription",
    },
    {
        id: 4,
        name: "resultFourName",
        description: "resultFourDescription",
    },
    {
        id: 5,
        name: "resultFiveName",
        description: "resultFiveDescription",
    },
    {
        id: 6,
        name: "resultSixName",
        description: "resultSixDescription",
    },
    {
        id: 7,
        name: "resultSevenName",
        description: "resultSevenDescription",
    },
];
