import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function GrammarInUseIntermediateUnit1() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Grammar"
        descriptions={["Intermediate", "Unit 1 • Present continuous (I am doing)"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
