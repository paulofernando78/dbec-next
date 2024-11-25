import { UnderConstruction } from "@/components/Molecules/UnderConstruction";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

export default function Unit45() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 45 • Seeing the sights"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
