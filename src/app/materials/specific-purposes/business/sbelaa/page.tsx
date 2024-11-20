"use client";

import { useEffect, useState } from "react";
import { ContentCard } from "@/components/Cards/ContentCard";
import { Whiteboard, MainContent } from "@/types/contentCard";

export default function SpeakBusinessEnglishLikeAnAmerican() {
  const [whiteboard, setWhiteboard] = useState<Whiteboard | null>(null);
  const [contents, setContents] = useState<MainContent[] | null>(null);

  useEffect(() => {
    fetch(
      "/assets/data/materials/specific-purposes/business/sbelaa/contents.json"
    )
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

  if (!whiteboard || !contents) return <p>Loading...</p>;

  return (
    <>
      <div>
        <ContentCard whiteboard={whiteboard} contents={contents} />
      </div>
    </>
  );
}
