import { Whiteboard } from '@/components/Whiteboard/Whiteboard'

export default function BeginnerLesson4FlippedClassroom() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Beginner"
        descriptions={["Lesson 4", "Flipped classroom", "Where are my keys? (Cycle 1)"]}
      />
      <div className="line-break">
        <p>Coming soon!</p>
      </div>
    </>
  )
}
