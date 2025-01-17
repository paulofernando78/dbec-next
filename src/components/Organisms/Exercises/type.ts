import { RadioItems } from "@/components/Molecules/ExerciseTemplates/Radio/type";


interface Exercise {
  id: string
  title: string;
  subtitle?: string;
  radio?: RadioItems[];
}

export interface ExercisesProps {
  exercises: Exercise[];
  id: string
}
