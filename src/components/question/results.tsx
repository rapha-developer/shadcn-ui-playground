import { CircleCheckBig, CircleX } from "lucide-react"
import { UserResponses } from "../../types/user-responses"

export const Resultados = ({ userAnswers }: { userAnswers: UserResponses[]}) => {
    return (
        <div className="mt-20 pt-10 bg-white min-h-96 w-2/3 mx-auto border border-solid border-border shadow-rap-boxes-shadow rounded-xl relative">
            <span className="absolute top-20 left-0 mt-5 text-white py-2 px-6 font-urbanist font-bold tracking-extraMedium text-sm rounded-[0_100px_100px_0] bg-red-500 capitalize transition-all hover:pl-8">
                Resultados {userAnswers.length}/{userAnswers.length}
            </span>
            <div className="border border-solid border-transparent pt-32 pb-10 px-4 lg:px-8 flex flex-col gap-4">
                <h1 className="font-urbanist text-3xl font-semibold text-titles tracking-extraMedium">✨ Resultados: </h1>
                <div className="flex gap-3">
                    <p className="font-dm-sans text-xl font-medium text-titles tracking-extraSmall">
                        Certas: {userAnswers.filter((answer) => answer.chosenOption?.isCorrect == true).length}
                    </p>
                    <p className="font-dm-sans text-xl font-medium text-titles tracking-extraSmall">
                        Erradas: {userAnswers.filter((answer) => answer.chosenOption?.isCorrect == false).length}
                    </p>
                </div>
            </div>
            <div className="w-full flex flex-col gap-6 px-4 md:px-6 pb-32">
                {userAnswers.map((userAnswer) => (
                    <div className="flex flex-col gap-3" key={`answers-key-${userAnswer.questionNumber}`}>
                        <h2 className="font-dm-sans text-2xl font-semibold text-titles">Questão {userAnswer.questionNumber}</h2>
                        <div className="w-full flex gap-4 items-center border border-solid border-border py-5 px-5 rounded transition-all">
                            {userAnswer.chosenOption?.isCorrect &&
                                <CircleCheckBig className="border border-solid border-green-300 min-w-10 h-10 bg-green-300 text-green-700 rounded-full" />
                            }
                            {!userAnswer.chosenOption?.isCorrect &&
                                <CircleX className="border border-solid border-red-300 min-w-10 h-10 bg-red-300 text-red-700 rounded-full" />
                            }
                            <p className="font-urbanist text-base text-titles font-medium">
                                {(userAnswer.chosenOption?.response === undefined) ? 'Escolha uma das opções da questão' : userAnswer.chosenOption?.response.solution} 
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}