import { Card } from "@/components/Cards/Card";
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
              phonetics="/biːd/"
            />
            <DictionaryCard
              audioSrc="/b/bid.mp3"
              label="b<span class='underline'>i</span>d"
              phonetics="/bɪd/"
            />
          </div>
          <div className="flex-8px-center-wrap">
            <DictionaryCard
              audioSrc="/e/eat.mp3"
              label="<span class='underline'>ea</span>t"
              phonetics="/iːt/"
            />
            <DictionaryCard
              audioSrc="/i/it.mp3"
              label="i<span class='underline'>t</span>"
              phonetics="/ɪt/"
            />
          </div>
          <div className="flex-8px-center-wrap">
            <DictionaryCard
              audioSrc="/d/deed.mp3"
              label="d<span class='underline'>ee</span>d"
              phonetics="/diːd/"
            />
            <DictionaryCard
              audioSrc="/d/did.mp3"
              label="d<span class='underline'>i</spand>d"
              phonetics="/dɪd/"
            />
          </div>
          <div className="flex-8px-center-wrap">
            <DictionaryCard
              audioSrc="/l/leave.mp3"
              label="l<span class='underline'>ea</span>ve"
              phonetics="/liːv/"
            />
            <DictionaryCard
              audioSrc="/l/live1.mp3"
              label="l<span class='underline'>i</spand>ve"
              phonetics="/lɪv/"
            />
          </div>
          <div className="flex-8px-center-wrap">
            <DictionaryCard
              audioSrc="/r/read.mp3"
              label="r<span class='underline'>ea</span>d"
              phonetics="/riːd/"
            />
            <DictionaryCard
              audioSrc="/r/rid.mp3"
              label="r<span class='underline'>i</spand>d"
              phonetics="/rɪd/"
            />
          </div>
          <div className="flex-8px-center-wrap">
            <DictionaryCard
              audioSrc="/s/seat.mp3"
              label="s<span class='underline'>ea</span>t"
              phonetics="/siːt/"
            />
            <DictionaryCard
              audioSrc="/s/sit.mp3"
              label="s<span class='underline'>i</spand>t"
              phonetics="/sɪt/"
            />
          </div>
          <div className="flex-8px-center-wrap">
            <DictionaryCard
              audioSrc="/s/steal.mp3"
              label="st<span class='underline'>ea</span>l / st<span class='underline'>ee</span>l"
              phonetics="/stiːl/"
            />
            <DictionaryCard
              audioSrc="/d/did.mp3"
              label="st<span class='underline'>i</spand>ll"
              phonetics="/stɪl/"
            />
          </div>
        </div>
        <p className="bold">Listen and repeat.</p>
        <div>
          <p>
            <span className="bold">A:</span> Please, have a seat.
          </p>
          <p>
            <span className="bold">B:</span> Oh, I can't sit here.
          </p>
          <p>
            <span className="bold">A:</span> This seat is broken.
          </p>
        </div>
      </div>
    </>
  );
};
