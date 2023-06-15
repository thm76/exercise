import { FunctionComponent } from "react";
import { StagePageProps } from "@models/StagePageProps";
import s from "./StageTable.module.scss";
import { TextBlockComponent } from "@components/TextBlockComponent/TextBlockComponent";

export const StageTable: FunctionComponent<StagePageProps> = (props) => {
  return (
    <div className={s.host}>
      <div style={{ gridArea: "subtitle" }}>
        {(props.stage.subtitle ?? []).map((block, index) => (
          <TextBlockComponent textBlock={block} key={index} />
        ))}
      </div>
      <div style={{ gridArea: "left" }}>
        <h3>{props.stage.left?.title}</h3>
        {props.stage.left?.content.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>
      <div style={{ gridArea: "right" }}>
        <h3>{props.stage.right?.title}</h3>
        {props.stage.right?.content.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>
    </div>
  );
};
