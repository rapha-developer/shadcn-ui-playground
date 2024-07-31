import { QuestionProps } from "../../../../../types/question";


export const questionOneData: QuestionProps = {
    problem: {
        text: "Quais são os significados das variáveis: --background: e a --foreground: no shadcn-ui ?"
    },
    options: [
        {
            response: {
                solution: "A variável --background é usada para a cor de fundo do componente e a variável --foreground é usada para a cor do texto."
            },
            isCorrect: true
        },
        {
            response: {
                solution: "A variável --background  é usada para a cor do texto e a variável --foreground é usada para a cor de fundo do componente."
            },
            isCorrect: false
        },
        {
            response: {
                solution: "A variável --background  é usada para a cor do texto e a variável --foreground é usada no primeiro plano."
            },
            isCorrect: false
        },
        {
            response: {
                solution: "A variável --background é usada para a cor de fundo do texto do componente e a variável --foreground é usada para a cor do texto quando não há background."
            },
            isCorrect: false
        },
    ]
}