"use client";
import { Whiteboard } from "@/components/Whiteboard/Whiteboard";
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
        <NoteCard>
          <p>
            Z in British English is pronounced{" "}
            <span className="phonetics">/zed/</span>
          </p>
        </NoteCard>
        <Titles />
        <MyYourHisHer />
        <Exercises />
      </div>
    </>
  );
}
