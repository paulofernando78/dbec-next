import styles from "../../../Cards/BoardCard/styles.module.css";

import { CCQData } from "./CCQ";
import { Meaning, MeaningData } from "./Meaning";
import { Pronunciation, PronunciationData } from "./Pronunciation";
import { FormUse, FormUseData } from "./FormUse";
// import { FormUseCCQData } from "./FormUseCCQ";

export interface PresentationData {
  text: string;
}

interface PresentationProps {
  meanings: MeaningData[];
  audioSrc: string;
  meaningCCQS: CCQData[];
  pronunciations: PronunciationData[];
  formUses: FormUseData[];
  formUseCCQS: CCQData[];
}

export const Presentation = ({
  meanings,
  audioSrc,
  meaningCCQS,
  pronunciations,
  formUses,
  formUseCCQS,
}:
PresentationProps) => {
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
        <div className="line-break">
          <Meaning meanings={meanings} audioSrc={audioSrc} ccqs={meaningCCQS} />
          <Pronunciation pronunciations={pronunciations} />
          <FormUse formUses={formUses} ccqs={formUseCCQS} />
        </div>
      </div>
    </div>
  );
};
