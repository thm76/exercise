import { Question } from "@models/question.model";
import { TextBlock } from "@models/text-block.model";
import { AnswerableQuestion } from "@models/answerable-question.model";
import { TableColumn } from "@models/table-column.model";

export type Stage = {
  id: string;
  title?: string;
  progress_bar_title: string;
  subtitle?: TextBlock[];
  text_block?: TextBlock[];

  type?: undefined | "DEFINITION" | "MULTI" | "SCENARIO" | "TABLE";
  answerable_questions?: AnswerableQuestion[];
  questions: Question[];
  definitionIntroText?: string;
  left?: TableColumn;
  right?: TableColumn;

  first_stage: boolean;
  last_stage: boolean;
  next_stage: string;
};
