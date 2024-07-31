import { QuestionOptionProps, QuestionProps } from "../../types/question"
import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"

interface QuestionCardProps {
    number: number
    question: QuestionProps
    handleAnswer: (questionNumber: number, option: QuestionOptionProps) => void
}
export const Question = ({ number, question, handleAnswer}: QuestionCardProps) => {
    function handleClick(option: QuestionOptionProps) {
        handleAnswer(number, option)
    }
    return (
        <div className="mt-20 pt-10 bg-white min-h-64 w-2/3 mx-auto border border-solid border-border shadow-rap-boxes-shadow rounded-xl relative">
            <span className="absolute top-20 left-0 mt-5 text-white py-2 px-6 font-urbanist font-bold tracking-extraMedium text-sm rounded-[0_100px_100px_0] bg-red-500 capitalize transition-all hover:pl-8">
                Questão {number}
            </span>
            <div className="border border-solid border-transparent pt-32 pb-24 px-4 lg:px-8 flex flex-col gap-8">
                <h1 className="font-urbanist text-3xl font-semibold text-titles tracking-extraMedium">✨ {question.problem.text} </h1>
                
                <RadioGroup defaultValue={question.id}>
                {Array.isArray(question.options) &&
                question.options.length > 0 &&
                question.options.map((option, key) => {
                    const optionValue = `option-${key+1}`
                    return (
                        <div className="group" key={`group-${optionValue}`}>
                            <div className="w-full flex gap-4 items-center border border-solid border-border py-5 px-5 rounded transition-all has-[button[aria-checked='true']]:border-green-600">
                                <RadioGroupItem value={optionValue}
                                    onClick={() => handleClick(option)}
                                    id={`button-${optionValue}`} 
                                    className="border border-solid border-primary min-w-10 h-10 aria-checked:border-green-600 aria-checked:bg-green-500 aria-checked:text-white" />
                                <Label htmlFor={`button-${optionValue}`} 
                                    className="text-sm font-medium leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    {option.response.solution}
                                </Label>
                            </div>
                        </div>
                    )
                })
                }
                </RadioGroup>
            </div>
        </div>
    )
}

