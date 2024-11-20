import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard";

export default function Unit38() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 38 • Car rental"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
