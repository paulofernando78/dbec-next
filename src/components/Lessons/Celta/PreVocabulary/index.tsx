import styles from "../../../Cards/BoardCard/styles.module.css";
import { BoardCard } from "@/components/Cards/BoardCard";
import { FlipCard, FlipCardData } from "@/components/Cards/Flip";
import { Vocabulary } from "./Vocabulary";
import {
  FillInTheBlanks,
  FillInTheBlanksData,
} from "@/components/ExerciseTemplates/FillInTheBlank/FillInTheBlank";
import { VocabularyComponent, VocabularyProps } from "@/types/Vocabulary";

interface PreVocabularyProps {
  flipCards: FlipCardData[];
  vocabularies: VocabularyComponent[];
  fillInTheBlanks: FillInTheBlanksData[];
}

export const PreVocabulary = ({
  flipCards,
  vocabularies,
  fillInTheBlanks,
}: PreVocabularyProps) => {
  return (
    <>
      <BoardCard label="Pronunciation" bgColor="black" time="5'">
        <FlipCard flipCards={flipCards} />
        <Vocabulary vocabularies={vocabularies} />
        <FillInTheBlanks questions={fillInTheBlanks} />
      </BoardCard>
    </>
  );
};
