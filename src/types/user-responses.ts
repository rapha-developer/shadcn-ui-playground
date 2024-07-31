import { QuestionOptionProps } from "./question"

export interface UserResponses {
    questionNumber: number
    chosenOption: QuestionOptionProps | null,
    rightOption: QuestionOptionProps | undefined,
}[]