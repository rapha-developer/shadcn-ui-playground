import { Question } from "../core/entities/Question";

export class QuestionViewModel {
    static viewQuestion(question: Question) {
        return {
            id: question.id,
            problem: question.problem,
            options: question.options
        }
    }
}