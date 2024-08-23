import { FlipCard, FlipCardData } from "@/components/Cards/Flip";
import {
  FillInTheBlanks,
  FillInTheBlanksData,
} from "@/components/ExerciseTemplates/FillInTheBlank/FillInTheBlank";

import { getAlphabet } from "@/utils/getAlphabet";

import styles from "../../../Cards/BoardCard/styles.module.css";
import { DiscussionQuestionData } from "../../Introduction";

export interface PreVocabularyData {
  component: (props: { audioSrc: string; label: string }) => JSX.Element;
  componentProps: any;
}

interface PreVocabularyProps {
  flipCards: FlipCardData[];
  preVocabularies: PreVocabularyData[];
  fillInTheBlanks: FillInTheBlanksData[];
}

export const PreVocabulary = ({
  flipCards,
  preVocabularies,
  fillInTheBlanks = [],
}: PreVocabularyProps) => {
  return (
    <div className={styles["main-card"]}>
      <div
        className={styles["card"]}
        style={{ backgroundColor: "black", color: "white" }}
      >
        <div className="flex-8px-start-space-between">
          <p>
            <span className="bold">Pre-vocabulary</span>
          </p>
          <p className="p-size-smaller">10'</p>
        </div>
      </div>
      <div className={`line-break ${styles["children"]}`}>
        <p className="bold">
          Let's flip the cards and match the pictures (numbers) with the
          vocabulary (letters) below.
        </p>
        <FlipCard flipCards={flipCards} />
        {/* Words */}
        <div className="flex-8px-wrap">
          {preVocabularies?.map((preVocabulary, indexPreVocabulary) => (
            <span key={indexPreVocabulary} className="p-font">
              {getAlphabet(indexPreVocabulary)}){" "}{preVocabulary.component(preVocabulary.componentProps)}
            </span>
          ))}
        </div>
        <FillInTheBlanks questions={fillInTheBlanks} />
      </div>
    </div>
  );
};
