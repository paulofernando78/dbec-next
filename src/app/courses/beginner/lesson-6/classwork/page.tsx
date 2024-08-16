import { Whiteboard } from '@/components/Whiteboard/Whiteboard'
import { UnderConstruction } from '@/components/UnderConstruction'

export default function BeginnerLesson6Classwork() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Beginner"
        descriptions={["Lesson 6", "Classwork", "Review lessons 2-5", "+ Written and Oral Quiz"]}
      />
      <div className="line-break">
      <UnderConstruction />
      </div>
    </>
  )
}
