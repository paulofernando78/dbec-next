import styles from "../../../Cards/BoardCard/styles.module.css";
import { Meaning, MeaningData } from "./Meaning";
import { Pronunciation, PronunciationData } from "./Pronunciation";
import { FormUse, FormUseData } from "./FormUse";
import { MeaningCCQData } from "./MeaningCCQ";
import { FormUseCCQData } from "./FormUseCCQ";

export interface PresentationData {
  text: string;
}

interface PresentationProps {
  presentations: PresentationData[];
  meanings: MeaningData[];
  meaningCCQS: MeaningCCQData[]
  pronunciations: PronunciationData[];
  formUses: FormUseData[];
  formUseCCQS: FormUseCCQData[]
}

export const Presentation = ({
  presentations,
  meanings,
  meaningCCQS,
  pronunciations,
  formUses,
  formUseCCQS
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
          <Meaning meanings={meanings} meaningCCQS={meaningCCQS} />
          <Pronunciation pronunciations={pronunciations} />
          <FormUse formUses={formUses} formUseCCQS={formUseCCQS}/>
        </div>
      </div>
    </div>
  );
};
