import { Whiteboard } from "@/components/Molecules/Whiteboard";
import { UnderConstruction } from "@/components/Molecules/UnderConstruction";

export default function GrammarInUseIntermediateUnit5() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Grammar"
        descriptions={["Intermediate", "Unit 5 • Simple past (I did)"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
