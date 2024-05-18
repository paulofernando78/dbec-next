"use client";
import { useState } from "react";
import styles from "./Radio.module.css";
import { Button } from "@/components/Button/Button";

interface RadioOption {
  isCorrect: boolean;
  label: string;
}

interface RadioQuestion {
  title: string;
  question: string;
  options: RadioOption[];
}

interface RadioProps {
  questions: RadioQuestion[];
}

export const Radio = ({ questions }: RadioProps) => {
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));

  const handleAnswerChange = (questionIndex: number, optionIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const resetRadio = () => {
    setSelectedAnswers(Array(questions.length).fill(null));
  };

  return (
    <div>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <p className="margin-bottom bold">{question.title}</p>
          <p>{question.question}</p>
          <div>
            {question.options.map((option, optionIndex) => {
              const isChecked = selectedAnswers[questionIndex] === optionIndex;
              const optionIsCorrect = isChecked && option.isCorrect;
              const radioColor = styles[optionIsCorrect ? "radio-correct" : "radio-incorrect"];
              return (
                <label key={optionIndex} className={styles["align-radio"]}>
                  <input
                    type="radio"
                    checked={isChecked}
                    onChange={() => handleAnswerChange(questionIndex, optionIndex)}
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
