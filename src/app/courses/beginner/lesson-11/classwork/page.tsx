import { Whiteboard } from '@/components/Whiteboard/Whiteboard'

export default function BeginnerLessonXXXClasswork() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Beginner"
        descriptions={["Lesson 11", "Classwork", "Progress Check", "Lessons 7-10 + Written and Oral Quiz"]}
      />
      <div className="line-break">
        <p>Coming soon!</p>
      </div>
    </>
  )
}
