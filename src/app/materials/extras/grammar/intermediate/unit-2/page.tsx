import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function GrammarInUseIntermediateUnit2() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subTitle="Grammar"
        descriptions={["Intermediate", "Unit 2 • Simple present (I do)"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
