"use client";
import { useState } from "react";
import styles from "./Radio.module.css";
import { Button } from "@/components/Button/Button";

interface Option {
  isCorrect: boolean;
  label: string;
}

interface Question {
  title?: string;
  question: string;
  options: Option[];
}

interface RadioProps {
  questions: Question[];
}

export const Radio = ({ questions }: RadioProps) => {
  // Use an array to store the selected answers for each question
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));

  // Reset all selected answers to null
  const resetRadio = () => {
    setSelectedAnswers(Array(questions.length).fill(null));
  };

  // Update the selected answer for a specific question
  const handleSelectAnswer = (questionIndex: number, optionIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  return (
    <div>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <p className="margin-bottom bold">{question.title}</p>
          <p>{question.question}</p>
          <div>
            {question.options.map((option, optionIndex) => {
              // Determine if the current option is selected for the current question
              const isChecked = selectedAnswers[questionIndex] === optionIndex;
              const optionIsCorrect = isChecked && option.isCorrect;
              const radioColor = styles[optionIsCorrect ? "radio-correct" : "radio-incorrect"];
              return (
                <label key={optionIndex} className={styles["align-radio"]}>
                  <input
                    type="radio"
                    checked={isChecked}
                    onClick={() => handleSelectAnswer(questionIndex, optionIndex)}
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
