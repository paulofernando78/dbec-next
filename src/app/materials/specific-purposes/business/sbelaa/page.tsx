"use client"

import { useState, useEffect } from "react";
import { ContentCard } from "@/components/Cards/ContentCard";
import { Whiteboard } from "@/components/Whiteboard";
import { MainContent } from "@/types/contentCard";

export default function SpeakBusinessEnglishLikeAnAmerican() {
  const [contents, setContents] = useState<MainContent[] | null>(null);

  useEffect(() => {
    fetch("/assets/data/materials/specific-purposes/business/sbelaa/contents.json")
      .then((response) => {
        if (!response.ok) throw new Error("Error loading JSON");
        return response.json();
      })
      .then((data: { contents: MainContent[] }) => {
        setContents(data.contents); // Now this will work since we know 'contents' is an array of MainContent
      })
      .catch((error) => console.error(error));
  }, []);

  if (!contents) return <p>Loading...</p>;

  return (
    <>
      <Whiteboard
        title="Specific Purposes"
        subtitle="Business"
        descriptions={["Speak Business English Like an American"]}
      />
      <div>
        <ContentCard contents={contents} />
      </div>
    </>
  );
}
