import { Whiteboard } from "@/components/Whiteboard";
import { Card } from "@/components/Cards/Card";
import Image from "next/image";
import styles from "./styles.module.css";
import { BoardCard } from "@/components/Cards/BoardCard";

// Images
import {
  clockWakeUpHate,
  xmas1,
  smallSwimmingPool,
  inFiveMinutes,
} from "@/img/index";
import { ExclamationIcon } from "@/components/Icon/ExclamationIcon/Idex";
import { FillInTheBlanks } from "@/components/ExerciseTemplates/FillInTheBlank/FillInTheBlank";

const fillInTheBlanks = [
  {
    options: true,
    width: "50px",
    title: "103.1 Choose at / on /in.",
    subtitle: "Write in lower-case letters. Escreva em letras minúsculas.",
    beforeBlank: "1.",
    correctAnswer: ["on"],
    afterBlank: "June 6 (sixth)",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "50px",
    beforeBlank: "2.",
    correctAnswer: ["in"],
    afterBlank: "the evening",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "50px",
    beforeBlank: "3.",
    correctAnswer: ["at"],
    afterBlank: "2:30",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "50px",
    beforeBlank: "4.",
    correctAnswer: ["on"],
    afterBlank: "Wednesday",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "50px",
    beforeBlank: "5.",
    correctAnswer: ["in"],
    afterBlank: "2007",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "50px",
    beforeBlank: "6.",
    correctAnswer: ["in"],
    afterBlank: "September",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "50px",
    beforeBlank: "7.",
    correctAnswer: ["on"],
    afterBlank: "September 24 (twenty-fourth)",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "50px",
    beforeBlank: "8.",
    correctAnswer: ["on"],
    afterBlank: "Thursday",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "50px",
    beforeBlank: "9.",
    correctAnswer: ["at"],
    afterBlank: "11:45",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "50px",
    beforeBlank: "10.",
    correctAnswer: ["on"],
    afterBlank: "Christmas Day",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "50px",
    beforeBlank: "11.",
    correctAnswer: ["at"],
    afterBlank: "Christmas",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "50px",
    beforeBlank: "12.",
    correctAnswer: ["in"],
    afterBlank: "the morning",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "50px",
    beforeBlank: "13.",
    correctAnswer: ["on"],
    afterBlank: "Friday morning",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "50px",
    beforeBlank: "14.",
    correctAnswer: ["on"],
    afterBlank: "Saturday night",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "50px",
    beforeBlank: "15.",
    correctAnswer: ["at", "in"],
    afterBlank: "night",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "50px",
    beforeBlank: "16.",
    correctAnswer: ["at"],
    afterBlank: "the end of the day",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "50px",
    beforeBlank: "17.",
    correctAnswer: ["on"],
    afterBlank: "the weekend (USA)",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "50px",
    beforeBlank: "18.",
    correctAnswer: ["in"],
    afterBlank: "winter",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "50px",
    beforeBlank: "19.",
    correctAnswer: ["in"],
    afterBlank: "the end of the problem",
    lineBreakAfter: true,
  },
  {
    options: true,
    width: "50px",
    beforeBlank: "20.",
    correctAnswer: ["in"],
    afterBlank: "summer",
    lineBreakAfter: true,
  },
];

export default function Unit103() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Grammar"
        descriptions={[
          "Elementary",
          "Unit 103 • at 8 o'clock, on Monday, in April",
        ]}
      />
      <div className="line-break">
        {/* A */}
        <BoardCard label="A" bgColor="#EF4444" textColor="white">
          <div className="line-break">
            {/* at */}
            <Card bgColor="lightgray" textColor="black">
              <p className="bold">at</p>
            </Card>
            <div className={styles["grid-section-a"]}>
              <Image
                src={clockWakeUpHate}
                alt="..."
                className={`img-border ${styles["image"]}`}
              />
              <div>
                <p>
                  <span className="bold">at</span> 8 o'clock
                </p>
                <p>
                  <span className="bold">at</span> 10:30 (US)
                </p>
                <p>
                  <span className="bold">at</span> 10.30 (UK)
                </p>
                <p>
                  <span className="bold">at</span> midnight
                </p>
                <p>etc.</p>
              </div>
              <div>
                <p>
                  • I wake up <span className="bold">at</span> 5:30.
                </p>
                <p>
                  • I start work <span className="bold">at</span> 8:00.
                </p>
                <p>
                  • The banks open <span className="bold">at</span> 10:00.
                </p>
                <p>
                  • The museum closes <span className="bold">at</span> 5:30.
                </p>
              </div>
            </div>
            {/* on */}
            <Card bgColor="lightgray" textColor="black">
              <p className="bold">on</p>
            </Card>
            <div className={styles["grid-section-a"]}>
              <Image
                src={xmas1}
                alt="..."
                className={`img-border ${styles["image"]}`}
              />
              <div className="line-break">
                <div>
                  <p className="bold underline">Days of week / weekend</p>
                  <p>
                    <span className="bold">on</span> Sunday(s) / Monday(s), etc.
                  </p>
                  <p>
                    <span className="bold">on</span> the weekend / weekends (US)
                  </p>
                </div>
                <div>
                  <p className="bold underline">Months + Dates</p>
                  <p>
                    <span className="bold">on</span> April 25 / June 6, etc.
                  </p>
                </div>
                <div>
                  <p className="bold underline">Events</p>
                  <p>
                    <span className="bold">on</span> Christmas Day
                  </p>
                  <p>
                    <span className="bold">on</span> New Year's Day
                  </p>
                </div>
              </div>
              <div className="line-break">
                <div>
                  <p>
                    • Bye! I'll see you <span className="bold">on</span> Friday.
                  </p>
                  <p>
                    • What do you usually do <span className="bold">on</span>{" "}
                    Sundays?
                  </p>
                  <p>
                    • The concert is <span className="bold">on</span> November
                    22.
                  </p>
                  <p>
                    • The concert is <span className="bold">on</span> (the) 22
                    (of) November. (UK)
                  </p>
                </div>
                <div className="red-dashed-border">
                  <ExclamationIcon>
                    <p>
                      <span className="bold">at</span> the weekend / weekends
                      (UK)
                    </p>
                    <p>Use ordinal numbers for dates.</p>
                  </ExclamationIcon>
                </div>
              </div>
            </div>

            {/* in */}
            <Card bgColor="lightgray" textColor="black">
              <p className="bold">in</p>
            </Card>
            <div className={styles["grid-section-a"]}>
              <Image
                src={smallSwimmingPool}
                alt="..."
                className={`img-border ${styles["image"]}`}
              />
              <div className="line-break">
                <div>
                  <p className="bold underline">Months</p>
                  <p>
                    <span className="bold unerline">in</span> April / June, etc.
                  </p>
                </div>
                <div>
                  <p className="bold underline">Years</p>
                  <p>
                    <span className="bold unerline">in</span> 1998 / 2013, etc.
                  </p>
                </div>
                <div>
                  <p className="bold underline">Seasons</p>
                  <p>
                    <span className="bold unerline">in</span> summer / spring,
                    etc.
                  </p>
                </div>
              </div>
              <div className="line-break">
                <div>
                  <p>
                    • I'm going on vacation{" "}
                    <span className="bold unerline">in</span> October.
                  </p>
                  <p>
                    • Emma was born <span className="bold unerline">in</span>{" "}
                    1995.
                  </p>
                  <p>
                    • The park is beautiful{" "}
                    <span className="bold unerline">in</span> spring.
                  </p>
                </div>
                <div className="red-dashed-border">
                  <ExclamationIcon>
                    <p>Specific</p>
                  </ExclamationIcon>
                  <p>
                    <span className="bold unerline">in</span> <mark>the</mark>{" "}
                    spring of 1967... (specific)
                  </p>
                  <p>
                    <span className="bold unerline">in</span> <mark>the</mark>{" "}
                    summer of 2018...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BoardCard>

        {/* B */}
        <BoardCard label="B" bgColor="#EF4444" textColor="white">
          <div className="line-break">
            <div className="grid-2fr-8px">
              <div>
                <p className="bold">We say:</p>
                <p>
                  <span className="bold">at</span> night
                </p>
                <p>
                  <span className="bold">at</span> the end of the...
                </p>
                <p>- day</p>
                <p>- month</p>
                <p>- year</p>
                <p>
                  <span className="bold">at</span> the moment
                </p>
                <p>
                  <span className="bold">at</span> Christmas
                </p>
              </div>
              <div>
                <p>
                  • I can't sleep <span className="bold">at</span> night.
                </p>
                <p>
                  • Where will you be <span className="bold">at</span>{" "}
                  Christmas?
                </p>
                <p>
                  • I'm going on vacation <span className="bold">at</span> the
                  end of October.
                </p>
                <p>
                  • Are you busy <span className="bold">at</span> the moment?
                </p>
                <p>
                  • Are you coming <span className="bold">on</span> the weekend?
                </p>
              </div>
            </div>
            <div
              className="red-dashed-border margin-bottom"
              style={{ marginBottom: ".7rem" }}
            >
              <ExclamationIcon>
                <p className="italic">Exceptions</p>
              </ExclamationIcon>
              <p>
                - <span className="bold">on</span> Christmas <mark>Day</mark>
              </p>
              <p>
                - <span className="bold">at night</span>{" "}
                <span className="portuguese">
                  se refere ao fato de não mais ser dia como um todo, de uma
                  forma geral (de/à noite).
                </span>{" "}
              </p>

              <p>
                - <span className="bold">in the night</span>{" "}
                <span className="portuguese">
                  enfatiza a idéia de ser tarde, escuro e as pessoas estarem
                  dormindo (na noite). -{" "}
                  <span className="bold">in the night</span>{" "}
                </span>
                • I heard an owl hooting{" "}
                <span className="bold">in the night</span>.{" "}
                <span className="portuguese">
                  Eu ouvi um pio de coruja no meio da noite.
                </span>
              </p>

              <p>
                - <span className="bold">in the end</span> no fim das contas;
                finalmente
                <span className=""></span>
              </p>
            </div>
          </div>
        </BoardCard>

        {/* C */}
        <BoardCard label="C" bgColor="#EF4444" textColor="white">
          <div className="line-break">
            <div>
              <p className="bold">
                in the morning / in the afternoon / in the evening
              </p>
              <p>• I always feel good in the morning.</p>
              <p>• Do you often go out in the evening?</p>
            </div>
            <div>
              <p className="italic">but</p>
              <p className="bold">
                on Monday morning / on Tuesday afternoon / on Friday evening /
                on Saturday night, etc.
              </p>
              <p>• I'm meeting Jack on Monday morning.</p>
              <p>• Are you doing anything on Saturday night?</p>
            </div>
          </div>
        </BoardCard>

        {/* D */}
        <BoardCard label="D" bgColor="#EF4444" textColor="white">
          <div className="line-break">
            <p>
              We don't use <span className="bold">at</span> /{" "}
              <span className="bold">on</span> /{" "}
              <span className="bold">in</span> before:
            </p>
            <div className="grid-2fr-8px">
              <div>
                <p>
                  - <span className="bold">this</span> ... (this morning / this
                  week, etc.)
                </p>
                <p>
                  - <span className="bold">last</span> ... (last August / last
                  week, etc.)
                </p>
                <p>
                  - <span className="bold">next</span> ... (next Monday / next
                  week, etc.)
                </p>
                <p>
                  - <span className="bold">every</span> ... (every day / every
                  week, etc.)
                </p>
              </div>
              <div>
                <p>
                  • Are you going out <span className="bold">this evening</span>
                  ?
                </p>
                <p>
                  • We go on vacation <span className="bold">every summer</span>
                  . <span className="bold">Last summer</span> we went to
                  Salvador.
                </p>
                <p>
                  • I'm leaving <span className="bold">next Monday</span>.
                </p>
              </div>
            </div>
            <div style={{ marginBottom: ".4rem" }}>
              <ExclamationIcon>
                <p>Check the exercise on page 10. Continue on the next page</p>
              </ExclamationIcon>
            </div>
          </div>
        </BoardCard>

        {/* E */}
        <BoardCard label="E" bgColor="red" textColor="white">
          <div className="line-break">
            <p>
              <span className="bold">in five minutes</span> /{" "}
              <span className="bold">in a few days</span> /{" "}
              <span className="bold">in six weeks</span> /{" "}
              <span className="bold">in two years</span>, etc.
            </p>
            <Image
              src={inFiveMinutes}
              alt="Clock now->five minutes"
              className={`img-border ${styles["exercise-e-time"]}`}
            />
            <div>
              <p>
                • Hurry! The train leaves{" "}
                <span className="bold">in five minutes.</span>
              </p>
              <p>
                • Bye! I'll see you <span className="bold">in a few days</span>.
              </p>
              <p>
                • I'll talk to you <span className="bold">in three weeks</span>.
              </p>
            </div>
            <ExclamationIcon>
              <p>
                <span className="bold">
                  More specific. "in a few day's time
                </span>{" "}
                / in a year's time.
              </p>
            </ExclamationIcon>
            <p>
              • Presidential elections will be held{" "}
              <span className="bold">in ten days' time</span>.{" "}
              <span className="portuguese">
                As eleições presidenciais serão realizadas em dez dias.
              </span>
            </p>
          </div>
        </BoardCard>

        {/* Exercises */}
        <BoardCard label="Exercise" bgColor="lightgray" textColor="black">
          <div className="line-break">
            <FillInTheBlanks questions={fillInTheBlanks} />
          </div>
        </BoardCard>
      </div>
    </>
  );
}
