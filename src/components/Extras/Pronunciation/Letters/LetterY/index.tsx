import { Card } from "@/components/Card";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

export const LetterY = () => {
  return (
    <>
      <div className="line-break">
        <Card bgColor="lightgray" textColor="black">
          <p className="bold">Letter y</p>
        </Card>
        <div className="flex-8px-center-wrap">
        <DictionaryCard
            audioSrc="/.../.mp3"
            label="phonetics"
            phonetics="/i/"
          />
          <DictionaryCard
            audioSrc="/c/city.mp3"
            label="cit<span class='underline'>y</span>"
            phonetics="/ˈsɪt̬.i/"
          />
          <DictionaryCard
            audioSrc="/c/country.mp3"
            label="countr<span class='underline'>y</span>"
            phonetics="/ˈkʌn.tri/"
          />
          <DictionaryCard
            audioSrc="/h/healthy.mp3"
            label="health<span class='underline'>y</span>"
            phonetics="/ˈhel.θi/"
          />
          <DictionaryCard
            audioSrc="/i/itchy.mp3"
            label="itch<span class='underline'>y</span>"
            phonetics="/ˈɪtʃ.i/"
          />
        </div>
        <hr />
        <div className="flex-8px-center-wrap">
        <DictionaryCard
            audioSrc="/.../.mp3"
            label="phonetics"
            phonetics="/ɪ/"
          />
        <DictionaryCard
            audioSrc="/p/physics.mp3"
            label="ph<span class='underline'>y</span>sics"
            phonetics="/ˈfɪz.ɪks/"
          />
        <DictionaryCard
            audioSrc="/s/sphynx.mp3"
            label="sph<span class='underline'>y</span>nx"
            phonetics="/sfɪŋks/"
          />
        </div>
      </div>
    </>
  );
};
