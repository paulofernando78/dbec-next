import { useState } from "react";
import Image from "next/image";
import { correctIcon, incorrectIcon } from "@/img/index";

import { RadioProps } from "./type";

export const Radio = ({ radio, exerciseId, showFeedback }:RadioProps) => {
  const [selectedOption, setSelectedOption] = useState<Record<string, string>>({});

  // Function to handle the selection of an option
  const handleSelectedOption = (id: string, answer: string) => {
    setSelectedOption((prev) => ({
      ...prev, // Preserve previous selections
      [id]: answer, // Update the selection for the current question
    }));
  };

  return (
    <>
      {radio?.map((radioItem, radioIndex) => (
        <div key={radioIndex}>
          <p
            dangerouslySetInnerHTML={{ __html: radioItem.question }}
            className="radio-question-margin-bottom"
          ></p>
          <p className="portuguese">{radioItem.questionPt}</p>
          {radioItem.options.map((option, optionIndex) => {
            const idRadio = `${exerciseId}-${radioItem.id}`;
            const isChecked = selectedOption[idRadio] === option.label;
            return (
              <label key={optionIndex} className="radio-checkbox-flex">
                <div className="radio-checkbox-container">
                  <input
                    type="radio"
                    name={`radio-${idRadio}`} // Grouping inputs for the same question
                    id={`radio-${exerciseId}-${radioItem.id}-${option.id}`}
                    className="radio-size"
                    onChange={() =>
                      !showFeedback &&
                      handleSelectedOption(idRadio, option.label)
                    }
                    checked={isChecked}
                    disabled={showFeedback} // Disable radio button once feedback is shown
                  />
                </div>
                <p className="cursor-pointer">
                  {String.fromCharCode(97 + optionIndex)}) {option.label}
                  {" "}
                  {showFeedback && isChecked && (
                    <Image
                      src={
                        option.isCorrect
                          ? correctIcon // Show correct icon if selected answer is correct
                          : incorrectIcon // Show incorrect icon if selected answer is incorrect
                      }
                      alt={
                        option.isCorrect
                          ? "Correct icon"
                          : "Incorrect icon"
                      }
                      width={22}
                      height={22}
                      className={`${
                        isChecked ? "" : "hidden" // Hide icons for unselected options
                      } icon-position`}
                    />
                  )}
                </p>
              </label>
            );
          })}
        </div>
      ))}
    </>
  );
};