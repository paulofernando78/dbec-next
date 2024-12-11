interface FillInTheBlankExercise {
  option: string;
  beforeBlank?: string;
  placeholder?: string;
  correctAnswer: string;
  afterBlank?: string;
  addLineBreak: boolean;
}

interface DropdownOption {
  value: string;
  label: string;
  correctAnswer: boolean;
}

interface DropdownExercise {
  beforeOption?: string;
  option: DropdownOption[];
  afterOption?: string;
  addLineBreak: boolean;
}

interface CheckboxOption {
  label: string;
  isCorrect: boolean;
}

interface CheckboxExercise {
  question: string;
  options: CheckboxOption[];
}

interface RadioOption {
  label: string;
  isCorrect: boolean;
}

interface RadioExercise {
  question: string;
  options: RadioOption[];
}

interface Exercise {
  title: string;
  subtitle: string;
  radio?: RadioExercise[];
  checkbox?: CheckboxExercise[];
  dropdown?: DropdownExercise[];
  fillInTheBlanks?: FillInTheBlankExercise[];
}

interface ExercisesProps {
  exercises: Exercise[];
}
