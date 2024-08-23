import styles from "../../../../Cards/BoardCard/styles.module.css";

export interface FormUseData {
  text: string
}

interface FormUseProps {
formUses: FormUseData[]
}

export const FormUse = ({ formUses }: FormUseProps) => {
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
      <div className={styles["children"]}>
        {formUses.map((formUse, formUseIndex) => (
          <p key={formUseIndex}>{formUse.text}</p>
        ))}
      </div>
    </div>
  );
};
