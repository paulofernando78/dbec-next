import { UnderConstruction } from "@/components/Molecules/UnderConstruction";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

export default function Unit29() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 29 • The best hotel for you"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
