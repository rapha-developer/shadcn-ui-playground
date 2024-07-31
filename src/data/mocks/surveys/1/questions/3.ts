import { QuestionProps } from "../../../../../types/question";


export const questionThirdData: QuestionProps = {
    problem: {
        text: "As variáveis: (--card: e --card-foreground:) e (--border:) equivalem ao que ?"
    },
    options: [
        {
            response: {
                solution: "cor de borda padrão, cor de fundo do card, respectivamente"
            },
            isCorrect: false
        },
        {
            response: {
                solution: "cor de borda acentuada, cor de texto e fundo de card, respectivamente"
            },
            isCorrect: false
        },
        {
            response: {
                solution: "cor de texto e fundo do body, cor de borda padrão, respectivamente"
            },
            isCorrect: false
        },
        {
            response: {
                solution: "cor de fundo e texto do <Card />, cor de borda padrão, respectivamente"
            },
            isCorrect: true
        },
    ]
}