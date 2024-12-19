
import { ExercisesProps, Exercise } from "./type";

// Hook
import { useState } from "react";

// CSS
import { Button } from "@/components/Atoms/Button";

// Images
import { correctIcon, incorrectIcon } from "@/img/index";

// Typescript
import "./type";
import Image from "next/image";

export const Exercises = ({ exercises = [], id }: ExercisesProps) => {
  return (
    <>
      {exercises.map((exercise, exerciseIndex) => (
        <ExerciseItem exercise={exercise} key={exercise.id}/>
      ))}
    </>
  );
};

const ExerciseItem = ({exercise}:{exercise:Exercise}) => {
  // State to manage feedback visibility
  const [showFeedback, setShowFeedback] = useState(false);
  // State to store selected answers
  const [selectedAnswer, setSelectedAnswer] = useState<Record<string, string>>(
    {}
  );
  const handleSelectedAnswer = (
    id: string,
    answer: string
  ) => {
    setSelectedAnswer((prev) => ({
      ...prev,
      [id]: answer,
    }));
  };

  const checkAnswer = () => {
    setShowFeedback(true); // Display feedback when "Check answers" is clicked
  };

  const resetAnswers = () => {
    setSelectedAnswer({}); // Reset selected answers to an empty object
    setShowFeedback(false);
  };
  return (
    <div className="line-break">
          <div>
            <p>
              <b>{exercise.title}</b>
            </p>
            <p>{exercise.subtitle}</p>
          </div>

          {/* Radio */}
          {exercise.radio?.map((radioItem, radioIndex) => (
            <div key={radioIndex}>
              <p dangerouslySetInnerHTML={{ __html: radioItem.question}}></p>
              {radioItem.options.map((option, optionIndex) => {
                const idpp=`${exercise.id}-${radioItem.id}`
                const isChecked=selectedAnswer[idpp] ===
                option.label
                return (
                  <label key={optionIndex} className="radio-checkbox-flex">
                    <div className="radio-checkbox-container">
                      <input
                        type="radio"
                        name={`radio-${idpp}`} // Grouping inputs for the same question
                        id={`radio-${exercise.id}-${radioItem.id}-${option.id}`}
                        className="radio-size"
                        onChange={() =>
                          !showFeedback && // Allow selection only if feedback is not shown
                          handleSelectedAnswer(
                            idpp,
                            option.label
                          )
                        }
                        checked={
                          isChecked
                        }
                        disabled={showFeedback} // Disable radio button once feedback is shown
                      />
                    </div>
                    <p className="cursor-pointer">{option.label}</p>
  
                    {/* Only show the feedback icon for the selected option */}
                    {showFeedback &&
                      isChecked && (
                        <Image
                          src={
                            option.isCorrect
                              ? correctIcon // Show correct icon if selected answer is correct
                              : incorrectIcon // Show incorrect icon if selected answer is incorrect
                          }
                          alt={
                            option.isCorrect ? "Correct icon" : "Incorrect icon"
                          }
                          width={27}
                          height={27}
                          className={
                            isChecked
                              ? ""
                              : "hidden" // Hide icons for unselected options
                          }
                        />
                      )}
                  </label>
                )})}
              
            </div>
          ))}

          {/* Checkbox */}

          {/* Dropdown */}

          {/* Fill in the Blank */}

          <div className="flex-8px-center-wrap">
            <Button label="Check answers" onClick={checkAnswer} />
            <Button label="Reset" onClick={resetAnswers} />
          </div>
        </div>
  )
}