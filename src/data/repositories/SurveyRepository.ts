import { Survey } from "../../core/entities/Survey";

export class SurveyRepository {
    private surveys: Survey[] = []

    public create(survey: Survey) {
        this.surveys.push(survey)
    }

    public listAll(): Survey[] {
        return this.surveys
    }
    
    public findByTitle(surveyTitle: string): Survey | null {
        const survey = this.surveys.find((surveyItem) => surveyItem.title === surveyTitle)

        if (!survey) {
            return null
        }

        return survey
    }
}