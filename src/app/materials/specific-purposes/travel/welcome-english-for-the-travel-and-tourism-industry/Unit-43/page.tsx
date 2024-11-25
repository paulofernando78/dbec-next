import { UnderConstruction } from "@/components/Molecules/UnderConstruction";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

export default function Unit43() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={["Unit 43 • Better safe than sorry"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
