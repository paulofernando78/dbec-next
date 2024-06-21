import { Card } from "@/components/Cards/Card";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

export const LettersAU = () => {
  return (
    <>
      <div className="line-break">
        <Card bgColor="lightgray" textColor="black">
          <p className="bold">Letter "au"</p>
        </Card>
        <div className="flex-8px-center-wrap">
          <DictionaryCard
            audioSrc="/phonetics/x.mp3"
            label="Phonetics"
            phonetics="/ɑː/"
          />
          <DictionaryCard
            audioSrc="/m/maul.mp3"
            keyword="an"
            label="m<span class='underline'>au</span>l"
            phonetics="/mɑːl/"
          />
        </div>
      </div>
    </>
  );
};
