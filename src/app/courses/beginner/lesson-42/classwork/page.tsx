import { Whiteboard } from '@/components/Whiteboard/Whiteboard'

export default function BeginnerLesson42Classwork() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Beginner"
        descriptions={["Lesson 42", "Classwork", "Review lessons 38-41", "+ Written and Oral Quiz"]}
      />
      <div className="line-break">
        <p>Coming soon!</p>
      </div>
    </>
  )
}
