import { createContext } from "react";
import { Exercise } from "@models/exercise.model";
import { Resource } from "@models/resource.model";

export const ExerciseContext = createContext<Exercise|undefined>(undefined);
