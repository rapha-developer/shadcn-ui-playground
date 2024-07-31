import { SurveyProps } from "../../../../types/survey";
import { questionOneData } from "./questions/1";
import { questionSecondData } from "./questions/2";
import { questionThirdData } from "./questions/3";
import { questionFourData } from "./questions/4";

export const surveyOneData: SurveyProps = {
    title: 'Aprenda sobre as úteis css variáveis do shadcn-ui',
    resume: 'Teste os seus conhecimentos sobre css variáveis, geralmente instaladas no arquivo global.css, do shadcn-ui',
    category: {
        text: 'CSS',
        color: '#3aa9fd'
    },
    questions: [
        questionOneData,
        questionSecondData,
        questionThirdData,
        questionFourData
    ]
}