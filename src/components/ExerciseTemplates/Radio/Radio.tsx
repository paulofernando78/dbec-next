"use client"
import { Button } from "@/components/Button/Button";
import style from "./Radio.module.css";
import { IQuestion } from "@/types/question";


const getRadioClassName = (isCorrect: boolean) => {
  return isCorrect ? style["radio-correct"] : style["radio-incorrect"];
};

interface RadioOptionProps {
  name: string;
  id: string;
  label: string;
  isCorrect: boolean;
}

const RadioOption = ({ name, id, label, isCorrect }: RadioOptionProps) => {
  return (
    <div className={style["align-radio"]}>
      <input
        type="radio"
        name={name}
        id={id}
        className={`${getRadioClassName(isCorrect)} ${style["input-size"]}`}
      />
      <p>
        <label htmlFor={id} dangerouslySetInnerHTML={{ __html: label }} />
      </p>
    </div>
  );
};

interface RadioProps {
  questions: IQuestion[];
}

const Radio: React.FC<RadioProps> = ({ questions }) => {
  const resetRadio = () => {
    const radioInputs = document.querySelectorAll<HTMLInputElement>('input[type="radio"]');
    radioInputs.forEach((radio) => {
      radio.checked = false;
    });
  };

  return (
    <div>
      {questions.map((question, qIndex) => (
        <div key={qIndex} className="line-break">
          <div>
            <p dangerouslySetInnerHTML={{ __html: question.title }} />
          </div>
          <div>
            {question.subtitle && <p dangerouslySetInnerHTML={{ __html: question.subtitle }} />}
            <div>
              {question.options.map((option, oIndex) => (
                <RadioOption
                  name={`radio-${qIndex + 1}`}
                  id={`radio-${qIndex + 1}-${oIndex}`}
                  label={option.label}
                  isCorrect={option.isCorrect}
                  key={oIndex}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
      <div style={{ marginTop: "1.25rem" }}>
        <Button label="Reset" onClick={resetRadio} />
      </div>
    </div>
  );
};
