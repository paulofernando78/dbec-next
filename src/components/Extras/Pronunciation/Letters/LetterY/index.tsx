import { Card } from "@/components/Card";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

export const LettersY = () => {
  return (
    <>
      <div className="line-break">
        <Card bgColor="lightgray" textColor="black">
          <p className="bold">Letter y</p>
        </Card>
        <div className="flex-8px-center-wrap">
          <DictionaryCard audioSrc="/c/city.mp3" label="cit<span class='underline'>y</span>" phonetics="/ˈsɪt̬.i/"/>
          <DictionaryCard audioSrc="/h/healthy.mp3" label="health<span class='underline'>y</span>" phonetics="/ˈhel.θi/" />
          <DictionaryCard audioSrc="/i/itchy.mp3" label="itch<span class='underline'>y</span>" phonetics="/ˈɪtʃ.i/" />
        </div>
      </div>
    </>
  );
};
