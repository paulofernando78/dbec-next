"use client";
import { Fragment, useState } from "react";
import { correctIcon, incorrectIcon } from "@/img/index";
import styles from "./styles.module.css";
import Image from "next/image";
import { Button } from "@/components/Button/Button";

// Define the types for your question options
interface Option {
  value: string;
  label: string;
  correctAnswer: boolean;
}

interface DropdownQuestion {
  title?: string;
  subTitle?: string;
  width?: string;
  beforeOptions?: string;
  options?: Option[];
  afterOptions?: string;
  lineBreak?: boolean;
}

// Define the props for the Dropdown component
interface DropdownProps {
  questions: DropdownQuestion[];
}

export const Dropdown: React.FC<DropdownProps> = ({ questions }) => {
  const initialSelectedOptions = questions.map(() => "null");
  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    initialSelectedOptions
  );
  const [isCorrects, setIsCorrects] = useState<(boolean | null)[]>(
    Array(questions.length).fill(null)
  );

  const handleOptionChange = (
    questionIndex: number,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = event.target.value;
    setSelectedOptions(newSelectedOptions);
  };

  const handleCheckAnswers = () => {
    const newIsCorrects = selectedOptions.map((option, index) => {
      const selectedOption = questions[index].options?.find(
        (opt) => opt.value === option
      );
      console.log(`Question ${index}: selectedOption =`, selectedOption);
      const isCorrect = selectedOption ? selectedOption.correctAnswer : false;
      console.log(`Question ${index}: isCorrect =`, isCorrect);
      return isCorrect;
    });

    console.log("newIsCorrects:", newIsCorrects);
    setIsCorrects(newIsCorrects);
  };

  const handleReset = () => {
    setSelectedOptions(initialSelectedOptions);
    setIsCorrects(Array(questions.length).fill(null));
  };

  return (
    <>
      <div>
        <div className="margin-bottom">
          {questions.map((question, index) => (
            <div key={index} className="display-inline">
              {/* title & subTitle */}
              {(question.title || question.subTitle) && (
                <div
                  className={`margin-bottom ${index > 0 ? "margin-top" : ""}`}
                >
                  {question.title && <p className="bold">{question.title}</p>}
                  {question.subTitle && <p>{question.subTitle}</p>}{" "}
                </div>
              )}
              {/* beforeQuestions */}
              <p
                className="display-inline"
                dangerouslySetInnerHTML={{
                  __html: question.beforeOptions || "",
                }}
              ></p>{" "}
              {/* options */}
              {question.options && (
                <select
                  value={selectedOptions[index]}
                  onChange={(event) => handleOptionChange(index, event)}
                  className={styles["select"]}
                  style={{ width: question.width }}
                >
                  <option>...</option>
                  {question.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}{" "}
              {/* correctAnswer */}
              {question.options && isCorrects[index] !== null && (
                <>
                  {isCorrects[index] ? (
                    <span>
                      <Image
                        src={correctIcon}
                        alt="Correct icon"
                        className={`icon-general ${styles["correct-icon"]}`}
                      />
                    </span>
                  ) : (
                    <span>
                      <Image
                        src={incorrectIcon}
                        alt="Incorrect icon"
                        className={`icon-general ${styles["incorrect-icon"]}`}
                      />
                    </span>
                  )}
                </>
              )}{" "}
              {/* afterOptions */}
              <p
                className="display-inline margin-right"
                dangerouslySetInnerHTML={{
                  __html: question.afterOptions || "",
                }}
              ></p>
              {/* lineBreak */}
              {question.lineBreak && <br />}
            </div>
          ))}
        </div>
        <div className="flex-8px">
          <div>
            <Button label="Check answers" onClick={handleCheckAnswers} />
          </div>
          <div>
            <Button label="Reset" onClick={handleReset} />
          </div>
        </div>
      </div>
    </>
  );
};
