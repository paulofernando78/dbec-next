import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { BoardCard } from "@/components/Cards/BoardCard";
import { Ribbon } from "@/components/Ribbons/Ribbon";
import { SmallerRibbon } from "@/components/Ribbons/SmallerRibbon";
import { Card } from "@/components/Cards/Card";

export default function Listening() {
  return (
    <>
      <Whiteboard title="Listening" subtitle="..." descriptions={["..."]} />
      <div className="line-break">
        <BoardCard label="Warm-up" bgColor="black" textColor="white" time="5'">
          <p>...</p>
        </BoardCard>
        <BoardCard
          label="Introduction"
          smallerLabel="(Contextualization)"
          bgColor="black"
          textColor="white"
          time="5'"
        >
          <p>...</p>
        </BoardCard>
        <BoardCard
          label="Pre-Vocabulary"
          bgColor="black"
          textColor="white"
          time="10'"
        >
          <p>...</p>
        </BoardCard>
        <BoardCard
          label="Listening for gist"
          bgColor="black"
          textColor="white"
          time="10'"
        >
          <p>...</p>
        </BoardCard>
        <BoardCard
          label="Listening for scan"
          bgColor="black"
          textColor="white"
          time="10''"
        >
          <p>...</p>
        </BoardCard>
        <BoardCard
          label="Follow-up"
          bgColor="black"
          textColor="white"
          time="5'"
        >
          <p>...</p>
        </BoardCard>
        <BoardCard
          label="Wrap-up"
          bgColor="black"
          textColor="white"
          time="5'"
        >
          <p>...</p>
        </BoardCard>
      </div>
    </>
  );
}
