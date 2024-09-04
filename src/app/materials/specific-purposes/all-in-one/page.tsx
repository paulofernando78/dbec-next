import { BoardCard, Card } from "@/components";
import { RegularVerbs } from "@/components/Lessons/RegularVerbs";
import { Whiteboard } from "@/components/Whiteboard";

export default function AllInOne() {
  return (
    <>
      <Whiteboard title="Specific Purposes" subTitle="All-in-one Review" />
      <div className="line-break">
        <p className="bold">Jump to:</p>
        <div>
          <a href="#pronouns">
            <p>Pronouns</p>
          </a>
          <a href="#numbers">
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
          <BoardCard label="Pronouns" bgColor="black" textColor="white">
            <div className="flex-8px-center-wrap">
              <BoardCard label="Subject" bgColor="lightgray">
                <div>
                  <p>I</p>
                  <p>you</p>
                  <p>he</p>
                  <p>she</p>
                  <p>it</p>
                  <p>we</p>
                  <p>you</p>
                  <p>they</p>
                </div>
              </BoardCard>
              <BoardCard label="Object" bgColor="lightgray">
                <div>
                  <p>me</p>
                  <p>you</p>
                  <p>him</p>
                  <p>her</p>
                  <p>it</p>
                  <p>us</p>
                  <p>you</p>
                  <p>them</p>
                </div>
              </BoardCard>
              <BoardCard label="Possessive Adjective" bgColor="lightgray">
                <div>
                  <p>my</p>
                  <p>your</p>
                  <p>his</p>
                  <p>her</p>
                  <p>its</p>
                  <p>our</p>
                  <p>your</p>
                  <p>their</p>
                </div>
              </BoardCard>
              <BoardCard label="Possessive Pronoun" bgColor="lightgray">
                <div>
                  <p>mine</p>
                  <p>
                    your<span className="red">s</span>
                  </p>
                  <p>
                    hi<span className="red">s</span>
                  </p>
                  <p>
                    her<span className="red">s</span>
                  </p>
                  <p>...</p>
                  <p>
                    our<span className="red">s</span>
                  </p>
                  <p>
                    your<span className="red">s</span>
                  </p>
                  <p>
                    their<span className="red">s</span>
                  </p>
                </div>
              </BoardCard>
            </div>
          </BoardCard>
        </div>
        <div id="cardinal-ordinal-numbers">
          <BoardCard
            label="Cardinal & Ordinal numbers"
            bgColor="black"
            textColor="white"
          >
            <p>...</p>
          </BoardCard>
        </div>
        <div id="verb-to-be">
          <BoardCard label="Verb to be" bgColor="black" textColor="white">
            <p>...</p>
          </BoardCard>
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
