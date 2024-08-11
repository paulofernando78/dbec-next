import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import { BoardCard } from "@/components/Cards/BoardCard";
import { Ribbon } from "@/components/Ribbons/Ribbon";
import { SmallerRibbon } from "@/components/Ribbons/SmallerRibbon";
import { Card } from "@/components/Cards/Card";

export default function VocabularyGrammar() {
  return (
    <>
      <Whiteboard
        title="Vocabulary / Grammar"
        subtitle="..."
        descriptions={["..."]}
      />
      <div className="line-break">
        <BoardCard label="Warm-up" bgColor="black" textColor="white" time="5'">
          <p>...</p>
        </BoardCard>
        <BoardCard
          label="Introduction"
          smallerLabel="(Contextualizion)"
          bgColor="black"
          textColor="white"
          time="10'"
        >
          <p>...</p>
        </BoardCard>
        <BoardCard
          label="Presentation"
          bgColor="black"
          textColor="white"
          time="10'"
        >
          <div className="line-break">
            <SmallerRibbon label="Meaning" bgColor="lightgray" />
            <p>...</p>
            <Card bgColor="#FFFACD">
              <p>...</p>
            </Card>
            <SmallerRibbon label="Pronunciation" bgColor="lightgray" />
            <p>...</p>
            <Card bgColor="#FFFACD">
              <p>...</p>
            </Card>
            <SmallerRibbon label="Form / Use" bgColor="lightgray" />
            <p>...</p>
            <Card bgColor="#FFFACD">
              <p>...</p>
            </Card>
          </div>
        </BoardCard>
        <BoardCard
          label="Practice"
          bgColor="black"
          textColor="white"
          time="20'"
        >
          <div className="line-break">
            <SmallerRibbon
              label="Highly Control Written Practice"
              bgColor="lightgray"
            />
            <Card bgColor="#FFFACD">
              <p>• Do it individually.</p>
              <p>• ...</p>
            </Card>
            <p>...</p>
            <SmallerRibbon
              label="Low Control Written Practice"
              bgColor="lightgray"
            />
            <Card bgColor="#FFFACD">
              <p>• Do it individually.</p>
              <p>• ...</p>
            </Card>
            <p>...</p>
            <SmallerRibbon
              label="Highly Control Oral Practice"
              bgColor="lightgray"
            />
            <Card bgColor="#FFFACD">
              <p>• Do it in pairs.</p>
              <p>• Listen to a dialogue.</p>
              <p>...</p>
            </Card>
            <p>...</p>
            <SmallerRibbon
              label="Low Control Oral Practice"
              bgColor="lightgray"
            />
            <Card bgColor="#FFFACD">
              <p>• Do it in pairs.</p>
              <p>• Listen to a dialogue.</p>
              <p>...</p>
            </Card>
          </div>
        </BoardCard>
        <BoardCard
          label="Production"
          bgColor="black"
          textColor="white"
          time="10'"
        >
          <Card bgColor="#FFFACD">
              <p>• Mingle (walk around and talk to one another).</p>
              <p>• Do it in groups of...</p>
              <p>• ...</p>
            </Card>
          <p>...</p>
        </BoardCard>
        <BoardCard label="Wrap-up" smallerLabel="(Cooling down)" bgColor="black" textColor="white" time="...">
          <p>...</p>
        </BoardCard>
      </div>
    </>
  );
}
