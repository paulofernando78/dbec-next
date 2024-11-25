import { UnderConstruction } from "@/components/Molecules/UnderConstruction";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

export default function Unit48() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 48 • History and folklore"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
