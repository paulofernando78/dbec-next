"use client";

// Imports
import Image from 'next/image';
import { Fragment, useState } from 'react';
import { Button } from '@/components/Button/Button';

// Images
import correctIcon from "@/img/icon/correct.png";
import incorrectIcon from "@/img/icon/incorrect.png";

// CCS
import styles from "./styles.module.css"

interface FillInTheBlanksProps {
  questions: Question[];
  display: string;
}

interface Question {
  title?: string;
  subtitle?: string;
  beforeBlank: string;
  afterBlank: string;
  lineBreakBefore?: boolean;
  lineBreakAfter?: boolean;
  options: string[];
  correctAnswer: string[];
  width?: string;
  placeholder?: string;
}

export const FillInTheBlanks = ({ questions, display }: FillInTheBlanksProps) => {
  const initialSelectedOptions = questions.map(() => ['']);
  const [selectedOptions, setSelectedOptions] = useState(initialSelectedOptions);
  const [isCorrects, setIsCorrects] = useState(Array(questions.length).fill(null));
  const [showAnswers, setShowAnswers] = useState(false);

  const handleOptionChange = (questionIndex: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = [event.target.value];
    setSelectedOptions(newSelectedOptions);
  };

  const handleCheckAnswers = () => {
    const newIsCorrects = selectedOptions.map((options, index) => {
      if (options.length === 0) return false;
      return options.every(option => questions[index].correctAnswer.includes(option.trim()));
    });
    setIsCorrects(newIsCorrects);
  };

  const handleShowAnswers = () => setShowAnswers(!showAnswers);

  const handleReset = () => {
    setSelectedOptions(initialSelectedOptions);
    setIsCorrects(Array(questions.length).fill(null));
  };

  const renderAnswers = (answers: string | string[]) => {
    if (typeof answers === "string") return answers;
    return answers.join(" / ");
  };

  return (
    <>
      <div className='p-font'>
        {questions.map((question, index) => (
          <Fragment key={index}>
            {question.title && (
              <div className='margin-bottom'>
                <p className='bold'>{question.title}</p>
                <p dangerouslySetInnerHTML={{ __html: question.subtitle }} />
              </div>
            )}

            <span>
              <span dangerouslySetInnerHTML={{ __html: question.beforeBlank }} />{" "}
              {question.lineBreakBefore && <br />}
              <input
                type="text"
                value={selectedOptions[index][0] || ''}
                onChange={(event) => handleOptionChange(index, event)}
                style={{ width: question.width || 'auto', display }}
                placeholder={question.placeholder || ""}
              />{" "}
              {isCorrects[index] !== null && (
                <>
                  {isCorrects[index] ? (
                    <Image src={correctIcon} alt="Correct icon" className={`icon-general ${styles['correct-icon']}`} />
                  ) : (
                    <Image src={incorrectIcon} alt="Incorrect icon" className={`icon-general ${styles['incorrect-icon']}`} />
                  )}
                </>
              )}{" "}
              <span dangerouslySetInnerHTML={{ __html: question.afterBlank }} />{" "}
              {question.lineBreakAfter && <br />}
            </span>
          </Fragment>
        ))}
      </div>

      <div>
        <div className='flex-8px-center'>
          <Button label="Check answers" onClick={handleCheckAnswers} />
          <Button label={`${showAnswers ? "Hide" : "Show"} answers`} onClick={handleShowAnswers} />
          <Button label="Reset" onClick={handleReset} />
        </div>
        {showAnswers && (
          <div style={{ marginTop: "1.25rem" }}>
            {questions.map((question, index) => (
              <span key={index} className='show-answers'>
                {index + 1}. {renderAnswers(question.correctAnswer)}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
