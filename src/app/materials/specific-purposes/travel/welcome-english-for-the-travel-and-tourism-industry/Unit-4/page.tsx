import { AudioPlayer } from "@/components";
import { Radio } from "@/components/Molecules/ExerciseTemplates/Radio";
import { Whiteboard } from "@/components/Molecules/Whiteboard";

const radio = [
  {
    title: "Here's the first.",
    question: "1a The first guest wants to know about...",
    options: [
      { label: "a) room for himself.", isCorrect: false },
      { label: "b) a room for someone else.", isCorrect: true },
    ],
  },
  {
    question: "1b He is told that Room ... is free",
    options: [
      { label: "406", isCorrect: true },
      { label: "306", isCorrect: false },
    ],
  },
  {
    title: "Here's the second.",
    question:
      "2a The second guest wants to know how long it takes to get to the airport...",
    options: [
      { label: "a) by bus", isCorrect: true },
      { label: "b) by taxi", isCorrect: false },
    ],
  },
  {
    question:
      "2b She is told that she has to check in at least ... minutes before her flight.",
    options: [
      { label: "a) 16", isCorrect: false },
      { label: "b) 60", isCorrect: true },
      { label: "c) 6", isCorrect: false },
    ],
  },
  {
    title: "Here's the third.",
    question: "3a The third guest wants to know what time...",
    options: [
      { label: "a) breakfast service begins.", isCorrect: true },
      { label: "b) breakfast service finishes.", isCorrect: false },
    ],
  },
  {
    question:
      "3b He is told that breakfast is served from ... to ... on weekdays ...",
    options: [
      { label: "a) 7:30 to 10:30", isCorrect: false },
      { label: "b) 6:30 to 9:30", isCorrect: true },
    ],
  },
  {
    question: "3c ... and from ... to ... at weekends.",
    options: [
      { label: "a) 7:30 to 10:30", isCorrect: true },
      { label: "b) 6:30 to 9:30", isCorrect: false },
    ],
  },
];

export default function Unit4() {
  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Travel"
        descriptions={[
          "Welcome - English for the travel and industry (Cambridge)",
          "Unit 4 • Dealing with an enquiries",
        ]}
      />
      <div className="line-break">
        <p className="bold">Take a look at the exercise before listening.</p>
        <AudioPlayer audioSrc="/assets/audio/specific-purposes/travel/welcome-english-for-the-travel-and-industry/4-dealing-with-enquiries.mp3" />
        <p>
          <b>
            Lesson 4 • Dealing with inquiries. A Listen to three short
            conversations.
          </b>
        </p>
        <Radio questions={radio} />
        <p className="bold">
          Listen again and check the options which phrases in the speech ballons
          are used by the receptionist.
        </p>
      </div>
    </>
  );
}
