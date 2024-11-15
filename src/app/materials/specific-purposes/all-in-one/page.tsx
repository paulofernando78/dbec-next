import { BoardCard, Card } from "@/components";
import { RegularVerbs } from "@/components/Lessons/RegularVerbs";
import { CardinalOrdinalNumbers } from "@/components/Lessons/Topics/CardinalOrdinalNumbers";
import { Pronouns } from "@/components/Lessons/Topics/Pronouns";
import { VerbBe } from "@/components/Lessons/Topics/VerbBe/VerbBe";
import { Whiteboard } from "@/components/Whiteboard";

export default function AllInOne() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subtitle="All-in-one Review" />
      <div className="line-break">
        {/* Jump to: */}
        <p className="bold">Jump to:</p>
        <div>
          <a href="#pronouns">
            <p>Pronouns</p>
          </a>
          <a href="#cardinal-ordinal-numbers">
            <p>Cardinal and Ordinal Numbers</p>
          </a>
          <a href="#verb-to-be">
            <p>Verb to be</p>
          </a>
          <a href="#present-continuous">
            <p>Present Continuous / Progressive</p>
          </a>
          <a href="#simple-present">
            <p>Simple Present</p>
          </a>
          <a href="#simple-present">
            <p>Phrasal verbs</p>
          </a>
          <a href="#regular-irregular-verbs">
            <p>Regular and Irregular verbs</p>
          </a>
          <a href="#simple-past">
            <p>Simple Past</p>
          </a>
          <a href="#present-perfect">
            <p>Present Perfect</p>
          </a>
          <a href="#simple-future">
            <p>Simple Future</p>
          </a>
          <a href="#modal-verbs">
            <p>Modal verbs</p>
          </a>
        </div>
        <hr />

        <div id="pronouns">
          <Pronouns />
        </div>
        <div id="cardinal-ordinal-numbers">
          <CardinalOrdinalNumbers />
        </div>
        <div id="verb-to-be">
          <VerbBe />
        </div>
        <div id="present-continuous">
          <BoardCard
            label="Present continuous"
            bgColor="black"
            textColor="white"
          >
            <p>...</p>
          </BoardCard>
        </div>
        <div id="regular-irregular-verbs">
          <BoardCard
            label="Regular and irregular verbs"
            bgColor="black"
            textColor="white"
          >
            <p>aaa</p>
          </BoardCard>
        </div>
        <div id="regular-irregular-verbs">{/* <RegularVerbs /> */}</div>
      </div>
    </>
  );
}
