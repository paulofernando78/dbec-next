import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function GrammarInUseIntermediateUnit42() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subTitle="Grammar"
        descriptions={[
          "Intermediate",
          "Unit 42 • Passive 1 (is done / was done)",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
