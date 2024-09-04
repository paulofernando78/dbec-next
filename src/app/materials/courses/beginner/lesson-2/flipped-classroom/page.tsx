"use client";
import { Whiteboard } from "@/components/Whiteboard";
import TheAlphabet from "@/components/Lessons/Topics/TheAlphabet/page";
import { NoteCard } from "@/components/Cards/NoteCard";
import Titles from "@/components/Lessons/Topics/Tiltes";
import MyYourHisHer from "@/components/Lessons/Topics/MyYourHisHer";
import { Exercises } from "@/components/Ribbons/Exercises";

export default function BeginnerLesson2FlippedClassroom() {
  return (
    <>
      <Whiteboard
        title="Courses"
        subTitle="Beginner"
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
