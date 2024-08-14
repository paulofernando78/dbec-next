import { RedRibbonA } from "@/components/Ribbons/RedRibbonA";
import { RedRibbonB } from "@/components/Ribbons/RedRibbonB";
import { RedRibbonC } from "@/components/Ribbons/RedRibbonC";
import { RedRibbonD } from "@/components/Ribbons/RedRibbonD";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function GrammarInUseElementaryUnit() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Grammar"
        descriptions={["Elementary", "Unit • ..."]}
      />
      <div className="line-break">
        <RedRibbonA />
        <p>...</p>
        <RedRibbonB />
        <p>...</p>
        <RedRibbonC />
        <p>...</p>
        <RedRibbonD />
        <p>...</p>
      </div>
    </>
  );
}
