import { getAlphabet } from "@/utils/getAlphabet";
import { PreVocabularyProps } from "@/types/PreVocabulary"


export const PreVocabulary = ({ preVocabularies }: PreVocabularyProps) => {
  return (
    <>
      {/* Words */}
      <div className="flex-8px-wrap">
        {preVocabularies?.map((preVocabulary, indexPreVocabulary) => (
          <span key={indexPreVocabulary} className="p-font">
            {getAlphabet(indexPreVocabulary)}){" "}
            {preVocabulary.component(preVocabulary.componentProps)}
          </span>
        ))}
      </div>
    </>
  );
};
