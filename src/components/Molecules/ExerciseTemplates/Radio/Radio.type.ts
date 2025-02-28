import { Dispatch, SetStateAction } from "react";

export interface Option {
  id: string;
  label: string;
  isCorrect: boolean;
}

export interface Question {
  title: string
  subtitle: string
  question: string;
  questionPt: string;
  options: Option[];
  id: string;
}

export interface RadioProps {
  radio: Question[];
  exerciseId: string;
  showFeedback: boolean;
  selectedOption: Record<string, string>;
  setSelectedOption: Dispatch<SetStateAction<Record<string, string>>>;
}