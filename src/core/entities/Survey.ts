import { SurveyProps } from "../../types/survey"

export class Survey {
    private _id: string
    private _title: string
    private _resume: string
    private _category: {
        text:  "CSS" | "componentes" | "bloco" | "guias"
        color: '#3aa9fd' | '#ff2ed9' | '#227dff' | '#6A4EE9'
    }

    constructor({
        id,
        title,
        resume,
        category,
    }: SurveyProps) {
        this._id = id ?? self.crypto.randomUUID()
        this._title = title
        this._resume = resume
        this._category = category
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
}