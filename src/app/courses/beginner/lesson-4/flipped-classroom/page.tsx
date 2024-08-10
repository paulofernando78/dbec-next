import React from 'react'
import { Whiteboard } from '@/components/Whiteboard/Whiteboard'

export default function BeginnerLesson1() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Beginner"
        descriptions={["Lesson 4", "Flipped Classroom", "..."]}
      />
      <div className="line-break">
      </div>
    </>
  )
}
