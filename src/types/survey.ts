import { QuestionProps } from "./question"

export type SurveyProps = {
    id?: string
    title: string
    resume: string
    category: {
        text:  "CSS" | "componentes" | "bloco" | "guias"
        color: '#3aa9fd' | '#ff2ed9' | '#227dff' | '#6A4EE9'
    }
    questions: QuestionProps[]
} 