import { Card } from "@/components/Cards/Card";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

export const LettersEY = () => {
  return (
    <>
      <div className="line-break">
        <Card bgColor="lightgray" textColor="black">
          <p className="bold">Letter ey</p>
        </Card>
        <div className="flex-8px-center-wrap">
          <DictionaryCard
            audioSrc="/.../.mp3"
            label="phonetics"
            phonetics="/i/"
          />
          <DictionaryCard
            audioSrc="/c/chimney.mp3"
            label="chimn<span class='underline'>ey</span>"
            phonetics="/ˈtʃɪm.ni/"
          />
          <DictionaryCard
            audioSrc="/d/donkey.mp3"
            label="donk<span class='underline'>ey</span>"
            phonetics="/ˈdɑːŋ.ki/"
          />
          <DictionaryCard
            audioSrc="/h/hershey.mp3"
            label="hersh<span class='underline'>ey</span>"
            phonetics="/ˈdɑːŋ.ki/"
          />
          <DictionaryCard
            audioSrc="/k/key.mp3"
            label="k<span class='underline'>ey</span>"
            phonetics="/kiː/"
          />
          <DictionaryCard
            audioSrc="/m/money.mp3"
            label="mon<span class='underline'>ey</span>"
            phonetics="/ˈmʌn.i/"
          />
          <DictionaryCard
            audioSrc="/m/monkey.mp3"
            label="monk<span class='underline'>ey</span>"
            phonetics="/ˈmʌŋ.ki/"
          />
        </div>
        <p className="bold">Listen and repeat.</p>
        <p>
          Let's go to Disn<span className="underline">ey</span> Land to see Mick
          <span className="underline">ey</span> Mouse.
        </p>
      </div>
    </>
  );
};
