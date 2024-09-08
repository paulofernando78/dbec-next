import { VocabularyProps } from "@/types/Vocabulary";
import { getAlphabet } from "@/utils/getAlphabet";

export const Vocabulary = ({ vocabularies }: VocabularyProps) => {
  return (
    <>
      <div className="flex-8px-wrap">
        {vocabularies?.map((vocabulary, indexVocabulary) => (
          <span key={indexVocabulary} className="p-font">
            {getAlphabet(indexVocabulary)}){" "}
            {vocabulary.component(vocabulary.componentProps)}
          </span>
        ))}
      </div>
    </>
  );
};
