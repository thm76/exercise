import { FunctionComponent, useMemo } from "react";
import { useExercise } from "@providers/ExerciseProvider";
import { useParams } from "react-router-dom";
import { ExerciseProgress } from "@components/ExerciseProgress/ExerciseProgress";
import s from "./ExercisePage.module.scss";
import { Stage } from "@models/stage.model";

export const ExercisePage: FunctionComponent = () => {
  const exercise = useExercise();
  const params = useParams<{
    id: string;
  }>();
  const stage = useMemo<Stage>(() => {
    let id = parseInt(params.id ?? "0", 10);
    if (isNaN(id)) {
      return exercise.stages[0];
    }

    id = Math.max(0, Math.min(exercise.stages.length - 1, id - 1));
    return exercise.stages[id];
  }, [exercise, params]);

  return (
    <div className={s.host}>
      <ExerciseProgress />
      <div className={s.title}>
        <h2>
          {[exercise.title, stage.title]
            .filter(($) => typeof $ === "string" && $.trim() !== "")
            .join(" • ")}
        </h2>
      </div>
      <div className={s.tile}>Test</div>
    </div>
  );
};
