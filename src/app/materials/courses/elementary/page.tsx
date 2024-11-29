"use client";

// Hooks
import { useEffect, useState } from "react";

// Components
import { ContentCard } from "@/components/Molecules/Cards/ContentCard";
import {
  MainContent,
  Whiteboard,
} from "@/components/Molecules/Cards/ContentCard/type";

export default function Elementary() {
  const [contentData, setContentData] = useState<{
    whiteboard?: Whiteboard;
    contents: MainContent[];
  }>({
    whiteboard: undefined,
    contents: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const courseElementaryContents =
    "/assets/data/materials/courses/elementary/contents.json";

  useEffect(() => {
    fetch(courseElementaryContents)
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

  return <ContentCard contentData={contentData} />;
}
