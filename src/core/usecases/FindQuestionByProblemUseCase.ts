import { Question } from "../entities/Question";

export class FindQuestionByProblemUseCase {
    constructor(private question: Question | null) {}

    execute(): Question | null {
        return this.question
    }
}