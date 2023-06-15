import {Question} from "@models/question.model";
import {TextBlock} from "@models/text-block.model";
import {AnswerableQuestion} from "@models/answerable-question.model";

export type Stage = {
    id: string;
    next_stage: string;
    title: string;
    progress_bar_title: string;
    subtitle?: TextBlock[];
    text_block?: TextBlock[];

    type?: "DEFINITION" | "MULTI" | "SCENARIO" | "TABLE",
    answerable_questions?: AnswerableQuestion[];
    questions: Question[]
    definitionIntroText?: string;
}