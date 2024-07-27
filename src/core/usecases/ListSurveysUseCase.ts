import { Survey } from "../entities/Survey";

export class ListSurveysUseCase {
    constructor(private surveys: Survey[]) {}

    execute(): Survey[] {
        return this.surveys
    }
}