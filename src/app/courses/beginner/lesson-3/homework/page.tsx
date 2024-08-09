import React from 'react'
import { Whiteboard } from '@/components/Whiteboard/Whiteboard'

export default function BeginnerLesson1() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Beginner"
        descriptions={["Lesson 2", "Homework", "What's your name? (Cycle 2)"]}
      />
      <div className="line-break">
      </div>
    </>
  )
}
