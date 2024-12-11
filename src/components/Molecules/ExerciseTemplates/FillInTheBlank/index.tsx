"use client";

// Hook
import { Fragment, useState } from "react";

// Component
import { Button } from "@/components/Atoms/Button";

// Images
import Image from "next/image";
import correctIcon from "@/img/icon/correct.png";
import incorrectIcon from "@/img/icon/incorrect.png";

// CCS
import styles from "./styles.module.css";

// Typescript
import { FillInTheBlankProps } from "./type";

export const FillInTheBlanks = ({
  questions,
  display,
}: FillInTheBlankProps) => {
  const [selectedOptions, setSelectedOptions] = useState(
    questions.map(() => [""])
  );
  const [isCorrects, setIsCorrects] = useState(
    Array(questions.length).fill(null)
  );
  const [showAnswers, setShowAnswers] = useState(false);

  const handleOptionChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newOptions = [...selectedOptions];
    newOptions[index] = [event.target.value];
    setSelectedOptions(newOptions);
  };

  const handleCheckAnswers = () => {
    const newIsCorrects = selectedOptions.map((options, index) => {
      const correctAnswers = Array.isArray(questions[index].correctAnswer)
        ? questions[index].correctAnswer
        : [questions[index].correctAnswer];
      const userAnswer = options[0].trim();
      return correctAnswers.some(
        (answer) => typeof answer === "string" && userAnswer === answer.trim()
      );
    });
    setIsCorrects(newIsCorrects);
  };

 const calculateWidth = (answer: string | string[]) => {
  const baseWidth = 20 // Base width in pixels for empty input
  const characterWidth = 8 // Approximate with per character in pixels
  const maxAnswerLength = Array.isArray(answer) ? Math.max(...answer.map((a) => a.length)) : answer.length

  return `${baseWidth + maxAnswerLength * characterWidth}px`
 }

  const handleShowAnswers = () => setShowAnswers(!showAnswers);
  const handleReset = () => {
    setSelectedOptions(questions.map(() => [""]));
    setIsCorrects(Array(questions.length).fill(null));
    setShowAnswers(false);
  };

  const renderAnswers = (answers: string | string[]) =>
    Array.isArray(answers) ? answers.join(" / ") : answers;

  return (
    <>
      <div className="p-font">
        {questions.map((question, index) => (
          <Fragment key={index}>
            {question.title && (
              <div className="margin-bottom">
                <p className="bold">{question.title}</p>
                <p>{question.subtitle}</p>
              </div>
            )}
            <span>
              {/* beforeQuestion */}
              {question.beforeBlank && (
                <span
                  dangerouslySetInnerHTML={{ __html: question.beforeBlank }}
                />
              )}{" "}
              {question.lineBreakBefore && <br />}
              <input
                type="text"
                value={selectedOptions[index][0] || ""}
                onChange={(event) => handleOptionChange(index, event)}
                style={{ width: calculateWidth(question.correctAnswer), display }}
                placeholder={question.placeholder || ""}
              />{" "}
              {isCorrects[index] !== null && (
                <Image
                  src={isCorrects[index] ? correctIcon : incorrectIcon}
                  alt={isCorrects[index] ? "Correct icon" : "Incorrect icon"}
                  className={`icon-general ${
                    styles[
                      isCorrects[index] ? "correct-icon" : "incorrect-icon"
                    ]
                  }`}
                />
              )}{" "}
              {/* afterBlank */}
              <span
                dangerouslySetInnerHTML={{ __html: question.afterBlank }}
              />{" "}
              {/* portguese */}
              <span className="portuguese">{question.portuguese}</span>
              {/* lineBreakAfter */}
              {question.lineBreakAfter && <br />}
            </span>
            {question.addHr && <hr className="customized-hr"/>}
          </Fragment>
        ))}
      </div>

      <div>
        <div className="flex-8px-center-wrap">
          <Button label="Check answers" onClick={handleCheckAnswers} />
          <Button
            label={`${showAnswers ? "Hide" : "Show"} answers`}
            onClick={handleShowAnswers}
          />
          <Button label="Reset" onClick={handleReset} />
        </div>
        {showAnswers && (
          <div style={{ marginTop: "1.25rem" }}>
            {questions.map((question, index) => (
              <span key={index} className={styles["show-answers"]}>
                {index + 1}. {renderAnswers(question.correctAnswer)}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
