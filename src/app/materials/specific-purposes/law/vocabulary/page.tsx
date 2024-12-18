import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

export default function LawVocabulary() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Law"
        descriptions={["Vocabulary"]}
      />
      <div className="flex-col-4px">
        <DictionaryCard
          audioSrc="/a/agribusiness.mp3"
          keyword="agribusiness"
          label="agribusiness"
          phonetics="/ˈæɡ.rəˌbɪz.nɪs/"
        />
        <DictionaryCard
          audioSrc="/c/court.mp3"
          keyword="court"
          label="court"
          phonetics="/kɔːrt/"
        />
        <DictionaryCard
          audioSrc="/e/enact.mp3"
          keyword="enact"
          label="enact"
          phonetics="/ɪˈnækt/"
        />
        <DictionaryCard
          audioSrc="/d/defendant.mp3"
          keyword="enact"
          label="defendant"
          phonetics="/dɪˈfen.dənt/"
        />
        <DictionaryCard
          audioSrc="/h/heinous.mp3"
          keyword="heinous"
          label="heinous"
          phonetics="/ˈheɪ.nəs/"
        />
      </div>
    </>
  );
}
