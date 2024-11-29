"use client";

// Hook
import { useEffect, useState } from "react";

// Components
import { ContentCard } from "@/components/Molecules/Cards/ContentCard";
import { MainContent, Whiteboard } from "@/components/Molecules/Cards/ContentCard/type";


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
      {/* <ContentCard contents={contents} /> */}
    </>
  );
}
