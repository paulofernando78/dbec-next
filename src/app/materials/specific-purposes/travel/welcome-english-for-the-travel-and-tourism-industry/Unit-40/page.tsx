import { UnderConstruction } from "@/components/Molecules/UnderConstruction";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

export default function Unit41() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 40 • The best way to get there"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
