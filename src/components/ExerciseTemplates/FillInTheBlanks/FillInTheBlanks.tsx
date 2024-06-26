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
  lineBreakBefore?: boolean;
  placeholder?: string;
  correctAnswer: string[];
  width?: string;
  afterBlank: string;
  lineBreakAfter?: boolean;
}

export const FillInTheBlanks = ({ questions, display }: FillInTheBlanksProps) => {
  const [selectedOptions, setSelectedOptions] = useState(questions.map(() => ['']));
  const [isCorrects, setIsCorrects] = useState(Array(questions.length).fill(null));
  const [showAnswers, setShowAnswers] = useState(false);

  const handleOptionChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newOptions = [...selectedOptions];
    newOptions[index] = [event.target.value];
    setSelectedOptions(newOptions);
  };

  const handleCheckAnswers = () => {
    const newIsCorrects = selectedOptions.map((options, index) =>
      options.every(option => questions[index].correctAnswer.includes(option.trim()))
    );
    setIsCorrects(newIsCorrects);
  };

  const handleShowAnswers = () => setShowAnswers(!showAnswers);

  const handleReset = () => {
    setSelectedOptions(questions.map(() => ['']));
    setIsCorrects(Array(questions.length).fill(null));
  };

  const renderAnswers = (answers: string | string[]) => Array.isArray(answers) ? answers.join(" / ") : answers;

  return (
    <>
      <div className='p-font'>
        {questions.map((question, index) => (
          <Fragment key={index}>
            {question.title && (
              <div className='margin-bottom'>
                <p className='bold'>{question.title}</p>
                <p className='bold'>{question.subtitle}</p>
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
                <Image
                  src={isCorrects[index] ? correctIcon : incorrectIcon}
                  alt={isCorrects[index] ? "Correct icon" : "Incorrect icon"}
                  className={`icon-general ${styles[isCorrects[index] ? 'correct-icon' : 'incorrect-icon']}`}
                />
              )}{" "}
              <span dangerouslySetInnerHTML={{ __html: question.afterBlank }} />{" "}
              {question.lineBreakAfter && <br />}
            </span>
          </Fragment>
        ))}
      </div>

      <div>
        <div className='flex-8px-center-wrap'>
          <Button label="Check answers" onClick={handleCheckAnswers} />
          <Button label={`${showAnswers ? "Hide" : "Show"} answers`} onClick={handleShowAnswers} />
          <Button label="Reset" onClick={handleReset} />
        </div>
        {showAnswers && (
          <div style={{ marginTop: "1.25rem" }}>
            {questions.map((question, index) => (
              <span key={index} className={styles['show-answers']}>
                {index + 1}. {renderAnswers(question.correctAnswer)}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
