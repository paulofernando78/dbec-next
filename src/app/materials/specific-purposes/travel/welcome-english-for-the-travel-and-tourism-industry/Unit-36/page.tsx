import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard";

export default function Unit36() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 36 • Local knowledge"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
