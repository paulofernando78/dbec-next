import { Whiteboard } from "@/components/Whiteboard";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function GrammarInUseIntermediateUnit80() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subTitle="Grammar"
        descriptions={[
          "Intermediate",
          "Unit 80 • Noun + noun (a bus driver / a headache",
        ]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
