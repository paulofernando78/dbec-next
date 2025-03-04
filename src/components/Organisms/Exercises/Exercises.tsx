"use client";

import { useState } from "react";

// Components
import { Radio } from "@/components/Molecules/ExerciseTemplates/Radio";
import { CheckAnswersButton } from "@/components/Molecules/Buttons/CheckAnswersButton/CheckAnswersButton";
import { ShowAnswersButton } from "@/components/Molecules/Buttons/ShowAnswersButton/ShowAnswersButton";
import { ResetAnswersButton } from "@/components/Molecules/Buttons/ResetAnswersButton/ResetAnswersButton";

// CSS
import styles from "./Exercises.module.css";

// Typesript
import { ExercisesProps } from "./Exercises.type";

export const Exercises = ({ exercises = [], id }: ExercisesProps) => {
  const [selectedOption, setSelectedOption] = useState<Record<string, string>>(
    {}
  );
  const [showFeedback, setShowFeedback] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCheckAnswer = () => {
    setShowFeedback(true);
  };

  const handleShowAnswer = () => {
    setShowAnswer((prev) => !prev); // Toggles the visibility of answers
  };

  const handleResetAnswers = () => {
    setSelectedOption({});
    setShowFeedback(false);
    setShowAnswer(false);
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

          {exercise.radio && (
            <>
              <Radio
                radio={exercise.radio ?? []}
                exerciseId={exercise.id}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                showFeedback={showFeedback}
              />
            </>
          )}
          <div className="flex-8px-center-wrap">
            <CheckAnswersButton onClick={handleCheckAnswer} />
            <ShowAnswersButton
              onClick={handleShowAnswer}
              showAnswer={showAnswer}
            />
            <ResetAnswersButton onClick={handleResetAnswers} />
          </div>
          {showAnswer && (
            <div>
              {exercise.radio?.map((question, index) => {
                // Only show answers for questions with valid options
                if (
                  question.question &&
                  question.options &&
                  question.options.length > 0
                ) {
                  return (
                    <div key={index} className={styles["show-answer-radio"]}>
                      {question.options
                        .map((option, optionIndex) => {
                          if (option.isCorrect) {
                            return (
                              // Return the correct answer as an object with display text
                              `${index + 1}. ${String.fromCharCode(
                                97 + optionIndex
                              )})`
                            );
                          }
                          return null; // Skip incorrect options
                        })
                        .filter(Boolean) // Remove null values
                        .join(", ")}{" "}
                      {/* Join answers with commas */}
                    </div>
                  );
                }
                return null; // Skip if there are no valid questions/options
              })}
            </div>
          )}
        </div>
      ))}
    </>
  );
};
