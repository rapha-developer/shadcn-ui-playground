import { QuestionProps } from "../../types/question"
import { Survey } from "../entities/Survey"


export class CreateSurveyUseCase {
    constructor(
        private title: string,
        private resume: string,
        private category: {
            text:  "CSS" | "componentes" | "bloco" | "guias",
            color: '#3aa9fd' | '#ff2ed9' | '#227dff' | '#6A4EE9'
        },
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