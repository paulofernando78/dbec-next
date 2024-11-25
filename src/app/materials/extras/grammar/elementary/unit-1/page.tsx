import { Whiteboard } from "@/components/Molecules/Whiteboard";
import { RedBoardCardA } from "@/components/Cards/BoardCard/RedBoardCardA";
import { RedBoardCardB } from "@/components/Cards/BoardCard/RedBoardCardB";
import { Negative } from "@/components/Molecules/Ribbons/Negative";
import { Affirmative } from "@/components/Molecules/Ribbons/Affirmative";
import { RedBoardCardC } from "@/components/Cards/BoardCard/RedBoardCardC";
import { RedBoardCardD } from "@/components/Cards/BoardCard/RedBoardCardD";
import { RedBoardCardE } from "@/components/Cards/BoardCard/RedBoardCardE";

// Imgs
import Image from "next/image";
import { lisa, manBedSick } from "@/img/index";

export default function GrammarInUseElementaryUnit() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Grammar"
        descriptions={["Elementary", "Unit 1 • am/is/are"]}
      />
      <div className="line-break">
        <RedBoardCardA>
          <div className="flex-col-125rem">
            <Image
              src={lisa}
              alt="Lisa"
              className="img-border"
              style={{ width: "70%" }}
            />
            <div>
              <p>
                I<span className="bold">'m</span> Lisa.
              </p>
              <p>
                I<span className="bold">'m</span> twenty-two (years old).
              </p>
              <p>
                I<span className="bold">'m</span> American. I
                <span className="bold">'m</span> from Chicago.
              </p>
              <p>
                I<span className="bold">'m</span> a student.
              </p>
              <p>
                My father<span className="bold">'s</span> a doctor, and my
                mother
                <span className="bold"> is</span> a journalist.
              </p>
              <p>
                My favorite color <span className="bold">is</span> blue.
              </p>
              <p>
                My favorite sports <span className="bold">are</span> tennis and
                swimming.
              </p>
              <p>
                I<span className="bold">'m</span> interested in art.
              </p>
              <p>
                I<span className="bold">'m</span> not interested in politics.
              </p>
            </div>
          </div>
        </RedBoardCardA>
        <RedBoardCardB>
          <div className="line-break">
            <div className="line-break">
              <Affirmative />
              <div>
                <p>subject + verb (contraction)</p>
                <p>
                  I <span className="bold">am</span> (I
                  <span className="bold">'m</span>)
                </p>
                <p>
                  you <span className="bold">are</span> (you
                  <span className="bold">'re</span>)
                </p>
                <p>
                  he <span className="bold">is</span> (he
                  <span className="bold">'s</span>)
                </p>
                <p>
                  she <span className="bold">is</span> (she
                  <span className="bold">'s</span>)
                </p>
                <p>
                  it <span className="bold">is</span> (it
                  <span className="bold">'s</span>)
                </p>
                <p>
                  we <span className="bold">are</span> (we
                  <span className="bold">'re</span>)
                </p>
                <p>
                  you <span className="bold">are</span> (you
                  <span className="bold">'re</span>)
                </p>
                <p>
                  we <span className="bold">are</span> (they
                  <span className="bold">'re</span>)
                </p>
              </div>
              <div>
                <p>
                  • I<span className="bold">'m</span> cold. Can you close the
                  window, please?
                </p>
                <p>
                  • I<span className="bold">'m</span> 32 (years old). My sister
                  is 29.
                </p>
                <p>
                  • It<span className="bold">'s</span> ten (o'clock). You
                  <span className="bold">'re</span> late again.
                </p>
                <p>
                  • Ann and I <span className="bold">are</span> good friends.
                </p>
                <p>
                  • Your keys <span className="bold">are</span> on the table.
                </p>
                <p>
                  • Steve <span className="bold">is</span> sick. He
                  <span className="bold">'s</span> in bed.
                </p>
                <p>
                  • Jane <span className="bold">is</span> scared of spiders.
                </p>
              </div>
            </div>
            <div>
              <div className="line-break">
                <Negative />
                <div>
                  <p>subject + verb + not (contraction)</p>
                  <p>
                    I <span className="bold">am not</span> (I
                    <span className="bold">'m not</span>)
                  </p>
                  <p>
                    you <span className="bold">are not</span> (you
                    <span className="bold">'re not</span> or you aren't)
                  </p>
                  <p>
                    he <span className="bold">is not</span> (he
                    <span className="bold">'s</span>)
                  </p>
                  <p>
                    she <span className="bold">is not</span> (she
                    <span className="bold">'s</span>)
                  </p>
                  <p>
                    it <span className="bold">is not</span> (it
                    <span className="bold">'s</span>)
                  </p>
                  <p>
                    we <span className="bold">are not</span> (we
                    <span className="bold">'re</span>)
                  </p>
                  <p>
                    you <span className="bold">are not</span> (you
                    <span className="bold">'re</span>)
                  </p>
                  <p>
                    we <span className="bold">are not</span> (they
                    <span className="bold">'re</span>)
                  </p>
                </div>
                <div>
                  <p>
                    • I<span className="bold">'m</span> not cold. You can open
                    the window.
                  </p>
                  <p>
                    • "I<span className="bold">'m</span> not 32 (years old).
                    Actually, I<span>'m</span> 31.
                  </p>
                  <p>
                    • Steve <span className="bold">isn'(t)</span> sick anymore.
                    He<span className="bold">'s</span> a(t) work now.
                  </p>
                  <p>
                    • My brother <span className="bold">isn't</span> scared of
                    dogs. He<span className="bold">'s</span> afraid of snakes.
                  </p>
                  <p>
                    • It's still ten (o'clock). You
                    <span className="bold">'re not</span> late.
                  </p>
                  <p>
                    • Ann and I <span className="bold">aren't</span> good
                    friends. She<span className="bold">'s</span> just an
                    acquaintance.
                  </p>
                  <p>
                    • Your keys <span className="bold">aren't</span> on the
                    table. They<span className="bold">'re </span> in your
                    pocket. Check that out!
                  </p>
                </div>
                <div>
                  <p className="bold">
                    We say it's hot / warm / cold / sunny / dark / etc.
                  </p>
                  <p>
                    It<span className="bold">'s</span> sunny today, but it{" "}
                    <span className="bold">isn't</span> warm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RedBoardCardB>
        <RedBoardCardC>
          <p>...</p>
        </RedBoardCardC>
      </div>
    </>
  );
}
