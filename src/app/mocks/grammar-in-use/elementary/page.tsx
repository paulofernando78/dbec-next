import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { RedBoardCardA } from "@/components/Cards/BoardCard/RedBoardCardA";
import { RedBoardCardB } from "@/components/Cards/BoardCard/RedBoardCardB";
import { RedBoardCardC } from "@/components/Cards/BoardCard/RedBoardCardC";
import { RedBoardCardD } from "@/components/Cards/BoardCard/RedBoardCardD";
import { RedBoardCardE } from "@/components/Cards/BoardCard/RedBoardCardE";

export default function GrammarInUseElementaryUnit() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Grammar"
        descriptions={["Elementary", "Unit • ..."]}
      />
      <div className="line-break">
        <RedBoardCardA>
          <p>...</p>
        </RedBoardCardA>
        <RedBoardCardB>
          <p>...</p>
        </RedBoardCardB>
        <RedBoardCardC>
          <p>...</p>
        </RedBoardCardC>
        <RedBoardCardD>
          <p>...</p>
        </RedBoardCardD>
        <RedBoardCardE>
          <p>...</p>
        </RedBoardCardE>
      </div>
    </>
  );
}
