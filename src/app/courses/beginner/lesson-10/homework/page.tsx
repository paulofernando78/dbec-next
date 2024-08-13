import { Whiteboard } from '@/components/Whiteboard/Whiteboard'

export default function BeginnerLessonXXXHomework() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Beginner"
        descriptions={["Lesson ...", "Homework", "..."]}
      />
      <div className="line-break">
        <p>Coming soon!</p>
      </div>
    </>
  )
}
