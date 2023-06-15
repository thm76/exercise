import { FunctionComponent, useCallback, useMemo } from "react";
import { useExercise } from "@providers/ExerciseProvider";
import { useNavigate, useParams } from "react-router-dom";
import { ExerciseProgress } from "@components/ExerciseProgress/ExerciseProgress";
import s from "./ExercisePage.module.scss";
import { Stage } from "@models/stage.model";
import { StageTable } from "@components/StageTable/StageTable";
import { StageDefault } from "@components/StageDefault/StageDefault";
import { StageMulti } from "@components/StageMulti/StageMulti";

export const ExercisePage: FunctionComponent = () => {
  const navigate = useNavigate();

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

  const previousStage = useMemo<number | undefined>(() => {
    const id = parseInt(stage.id, 10);
    return isNaN(id) ? undefined : id;
  }, [stage]);
  const nextStage = useMemo<number | undefined>(() => {
    const id = parseInt(stage.id, 10);
    return isNaN(id) ? undefined : id + 2;
  }, [stage]);
  const navigatePrevious = useCallback(() => {
    navigate(`../${previousStage}`, { relative: "path" });
  }, [previousStage]);
  const navigateNext = useCallback(() => {
    console.log("next", nextStage);
    navigate(`../${nextStage}`, { relative: "path" });
  }, [nextStage]);

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

      <div className={s.tile}>
        {stage.type === undefined ? (
          <StageDefault stage={stage} />
        ) : stage.type === "TABLE" ? (
          <StageTable stage={stage} />
        ) : stage.type === "MULTI" ? (
          <StageMulti stage={stage} />
        ) : (
          <p>This type of stage ({stage.type}) is not yet implemented.</p>
        )}
        <div className={s.buttons}>
          {previousStage !== undefined ? (
            <button
              style={{ gridArea: "previous" }}
              onClick={navigatePrevious}
              disabled={stage.first_stage}
            >
              Previous
            </button>
          ) : null}
          {nextStage !== undefined ? (
            <button
              type="button"
              style={{ gridArea: "next" }}
              disabled={stage.last_stage}
              onClick={navigateNext}
            >
              Next
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};
