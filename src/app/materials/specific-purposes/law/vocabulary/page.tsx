import { Whiteboard, DictionaryCard } from "@/components/index";

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
          word="agribusiness"
          phonetics="/ˈæɡ.rəˌbɪz.nɪs/"
        />
        <DictionaryCard
          audioSrc="/c/court.mp3"
          keyword="court"
          word="court"
          phonetics="/kɔːrt/"
        />
        <DictionaryCard
          audioSrc="/e/enact.mp3"
          keyword="enact"
          word="enact"
          phonetics="/ɪˈnækt/"
        />
        <DictionaryCard
          audioSrc="/d/defendant.mp3"
          keyword="enact"
          word="defendant"
          phonetics="/dɪˈfen.dənt/"
        />
        <DictionaryCard
          audioSrc="/h/heinous.mp3"
          keyword="heinous"
          word="heinous"
          phonetics="/ˈheɪ.nəs/"
        />
      </div>
    </>
  );
}
