import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard";

export default function Unit20() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 20 • Welcome to our restaurant"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
