import styles from "../../../../Cards/BoardCard/styles.module.css";
import { FormUseCCQ, FormUseCCQData } from "../FormUseCCQ";

export interface FormUseData {
  text: string;
}

interface FormUseProps {
  formUses: FormUseData[];
  formUseCCQS: FormUseCCQData[];
}

export const FormUse = ({ formUses, formUseCCQS }: FormUseProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: "lightgray", color: "black" }}
      >
        <p>
          <span className="bold">Form/Use</span>
        </p>
      </div>
      <div className={`line-break ${styles["children"]}`}>
        {formUses.map((formUse, formUseIndex) => (
          <p key={formUseIndex}>{formUse.text}</p>
        ))}
        <FormUseCCQ formUseCCQS={formUseCCQS}/>
      </div>
    </div>
  );
};
