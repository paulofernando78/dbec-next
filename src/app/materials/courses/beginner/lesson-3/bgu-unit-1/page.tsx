import { Whiteboard } from "@/components/Molecules/Whiteboard/Whiteboard";
import { Dropdown } from "@/components/Molecules/ExerciseTemplates/Dropdown";

const dropdown = [
  {
    title: "Choose the correct form of be.",
    beforeOptions: "I",
    options: [
      { value: "'s", label: "'s", correctAnswer: false },
      { value: "'m", label: "'m", correctAnswer: true },
    ],
    afterOptions: "from a town in Minnesota called Farmington.",
  },
  {
    beforeOptions: "It",
    options: [
      { value: "am", label: "am", correctAnswer: false },
      { value: "'s", label: "'s", correctAnswer: true },
    ],
    afterOptions: "a small place with about 19,000 people.",
  },
  {
    beforeOptions: "The people in Farmington",
    options: [
      { value: "is", label: "is", correctAnswer: false },
      { value: "are", label: "are", correctAnswer: true },
    ],
    afterOptions: "very nice,",
  },
  {
    beforeOptions: "but the weather",
    options: [
      { value: "aren't", label: "aren't", correctAnswer: false },
      { value: "isn't", label: "isn't", correctAnswer: true },
    ],
    afterOptions: "very good in the winter.",
  },
  {
    beforeOptions: "My favorite sport",
    options: [
      { value: "are", label: "are", correctAnswer: false },
      { value: "is", label: "is", correctAnswer: true },
    ],
    afterOptions: "snowbording,",
  },
  {
    beforeOptions: "but I",
    options: [
      { value: "'m not", label: "'m not", correctAnswer: true },
      { value: "isn't", label: "isn't", correctAnswer: false },
    ],
    afterOptions: "very good at it.",
  },
  {
    beforeOptions: "My parents and I",
    options: [
      { value: "is", label: "is", correctAnswer: false },
      { value: "are", label: "are", correctAnswer: true },
    ],
    afterOptions: "very happy here in Farmington.",
  },
  {
    beforeOptions: "My older sister, Ashley,",
    options: [
      { value: "is", label: "is", correctAnswer: false },
      { value: "isn't", label: "isn't", correctAnswer: true },
    ],
    afterOptions: "at home.",
  },
  {
    beforeOptions: "She",
    options: [
      { value: "are", label: "are", correctAnswer: false },
      { value: "'s", label: "'s", correctAnswer: true },
    ],
    afterOptions: "a nurse in Minneapolis, the biggest city in Minnesota.",
  },
];

export default function BasicGrammarInUSeUnit1() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Beginner"
        descriptions={["Lesson 3", "Homework", "Basic Grammar in Use • Unit 1"]}
      />
      <div className="line-break">
        <Dropdown questions={dropdown} />
      </div>
    </>
  );
}
