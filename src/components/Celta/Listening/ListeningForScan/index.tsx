import { Collapsible } from "@/components/Collapsibles/Collapsible/Collapsible";

import styles from "../../../Cards/BoardCard/styles.module.css";

export interface ScanQuestion {
  question: string;
  answer: string;
}

interface ListeningForScanProps {
  scanQuestions: ScanQuestion[];
}

export const ListeningForScan = ({ scanQuestions }: ListeningForScanProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: "black", color: "white" }}
      >
        <div className="flex-8px-start-space-between">
          <p>
            <span className="bold">Listening for scan</span>
          </p>
          <p className="p-size-smaller">10'</p>
        </div>
      </div>
      <div className={`line-break ${styles["children"]}`}>
        <p className={styles["label"]}>
          Check out the questons below. Listen again and take notes.
        </p>
        {/* scanQuestions */}
        {scanQuestions.map((scanQuestion, scanQuestionIndex) => (
          <div key={scanQuestionIndex}>
            <span className="p-font bold display-inline">
              {scanQuestionIndex + 1}
            </span>{" "}
            <span className="display-inline p-font">
              {scanQuestion.question}
            </span>
            <Collapsible labelBold="Answer">
              <p>{scanQuestion.answer}</p>
            </Collapsible>
          </div>
        ))}
      </div>
    </div>
  );
};
