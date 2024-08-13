import { Whiteboard } from "@/components/Whiteboard/Whiteboard";

export default function VocabularyGrammar() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Elementary (A2)"
        descriptions={["Lesson", "Classwork", "..."]}
      />
      <div className="line-break">
       <p>Coming soon!</p>
      </div>
    </>
  );
}
