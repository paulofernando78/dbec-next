import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard";

export default function Unit49() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 49 • A nice day out"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
