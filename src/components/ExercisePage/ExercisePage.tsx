import { FunctionComponent } from "react";
import { useExercise } from "@providers/ExerciseProvider";
import {useParams} from "react-router-dom";

export const ExercisePage: FunctionComponent = () => {
  const exercise = useExercise();
  const params = useParams<{id:string}>()

  return <h2>{exercise.title} (Stage {params.id})</h2>;
};