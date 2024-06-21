import { Card } from "@/components/Cards/Card";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

export const LetterAvsE = () => {
  return (
    <>
      <div className="line-break">
        <Card bgColor="lightgray" textColor="black">
          <p className="bold">Letter a vs. e</p>
        </Card>
        <div className="flex-8px-center-wrap">
          <DictionaryCard audioSrc="/m/man.mp3" label="man" phonetics="/mæn/" />
          <DictionaryCard audioSrc="/m/men.mp3" label="men" phonetics="/men/" />
        </div>
      </div>
    </>
  );
};
