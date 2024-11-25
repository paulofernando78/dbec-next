import { UnderConstruction } from "@/components/Molecules/UnderConstruction";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

export default function Unit50() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 50 • The future of tourism"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
