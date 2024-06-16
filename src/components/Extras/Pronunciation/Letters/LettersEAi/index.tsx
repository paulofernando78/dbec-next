import { Card } from "@/components/Card";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

export const LettersEAi = () => {
  return (
    <>
      <div className="line-break">
        <Card bgColor="lightgray" textColor="black">
          <p className="bold">Letters ea • ee (long) vs. i (short)</p>
        </Card>
       <div>
            <div className="flex-8px-center-wrap">
              <DictionaryCard
                audioSrc="/b/bead.mp3"
                label="b<span class='underline'>ea</span>d"
                phonetics="..."
              />
              <DictionaryCard
                audioSrc="/b/bid.mp3"
                label="b<span class='underline'>i</span>d"
                phonetics="..."
              />
            </div>
            <div className="flex-8px-center-wrap">
              <DictionaryCard
                audioSrc="/eat/eat.mp3"
                label="<span class='underline'>ea</span>t"
                phonetics="..."
              />
              <DictionaryCard
                audioSrc="/i/it.mp3"
                label="i<span class='underline'>t</span>"
                phonetics="..."
              />
            </div>
            <div className="flex-8px-center-wrap">
              <DictionaryCard
                audioSrc="/eat/eat.mp3"
                label="d<span class='underline'>ee</span>d"
                phonetics="..."
              />
              <DictionaryCard
                audioSrc="/d/did.mp3"
                label="d<span class='underline'>i</spand>d"
                phonetics="..."
              />
            </div>
       </div>
      </div>
    </>
  );
};
