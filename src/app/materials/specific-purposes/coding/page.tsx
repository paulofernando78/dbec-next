import { Whiteboard, DictionaryCard } from "@/components/index";

export default function Coding() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Coding" />
      <div className="line-break">
        <p className="font-bold">General Vocabulary</p>
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
        <p className="font-bold">Front-End</p>
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
          <p className="font-bold">Back-End</p>
        </div>
      </div>
    </>
  );
}
