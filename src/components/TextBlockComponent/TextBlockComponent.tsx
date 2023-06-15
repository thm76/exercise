import { FunctionComponent } from "react";
import { TextBlock } from "@models/text-block.model";
import s from "./TextBlockComponent.module.scss";

type TextBlockComponentProps = {
  textBlock: TextBlock;
};

export const TextBlockComponent: FunctionComponent<TextBlockComponentProps> = (
  props
) => (
  <div className={s.host}>
    <h3>{props.textBlock.title}</h3>
    {props.textBlock.textType === "PARAGRAPH"
      ? props.textBlock.text.map((text, index) => <p key={index}>{text}</p>)
      : props.textBlock.textType === "HTML"
      ? props.textBlock.text.map((text, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
        ))
      : null}
  </div>
);
