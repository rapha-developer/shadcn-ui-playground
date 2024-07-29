import { QuestionProps } from "../../types/question"
import { SurveyProps } from "../../types/survey"

export class Survey {
    private _id: string
    private _title: string
    private _resume: string
    private _category: {
        text:  "CSS" | "componentes" | "bloco" | "guias"
        color: '#3aa9fd' | '#ff2ed9' | '#227dff' | '#6A4EE9'
    }
    private _questions: QuestionProps[]

    constructor({
        id,
        title,
        resume,
        category,
        questions
    }: SurveyProps) {
        this._id = id ?? self.crypto.randomUUID()
        this._title = title
        this._resume = resume
        this._category = category
        this._questions = questions
    }

    public get id(): string {
        return this._id
    }

    public get title(): string {
        return this._title
    }

    public get resume(): string {
        return this._resume
    }

    public get category(): SurveyProps['category'] {
        return this._category
    }

    public get questions(): QuestionProps[] {
        return this._questions
    }
}