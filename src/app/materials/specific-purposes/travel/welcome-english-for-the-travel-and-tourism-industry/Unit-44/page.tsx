import { UnderConstruction } from "@/components/Molecules/UnderConstruction";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

export default function Unit44() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 44 • Difficult customers?"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
