import { createContext } from "react";
import { Exercise } from "@models/exercise.model";

export const ExerciseContext = createContext<Exercise | undefined>(undefined);
