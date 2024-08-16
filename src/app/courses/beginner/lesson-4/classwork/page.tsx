import { Whiteboard } from '@/components/Whiteboard/Whiteboard'
import { UnderConstruction } from '@/components/UnderConstruction'

export default function BeginnerLesson4Classwork() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Beginner"
        descriptions={["Lesson 4", "Classwork", "Where are my keys? (Cycle 1)"]}
      />
      <div className="line-break">
      <UnderConstruction />
      </div>
    </>
  )
}
