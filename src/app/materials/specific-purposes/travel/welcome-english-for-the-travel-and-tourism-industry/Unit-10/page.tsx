import { UnderConstruction } from "@/components/Molecules/UnderConstruction";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

export default function Unit10() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 10 • Organising a trip"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
