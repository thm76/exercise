import { FunctionComponent } from "react";
import { StagePageProps } from "@models/StagePageProps";
import { QuestionsGroup } from "@components/QuestionsGroup/QuestionsGroup";

export const StageMulti: FunctionComponent<StagePageProps> = (props) => {
  return (
    <div>
      <QuestionsGroup questions={props.stage.questions} />
    </div>
  );
};
