import { Card } from "@/components/Card";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

export const LetterEaEE = () => {
  return (
    <>
      <div className="line-break">
        <Card bgColor="lightgray" textColor="black">
          <p className="bold">Letter ea • ee</p>
        </Card>
        <div className="flex-8px-center-wrap">
          <DictionaryCard
            audioSrc="/.../....mp3"
            label="..."
            phonetics="/i/"
          />
          <DictionaryCard
            audioSrc="/.../....mp3"
            label="th<span class='underline'>ea</span>ter"
            phonetics="/ˈθiː.ə.t̬ɚ/"
          />
        </div>
      </div>
    </>
  );
};
