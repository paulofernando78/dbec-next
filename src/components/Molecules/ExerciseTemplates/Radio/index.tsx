"use client";

// Hook
import { useEffect, useState } from "react";

// CSS
import styles from "./styles.module.css";

// Component
import { Button } from "@/components/Atoms/Button";

// Typescript
import { RadioProps } from "./type";

// import DOMPurify from "dompurify";

export const Radio = ({ questions }: RadioProps) => {
  // Use an array to store the selected answers for each question
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );

  // Preload correct / incorrect images
  useEffect(() => {
    const correctImg = new Image();
    correctImg.src = "/assets/img/icon/radio-correct.png";

    const incorrectImg = new Image();
    incorrectImg.src = "/assets/img/icon/radio-incorrect.png";
  }, []);

  // Update the selected answer for a specific question
  const handleSelectAnswer = (questionIndex: number, optionIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  // Reset all selected answers to null
  const resetRadio = () => {
    setSelectedAnswers(Array(questions.length).fill(null));
  };

  return (
    <div>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex} className="margin-bottom">
          <p className="margin-bottom bold">{question.title}</p>
          <p
            dangerouslySetInnerHTML={{
              __html: question.question,
            }}
          ></p>
          <div>
            {question.options.map((option, optionIndex) => {
              // Determine if the current option is selected for the current question
              const isChecked = selectedAnswers[questionIndex] === optionIndex;
              const optionIsCorrect = isChecked && option.isCorrect;
              const radioColor =
                styles[optionIsCorrect ? "radio-correct" : "radio-incorrect"];
              return (
                <label key={optionIndex} className={styles["align-radio"]}>
                  <input
                    type="radio"
                    checked={isChecked}
                    onClick={() =>
                      handleSelectAnswer(questionIndex, optionIndex)
                    }
                    onChange={() =>
                      handleSelectAnswer(questionIndex, optionIndex)
                    }
                    className={`${radioColor} ${styles["input-size"]}`}
                  />
                  <p>{option.label}</p>
                </label>
              );
            })}
          </div>
        </div>
      ))}
      <div className="margin-top">
        <Button label="Reset" onClick={resetRadio} />
      </div>
    </div>
  );
};
