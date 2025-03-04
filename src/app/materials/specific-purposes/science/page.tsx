import { DictionaryCard } from "@/components";
import { Whiteboard } from "@/components/Molecules/Whiteboard/Whiteboard";

export default function Science() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="Science" />
      <div className="line-break">
        <div className="line-break">
          <p className="font-bold">What's a supernova?</p>
          <div>
            <p>Chemical elements</p>
            <div>
              <p>FAZER TABELA PERIODICA</p>
              <DictionaryCard keyword="tin" word="tin" audioSrc="/t/tin.mp3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
