import { RedRibbonA } from "@/components/Ribbons/RedRibbonA";
import { RedRibbonB } from "@/components/Ribbons/RedRibbonB";
import { RedRibbonC } from "@/components/Ribbons/RedRibbonC";
import { RedRibbonD } from "@/components/Ribbons/RedRibbonD";
import { UnderConstruction } from "@/components/UnderConstruction";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function GrammarInUseElementaryUnit2() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Grammar"
        descriptions={["Elementary", "Unit 8 • I am doing (present continouos) and I do (simple present)"]}
      />
      <div className="line-break">
        <UnderConstruction />
      </div>
    </>
  );
}
