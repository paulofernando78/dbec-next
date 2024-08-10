"use client";
import React from "react";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import TheAlphabet from "@/components/Lessons/Topic/TheAlphabet/page";
import { Card } from "@/components/Cards/Card";
import { WarmUp } from "@/components/Cards/Celta/WarmUp";

export default function BeginnerLesson2() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Beginner"
        descriptions={["Lesson 2", "Classwork", "What's your name? (Cycle 1)"]}
      />
      <div className="line-break">
        <WarmUp>
          <p>xxx </p>
        </WarmUp>
        <TheAlphabet />
      </div>
      <div className="line-break"></div>
    </>
  );
}
