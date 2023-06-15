import { FunctionComponent, useCallback, useMemo, useState } from "react";
import { Question } from "@models/question.model";
import { QuestionComponent } from "@components/QuestionComponent/QuestionComponent";

type QuestionsGroupProps = {
  questions: Question[];
};
export const QuestionsGroup: FunctionComponent<QuestionsGroupProps> = (
  props
) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const isFirstQuestion = useMemo(
    () => currentQuestion <= 0,
    [currentQuestion]
  );
  const isLastQuestion = useMemo(
    () => currentQuestion >= props.questions.length - 1,
    [props.questions, currentQuestion]
  );

  const gotoPreviousQuestion = useCallback(() => {
    setCurrentQuestion(($) => $ - 1);
  }, []);
  const gotoNextQuestion = useCallback(() => {
    setCurrentQuestion(($) => $ + 1);
  }, []);

  return props.questions.length === 0 ? (
    <div>No questions</div>
  ) : (
    <div>
      <div>
        Question {currentQuestion + 1} of {props.questions.length}
      </div>
      <QuestionComponent
        key={currentQuestion}
        question={props.questions[currentQuestion]}
        gotoPreviousQuestion={isFirstQuestion ? null : gotoPreviousQuestion}
        gotoNextQuestion={isLastQuestion ? null : gotoNextQuestion}
      />
    </div>
  );
};
