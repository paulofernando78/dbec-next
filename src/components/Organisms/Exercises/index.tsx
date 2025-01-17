import { useState } from "react";
import { Button } from "@/components/Atoms/Button";
import { Radio } from "@/components/Molecules/ExerciseTemplates/Radio";
import { ExercisesProps } from "./type";

export const Exercises = ({ exercises = [], id }: ExercisesProps) => {
  const [showFeedback, setShowFeedback] = useState(false);

  // Function to handle the "Check answers" button click
  const checkAnswer = () => {
    setShowFeedback(true); // Display feedback when "Check answers" is clicked
  };

  // Function to handle the "Reset" button click
  const resetAnswers = () => {
    setShowFeedback(false); // Hide feedback when answers are reset
  };

  return (
    <>
      {exercises.map((exercise) => (
        <div className="line-break" key={exercise.id}>
          <div>
            <p>
              <b>{exercise.title}</b>
            </p>
            <p>{exercise.subtitle}</p>
          </div>

          <Radio radio={exercise.radio ?? []} exerciseId={exercise.id} showFeedback={showFeedback} />

          <div className="flex-8px-center-wrap">
            <Button label="Check answers" onClick={checkAnswer} />
            <Button label="Reset" onClick={resetAnswers} />
          </div>
        </div>
      ))}
    </>
  );
};