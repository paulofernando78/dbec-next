"use client";
import { useState } from "react";
import styles from "./Radio.module.css";
import { Button } from "@/components/Button/Button";

interface RadioProps {
  questions: Array<{
    title: string;
    question: string;
    options: Array<{ isCorrect: boolean, label: string }>;
    correctOptionId: number;
  }>;
}

export const Radio = ({ questions }: RadioProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const resetRadio = () => {
    setSelectedAnswer(null);
  };

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index}>
          <p className="margin-bottom bold">{question.title}</p>
          <p> {question.question}</p>
          <div>
            {question.options.map((option, indexQuestion) => {
              const isChecked = selectedAnswer === indexQuestion
              const optionIsCorrect = isChecked && option.isCorrect
              const radioColor = styles[optionIsCorrect ? "radio-correct" : "radio-incorrect"]
              return (
                  <label key={indexQuestion} className={styles["align-radio"]}>
                    <input
                        type="radio"
                        checked={isChecked}
                        onClick={() => setSelectedAnswer(indexQuestion)}
                        className={`${radioColor} ${styles["input-size"]}`}
                    />
                    <p>{option.label}</p>
                  </label>
              )  
            })}
          </div>
        </div>
      ))}
      <div className="margin-top">
        <Button label="Reset" onClick={resetRadio}>
          Reset
        </Button>
      </div>
    </div>
  );
};
