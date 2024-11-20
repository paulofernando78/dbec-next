import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard";

export default function Unit9() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 9 • Around thw world"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
