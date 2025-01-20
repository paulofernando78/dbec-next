import Image from "next/image";
import { correctIcon, incorrectIcon } from "@/img/index";
import styles from "./styles.module.css"
import { RadioProps } from "./type";

export const Radio = ({
  radio,
  exerciseId,
  showFeedback,
  selectedOption,
  setSelectedOption,
}: RadioProps) => {
  const handleSelectedOption = (id: string, answer: string) => {
    setSelectedOption((prev) => ({
      ...prev, // Preserve previous selections
      [id]: answer, // Update the selection for the current question
    }));
  };

  return (
    <>
      {radio?.map((radioItem, radioIndex) => {
        const idRadio = `${exerciseId}-${radioItem.id}`;
        const selectedAnswer = selectedOption[idRadio]; // Get the selected answer for the current question
        const isUnanswered = showFeedback && !selectedAnswer; // Determine if the question is unanswered

        return (
          <div key={radioIndex} className="line-break">
            {radioItem.title && (
              <div>
                <p className="bold">{radioItem.title}</p>
                <p>{radioItem.subtitle}</p>
              </div>
            )}

            {/* Conditionally render the question and options */}
            {radioItem.question && radioItem.options && radioItem.options.length > 0 && (
              <div className={styles["question-margin"]}>
                <div>
                  <p
                    dangerouslySetInnerHTML={{ __html: radioItem.question }}
                    className={`${styles["question-margin"]} ${isUnanswered ? styles["disabled-text"] : ""}`}
                  ></p>
                </div>
                {radioItem.options.map((option, optionIndex) => {
                  const isChecked = selectedAnswer === option.label;

                  return (
                    <label
                      key={optionIndex}
                      className={`radio-checkbox-flex ${isUnanswered ? "disabled" : ""
}`}
                    >
                      <div className="radio-checkbox-container">
                        <input
                          type="radio"
                          name={`radio-${idRadio}`} // Grouping inputs for the same question
                          id={`radio-${exerciseId}-${radioItem.id}-${option.id}`}
                          className="radio-size"
                          onChange={() =>
                            !showFeedback && handleSelectedOption(idRadio, option.label)
                          }
                          checked={isChecked}
                          disabled={showFeedback} // Disable interaction during feedback mode
                        />
                      </div>
                      <p className={`cursor-pointer ${styles["option-margin"]} ${isUnanswered ? styles["disabled-text"] : ""}`}>
                        {String.fromCharCode(97 + optionIndex)}) {option.label}{" "}
                        {showFeedback && isChecked && (
                          <Image
                            src={
                              option.isCorrect ? correctIcon : incorrectIcon
                            }
                            alt={
                              option.isCorrect ? "Correct icon" : "Incorrect icon"
                            }
                            width={19.2}
                            height={19.2}
                            className="exercises-icon-position"
                          />
                        )}
                      </p>
                    </label>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};