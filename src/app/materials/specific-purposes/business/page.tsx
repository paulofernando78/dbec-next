"use client";

import { useEffect, useState } from "react";
import { ContentCard } from "@/components/Cards/ContentCard";
import {
  Whiteboard,
  MainContent,
} from "@/components/Cards/ContentCard/ContentCard";

export default function Business() {
  const [whiteboard, setWhiteboard] = useState<Whiteboard | null>(null);
  const [contents, setContents] = useState<MainContent[] | null>(null);

  useEffect(() => {
    fetch("/assets/data/materials/specific-purposes/business/business.json")
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
      <ContentCard whiteboard={whiteboard} contents={contents} />
    </>
  );
}
