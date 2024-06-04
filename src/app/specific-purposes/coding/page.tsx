import { Card } from "@/components/Card";
import { DictionaryCard } from "@/components/DictionaryCard/DictionaryCard";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function Coding() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Coding" />
      <div className="line-break">
        <Card bgColor="black" textColor="white">
          <p className="bold">General Vocabulary</p>
        </Card>
        <div className="flex-col">
          <DictionaryCard
            audioSrc="/f/folder.mp3"
            label="folder"
            phonetics="/ˈfoʊl.dɚ/"
          />
          <DictionaryCard
            audioSrc="/c/cache.mp3"
            label="cache"
            phonetics="/kæʃ/"
          />
        </div>
        <Card bgColor="black" textColor="white">
          <p className="bold">Front-End</p>
        </Card>
        <div className="flex-col">
          <DictionaryCard
            audioSrc="/w/width.mp3"
            label="width"
            phonetics="/wɪdθ/"
          />
          <DictionaryCard
            audioSrc="/h/height.mp3"
            label="height"
            phonetics="/haɪt/"
          />
        </div>
        <div>
          <Card bgColor="black" textColor="white">
            <p className="bold">Back-End</p>
          </Card>
        </div>
      </div>
    </>
  );
}
