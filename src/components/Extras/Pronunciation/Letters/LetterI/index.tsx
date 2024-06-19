import { Card } from "@/components/Card";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

export const LetterI = () => {
  return (
    <>
      <div className="line-break">
        <Card bgColor="lightgray" textColor="black">
          <p className="bold">Letter i</p>
        </Card>
        <div className="flex-8px-center-wrap">
          <DictionaryCard
            audioSrc="/phonetics/i.mp3"
            label="<span class='display-none'>...</span>"
            phonetics="/i/"
          />
          <DictionaryCard
            audioSrc="/p/police.mp3"
            label="pol<span class='underline'>i</span>ce"
            phonetics="/pəˈliːs/"
          />
          <DictionaryCard
            audioSrc="/s/sushi.mp3"
            label="sush<span class='underline'>i</span>"
            phonetics="/ˈsuː.ʃi/"
          />
        </div>
        <hr />
        <p>The letter "i" will have this sound most of the time:</p>
        <div className="flex-8px-center-wrap">
          <DictionaryCard
            audioSrc="/phonetics/x.mp3"
            label="..."
            phonetics="/ɪ/"
          />
          <DictionaryCard
            audioSrc="/f/fix.mp3"
            label="f<span class='underline'>i</span>x"
            phonetics="/fɪks/"
          />
          <DictionaryCard
            audioSrc="/d/difficult.mp3"
            label="d<span class='underline'>i</span>ffi</span>cult"
            phonetics="/ˈdɪf.ə.kəlt/"
          />
          <DictionaryCard
            audioSrc="/i/it.mp3"
            label="<span class='underline'>i</span>t"
            phonetics="/ɪt/"
          />
          <DictionaryCard
            audioSrc="/l/live1.mp3"
            label="l<span class='underline'>i</span>ve"
            phonetics="/lɪv/"
          />
          <DictionaryCard
            audioSrc="/m/mint.mp3"
            label="m<span class='underline'>i</span>nt"
            phonetics="/mɪnt/"
          />
          <DictionaryCard
            audioSrc="/m/minute.mp3"
            label="m<span class='underline'>i</span>nute"
            phonetics="/ˈmɪn.ɪt/"
          />
          <DictionaryCard
            audioSrc="/s/sister.mp3"
            label="s<span class='underline'>i</span>ster"
            phonetics="/ˈsɪs.tɚ/"
          />
          <DictionaryCard
            audioSrc="/s/six.mp3"
            label="s<span class='underline'>i</span>x"
            phonetics="/sɪks/"
          />
          <DictionaryCard
            audioSrc="/t/thing.mp3"
            label="th<span class='underline'>i</span>ng"
            phonetics="/θɪŋ/"
          />
          <DictionaryCard
            audioSrc="/t/think.mp3"
            label="th<span class='underline'>i</span>nk"
            phonetics="/θɪk/"
          />
        </div>
        <hr />
        <div className="flex-8px-center-wrap">
          <DictionaryCard
            audioSrc="/phonetics/x.mp3"
            label="..."
            phonetics="/aɪ/"
          />
          <DictionaryCard
            audioSrc="/f/five.mp3"
            label="five"
            phonetics="/faɪv/"
          />
          <DictionaryCard
            audioSrc="/k/knight.mp3"
            label="knight"
            phonetics="/naɪt/"
          />
          <DictionaryCard
            audioSrc="/l/live2.mp3"
            label="live"
            phonetics="/laɪv/"
          />
          <DictionaryCard
            audioSrc="/m/mind.mp3"
            label="mind"
            phonetics="/maɪnd/"
          />
          <DictionaryCard
            audioSrc="/n/night.mp3"
            label="night"
            phonetics="/naɪt/"
          />
          <DictionaryCard
            audioSrc="/s/swipe.mp3"
            label="swipe"
            phonetics="/.../"
          />
          <DictionaryCard
            audioSrc="/t/time.mp3"
            label="time"
            phonetics="/taɪm/"
          />
          <DictionaryCard
            audioSrc="/w/wipe.mp3"
            label="wipe"
            phonetics="/.../"
          />
        </div>
      </div>
    </>
  );
};
