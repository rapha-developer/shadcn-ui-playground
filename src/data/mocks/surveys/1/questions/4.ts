import { QuestionProps } from "../../../../../types/question";


export const questionFourData: QuestionProps = {
    problem: {
        text: "As variáveis: --input: é responsável pela cor de borda para entradas como ?"
    },
    options: [
        {
            response: {
                solution: "<Input />, <Select /> and <Textarea />"
            },
            isCorrect: true
        },
        {
            response: {
                solution: "<TabsList />, <Input /> and <Switch />"
            },
            isCorrect: false
        },
        {
            response: {
                solution: "<Button />, <Textarea /> and <Input />"
            },
            isCorrect: false
        },
        {
            response: {
                solution: "<Textarea />, <Select /> and <Alert />"
            },
            isCorrect: false
        },
    ]
}