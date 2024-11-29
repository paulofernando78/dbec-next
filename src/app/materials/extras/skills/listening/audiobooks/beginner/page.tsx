"use client";
import { useEffect, useState } from "react";

import { ContentCard } from "@/components/Molecules/Cards/ContentCard";
import { MainContent, Whiteboard } from "@/components/Molecules/Cards/ContentCard/type";

export default function ExtrasSkillsListeningAudioBooksBeginner() {
  const [contentData, setContentData] = useState<{ whiteboard?: Whiteboard; contents: MainContent[] }>({
    whiteboard: undefined,
    contents: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const audiobboksBeginnerContents = "/assets/data/materials/extras/skills/listening/audiobooks/beginner/contents.json";

  useEffect(() => {
    fetch(audiobboksBeginnerContents)
      .then((response) => {
        if (!response.ok) throw new Error("Error loading JSON");
        return response.json();
      })
      .then((data: { whiteboard?: Whiteboard; contents: MainContent[] }) => {
        setContentData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading lesson data.</p>;

  return (
    <>
      <ContentCard contentData={contentData} />
    </>
  );
}
