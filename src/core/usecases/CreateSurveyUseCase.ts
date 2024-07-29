import { QuestionProps } from "../../types/question"
import { SurveyProps } from "../../types/survey"
import { Survey } from "../entities/Survey"


export class CreateSurveyUseCase {
    constructor(
        private title: string,
        private resume: string,
        private category: SurveyProps['category'],
        private questions: QuestionProps[],
        private id?: string
    ) {}

    execute(): Survey {
        return new Survey({
            id: this?.id, 
            title: this.title,
            resume: this.resume,
            category: this.category,
            questions: this.questions
        })
    }
}