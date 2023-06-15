import {FunctionComponent, useCallback, useMemo, useState} from "react";
import { Question } from "@models/question.model";
import s from "./QuestionComponent.module.scss";
import { Choice } from "@models/choice.model";

type QuestionComponentProps = {
  question: Question;
  gotoPreviousQuestion: (() => void) | null;
  gotoNextQuestion: (() => void) | null;
};

export const QuestionComponent: FunctionComponent<QuestionComponentProps> = (
  props
) => {
  const [choice, setChoice] = useState<Choice | undefined>(undefined);
  const isAnswered = useMemo(() => choice !== undefined, [choice])
  const handleClick = useCallback(
    (item: Choice) => () => {
      if (!isAnswered) {
        setChoice(item);
      }
    },
    [isAnswered]
  );

  return (
    <div className={s.host}>
      <div className={s.question}>{props.question.text}</div>
      <div className={s.choices}>
        {(props.question.choices ?? []).map(($, index) => (
          <button
            key={index}
            type="button"
            onClick={handleClick($)}
            className={$ === choice ? s.chosen : null}
          >
            {$.text}
          </button>
        ))}
      </div>
      {props.question.source ? (
        <div className={s.source}>Source: {props.question.source}</div>
      ) : null}
      <div className={s.answer}>
        {choice !== undefined ? props.question.answer : null}
      </div>
      <div className={s.buttons}>
        {props.gotoPreviousQuestion !== null ? (
          <button
            style={{ gridArea: "left" }}
            type="button"
            onClick={props.gotoPreviousQuestion}
          >
            Previous question
          </button>
        ) : null}
        {props.gotoNextQuestion !== null ? (
          <button
            style={{ gridArea: "right" }}
            type="button"
            onClick={props.gotoNextQuestion}
            disabled={!isAnswered}
          >
            Next question
          </button>
        ) : null}
      </div>
    </div>
  );
};
