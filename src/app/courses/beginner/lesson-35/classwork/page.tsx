import { Whiteboard } from '@/components/Whiteboard/Whiteboard'

export default function BeginnerLessonXXXClasswork() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Beginner"
        descriptions={["Lesson ...", "Classwork", "..."]}
      />
      <div className="line-break">
        <p>Coming soon!</p>
      </div>
    </>
  )
}
