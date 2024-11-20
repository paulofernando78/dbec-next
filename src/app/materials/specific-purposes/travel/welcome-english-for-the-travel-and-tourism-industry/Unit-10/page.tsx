import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard";

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
