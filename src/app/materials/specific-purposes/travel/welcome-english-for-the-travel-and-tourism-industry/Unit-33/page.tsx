import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard";

export default function Unit33() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 33 • Explaing the bill"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
