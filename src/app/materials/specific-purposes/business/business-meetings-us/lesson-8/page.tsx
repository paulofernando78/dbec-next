import { Whiteboard } from "@/components";
import { UnderConstruction } from "@/components/UnderConstruction";

export default function Lesson1() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subTitle="Business"
        descriptions={["Business MEetings (US)", "Lesson 8 • Taking Questions"]}
      />
      <div>
        <UnderConstruction />
      </div>
    </>
  );
}
