import { Choice } from "@models/choice.model";

export type Question = {
  source?: string;
  text?: string;
  answer: string;
  question?: string;
  choices?: Choice[];
};
