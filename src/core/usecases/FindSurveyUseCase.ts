import { Survey } from "../entities/Survey";

export class FindSurveyByTitleUseCase {
    constructor(private survey: Survey | null) {}

    execute(): Survey | null {
        return this.survey
    }
}