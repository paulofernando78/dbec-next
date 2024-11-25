import { UnderConstruction } from "@/components/Molecules/UnderConstruction";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

export default function Unit27() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 27 • Facilities: Enjoy your stay!"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
