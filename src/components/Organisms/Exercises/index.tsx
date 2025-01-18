import { useState } from "react";
import { Button } from "@/components/Atoms/Button";
import { Radio } from "@/components/Molecules/ExerciseTemplates/Radio";
import styles from "./styles.module.css";
import { ExercisesProps } from "./type";

export const Exercises = ({ exercises = [], id }: ExercisesProps) => {
  const [selectedOption, setSelectedOption] = useState<Record<string, string>>(
    {}
  );
  const [showFeedback, setShowFeedback] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCheckAnswer = () => {
    setShowFeedback(true);
  };

  const handleResetAnswers = () => {
    setSelectedOption({});
    setShowFeedback(false);
    setShowAnswer(false);
  };

  const handleShowAnswer = () => {
    setShowAnswer((prev) => !prev); // Toggles the visibility of answers
  };

  const renderAnswers = (answers: string | string[]) =>
    Array.isArray(answers) ? answers.join(" / ") : answers;

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
                      {question.options.map((option, optionIndex) => {
                        if (option.isCorrect) {
                          return (
                            <span key={optionIndex}>
                              {/* Display the correct answer as 1. a) or 2. b) */}
                              {index + 0}.{" "}
                              {String.fromCharCode(97 + optionIndex)}){", "}
                            </span>
                          );
                        }
                        return null; // Skip incorrect options
                      })}
                    </div>
                  );
                }
                return null; // Skip if there are no valid questions/options
              })}
            </div>
          )}

          <div className="flex-8px-center-wrap">
            <Button label="Check answers" onClick={handleCheckAnswer} />
            <Button
              label={`${showAnswer ? "Hide" : "Show"} answers`}
              onClick={handleShowAnswer}
            />
            <Button label="Reset" onClick={handleResetAnswers} />
          </div>
        </div>
      ))}
    </>
  );
};
