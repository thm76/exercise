import { FunctionComponent, useEffect, useMemo } from "react";
import { useExercise } from "@providers/ExerciseProvider";
import s from "./ExerciseProgress.module.scss";
import { NavLink, useParams } from "react-router-dom";
import { Stage } from "@models/stage.model";

type StageInfo = Stage & {
  status: "completed" | "current" | "notCompleted";
  displayId: string;
  displayTitle: string;
};

export const ExerciseProgress: FunctionComponent = () => {
  const exercise = useExercise();
  const params = useParams<{
    id: string;
  }>();

  const currentId = useMemo<number>(() => {
    const id = parseInt(params.id ?? "0", 10);
    if (isNaN(id)) {
      return 0;
    }

    return Math.max(0, Math.min(id - 1, exercise.stages.length - 1));
  }, [exercise, params.id]);

  const stages = useMemo<StageInfo[]>(
    () =>
      exercise.stages.map((stage) => {
        const id = parseInt(stage.id, 10);
        const displayId = isNaN(id) ? "1" : `${id + 1}`;

        return {
          ...stage,
          displayId: isNaN(id) ? "1" : `${id + 1}`,
          displayTitle: stage.progress_bar_title ?? stage.title ?? displayId,
          status: isNaN(id)
            ? "notCompleted"
            : id === currentId
            ? "current"
            : id < currentId
            ? "completed"
            : "notCompleted",
        };
      }),
    [exercise, currentId]
  );

  useEffect(() => {
    console.log("current:", currentId);
    console.log(
      "stages:",
      stages.map(($) => `${$.id} (${$.status})`)
    );
  }, [currentId, stages]);

  return (
    <div className={s.host}>
      <ul>
        {stages.map((stage, index) => (
          <li
            key={index}
            className={
              stage.status === "current"
                ? s.current
                : stage.status === "completed"
                ? s.completed
                : null
            }
          >
            {stage.status === "completed" ? (
              <NavLink
                to={`../${
                  stage.status === "completed" ? stage.displayId : params.id
                }`}
                title={stage.displayTitle}
              >
                <span>{index + 1}</span>
              </NavLink>
            ) : (
              <a title={stage.displayTitle}>
                <span>{index + 1}</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
