import { QuestionProps } from "../../types/question"

export class Question {
    private _id: string
    private _problem: {
        text: string
        image?: {
            url: string
            alt: string
        }
    }
    private _options: {
        response: {
            solution: string
            alt?: string
        } 
        isCorrect: boolean
    }[]

    constructor({
        id,
        problem,
        options
    }: QuestionProps) {
        this._id = id ?? self.crypto.randomUUID()
        this._problem = problem
        this._options = options
    }

    public get id(): string {
        return this._id
    }

    public get problem(): QuestionProps['problem'] {
        return this._problem
    }
    
    public get options(): QuestionProps['options'] {
        return this._options
    }
}