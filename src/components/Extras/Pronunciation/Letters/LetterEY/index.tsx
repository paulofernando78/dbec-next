import { Card } from "@/components/Card";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

export const LettersEY = () => {
  return (
    <>
      <div className="line-break">
        <Card bgColor="lightgray" textColor="black">
          <p className="bold">Letter ey</p>
        </Card>
        <div className="flex-8px-center-wrap">
          <DictionaryCard audioSrc="/c/chimney.mp3" label="chimn<span class='underline'>ey</span>" phonetics="/ˈtʃɪm.ni/"/>
          <DictionaryCard audioSrc="/d/donkey.mp3" label="donk<span class='underline'>ey</span>" phonetics="/ˈdɑːŋ.ki/"/>
          <DictionaryCard audioSrc="/k/key.mp3" label="k<span class='underline'>ey</span>" phonetics="/kiː/"/>
          <DictionaryCard audioSrc="/m/money.mp3" label="mon<span class='underline'>ey</span>" phonetics="/ˈmʌn.i/"/>
          <DictionaryCard audioSrc="/m/monkey.mp3" label="monk<span class='underline'>ey</span>" phonetics="/ˈmʌŋ.ki/"/>
        </div>
      </div>
    </>
  );
};
