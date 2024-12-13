// Hook
import { useState } from "react";

// CSS
import { Button } from "@/components/Atoms/Button";
import styles from "./styles.module.css";

// Images
import { correctIcon, incorrectIcon } from "@/img/index";

// Typescript
import "./type";
import Image from "next/image";

export const Exercises = ({ exercises = [] }: ExercisesProps) => {
  // State to store selected answers
  const [selectedAnswer, setSelectedAnswer] = useState<Record<string, string>>(
    {}
  );
  // State to manage feedback visibility
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSelectedAnswer = (
    exerciseIndex: number,
    radioIndex: number,
    answer: string
  ) => {
    setSelectedAnswer((prev) => ({
      ...prev,
      [`${exerciseIndex}-${radioIndex}`]: answer,
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
    <>
      {exercises.map((exercise, exerciseIndex) => (
        <div key={exerciseIndex} className="line-break">
          <div>
            <p>
              <b>{exercise.title}</b>
            </p>
            <p>{exercise.subtitle}</p>
          </div>

          {/* Radio */}
          {exercise.radio?.map((radioItem, radioIndex) => (
            <div key={radioIndex}>
              <p>{radioItem.question}</p>
              {radioItem.options.map((option, optionIndex) => (
                <label key={optionIndex} className="radio-checkbox-flex">
                  <div className="radio-checkbox-container">
                    <input
                      type="radio"
                      name={`radio-${exerciseIndex}-${radioIndex}`} // Grouping inputs for the same question
                      className="radio-size"
                      onChange={() =>
                        !showFeedback && // Allow selection only if feedback is not shown
                        handleSelectedAnswer(
                          exerciseIndex,
                          radioIndex,
                          option.label
                        )
                      }
                      checked={
                        selectedAnswer[`${exerciseIndex}-${radioIndex}`] ===
                        option.label
                      }
                      disabled={showFeedback} // Disable radio button once feedback is shown
                    />
                  </div>
                  <p className="cursor-pointer">{option.label}</p>

                  {/* Only show the feedback icon for the selected option */}
                  {showFeedback &&
                    selectedAnswer[`${exerciseIndex}-${radioIndex}`] ===
                      option.label && (
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
                          selectedAnswer[`${exerciseIndex}-${radioIndex}`] ===
                          option.label
                            ? ""
                            : "hidden" // Hide icons for unselected options
                        }
                      />
                    )}
                </label>
              ))}
            </div>
          ))}

          <div className="flex-8px-center-wrap">
            <Button label="Check answers" onClick={checkAnswer} />
            <Button label="Reset" onClick={resetAnswers} />
          </div>
        </div>
      ))}
    </>
  );
};
