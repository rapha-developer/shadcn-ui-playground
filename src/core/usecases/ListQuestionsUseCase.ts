import { Question } from "../entities/Question";

export class ListQuestionsUseCase {
    constructor(private questions: Question[]) {}

    execute(): Question[] {
        return this.questions
    }
}