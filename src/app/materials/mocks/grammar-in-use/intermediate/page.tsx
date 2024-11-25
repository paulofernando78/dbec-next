import { Whiteboard } from "@/components/Molecules/Whiteboard";
import { BlueBoardCardA } from "@/components/Cards/BoardCard/BlueBoardCardA";
import { BlueBoardCardB } from "@/components/Cards/BoardCard/BlueBoardCardB";
import { BlueBoardCardC } from "@/components/Cards/BoardCard/BlueBoardCardC";
import { BlueBoardCardD } from "@/components/Cards/BoardCard/BlueBoardCardD";
import { BlueBoardCardE } from "@/components/Cards/BoardCard/BlueBoardCardE";

export default function GrammarInUseIntermediate() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Grammar"
        descriptions={["Intermediate", "Unit • ..."]}
      />
      <div className="line-break">
        <BlueBoardCardA>
          <p>...</p>
        </BlueBoardCardA>
        <BlueBoardCardB>
          <p>...</p>
        </BlueBoardCardB>
        <BlueBoardCardC>
          <p>...</p>
        </BlueBoardCardC>
        <BlueBoardCardD>
          <p>...</p>
        </BlueBoardCardD>
        <BlueBoardCardE>
          <p>...</p>
        </BlueBoardCardE>
      </div>
    </>
  );
}
