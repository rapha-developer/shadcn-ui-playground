export type QuestionProps = {
    id?: string
    problem: {
        text: string
        image?: {
            url: string
            alt: string
        }
    }
    options: QuestionOptionProps[]

}
export type QuestionOptionProps = {
    response: {
        solution: string
        alt?: string
    } 
    isCorrect: boolean
}