"use client";
import { useEffect, useState } from "react";
import { ContentCard } from "@/components/Cards/ContentCard";
import {
  Whiteboard,
  MainContent,
} from "@/components/Cards/ContentCard/ContentCard";
import { ScrollToTop } from "@/components";

export default function Beginner() {
  const [whiteboard, setWhiteboard] = useState<Whiteboard | null>(null);
  const [contents, setContents] = useState<MainContent[]>([]);

  useEffect(() => {
    fetch("/assets/data/materials/courses/beginner/contents.json")
      .then((response) => {
        if (!response.ok) throw new Error("Error loading JSON");
        return response.json();
      })
      .then((data: { whiteboard: Whiteboard; contents: MainContent[] }) => {
        setWhiteboard(data.whiteboard);
        setContents(data.contents);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="line-break">
        {/* <div className="line-break">
          <p className="bold">Jump to:</p>
          <div>
            <p>Lesson 1 - 6 + Written and Oral Quiz</p>
            <p>Lesson 7 - 11 + Written and Oral Quiz</p>
            <p>Lesson 12 - 16 + Written and Oral Quiz</p>
            <p>Lesson 17 - 21 + Written and Oral Quiz</p>
            <p>Lessons 2-22 + Written Test</p>
            <hr className="margin-block" />
            <p>Lessons 23 - 27 + Written and Oral Quiz</p>
            <p>Lessons 28 - 32 + Written and Oral Quiz</p>
            <p>Lessons 33 - 37 + Written and Oral Quiz</p>
            <p>Lessons 38 - 42 + Written and Oral Quiz</p>
            <p>Lesson 43 - Written Test</p>
          </div>
        </div> */}
        {whiteboard && contents.length > 0 && (
          <ContentCard whiteboard={whiteboard} contents={contents} />
        )}
        <ScrollToTop />
      </div>
    </>
  );
}
