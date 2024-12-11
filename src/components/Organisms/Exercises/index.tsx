// CSS
import { Button } from "@/components/Atoms/Button";
import styles from "./styles.module.css";

// Images
import { radioIcon, correctIcon, incorrectIcon } from "@/img/index";

// Typescript
import "./type";
import Image from "next/image";

export const Exercises = ({ exercises = [] }: ExercisesProps) => {
  return (
    <>
      {exercises.map((exercise, exerciseIndex) => (
        <div key={exerciseIndex} className="line-break">
          <div>
            <p>
              <b>{exercise.title}</b>
            </p>
            <p>{exercise.subtitle}</p>
          </div>

          {/* Radio */}
          {exercise.radio?.map((radioItem, radioIndex) => (
            <div key={radioIndex}>
              <p>{radioItem.question}</p>
              {radioItem.options.map((option, optionIndex) => (
                <label key={optionIndex} className={styles["alignment"]}>
                  <div className={styles["radio-container"]}>
                    <input
                      type="radio"
                      name={`radio-${exerciseIndex}-${radioIndex}`} // Grouping inputs for the same question
                      className={styles["radio-size"]}
                    />
                    <Image
                      src={radioIcon}
                      alt="Radio Icon"
                      width={30}
                      height={30}
                      className={styles["radio-icon"]}
                    />
                  </div>
                  <p>{option.label}</p>
                </label>
              ))}
            </div>
          ))}

          {/* Checkbox */}
          {/* {exercise.checkbox?.map((checkItem, checkboxIndex) => (
            <div key={checkboxIndex}>
              <p>{checkItem.question}</p>
              <label className={styles["alignment"]}>
                <input type="checkbox" />
                <p>{checkItem.question}</p>
              </label>
            </div>
          ))} */}

          {/* Dropdown */}
          {/* {exercise.dropdown?.map((dropdownItem, dropdownIndex) => (
            <div key={dropdownIndex}>
              <div>
                <p>{dropdownItem.beforeOption}</p>
                <select>
                  <option value=""><p>{dropdownItem.option}</p></option>
                </select>
                <p>{dropdownItem.afterOption}</p>
              </div>
            </div>
          ))} */}

          {/* Fill in the blank */}
          {/* {exercise.fillInTheBlanks?.map((blankItem, blankIndex) => (
            <div key={blankIndex}>
              <div>
                <p>{blankItem.beforeBlank}</p>
                <input type="text" />
                <p>{blankItem.afterBlank}</p>
              </div>
            </div>
          ))} */}

          {/* <div className="flex-8px-center-wrap">
            <Button label="Check answers" onClick={handleCheckAnswers} />
            <Button
              label={`${showAnswers ? "Hide" : "Show"} answers`}
              onClick={handleShowAnswers}
            />
            <Button label="Reset" onClick={handleReset} />
          </div> */}
        </div>
      ))}
    </>
  );
};
