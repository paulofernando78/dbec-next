import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard";

export default function Unit16() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 16 • Explaing dishes"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
