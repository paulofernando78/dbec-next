import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

export default function Coding() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Coding" />
      <div className="line-break">
          <p className="bold">General Vocabulary</p>
        <div className="flex-col">
          <DictionaryCard
            audioSrc="/f/folder.mp3"
            word="folder"
            phonetics="/ˈfoʊl.dɚ/"
          />
          <DictionaryCard
            audioSrc="/c/cache.mp3"
            word="cache"
            phonetics="/kæʃ/"
          />
        </div>
          <p className="bold">Front-End</p>
        <div className="flex-col">
          <DictionaryCard
            audioSrc="/w/width.mp3"
            word="width"
            phonetics="/wɪdθ/"
          />
          <DictionaryCard
            audioSrc="/h/height.mp3"
            word="height"
            phonetics="/haɪt/"
          />
        </div>
        <div>
            <p className="bold">Back-End</p>
        </div>
      </div>
    </>
  );
}
