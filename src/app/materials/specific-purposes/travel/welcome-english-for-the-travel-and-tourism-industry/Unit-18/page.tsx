import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard";

export default function Unit18() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 18 • Drinks, snacks and desserts"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
