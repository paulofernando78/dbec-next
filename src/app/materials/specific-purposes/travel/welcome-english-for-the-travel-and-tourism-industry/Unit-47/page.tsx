import { UnderConstruction } from "@/components/Molecules/UnderConstruction";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

export default function Unit47() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 47 • Sun, sea and sand?"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
