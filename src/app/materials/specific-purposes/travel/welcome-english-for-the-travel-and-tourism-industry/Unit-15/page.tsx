import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard";

export default function Unit15() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["15 • Good morning!"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
