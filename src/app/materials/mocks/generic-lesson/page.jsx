"use client";

import { useEffect, useState } from "react";
import { Whiteboard } from "@/components/Whiteboard";
import { Ribbon } from "@/components/Ribbons/Ribbon";
import {
  AudioPlayer,
  DictionaryCard,
  SwiperFraction,
  VideoPlayer,
} from "@/components";
import { GenericLessonTemplate } from "@/components/Templates/GenericLesson/Index";

export default function LessonData() {
  const [lessonData, setLessonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetch the JSON file
    fetch("/assets/data/materials/lessonData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch lesson data");
        }
        return response.json();
      })
      .then((data) => {
        setLessonData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading lesson data.</p>;

  return (
    <>
       <GenericLessonTemplate lessonData={lessonData} />
    </>
  );
}
