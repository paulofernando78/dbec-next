import { UnderConstruction } from "@/components/Molecules/UnderConstruction";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

export default function Unit37() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 37 • Offering and requesting"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
