import { FunctionComponent } from "react";
import { StagePageProps } from "@models/StagePageProps";
import { TextBlockComponent } from "@components/TextBlockComponent/TextBlockComponent";

export const StageDefault: FunctionComponent<StagePageProps> = (props) => (
  <div>
    {(props.stage.text_block ?? []).map((block, index) => (
      <TextBlockComponent textBlock={block} key={index} />
    ))}
  </div>
);
