import { Card } from "@/components/Cards/Card";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

export const LettersOW = () => {
  return (
    <>
      <div className="line-break">
        <Card bgColor="lightgray" textColor="black">
          <p className="bold">Letters ow</p>
        </Card>
        <div className="flex-8px-center-wrap">
          <DictionaryCard
            audioSrc="/c/cow.mp3"
            label="phonetics"
            phonetics="/aʊ/"
          />
          <DictionaryCard
            audioSrc="/c/cow.mp3"
            label="c<span class='underline'>ow</span>"
            phonetics="/kaʊ/"
          />
        </div>
      </div>
    </>
  );
};
