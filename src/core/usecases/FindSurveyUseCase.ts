import { Survey } from "../entities/Survey";

export class FindSurveyByTitle {
    constructor(private survey: Survey | null) {}

    execute(): Survey | null {
        return this.survey
    }
}