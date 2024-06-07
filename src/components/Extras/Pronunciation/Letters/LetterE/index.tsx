import { Card } from "@/components/Card";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

export const LetterE = () => {
  return (
    <>
      <div className="line-break">
        <Card bgColor="lightgray" textColor="black">
          <p className="bold">Letter e</p>
        </Card>
        <div className="flex-8px-center-wrap">
          <DictionaryCard
            audioSrc="/phonetics/e.mp3"
            label="Phonetics"
            phonetics="/e/"
          />
          <DictionaryCard
            audioSrc="/phonetics/e.mp3"
            label="<span class='underline'>e</span>nd"
            phonetics="/end/"
          />
          <DictionaryCard
            audioSrc="/m/men.mp3"
            label="m<span class='underline'>e</span>n"
            phonetics="/men/"
          />
        </div>
        <hr />
        <div className="flex-8px-center-wrap">
        <DictionaryCard
              audioSrc="/phonetics/e.mp3"
              label="Phonetics"
              phonetics="/i/"
            />
          <DictionaryCard
            audioSrc="/c/creative.mp3"
            label="cr<span class='underline'>e</span>ative"
            phonetics="/kriˈeɪ.t̬ɪv/"
          />
        </div>
      </div>
    </>
  );
};
