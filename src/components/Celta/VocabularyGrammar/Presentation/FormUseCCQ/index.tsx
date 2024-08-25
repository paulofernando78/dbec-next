import styles from "../../../../Cards/Card/styles.module.css";

export interface FormUseCCQData {
  text: string
}

interface FormUseCCQProps {
formUseCCQS: FormUseCCQData[]
}

export const FormUseCCQ = ({ formUseCCQS }: FormUseCCQProps) => {
  return (
    <div className={styles["card"]} style={{ backgroundColor: "#FFFACD" }}>
      <p className="bold">Checking</p>
      <div className={styles["children"]}>
        {formUseCCQS.map((formUseCCQ, formUseCCQIndex) => (
          <p key={formUseCCQIndex}>{formUseCCQ.text}</p>
        ))}
      </div>
    </div>
  );
};
