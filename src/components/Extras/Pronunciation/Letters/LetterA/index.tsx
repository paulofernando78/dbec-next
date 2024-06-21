import { Card } from "@/components/Cards/Card";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

export const LetterA = () => {
  return (
    <>
      <div className="line-break">
        <Card bgColor="lightgray" textColor="black">
          <p className="bold">Letter a</p>
        </Card>
        <div className="flex-8px-center-wrap">
          <DictionaryCard
            audioSrc="/phonetics/x.mp3"
            label="Phonetics"
            phonetics="/æ/"
          />
          <DictionaryCard
            audioSrc="/a/an.mp3"
            keyword="an"
            label="<span class='underline'>a</span>n"
            phonetics="/æn/"
          />
          <DictionaryCard
            audioSrc="/a/apple.mp3"
            label="<span class='underline'>a</span>pple"
            phonetics="/ˈæp.əl/"
          />
          <DictionaryCard
            audioSrc="/b/bad.mp3"
            label="b<span class='underline'>a</span>d"
            phonetics="/bæd/"
          />
          <DictionaryCard
            audioSrc="/b/bat.mp3"
            label="b<span class='underline'>a</span>t"
            phonetics="/bæt/"
          />
          <DictionaryCard
            audioSrc="/c/cap.mp3"
            label="c<span class='underline'>a</span>p"
            phonetics="/kæp/"
          />
          <DictionaryCard
            audioSrc="/f/fat.mp3"
            label="f<span class='underline'>a</span>t"
            phonetics="/fæt/"
          />
          <DictionaryCard
            audioSrc="/h/hat.mp3"
            label="h<span class='underline'>a</span>t"
            phonetics="/hæt/"
          />
          <DictionaryCard
            audioSrc="/m/man.mp3"
            label="m<span class='underline'>a</span>n"
            phonetics="/mæn/"
          />
        </div>
        <hr />
        <div className="flex-8px-center-wrap">
          <DictionaryCard
            audioSrc="/phonetics/x.mp3"
            label="Phonetics"
            phonetics="/ɑː/"
          />
          <DictionaryCard
            audioSrc="/b/call.mp3"
            label="b<span class='underline'>a</span>ll"
            phonetics="/bɑːl/"
          />
          <DictionaryCard
            audioSrc="/phonetics/c/call.mp3"
            label="c<span class='underline'>a</span>ll"
            phonetics="/kɑːl/"
          />
          <DictionaryCard
            audioSrc="/f/fall.mp3"
            label="f<span class='underline'>a</span>ll"
            phonetics="/fɑːl/"
          />
          <DictionaryCard
            audioSrc="/m/mall.mp3"
            label="m<span class='underline'>a</span>ll"
            phonetics="/mɑːl/"
          />
          <DictionaryCard
            audioSrc="/m/mall.mp3"
            label="sm<span class='underline'>a</span>ll"
            phonetics="/smɑːl/"
          />
          <DictionaryCard
            audioSrc="/s/spa.mp3"
            label="sp<span class='underline'>a</span>"
            phonetics="/spɑː/"
          />
        </div>
        <hr />
        <div className="border-red-dashed line-break">
          <div className="flex-8px-center-wrap">
            <DictionaryCard
              audioSrc="/c/call.mp3"
              label="c<span class='underline'>a</span>ll"
              phonetics="/kɑːl/"
            />
            <DictionaryCard
              audioSrc="/c/cow.mp3"
              label="c<span class='underline'>ow</span>"
              phonetics="/kaʊ/"
            />
          </div>
          <p className="bold">Listen to the differences. </p>
          <div>
            <p>Call me later.</p>
            <p>Look! There's a cow.</p>
          </div>
        </div>
      </div>
    </>
  );
};
