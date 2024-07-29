import { Question } from "../entities/Question"

export class CreateQuestionUseCase {
    constructor(
        private problem: {
            text: string
            image?: {
                url: string
                alt: string
            }
        },
        private options: {
            response: {
                solution: string
                alt?: string
            }
            isCorrect: boolean
        }[],
        private id?: string
    ) {}

    execute(): Question {
        return new Question({
            id: this?.id, 
            problem: this.problem,
            options: this.options
        })
    }
}