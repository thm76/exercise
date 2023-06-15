import { FunctionComponent, ReactNode, useContext } from "react";
import { ExerciseContext } from "@providers/ExerciseContext";
import { useParams } from "react-router-dom";
import { useResource } from "@helpers/use-resource";
import { Exercise } from "@models/exercise.model";
import { LoadingWrapper } from "@components/LoadingWrapper/LoadingWrapper";

type ExerciseProviderProps = {
  children?: ReactNode;
};

export const ExerciseProvider: FunctionComponent<ExerciseProviderProps> = (
  props
) => {
  const params = useParams<{
    name: string;
  }>();

  const [exercise] = useResource<Exercise>(`/api/exercises/${params.name}`);

  return (
    <LoadingWrapper resource={exercise}>
      <ExerciseContext.Provider value={exercise.data}>
        {props.children}
      </ExerciseContext.Provider>
    </LoadingWrapper>
  );
};

export const useExercise = (): Exercise => {
  const context = useContext(ExerciseContext);

  if (context === undefined) {
    throw new Error("No context!");
  }

  return context;
};
