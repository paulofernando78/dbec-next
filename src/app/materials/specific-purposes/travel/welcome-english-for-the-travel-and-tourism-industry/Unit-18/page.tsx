import { UnderConstruction } from "@/components/Molecules/UnderConstruction";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

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
