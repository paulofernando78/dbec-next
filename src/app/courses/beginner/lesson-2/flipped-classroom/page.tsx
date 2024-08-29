"use client";
import { Whiteboard } from "@/components/Whiteboard";
import TheAlphabet from "@/components/Lessons/Topic/TheAlphabet/page";
import { NoteCard } from "@/components/Cards/NoteCard";
import Titles from "@/components/Lessons/Topic/Tiltes";
import MyYourHisHer from "@/components/Lessons/Topic/MyYourHisHer";
import { Exercises } from "@/components/Ribbons/Exercises";

export default function BeginnerLesson2FlippedClassroom() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subtitle="Beginner"
        descriptions={[
          "Lesson 2",
          "Flipped classroom",
          "What's your name? (Cycle 1)",
        ]}
      />
      <div className="line-break">
        <TheAlphabet />

        <Titles />
        <MyYourHisHer />
        <Exercises />
      </div>
    </>
  );
}
