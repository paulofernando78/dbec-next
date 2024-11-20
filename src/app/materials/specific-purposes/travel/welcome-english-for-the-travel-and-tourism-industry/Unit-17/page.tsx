import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard";

export default function Unit17() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 17 • May I take your order?"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
