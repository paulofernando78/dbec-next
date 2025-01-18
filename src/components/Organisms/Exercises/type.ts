import { Question } from "@/components/Molecules/ExerciseTemplates/Radio/type";


interface Exercise {
  id: string
  title: string;
  subtitle?: string;
  radio?: Question[];
}

export interface ExercisesProps {
  exercises: Exercise[];
  id: string
}
