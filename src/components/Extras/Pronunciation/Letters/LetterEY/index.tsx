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
          <DictionaryCard audioSrc="/c/chimney.mp3" label="chimney" phonetics="/ˈtʃɪm.ni/"/>
          <DictionaryCard audioSrc="/d/donkey.mp3" label="donkey" phonetics="/ˈdɑːŋ.ki/"/>
          <DictionaryCard audioSrc="/k/key.mp3" label="key" phonetics="/kiː/"/>
          <DictionaryCard audioSrc="/m/money.mp3" label="money" phonetics="/ˈmʌn.i/"/>
          <DictionaryCard audioSrc="/m/monkey.mp3" label="monkey" phonetics="/ˈmʌŋ.ki/"/>
        </div>
      </div>
    </>
  );
};
