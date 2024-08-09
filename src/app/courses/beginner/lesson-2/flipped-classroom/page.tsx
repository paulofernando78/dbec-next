import React from 'react'
import { Whiteboard } from '@/components/Whiteboard/Whiteboard'

export default function BeginnerLesson1() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Beginner"
        descriptions={["Lesson 2", "Flipped Classroom", "What's your name? (Cycle 1)"]}
      />
      <div className="line-break">
      </div>
    </>
  )
}
