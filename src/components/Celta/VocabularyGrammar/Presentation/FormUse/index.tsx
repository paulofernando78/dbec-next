import styles from "../../../../Cards/BoardCard/styles.module.css";
import { CCQ, CCQData } from "../CCQ";

export interface FormUseData {
  prompt: string;
}

interface FormUseProps {
  formUses: FormUseData[];
  ccqs: CCQData[];
}

export const FormUse = ({ formUses, ccqs }: FormUseProps) => {
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
          <p key={formUseIndex}>{formUse.prompt}</p>
        ))}
        <CCQ ccqs={ccqs} />
      </div>
    </div>
  );
};
