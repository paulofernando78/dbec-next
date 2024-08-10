import React from 'react'
import { Whiteboard } from '@/components/Whiteboard/Whiteboard'

export default function BeginnerLesson3() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Beginner"
        descriptions={["Lesson 3", "Homework", "What's your name? (Cycle 2)"]}
      />
      <div className="line-break">
      <p>Coming soon!</p>
      </div>
    </>
  )
}
