import { Survey } from "../core/entities/Survey";

export class SurveyViewModel {
    static viewSurvey(survey: Survey) {
        return {
            id: survey.id,
            title: survey.title,
            resume: survey.resume,
            category: survey.category
        }
    }
}