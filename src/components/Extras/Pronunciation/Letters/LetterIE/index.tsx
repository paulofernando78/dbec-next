import { Card } from "@/components/Cards/Card";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

export const LetterIE = () => {
  return (
    <>
      <div className="line-break">
        <Card bgColor="lightgray" textColor="black">
          <p className="bold">Letter ie</p>
        </Card>
        <div className="flex-8px-center-wrap">
          <DictionaryCard
            audioSrc="/phonetics/i.mp3"
            label="<span class='display-none'>...</span>"
            phonetics="/i/"
          />
          <DictionaryCard
            audioSrc="/c/cookie.mp3"
            label="cook<span class='underline'>ie</span>"
            phonetics="/ˈkʊk.i/"
          />
          <DictionaryCard
            audioSrc="/m/movie.mp3"
            label="mov<span class='underline'>ie</span>"
            phonetics="/ˈmuː.vi/"
          />
          <DictionaryCard
            audioSrc="/s/series.mp3"
            label="ser<span class='underline'>ie</span>s"
            phonetics="/ˈsɪr.iːz/"
          />
        </div>
      </div>
    </>
  );
};
