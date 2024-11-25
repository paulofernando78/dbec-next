import { UnderConstruction } from "@/components/Molecules/UnderConstruction";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

export default function Unit3() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 3 • When in Rome"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
