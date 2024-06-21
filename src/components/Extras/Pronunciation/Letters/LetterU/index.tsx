import { Card } from "@/components/Cards/Card";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";

export const LetterU = () => {
  return (
    <>
      <div className="line-break">
        <Card bgColor="lightgray" textColor="black">
          <p className="bold">Letter u</p>
        </Card>
        <div className="flex-8px-center-wrap">
          <DictionaryCard
            audioSrc="/r/redundancy.mp3"
            keyword="redundancy"
            label="red<span class='underline'>u</span>ndancy"
            phonetics="/rɪˈdʌn.dən.si/"
          />
          <DictionaryCard
            audioSrc="/u/ultimate.mp3"
            keyword="ultimate"
            label="<span class='underline'>u</span>ltimate"
            phonetics="/ˈʌl.tə.mət/"
          />
          <DictionaryCard
            audioSrc="/u/ultimately.mp3"
            keyword="ultimately"
            label="<span class='underline'>u</span>ltimately"
            phonetics="/ˈʌl.tə.mət.li/"
          />
        </div>
      </div>
    </>
  );
};
