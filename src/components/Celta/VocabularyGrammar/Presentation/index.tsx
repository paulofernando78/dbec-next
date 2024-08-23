import styles from "../../../Cards/BoardCard/styles.module.css";
import { Meaning, MeaningData } from "./Meaning";
import { Pronunciation, PronunciationData } from "./Pronunciation";
import { FormUse, FormUseData } from "./FormUse";

export interface PresentationData {
  text: string;
}

interface PresentationProps {
  presentations: PresentationData[];
  meanings: MeaningData[];
  pronunciations: PronunciationData[];
  formUses: FormUseData[];
}

export const Presentation = ({
  presentations,
  meanings,
  pronunciations,
  formUses,
}: PresentationProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: "black", color: "white" }}
      >
        <div className="flex-8px-start-space-between">
          <p>
            <span className="bold">Presentation</span>
          </p>
          <p className="p-size-smaller">20'</p>
        </div>
      </div>

      {/* text */}
      <div className={`line-break ${styles["children"]}`}>
        {presentations.map((presentation, presentationIndex) => (
          <p key={presentationIndex}>{presentation.text}</p>
        ))}

        <div className="line-break">
          <Meaning meanings={meanings} />
          <Pronunciation pronunciations={pronunciations} />
          <FormUse formUses={formUses} />
        </div>
      </div>
    </div>
  );
};
