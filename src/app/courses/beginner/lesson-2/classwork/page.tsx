"use client";
import React from "react";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
import TheAlphabet from "@/components/Lessons/Topic/TheAlphabet/page";
import { BoardCard } from "@/components/Cards/BoardCard";
import { Card } from "@/components/Cards/Card";
import { Ribbon } from "@/components/Ribbon";

export default function BeginnerLesson2() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Beginner"
        descriptions={["Lesson 2", "Classwork", "What's your name? (Cycle 1)"]}
      />
      <div className="line-break">
        <BoardCard label="Warm-up" bgColor="black" textColor="white">
          <p>...</p>
        </BoardCard>
        <BoardCard label="Introduction" bgColor="black" textColor="white">
          <p>...</p>
        </BoardCard>
        <BoardCard label="Presentation" bgColor="black" textColor="white">
          <Ribbon label="Meaning" bgColor="lightgray" textColor="black"/>
          <Ribbon label="Pronunciation" bgColor="lightgray" textColor="black"/>
          <Ribbon label="Form" bgColor="lightgray" textColor="black"/>
        </BoardCard>
        <BoardCard label="Pronunciation" bgColor="black" textColor="white">
          <p>...</p>
        </BoardCard>
        <BoardCard label="Practice" bgColor="black" textColor="white">
          <p>...</p>
        </BoardCard>

        <TheAlphabet />
      </div>
      <div className="line-break"></div>
    </>
  );
}
