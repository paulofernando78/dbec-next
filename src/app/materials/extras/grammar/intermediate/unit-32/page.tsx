import { Whiteboard } from "@/components/Molecules/Whiteboard";
import { UnderConstruction } from "@/components/Molecules/UnderConstruction";

export default function GrammarInUseIntermediateUnit32() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Grammar"
        descriptions={["Intermediate", "Unit 32 • must, mustn't, needn't"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
