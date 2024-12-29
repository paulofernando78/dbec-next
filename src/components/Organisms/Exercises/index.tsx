// Components
import Image from "next/image";

// Hook
import { useState } from "react";

// CSS
import { Button } from "@/components/Atoms/Button";

// Images
import { correctIcon, incorrectIcon } from "@/img/index";

// Typescript
import { ExercisesProps, Exercise } from "./type";

export const Exercises = ({ exercises = [], id }: ExercisesProps) => {
  return (
    <>
      {exercises.map((exercise) => (
        <ExerciseItem exercise={exercise} key={exercise.id}/>
      ))}
    </>
  );
};

const ExerciseItem = ({exercise}:{exercise:Exercise}) => { 
  // State to store selected answers
  const [selectedOption, setSelectedOption] = useState<Record<string, string>>({});
  
  // State to manage feedback visibility
  const [showFeedback, setShowFeedback] = useState(false);
  
  // Function to handle the selection of an option
  const handleSelectedOption = (
    id: string, // Unique identifier for the question
    answer: string // Selected answer
  ) => {
    // Update the state with the selected option
    setSelectedOption((prev) => ({
      ...prev, // Preserve previous selections
      [id]: answer, // Update the selection for the current question
    }));
  };

  // Function to handle the "Check answers" button click
  const checkAnswer = () => {
    setShowFeedback(true); // Display feedback when "Check answers" is clicked
  };

  // Function to handle the "Reset" button click
  const resetAnswers = () => {
    setSelectedOption({}); // Reset selected options to an empty object
    setShowFeedback(false); // Hide feedback when answers are reset
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
              <p dangerouslySetInnerHTML={{ __html: radioItem.question}} className="display-inline"></p>{" "}
              <p className="display-inline portuguese">{radioItem.questionPt}</p>
              {radioItem.options.map((option, optionIndex) => {
                const idpp=`${exercise.id}-${radioItem.id}`
                const isChecked=selectedOption[idpp] === option.label
                return (
                  <label key={optionIndex} className="radio-checkbox-flex">
                    <div className="radio-checkbox-container position-relative">
                      <input
                        type="radio"
                        name={`radio-${idpp}`} // Grouping inputs for the same question
                        id={`radio-${exercise.id}-${radioItem.id}-${option.id}`}
                        className="radio-size"
                        onChange={() =>
                          !showFeedback && // Allow selection only if feedback is not shown
                          handleSelectedOption(
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
                    <p className="cursor-pointer">{option.label}
                    {" "}
                    {/* Only show the feedback icon for the selected option */}
                    {showFeedback && isChecked && (
                          <Image
                            src={
                              option.isCorrect
                                ? correctIcon // Show correct icon if selected answer is correct
                                : incorrectIcon // Show incorrect icon if selected answer is incorrect
                            }
                            alt={
                              option.isCorrect ? "Correct icon" : "Incorrect icon"
                            }
                            width={22}
                            height={22}
                            className={`${
                              isChecked
                                ? ""
                                : "hidden" // Hide icons for unselected options
                            } icon-position`}
                          />
                      )}
                    </p>
  
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