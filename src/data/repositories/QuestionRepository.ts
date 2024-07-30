import { Question } from "../../core/entities/Question";

export class QuestionRepository {
    private questions: Question[] = []

    public create(question: Question) {
        this.questions.push(question)
    }

    public listAll(): Question[] {
        return this.listAll()
    }

    public findByProblem(problemText: string) {
        const question = this.questions.find((questionItem) => questionItem.problem.text === problemText)
        
        if(!question) {
            return null
        }
        return question
    }
}