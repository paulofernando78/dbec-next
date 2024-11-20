import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard";

export default function Unit1() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 1 • Working in travel and tourism"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
