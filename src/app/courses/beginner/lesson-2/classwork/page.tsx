"use client";
import React from "react";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import TheAlphabet from "@/components/Lessons/Topic/TheAlphabet/page";

export default function BeginnerLesson1() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Beginner"
        descriptions={["Lesson 2", "Classwork", "What's your name? (Cycle 1)"]}
      />
      <div className="line-break">
        
        <TheAlphabet />
      </div>
      <div className="line-break"></div>
    </>
  );
}
